# PostCSS line-height Warning [![Build Status][ci-img]][ci]

A dead simple [PostCSS] plugin that gives you a warning when a unit value is used on your `line-height` rules.
It does **not** convert any values or performs any changes; it merely logs a warning.

### Installation

`npm install --save-dev postcss-lineheight-warn`

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/magalhini/postcss-lineheight-warn.svg
[ci]:      https://travis-ci.org/magalhini/postcss-lineheight-warn


```css
.foo {
    line-height: 3em;
}
```

Will log:

```
WARNING in ./~/css-loader!./~/postcss-loader!./sample.css
postcss-lineheight-warn: line-height should be unitless: line-height: 3em; at line 2
```

### Usage

```js
postcss([ require('postcss-lineheight-warn') ])
```

See the `/example` folder for a Webpack example.
