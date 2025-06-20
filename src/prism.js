/* PrismJS 1.22.0
https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript+bash+c+csharp+cpp+coffeescript+diff+docker+git+go+graphql+handlebars+http+java+js-extras+json+json5+jsonp+js-templates+kotlin+less+makefile+markdown+markup-templating+mongodb+objectivec+php+php-extras+plsql+powershell+pug+python+r+jsx+tsx+regex+ruby+sass+scss+scala+shell-session+splunk-spl+sql+stylus+swift+typescript+typoscript+vim+xml-doc+yaml&plugins=line-highlight+line-numbers+custom-class+file-highlight+show-language+jsonp-highlight+highlight-keywords+keep-markup+command-line+unescaped-markup+data-uri-highlight+toolbar+copy-to-clipboard+download-button+match-braces+diff-highlight */

var _self =
  'undefined' != typeof window
    ? window
    : 'undefined' != typeof WorkerGlobalScope &&
      self instanceof WorkerGlobalScope
      ? self
      : {},
  Prism = (function (u) {
    var c = /\blang(?:uage)?-([\w-]+)\b/i,
      n = 0,
      _ = {
        manual: u.Prism && u.Prism.manual,
        disableWorkerMessageHandler:
          u.Prism && u.Prism.disableWorkerMessageHandler,
        util: {
          encode: function e(n) {
            return n instanceof M
              ? new M(n.type, e(n.content), n.alias)
              : Array.isArray(n)
                ? n.map(e)
                : n
                  .replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/\u00a0/g, ' ');
          },
          type: function (e) {
            return Object.prototype.toString.call(e).slice(8, -1);
          },
          objId: function (e) {
            return (
              e.__id || Object.defineProperty(e, '__id', { value: ++n }), e.__id
            );
          },
          clone: function t(e, r) {
            var a, n;
            switch (((r = r || {}), _.util.type(e))) {
              case 'Object':
                if (((n = _.util.objId(e)), r[n])) return r[n];
                for (var i in ((a = {}), (r[n] = a), e))
                  e.hasOwnProperty(i) && (a[i] = t(e[i], r));
                return a;
              case 'Array':
                return (
                  (n = _.util.objId(e)),
                  r[n]
                    ? r[n]
                    : ((a = []),
                      (r[n] = a),
                      e.forEach(function (e, n) {
                        a[n] = t(e, r);
                      }),
                      a)
                );
              default:
                return e;
            }
          },
          getLanguage: function (e) {
            for (; e && !c.test(e.className);) e = e.parentElement;
            return e
              ? (e.className.match(c) || [, 'none'])[1].toLowerCase()
              : 'none';
          },
          currentScript: function () {
            if ('undefined' == typeof document) return null;
            if ('currentScript' in document) return document.currentScript;
            try {
              throw new Error();
            } catch (e) {
              var n = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack) || [])[1];
              if (n) {
                var t = document.getElementsByTagName('script');
                for (var r in t) if (t[r].src == n) return t[r];
              }
              return null;
            }
          },
          isActive: function (e, n, t) {
            for (var r = 'no-' + n; e;) {
              var a = e.classList;
              if (a.contains(n)) return !0;
              if (a.contains(r)) return !1;
              e = e.parentElement;
            }
            return !!t;
          },
        },
        languages: {
          extend: function (e, n) {
            var t = _.util.clone(_.languages[e]);
            for (var r in n) t[r] = n[r];
            return t;
          },
          insertBefore: function (t, e, n, r) {
            var a = (r = r || _.languages)[t],
              i = {};
            for (var l in a)
              if (a.hasOwnProperty(l)) {
                if (l == e)
                  for (var o in n) n.hasOwnProperty(o) && (i[o] = n[o]);
                n.hasOwnProperty(l) || (i[l] = a[l]);
              }
            var s = r[t];
            return (
              (r[t] = i),
              _.languages.DFS(_.languages, function (e, n) {
                n === s && e != t && (this[e] = i);
              }),
              i
            );
          },
          DFS: function e(n, t, r, a) {
            a = a || {};
            var i = _.util.objId;
            for (var l in n)
              if (n.hasOwnProperty(l)) {
                t.call(n, l, n[l], r || l);
                var o = n[l],
                  s = _.util.type(o);
                'Object' !== s || a[i(o)]
                  ? 'Array' !== s || a[i(o)] || ((a[i(o)] = !0), e(o, t, l, a))
                  : ((a[i(o)] = !0), e(o, t, null, a));
              }
          },
        },
        plugins: {},
        highlightAll: function (e, n) {
          _.highlightAllUnder(document, e, n);
        },
        highlightAllUnder: function (e, n, t) {
          var r = {
            callback: t,
            container: e,
            selector:
              'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
          };
          _.hooks.run('before-highlightall', r),
            (r.elements = Array.prototype.slice.apply(
              r.container.querySelectorAll(r.selector)
            )),
            _.hooks.run('before-all-elements-highlight', r);
          for (var a, i = 0; (a = r.elements[i++]);)
            _.highlightElement(a, !0 === n, r.callback);
        },
        highlightElement: function (e, n, t) {
          var r = _.util.getLanguage(e),
            a = _.languages[r];
          e.className =
            e.className.replace(c, '').replace(/\s+/g, ' ') + ' language-' + r;
          var i = e.parentElement;
          i &&
            'pre' === i.nodeName.toLowerCase() &&
            (i.className =
              i.className.replace(c, '').replace(/\s+/g, ' ') +
              ' language-' +
              r);
          var l = { element: e, language: r, grammar: a, code: e.textContent };
          function o(e) {
            (l.highlightedCode = e),
              _.hooks.run('before-insert', l),
              (l.element.innerHTML = l.highlightedCode),
              _.hooks.run('after-highlight', l),
              _.hooks.run('complete', l),
              t && t.call(l.element);
          }
          if ((_.hooks.run('before-sanity-check', l), !l.code))
            return _.hooks.run('complete', l), void (t && t.call(l.element));
          if ((_.hooks.run('before-highlight', l), l.grammar))
            if (n && u.Worker) {
              var s = new Worker(_.filename);
              (s.onmessage = function (e) {
                o(e.data);
              }),
                s.postMessage(
                  JSON.stringify({
                    language: l.language,
                    code: l.code,
                    immediateClose: !0,
                  })
                );
            } else o(_.highlight(l.code, l.grammar, l.language));
          else o(_.util.encode(l.code));
        },
        highlight: function (e, n, t) {
          var r = { code: e, grammar: n, language: t };
          return (
            _.hooks.run('before-tokenize', r),
            (r.tokens = _.tokenize(r.code, r.grammar)),
            _.hooks.run('after-tokenize', r),
            M.stringify(_.util.encode(r.tokens), r.language)
          );
        },
        tokenize: function (e, n) {
          var t = n.rest;
          if (t) {
            for (var r in t) n[r] = t[r];
            delete n.rest;
          }
          var a = new i();
          return (
            z(a, a.head, e),
            (function e(n, t, r, a, i, l) {
              for (var o in r)
                if (r.hasOwnProperty(o) && r[o]) {
                  var s = r[o];
                  s = Array.isArray(s) ? s : [s];
                  for (var u = 0; u < s.length; ++u) {
                    if (l && l.cause == o + ',' + u) return;
                    var c = s[u],
                      g = c.inside,
                      f = !!c.lookbehind,
                      h = !!c.greedy,
                      d = c.alias;
                    if (h && !c.pattern.global) {
                      var v = c.pattern.toString().match(/[imsuy]*$/)[0];
                      c.pattern = RegExp(c.pattern.source, v + 'g');
                    }
                    for (
                      var p = c.pattern || c, m = a.next, y = i;
                      m !== t.tail && !(l && y >= l.reach);
                      y += m.value.length, m = m.next
                    ) {
                      var k = m.value;
                      if (t.length > n.length) return;
                      if (!(k instanceof M)) {
                        var b,
                          x = 1;
                        if (h) {
                          if (!(b = W(p, y, n, f))) break;
                          var w = b.index,
                            A = b.index + b[0].length,
                            P = y;
                          for (P += m.value.length; P <= w;)
                            (m = m.next), (P += m.value.length);
                          if (
                            ((P -= m.value.length),
                              (y = P),
                              m.value instanceof M)
                          )
                            continue;
                          for (
                            var S = m;
                            S !== t.tail &&
                            (P < A || 'string' == typeof S.value);
                            S = S.next
                          )
                            x++, (P += S.value.length);
                          x--, (k = n.slice(y, P)), (b.index -= y);
                        } else if (!(b = W(p, 0, k, f))) continue;
                        var w = b.index,
                          E = b[0],
                          O = k.slice(0, w),
                          L = k.slice(w + E.length),
                          N = y + k.length;
                        l && N > l.reach && (l.reach = N);
                        var j = m.prev;
                        O && ((j = z(t, j, O)), (y += O.length)), I(t, j, x);
                        var C = new M(o, g ? _.tokenize(E, g) : E, d, E);
                        (m = z(t, j, C)),
                          L && z(t, m, L),
                          1 < x &&
                          e(n, t, r, m.prev, y, {
                            cause: o + ',' + u,
                            reach: N,
                          });
                      }
                    }
                  }
                }
            })(e, a, n, a.head, 0),
            (function (e) {
              var n = [],
                t = e.head.next;
              for (; t !== e.tail;) n.push(t.value), (t = t.next);
              return n;
            })(a)
          );
        },
        hooks: {
          all: {},
          add: function (e, n) {
            var t = _.hooks.all;
            (t[e] = t[e] || []), t[e].push(n);
          },
          run: function (e, n) {
            var t = _.hooks.all[e];
            if (t && t.length) for (var r, a = 0; (r = t[a++]);) r(n);
          },
        },
        Token: M,
      };
    function M(e, n, t, r) {
      (this.type = e),
        (this.content = n),
        (this.alias = t),
        (this.length = 0 | (r || '').length);
    }
    function W(e, n, t, r) {
      e.lastIndex = n;
      var a = e.exec(t);
      if (a && r && a[1]) {
        var i = a[1].length;
        (a.index += i), (a[0] = a[0].slice(i));
      }
      return a;
    }
    function i() {
      var e = { value: null, prev: null, next: null },
        n = { value: null, prev: e, next: null };
      (e.next = n), (this.head = e), (this.tail = n), (this.length = 0);
    }
    function z(e, n, t) {
      var r = n.next,
        a = { value: t, prev: n, next: r };
      return (n.next = a), (r.prev = a), e.length++, a;
    }
    function I(e, n, t) {
      for (var r = n.next, a = 0; a < t && r !== e.tail; a++) r = r.next;
      ((n.next = r).prev = n), (e.length -= a);
    }
    if (
      ((u.Prism = _),
        (M.stringify = function n(e, t) {
          if ('string' == typeof e) return e;
          if (Array.isArray(e)) {
            var r = '';
            return (
              e.forEach(function (e) {
                r += n(e, t);
              }),
              r
            );
          }
          var a = {
            type: e.type,
            content: n(e.content, t),
            tag: 'span',
            classes: ['token', e.type],
            attributes: {},
            language: t,
          },
            i = e.alias;
          i &&
            (Array.isArray(i)
              ? Array.prototype.push.apply(a.classes, i)
              : a.classes.push(i)),
            _.hooks.run('wrap', a);
          var l = '';
          for (var o in a.attributes)
            l +=
              ' ' +
              o +
              '="' +
              (a.attributes[o] || '').replace(/"/g, '&quot;') +
              '"';
          return (
            '<' +
            a.tag +
            ' class="' +
            a.classes.join(' ') +
            '"' +
            l +
            '>' +
            a.content +
            '</' +
            a.tag +
            '>'
          );
        }),
        !u.document)
    )
      return (
        u.addEventListener &&
        (_.disableWorkerMessageHandler ||
          u.addEventListener(
            'message',
            function (e) {
              var n = JSON.parse(e.data),
                t = n.language,
                r = n.code,
                a = n.immediateClose;
              u.postMessage(_.highlight(r, _.languages[t], t)),
                a && u.close();
            },
            !1
          )),
        _
      );
    var e = _.util.currentScript();
    function t() {
      _.manual || _.highlightAll();
    }
    if (
      (e &&
        ((_.filename = e.src),
          e.hasAttribute('data-manual') && (_.manual = !0)),
        !_.manual)
    ) {
      var r = document.readyState;
      'loading' === r || ('interactive' === r && e && e.defer)
        ? document.addEventListener('DOMContentLoaded', t)
        : window.requestAnimationFrame
          ? window.requestAnimationFrame(t)
          : window.setTimeout(t, 16);
    }
    return _;
  })(_self);
'undefined' != typeof module && module.exports && (module.exports = Prism),
  'undefined' != typeof global && (global.Prism = Prism);
(Prism.languages.markup = {
  comment: /<!--[\s\S]*?-->/,
  prolog: /<\?[\s\S]+?\?>/,
  doctype: {
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: !0,
    inside: {
      'internal-subset': {
        pattern: /(\[)[\s\S]+(?=\]>$)/,
        lookbehind: !0,
        greedy: !0,
        inside: null,
      },
      string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
      punctuation: /^<!|>$|[[\]]/,
      'doctype-tag': /^DOCTYPE/,
      name: /[^\s<>'"]+/,
    },
  },
  cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
  tag: {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: !0,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/,
        inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
      },
      'attr-value': {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/],
        },
      },
      punctuation: /\/?>/,
      'attr-name': {
        pattern: /[^\s>\/]+/,
        inside: { namespace: /^[^\s>\/:]+:/ },
      },
    },
  },
  entity: [
    { pattern: /&[\da-z]{1,8};/i, alias: 'named-entity' },
    /&#x?[\da-f]{1,8};/i,
  ],
}),
  (Prism.languages.markup.tag.inside['attr-value'].inside.entity =
    Prism.languages.markup.entity),
  (Prism.languages.markup.doctype.inside['internal-subset'].inside =
    Prism.languages.markup),
  Prism.hooks.add('wrap', function (a) {
    'entity' === a.type &&
      (a.attributes.title = a.content.replace(/&amp;/, '&'));
  }),
  Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
    value: function (a, e) {
      var s = {};
      (s['language-' + e] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: Prism.languages[e],
      }),
        (s.cdata = /^<!\[CDATA\[|\]\]>$/i);
      var n = {
        'included-cdata': { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: s },
      };
      n['language-' + e] = { pattern: /[\s\S]+/, inside: Prism.languages[e] };
      var t = {};
      (t[a] = {
        pattern: RegExp(
          '(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)'.replace(
            /__/g,
            function () {
              return a;
            }
          ),
          'i'
        ),
        lookbehind: !0,
        greedy: !0,
        inside: n,
      }),
        Prism.languages.insertBefore('markup', 'cdata', t);
    },
  }),
  (Prism.languages.html = Prism.languages.markup),
  (Prism.languages.mathml = Prism.languages.markup),
  (Prism.languages.svg = Prism.languages.markup),
  (Prism.languages.xml = Prism.languages.extend('markup', {})),
  (Prism.languages.ssml = Prism.languages.xml),
  (Prism.languages.atom = Prism.languages.xml),
  (Prism.languages.rss = Prism.languages.xml);
!(function (s) {
  var e = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  (s.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
      inside: {
        rule: /^@[\w-]+/,
        'selector-function-argument': {
          pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: !0,
          alias: 'selector',
        },
        keyword: {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: !0,
        },
      },
    },
    url: {
      pattern: RegExp(
        '\\burl\\((?:' + e.source + '|(?:[^\\\\\r\n()"\']|\\\\[^])*)\\)',
        'i'
      ),
      greedy: !0,
      inside: {
        function: /^url/i,
        punctuation: /^\(|\)$/,
        string: { pattern: RegExp('^' + e.source + '$'), alias: 'url' },
      },
    },
    selector: RegExp(
      '[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + e.source + ')*(?=\\s*\\{)'
    ),
    string: { pattern: e, greedy: !0 },
    property: /(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
    important: /!important\b/i,
    function: /[-a-z0-9]+(?=\()/i,
    punctuation: /[(){};:,]/,
  }),
    (s.languages.css.atrule.inside.rest = s.languages.css);
  var t = s.languages.markup;
  t &&
    (t.tag.addInlined('style', 'css'),
      s.languages.insertBefore(
        'inside',
        'attr-value',
        {
          'style-attr': {
            pattern: /(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,
            lookbehind: !0,
            inside: {
              'attr-value': {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                  style: {
                    pattern: /(["'])[\s\S]+(?=["']$)/,
                    lookbehind: !0,
                    alias: 'language-css',
                    inside: s.languages.css,
                  },
                  punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/],
                },
              },
              'attr-name': /^style/i,
            },
          },
        },
        t.tag
      ));
})(Prism);
Prism.languages.clike = {
  comment: [
    { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 },
    { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
  ],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0,
  },
  'class-name': {
    pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: !0,
    inside: { punctuation: /[.\\]/ },
  },
  keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  boolean: /\b(?:true|false)\b/,
  function: /\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  punctuation: /[{}[\];(),.:]/,
};
(Prism.languages.javascript = Prism.languages.extend('clike', {
  'class-name': [
    Prism.languages.clike['class-name'],
    {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
      lookbehind: !0,
    },
  ],
  keyword: [
    { pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 },
    {
      pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: !0,
    },
  ],
  function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
  operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
})),
  (Prism.languages.javascript[
    'class-name'
  ][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
  Prism.languages.insertBefore('javascript', 'keyword', {
    regex: {
      pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
      lookbehind: !0,
      greedy: !0,
      inside: {
        'regex-source': {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: !0,
          alias: 'language-regex',
          inside: Prism.languages.regex,
        },
        'regex-flags': /[a-z]+$/,
        'regex-delimiter': /^\/|\/$/,
      },
    },
    'function-variable': {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: 'function',
    },
    parameter: [
      {
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: Prism.languages.javascript,
      },
      {
        pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        inside: Prism.languages.javascript,
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: Prism.languages.javascript,
      },
      {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: Prism.languages.javascript,
      },
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
  }),
  Prism.languages.insertBefore('javascript', 'string', {
    'template-string': {
      pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
      greedy: !0,
      inside: {
        'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
          lookbehind: !0,
          inside: {
            'interpolation-punctuation': {
              pattern: /^\${|}$/,
              alias: 'punctuation',
            },
            rest: Prism.languages.javascript,
          },
        },
        string: /[\s\S]+/,
      },
    },
  }),
  Prism.languages.markup &&
  Prism.languages.markup.tag.addInlined('script', 'javascript'),
  (Prism.languages.js = Prism.languages.javascript);
!(function (e) {
  var t =
    '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b',
    n = {
      pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
      lookbehind: !0,
      alias: 'punctuation',
      inside: null,
    },
    a = {
      bash: n,
      environment: { pattern: RegExp('\\$' + t), alias: 'constant' },
      variable: [
        {
          pattern: /\$?\(\([\s\S]+?\)\)/,
          greedy: !0,
          inside: {
            variable: [
              { pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
              /^\$\(\(/,
            ],
            number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
            operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
            punctuation: /\(\(?|\)\)?|,|;/,
          },
        },
        {
          pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
          greedy: !0,
          inside: { variable: /^\$\(|^`|\)$|`$/ },
        },
        {
          pattern: /\$\{[^}]+\}/,
          greedy: !0,
          inside: {
            operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
            punctuation: /[\[\]]/,
            environment: {
              pattern: RegExp('(\\{)' + t),
              lookbehind: !0,
              alias: 'constant',
            },
          },
        },
        /\$(?:\w+|[#?*!@$])/,
      ],
      entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/,
    };
  (e.languages.bash = {
    shebang: { pattern: /^#!\s*\/.*/, alias: 'important' },
    comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
    'function-name': [
      {
        pattern: /(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,
        lookbehind: !0,
        alias: 'function',
      },
      { pattern: /\b\w+(?=\s*\(\s*\)\s*\{)/, alias: 'function' },
    ],
    'for-or-select': {
      pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
      alias: 'variable',
      lookbehind: !0,
    },
    'assign-left': {
      pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
      inside: {
        environment: {
          pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + t),
          lookbehind: !0,
          alias: 'constant',
        },
      },
      alias: 'variable',
      lookbehind: !0,
    },
    string: [
      {
        pattern: /((?:^|[^<])<<-?\s*)(\w+?)\s[\s\S]*?(?:\r?\n|\r)\2/,
        lookbehind: !0,
        greedy: !0,
        inside: a,
      },
      {
        pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
        lookbehind: !0,
        greedy: !0,
        inside: { bash: n },
      },
      {
        pattern: /(^|[^\\](?:\\\\)*)(["'])(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|(?!\2)[^\\`$])*\2/,
        lookbehind: !0,
        greedy: !0,
        inside: a,
      },
    ],
    environment: { pattern: RegExp('\\$?' + t), alias: 'constant' },
    variable: a.variable,
    function: {
      pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
      lookbehind: !0,
    },
    keyword: {
      pattern: /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
      lookbehind: !0,
    },
    builtin: {
      pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
      lookbehind: !0,
      alias: 'class-name',
    },
    boolean: {
      pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,
      lookbehind: !0,
    },
    'file-descriptor': { pattern: /\B&\d\b/, alias: 'important' },
    operator: {
      pattern: /\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,
      inside: { 'file-descriptor': { pattern: /^\d/, alias: 'important' } },
    },
    punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
    number: { pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/, lookbehind: !0 },
  }),
    (n.inside = e.languages.bash);
  for (
    var s = [
      'comment',
      'function-name',
      'for-or-select',
      'assign-left',
      'string',
      'environment',
      'function',
      'keyword',
      'builtin',
      'boolean',
      'file-descriptor',
      'operator',
      'punctuation',
      'number',
    ],
    i = a.variable[1].inside,
    o = 0;
    o < s.length;
    o++
  )
    i[s[o]] = e.languages.bash[s[o]];
  e.languages.shell = e.languages.bash;
})(Prism);
(Prism.languages.c = Prism.languages.extend('clike', {
  comment: {
    pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: !0,
  },
  'class-name': {
    pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
    lookbehind: !0,
  },
  keyword: /\b(?:__attribute__|_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
  function: /[a-z_]\w*(?=\s*\()/i,
  number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
})),
  Prism.languages.insertBefore('c', 'string', {
    macro: {
      pattern: /(^\s*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
      lookbehind: !0,
      greedy: !0,
      alias: 'property',
      inside: {
        string: [
          { pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0 },
          Prism.languages.c.string,
        ],
        comment: Prism.languages.c.comment,
        'macro-name': [
          { pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: !0 },
          {
            pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
            lookbehind: !0,
            alias: 'function',
          },
        ],
        directive: {
          pattern: /^(#\s*)[a-z]+/,
          lookbehind: !0,
          alias: 'keyword',
        },
        'directive-hash': /^#/,
        punctuation: /##|\\(?=[\r\n])/,
        expression: { pattern: /\S[\s\S]*/, inside: Prism.languages.c },
      },
    },
    constant: /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/,
  }),
  delete Prism.languages.c.boolean;
!(function (s) {
  function a(e, s) {
    return e.replace(/<<(\d+)>>/g, function (e, n) {
      return '(?:' + s[+n] + ')';
    });
  }
  function t(e, n, s) {
    return RegExp(a(e, n), s || '');
  }
  function e(e, n) {
    for (var s = 0; s < n; s++)
      e = e.replace(/<<self>>/g, function () {
        return '(?:' + e + ')';
      });
    return e.replace(/<<self>>/g, '[^\\s\\S]');
  }
  var n =
    'bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void',
    i = 'class enum interface struct',
    r =
      'add alias and ascending async await by descending from get global group into join let nameof not notnull on or orderby partial remove select set unmanaged value when where',
    o =
      'abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield';
  function l(e) {
    return '\\b(?:' + e.trim().replace(/ /g, '|') + ')\\b';
  }
  var d = l(i),
    p = RegExp(l(n + ' ' + i + ' ' + r + ' ' + o)),
    c = l(i + ' ' + r + ' ' + o),
    u = l(n + ' ' + i + ' ' + o),
    g = e('<(?:[^<>;=+\\-*/%&|^]|<<self>>)*>', 2),
    b = e('\\((?:[^()]|<<self>>)*\\)', 2),
    h = '@?\\b[A-Za-z_]\\w*\\b',
    f = a('<<0>>(?:\\s*<<1>>)?', [h, g]),
    m = a('(?!<<0>>)<<1>>(?:\\s*\\.\\s*<<1>>)*', [c, f]),
    k = '\\[\\s*(?:,\\s*)*\\]',
    y = a('<<0>>(?:\\s*(?:\\?\\s*)?<<1>>)*(?:\\s*\\?)?', [m, k]),
    w = a('(?:<<0>>|<<1>>)(?:\\s*(?:\\?\\s*)?<<2>>)*(?:\\s*\\?)?', [
      a('\\(<<0>>+(?:,<<0>>+)+\\)', [
        a('[^,()<>[\\];=+\\-*/%&|^]|<<0>>|<<1>>|<<2>>', [g, b, k]),
      ]),
      m,
      k,
    ]),
    v = { keyword: p, punctuation: /[<>()?,.:[\]]/ },
    x = "'(?:[^\r\n'\\\\]|\\\\.|\\\\[Uux][\\da-fA-F]{1,8})'",
    $ = '"(?:\\\\.|[^\\\\"\r\n])*"';
  (s.languages.csharp = s.languages.extend('clike', {
    string: [
      {
        pattern: t('(^|[^$\\\\])<<0>>', ['@"(?:""|\\\\[^]|[^\\\\"])*"(?!")']),
        lookbehind: !0,
        greedy: !0,
      },
      { pattern: t('(^|[^@$\\\\])<<0>>', [$]), lookbehind: !0, greedy: !0 },
      { pattern: RegExp(x), greedy: !0, alias: 'character' },
    ],
    'class-name': [
      {
        pattern: t('(\\busing\\s+static\\s+)<<0>>(?=\\s*;)', [m]),
        lookbehind: !0,
        inside: v,
      },
      {
        pattern: t('(\\busing\\s+<<0>>\\s*=\\s*)<<1>>(?=\\s*;)', [h, w]),
        lookbehind: !0,
        inside: v,
      },
      { pattern: t('(\\busing\\s+)<<0>>(?=\\s*=)', [h]), lookbehind: !0 },
      { pattern: t('(\\b<<0>>\\s+)<<1>>', [d, f]), lookbehind: !0, inside: v },
      {
        pattern: t('(\\bcatch\\s*\\(\\s*)<<0>>', [m]),
        lookbehind: !0,
        inside: v,
      },
      { pattern: t('(\\bwhere\\s+)<<0>>', [h]), lookbehind: !0 },
      {
        pattern: t('(\\b(?:is(?:\\s+not)?|as)\\s+)<<0>>', [y]),
        lookbehind: !0,
        inside: v,
      },
      {
        pattern: t(
          '\\b<<0>>(?=\\s+(?!<<1>>)<<2>>(?:\\s*[=,;:{)\\]]|\\s+(?:in|when)\\b))',
          [w, u, h]
        ),
        inside: v,
      },
    ],
    keyword: p,
    number: /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:ul|lu|[dflmu])?\b/i,
    operator: />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,
    punctuation: /\?\.?|::|[{}[\];(),.:]/,
  })),
    s.languages.insertBefore('csharp', 'number', {
      range: { pattern: /\.\./, alias: 'operator' },
    }),
    s.languages.insertBefore('csharp', 'punctuation', {
      'named-parameter': {
        pattern: t('([(,]\\s*)<<0>>(?=\\s*:)', [h]),
        lookbehind: !0,
        alias: 'punctuation',
      },
    }),
    s.languages.insertBefore('csharp', 'class-name', {
      namespace: {
        pattern: t(
          '(\\b(?:namespace|using)\\s+)<<0>>(?:\\s*\\.\\s*<<0>>)*(?=\\s*[;{])',
          [h]
        ),
        lookbehind: !0,
        inside: { punctuation: /\./ },
      },
      'type-expression': {
        pattern: t(
          '(\\b(?:default|typeof|sizeof)\\s*\\(\\s*(?!\\s))(?:[^()\\s]|\\s(?!\\s)|<<0>>)*(?=\\s*\\))',
          [b]
        ),
        lookbehind: !0,
        alias: 'class-name',
        inside: v,
      },
      'return-type': {
        pattern: t(
          '<<0>>(?=\\s+(?:<<1>>\\s*(?:=>|[({]|\\.\\s*this\\s*\\[)|this\\s*\\[))',
          [w, m]
        ),
        inside: v,
        alias: 'class-name',
      },
      'constructor-invocation': {
        pattern: t('(\\bnew\\s+)<<0>>(?=\\s*[[({])', [w]),
        lookbehind: !0,
        inside: v,
        alias: 'class-name',
      },
      'generic-method': {
        pattern: t('<<0>>\\s*<<1>>(?=\\s*\\()', [h, g]),
        inside: {
          function: t('^<<0>>', [h]),
          generic: { pattern: RegExp(g), alias: 'class-name', inside: v },
        },
      },
      'type-list': {
        pattern: t(
          '\\b((?:<<0>>\\s+<<1>>|where\\s+<<2>>)\\s*:\\s*)(?:<<3>>|<<4>>)(?:\\s*,\\s*(?:<<3>>|<<4>>))*(?=\\s*(?:where|[{;]|=>|$))',
          [d, f, h, w, p.source]
        ),
        lookbehind: !0,
        inside: {
          keyword: p,
          'class-name': { pattern: RegExp(w), greedy: !0, inside: v },
          punctuation: /,/,
        },
      },
      preprocessor: {
        pattern: /(^\s*)#.*/m,
        lookbehind: !0,
        alias: 'property',
        inside: {
          directive: {
            pattern: /(\s*#)\b(?:define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,
            lookbehind: !0,
            alias: 'keyword',
          },
        },
      },
    });
  var _ = $ + '|' + x,
    B = a('/(?![*/])|//[^\r\n]*[\r\n]|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>', [_]),
    E = e(a('[^"\'/()]|<<0>>|\\(<<self>>*\\)', [B]), 2),
    R =
      '\\b(?:assembly|event|field|method|module|param|property|return|type)\\b',
    P = a('<<0>>(?:\\s*\\(<<1>>*\\))?', [m, E]);
  s.languages.insertBefore('csharp', 'class-name', {
    attribute: {
      pattern: t(
        '((?:^|[^\\s\\w>)?])\\s*\\[\\s*)(?:<<0>>\\s*:\\s*)?<<1>>(?:\\s*,\\s*<<1>>)*(?=\\s*\\])',
        [R, P]
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        target: { pattern: t('^<<0>>(?=\\s*:)', [R]), alias: 'keyword' },
        'attribute-arguments': {
          pattern: t('\\(<<0>>*\\)', [E]),
          inside: s.languages.csharp,
        },
        'class-name': { pattern: RegExp(m), inside: { punctuation: /\./ } },
        punctuation: /[:,]/,
      },
    },
  });
  var z = ':[^}\r\n]+',
    S = e(a('[^"\'/()]|<<0>>|\\(<<self>>*\\)', [B]), 2),
    j = a('\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}', [S, z]),
    A = e(
      a('[^"\'/()]|/(?!\\*)|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>|\\(<<self>>*\\)', [
        _,
      ]),
      2
    ),
    F = a('\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}', [A, z]);
  function U(e, n) {
    return {
      interpolation: {
        pattern: t('((?:^|[^{])(?:\\{\\{)*)<<0>>', [e]),
        lookbehind: !0,
        inside: {
          'format-string': {
            pattern: t('(^\\{(?:(?![}:])<<0>>)*)<<1>>(?=\\}$)', [n, z]),
            lookbehind: !0,
            inside: { punctuation: /^:/ },
          },
          punctuation: /^\{|\}$/,
          expression: {
            pattern: /[\s\S]+/,
            alias: 'language-csharp',
            inside: s.languages.csharp,
          },
        },
      },
      string: /[\s\S]+/,
    };
  }
  s.languages.insertBefore('csharp', 'string', {
    'interpolation-string': [
      {
        pattern: t(
          '(^|[^\\\\])(?:\\$@|@\\$)"(?:""|\\\\[^]|\\{\\{|<<0>>|[^\\\\{"])*"',
          [j]
        ),
        lookbehind: !0,
        greedy: !0,
        inside: U(j, S),
      },
      {
        pattern: t('(^|[^@\\\\])\\$"(?:\\\\.|\\{\\{|<<0>>|[^\\\\"{])*"', [F]),
        lookbehind: !0,
        greedy: !0,
        inside: U(F, A),
      },
    ],
  });
})(Prism),
  (Prism.languages.dotnet = Prism.languages.cs = Prism.languages.csharp);
!(function (e) {
  var t = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char8_t|char16_t|char32_t|class|compl|concept|const|consteval|constexpr|constinit|const_cast|continue|co_await|co_return|co_yield|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/;
  (e.languages.cpp = e.languages.extend('c', {
    'class-name': [
      {
        pattern: RegExp(
          '(\\b(?:class|concept|enum|struct|typename)\\s+)(?!<keyword>)\\w+'.replace(
            /<keyword>/g,
            function () {
              return t.source;
            }
          )
        ),
        lookbehind: !0,
      },
      /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
      /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
      /\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/,
    ],
    keyword: t,
    number: {
      pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
      greedy: !0,
    },
    operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
    boolean: /\b(?:true|false)\b/,
  })),
    e.languages.insertBefore('cpp', 'string', {
      'raw-string': {
        pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
        alias: 'string',
        greedy: !0,
      },
    }),
    e.languages.insertBefore('cpp', 'class-name', {
      'base-clause': {
        pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
        lookbehind: !0,
        greedy: !0,
        inside: e.languages.extend('cpp', {}),
      },
    }),
    e.languages.insertBefore(
      'inside',
      'operator',
      { 'class-name': /\b[a-z_]\w*\b(?!\s*::)/i },
      e.languages.cpp['base-clause']
    );
})(Prism);
!(function (e) {
  var t = /#(?!\{).+/,
    n = { pattern: /#\{[^}]+\}/, alias: 'variable' };
  (e.languages.coffeescript = e.languages.extend('javascript', {
    comment: t,
    string: [
      { pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0 },
      {
        pattern: /"(?:\\[\s\S]|[^\\"])*"/,
        greedy: !0,
        inside: { interpolation: n },
      },
    ],
    keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
    'class-member': { pattern: /@(?!\d)\w+/, alias: 'variable' },
  })),
    e.languages.insertBefore('coffeescript', 'comment', {
      'multiline-comment': { pattern: /###[\s\S]+?###/, alias: 'comment' },
      'block-regex': {
        pattern: /\/{3}[\s\S]*?\/{3}/,
        alias: 'regex',
        inside: { comment: t, interpolation: n },
      },
    }),
    e.languages.insertBefore('coffeescript', 'string', {
      'inline-javascript': {
        pattern: /`(?:\\[\s\S]|[^\\`])*`/,
        inside: {
          delimiter: { pattern: /^`|`$/, alias: 'punctuation' },
          rest: e.languages.javascript,
        },
      },
      'multiline-string': [
        { pattern: /'''[\s\S]*?'''/, greedy: !0, alias: 'string' },
        {
          pattern: /"""[\s\S]*?"""/,
          greedy: !0,
          alias: 'string',
          inside: { interpolation: n },
        },
      ],
    }),
    e.languages.insertBefore('coffeescript', 'keyword', {
      property: /(?!\d)\w+(?=\s*:(?!:))/,
    }),
    delete e.languages.coffeescript['template-string'],
    (e.languages.coffee = e.languages.coffeescript);
})(Prism);
!(function (i) {
  i.languages.diff = {
    coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d.*$/m],
  };
  var r = {
    'deleted-sign': '-',
    'deleted-arrow': '<',
    'inserted-sign': '+',
    'inserted-arrow': '>',
    unchanged: ' ',
    diff: '!',
  };
  Object.keys(r).forEach(function (e) {
    var n = r[e],
      a = [];
    /^\w+$/.test(e) || a.push(/\w+/.exec(e)[0]),
      'diff' === e && a.push('bold'),
      (i.languages.diff[e] = {
        pattern: RegExp('^(?:[' + n + '].*(?:\r\n?|\n|(?![\\s\\S])))+', 'm'),
        alias: a,
        inside: {
          line: { pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/, lookbehind: !0 },
          prefix: { pattern: /[\s\S]/, alias: /\w+/.exec(e)[0] },
        },
      });
  }),
    Object.defineProperty(i.languages.diff, 'PREFIXES', { value: r });
})(Prism);
(Prism.languages.docker = {
  keyword: {
    pattern: /(^\s*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)/im,
    lookbehind: !0,
  },
  string: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
  comment: { pattern: /#.*/, greedy: !0 },
  punctuation: /---|\.\.\.|[:[\]{}\-,|>?]/,
}),
  (Prism.languages.dockerfile = Prism.languages.docker);
Prism.languages.git = {
  comment: /^#.*/m,
  deleted: /^[-–].*/m,
  inserted: /^\+.*/m,
  string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,
  command: { pattern: /^.*\$ git .*$/m, inside: { parameter: /\s--?\w+/m } },
  coord: /^@@.*@@$/m,
  'commit-sha1': /^commit \w{40}$/m,
};
(Prism.languages.go = Prism.languages.extend('clike', {
  string: { pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/, greedy: !0 },
  keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
  boolean: /\b(?:_|iota|nil|true|false)\b/,
  number: /(?:\b0x[a-f\d]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
  operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
  builtin: /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/,
})),
  delete Prism.languages.go['class-name'];
Prism.languages.graphql = {
  comment: /#.*/,
  description: {
    pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
    greedy: !0,
    alias: 'string',
    inside: {
      'language-markdown': {
        pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
        lookbehind: !0,
        inside: Prism.languages.markdown,
      },
    },
  },
  string: {
    pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
    greedy: !0,
  },
  number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  boolean: /\b(?:true|false)\b/,
  variable: /\$[a-z_]\w*/i,
  directive: { pattern: /@[a-z_]\w*/i, alias: 'function' },
  'attr-name': {
    pattern: /[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
    greedy: !0,
  },
  'class-name': {
    pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*)[a-zA-Z_]\w*/,
    lookbehind: !0,
  },
  fragment: {
    pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
    lookbehind: !0,
    alias: 'function',
  },
  keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
  operator: /[!=|&]|\.{3}/,
  punctuation: /[!(){}\[\]:=,]/,
  constant: /\b(?!ID\b)[A-Z][A-Z_\d]*\b/,
};
!(function (h) {
  function v(e, n) {
    return '___' + e.toUpperCase() + n + '___';
  }
  Object.defineProperties((h.languages['markup-templating'] = {}), {
    buildPlaceholders: {
      value: function (a, r, e, o) {
        if (a.language === r) {
          var c = (a.tokenStack = []);
          (a.code = a.code.replace(e, function (e) {
            if ('function' == typeof o && !o(e)) return e;
            for (var n, t = c.length; -1 !== a.code.indexOf((n = v(r, t)));)
              ++t;
            return (c[t] = e), n;
          })),
            (a.grammar = h.languages.markup);
        }
      },
    },
    tokenizePlaceholders: {
      value: function (p, k) {
        if (p.language === k && p.tokenStack) {
          p.grammar = h.languages[k];
          var m = 0,
            d = Object.keys(p.tokenStack);
          !(function e(n) {
            for (var t = 0; t < n.length && !(m >= d.length); t++) {
              var a = n[t];
              if (
                'string' == typeof a ||
                (a.content && 'string' == typeof a.content)
              ) {
                var r = d[m],
                  o = p.tokenStack[r],
                  c = 'string' == typeof a ? a : a.content,
                  i = v(k, r),
                  u = c.indexOf(i);
                if (-1 < u) {
                  ++m;
                  var g = c.substring(0, u),
                    l = new h.Token(
                      k,
                      h.tokenize(o, p.grammar),
                      'language-' + k,
                      o
                    ),
                    s = c.substring(u + i.length),
                    f = [];
                  g && f.push.apply(f, e([g])),
                    f.push(l),
                    s && f.push.apply(f, e([s])),
                    'string' == typeof a
                      ? n.splice.apply(n, [t, 1].concat(f))
                      : (a.content = f);
                }
              } else a.content && e(a.content);
            }
            return n;
          })(p.tokens);
        }
      },
    },
  });
})(Prism);
!(function (e) {
  (e.languages.handlebars = {
    comment: /\{\{![\s\S]*?\}\}/,
    delimiter: { pattern: /^\{\{\{?|\}\}\}?$/i, alias: 'punctuation' },
    string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
    number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,
    boolean: /\b(?:true|false)\b/,
    block: {
      pattern: /^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/i,
      lookbehind: !0,
      alias: 'keyword',
    },
    brackets: {
      pattern: /\[[^\]]+\]/,
      inside: { punctuation: /\[|\]/, variable: /[\s\S]+/ },
    },
    punctuation: /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
    variable: /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/,
  }),
    e.hooks.add('before-tokenize', function (a) {
      e.languages['markup-templating'].buildPlaceholders(
        a,
        'handlebars',
        /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g
      );
    }),
    e.hooks.add('after-tokenize', function (a) {
      e.languages['markup-templating'].tokenizePlaceholders(a, 'handlebars');
    });
})(Prism);
!(function (t) {
  t.languages.http = {
    'request-line': {
      pattern: /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\s(?:https?:\/\/|\/)\S+\sHTTP\/[0-9.]+/m,
      inside: {
        property: /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,
        'attr-name': /:\w+/,
      },
    },
    'response-status': {
      pattern: /^HTTP\/1.[01] \d.*/m,
      inside: {
        property: { pattern: /(^HTTP\/1.[01] )\d.*/i, lookbehind: !0 },
      },
    },
    'header-name': { pattern: /^[\w-]+:(?=.)/m, alias: 'keyword' },
  };
  var a,
    e,
    n,
    i = t.languages,
    p = {
      'application/javascript': i.javascript,
      'application/json': i.json || i.javascript,
      'application/xml': i.xml,
      'text/xml': i.xml,
      'text/html': i.html,
      'text/css': i.css,
    },
    r = { 'application/json': !0, 'application/xml': !0 };
  for (var s in p)
    if (p[s]) {
      a = a || {};
      var T = r[s]
        ? (void 0,
          (n = (e = s).replace(/^[a-z]+\//, '')),
          '(?:' + e + '|\\w+/(?:[\\w.-]+\\+)+' + n + '(?![+\\w.-]))')
        : s;
      a[s.replace(/\//g, '-')] = {
        pattern: RegExp(
          '(content-type:\\s*' + T + '.*)(?:\\r?\\n|\\r){2}[\\s\\S]*',
          'i'
        ),
        lookbehind: !0,
        inside: p[s],
      };
    }
  a && t.languages.insertBefore('http', 'header-name', a);
})(Prism);
!(function (e) {
  var t = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,
    n = '(^|[^\\w.])(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*',
    a = {
      pattern: RegExp(n + '[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b'),
      lookbehind: !0,
      inside: {
        namespace: {
          pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
          inside: { punctuation: /\./ },
        },
        punctuation: /\./,
      },
    };
  (e.languages.java = e.languages.extend('clike', {
    'class-name': [
      a,
      {
        pattern: RegExp(n + '[A-Z]\\w*(?=\\s+\\w+\\s*[;,=())])'),
        lookbehind: !0,
        inside: a.inside,
      },
    ],
    keyword: t,
    function: [
      e.languages.clike.function,
      { pattern: /(\:\:\s*)[a-z_]\w*/, lookbehind: !0 },
    ],
    number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
    operator: {
      pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
      lookbehind: !0,
    },
  })),
    e.languages.insertBefore('java', 'string', {
      'triple-quoted-string': {
        pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
        greedy: !0,
        alias: 'string',
      },
    }),
    e.languages.insertBefore('java', 'class-name', {
      annotation: {
        pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
        lookbehind: !0,
        alias: 'punctuation',
      },
      generics: {
        pattern: /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,
        inside: {
          'class-name': a,
          keyword: t,
          punctuation: /[<>(),.:]/,
          operator: /[?&|]/,
        },
      },
      namespace: {
        pattern: RegExp(
          '(\\b(?:exports|import(?:\\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\\s+)(?!<keyword>)[a-z]\\w*(?:\\.[a-z]\\w*)*\\.?'.replace(
            /<keyword>/g,
            function () {
              return t.source;
            }
          )
        ),
        lookbehind: !0,
        inside: { punctuation: /\./ },
      },
    });
})(Prism);
!(function (a) {
  function e(a, e) {
    return RegExp(
      a.replace(/<ID>/g, function () {
        return '(?!\\s)[_$a-zA-Z\\xA0-\\uFFFF](?:(?!\\s)[$\\w\\xA0-\\uFFFF])*';
      }),
      e
    );
  }
  a.languages.insertBefore('javascript', 'function-variable', {
    'method-variable': {
      pattern: RegExp(
        '(\\.\\s*)' + a.languages.javascript['function-variable'].pattern.source
      ),
      lookbehind: !0,
      alias: ['function-variable', 'method', 'function', 'property-access'],
    },
  }),
    a.languages.insertBefore('javascript', 'function', {
      method: {
        pattern: RegExp('(\\.\\s*)' + a.languages.javascript.function.source),
        lookbehind: !0,
        alias: ['function', 'property-access'],
      },
    }),
    a.languages.insertBefore('javascript', 'constant', {
      'known-class-name': [
        {
          pattern: /\b(?:(?:(?:Uint|Int)(?:8|16|32)|Uint8Clamped|Float(?:32|64))?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|(?:Weak)?(?:Set|Map)|WebAssembly)\b/,
          alias: 'class-name',
        },
        { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: 'class-name' },
      ],
    }),
    a.languages.insertBefore('javascript', 'keyword', {
      imports: {
        pattern: e(
          '(\\bimport\\b\\s*)(?:<ID>(?:\\s*,\\s*(?:\\*\\s*as\\s+<ID>|\\{[^{}]*\\}))?|\\*\\s*as\\s+<ID>|\\{[^{}]*\\})(?=\\s*\\bfrom\\b)'
        ),
        lookbehind: !0,
        inside: a.languages.javascript,
      },
      exports: {
        pattern: e(
          '(\\bexport\\b\\s*)(?:\\*(?:\\s*as\\s+<ID>)?(?=\\s*\\bfrom\\b)|\\{[^{}]*\\})'
        ),
        lookbehind: !0,
        inside: a.languages.javascript,
      },
    }),
    a.languages.javascript.keyword.unshift(
      { pattern: /\b(?:as|default|export|from|import)\b/, alias: 'module' },
      {
        pattern: /\b(?:await|break|catch|continue|do|else|for|finally|if|return|switch|throw|try|while|yield)\b/,
        alias: 'control-flow',
      },
      { pattern: /\bnull\b/, alias: ['null', 'nil'] },
      { pattern: /\bundefined\b/, alias: 'nil' }
    ),
    a.languages.insertBefore('javascript', 'operator', {
      spread: { pattern: /\.{3}/, alias: 'operator' },
      arrow: { pattern: /=>/, alias: 'operator' },
    }),
    a.languages.insertBefore('javascript', 'punctuation', {
      'property-access': { pattern: e('(\\.\\s*)#?<ID>'), lookbehind: !0 },
      'maybe-class-name': {
        pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
        lookbehind: !0,
      },
      dom: {
        pattern: /\b(?:document|location|navigator|performance|(?:local|session)Storage|window)\b/,
        alias: 'variable',
      },
      console: { pattern: /\bconsole(?=\s*\.)/, alias: 'class-name' },
    });
  for (
    var t = [
      'function',
      'function-variable',
      'method',
      'method-variable',
      'property-access',
    ],
    r = 0;
    r < t.length;
    r++
  ) {
    var n = t[r],
      s = a.languages.javascript[n];
    'RegExp' === a.util.type(s) &&
      (s = a.languages.javascript[n] = { pattern: s });
    var o = s.inside || {};
    (s.inside = o)['maybe-class-name'] = /^[A-Z][\s\S]*/;
  }
})(Prism);
(Prism.languages.json = {
  property: { pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, greedy: !0 },
  string: { pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, greedy: !0 },
  comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
  number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  punctuation: /[{}[\],]/,
  operator: /:/,
  boolean: /\b(?:true|false)\b/,
  null: { pattern: /\bnull\b/, alias: 'keyword' },
}),
  (Prism.languages.webmanifest = Prism.languages.json);
!(function (n) {
  var e = /("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/;
  n.languages.json5 = n.languages.extend('json', {
    property: [
      { pattern: RegExp(e.source + '(?=\\s*:)'), greedy: !0 },
      {
        pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/,
        alias: 'unquoted',
      },
    ],
    string: { pattern: e, greedy: !0 },
    number: /[+-]?\b(?:NaN|Infinity|0x[a-fA-F\d]+)\b|[+-]?(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+\b)?/,
  });
})(Prism);
(Prism.languages.jsonp = Prism.languages.extend('json', {
  punctuation: /[{}[\]();,.]/,
})),
  Prism.languages.insertBefore('jsonp', 'punctuation', {
    function: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*\()/,
  });
!(function (u) {
  var e = u.languages.javascript['template-string'],
    n = e.pattern.source,
    a = e.inside.interpolation,
    i = a.inside['interpolation-punctuation'],
    r = a.pattern.source;
  function t(e, t) {
    if (u.languages[e])
      return {
        pattern: RegExp('((?:' + t + ')\\s*)' + n),
        lookbehind: !0,
        greedy: !0,
        inside: {
          'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
          'embedded-code': { pattern: /[\s\S]+/, alias: e },
        },
      };
  }
  function o(e, t, n) {
    var r = { code: e, grammar: t, language: n };
    return (
      u.hooks.run('before-tokenize', r),
      (r.tokens = u.tokenize(r.code, r.grammar)),
      u.hooks.run('after-tokenize', r),
      r.tokens
    );
  }
  function d(e) {
    var t = {};
    t['interpolation-punctuation'] = i;
    var n = u.tokenize(e, t);
    if (3 === n.length) {
      var r = [1, 1];
      r.push.apply(r, o(n[1], u.languages.javascript, 'javascript')),
        n.splice.apply(n, r);
    }
    return new u.Token('interpolation', n, a.alias, e);
  }
  function c(a, e, i) {
    var t = u.tokenize(a, {
      interpolation: { pattern: RegExp(r), lookbehind: !0 },
    }),
      f = 0,
      y = {},
      n = o(
        t
          .map(function (e) {
            if ('string' == typeof e) return e;
            for (
              var t, n = e.content;
              -1 !==
              a.indexOf(
                ((r = f++), (t = '___' + i.toUpperCase() + '_' + r + '___'))
              );

            );
            return (y[t] = n), t;
            var r;
          })
          .join(''),
        e,
        i
      ),
      v = Object.keys(y);
    return (
      (f = 0),
      (function e(t) {
        for (var n = 0; n < t.length; n++) {
          if (f >= v.length) return;
          var r = t[n];
          if ('string' == typeof r || 'string' == typeof r.content) {
            var a = v[f],
              i = 'string' == typeof r ? r : r.content,
              o = i.indexOf(a);
            if (-1 !== o) {
              ++f;
              var s = i.substring(0, o),
                p = d(y[a]),
                l = i.substring(o + a.length),
                g = [];
              if ((s && g.push(s), g.push(p), l)) {
                var u = [l];
                e(u), g.push.apply(g, u);
              }
              'string' == typeof r
                ? (t.splice.apply(t, [n, 1].concat(g)), (n += g.length - 1))
                : (r.content = g);
            }
          } else {
            var c = r.content;
            Array.isArray(c) ? e(c) : e([c]);
          }
        }
      })(n),
      new u.Token(i, n, 'language-' + i, a)
    );
  }
  u.languages.javascript['template-string'] = [
    t(
      'css',
      '\\b(?:styled(?:\\([^)]*\\))?(?:\\s*\\.\\s*\\w+(?:\\([^)]*\\))*)*|css(?:\\s*\\.\\s*(?:global|resolve))?|createGlobalStyle|keyframes)'
    ),
    t('html', '\\bhtml|\\.\\s*(?:inner|outer)HTML\\s*\\+?='),
    t('svg', '\\bsvg'),
    t('markdown', '\\b(?:md|markdown)'),
    t('graphql', '\\b(?:gql|graphql(?:\\s*\\.\\s*experimental)?)'),
    e,
  ].filter(Boolean);
  var s = { javascript: !0, js: !0, typescript: !0, ts: !0, jsx: !0, tsx: !0 };
  function f(e) {
    return 'string' == typeof e
      ? e
      : Array.isArray(e)
        ? e.map(f).join('')
        : f(e.content);
  }
  u.hooks.add('after-tokenize', function (e) {
    e.language in s &&
      !(function e(t) {
        for (var n = 0, r = t.length; n < r; n++) {
          var a = t[n];
          if ('string' != typeof a) {
            var i = a.content;
            if (Array.isArray(i))
              if ('template-string' === a.type) {
                var o = i[1];
                if (
                  3 === i.length &&
                  'string' != typeof o &&
                  'embedded-code' === o.type
                ) {
                  var s = f(o),
                    p = o.alias,
                    l = Array.isArray(p) ? p[0] : p,
                    g = u.languages[l];
                  if (!g) continue;
                  i[1] = c(s, g, l);
                }
              } else e(i);
            else 'string' != typeof i && e([i]);
          }
        }
      })(e.tokens);
  });
})(Prism);
!(function (e) {
  (e.languages.kotlin = e.languages.extend('clike', {
    keyword: {
      pattern: /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,
      lookbehind: !0,
    },
    function: [
      { pattern: /(?:`[^\r\n`]+`|\w+)(?=\s*\()/, greedy: !0 },
      {
        pattern: /(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,
        lookbehind: !0,
        greedy: !0,
      },
    ],
    number: /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,
    operator: /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/,
  })),
    delete e.languages.kotlin['class-name'],
    e.languages.insertBefore('kotlin', 'string', {
      'raw-string': { pattern: /("""|''')[\s\S]*?\1/, alias: 'string' },
    }),
    e.languages.insertBefore('kotlin', 'keyword', {
      annotation: {
        pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,
        alias: 'builtin',
      },
    }),
    e.languages.insertBefore('kotlin', 'function', {
      label: { pattern: /\w+@|@\w+/, alias: 'symbol' },
    });
  var n = [
    {
      pattern: /\$\{[^}]+\}/,
      inside: {
        delimiter: { pattern: /^\$\{|\}$/, alias: 'variable' },
        rest: e.languages.kotlin,
      },
    },
    { pattern: /\$\w+/, alias: 'variable' },
  ];
  (e.languages.kotlin.string.inside = e.languages.kotlin[
    'raw-string'
  ].inside = { interpolation: n }),
    (e.languages.kt = e.languages.kotlin),
    (e.languages.kts = e.languages.kotlin);
})(Prism);
(Prism.languages.less = Prism.languages.extend('css', {
  comment: [/\/\*[\s\S]*?\*\//, { pattern: /(^|[^\\])\/\/.*/, lookbehind: !0 }],
  atrule: {
    pattern: /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
    inside: { punctuation: /[:()]/ },
  },
  selector: {
    pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
    inside: { variable: /@+[\w-]+/ },
  },
  property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
  operator: /[+\-*\/]/,
})),
  Prism.languages.insertBefore('less', 'property', {
    variable: [
      { pattern: /@[\w-]+\s*:/, inside: { punctuation: /:/ } },
      /@@?[\w-]+/,
    ],
    'mixin-usage': {
      pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
      lookbehind: !0,
      alias: 'function',
    },
  });
Prism.languages.makefile = {
  comment: {
    pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
    lookbehind: !0,
  },
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0,
  },
  builtin: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
  symbol: {
    pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
    inside: { variable: /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/ },
  },
  variable: /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
  keyword: [
    /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
    {
      pattern: /(\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \t])/,
      lookbehind: !0,
    },
  ],
  operator: /(?:::|[?:+!])?=|[|@]/,
  punctuation: /[:;(){}]/,
};
!(function (d) {
  function n(n) {
    return (
      (n = n.replace(/<inner>/g, function () {
        return '(?:\\\\.|[^\\\\\n\r]|(?:\n|\r\n?)(?!\n|\r\n?))';
      })),
      RegExp('((?:^|[^\\\\])(?:\\\\{2})*)(?:' + n + ')')
    );
  }
  var e = '(?:\\\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\\\|\r\n`])+',
    t = '\\|?__(?:\\|__)+\\|?(?:(?:\n|\r\n?)|(?![^]))'.replace(
      /__/g,
      function () {
        return e;
      }
    ),
    a =
      '\\|?[ \t]*:?-{3,}:?[ \t]*(?:\\|[ \t]*:?-{3,}:?[ \t]*)+\\|?(?:\n|\r\n?)';
  (d.languages.markdown = d.languages.extend('markup', {})),
    d.languages.insertBefore('markdown', 'prolog', {
      'front-matter-block': {
        pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          punctuation: /^---|---$/,
          'font-matter': {
            pattern: /\S+(?:\s+\S+)*/,
            alias: ['yaml', 'language-yaml'],
            inside: d.languages.yaml,
          },
        },
      },
      blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: 'punctuation' },
      table: {
        pattern: RegExp('^' + t + a + '(?:' + t + ')*', 'm'),
        inside: {
          'table-data-rows': {
            pattern: RegExp('^(' + t + a + ')(?:' + t + ')*$'),
            lookbehind: !0,
            inside: {
              'table-data': {
                pattern: RegExp(e),
                inside: d.languages.markdown,
              },
              punctuation: /\|/,
            },
          },
          'table-line': {
            pattern: RegExp('^(' + t + ')' + a + '$'),
            lookbehind: !0,
            inside: { punctuation: /\||:?-{3,}:?/ },
          },
          'table-header-row': {
            pattern: RegExp('^' + t + '$'),
            inside: {
              'table-header': {
                pattern: RegExp(e),
                alias: 'important',
                inside: d.languages.markdown,
              },
              punctuation: /\|/,
            },
          },
        },
      },
      code: [
        {
          pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
          lookbehind: !0,
          alias: 'keyword',
        },
        { pattern: /``.+?``|`[^`\r\n]+`/, alias: 'keyword' },
        {
          pattern: /^```[\s\S]*?^```$/m,
          greedy: !0,
          inside: {
            'code-block': {
              pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
              lookbehind: !0,
            },
            'code-language': { pattern: /^(```).+/, lookbehind: !0 },
            punctuation: /```/,
          },
        },
      ],
      title: [
        {
          pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
          alias: 'important',
          inside: { punctuation: /==+$|--+$/ },
        },
        {
          pattern: /(^\s*)#.+/m,
          lookbehind: !0,
          alias: 'important',
          inside: { punctuation: /^#+|#+$/ },
        },
      ],
      hr: {
        pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
        lookbehind: !0,
        alias: 'punctuation',
      },
      list: {
        pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
        lookbehind: !0,
        alias: 'punctuation',
      },
      'url-reference': {
        pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
        inside: {
          variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
          string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
          punctuation: /^[\[\]!:]|[<>]/,
        },
        alias: 'url',
      },
      bold: {
        pattern: n(
          '\\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\\b|\\*\\*(?:(?!\\*)<inner>|\\*(?:(?!\\*)<inner>)+\\*)+\\*\\*'
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          content: {
            pattern: /(^..)[\s\S]+(?=..$)/,
            lookbehind: !0,
            inside: {},
          },
          punctuation: /\*\*|__/,
        },
      },
      italic: {
        pattern: n(
          '\\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\\b|\\*(?:(?!\\*)<inner>|\\*\\*(?:(?!\\*)<inner>)+\\*\\*)+\\*'
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          content: { pattern: /(^.)[\s\S]+(?=.$)/, lookbehind: !0, inside: {} },
          punctuation: /[*_]/,
        },
      },
      strike: {
        pattern: n('(~~?)(?:(?!~)<inner>)+?\\2'),
        lookbehind: !0,
        greedy: !0,
        inside: {
          content: {
            pattern: /(^~~?)[\s\S]+(?=\1$)/,
            lookbehind: !0,
            inside: {},
          },
          punctuation: /~~?/,
        },
      },
      url: {
        pattern: n(
          '!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[\t ]+"(?:\\\\.|[^"\\\\])*")?\\)|[ \t]?\\[(?:(?!\\])<inner>)+\\])'
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          operator: /^!/,
          content: { pattern: /(^\[)[^\]]+(?=\])/, lookbehind: !0, inside: {} },
          variable: { pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/, lookbehind: !0 },
          url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
          string: {
            pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
            lookbehind: !0,
          },
        },
      },
    }),
    ['url', 'bold', 'italic', 'strike'].forEach(function (e) {
      ['url', 'bold', 'italic', 'strike'].forEach(function (n) {
        e !== n &&
          (d.languages.markdown[e].inside.content.inside[n] =
            d.languages.markdown[n]);
      });
    }),
    d.hooks.add('after-tokenize', function (n) {
      ('markdown' !== n.language && 'md' !== n.language) ||
        !(function n(e) {
          if (e && 'string' != typeof e)
            for (var t = 0, a = e.length; t < a; t++) {
              var i = e[t];
              if ('code' === i.type) {
                var r = i.content[1],
                  o = i.content[3];
                if (
                  r &&
                  o &&
                  'code-language' === r.type &&
                  'code-block' === o.type &&
                  'string' == typeof r.content
                ) {
                  var l = r.content
                    .replace(/\b#/g, 'sharp')
                    .replace(/\b\+\+/g, 'pp'),
                    s =
                      'language-' +
                      (l = (/[a-z][\w-]*/i.exec(l) || [''])[0].toLowerCase());
                  o.alias
                    ? 'string' == typeof o.alias
                      ? (o.alias = [o.alias, s])
                      : o.alias.push(s)
                    : (o.alias = [s]);
                }
              } else n(i.content);
            }
        })(n.tokens);
    }),
    d.hooks.add('wrap', function (n) {
      if ('code-block' === n.type) {
        for (var e = '', t = 0, a = n.classes.length; t < a; t++) {
          var i = n.classes[t],
            r = /language-(.+)/.exec(i);
          if (r) {
            e = r[1];
            break;
          }
        }
        var o = d.languages[e];
        if (o) {
          var l = n.content.replace(/&lt;/g, '<').replace(/&amp;/g, '&');
          n.content = d.highlight(l, o, e);
        } else if (e && 'none' !== e && d.plugins.autoloader) {
          var s =
            'md-' +
            new Date().valueOf() +
            '-' +
            Math.floor(1e16 * Math.random());
          (n.attributes.id = s),
            d.plugins.autoloader.loadLanguages(e, function () {
              var n = document.getElementById(s);
              n &&
                (n.innerHTML = d.highlight(n.textContent, d.languages[e], e));
            });
        }
      }
    }),
    (d.languages.md = d.languages.markdown);
})(Prism);
!(function ($) {
  var e = [
    '$eq',
    '$gt',
    '$gte',
    '$in',
    '$lt',
    '$lte',
    '$ne',
    '$nin',
    '$and',
    '$not',
    '$nor',
    '$or',
    '$exists',
    '$type',
    '$expr',
    '$jsonSchema',
    '$mod',
    '$regex',
    '$text',
    '$where',
    '$geoIntersects',
    '$geoWithin',
    '$near',
    '$nearSphere',
    '$all',
    '$elemMatch',
    '$size',
    '$bitsAllClear',
    '$bitsAllSet',
    '$bitsAnyClear',
    '$bitsAnySet',
    '$comment',
    '$elemMatch',
    '$meta',
    '$slice',
    '$currentDate',
    '$inc',
    '$min',
    '$max',
    '$mul',
    '$rename',
    '$set',
    '$setOnInsert',
    '$unset',
    '$addToSet',
    '$pop',
    '$pull',
    '$push',
    '$pullAll',
    '$each',
    '$position',
    '$slice',
    '$sort',
    '$bit',
    '$addFields',
    '$bucket',
    '$bucketAuto',
    '$collStats',
    '$count',
    '$currentOp',
    '$facet',
    '$geoNear',
    '$graphLookup',
    '$group',
    '$indexStats',
    '$limit',
    '$listLocalSessions',
    '$listSessions',
    '$lookup',
    '$match',
    '$merge',
    '$out',
    '$planCacheStats',
    '$project',
    '$redact',
    '$replaceRoot',
    '$replaceWith',
    '$sample',
    '$set',
    '$skip',
    '$sort',
    '$sortByCount',
    '$unionWith',
    '$unset',
    '$unwind',
    '$abs',
    '$accumulator',
    '$acos',
    '$acosh',
    '$add',
    '$addToSet',
    '$allElementsTrue',
    '$and',
    '$anyElementTrue',
    '$arrayElemAt',
    '$arrayToObject',
    '$asin',
    '$asinh',
    '$atan',
    '$atan2',
    '$atanh',
    '$avg',
    '$binarySize',
    '$bsonSize',
    '$ceil',
    '$cmp',
    '$concat',
    '$concatArrays',
    '$cond',
    '$convert',
    '$cos',
    '$dateFromParts',
    '$dateToParts',
    '$dateFromString',
    '$dateToString',
    '$dayOfMonth',
    '$dayOfWeek',
    '$dayOfYear',
    '$degreesToRadians',
    '$divide',
    '$eq',
    '$exp',
    '$filter',
    '$first',
    '$floor',
    '$function',
    '$gt',
    '$gte',
    '$hour',
    '$ifNull',
    '$in',
    '$indexOfArray',
    '$indexOfBytes',
    '$indexOfCP',
    '$isArray',
    '$isNumber',
    '$isoDayOfWeek',
    '$isoWeek',
    '$isoWeekYear',
    '$last',
    '$last',
    '$let',
    '$literal',
    '$ln',
    '$log',
    '$log10',
    '$lt',
    '$lte',
    '$ltrim',
    '$map',
    '$max',
    '$mergeObjects',
    '$meta',
    '$min',
    '$millisecond',
    '$minute',
    '$mod',
    '$month',
    '$multiply',
    '$ne',
    '$not',
    '$objectToArray',
    '$or',
    '$pow',
    '$push',
    '$radiansToDegrees',
    '$range',
    '$reduce',
    '$regexFind',
    '$regexFindAll',
    '$regexMatch',
    '$replaceOne',
    '$replaceAll',
    '$reverseArray',
    '$round',
    '$rtrim',
    '$second',
    '$setDifference',
    '$setEquals',
    '$setIntersection',
    '$setIsSubset',
    '$setUnion',
    '$size',
    '$sin',
    '$slice',
    '$split',
    '$sqrt',
    '$stdDevPop',
    '$stdDevSamp',
    '$strcasecmp',
    '$strLenBytes',
    '$strLenCP',
    '$substr',
    '$substrBytes',
    '$substrCP',
    '$subtract',
    '$sum',
    '$switch',
    '$tan',
    '$toBool',
    '$toDate',
    '$toDecimal',
    '$toDouble',
    '$toInt',
    '$toLong',
    '$toObjectId',
    '$toString',
    '$toLower',
    '$toUpper',
    '$trim',
    '$trunc',
    '$type',
    '$week',
    '$year',
    '$zip',
    '$comment',
    '$explain',
    '$hint',
    '$max',
    '$maxTimeMS',
    '$min',
    '$orderby',
    '$query',
    '$returnKey',
    '$showDiskLoc',
    '$natural',
  ],
    t =
      '(?:' +
      (e = e.map(function ($) {
        return $.replace('$', '\\$');
      })).join('|') +
      ')\\b';
  ($.languages.mongodb = $.languages.extend('javascript', {})),
    $.languages.insertBefore('mongodb', 'string', {
      property: {
        pattern: /(?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)(?=\s*:)/,
        greedy: !0,
        inside: { keyword: RegExp('^([\'"])?' + t + '(?:\\1)?$') },
      },
    }),
    ($.languages.mongodb.string.inside = {
      url: {
        pattern: /https?:\/\/[-\w@:%.+~#=]{1,256}\.[a-z0-9()]{1,6}\b[-\w()@:%+.~#?&/=]*/i,
        greedy: !0,
      },
      entity: {
        pattern: /\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/,
        greedy: !0,
      },
    }),
    $.languages.insertBefore('mongodb', 'constant', {
      builtin: {
        pattern: RegExp(
          '\\b(?:' +
          [
            'ObjectId',
            'Code',
            'BinData',
            'DBRef',
            'Timestamp',
            'NumberLong',
            'NumberDecimal',
            'MaxKey',
            'MinKey',
            'RegExp',
            'ISODate',
            'UUID',
          ].join('|') +
          ')\\b'
        ),
        alias: 'keyword',
      },
    });
})(Prism);
(Prism.languages.objectivec = Prism.languages.extend('c', {
  string: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
  keyword: /\b(?:asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
  operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/,
})),
  delete Prism.languages.objectivec['class-name'],
  (Prism.languages.objc = Prism.languages.objectivec);
!(function (a) {
  var e = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/,
    t = [
      { pattern: /\b(?:false|true)\b/i, alias: 'boolean' },
      /\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/,
      /\b(?:null)\b/i,
    ],
    i = /\b0b[01]+\b|\b0x[\da-f]+\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    n = /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/,
    s = /[{}\[\](),:;]/;
  a.languages.php = {
    delimiter: { pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i, alias: 'important' },
    comment: e,
    variable: /\$+(?:\w+\b|(?={))/i,
    package: {
      pattern: /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
      lookbehind: !0,
      inside: { punctuation: /\\/ },
    },
    keyword: [
      {
        pattern: /(\(\s*)\b(?:bool|boolean|int|integer|float|string|object|array)\b(?=\s*\))/i,
        alias: 'type-casting',
        greedy: !0,
        lookbehind: !0,
      },
      {
        pattern: /([(,?]\s*)\b(?:bool|int|float|string|object|array(?!\s*\()|mixed|self|static|callable|iterable|(?:null|false)(?=\s*\|))\b(?=\s*\$)/i,
        alias: 'type-hint',
        greedy: !0,
        lookbehind: !0,
      },
      {
        pattern: /([(,?]\s*[a-z0-9_|]\|\s*)(?:null|false)\b(?=\s*\$)/i,
        alias: 'type-hint',
        greedy: !0,
        lookbehind: !0,
      },
      {
        pattern: /(\)\s*:\s*(?:\?\s*)?)\b(?:bool|int|float|string|object|void|array(?!\s*\()|mixed|self|static|callable|iterable|(?:null|false)(?=\s*\|))\b/i,
        alias: 'return-type',
        greedy: !0,
        lookbehind: !0,
      },
      {
        pattern: /(\)\s*:\s*(?:\?\s*)?[a-z0-9_|]\|\s*)(?:null|false)\b/i,
        alias: 'return-type',
        greedy: !0,
        lookbehind: !0,
      },
      {
        pattern: /\b(?:bool|int|float|string|object|void|array(?!\s*\()|mixed|iterable|(?:null|false)(?=\s*\|))\b/i,
        alias: 'type-declaration',
        greedy: !0,
      },
      {
        pattern: /(\|\s*)(?:null|false)\b/i,
        alias: 'type-declaration',
        greedy: !0,
        lookbehind: !0,
      },
      {
        pattern: /\b(?:parent|self|static)(?=\s*::)/i,
        alias: 'static-context',
        greedy: !0,
      },
      /\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|match|new|or|parent|print|private|protected|public|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,
    ],
    'argument-name': /\b[a-z_]\w*(?=\s*:(?!:))/i,
    'class-name': [
      {
        pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,
        greedy: !0,
        lookbehind: !0,
      },
      { pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i, greedy: !0, lookbehind: !0 },
      { pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i, greedy: !0 },
      {
        pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,
        alias: 'class-name-fully-qualified',
        greedy: !0,
        lookbehind: !0,
        inside: { punctuation: /\\/ },
      },
      {
        pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,
        alias: 'class-name-fully-qualified',
        greedy: !0,
        inside: { punctuation: /\\/ },
      },
      {
        pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
        alias: 'class-name-fully-qualified',
        greedy: !0,
        lookbehind: !0,
        inside: { punctuation: /\\/ },
      },
      {
        pattern: /\b[a-z_]\w*(?=\s*\$)/i,
        alias: 'type-declaration',
        greedy: !0,
      },
      {
        pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
        alias: ['class-name-fully-qualified', 'type-declaration'],
        greedy: !0,
        inside: { punctuation: /\\/ },
      },
      { pattern: /\b[a-z_]\w*(?=\s*::)/i, alias: 'static-context', greedy: !0 },
      {
        pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,
        alias: ['class-name-fully-qualified', 'static-context'],
        greedy: !0,
        inside: { punctuation: /\\/ },
      },
      {
        pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,
        alias: 'type-hint',
        greedy: !0,
        lookbehind: !0,
      },
      {
        pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
        alias: ['class-name-fully-qualified', 'type-hint'],
        greedy: !0,
        lookbehind: !0,
        inside: { punctuation: /\\/ },
      },
      {
        pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,
        alias: 'return-type',
        greedy: !0,
        lookbehind: !0,
      },
      {
        pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
        alias: ['class-name-fully-qualified', 'return-type'],
        greedy: !0,
        lookbehind: !0,
        inside: { punctuation: /\\/ },
      },
    ],
    constant: t,
    function: /\w+\s*(?=\()/,
    property: { pattern: /(->)[\w]+/, lookbehind: !0 },
    number: i,
    operator: n,
    punctuation: s,
  };
  var l = {
    pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)*)/,
    lookbehind: !0,
    inside: a.languages.php,
  },
    r = [
      {
        pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
        alias: 'nowdoc-string',
        greedy: !0,
        inside: {
          delimiter: {
            pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
            alias: 'symbol',
            inside: { punctuation: /^<<<'?|[';]$/ },
          },
        },
      },
      {
        pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
        alias: 'heredoc-string',
        greedy: !0,
        inside: {
          delimiter: {
            pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
            alias: 'symbol',
            inside: { punctuation: /^<<<"?|[";]$/ },
          },
          interpolation: l,
        },
      },
      {
        pattern: /`(?:\\[\s\S]|[^\\`])*`/,
        alias: 'backtick-quoted-string',
        greedy: !0,
      },
      {
        pattern: /'(?:\\[\s\S]|[^\\'])*'/,
        alias: 'single-quoted-string',
        greedy: !0,
      },
      {
        pattern: /"(?:\\[\s\S]|[^\\"])*"/,
        alias: 'double-quoted-string',
        greedy: !0,
        inside: { interpolation: l },
      },
    ];
  a.languages.insertBefore('php', 'variable', { string: r }),
    a.languages.insertBefore('php', 'variable', {
      attribute: {
        pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,
        greedy: !0,
        inside: {
          'attribute-content': {
            pattern: /^(#\[)[\s\S]+(?=]$)/,
            lookbehind: !0,
            inside: {
              comment: e,
              string: r,
              'attribute-class-name': [
                {
                  pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i,
                  alias: 'class-name',
                  greedy: !0,
                  lookbehind: !0,
                },
                {
                  pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i,
                  alias: ['class-name', 'class-name-fully-qualified'],
                  greedy: !0,
                  lookbehind: !0,
                  inside: { punctuation: /\\/ },
                },
              ],
              constant: t,
              number: i,
              operator: n,
              punctuation: s,
            },
          },
          delimiter: { pattern: /^#\[|]$/, alias: 'punctuation' },
        },
      },
    }),
    a.hooks.add('before-tokenize', function (e) {
      if (/<\?/.test(e.code)) {
        a.languages['markup-templating'].buildPlaceholders(
          e,
          'php',
          /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*[\s\S]*?(?:\*\/|$))*?(?:\?>|$)/gi
        );
      }
    }),
    a.hooks.add('after-tokenize', function (e) {
      a.languages['markup-templating'].tokenizePlaceholders(e, 'php');
    });
})(Prism);
Prism.languages.insertBefore('php', 'variable', {
  this: /\$this\b/,
  global: /\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)\b/,
  scope: {
    pattern: /\b[\w\\]+::/,
    inside: { keyword: /static|self|parent/, punctuation: /::|\\/ },
  },
});
Prism.languages.sql = {
  comment: {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
    lookbehind: !0,
  },
  variable: [
    { pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 },
    /@[\w.$]+/,
  ],
  string: {
    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
    greedy: !0,
    lookbehind: !0,
  },
  function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
  keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:S|ING)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
  boolean: /\b(?:TRUE|FALSE|NULL)\b/i,
  number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
  operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
  punctuation: /[;[\]()`,.]/,
};
!(function (E) {
  var A = (E.languages.plsql = E.languages.extend('sql', {
    comment: [/\/\*[\s\S]*?\*\//, /--.*/],
  })),
    T = A.keyword;
  Array.isArray(T) || (T = A.keyword = [T]),
    T.unshift(
      /\b(?:ACCESS|AGENT|AGGREGATE|ARRAY|ARROW|AT|ATTRIBUTE|AUDIT|AUTHID|BFILE_BASE|BLOB_BASE|BLOCK|BODY|BOTH|BOUND|BYTE|CALLING|CHAR_BASE|CHARSET(?:FORM|ID)|CLOB_BASE|COLAUTH|COLLECT|CLUSTERS?|COMPILED|COMPRESS|CONSTANT|CONSTRUCTOR|CONTEXT|CRASH|CUSTOMDATUM|DANGLING|DATE_BASE|DEFINE|DETERMINISTIC|DURATION|ELEMENT|EMPTY|EXCEPTIONS?|EXCLUSIVE|EXTERNAL|FINAL|FORALL|FORM|FOUND|GENERAL|HEAP|HIDDEN|IDENTIFIED|IMMEDIATE|INCLUDING|INCREMENT|INDICATOR|INDEXES|INDICES|INFINITE|INITIAL|ISOPEN|INSTANTIABLE|INTERFACE|INVALIDATE|JAVA|LARGE|LEADING|LENGTH|LIBRARY|LIKE[24C]|LIMITED|LONG|LOOP|MAP|MAXEXTENTS|MAXLEN|MEMBER|MINUS|MLSLABEL|MULTISET|NAME|NAN|NATIVE|NEW|NOAUDIT|NOCOMPRESS|NOCOPY|NOTFOUND|NOWAIT|NUMBER(?:_BASE)?|OBJECT|OCI(?:COLL|DATE|DATETIME|DURATION|INTERVAL|LOBLOCATOR|NUMBER|RAW|REF|REFCURSOR|ROWID|STRING|TYPE)|OFFLINE|ONLINE|ONLY|OPAQUE|OPERATOR|ORACLE|ORADATA|ORGANIZATION|ORL(?:ANY|VARY)|OTHERS|OVERLAPS|OVERRIDING|PACKAGE|PARALLEL_ENABLE|PARAMETERS?|PASCAL|PCTFREE|PIPE(?:LINED)?|PRAGMA|PRIOR|PRIVATE|RAISE|RANGE|RAW|RECORD|REF|REFERENCE|REM|REMAINDER|RESULT|RESOURCE|RETURNING|REVERSE|ROW(?:ID|NUM|TYPE)|SAMPLE|SB[124]|SEGMENT|SELF|SEPARATE|SEQUENCE|SHORT|SIZE(?:_T)?|SPARSE|SQL(?:CODE|DATA|NAME|STATE)|STANDARD|STATIC|STDDEV|STORED|STRING|STRUCT|STYLE|SUBMULTISET|SUBPARTITION|SUBSTITUTABLE|SUBTYPE|SUCCESSFUL|SYNONYM|SYSDATE|TABAUTH|TDO|THE|TIMEZONE_(?:ABBR|HOUR|MINUTE|REGION)|TRAILING|TRANSAC(?:TIONAL)?|TRUSTED|UB[124]|UID|UNDER|UNTRUSTED|VALIDATE|VALIST|VARCHAR2|VARIABLE|VARIANCE|VARRAY|VIEWS|VOID|WHENEVER|WRAPPED|ZONE)\b/i
    );
  var R = A.operator;
  Array.isArray(R) || (R = A.operator = [R]), R.unshift(/:=/);
})(Prism);
!(function (e) {
  var i = (Prism.languages.powershell = {
    comment: [
      { pattern: /(^|[^`])<#[\s\S]*?#>/, lookbehind: !0 },
      { pattern: /(^|[^`])#.*/, lookbehind: !0 },
    ],
    string: [
      {
        pattern: /"(?:`[\s\S]|[^`"])*"/,
        greedy: !0,
        inside: {
          function: {
            pattern: /(^|[^`])\$\((?:\$\([^\r\n()]*\)|(?!\$\()[^\r\n)])*\)/,
            lookbehind: !0,
            inside: {},
          },
        },
      },
      { pattern: /'(?:[^']|'')*'/, greedy: !0 },
    ],
    namespace: /\[[a-z](?:\[(?:\[[^\]]*]|[^\[\]])*]|[^\[\]])*]/i,
    boolean: /\$(?:true|false)\b/i,
    variable: /\$\w+\b/,
    function: [
      /\b(?:Add|Approve|Assert|Backup|Block|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|ForEach|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Move|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Sort|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Tee|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Where|Write)-[a-z]+\b/i,
      /\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i,
    ],
    keyword: /\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,
    operator: {
      pattern: /(\W?)(?:!|-(?:eq|ne|gt|ge|lt|le|sh[lr]|not|b?(?:and|x?or)|(?:Not)?(?:Like|Match|Contains|In)|Replace|Join|is(?:Not)?|as)\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,
      lookbehind: !0,
    },
    punctuation: /[|{}[\];(),.]/,
  }),
    r = i.string[0].inside;
  (r.boolean = i.boolean), (r.variable = i.variable), (r.function.inside = i);
})();
!(function (e) {
  e.languages.pug = {
    comment: {
      pattern: /(^([\t ]*))\/\/.*(?:(?:\r?\n|\r)\2[\t ].+)*/m,
      lookbehind: !0,
    },
    'multiline-script': {
      pattern: /(^([\t ]*)script\b.*\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,
      lookbehind: !0,
      inside: e.languages.javascript,
    },
    filter: {
      pattern: /(^([\t ]*)):.+(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,
      lookbehind: !0,
      inside: { 'filter-name': { pattern: /^:[\w-]+/, alias: 'variable' } },
    },
    'multiline-plain-text': {
      pattern: /(^([\t ]*)[\w\-#.]+\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,
      lookbehind: !0,
    },
    markup: {
      pattern: /(^[\t ]*)<.+/m,
      lookbehind: !0,
      inside: e.languages.markup,
    },
    doctype: { pattern: /((?:^|\n)[\t ]*)doctype(?: .+)?/, lookbehind: !0 },
    'flow-control': {
      pattern: /(^[\t ]*)(?:if|unless|else|case|when|default|each|while)\b(?: .+)?/m,
      lookbehind: !0,
      inside: {
        each: {
          pattern: /^each .+? in\b/,
          inside: { keyword: /\b(?:each|in)\b/, punctuation: /,/ },
        },
        branch: {
          pattern: /^(?:if|unless|else|case|when|default|while)\b/,
          alias: 'keyword',
        },
        rest: e.languages.javascript,
      },
    },
    keyword: {
      pattern: /(^[\t ]*)(?:block|extends|include|append|prepend)\b.+/m,
      lookbehind: !0,
    },
    mixin: [
      {
        pattern: /(^[\t ]*)mixin .+/m,
        lookbehind: !0,
        inside: {
          keyword: /^mixin/,
          function: /\w+(?=\s*\(|\s*$)/,
          punctuation: /[(),.]/,
        },
      },
      {
        pattern: /(^[\t ]*)\+.+/m,
        lookbehind: !0,
        inside: {
          name: { pattern: /^\+\w+/, alias: 'function' },
          rest: e.languages.javascript,
        },
      },
    ],
    script: {
      pattern: /(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]).+/m,
      lookbehind: !0,
      inside: e.languages.javascript,
    },
    'plain-text': {
      pattern: /(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]).+/m,
      lookbehind: !0,
    },
    tag: {
      pattern: /(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,
      lookbehind: !0,
      inside: {
        attributes: [
          { pattern: /&[^(]+\([^)]+\)/, inside: e.languages.javascript },
          {
            pattern: /\([^)]+\)/,
            inside: {
              'attr-value': {
                pattern: /(=\s*(?!\s))(?:\{[^}]*\}|[^,)\r\n]+)/,
                lookbehind: !0,
                inside: e.languages.javascript,
              },
              'attr-name': /[\w-]+(?=\s*!?=|\s*[,)])/,
              punctuation: /[!=(),]+/,
            },
          },
        ],
        punctuation: /:/,
        'attr-id': /#[\w\-]+/,
        'attr-class': /\.[\w\-]+/,
      },
    },
    code: [
      {
        pattern: /(^[\t ]*(?:-|!?=)).+/m,
        lookbehind: !0,
        inside: e.languages.javascript,
      },
    ],
    punctuation: /[.\-!=|]+/,
  };
  for (
    var t = [
      { filter: 'atpl', language: 'twig' },
      { filter: 'coffee', language: 'coffeescript' },
      'ejs',
      'handlebars',
      'less',
      'livescript',
      'markdown',
      { filter: 'sass', language: 'scss' },
      'stylus',
    ],
    n = {},
    a = 0,
    i = t.length;
    a < i;
    a++
  ) {
    var r = t[a];
    (r = 'string' == typeof r ? { filter: r, language: r } : r),
      e.languages[r.language] &&
      (n['filter-' + r.filter] = {
        pattern: RegExp(
          '(^([\t ]*)):{{filter_name}}(?:(?:\r?\n|\r(?!\n))(?:\\2[\t ].+|\\s*?(?=\r?\n|\r)))+'.replace(
            '{{filter_name}}',
            function () {
              return r.filter;
            }
          ),
          'm'
        ),
        lookbehind: !0,
        inside: {
          'filter-name': { pattern: /^:[\w-]+/, alias: 'variable' },
          rest: e.languages[r.language],
        },
      });
  }
  e.languages.insertBefore('pug', 'filter', n);
})(Prism);
(Prism.languages.python = {
  comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0 },
  'string-interpolation': {
    pattern: /(?:f|rf|fr)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: !0,
    inside: {
      interpolation: {
        pattern: /((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,
        lookbehind: !0,
        inside: {
          'format-spec': { pattern: /(:)[^:(){}]+(?=}$)/, lookbehind: !0 },
          'conversion-option': {
            pattern: /![sra](?=[:}]$)/,
            alias: 'punctuation',
          },
          rest: null,
        },
      },
      string: /[\s\S]+/,
    },
  },
  'triple-quoted-string': {
    pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]*?\1/i,
    greedy: !0,
    alias: 'string',
  },
  string: {
    pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: !0,
  },
  function: {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: !0,
  },
  'class-name': { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
  decorator: {
    pattern: /(^\s*)@\w+(?:\.\w+)*/im,
    lookbehind: !0,
    alias: ['annotation', 'punctuation'],
    inside: { punctuation: /\./ },
  },
  keyword: /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  boolean: /\b(?:True|False|None)\b/,
  number: /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?j?\b/i,
  operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  punctuation: /[{}[\];(),.:]/,
}),
  (Prism.languages.python[
    'string-interpolation'
  ].inside.interpolation.inside.rest = Prism.languages.python),
  (Prism.languages.py = Prism.languages.python);
Prism.languages.r = {
  comment: /#.*/,
  string: { pattern: /(['"])(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
  'percent-operator': { pattern: /%[^%\s]*%/, alias: 'operator' },
  boolean: /\b(?:TRUE|FALSE)\b/,
  ellipsis: /\.\.(?:\.|\d+)/,
  number: [
    /\b(?:NaN|Inf)\b/,
    /(?:\b0x[\dA-Fa-f]+(?:\.\d*)?|\b\d+(?:\.\d*)?|\B\.\d+)(?:[EePp][+-]?\d+)?[iL]?/,
  ],
  keyword: /\b(?:if|else|repeat|while|function|for|in|next|break|NULL|NA|NA_integer_|NA_real_|NA_complex_|NA_character_)\b/,
  operator: /->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\|\|?|[+*\/^$@~]/,
  punctuation: /[(){}\[\],;]/,
};
!(function (i) {
  var t = i.util.clone(i.languages.javascript);
  (i.languages.jsx = i.languages.extend('markup', t)),
    (i.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+(?:\s+(?:[\w.:$-]+(?:=(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s{'">=]+|\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i),
    (i.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/i),
    (i.languages.jsx.tag.inside[
      'attr-value'
    ].pattern = /=(?!\{)(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s'">]+)/i),
    (i.languages.jsx.tag.inside.tag.inside[
      'class-name'
    ] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
    i.languages.insertBefore(
      'inside',
      'attr-name',
      {
        spread: {
          pattern: /\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,
          inside: { punctuation: /\.{3}|[{}.]/, 'attr-value': /\w+/ },
        },
      },
      i.languages.jsx.tag
    ),
    i.languages.insertBefore(
      'inside',
      'attr-value',
      {
        script: {
          pattern: /=(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\})/i,
          inside: {
            'script-punctuation': { pattern: /^=(?={)/, alias: 'punctuation' },
            rest: i.languages.jsx,
          },
          alias: 'language-javascript',
        },
      },
      i.languages.jsx.tag
    );
  var o = function (t) {
    return t
      ? 'string' == typeof t
        ? t
        : 'string' == typeof t.content
          ? t.content
          : t.content.map(o).join('')
      : '';
  },
    p = function (t) {
      for (var n = [], e = 0; e < t.length; e++) {
        var a = t[e],
          s = !1;
        if (
          ('string' != typeof a &&
            ('tag' === a.type && a.content[0] && 'tag' === a.content[0].type
              ? '</' === a.content[0].content[0].content
                ? 0 < n.length &&
                n[n.length - 1].tagName === o(a.content[0].content[1]) &&
                n.pop()
                : '/>' === a.content[a.content.length - 1].content ||
                n.push({
                  tagName: o(a.content[0].content[1]),
                  openedBraces: 0,
                })
              : 0 < n.length && 'punctuation' === a.type && '{' === a.content
                ? n[n.length - 1].openedBraces++
                : 0 < n.length &&
                  0 < n[n.length - 1].openedBraces &&
                  'punctuation' === a.type &&
                  '}' === a.content
                  ? n[n.length - 1].openedBraces--
                  : (s = !0)),
            (s || 'string' == typeof a) &&
            0 < n.length &&
            0 === n[n.length - 1].openedBraces)
        ) {
          var g = o(a);
          e < t.length - 1 &&
            ('string' == typeof t[e + 1] || 'plain-text' === t[e + 1].type) &&
            ((g += o(t[e + 1])), t.splice(e + 1, 1)),
            0 < e &&
            ('string' == typeof t[e - 1] || 'plain-text' === t[e - 1].type) &&
            ((g = o(t[e - 1]) + g), t.splice(e - 1, 1), e--),
            (t[e] = new i.Token('plain-text', g, null, g));
        }
        a.content && 'string' != typeof a.content && p(a.content);
      }
    };
  i.hooks.add('after-tokenize', function (t) {
    ('jsx' !== t.language && 'tsx' !== t.language) || p(t.tokens);
  });
})(Prism);
!(function (e) {
  (e.languages.typescript = e.languages.extend('javascript', {
    'class-name': {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
      lookbehind: !0,
      greedy: !0,
      inside: null,
    },
    keyword: /\b(?:abstract|as|asserts|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|undefined|var|void|while|with|yield)\b/,
    builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
  })),
    delete e.languages.typescript.parameter;
  var n = e.languages.extend('typescript', {});
  delete n['class-name'],
    (e.languages.typescript['class-name'].inside = n),
    e.languages.insertBefore('typescript', 'function', {
      'generic-function': {
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
        greedy: !0,
        inside: {
          function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
          generic: { pattern: /<[\s\S]+/, alias: 'class-name', inside: n },
        },
      },
    }),
    (e.languages.ts = e.languages.typescript);
})(Prism);
!(function (a) {
  var e = a.util.clone(a.languages.typescript);
  a.languages.tsx = a.languages.extend('jsx', e);
  var t = a.languages.tsx.tag;
  (t.pattern = RegExp(
    '(^|[^\\w$]|(?=</))(?:' + t.pattern.source + ')',
    t.pattern.flags
  )),
    (t.lookbehind = !0);
})(Prism);
!(function (a) {
  var e = { pattern: /\\[\\(){}[\]^$+*?|.]/, alias: 'escape' },
    n = /\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|c[a-zA-Z]|0[0-7]{0,2}|[123][0-7]{2}|.)/,
    t = '(?:[^\\\\-]|' + n.source + ')',
    s = RegExp(t + '-' + t),
    i = { pattern: /(<|')[^<>']+(?=[>']$)/, lookbehind: !0, alias: 'variable' };
  a.languages.regex = {
    charset: {
      pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,
      lookbehind: !0,
      inside: {
        'charset-negation': {
          pattern: /(^\[)\^/,
          lookbehind: !0,
          alias: 'operator',
        },
        'charset-punctuation': { pattern: /^\[|\]$/, alias: 'punctuation' },
        range: {
          pattern: s,
          inside: {
            escape: n,
            'range-punctuation': { pattern: /-/, alias: 'operator' },
          },
        },
        'special-escape': e,
        charclass: { pattern: /\\[wsd]|\\p{[^{}]+}/i, alias: 'class-name' },
        escape: n,
      },
    },
    'special-escape': e,
    charclass: { pattern: /\.|\\[wsd]|\\p{[^{}]+}/i, alias: 'class-name' },
    backreference: [
      { pattern: /\\(?![123][0-7]{2})[1-9]/, alias: 'keyword' },
      {
        pattern: /\\k<[^<>']+>/,
        alias: 'keyword',
        inside: { 'group-name': i },
      },
    ],
    anchor: { pattern: /[$^]|\\[ABbGZz]/, alias: 'function' },
    escape: n,
    group: [
      {
        pattern: /\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,
        alias: 'punctuation',
        inside: { 'group-name': i },
      },
      { pattern: /\)/, alias: 'punctuation' },
    ],
    quantifier: { pattern: /(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/, alias: 'number' },
    alternation: { pattern: /\|/, alias: 'keyword' },
  };
})(Prism);
!(function (e) {
  e.languages.ruby = e.languages.extend('clike', {
    comment: [/#.*/, { pattern: /^=begin\s[\s\S]*?^=end/m, greedy: !0 }],
    'class-name': {
      pattern: /(\b(?:class)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: { punctuation: /[.\\]/ },
    },
    keyword: /\b(?:alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|protected|private|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/,
  });
  var n = {
    pattern: /#\{[^}]+\}/,
    inside: {
      delimiter: { pattern: /^#\{|\}$/, alias: 'tag' },
      rest: e.languages.ruby,
    },
  };
  delete e.languages.ruby.function,
    e.languages.insertBefore('ruby', 'keyword', {
      regex: [
        {
          pattern: RegExp(
            '%r(?:' +
            [
              '([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1[gim]{0,3}',
              '\\((?:[^()\\\\]|\\\\[^])*\\)[gim]{0,3}',
              '\\{(?:[^#{}\\\\]|#(?:\\{[^}]+\\})?|\\\\[^])*\\}[gim]{0,3}',
              '\\[(?:[^\\[\\]\\\\]|\\\\[^])*\\][gim]{0,3}',
              '<(?:[^<>\\\\]|\\\\[^])*>[gim]{0,3}',
            ].join('|') +
            ')'
          ),
          greedy: !0,
          inside: { interpolation: n },
        },
        {
          pattern: /(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[gim]{0,3}(?=\s*(?:$|[\r\n,.;})]))/,
          lookbehind: !0,
          greedy: !0,
        },
      ],
      variable: /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
      symbol: { pattern: /(^|[^:]):[a-zA-Z_]\w*(?:[?!]|\b)/, lookbehind: !0 },
      'method-definition': {
        pattern: /(\bdef\s+)[\w.]+/,
        lookbehind: !0,
        inside: { function: /\w+$/, rest: e.languages.ruby },
      },
    }),
    e.languages.insertBefore('ruby', 'number', {
      builtin: /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|Fixnum|Float|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,
      constant: /\b[A-Z]\w*(?:[?!]|\b)/,
    }),
    (e.languages.ruby.string = [
      {
        pattern: RegExp(
          '%[qQiIwWxs]?(?:' +
          [
            '([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1',
            '\\((?:[^()\\\\]|\\\\[^])*\\)',
            '\\{(?:[^#{}\\\\]|#(?:\\{[^}]+\\})?|\\\\[^])*\\}',
            '\\[(?:[^\\[\\]\\\\]|\\\\[^])*\\]',
            '<(?:[^<>\\\\]|\\\\[^])*>',
          ].join('|') +
          ')'
        ),
        greedy: !0,
        inside: { interpolation: n },
      },
      {
        pattern: /("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,
        greedy: !0,
        inside: { interpolation: n },
      },
    ]),
    (e.languages.rb = e.languages.ruby);
})(Prism);
!(function (e) {
  (e.languages.sass = e.languages.extend('css', {
    comment: {
      pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
      lookbehind: !0,
    },
  })),
    e.languages.insertBefore('sass', 'atrule', {
      'atrule-line': {
        pattern: /^(?:[ \t]*)[@+=].+/m,
        inside: { atrule: /(?:@[\w-]+|[+=])/m },
      },
    }),
    delete e.languages.sass.atrule;
  var t = /\$[-\w]+|#\{\$[-\w]+\}/,
    a = [
      /[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/,
      { pattern: /(\s+)-(?=\s)/, lookbehind: !0 },
    ];
  e.languages.insertBefore('sass', 'property', {
    'variable-line': {
      pattern: /^[ \t]*\$.+/m,
      inside: { punctuation: /:/, variable: t, operator: a },
    },
    'property-line': {
      pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
      inside: {
        property: [
          /[^:\s]+(?=\s*:)/,
          { pattern: /(:)[^:\s]+/, lookbehind: !0 },
        ],
        punctuation: /:/,
        variable: t,
        operator: a,
        important: e.languages.sass.important,
      },
    },
  }),
    delete e.languages.sass.property,
    delete e.languages.sass.important,
    e.languages.insertBefore('sass', 'punctuation', {
      selector: {
        pattern: /([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/,
        lookbehind: !0,
      },
    });
})(Prism);
(Prism.languages.scss = Prism.languages.extend('css', {
  comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0 },
  atrule: {
    pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
    inside: { rule: /@[\w-]+/ },
  },
  url: /(?:[-a-z]+-)?url(?=\()/i,
  selector: {
    pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]+))/m,
    inside: {
      parent: { pattern: /&/, alias: 'important' },
      placeholder: /%[-\w]+/,
      variable: /\$[-\w]+|#\{\$[-\w]+\}/,
    },
  },
  property: {
    pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
    inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ },
  },
})),
  Prism.languages.insertBefore('scss', 'atrule', {
    keyword: [
      /@(?:if|else(?: if)?|forward|for|each|while|import|use|extend|debug|warn|mixin|include|function|return|content)\b/i,
      { pattern: /( +)(?:from|through)(?= )/, lookbehind: !0 },
    ],
  }),
  Prism.languages.insertBefore('scss', 'important', {
    variable: /\$[-\w]+|#\{\$[-\w]+\}/,
  }),
  Prism.languages.insertBefore('scss', 'function', {
    'module-modifier': {
      pattern: /\b(?:as|with|show|hide)\b/i,
      alias: 'keyword',
    },
    placeholder: { pattern: /%[-\w]+/, alias: 'selector' },
    statement: { pattern: /\B!(?:default|optional)\b/i, alias: 'keyword' },
    boolean: /\b(?:true|false)\b/,
    null: { pattern: /\bnull\b/, alias: 'keyword' },
    operator: {
      pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
      lookbehind: !0,
    },
  }),
  (Prism.languages.scss.atrule.inside.rest = Prism.languages.scss);
(Prism.languages.scala = Prism.languages.extend('java', {
  'triple-quoted-string': {
    pattern: /"""[\s\S]*?"""/,
    greedy: !0,
    alias: 'string',
  },
  string: { pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
  keyword: /<-|=>|\b(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|null|object|override|package|private|protected|return|sealed|self|super|this|throw|trait|try|type|val|var|while|with|yield)\b/,
  number: /\b0x(?:[\da-f]*\.)?[\da-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e\d+)?[dfl]?/i,
  builtin: /\b(?:String|Int|Long|Short|Byte|Boolean|Double|Float|Char|Any|AnyRef|AnyVal|Unit|Nothing)\b/,
  symbol: /'[^\d\s\\]\w*/,
})),
  delete Prism.languages.scala['class-name'],
  delete Prism.languages.scala.function;
!(function (s) {
  var n = [
    '(["\'])(?:\\\\[^]|\\$\\([^)]+\\)|\\$(?!\\()|`[^`]+`|(?!\\1)[^\\\\`$])*\\1',
    '<<-?\\s*(["\']?)(\\w+)\\2\\s[^]*?[\r\n]\\3',
  ].join('|');
  (s.languages['shell-session'] = {
    command: {
      pattern: RegExp(
        '^(?:[^\\s@:$#*!/\\\\]+@[^\\s@:$#*!/\\\\]+(?::[^\0-\\x1F$#*?"<>:;|]+)?)?[$#](?:[^\\\\\r\n\'"<]|\\\\.|<<str>>)+'.replace(
          /<<str>>/g,
          function () {
            return n;
          }
        ),
        'm'
      ),
      greedy: !0,
      inside: {
        info: {
          pattern: /^[^#$]+/,
          alias: 'punctuation',
          inside: {
            path: { pattern: /(:)[\s\S]+/, lookbehind: !0 },
            user: /^[^:]+/,
            punctuation: /:/,
          },
        },
        bash: {
          pattern: /(^[$#]\s*)\S[\s\S]*/,
          lookbehind: !0,
          alias: 'language-bash',
          inside: s.languages.bash,
        },
        'shell-symbol': { pattern: /^[$#]/, alias: 'important' },
      },
    },
    output: /.(?:.*(?:[\r\n]|.$))*/,
  }),
    (s.languages['sh-session'] = s.languages.shellsession =
      s.languages['shell-session']);
})(Prism);
Prism.languages['splunk-spl'] = {
  comment: /`comment\("(?:\\.|[^\\"])*"\)`/,
  string: { pattern: /"(?:\\.|[^\\"])*"/, greedy: !0 },
  keyword: /\b(?:abstract|accum|addcoltotals|addinfo|addtotals|analyzefields|anomalies|anomalousvalue|anomalydetection|append|appendcols|appendcsv|appendlookup|appendpipe|arules|associate|audit|autoregress|bin|bucket|bucketdir|chart|cluster|cofilter|collect|concurrency|contingency|convert|correlate|datamodel|dbinspect|dedup|delete|delta|diff|erex|eval|eventcount|eventstats|extract|fieldformat|fields|fieldsummary|filldown|fillnull|findtypes|folderize|foreach|format|from|gauge|gentimes|geom|geomfilter|geostats|head|highlight|history|iconify|input|inputcsv|inputlookup|iplocation|join|kmeans|kv|kvform|loadjob|localize|localop|lookup|makecontinuous|makemv|makeresults|map|mcollect|metadata|metasearch|meventcollect|mstats|multikv|multisearch|mvcombine|mvexpand|nomv|outlier|outputcsv|outputlookup|outputtext|overlap|pivot|predict|rangemap|rare|regex|relevancy|reltime|rename|replace|rest|return|reverse|rex|rtorder|run|savedsearch|script|scrub|search|searchtxn|selfjoin|sendemail|set|setfields|sichart|sirare|sistats|sitimechart|sitop|sort|spath|stats|strcat|streamstats|table|tags|tail|timechart|timewrap|top|transaction|transpose|trendline|tscollect|tstats|typeahead|typelearner|typer|union|uniq|untable|where|x11|xmlkv|xmlunescape|xpath|xyseries)\b/i,
  'operator-word': {
    pattern: /\b(?:and|as|by|not|or|xor)\b/i,
    alias: 'operator',
  },
  function: /\w+(?=\s*\()/,
  property: /\w+(?=\s*=(?!=))/,
  date: {
    pattern: /\b\d{1,2}\/\d{1,2}\/\d{1,4}(?:(?::\d{1,2}){3})?\b/,
    alias: 'number',
  },
  number: /\b\d+(?:\.\d+)?\b/,
  boolean: /\b(?:f|false|t|true)\b/i,
  operator: /[<>=]=?|[-+*/%|]/,
  punctuation: /[()[\],]/,
};
!(function (e) {
  var n = { pattern: /(\b\d+)(?:%|[a-z]+)/, lookbehind: !0 },
    r = { pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/, lookbehind: !0 },
    i = {
      comment: {
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
        lookbehind: !0,
      },
      url: { pattern: /url\((["']?).*?\1\)/i, greedy: !0 },
      string: {
        pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
        greedy: !0,
      },
      interpolation: null,
      func: null,
      important: /\B!(?:important|optional)\b/i,
      keyword: {
        pattern: /(^|\s+)(?:(?:if|else|for|return|unless)(?=\s+|$)|@[\w-]+)/,
        lookbehind: !0,
      },
      hexcode: /#[\da-f]{3,6}/i,
      color: [
        /\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
        {
          pattern: /\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
          inside: {
            unit: n,
            number: r,
            function: /[\w-]+(?=\()/,
            punctuation: /[(),]/,
          },
        },
      ],
      entity: /\\[\da-f]{1,8}/i,
      unit: n,
      boolean: /\b(?:true|false)\b/,
      operator: [
        /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/,
      ],
      number: r,
      punctuation: /[{}()\[\];:,]/,
    };
  (i.interpolation = {
    pattern: /\{[^\r\n}:]+\}/,
    alias: 'variable',
    inside: { delimiter: { pattern: /^{|}$/, alias: 'punctuation' }, rest: i },
  }),
    (i.func = {
      pattern: /[\w-]+\([^)]*\).*/,
      inside: { function: /^[^(]+/, rest: i },
    }),
    (e.languages.stylus = {
      'atrule-declaration': {
        pattern: /(^\s*)@.+/m,
        lookbehind: !0,
        inside: { atrule: /^@[\w-]+/, rest: i },
      },
      'variable-declaration': {
        pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
        lookbehind: !0,
        inside: { variable: /^\S+/, rest: i },
      },
      statement: {
        pattern: /(^[ \t]*)(?:if|else|for|return|unless)[ \t].+/m,
        lookbehind: !0,
        inside: { keyword: /^\S+/, rest: i },
      },
      'property-declaration': {
        pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,](?=$)(?!(?:\r?\n|\r)(?:\{|\2[ \t]+)))/m,
        lookbehind: !0,
        inside: {
          property: {
            pattern: /^[^\s:]+/,
            inside: { interpolation: i.interpolation },
          },
          rest: i,
        },
      },
      selector: {
        pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t]+)))/m,
        lookbehind: !0,
        inside: {
          interpolation: i.interpolation,
          comment: i.comment,
          punctuation: /[{},]/,
        },
      },
      func: i.func,
      string: i.string,
      comment: {
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
        lookbehind: !0,
        greedy: !0,
      },
      interpolation: i.interpolation,
      punctuation: /[{}()\[\];:.]/,
    });
})(Prism);
(Prism.languages.swift = Prism.languages.extend('clike', {
  string: {
    pattern: /("|')(?:\\(?:\((?:[^()]|\([^)]+\))+\)|\r\n|[^(])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0,
    inside: {
      interpolation: {
        pattern: /\\\((?:[^()]|\([^)]+\))+\)/,
        inside: { delimiter: { pattern: /^\\\(|\)$/, alias: 'variable' } },
      },
    },
  },
  keyword: /\b(?:as|associativity|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic(?:Type)?|else|enum|extension|fallthrough|final|for|func|get|guard|if|import|in|infix|init|inout|internal|is|lazy|left|let|mutating|new|none|nonmutating|operator|optional|override|postfix|precedence|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|Self|set|static|struct|subscript|super|switch|throws?|try|Type|typealias|unowned|unsafe|var|weak|where|while|willSet|__(?:COLUMN__|FILE__|FUNCTION__|LINE__))\b/,
  number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
  constant: /\b(?:nil|[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
  atrule: /@\b(?:IB(?:Outlet|Designable|Action|Inspectable)|class_protocol|exported|noreturn|NS(?:Copying|Managed)|objc|UIApplicationMain|auto_closure)\b/,
  builtin: /\b(?:[A-Z]\S+|abs|advance|alignof(?:Value)?|assert|contains|count(?:Elements)?|debugPrint(?:ln)?|distance|drop(?:First|Last)|dump|enumerate|equal|filter|find|first|getVaList|indices|isEmpty|join|last|lexicographicalCompare|map|max(?:Element)?|min(?:Element)?|numericCast|overlaps|partition|print(?:ln)?|reduce|reflect|reverse|sizeof(?:Value)?|sort(?:ed)?|split|startsWith|stride(?:of(?:Value)?)?|suffix|swap|toDebugString|toString|transcode|underestimateCount|unsafeBitCast|with(?:ExtendedLifetime|Unsafe(?:MutablePointers?|Pointers?)|VaList))\b/,
})),
  (Prism.languages.swift.string.inside.interpolation.inside.rest =
    Prism.languages.swift);
!(function (E) {
  var n = /\b(?:ACT|ACTIFSUB|CARRAY|CASE|CLEARGIF|COA|COA_INT|CONSTANTS|CONTENT|CUR|EDITPANEL|EFFECT|EXT|FILE|FLUIDTEMPLATE|FORM|FRAME|FRAMESET|GIFBUILDER|GMENU|GMENU_FOLDOUT|GMENU_LAYERS|GP|HMENU|HRULER|HTML|IENV|IFSUB|IMAGE|IMGMENU|IMGMENUITEM|IMGTEXT|IMG_RESOURCE|INCLUDE_TYPOSCRIPT|JSMENU|JSMENUITEM|LLL|LOAD_REGISTER|NO|PAGE|RECORDS|RESTORE_REGISTER|TEMPLATE|TEXT|TMENU|TMENUITEM|TMENU_LAYERS|USER|USER_INT|_GIFBUILDER|global|globalString|globalVar)\b/;
  (E.languages.typoscript = {
    comment: [
      { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 },
      {
        pattern: /(^|[^\\:= \t]|(?:^|[^= \t])[ \t]+)\/\/.*/,
        lookbehind: !0,
        greedy: !0,
      },
      { pattern: /(^|[^"'])#.*/, lookbehind: !0, greedy: !0 },
    ],
    function: [
      {
        pattern: /<INCLUDE_TYPOSCRIPT:\s*source\s*=\s*(?:"[^"\r\n]*"|'[^'\r\n]*')\s*>/,
        inside: {
          string: {
            pattern: /"[^"\r\n]*"|'[^'\r\n]*'/,
            inside: { keyword: n },
          },
          keyword: { pattern: /INCLUDE_TYPOSCRIPT/ },
        },
      },
      {
        pattern: /@import\s*(?:"[^"\r\n]*"|'[^'\r\n]*')/,
        inside: { string: /"[^"\r\n]*"|'[^'\r\n]*'/ },
      },
    ],
    string: {
      pattern: /^([^=]*=[< ]?)(?:(?!]\n).)*/,
      lookbehind: !0,
      inside: {
        function: /{\$.*}/,
        keyword: n,
        number: /^[0-9]+$/,
        punctuation: /[,|:]/,
      },
    },
    keyword: n,
    number: { pattern: /[0-9]+\s*[.{=]/, inside: { operator: /[.{=]/ } },
    tag: { pattern: /\.?[\w-\\]+\.?/, inside: { punctuation: /\./ } },
    punctuation: /[{}[\];(),.:|]/,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  }),
    (E.languages.tsconfig = E.languages.typoscript);
})(Prism);
Prism.languages.vim = {
  string: /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\r\n]|'')*'/,
  comment: /".*/,
  function: /\w+(?=\()/,
  keyword: /\b(?:ab|abbreviate|abc|abclear|abo|aboveleft|al|all|arga|argadd|argd|argdelete|argdo|arge|argedit|argg|argglobal|argl|arglocal|ar|args|argu|argument|as|ascii|bad|badd|ba|ball|bd|bdelete|be|bel|belowright|bf|bfirst|bl|blast|bm|bmodified|bn|bnext|bN|bNext|bo|botright|bp|bprevious|brea|break|breaka|breakadd|breakd|breakdel|breakl|breaklist|br|brewind|bro|browse|bufdo|b|buffer|buffers|bun|bunload|bw|bwipeout|ca|cabbrev|cabc|cabclear|caddb|caddbuffer|cad|caddexpr|caddf|caddfile|cal|call|cat|catch|cb|cbuffer|cc|ccl|cclose|cd|ce|center|cex|cexpr|cf|cfile|cfir|cfirst|cgetb|cgetbuffer|cgete|cgetexpr|cg|cgetfile|c|change|changes|chd|chdir|che|checkpath|checkt|checktime|cla|clast|cl|clist|clo|close|cmapc|cmapclear|cnew|cnewer|cn|cnext|cN|cNext|cnf|cnfile|cNfcNfile|cnorea|cnoreabbrev|col|colder|colo|colorscheme|comc|comclear|comp|compiler|conf|confirm|con|continue|cope|copen|co|copy|cpf|cpfile|cp|cprevious|cq|cquit|cr|crewind|cuna|cunabbrev|cu|cunmap|cw|cwindow|debugg|debuggreedy|delc|delcommand|d|delete|delf|delfunction|delm|delmarks|diffg|diffget|diffoff|diffpatch|diffpu|diffput|diffsplit|diffthis|diffu|diffupdate|dig|digraphs|di|display|dj|djump|dl|dlist|dr|drop|ds|dsearch|dsp|dsplit|earlier|echoe|echoerr|echom|echomsg|echon|e|edit|el|else|elsei|elseif|em|emenu|endfo|endfor|endf|endfunction|endfun|en|endif|endt|endtry|endw|endwhile|ene|enew|ex|exi|exit|exu|exusage|f|file|files|filetype|fina|finally|fin|find|fini|finish|fir|first|fix|fixdel|fo|fold|foldc|foldclose|folddoc|folddoclosed|foldd|folddoopen|foldo|foldopen|for|fu|fun|function|go|goto|gr|grep|grepa|grepadd|ha|hardcopy|h|help|helpf|helpfind|helpg|helpgrep|helpt|helptags|hid|hide|his|history|ia|iabbrev|iabc|iabclear|if|ij|ijump|il|ilist|imapc|imapclear|in|inorea|inoreabbrev|isearch|isp|isplit|iuna|iunabbrev|iu|iunmap|j|join|ju|jumps|k|keepalt|keepj|keepjumps|kee|keepmarks|laddb|laddbuffer|lad|laddexpr|laddf|laddfile|lan|language|la|last|later|lb|lbuffer|lc|lcd|lch|lchdir|lcl|lclose|let|left|lefta|leftabove|lex|lexpr|lf|lfile|lfir|lfirst|lgetb|lgetbuffer|lgete|lgetexpr|lg|lgetfile|lgr|lgrep|lgrepa|lgrepadd|lh|lhelpgrep|l|list|ll|lla|llast|lli|llist|lmak|lmake|lm|lmap|lmapc|lmapclear|lnew|lnewer|lne|lnext|lN|lNext|lnf|lnfile|lNf|lNfile|ln|lnoremap|lo|loadview|loc|lockmarks|lockv|lockvar|lol|lolder|lop|lopen|lpf|lpfile|lp|lprevious|lr|lrewind|ls|lt|ltag|lu|lunmap|lv|lvimgrep|lvimgrepa|lvimgrepadd|lw|lwindow|mak|make|ma|mark|marks|mat|match|menut|menutranslate|mk|mkexrc|mks|mksession|mksp|mkspell|mkvie|mkview|mkv|mkvimrc|mod|mode|m|move|mzf|mzfile|mz|mzscheme|nbkey|new|n|next|N|Next|nmapc|nmapclear|noh|nohlsearch|norea|noreabbrev|nu|number|nun|nunmap|omapc|omapclear|on|only|o|open|opt|options|ou|ounmap|pc|pclose|ped|pedit|pe|perl|perld|perldo|po|pop|popu|popup|pp|ppop|pre|preserve|prev|previous|p|print|P|Print|profd|profdel|prof|profile|promptf|promptfind|promptr|promptrepl|ps|psearch|pta|ptag|ptf|ptfirst|ptj|ptjump|ptl|ptlast|ptn|ptnext|ptN|ptNext|ptp|ptprevious|ptr|ptrewind|pts|ptselect|pu|put|pw|pwd|pyf|pyfile|py|python|qa|qall|q|quit|quita|quitall|r|read|rec|recover|redi|redir|red|redo|redr|redraw|redraws|redrawstatus|reg|registers|res|resize|ret|retab|retu|return|rew|rewind|ri|right|rightb|rightbelow|rub|ruby|rubyd|rubydo|rubyf|rubyfile|ru|runtime|rv|rviminfo|sal|sall|san|sandbox|sa|sargument|sav|saveas|sba|sball|sbf|sbfirst|sbl|sblast|sbm|sbmodified|sbn|sbnext|sbN|sbNext|sbp|sbprevious|sbr|sbrewind|sb|sbuffer|scripte|scriptencoding|scrip|scriptnames|se|set|setf|setfiletype|setg|setglobal|setl|setlocal|sf|sfind|sfir|sfirst|sh|shell|sign|sil|silent|sim|simalt|sla|slast|sl|sleep|sm|smagic|smap|smapc|smapclear|sme|smenu|sn|snext|sN|sNext|sni|sniff|sno|snomagic|snor|snoremap|snoreme|snoremenu|sor|sort|so|source|spelld|spelldump|spe|spellgood|spelli|spellinfo|spellr|spellrepall|spellu|spellundo|spellw|spellwrong|sp|split|spr|sprevious|sre|srewind|sta|stag|startg|startgreplace|star|startinsert|startr|startreplace|stj|stjump|st|stop|stopi|stopinsert|sts|stselect|sun|sunhide|sunm|sunmap|sus|suspend|sv|sview|syncbind|t|tab|tabc|tabclose|tabd|tabdo|tabe|tabedit|tabf|tabfind|tabfir|tabfirst|tabl|tablast|tabm|tabmove|tabnew|tabn|tabnext|tabN|tabNext|tabo|tabonly|tabp|tabprevious|tabr|tabrewind|tabs|ta|tag|tags|tc|tcl|tcld|tcldo|tclf|tclfile|te|tearoff|tf|tfirst|th|throw|tj|tjump|tl|tlast|tm|tmenu|tn|tnext|tN|tNext|to|topleft|tp|tprevious|tr|trewind|try|ts|tselect|tu|tunmenu|una|unabbreviate|u|undo|undoj|undojoin|undol|undolist|unh|unhide|unlet|unlo|unlockvar|unm|unmap|up|update|verb|verbose|ve|version|vert|vertical|vie|view|vim|vimgrep|vimgrepa|vimgrepadd|vi|visual|viu|viusage|vmapc|vmapclear|vne|vnew|vs|vsplit|vu|vunmap|wa|wall|wh|while|winc|wincmd|windo|winp|winpos|win|winsize|wn|wnext|wN|wNext|wp|wprevious|wq|wqa|wqall|w|write|ws|wsverb|wv|wviminfo|X|xa|xall|x|xit|xm|xmap|xmapc|xmapclear|xme|xmenu|XMLent|XMLns|xn|xnoremap|xnoreme|xnoremenu|xu|xunmap|y|yank)\b/,
  builtin: /\b(?:autocmd|acd|ai|akm|aleph|allowrevins|altkeymap|ambiwidth|ambw|anti|antialias|arab|arabic|arabicshape|ari|arshape|autochdir|autoindent|autoread|autowrite|autowriteall|aw|awa|background|backspace|backup|backupcopy|backupdir|backupext|backupskip|balloondelay|ballooneval|balloonexpr|bdir|bdlay|beval|bex|bexpr|bg|bh|bin|binary|biosk|bioskey|bk|bkc|bomb|breakat|brk|browsedir|bs|bsdir|bsk|bt|bufhidden|buflisted|buftype|casemap|ccv|cdpath|cedit|cfu|ch|charconvert|ci|cin|cindent|cink|cinkeys|cino|cinoptions|cinw|cinwords|clipboard|cmdheight|cmdwinheight|cmp|cms|columns|com|comments|commentstring|compatible|complete|completefunc|completeopt|consk|conskey|copyindent|cot|cpo|cpoptions|cpt|cscopepathcomp|cscopeprg|cscopequickfix|cscopetag|cscopetagorder|cscopeverbose|cspc|csprg|csqf|cst|csto|csverb|cuc|cul|cursorcolumn|cursorline|cwh|debug|deco|def|define|delcombine|dex|dg|dict|dictionary|diff|diffexpr|diffopt|digraph|dip|dir|directory|dy|ea|ead|eadirection|eb|ed|edcompatible|ef|efm|ei|ek|enc|encoding|endofline|eol|ep|equalalways|equalprg|errorbells|errorfile|errorformat|esckeys|et|eventignore|expandtab|exrc|fcl|fcs|fdc|fde|fdi|fdl|fdls|fdm|fdn|fdo|fdt|fen|fenc|fencs|fex|ff|ffs|fileencoding|fileencodings|fileformat|fileformats|fillchars|fk|fkmap|flp|fml|fmr|foldcolumn|foldenable|foldexpr|foldignore|foldlevel|foldlevelstart|foldmarker|foldmethod|foldminlines|foldnestmax|foldtext|formatexpr|formatlistpat|formatoptions|formatprg|fp|fs|fsync|ft|gcr|gd|gdefault|gfm|gfn|gfs|gfw|ghr|gp|grepformat|grepprg|gtl|gtt|guicursor|guifont|guifontset|guifontwide|guiheadroom|guioptions|guipty|guitablabel|guitabtooltip|helpfile|helpheight|helplang|hf|hh|hi|hidden|highlight|hk|hkmap|hkmapp|hkp|hl|hlg|hls|hlsearch|ic|icon|iconstring|ignorecase|im|imactivatekey|imak|imc|imcmdline|imd|imdisable|imi|iminsert|ims|imsearch|inc|include|includeexpr|incsearch|inde|indentexpr|indentkeys|indk|inex|inf|infercase|insertmode|isf|isfname|isi|isident|isk|iskeyword|isprint|joinspaces|js|key|keymap|keymodel|keywordprg|km|kmp|kp|langmap|langmenu|laststatus|lazyredraw|lbr|lcs|linebreak|lines|linespace|lisp|lispwords|listchars|loadplugins|lpl|lsp|lz|macatsui|magic|makeef|makeprg|matchpairs|matchtime|maxcombine|maxfuncdepth|maxmapdepth|maxmem|maxmempattern|maxmemtot|mco|mef|menuitems|mfd|mh|mis|mkspellmem|ml|mls|mm|mmd|mmp|mmt|modeline|modelines|modifiable|modified|more|mouse|mousef|mousefocus|mousehide|mousem|mousemodel|mouses|mouseshape|mouset|mousetime|mp|mps|msm|mzq|mzquantum|nf|nrformats|numberwidth|nuw|odev|oft|ofu|omnifunc|opendevice|operatorfunc|opfunc|osfiletype|pa|para|paragraphs|paste|pastetoggle|patchexpr|patchmode|path|pdev|penc|pex|pexpr|pfn|ph|pheader|pi|pm|pmbcs|pmbfn|popt|preserveindent|previewheight|previewwindow|printdevice|printencoding|printexpr|printfont|printheader|printmbcharset|printmbfont|printoptions|prompt|pt|pumheight|pvh|pvw|qe|quoteescape|readonly|remap|report|restorescreen|revins|rightleft|rightleftcmd|rl|rlc|ro|rs|rtp|ruf|ruler|rulerformat|runtimepath|sbo|sc|scb|scr|scroll|scrollbind|scrolljump|scrolloff|scrollopt|scs|sect|sections|secure|sel|selection|selectmode|sessionoptions|sft|shcf|shellcmdflag|shellpipe|shellquote|shellredir|shellslash|shelltemp|shelltype|shellxquote|shiftround|shiftwidth|shm|shortmess|shortname|showbreak|showcmd|showfulltag|showmatch|showmode|showtabline|shq|si|sidescroll|sidescrolloff|siso|sj|slm|smartcase|smartindent|smarttab|smc|smd|softtabstop|sol|spc|spell|spellcapcheck|spellfile|spelllang|spellsuggest|spf|spl|splitbelow|splitright|sps|sr|srr|ss|ssl|ssop|stal|startofline|statusline|stl|stmp|su|sua|suffixes|suffixesadd|sw|swapfile|swapsync|swb|swf|switchbuf|sws|sxq|syn|synmaxcol|syntax|tabline|tabpagemax|tabstop|tagbsearch|taglength|tagrelative|tagstack|tal|tb|tbi|tbidi|tbis|tbs|tenc|term|termbidi|termencoding|terse|textauto|textmode|textwidth|tgst|thesaurus|tildeop|timeout|timeoutlen|title|titlelen|titleold|titlestring|toolbar|toolbariconsize|top|tpm|tsl|tsr|ttimeout|ttimeoutlen|ttm|tty|ttybuiltin|ttyfast|ttym|ttymouse|ttyscroll|ttytype|tw|tx|uc|ul|undolevels|updatecount|updatetime|ut|vb|vbs|vdir|verbosefile|vfile|viewdir|viewoptions|viminfo|virtualedit|visualbell|vop|wak|warn|wb|wc|wcm|wd|weirdinvert|wfh|wfw|whichwrap|wi|wig|wildchar|wildcharm|wildignore|wildmenu|wildmode|wildoptions|wim|winaltkeys|window|winfixheight|winfixwidth|winheight|winminheight|winminwidth|winwidth|wiv|wiw|wm|wmh|wmnu|wmw|wop|wrap|wrapmargin|wrapscan|writeany|writebackup|writedelay|ww|noacd|noai|noakm|noallowrevins|noaltkeymap|noanti|noantialias|noar|noarab|noarabic|noarabicshape|noari|noarshape|noautochdir|noautoindent|noautoread|noautowrite|noautowriteall|noaw|noawa|nobackup|noballooneval|nobeval|nobin|nobinary|nobiosk|nobioskey|nobk|nobl|nobomb|nobuflisted|nocf|noci|nocin|nocindent|nocompatible|noconfirm|noconsk|noconskey|nocopyindent|nocp|nocscopetag|nocscopeverbose|nocst|nocsverb|nocuc|nocul|nocursorcolumn|nocursorline|nodeco|nodelcombine|nodg|nodiff|nodigraph|nodisable|noea|noeb|noed|noedcompatible|noek|noendofline|noeol|noequalalways|noerrorbells|noesckeys|noet|noex|noexpandtab|noexrc|nofen|nofk|nofkmap|nofoldenable|nogd|nogdefault|noguipty|nohid|nohidden|nohk|nohkmap|nohkmapp|nohkp|nohls|noic|noicon|noignorecase|noim|noimc|noimcmdline|noimd|noincsearch|noinf|noinfercase|noinsertmode|nois|nojoinspaces|nojs|nolazyredraw|nolbr|nolinebreak|nolisp|nolist|noloadplugins|nolpl|nolz|noma|nomacatsui|nomagic|nomh|noml|nomod|nomodeline|nomodifiable|nomodified|nomore|nomousef|nomousefocus|nomousehide|nonu|nonumber|noodev|noopendevice|nopaste|nopi|nopreserveindent|nopreviewwindow|noprompt|nopvw|noreadonly|noremap|norestorescreen|norevins|nori|norightleft|norightleftcmd|norl|norlc|noro|nors|noru|noruler|nosb|nosc|noscb|noscrollbind|noscs|nosecure|nosft|noshellslash|noshelltemp|noshiftround|noshortname|noshowcmd|noshowfulltag|noshowmatch|noshowmode|nosi|nosm|nosmartcase|nosmartindent|nosmarttab|nosmd|nosn|nosol|nospell|nosplitbelow|nosplitright|nospr|nosr|nossl|nosta|nostartofline|nostmp|noswapfile|noswf|nota|notagbsearch|notagrelative|notagstack|notbi|notbidi|notbs|notermbidi|noterse|notextauto|notextmode|notf|notgst|notildeop|notimeout|notitle|noto|notop|notr|nottimeout|nottybuiltin|nottyfast|notx|novb|novisualbell|nowa|nowarn|nowb|noweirdinvert|nowfh|nowfw|nowildmenu|nowinfixheight|nowinfixwidth|nowiv|nowmnu|nowrap|nowrapscan|nowrite|nowriteany|nowritebackup|nows|invacd|invai|invakm|invallowrevins|invaltkeymap|invanti|invantialias|invar|invarab|invarabic|invarabicshape|invari|invarshape|invautochdir|invautoindent|invautoread|invautowrite|invautowriteall|invaw|invawa|invbackup|invballooneval|invbeval|invbin|invbinary|invbiosk|invbioskey|invbk|invbl|invbomb|invbuflisted|invcf|invci|invcin|invcindent|invcompatible|invconfirm|invconsk|invconskey|invcopyindent|invcp|invcscopetag|invcscopeverbose|invcst|invcsverb|invcuc|invcul|invcursorcolumn|invcursorline|invdeco|invdelcombine|invdg|invdiff|invdigraph|invdisable|invea|inveb|inved|invedcompatible|invek|invendofline|inveol|invequalalways|inverrorbells|invesckeys|invet|invex|invexpandtab|invexrc|invfen|invfk|invfkmap|invfoldenable|invgd|invgdefault|invguipty|invhid|invhidden|invhk|invhkmap|invhkmapp|invhkp|invhls|invhlsearch|invic|invicon|invignorecase|invim|invimc|invimcmdline|invimd|invincsearch|invinf|invinfercase|invinsertmode|invis|invjoinspaces|invjs|invlazyredraw|invlbr|invlinebreak|invlisp|invlist|invloadplugins|invlpl|invlz|invma|invmacatsui|invmagic|invmh|invml|invmod|invmodeline|invmodifiable|invmodified|invmore|invmousef|invmousefocus|invmousehide|invnu|invnumber|invodev|invopendevice|invpaste|invpi|invpreserveindent|invpreviewwindow|invprompt|invpvw|invreadonly|invremap|invrestorescreen|invrevins|invri|invrightleft|invrightleftcmd|invrl|invrlc|invro|invrs|invru|invruler|invsb|invsc|invscb|invscrollbind|invscs|invsecure|invsft|invshellslash|invshelltemp|invshiftround|invshortname|invshowcmd|invshowfulltag|invshowmatch|invshowmode|invsi|invsm|invsmartcase|invsmartindent|invsmarttab|invsmd|invsn|invsol|invspell|invsplitbelow|invsplitright|invspr|invsr|invssl|invsta|invstartofline|invstmp|invswapfile|invswf|invta|invtagbsearch|invtagrelative|invtagstack|invtbi|invtbidi|invtbs|invtermbidi|invterse|invtextauto|invtextmode|invtf|invtgst|invtildeop|invtimeout|invtitle|invto|invtop|invtr|invttimeout|invttybuiltin|invttyfast|invtx|invvb|invvisualbell|invwa|invwarn|invwb|invweirdinvert|invwfh|invwfw|invwildmenu|invwinfixheight|invwinfixwidth|invwiv|invwmnu|invwrap|invwrapscan|invwrite|invwriteany|invwritebackup|invws|t_AB|t_AF|t_al|t_AL|t_bc|t_cd|t_ce|t_Ce|t_cl|t_cm|t_Co|t_cs|t_Cs|t_CS|t_CV|t_da|t_db|t_dl|t_DL|t_EI|t_F1|t_F2|t_F3|t_F4|t_F5|t_F6|t_F7|t_F8|t_F9|t_fs|t_IE|t_IS|t_k1|t_K1|t_k2|t_k3|t_K3|t_k4|t_K4|t_k5|t_K5|t_k6|t_K6|t_k7|t_K7|t_k8|t_K8|t_k9|t_K9|t_KA|t_kb|t_kB|t_KB|t_KC|t_kd|t_kD|t_KD|t_ke|t_KE|t_KF|t_KG|t_kh|t_KH|t_kI|t_KI|t_KJ|t_KK|t_kl|t_KL|t_kN|t_kP|t_kr|t_ks|t_ku|t_le|t_mb|t_md|t_me|t_mr|t_ms|t_nd|t_op|t_RI|t_RV|t_Sb|t_se|t_Sf|t_SI|t_so|t_sr|t_te|t_ti|t_ts|t_ue|t_us|t_ut|t_vb|t_ve|t_vi|t_vs|t_WP|t_WS|t_xs|t_ZH|t_ZR)\b/,
  number: /\b(?:0x[\da-f]+|\d+(?:\.\d+)?)\b/i,
  operator: /\|\||&&|[-+.]=?|[=!](?:[=~][#?]?)?|[<>]=?[#?]?|[*\/%?]|\b(?:is(?:not)?)\b/,
  punctuation: /[{}[\](),;:]/,
};
!(function (n) {
  function a(a, e) {
    n.languages[a] &&
      n.languages.insertBefore(a, 'comment', { 'doc-comment': e });
  }
  var e = n.languages.markup.tag,
    t = {
      pattern: /\/\/\/.*/,
      greedy: !0,
      alias: 'comment',
      inside: { tag: e },
    },
    g = { pattern: /'''.*/, greedy: !0, alias: 'comment', inside: { tag: e } };
  a('csharp', t), a('fsharp', t), a('vbnet', g);
})(Prism);
!(function (e) {
  var n = /[*&][^\s[\]{},]+/,
    r = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
    t =
      '(?:' +
      r.source +
      '(?:[ \t]+' +
      n.source +
      ')?|' +
      n.source +
      '(?:[ \t]+' +
      r.source +
      ')?)',
    a = '(?:[^\\s\\x00-\\x08\\x0e-\\x1f!"#%&\'*,\\-:>?@[\\]`{|}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*'.replace(
      /<PLAIN>/g,
      function () {
        return '[^\\s\\x00-\\x08\\x0e-\\x1f,[\\]{}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]';
      }
    ),
    d = '"(?:[^"\\\\\r\n]|\\\\.)*"|\'(?:[^\'\\\\\r\n]|\\\\.)*\'';
  function o(e, n) {
    n = (n || '').replace(/m/g, '') + 'm';
    var r = '([:\\-,[{]\\s*(?:\\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|]|}|(?:[\r\n]\\s*)?#))'
      .replace(/<<prop>>/g, function () {
        return t;
      })
      .replace(/<<value>>/g, function () {
        return e;
      });
    return RegExp(r, n);
  }
  (e.languages.yaml = {
    scalar: {
      pattern: RegExp(
        '([\\-:]\\s*(?:\\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\\S[^\r\n]*(?:\\2[^\r\n]+)*)'.replace(
          /<<prop>>/g,
          function () {
            return t;
          }
        )
      ),
      lookbehind: !0,
      alias: 'string',
    },
    comment: /#.*/,
    key: {
      pattern: RegExp(
        '((?:^|[:\\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\\s*:\\s)'
          .replace(/<<prop>>/g, function () {
            return t;
          })
          .replace(/<<key>>/g, function () {
            return '(?:' + a + '|' + d + ')';
          })
      ),
      lookbehind: !0,
      greedy: !0,
      alias: 'atrule',
    },
    directive: { pattern: /(^[ \t]*)%.+/m, lookbehind: !0, alias: 'important' },
    datetime: {
      pattern: o(
        '\\d{4}-\\d\\d?-\\d\\d?(?:[tT]|[ \t]+)\\d\\d?:\\d{2}:\\d{2}(?:\\.\\d*)?(?:[ \t]*(?:Z|[-+]\\d\\d?(?::\\d{2})?))?|\\d{4}-\\d{2}-\\d{2}|\\d\\d?:\\d{2}(?::\\d{2}(?:\\.\\d*)?)?'
      ),
      lookbehind: !0,
      alias: 'number',
    },
    boolean: {
      pattern: o('true|false', 'i'),
      lookbehind: !0,
      alias: 'important',
    },
    null: { pattern: o('null|~', 'i'), lookbehind: !0, alias: 'important' },
    string: { pattern: o(d), lookbehind: !0, greedy: !0 },
    number: {
      pattern: o(
        '[+-]?(?:0x[\\da-f]+|0o[0-7]+|(?:\\d+(?:\\.\\d*)?|\\.?\\d+)(?:e[+-]?\\d+)?|\\.inf|\\.nan)',
        'i'
      ),
      lookbehind: !0,
    },
    tag: r,
    important: n,
    punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
  }),
    (e.languages.yml = e.languages.yaml);
})(Prism);
!(function () {
  if (
    'undefined' != typeof self &&
    self.Prism &&
    self.document &&
    document.querySelector
  ) {
    var t,
      s = function () {
        if (void 0 === t) {
          var e = document.createElement('div');
          (e.style.fontSize = '13px'),
            (e.style.lineHeight = '1.5'),
            (e.style.padding = '0'),
            (e.style.border = '0'),
            (e.innerHTML = '&nbsp;<br />&nbsp;'),
            document.body.appendChild(e),
            (t = 38 === e.offsetHeight),
            document.body.removeChild(e);
        }
        return t;
      },
      b = !0,
      a = 0;
    Prism.hooks.add('before-sanity-check', function (e) {
      var t = e.element.parentElement,
        n = t && t.getAttribute('data-line');
      if (t && n && /pre/i.test(t.nodeName)) {
        var i = 0;
        v('.line-highlight', t).forEach(function (e) {
          (i += e.textContent.length), e.parentNode.removeChild(e);
        }),
          i &&
          /^( \n)+$/.test(e.code.slice(-i)) &&
          (e.code = e.code.slice(0, -i));
      }
    }),
      Prism.hooks.add('complete', function e(t) {
        var n = t.element.parentElement,
          i = n && n.getAttribute('data-line');
        if (n && i && /pre/i.test(n.nodeName)) {
          clearTimeout(a);
          var r = Prism.plugins.lineNumbers,
            o = t.plugins && t.plugins.lineNumbers;
          if (y(n, 'line-numbers') && r && !o)
            Prism.hooks.add('line-numbers', e);
          else l(n, i)(), (a = setTimeout(u, 1));
        }
      }),
      window.addEventListener('hashchange', u),
      window.addEventListener('resize', function () {
        v('pre[data-line]')
          .map(function (e) {
            return l(e);
          })
          .forEach(E);
      });
  }
  function v(e, t) {
    return Array.prototype.slice.call((t || document).querySelectorAll(e));
  }
  function y(e, t) {
    return (
      (t = ' ' + t + ' '),
      -1 < (' ' + e.className + ' ').replace(/[\n\t]/g, ' ').indexOf(t)
    );
  }
  function E(e) {
    e();
  }
  function l(u, e, d) {
    var t = (e = 'string' == typeof e ? e : u.getAttribute('data-line'))
      .replace(/\s+/g, '')
      .split(',')
      .filter(Boolean),
      c = +u.getAttribute('data-line-offset') || 0,
      f = (s() ? parseInt : parseFloat)(getComputedStyle(u).lineHeight),
      p = y(u, 'line-numbers'),
      n = u.querySelector('code'),
      m = p ? u : n || u,
      h = [],
      g =
        n && m != n
          ? (function (e, t) {
            var n = getComputedStyle(e),
              i = getComputedStyle(t);
            function r(e) {
              return +e.substr(0, e.length - 2);
            }
            return (
              t.offsetTop +
              r(i.borderTopWidth) +
              r(i.paddingTop) -
              r(n.paddingTop)
            );
          })(u, n)
          : 0;
    t.forEach(function (e) {
      var t = e.split('-'),
        n = +t[0],
        i = +t[1] || n,
        r =
          u.querySelector('.line-highlight[data-range="' + e + '"]') ||
          document.createElement('div');
      if (
        (h.push(function () {
          r.setAttribute('aria-hidden', 'true'),
            r.setAttribute('data-range', e),
            (r.className = (d || '') + ' line-highlight');
        }),
          p && Prism.plugins.lineNumbers)
      ) {
        var o = Prism.plugins.lineNumbers.getLine(u, n),
          a = Prism.plugins.lineNumbers.getLine(u, i);
        if (o) {
          var l = o.offsetTop + g + 'px';
          h.push(function () {
            r.style.top = l;
          });
        }
        if (a) {
          var s = a.offsetTop - o.offsetTop + a.offsetHeight + 'px';
          h.push(function () {
            r.style.height = s;
          });
        }
      } else
        h.push(function () {
          r.setAttribute('data-start', String(n)),
            n < i && r.setAttribute('data-end', String(i)),
            (r.style.top = (n - c - 1) * f + g + 'px'),
            (r.textContent = new Array(i - n + 2).join(' \n'));
        });
      h.push(function () {
        m.appendChild(r);
      });
    });
    var i = u.id;
    if (p && i) {
      for (var r = 'linkable-line-numbers', o = !1, a = u; a;) {
        if (y(a, r)) {
          o = !0;
          break;
        }
        a = a.parentElement;
      }
      if (o) {
        y(u, r) ||
          h.push(function () {
            u.className = (u.className + ' ' + r).trim();
          });
        var l = parseInt(u.getAttribute('data-start') || '1');
        v('.line-numbers-rows > span', u).forEach(function (e, t) {
          var n = t + l;
          e.onclick = function () {
            var e = i + '.' + n;
            (b = !1),
              (location.hash = e),
              setTimeout(function () {
                b = !0;
              }, 1);
          };
        });
      }
    }
    return function () {
      h.forEach(E);
    };
  }
  function u() {
    var e = location.hash.slice(1);
    v('.temporary.line-highlight').forEach(function (e) {
      e.parentNode.removeChild(e);
    });
    var t = (e.match(/\.([\d,-]+)$/) || [, ''])[1];
    if (t && !document.getElementById(e)) {
      var n = e.slice(0, e.lastIndexOf('.')),
        i = document.getElementById(n);
      if (i)
        i.hasAttribute('data-line') || i.setAttribute('data-line', ''),
          l(i, t, 'temporary ')(),
          b &&
          document
            .querySelector('.temporary.line-highlight')
            .scrollIntoView();
    }
  }
})();
!(function () {
  if ('undefined' != typeof self && self.Prism && self.document) {
    var o = 'line-numbers',
      a = /\n(?!$)/g,
      e = (Prism.plugins.lineNumbers = {
        getLine: function (e, n) {
          if ('PRE' === e.tagName && e.classList.contains(o)) {
            var t = e.querySelector('.line-numbers-rows');
            if (t) {
              var i = parseInt(e.getAttribute('data-start'), 10) || 1,
                r = i + (t.children.length - 1);
              n < i && (n = i), r < n && (n = r);
              var s = n - i;
              return t.children[s];
            }
          }
        },
        resize: function (e) {
          u([e]);
        },
        assumeViewportIndependence: !0,
      }),
      t = function (e) {
        return e
          ? window.getComputedStyle
            ? getComputedStyle(e)
            : e.currentStyle || null
          : null;
      },
      n = void 0;
    window.addEventListener('resize', function () {
      (e.assumeViewportIndependence && n === window.innerWidth) ||
        ((n = window.innerWidth),
          u(Array.prototype.slice.call(document.querySelectorAll('pre.' + o))));
    }),
      Prism.hooks.add('complete', function (e) {
        if (e.code) {
          var n = e.element,
            t = n.parentNode;
          if (
            t &&
            /pre/i.test(t.nodeName) &&
            !n.querySelector('.line-numbers-rows') &&
            Prism.util.isActive(n, o)
          ) {
            n.classList.remove(o), t.classList.add(o);
            var i,
              r = e.code.match(a),
              s = r ? r.length + 1 : 1,
              l = new Array(s + 1).join('<span></span>');
            (i = document.createElement('span')).setAttribute(
              'aria-hidden',
              'true'
            ),
              (i.className = 'line-numbers-rows'),
              (i.innerHTML = l),
              t.hasAttribute('data-start') &&
              (t.style.counterReset =
                'linenumber ' +
                (parseInt(t.getAttribute('data-start'), 10) - 1)),
              e.element.appendChild(i),
              u([t]),
              Prism.hooks.run('line-numbers', e);
          }
        }
      }),
      Prism.hooks.add('line-numbers', function (e) {
        (e.plugins = e.plugins || {}), (e.plugins.lineNumbers = !0);
      });
  }
  function u(e) {
    if (
      0 !=
      (e = e.filter(function (e) {
        var n = t(e)['white-space'];
        return 'pre-wrap' === n || 'pre-line' === n;
      })).length
    ) {
      var n = e
        .map(function (e) {
          var n = e.querySelector('code'),
            t = e.querySelector('.line-numbers-rows');
          if (n && t) {
            var i = e.querySelector('.line-numbers-sizer'),
              r = n.textContent.split(a);
            i ||
              (((i = document.createElement('span')).className =
                'line-numbers-sizer'),
                n.appendChild(i)),
              (i.innerHTML = '0'),
              (i.style.display = 'block');
            var s = i.getBoundingClientRect().height;
            return (
              (i.innerHTML = ''),
              {
                element: e,
                lines: r,
                lineHeights: [],
                oneLinerHeight: s,
                sizer: i,
              }
            );
          }
        })
        .filter(Boolean);
      n.forEach(function (e) {
        var i = e.sizer,
          n = e.lines,
          r = e.lineHeights,
          s = e.oneLinerHeight;
        (r[n.length - 1] = void 0),
          n.forEach(function (e, n) {
            if (e && 1 < e.length) {
              var t = i.appendChild(document.createElement('span'));
              (t.style.display = 'block'), (t.textContent = e);
            } else r[n] = s;
          });
      }),
        n.forEach(function (e) {
          for (
            var n = e.sizer, t = e.lineHeights, i = 0, r = 0;
            r < t.length;
            r++
          )
            void 0 === t[r] &&
              (t[r] = n.children[i++].getBoundingClientRect().height);
        }),
        n.forEach(function (e) {
          var n = e.sizer,
            t = e.element.querySelector('.line-numbers-rows');
          (n.style.display = 'none'),
            (n.innerHTML = ''),
            e.lineHeights.forEach(function (e, n) {
              t.children[n].style.height = e + 'px';
            });
        });
    }
  }
})();
!(function () {
  if (
    ('undefined' != typeof self && self.Prism) ||
    ('undefined' != typeof global && global.Prism)
  ) {
    var a,
      e,
      t = '';
    (Prism.plugins.customClass = {
      add: function (n) {
        a = n;
      },
      map: function (s) {
        e =
          'function' == typeof s
            ? s
            : function (n) {
              return s[n] || n;
            };
      },
      prefix: function (n) {
        t = n || '';
      },
    }),
      Prism.hooks.add('wrap', function (s) {
        if (a) {
          var n = a({ content: s.content, type: s.type, language: s.language });
          Array.isArray(n)
            ? s.classes.push.apply(s.classes, n)
            : n && s.classes.push(n);
        }
        (e || t) &&
          (s.classes = s.classes.map(function (n) {
            return t + (e ? e(n, s.language) : n);
          }));
      });
  }
})();
!(function () {
  if ('undefined' != typeof self && self.Prism && self.document) {
    Element.prototype.matches ||
      (Element.prototype.matches =
        Element.prototype.msMatchesSelector ||
        Element.prototype.webkitMatchesSelector);
    var r = window.Prism,
      h = {
        js: 'javascript',
        py: 'python',
        rb: 'ruby',
        ps1: 'powershell',
        psm1: 'powershell',
        sh: 'bash',
        bat: 'batch',
        h: 'c',
        tex: 'latex',
      },
      g = 'data-src-status',
      c = 'loading',
      u = 'loaded',
      p =
        'pre[data-src]:not([' +
        g +
        '="' +
        u +
        '"]):not([' +
        g +
        '="' +
        c +
        '"])',
      i = /\blang(?:uage)?-([\w-]+)\b/i;
    r.hooks.add('before-highlightall', function (e) {
      e.selector += ', ' + p;
    }),
      r.hooks.add('before-sanity-check', function (e) {
        var t = e.element;
        if (t.matches(p)) {
          (e.code = ''), t.setAttribute(g, c);
          var n = t.appendChild(document.createElement('CODE'));
          n.textContent = 'Loading…';
          var i = t.getAttribute('data-src'),
            a = e.language;
          if ('none' === a) {
            var s = (/\.(\w+)$/.exec(i) || [, 'none'])[1];
            a = h[s] || s;
          }
          d(n, a), d(t, a);
          var l = r.plugins.autoloader;
          l && l.loadLanguages(a);
          var o = new XMLHttpRequest();
          o.open('GET', i, !0),
            (o.onreadystatechange = function () {
              4 == o.readyState &&
                (o.status < 400 && o.responseText
                  ? (t.setAttribute(g, u),
                    (n.textContent = o.responseText),
                    r.highlightElement(n))
                  : (t.setAttribute(g, 'failed'),
                    400 <= o.status
                      ? (n.textContent = (function (e, t) {
                        return '✖ Error ' + e + ' while fetching file: ' + t;
                      })(o.status, o.statusText))
                      : (n.textContent =
                        '✖ Error: File does not exist or is empty')));
            }),
            o.send(null);
        }
      });
    var e = !(r.plugins.fileHighlight = {
      highlight: function (e) {
        for (
          var t, n = (e || document).querySelectorAll(p), i = 0;
          (t = n[i++]);

        )
          r.highlightElement(t);
      },
    });
    r.fileHighlight = function () {
      e ||
        (console.warn(
          'Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.'
        ),
          (e = !0)),
        r.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  }
  function d(e, t) {
    var n = e.className;
    (n = n.replace(i, ' ') + ' language-' + t),
      (e.className = n.replace(/\s+/g, ' ').trim());
  }
})();
!(function () {
  if ('undefined' != typeof self && self.Prism && self.document) {
    var i = [],
      l = {},
      c = function () { };
    Prism.plugins.toolbar = {};
    var e = (Prism.plugins.toolbar.registerButton = function (e, n) {
      var t;
      (t =
        'function' == typeof n
          ? n
          : function (e) {
            var t;
            return (
              'function' == typeof n.onClick
                ? (((t = document.createElement('button')).type = 'button'),
                  t.addEventListener('click', function () {
                    n.onClick.call(this, e);
                  }))
                : 'string' == typeof n.url
                  ? ((t = document.createElement('a')).href = n.url)
                  : (t = document.createElement('span')),
              n.className && t.classList.add(n.className),
              (t.textContent = n.text),
              t
            );
          }),
        e in l
          ? console.warn(
            'There is a button with the key "' + e + '" registered already.'
          )
          : i.push((l[e] = t));
    }),
      t = (Prism.plugins.toolbar.hook = function (a) {
        var e = a.element.parentNode;
        if (
          e &&
          /pre/i.test(e.nodeName) &&
          !e.parentNode.classList.contains('code-toolbar')
        ) {
          var t = document.createElement('div');
          t.classList.add('code-toolbar'),
            e.parentNode.insertBefore(t, e),
            t.appendChild(e);
          var r = document.createElement('div');
          r.classList.add('toolbar');
          var n = i,
            o = (function (e) {
              for (; e;) {
                var t = e.getAttribute('data-toolbar-order');
                if (null != t)
                  return (t = t.trim()).length ? t.split(/\s*,\s*/g) : [];
                e = e.parentElement;
              }
            })(a.element);
          o &&
            (n = o.map(function (e) {
              return l[e] || c;
            })),
            n.forEach(function (e) {
              var t = e(a);
              if (t) {
                var n = document.createElement('div');
                n.classList.add('toolbar-item'),
                  n.appendChild(t),
                  r.appendChild(n);
              }
            }),
            t.appendChild(r);
        }
      });
    e('label', function (e) {
      var t = e.element.parentNode;
      if (t && /pre/i.test(t.nodeName) && t.hasAttribute('data-label')) {
        var n,
          a,
          r = t.getAttribute('data-label');
        try {
          a = document.querySelector('template#' + r);
        } catch (e) { }
        return (
          a
            ? (n = a.content)
            : (t.hasAttribute('data-url')
              ? ((n = document.createElement('a')).href = t.getAttribute(
                'data-url'
              ))
              : (n = document.createElement('span')),
              (n.textContent = r)),
          n
        );
      }
    }),
      Prism.hooks.add('complete', t);
  }
})();
!(function () {
  if ('undefined' != typeof self && self.Prism && self.document)
    if (Prism.plugins.toolbar) {
      var r = {
        none: 'Plain text',
        html: 'HTML',
        xml: 'XML',
        svg: 'SVG',
        mathml: 'MathML',
        ssml: 'SSML',
        rss: 'RSS',
        css: 'CSS',
        clike: 'C-like',
        js: 'JavaScript',
        abap: 'ABAP',
        abnf: 'ABNF',
        al: 'AL',
        antlr4: 'ANTLR4',
        g4: 'ANTLR4',
        apacheconf: 'Apache Configuration',
        apl: 'APL',
        aql: 'AQL',
        arff: 'ARFF',
        asciidoc: 'AsciiDoc',
        adoc: 'AsciiDoc',
        aspnet: 'ASP.NET (C#)',
        asm6502: '6502 Assembly',
        autohotkey: 'AutoHotkey',
        autoit: 'AutoIt',
        basic: 'BASIC',
        bbcode: 'BBcode',
        bnf: 'BNF',
        rbnf: 'RBNF',
        bsl: 'BSL (1C:Enterprise)',
        oscript: 'OneScript',
        csharp: 'C#',
        cs: 'C#',
        dotnet: 'C#',
        cpp: 'C++',
        cil: 'CIL',
        cmake: 'CMake',
        coffee: 'CoffeeScript',
        conc: 'Concurnas',
        csp: 'Content-Security-Policy',
        'css-extras': 'CSS Extras',
        dataweave: 'DataWeave',
        dax: 'DAX',
        django: 'Django/Jinja2',
        jinja2: 'Django/Jinja2',
        'dns-zone-file': 'DNS zone file',
        'dns-zone': 'DNS zone file',
        dockerfile: 'Docker',
        ebnf: 'EBNF',
        editorconfig: 'EditorConfig',
        ejs: 'EJS',
        etlua: 'Embedded Lua templating',
        erb: 'ERB',
        'excel-formula': 'Excel Formula',
        xlsx: 'Excel Formula',
        xls: 'Excel Formula',
        fsharp: 'F#',
        'firestore-security-rules': 'Firestore security rules',
        ftl: 'FreeMarker Template Language',
        gml: 'GameMaker Language',
        gamemakerlanguage: 'GameMaker Language',
        gcode: 'G-code',
        gdscript: 'GDScript',
        gedcom: 'GEDCOM',
        glsl: 'GLSL',
        graphql: 'GraphQL',
        hs: 'Haskell',
        hcl: 'HCL',
        hlsl: 'HLSL',
        http: 'HTTP',
        hpkp: 'HTTP Public-Key-Pins',
        hsts: 'HTTP Strict-Transport-Security',
        ichigojam: 'IchigoJam',
        ignore: '.ignore',
        gitignore: '.gitignore',
        hgignore: '.hgignore',
        npmignore: '.npmignore',
        inform7: 'Inform 7',
        javadoc: 'JavaDoc',
        javadoclike: 'JavaDoc-like',
        javastacktrace: 'Java stack trace',
        jq: 'JQ',
        jsdoc: 'JSDoc',
        'js-extras': 'JS Extras',
        json: 'JSON',
        webmanifest: 'Web App Manifest',
        json5: 'JSON5',
        jsonp: 'JSONP',
        jsstacktrace: 'JS stack trace',
        'js-templates': 'JS Templates',
        kts: 'Kotlin Script',
        kt: 'Kotlin',
        latex: 'LaTeX',
        tex: 'TeX',
        context: 'ConTeXt',
        lilypond: 'LilyPond',
        ly: 'LilyPond',
        emacs: 'Lisp',
        elisp: 'Lisp',
        'emacs-lisp': 'Lisp',
        llvm: 'LLVM IR',
        lolcode: 'LOLCODE',
        md: 'Markdown',
        'markup-templating': 'Markup templating',
        matlab: 'MATLAB',
        mel: 'MEL',
        mongodb: 'MongoDB',
        moon: 'MoonScript',
        n1ql: 'N1QL',
        n4js: 'N4JS',
        n4jsd: 'N4JS',
        'nand2tetris-hdl': 'Nand To Tetris HDL',
        naniscript: 'Naninovel Script',
        nani: 'Naninovel Script',
        nasm: 'NASM',
        neon: 'NEON',
        nginx: 'nginx',
        nsis: 'NSIS',
        objectivec: 'Objective-C',
        objc: 'Objective-C',
        ocaml: 'OCaml',
        opencl: 'OpenCL',
        parigp: 'PARI/GP',
        objectpascal: 'Object Pascal',
        pcaxis: 'PC-Axis',
        px: 'PC-Axis',
        peoplecode: 'PeopleCode',
        pcode: 'PeopleCode',
        php: 'PHP',
        phpdoc: 'PHPDoc',
        'php-extras': 'PHP Extras',
        plsql: 'PL/SQL',
        powerquery: 'PowerQuery',
        pq: 'PowerQuery',
        mscript: 'PowerQuery',
        powershell: 'PowerShell',
        promql: 'PromQL',
        properties: '.properties',
        protobuf: 'Protocol Buffers',
        purebasic: 'PureBasic',
        pbfasm: 'PureBasic',
        purs: 'PureScript',
        py: 'Python',
        q: 'Q (kdb+ database)',
        qml: 'QML',
        rkt: 'Racket',
        jsx: 'React JSX',
        tsx: 'React TSX',
        renpy: "Ren'py",
        rpy: "Ren'py",
        rest: 'reST (reStructuredText)',
        robotframework: 'Robot Framework',
        robot: 'Robot Framework',
        rb: 'Ruby',
        sas: 'SAS',
        sass: 'Sass (Sass)',
        scss: 'Sass (Scss)',
        'shell-session': 'Shell session',
        'sh-session': 'Shell session',
        shellsession: 'Shell session',
        sml: 'SML',
        smlnj: 'SML/NJ',
        solidity: 'Solidity (Ethereum)',
        sol: 'Solidity (Ethereum)',
        'solution-file': 'Solution file',
        sln: 'Solution file',
        soy: 'Soy (Closure Template)',
        sparql: 'SPARQL',
        rq: 'SPARQL',
        'splunk-spl': 'Splunk SPL',
        sqf: 'SQF: Status Quo Function (Arma 3)',
        sql: 'SQL',
        iecst: 'Structured Text (IEC 61131-3)',
        't4-templating': 'T4 templating',
        't4-cs': 'T4 Text Templates (C#)',
        t4: 'T4 Text Templates (C#)',
        't4-vb': 'T4 Text Templates (VB)',
        tap: 'TAP',
        tt2: 'Template Toolkit 2',
        toml: 'TOML',
        trig: 'TriG',
        ts: 'TypeScript',
        tsconfig: 'TSConfig',
        uscript: 'UnrealScript',
        uc: 'UnrealScript',
        vbnet: 'VB.Net',
        vhdl: 'VHDL',
        vim: 'vim',
        'visual-basic': 'Visual Basic',
        vba: 'VBA',
        vb: 'Visual Basic',
        wasm: 'WebAssembly',
        wiki: 'Wiki markup',
        xeoracube: 'XeoraCube',
        'xml-doc': 'XML doc (.net)',
        xojo: 'Xojo (REALbasic)',
        xquery: 'XQuery',
        yaml: 'YAML',
        yml: 'YAML',
        yang: 'YANG',
      };
      Prism.plugins.toolbar.registerButton('show-language', function (e) {
        var a = e.element.parentNode;
        if (a && /pre/i.test(a.nodeName)) {
          var s,
            t =
              a.getAttribute('data-language') ||
              r[e.language] ||
              ((s = e.language)
                ? (s.substring(0, 1).toUpperCase() + s.substring(1)).replace(
                  /s(?=cript)/,
                  'S'
                )
                : s);
          if (t) {
            var o = document.createElement('span');
            return (o.textContent = t), o;
          }
        }
      });
    } else console.warn('Show Languages plugin loaded before Toolbar plugin.');
})();
!(function () {
  if ('undefined' != typeof self && self.Prism && self.document) {
    var c = [];
    t(function (t, e) {
      if (t && t.meta && t.data) {
        if (t.meta.status && 400 <= t.meta.status)
          return 'Error: ' + (t.data.message || t.meta.status);
        if ('string' == typeof t.data.content)
          return 'function' == typeof atob
            ? atob(t.data.content.replace(/\s/g, ''))
            : 'Your browser cannot decode base64';
      }
      return null;
    }, 'github'),
      t(function (t, e) {
        if (t && t.meta && t.data && t.data.files) {
          if (t.meta.status && 400 <= t.meta.status)
            return 'Error: ' + (t.data.message || t.meta.status);
          var n = t.data.files,
            a = e.getAttribute('data-filename');
          if (null == a)
            for (var r in n)
              if (n.hasOwnProperty(r)) {
                a = r;
                break;
              }
          return void 0 !== n[a]
            ? n[a].content
            : 'Error: unknown or missing gist file ' + a;
        }
        return null;
      }, 'gist'),
      t(function (t, e) {
        return t && t.node && 'string' == typeof t.data ? t.data : null;
      }, 'bitbucket');
    var m = 0,
      p = 'data-jsonp-status',
      g = 'loading',
      h = 'loaded',
      v = 'failed',
      b =
        'pre[data-jsonp]:not([' +
        p +
        '="' +
        h +
        '"]):not([' +
        p +
        '="' +
        g +
        '"])';
    Prism.hooks.add('before-highlightall', function (t) {
      t.selector += ', ' + b;
    }),
      Prism.hooks.add('before-sanity-check', function (t) {
        var r = t.element;
        if (r.matches(b)) {
          (t.code = ''), r.setAttribute(p, g);
          var i = r.appendChild(document.createElement('CODE'));
          i.textContent = 'Loading…';
          var e = t.language;
          i.className = 'language-' + e;
          var n = Prism.plugins.autoloader;
          n && n.loadLanguages(e);
          var a = r.getAttribute('data-adapter'),
            o = null;
          if (a) {
            if ('function' != typeof window[a])
              return (
                r.setAttribute(p, v),
                void (i.textContent = (function (t) {
                  return (
                    '✖ Error: JSONP adapter function "' + t + '" doesn\'t exist'
                  );
                })(a))
              );
            o = window[a];
          }
          var u = 'prismjsonp' + m++,
            s = document.createElement('a'),
            f = (s.href = r.getAttribute('data-jsonp'));
          s.href +=
            (s.search ? '&' : '?') +
            (r.getAttribute('data-callback') || 'callback') +
            '=' +
            u;
          var l = setTimeout(function () {
            r.setAttribute(p, v),
              (i.textContent = (function (t) {
                return '✖ Error: Timeout loading ' + t;
              })(f));
          }, Prism.plugins.jsonphighlight.timeout),
            d = document.createElement('script');
          (d.src = s.href),
            (window[u] = function (t) {
              document.head.removeChild(d), clearTimeout(l), delete window[u];
              var e = null;
              if (o) e = o(t, r);
              else
                for (
                  var n = 0, a = c.length;
                  n < a && null === (e = c[n].adapter(t, r));
                  n++
                );
              null === e
                ? (r.setAttribute(p, v),
                  (i.textContent =
                    '✖ Error: Cannot parse response (perhaps you need an adapter function?)'))
                : (r.setAttribute(p, h),
                  (i.textContent = e),
                  Prism.highlightElement(i));
            }),
            document.head.appendChild(d);
        }
      }),
      (Prism.plugins.jsonphighlight = {
        timeout: 5e3,
        registerAdapter: t,
        removeAdapter: function (e) {
          if (('string' == typeof e && (e = n(e)), 'function' == typeof e)) {
            var t = c.findIndex(function (t) {
              return t.adapter === e;
            });
            0 <= t && c.splice(t, 1);
          }
        },
        highlight: function (t) {
          for (
            var e, n = (t || document).querySelectorAll(b), a = 0;
            (e = n[a++]);

          )
            Prism.highlightElement(e);
        },
      });
  }
  function t(t, e) {
    (e = e || t.name),
      'function' != typeof t || n(t) || n(e) || c.push({ adapter: t, name: e });
  }
  function n(t) {
    if ('function' == typeof t) {
      for (var e = 0; (n = c[e++]);)
        if (n.adapter.valueOf() === t.valueOf()) return n.adapter;
    } else if ('string' == typeof t) {
      var n;
      for (e = 0; (n = c[e++]);) if (n.name === t) return n.adapter;
    }
    return null;
  }
})();
('undefined' != typeof self && !self.Prism) ||
  ('undefined' != typeof global && !global.Prism) ||
  Prism.hooks.add('wrap', function (e) {
    'keyword' === e.type && e.classes.push('keyword-' + e.content);
  });
'undefined' != typeof self &&
  self.Prism &&
  self.document &&
  document.createRange &&
  ((Prism.plugins.KeepMarkup = !0),
    Prism.hooks.add('before-highlight', function (e) {
      if (
        e.element.children.length &&
        Prism.util.isActive(e.element, 'keep-markup', !0)
      ) {
        var a = 0,
          s = [],
          l = function (e, n) {
            var o = {};
            n || ((o.clone = e.cloneNode(!1)), (o.posOpen = a), s.push(o));
            for (var t = 0, d = e.childNodes.length; t < d; t++) {
              var r = e.childNodes[t];
              1 === r.nodeType ? l(r) : 3 === r.nodeType && (a += r.data.length);
            }
            n || (o.posClose = a);
          };
        l(e.element, !0), s && s.length && (e.keepMarkup = s);
      }
    }),
    Prism.hooks.add('after-highlight', function (n) {
      if (n.keepMarkup && n.keepMarkup.length) {
        var a = function (e, n) {
          for (var o = 0, t = e.childNodes.length; o < t; o++) {
            var d = e.childNodes[o];
            if (1 === d.nodeType) {
              if (!a(d, n)) return !1;
            } else
              3 === d.nodeType &&
                (!n.nodeStart &&
                  n.pos + d.data.length > n.node.posOpen &&
                  ((n.nodeStart = d), (n.nodeStartPos = n.node.posOpen - n.pos)),
                  n.nodeStart &&
                  n.pos + d.data.length >= n.node.posClose &&
                  ((n.nodeEnd = d), (n.nodeEndPos = n.node.posClose - n.pos)),
                  (n.pos += d.data.length));
            if (n.nodeStart && n.nodeEnd) {
              var r = document.createRange();
              return (
                r.setStart(n.nodeStart, n.nodeStartPos),
                r.setEnd(n.nodeEnd, n.nodeEndPos),
                n.node.clone.appendChild(r.extractContents()),
                r.insertNode(n.node.clone),
                r.detach(),
                !1
              );
            }
          }
          return !0;
        };
        n.keepMarkup.forEach(function (e) {
          a(n.element, { node: e, pos: 0 });
        }),
          (n.highlightedCode = n.element.innerHTML);
      }
    }));
!(function () {
  if ('undefined' != typeof self && self.Prism && self.document) {
    var f = /(?:^|\s)command-line(?:\s|$)/,
      p = 'command-line-prompt',
      m = ''.startsWith
        ? function (e, t) {
          return e.startsWith(t);
        }
        : function (e, t) {
          return 0 === e.indexOf(t);
        };
    Prism.hooks.add('before-highlight', function (e) {
      var t = h(e);
      if (!t.complete && e.code) {
        var n = e.element.parentElement;
        if (
          n &&
          /pre/i.test(n.nodeName) &&
          (f.test(n.className) || f.test(e.element.className))
        ) {
          var a = e.element.querySelector('.' + p);
          a && a.remove();
          var s = e.code.split('\n');
          t.numberOfLines = s.length;
          var o = (t.outputLines = []),
            r = n.getAttribute('data-output'),
            i = n.getAttribute('data-filter-output');
          if (null !== r)
            r.split(',').forEach(function (e) {
              var t = e.split('-'),
                n = parseInt(t[0], 10),
                a = 2 === t.length ? parseInt(t[1], 10) : n;
              if (!isNaN(n) && !isNaN(a)) {
                n < 1 && (n = 1), a > s.length && (a = s.length), a--;
                for (var r = --n; r <= a; r++) (o[r] = s[r]), (s[r] = '');
              }
            });
          else if (i)
            for (var l = 0; l < s.length; l++)
              m(s[l], i) && ((o[l] = s[l].slice(i.length)), (s[l] = ''));
          e.code = s.join('\n');
        } else t.complete = !0;
      } else t.complete = !0;
    }),
      Prism.hooks.add('before-insert', function (e) {
        var t = h(e);
        if (!t.complete) {
          for (
            var n = e.highlightedCode.split('\n'),
            a = t.outputLines || [],
            r = 0,
            s = a.length;
            r < s;
            r++
          )
            a.hasOwnProperty(r) && (n[r] = a[r]);
          e.highlightedCode = n.join('\n');
        }
      }),
      Prism.hooks.add('complete', function (e) {
        var t = h(e);
        if (!t.complete) {
          var n,
            a = e.element.parentElement;
          f.test(e.element.className) &&
            (e.element.className = e.element.className.replace(f, ' ')),
            f.test(a.className) || (a.className += ' command-line');
          var r = t.numberOfLines || 0,
            s = u('data-prompt', '');
          if ('' !== s) n = d('<span data-prompt="' + s + '"></span>', r);
          else
            n = d(
              '<span data-user="' +
              u('data-user', 'user') +
              '" data-host="' +
              u('data-host', 'localhost') +
              '"></span>',
              r
            );
          var o = document.createElement('span');
          (o.className = p), (o.innerHTML = n);
          for (var i = t.outputLines || [], l = 0, m = i.length; l < m; l++)
            if (i.hasOwnProperty(l)) {
              var c = o.children[l];
              c.removeAttribute('data-user'),
                c.removeAttribute('data-host'),
                c.removeAttribute('data-prompt');
            }
          e.element.insertBefore(o, e.element.firstChild), (t.complete = !0);
        }
        function u(e, t) {
          return (a.getAttribute(e) || t).replace(/"/g, '&quot');
        }
      });
  }
  function d(e, t) {
    for (var n = '', a = 0; a < t; a++) n += e;
    return n;
  }
  function h(e) {
    var t = (e.vars = e.vars || {});
    return (t['command-line'] = t['command-line'] || {});
  }
})();
'undefined' != typeof self &&
  self.Prism &&
  self.document &&
  (Element.prototype.matches ||
    (Element.prototype.matches =
      Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector),
    (Prism.plugins.UnescapedMarkup = !0),
    Prism.hooks.add('before-highlightall', function (e) {
      e.selector +=
        ', [class*="lang-"] script[type="text/plain"], [class*="language-"] script[type="text/plain"], script[type="text/plain"][class*="lang-"], script[type="text/plain"][class*="language-"]';
    }),
    Prism.hooks.add('before-sanity-check', function (e) {
      var t = e.element;
      if (t.matches('script[type="text/plain"]')) {
        var a = document.createElement('code'),
          c = document.createElement('pre');
        c.className = a.className = t.className;
        var s = t.dataset;
        return (
          Object.keys(s || {}).forEach(function (e) {
            Object.prototype.hasOwnProperty.call(s, e) && (c.dataset[e] = s[e]);
          }),
          (a.textContent = e.code = e.code.replace(
            /&lt;\/script(?:>|&gt;)/gi,
            '</script>'
          )),
          c.appendChild(a),
          t.parentNode.replaceChild(c, t),
          void (e.element = a)
        );
      }
      if (!e.code) {
        var n = t.childNodes;
        1 === n.length &&
          '#comment' == n[0].nodeName &&
          (t.textContent = e.code = n[0].textContent);
      }
    }));
!(function () {
  if (
    ('undefined' == typeof self || self.Prism) &&
    ('undefined' == typeof global || global.Prism)
  ) {
    var r = {
      pattern: /(.)\bdata:[^\/]+\/[^,]+,(?:(?!\1)[\s\S]|\\\1)+(?=\1)/,
      lookbehind: !0,
      inside: {
        'language-css': {
          pattern: /(data:[^\/]+\/(?:[^+,]+\+)?css,)[\s\S]+/,
          lookbehind: !0,
        },
        'language-javascript': {
          pattern: /(data:[^\/]+\/(?:[^+,]+\+)?javascript,)[\s\S]+/,
          lookbehind: !0,
        },
        'language-json': {
          pattern: /(data:[^\/]+\/(?:[^+,]+\+)?json,)[\s\S]+/,
          lookbehind: !0,
        },
        'language-markup': {
          pattern: /(data:[^\/]+\/(?:[^+,]+\+)?(?:html|xml),)[\s\S]+/,
          lookbehind: !0,
        },
      },
    },
      e = ['url', 'attr-value', 'string'];
    (Prism.plugins.dataURIHighlight = {
      processGrammar: function (i) {
        i &&
          !i['data-uri'] &&
          (Prism.languages.DFS(i, function (i, a, n) {
            -1 < e.indexOf(n) &&
              !Array.isArray(a) &&
              (a.pattern || (a = this[i] = { pattern: a }),
                (a.inside = a.inside || {}),
                'attr-value' == n
                  ? Prism.languages.insertBefore(
                    'inside',
                    a.inside['url-link'] ? 'url-link' : 'punctuation',
                    { 'data-uri': r },
                    a
                  )
                  : a.inside['url-link']
                    ? Prism.languages.insertBefore(
                      'inside',
                      'url-link',
                      { 'data-uri': r },
                      a
                    )
                    : (a.inside['data-uri'] = r));
          }),
            (i['data-uri'] = r));
      },
    }),
      Prism.hooks.add('before-highlight', function (i) {
        if (r.pattern.test(i.code))
          for (var a in r.inside)
            if (
              r.inside.hasOwnProperty(a) &&
              !r.inside[a].inside &&
              r.inside[a].pattern.test(i.code)
            ) {
              var n = a.match(/^language-(.+)/)[1];
              Prism.languages[n] &&
                (r.inside[a].inside = {
                  rest:
                    ((e = Prism.languages[n]),
                      Prism.plugins.autolinker &&
                      Prism.plugins.autolinker.processGrammar(e),
                      e),
                });
            }
        var e;
        Prism.plugins.dataURIHighlight.processGrammar(i.grammar);
      });
  }
})();
!(function () {
  if ('undefined' != typeof self && self.Prism && self.document)
    if (Prism.plugins.toolbar) {
      var i = window.ClipboardJS || void 0;
      i || 'function' != typeof require || (i = require('clipboard'));
      var u = [];
      if (!i) {
        var t = document.createElement('script'),
          e = document.querySelector('head');
        (t.onload = function () {
          if ((i = window.ClipboardJS)) for (; u.length;) u.pop()();
        }),
          (t.src =
            'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js'),
          e.appendChild(t);
      }
      Prism.plugins.toolbar.registerButton('copy-to-clipboard', function (t) {
        var e = document.createElement('button');
        (e.textContent = 'Copy'), e.setAttribute('type', 'button');
        var o = t.element;
        return i ? n() : u.push(n), e;
        function n() {
          var t = new i(e, {
            text: function () {
              return o.textContent;
            },
          });
          t.on('success', function () {
            (e.textContent = 'Copied!'), r();
          }),
            t.on('error', function () {
              (e.textContent = 'Press Ctrl+C to copy'), r();
            });
        }
        function r() {
          setTimeout(function () {
            e.textContent = 'Copy';
          }, 5e3);
        }
      });
    } else
      console.warn('Copy to Clipboard plugin loaded before Toolbar plugin.');
})();
'undefined' != typeof self &&
  self.Prism &&
  self.document &&
  document.querySelector &&
  Prism.plugins.toolbar.registerButton('download-file', function (t) {
    var e = t.element.parentNode;
    if (
      e &&
      /pre/i.test(e.nodeName) &&
      e.hasAttribute('data-src') &&
      e.hasAttribute('data-download-link')
    ) {
      var a = e.getAttribute('data-src'),
        n = document.createElement('a');
      return (
        (n.textContent =
          e.getAttribute('data-download-link-label') || 'Download'),
        n.setAttribute('download', ''),
        (n.href = a),
        n
      );
    }
  });
!(function () {
  if ('undefined' != typeof self && self.Prism && self.document) {
    var d = { '(': ')', '[': ']', '{': '}' },
      u = { '(': 'brace-round', '[': 'brace-square', '{': 'brace-curly' },
      f = { '${': '{' },
      h = 0,
      n = /^(pair-\d+-)(open|close)$/;
    Prism.hooks.add('complete', function (e) {
      var t = e.element,
        n = t.parentElement;
      if (n && 'PRE' == n.tagName) {
        var c = [];
        if (
          (Prism.util.isActive(t, 'match-braces') && c.push('(', '[', '{'),
            0 != c.length)
        ) {
          n.__listenerAdded ||
            (n.addEventListener('mousedown', function () {
              var e = n.querySelector('code');
              Array.prototype.slice
                .call(e.querySelectorAll('.brace-selected'))
                .forEach(function (e) {
                  e.classList.remove('brace-selected');
                });
            }),
              Object.defineProperty(n, '__listenerAdded', { value: !0 }));
          var o = Array.prototype.slice.call(
            t.querySelectorAll('span.token.punctuation')
          ),
            l = [];
          c.forEach(function (e) {
            for (
              var t = d[e], n = u[e], c = [], r = [], s = 0;
              s < o.length;
              s++
            ) {
              var a = o[s];
              if (0 == a.childElementCount) {
                var i = a.textContent;
                (i = f[i] || i) === e
                  ? (l.push({ index: s, open: !0, element: a }),
                    a.classList.add(n),
                    a.classList.add('brace-open'),
                    r.push(s))
                  : i === t &&
                  (l.push({ index: s, open: !1, element: a }),
                    a.classList.add(n),
                    a.classList.add('brace-close'),
                    r.length && c.push([s, r.pop()]));
              }
            }
            c.forEach(function (e) {
              var t = 'pair-' + h++ + '-',
                n = o[e[0]],
                c = o[e[1]];
              (n.id = t + 'open'),
                (c.id = t + 'close'),
                [n, c].forEach(function (e) {
                  e.addEventListener('mouseenter', p),
                    e.addEventListener('mouseleave', v),
                    e.addEventListener('click', m);
                });
            });
          });
          var r = 0;
          l.sort(function (e, t) {
            return e.index - t.index;
          }),
            l.forEach(function (e) {
              e.open
                ? (e.element.classList.add('brace-level-' + ((r % 12) + 1)),
                  r++)
                : ((r = Math.max(0, r - 1)),
                  e.element.classList.add('brace-level-' + ((r % 12) + 1)));
            });
        }
      }
    });
  }
  function e(e) {
    var t = n.exec(e.id);
    return document.querySelector(
      '#' + t[1] + ('open' == t[2] ? 'close' : 'open')
    );
  }
  function p() {
    Prism.util.isActive(this, 'brace-hover', !0) &&
      [this, e(this)].forEach(function (e) {
        e.classList.add('brace-hover');
      });
  }
  function v() {
    [this, e(this)].forEach(function (e) {
      e.classList.remove('brace-hover');
    });
  }
  function m() {
    Prism.util.isActive(this, 'brace-select', !0) &&
      [this, e(this)].forEach(function (e) {
        e.classList.add('brace-selected');
      });
  }
})();
!(function () {
  if ('undefined' != typeof Prism) {
    var m = /^diff-([\w-]+)/i,
      d = /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/gi,
      c = RegExp(
        '(?:__|[^\r\n<])*(?:\r\n?|\n|(?:__|[^\r\n<])(?![^\r\n]))'.replace(
          /__/g,
          function () {
            return d.source;
          }
        ),
        'gi'
      ),
      a = !1;
    Prism.hooks.add('before-sanity-check', function (e) {
      var i = e.language;
      m.test(i) &&
        !e.grammar &&
        (e.grammar = Prism.languages[i] = Prism.languages.diff);
    }),
      Prism.hooks.add('before-tokenize', function (e) {
        a ||
          Prism.languages.diff ||
          Prism.plugins.autoloader ||
          ((a = !0),
            console.warn(
              "Prism's Diff Highlight plugin requires the Diff language definition (prism-diff.js).Make sure the language definition is loaded or use Prism's Autoloader plugin."
            ));
        var i = e.language;
        m.test(i) &&
          !Prism.languages[i] &&
          (Prism.languages[i] = Prism.languages.diff);
      }),
      Prism.hooks.add('wrap', function (e) {
        var i, a;
        if ('diff' !== e.language) {
          var s = m.exec(e.language);
          if (!s) return;
          (i = s[1]), (a = Prism.languages[i]);
        }
        var r = Prism.languages.diff && Prism.languages.diff.PREFIXES;
        if (r && e.type in r) {
          var n,
            g = e.content
              .replace(d, '')
              .replace(/&lt;/g, '<')
              .replace(/&amp;/g, '&'),
            f = g.replace(/(^|[\r\n])./g, '$1');
          n = a ? Prism.highlight(f, a, i) : Prism.util.encode(f);
          var u,
            l = new Prism.Token('prefix', r[e.type], [/\w+/.exec(e.type)[0]]),
            t = Prism.Token.stringify(l, e.language),
            o = [];
          for (c.lastIndex = 0; (u = c.exec(n));) o.push(t + u[0]);
          /(?:^|[\r\n]).$/.test(g) && o.push(t),
            (e.content = o.join('')),
            a && e.classes.push('language-' + i);
        }
      });
  }
})();