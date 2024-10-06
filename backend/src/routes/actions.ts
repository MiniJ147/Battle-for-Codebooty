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

export default router;
