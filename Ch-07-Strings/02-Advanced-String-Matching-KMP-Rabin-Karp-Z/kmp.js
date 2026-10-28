// Knuth-Morris-Pratt (KMP) Pattern Searching in O(N + M)

function buildLPS(pattern) {
    const lps = new Array(pattern.length).fill(0);
    let len = 0, i = 1;

    while (i < pattern.length) {
        if (pattern[i] === pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len !== 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    return lps;
}

function kmpSearch(text, pattern) {
    if (!pattern.length) return 0;
    const lps = buildLPS(pattern);
    const indices = [];
    let i = 0, j = 0;

    while (i < text.length) {
        if (text[i] === pattern[j]) {
            i++;
            j++;
        }
        if (j === pattern.length) {
            indices.push(i - j);
            j = lps[j - 1];
        } else if (i < text.length && text[i] !== pattern[j]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }
    return indices;
}

console.log("KMP Matches at:", kmpSearch("ababcababaad", "ababa")); // Output: [5]
