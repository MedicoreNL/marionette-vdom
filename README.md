# marionette-vdom
[![Build Status](https://travis-ci.org/tiagorg/marionette-vdom.svg?branch=master)](https://travis-ci.org/tiagorg/marionette-vdom) [![Coverage Status](https://coveralls.io/repos/tiagorg/marionette-vdom/badge.svg)](https://coveralls.io/r/tiagorg/marionette-vdom) [![npm version](https://badge.fury.io/js/marionette-vdom.svg)](http://badge.fury.io/js/marionette-vdom) [![Davis Dependency status](https://david-dm.org/tiagorg/marionette-vdom.svg)](https://david-dm.org/tiagorg/marionette-vdom)

A ```Marionette.ItemView``` and ```Marionette.CompositeView``` implementation with [virtual-dom](https://github.com/Matt-Esch/virtual-dom).

## Usage

This module exposes ```ItemView``` as the VDOM implementation for ```Marionette.ItemView``` and ```CompositeView``` for ```Marionette.CompositeView```:

```javascript
var VDOMItemView = require('marionette-vdom').ItemView;
var VDOMCompositeView = require('marionette-vdom').CompositeView;
```

## How tos

To install:

```bash
npm install
```

To run the demo app:

```bash
npm run demo
open http://127.0.0.1:9966/demo/demo.html
```

To run the perf test:

```bash
npm run perf
open http://127.0.0.1:9966/perf/perf.html
```

To run the unit tests:

```bash
npm test
```

Make sure to check out the [change log](changelog.md).

## Browser support

IE 9 on
