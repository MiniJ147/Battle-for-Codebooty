import express from "express";
const router = express.Router();
import assert from "assert";

// Test cannon function, takes code sample and line number, and replaces characters with dots ('.')
export function cannon(code_sample: string, lineNumber: number): string {
    if (!code_sample || code_sample.length === 0) {
        return `Code is empty`;
    }

    code_sample = code_sample.trim();

    const lines = code_sample.split("\n");
    
    if (lineNumber < 0 || lineNumber >= lines.length) {
        return `Invalid line number ${lineNumber} and only has ${lines.length} lines`;
    }

    const endLine = Math.max(0, lineNumber - 1);
    for (let i = lineNumber; i >= endLine; i--) {
        const lineLength = lines[i].length;
        const dots = '.'.repeat(lineLength);
        lines[i] = dots;
    }

    return lines.join("\n");
}


// Test case 1: Normal multi-line string with lineNumber = 2
let code_sample = `
function test() {
    console.log("Test");
    return 0;
}
`;
let result = cannon(code_sample, 2);
let expected = `function test() {
........................
.............
}`;
assert.strictEqual(result, expected, "Test case 1 failed");

// Test case 2: Single line input with valid lineNumber = 0
code_sample = `console.log("Hello World!");`;
result = cannon(code_sample, 0);
expected = `............................`;
assert.strictEqual(result, expected, "Test case 2 failed");

// Test case 3: Empty string input
code_sample = ``;
result = cannon(code_sample, 0);
expected = `Code is empty`;
assert.strictEqual(result, expected, "Test case 3 failed");

// Test case 4: Invalid line number, negative value
code_sample = `
let x = 10;
let y = 20;
`;
result = cannon(code_sample, -1);
expected = `Invalid line number -1 and only has 2 lines`;
assert.strictEqual(result, expected, "Test case 4 failed");

export default router;
