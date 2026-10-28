# Sieve of Eratosthenes - O(N log log N)

def sieve(n: int) -> list[int]:
    if n < 2:
        return []
    is_prime = [True] * (n + 1)
    is_prime[0] = is_prime[1] = False
    
    p = 2
    while p * p <= n:
        if is_prime[p]:
            for i in range(p * p, n + 1, p):
                is_prime[i] = False
        p += 1
        
    return [i for i in range(2, n + 1) if is_prime[i]]

if __name__ == "__main__":
    print("Primes up to 50:", sieve(50))
