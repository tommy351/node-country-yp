var data = require('../data/dist/countries-unescaped.json');

var index = {
  name: {},
  cca2: {},
  ccn3: {},
  cca3: {},
  nativeName: {}
};

var nameIndex = {},
  cca2Index = {},
  ccn3Index = {},
  cca3Index = {},
  nativeNameIndex = {};

for (var i = 0, len = data.length; i < len; i++){
  var country = data[i];

  nameIndex[country.name] = i;
  cca2Index[country.cca2] = i;
  ccn3Index[country.ccn3] = i;
  cca3Index[country.cca3] = i;
  nativeNameIndex[country.nativeName] = i;
}

var findByName = exports.findByName = function(name){
  return data[nameIndex[name]];
};

var findByAlpha2Code = exports.findByAlpha2Code = function(code){
  return data[cca2Index[code.toUpperCase()]];
};

var findByAlpha3Code = exports.findByAlpha3Code = function(code){
  return data[cca3Index[code.toUpperCase()]];
};

var formatNumericCode = function(code){
  if (typeof code !== 'number') code = parseInt(code, 10);

  var str = code + '';

  while (str.length < 3){
    str = '0' + str;
  }

  return str;
};

var findByNumericCode = exports.findByNumericCode = function(code){
  return data[ccn3Index[formatNumericCode(code)]];
};

var findByNativeName = exports.findByNativeName = function(name){
  return data[nativeNameIndex[name]];
};

var findByCode = exports.findByCode = function(code){
  if (typeof code === 'number'){
    return findByNumericCode(code);
  }

  switch (code.length){
    case 2:
      return findByAlpha2Code(code);
    case 3:
      return /\D/.test(code) ? findByAlpha3Code(code) : findByNumericCode(code);
  }
};

exports.alpha2Code = function(name){
  var country = findByName(name);
  return country ? country.cca2 : null;
};

exports.code = exports.alpha2Code;

exports.alpha3Code = function(name){
  var country = findByName(name);
  return country ? country.cca3 : null;
};

exports.numericCode = function(name){
  var country = findByName(name);
  return country ? country.ccn3 : null;
};

exports.numCode = exports.numericCode;

exports.name = function(code){
  var country = findByCode(code);
  return country ? country.name : null;
};