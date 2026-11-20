def _hash_string(key, capacity):
    value = 0
    for char in key:
        value = (value * 31 + ord(char)) % (2 ** 32)
    return value % capacity

class ChainedHashMap:
    def __init__(self, capacity=8):
        if capacity < 1:
            raise ValueError("capacity must be positive")
        self.buckets = [[] for _ in range(capacity)]

    def set(self, key, value):
        if not isinstance(key, str):
            raise TypeError("this teaching map uses string keys")
        bucket = self.buckets[_hash_string(key, len(self.buckets))]
        for pair in bucket:
            if pair[0] == key:
                pair[1] = value
                return
        bucket.append([key, value])

    def get(self, key):
        bucket = self.buckets[_hash_string(key, len(self.buckets))]
        for stored_key, value in bucket:
            if stored_key == key:
                return value
        return None

if __name__ == "__main__":
    table = ChainedHashMap(2); table.set("a", 1); table.set("c", 3)
    print(table.buckets, table.get("c"))
