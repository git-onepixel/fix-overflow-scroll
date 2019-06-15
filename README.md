# fix-overflow-scroll

## What problems to solve？
在IOS中，为内部滚动元素开启弹簧效果 `-webkit-overflow-scrolling: touch; ` ，当滚动条滚动到容器末端时，会触发父级滚动条滚动，导致内部滚动失效。

`fix-overflow-scroll` 的解决方案是，当滚动条滚动到容器末端时，自动回弹 `1px`，可以避免触发父级滚动。[实际效果看这里](https://git-onepixel.github.io/fix-overflow-scroll/)

## Install

``` bash
# use npm:
npm i fix-overflow-scroll
# use yarn:
yarn add fix-overflow-scroll
```

## Useage

``` javascript
// es6
import fixOverflowScroll from 'fix-overflow-scroll';
// require
var fixOverflowScroll = require('fix-overflow-scroll');
 
// `scroller` 是设置了 `overflow:auto` 元素的ID选择器
fixOverflowScroll('#scroller');

```