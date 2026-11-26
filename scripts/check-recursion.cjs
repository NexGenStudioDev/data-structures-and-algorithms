const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const examples = path.join(__dirname, '..', 'Ch-16-Recursion', 'leetcode');

function loadExample(file, expression) {
    const source = fs.readFileSync(path.join(examples, file), 'utf8');
    return vm.runInNewContext(source + '\n' + expression);
}

const reverseString = loadExample('Reverse String/doc/code/index.js', 'reverseString');
for (const characters of ['a', 'abc', 'abcd', 'ab'.repeat(50_000)]) {
    const input = [...characters];
    assert.equal(reverseString(input), undefined);
    assert.equal(input.join(''), [...characters].reverse().join(''));
}

const sum = loadExample('Sum of First N Numbers/code/index.js', 'new Solution()');
for (const n of [1, 2, 5, 9_999, 10_000]) {
    assert.equal(sum.NnumbersSum(n), n * (n + 1) / 2);
}
