const assert = require('node:assert/strict');
const { calcFare } = require('./ai-dev.js');

// ทดสอบค่าโดยสารกรณีต่าง ๆ
const testCases = [
	{ distance: 1, expected: 10 },
	{ distance: 2, expected: 10 },
	{ distance: 2.1, expected: 12 },
	{ distance: 3.2, expected: 14 },
	{ distance: 0, expected: 0 },
	{ distance: -1, expected: 0 },
	{ distance: '2', expected: 0 },
	{ distance: NaN, expected: 0 },
];

for (const { distance, expected } of testCases) {
	assert.strictEqual(calcFare(distance), expected);
}

console.log('All calcFare tests passed');
