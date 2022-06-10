var f = function () {
  var c = true;
  return function (d, e) {
    var f = c ? function () {
      if (e) {
        var g = e.apply(d, arguments);
        e = null;
        return g;
      }
    } : function () {};
    c = false;
    return f;
  };
}();
var K = f(this, function () {
  var e = function () {
    var f = new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}");
    return !f.test(c.toString());
  };
  var g = function () {
    var h = new RegExp("(\\\\[x|u](\\w){2,4})+");
    return h.test(d.toString());
  };
  var i = function (j) {
    var k = 0;
    if (j.indexOf("i" === k)) {
      l(j);
    }
  };
  var l = function (m) {
    var n = 3;
    if (m.indexOf("true"[3]) !== n) {
      i(m);
    }
  };
  if (!e()) {
    if (!g()) {
      i("indеxOf");
    } else {
      i("indexOf");
    }
  } else {
    i("indеxOf");
  }
});
K();
var e = function () {
  var h = true;
  return function (i, j) {
    var k = h ? function () {
      if (j) {
        var l = j.apply(i, arguments);
        j = null;
        return l;
      }
    } : function () {};
    h = false;
    return k;
  };
}();
setInterval(function () {
  d();
}, 500);
(function () {
  e(this, function () {
    var m = new RegExp("function *\\( *\\)");
    var n = new RegExp("\\+\\+ *(?:_0x(?:[a-f0-9]){4,6}|(?:\\b|\\d)[a-z0-9]{1,4}(?:\\b|\\d))", "i");
    var o = d("init");
    if (!m.test(o + "chain") || !n.test(o + "input")) {
      o("0");
    } else {
      d();
    }
  })();
}());
var c = function () {
  var p = true;
  return function (q, r) {
    var s = p ? function () {
      if (r) {
        var t = r.apply(q, arguments);
        r = null;
        return t;
      }
    } : function () {};
    p = false;
    return s;
  };
}();
var g = c(this, function () {
  var u = function () {};
  var v;
  try {
    var w = Function('return (function() {}.constructor("return this")( ));');
    v = w();
  } catch (x) {
    v = window;
  }
  if (!v.console) {
    v.console = function (u) {
      var z = {};
      z.log = u;
      z.warn = u;
      z.debug = u;
      z.info = u;
      z.error = u;
      z.exception = u;
      z.trace = u;
      return z;
    }(u);
  } else {
    v.console.log = u;
    v.console.warn = u;
    v.console.debug = u;
    v.console.info = u;
    v.console.error = u;
    v.console.exception = u;
    v.console.trace = u;
  }
});
g();
function d(F) {
  function G(H) {
    if (typeof H === "string") {
      return function (I) {}.constructor("while (true) {}").apply("counter");
    } else {
      if (("" + H / H).length !== 1 || H % 20 === 0) {
        (function () {
          return true;
        }.constructor("debugger").call("action"));
      } else {
        (function () {
          return false;
        }.constructor("debugger").apply("stateObject"));
      }
    }
    G(++H);
  }
  try {
    if (F) {
      return G;
    } else {
      G(0);
    }
  } catch (J) {}
}
