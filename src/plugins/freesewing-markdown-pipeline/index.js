"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Remarkable = require('remarkable');
var toc = require('markdown-toc');
var highlightjs = require('highlightjs');

var md = new Remarkable({
  html:true,
  linkify: true,
  typographer: true,
  quotes: '“”‘’',
  highlight: function (str, lang) {
    if (lang && highlightjs.getLanguage(lang)) {
      try {
        return highlightjs.highlight(lang, str).value;
      } catch (err) {}
    }

    try {
      return highlightjs.highlightAuto(str).value;
    } catch (err) {}

    return ''; // use external default escaping
  }
}).use(function(remarkable) {
  remarkable.renderer.rules.heading_open = function(tokens, idx) {
    if(tokens[idx].hLevel > 3) return '<h' + tokens[idx].hLevel + '>';
    return '<h' + tokens[idx].hLevel + ' id=' + toc.slugify(tokens[idx + 1].content) + '>';
  };
});

function mdify(text) {
  return md.render(text)
}

/** Distils a seperate toc from the markdown text
 *
 *  FIXME: 
 *    If you are familiar with JavaScript/Node
 *    perhaps you can make this a bit more elegant? 
 */
function tocify(text) {
    return md.render(toc(text,{maxdepth: 3}).content)
}

exports.default = function (_ref) {
  var result = _ref.result;

  return _extends({}, result, {
    body: mdify(result.body),
    toc: tocify(result.body)
  });
};
