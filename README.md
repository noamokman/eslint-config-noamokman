# eslint-config-noamokman [![Build Status](https://travis-ci.org/noamokman/eslint-config-noamokman.svg)](https://travis-ci.org/noamokman/eslint-config-noamokman)

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) used by noamokman.


## Install

```
$ npm install --save-dev eslint-config-noamokman
```

## Usage

Create an `.eslintrc` file:

```json
{
	"extends": "noamokman"
}
```

Or add the ESLint config to your `package.json`:

```json
{
	"name": "my-awesome-project",
	"eslintConfig": {
		"extends": "noamokman"
	}
}
```

### Additional Configs

This package exposes addtional configs.

#### Test [`noamokman/test`](test.json)

Use this for your mocha tests

```json
{
	"extends": "noamokman/test"
}
```

#### React [`noamokman/react`](react.json)

```json
{
	"extends": "noamokman/react"
}
```

To use the react config you will need to install a [plugin](https://github.com/yannickcr/eslint-plugin-react)
```
$ npm install --save-dev eslint-plugin-react
```

## License

[MIT](LICENSE) © [Noam Okman](https://github.com/noamokman)
