# Computus

[![CircleCI](https://img.shields.io/circleci/build/github/rhnorskov/computus)](https://circleci.com/gh/rhnorskov/computus)
[![Downloads](https://img.shields.io/npm/dw/computus)](https://npmjs.com/computus)

## Install

```
npm install computus
```

```
yarn install computus
```

## Usage

CommonJS

```
const computus = require("computus");

const gregorianEaster = computus.gregorian(2020);
const julianEaster = computus.julian(2020);
```

ECMAScript Module

```
import { gregorian, julian } from "computus";

const gregorianEaster = gregorian(2020);
const julianEaster = julian(2020);
```
