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
  langPrefix: 'hljs lang-',
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
  remarkable.renderer.rules.fence_custom.phpx = function (tokens, idx, options, env, instance) {
      const id = tokens[idx].params.split(" ")[1] || false
      if(id) {
        return '<style>' +
                 '#'+id+'tab1:checked ~ .css-tabs-content #'+id+'-content1,' +
                 '#'+id+'tab2:checked ~ .css-tabs-content #'+id+'-content2 {' +
                   'display: block;' +
                 '}' +
               '</style>' +
               '<div class="css-tabs-wrapper">' +
                 '<input class="nav-link css-tabs-tab" id="'+id+'tab1" type="radio" name="tabs" checked>' +
                 '<label for="'+id+'tab1">Result</label>' +
                 '<input class="css-tabs-tab" id="'+id+'tab2" type="radio" name="tabs">' +
                 '<label for="'+id+'tab2">Code</label>' +
                 '<div class="css-tabs-content">' +
                   '<div id="'+id+'-content1" class="css-tabs-tab1">' +
                     '<figure class="image">' +
                       '<img class="img img-responsive drop-shadow" src="'+id+'.svg" alt="Example image for '+id+'">' +
                     '</figure>' + 
                   '</div>' +
                   '<div id="'+id+'-content2" class="css-tabs-tab2">' +
                     '<pre><code class="hljs lang-php php-inline php-example">' +
                       highlightjs.highlight('php', tokens[idx].content).value +
                     '</code></pre>' + 
                   '</div>' +
                 '</div>' +
               '</div>' +
             instance.getBreak(tokens, idx);
      } else {
        return '<pre><code class="hljs lang-php php-inline">' +
               highlightjs.highlight('php', tokens[idx].content).value +
             '</code></pre>' + 
             instance.getBreak(tokens, idx);
      }
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
