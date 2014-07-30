var should = require('chai').should(),
  country = require('../');

var taiwan = {
  "name": "Taiwan",
  "nativeName": "臺灣",
  "tld": [
    ".tw"
  ],
  "cca2": "TW",
  "ccn3": "158",
  "cca3": "TWN",
  "currency": [
    "TWD"
  ],
  "callingCode": [
    "886"
  ],
  "capital": "Taipei",
  "altSpellings": [
    "TW",
    "Táiwān",
    "Republic of China",
    "中華民國",
    "Zhōnghuá Mínguó"
  ],
  "relevance": "0",
  "region": "Asia",
  "subregion": "Eastern Asia",
  "language": [
    "Standard Chinese"
  ],
  "languageCodes": [
    "zh"
  ],
  "translations": {
    "de": "Taiwan",
    "es": "Taiwán",
    "fr": "Taïwan",
    "it": "Taiwan",
    "ja": "台湾（台湾省/中華民国）",
    "nl": "Taiwan",
    "hr": "Tajvan"
  },
  "latlng": [
    23.5,
    121
  ],
  "demonym": "Taiwanese",
  "borders": [],
  "area": 36193
};

describe('country-yp', function(){
  it('findByName', function(){
    country.findByName('Taiwan').should.eql(taiwan)
    should.not.exist(country.findByName('Unknown'));
  });

  it('findByAlpha2Code', function(){
    country.findByAlpha2Code('TW').should.eql(taiwan);
    country.findByAlpha2Code('tw').should.eql(taiwan);
    should.not.exist(country.findByAlpha2Code('AA'));
  });

  it('findByAlpha3Code', function(){
    country.findByAlpha3Code('TWN').should.eql(taiwan);
    country.findByAlpha3Code('twn').should.eql(taiwan);
    should.not.exist(country.findByAlpha3Code('AAA'));
  });

  it('findByNumericCode', function(){
    country.findByNumericCode('158').should.eql(taiwan);
    country.findByNumericCode(158).should.eql(taiwan);
    should.not.exist(country.findByNumericCode('000'));
  });

  it('findByNativeName', function(){
    country.findByNativeName('臺灣').should.eql(taiwan);
    should.not.exist(country.findByNativeName('foobar'));
  });

  it('findByCode', function(){
    country.findByCode(158).should.eql(taiwan);
    country.findByCode('158').should.eql(taiwan);
    country.findByCode('TW').should.eql(taiwan);
    country.findByCode('TWN').should.eql(taiwan);
  });

  it('alpha2Code', function(){
    country.alpha2Code(taiwan.name).should.eql(taiwan.cca2);
    country.code(taiwan.name).should.eql(taiwan.cca2);
  });

  it('alpha3Code', function(){
    country.alpha3Code(taiwan.name).should.eql(taiwan.cca3);
  });

  it('numericCode', function(){
    country.numericCode(taiwan.name).should.eql(taiwan.ccn3);
    country.numCode(taiwan.name).should.eql(taiwan.ccn3);
  });

  it('name', function(){
    country.name(taiwan.cca2).should.eql(taiwan.name);
    country.name(taiwan.cca3).should.eql(taiwan.name);
    country.name(taiwan.ccn3).should.eql(taiwan.name);
  });
});