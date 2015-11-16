# eslint-config-noamokman [![Build Status](https://travis-ci.org/noamokman/eslint-config-noamokman.svg)](https://travis-ci.org/noamokman/eslint-config-noamokman)

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) used by noamokman.


## Install

```
$ npm install --save-dev eslint-config-noamokman
```

You'll also need Babel's ESLint [parser](https://github.com/babel/babel-eslint)

```
$ npm install --save-dev babel-eslint
```

## Usage

Add some ESLint config to your `package.json`:

```json
{
	"name": "my-awesome-project",
	"eslintConfig": {
		"extends": "noamokman"
	}
}
```

Or to `.eslintrc`:

```json
{
	"extends": "noamokman"
}
```

This package also exposes [`noamokman/test`](test.json) for testing:

```json
{
	"extends": "noamokman/test"
}
```

## License

[MIT](LICENSE) © [Noam Okman](https://github.com/noamokman)
