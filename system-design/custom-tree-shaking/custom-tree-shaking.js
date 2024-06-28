// custom tree shaking to remove dead code from the bundle

const fs = require('fs');

const code = fs.readFileSync('./dist/bundle.js', 'utf8');

const deadCode = new Set();

const findDeadCode = (code) => {
  const lines = code.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('export')) {
      const fnName = line.split(' ')[2].split('(')[0];
      if (!code.includes(fnName)) {
        deadCode.add(fnName);
      }
    }
  }

  return deadCode;
};

const removeDeadCode = (code, deadCode) => {
  const lines = code.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (deadCode.has(line.split(' ')[1])) {
      lines.splice(i, 1);
    }
  }

  return lines.join('\n');
};

const deadCodeSet = findDeadCode(code);
const newCode = removeDeadCode(code, deadCodeSet);

fs.writeFileSync('./dist/bundle.js', newCode);

console.log(deadCodeSet);
console.log(newCode);
