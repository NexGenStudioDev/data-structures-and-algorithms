"""LeetCode 2129: capitalize title words longer than two characters."""


def capitalize_title(title):
    words = title.split(" ")
    return " ".join(word.lower() if len(word) <= 2 else word[:1].upper() + word[1:].lower() for word in words)
