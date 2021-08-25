# Deprecation notice ⚠️
This repo was renamed and moved to [osskit](https://github.com/osskit/eslint-config)

# eslint-config-noamokman

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) used by noamokman.

## Install

```
$ npm install --save-dev eslint-config-noamokman
```

## Plugins

This config uses several plugins:

```
$ npm install --save-dev eslint-plugin-import eslint-plugin-unicorn @typescript-eslint/eslint-plugin
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

This package exposes additional configs.

#### Test [`noamokman/test`](test.json)

Use this for your jest tests

```json
{
  "extends": "noamokman/test"
}
```

Install the plugin:

```
$ npm install --save-dev eslint-plugin-jest
```

#### React [`noamokman/react`](react.json)

```json
{
  "extends": "noamokman/react"
}
```

Install the plugin:

```
$ npm install --save-dev eslint-plugin-react
```

#### React Test [`noamokman/react-test`](react-test.json)

Use this for your react jest tests

```json
{
  "extends": "noamokman/react-test"
}
```

Install the plugins:

```
$ npm install --save-dev eslint-plugin-jest eslint-plugin-react
```

#### React Native [`noamokman/react-native`](react-native.json)

```json
{
  "extends": "noamokman/react-native"
}
```

Install the plugins:

```
$ npm install --save-dev eslint-plugin-react eslint-plugin-react-native
```

#### React Native Test [`noamokman/react-native-test`](react-native-test.json)

Use this for your react native jest tests

```json
{
  "extends": "noamokman/react-native-test"
}
```

Install the plugins:

```
$ npm install --save-dev eslint-plugin-jest eslint-plugin-react eslint-plugin-react-native
```

## License

[MIT](LICENSE) © [Noam Okman](https://github.com/noamokman)
