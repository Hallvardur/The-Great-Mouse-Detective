var expect = require('chai').expect;
//var chai = require('chai');
//var expect = chai.expect;

expect(true).to.be.true;

function titleCase () {
  return title[0].toUpperCase() + title.substring();
}

expect(titleCase('the great mouse detective')).to.be.a('string');
expect(titleCase('a')).to.equal('A');
expect(titleCase('vertigo')).to.equal('Vertigo');
expect(titleCase('the great mouse detective')).to.equal('The Great Mouse Detective');
