const requireCamel = require('../index.js')
const path = require('path')
const pathToFilJson =  path.resolve( __dirname, '..', 'testfiles')

test('Verifica se importou os arquivos certos', () => {
    const required = requireCamel(pathToFilJson)
    expect(
        required
    ).toEqual({"testToCamelCase": {"testing": "true"}});
  });