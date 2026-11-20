def string_hash(key, bucket_count):
    if not isinstance(key, str) or bucket_count < 1:
        raise ValueError("expected a string key and positive bucket count")
    value = 0
    for char in key:
        value = (value * 31 + ord(char)) % (2 ** 32)
    return value % bucket_count

if __name__ == "__main__":
    print(string_hash("cat", 8))
