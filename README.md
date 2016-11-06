# react-library-boilerplate

[![Build Status][build-image]][build-url]

[![peerDependency Status][peer-dep-image]][peer-dep-url]
[![devDependency Status][dev-dep-image]][dev-dep-url]

[![MIT][mit-image]][mit-url]
![npm][npm-version-image]

> Starter project for creating libraries

### Demo

## Getting Started ##

#### Installation
From the root of your project.
```sh
npm install library --save
```

## Usage
Implementation of component. See [available options](#options) below.
```js
import React, { Component } from 'react';
import { render } from 'react-dom';

render(<Application />, document.getElementById('application'));
```

<a name="options"></a>
#### Options
* **[`foo`](#foo)**

<a name="foo"></a>
##### foo ~ required
The `foo` of the component - used for setting up foo
```js
<Component foo="bar" />
```

## Styling
#### Installation
Import the main SCSS file in to your application SCSS files
```scss
@import "node_modules/component/src/component/scss/styles.scss";
```

There are a few variables set to `!default` that can be overriden. If you need to change it more just override the actual styles.

**Any overriden variables needs to go above the `@import` statement to take effect**
```scss
//-- Global UI
$component-width
```

If you don't care to override variables and just want to override actual styles you may choose to import the minified compiled version of the css instead
```scss
@import "node_modules/component/dist/styles.css";
```

## Tests ##
```
npm test
```

[build-image]: https://travis-ci.org/JFusco/react-predictive-input.svg?branch=master
[build-url]: https://travis-ci.org/JFusco/react-predictive-input
[mit-image]: https://img.shields.io/npm/l/react-predictive-input.svg?style=flat-square
[mit-url]: https://github.com/JFusco/react-predictive-input/blob/master/LICENSE
[npm-version-image]: https://img.shields.io/npm/v/npm.svg?maxAge=2592000
[dev-dep-image]: https://david-dm.org/JFusco/react-predictive-input/dev-status.svg
[dev-dep-url]: https://david-dm.org/JFusco/react-predictive-input?type=dev
[peer-dep-image]: https://david-dm.org/JFusco/react-predictive-input/peer-status.svg
[peer-dep-url]: https://david-dm.org/JFusco/react-predictive-input?type=peer
