# require-camelcase

require all files in folder and export a object with camel case keys.

- no dependency

## Usage

Imagine that you have a folder structure like this

-- helpers (folder)
---- parse-json.js
---- api-erros.js
---- validate.js

```javascript
const requiredFiles = require('require-camelcase')()

/*
requiredFiles = {
	parseJson: [Function parseJson],
	apiErros: { .... },
	validate: [Function validade]
}
*/
```

### require files function 

```javascript
/**
 * generates object with all files in folder
 * @function
 * @param {string} dir - path of files default is __dirname
 */
 requireFiles( dir )
```

## Notes
Obviously because it is a module that exposes methods, functions, objects necessary for its application, it does so synchronously.