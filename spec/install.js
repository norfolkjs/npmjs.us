var assert = require('chai').assert;

describe('npmjs.us installer', function () {
  var fs = require('fs');
  var path = require('path');
  var npmrcFile = path.resolve(require('home-dir').directory, '.npmrc');

  it('should write the registry URL into ~/.npmrc', function () {
    var npmrc = fs.readFileSync(npmrcFile).toString();

    assert.match(npmrc, /npmjs.us/);
  });
});
