# require-camelcase

require all files in folder and export a object with camel case keys.

## Usage

Imagine that you have a folder structure like this
```bash
	helpers
	---- parse-json.js
	---- api-erros.js
	---- validate.js
```

```javascript
const requiredFiles = require('require-camelcase')(__dirname)

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
 requireFiles( __dirname || path )
```

## Notes
Obviously because it is a module that exposes methods, functions, objects necessary for its application, it does so synchronously.
