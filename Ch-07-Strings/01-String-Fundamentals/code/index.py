from collections import Counter
import unicodedata

def character_counts(text):
    return Counter(text)

def is_palindrome(text):
    chars = [ch.casefold() for ch in text if unicodedata.category(ch)[0] in {"L", "N"}]
    return chars == chars[::-1]

if __name__ == "__main__":
    print(character_counts("banana"))
    print(is_palindrome("A man, a plan, a canal: Panama"))  # True
