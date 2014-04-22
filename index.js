var fs = require('fs');
var path = require('path');
var npmrcFile = path.resolve(require('home-dir').directory, '.npmrc');
var registryEntry = 'registry = https://registry.npmjs.us/public';

try {
  fs.appendFileSync(npmrcFile, registryEntry);
}
catch (e) {
  throw new Error('Sorry! I was unable to add the npmjs.us registry to your .npmrc; ' + e.message);
}
