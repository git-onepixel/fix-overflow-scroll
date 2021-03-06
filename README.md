# fix-overflow-scroll


[![npm][npm]][npm-url] 
[![downloads][downloads]][downloads-url]
[![license][license]][license-url]

[npm]: https://img.shields.io/npm/v/fix-overflow-scroll.svg
[npm-url]: https://www.npmjs.com/package/fix-overflow-scroll
[downloads]: https://img.shields.io/npm/dm/fix-overflow-scroll.svg
[downloads-url]: https://npmcharts.com/compare/fix-overflow-scroll?minimal=true
[license]: https://img.shields.io/npm/l/fix-overflow-scroll.svg
[license-url]:https://github.com/git-onepixel/fix-overflow-scroll/blob/master/LICENSE


## What problems to solve ?
在IOS中，为内部滚动元素开启弹簧效果 `-webkit-overflow-scrolling: touch; ` ，当滚动条滚动到容器末端时，会触发父级滚动条滚动，导致内部滚动失效。

`fix-overflow-scroll` 的解决方案是，当滚动条滚动到容器末端时，自动回弹 `1px`，可以避免触发父级滚动。请参考 [对比试验](https://git-onepixel.github.io/fix-overflow-scroll/)

## Install

``` bash
# use npm:
npm i fix-overflow-scroll
# use yarn:
yarn add fix-overflow-scroll
```

## Usage

``` javascript
// es6
import fixOverflowScroll from 'fix-overflow-scroll';
// require
var fixOverflowScroll = require('fix-overflow-scroll');
 
// `scroller` 是设置了 `overflow:auto` 元素的ID选择器
fixOverflowScroll('#scroller');

```