"""LeetCode 557: reverse each word while preserving spaces."""


def reverse_words(s):
    return " ".join(word[::-1] for word in s.split(" "))
