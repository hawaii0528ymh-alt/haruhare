const { readFileSync } = require('node:fs');

const html = readFileSync('index.html', 'utf8');
const required = ['<!doctype html>', '<main>', 'id="copyButton"', 'src/main.js'];
const missing = required.filter((text) => !html.includes(text));

if (missing.length > 0) {
  console.error(`Missing expected HTML fragments: ${missing.join(', ')}`);
  process.exit(1);
}
