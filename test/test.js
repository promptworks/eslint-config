const fs = require('fs');
const assert = require('assert');
const { CLIEngine } = require('eslint');

const CONFIG_FILE = 'test/eslintrc.js';
const FIXTURE = 'test/poorly-formatted.js';
const SNAPSHOT = 'test/poorly-formatted.snap';

const cli = new CLIEngine({
  useEslintrc: false,
  configFile: CONFIG_FILE
});

const actual = cli.executeOnFiles([FIXTURE]);

if (process.argv.includes('-u')) {
  fs.writeFileSync(SNAPSHOT, JSON.stringify(actual));
  console.log(`Generated ${SNAPSHOT}`);
  process.exit(0);
}

const expected = JSON.parse(fs.readFileSync(SNAPSHOT).toString());

try {
  assert.deepEqual(actual, expected);
  console.log('PASS');
  process.exit(0);
} catch (error) {
  console.warn('FAIL');
  process.exit(1);
}
