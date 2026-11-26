"""Check chapter totals and local Markdown destinations."""
import re
import subprocess
from pathlib import Path
from urllib.parse import unquote

ROOT = Path(__file__).resolve().parents[1]
TRACKERS = ("Abhishek tracker.md", "Akanksha tracker.md")
LINK = re.compile(r"\]\((<[^>]+>|(?:[^()\s]|\([^()]*\))+)\)")
IMAGE = re.compile(r'<img\b[^>]*\bsrc=["\']([^"\']+)["\']', re.I)
ROW = re.compile(r"^\| .* \| (?:Completed|To Do) \|$", re.M)
FENCE = re.compile(r"^ {0,3}(?:`{3,}|~{3,}).*?^ {0,3}(?:`{3,}|~{3,})[ \t]*$", re.M | re.S)
errors = []


def check_link(path, target):
    target = target.strip("<>")
    if re.match(r"^(?:[a-z][a-z0-9+.-]*:|/)", target, re.I):
        return
    relative, _, anchor = target.partition("#")
    destination = path.parent / unquote(relative) if relative else path
    if not destination.exists():
        errors.append(f"{path.relative_to(ROOT)}: missing target {target}")
    elif anchor and destination.suffix.lower() == ".md" and path == ROOT / "README.md":
        headings = re.findall(r"^#{1,6} (.+)$", destination.read_text(), re.M)
        slugs = {
            re.sub(r"[^\w\-\uFE0F ]", "", heading.lower()).replace(" ", "-")
            for heading in headings
        }
        if unquote(anchor) not in slugs:
            errors.append(f"{path.relative_to(ROOT)}: missing heading {target}")


for name in subprocess.check_output(["git", "ls-files", "-z"], cwd=ROOT).decode().split("\0"):
    path = ROOT / name
    if path.suffix.lower() == ".md":
        content = FENCE.sub("", path.read_text(encoding="utf-8"))
        for target in LINK.findall(content) + IMAGE.findall(content):
            check_link(path, target)

for name in TRACKERS:
    content = (ROOT / name).read_text(encoding="utf-8")
    overview = dict(re.findall(r"^\| (\d{2}) \| .* \| (\d+) \|$", content, re.M))
    chapters = re.split(r"^### Chapter (\d{2})\b", content, flags=re.M)
    actual = dict.fromkeys(overview, "0")
    for chapter, body in zip(chapters[1::2], chapters[2::2]):
        actual[chapter] = str(len(ROW.findall(body)))
    if overview != actual:
        errors.append(f"{name}: chapter overview does not match the question rows")

if errors:
    raise SystemExit("\n".join(errors))
