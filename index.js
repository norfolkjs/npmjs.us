var fs = require('fs');
var path = require('path');
var npmrcPath = path.resolve(require('home-dir').directory, '.npmrc');
var registryEntry = [
  '',
  '; npmjs.us registry directive added automatically by the npmjs.us module',
  'registry = https://registry.npmjs.us/public',
  ''
].join('\n');
var npmrcFile;

try {
  npmrcFile = fs.readFileSync(npmrcPath).toString();
}
catch (e) {
  // file doesn't exist; that's fine, we're about to create it anyway
}
try {
  if (!/npmjs.us registry directive/.test(npmrcFile)) {
    fs.appendFileSync(npmrcPath, registryEntry);
  }
}
catch (e) {
  throw new Error('Sorry! I was unable to add the npmjs.us registry to your ~/.npmrc; ' + e.message);
}
