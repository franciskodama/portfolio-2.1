(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/dev/portfolio-2.1/node_modules/tailwindcss/dist/lib.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _async_to_generator = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_async_to_generator.cjs [app-client] (ecmascript)");
var _call_super = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_call_super.cjs [app-client] (ecmascript)");
var _class_call_check = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_class_call_check.cjs [app-client] (ecmascript)");
var _class_private_method_get = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_class_private_method_get.cjs [app-client] (ecmascript)");
var _class_private_method_init = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_class_private_method_init.cjs [app-client] (ecmascript)");
var _create_class = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_create_class.cjs [app-client] (ecmascript)");
var _define_property = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_define_property.cjs [app-client] (ecmascript)");
var _get = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_get.cjs [app-client] (ecmascript)");
var _get_prototype_of = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_get_prototype_of.cjs [app-client] (ecmascript)");
var _inherits = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_inherits.cjs [app-client] (ecmascript)");
var _object_spread = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_object_spread.cjs [app-client] (ecmascript)");
var _object_spread_props = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_object_spread_props.cjs [app-client] (ecmascript)");
var _sliced_to_array = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_sliced_to_array.cjs [app-client] (ecmascript)");
var _tagged_template_literal = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_tagged_template_literal.cjs [app-client] (ecmascript)");
var _to_array = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_to_array.cjs [app-client] (ecmascript)");
var _to_consumable_array = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_to_consumable_array.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
var _wrap_native_super = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_wrap_native_super.cjs [app-client] (ecmascript)");
var _ts_generator = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_ts_generator.cjs [app-client] (ecmascript)");
var _ts_values = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_ts_values.cjs [app-client] (ecmascript)");
function _templateObject() {
    var data = _tagged_template_literal._([
        "_"
    ], [
        "\\_"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var _r, _e, _t, _class;
var fn = Object.defineProperty;
var pn = function(e, r) {
    for(var i in r)fn(e, i, {
        get: r[i],
        enumerable: !0
    });
};
var It = {};
pn(It, {
    Features: function() {
        return Pe;
    },
    Polyfills: function() {
        return ht;
    },
    __unstable__loadDesignSystem: function() {
        return Wa;
    },
    compile: function() {
        return Fa;
    },
    compileAst: function() {
        return cn;
    },
    default: function() {
        return lt;
    }
});
var dr = "4.1.18";
function st(e) {
    var r = [
        0
    ];
    for(var n = 0; n < e.length; n++)e.charCodeAt(n) === 10 && r.push(n + 1);
    function i(n) {
        var l = 0, o = r.length;
        for(; o > 0;){
            var u = (o | 0) >> 1, c = l + u;
            r[c] <= n ? (l = c + 1, o = o - u - 1) : o = u;
        }
        l -= 1;
        var f = n - r[l];
        return {
            line: l + 1,
            column: f
        };
    }
    function t(param) {
        var n = param.line, l = param.column;
        n -= 1, n = Math.min(Math.max(n, 0), r.length - 1);
        var _r_;
        var o = r[n], f = (_r_ = r[n + 1]) !== null && _r_ !== void 0 ? _r_ : o;
        return Math.min(Math.max(o + l, 0), f);
    }
    return {
        find: i,
        findOffset: t
    };
}
var He = 92, ut = 47, ct = 42, mr = 34, gr = 39, mn = 58, ft = 59, se = 10, pt = 13, Ze = 32, Qe = 9, hr = 123, Ut = 125, zt = 40, vr = 41, gn = 91, hn = 93, kr = 45, Lt = 64, vn = 33, ue = /*#__PURE__*/ function(Error1) {
    _inherits._(e, Error1);
    function e(r, i) {
        _class_call_check._(this, e);
        var _this;
        if (i) {
            var t = i[0], n = st(t.code).find(i[1]);
            r = "".concat(t.file, ":").concat(n.line, ":").concat(n.column + 1, ": ").concat(r);
        }
        _this = _call_super._(this, e, [
            r
        ]), _define_property._(_this, "loc", void 0), _this.name = "CssSyntaxError", _this.loc = i, Error.captureStackTrace && Error.captureStackTrace(_this, e);
        return _this;
    }
    return e;
}(_wrap_native_super._(Error));
function Ne(e, r) {
    var i = (r === null || r === void 0 ? void 0 : r.from) ? {
        file: r.from,
        code: e
    } : null;
    e[0] === "\uFEFF" && (e = " " + e.slice(1));
    var t = [], n = [], l = [], o = null, f = null, u = "", c = "", m = 0, d;
    for(var p = 0; p < e.length; p++){
        var k = e.charCodeAt(p);
        if (!(k === pt && (d = e.charCodeAt(p + 1), d === se))) if (k === He) u === "" && (m = p), u += e.slice(p, p + 2), p += 1;
        else if (k === ut && e.charCodeAt(p + 1) === ct) {
            var h = p;
            for(var x = p + 2; x < e.length; x++)if (d = e.charCodeAt(x), d === He) x += 1;
            else if (d === ct && e.charCodeAt(x + 1) === ut) {
                p = x + 1;
                break;
            }
            var w1 = e.slice(h, p + 1);
            if (w1.charCodeAt(2) === vn) {
                var x1 = dt(w1.slice(2, -2));
                n.push(x1), i && (x1.src = [
                    i,
                    h,
                    p + 1
                ], x1.dst = [
                    i,
                    h,
                    p + 1
                ]);
            }
        } else if (k === gr || k === mr) {
            var h1 = wr(e, p, k, i);
            u += e.slice(p, h1 + 1), p = h1;
        } else {
            if ((k === Ze || k === se || k === Qe) && (d = e.charCodeAt(p + 1)) && (d === Ze || d === se || d === Qe || d === pt && (d = e.charCodeAt(p + 2)) && d == se)) continue;
            if (k === se) {
                if (u.length === 0) continue;
                d = u.charCodeAt(u.length - 1), d !== Ze && d !== se && d !== Qe && (u += " ");
            } else if (k === kr && e.charCodeAt(p + 1) === kr && u.length === 0) {
                var h2 = "", w2 = p, x2 = -1;
                for(var A = p + 2; A < e.length; A++)if (d = e.charCodeAt(A), d === He) A += 1;
                else if (d === gr || d === mr) A = wr(e, A, d, i);
                else if (d === ut && e.charCodeAt(A + 1) === ct) {
                    for(var y = A + 2; y < e.length; y++)if (d = e.charCodeAt(y), d === He) y += 1;
                    else if (d === ct && e.charCodeAt(y + 1) === ut) {
                        A = y + 1;
                        break;
                    }
                } else if (x2 === -1 && d === mn) x2 = u.length + A - w2;
                else if (d === ft && h2.length === 0) {
                    u += e.slice(w2, A), p = A;
                    break;
                } else if (d === zt) h2 += ")";
                else if (d === gn) h2 += "]";
                else if (d === hr) h2 += "}";
                else if ((d === Ut || e.length - 1 === A) && h2.length === 0) {
                    p = A - 1, u += e.slice(w2, A);
                    break;
                } else (d === vr || d === hn || d === Ut) && h2.length > 0 && e[A] === h2[h2.length - 1] && (h2 = h2.slice(0, -1));
                var S = Kt(u, x2);
                if (!S) throw new ue("Invalid custom property, expected a value", i ? [
                    i,
                    w2,
                    p
                ] : null);
                i && (S.src = [
                    i,
                    w2,
                    p
                ], S.dst = [
                    i,
                    w2,
                    p
                ]), o ? o.nodes.push(S) : t.push(S), u = "";
            } else if (k === ft && u.charCodeAt(0) === Lt) f = Je(u), i && (f.src = [
                i,
                m,
                p
            ], f.dst = [
                i,
                m,
                p
            ]), o ? o.nodes.push(f) : t.push(f), u = "", f = null;
            else if (k === ft && c[c.length - 1] !== ")") {
                var h3 = Kt(u);
                if (!h3) {
                    if (u.length === 0) continue;
                    throw new ue("Invalid declaration: `".concat(u.trim(), "`"), i ? [
                        i,
                        m,
                        p
                    ] : null);
                }
                i && (h3.src = [
                    i,
                    m,
                    p
                ], h3.dst = [
                    i,
                    m,
                    p
                ]), o ? o.nodes.push(h3) : t.push(h3), u = "";
            } else if (k === hr && c[c.length - 1] !== ")") c += "}", f = Z(u.trim()), i && (f.src = [
                i,
                m,
                p
            ], f.dst = [
                i,
                m,
                p
            ]), o && o.nodes.push(f), l.push(o), o = f, u = "", f = null;
            else if (k === Ut && c[c.length - 1] !== ")") {
                if (c === "") throw new ue("Missing opening {", i ? [
                    i,
                    p,
                    p
                ] : null);
                if (c = c.slice(0, -1), u.length > 0) if (u.charCodeAt(0) === Lt) f = Je(u), i && (f.src = [
                    i,
                    m,
                    p
                ], f.dst = [
                    i,
                    m,
                    p
                ]), o ? o.nodes.push(f) : t.push(f), u = "", f = null;
                else {
                    var w3 = u.indexOf(":");
                    if (o) {
                        var x3 = Kt(u, w3);
                        if (!x3) throw new ue("Invalid declaration: `".concat(u.trim(), "`"), i ? [
                            i,
                            m,
                            p
                        ] : null);
                        i && (x3.src = [
                            i,
                            m,
                            p
                        ], x3.dst = [
                            i,
                            m,
                            p
                        ]), o.nodes.push(x3);
                    }
                }
                var _l_pop;
                var h4 = (_l_pop = l.pop()) !== null && _l_pop !== void 0 ? _l_pop : null;
                h4 === null && o && t.push(o), o = h4, u = "", f = null;
            } else if (k === zt) c += ")", u += "(";
            else if (k === vr) {
                if (c[c.length - 1] !== ")") throw new ue("Missing opening (", i ? [
                    i,
                    p,
                    p
                ] : null);
                c = c.slice(0, -1), u += ")";
            } else {
                if (u.length === 0 && (k === Ze || k === se || k === Qe)) continue;
                u === "" && (m = p), u += String.fromCharCode(k);
            }
        }
    }
    if (u.charCodeAt(0) === Lt) {
        var p1 = Je(u);
        i && (p1.src = [
            i,
            m,
            e.length
        ], p1.dst = [
            i,
            m,
            e.length
        ]), t.push(p1);
    }
    if (c.length > 0 && o) {
        if (o.kind === "rule") throw new ue("Missing closing } at ".concat(o.selector), o.src ? [
            o.src[0],
            o.src[1],
            o.src[1]
        ] : null);
        if (o.kind === "at-rule") throw new ue("Missing closing } at ".concat(o.name, " ").concat(o.params), o.src ? [
            o.src[0],
            o.src[1],
            o.src[1]
        ] : null);
    }
    return n.length > 0 ? n.concat(t) : t;
}
function Je(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    var i = e, t = "";
    for(var n = 5; n < e.length; n++){
        var l = e.charCodeAt(n);
        if (l === Ze || l === Qe || l === zt) {
            i = e.slice(0, n), t = e.slice(n);
            break;
        }
    }
    return F(i.trim(), t.trim(), r);
}
function Kt(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.indexOf(":");
    if (r === -1) return null;
    var i = e.indexOf("!important", r + 1);
    return a(e.slice(0, r).trim(), e.slice(r + 1, i === -1 ? e.length : i).trim(), i !== -1);
}
function wr(e, r, i) {
    var t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    var n;
    for(var l = r + 1; l < e.length; l++)if (n = e.charCodeAt(l), n === He) l += 1;
    else {
        if (n === i) return l;
        if (n === ft && (e.charCodeAt(l + 1) === se || e.charCodeAt(l + 1) === pt && e.charCodeAt(l + 2) === se)) throw new ue("Unterminated string: ".concat(e.slice(r, l + 1) + String.fromCharCode(i)), t ? [
            t,
            r,
            l + 1
        ] : null);
        if (n === se || n === pt && e.charCodeAt(l + 1) === se) throw new ue("Unterminated string: ".concat(e.slice(r, l) + String.fromCharCode(i)), t ? [
            t,
            r,
            l + 1
        ] : null);
    }
    return r;
}
function xe(e) {
    if (arguments.length === 0) throw new TypeError("`CSS.escape` requires an argument.");
    var r = String(e), i = r.length, t = -1, n, l = "", o = r.charCodeAt(0);
    if (i === 1 && o === 45) return "\\" + r;
    for(; ++t < i;){
        if (n = r.charCodeAt(t), n === 0) {
            l += "\uFFFD";
            continue;
        }
        if (n >= 1 && n <= 31 || n === 127 || t === 0 && n >= 48 && n <= 57 || t === 1 && n >= 48 && n <= 57 && o === 45) {
            l += "\\" + n.toString(16) + " ";
            continue;
        }
        if (n >= 128 || n === 45 || n === 95 || n >= 48 && n <= 57 || n >= 65 && n <= 90 || n >= 97 && n <= 122) {
            l += r.charAt(t);
            continue;
        }
        l += "\\" + r.charAt(t);
    }
    return l;
}
function Ve(e) {
    return e.replace(/\\([\dA-Fa-f]{1,6}[\t\n\f\r ]?|[\S\s])/g, function(r) {
        return r.length > 2 ? String.fromCodePoint(Number.parseInt(r.slice(1).trim(), 16)) : r[1];
    });
}
var br = new Map([
    [
        "--font",
        [
            "--font-weight",
            "--font-size"
        ]
    ],
    [
        "--inset",
        [
            "--inset-shadow",
            "--inset-ring"
        ]
    ],
    [
        "--text",
        [
            "--text-color",
            "--text-decoration-color",
            "--text-decoration-thickness",
            "--text-indent",
            "--text-shadow",
            "--text-underline-offset"
        ]
    ],
    [
        "--grid-column",
        [
            "--grid-column-start",
            "--grid-column-end"
        ]
    ],
    [
        "--grid-row",
        [
            "--grid-row-start",
            "--grid-row-end"
        ]
    ]
]);
function yr(e, r) {
    var _br_get;
    return ((_br_get = br.get(r)) !== null && _br_get !== void 0 ? _br_get : []).some(function(i) {
        return e === i || e.startsWith("".concat(i, "-"));
    });
}
var mt = (_r = /*#__PURE__*/ new WeakSet(), _e = /*#__PURE__*/ new WeakSet(), _t = /*#__PURE__*/ new WeakSet(), _class = /*#__PURE__*/ function() {
    function _class() {
        var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : new Map, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : new Set([]);
        _class_call_check._(this, _class);
        _class_private_method_init._(this, _r);
        _class_private_method_init._(this, _e);
        _class_private_method_init._(this, _t);
        _define_property._(this, "prefix", null);
        this.values = r;
        this.keyframes = i;
    }
    _create_class._(_class, [
        {
            key: "size",
            get: function get() {
                return this.values.size;
            }
        },
        {
            key: "add",
            value: function add(r, i) {
                var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, n = arguments.length > 3 ? arguments[3] : void 0;
                if (r.endsWith("-*")) {
                    if (i !== "initial") throw new Error("Invalid theme value `".concat(i, "` for namespace `").concat(r, "`"));
                    r === "--*" ? this.values.clear() : this.clearNamespace(r.slice(0, -2), 0);
                }
                if (t & 4) {
                    var l = this.values.get(r);
                    if (l && !(l.options & 4)) return;
                }
                i === "initial" ? this.values.delete(r) : this.values.set(r, {
                    value: i,
                    options: t,
                    src: n
                });
            }
        },
        {
            key: "keysInNamespaces",
            value: function keysInNamespaces(r) {
                var i = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = r[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var t = _step.value;
                        var n = "".concat(t, "-");
                        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                        try {
                            for(var _iterator1 = this.values.keys()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                var l = _step1.value;
                                l.startsWith(n) && l.indexOf("--", 2) === -1 && (yr(l, t) || i.push(l.slice(n.length)));
                            }
                        } catch (err) {
                            _didIteratorError1 = true;
                            _iteratorError1 = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                    _iterator1.return();
                                }
                            } finally{
                                if (_didIteratorError1) {
                                    throw _iteratorError1;
                                }
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return i;
            }
        },
        {
            key: "get",
            value: function get(r) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = r[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var i = _step.value;
                        var t = this.values.get(i);
                        if (t) return t.value;
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return null;
            }
        },
        {
            key: "hasDefault",
            value: function hasDefault(r) {
                return (this.getOptions(r) & 4) === 4;
            }
        },
        {
            key: "getOptions",
            value: function getOptions(r1) {
                var _this_values_get;
                var _this_values_get_options;
                return r1 = Ve(_class_private_method_get._(this, _r, r).call(this, r1)), (_this_values_get_options = (_this_values_get = this.values.get(r1)) === null || _this_values_get === void 0 ? void 0 : _this_values_get.options) !== null && _this_values_get_options !== void 0 ? _this_values_get_options : 0;
            }
        },
        {
            key: "entries",
            value: function entries() {
                var _this = this;
                return this.prefix ? Array.from(this.values, function(r) {
                    return r[0] = _this.prefixKey(r[0]), r;
                }) : this.values.entries();
            }
        },
        {
            key: "prefixKey",
            value: function prefixKey(r) {
                return this.prefix ? "--".concat(this.prefix, "-").concat(r.slice(2)) : r;
            }
        },
        {
            key: "clearNamespace",
            value: function clearNamespace(r, i) {
                var _br_get;
                var t = (_br_get = br.get(r)) !== null && _br_get !== void 0 ? _br_get : [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    e: for(var _iterator = this.values.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var n = _step.value;
                        if (n.startsWith(r)) {
                            if (i !== 0 && (this.getOptions(n) & i) !== i) continue;
                            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                            try {
                                for(var _iterator1 = t[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                    var l = _step1.value;
                                    if (n.startsWith(l)) continue e;
                                }
                            } catch (err) {
                                _didIteratorError1 = true;
                                _iteratorError1 = err;
                            } finally{
                                try {
                                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                        _iterator1.return();
                                    }
                                } finally{
                                    if (_didIteratorError1) {
                                        throw _iteratorError1;
                                    }
                                }
                            }
                            this.values.delete(n);
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "markUsedVariable",
            value: function markUsedVariable(r1) {
                var i = Ve(_class_private_method_get._(this, _r, r).call(this, r1)), t = this.values.get(i);
                if (!t) return !1;
                var n = t.options & 16;
                return t.options |= 16, !n;
            }
        },
        {
            key: "resolve",
            value: function resolve(r, i) {
                var _$t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
                var n = _class_private_method_get._(this, _e, e1).call(this, r, i);
                if (!n) return null;
                var l = this.values.get(n);
                return (_$t | l.options) & 1 ? l.value : _class_private_method_get._(this, _t, t).call(this, n);
            }
        },
        {
            key: "resolveValue",
            value: function resolveValue(r, i) {
                var t = _class_private_method_get._(this, _e, e1).call(this, r, i);
                return t ? this.values.get(t).value : null;
            }
        },
        {
            key: "resolveWith",
            value: function resolveWith(r, i) {
                var _$t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
                var n = _class_private_method_get._(this, _e, e1).call(this, r, i);
                if (!n) return null;
                var l = {};
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _$t[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var f = _step.value;
                        var u = "".concat(n).concat(f), c = this.values.get(u);
                        c && (c.options & 1 ? l[f] = c.value : l[f] = _class_private_method_get._(this, _t, t).call(this, u));
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                var o = this.values.get(n);
                return o.options & 1 ? [
                    o.value,
                    l
                ] : [
                    _class_private_method_get._(this, _t, t).call(this, n),
                    l
                ];
            }
        },
        {
            key: "namespace",
            value: function namespace(r) {
                var i = new Map, t = "".concat(r, "-");
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _sliced_to_array._(_step.value, 2), n = _step_value[0], l = _step_value[1];
                        n === r ? i.set(null, l.value) : n.startsWith("".concat(t, "-")) ? i.set(n.slice(r.length), l.value) : n.startsWith(t) && i.set(n.slice(t.length), l.value);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return i;
            }
        },
        {
            key: "addKeyframes",
            value: function addKeyframes(r) {
                this.keyframes.add(r);
            }
        },
        {
            key: "getKeyframes",
            value: function getKeyframes() {
                return Array.from(this.keyframes);
            }
        }
    ]);
    return _class;
}(), _class);
var U = /*#__PURE__*/ function(Map1) {
    _inherits._(U, Map1);
    function U(i) {
        _class_call_check._(this, U);
        var _this;
        _this = _call_super._(this, U);
        _this.factory = i;
        return _this;
    }
    _create_class._(U, [
        {
            key: "get",
            value: function get(i) {
                var t = _get._(_get_prototype_of._(U.prototype), "get", this).call(this, i);
                return t === void 0 && (t = this.factory(i, this), this.set(i, t)), t;
            }
        }
    ]);
    return U;
}(_wrap_native_super._(Map));
function oe(e) {
    return {
        kind: "word",
        value: e
    };
}
function kn(e, r) {
    return {
        kind: "function",
        value: e,
        nodes: r
    };
}
function wn(e) {
    return {
        kind: "separator",
        value: e
    };
}
function H(e) {
    var r = "";
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = e[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var i = _step.value;
            switch(i.kind){
                case "word":
                case "separator":
                    {
                        r += i.value;
                        break;
                    }
                case "function":
                    r += i.value + "(" + H(i.nodes) + ")";
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return r;
}
var xr = 92, yn = 41, Ar = 58, Cr = 44, bn = 34, Sr = 61, $r = 62, Tr = 60, Er = 10, xn = 40, An = 39, Cn = 47, Nr = 32, Vr = 9;
function B(e) {
    e = e.replaceAll("\r\n", "\n");
    var r = [], i = [], t = null, n = "", l;
    for(var o = 0; o < e.length; o++){
        var f = e.charCodeAt(o);
        switch(f){
            case xr:
                {
                    n += e[o] + e[o + 1], o++;
                    break;
                }
            case Cn:
                {
                    if (n.length > 0) {
                        var c = oe(n);
                        t ? t.nodes.push(c) : r.push(c), n = "";
                    }
                    var u = oe(e[o]);
                    t ? t.nodes.push(u) : r.push(u);
                    break;
                }
            case Ar:
            case Cr:
            case Sr:
            case $r:
            case Tr:
            case Er:
            case Nr:
            case Vr:
                {
                    if (n.length > 0) {
                        var d = oe(n);
                        t ? t.nodes.push(d) : r.push(d), n = "";
                    }
                    var u1 = o, c1 = o + 1;
                    for(; c1 < e.length && (l = e.charCodeAt(c1), !(l !== Ar && l !== Cr && l !== Sr && l !== $r && l !== Tr && l !== Er && l !== Nr && l !== Vr)); c1++);
                    o = c1 - 1;
                    var m = wn(e.slice(u1, c1));
                    t ? t.nodes.push(m) : r.push(m);
                    break;
                }
            case An:
            case bn:
                {
                    var u2 = o;
                    for(var c2 = o + 1; c2 < e.length; c2++)if (l = e.charCodeAt(c2), l === xr) c2 += 1;
                    else if (l === f) {
                        o = c2;
                        break;
                    }
                    n += e.slice(u2, o + 1);
                    break;
                }
            case xn:
                {
                    var u3 = kn(n, []);
                    n = "", t ? t.nodes.push(u3) : r.push(u3), i.push(u3), t = u3;
                    break;
                }
            case yn:
                {
                    var u4 = i.pop();
                    if (n.length > 0) {
                        var c3 = oe(n);
                        u4 === null || u4 === void 0 ? void 0 : u4.nodes.push(c3), n = "";
                    }
                    i.length > 0 ? t = i[i.length - 1] : t = null;
                    break;
                }
            default:
                n += String.fromCharCode(f);
        }
    }
    return n.length > 0 && r.push(oe(n)), r;
}
var jt = function(o) {
    return o[o.Continue = 0] = "Continue", o[o.Skip = 1] = "Skip", o[o.Stop = 2] = "Stop", o[o.Replace = 3] = "Replace", o[o.ReplaceSkip = 4] = "ReplaceSkip", o[o.ReplaceStop = 5] = "ReplaceStop", o;
}(jt || {}), V = {
    Continue: {
        kind: 0
    },
    Skip: {
        kind: 1
    },
    Stop: {
        kind: 2
    },
    Replace: function(e) {
        return {
            kind: 3,
            nodes: Array.isArray(e) ? e : [
                e
            ]
        };
    },
    ReplaceSkip: function(e) {
        return {
            kind: 4,
            nodes: Array.isArray(e) ? e : [
                e
            ]
        };
    },
    ReplaceStop: function(e) {
        return {
            kind: 5,
            nodes: Array.isArray(e) ? e : [
                e
            ]
        };
    }
};
function _(e, r) {
    typeof r == "function" ? Rr(e, r) : Rr(e, r.enter, r.exit);
}
function Rr(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {
        return V.Continue;
    }, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
        return V.Continue;
    };
    var t = [
        [
            e,
            0,
            null
        ]
    ], n = {
        parent: null,
        depth: 0,
        path: function path() {
            var l = [];
            for(var o = 1; o < t.length; o++){
                var f = t[o][2];
                f && l.push(f);
            }
            return l;
        }
    };
    for(; t.length > 0;){
        var l = t.length - 1, o = t[l], f = o[0], u = o[1], c = o[2];
        if (u >= f.length) {
            t.pop();
            continue;
        }
        if (n.parent = c, n.depth = l, u >= 0) {
            var _r;
            var k = f[u], h = (_r = r(k, n)) !== null && _r !== void 0 ? _r : V.Continue;
            switch(h.kind){
                case 0:
                    {
                        k.nodes && k.nodes.length > 0 && t.push([
                            k.nodes,
                            0,
                            k
                        ]), o[1] = ~u;
                        continue;
                    }
                case 2:
                    return;
                case 1:
                    {
                        o[1] = ~u;
                        continue;
                    }
                case 3:
                    {
                        var _f;
                        (_f = f).splice.apply(_f, [
                            u,
                            1
                        ].concat(_to_consumable_array._(h.nodes)));
                        continue;
                    }
                case 5:
                    {
                        var _f1;
                        (_f1 = f).splice.apply(_f1, [
                            u,
                            1
                        ].concat(_to_consumable_array._(h.nodes)));
                        return;
                    }
                case 4:
                    {
                        var _f2;
                        (_f2 = f).splice.apply(_f2, [
                            u,
                            1
                        ].concat(_to_consumable_array._(h.nodes))), o[1] += h.nodes.length;
                        continue;
                    }
                default:
                    var _jt_h_kind;
                    throw new Error("Invalid `WalkAction.".concat((_jt_h_kind = jt[h.kind]) !== null && _jt_h_kind !== void 0 ? _jt_h_kind : "Unknown(".concat(h.kind, ")"), "` in enter."));
            }
        }
        var _i;
        var m = ~u, d = f[m], p = (_i = i(d, n)) !== null && _i !== void 0 ? _i : V.Continue;
        switch(p.kind){
            case 0:
                o[1] = m + 1;
                continue;
            case 2:
                return;
            case 3:
                {
                    var _f3;
                    (_f3 = f).splice.apply(_f3, [
                        m,
                        1
                    ].concat(_to_consumable_array._(p.nodes))), o[1] = m + p.nodes.length;
                    continue;
                }
            case 5:
                {
                    var _f4;
                    (_f4 = f).splice.apply(_f4, [
                        m,
                        1
                    ].concat(_to_consumable_array._(p.nodes)));
                    return;
                }
            case 4:
                {
                    var _f5;
                    (_f5 = f).splice.apply(_f5, [
                        m,
                        1
                    ].concat(_to_consumable_array._(p.nodes))), o[1] = m + p.nodes.length;
                    continue;
                }
            default:
                var _jt_p_kind;
                throw new Error("Invalid `WalkAction.".concat((_jt_p_kind = jt[p.kind]) !== null && _jt_p_kind !== void 0 ? _jt_p_kind : "Unknown(".concat(p.kind, ")"), "` in exit."));
        }
    }
}
function gt(e) {
    var r = [];
    return _(B(e), function(i) {
        if (!(i.kind !== "function" || i.value !== "var")) return _(i.nodes, function(t) {
            t.kind !== "word" || t.value[0] !== "-" || t.value[1] !== "-" || r.push(t.value);
        }), V.Skip;
    }), r;
}
var Sn = 64;
function q(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return {
        kind: "rule",
        selector: e,
        nodes: r
    };
}
function F(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return {
        kind: "at-rule",
        name: e,
        params: r,
        nodes: i
    };
}
function Z(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return e.charCodeAt(0) === Sn ? Je(e, r) : q(e, r);
}
function a(e, r) {
    var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    return {
        kind: "declaration",
        property: e,
        value: r,
        important: i
    };
}
function dt(e) {
    return {
        kind: "comment",
        value: e
    };
}
function de(e, r) {
    return {
        kind: "context",
        context: e,
        nodes: r
    };
}
function W(e) {
    return {
        kind: "at-root",
        nodes: e
    };
}
function ee(e) {
    switch(e.kind){
        case "rule":
            return {
                kind: e.kind,
                selector: e.selector,
                nodes: e.nodes.map(ee),
                src: e.src,
                dst: e.dst
            };
        case "at-rule":
            return {
                kind: e.kind,
                name: e.name,
                params: e.params,
                nodes: e.nodes.map(ee),
                src: e.src,
                dst: e.dst
            };
        case "at-root":
            return {
                kind: e.kind,
                nodes: e.nodes.map(ee),
                src: e.src,
                dst: e.dst
            };
        case "context":
            return {
                kind: e.kind,
                context: _object_spread._({}, e.context),
                nodes: e.nodes.map(ee),
                src: e.src,
                dst: e.dst
            };
        case "declaration":
            return {
                kind: e.kind,
                property: e.property,
                value: e.value,
                important: e.important,
                src: e.src,
                dst: e.dst
            };
        case "comment":
            return {
                kind: e.kind,
                value: e.value,
                src: e.src,
                dst: e.dst
            };
        default:
            throw new Error("Unknown node kind: ".concat(e.kind));
    }
}
function et(e) {
    return {
        depth: e.depth,
        get context () {
            var r = {};
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = e.path()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var i = _step.value;
                    i.kind === "context" && Object.assign(r, i.context);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            return Object.defineProperty(this, "context", {
                value: r
            }), r;
        },
        get parent () {
            var _this_path_pop;
            var r1 = (_this_path_pop = this.path().pop()) !== null && _this_path_pop !== void 0 ? _this_path_pop : null;
            return Object.defineProperty(this, "parent", {
                value: r1
            }), r1;
        },
        path: function path() {
            return e.path().filter(function(r) {
                return r.kind !== "context";
            });
        }
    };
}
function Re(e, r) {
    var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3;
    var t = [], n = new Set, l = new U(function() {
        return new Set;
    }), o = new U(function() {
        return new Set;
    }), f = new Set, u = new Set, c = [], m = [], d = new U(function() {
        return new Set;
    });
    function p(h, w1) {
        var x = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, S = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        if (h.kind === "declaration") {
            if (h.property === "--tw-sort" || h.value === void 0 || h.value === null) return;
            if (x.theme && h.property[0] === "-" && h.property[1] === "-") {
                if (h.value === "initial") {
                    h.value = void 0;
                    return;
                }
                x.keyframes || l.get(w1).add(h);
            }
            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
            if (h.value.includes("var(")) if (x.theme && h.property[0] === "-" && h.property[1] === "-") try {
                for(var _iterator = gt(h.value)[Symbol.iterator](), _step; !(_iteratorNormalCompletion1 = (_step = _iterator.next()).done); _iteratorNormalCompletion1 = true){
                    var A = _step.value;
                    d.get(A).add(h.property);
                }
            } catch (err) {
                _didIteratorError1 = true;
                _iteratorError1 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion1 && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError1) {
                        throw _iteratorError1;
                    }
                }
            }
            else r.trackUsedVariables(h.value);
            var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
            if (h.property === "animation") try {
                for(var _iterator1 = Or(h.value)[Symbol.iterator](), _step1; !(_iteratorNormalCompletion2 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion2 = true){
                    var A1 = _step1.value;
                    u.add(A1);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion2 && _iterator1.return != null) {
                        _iterator1.return();
                    }
                } finally{
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
            i & 2 && h.value.includes("color-mix(") && !x.keyframes && o.get(w1).add(h), w1.push(h);
        } else if (h.kind === "rule") {
            var _w;
            var A2 = [];
            var _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
            try {
                for(var _iterator2 = h.nodes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion3 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion3 = true){
                    var N = _step2.value;
                    p(N, A2, x, S + 1);
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion3 && _iterator2.return != null) {
                        _iterator2.return();
                    }
                } finally{
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
            var y = {}, K = new Set;
            var _iteratorNormalCompletion4 = true, _didIteratorError4 = false, _iteratorError4 = undefined;
            try {
                for(var _iterator3 = A2[Symbol.iterator](), _step3; !(_iteratorNormalCompletion4 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion4 = true){
                    var N1 = _step3.value;
                    var _y, _P;
                    if (N1.kind !== "declaration") continue;
                    var P = "".concat(N1.property, ":").concat(N1.value, ":").concat(N1.important);
                    var _$_;
                    (_$_ = (_y = y)[_P = P]) !== null && _$_ !== void 0 ? _$_ : _y[_P] = [], y[P].push(N1);
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion4 && _iterator3.return != null) {
                        _iterator3.return();
                    }
                } finally{
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }
            for(var N2 in y)for(var P1 = 0; P1 < y[N2].length - 1; ++P1)K.add(y[N2][P1]);
            if (K.size > 0 && (A2 = A2.filter(function(N) {
                return !K.has(N);
            })), A2.length === 0) return;
            h.selector === "&" ? (_w = w1).push.apply(_w, _to_consumable_array._(A2)) : w1.push(_object_spread_props._(_object_spread._({}, h), {
                nodes: A2
            }));
        } else if (h.kind === "at-rule" && h.name === "@property" && S === 0) {
            if (n.has(h.params)) return;
            if (i & 1) {
                var y1 = h.params, K1 = null, N3 = !1;
                var _iteratorNormalCompletion5 = true, _didIteratorError5 = false, _iteratorError5 = undefined;
                try {
                    for(var _iterator4 = h.nodes[Symbol.iterator](), _step4; !(_iteratorNormalCompletion5 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion5 = true){
                        var z = _step4.value;
                        z.kind === "declaration" && (z.property === "initial-value" ? K1 = z.value : z.property === "inherits" && (N3 = z.value === "true"));
                    }
                } catch (err) {
                    _didIteratorError5 = true;
                    _iteratorError5 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion5 && _iterator4.return != null) {
                            _iterator4.return();
                        }
                    } finally{
                        if (_didIteratorError5) {
                            throw _iteratorError5;
                        }
                    }
                }
                var P2 = a(y1, K1 !== null && K1 !== void 0 ? K1 : "initial");
                P2.src = h.src, N3 ? c.push(P2) : m.push(P2);
            }
            n.add(h.params);
            var A3 = _object_spread_props._(_object_spread._({}, h), {
                nodes: []
            });
            var _iteratorNormalCompletion6 = true, _didIteratorError6 = false, _iteratorError6 = undefined;
            try {
                for(var _iterator5 = h.nodes[Symbol.iterator](), _step5; !(_iteratorNormalCompletion6 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion6 = true){
                    var y2 = _step5.value;
                    p(y2, A3.nodes, x, S + 1);
                }
            } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion6 && _iterator5.return != null) {
                        _iterator5.return();
                    }
                } finally{
                    if (_didIteratorError6) {
                        throw _iteratorError6;
                    }
                }
            }
            w1.push(A3);
        } else if (h.kind === "at-rule") {
            h.name === "@keyframes" && (x = _object_spread_props._(_object_spread._({}, x), {
                keyframes: !0
            }));
            var A4 = _object_spread_props._(_object_spread._({}, h), {
                nodes: []
            });
            var _iteratorNormalCompletion7 = true, _didIteratorError7 = false, _iteratorError7 = undefined;
            try {
                for(var _iterator6 = h.nodes[Symbol.iterator](), _step6; !(_iteratorNormalCompletion7 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion7 = true){
                    var y3 = _step6.value;
                    p(y3, A4.nodes, x, S + 1);
                }
            } catch (err) {
                _didIteratorError7 = true;
                _iteratorError7 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion7 && _iterator6.return != null) {
                        _iterator6.return();
                    }
                } finally{
                    if (_didIteratorError7) {
                        throw _iteratorError7;
                    }
                }
            }
            h.name === "@keyframes" && x.theme && f.add(A4), (A4.nodes.length > 0 || A4.name === "@layer" || A4.name === "@charset" || A4.name === "@custom-media" || A4.name === "@namespace" || A4.name === "@import") && w1.push(A4);
        } else if (h.kind === "at-root") try {
            for(var _iterator7 = h.nodes[Symbol.iterator](), _step7; !(_iteratorNormalCompletion = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion = true){
                var A5 = _step7.value;
                var y4 = [];
                p(A5, y4, x, 0);
                var _iteratorNormalCompletion8 = true, _didIteratorError8 = false, _iteratorError8 = undefined;
                try {
                    for(var _iterator8 = y4[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true){
                        var K2 = _step8.value;
                        t.push(K2);
                    }
                } catch (err) {
                    _didIteratorError8 = true;
                    _iteratorError8 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
                            _iterator8.return();
                        }
                    } finally{
                        if (_didIteratorError8) {
                            throw _iteratorError8;
                        }
                    }
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator7.return != null) {
                    _iterator7.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        else if (h.kind === "context") {
            if (h.context.reference) return;
            var _iteratorNormalCompletion9 = true, _didIteratorError9 = false, _iteratorError9 = undefined;
            try {
                for(var _iterator9 = h.nodes[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true){
                    var A6 = _step9.value;
                    p(A6, w1, _object_spread._({}, x, h.context), S);
                }
            } catch (err) {
                _didIteratorError9 = true;
                _iteratorError9 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
                        _iterator9.return();
                    }
                } finally{
                    if (_didIteratorError9) {
                        throw _iteratorError9;
                    }
                }
            }
        } else h.kind === "comment" && w1.push(h);
    }
    var k = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = e[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var h = _step.value;
            p(h, k, {}, 0);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined, _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
    try {
        var _loop = function() {
            var _step_value = _sliced_to_array._(_step1.value, 2), h = _step_value[0], w1 = _step_value[1];
            try {
                for(var _iterator = w1[Symbol.iterator](), _step; !(_iteratorNormalCompletion1 = (_step = _iterator.next()).done); _iteratorNormalCompletion1 = true){
                    var x = _step.value;
                    if (Pr(x.property, r.theme, d)) {
                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        if (x.property.startsWith(r.theme.prefixKey("--animate-"))) try {
                            for(var _iterator1 = Or(x.value)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion = (_step2 = _iterator1.next()).done); _iteratorNormalCompletion = true){
                                var y = _step2.value;
                                u.add(y);
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion && _iterator1.return != null) {
                                    _iterator1.return();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                        continue;
                    }
                    var A = h.indexOf(x);
                    if (h.splice(A, 1), h.length === 0) {
                        var y1 = $n(k, function(K) {
                            return K.kind === "rule" && K.nodes === h;
                        });
                        if (!y1 || y1.length === 0) return "continue|e";
                        y1.unshift({
                            kind: "at-root",
                            nodes: k
                        });
                        do {
                            var K = y1.pop();
                            if (!K) break;
                            var N = y1[y1.length - 1];
                            if (!N || N.kind !== "at-root" && N.kind !== "at-rule") break;
                            var P = N.nodes.indexOf(K);
                            if (P === -1) break;
                            N.nodes.splice(P, 1);
                        }while (!0)
                        return "continue|e";
                    }
                }
            } catch (err) {
                _didIteratorError1 = true;
                _iteratorError1 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion1 && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError1) {
                        throw _iteratorError1;
                    }
                }
            }
        };
        e: for(var _iterator1 = l[Symbol.iterator](), _step1; !(_iteratorNormalCompletion2 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion2 = true){
            var _ret = _loop();
            switch(_ret){
                case "continue|e":
                    continue e;
            }
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion2 && _iterator1.return != null) {
                _iterator1.return();
            }
        } finally{
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
    var _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
    try {
        for(var _iterator2 = f[Symbol.iterator](), _step2; !(_iteratorNormalCompletion3 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion3 = true){
            var h1 = _step2.value;
            if (!u.has(h1.params)) {
                var w1 = t.indexOf(h1);
                t.splice(w1, 1);
            }
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion3 && _iterator2.return != null) {
                _iterator2.return();
            }
        } finally{
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }
    var _iteratorNormalCompletion4 = true, _didIteratorError4 = false, _iteratorError4 = undefined, _iteratorNormalCompletion5 = true, _didIteratorError5 = false, _iteratorError5 = undefined;
    if (k = k.concat(t), i & 2) try {
        for(var _iterator3 = o[Symbol.iterator](), _step3; !(_iteratorNormalCompletion5 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion5 = true){
            var _step_value = _sliced_to_array._(_step3.value, 2), h2 = _step_value[0], w2 = _step_value[1];
            try {
                var _loop1 = function() {
                    var x = _step4.value;
                    var S = h2.indexOf(x);
                    if (S === -1 || x.value == null) return "continue";
                    var A = B(x.value), y = !1;
                    if (_(A, function(P) {
                        if (P.kind !== "function" || P.value !== "color-mix") return;
                        var z = !1, I = !1;
                        if (_(P.nodes, function(M) {
                            if (M.kind == "word" && M.value.toLowerCase() === "currentcolor") {
                                I = !0, y = !0;
                                return;
                            }
                            var Y = M, G = null, ae = new Set;
                            do {
                                if (Y.kind !== "function" || Y.value !== "var") return;
                                var le = Y.nodes[0];
                                if (!le || le.kind !== "word") return;
                                var s = le.value;
                                if (ae.has(s)) {
                                    z = !0;
                                    return;
                                }
                                if (ae.add(s), y = !0, G = r.theme.resolveValue(null, [
                                    le.value
                                ]), !G) {
                                    z = !0;
                                    return;
                                }
                                if (G.toLowerCase() === "currentcolor") {
                                    I = !0;
                                    return;
                                }
                                G.startsWith("var(") ? Y = B(G)[0] : Y = null;
                            }while (Y)
                            return V.Replace({
                                kind: "word",
                                value: G
                            });
                        }), z || I) {
                            var M = P.nodes.findIndex(function(G) {
                                return G.kind === "separator" && G.value.trim().includes(",");
                            });
                            if (M === -1) return;
                            var Y = P.nodes.length > M ? P.nodes[M + 1] : null;
                            return Y ? V.Replace(Y) : void 0;
                        } else if (y) {
                            var M1 = P.nodes[2];
                            M1.kind === "word" && (M1.value === "oklab" || M1.value === "oklch" || M1.value === "lab" || M1.value === "lch") && (M1.value = "srgb");
                        }
                    }), !y) return "continue";
                    var K = _object_spread_props._(_object_spread._({}, x), {
                        value: H(A)
                    }), N = Z("@supports (color: color-mix(in lab, red, red))", [
                        x
                    ]);
                    N.src = x.src, h2.splice(S, 1, K, N);
                };
                for(var _iterator4 = w2[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true)_loop1();
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                        _iterator4.return();
                    }
                } finally{
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }
        }
    } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion5 && _iterator3.return != null) {
                _iterator3.return();
            }
        } finally{
            if (_didIteratorError5) {
                throw _iteratorError5;
            }
        }
    }
    if (i & 1) {
        var h3 = [];
        if (c.length > 0) {
            var w3 = Z(":root, :host", c);
            w3.src = c[0].src, h3.push(w3);
        }
        if (m.length > 0) {
            var w4 = Z("*, ::before, ::after, ::backdrop", m);
            w4.src = m[0].src, h3.push(w4);
        }
        if (h3.length > 0) {
            var w5 = k.findIndex(function(A) {
                return !(A.kind === "comment" || A.kind === "at-rule" && (A.name === "@charset" || A.name === "@import"));
            }), x = F("@layer", "properties", []);
            x.src = h3[0].src, k.splice(w5 < 0 ? k.length : w5, 0, x);
            var S = Z("@layer properties", [
                F("@supports", "((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b))))", h3)
            ]);
            S.src = h3[0].src, S.nodes[0].src = h3[0].src, k.push(S);
        }
    }
    return k;
}
function ie(e, r) {
    var i = 0, t = {
        file: null,
        code: ""
    };
    function n(o) {
        var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        var u = "", c = "  ".repeat(f);
        if (o.kind === "declaration") {
            if (u += "".concat(c).concat(o.property, ": ").concat(o.value).concat(o.important ? " !important" : "", ";\n"), r) {
                var _o_value;
                i += c.length;
                var m = i;
                var _o_value_length;
                i += o.property.length, i += 2, i += (_o_value_length = (_o_value = o.value) === null || _o_value === void 0 ? void 0 : _o_value.length) !== null && _o_value_length !== void 0 ? _o_value_length : 0, o.important && (i += 11);
                var d = i;
                i += 2, o.dst = [
                    t,
                    m,
                    d
                ];
            }
        } else if (o.kind === "rule") {
            if (u += "".concat(c).concat(o.selector, " {\n"), r) {
                i += c.length;
                var m1 = i;
                i += o.selector.length, i += 1;
                var d1 = i;
                o.dst = [
                    t,
                    m1,
                    d1
                ], i += 2;
            }
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = o.nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var m2 = _step.value;
                    u += n(m2, f + 1);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            u += "".concat(c, "}\n"), r && (i += c.length, i += 2);
        } else if (o.kind === "at-rule") {
            if (o.nodes.length === 0) {
                var m3 = "".concat(c).concat(o.name, " ").concat(o.params, ";\n");
                if (r) {
                    i += c.length;
                    var d2 = i;
                    i += o.name.length, i += 1, i += o.params.length;
                    var p = i;
                    i += 2, o.dst = [
                        t,
                        d2,
                        p
                    ];
                }
                return m3;
            }
            if (u += "".concat(c).concat(o.name).concat(o.params ? " ".concat(o.params, " ") : " ", "{\n"), r) {
                i += c.length;
                var m4 = i;
                i += o.name.length, o.params && (i += 1, i += o.params.length), i += 1;
                var d3 = i;
                o.dst = [
                    t,
                    m4,
                    d3
                ], i += 2;
            }
            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
            try {
                for(var _iterator1 = o.nodes[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                    var m5 = _step1.value;
                    u += n(m5, f + 1);
                }
            } catch (err) {
                _didIteratorError1 = true;
                _iteratorError1 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                        _iterator1.return();
                    }
                } finally{
                    if (_didIteratorError1) {
                        throw _iteratorError1;
                    }
                }
            }
            u += "".concat(c, "}\n"), r && (i += c.length, i += 2);
        } else if (o.kind === "comment") {
            if (u += "".concat(c, "/*").concat(o.value, "*/\n"), r) {
                i += c.length;
                var m6 = i;
                i += 2 + o.value.length + 2;
                var d4 = i;
                o.dst = [
                    t,
                    m6,
                    d4
                ], i += 1;
            }
        } else if (o.kind === "context" || o.kind === "at-root") return "";
        return u;
    }
    var l = "";
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = e[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var o = _step.value;
            l += n(o, 0);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return t.code = l, l;
}
function $n(e, r) {
    var i = [];
    return _(e, function(t, n) {
        if (r(t)) return i = n.path(), i.push(t), V.Stop;
    }), i;
}
function Pr(e, r, i) {
    var t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : new Set;
    if (t.has(e) || (t.add(e), r.getOptions(e) & 24)) return !0;
    {
        var _i_get;
        var l = (_i_get = i.get(e)) !== null && _i_get !== void 0 ? _i_get : [];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = l[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var o = _step.value;
                if (Pr(o, r, i, t)) return !0;
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return !1;
}
function Or(e) {
    return e.split(/[\s,]+/);
}
var Ft = [
    "calc",
    "min",
    "max",
    "clamp",
    "mod",
    "rem",
    "sin",
    "cos",
    "tan",
    "asin",
    "acos",
    "atan",
    "atan2",
    "pow",
    "sqrt",
    "hypot",
    "log",
    "exp",
    "round"
];
function tt(e) {
    return e.indexOf("(") !== -1 && Ft.some(function(r) {
        return e.includes("".concat(r, "("));
    });
}
function _r1(e) {
    if (!Ft.some(function(l) {
        return e.includes(l);
    })) return e;
    var r = "", i = [], t = null, n = null;
    for(var l = 0; l < e.length; l++){
        var o = e.charCodeAt(l);
        if (o >= 48 && o <= 57 || t !== null && (o === 37 || o >= 97 && o <= 122 || o >= 65 && o <= 90) ? t = l : (n = t, t = null), o === 40) {
            r += e[l];
            var f = l;
            for(var c = l - 1; c >= 0; c--){
                var m = e.charCodeAt(c);
                if (m >= 48 && m <= 57) f = c;
                else if (m >= 97 && m <= 122) f = c;
                else break;
            }
            var u = e.slice(f, l);
            if (Ft.includes(u)) {
                i.unshift(!0);
                continue;
            } else if (i[0] && u === "") {
                i.unshift(!0);
                continue;
            }
            i.unshift(!1);
            continue;
        } else if (o === 41) r += e[l], i.shift();
        else if (o === 44 && i[0]) {
            r += ", ";
            continue;
        } else {
            if (o === 32 && i[0] && r.charCodeAt(r.length - 1) === 32) continue;
            if ((o === 43 || o === 42 || o === 47 || o === 45) && i[0]) {
                var f1 = r.trimEnd(), u1 = f1.charCodeAt(f1.length - 1), c1 = f1.charCodeAt(f1.length - 2), m1 = e.charCodeAt(l + 1);
                if ((u1 === 101 || u1 === 69) && c1 >= 48 && c1 <= 57) {
                    r += e[l];
                    continue;
                } else if (u1 === 43 || u1 === 42 || u1 === 47 || u1 === 45) {
                    r += e[l];
                    continue;
                } else if (u1 === 40 || u1 === 44) {
                    r += e[l];
                    continue;
                } else e.charCodeAt(l - 1) === 32 ? r += "".concat(e[l], " ") : u1 >= 48 && u1 <= 57 || m1 >= 48 && m1 <= 57 || u1 === 41 || m1 === 40 || m1 === 43 || m1 === 42 || m1 === 47 || m1 === 45 || n !== null && n === l - 1 ? r += " ".concat(e[l], " ") : r += e[l];
            } else r += e[l];
        }
    }
    return r;
}
function Ae(e) {
    if (e.indexOf("(") === -1) return ze(e);
    var r = B(e);
    return Wt(r), e = H(r), e = _r1(e), e;
}
function ze(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    var i = "";
    for(var t = 0; t < e.length; t++){
        var n = e[t];
        n === "\\" && e[t + 1] === "_" ? (i += "_", t += 1) : n === "_" && !r ? i += " " : i += n;
    }
    return i;
}
function Wt(e) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = e[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var r = _step.value;
            switch(r.kind){
                case "function":
                    {
                        if (r.value === "url" || r.value.endsWith("_url")) {
                            r.value = ze(r.value);
                            break;
                        }
                        if (r.value === "var" || r.value.endsWith("_var") || r.value === "theme" || r.value.endsWith("_theme")) {
                            r.value = ze(r.value);
                            for(var i = 0; i < r.nodes.length; i++){
                                if (i == 0 && r.nodes[i].kind === "word") {
                                    r.nodes[i].value = ze(r.nodes[i].value, !0);
                                    continue;
                                }
                                Wt([
                                    r.nodes[i]
                                ]);
                            }
                            break;
                        }
                        r.value = ze(r.value), Wt(r.nodes);
                        break;
                    }
                case "separator":
                case "word":
                    {
                        r.value = ze(r.value);
                        break;
                    }
                default:
                    Tn(r);
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
function Tn(e) {
    throw new Error("Unexpected value: ".concat(e));
}
var Bt = new Uint8Array(256);
function ke(e) {
    var r = 0, i = e.length;
    for(var t = 0; t < i; t++){
        var n = e.charCodeAt(t);
        switch(n){
            case 92:
                t += 1;
                break;
            case 39:
            case 34:
                for(; ++t < i;){
                    var l = e.charCodeAt(t);
                    if (l === 92) {
                        t += 1;
                        continue;
                    }
                    if (l === n) break;
                }
                break;
            case 40:
                Bt[r] = 41, r++;
                break;
            case 91:
                Bt[r] = 93, r++;
                break;
            case 123:
                break;
            case 93:
            case 125:
            case 41:
                if (r === 0) return !1;
                r > 0 && n === Bt[r - 1] && r--;
                break;
            case 59:
                if (r === 0) return !1;
                break;
        }
    }
    return !0;
}
var vt = new Uint8Array(256);
function L(e, r) {
    var i = 0, t = [], n = 0, l = e.length, o = r.charCodeAt(0);
    for(var f = 0; f < l; f++){
        var u = e.charCodeAt(f);
        if (i === 0 && u === o) {
            t.push(e.slice(n, f)), n = f + 1;
            continue;
        }
        switch(u){
            case 92:
                f += 1;
                break;
            case 39:
            case 34:
                for(; ++f < l;){
                    var c = e.charCodeAt(f);
                    if (c === 92) {
                        f += 1;
                        continue;
                    }
                    if (c === u) break;
                }
                break;
            case 40:
                vt[i] = 41, i++;
                break;
            case 91:
                vt[i] = 93, i++;
                break;
            case 123:
                vt[i] = 125, i++;
                break;
            case 93:
            case 125:
            case 41:
                i > 0 && u === vt[i - 1] && i--;
                break;
        }
    }
    return t.push(e.slice(n)), t;
}
var En = 58, Ir = 45, Dr = 97, Ur = 122, Gt = /^[a-zA-Z0-9_.%-]+$/;
function Lr(e) {
    switch(e.kind){
        case "arbitrary":
            return {
                kind: e.kind,
                property: e.property,
                value: e.value,
                modifier: e.modifier ? {
                    kind: e.modifier.kind,
                    value: e.modifier.value
                } : null,
                variants: e.variants.map(Me),
                important: e.important,
                raw: e.raw
            };
        case "static":
            return {
                kind: e.kind,
                root: e.root,
                variants: e.variants.map(Me),
                important: e.important,
                raw: e.raw
            };
        case "functional":
            return {
                kind: e.kind,
                root: e.root,
                value: e.value ? e.value.kind === "arbitrary" ? {
                    kind: e.value.kind,
                    dataType: e.value.dataType,
                    value: e.value.value
                } : {
                    kind: e.value.kind,
                    value: e.value.value,
                    fraction: e.value.fraction
                } : null,
                modifier: e.modifier ? {
                    kind: e.modifier.kind,
                    value: e.modifier.value
                } : null,
                variants: e.variants.map(Me),
                important: e.important,
                raw: e.raw
            };
        default:
            throw new Error("Unknown candidate kind");
    }
}
function Me(e) {
    switch(e.kind){
        case "arbitrary":
            return {
                kind: e.kind,
                selector: e.selector,
                relative: e.relative
            };
        case "static":
            return {
                kind: e.kind,
                root: e.root
            };
        case "functional":
            return {
                kind: e.kind,
                root: e.root,
                value: e.value ? {
                    kind: e.value.kind,
                    value: e.value.value
                } : null,
                modifier: e.modifier ? {
                    kind: e.modifier.kind,
                    value: e.modifier.value
                } : null
            };
        case "compound":
            return {
                kind: e.kind,
                root: e.root,
                variant: Me(e.variant),
                modifier: e.modifier ? {
                    kind: e.modifier.kind,
                    value: e.modifier.value
                } : null
            };
        default:
            throw new Error("Unknown variant kind");
    }
}
function Kr(e, r) {
    var i, t, n, d, p, l, _tmp, _L, o, tmp, f, u, c, d1, p1, k, h, m, d2, p2, k1, d3, p3, k2, h1, w1, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _step_value, d4, p4, k3, h2, x, S, A, y, _k_modifier, x1, err;
    return _ts_generator._(this, function(_state) {
        switch(_state.label){
            case 0:
                i = L(e, ":");
                if (r.theme.prefix) {
                    if (i.length === 1 || i[0] !== r.theme.prefix) return [
                        2,
                        null
                    ];
                    i.shift();
                }
                t = i.pop(), n = [];
                for(d = i.length - 1; d >= 0; --d){
                    p = r.parseVariant(i[d]);
                    if (p === null) return [
                        2
                    ];
                    n.push(p);
                }
                l = !1;
                t[t.length - 1] === "!" ? (l = !0, t = t.slice(0, -1)) : t[0] === "!" && (l = !0, t = t.slice(1));
                _tmp = r.utilities.has(t, "static") && !t.includes("[");
                if (!_tmp) return [
                    3,
                    2
                ];
                return [
                    4,
                    {
                        kind: "static",
                        root: t,
                        variants: n,
                        important: l,
                        raw: e
                    }
                ];
            case 1:
                _tmp = _state.sent();
                _state.label = 2;
            case 2:
                _tmp;
                _L = _sliced_to_array._(L(t, "/"), 3), o = _L[0], tmp = _L[1], f = tmp === void 0 ? null : tmp, u = _L[2];
                if (u) return [
                    2
                ];
                c = f === null ? null : Yt(f);
                if (f !== null && c === null) return [
                    2
                ];
                if (!(o[0] === "[")) return [
                    3,
                    4
                ];
                if (o[o.length - 1] !== "]") return [
                    2
                ];
                d1 = o.charCodeAt(1);
                if (d1 !== Ir && !(d1 >= Dr && d1 <= Ur)) return [
                    2
                ];
                o = o.slice(1, -1);
                p1 = o.indexOf(":");
                if (p1 === -1 || p1 === 0 || p1 === o.length - 1) return [
                    2
                ];
                k = o.slice(0, p1), h = Ae(o.slice(p1 + 1));
                if (!ke(h)) return [
                    2
                ];
                return [
                    4,
                    {
                        kind: "arbitrary",
                        property: k,
                        value: h,
                        modifier: c,
                        variants: n,
                        important: l,
                        raw: e
                    }
                ];
            case 3:
                _state.sent();
                return [
                    2
                ];
            case 4:
                if (o[o.length - 1] === "]") {
                    d2 = o.indexOf("-[");
                    if (d2 === -1) return [
                        2
                    ];
                    p2 = o.slice(0, d2);
                    if (!r.utilities.has(p2, "functional")) return [
                        2
                    ];
                    k1 = o.slice(d2 + 1);
                    m = [
                        [
                            p2,
                            k1
                        ]
                    ];
                } else if (o[o.length - 1] === ")") {
                    d3 = o.indexOf("-(");
                    if (d3 === -1) return [
                        2
                    ];
                    p3 = o.slice(0, d3);
                    if (!r.utilities.has(p3, "functional")) return [
                        2
                    ];
                    k2 = o.slice(d3 + 2, -1), h1 = L(k2, ":"), w1 = null;
                    if (h1.length === 2 && (w1 = h1[0], k2 = h1[1]), k2[0] !== "-" || k2[1] !== "-" || !ke(k2)) return [
                        2
                    ];
                    m = [
                        [
                            p3,
                            w1 === null ? "[var(".concat(k2, ")]") : "[".concat(w1, ":var(").concat(k2, ")]")
                        ]
                    ];
                } else m = Mr(o, function(d) {
                    return r.utilities.has(d, "functional");
                });
                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                _state.label = 5;
            case 5:
                _state.trys.push([
                    5,
                    12,
                    13,
                    14
                ]);
                _iterator = m[Symbol.iterator]();
                _state.label = 6;
            case 6:
                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                    3,
                    11
                ];
                _step_value = _sliced_to_array._(_step.value, 2), d4 = _step_value[0], p4 = _step_value[1];
                k3 = {
                    kind: "functional",
                    root: d4,
                    modifier: c,
                    value: null,
                    variants: n,
                    important: l,
                    raw: e
                };
                if (!(p4 === null)) return [
                    3,
                    8
                ];
                return [
                    4,
                    k3
                ];
            case 7:
                _state.sent();
                return [
                    3,
                    10
                ];
            case 8:
                {
                    h2 = p4.indexOf("[");
                    if (h2 !== -1) {
                        if (p4[p4.length - 1] !== "]") return [
                            2
                        ];
                        x = Ae(p4.slice(h2 + 1, -1));
                        if (!ke(x)) return [
                            3,
                            10
                        ];
                        S = null;
                        for(A = 0; A < x.length; A++){
                            y = x.charCodeAt(A);
                            if (y === En) {
                                S = x.slice(0, A), x = x.slice(A + 1);
                                break;
                            }
                            if (!(y === Ir || y >= Dr && y <= Ur)) break;
                        }
                        if (x.length === 0 || x.trim().length === 0 || S === "") return [
                            3,
                            10
                        ];
                        k3.value = {
                            kind: "arbitrary",
                            dataType: S || null,
                            value: x
                        };
                    } else {
                        ;
                        x1 = f === null || ((_k_modifier = k3.modifier) === null || _k_modifier === void 0 ? void 0 : _k_modifier.kind) === "arbitrary" ? null : "".concat(p4, "/").concat(f);
                        if (!Gt.test(p4)) return [
                            3,
                            10
                        ];
                        k3.value = {
                            kind: "named",
                            value: p4,
                            fraction: x1
                        };
                    }
                }
                return [
                    4,
                    k3
                ];
            case 9:
                _state.sent();
                _state.label = 10;
            case 10:
                _iteratorNormalCompletion = true;
                return [
                    3,
                    6
                ];
            case 11:
                return [
                    3,
                    14
                ];
            case 12:
                err = _state.sent();
                _didIteratorError = true;
                _iteratorError = err;
                return [
                    3,
                    14
                ];
            case 13:
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
                return [
                    7
                ];
            case 14:
                return [
                    2
                ];
        }
    });
}
function Yt(e) {
    if (e[0] === "[" && e[e.length - 1] === "]") {
        var r = Ae(e.slice(1, -1));
        return !ke(r) || r.length === 0 || r.trim().length === 0 ? null : {
            kind: "arbitrary",
            value: r
        };
    }
    return e[0] === "(" && e[e.length - 1] === ")" ? (e = e.slice(1, -1), e[0] !== "-" || e[1] !== "-" || !ke(e) ? null : (e = "var(".concat(e, ")"), {
        kind: "arbitrary",
        value: Ae(e)
    })) : Gt.test(e) ? {
        kind: "named",
        value: e
    } : null;
}
function zr(e, r) {
    if (e[0] === "[" && e[e.length - 1] === "]") {
        if (e[1] === "@" && e.includes("&")) return null;
        var i = Ae(e.slice(1, -1));
        if (!ke(i) || i.length === 0 || i.trim().length === 0) return null;
        var t = i[0] === ">" || i[0] === "+" || i[0] === "~";
        return !t && i[0] !== "@" && !i.includes("&") && (i = "&:is(".concat(i, ")")), {
            kind: "arbitrary",
            selector: i,
            relative: t
        };
    }
    {
        var _L = _sliced_to_array._(L(e, "/"), 3), i1 = _L[0], tmp = _L[1], t1 = tmp === void 0 ? null : tmp, n = _L[2];
        if (n) return null;
        var l = Mr(i1, function(o) {
            return r.variants.has(o);
        });
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = l[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array._(_step.value, 2), o = _step_value[0], f = _step_value[1];
                switch(r.variants.kind(o)){
                    case "static":
                        return f !== null || t1 !== null ? null : {
                            kind: "static",
                            root: o
                        };
                    case "functional":
                        {
                            var u = t1 === null ? null : Yt(t1);
                            if (t1 !== null && u === null) return null;
                            if (f === null) return {
                                kind: "functional",
                                root: o,
                                modifier: u,
                                value: null
                            };
                            if (f[f.length - 1] === "]") {
                                if (f[0] !== "[") continue;
                                var c = Ae(f.slice(1, -1));
                                return !ke(c) || c.length === 0 || c.trim().length === 0 ? null : {
                                    kind: "functional",
                                    root: o,
                                    modifier: u,
                                    value: {
                                        kind: "arbitrary",
                                        value: c
                                    }
                                };
                            }
                            if (f[f.length - 1] === ")") {
                                if (f[0] !== "(") continue;
                                var c1 = Ae(f.slice(1, -1));
                                return !ke(c1) || c1.length === 0 || c1.trim().length === 0 || c1[0] !== "-" || c1[1] !== "-" ? null : {
                                    kind: "functional",
                                    root: o,
                                    modifier: u,
                                    value: {
                                        kind: "arbitrary",
                                        value: "var(".concat(c1, ")")
                                    }
                                };
                            }
                            if (!Gt.test(f)) continue;
                            return {
                                kind: "functional",
                                root: o,
                                modifier: u,
                                value: {
                                    kind: "named",
                                    value: f
                                }
                            };
                        }
                    case "compound":
                        {
                            if (f === null) return null;
                            t1 && (o === "not" || o === "has" || o === "in") && (f = "".concat(f, "/").concat(t1), t1 = null);
                            var u1 = r.parseVariant(f);
                            if (u1 === null || !r.variants.compoundsWith(o, u1)) return null;
                            var c2 = t1 === null ? null : Yt(t1);
                            return t1 !== null && c2 === null ? null : {
                                kind: "compound",
                                root: o,
                                modifier: c2,
                                variant: u1
                            };
                        }
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return null;
}
function Mr(e, r) {
    var _tmp, i, t, n, _tmp1;
    return _ts_generator._(this, function(_state) {
        switch(_state.label){
            case 0:
                _tmp = r(e);
                if (!_tmp) return [
                    3,
                    2
                ];
                return [
                    4,
                    [
                        e,
                        null
                    ]
                ];
            case 1:
                _tmp = _state.sent();
                _state.label = 2;
            case 2:
                _tmp;
                i = e.lastIndexOf("-");
                _state.label = 3;
            case 3:
                if (!(i > 0)) return [
                    3,
                    7
                ];
                t = e.slice(0, i);
                if (!r(t)) return [
                    3,
                    5
                ];
                n = [
                    t,
                    e.slice(i + 1)
                ];
                if (n[1] === "" || n[0] === "@" && r("@") && e[i] === "-") return [
                    3,
                    7
                ];
                return [
                    4,
                    n
                ];
            case 4:
                _state.sent();
                _state.label = 5;
            case 5:
                i = e.lastIndexOf("-", i - 1);
                _state.label = 6;
            case 6:
                return [
                    3,
                    3
                ];
            case 7:
                _tmp1 = e[0] === "@" && r("@");
                if (!_tmp1) return [
                    3,
                    9
                ];
                return [
                    4,
                    [
                        "@",
                        e.slice(1)
                    ]
                ];
            case 8:
                _tmp1 = _state.sent();
                _state.label = 9;
            case 9:
                _tmp1;
                return [
                    2
                ];
        }
    });
}
function jr(e, r) {
    var i = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = r.variants[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var n = _step.value;
            i.unshift(kt(n));
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    e.theme.prefix && i.unshift(e.theme.prefix);
    var t = "";
    if (r.kind === "static" && (t += r.root), r.kind === "functional" && (t += r.root, r.value)) if (r.value.kind === "arbitrary") {
        if (r.value !== null) {
            var n1 = Ht(r.value.value), l = n1 ? r.value.value.slice(4, -1) : r.value.value, _ref = _sliced_to_array._(n1 ? [
                "(",
                ")"
            ] : [
                "[",
                "]"
            ], 2), o = _ref[0], f = _ref[1];
            r.value.dataType ? t += "-".concat(o).concat(r.value.dataType, ":").concat(Ce(l)).concat(f) : t += "-".concat(o).concat(Ce(l)).concat(f);
        }
    } else r.value.kind === "named" && (t += "-".concat(r.value.value));
    return r.kind === "arbitrary" && (t += "[".concat(r.property, ":").concat(Ce(r.value), "]")), (r.kind === "arbitrary" || r.kind === "functional") && (t += it(r.modifier)), r.important && (t += "!"), i.push(t), i.join(":");
}
function it(e) {
    if (e === null) return "";
    var r = Ht(e.value), i = r ? e.value.slice(4, -1) : e.value, _ref = _sliced_to_array._(r ? [
        "(",
        ")"
    ] : [
        "[",
        "]"
    ], 2), t = _ref[0], n = _ref[1];
    return e.kind === "arbitrary" ? "/".concat(t).concat(Ce(i)).concat(n) : e.kind === "named" ? "/".concat(e.value) : "";
}
function kt(e) {
    if (e.kind === "static") return e.root;
    if (e.kind === "arbitrary") return "[".concat(Ce(Rn(e.selector)), "]");
    var r = "";
    if (e.kind === "functional") {
        r += e.root;
        var i = e.root !== "@";
        if (e.value) if (e.value.kind === "arbitrary") {
            var t = Ht(e.value.value), n = t ? e.value.value.slice(4, -1) : e.value.value, _ref = _sliced_to_array._(t ? [
                "(",
                ")"
            ] : [
                "[",
                "]"
            ], 2), l = _ref[0], o = _ref[1];
            r += "".concat(i ? "-" : "").concat(l).concat(Ce(n)).concat(o);
        } else e.value.kind === "named" && (r += "".concat(i ? "-" : "").concat(e.value.value));
    }
    return e.kind === "compound" && (r += e.root, r += "-", r += kt(e.variant)), (e.kind === "functional" || e.kind === "compound") && (r += it(e.modifier)), r;
}
var Nn = new U(function(e) {
    var r = B(e), i = new Set;
    return _(r, function(t, n) {
        var _n_parent_nodes;
        var l = n.parent === null ? r : (_n_parent_nodes = n.parent.nodes) !== null && _n_parent_nodes !== void 0 ? _n_parent_nodes : [];
        if (t.kind === "word" && (t.value === "+" || t.value === "-" || t.value === "*" || t.value === "/")) {
            var _l_indexOf;
            var o = (_l_indexOf = l.indexOf(t)) !== null && _l_indexOf !== void 0 ? _l_indexOf : -1;
            if (o === -1) return;
            var f = l[o - 1];
            if ((f === null || f === void 0 ? void 0 : f.kind) !== "separator" || f.value !== " ") return;
            var u = l[o + 1];
            if ((u === null || u === void 0 ? void 0 : u.kind) !== "separator" || u.value !== " ") return;
            i.add(f), i.add(u);
        } else t.kind === "separator" && t.value.length > 0 && t.value.trim() === "" ? (l[0] === t || l[l.length - 1] === t) && i.add(t) : t.kind === "separator" && t.value.trim() === "," && (t.value = ",");
    }), i.size > 0 && _(r, function(t) {
        if (i.has(t)) return i.delete(t), V.ReplaceSkip([]);
    }), qt(r), H(r);
});
function Ce(e) {
    return Nn.get(e);
}
var Vn = new U(function(e) {
    var r = B(e);
    return r.length === 3 && r[0].kind === "word" && r[0].value === "&" && r[1].kind === "separator" && r[1].value === ":" && r[2].kind === "function" && r[2].value === "is" ? H(r[2].nodes) : e;
});
function Rn(e) {
    return Vn.get(e);
}
function qt(e) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = e[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var r = _step.value;
            switch(r.kind){
                case "function":
                    {
                        if (r.value === "url" || r.value.endsWith("_url")) {
                            r.value = rt(r.value);
                            break;
                        }
                        if (r.value === "var" || r.value.endsWith("_var") || r.value === "theme" || r.value.endsWith("_theme")) {
                            r.value = rt(r.value);
                            for(var i = 0; i < r.nodes.length; i++)qt([
                                r.nodes[i]
                            ]);
                            break;
                        }
                        r.value = rt(r.value), qt(r.nodes);
                        break;
                    }
                case "separator":
                    r.value = rt(r.value);
                    break;
                case "word":
                    {
                        (r.value[0] !== "-" || r.value[1] !== "-") && (r.value = rt(r.value));
                        break;
                    }
                default:
                    Pn(r);
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
var On = new U(function(e) {
    var r = B(e);
    return r.length === 1 && r[0].kind === "function" && r[0].value === "var";
});
function Ht(e) {
    return On.get(e);
}
function Pn(e) {
    throw new Error("Unexpected value: ".concat(e));
}
function rt(e) {
    return e.replaceAll("_", String.raw(_templateObject())).replaceAll(" ", "_");
}
function Oe(e, r, i) {
    if (e === r) return 0;
    var t = e.indexOf("("), n = r.indexOf("("), l = t === -1 ? e.replace(/[\d.]+/g, "") : e.slice(0, t), o = n === -1 ? r.replace(/[\d.]+/g, "") : r.slice(0, n), f = (l === o ? 0 : l < o ? -1 : 1) || (i === "asc" ? parseInt(e) - parseInt(r) : parseInt(r) - parseInt(e));
    return Number.isNaN(f) ? e < r ? -1 : 1 : f;
}
var _n = new Set([
    "black",
    "silver",
    "gray",
    "white",
    "maroon",
    "red",
    "purple",
    "fuchsia",
    "green",
    "lime",
    "olive",
    "yellow",
    "navy",
    "blue",
    "teal",
    "aqua",
    "aliceblue",
    "antiquewhite",
    "aqua",
    "aquamarine",
    "azure",
    "beige",
    "bisque",
    "black",
    "blanchedalmond",
    "blue",
    "blueviolet",
    "brown",
    "burlywood",
    "cadetblue",
    "chartreuse",
    "chocolate",
    "coral",
    "cornflowerblue",
    "cornsilk",
    "crimson",
    "cyan",
    "darkblue",
    "darkcyan",
    "darkgoldenrod",
    "darkgray",
    "darkgreen",
    "darkgrey",
    "darkkhaki",
    "darkmagenta",
    "darkolivegreen",
    "darkorange",
    "darkorchid",
    "darkred",
    "darksalmon",
    "darkseagreen",
    "darkslateblue",
    "darkslategray",
    "darkslategrey",
    "darkturquoise",
    "darkviolet",
    "deeppink",
    "deepskyblue",
    "dimgray",
    "dimgrey",
    "dodgerblue",
    "firebrick",
    "floralwhite",
    "forestgreen",
    "fuchsia",
    "gainsboro",
    "ghostwhite",
    "gold",
    "goldenrod",
    "gray",
    "green",
    "greenyellow",
    "grey",
    "honeydew",
    "hotpink",
    "indianred",
    "indigo",
    "ivory",
    "khaki",
    "lavender",
    "lavenderblush",
    "lawngreen",
    "lemonchiffon",
    "lightblue",
    "lightcoral",
    "lightcyan",
    "lightgoldenrodyellow",
    "lightgray",
    "lightgreen",
    "lightgrey",
    "lightpink",
    "lightsalmon",
    "lightseagreen",
    "lightskyblue",
    "lightslategray",
    "lightslategrey",
    "lightsteelblue",
    "lightyellow",
    "lime",
    "limegreen",
    "linen",
    "magenta",
    "maroon",
    "mediumaquamarine",
    "mediumblue",
    "mediumorchid",
    "mediumpurple",
    "mediumseagreen",
    "mediumslateblue",
    "mediumspringgreen",
    "mediumturquoise",
    "mediumvioletred",
    "midnightblue",
    "mintcream",
    "mistyrose",
    "moccasin",
    "navajowhite",
    "navy",
    "oldlace",
    "olive",
    "olivedrab",
    "orange",
    "orangered",
    "orchid",
    "palegoldenrod",
    "palegreen",
    "paleturquoise",
    "palevioletred",
    "papayawhip",
    "peachpuff",
    "peru",
    "pink",
    "plum",
    "powderblue",
    "purple",
    "rebeccapurple",
    "red",
    "rosybrown",
    "royalblue",
    "saddlebrown",
    "salmon",
    "sandybrown",
    "seagreen",
    "seashell",
    "sienna",
    "silver",
    "skyblue",
    "slateblue",
    "slategray",
    "slategrey",
    "snow",
    "springgreen",
    "steelblue",
    "tan",
    "teal",
    "thistle",
    "tomato",
    "turquoise",
    "violet",
    "wheat",
    "white",
    "whitesmoke",
    "yellow",
    "yellowgreen",
    "transparent",
    "currentcolor",
    "canvas",
    "canvastext",
    "linktext",
    "visitedtext",
    "activetext",
    "buttonface",
    "buttontext",
    "buttonborder",
    "field",
    "fieldtext",
    "highlight",
    "highlighttext",
    "selecteditem",
    "selecteditemtext",
    "mark",
    "marktext",
    "graytext",
    "accentcolor",
    "accentcolortext"
]), In = /^(rgba?|hsla?|hwb|color|(ok)?(lab|lch)|light-dark|color-mix)\(/i;
function Fr(e) {
    return e.charCodeAt(0) === 35 || In.test(e) || _n.has(e.toLowerCase());
}
var Dn = {
    color: Fr,
    length: je,
    percentage: Zt,
    ratio: Hn,
    number: Br,
    integer: O,
    url: Wr,
    position: Jn,
    "bg-size": Xn,
    "line-width": Ln,
    image: Mn,
    "family-name": Fn,
    "generic-name": jn,
    "absolute-size": Wn,
    "relative-size": Bn,
    angle: ro,
    vector: no
};
function Q(e, r) {
    var _Dn_i;
    if (e.startsWith("var(")) return null;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = r[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var i = _step.value;
            if ((_Dn_i = Dn[i]) === null || _Dn_i === void 0 ? void 0 : _Dn_i.call(Dn, e)) return i;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return null;
}
var Un = /^url\(.*\)$/;
function Wr(e) {
    return Un.test(e);
}
function Ln(e) {
    return L(e, " ").every(function(r) {
        return je(r) || Br(r) || r === "thin" || r === "medium" || r === "thick";
    });
}
var Kn = /^(?:element|image|cross-fade|image-set)\(/, zn = /^(repeating-)?(conic|linear|radial)-gradient\(/;
function Mn(e) {
    var r = 0;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = L(e, ",")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var i = _step.value;
            if (!i.startsWith("var(")) {
                if (Wr(i)) {
                    r += 1;
                    continue;
                }
                if (zn.test(i)) {
                    r += 1;
                    continue;
                }
                if (Kn.test(i)) {
                    r += 1;
                    continue;
                }
                return !1;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return r > 0;
}
function jn(e) {
    return e === "serif" || e === "sans-serif" || e === "monospace" || e === "cursive" || e === "fantasy" || e === "system-ui" || e === "ui-serif" || e === "ui-sans-serif" || e === "ui-monospace" || e === "ui-rounded" || e === "math" || e === "emoji" || e === "fangsong";
}
function Fn(e) {
    var r = 0;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = L(e, ",")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var i = _step.value;
            var t = i.charCodeAt(0);
            if (t >= 48 && t <= 57) return !1;
            i.startsWith("var(") || (r += 1);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return r > 0;
}
function Wn(e) {
    return e === "xx-small" || e === "x-small" || e === "small" || e === "medium" || e === "large" || e === "x-large" || e === "xx-large" || e === "xxx-large";
}
function Bn(e) {
    return e === "larger" || e === "smaller";
}
var we = /[+-]?\d*\.?\d+(?:[eE][+-]?\d+)?/, Yn = new RegExp("^".concat(we.source, "$"));
function Br(e) {
    return Yn.test(e) || tt(e);
}
var qn = new RegExp("^".concat(we.source, "%$"));
function Zt(e) {
    return qn.test(e) || tt(e);
}
var Gn = new RegExp("^".concat(we.source, "s*/s*").concat(we.source, "$"));
function Hn(e) {
    return Gn.test(e) || tt(e);
}
var Zn = [
    "cm",
    "mm",
    "Q",
    "in",
    "pc",
    "pt",
    "px",
    "em",
    "ex",
    "ch",
    "rem",
    "lh",
    "rlh",
    "vw",
    "vh",
    "vmin",
    "vmax",
    "vb",
    "vi",
    "svw",
    "svh",
    "lvw",
    "lvh",
    "dvw",
    "dvh",
    "cqw",
    "cqh",
    "cqi",
    "cqb",
    "cqmin",
    "cqmax"
], Qn = new RegExp("^".concat(we.source, "(").concat(Zn.join("|"), ")$"));
function je(e) {
    return Qn.test(e) || tt(e);
}
function Jn(e) {
    var r = 0;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = L(e, " ")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var i = _step.value;
            if (i === "center" || i === "top" || i === "right" || i === "bottom" || i === "left") {
                r += 1;
                continue;
            }
            if (!i.startsWith("var(")) {
                if (je(i) || Zt(i)) {
                    r += 1;
                    continue;
                }
                return !1;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return r > 0;
}
function Xn(e) {
    var r = 0;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = L(e, ",")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var i = _step.value;
            if (i === "cover" || i === "contain") {
                r += 1;
                continue;
            }
            var t = L(i, " ");
            if (t.length !== 1 && t.length !== 2) return !1;
            if (t.every(function(n) {
                return n === "auto" || je(n) || Zt(n);
            })) {
                r += 1;
                continue;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return r > 0;
}
var eo = [
    "deg",
    "rad",
    "grad",
    "turn"
], to = new RegExp("^".concat(we.source, "(").concat(eo.join("|"), ")$"));
function ro(e) {
    return to.test(e);
}
var io = new RegExp("^".concat(we.source, " +").concat(we.source, " +").concat(we.source, "$"));
function no(e) {
    return io.test(e);
}
function O(e) {
    var r = Number(e);
    return Number.isInteger(r) && r >= 0 && String(r) === String(e);
}
function Qt(e) {
    var r = Number(e);
    return Number.isInteger(r) && r > 0 && String(r) === String(e);
}
function ne(e) {
    return Yr(e, .25);
}
function wt(e) {
    return Yr(e, .25);
}
function Yr(e, r) {
    var i = Number(e);
    return i >= 0 && i % r === 0 && String(i) === String(e);
}
var oo = new Set([
    "inset",
    "inherit",
    "initial",
    "revert",
    "unset"
]), qr = /^-?(\d+|\.\d+)(.*?)$/g;
function nt(e, r) {
    return L(e, ",").map(function(t) {
        t = t.trim();
        var n = L(t, " ").filter(function(c) {
            return c.trim() !== "";
        }), l = null, o = null, f = null;
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = n[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var c = _step.value;
                oo.has(c) || (qr.test(c) ? (o === null ? o = c : f === null && (f = c), qr.lastIndex = 0) : l === null && (l = c));
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        if (o === null || f === null) return t;
        var u = r(l !== null && l !== void 0 ? l : "currentcolor");
        return l !== null ? t.replace(l, u) : "".concat(t, " ").concat(u);
    }).join(", ");
}
var lo = /^-?[a-z][a-zA-Z0-9/%._-]*$/, so = /^-?[a-z][a-zA-Z0-9/%._-]*-\*$/, bt = [
    "0",
    "0.5",
    "1",
    "1.5",
    "2",
    "2.5",
    "3",
    "3.5",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "14",
    "16",
    "20",
    "24",
    "28",
    "32",
    "36",
    "40",
    "44",
    "48",
    "52",
    "56",
    "60",
    "64",
    "72",
    "80",
    "96"
], Jt = /*#__PURE__*/ function() {
    function Jt() {
        _class_call_check._(this, Jt);
        _define_property._(this, "utilities", new U(function() {
            return [];
        }));
        _define_property._(this, "completions", new Map);
    }
    _create_class._(Jt, [
        {
            key: "static",
            value: function _static(r, i) {
                this.utilities.get(r).push({
                    kind: "static",
                    compileFn: i
                });
            }
        },
        {
            key: "functional",
            value: function functional(r, i, t) {
                this.utilities.get(r).push({
                    kind: "functional",
                    compileFn: i,
                    options: t
                });
            }
        },
        {
            key: "has",
            value: function has(r, i) {
                return this.utilities.has(r) && this.utilities.get(r).some(function(t) {
                    return t.kind === i;
                });
            }
        },
        {
            key: "get",
            value: function get(r) {
                return this.utilities.has(r) ? this.utilities.get(r) : [];
            }
        },
        {
            key: "getCompletions",
            value: function getCompletions(r) {
                var _this_completions_get, _this_completions_get1;
                var _this_completions_get2, _this_completions_get3;
                return this.has(r, "static") ? (_this_completions_get2 = (_this_completions_get = this.completions.get(r)) === null || _this_completions_get === void 0 ? void 0 : _this_completions_get()) !== null && _this_completions_get2 !== void 0 ? _this_completions_get2 : [
                    {
                        supportsNegative: !1,
                        values: [],
                        modifiers: []
                    }
                ] : (_this_completions_get3 = (_this_completions_get1 = this.completions.get(r)) === null || _this_completions_get1 === void 0 ? void 0 : _this_completions_get1()) !== null && _this_completions_get3 !== void 0 ? _this_completions_get3 : [];
            }
        },
        {
            key: "suggest",
            value: function suggest(r, i) {
                var t = this.completions.get(r);
                t ? this.completions.set(r, function() {
                    return _to_consumable_array._(t === null || t === void 0 ? void 0 : t()).concat(_to_consumable_array._(i === null || i === void 0 ? void 0 : i()));
                }) : this.completions.set(r, i);
            }
        },
        {
            key: "keys",
            value: function keys(r) {
                var i = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined, _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator = this.utilities.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion1 = (_step = _iterator.next()).done); _iteratorNormalCompletion1 = true){
                        var _step_value = _sliced_to_array._(_step.value, 2), t = _step_value[0], n = _step_value[1];
                        try {
                            for(var _iterator1 = n[Symbol.iterator](), _step1; !(_iteratorNormalCompletion = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion = true){
                                var l = _step1.value;
                                if (l.kind === r) {
                                    i.push(t);
                                    break;
                                }
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion && _iterator1.return != null) {
                                    _iterator1.return();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
                return i;
            }
        }
    ]);
    return Jt;
}();
function $(e, r, i) {
    return F("@property", e, [
        a("syntax", i ? '"'.concat(i, '"') : '"*"'),
        a("inherits", "false")
    ].concat(_to_consumable_array._(r ? [
        a("initial-value", r)
    ] : [])));
}
function J(e, r) {
    if (r === null) return e;
    var i = Number(r);
    return Number.isNaN(i) || (r = "".concat(i * 100, "%")), r === "100%" ? e : "color-mix(in oklab, ".concat(e, " ").concat(r, ", transparent)");
}
function Hr(e, r) {
    var i = Number(r);
    return Number.isNaN(i) || (r = "".concat(i * 100, "%")), "oklab(from ".concat(e, " l a b / ").concat(r, ")");
}
function X(e, r, i) {
    if (!r) return e;
    if (r.kind === "arbitrary") return J(e, r.value);
    var t = i.resolve(r.value, [
        "--opacity"
    ]);
    return t ? J(e, t) : wt(r.value) ? J(e, "".concat(r.value, "%")) : null;
}
function te(e, r, i) {
    var t = null;
    switch(e.value.value){
        case "inherit":
            {
                t = "inherit";
                break;
            }
        case "transparent":
            {
                t = "transparent";
                break;
            }
        case "current":
            {
                t = "currentcolor";
                break;
            }
        default:
            {
                t = r.resolve(e.value.value, i);
                break;
            }
    }
    return t ? X(t, e.modifier, r) : null;
}
var Zr = /(\d+)_(\d+)/g;
function Qr(e) {
    var _loop = function(_i, _iter) {
        var _iter__i = _sliced_to_array._(_iter[_i], 2), s = _iter__i[0], g = _iter__i[1];
        t("".concat(s, "-auto"), [
            [
                g,
                "auto"
            ]
        ]), t("".concat(s, "-full"), [
            [
                g,
                "100%"
            ]
        ]), t("-".concat(s, "-full"), [
            [
                g,
                "-100%"
            ]
        ]), o(s, [
            "--inset",
            "--spacing"
        ], function(v) {
            return [
                a(g, v)
            ];
        }, {
            supportsNegative: !0,
            supportsFractions: !0
        });
    }, _loop1 = function(_i1, _iter1) {
        var _iter__i = _sliced_to_array._(_iter1[_i1], 2), s = _iter__i[0], g = _iter__i[1];
        t("".concat(s, "-auto"), [
            [
                g,
                "auto"
            ]
        ]), o(s, [
            "--margin",
            "--spacing"
        ], function(v) {
            return [
                a(g, v)
            ];
        }, {
            supportsNegative: !0
        });
    }, _loop2 = function(_i3, _iter3) {
        var _iter__i = _sliced_to_array._(_iter3[_i3], 3), s = _iter__i[0], g = _iter__i[1], v = _iter__i[2];
        o(s, g, function(C) {
            return [
                a(v, C)
            ];
        }, {
            supportsFractions: !0
        });
    }, _loop3 = function(_i4, _iter4) {
        var s = _iter4[_i4];
        t("-translate-".concat(s, "-full"), [
            u,
            [
                "--tw-translate-".concat(s),
                "-100%"
            ],
            [
                "translate",
                "var(--tw-translate-x) var(--tw-translate-y)"
            ]
        ]), t("translate-".concat(s, "-full"), [
            u,
            [
                "--tw-translate-".concat(s),
                "100%"
            ],
            [
                "translate",
                "var(--tw-translate-x) var(--tw-translate-y)"
            ]
        ]), o("translate-".concat(s), [
            "--translate",
            "--spacing"
        ], function(g) {
            return [
                u(),
                a("--tw-translate-".concat(s), g),
                a("translate", "var(--tw-translate-x) var(--tw-translate-y)")
            ];
        }, {
            supportsNegative: !0,
            supportsFractions: !0
        });
    }, _loop4 = function(_i5, _iter5) {
        var s = _iter5[_i5];
        n("scale-".concat(s), {
            supportsNegative: !0,
            themeKeys: [
                "--scale"
            ],
            handleBareValue: function(param) {
                var g = param.value;
                return O(g) ? "".concat(g, "%") : null;
            },
            handle: function(g) {
                return [
                    c(),
                    a("--tw-scale-".concat(s), g),
                    a("scale", "var(--tw-scale-x) var(--tw-scale-y)".concat(s === "z" ? " var(--tw-scale-z)" : ""))
                ];
            }
        }), i("scale-".concat(s), function() {
            return [
                {
                    supportsNegative: !0,
                    values: [
                        "0",
                        "50",
                        "75",
                        "90",
                        "95",
                        "100",
                        "105",
                        "110",
                        "125",
                        "150",
                        "200"
                    ],
                    valueThemeKeys: [
                        "--scale"
                    ]
                }
            ];
        });
    }, _loop5 = function(_i13, _iter13) {
        var _iter__i = _sliced_to_array._(_iter13[_i13], 2), s = _iter__i[0], g = _iter__i[1];
        o(s, [
            "--scroll-margin",
            "--spacing"
        ], function(v) {
            return [
                a(g, v)
            ];
        }, {
            supportsNegative: !0
        });
    }, _loop6 = function(_i14, _iter14) {
        var _iter__i = _sliced_to_array._(_iter14[_i14], 2), s = _iter__i[0], g = _iter__i[1];
        o(s, [
            "--scroll-padding",
            "--spacing"
        ], function(v) {
            return [
                a(g, v)
            ];
        });
    }, _loop7 = function(_i20, _iter20) {
        var _iter__i = _sliced_to_array._(_iter20[_i20], 2), s = _iter__i[0], g = _iter__i[1];
        n(s, {
            themeKeys: [
                "--radius"
            ],
            handle: function(v) {
                return g.map(function(C) {
                    return a(C, v);
                });
            },
            staticValues: {
                none: g.map(function(v) {
                    return a(v, "0");
                }),
                full: g.map(function(v) {
                    return a(v, "calc(infinity * 1px)");
                })
            }
        });
    }, _loop8 = function(_i23, _iter23) {
        var _iter__i = _sliced_to_array._(_iter23[_i23], 2), s = _iter__i[0], g = _iter__i[1];
        o(s, [
            "--padding",
            "--spacing"
        ], function(v) {
            return [
                a(g, v)
            ];
        });
    };
    var r = new Jt;
    function i(s, g) {
        function v(b) {
            var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, T, err;
            return _ts_generator._(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            6,
                            7,
                            8
                        ]);
                        _iterator = e.keysInNamespaces(b)[Symbol.iterator]();
                        _state.label = 2;
                    case 2:
                        if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                            3,
                            5
                        ];
                        T = _step.value;
                        return [
                            4,
                            T.replace(Zr, function(D, E, R) {
                                return "".concat(E, ".").concat(R);
                            })
                        ];
                    case 3:
                        _state.sent();
                        _state.label = 4;
                    case 4:
                        _iteratorNormalCompletion = true;
                        return [
                            3,
                            2
                        ];
                    case 5:
                        return [
                            3,
                            8
                        ];
                    case 6:
                        err = _state.sent();
                        _didIteratorError = true;
                        _iteratorError = err;
                        return [
                            3,
                            8
                        ];
                    case 7:
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                        return [
                            7
                        ];
                    case 8:
                        return [
                            2
                        ];
                }
            });
        }
        var C = [
            "1/2",
            "1/3",
            "2/3",
            "1/4",
            "2/4",
            "3/4",
            "1/5",
            "2/5",
            "3/5",
            "4/5",
            "1/6",
            "2/6",
            "3/6",
            "4/6",
            "5/6",
            "1/12",
            "2/12",
            "3/12",
            "4/12",
            "5/12",
            "6/12",
            "7/12",
            "8/12",
            "9/12",
            "10/12",
            "11/12"
        ];
        r.suggest(s, function() {
            var b = [];
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = g()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var T = _step.value;
                    var _D;
                    if (typeof T == "string") {
                        b.push({
                            values: [
                                T
                            ],
                            modifiers: []
                        });
                        continue;
                    }
                    var _T_values, _T_valueThemeKeys, _T_modifiers, _T_modifierThemeKeys;
                    var D = _to_consumable_array._((_T_values = T.values) !== null && _T_values !== void 0 ? _T_values : []).concat(_to_consumable_array._(v((_T_valueThemeKeys = T.valueThemeKeys) !== null && _T_valueThemeKeys !== void 0 ? _T_valueThemeKeys : []))), E = _to_consumable_array._((_T_modifiers = T.modifiers) !== null && _T_modifiers !== void 0 ? _T_modifiers : []).concat(_to_consumable_array._(v((_T_modifierThemeKeys = T.modifierThemeKeys) !== null && _T_modifierThemeKeys !== void 0 ? _T_modifierThemeKeys : [])));
                    T.supportsFractions && (_D = D).push.apply(_D, _to_consumable_array._(C)), T.hasDefaultValue && D.unshift(null), b.push({
                        supportsNegative: T.supportsNegative,
                        values: D,
                        modifiers: E
                    });
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            return b;
        });
    }
    function t(s, g) {
        r.static(s, function() {
            return g.map(function(v) {
                return typeof v == "function" ? v() : a(v[0], v[1]);
            });
        });
    }
    function n(s, g) {
        function v(param) {
            var C = param.negative;
            return function(b) {
                var T = null, D = null;
                if (b.value) if (b.value.kind === "arbitrary") {
                    if (b.modifier) return;
                    T = b.value.value, D = b.value.dataType;
                } else {
                    var _b_value_fraction, _g_themeKeys;
                    if (T = e.resolve((_b_value_fraction = b.value.fraction) !== null && _b_value_fraction !== void 0 ? _b_value_fraction : b.value.value, (_g_themeKeys = g.themeKeys) !== null && _g_themeKeys !== void 0 ? _g_themeKeys : []), T === null && g.supportsFractions && b.value.fraction) {
                        var _L = _sliced_to_array._(L(b.value.fraction, "/"), 2), E = _L[0], R = _L[1];
                        if (!O(E) || !O(R)) return;
                        T = "calc(".concat(b.value.fraction, " * 100%)");
                    }
                    if (T === null && C && g.handleNegativeBareValue) {
                        if (T = g.handleNegativeBareValue(b.value), !(T === null || T === void 0 ? void 0 : T.includes("/")) && b.modifier) return;
                        if (T !== null) return g.handle(T, null);
                    }
                    if (T === null && g.handleBareValue && (T = g.handleBareValue(b.value), !(T === null || T === void 0 ? void 0 : T.includes("/")) && b.modifier)) return;
                    if (T === null && !C && g.staticValues && !b.modifier) {
                        var E1 = g.staticValues[b.value.value];
                        if (E1) return E1.map(ee);
                    }
                }
                else {
                    if (b.modifier) return;
                    var _g_themeKeys1;
                    T = g.defaultValue !== void 0 ? g.defaultValue : e.resolve(null, (_g_themeKeys1 = g.themeKeys) !== null && _g_themeKeys1 !== void 0 ? _g_themeKeys1 : []);
                }
                if (T !== null) return g.handle(C ? "calc(".concat(T, " * -1)") : T, D);
            };
        }
        if (g.supportsNegative && r.functional("-".concat(s), v({
            negative: !0
        })), r.functional(s, v({
            negative: !1
        })), i(s, function() {
            var _g_themeKeys;
            return [
                {
                    supportsNegative: g.supportsNegative,
                    valueThemeKeys: (_g_themeKeys = g.themeKeys) !== null && _g_themeKeys !== void 0 ? _g_themeKeys : [],
                    hasDefaultValue: g.defaultValue !== void 0 && g.defaultValue !== null,
                    supportsFractions: g.supportsFractions
                }
            ];
        }), g.staticValues && Object.keys(g.staticValues).length > 0) {
            var C = Object.keys(g.staticValues);
            i(s, function() {
                return [
                    {
                        values: C
                    }
                ];
            });
        }
    }
    function l(s, g) {
        r.functional(s, function(v) {
            if (!v.value) return;
            var C = null;
            if (v.value.kind === "arbitrary" ? (C = v.value.value, C = X(C, v.modifier, e)) : C = te(v, e, g.themeKeys), C !== null) return g.handle(C);
        }), i(s, function() {
            return [
                {
                    values: [
                        "current",
                        "inherit",
                        "transparent"
                    ],
                    valueThemeKeys: g.themeKeys,
                    modifiers: Array.from({
                        length: 21
                    }, function(v, C) {
                        return "".concat(C * 5);
                    })
                }
            ];
        });
    }
    function o(s, g, v) {
        var _ref = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, tmp = _ref.supportsNegative, C = tmp === void 0 ? !1 : tmp, tmp1 = _ref.supportsFractions, b = tmp1 === void 0 ? !1 : tmp1, T = _ref.staticValues;
        C && r.static("-".concat(s, "-px"), function() {
            return v("-1px");
        }), r.static("".concat(s, "-px"), function() {
            return v("1px");
        }), n(s, {
            themeKeys: g,
            supportsFractions: b,
            supportsNegative: C,
            defaultValue: null,
            handleBareValue: function(param) {
                var D = param.value;
                var E = e.resolve(null, [
                    "--spacing"
                ]);
                return !E || !ne(D) ? null : "calc(".concat(E, " * ").concat(D, ")");
            },
            handleNegativeBareValue: function(param) {
                var D = param.value;
                var E = e.resolve(null, [
                    "--spacing"
                ]);
                return !E || !ne(D) ? null : "calc(".concat(E, " * -").concat(D, ")");
            },
            handle: v,
            staticValues: T
        }), i(s, function() {
            return [
                {
                    values: e.get([
                        "--spacing"
                    ]) ? bt : [],
                    supportsNegative: C,
                    supportsFractions: b,
                    valueThemeKeys: g
                }
            ];
        });
    }
    t("sr-only", [
        [
            "position",
            "absolute"
        ],
        [
            "width",
            "1px"
        ],
        [
            "height",
            "1px"
        ],
        [
            "padding",
            "0"
        ],
        [
            "margin",
            "-1px"
        ],
        [
            "overflow",
            "hidden"
        ],
        [
            "clip-path",
            "inset(50%)"
        ],
        [
            "white-space",
            "nowrap"
        ],
        [
            "border-width",
            "0"
        ]
    ]), t("not-sr-only", [
        [
            "position",
            "static"
        ],
        [
            "width",
            "auto"
        ],
        [
            "height",
            "auto"
        ],
        [
            "padding",
            "0"
        ],
        [
            "margin",
            "0"
        ],
        [
            "overflow",
            "visible"
        ],
        [
            "clip-path",
            "none"
        ],
        [
            "white-space",
            "normal"
        ]
    ]), t("pointer-events-none", [
        [
            "pointer-events",
            "none"
        ]
    ]), t("pointer-events-auto", [
        [
            "pointer-events",
            "auto"
        ]
    ]), t("visible", [
        [
            "visibility",
            "visible"
        ]
    ]), t("invisible", [
        [
            "visibility",
            "hidden"
        ]
    ]), t("collapse", [
        [
            "visibility",
            "collapse"
        ]
    ]), t("static", [
        [
            "position",
            "static"
        ]
    ]), t("fixed", [
        [
            "position",
            "fixed"
        ]
    ]), t("absolute", [
        [
            "position",
            "absolute"
        ]
    ]), t("relative", [
        [
            "position",
            "relative"
        ]
    ]), t("sticky", [
        [
            "position",
            "sticky"
        ]
    ]);
    for(var _i = 0, _iter = [
        [
            "inset",
            "inset"
        ],
        [
            "inset-x",
            "inset-inline"
        ],
        [
            "inset-y",
            "inset-block"
        ],
        [
            "start",
            "inset-inline-start"
        ],
        [
            "end",
            "inset-inline-end"
        ],
        [
            "top",
            "top"
        ],
        [
            "right",
            "right"
        ],
        [
            "bottom",
            "bottom"
        ],
        [
            "left",
            "left"
        ]
    ]; _i < _iter.length; _i++)_loop(_i, _iter);
    t("isolate", [
        [
            "isolation",
            "isolate"
        ]
    ]), t("isolation-auto", [
        [
            "isolation",
            "auto"
        ]
    ]), n("z", {
        supportsNegative: !0,
        handleBareValue: function(param) {
            var s = param.value;
            return O(s) ? s : null;
        },
        themeKeys: [
            "--z-index"
        ],
        handle: function(s) {
            return [
                a("z-index", s)
            ];
        },
        staticValues: {
            auto: [
                a("z-index", "auto")
            ]
        }
    }), i("z", function() {
        return [
            {
                supportsNegative: !0,
                values: [
                    "0",
                    "10",
                    "20",
                    "30",
                    "40",
                    "50"
                ],
                valueThemeKeys: [
                    "--z-index"
                ]
            }
        ];
    }), n("order", {
        supportsNegative: !0,
        handleBareValue: function(param) {
            var s = param.value;
            return O(s) ? s : null;
        },
        themeKeys: [
            "--order"
        ],
        handle: function(s) {
            return [
                a("order", s)
            ];
        },
        staticValues: {
            first: [
                a("order", "-9999")
            ],
            last: [
                a("order", "9999")
            ]
        }
    }), i("order", function() {
        return [
            {
                supportsNegative: !0,
                values: Array.from({
                    length: 12
                }, function(s, g) {
                    return "".concat(g + 1);
                }),
                valueThemeKeys: [
                    "--order"
                ]
            }
        ];
    }), n("col", {
        supportsNegative: !0,
        handleBareValue: function(param) {
            var s = param.value;
            return O(s) ? s : null;
        },
        themeKeys: [
            "--grid-column"
        ],
        handle: function(s) {
            return [
                a("grid-column", s)
            ];
        },
        staticValues: {
            auto: [
                a("grid-column", "auto")
            ]
        }
    }), n("col-span", {
        handleBareValue: function(param) {
            var s = param.value;
            return O(s) ? s : null;
        },
        handle: function(s) {
            return [
                a("grid-column", "span ".concat(s, " / span ").concat(s))
            ];
        },
        staticValues: {
            full: [
                a("grid-column", "1 / -1")
            ]
        }
    }), n("col-start", {
        supportsNegative: !0,
        handleBareValue: function(param) {
            var s = param.value;
            return O(s) ? s : null;
        },
        themeKeys: [
            "--grid-column-start"
        ],
        handle: function(s) {
            return [
                a("grid-column-start", s)
            ];
        },
        staticValues: {
            auto: [
                a("grid-column-start", "auto")
            ]
        }
    }), n("col-end", {
        supportsNegative: !0,
        handleBareValue: function(param) {
            var s = param.value;
            return O(s) ? s : null;
        },
        themeKeys: [
            "--grid-column-end"
        ],
        handle: function(s) {
            return [
                a("grid-column-end", s)
            ];
        },
        staticValues: {
            auto: [
                a("grid-column-end", "auto")
            ]
        }
    }), i("col-span", function() {
        return [
            {
                values: Array.from({
                    length: 12
                }, function(s, g) {
                    return "".concat(g + 1);
                }),
                valueThemeKeys: []
            }
        ];
    }), i("col-start", function() {
        return [
            {
                supportsNegative: !0,
                values: Array.from({
                    length: 13
                }, function(s, g) {
                    return "".concat(g + 1);
                }),
                valueThemeKeys: [
                    "--grid-column-start"
                ]
            }
        ];
    }), i("col-end", function() {
        return [
            {
                supportsNegative: !0,
                values: Array.from({
                    length: 13
                }, function(s, g) {
                    return "".concat(g + 1);
                }),
                valueThemeKeys: [
                    "--grid-column-end"
                ]
            }
        ];
    }), n("row", {
        supportsNegative: !0,
        handleBareValue: function(param) {
            var s = param.value;
            return O(s) ? s : null;
        },
        themeKeys: [
            "--grid-row"
        ],
        handle: function(s) {
            return [
                a("grid-row", s)
            ];
        },
        staticValues: {
            auto: [
                a("grid-row", "auto")
            ]
        }
    }), n("row-span", {
        themeKeys: [],
        handleBareValue: function(param) {
            var s = param.value;
            return O(s) ? s : null;
        },
        handle: function(s) {
            return [
                a("grid-row", "span ".concat(s, " / span ").concat(s))
            ];
        },
        staticValues: {
            full: [
                a("grid-row", "1 / -1")
            ]
        }
    }), n("row-start", {
        supportsNegative: !0,
        handleBareValue: function(param) {
            var s = param.value;
            return O(s) ? s : null;
        },
        themeKeys: [
            "--grid-row-start"
        ],
        handle: function(s) {
            return [
                a("grid-row-start", s)
            ];
        },
        staticValues: {
            auto: [
                a("grid-row-start", "auto")
            ]
        }
    }), n("row-end", {
        supportsNegative: !0,
        handleBareValue: function(param) {
            var s = param.value;
            return O(s) ? s : null;
        },
        themeKeys: [
            "--grid-row-end"
        ],
        handle: function(s) {
            return [
                a("grid-row-end", s)
            ];
        },
        staticValues: {
            auto: [
                a("grid-row-end", "auto")
            ]
        }
    }), i("row-span", function() {
        return [
            {
                values: Array.from({
                    length: 12
                }, function(s, g) {
                    return "".concat(g + 1);
                }),
                valueThemeKeys: []
            }
        ];
    }), i("row-start", function() {
        return [
            {
                supportsNegative: !0,
                values: Array.from({
                    length: 13
                }, function(s, g) {
                    return "".concat(g + 1);
                }),
                valueThemeKeys: [
                    "--grid-row-start"
                ]
            }
        ];
    }), i("row-end", function() {
        return [
            {
                supportsNegative: !0,
                values: Array.from({
                    length: 13
                }, function(s, g) {
                    return "".concat(g + 1);
                }),
                valueThemeKeys: [
                    "--grid-row-end"
                ]
            }
        ];
    }), t("float-start", [
        [
            "float",
            "inline-start"
        ]
    ]), t("float-end", [
        [
            "float",
            "inline-end"
        ]
    ]), t("float-right", [
        [
            "float",
            "right"
        ]
    ]), t("float-left", [
        [
            "float",
            "left"
        ]
    ]), t("float-none", [
        [
            "float",
            "none"
        ]
    ]), t("clear-start", [
        [
            "clear",
            "inline-start"
        ]
    ]), t("clear-end", [
        [
            "clear",
            "inline-end"
        ]
    ]), t("clear-right", [
        [
            "clear",
            "right"
        ]
    ]), t("clear-left", [
        [
            "clear",
            "left"
        ]
    ]), t("clear-both", [
        [
            "clear",
            "both"
        ]
    ]), t("clear-none", [
        [
            "clear",
            "none"
        ]
    ]);
    for(var _i1 = 0, _iter1 = [
        [
            "m",
            "margin"
        ],
        [
            "mx",
            "margin-inline"
        ],
        [
            "my",
            "margin-block"
        ],
        [
            "ms",
            "margin-inline-start"
        ],
        [
            "me",
            "margin-inline-end"
        ],
        [
            "mt",
            "margin-top"
        ],
        [
            "mr",
            "margin-right"
        ],
        [
            "mb",
            "margin-bottom"
        ],
        [
            "ml",
            "margin-left"
        ]
    ]; _i1 < _iter1.length; _i1++)_loop1(_i1, _iter1);
    t("box-border", [
        [
            "box-sizing",
            "border-box"
        ]
    ]), t("box-content", [
        [
            "box-sizing",
            "content-box"
        ]
    ]), n("line-clamp", {
        themeKeys: [
            "--line-clamp"
        ],
        handleBareValue: function(param) {
            var s = param.value;
            return O(s) ? s : null;
        },
        handle: function(s) {
            return [
                a("overflow", "hidden"),
                a("display", "-webkit-box"),
                a("-webkit-box-orient", "vertical"),
                a("-webkit-line-clamp", s)
            ];
        },
        staticValues: {
            none: [
                a("overflow", "visible"),
                a("display", "block"),
                a("-webkit-box-orient", "horizontal"),
                a("-webkit-line-clamp", "unset")
            ]
        }
    }), i("line-clamp", function() {
        return [
            {
                values: [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6"
                ],
                valueThemeKeys: [
                    "--line-clamp"
                ]
            }
        ];
    }), t("block", [
        [
            "display",
            "block"
        ]
    ]), t("inline-block", [
        [
            "display",
            "inline-block"
        ]
    ]), t("inline", [
        [
            "display",
            "inline"
        ]
    ]), t("hidden", [
        [
            "display",
            "none"
        ]
    ]), t("inline-flex", [
        [
            "display",
            "inline-flex"
        ]
    ]), t("table", [
        [
            "display",
            "table"
        ]
    ]), t("inline-table", [
        [
            "display",
            "inline-table"
        ]
    ]), t("table-caption", [
        [
            "display",
            "table-caption"
        ]
    ]), t("table-cell", [
        [
            "display",
            "table-cell"
        ]
    ]), t("table-column", [
        [
            "display",
            "table-column"
        ]
    ]), t("table-column-group", [
        [
            "display",
            "table-column-group"
        ]
    ]), t("table-footer-group", [
        [
            "display",
            "table-footer-group"
        ]
    ]), t("table-header-group", [
        [
            "display",
            "table-header-group"
        ]
    ]), t("table-row-group", [
        [
            "display",
            "table-row-group"
        ]
    ]), t("table-row", [
        [
            "display",
            "table-row"
        ]
    ]), t("flow-root", [
        [
            "display",
            "flow-root"
        ]
    ]), t("flex", [
        [
            "display",
            "flex"
        ]
    ]), t("grid", [
        [
            "display",
            "grid"
        ]
    ]), t("inline-grid", [
        [
            "display",
            "inline-grid"
        ]
    ]), t("contents", [
        [
            "display",
            "contents"
        ]
    ]), t("list-item", [
        [
            "display",
            "list-item"
        ]
    ]), t("field-sizing-content", [
        [
            "field-sizing",
            "content"
        ]
    ]), t("field-sizing-fixed", [
        [
            "field-sizing",
            "fixed"
        ]
    ]), n("aspect", {
        themeKeys: [
            "--aspect"
        ],
        handleBareValue: function(param) {
            var s = param.fraction;
            if (s === null) return null;
            var _L = _sliced_to_array._(L(s, "/"), 2), g = _L[0], v = _L[1];
            return !O(g) || !O(v) ? null : s;
        },
        handle: function(s) {
            return [
                a("aspect-ratio", s)
            ];
        },
        staticValues: {
            auto: [
                a("aspect-ratio", "auto")
            ],
            square: [
                a("aspect-ratio", "1 / 1")
            ]
        }
    });
    for(var _i2 = 0, _iter2 = [
        [
            "full",
            "100%"
        ],
        [
            "svw",
            "100svw"
        ],
        [
            "lvw",
            "100lvw"
        ],
        [
            "dvw",
            "100dvw"
        ],
        [
            "svh",
            "100svh"
        ],
        [
            "lvh",
            "100lvh"
        ],
        [
            "dvh",
            "100dvh"
        ],
        [
            "min",
            "min-content"
        ],
        [
            "max",
            "max-content"
        ],
        [
            "fit",
            "fit-content"
        ]
    ]; _i2 < _iter2.length; _i2++){
        var _iter__i = _sliced_to_array._(_iter2[_i2], 2), s = _iter__i[0], g = _iter__i[1];
        t("size-".concat(s), [
            [
                "--tw-sort",
                "size"
            ],
            [
                "width",
                g
            ],
            [
                "height",
                g
            ]
        ]), t("w-".concat(s), [
            [
                "width",
                g
            ]
        ]), t("h-".concat(s), [
            [
                "height",
                g
            ]
        ]), t("min-w-".concat(s), [
            [
                "min-width",
                g
            ]
        ]), t("min-h-".concat(s), [
            [
                "min-height",
                g
            ]
        ]), t("max-w-".concat(s), [
            [
                "max-width",
                g
            ]
        ]), t("max-h-".concat(s), [
            [
                "max-height",
                g
            ]
        ]);
    }
    t("size-auto", [
        [
            "--tw-sort",
            "size"
        ],
        [
            "width",
            "auto"
        ],
        [
            "height",
            "auto"
        ]
    ]), t("w-auto", [
        [
            "width",
            "auto"
        ]
    ]), t("h-auto", [
        [
            "height",
            "auto"
        ]
    ]), t("min-w-auto", [
        [
            "min-width",
            "auto"
        ]
    ]), t("min-h-auto", [
        [
            "min-height",
            "auto"
        ]
    ]), t("h-lh", [
        [
            "height",
            "1lh"
        ]
    ]), t("min-h-lh", [
        [
            "min-height",
            "1lh"
        ]
    ]), t("max-h-lh", [
        [
            "max-height",
            "1lh"
        ]
    ]), t("w-screen", [
        [
            "width",
            "100vw"
        ]
    ]), t("min-w-screen", [
        [
            "min-width",
            "100vw"
        ]
    ]), t("max-w-screen", [
        [
            "max-width",
            "100vw"
        ]
    ]), t("h-screen", [
        [
            "height",
            "100vh"
        ]
    ]), t("min-h-screen", [
        [
            "min-height",
            "100vh"
        ]
    ]), t("max-h-screen", [
        [
            "max-height",
            "100vh"
        ]
    ]), t("max-w-none", [
        [
            "max-width",
            "none"
        ]
    ]), t("max-h-none", [
        [
            "max-height",
            "none"
        ]
    ]), o("size", [
        "--size",
        "--spacing"
    ], function(s) {
        return [
            a("--tw-sort", "size"),
            a("width", s),
            a("height", s)
        ];
    }, {
        supportsFractions: !0
    });
    for(var _i3 = 0, _iter3 = [
        [
            "w",
            [
                "--width",
                "--spacing",
                "--container"
            ],
            "width"
        ],
        [
            "min-w",
            [
                "--min-width",
                "--spacing",
                "--container"
            ],
            "min-width"
        ],
        [
            "max-w",
            [
                "--max-width",
                "--spacing",
                "--container"
            ],
            "max-width"
        ],
        [
            "h",
            [
                "--height",
                "--spacing"
            ],
            "height"
        ],
        [
            "min-h",
            [
                "--min-height",
                "--height",
                "--spacing"
            ],
            "min-height"
        ],
        [
            "max-h",
            [
                "--max-height",
                "--height",
                "--spacing"
            ],
            "max-height"
        ]
    ]; _i3 < _iter3.length; _i3++)_loop2(_i3, _iter3);
    r.static("container", function() {
        var s = _to_consumable_array._(e.namespace("--breakpoint").values());
        s.sort(function(v, C) {
            return Oe(v, C, "asc");
        });
        var g = [
            a("--tw-sort", "--tw-container-component"),
            a("width", "100%")
        ];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = s[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                g.push(F("@media", "(width >= ".concat(v, ")"), [
                    a("max-width", v)
                ]));
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        return g;
    }), t("flex-auto", [
        [
            "flex",
            "auto"
        ]
    ]), t("flex-initial", [
        [
            "flex",
            "0 auto"
        ]
    ]), t("flex-none", [
        [
            "flex",
            "none"
        ]
    ]), r.functional("flex", function(s) {
        if (s.value) {
            if (s.value.kind === "arbitrary") return s.modifier ? void 0 : [
                a("flex", s.value.value)
            ];
            if (s.value.fraction) {
                var _L = _sliced_to_array._(L(s.value.fraction, "/"), 2), g = _L[0], v = _L[1];
                return !O(g) || !O(v) ? void 0 : [
                    a("flex", "calc(".concat(s.value.fraction, " * 100%)"))
                ];
            }
            if (O(s.value.value)) return s.modifier ? void 0 : [
                a("flex", s.value.value)
            ];
        }
    }), i("flex", function() {
        return [
            {
                supportsFractions: !0
            },
            {
                values: Array.from({
                    length: 12
                }, function(s, g) {
                    return "".concat(g + 1);
                })
            }
        ];
    }), n("shrink", {
        defaultValue: "1",
        handleBareValue: function(param) {
            var s = param.value;
            return O(s) ? s : null;
        },
        handle: function(s) {
            return [
                a("flex-shrink", s)
            ];
        }
    }), n("grow", {
        defaultValue: "1",
        handleBareValue: function(param) {
            var s = param.value;
            return O(s) ? s : null;
        },
        handle: function(s) {
            return [
                a("flex-grow", s)
            ];
        }
    }), i("shrink", function() {
        return [
            {
                values: [
                    "0"
                ],
                valueThemeKeys: [],
                hasDefaultValue: !0
            }
        ];
    }), i("grow", function() {
        return [
            {
                values: [
                    "0"
                ],
                valueThemeKeys: [],
                hasDefaultValue: !0
            }
        ];
    }), t("basis-auto", [
        [
            "flex-basis",
            "auto"
        ]
    ]), t("basis-full", [
        [
            "flex-basis",
            "100%"
        ]
    ]), o("basis", [
        "--flex-basis",
        "--spacing",
        "--container"
    ], function(s) {
        return [
            a("flex-basis", s)
        ];
    }, {
        supportsFractions: !0
    }), t("table-auto", [
        [
            "table-layout",
            "auto"
        ]
    ]), t("table-fixed", [
        [
            "table-layout",
            "fixed"
        ]
    ]), t("caption-top", [
        [
            "caption-side",
            "top"
        ]
    ]), t("caption-bottom", [
        [
            "caption-side",
            "bottom"
        ]
    ]), t("border-collapse", [
        [
            "border-collapse",
            "collapse"
        ]
    ]), t("border-separate", [
        [
            "border-collapse",
            "separate"
        ]
    ]);
    var f = function() {
        return W([
            $("--tw-border-spacing-x", "0", "<length>"),
            $("--tw-border-spacing-y", "0", "<length>")
        ]);
    };
    o("border-spacing", [
        "--border-spacing",
        "--spacing"
    ], function(s) {
        return [
            f(),
            a("--tw-border-spacing-x", s),
            a("--tw-border-spacing-y", s),
            a("border-spacing", "var(--tw-border-spacing-x) var(--tw-border-spacing-y)")
        ];
    }), o("border-spacing-x", [
        "--border-spacing",
        "--spacing"
    ], function(s) {
        return [
            f(),
            a("--tw-border-spacing-x", s),
            a("border-spacing", "var(--tw-border-spacing-x) var(--tw-border-spacing-y)")
        ];
    }), o("border-spacing-y", [
        "--border-spacing",
        "--spacing"
    ], function(s) {
        return [
            f(),
            a("--tw-border-spacing-y", s),
            a("border-spacing", "var(--tw-border-spacing-x) var(--tw-border-spacing-y)")
        ];
    }), n("origin", {
        themeKeys: [
            "--transform-origin"
        ],
        handle: function(s) {
            return [
                a("transform-origin", s)
            ];
        },
        staticValues: {
            center: [
                a("transform-origin", "center")
            ],
            top: [
                a("transform-origin", "top")
            ],
            "top-right": [
                a("transform-origin", "100% 0")
            ],
            right: [
                a("transform-origin", "100%")
            ],
            "bottom-right": [
                a("transform-origin", "100% 100%")
            ],
            bottom: [
                a("transform-origin", "bottom")
            ],
            "bottom-left": [
                a("transform-origin", "0 100%")
            ],
            left: [
                a("transform-origin", "0")
            ],
            "top-left": [
                a("transform-origin", "0 0")
            ]
        }
    }), n("perspective-origin", {
        themeKeys: [
            "--perspective-origin"
        ],
        handle: function(s) {
            return [
                a("perspective-origin", s)
            ];
        },
        staticValues: {
            center: [
                a("perspective-origin", "center")
            ],
            top: [
                a("perspective-origin", "top")
            ],
            "top-right": [
                a("perspective-origin", "100% 0")
            ],
            right: [
                a("perspective-origin", "100%")
            ],
            "bottom-right": [
                a("perspective-origin", "100% 100%")
            ],
            bottom: [
                a("perspective-origin", "bottom")
            ],
            "bottom-left": [
                a("perspective-origin", "0 100%")
            ],
            left: [
                a("perspective-origin", "0")
            ],
            "top-left": [
                a("perspective-origin", "0 0")
            ]
        }
    }), n("perspective", {
        themeKeys: [
            "--perspective"
        ],
        handle: function(s) {
            return [
                a("perspective", s)
            ];
        },
        staticValues: {
            none: [
                a("perspective", "none")
            ]
        }
    });
    var u = function() {
        return W([
            $("--tw-translate-x", "0"),
            $("--tw-translate-y", "0"),
            $("--tw-translate-z", "0")
        ]);
    };
    t("translate-none", [
        [
            "translate",
            "none"
        ]
    ]), t("-translate-full", [
        u,
        [
            "--tw-translate-x",
            "-100%"
        ],
        [
            "--tw-translate-y",
            "-100%"
        ],
        [
            "translate",
            "var(--tw-translate-x) var(--tw-translate-y)"
        ]
    ]), t("translate-full", [
        u,
        [
            "--tw-translate-x",
            "100%"
        ],
        [
            "--tw-translate-y",
            "100%"
        ],
        [
            "translate",
            "var(--tw-translate-x) var(--tw-translate-y)"
        ]
    ]), o("translate", [
        "--translate",
        "--spacing"
    ], function(s) {
        return [
            u(),
            a("--tw-translate-x", s),
            a("--tw-translate-y", s),
            a("translate", "var(--tw-translate-x) var(--tw-translate-y)")
        ];
    }, {
        supportsNegative: !0,
        supportsFractions: !0
    });
    for(var _i4 = 0, _iter4 = [
        "x",
        "y"
    ]; _i4 < _iter4.length; _i4++)_loop3(_i4, _iter4);
    o("translate-z", [
        "--translate",
        "--spacing"
    ], function(s) {
        return [
            u(),
            a("--tw-translate-z", s),
            a("translate", "var(--tw-translate-x) var(--tw-translate-y) var(--tw-translate-z)")
        ];
    }, {
        supportsNegative: !0
    }), t("translate-3d", [
        u,
        [
            "translate",
            "var(--tw-translate-x) var(--tw-translate-y) var(--tw-translate-z)"
        ]
    ]);
    var c = function() {
        return W([
            $("--tw-scale-x", "1"),
            $("--tw-scale-y", "1"),
            $("--tw-scale-z", "1")
        ]);
    };
    t("scale-none", [
        [
            "scale",
            "none"
        ]
    ]);
    function m(param) {
        var s = param.negative;
        return function(g) {
            if (!g.value || g.modifier) return;
            var v;
            return g.value.kind === "arbitrary" ? (v = g.value.value, v = s ? "calc(".concat(v, " * -1)") : v, [
                a("scale", v)
            ]) : (v = e.resolve(g.value.value, [
                "--scale"
            ]), !v && O(g.value.value) && (v = "".concat(g.value.value, "%")), v ? (v = s ? "calc(".concat(v, " * -1)") : v, [
                c(),
                a("--tw-scale-x", v),
                a("--tw-scale-y", v),
                a("--tw-scale-z", v),
                a("scale", "var(--tw-scale-x) var(--tw-scale-y)")
            ]) : void 0);
        };
    }
    r.functional("-scale", m({
        negative: !0
    })), r.functional("scale", m({
        negative: !1
    })), i("scale", function() {
        return [
            {
                supportsNegative: !0,
                values: [
                    "0",
                    "50",
                    "75",
                    "90",
                    "95",
                    "100",
                    "105",
                    "110",
                    "125",
                    "150",
                    "200"
                ],
                valueThemeKeys: [
                    "--scale"
                ]
            }
        ];
    });
    for(var _i5 = 0, _iter5 = [
        "x",
        "y",
        "z"
    ]; _i5 < _iter5.length; _i5++)_loop4(_i5, _iter5);
    t("scale-3d", [
        c,
        [
            "scale",
            "var(--tw-scale-x) var(--tw-scale-y) var(--tw-scale-z)"
        ]
    ]), t("rotate-none", [
        [
            "rotate",
            "none"
        ]
    ]);
    function d(param) {
        var s = param.negative;
        return function(g) {
            if (!g.value || g.modifier) return;
            var v;
            if (g.value.kind === "arbitrary") {
                v = g.value.value;
                var _g_value_dataType;
                var C = (_g_value_dataType = g.value.dataType) !== null && _g_value_dataType !== void 0 ? _g_value_dataType : Q(v, [
                    "angle",
                    "vector"
                ]);
                if (C === "vector") return [
                    a("rotate", "".concat(v, " var(--tw-rotate)"))
                ];
                if (C !== "angle") return [
                    a("rotate", s ? "calc(".concat(v, " * -1)") : v)
                ];
            } else if (v = e.resolve(g.value.value, [
                "--rotate"
            ]), !v && O(g.value.value) && (v = "".concat(g.value.value, "deg")), !v) return;
            return [
                a("rotate", s ? "calc(".concat(v, " * -1)") : v)
            ];
        };
    }
    r.functional("-rotate", d({
        negative: !0
    })), r.functional("rotate", d({
        negative: !1
    })), i("rotate", function() {
        return [
            {
                supportsNegative: !0,
                values: [
                    "0",
                    "1",
                    "2",
                    "3",
                    "6",
                    "12",
                    "45",
                    "90",
                    "180"
                ],
                valueThemeKeys: [
                    "--rotate"
                ]
            }
        ];
    });
    {
        var _loop9 = function(_i6, _iter6) {
            var v = _iter6[_i6];
            n("rotate-".concat(v), {
                supportsNegative: !0,
                themeKeys: [
                    "--rotate"
                ],
                handleBareValue: function(param) {
                    var C = param.value;
                    return O(C) ? "".concat(C, "deg") : null;
                },
                handle: function(C) {
                    return [
                        g1(),
                        a("--tw-rotate-".concat(v), "rotate".concat(v.toUpperCase(), "(").concat(C, ")")),
                        a("transform", s1)
                    ];
                }
            }), i("rotate-".concat(v), function() {
                return [
                    {
                        supportsNegative: !0,
                        values: [
                            "0",
                            "1",
                            "2",
                            "3",
                            "6",
                            "12",
                            "45",
                            "90",
                            "180"
                        ],
                        valueThemeKeys: [
                            "--rotate"
                        ]
                    }
                ];
            });
        };
        var s1 = [
            "var(--tw-rotate-x,)",
            "var(--tw-rotate-y,)",
            "var(--tw-rotate-z,)",
            "var(--tw-skew-x,)",
            "var(--tw-skew-y,)"
        ].join(" "), g1 = function() {
            return W([
                $("--tw-rotate-x"),
                $("--tw-rotate-y"),
                $("--tw-rotate-z"),
                $("--tw-skew-x"),
                $("--tw-skew-y")
            ]);
        };
        for(var _i6 = 0, _iter6 = [
            "x",
            "y",
            "z"
        ]; _i6 < _iter6.length; _i6++)_loop9(_i6, _iter6);
        n("skew", {
            supportsNegative: !0,
            themeKeys: [
                "--skew"
            ],
            handleBareValue: function(param) {
                var v = param.value;
                return O(v) ? "".concat(v, "deg") : null;
            },
            handle: function(v) {
                return [
                    g1(),
                    a("--tw-skew-x", "skewX(".concat(v, ")")),
                    a("--tw-skew-y", "skewY(".concat(v, ")")),
                    a("transform", s1)
                ];
            }
        }), n("skew-x", {
            supportsNegative: !0,
            themeKeys: [
                "--skew"
            ],
            handleBareValue: function(param) {
                var v = param.value;
                return O(v) ? "".concat(v, "deg") : null;
            },
            handle: function(v) {
                return [
                    g1(),
                    a("--tw-skew-x", "skewX(".concat(v, ")")),
                    a("transform", s1)
                ];
            }
        }), n("skew-y", {
            supportsNegative: !0,
            themeKeys: [
                "--skew"
            ],
            handleBareValue: function(param) {
                var v = param.value;
                return O(v) ? "".concat(v, "deg") : null;
            },
            handle: function(v) {
                return [
                    g1(),
                    a("--tw-skew-y", "skewY(".concat(v, ")")),
                    a("transform", s1)
                ];
            }
        }), i("skew", function() {
            return [
                {
                    supportsNegative: !0,
                    values: [
                        "0",
                        "1",
                        "2",
                        "3",
                        "6",
                        "12"
                    ],
                    valueThemeKeys: [
                        "--skew"
                    ]
                }
            ];
        }), i("skew-x", function() {
            return [
                {
                    supportsNegative: !0,
                    values: [
                        "0",
                        "1",
                        "2",
                        "3",
                        "6",
                        "12"
                    ],
                    valueThemeKeys: [
                        "--skew"
                    ]
                }
            ];
        }), i("skew-y", function() {
            return [
                {
                    supportsNegative: !0,
                    values: [
                        "0",
                        "1",
                        "2",
                        "3",
                        "6",
                        "12"
                    ],
                    valueThemeKeys: [
                        "--skew"
                    ]
                }
            ];
        }), r.functional("transform", function(v) {
            if (v.modifier) return;
            var C = null;
            if (v.value ? v.value.kind === "arbitrary" && (C = v.value.value) : C = s1, C !== null) return [
                g1(),
                a("transform", C)
            ];
        }), i("transform", function() {
            return [
                {
                    hasDefaultValue: !0
                }
            ];
        }), t("transform-cpu", [
            [
                "transform",
                s1
            ]
        ]), t("transform-gpu", [
            [
                "transform",
                "translateZ(0) ".concat(s1)
            ]
        ]), t("transform-none", [
            [
                "transform",
                "none"
            ]
        ]);
    }
    t("transform-flat", [
        [
            "transform-style",
            "flat"
        ]
    ]), t("transform-3d", [
        [
            "transform-style",
            "preserve-3d"
        ]
    ]), t("transform-content", [
        [
            "transform-box",
            "content-box"
        ]
    ]), t("transform-border", [
        [
            "transform-box",
            "border-box"
        ]
    ]), t("transform-fill", [
        [
            "transform-box",
            "fill-box"
        ]
    ]), t("transform-stroke", [
        [
            "transform-box",
            "stroke-box"
        ]
    ]), t("transform-view", [
        [
            "transform-box",
            "view-box"
        ]
    ]), t("backface-visible", [
        [
            "backface-visibility",
            "visible"
        ]
    ]), t("backface-hidden", [
        [
            "backface-visibility",
            "hidden"
        ]
    ]);
    for(var _i7 = 0, _iter7 = [
        "auto",
        "default",
        "pointer",
        "wait",
        "text",
        "move",
        "help",
        "not-allowed",
        "none",
        "context-menu",
        "progress",
        "cell",
        "crosshair",
        "vertical-text",
        "alias",
        "copy",
        "no-drop",
        "grab",
        "grabbing",
        "all-scroll",
        "col-resize",
        "row-resize",
        "n-resize",
        "e-resize",
        "s-resize",
        "w-resize",
        "ne-resize",
        "nw-resize",
        "se-resize",
        "sw-resize",
        "ew-resize",
        "ns-resize",
        "nesw-resize",
        "nwse-resize",
        "zoom-in",
        "zoom-out"
    ]; _i7 < _iter7.length; _i7++){
        var s2 = _iter7[_i7];
        t("cursor-".concat(s2), [
            [
                "cursor",
                s2
            ]
        ]);
    }
    n("cursor", {
        themeKeys: [
            "--cursor"
        ],
        handle: function(s) {
            return [
                a("cursor", s)
            ];
        }
    });
    for(var _i8 = 0, _iter8 = [
        "auto",
        "none",
        "manipulation"
    ]; _i8 < _iter8.length; _i8++){
        var s3 = _iter8[_i8];
        t("touch-".concat(s3), [
            [
                "touch-action",
                s3
            ]
        ]);
    }
    var p = function() {
        return W([
            $("--tw-pan-x"),
            $("--tw-pan-y"),
            $("--tw-pinch-zoom")
        ]);
    };
    for(var _i9 = 0, _iter9 = [
        "x",
        "left",
        "right"
    ]; _i9 < _iter9.length; _i9++){
        var s4 = _iter9[_i9];
        t("touch-pan-".concat(s4), [
            p,
            [
                "--tw-pan-x",
                "pan-".concat(s4)
            ],
            [
                "touch-action",
                "var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)"
            ]
        ]);
    }
    for(var _i10 = 0, _iter10 = [
        "y",
        "up",
        "down"
    ]; _i10 < _iter10.length; _i10++){
        var s5 = _iter10[_i10];
        t("touch-pan-".concat(s5), [
            p,
            [
                "--tw-pan-y",
                "pan-".concat(s5)
            ],
            [
                "touch-action",
                "var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)"
            ]
        ]);
    }
    t("touch-pinch-zoom", [
        p,
        [
            "--tw-pinch-zoom",
            "pinch-zoom"
        ],
        [
            "touch-action",
            "var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)"
        ]
    ]);
    for(var _i11 = 0, _iter11 = [
        "none",
        "text",
        "all",
        "auto"
    ]; _i11 < _iter11.length; _i11++){
        var s6 = _iter11[_i11];
        t("select-".concat(s6), [
            [
                "-webkit-user-select",
                s6
            ],
            [
                "user-select",
                s6
            ]
        ]);
    }
    t("resize-none", [
        [
            "resize",
            "none"
        ]
    ]), t("resize-x", [
        [
            "resize",
            "horizontal"
        ]
    ]), t("resize-y", [
        [
            "resize",
            "vertical"
        ]
    ]), t("resize", [
        [
            "resize",
            "both"
        ]
    ]), t("snap-none", [
        [
            "scroll-snap-type",
            "none"
        ]
    ]);
    var k = function() {
        return W([
            $("--tw-scroll-snap-strictness", "proximity", "*")
        ]);
    };
    for(var _i12 = 0, _iter12 = [
        "x",
        "y",
        "both"
    ]; _i12 < _iter12.length; _i12++){
        var s7 = _iter12[_i12];
        t("snap-".concat(s7), [
            k,
            [
                "scroll-snap-type",
                "".concat(s7, " var(--tw-scroll-snap-strictness)")
            ]
        ]);
    }
    t("snap-mandatory", [
        k,
        [
            "--tw-scroll-snap-strictness",
            "mandatory"
        ]
    ]), t("snap-proximity", [
        k,
        [
            "--tw-scroll-snap-strictness",
            "proximity"
        ]
    ]), t("snap-align-none", [
        [
            "scroll-snap-align",
            "none"
        ]
    ]), t("snap-start", [
        [
            "scroll-snap-align",
            "start"
        ]
    ]), t("snap-end", [
        [
            "scroll-snap-align",
            "end"
        ]
    ]), t("snap-center", [
        [
            "scroll-snap-align",
            "center"
        ]
    ]), t("snap-normal", [
        [
            "scroll-snap-stop",
            "normal"
        ]
    ]), t("snap-always", [
        [
            "scroll-snap-stop",
            "always"
        ]
    ]);
    for(var _i13 = 0, _iter13 = [
        [
            "scroll-m",
            "scroll-margin"
        ],
        [
            "scroll-mx",
            "scroll-margin-inline"
        ],
        [
            "scroll-my",
            "scroll-margin-block"
        ],
        [
            "scroll-ms",
            "scroll-margin-inline-start"
        ],
        [
            "scroll-me",
            "scroll-margin-inline-end"
        ],
        [
            "scroll-mt",
            "scroll-margin-top"
        ],
        [
            "scroll-mr",
            "scroll-margin-right"
        ],
        [
            "scroll-mb",
            "scroll-margin-bottom"
        ],
        [
            "scroll-ml",
            "scroll-margin-left"
        ]
    ]; _i13 < _iter13.length; _i13++)_loop5(_i13, _iter13);
    for(var _i14 = 0, _iter14 = [
        [
            "scroll-p",
            "scroll-padding"
        ],
        [
            "scroll-px",
            "scroll-padding-inline"
        ],
        [
            "scroll-py",
            "scroll-padding-block"
        ],
        [
            "scroll-ps",
            "scroll-padding-inline-start"
        ],
        [
            "scroll-pe",
            "scroll-padding-inline-end"
        ],
        [
            "scroll-pt",
            "scroll-padding-top"
        ],
        [
            "scroll-pr",
            "scroll-padding-right"
        ],
        [
            "scroll-pb",
            "scroll-padding-bottom"
        ],
        [
            "scroll-pl",
            "scroll-padding-left"
        ]
    ]; _i14 < _iter14.length; _i14++)_loop6(_i14, _iter14);
    t("list-inside", [
        [
            "list-style-position",
            "inside"
        ]
    ]), t("list-outside", [
        [
            "list-style-position",
            "outside"
        ]
    ]), n("list", {
        themeKeys: [
            "--list-style-type"
        ],
        handle: function(s) {
            return [
                a("list-style-type", s)
            ];
        },
        staticValues: {
            none: [
                a("list-style-type", "none")
            ],
            disc: [
                a("list-style-type", "disc")
            ],
            decimal: [
                a("list-style-type", "decimal")
            ]
        }
    }), n("list-image", {
        themeKeys: [
            "--list-style-image"
        ],
        handle: function(s) {
            return [
                a("list-style-image", s)
            ];
        },
        staticValues: {
            none: [
                a("list-style-image", "none")
            ]
        }
    }), t("appearance-none", [
        [
            "appearance",
            "none"
        ]
    ]), t("appearance-auto", [
        [
            "appearance",
            "auto"
        ]
    ]), t("scheme-normal", [
        [
            "color-scheme",
            "normal"
        ]
    ]), t("scheme-dark", [
        [
            "color-scheme",
            "dark"
        ]
    ]), t("scheme-light", [
        [
            "color-scheme",
            "light"
        ]
    ]), t("scheme-light-dark", [
        [
            "color-scheme",
            "light dark"
        ]
    ]), t("scheme-only-dark", [
        [
            "color-scheme",
            "only dark"
        ]
    ]), t("scheme-only-light", [
        [
            "color-scheme",
            "only light"
        ]
    ]), n("columns", {
        themeKeys: [
            "--columns",
            "--container"
        ],
        handleBareValue: function(param) {
            var s = param.value;
            return O(s) ? s : null;
        },
        handle: function(s) {
            return [
                a("columns", s)
            ];
        },
        staticValues: {
            auto: [
                a("columns", "auto")
            ]
        }
    }), i("columns", function() {
        return [
            {
                values: Array.from({
                    length: 12
                }, function(s, g) {
                    return "".concat(g + 1);
                }),
                valueThemeKeys: [
                    "--columns",
                    "--container"
                ]
            }
        ];
    });
    for(var _i15 = 0, _iter15 = [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column"
    ]; _i15 < _iter15.length; _i15++){
        var s8 = _iter15[_i15];
        t("break-before-".concat(s8), [
            [
                "break-before",
                s8
            ]
        ]);
    }
    for(var _i16 = 0, _iter16 = [
        "auto",
        "avoid",
        "avoid-page",
        "avoid-column"
    ]; _i16 < _iter16.length; _i16++){
        var s9 = _iter16[_i16];
        t("break-inside-".concat(s9), [
            [
                "break-inside",
                s9
            ]
        ]);
    }
    for(var _i17 = 0, _iter17 = [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column"
    ]; _i17 < _iter17.length; _i17++){
        var s10 = _iter17[_i17];
        t("break-after-".concat(s10), [
            [
                "break-after",
                s10
            ]
        ]);
    }
    t("grid-flow-row", [
        [
            "grid-auto-flow",
            "row"
        ]
    ]), t("grid-flow-col", [
        [
            "grid-auto-flow",
            "column"
        ]
    ]), t("grid-flow-dense", [
        [
            "grid-auto-flow",
            "dense"
        ]
    ]), t("grid-flow-row-dense", [
        [
            "grid-auto-flow",
            "row dense"
        ]
    ]), t("grid-flow-col-dense", [
        [
            "grid-auto-flow",
            "column dense"
        ]
    ]), n("auto-cols", {
        themeKeys: [
            "--grid-auto-columns"
        ],
        handle: function(s) {
            return [
                a("grid-auto-columns", s)
            ];
        },
        staticValues: {
            auto: [
                a("grid-auto-columns", "auto")
            ],
            min: [
                a("grid-auto-columns", "min-content")
            ],
            max: [
                a("grid-auto-columns", "max-content")
            ],
            fr: [
                a("grid-auto-columns", "minmax(0, 1fr)")
            ]
        }
    }), n("auto-rows", {
        themeKeys: [
            "--grid-auto-rows"
        ],
        handle: function(s) {
            return [
                a("grid-auto-rows", s)
            ];
        },
        staticValues: {
            auto: [
                a("grid-auto-rows", "auto")
            ],
            min: [
                a("grid-auto-rows", "min-content")
            ],
            max: [
                a("grid-auto-rows", "max-content")
            ],
            fr: [
                a("grid-auto-rows", "minmax(0, 1fr)")
            ]
        }
    }), n("grid-cols", {
        themeKeys: [
            "--grid-template-columns"
        ],
        handleBareValue: function(param) {
            var s = param.value;
            return Qt(s) ? "repeat(".concat(s, ", minmax(0, 1fr))") : null;
        },
        handle: function(s) {
            return [
                a("grid-template-columns", s)
            ];
        },
        staticValues: {
            none: [
                a("grid-template-columns", "none")
            ],
            subgrid: [
                a("grid-template-columns", "subgrid")
            ]
        }
    }), n("grid-rows", {
        themeKeys: [
            "--grid-template-rows"
        ],
        handleBareValue: function(param) {
            var s = param.value;
            return Qt(s) ? "repeat(".concat(s, ", minmax(0, 1fr))") : null;
        },
        handle: function(s) {
            return [
                a("grid-template-rows", s)
            ];
        },
        staticValues: {
            none: [
                a("grid-template-rows", "none")
            ],
            subgrid: [
                a("grid-template-rows", "subgrid")
            ]
        }
    }), i("grid-cols", function() {
        return [
            {
                values: Array.from({
                    length: 12
                }, function(s, g) {
                    return "".concat(g + 1);
                }),
                valueThemeKeys: [
                    "--grid-template-columns"
                ]
            }
        ];
    }), i("grid-rows", function() {
        return [
            {
                values: Array.from({
                    length: 12
                }, function(s, g) {
                    return "".concat(g + 1);
                }),
                valueThemeKeys: [
                    "--grid-template-rows"
                ]
            }
        ];
    }), t("flex-row", [
        [
            "flex-direction",
            "row"
        ]
    ]), t("flex-row-reverse", [
        [
            "flex-direction",
            "row-reverse"
        ]
    ]), t("flex-col", [
        [
            "flex-direction",
            "column"
        ]
    ]), t("flex-col-reverse", [
        [
            "flex-direction",
            "column-reverse"
        ]
    ]), t("flex-wrap", [
        [
            "flex-wrap",
            "wrap"
        ]
    ]), t("flex-nowrap", [
        [
            "flex-wrap",
            "nowrap"
        ]
    ]), t("flex-wrap-reverse", [
        [
            "flex-wrap",
            "wrap-reverse"
        ]
    ]), t("place-content-center", [
        [
            "place-content",
            "center"
        ]
    ]), t("place-content-start", [
        [
            "place-content",
            "start"
        ]
    ]), t("place-content-end", [
        [
            "place-content",
            "end"
        ]
    ]), t("place-content-center-safe", [
        [
            "place-content",
            "safe center"
        ]
    ]), t("place-content-end-safe", [
        [
            "place-content",
            "safe end"
        ]
    ]), t("place-content-between", [
        [
            "place-content",
            "space-between"
        ]
    ]), t("place-content-around", [
        [
            "place-content",
            "space-around"
        ]
    ]), t("place-content-evenly", [
        [
            "place-content",
            "space-evenly"
        ]
    ]), t("place-content-baseline", [
        [
            "place-content",
            "baseline"
        ]
    ]), t("place-content-stretch", [
        [
            "place-content",
            "stretch"
        ]
    ]), t("place-items-center", [
        [
            "place-items",
            "center"
        ]
    ]), t("place-items-start", [
        [
            "place-items",
            "start"
        ]
    ]), t("place-items-end", [
        [
            "place-items",
            "end"
        ]
    ]), t("place-items-center-safe", [
        [
            "place-items",
            "safe center"
        ]
    ]), t("place-items-end-safe", [
        [
            "place-items",
            "safe end"
        ]
    ]), t("place-items-baseline", [
        [
            "place-items",
            "baseline"
        ]
    ]), t("place-items-stretch", [
        [
            "place-items",
            "stretch"
        ]
    ]), t("content-normal", [
        [
            "align-content",
            "normal"
        ]
    ]), t("content-center", [
        [
            "align-content",
            "center"
        ]
    ]), t("content-start", [
        [
            "align-content",
            "flex-start"
        ]
    ]), t("content-end", [
        [
            "align-content",
            "flex-end"
        ]
    ]), t("content-center-safe", [
        [
            "align-content",
            "safe center"
        ]
    ]), t("content-end-safe", [
        [
            "align-content",
            "safe flex-end"
        ]
    ]), t("content-between", [
        [
            "align-content",
            "space-between"
        ]
    ]), t("content-around", [
        [
            "align-content",
            "space-around"
        ]
    ]), t("content-evenly", [
        [
            "align-content",
            "space-evenly"
        ]
    ]), t("content-baseline", [
        [
            "align-content",
            "baseline"
        ]
    ]), t("content-stretch", [
        [
            "align-content",
            "stretch"
        ]
    ]), t("items-center", [
        [
            "align-items",
            "center"
        ]
    ]), t("items-start", [
        [
            "align-items",
            "flex-start"
        ]
    ]), t("items-end", [
        [
            "align-items",
            "flex-end"
        ]
    ]), t("items-center-safe", [
        [
            "align-items",
            "safe center"
        ]
    ]), t("items-end-safe", [
        [
            "align-items",
            "safe flex-end"
        ]
    ]), t("items-baseline", [
        [
            "align-items",
            "baseline"
        ]
    ]), t("items-baseline-last", [
        [
            "align-items",
            "last baseline"
        ]
    ]), t("items-stretch", [
        [
            "align-items",
            "stretch"
        ]
    ]), t("justify-normal", [
        [
            "justify-content",
            "normal"
        ]
    ]), t("justify-center", [
        [
            "justify-content",
            "center"
        ]
    ]), t("justify-start", [
        [
            "justify-content",
            "flex-start"
        ]
    ]), t("justify-end", [
        [
            "justify-content",
            "flex-end"
        ]
    ]), t("justify-center-safe", [
        [
            "justify-content",
            "safe center"
        ]
    ]), t("justify-end-safe", [
        [
            "justify-content",
            "safe flex-end"
        ]
    ]), t("justify-between", [
        [
            "justify-content",
            "space-between"
        ]
    ]), t("justify-around", [
        [
            "justify-content",
            "space-around"
        ]
    ]), t("justify-evenly", [
        [
            "justify-content",
            "space-evenly"
        ]
    ]), t("justify-baseline", [
        [
            "justify-content",
            "baseline"
        ]
    ]), t("justify-stretch", [
        [
            "justify-content",
            "stretch"
        ]
    ]), t("justify-items-normal", [
        [
            "justify-items",
            "normal"
        ]
    ]), t("justify-items-center", [
        [
            "justify-items",
            "center"
        ]
    ]), t("justify-items-start", [
        [
            "justify-items",
            "start"
        ]
    ]), t("justify-items-end", [
        [
            "justify-items",
            "end"
        ]
    ]), t("justify-items-center-safe", [
        [
            "justify-items",
            "safe center"
        ]
    ]), t("justify-items-end-safe", [
        [
            "justify-items",
            "safe end"
        ]
    ]), t("justify-items-stretch", [
        [
            "justify-items",
            "stretch"
        ]
    ]), o("gap", [
        "--gap",
        "--spacing"
    ], function(s) {
        return [
            a("gap", s)
        ];
    }), o("gap-x", [
        "--gap",
        "--spacing"
    ], function(s) {
        return [
            a("column-gap", s)
        ];
    }), o("gap-y", [
        "--gap",
        "--spacing"
    ], function(s) {
        return [
            a("row-gap", s)
        ];
    }), o("space-x", [
        "--space",
        "--spacing"
    ], function(s) {
        return [
            W([
                $("--tw-space-x-reverse", "0")
            ]),
            q(":where(& > :not(:last-child))", [
                a("--tw-sort", "row-gap"),
                a("--tw-space-x-reverse", "0"),
                a("margin-inline-start", "calc(".concat(s, " * var(--tw-space-x-reverse))")),
                a("margin-inline-end", "calc(".concat(s, " * calc(1 - var(--tw-space-x-reverse)))"))
            ])
        ];
    }, {
        supportsNegative: !0
    }), o("space-y", [
        "--space",
        "--spacing"
    ], function(s) {
        return [
            W([
                $("--tw-space-y-reverse", "0")
            ]),
            q(":where(& > :not(:last-child))", [
                a("--tw-sort", "column-gap"),
                a("--tw-space-y-reverse", "0"),
                a("margin-block-start", "calc(".concat(s, " * var(--tw-space-y-reverse))")),
                a("margin-block-end", "calc(".concat(s, " * calc(1 - var(--tw-space-y-reverse)))"))
            ])
        ];
    }, {
        supportsNegative: !0
    }), t("space-x-reverse", [
        function() {
            return W([
                $("--tw-space-x-reverse", "0")
            ]);
        },
        function() {
            return q(":where(& > :not(:last-child))", [
                a("--tw-sort", "row-gap"),
                a("--tw-space-x-reverse", "1")
            ]);
        }
    ]), t("space-y-reverse", [
        function() {
            return W([
                $("--tw-space-y-reverse", "0")
            ]);
        },
        function() {
            return q(":where(& > :not(:last-child))", [
                a("--tw-sort", "column-gap"),
                a("--tw-space-y-reverse", "1")
            ]);
        }
    ]), t("accent-auto", [
        [
            "accent-color",
            "auto"
        ]
    ]), l("accent", {
        themeKeys: [
            "--accent-color",
            "--color"
        ],
        handle: function(s) {
            return [
                a("accent-color", s)
            ];
        }
    }), l("caret", {
        themeKeys: [
            "--caret-color",
            "--color"
        ],
        handle: function(s) {
            return [
                a("caret-color", s)
            ];
        }
    }), l("divide", {
        themeKeys: [
            "--divide-color",
            "--border-color",
            "--color"
        ],
        handle: function(s) {
            return [
                q(":where(& > :not(:last-child))", [
                    a("--tw-sort", "divide-color"),
                    a("border-color", s)
                ])
            ];
        }
    }), t("place-self-auto", [
        [
            "place-self",
            "auto"
        ]
    ]), t("place-self-start", [
        [
            "place-self",
            "start"
        ]
    ]), t("place-self-end", [
        [
            "place-self",
            "end"
        ]
    ]), t("place-self-center", [
        [
            "place-self",
            "center"
        ]
    ]), t("place-self-end-safe", [
        [
            "place-self",
            "safe end"
        ]
    ]), t("place-self-center-safe", [
        [
            "place-self",
            "safe center"
        ]
    ]), t("place-self-stretch", [
        [
            "place-self",
            "stretch"
        ]
    ]), t("self-auto", [
        [
            "align-self",
            "auto"
        ]
    ]), t("self-start", [
        [
            "align-self",
            "flex-start"
        ]
    ]), t("self-end", [
        [
            "align-self",
            "flex-end"
        ]
    ]), t("self-center", [
        [
            "align-self",
            "center"
        ]
    ]), t("self-end-safe", [
        [
            "align-self",
            "safe flex-end"
        ]
    ]), t("self-center-safe", [
        [
            "align-self",
            "safe center"
        ]
    ]), t("self-stretch", [
        [
            "align-self",
            "stretch"
        ]
    ]), t("self-baseline", [
        [
            "align-self",
            "baseline"
        ]
    ]), t("self-baseline-last", [
        [
            "align-self",
            "last baseline"
        ]
    ]), t("justify-self-auto", [
        [
            "justify-self",
            "auto"
        ]
    ]), t("justify-self-start", [
        [
            "justify-self",
            "flex-start"
        ]
    ]), t("justify-self-end", [
        [
            "justify-self",
            "flex-end"
        ]
    ]), t("justify-self-center", [
        [
            "justify-self",
            "center"
        ]
    ]), t("justify-self-end-safe", [
        [
            "justify-self",
            "safe flex-end"
        ]
    ]), t("justify-self-center-safe", [
        [
            "justify-self",
            "safe center"
        ]
    ]), t("justify-self-stretch", [
        [
            "justify-self",
            "stretch"
        ]
    ]);
    for(var _i18 = 0, _iter18 = [
        "auto",
        "hidden",
        "clip",
        "visible",
        "scroll"
    ]; _i18 < _iter18.length; _i18++){
        var s11 = _iter18[_i18];
        t("overflow-".concat(s11), [
            [
                "overflow",
                s11
            ]
        ]), t("overflow-x-".concat(s11), [
            [
                "overflow-x",
                s11
            ]
        ]), t("overflow-y-".concat(s11), [
            [
                "overflow-y",
                s11
            ]
        ]);
    }
    for(var _i19 = 0, _iter19 = [
        "auto",
        "contain",
        "none"
    ]; _i19 < _iter19.length; _i19++){
        var s12 = _iter19[_i19];
        t("overscroll-".concat(s12), [
            [
                "overscroll-behavior",
                s12
            ]
        ]), t("overscroll-x-".concat(s12), [
            [
                "overscroll-behavior-x",
                s12
            ]
        ]), t("overscroll-y-".concat(s12), [
            [
                "overscroll-behavior-y",
                s12
            ]
        ]);
    }
    t("scroll-auto", [
        [
            "scroll-behavior",
            "auto"
        ]
    ]), t("scroll-smooth", [
        [
            "scroll-behavior",
            "smooth"
        ]
    ]), t("truncate", [
        [
            "overflow",
            "hidden"
        ],
        [
            "text-overflow",
            "ellipsis"
        ],
        [
            "white-space",
            "nowrap"
        ]
    ]), t("text-ellipsis", [
        [
            "text-overflow",
            "ellipsis"
        ]
    ]), t("text-clip", [
        [
            "text-overflow",
            "clip"
        ]
    ]), t("hyphens-none", [
        [
            "-webkit-hyphens",
            "none"
        ],
        [
            "hyphens",
            "none"
        ]
    ]), t("hyphens-manual", [
        [
            "-webkit-hyphens",
            "manual"
        ],
        [
            "hyphens",
            "manual"
        ]
    ]), t("hyphens-auto", [
        [
            "-webkit-hyphens",
            "auto"
        ],
        [
            "hyphens",
            "auto"
        ]
    ]), t("whitespace-normal", [
        [
            "white-space",
            "normal"
        ]
    ]), t("whitespace-nowrap", [
        [
            "white-space",
            "nowrap"
        ]
    ]), t("whitespace-pre", [
        [
            "white-space",
            "pre"
        ]
    ]), t("whitespace-pre-line", [
        [
            "white-space",
            "pre-line"
        ]
    ]), t("whitespace-pre-wrap", [
        [
            "white-space",
            "pre-wrap"
        ]
    ]), t("whitespace-break-spaces", [
        [
            "white-space",
            "break-spaces"
        ]
    ]), t("text-wrap", [
        [
            "text-wrap",
            "wrap"
        ]
    ]), t("text-nowrap", [
        [
            "text-wrap",
            "nowrap"
        ]
    ]), t("text-balance", [
        [
            "text-wrap",
            "balance"
        ]
    ]), t("text-pretty", [
        [
            "text-wrap",
            "pretty"
        ]
    ]), t("break-normal", [
        [
            "overflow-wrap",
            "normal"
        ],
        [
            "word-break",
            "normal"
        ]
    ]), t("break-all", [
        [
            "word-break",
            "break-all"
        ]
    ]), t("break-keep", [
        [
            "word-break",
            "keep-all"
        ]
    ]), t("wrap-anywhere", [
        [
            "overflow-wrap",
            "anywhere"
        ]
    ]), t("wrap-break-word", [
        [
            "overflow-wrap",
            "break-word"
        ]
    ]), t("wrap-normal", [
        [
            "overflow-wrap",
            "normal"
        ]
    ]);
    for(var _i20 = 0, _iter20 = [
        [
            "rounded",
            [
                "border-radius"
            ]
        ],
        [
            "rounded-s",
            [
                "border-start-start-radius",
                "border-end-start-radius"
            ]
        ],
        [
            "rounded-e",
            [
                "border-start-end-radius",
                "border-end-end-radius"
            ]
        ],
        [
            "rounded-t",
            [
                "border-top-left-radius",
                "border-top-right-radius"
            ]
        ],
        [
            "rounded-r",
            [
                "border-top-right-radius",
                "border-bottom-right-radius"
            ]
        ],
        [
            "rounded-b",
            [
                "border-bottom-right-radius",
                "border-bottom-left-radius"
            ]
        ],
        [
            "rounded-l",
            [
                "border-top-left-radius",
                "border-bottom-left-radius"
            ]
        ],
        [
            "rounded-ss",
            [
                "border-start-start-radius"
            ]
        ],
        [
            "rounded-se",
            [
                "border-start-end-radius"
            ]
        ],
        [
            "rounded-ee",
            [
                "border-end-end-radius"
            ]
        ],
        [
            "rounded-es",
            [
                "border-end-start-radius"
            ]
        ],
        [
            "rounded-tl",
            [
                "border-top-left-radius"
            ]
        ],
        [
            "rounded-tr",
            [
                "border-top-right-radius"
            ]
        ],
        [
            "rounded-br",
            [
                "border-bottom-right-radius"
            ]
        ],
        [
            "rounded-bl",
            [
                "border-bottom-left-radius"
            ]
        ]
    ]; _i20 < _iter20.length; _i20++)_loop7(_i20, _iter20);
    t("border-solid", [
        [
            "--tw-border-style",
            "solid"
        ],
        [
            "border-style",
            "solid"
        ]
    ]), t("border-dashed", [
        [
            "--tw-border-style",
            "dashed"
        ],
        [
            "border-style",
            "dashed"
        ]
    ]), t("border-dotted", [
        [
            "--tw-border-style",
            "dotted"
        ],
        [
            "border-style",
            "dotted"
        ]
    ]), t("border-double", [
        [
            "--tw-border-style",
            "double"
        ],
        [
            "border-style",
            "double"
        ]
    ]), t("border-hidden", [
        [
            "--tw-border-style",
            "hidden"
        ],
        [
            "border-style",
            "hidden"
        ]
    ]), t("border-none", [
        [
            "--tw-border-style",
            "none"
        ],
        [
            "border-style",
            "none"
        ]
    ]);
    {
        var _loop10 = function(_i21, _iter21) {
            var v = _iter21[_i21];
            t("divide-".concat(v), [
                function() {
                    return q(":where(& > :not(:last-child))", [
                        a("--tw-sort", "divide-style"),
                        a("--tw-border-style", v),
                        a("border-style", v)
                    ]);
                }
            ]);
        };
        var g2 = function g(v, C) {
            r.functional(v, function(b) {
                if (!b.value) {
                    if (b.modifier) return;
                    var _e_get;
                    var T = (_e_get = e.get([
                        "--default-border-width"
                    ])) !== null && _e_get !== void 0 ? _e_get : "1px", D = C.width(T);
                    return D ? [
                        s13()
                    ].concat(_to_consumable_array._(D)) : void 0;
                }
                if (b.value.kind === "arbitrary") {
                    var T1 = b.value.value;
                    var _b_value_dataType;
                    switch((_b_value_dataType = b.value.dataType) !== null && _b_value_dataType !== void 0 ? _b_value_dataType : Q(T1, [
                        "color",
                        "line-width",
                        "length"
                    ])){
                        case "line-width":
                        case "length":
                            {
                                if (b.modifier) return;
                                var E = C.width(T1);
                                return E ? [
                                    s13()
                                ].concat(_to_consumable_array._(E)) : void 0;
                            }
                        default:
                            return T1 = X(T1, b.modifier, e), T1 === null ? void 0 : C.color(T1);
                    }
                }
                {
                    var T2 = te(b, e, [
                        "--border-color",
                        "--color"
                    ]);
                    if (T2) return C.color(T2);
                }
                {
                    if (b.modifier) return;
                    var T3 = e.resolve(b.value.value, [
                        "--border-width"
                    ]);
                    if (T3) {
                        var D1 = C.width(T3);
                        return D1 ? [
                            s13()
                        ].concat(_to_consumable_array._(D1)) : void 0;
                    }
                    if (O(b.value.value)) {
                        var D2 = C.width("".concat(b.value.value, "px"));
                        return D2 ? [
                            s13()
                        ].concat(_to_consumable_array._(D2)) : void 0;
                    }
                }
            }), i(v, function() {
                return [
                    {
                        values: [
                            "current",
                            "inherit",
                            "transparent"
                        ],
                        valueThemeKeys: [
                            "--border-color",
                            "--color"
                        ],
                        modifiers: Array.from({
                            length: 21
                        }, function(b, T) {
                            return "".concat(T * 5);
                        }),
                        hasDefaultValue: !0
                    },
                    {
                        values: [
                            "0",
                            "2",
                            "4",
                            "8"
                        ],
                        valueThemeKeys: [
                            "--border-width"
                        ]
                    }
                ];
            });
        };
        var I = g2;
        var s13 = function() {
            return W([
                $("--tw-border-style", "solid")
            ]);
        };
        var _e_get, _e_get1;
        g2("border", {
            width: function(v) {
                return [
                    a("border-style", "var(--tw-border-style)"),
                    a("border-width", v)
                ];
            },
            color: function(v) {
                return [
                    a("border-color", v)
                ];
            }
        }), g2("border-x", {
            width: function(v) {
                return [
                    a("border-inline-style", "var(--tw-border-style)"),
                    a("border-inline-width", v)
                ];
            },
            color: function(v) {
                return [
                    a("border-inline-color", v)
                ];
            }
        }), g2("border-y", {
            width: function(v) {
                return [
                    a("border-block-style", "var(--tw-border-style)"),
                    a("border-block-width", v)
                ];
            },
            color: function(v) {
                return [
                    a("border-block-color", v)
                ];
            }
        }), g2("border-s", {
            width: function(v) {
                return [
                    a("border-inline-start-style", "var(--tw-border-style)"),
                    a("border-inline-start-width", v)
                ];
            },
            color: function(v) {
                return [
                    a("border-inline-start-color", v)
                ];
            }
        }), g2("border-e", {
            width: function(v) {
                return [
                    a("border-inline-end-style", "var(--tw-border-style)"),
                    a("border-inline-end-width", v)
                ];
            },
            color: function(v) {
                return [
                    a("border-inline-end-color", v)
                ];
            }
        }), g2("border-t", {
            width: function(v) {
                return [
                    a("border-top-style", "var(--tw-border-style)"),
                    a("border-top-width", v)
                ];
            },
            color: function(v) {
                return [
                    a("border-top-color", v)
                ];
            }
        }), g2("border-r", {
            width: function(v) {
                return [
                    a("border-right-style", "var(--tw-border-style)"),
                    a("border-right-width", v)
                ];
            },
            color: function(v) {
                return [
                    a("border-right-color", v)
                ];
            }
        }), g2("border-b", {
            width: function(v) {
                return [
                    a("border-bottom-style", "var(--tw-border-style)"),
                    a("border-bottom-width", v)
                ];
            },
            color: function(v) {
                return [
                    a("border-bottom-color", v)
                ];
            }
        }), g2("border-l", {
            width: function(v) {
                return [
                    a("border-left-style", "var(--tw-border-style)"),
                    a("border-left-width", v)
                ];
            },
            color: function(v) {
                return [
                    a("border-left-color", v)
                ];
            }
        }), n("divide-x", {
            defaultValue: (_e_get = e.get([
                "--default-border-width"
            ])) !== null && _e_get !== void 0 ? _e_get : "1px",
            themeKeys: [
                "--divide-width",
                "--border-width"
            ],
            handleBareValue: function(param) {
                var v = param.value;
                return O(v) ? "".concat(v, "px") : null;
            },
            handle: function(v) {
                return [
                    W([
                        $("--tw-divide-x-reverse", "0")
                    ]),
                    q(":where(& > :not(:last-child))", [
                        a("--tw-sort", "divide-x-width"),
                        s13(),
                        a("--tw-divide-x-reverse", "0"),
                        a("border-inline-style", "var(--tw-border-style)"),
                        a("border-inline-start-width", "calc(".concat(v, " * var(--tw-divide-x-reverse))")),
                        a("border-inline-end-width", "calc(".concat(v, " * calc(1 - var(--tw-divide-x-reverse)))"))
                    ])
                ];
            }
        }), n("divide-y", {
            defaultValue: (_e_get1 = e.get([
                "--default-border-width"
            ])) !== null && _e_get1 !== void 0 ? _e_get1 : "1px",
            themeKeys: [
                "--divide-width",
                "--border-width"
            ],
            handleBareValue: function(param) {
                var v = param.value;
                return O(v) ? "".concat(v, "px") : null;
            },
            handle: function(v) {
                return [
                    W([
                        $("--tw-divide-y-reverse", "0")
                    ]),
                    q(":where(& > :not(:last-child))", [
                        a("--tw-sort", "divide-y-width"),
                        s13(),
                        a("--tw-divide-y-reverse", "0"),
                        a("border-bottom-style", "var(--tw-border-style)"),
                        a("border-top-style", "var(--tw-border-style)"),
                        a("border-top-width", "calc(".concat(v, " * var(--tw-divide-y-reverse))")),
                        a("border-bottom-width", "calc(".concat(v, " * calc(1 - var(--tw-divide-y-reverse)))"))
                    ])
                ];
            }
        }), i("divide-x", function() {
            return [
                {
                    values: [
                        "0",
                        "2",
                        "4",
                        "8"
                    ],
                    valueThemeKeys: [
                        "--divide-width",
                        "--border-width"
                    ],
                    hasDefaultValue: !0
                }
            ];
        }), i("divide-y", function() {
            return [
                {
                    values: [
                        "0",
                        "2",
                        "4",
                        "8"
                    ],
                    valueThemeKeys: [
                        "--divide-width",
                        "--border-width"
                    ],
                    hasDefaultValue: !0
                }
            ];
        }), t("divide-x-reverse", [
            function() {
                return W([
                    $("--tw-divide-x-reverse", "0")
                ]);
            },
            function() {
                return q(":where(& > :not(:last-child))", [
                    a("--tw-divide-x-reverse", "1")
                ]);
            }
        ]), t("divide-y-reverse", [
            function() {
                return W([
                    $("--tw-divide-y-reverse", "0")
                ]);
            },
            function() {
                return q(":where(& > :not(:last-child))", [
                    a("--tw-divide-y-reverse", "1")
                ]);
            }
        ]);
        for(var _i21 = 0, _iter21 = [
            "solid",
            "dashed",
            "dotted",
            "double",
            "none"
        ]; _i21 < _iter21.length; _i21++)_loop10(_i21, _iter21);
    }
    t("bg-auto", [
        [
            "background-size",
            "auto"
        ]
    ]), t("bg-cover", [
        [
            "background-size",
            "cover"
        ]
    ]), t("bg-contain", [
        [
            "background-size",
            "contain"
        ]
    ]), n("bg-size", {
        handle: function handle(s) {
            if (s) return [
                a("background-size", s)
            ];
        }
    }), t("bg-fixed", [
        [
            "background-attachment",
            "fixed"
        ]
    ]), t("bg-local", [
        [
            "background-attachment",
            "local"
        ]
    ]), t("bg-scroll", [
        [
            "background-attachment",
            "scroll"
        ]
    ]), t("bg-top", [
        [
            "background-position",
            "top"
        ]
    ]), t("bg-top-left", [
        [
            "background-position",
            "left top"
        ]
    ]), t("bg-top-right", [
        [
            "background-position",
            "right top"
        ]
    ]), t("bg-bottom", [
        [
            "background-position",
            "bottom"
        ]
    ]), t("bg-bottom-left", [
        [
            "background-position",
            "left bottom"
        ]
    ]), t("bg-bottom-right", [
        [
            "background-position",
            "right bottom"
        ]
    ]), t("bg-left", [
        [
            "background-position",
            "left"
        ]
    ]), t("bg-right", [
        [
            "background-position",
            "right"
        ]
    ]), t("bg-center", [
        [
            "background-position",
            "center"
        ]
    ]), n("bg-position", {
        handle: function handle(s) {
            if (s) return [
                a("background-position", s)
            ];
        }
    }), t("bg-repeat", [
        [
            "background-repeat",
            "repeat"
        ]
    ]), t("bg-no-repeat", [
        [
            "background-repeat",
            "no-repeat"
        ]
    ]), t("bg-repeat-x", [
        [
            "background-repeat",
            "repeat-x"
        ]
    ]), t("bg-repeat-y", [
        [
            "background-repeat",
            "repeat-y"
        ]
    ]), t("bg-repeat-round", [
        [
            "background-repeat",
            "round"
        ]
    ]), t("bg-repeat-space", [
        [
            "background-repeat",
            "space"
        ]
    ]), t("bg-none", [
        [
            "background-image",
            "none"
        ]
    ]);
    {
        var v = function v(T) {
            var D = "in oklab";
            if ((T === null || T === void 0 ? void 0 : T.kind) === "named") switch(T.value){
                case "longer":
                case "shorter":
                case "increasing":
                case "decreasing":
                    D = "in oklch ".concat(T.value, " hue");
                    break;
                default:
                    D = "in ".concat(T.value);
            }
            else (T === null || T === void 0 ? void 0 : T.kind) === "arbitrary" && (D = T.value);
            return D;
        }, C = function C(param) {
            var T = param.negative;
            return function(D) {
                if (!D.value) return;
                if (D.value.kind === "arbitrary") {
                    if (D.modifier) return;
                    var j = D.value.value;
                    var _D_value_dataType;
                    switch((_D_value_dataType = D.value.dataType) !== null && _D_value_dataType !== void 0 ? _D_value_dataType : Q(j, [
                        "angle"
                    ])){
                        case "angle":
                            return j = T ? "calc(".concat(j, " * -1)") : "".concat(j), [
                                a("--tw-gradient-position", j),
                                a("background-image", "linear-gradient(var(--tw-gradient-stops,".concat(j, "))"))
                            ];
                        default:
                            return T ? void 0 : [
                                a("--tw-gradient-position", j),
                                a("background-image", "linear-gradient(var(--tw-gradient-stops,".concat(j, "))"))
                            ];
                    }
                }
                var E = D.value.value;
                if (!T && g3.has(E)) E = g3.get(E);
                else if (O(E)) E = T ? "calc(".concat(E, "deg * -1)") : "".concat(E, "deg");
                else return;
                var R = v(D.modifier);
                return [
                    a("--tw-gradient-position", "".concat(E)),
                    Z("@supports (background-image: linear-gradient(in lab, red, red))", [
                        a("--tw-gradient-position", "".concat(E, " ").concat(R))
                    ]),
                    a("background-image", "linear-gradient(var(--tw-gradient-stops))")
                ];
            };
        }, b = function b(param) {
            var T = param.negative;
            return function(D) {
                var _D_value;
                if (((_D_value = D.value) === null || _D_value === void 0 ? void 0 : _D_value.kind) === "arbitrary") {
                    if (D.modifier) return;
                    var j = D.value.value;
                    return [
                        a("--tw-gradient-position", j),
                        a("background-image", "conic-gradient(var(--tw-gradient-stops,".concat(j, "))"))
                    ];
                }
                var E = v(D.modifier);
                if (!D.value) return [
                    a("--tw-gradient-position", E),
                    a("background-image", "conic-gradient(var(--tw-gradient-stops))")
                ];
                var R = D.value.value;
                if (O(R)) return R = T ? "calc(".concat(R, "deg * -1)") : "".concat(R, "deg"), [
                    a("--tw-gradient-position", "from ".concat(R, " ").concat(E)),
                    a("background-image", "conic-gradient(var(--tw-gradient-stops))")
                ];
            };
        };
        var M = v, Y = C, G = b;
        var s14 = [
            "oklab",
            "oklch",
            "srgb",
            "hsl",
            "longer",
            "shorter",
            "increasing",
            "decreasing"
        ], g3 = new Map([
            [
                "to-t",
                "to top"
            ],
            [
                "to-tr",
                "to top right"
            ],
            [
                "to-r",
                "to right"
            ],
            [
                "to-br",
                "to bottom right"
            ],
            [
                "to-b",
                "to bottom"
            ],
            [
                "to-bl",
                "to bottom left"
            ],
            [
                "to-l",
                "to left"
            ],
            [
                "to-tl",
                "to top left"
            ]
        ]);
        r.functional("-bg-linear", C({
            negative: !0
        })), r.functional("bg-linear", C({
            negative: !1
        })), i("bg-linear", function() {
            return [
                {
                    values: _to_consumable_array._(g3.keys()),
                    modifiers: s14
                },
                {
                    values: [
                        "0",
                        "30",
                        "60",
                        "90",
                        "120",
                        "150",
                        "180",
                        "210",
                        "240",
                        "270",
                        "300",
                        "330"
                    ],
                    supportsNegative: !0,
                    modifiers: s14
                }
            ];
        }), r.functional("-bg-conic", b({
            negative: !0
        })), r.functional("bg-conic", b({
            negative: !1
        })), i("bg-conic", function() {
            return [
                {
                    hasDefaultValue: !0,
                    modifiers: s14
                },
                {
                    values: [
                        "0",
                        "30",
                        "60",
                        "90",
                        "120",
                        "150",
                        "180",
                        "210",
                        "240",
                        "270",
                        "300",
                        "330"
                    ],
                    supportsNegative: !0,
                    modifiers: s14
                }
            ];
        }), r.functional("bg-radial", function(T) {
            if (!T.value) {
                var D = v(T.modifier);
                return [
                    a("--tw-gradient-position", D),
                    a("background-image", "radial-gradient(var(--tw-gradient-stops))")
                ];
            }
            if (T.value.kind === "arbitrary") {
                if (T.modifier) return;
                var D1 = T.value.value;
                return [
                    a("--tw-gradient-position", D1),
                    a("background-image", "radial-gradient(var(--tw-gradient-stops,".concat(D1, "))"))
                ];
            }
        }), i("bg-radial", function() {
            return [
                {
                    hasDefaultValue: !0,
                    modifiers: s14
                }
            ];
        });
    }
    r.functional("bg", function(s) {
        if (s.value) {
            if (s.value.kind === "arbitrary") {
                var g = s.value.value;
                var _s_value_dataType;
                switch((_s_value_dataType = s.value.dataType) !== null && _s_value_dataType !== void 0 ? _s_value_dataType : Q(g, [
                    "image",
                    "color",
                    "percentage",
                    "position",
                    "bg-size",
                    "length",
                    "url"
                ])){
                    case "percentage":
                    case "position":
                        return s.modifier ? void 0 : [
                            a("background-position", g)
                        ];
                    case "bg-size":
                    case "length":
                    case "size":
                        return s.modifier ? void 0 : [
                            a("background-size", g)
                        ];
                    case "image":
                    case "url":
                        return s.modifier ? void 0 : [
                            a("background-image", g)
                        ];
                    default:
                        return g = X(g, s.modifier, e), g === null ? void 0 : [
                            a("background-color", g)
                        ];
                }
            }
            {
                var g1 = te(s, e, [
                    "--background-color",
                    "--color"
                ]);
                if (g1) return [
                    a("background-color", g1)
                ];
            }
            {
                if (s.modifier) return;
                var g2 = e.resolve(s.value.value, [
                    "--background-image"
                ]);
                if (g2) return [
                    a("background-image", g2)
                ];
            }
        }
    }), i("bg", function() {
        return [
            {
                values: [
                    "current",
                    "inherit",
                    "transparent"
                ],
                valueThemeKeys: [
                    "--background-color",
                    "--color"
                ],
                modifiers: Array.from({
                    length: 21
                }, function(s, g) {
                    return "".concat(g * 5);
                })
            },
            {
                values: [],
                valueThemeKeys: [
                    "--background-image"
                ]
            }
        ];
    });
    var h = function() {
        return W([
            $("--tw-gradient-position"),
            $("--tw-gradient-from", "#0000", "<color>"),
            $("--tw-gradient-via", "#0000", "<color>"),
            $("--tw-gradient-to", "#0000", "<color>"),
            $("--tw-gradient-stops"),
            $("--tw-gradient-via-stops"),
            $("--tw-gradient-from-position", "0%", "<length-percentage>"),
            $("--tw-gradient-via-position", "50%", "<length-percentage>"),
            $("--tw-gradient-to-position", "100%", "<length-percentage>")
        ]);
    };
    function w1(s, g) {
        r.functional(s, function(v) {
            if (v.value) {
                if (v.value.kind === "arbitrary") {
                    var C = v.value.value;
                    var _v_value_dataType;
                    switch((_v_value_dataType = v.value.dataType) !== null && _v_value_dataType !== void 0 ? _v_value_dataType : Q(C, [
                        "color",
                        "length",
                        "percentage"
                    ])){
                        case "length":
                        case "percentage":
                            return v.modifier ? void 0 : g.position(C);
                        default:
                            return C = X(C, v.modifier, e), C === null ? void 0 : g.color(C);
                    }
                }
                {
                    var C1 = te(v, e, [
                        "--background-color",
                        "--color"
                    ]);
                    if (C1) return g.color(C1);
                }
                {
                    if (v.modifier) return;
                    var C2 = e.resolve(v.value.value, [
                        "--gradient-color-stop-positions"
                    ]);
                    if (C2) return g.position(C2);
                    if (v.value.value[v.value.value.length - 1] === "%" && O(v.value.value.slice(0, -1))) return g.position(v.value.value);
                }
            }
        }), i(s, function() {
            return [
                {
                    values: [
                        "current",
                        "inherit",
                        "transparent"
                    ],
                    valueThemeKeys: [
                        "--background-color",
                        "--color"
                    ],
                    modifiers: Array.from({
                        length: 21
                    }, function(v, C) {
                        return "".concat(C * 5);
                    })
                },
                {
                    values: Array.from({
                        length: 21
                    }, function(v, C) {
                        return "".concat(C * 5, "%");
                    }),
                    valueThemeKeys: [
                        "--gradient-color-stop-positions"
                    ]
                }
            ];
        });
    }
    w1("from", {
        color: function(s) {
            return [
                h(),
                a("--tw-sort", "--tw-gradient-from"),
                a("--tw-gradient-from", s),
                a("--tw-gradient-stops", "var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))")
            ];
        },
        position: function(s) {
            return [
                h(),
                a("--tw-gradient-from-position", s)
            ];
        }
    }), t("via-none", [
        [
            "--tw-gradient-via-stops",
            "initial"
        ]
    ]), w1("via", {
        color: function(s) {
            return [
                h(),
                a("--tw-sort", "--tw-gradient-via"),
                a("--tw-gradient-via", s),
                a("--tw-gradient-via-stops", "var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position)"),
                a("--tw-gradient-stops", "var(--tw-gradient-via-stops)")
            ];
        },
        position: function(s) {
            return [
                h(),
                a("--tw-gradient-via-position", s)
            ];
        }
    }), w1("to", {
        color: function(s) {
            return [
                h(),
                a("--tw-sort", "--tw-gradient-to"),
                a("--tw-gradient-to", s),
                a("--tw-gradient-stops", "var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))")
            ];
        },
        position: function(s) {
            return [
                h(),
                a("--tw-gradient-to-position", s)
            ];
        }
    }), t("mask-none", [
        [
            "mask-image",
            "none"
        ]
    ]), r.functional("mask", function(s) {
        if (!s.value || s.modifier || s.value.kind !== "arbitrary") return;
        var g = s.value.value;
        var _s_value_dataType;
        switch((_s_value_dataType = s.value.dataType) !== null && _s_value_dataType !== void 0 ? _s_value_dataType : Q(g, [
            "image",
            "percentage",
            "position",
            "bg-size",
            "length",
            "url"
        ])){
            case "percentage":
            case "position":
                return s.modifier ? void 0 : [
                    a("mask-position", g)
                ];
            case "bg-size":
            case "length":
            case "size":
                return [
                    a("mask-size", g)
                ];
            case "image":
            case "url":
            default:
                return [
                    a("mask-image", g)
                ];
        }
    }), t("mask-add", [
        [
            "mask-composite",
            "add"
        ]
    ]), t("mask-subtract", [
        [
            "mask-composite",
            "subtract"
        ]
    ]), t("mask-intersect", [
        [
            "mask-composite",
            "intersect"
        ]
    ]), t("mask-exclude", [
        [
            "mask-composite",
            "exclude"
        ]
    ]), t("mask-alpha", [
        [
            "mask-mode",
            "alpha"
        ]
    ]), t("mask-luminance", [
        [
            "mask-mode",
            "luminance"
        ]
    ]), t("mask-match", [
        [
            "mask-mode",
            "match-source"
        ]
    ]), t("mask-type-alpha", [
        [
            "mask-type",
            "alpha"
        ]
    ]), t("mask-type-luminance", [
        [
            "mask-type",
            "luminance"
        ]
    ]), t("mask-auto", [
        [
            "mask-size",
            "auto"
        ]
    ]), t("mask-cover", [
        [
            "mask-size",
            "cover"
        ]
    ]), t("mask-contain", [
        [
            "mask-size",
            "contain"
        ]
    ]), n("mask-size", {
        handle: function handle(s) {
            if (s) return [
                a("mask-size", s)
            ];
        }
    }), t("mask-top", [
        [
            "mask-position",
            "top"
        ]
    ]), t("mask-top-left", [
        [
            "mask-position",
            "left top"
        ]
    ]), t("mask-top-right", [
        [
            "mask-position",
            "right top"
        ]
    ]), t("mask-bottom", [
        [
            "mask-position",
            "bottom"
        ]
    ]), t("mask-bottom-left", [
        [
            "mask-position",
            "left bottom"
        ]
    ]), t("mask-bottom-right", [
        [
            "mask-position",
            "right bottom"
        ]
    ]), t("mask-left", [
        [
            "mask-position",
            "left"
        ]
    ]), t("mask-right", [
        [
            "mask-position",
            "right"
        ]
    ]), t("mask-center", [
        [
            "mask-position",
            "center"
        ]
    ]), n("mask-position", {
        handle: function handle(s) {
            if (s) return [
                a("mask-position", s)
            ];
        }
    }), t("mask-repeat", [
        [
            "mask-repeat",
            "repeat"
        ]
    ]), t("mask-no-repeat", [
        [
            "mask-repeat",
            "no-repeat"
        ]
    ]), t("mask-repeat-x", [
        [
            "mask-repeat",
            "repeat-x"
        ]
    ]), t("mask-repeat-y", [
        [
            "mask-repeat",
            "repeat-y"
        ]
    ]), t("mask-repeat-round", [
        [
            "mask-repeat",
            "round"
        ]
    ]), t("mask-repeat-space", [
        [
            "mask-repeat",
            "space"
        ]
    ]), t("mask-clip-border", [
        [
            "mask-clip",
            "border-box"
        ]
    ]), t("mask-clip-padding", [
        [
            "mask-clip",
            "padding-box"
        ]
    ]), t("mask-clip-content", [
        [
            "mask-clip",
            "content-box"
        ]
    ]), t("mask-clip-fill", [
        [
            "mask-clip",
            "fill-box"
        ]
    ]), t("mask-clip-stroke", [
        [
            "mask-clip",
            "stroke-box"
        ]
    ]), t("mask-clip-view", [
        [
            "mask-clip",
            "view-box"
        ]
    ]), t("mask-no-clip", [
        [
            "mask-clip",
            "no-clip"
        ]
    ]), t("mask-origin-border", [
        [
            "mask-origin",
            "border-box"
        ]
    ]), t("mask-origin-padding", [
        [
            "mask-origin",
            "padding-box"
        ]
    ]), t("mask-origin-content", [
        [
            "mask-origin",
            "content-box"
        ]
    ]), t("mask-origin-fill", [
        [
            "mask-origin",
            "fill-box"
        ]
    ]), t("mask-origin-stroke", [
        [
            "mask-origin",
            "stroke-box"
        ]
    ]), t("mask-origin-view", [
        [
            "mask-origin",
            "view-box"
        ]
    ]);
    var x = function() {
        return W([
            $("--tw-mask-linear", "linear-gradient(#fff, #fff)"),
            $("--tw-mask-radial", "linear-gradient(#fff, #fff)"),
            $("--tw-mask-conic", "linear-gradient(#fff, #fff)")
        ]);
    };
    function S(s, g) {
        r.functional(s, function(v) {
            if (v.value) {
                if (v.value.kind === "arbitrary") {
                    var C = v.value.value;
                    var _v_value_dataType;
                    switch((_v_value_dataType = v.value.dataType) !== null && _v_value_dataType !== void 0 ? _v_value_dataType : Q(C, [
                        "length",
                        "percentage",
                        "color"
                    ])){
                        case "color":
                            return C = X(C, v.modifier, e), C === null ? void 0 : g.color(C);
                        case "percentage":
                            return v.modifier || !O(C.slice(0, -1)) ? void 0 : g.position(C);
                        default:
                            return v.modifier ? void 0 : g.position(C);
                    }
                }
                {
                    var C1 = te(v, e, [
                        "--background-color",
                        "--color"
                    ]);
                    if (C1) return g.color(C1);
                }
                {
                    if (v.modifier) return;
                    var C2 = Q(v.value.value, [
                        "number",
                        "percentage"
                    ]);
                    if (!C2) return;
                    switch(C2){
                        case "number":
                            {
                                var b = e.resolve(null, [
                                    "--spacing"
                                ]);
                                return !b || !ne(v.value.value) ? void 0 : g.position("calc(".concat(b, " * ").concat(v.value.value, ")"));
                            }
                        case "percentage":
                            return O(v.value.value.slice(0, -1)) ? g.position(v.value.value) : void 0;
                        default:
                            return;
                    }
                }
            }
        }), i(s, function() {
            return [
                {
                    values: [
                        "current",
                        "inherit",
                        "transparent"
                    ],
                    valueThemeKeys: [
                        "--background-color",
                        "--color"
                    ],
                    modifiers: Array.from({
                        length: 21
                    }, function(v, C) {
                        return "".concat(C * 5);
                    })
                },
                {
                    values: Array.from({
                        length: 21
                    }, function(v, C) {
                        return "".concat(C * 5, "%");
                    }),
                    valueThemeKeys: [
                        "--gradient-color-stop-positions"
                    ]
                }
            ];
        }), i(s, function() {
            return [
                {
                    values: Array.from({
                        length: 21
                    }, function(v, C) {
                        return "".concat(C * 5, "%");
                    })
                },
                {
                    values: e.get([
                        "--spacing"
                    ]) ? bt : []
                },
                {
                    values: [
                        "current",
                        "inherit",
                        "transparent"
                    ],
                    valueThemeKeys: [
                        "--background-color",
                        "--color"
                    ],
                    modifiers: Array.from({
                        length: 21
                    }, function(v, C) {
                        return "".concat(C * 5);
                    })
                }
            ];
        });
    }
    var A = function() {
        return W([
            $("--tw-mask-left", "linear-gradient(#fff, #fff)"),
            $("--tw-mask-right", "linear-gradient(#fff, #fff)"),
            $("--tw-mask-bottom", "linear-gradient(#fff, #fff)"),
            $("--tw-mask-top", "linear-gradient(#fff, #fff)")
        ]);
    };
    function y(s, g, v) {
        S(s, {
            color: function color(C) {
                var b = [
                    x(),
                    A(),
                    a("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                    a("mask-composite", "intersect"),
                    a("--tw-mask-linear", "var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top)")
                ];
                for(var _i = 0, _iter = [
                    "top",
                    "right",
                    "bottom",
                    "left"
                ]; _i < _iter.length; _i++){
                    var T = _iter[_i];
                    v[T] && (b.push(a("--tw-mask-".concat(T), "linear-gradient(to ".concat(T, ", var(--tw-mask-").concat(T, "-from-color) var(--tw-mask-").concat(T, "-from-position), var(--tw-mask-").concat(T, "-to-color) var(--tw-mask-").concat(T, "-to-position))"))), b.push(W([
                        $("--tw-mask-".concat(T, "-from-position"), "0%"),
                        $("--tw-mask-".concat(T, "-to-position"), "100%"),
                        $("--tw-mask-".concat(T, "-from-color"), "black"),
                        $("--tw-mask-".concat(T, "-to-color"), "transparent")
                    ])), b.push(a("--tw-mask-".concat(T, "-").concat(g, "-color"), C)));
                }
                return b;
            },
            position: function position(C) {
                var b = [
                    x(),
                    A(),
                    a("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                    a("mask-composite", "intersect"),
                    a("--tw-mask-linear", "var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top)")
                ];
                for(var _i = 0, _iter = [
                    "top",
                    "right",
                    "bottom",
                    "left"
                ]; _i < _iter.length; _i++){
                    var T = _iter[_i];
                    v[T] && (b.push(a("--tw-mask-".concat(T), "linear-gradient(to ".concat(T, ", var(--tw-mask-").concat(T, "-from-color) var(--tw-mask-").concat(T, "-from-position), var(--tw-mask-").concat(T, "-to-color) var(--tw-mask-").concat(T, "-to-position))"))), b.push(W([
                        $("--tw-mask-".concat(T, "-from-position"), "0%"),
                        $("--tw-mask-".concat(T, "-to-position"), "100%"),
                        $("--tw-mask-".concat(T, "-from-color"), "black"),
                        $("--tw-mask-".concat(T, "-to-color"), "transparent")
                    ])), b.push(a("--tw-mask-".concat(T, "-").concat(g, "-position"), C)));
                }
                return b;
            }
        });
    }
    y("mask-x-from", "from", {
        top: !1,
        right: !0,
        bottom: !1,
        left: !0
    }), y("mask-x-to", "to", {
        top: !1,
        right: !0,
        bottom: !1,
        left: !0
    }), y("mask-y-from", "from", {
        top: !0,
        right: !1,
        bottom: !0,
        left: !1
    }), y("mask-y-to", "to", {
        top: !0,
        right: !1,
        bottom: !0,
        left: !1
    }), y("mask-t-from", "from", {
        top: !0,
        right: !1,
        bottom: !1,
        left: !1
    }), y("mask-t-to", "to", {
        top: !0,
        right: !1,
        bottom: !1,
        left: !1
    }), y("mask-r-from", "from", {
        top: !1,
        right: !0,
        bottom: !1,
        left: !1
    }), y("mask-r-to", "to", {
        top: !1,
        right: !0,
        bottom: !1,
        left: !1
    }), y("mask-b-from", "from", {
        top: !1,
        right: !1,
        bottom: !0,
        left: !1
    }), y("mask-b-to", "to", {
        top: !1,
        right: !1,
        bottom: !0,
        left: !1
    }), y("mask-l-from", "from", {
        top: !1,
        right: !1,
        bottom: !1,
        left: !0
    }), y("mask-l-to", "to", {
        top: !1,
        right: !1,
        bottom: !1,
        left: !0
    });
    var K = function() {
        return W([
            $("--tw-mask-linear-position", "0deg"),
            $("--tw-mask-linear-from-position", "0%"),
            $("--tw-mask-linear-to-position", "100%"),
            $("--tw-mask-linear-from-color", "black"),
            $("--tw-mask-linear-to-color", "transparent")
        ]);
    };
    n("mask-linear", {
        defaultValue: null,
        supportsNegative: !0,
        supportsFractions: !1,
        handleBareValue: function handleBareValue(s) {
            return O(s.value) ? "calc(1deg * ".concat(s.value, ")") : null;
        },
        handleNegativeBareValue: function handleNegativeBareValue(s) {
            return O(s.value) ? "calc(1deg * -".concat(s.value, ")") : null;
        },
        handle: function(s) {
            return [
                x(),
                K(),
                a("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                a("mask-composite", "intersect"),
                a("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops, var(--tw-mask-linear-position)))"),
                a("--tw-mask-linear-position", s)
            ];
        }
    }), i("mask-linear", function() {
        return [
            {
                supportsNegative: !0,
                values: [
                    "0",
                    "1",
                    "2",
                    "3",
                    "6",
                    "12",
                    "45",
                    "90",
                    "180"
                ]
            }
        ];
    }), S("mask-linear-from", {
        color: function(s) {
            return [
                x(),
                K(),
                a("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                a("mask-composite", "intersect"),
                a("--tw-mask-linear-stops", "var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"),
                a("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops))"),
                a("--tw-mask-linear-from-color", s)
            ];
        },
        position: function(s) {
            return [
                x(),
                K(),
                a("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                a("mask-composite", "intersect"),
                a("--tw-mask-linear-stops", "var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"),
                a("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops))"),
                a("--tw-mask-linear-from-position", s)
            ];
        }
    }), S("mask-linear-to", {
        color: function(s) {
            return [
                x(),
                K(),
                a("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                a("mask-composite", "intersect"),
                a("--tw-mask-linear-stops", "var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"),
                a("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops))"),
                a("--tw-mask-linear-to-color", s)
            ];
        },
        position: function(s) {
            return [
                x(),
                K(),
                a("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                a("mask-composite", "intersect"),
                a("--tw-mask-linear-stops", "var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"),
                a("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops))"),
                a("--tw-mask-linear-to-position", s)
            ];
        }
    });
    var N = function() {
        return W([
            $("--tw-mask-radial-from-position", "0%"),
            $("--tw-mask-radial-to-position", "100%"),
            $("--tw-mask-radial-from-color", "black"),
            $("--tw-mask-radial-to-color", "transparent"),
            $("--tw-mask-radial-shape", "ellipse"),
            $("--tw-mask-radial-size", "farthest-corner"),
            $("--tw-mask-radial-position", "center")
        ]);
    };
    t("mask-circle", [
        [
            "--tw-mask-radial-shape",
            "circle"
        ]
    ]), t("mask-ellipse", [
        [
            "--tw-mask-radial-shape",
            "ellipse"
        ]
    ]), t("mask-radial-closest-side", [
        [
            "--tw-mask-radial-size",
            "closest-side"
        ]
    ]), t("mask-radial-farthest-side", [
        [
            "--tw-mask-radial-size",
            "farthest-side"
        ]
    ]), t("mask-radial-closest-corner", [
        [
            "--tw-mask-radial-size",
            "closest-corner"
        ]
    ]), t("mask-radial-farthest-corner", [
        [
            "--tw-mask-radial-size",
            "farthest-corner"
        ]
    ]), t("mask-radial-at-top", [
        [
            "--tw-mask-radial-position",
            "top"
        ]
    ]), t("mask-radial-at-top-left", [
        [
            "--tw-mask-radial-position",
            "top left"
        ]
    ]), t("mask-radial-at-top-right", [
        [
            "--tw-mask-radial-position",
            "top right"
        ]
    ]), t("mask-radial-at-bottom", [
        [
            "--tw-mask-radial-position",
            "bottom"
        ]
    ]), t("mask-radial-at-bottom-left", [
        [
            "--tw-mask-radial-position",
            "bottom left"
        ]
    ]), t("mask-radial-at-bottom-right", [
        [
            "--tw-mask-radial-position",
            "bottom right"
        ]
    ]), t("mask-radial-at-left", [
        [
            "--tw-mask-radial-position",
            "left"
        ]
    ]), t("mask-radial-at-right", [
        [
            "--tw-mask-radial-position",
            "right"
        ]
    ]), t("mask-radial-at-center", [
        [
            "--tw-mask-radial-position",
            "center"
        ]
    ]), n("mask-radial-at", {
        defaultValue: null,
        supportsNegative: !1,
        supportsFractions: !1,
        handle: function(s) {
            return [
                a("--tw-mask-radial-position", s)
            ];
        }
    }), n("mask-radial", {
        defaultValue: null,
        supportsNegative: !1,
        supportsFractions: !1,
        handle: function(s) {
            return [
                x(),
                N(),
                a("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                a("mask-composite", "intersect"),
                a("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops, var(--tw-mask-radial-size)))"),
                a("--tw-mask-radial-size", s)
            ];
        }
    }), S("mask-radial-from", {
        color: function(s) {
            return [
                x(),
                N(),
                a("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                a("mask-composite", "intersect"),
                a("--tw-mask-radial-stops", "var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"),
                a("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops))"),
                a("--tw-mask-radial-from-color", s)
            ];
        },
        position: function(s) {
            return [
                x(),
                N(),
                a("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                a("mask-composite", "intersect"),
                a("--tw-mask-radial-stops", "var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"),
                a("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops))"),
                a("--tw-mask-radial-from-position", s)
            ];
        }
    }), S("mask-radial-to", {
        color: function(s) {
            return [
                x(),
                N(),
                a("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                a("mask-composite", "intersect"),
                a("--tw-mask-radial-stops", "var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"),
                a("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops))"),
                a("--tw-mask-radial-to-color", s)
            ];
        },
        position: function(s) {
            return [
                x(),
                N(),
                a("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                a("mask-composite", "intersect"),
                a("--tw-mask-radial-stops", "var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"),
                a("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops))"),
                a("--tw-mask-radial-to-position", s)
            ];
        }
    });
    var P = function() {
        return W([
            $("--tw-mask-conic-position", "0deg"),
            $("--tw-mask-conic-from-position", "0%"),
            $("--tw-mask-conic-to-position", "100%"),
            $("--tw-mask-conic-from-color", "black"),
            $("--tw-mask-conic-to-color", "transparent")
        ]);
    };
    n("mask-conic", {
        defaultValue: null,
        supportsNegative: !0,
        supportsFractions: !1,
        handleBareValue: function handleBareValue(s) {
            return O(s.value) ? "calc(1deg * ".concat(s.value, ")") : null;
        },
        handleNegativeBareValue: function handleNegativeBareValue(s) {
            return O(s.value) ? "calc(1deg * -".concat(s.value, ")") : null;
        },
        handle: function(s) {
            return [
                x(),
                P(),
                a("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                a("mask-composite", "intersect"),
                a("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops, var(--tw-mask-conic-position)))"),
                a("--tw-mask-conic-position", s)
            ];
        }
    }), i("mask-conic", function() {
        return [
            {
                supportsNegative: !0,
                values: [
                    "0",
                    "1",
                    "2",
                    "3",
                    "6",
                    "12",
                    "45",
                    "90",
                    "180"
                ]
            }
        ];
    }), S("mask-conic-from", {
        color: function(s) {
            return [
                x(),
                P(),
                a("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                a("mask-composite", "intersect"),
                a("--tw-mask-conic-stops", "from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"),
                a("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops))"),
                a("--tw-mask-conic-from-color", s)
            ];
        },
        position: function(s) {
            return [
                x(),
                P(),
                a("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                a("mask-composite", "intersect"),
                a("--tw-mask-conic-stops", "from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"),
                a("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops))"),
                a("--tw-mask-conic-from-position", s)
            ];
        }
    }), S("mask-conic-to", {
        color: function(s) {
            return [
                x(),
                P(),
                a("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                a("mask-composite", "intersect"),
                a("--tw-mask-conic-stops", "from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"),
                a("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops))"),
                a("--tw-mask-conic-to-color", s)
            ];
        },
        position: function(s) {
            return [
                x(),
                P(),
                a("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                a("mask-composite", "intersect"),
                a("--tw-mask-conic-stops", "from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"),
                a("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops))"),
                a("--tw-mask-conic-to-position", s)
            ];
        }
    }), t("box-decoration-slice", [
        [
            "-webkit-box-decoration-break",
            "slice"
        ],
        [
            "box-decoration-break",
            "slice"
        ]
    ]), t("box-decoration-clone", [
        [
            "-webkit-box-decoration-break",
            "clone"
        ],
        [
            "box-decoration-break",
            "clone"
        ]
    ]), t("bg-clip-text", [
        [
            "background-clip",
            "text"
        ]
    ]), t("bg-clip-border", [
        [
            "background-clip",
            "border-box"
        ]
    ]), t("bg-clip-padding", [
        [
            "background-clip",
            "padding-box"
        ]
    ]), t("bg-clip-content", [
        [
            "background-clip",
            "content-box"
        ]
    ]), t("bg-origin-border", [
        [
            "background-origin",
            "border-box"
        ]
    ]), t("bg-origin-padding", [
        [
            "background-origin",
            "padding-box"
        ]
    ]), t("bg-origin-content", [
        [
            "background-origin",
            "content-box"
        ]
    ]);
    for(var _i22 = 0, _iter22 = [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity"
    ]; _i22 < _iter22.length; _i22++){
        var s15 = _iter22[_i22];
        t("bg-blend-".concat(s15), [
            [
                "background-blend-mode",
                s15
            ]
        ]), t("mix-blend-".concat(s15), [
            [
                "mix-blend-mode",
                s15
            ]
        ]);
    }
    t("mix-blend-plus-darker", [
        [
            "mix-blend-mode",
            "plus-darker"
        ]
    ]), t("mix-blend-plus-lighter", [
        [
            "mix-blend-mode",
            "plus-lighter"
        ]
    ]), t("fill-none", [
        [
            "fill",
            "none"
        ]
    ]), r.functional("fill", function(s) {
        if (!s.value) return;
        if (s.value.kind === "arbitrary") {
            var v = X(s.value.value, s.modifier, e);
            return v === null ? void 0 : [
                a("fill", v)
            ];
        }
        var g = te(s, e, [
            "--fill",
            "--color"
        ]);
        if (g) return [
            a("fill", g)
        ];
    }), i("fill", function() {
        return [
            {
                values: [
                    "current",
                    "inherit",
                    "transparent"
                ],
                valueThemeKeys: [
                    "--fill",
                    "--color"
                ],
                modifiers: Array.from({
                    length: 21
                }, function(s, g) {
                    return "".concat(g * 5);
                })
            }
        ];
    }), t("stroke-none", [
        [
            "stroke",
            "none"
        ]
    ]), r.functional("stroke", function(s) {
        if (s.value) {
            if (s.value.kind === "arbitrary") {
                var g = s.value.value;
                var _s_value_dataType;
                switch((_s_value_dataType = s.value.dataType) !== null && _s_value_dataType !== void 0 ? _s_value_dataType : Q(g, [
                    "color",
                    "number",
                    "length",
                    "percentage"
                ])){
                    case "number":
                    case "length":
                    case "percentage":
                        return s.modifier ? void 0 : [
                            a("stroke-width", g)
                        ];
                    default:
                        return g = X(s.value.value, s.modifier, e), g === null ? void 0 : [
                            a("stroke", g)
                        ];
                }
            }
            {
                var g1 = te(s, e, [
                    "--stroke",
                    "--color"
                ]);
                if (g1) return [
                    a("stroke", g1)
                ];
            }
            {
                var g2 = e.resolve(s.value.value, [
                    "--stroke-width"
                ]);
                if (g2) return [
                    a("stroke-width", g2)
                ];
                if (O(s.value.value)) return [
                    a("stroke-width", s.value.value)
                ];
            }
        }
    }), i("stroke", function() {
        return [
            {
                values: [
                    "current",
                    "inherit",
                    "transparent"
                ],
                valueThemeKeys: [
                    "--stroke",
                    "--color"
                ],
                modifiers: Array.from({
                    length: 21
                }, function(s, g) {
                    return "".concat(g * 5);
                })
            },
            {
                values: [
                    "0",
                    "1",
                    "2",
                    "3"
                ],
                valueThemeKeys: [
                    "--stroke-width"
                ]
            }
        ];
    }), t("object-contain", [
        [
            "object-fit",
            "contain"
        ]
    ]), t("object-cover", [
        [
            "object-fit",
            "cover"
        ]
    ]), t("object-fill", [
        [
            "object-fit",
            "fill"
        ]
    ]), t("object-none", [
        [
            "object-fit",
            "none"
        ]
    ]), t("object-scale-down", [
        [
            "object-fit",
            "scale-down"
        ]
    ]), n("object", {
        themeKeys: [
            "--object-position"
        ],
        handle: function(s) {
            return [
                a("object-position", s)
            ];
        },
        staticValues: {
            top: [
                a("object-position", "top")
            ],
            "top-left": [
                a("object-position", "left top")
            ],
            "top-right": [
                a("object-position", "right top")
            ],
            bottom: [
                a("object-position", "bottom")
            ],
            "bottom-left": [
                a("object-position", "left bottom")
            ],
            "bottom-right": [
                a("object-position", "right bottom")
            ],
            left: [
                a("object-position", "left")
            ],
            right: [
                a("object-position", "right")
            ],
            center: [
                a("object-position", "center")
            ]
        }
    });
    for(var _i23 = 0, _iter23 = [
        [
            "p",
            "padding"
        ],
        [
            "px",
            "padding-inline"
        ],
        [
            "py",
            "padding-block"
        ],
        [
            "ps",
            "padding-inline-start"
        ],
        [
            "pe",
            "padding-inline-end"
        ],
        [
            "pt",
            "padding-top"
        ],
        [
            "pr",
            "padding-right"
        ],
        [
            "pb",
            "padding-bottom"
        ],
        [
            "pl",
            "padding-left"
        ]
    ]; _i23 < _iter23.length; _i23++)_loop8(_i23, _iter23);
    t("text-left", [
        [
            "text-align",
            "left"
        ]
    ]), t("text-center", [
        [
            "text-align",
            "center"
        ]
    ]), t("text-right", [
        [
            "text-align",
            "right"
        ]
    ]), t("text-justify", [
        [
            "text-align",
            "justify"
        ]
    ]), t("text-start", [
        [
            "text-align",
            "start"
        ]
    ]), t("text-end", [
        [
            "text-align",
            "end"
        ]
    ]), o("indent", [
        "--text-indent",
        "--spacing"
    ], function(s) {
        return [
            a("text-indent", s)
        ];
    }, {
        supportsNegative: !0
    }), t("align-baseline", [
        [
            "vertical-align",
            "baseline"
        ]
    ]), t("align-top", [
        [
            "vertical-align",
            "top"
        ]
    ]), t("align-middle", [
        [
            "vertical-align",
            "middle"
        ]
    ]), t("align-bottom", [
        [
            "vertical-align",
            "bottom"
        ]
    ]), t("align-text-top", [
        [
            "vertical-align",
            "text-top"
        ]
    ]), t("align-text-bottom", [
        [
            "vertical-align",
            "text-bottom"
        ]
    ]), t("align-sub", [
        [
            "vertical-align",
            "sub"
        ]
    ]), t("align-super", [
        [
            "vertical-align",
            "super"
        ]
    ]), n("align", {
        themeKeys: [],
        handle: function(s) {
            return [
                a("vertical-align", s)
            ];
        }
    }), r.functional("font", function(s) {
        if (!(!s.value || s.modifier)) {
            if (s.value.kind === "arbitrary") {
                var g = s.value.value;
                var _s_value_dataType;
                switch((_s_value_dataType = s.value.dataType) !== null && _s_value_dataType !== void 0 ? _s_value_dataType : Q(g, [
                    "number",
                    "generic-name",
                    "family-name"
                ])){
                    case "generic-name":
                    case "family-name":
                        return [
                            a("font-family", g)
                        ];
                    default:
                        return [
                            W([
                                $("--tw-font-weight")
                            ]),
                            a("--tw-font-weight", g),
                            a("font-weight", g)
                        ];
                }
            }
            {
                var g1 = e.resolveWith(s.value.value, [
                    "--font"
                ], [
                    "--font-feature-settings",
                    "--font-variation-settings"
                ]);
                if (g1) {
                    var _g = _sliced_to_array._(g1, 2), v = _g[0], tmp = _g[1], C = tmp === void 0 ? {} : tmp;
                    return [
                        a("font-family", v),
                        a("font-feature-settings", C["--font-feature-settings"]),
                        a("font-variation-settings", C["--font-variation-settings"])
                    ];
                }
            }
            {
                var g2 = e.resolve(s.value.value, [
                    "--font-weight"
                ]);
                if (g2) return [
                    W([
                        $("--tw-font-weight")
                    ]),
                    a("--tw-font-weight", g2),
                    a("font-weight", g2)
                ];
            }
        }
    }), i("font", function() {
        return [
            {
                values: [],
                valueThemeKeys: [
                    "--font"
                ]
            },
            {
                values: [],
                valueThemeKeys: [
                    "--font-weight"
                ]
            }
        ];
    }), t("uppercase", [
        [
            "text-transform",
            "uppercase"
        ]
    ]), t("lowercase", [
        [
            "text-transform",
            "lowercase"
        ]
    ]), t("capitalize", [
        [
            "text-transform",
            "capitalize"
        ]
    ]), t("normal-case", [
        [
            "text-transform",
            "none"
        ]
    ]), t("italic", [
        [
            "font-style",
            "italic"
        ]
    ]), t("not-italic", [
        [
            "font-style",
            "normal"
        ]
    ]), t("underline", [
        [
            "text-decoration-line",
            "underline"
        ]
    ]), t("overline", [
        [
            "text-decoration-line",
            "overline"
        ]
    ]), t("line-through", [
        [
            "text-decoration-line",
            "line-through"
        ]
    ]), t("no-underline", [
        [
            "text-decoration-line",
            "none"
        ]
    ]), t("font-stretch-normal", [
        [
            "font-stretch",
            "normal"
        ]
    ]), t("font-stretch-ultra-condensed", [
        [
            "font-stretch",
            "ultra-condensed"
        ]
    ]), t("font-stretch-extra-condensed", [
        [
            "font-stretch",
            "extra-condensed"
        ]
    ]), t("font-stretch-condensed", [
        [
            "font-stretch",
            "condensed"
        ]
    ]), t("font-stretch-semi-condensed", [
        [
            "font-stretch",
            "semi-condensed"
        ]
    ]), t("font-stretch-semi-expanded", [
        [
            "font-stretch",
            "semi-expanded"
        ]
    ]), t("font-stretch-expanded", [
        [
            "font-stretch",
            "expanded"
        ]
    ]), t("font-stretch-extra-expanded", [
        [
            "font-stretch",
            "extra-expanded"
        ]
    ]), t("font-stretch-ultra-expanded", [
        [
            "font-stretch",
            "ultra-expanded"
        ]
    ]), n("font-stretch", {
        handleBareValue: function(param) {
            var s = param.value;
            if (!s.endsWith("%")) return null;
            var g = Number(s.slice(0, -1));
            return !O(g) || Number.isNaN(g) || g < 50 || g > 200 ? null : s;
        },
        handle: function(s) {
            return [
                a("font-stretch", s)
            ];
        }
    }), i("font-stretch", function() {
        return [
            {
                values: [
                    "50%",
                    "75%",
                    "90%",
                    "95%",
                    "100%",
                    "105%",
                    "110%",
                    "125%",
                    "150%",
                    "200%"
                ]
            }
        ];
    }), l("placeholder", {
        themeKeys: [
            "--background-color",
            "--color"
        ],
        handle: function(s) {
            return [
                q("&::placeholder", [
                    a("--tw-sort", "placeholder-color"),
                    a("color", s)
                ])
            ];
        }
    }), t("decoration-solid", [
        [
            "text-decoration-style",
            "solid"
        ]
    ]), t("decoration-double", [
        [
            "text-decoration-style",
            "double"
        ]
    ]), t("decoration-dotted", [
        [
            "text-decoration-style",
            "dotted"
        ]
    ]), t("decoration-dashed", [
        [
            "text-decoration-style",
            "dashed"
        ]
    ]), t("decoration-wavy", [
        [
            "text-decoration-style",
            "wavy"
        ]
    ]), t("decoration-auto", [
        [
            "text-decoration-thickness",
            "auto"
        ]
    ]), t("decoration-from-font", [
        [
            "text-decoration-thickness",
            "from-font"
        ]
    ]), r.functional("decoration", function(s) {
        if (s.value) {
            if (s.value.kind === "arbitrary") {
                var g = s.value.value;
                var _s_value_dataType;
                switch((_s_value_dataType = s.value.dataType) !== null && _s_value_dataType !== void 0 ? _s_value_dataType : Q(g, [
                    "color",
                    "length",
                    "percentage"
                ])){
                    case "length":
                    case "percentage":
                        return s.modifier ? void 0 : [
                            a("text-decoration-thickness", g)
                        ];
                    default:
                        return g = X(g, s.modifier, e), g === null ? void 0 : [
                            a("text-decoration-color", g)
                        ];
                }
            }
            {
                var g1 = e.resolve(s.value.value, [
                    "--text-decoration-thickness"
                ]);
                if (g1) return s.modifier ? void 0 : [
                    a("text-decoration-thickness", g1)
                ];
                if (O(s.value.value)) return s.modifier ? void 0 : [
                    a("text-decoration-thickness", "".concat(s.value.value, "px"))
                ];
            }
            {
                var g2 = te(s, e, [
                    "--text-decoration-color",
                    "--color"
                ]);
                if (g2) return [
                    a("text-decoration-color", g2)
                ];
            }
        }
    }), i("decoration", function() {
        return [
            {
                values: [
                    "current",
                    "inherit",
                    "transparent"
                ],
                valueThemeKeys: [
                    "--text-decoration-color",
                    "--color"
                ],
                modifiers: Array.from({
                    length: 21
                }, function(s, g) {
                    return "".concat(g * 5);
                })
            },
            {
                values: [
                    "0",
                    "1",
                    "2"
                ],
                valueThemeKeys: [
                    "--text-decoration-thickness"
                ]
            }
        ];
    }), n("animate", {
        themeKeys: [
            "--animate"
        ],
        handle: function(s) {
            return [
                a("animation", s)
            ];
        },
        staticValues: {
            none: [
                a("animation", "none")
            ]
        }
    });
    {
        var s16 = [
            "var(--tw-blur,)",
            "var(--tw-brightness,)",
            "var(--tw-contrast,)",
            "var(--tw-grayscale,)",
            "var(--tw-hue-rotate,)",
            "var(--tw-invert,)",
            "var(--tw-saturate,)",
            "var(--tw-sepia,)",
            "var(--tw-drop-shadow,)"
        ].join(" "), g4 = [
            "var(--tw-backdrop-blur,)",
            "var(--tw-backdrop-brightness,)",
            "var(--tw-backdrop-contrast,)",
            "var(--tw-backdrop-grayscale,)",
            "var(--tw-backdrop-hue-rotate,)",
            "var(--tw-backdrop-invert,)",
            "var(--tw-backdrop-opacity,)",
            "var(--tw-backdrop-saturate,)",
            "var(--tw-backdrop-sepia,)"
        ].join(" "), v1 = function() {
            return W([
                $("--tw-blur"),
                $("--tw-brightness"),
                $("--tw-contrast"),
                $("--tw-grayscale"),
                $("--tw-hue-rotate"),
                $("--tw-invert"),
                $("--tw-opacity"),
                $("--tw-saturate"),
                $("--tw-sepia"),
                $("--tw-drop-shadow"),
                $("--tw-drop-shadow-color"),
                $("--tw-drop-shadow-alpha", "100%", "<percentage>"),
                $("--tw-drop-shadow-size")
            ]);
        }, C1 = function() {
            return W([
                $("--tw-backdrop-blur"),
                $("--tw-backdrop-brightness"),
                $("--tw-backdrop-contrast"),
                $("--tw-backdrop-grayscale"),
                $("--tw-backdrop-hue-rotate"),
                $("--tw-backdrop-invert"),
                $("--tw-backdrop-opacity"),
                $("--tw-backdrop-saturate"),
                $("--tw-backdrop-sepia")
            ]);
        };
        r.functional("filter", function(b) {
            if (!b.modifier) {
                if (b.value === null) return [
                    v1(),
                    a("filter", s16)
                ];
                if (b.value.kind === "arbitrary") return [
                    a("filter", b.value.value)
                ];
                switch(b.value.value){
                    case "none":
                        return [
                            a("filter", "none")
                        ];
                }
            }
        }), r.functional("backdrop-filter", function(b) {
            if (!b.modifier) {
                if (b.value === null) return [
                    C1(),
                    a("-webkit-backdrop-filter", g4),
                    a("backdrop-filter", g4)
                ];
                if (b.value.kind === "arbitrary") return [
                    a("-webkit-backdrop-filter", b.value.value),
                    a("backdrop-filter", b.value.value)
                ];
                switch(b.value.value){
                    case "none":
                        return [
                            a("-webkit-backdrop-filter", "none"),
                            a("backdrop-filter", "none")
                        ];
                }
            }
        }), n("blur", {
            themeKeys: [
                "--blur"
            ],
            handle: function(b) {
                return [
                    v1(),
                    a("--tw-blur", "blur(".concat(b, ")")),
                    a("filter", s16)
                ];
            },
            staticValues: {
                none: [
                    v1(),
                    a("--tw-blur", " "),
                    a("filter", s16)
                ]
            }
        }), n("backdrop-blur", {
            themeKeys: [
                "--backdrop-blur",
                "--blur"
            ],
            handle: function(b) {
                return [
                    C1(),
                    a("--tw-backdrop-blur", "blur(".concat(b, ")")),
                    a("-webkit-backdrop-filter", g4),
                    a("backdrop-filter", g4)
                ];
            },
            staticValues: {
                none: [
                    C1(),
                    a("--tw-backdrop-blur", " "),
                    a("-webkit-backdrop-filter", g4),
                    a("backdrop-filter", g4)
                ]
            }
        }), n("brightness", {
            themeKeys: [
                "--brightness"
            ],
            handleBareValue: function(param) {
                var b = param.value;
                return O(b) ? "".concat(b, "%") : null;
            },
            handle: function(b) {
                return [
                    v1(),
                    a("--tw-brightness", "brightness(".concat(b, ")")),
                    a("filter", s16)
                ];
            }
        }), n("backdrop-brightness", {
            themeKeys: [
                "--backdrop-brightness",
                "--brightness"
            ],
            handleBareValue: function(param) {
                var b = param.value;
                return O(b) ? "".concat(b, "%") : null;
            },
            handle: function(b) {
                return [
                    C1(),
                    a("--tw-backdrop-brightness", "brightness(".concat(b, ")")),
                    a("-webkit-backdrop-filter", g4),
                    a("backdrop-filter", g4)
                ];
            }
        }), i("brightness", function() {
            return [
                {
                    values: [
                        "0",
                        "50",
                        "75",
                        "90",
                        "95",
                        "100",
                        "105",
                        "110",
                        "125",
                        "150",
                        "200"
                    ],
                    valueThemeKeys: [
                        "--brightness"
                    ]
                }
            ];
        }), i("backdrop-brightness", function() {
            return [
                {
                    values: [
                        "0",
                        "50",
                        "75",
                        "90",
                        "95",
                        "100",
                        "105",
                        "110",
                        "125",
                        "150",
                        "200"
                    ],
                    valueThemeKeys: [
                        "--backdrop-brightness",
                        "--brightness"
                    ]
                }
            ];
        }), n("contrast", {
            themeKeys: [
                "--contrast"
            ],
            handleBareValue: function(param) {
                var b = param.value;
                return O(b) ? "".concat(b, "%") : null;
            },
            handle: function(b) {
                return [
                    v1(),
                    a("--tw-contrast", "contrast(".concat(b, ")")),
                    a("filter", s16)
                ];
            }
        }), n("backdrop-contrast", {
            themeKeys: [
                "--backdrop-contrast",
                "--contrast"
            ],
            handleBareValue: function(param) {
                var b = param.value;
                return O(b) ? "".concat(b, "%") : null;
            },
            handle: function(b) {
                return [
                    C1(),
                    a("--tw-backdrop-contrast", "contrast(".concat(b, ")")),
                    a("-webkit-backdrop-filter", g4),
                    a("backdrop-filter", g4)
                ];
            }
        }), i("contrast", function() {
            return [
                {
                    values: [
                        "0",
                        "50",
                        "75",
                        "100",
                        "125",
                        "150",
                        "200"
                    ],
                    valueThemeKeys: [
                        "--contrast"
                    ]
                }
            ];
        }), i("backdrop-contrast", function() {
            return [
                {
                    values: [
                        "0",
                        "50",
                        "75",
                        "100",
                        "125",
                        "150",
                        "200"
                    ],
                    valueThemeKeys: [
                        "--backdrop-contrast",
                        "--contrast"
                    ]
                }
            ];
        }), n("grayscale", {
            themeKeys: [
                "--grayscale"
            ],
            handleBareValue: function(param) {
                var b = param.value;
                return O(b) ? "".concat(b, "%") : null;
            },
            defaultValue: "100%",
            handle: function(b) {
                return [
                    v1(),
                    a("--tw-grayscale", "grayscale(".concat(b, ")")),
                    a("filter", s16)
                ];
            }
        }), n("backdrop-grayscale", {
            themeKeys: [
                "--backdrop-grayscale",
                "--grayscale"
            ],
            handleBareValue: function(param) {
                var b = param.value;
                return O(b) ? "".concat(b, "%") : null;
            },
            defaultValue: "100%",
            handle: function(b) {
                return [
                    C1(),
                    a("--tw-backdrop-grayscale", "grayscale(".concat(b, ")")),
                    a("-webkit-backdrop-filter", g4),
                    a("backdrop-filter", g4)
                ];
            }
        }), i("grayscale", function() {
            return [
                {
                    values: [
                        "0",
                        "25",
                        "50",
                        "75",
                        "100"
                    ],
                    valueThemeKeys: [
                        "--grayscale"
                    ],
                    hasDefaultValue: !0
                }
            ];
        }), i("backdrop-grayscale", function() {
            return [
                {
                    values: [
                        "0",
                        "25",
                        "50",
                        "75",
                        "100"
                    ],
                    valueThemeKeys: [
                        "--backdrop-grayscale",
                        "--grayscale"
                    ],
                    hasDefaultValue: !0
                }
            ];
        }), n("hue-rotate", {
            supportsNegative: !0,
            themeKeys: [
                "--hue-rotate"
            ],
            handleBareValue: function(param) {
                var b = param.value;
                return O(b) ? "".concat(b, "deg") : null;
            },
            handle: function(b) {
                return [
                    v1(),
                    a("--tw-hue-rotate", "hue-rotate(".concat(b, ")")),
                    a("filter", s16)
                ];
            }
        }), n("backdrop-hue-rotate", {
            supportsNegative: !0,
            themeKeys: [
                "--backdrop-hue-rotate",
                "--hue-rotate"
            ],
            handleBareValue: function(param) {
                var b = param.value;
                return O(b) ? "".concat(b, "deg") : null;
            },
            handle: function(b) {
                return [
                    C1(),
                    a("--tw-backdrop-hue-rotate", "hue-rotate(".concat(b, ")")),
                    a("-webkit-backdrop-filter", g4),
                    a("backdrop-filter", g4)
                ];
            }
        }), i("hue-rotate", function() {
            return [
                {
                    values: [
                        "0",
                        "15",
                        "30",
                        "60",
                        "90",
                        "180"
                    ],
                    valueThemeKeys: [
                        "--hue-rotate"
                    ]
                }
            ];
        }), i("backdrop-hue-rotate", function() {
            return [
                {
                    values: [
                        "0",
                        "15",
                        "30",
                        "60",
                        "90",
                        "180"
                    ],
                    valueThemeKeys: [
                        "--backdrop-hue-rotate",
                        "--hue-rotate"
                    ]
                }
            ];
        }), n("invert", {
            themeKeys: [
                "--invert"
            ],
            handleBareValue: function(param) {
                var b = param.value;
                return O(b) ? "".concat(b, "%") : null;
            },
            defaultValue: "100%",
            handle: function(b) {
                return [
                    v1(),
                    a("--tw-invert", "invert(".concat(b, ")")),
                    a("filter", s16)
                ];
            }
        }), n("backdrop-invert", {
            themeKeys: [
                "--backdrop-invert",
                "--invert"
            ],
            handleBareValue: function(param) {
                var b = param.value;
                return O(b) ? "".concat(b, "%") : null;
            },
            defaultValue: "100%",
            handle: function(b) {
                return [
                    C1(),
                    a("--tw-backdrop-invert", "invert(".concat(b, ")")),
                    a("-webkit-backdrop-filter", g4),
                    a("backdrop-filter", g4)
                ];
            }
        }), i("invert", function() {
            return [
                {
                    values: [
                        "0",
                        "25",
                        "50",
                        "75",
                        "100"
                    ],
                    valueThemeKeys: [
                        "--invert"
                    ],
                    hasDefaultValue: !0
                }
            ];
        }), i("backdrop-invert", function() {
            return [
                {
                    values: [
                        "0",
                        "25",
                        "50",
                        "75",
                        "100"
                    ],
                    valueThemeKeys: [
                        "--backdrop-invert",
                        "--invert"
                    ],
                    hasDefaultValue: !0
                }
            ];
        }), n("saturate", {
            themeKeys: [
                "--saturate"
            ],
            handleBareValue: function(param) {
                var b = param.value;
                return O(b) ? "".concat(b, "%") : null;
            },
            handle: function(b) {
                return [
                    v1(),
                    a("--tw-saturate", "saturate(".concat(b, ")")),
                    a("filter", s16)
                ];
            }
        }), n("backdrop-saturate", {
            themeKeys: [
                "--backdrop-saturate",
                "--saturate"
            ],
            handleBareValue: function(param) {
                var b = param.value;
                return O(b) ? "".concat(b, "%") : null;
            },
            handle: function(b) {
                return [
                    C1(),
                    a("--tw-backdrop-saturate", "saturate(".concat(b, ")")),
                    a("-webkit-backdrop-filter", g4),
                    a("backdrop-filter", g4)
                ];
            }
        }), i("saturate", function() {
            return [
                {
                    values: [
                        "0",
                        "50",
                        "100",
                        "150",
                        "200"
                    ],
                    valueThemeKeys: [
                        "--saturate"
                    ]
                }
            ];
        }), i("backdrop-saturate", function() {
            return [
                {
                    values: [
                        "0",
                        "50",
                        "100",
                        "150",
                        "200"
                    ],
                    valueThemeKeys: [
                        "--backdrop-saturate",
                        "--saturate"
                    ]
                }
            ];
        }), n("sepia", {
            themeKeys: [
                "--sepia"
            ],
            handleBareValue: function(param) {
                var b = param.value;
                return O(b) ? "".concat(b, "%") : null;
            },
            defaultValue: "100%",
            handle: function(b) {
                return [
                    v1(),
                    a("--tw-sepia", "sepia(".concat(b, ")")),
                    a("filter", s16)
                ];
            }
        }), n("backdrop-sepia", {
            themeKeys: [
                "--backdrop-sepia",
                "--sepia"
            ],
            handleBareValue: function(param) {
                var b = param.value;
                return O(b) ? "".concat(b, "%") : null;
            },
            defaultValue: "100%",
            handle: function(b) {
                return [
                    C1(),
                    a("--tw-backdrop-sepia", "sepia(".concat(b, ")")),
                    a("-webkit-backdrop-filter", g4),
                    a("backdrop-filter", g4)
                ];
            }
        }), i("sepia", function() {
            return [
                {
                    values: [
                        "0",
                        "50",
                        "100"
                    ],
                    valueThemeKeys: [
                        "--sepia"
                    ],
                    hasDefaultValue: !0
                }
            ];
        }), i("backdrop-sepia", function() {
            return [
                {
                    values: [
                        "0",
                        "50",
                        "100"
                    ],
                    valueThemeKeys: [
                        "--backdrop-sepia",
                        "--sepia"
                    ],
                    hasDefaultValue: !0
                }
            ];
        }), t("drop-shadow-none", [
            v1,
            [
                "--tw-drop-shadow",
                " "
            ],
            [
                "filter",
                s16
            ]
        ]), r.functional("drop-shadow", function(b) {
            var T;
            if (b.modifier && (b.modifier.kind === "arbitrary" ? T = b.modifier.value : O(b.modifier.value) && (T = "".concat(b.modifier.value, "%"))), !b.value) {
                var D = e.get([
                    "--drop-shadow"
                ]), E = e.resolve(null, [
                    "--drop-shadow"
                ]);
                return D === null || E === null ? void 0 : [
                    v1(),
                    a("--tw-drop-shadow-alpha", T)
                ].concat(_to_consumable_array._(yt("--tw-drop-shadow-size", D, T, function(R) {
                    return "var(--tw-drop-shadow-color, ".concat(R, ")");
                })), [
                    a("--tw-drop-shadow", L(E, ",").map(function(R) {
                        return "drop-shadow(".concat(R, ")");
                    }).join(" ")),
                    a("filter", s16)
                ]);
            }
            if (b.value.kind === "arbitrary") {
                var D1 = b.value.value;
                var _b_value_dataType;
                switch((_b_value_dataType = b.value.dataType) !== null && _b_value_dataType !== void 0 ? _b_value_dataType : Q(D1, [
                    "color"
                ])){
                    case "color":
                        return D1 = X(D1, b.modifier, e), D1 === null ? void 0 : [
                            v1(),
                            a("--tw-drop-shadow-color", J(D1, "var(--tw-drop-shadow-alpha)")),
                            a("--tw-drop-shadow", "var(--tw-drop-shadow-size)")
                        ];
                    default:
                        return b.modifier && !T ? void 0 : [
                            v1(),
                            a("--tw-drop-shadow-alpha", T)
                        ].concat(_to_consumable_array._(yt("--tw-drop-shadow-size", D1, T, function(R) {
                            return "var(--tw-drop-shadow-color, ".concat(R, ")");
                        })), [
                            a("--tw-drop-shadow", "var(--tw-drop-shadow-size)"),
                            a("filter", s16)
                        ]);
                }
            }
            {
                var D2 = e.get([
                    "--drop-shadow-".concat(b.value.value)
                ]), E1 = e.resolve(b.value.value, [
                    "--drop-shadow"
                ]);
                if (D2 && E1) return b.modifier && !T ? void 0 : T ? [
                    v1(),
                    a("--tw-drop-shadow-alpha", T)
                ].concat(_to_consumable_array._(yt("--tw-drop-shadow-size", D2, T, function(R) {
                    return "var(--tw-drop-shadow-color, ".concat(R, ")");
                })), [
                    a("--tw-drop-shadow", "var(--tw-drop-shadow-size)"),
                    a("filter", s16)
                ]) : [
                    v1(),
                    a("--tw-drop-shadow-alpha", T)
                ].concat(_to_consumable_array._(yt("--tw-drop-shadow-size", D2, T, function(R) {
                    return "var(--tw-drop-shadow-color, ".concat(R, ")");
                })), [
                    a("--tw-drop-shadow", L(E1, ",").map(function(R) {
                        return "drop-shadow(".concat(R, ")");
                    }).join(" ")),
                    a("filter", s16)
                ]);
            }
            {
                var D3 = te(b, e, [
                    "--drop-shadow-color",
                    "--color"
                ]);
                if (D3) return D3 === "inherit" ? [
                    v1(),
                    a("--tw-drop-shadow-color", "inherit"),
                    a("--tw-drop-shadow", "var(--tw-drop-shadow-size)")
                ] : [
                    v1(),
                    a("--tw-drop-shadow-color", J(D3, "var(--tw-drop-shadow-alpha)")),
                    a("--tw-drop-shadow", "var(--tw-drop-shadow-size)")
                ];
            }
        }), i("drop-shadow", function() {
            return [
                {
                    values: [
                        "current",
                        "inherit",
                        "transparent"
                    ],
                    valueThemeKeys: [
                        "--drop-shadow-color",
                        "--color"
                    ],
                    modifiers: Array.from({
                        length: 21
                    }, function(b, T) {
                        return "".concat(T * 5);
                    })
                },
                {
                    valueThemeKeys: [
                        "--drop-shadow"
                    ]
                }
            ];
        }), n("backdrop-opacity", {
            themeKeys: [
                "--backdrop-opacity",
                "--opacity"
            ],
            handleBareValue: function(param) {
                var b = param.value;
                return wt(b) ? "".concat(b, "%") : null;
            },
            handle: function(b) {
                return [
                    C1(),
                    a("--tw-backdrop-opacity", "opacity(".concat(b, ")")),
                    a("-webkit-backdrop-filter", g4),
                    a("backdrop-filter", g4)
                ];
            }
        }), i("backdrop-opacity", function() {
            return [
                {
                    values: Array.from({
                        length: 21
                    }, function(b, T) {
                        return "".concat(T * 5);
                    }),
                    valueThemeKeys: [
                        "--backdrop-opacity",
                        "--opacity"
                    ]
                }
            ];
        });
    }
    {
        var _e_resolve, _e_resolve1;
        var s17 = "var(--tw-ease, ".concat((_e_resolve = e.resolve(null, [
            "--default-transition-timing-function"
        ])) !== null && _e_resolve !== void 0 ? _e_resolve : "ease", ")"), g5 = "var(--tw-duration, ".concat((_e_resolve1 = e.resolve(null, [
            "--default-transition-duration"
        ])) !== null && _e_resolve1 !== void 0 ? _e_resolve1 : "0s", ")");
        n("transition", {
            defaultValue: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, content-visibility, overlay, pointer-events",
            themeKeys: [
                "--transition-property"
            ],
            handle: function(v) {
                return [
                    a("transition-property", v),
                    a("transition-timing-function", s17),
                    a("transition-duration", g5)
                ];
            },
            staticValues: {
                none: [
                    a("transition-property", "none")
                ],
                all: [
                    a("transition-property", "all"),
                    a("transition-timing-function", s17),
                    a("transition-duration", g5)
                ],
                colors: [
                    a("transition-property", "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to"),
                    a("transition-timing-function", s17),
                    a("transition-duration", g5)
                ],
                opacity: [
                    a("transition-property", "opacity"),
                    a("transition-timing-function", s17),
                    a("transition-duration", g5)
                ],
                shadow: [
                    a("transition-property", "box-shadow"),
                    a("transition-timing-function", s17),
                    a("transition-duration", g5)
                ],
                transform: [
                    a("transition-property", "transform, translate, scale, rotate"),
                    a("transition-timing-function", s17),
                    a("transition-duration", g5)
                ]
            }
        }), t("transition-discrete", [
            [
                "transition-behavior",
                "allow-discrete"
            ]
        ]), t("transition-normal", [
            [
                "transition-behavior",
                "normal"
            ]
        ]), n("delay", {
            handleBareValue: function(param) {
                var v = param.value;
                return O(v) ? "".concat(v, "ms") : null;
            },
            themeKeys: [
                "--transition-delay"
            ],
            handle: function(v) {
                return [
                    a("transition-delay", v)
                ];
            }
        });
        {
            var v2 = function() {
                return W([
                    $("--tw-duration")
                ]);
            };
            t("duration-initial", [
                v2,
                [
                    "--tw-duration",
                    "initial"
                ]
            ]), r.functional("duration", function(C) {
                if (C.modifier || !C.value) return;
                var b = null;
                var _C_value_fraction;
                if (C.value.kind === "arbitrary" ? b = C.value.value : (b = e.resolve((_C_value_fraction = C.value.fraction) !== null && _C_value_fraction !== void 0 ? _C_value_fraction : C.value.value, [
                    "--transition-duration"
                ]), b === null && O(C.value.value) && (b = "".concat(C.value.value, "ms"))), b !== null) return [
                    v2(),
                    a("--tw-duration", b),
                    a("transition-duration", b)
                ];
            });
        }
        i("delay", function() {
            return [
                {
                    values: [
                        "75",
                        "100",
                        "150",
                        "200",
                        "300",
                        "500",
                        "700",
                        "1000"
                    ],
                    valueThemeKeys: [
                        "--transition-delay"
                    ]
                }
            ];
        }), i("duration", function() {
            return [
                {
                    values: [
                        "75",
                        "100",
                        "150",
                        "200",
                        "300",
                        "500",
                        "700",
                        "1000"
                    ],
                    valueThemeKeys: [
                        "--transition-duration"
                    ]
                }
            ];
        });
    }
    {
        var s18 = function() {
            return W([
                $("--tw-ease")
            ]);
        };
        n("ease", {
            themeKeys: [
                "--ease"
            ],
            handle: function(g) {
                return [
                    s18(),
                    a("--tw-ease", g),
                    a("transition-timing-function", g)
                ];
            },
            staticValues: {
                initial: [
                    s18(),
                    a("--tw-ease", "initial")
                ],
                linear: [
                    s18(),
                    a("--tw-ease", "linear"),
                    a("transition-timing-function", "linear")
                ]
            }
        });
    }
    t("will-change-auto", [
        [
            "will-change",
            "auto"
        ]
    ]), t("will-change-scroll", [
        [
            "will-change",
            "scroll-position"
        ]
    ]), t("will-change-contents", [
        [
            "will-change",
            "contents"
        ]
    ]), t("will-change-transform", [
        [
            "will-change",
            "transform"
        ]
    ]), n("will-change", {
        themeKeys: [],
        handle: function(s) {
            return [
                a("will-change", s)
            ];
        }
    }), t("content-none", [
        [
            "--tw-content",
            "none"
        ],
        [
            "content",
            "none"
        ]
    ]), n("content", {
        themeKeys: [
            "--content"
        ],
        handle: function(s) {
            return [
                W([
                    $("--tw-content", '""')
                ]),
                a("--tw-content", s),
                a("content", "var(--tw-content)")
            ];
        }
    });
    {
        var s19 = "var(--tw-contain-size,) var(--tw-contain-layout,) var(--tw-contain-paint,) var(--tw-contain-style,)", g6 = function() {
            return W([
                $("--tw-contain-size"),
                $("--tw-contain-layout"),
                $("--tw-contain-paint"),
                $("--tw-contain-style")
            ]);
        };
        t("contain-none", [
            [
                "contain",
                "none"
            ]
        ]), t("contain-content", [
            [
                "contain",
                "content"
            ]
        ]), t("contain-strict", [
            [
                "contain",
                "strict"
            ]
        ]), t("contain-size", [
            g6,
            [
                "--tw-contain-size",
                "size"
            ],
            [
                "contain",
                s19
            ]
        ]), t("contain-inline-size", [
            g6,
            [
                "--tw-contain-size",
                "inline-size"
            ],
            [
                "contain",
                s19
            ]
        ]), t("contain-layout", [
            g6,
            [
                "--tw-contain-layout",
                "layout"
            ],
            [
                "contain",
                s19
            ]
        ]), t("contain-paint", [
            g6,
            [
                "--tw-contain-paint",
                "paint"
            ],
            [
                "contain",
                s19
            ]
        ]), t("contain-style", [
            g6,
            [
                "--tw-contain-style",
                "style"
            ],
            [
                "contain",
                s19
            ]
        ]), n("contain", {
            themeKeys: [],
            handle: function(v) {
                return [
                    a("contain", v)
                ];
            }
        });
    }
    t("forced-color-adjust-none", [
        [
            "forced-color-adjust",
            "none"
        ]
    ]), t("forced-color-adjust-auto", [
        [
            "forced-color-adjust",
            "auto"
        ]
    ]), o("leading", [
        "--leading",
        "--spacing"
    ], function(s) {
        return [
            W([
                $("--tw-leading")
            ]),
            a("--tw-leading", s),
            a("line-height", s)
        ];
    }, {
        staticValues: {
            none: [
                W([
                    $("--tw-leading")
                ]),
                a("--tw-leading", "1"),
                a("line-height", "1")
            ]
        }
    }), n("tracking", {
        supportsNegative: !0,
        themeKeys: [
            "--tracking"
        ],
        handle: function(s) {
            return [
                W([
                    $("--tw-tracking")
                ]),
                a("--tw-tracking", s),
                a("letter-spacing", s)
            ];
        }
    }), t("antialiased", [
        [
            "-webkit-font-smoothing",
            "antialiased"
        ],
        [
            "-moz-osx-font-smoothing",
            "grayscale"
        ]
    ]), t("subpixel-antialiased", [
        [
            "-webkit-font-smoothing",
            "auto"
        ],
        [
            "-moz-osx-font-smoothing",
            "auto"
        ]
    ]);
    {
        var s20 = "var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)", g7 = function() {
            return W([
                $("--tw-ordinal"),
                $("--tw-slashed-zero"),
                $("--tw-numeric-figure"),
                $("--tw-numeric-spacing"),
                $("--tw-numeric-fraction")
            ]);
        };
        t("normal-nums", [
            [
                "font-variant-numeric",
                "normal"
            ]
        ]), t("ordinal", [
            g7,
            [
                "--tw-ordinal",
                "ordinal"
            ],
            [
                "font-variant-numeric",
                s20
            ]
        ]), t("slashed-zero", [
            g7,
            [
                "--tw-slashed-zero",
                "slashed-zero"
            ],
            [
                "font-variant-numeric",
                s20
            ]
        ]), t("lining-nums", [
            g7,
            [
                "--tw-numeric-figure",
                "lining-nums"
            ],
            [
                "font-variant-numeric",
                s20
            ]
        ]), t("oldstyle-nums", [
            g7,
            [
                "--tw-numeric-figure",
                "oldstyle-nums"
            ],
            [
                "font-variant-numeric",
                s20
            ]
        ]), t("proportional-nums", [
            g7,
            [
                "--tw-numeric-spacing",
                "proportional-nums"
            ],
            [
                "font-variant-numeric",
                s20
            ]
        ]), t("tabular-nums", [
            g7,
            [
                "--tw-numeric-spacing",
                "tabular-nums"
            ],
            [
                "font-variant-numeric",
                s20
            ]
        ]), t("diagonal-fractions", [
            g7,
            [
                "--tw-numeric-fraction",
                "diagonal-fractions"
            ],
            [
                "font-variant-numeric",
                s20
            ]
        ]), t("stacked-fractions", [
            g7,
            [
                "--tw-numeric-fraction",
                "stacked-fractions"
            ],
            [
                "font-variant-numeric",
                s20
            ]
        ]);
    }
    {
        var s21 = function() {
            return W([
                $("--tw-outline-style", "solid")
            ]);
        };
        r.static("outline-hidden", function() {
            return [
                a("--tw-outline-style", "none"),
                a("outline-style", "none"),
                F("@media", "(forced-colors: active)", [
                    a("outline", "2px solid transparent"),
                    a("outline-offset", "2px")
                ])
            ];
        }), t("outline-none", [
            [
                "--tw-outline-style",
                "none"
            ],
            [
                "outline-style",
                "none"
            ]
        ]), t("outline-solid", [
            [
                "--tw-outline-style",
                "solid"
            ],
            [
                "outline-style",
                "solid"
            ]
        ]), t("outline-dashed", [
            [
                "--tw-outline-style",
                "dashed"
            ],
            [
                "outline-style",
                "dashed"
            ]
        ]), t("outline-dotted", [
            [
                "--tw-outline-style",
                "dotted"
            ],
            [
                "outline-style",
                "dotted"
            ]
        ]), t("outline-double", [
            [
                "--tw-outline-style",
                "double"
            ],
            [
                "outline-style",
                "double"
            ]
        ]), r.functional("outline", function(g) {
            if (g.value === null) {
                if (g.modifier) return;
                var _e_get;
                var v = (_e_get = e.get([
                    "--default-outline-width"
                ])) !== null && _e_get !== void 0 ? _e_get : "1px";
                return [
                    s21(),
                    a("outline-style", "var(--tw-outline-style)"),
                    a("outline-width", v)
                ];
            }
            if (g.value.kind === "arbitrary") {
                var v1 = g.value.value;
                var _g_value_dataType;
                switch((_g_value_dataType = g.value.dataType) !== null && _g_value_dataType !== void 0 ? _g_value_dataType : Q(v1, [
                    "color",
                    "length",
                    "number",
                    "percentage"
                ])){
                    case "length":
                    case "number":
                    case "percentage":
                        return g.modifier ? void 0 : [
                            s21(),
                            a("outline-style", "var(--tw-outline-style)"),
                            a("outline-width", v1)
                        ];
                    default:
                        return v1 = X(v1, g.modifier, e), v1 === null ? void 0 : [
                            a("outline-color", v1)
                        ];
                }
            }
            {
                var v2 = te(g, e, [
                    "--outline-color",
                    "--color"
                ]);
                if (v2) return [
                    a("outline-color", v2)
                ];
            }
            {
                if (g.modifier) return;
                var v3 = e.resolve(g.value.value, [
                    "--outline-width"
                ]);
                if (v3) return [
                    s21(),
                    a("outline-style", "var(--tw-outline-style)"),
                    a("outline-width", v3)
                ];
                if (O(g.value.value)) return [
                    s21(),
                    a("outline-style", "var(--tw-outline-style)"),
                    a("outline-width", "".concat(g.value.value, "px"))
                ];
            }
        }), i("outline", function() {
            return [
                {
                    values: [
                        "current",
                        "inherit",
                        "transparent"
                    ],
                    valueThemeKeys: [
                        "--outline-color",
                        "--color"
                    ],
                    modifiers: Array.from({
                        length: 21
                    }, function(g, v) {
                        return "".concat(v * 5);
                    }),
                    hasDefaultValue: !0
                },
                {
                    values: [
                        "0",
                        "1",
                        "2",
                        "4",
                        "8"
                    ],
                    valueThemeKeys: [
                        "--outline-width"
                    ]
                }
            ];
        }), n("outline-offset", {
            supportsNegative: !0,
            themeKeys: [
                "--outline-offset"
            ],
            handleBareValue: function(param) {
                var g = param.value;
                return O(g) ? "".concat(g, "px") : null;
            },
            handle: function(g) {
                return [
                    a("outline-offset", g)
                ];
            }
        }), i("outline-offset", function() {
            return [
                {
                    supportsNegative: !0,
                    values: [
                        "0",
                        "1",
                        "2",
                        "4",
                        "8"
                    ],
                    valueThemeKeys: [
                        "--outline-offset"
                    ]
                }
            ];
        });
    }
    n("opacity", {
        themeKeys: [
            "--opacity"
        ],
        handleBareValue: function(param) {
            var s = param.value;
            return wt(s) ? "".concat(s, "%") : null;
        },
        handle: function(s) {
            return [
                a("opacity", s)
            ];
        }
    }), i("opacity", function() {
        return [
            {
                values: Array.from({
                    length: 21
                }, function(s, g) {
                    return "".concat(g * 5);
                }),
                valueThemeKeys: [
                    "--opacity"
                ]
            }
        ];
    }), n("underline-offset", {
        supportsNegative: !0,
        themeKeys: [
            "--text-underline-offset"
        ],
        handleBareValue: function(param) {
            var s = param.value;
            return O(s) ? "".concat(s, "px") : null;
        },
        handle: function(s) {
            return [
                a("text-underline-offset", s)
            ];
        },
        staticValues: {
            auto: [
                a("text-underline-offset", "auto")
            ]
        }
    }), i("underline-offset", function() {
        return [
            {
                supportsNegative: !0,
                values: [
                    "0",
                    "1",
                    "2",
                    "4",
                    "8"
                ],
                valueThemeKeys: [
                    "--text-underline-offset"
                ]
            }
        ];
    }), r.functional("text", function(s) {
        if (s.value) {
            if (s.value.kind === "arbitrary") {
                var g = s.value.value;
                var _s_value_dataType;
                switch((_s_value_dataType = s.value.dataType) !== null && _s_value_dataType !== void 0 ? _s_value_dataType : Q(g, [
                    "color",
                    "length",
                    "percentage",
                    "absolute-size",
                    "relative-size"
                ])){
                    case "size":
                    case "length":
                    case "percentage":
                    case "absolute-size":
                    case "relative-size":
                        {
                            if (s.modifier) {
                                var C = s.modifier.kind === "arbitrary" ? s.modifier.value : e.resolve(s.modifier.value, [
                                    "--leading"
                                ]);
                                if (!C && ne(s.modifier.value)) {
                                    var b = e.resolve(null, [
                                        "--spacing"
                                    ]);
                                    if (!b) return null;
                                    C = "calc(".concat(b, " * ").concat(s.modifier.value, ")");
                                }
                                return !C && s.modifier.value === "none" && (C = "1"), C ? [
                                    a("font-size", g),
                                    a("line-height", C)
                                ] : null;
                            }
                            return [
                                a("font-size", g)
                            ];
                        }
                    default:
                        return g = X(g, s.modifier, e), g === null ? void 0 : [
                            a("color", g)
                        ];
                }
            }
            {
                var g1 = te(s, e, [
                    "--text-color",
                    "--color"
                ]);
                if (g1) return [
                    a("color", g1)
                ];
            }
            {
                var g2 = e.resolveWith(s.value.value, [
                    "--text"
                ], [
                    "--line-height",
                    "--letter-spacing",
                    "--font-weight"
                ]);
                if (g2) {
                    var _ref = _sliced_to_array._(Array.isArray(g2) ? g2 : [
                        g2
                    ], 2), v = _ref[0], tmp = _ref[1], C1 = tmp === void 0 ? {} : tmp;
                    if (s.modifier) {
                        var b1 = s.modifier.kind === "arbitrary" ? s.modifier.value : e.resolve(s.modifier.value, [
                            "--leading"
                        ]);
                        if (!b1 && ne(s.modifier.value)) {
                            var D = e.resolve(null, [
                                "--spacing"
                            ]);
                            if (!D) return null;
                            b1 = "calc(".concat(D, " * ").concat(s.modifier.value, ")");
                        }
                        if (!b1 && s.modifier.value === "none" && (b1 = "1"), !b1) return null;
                        var T = [
                            a("font-size", v)
                        ];
                        return b1 && T.push(a("line-height", b1)), T;
                    }
                    return typeof C1 == "string" ? [
                        a("font-size", v),
                        a("line-height", C1)
                    ] : [
                        a("font-size", v),
                        a("line-height", C1["--line-height"] ? "var(--tw-leading, ".concat(C1["--line-height"], ")") : void 0),
                        a("letter-spacing", C1["--letter-spacing"] ? "var(--tw-tracking, ".concat(C1["--letter-spacing"], ")") : void 0),
                        a("font-weight", C1["--font-weight"] ? "var(--tw-font-weight, ".concat(C1["--font-weight"], ")") : void 0)
                    ];
                }
            }
        }
    }), i("text", function() {
        return [
            {
                values: [
                    "current",
                    "inherit",
                    "transparent"
                ],
                valueThemeKeys: [
                    "--text-color",
                    "--color"
                ],
                modifiers: Array.from({
                    length: 21
                }, function(s, g) {
                    return "".concat(g * 5);
                })
            },
            {
                values: [],
                valueThemeKeys: [
                    "--text"
                ],
                modifiers: [],
                modifierThemeKeys: [
                    "--leading"
                ]
            }
        ];
    });
    var z = function() {
        return W([
            $("--tw-text-shadow-color"),
            $("--tw-text-shadow-alpha", "100%", "<percentage>")
        ]);
    };
    t("text-shadow-initial", [
        z,
        [
            "--tw-text-shadow-color",
            "initial"
        ]
    ]), r.functional("text-shadow", function(s) {
        var g;
        if (s.modifier && (s.modifier.kind === "arbitrary" ? g = s.modifier.value : O(s.modifier.value) && (g = "".concat(s.modifier.value, "%"))), !s.value) {
            var v = e.get([
                "--text-shadow"
            ]);
            return v === null ? void 0 : [
                z(),
                a("--tw-text-shadow-alpha", g)
            ].concat(_to_consumable_array._(ye("text-shadow", v, g, function(C) {
                return "var(--tw-text-shadow-color, ".concat(C, ")");
            })));
        }
        if (s.value.kind === "arbitrary") {
            var v1 = s.value.value;
            var _s_value_dataType;
            switch((_s_value_dataType = s.value.dataType) !== null && _s_value_dataType !== void 0 ? _s_value_dataType : Q(v1, [
                "color"
            ])){
                case "color":
                    return v1 = X(v1, s.modifier, e), v1 === null ? void 0 : [
                        z(),
                        a("--tw-text-shadow-color", J(v1, "var(--tw-text-shadow-alpha)"))
                    ];
                default:
                    return [
                        z(),
                        a("--tw-text-shadow-alpha", g)
                    ].concat(_to_consumable_array._(ye("text-shadow", v1, g, function(b) {
                        return "var(--tw-text-shadow-color, ".concat(b, ")");
                    })));
            }
        }
        switch(s.value.value){
            case "none":
                return s.modifier ? void 0 : [
                    z(),
                    a("text-shadow", "none")
                ];
            case "inherit":
                return s.modifier ? void 0 : [
                    z(),
                    a("--tw-text-shadow-color", "inherit")
                ];
        }
        {
            var v2 = e.get([
                "--text-shadow-".concat(s.value.value)
            ]);
            if (v2) return [
                z(),
                a("--tw-text-shadow-alpha", g)
            ].concat(_to_consumable_array._(ye("text-shadow", v2, g, function(C) {
                return "var(--tw-text-shadow-color, ".concat(C, ")");
            })));
        }
        {
            var v3 = te(s, e, [
                "--text-shadow-color",
                "--color"
            ]);
            if (v3) return [
                z(),
                a("--tw-text-shadow-color", J(v3, "var(--tw-text-shadow-alpha)"))
            ];
        }
    }), i("text-shadow", function() {
        return [
            {
                values: [
                    "current",
                    "inherit",
                    "transparent"
                ],
                valueThemeKeys: [
                    "--text-shadow-color",
                    "--color"
                ],
                modifiers: Array.from({
                    length: 21
                }, function(s, g) {
                    return "".concat(g * 5);
                })
            },
            {
                values: [
                    "none"
                ]
            },
            {
                valueThemeKeys: [
                    "--text-shadow"
                ],
                modifiers: Array.from({
                    length: 21
                }, function(s, g) {
                    return "".concat(g * 5);
                }),
                hasDefaultValue: e.get([
                    "--text-shadow"
                ]) !== null
            }
        ];
    });
    {
        var b1 = function b(E) {
            return "var(--tw-ring-inset,) 0 0 0 calc(".concat(E, " + var(--tw-ring-offset-width)) var(--tw-ring-color, ").concat(C2, ")");
        }, T = function T(E) {
            return "inset 0 0 0 ".concat(E, " var(--tw-inset-ring-color, currentcolor)");
        };
        var ae = b1, le = T;
        var s22 = [
            "var(--tw-inset-shadow)",
            "var(--tw-inset-ring-shadow)",
            "var(--tw-ring-offset-shadow)",
            "var(--tw-ring-shadow)",
            "var(--tw-shadow)"
        ].join(", "), g8 = "0 0 #0000", v3 = function() {
            return W([
                $("--tw-shadow", g8),
                $("--tw-shadow-color"),
                $("--tw-shadow-alpha", "100%", "<percentage>"),
                $("--tw-inset-shadow", g8),
                $("--tw-inset-shadow-color"),
                $("--tw-inset-shadow-alpha", "100%", "<percentage>"),
                $("--tw-ring-color"),
                $("--tw-ring-shadow", g8),
                $("--tw-inset-ring-color"),
                $("--tw-inset-ring-shadow", g8),
                $("--tw-ring-inset"),
                $("--tw-ring-offset-width", "0px", "<length>"),
                $("--tw-ring-offset-color", "#fff"),
                $("--tw-ring-offset-shadow", g8)
            ]);
        };
        t("shadow-initial", [
            v3,
            [
                "--tw-shadow-color",
                "initial"
            ]
        ]), r.functional("shadow", function(E) {
            var R;
            if (E.modifier && (E.modifier.kind === "arbitrary" ? R = E.modifier.value : O(E.modifier.value) && (R = "".concat(E.modifier.value, "%"))), !E.value) {
                var j = e.get([
                    "--shadow"
                ]);
                return j === null ? void 0 : [
                    v3(),
                    a("--tw-shadow-alpha", R)
                ].concat(_to_consumable_array._(ye("--tw-shadow", j, R, function(pe) {
                    return "var(--tw-shadow-color, ".concat(pe, ")");
                })), [
                    a("box-shadow", s22)
                ]);
            }
            if (E.value.kind === "arbitrary") {
                var j1 = E.value.value;
                var _E_value_dataType;
                switch((_E_value_dataType = E.value.dataType) !== null && _E_value_dataType !== void 0 ? _E_value_dataType : Q(j1, [
                    "color"
                ])){
                    case "color":
                        return j1 = X(j1, E.modifier, e), j1 === null ? void 0 : [
                            v3(),
                            a("--tw-shadow-color", J(j1, "var(--tw-shadow-alpha)"))
                        ];
                    default:
                        return [
                            v3(),
                            a("--tw-shadow-alpha", R)
                        ].concat(_to_consumable_array._(ye("--tw-shadow", j1, R, function(Dt) {
                            return "var(--tw-shadow-color, ".concat(Dt, ")");
                        })), [
                            a("box-shadow", s22)
                        ]);
                }
            }
            switch(E.value.value){
                case "none":
                    return E.modifier ? void 0 : [
                        v3(),
                        a("--tw-shadow", g8),
                        a("box-shadow", s22)
                    ];
                case "inherit":
                    return E.modifier ? void 0 : [
                        v3(),
                        a("--tw-shadow-color", "inherit")
                    ];
            }
            {
                var j2 = e.get([
                    "--shadow-".concat(E.value.value)
                ]);
                if (j2) return [
                    v3(),
                    a("--tw-shadow-alpha", R)
                ].concat(_to_consumable_array._(ye("--tw-shadow", j2, R, function(pe) {
                    return "var(--tw-shadow-color, ".concat(pe, ")");
                })), [
                    a("box-shadow", s22)
                ]);
            }
            {
                var j3 = te(E, e, [
                    "--box-shadow-color",
                    "--color"
                ]);
                if (j3) return [
                    v3(),
                    a("--tw-shadow-color", J(j3, "var(--tw-shadow-alpha)"))
                ];
            }
        }), i("shadow", function() {
            return [
                {
                    values: [
                        "current",
                        "inherit",
                        "transparent"
                    ],
                    valueThemeKeys: [
                        "--box-shadow-color",
                        "--color"
                    ],
                    modifiers: Array.from({
                        length: 21
                    }, function(E, R) {
                        return "".concat(R * 5);
                    })
                },
                {
                    values: [
                        "none"
                    ]
                },
                {
                    valueThemeKeys: [
                        "--shadow"
                    ],
                    modifiers: Array.from({
                        length: 21
                    }, function(E, R) {
                        return "".concat(R * 5);
                    }),
                    hasDefaultValue: e.get([
                        "--shadow"
                    ]) !== null
                }
            ];
        }), t("inset-shadow-initial", [
            v3,
            [
                "--tw-inset-shadow-color",
                "initial"
            ]
        ]), r.functional("inset-shadow", function(E) {
            var R;
            if (E.modifier && (E.modifier.kind === "arbitrary" ? R = E.modifier.value : O(E.modifier.value) && (R = "".concat(E.modifier.value, "%"))), !E.value) {
                var j = e.get([
                    "--inset-shadow"
                ]);
                return j === null ? void 0 : [
                    v3(),
                    a("--tw-inset-shadow-alpha", R)
                ].concat(_to_consumable_array._(ye("--tw-inset-shadow", j, R, function(pe) {
                    return "var(--tw-inset-shadow-color, ".concat(pe, ")");
                })), [
                    a("box-shadow", s22)
                ]);
            }
            if (E.value.kind === "arbitrary") {
                var j1 = E.value.value;
                var _E_value_dataType;
                switch((_E_value_dataType = E.value.dataType) !== null && _E_value_dataType !== void 0 ? _E_value_dataType : Q(j1, [
                    "color"
                ])){
                    case "color":
                        return j1 = X(j1, E.modifier, e), j1 === null ? void 0 : [
                            v3(),
                            a("--tw-inset-shadow-color", J(j1, "var(--tw-inset-shadow-alpha)"))
                        ];
                    default:
                        return [
                            v3(),
                            a("--tw-inset-shadow-alpha", R)
                        ].concat(_to_consumable_array._(ye("--tw-inset-shadow", j1, R, function(Dt) {
                            return "var(--tw-inset-shadow-color, ".concat(Dt, ")");
                        }, "inset ")), [
                            a("box-shadow", s22)
                        ]);
                }
            }
            switch(E.value.value){
                case "none":
                    return E.modifier ? void 0 : [
                        v3(),
                        a("--tw-inset-shadow", g8),
                        a("box-shadow", s22)
                    ];
                case "inherit":
                    return E.modifier ? void 0 : [
                        v3(),
                        a("--tw-inset-shadow-color", "inherit")
                    ];
            }
            {
                var j2 = e.get([
                    "--inset-shadow-".concat(E.value.value)
                ]);
                if (j2) return [
                    v3(),
                    a("--tw-inset-shadow-alpha", R)
                ].concat(_to_consumable_array._(ye("--tw-inset-shadow", j2, R, function(pe) {
                    return "var(--tw-inset-shadow-color, ".concat(pe, ")");
                })), [
                    a("box-shadow", s22)
                ]);
            }
            {
                var j3 = te(E, e, [
                    "--box-shadow-color",
                    "--color"
                ]);
                if (j3) return [
                    v3(),
                    a("--tw-inset-shadow-color", J(j3, "var(--tw-inset-shadow-alpha)"))
                ];
            }
        }), i("inset-shadow", function() {
            return [
                {
                    values: [
                        "current",
                        "inherit",
                        "transparent"
                    ],
                    valueThemeKeys: [
                        "--box-shadow-color",
                        "--color"
                    ],
                    modifiers: Array.from({
                        length: 21
                    }, function(E, R) {
                        return "".concat(R * 5);
                    })
                },
                {
                    values: [
                        "none"
                    ]
                },
                {
                    valueThemeKeys: [
                        "--inset-shadow"
                    ],
                    modifiers: Array.from({
                        length: 21
                    }, function(E, R) {
                        return "".concat(R * 5);
                    }),
                    hasDefaultValue: e.get([
                        "--inset-shadow"
                    ]) !== null
                }
            ];
        }), t("ring-inset", [
            v3,
            [
                "--tw-ring-inset",
                "inset"
            ]
        ]);
        var _e_get2;
        var C2 = (_e_get2 = e.get([
            "--default-ring-color"
        ])) !== null && _e_get2 !== void 0 ? _e_get2 : "currentcolor";
        r.functional("ring", function(E) {
            if (!E.value) {
                if (E.modifier) return;
                var _e_get;
                var R = (_e_get = e.get([
                    "--default-ring-width"
                ])) !== null && _e_get !== void 0 ? _e_get : "1px";
                return [
                    v3(),
                    a("--tw-ring-shadow", b1(R)),
                    a("box-shadow", s22)
                ];
            }
            if (E.value.kind === "arbitrary") {
                var R1 = E.value.value;
                var _E_value_dataType;
                switch((_E_value_dataType = E.value.dataType) !== null && _E_value_dataType !== void 0 ? _E_value_dataType : Q(R1, [
                    "color",
                    "length"
                ])){
                    case "length":
                        return E.modifier ? void 0 : [
                            v3(),
                            a("--tw-ring-shadow", b1(R1)),
                            a("box-shadow", s22)
                        ];
                    default:
                        return R1 = X(R1, E.modifier, e), R1 === null ? void 0 : [
                            a("--tw-ring-color", R1)
                        ];
                }
            }
            {
                var R2 = te(E, e, [
                    "--ring-color",
                    "--color"
                ]);
                if (R2) return [
                    a("--tw-ring-color", R2)
                ];
            }
            {
                if (E.modifier) return;
                var R3 = e.resolve(E.value.value, [
                    "--ring-width"
                ]);
                if (R3 === null && O(E.value.value) && (R3 = "".concat(E.value.value, "px")), R3) return [
                    v3(),
                    a("--tw-ring-shadow", b1(R3)),
                    a("box-shadow", s22)
                ];
            }
        }), i("ring", function() {
            return [
                {
                    values: [
                        "current",
                        "inherit",
                        "transparent"
                    ],
                    valueThemeKeys: [
                        "--ring-color",
                        "--color"
                    ],
                    modifiers: Array.from({
                        length: 21
                    }, function(E, R) {
                        return "".concat(R * 5);
                    })
                },
                {
                    values: [
                        "0",
                        "1",
                        "2",
                        "4",
                        "8"
                    ],
                    valueThemeKeys: [
                        "--ring-width"
                    ],
                    hasDefaultValue: !0
                }
            ];
        }), r.functional("inset-ring", function(E) {
            if (!E.value) return E.modifier ? void 0 : [
                v3(),
                a("--tw-inset-ring-shadow", T("1px")),
                a("box-shadow", s22)
            ];
            if (E.value.kind === "arbitrary") {
                var R = E.value.value;
                var _E_value_dataType;
                switch((_E_value_dataType = E.value.dataType) !== null && _E_value_dataType !== void 0 ? _E_value_dataType : Q(R, [
                    "color",
                    "length"
                ])){
                    case "length":
                        return E.modifier ? void 0 : [
                            v3(),
                            a("--tw-inset-ring-shadow", T(R)),
                            a("box-shadow", s22)
                        ];
                    default:
                        return R = X(R, E.modifier, e), R === null ? void 0 : [
                            a("--tw-inset-ring-color", R)
                        ];
                }
            }
            {
                var R1 = te(E, e, [
                    "--ring-color",
                    "--color"
                ]);
                if (R1) return [
                    a("--tw-inset-ring-color", R1)
                ];
            }
            {
                if (E.modifier) return;
                var R2 = e.resolve(E.value.value, [
                    "--ring-width"
                ]);
                if (R2 === null && O(E.value.value) && (R2 = "".concat(E.value.value, "px")), R2) return [
                    v3(),
                    a("--tw-inset-ring-shadow", T(R2)),
                    a("box-shadow", s22)
                ];
            }
        }), i("inset-ring", function() {
            return [
                {
                    values: [
                        "current",
                        "inherit",
                        "transparent"
                    ],
                    valueThemeKeys: [
                        "--ring-color",
                        "--color"
                    ],
                    modifiers: Array.from({
                        length: 21
                    }, function(E, R) {
                        return "".concat(R * 5);
                    })
                },
                {
                    values: [
                        "0",
                        "1",
                        "2",
                        "4",
                        "8"
                    ],
                    valueThemeKeys: [
                        "--ring-width"
                    ],
                    hasDefaultValue: !0
                }
            ];
        });
        var D = "var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)";
        r.functional("ring-offset", function(E) {
            if (E.value) {
                if (E.value.kind === "arbitrary") {
                    var R = E.value.value;
                    var _E_value_dataType;
                    switch((_E_value_dataType = E.value.dataType) !== null && _E_value_dataType !== void 0 ? _E_value_dataType : Q(R, [
                        "color",
                        "length"
                    ])){
                        case "length":
                            return E.modifier ? void 0 : [
                                a("--tw-ring-offset-width", R),
                                a("--tw-ring-offset-shadow", D)
                            ];
                        default:
                            return R = X(R, E.modifier, e), R === null ? void 0 : [
                                a("--tw-ring-offset-color", R)
                            ];
                    }
                }
                {
                    var R1 = e.resolve(E.value.value, [
                        "--ring-offset-width"
                    ]);
                    if (R1) return E.modifier ? void 0 : [
                        a("--tw-ring-offset-width", R1),
                        a("--tw-ring-offset-shadow", D)
                    ];
                    if (O(E.value.value)) return E.modifier ? void 0 : [
                        a("--tw-ring-offset-width", "".concat(E.value.value, "px")),
                        a("--tw-ring-offset-shadow", D)
                    ];
                }
                {
                    var R2 = te(E, e, [
                        "--ring-offset-color",
                        "--color"
                    ]);
                    if (R2) return [
                        a("--tw-ring-offset-color", R2)
                    ];
                }
            }
        });
    }
    return i("ring-offset", function() {
        return [
            {
                values: [
                    "current",
                    "inherit",
                    "transparent"
                ],
                valueThemeKeys: [
                    "--ring-offset-color",
                    "--color"
                ],
                modifiers: Array.from({
                    length: 21
                }, function(s, g) {
                    return "".concat(g * 5);
                })
            },
            {
                values: [
                    "0",
                    "1",
                    "2",
                    "4",
                    "8"
                ],
                valueThemeKeys: [
                    "--ring-offset-width"
                ]
            }
        ];
    }), r.functional("@container", function(s) {
        var g = null;
        if (s.value === null ? g = "inline-size" : s.value.kind === "arbitrary" ? g = s.value.value : s.value.kind === "named" && s.value.value === "normal" ? g = "normal" : !1, g !== null) return s.modifier ? [
            a("container-type", g),
            a("container-name", s.modifier.value)
        ] : [
            a("container-type", g)
        ];
    }), i("@container", function() {
        return [
            {
                values: [
                    "normal"
                ],
                valueThemeKeys: [],
                hasDefaultValue: !0
            }
        ];
    }), r;
}
var Xt = [
    "number",
    "integer",
    "ratio",
    "percentage"
];
function Jr(e) {
    var r = e.params;
    return so.test(r) ? function(i) {
        var t = {
            "--value": {
                usedSpacingInteger: !1,
                usedSpacingNumber: !1,
                themeKeys: new Set,
                literals: new Set
            },
            "--modifier": {
                usedSpacingInteger: !1,
                usedSpacingNumber: !1,
                themeKeys: new Set,
                literals: new Set
            }
        };
        _(e.nodes, function(n) {
            if (n.kind !== "declaration" || !n.value || !n.value.includes("--value(") && !n.value.includes("--modifier(")) return;
            var l = B(n.value);
            _(l, function(o) {
                if (o.kind !== "function") return;
                if (o.value === "--spacing" && !(t["--modifier"].usedSpacingNumber && t["--value"].usedSpacingNumber)) return _(o.nodes, function(u) {
                    if (u.kind !== "function" || u.value !== "--value" && u.value !== "--modifier") return;
                    var c = u.value;
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = u.nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var m = _step.value;
                            if (m.kind === "word") {
                                var _t_c, _t_c1;
                                if (m.value === "integer") (_t_c = t[c]).usedSpacingInteger || (_t_c.usedSpacingInteger = !0);
                                else if (m.value === "number" && ((_t_c1 = t[c]).usedSpacingNumber || (_t_c1.usedSpacingNumber = !0), t["--modifier"].usedSpacingNumber && t["--value"].usedSpacingNumber)) return V.Stop;
                            }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                }), V.Continue;
                if (o.value !== "--value" && o.value !== "--modifier") return;
                var f = L(H(o.nodes), ",");
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = f.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _sliced_to_array._(_step.value, 2), u = _step_value[0], c = _step_value[1];
                        c = c.replace(/\\\*/g, "*"), c = c.replace(/--(.*?)\s--(.*?)/g, "--$1-*--$2"), c = c.replace(/\s+/g, ""), c = c.replace(/(-\*){2,}/g, "-*"), c[0] === "-" && c[1] === "-" && !c.includes("-*") && (c += "-*"), f[u] = c;
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                o.nodes = B(f.join(","));
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    var _loop = function() {
                        var u = _step1.value;
                        if (u.kind === "word" && (u.value[0] === '"' || u.value[0] === "'") && u.value[0] === u.value[u.value.length - 1]) {
                            var c = u.value.slice(1, -1);
                            t[o.value].literals.add(c);
                        } else if (u.kind === "word" && u.value[0] === "-" && u.value[1] === "-") {
                            var c1 = u.value.replace(/-\*.*$/g, "");
                            t[o.value].themeKeys.add(c1);
                        } else if (u.kind === "word" && !(u.value[0] === "[" && u.value[u.value.length - 1] === "]") && !Xt.includes(u.value)) {
                            console.warn('Unsupported bare value data type: "'.concat(u.value, '".\nOnly valid data types are: ').concat(Xt.map(function(w1) {
                                return '"'.concat(w1, '"');
                            }).join(", "), ".\n"));
                            var c2 = u.value, m = structuredClone(o), d = "\xB6";
                            _(m.nodes, function(w1) {
                                if (w1.kind === "word" && w1.value === c2) return V.ReplaceSkip({
                                    kind: "word",
                                    value: d
                                });
                            });
                            var p = "^".repeat(H([
                                u
                            ]).length), k = H([
                                m
                            ]).indexOf(d), h = [
                                "```css",
                                H([
                                    o
                                ]),
                                " ".repeat(k) + p,
                                "```"
                            ].join("\n");
                            console.warn(h);
                        }
                    };
                    for(var _iterator1 = o.nodes[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true)_loop();
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
            }), n.value = H(l);
        }), i.utilities.functional(r.slice(0, -2), function(n) {
            var l = ee(e), o = n.value, f = n.modifier;
            if (o === null) return;
            var u = !1, c = !1, m = !1, d = !1, p = new Map, k = !1;
            if (_([
                l
            ], function(h, w1) {
                var x = w1.parent;
                if ((x === null || x === void 0 ? void 0 : x.kind) !== "rule" && (x === null || x === void 0 ? void 0 : x.kind) !== "at-rule" || h.kind !== "declaration" || !h.value) return;
                var S = !1, A = B(h.value);
                if (_(A, function(y) {
                    if (y.kind === "function") {
                        if (y.value === "--value") {
                            u = !0;
                            var K = Gr(o, y, i);
                            return K ? (c = !0, K.ratio ? k = !0 : p.set(h, x), V.ReplaceSkip(K.nodes)) : (u || (u = !1), S = !0, V.Stop);
                        } else if (y.value === "--modifier") {
                            if (f === null) return S = !0, V.Stop;
                            m = !0;
                            var K1 = Gr(f, y, i);
                            return K1 ? (d = !0, V.ReplaceSkip(K1.nodes)) : (m || (m = !1), S = !0, V.Stop);
                        }
                    }
                }), S) return V.ReplaceSkip([]);
                h.value = H(A);
            }), u && !c || m && !d || k && d || f && !k && !d) return null;
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            if (k) try {
                for(var _iterator = p[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var _step_value = _sliced_to_array._(_step.value, 2), h = _step_value[0], w1 = _step_value[1];
                    var x = w1.nodes.indexOf(h);
                    x !== -1 && w1.nodes.splice(x, 1);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            return l.nodes;
        }), i.utilities.suggest(r.slice(0, -2), function() {
            var n = [], l = [];
            for(var _i = 0, _iter = [
                [
                    n,
                    t["--value"]
                ],
                [
                    l,
                    t["--modifier"]
                ]
            ]; _i < _iter.length; _i++){
                var _iter__i = _sliced_to_array._(_iter[_i], 2), o = _iter__i[0], _iter__i_ = _iter__i[1], f = _iter__i_.literals, u = _iter__i_.usedSpacingNumber, c = _iter__i_.usedSpacingInteger, m = _iter__i_.themeKeys;
                var _o;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = f[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var d = _step.value;
                        o.push(d);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                if (u) (_o = o).push.apply(_o, _to_consumable_array._(bt));
                else if (c) try {
                    for(var _iterator1 = bt[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var d1 = _step1.value;
                        O(d1) && o.push(d1);
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
                var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                try {
                    for(var _iterator2 = i.theme.keysInNamespaces(m)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                        var d2 = _step2.value;
                        o.push(d2.replace(Zr, function(p, k, h) {
                            return "".concat(k, ".").concat(h);
                        }));
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                            _iterator2.return();
                        }
                    } finally{
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
            }
            return [
                {
                    values: n,
                    modifiers: l
                }
            ];
        });
    } : lo.test(r) ? function(i) {
        i.utilities.static(r, function() {
            return e.nodes.map(ee);
        });
    } : null;
}
function Gr(e, r, i) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = r.nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var t = _step.value;
            if (e.kind === "named" && t.kind === "word" && (t.value[0] === "'" || t.value[0] === '"') && t.value[t.value.length - 1] === t.value[0] && t.value.slice(1, -1) === e.value) return {
                nodes: B(e.value)
            };
            if (e.kind === "named" && t.kind === "word" && t.value[0] === "-" && t.value[1] === "-") {
                var n = t.value;
                if (n.endsWith("-*")) {
                    n = n.slice(0, -2);
                    var l = i.theme.resolve(e.value, [
                        n
                    ]);
                    if (l) return {
                        nodes: B(l)
                    };
                } else {
                    var l1 = n.split("-*");
                    if (l1.length <= 1) continue;
                    var o = [
                        l1.shift()
                    ], f = i.theme.resolveWith(e.value, o, l1);
                    if (f) {
                        var _f = _sliced_to_array._(f, 2), tmp = _f[1], u = tmp === void 0 ? {} : tmp;
                        {
                            var c = u[l1.pop()];
                            if (c) return {
                                nodes: B(c)
                            };
                        }
                    }
                }
            } else if (e.kind === "named" && t.kind === "word") {
                if (!Xt.includes(t.value)) continue;
                var n1 = t.value === "ratio" && "fraction" in e ? e.fraction : e.value;
                if (!n1) continue;
                var l2 = Q(n1, [
                    t.value
                ]);
                if (l2 === null) continue;
                if (l2 === "ratio") {
                    var _L = _sliced_to_array._(L(n1, "/"), 2), o1 = _L[0], f1 = _L[1];
                    if (!O(o1) || !O(f1)) continue;
                } else {
                    if (l2 === "number" && !ne(n1)) continue;
                    if (l2 === "percentage" && !O(n1.slice(0, -1))) continue;
                }
                return {
                    nodes: B(n1),
                    ratio: l2 === "ratio"
                };
            } else if (e.kind === "arbitrary" && t.kind === "word" && t.value[0] === "[" && t.value[t.value.length - 1] === "]") {
                var n2 = t.value.slice(1, -1);
                if (n2 === "*") return {
                    nodes: B(e.value)
                };
                if ("dataType" in e && e.dataType && e.dataType !== n2) continue;
                if ("dataType" in e && e.dataType) return {
                    nodes: B(e.value)
                };
                if (Q(e.value, [
                    n2
                ]) !== null) return {
                    nodes: B(e.value)
                };
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
function ye(e, r, i, t) {
    var n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "";
    var l = !1, o = nt(r, function(u) {
        return i == null ? t(u) : u.startsWith("current") ? t(J(u, i)) : ((u.startsWith("var(") || i.startsWith("var(")) && (l = !0), t(Hr(u, i)));
    });
    function f(u) {
        return n ? L(u, ",").map(function(c) {
            return n + c;
        }).join(",") : u;
    }
    return l ? [
        a(e, f(nt(r, t))),
        Z("@supports (color: lab(from red l a b))", [
            a(e, f(o))
        ])
    ] : [
        a(e, f(o))
    ];
}
function yt(e, r, i, t) {
    var n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "";
    var l = !1, o = L(r, ",").map(function(f) {
        return nt(f, function(u) {
            return i == null ? t(u) : u.startsWith("current") ? t(J(u, i)) : ((u.startsWith("var(") || i.startsWith("var(")) && (l = !0), t(Hr(u, i)));
        });
    }).map(function(f) {
        return "drop-shadow(".concat(f, ")");
    }).join(" ");
    return l ? [
        a(e, n + L(r, ",").map(function(f) {
            return "drop-shadow(".concat(nt(f, t), ")");
        }).join(" ")),
        Z("@supports (color: lab(from red l a b))", [
            a(e, n + o)
        ])
    ] : [
        a(e, n + o)
    ];
}
var er = {
    "--alpha": uo,
    "--spacing": co,
    "--theme": fo,
    theme: po
};
function uo(e, r, i) {
    for(var _len = arguments.length, t = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
        t[_key - 3] = arguments[_key];
    }
    var _L_map = _sliced_to_array._(L(i, "/").map(function(o) {
        return o.trim();
    }), 2), n = _L_map[0], l = _L_map[1];
    if (!n || !l) throw new Error("The --alpha(…) function requires a color and an alpha value, e.g.: `--alpha(".concat(n || "var(--my-color)", " / ").concat(l || "50%", ")`"));
    if (t.length > 0) throw new Error("The --alpha(…) function only accepts one argument, e.g.: `--alpha(".concat(n || "var(--my-color)", " / ").concat(l || "50%", ")`"));
    return J(n, l);
}
function co(e, r, i) {
    for(var _len = arguments.length, t = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
        t[_key - 3] = arguments[_key];
    }
    if (!i) throw new Error("The --spacing(\u2026) function requires an argument, but received none.");
    if (t.length > 0) throw new Error("The --spacing(…) function only accepts a single argument, but received ".concat(t.length + 1, "."));
    var n = e.theme.resolve(null, [
        "--spacing"
    ]);
    if (!n) throw new Error("The --spacing(\u2026) function requires that the `--spacing` theme variable exists, but it was not found.");
    return "calc(".concat(n, " * ").concat(i, ")");
}
function fo(e, r, i) {
    for(var _len = arguments.length, t = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
        t[_key - 3] = arguments[_key];
    }
    if (!i.startsWith("--")) throw new Error("The --theme(\u2026) function can only be used with CSS variables from your theme.");
    var n = !1;
    i.endsWith(" inline") && (n = !0, i = i.slice(0, -7)), r.kind === "at-rule" && (n = !0);
    var l = e.resolveThemeValue(i, n);
    if (!l) {
        if (t.length > 0) return t.join(", ");
        throw new Error("Could not resolve value for theme function: `theme(".concat(i, ")`. Consider checking if the variable name is correct or provide a fallback value to silence this error."));
    }
    if (t.length === 0) return l;
    var o = t.join(", ");
    if (o === "initial") return l;
    if (l === "initial") return o;
    if (l.startsWith("var(") || l.startsWith("theme(") || l.startsWith("--theme(")) {
        var f = B(l);
        return go(f, o), H(f);
    }
    return l;
}
function po(e, r, i) {
    for(var _len = arguments.length, t = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
        t[_key - 3] = arguments[_key];
    }
    i = mo(i);
    var n = e.resolveThemeValue(i);
    if (!n && t.length > 0) return t.join(", ");
    if (!n) throw new Error("Could not resolve value for theme function: `theme(".concat(i, ")`. Consider checking if the path is correct or provide a fallback value to silence this error."));
    return n;
}
var Xr = new RegExp(Object.keys(er).map(function(e) {
    return "".concat(e, "\\(");
}).join("|"));
function Fe(e, r) {
    var i = 0;
    return _(e, function(t) {
        if (t.kind === "declaration" && t.value && Xr.test(t.value)) {
            i |= 8, t.value = ei(t.value, t, r);
            return;
        }
        t.kind === "at-rule" && (t.name === "@media" || t.name === "@custom-media" || t.name === "@container" || t.name === "@supports") && Xr.test(t.params) && (i |= 8, t.params = ei(t.params, t, r));
    }), i;
}
function ei(e, r, i) {
    var t = B(e);
    return _(t, function(n) {
        if (n.kind === "function" && n.value in er) {
            var _er;
            var l = L(H(n.nodes).trim(), ",").map(function(f) {
                return f.trim();
            }), o = (_er = er)[n.value].apply(_er, [
                i,
                r
            ].concat(_to_consumable_array._(l)));
            return V.Replace(B(o));
        }
    }), H(t);
}
function mo(e) {
    if (e[0] !== "'" && e[0] !== '"') return e;
    var r = "", i = e[0];
    for(var t = 1; t < e.length - 1; t++){
        var n = e[t], l = e[t + 1];
        n === "\\" && (l === i || l === "\\") ? (r += l, t++) : r += n;
    }
    return r;
}
function go(e, r) {
    _(e, function(i) {
        if (i.kind === "function" && !(i.value !== "var" && i.value !== "theme" && i.value !== "--theme")) if (i.nodes.length === 1) i.nodes.push({
            kind: "word",
            value: ", ".concat(r)
        });
        else {
            var t = i.nodes[i.nodes.length - 1];
            t.kind === "word" && t.value === "initial" && (t.value = r);
        }
    });
}
function xt(e, r) {
    var i = e.length, t = r.length, n = i < t ? i : t;
    for(var l = 0; l < n; l++){
        var o = e.charCodeAt(l), f = r.charCodeAt(l);
        if (o >= 48 && o <= 57 && f >= 48 && f <= 57) {
            var u = l, c = l + 1, m = l, d = l + 1;
            for(o = e.charCodeAt(c); o >= 48 && o <= 57;)o = e.charCodeAt(++c);
            for(f = r.charCodeAt(d); f >= 48 && f <= 57;)f = r.charCodeAt(++d);
            var p = e.slice(u, c), k = r.slice(m, d), h = Number(p) - Number(k);
            if (h) return h;
            if (p < k) return -1;
            if (p > k) return 1;
            continue;
        }
        if (o !== f) return o - f;
    }
    return e.length - r.length;
}
function ti(e) {
    if (e[0] !== "[" || e[e.length - 1] !== "]") return null;
    var r = 1, i = r, t = e.length - 1;
    for(; We(e.charCodeAt(r));)r++;
    {
        for(i = r; r < t; r++){
            var m = e.charCodeAt(r);
            if (m === 92) {
                r++;
                continue;
            }
            if (!(m >= 65 && m <= 90) && !(m >= 97 && m <= 122) && !(m >= 48 && m <= 57) && !(m === 45 || m === 95)) break;
        }
        if (i === r) return null;
    }
    var n = e.slice(i, r);
    for(; We(e.charCodeAt(r));)r++;
    if (r === t) return {
        attribute: n,
        operator: null,
        quote: null,
        value: null,
        sensitivity: null
    };
    var l = null, o = e.charCodeAt(r);
    if (o === 61) l = "=", r++;
    else if ((o === 126 || o === 124 || o === 94 || o === 36 || o === 42) && e.charCodeAt(r + 1) === 61) l = e[r] + "=", r += 2;
    else return null;
    for(; We(e.charCodeAt(r));)r++;
    if (r === t) return null;
    var f = "", u = null;
    if (o = e.charCodeAt(r), o === 39 || o === 34) {
        u = e[r], r++, i = r;
        for(var m1 = r; m1 < t; m1++){
            var d = e.charCodeAt(m1);
            d === o ? r = m1 + 1 : d === 92 && m1++;
        }
        f = e.slice(i, r - 1);
    } else {
        for(i = r; r < t && !We(e.charCodeAt(r));)r++;
        f = e.slice(i, r);
    }
    for(; We(e.charCodeAt(r));)r++;
    if (r === t) return {
        attribute: n,
        operator: l,
        quote: u,
        value: f,
        sensitivity: null
    };
    var c = null;
    switch(e.charCodeAt(r)){
        case 105:
        case 73:
            {
                c = "i", r++;
                break;
            }
        case 115:
        case 83:
            {
                c = "s", r++;
                break;
            }
        default:
            return null;
    }
    for(; We(e.charCodeAt(r));)r++;
    return r !== t ? null : {
        attribute: n,
        operator: l,
        quote: u,
        value: f,
        sensitivity: c
    };
}
function We(e) {
    switch(e){
        case 32:
        case 9:
        case 10:
        case 13:
            return !0;
        default:
            return !1;
    }
}
function Be(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    var _e__r;
    return Array.isArray(e) && e.length === 2 && _type_of._(e[1]) == "object" && _type_of._(e[1]) !== null ? r ? (_e__r = e[1][r]) !== null && _e__r !== void 0 ? _e__r : null : e[0] : Array.isArray(e) && r === null ? e.join(", ") : typeof e == "string" && r === null ? e : null;
}
function ri(e, param, i) {
    var r = param.theme;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = i[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var t = _step.value;
            var n = Ye([
                t
            ]);
            n && e.theme.clearNamespace("--".concat(n), 4);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
    try {
        for(var _iterator1 = vo(r)[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
            var _step_value = _sliced_to_array._(_step1.value, 2), t1 = _step_value[0], n1 = _step_value[1];
            if (typeof n1 != "string" && typeof n1 != "number") continue;
            if (typeof n1 == "string" && (n1 = n1.replace(/<alpha-value>/g, "1")), t1[0] === "opacity" && (typeof n1 == "number" || typeof n1 == "string")) {
                var o = typeof n1 == "string" ? parseFloat(n1) : n1;
                o >= 0 && o <= 1 && (n1 = o * 100 + "%");
            }
            var l = Ye(t1);
            l && e.theme.add("--".concat(l), "" + n1, 7);
        }
    } catch (err) {
        _didIteratorError1 = true;
        _iteratorError1 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                _iterator1.return();
            }
        } finally{
            if (_didIteratorError1) {
                throw _iteratorError1;
            }
        }
    }
    if (Object.hasOwn(r, "fontFamily")) {
        var t2 = 5;
        {
            var n2 = Be(r.fontFamily.sans);
            var _Be, _Be1;
            n2 && e.theme.hasDefault("--font-sans") && (e.theme.add("--default-font-family", n2, t2), e.theme.add("--default-font-feature-settings", (_Be = Be(r.fontFamily.sans, "fontFeatureSettings")) !== null && _Be !== void 0 ? _Be : "normal", t2), e.theme.add("--default-font-variation-settings", (_Be1 = Be(r.fontFamily.sans, "fontVariationSettings")) !== null && _Be1 !== void 0 ? _Be1 : "normal", t2));
        }
        {
            var n3 = Be(r.fontFamily.mono);
            var _Be2, _Be3;
            n3 && e.theme.hasDefault("--font-mono") && (e.theme.add("--default-mono-font-family", n3, t2), e.theme.add("--default-mono-font-feature-settings", (_Be2 = Be(r.fontFamily.mono, "fontFeatureSettings")) !== null && _Be2 !== void 0 ? _Be2 : "normal", t2), e.theme.add("--default-mono-font-variation-settings", (_Be3 = Be(r.fontFamily.mono, "fontVariationSettings")) !== null && _Be3 !== void 0 ? _Be3 : "normal", t2));
        }
    }
    return r;
}
function vo(e) {
    var r = [];
    return ii(e, [], function(i, t) {
        if (bo(i)) return r.push([
            t,
            i
        ]), 1;
        if (xo(i)) {
            r.push([
                t,
                i[0]
            ]);
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = Reflect.ownKeys(i[1])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var n = _step.value;
                    r.push([
                        _to_consumable_array._(t).concat([
                            "-".concat(n)
                        ]),
                        i[1][n]
                    ]);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            return 1;
        }
        if (Array.isArray(i) && i.every(function(n) {
            return typeof n == "string";
        })) return t[0] === "fontSize" ? (r.push([
            t,
            i[0]
        ]), i.length >= 2 && r.push([
            _to_consumable_array._(t).concat([
                "-line-height"
            ]),
            i[1]
        ])) : r.push([
            t,
            i.join(", ")
        ]), 1;
    }), r;
}
var ko = {
    borderWidth: "border-width",
    outlineWidth: "outline-width",
    ringColor: "ring-color",
    ringWidth: "ring-width",
    transitionDuration: "transition-duration",
    transitionTimingFunction: "transition-timing-function"
}, wo = {
    animation: "animate",
    aspectRatio: "aspect",
    borderRadius: "radius",
    boxShadow: "shadow",
    colors: "color",
    containers: "container",
    fontFamily: "font",
    fontSize: "text",
    letterSpacing: "tracking",
    lineHeight: "leading",
    maxWidth: "container",
    screens: "breakpoint",
    transitionTimingFunction: "ease"
}, yo = /^[a-zA-Z0-9-_%/\.]+$/;
function Ye(e) {
    var r = ko[e[0]];
    if (r && e[1] === "DEFAULT") return "default-".concat(r);
    if (e[0] === "container") return null;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = e[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var t = _step.value;
            if (!yo.test(t)) return null;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    var i = wo[e[0]];
    return i && (e = e.slice(), e[0] = i), e.map(function(t, n, l) {
        return t === "1" && n !== l.length - 1 ? "" : t;
    }).map(function(t, n) {
        return t = t.replaceAll(".", "_"), (n === 0 || t.startsWith("-") || t === "lineHeight") && (t = t.replace(/([a-z])([A-Z])/g, function(o, f, u) {
            return "".concat(f, "-").concat(u.toLowerCase());
        })), t;
    }).filter(function(t, n) {
        return t !== "DEFAULT" || n !== e.length - 1;
    }).join("-");
}
function bo(e) {
    return typeof e == "number" || typeof e == "string";
}
function xo(e) {
    if (!Array.isArray(e) || e.length !== 2 || typeof e[0] != "string" && typeof e[0] != "number" || e[1] === void 0 || e[1] === null || _type_of._(e[1]) != "object") return !1;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Reflect.ownKeys(e[1])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var r = _step.value;
            if (typeof r != "string" || typeof e[1][r] != "string" && typeof e[1][r] != "number") return !1;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return !0;
}
function ii(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], i = arguments.length > 2 ? arguments[2] : void 0;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Reflect.ownKeys(e)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var t = _step.value;
            var n = e[t];
            if (n == null) continue;
            var _i;
            var l = _to_consumable_array._(r).concat([
                t
            ]), o = (_i = i(n, l)) !== null && _i !== void 0 ? _i : 0;
            if (o !== 1) {
                if (o === 2) return 2;
                if (!(!Array.isArray(n) && (typeof n === "undefined" ? "undefined" : _type_of._(n)) != "object") && ii(n, l, i) === 2) return 2;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
var Ao = RegExp("^(?<value>[-+]?(?:\\d*\\.)?\\d+)(?<unit>[a-z]+|%)?$", "i"), _e1 = new U(function(e) {
    var _r_groups, _r_groups1;
    var r = Ao.exec(e);
    if (!r) return null;
    var i = (_r_groups = r.groups) === null || _r_groups === void 0 ? void 0 : _r_groups.value;
    if (i === void 0) return null;
    var t = Number(i);
    if (Number.isNaN(t)) return null;
    var n = (_r_groups1 = r.groups) === null || _r_groups1 === void 0 ? void 0 : _r_groups1.unit;
    return n === void 0 ? [
        t,
        null
    ] : [
        t,
        n
    ];
});
function At(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    var i = !1, t = B(e);
    return _(t, {
        exit: function exit(n) {
            if (n.kind === "word" && n.value !== "0") {
                var l = Co(n.value, r);
                return l === null || l === n.value ? void 0 : (i = !0, V.ReplaceSkip(oe(l)));
            } else if (n.kind === "function" && (n.value === "calc" || n.value === "")) {
                if (n.nodes.length !== 5) return;
                var l1 = _e1.get(n.nodes[0].value), o = n.nodes[2].value, f = _e1.get(n.nodes[4].value);
                if (o === "*" && ((l1 === null || l1 === void 0 ? void 0 : l1[0]) === 0 && (l1 === null || l1 === void 0 ? void 0 : l1[1]) === null || (f === null || f === void 0 ? void 0 : f[0]) === 0 && (f === null || f === void 0 ? void 0 : f[1]) === null)) return i = !0, V.ReplaceSkip(oe("0"));
                if (l1 === null || f === null) return;
                switch(o){
                    case "*":
                        {
                            var _l_;
                            if (l1[1] === f[1] || l1[1] === null && f[1] !== null || l1[1] !== null && f[1] === null) return i = !0, V.ReplaceSkip(oe("".concat(l1[0] * f[0]).concat((_l_ = l1[1]) !== null && _l_ !== void 0 ? _l_ : "")));
                            break;
                        }
                    case "+":
                        {
                            var _l_1;
                            if (l1[1] === f[1]) return i = !0, V.ReplaceSkip(oe("".concat(l1[0] + f[0]).concat((_l_1 = l1[1]) !== null && _l_1 !== void 0 ? _l_1 : "")));
                            break;
                        }
                    case "-":
                        {
                            var _l_2;
                            if (l1[1] === f[1]) return i = !0, V.ReplaceSkip(oe("".concat(l1[0] - f[0]).concat((_l_2 = l1[1]) !== null && _l_2 !== void 0 ? _l_2 : "")));
                            break;
                        }
                    case "/":
                        {
                            var _l_3;
                            if (f[0] !== 0 && (l1[1] === null && f[1] === null || l1[1] !== null && f[1] === null)) return i = !0, V.ReplaceSkip(oe("".concat(l1[0] / f[0]).concat((_l_3 = l1[1]) !== null && _l_3 !== void 0 ? _l_3 : "")));
                            break;
                        }
                }
            }
        }
    }), i ? H(t) : e;
}
function Co(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    var i = _e1.get(e);
    if (i === null) return null;
    var _i = _sliced_to_array._(i, 2), t = _i[0], n = _i[1];
    if (n === null) return "".concat(t);
    if (t === 0 && je(e)) return "0";
    switch(n.toLowerCase()){
        case "in":
            return "".concat(t * 96, "px");
        case "cm":
            return "".concat(t * 96 / 2.54, "px");
        case "mm":
            return "".concat(t * 96 / 2.54 / 10, "px");
        case "q":
            return "".concat(t * 96 / 2.54 / 10 / 4, "px");
        case "pc":
            return "".concat(t * 96 / 6, "px");
        case "pt":
            return "".concat(t * 96 / 72, "px");
        case "rem":
            return r !== null ? "".concat(t * r, "px") : null;
        case "grad":
            return "".concat(t * .9, "deg");
        case "rad":
            return "".concat(t * 180 / Math.PI, "deg");
        case "turn":
            return "".concat(t * 360, "deg");
        case "ms":
            return "".concat(t / 1e3, "s");
        case "khz":
            return "".concat(t * 1e3, "hz");
        default:
            return "".concat(t).concat(n);
    }
}
function ni(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "top", i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "right", t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "bottom", n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "left";
    return si("".concat(e, "-").concat(r), "".concat(e, "-").concat(i), "".concat(e, "-").concat(t), "".concat(e, "-").concat(n));
}
function si() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "top", r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "right", i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "bottom", t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "left";
    return {
        1: [
            [
                e,
                0
            ],
            [
                r,
                0
            ],
            [
                i,
                0
            ],
            [
                t,
                0
            ]
        ],
        2: [
            [
                e,
                0
            ],
            [
                r,
                1
            ],
            [
                i,
                0
            ],
            [
                t,
                1
            ]
        ],
        3: [
            [
                e,
                0
            ],
            [
                r,
                1
            ],
            [
                i,
                2
            ],
            [
                t,
                1
            ]
        ],
        4: [
            [
                e,
                0
            ],
            [
                r,
                1
            ],
            [
                i,
                2
            ],
            [
                t,
                3
            ]
        ]
    };
}
function Ie(e, r) {
    return {
        1: [
            [
                e,
                0
            ],
            [
                r,
                0
            ]
        ],
        2: [
            [
                e,
                0
            ],
            [
                r,
                1
            ]
        ]
    };
}
var oi = {
    inset: si(),
    margin: ni("margin"),
    padding: ni("padding"),
    gap: Ie("row-gap", "column-gap")
}, ai = {
    "inset-block": Ie("top", "bottom"),
    "inset-inline": Ie("left", "right"),
    "margin-block": Ie("margin-top", "margin-bottom"),
    "margin-inline": Ie("margin-left", "margin-right"),
    "padding-block": Ie("padding-top", "padding-bottom"),
    "padding-inline": Ie("padding-left", "padding-right")
}, li = {
    "border-block": [
        "border-bottom",
        "border-top"
    ],
    "border-block-color": [
        "border-bottom-color",
        "border-top-color"
    ],
    "border-block-style": [
        "border-bottom-style",
        "border-top-style"
    ],
    "border-block-width": [
        "border-bottom-width",
        "border-top-width"
    ],
    "border-inline": [
        "border-left",
        "border-right"
    ],
    "border-inline-color": [
        "border-left-color",
        "border-right-color"
    ],
    "border-inline-style": [
        "border-left-style",
        "border-right-style"
    ],
    "border-inline-width": [
        "border-left-width",
        "border-right-width"
    ]
};
function ui(e, r) {
    if (r & 2) {
        var _li_e_property;
        if (e.property in ai) {
            var _ai_e_property_i_length;
            var i = L(e.value, " ");
            return (_ai_e_property_i_length = ai[e.property][i.length]) === null || _ai_e_property_i_length === void 0 ? void 0 : _ai_e_property_i_length.map(function(param) {
                var _param = _sliced_to_array._(param, 2), t = _param[0], n = _param[1];
                return a(t, i[n], e.important);
            });
        }
        if (e.property in li) return (_li_e_property = li[e.property]) === null || _li_e_property === void 0 ? void 0 : _li_e_property.map(function(i) {
            return a(i, e.value, e.important);
        });
    }
    if (e.property in oi) {
        var _oi_e_property_i_length;
        var i1 = L(e.value, " ");
        return (_oi_e_property_i_length = oi[e.property][i1.length]) === null || _oi_e_property_i_length === void 0 ? void 0 : _oi_e_property_i_length.map(function(param) {
            var _param = _sliced_to_array._(param, 2), t = _param[0], n = _param[1];
            return a(t, i1[n], e.important);
        });
    }
    return null;
}
function So(e) {
    return {
        kind: "combinator",
        value: e
    };
}
function $o(e, r) {
    return {
        kind: "function",
        value: e,
        nodes: r
    };
}
function Se(e) {
    return {
        kind: "selector",
        value: e
    };
}
function To(e) {
    return {
        kind: "separator",
        value: e
    };
}
function Eo(e) {
    return {
        kind: "value",
        value: e
    };
}
function me(e) {
    var r = "";
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = e[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var i = _step.value;
            switch(i.kind){
                case "combinator":
                case "selector":
                case "separator":
                case "value":
                    {
                        r += i.value;
                        break;
                    }
                case "function":
                    r += i.value + "(" + me(i.nodes) + ")";
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return r;
}
var ci = 92, No = 93, fi = 41, Vo = 58, pi = 44, Ro = 34, Oo = 46, di = 62, mi = 10, Po = 35, gi = 91, hi = 40, vi = 43, _o = 39, ki = 32, wi = 9, yi = 126, Io = 38, Do = 42;
function De(e) {
    e = e.replaceAll("\r\n", "\n");
    var r = [], i = [], t = null, n = "", l;
    for(var o = 0; o < e.length; o++){
        var f = e.charCodeAt(o);
        switch(f){
            case pi:
            case di:
            case mi:
            case ki:
            case vi:
            case wi:
            case yi:
                {
                    if (n.length > 0) {
                        var p = Se(n);
                        t ? t.nodes.push(p) : r.push(p), n = "";
                    }
                    var u = o, c = o + 1;
                    for(; c < e.length && (l = e.charCodeAt(c), !(l !== pi && l !== di && l !== mi && l !== ki && l !== vi && l !== wi && l !== yi)); c++);
                    o = c - 1;
                    var m = e.slice(u, c), d = m.trim() === "," ? To(m) : So(m);
                    t ? t.nodes.push(d) : r.push(d);
                    break;
                }
            case hi:
                {
                    var u1 = $o(n, []);
                    if (n = "", u1.value !== ":not" && u1.value !== ":where" && u1.value !== ":has" && u1.value !== ":is") {
                        var c1 = o + 1, m1 = 0;
                        for(var p1 = o + 1; p1 < e.length; p1++){
                            if (l = e.charCodeAt(p1), l === hi) {
                                m1++;
                                continue;
                            }
                            if (l === fi) {
                                if (m1 === 0) {
                                    o = p1;
                                    break;
                                }
                                m1--;
                            }
                        }
                        var d1 = o;
                        u1.nodes.push(Eo(e.slice(c1, d1))), n = "", o = d1, t ? t.nodes.push(u1) : r.push(u1);
                        break;
                    }
                    t ? t.nodes.push(u1) : r.push(u1), i.push(u1), t = u1;
                    break;
                }
            case fi:
                {
                    var u2 = i.pop();
                    if (n.length > 0) {
                        var c2 = Se(n);
                        u2.nodes.push(c2), n = "";
                    }
                    i.length > 0 ? t = i[i.length - 1] : t = null;
                    break;
                }
            case Oo:
            case Vo:
            case Po:
                {
                    if (n.length > 0) {
                        var u3 = Se(n);
                        t ? t.nodes.push(u3) : r.push(u3);
                    }
                    n = e[o];
                    break;
                }
            case gi:
                {
                    if (n.length > 0) {
                        var m2 = Se(n);
                        t ? t.nodes.push(m2) : r.push(m2);
                    }
                    n = "";
                    var u4 = o, c3 = 0;
                    for(var m3 = o + 1; m3 < e.length; m3++){
                        if (l = e.charCodeAt(m3), l === gi) {
                            c3++;
                            continue;
                        }
                        if (l === No) {
                            if (c3 === 0) {
                                o = m3;
                                break;
                            }
                            c3--;
                        }
                    }
                    n += e.slice(u4, o + 1);
                    break;
                }
            case _o:
            case Ro:
                {
                    var u5 = o;
                    for(var c4 = o + 1; c4 < e.length; c4++)if (l = e.charCodeAt(c4), l === ci) c4 += 1;
                    else if (l === f) {
                        o = c4;
                        break;
                    }
                    n += e.slice(u5, o + 1);
                    break;
                }
            case Io:
            case Do:
                {
                    if (n.length > 0) {
                        var u6 = Se(n);
                        t ? t.nodes.push(u6) : r.push(u6), n = "";
                    }
                    t ? t.nodes.push(Se(e[o])) : r.push(Se(e[o]));
                    break;
                }
            case ci:
                {
                    n += e[o] + e[o + 1], o += 1;
                    break;
                }
            default:
                n += e[o];
        }
    }
    return n.length > 0 && r.push(Se(n)), r;
}
function ce(e, r) {
    for(var i in e)delete e[i];
    return Object.assign(e, r);
}
function Ue(e) {
    var r = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = L(e, ".")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var i = _step.value;
            if (!i.includes("[")) {
                r.push(i);
                continue;
            }
            var t = 0;
            for(;;){
                var n = i.indexOf("[", t), l = i.indexOf("]", n);
                if (n === -1 || l === -1) break;
                n > t && r.push(i.slice(t, n)), r.push(i.slice(n + 1, l)), t = l + 1;
            }
            t <= i.length - 1 && r.push(i.slice(t));
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return r;
}
function tr(e, r) {
    var _i_storage, _Ci, _i_storage1, _Si, _i_storage2, _$i, _i_storage3, _Ti, _i_storage4, _Ei, _i_storage5, _ir, _i_storage6, _$t, _i_storage7, _ge, _i_storage8, _nr, _i_storage9, _Tt, _i_storage10, _or, _i_storage11, _Nt, _i_storage12, _Ri;
    var i = e;
    var _, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12;
    return (_ = (_i_storage = i.storage)[_Ci = Ci]) !== null && _ !== void 0 ? _ : _i_storage[_Ci] = Uo(), (_1 = (_i_storage1 = i.storage)[_Si = Si]) !== null && _1 !== void 0 ? _1 : _i_storage1[_Si] = Ko(i), (_2 = (_i_storage2 = i.storage)[_$i = $i]) !== null && _2 !== void 0 ? _2 : _i_storage2[_$i] = jo(), (_3 = (_i_storage3 = i.storage)[_Ti = Ti]) !== null && _3 !== void 0 ? _3 : _i_storage3[_Ti] = Wo(), (_4 = (_i_storage4 = i.storage)[_Ei = Ei]) !== null && _4 !== void 0 ? _4 : _i_storage4[_Ei] = Yo(), (_5 = (_i_storage5 = i.storage)[_ir = ir]) !== null && _5 !== void 0 ? _5 : _i_storage5[_ir] = Qo(i), (_6 = (_i_storage6 = i.storage)[_$t = $t]) !== null && _6 !== void 0 ? _6 : _i_storage6[_$t] = ea(i, r), (_7 = (_i_storage7 = i.storage)[_ge = ge]) !== null && _7 !== void 0 ? _7 : _i_storage7[_ge] = pa(i), (_8 = (_i_storage8 = i.storage)[_nr = nr]) !== null && _8 !== void 0 ? _8 : _i_storage8[_nr] = ma(), (_9 = (_i_storage9 = i.storage)[_Tt = Tt]) !== null && _9 !== void 0 ? _9 : _i_storage9[_Tt] = ga(i), (_10 = (_i_storage10 = i.storage)[_or = or]) !== null && _10 !== void 0 ? _10 : _i_storage10[_or] = ha(i), (_11 = (_i_storage11 = i.storage)[_Nt = Nt]) !== null && _11 !== void 0 ? _11 : _i_storage11[_Nt] = va(i), (_12 = (_i_storage12 = i.storage)[_Ri = Ri]) !== null && _12 !== void 0 ? _12 : _i_storage12[_Ri] = ka(i), i;
}
var Ci = Symbol();
function Uo() {
    return new U(function(e) {
        return new U(function(r) {
            return {
                rem: e,
                features: r
            };
        });
    });
}
function Lo(e, r) {
    var i = 0;
    var _r_rem;
    return (r === null || r === void 0 ? void 0 : r.collapse) && (i |= 1), (r === null || r === void 0 ? void 0 : r.logicalToPhysical) && (i |= 2), tr(e, r).storage[Ci].get((_r_rem = r === null || r === void 0 ? void 0 : r.rem) !== null && _r_rem !== void 0 ? _r_rem : null).get(i);
}
var Si = Symbol();
function Ko(e) {
    return new U(function(r) {
        return new U(function(i) {
            return {
                features: i,
                designSystem: e,
                signatureOptions: r
            };
        });
    });
}
function zo(e, r, i) {
    var t = 0;
    return (i === null || i === void 0 ? void 0 : i.collapse) && (t |= 1), tr(e).storage[Si].get(r).get(t);
}
function rr(e, r, i) {
    var t = Lo(e, i), n = zo(e, t, i), l = tr(e), o = new Set, f = l.storage[$i].get(n);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = r[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var u = _step.value;
            o.add(f.get(u));
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return o.size <= 1 || !(n.features & 1) ? Array.from(o) : Mo(n, Array.from(o));
}
function Mo(e, r) {
    if (r.length <= 1) return r;
    var i = e.designSystem, t = new U(function(f) {
        return new U(function(u) {
            return new Set;
        });
    }), n = e.designSystem.theme.prefix ? "".concat(e.designSystem.theme.prefix, ":") : "";
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = r[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var f = _step.value;
            var u = L(f, ":"), c = u.pop(), m = c.endsWith("!");
            m && (c = c.slice(0, -1));
            var d = u.length > 0 ? "".concat(u.join(":"), ":") : "", p = m ? "!" : "";
            t.get(d).get(p).add("".concat(n).concat(c));
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    var l = new Set;
    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined, _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined, _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
    try {
        for(var _iterator1 = t.entries()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion3 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion3 = true){
            var _step_value = _sliced_to_array._(_step1.value, 2), f1 = _step_value[0], u1 = _step_value[1];
            try {
                for(var _iterator2 = u1.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                    var _step_value1 = _sliced_to_array._(_step2.value, 2), c1 = _step_value1[0], m1 = _step_value1[1];
                    try {
                        for(var _iterator3 = o(Array.from(m1))[Symbol.iterator](), _step3; !(_iteratorNormalCompletion1 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion1 = true){
                            var d1 = _step3.value;
                            n && d1.startsWith(n) && (d1 = d1.slice(n.length)), l.add("".concat(f1).concat(d1).concat(c1));
                        }
                    } catch (err) {
                        _didIteratorError1 = true;
                        _iteratorError1 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion1 && _iterator3.return != null) {
                                _iterator3.return();
                            }
                        } finally{
                            if (_didIteratorError1) {
                                throw _iteratorError1;
                            }
                        }
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                        _iterator2.return();
                    }
                } finally{
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion3 && _iterator1.return != null) {
                _iterator1.return();
            }
        } finally{
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }
    return Array.from(l);
    //TURBOPACK unreachable
    ;
    function o(f) {
        var u = e.signatureOptions, c = i.storage[Tt].get(u), m = i.storage[nr].get(u), d = f.map(function(S) {
            return c.get(S);
        });
        if (d.some(function(S) {
            return S.has("line-height");
        })) {
            var S = i.theme.keysInNamespaces([
                "--text"
            ]);
            if (S.length > 0) {
                var A = new Set, y = new Set;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined, _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator = d[Symbol.iterator](), _step; !(_iteratorNormalCompletion1 = (_step = _iterator.next()).done); _iteratorNormalCompletion1 = true){
                        var N = _step.value;
                        try {
                            for(var _iterator1 = N.get("line-height")[Symbol.iterator](), _step1; !(_iteratorNormalCompletion = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion = true){
                                var P = _step1.value;
                                var _i_storage_$t;
                                if (y.has(P)) continue;
                                y.add(P);
                                var _i_storage_$t_get;
                                var z = (_i_storage_$t_get = (_i_storage_$t = i.storage[$t]) === null || _i_storage_$t === void 0 ? void 0 : _i_storage_$t.get(P)) !== null && _i_storage_$t_get !== void 0 ? _i_storage_$t_get : null;
                                if (z !== null) if (ne(z)) {
                                    A.add(z);
                                    var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                                    try {
                                        for(var _iterator2 = S[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                                            var I = _step2.value;
                                            c.get("text-".concat(I, "/").concat(z));
                                        }
                                    } catch (err) {
                                        _didIteratorError2 = true;
                                        _iteratorError2 = err;
                                    } finally{
                                        try {
                                            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                                                _iterator2.return();
                                            }
                                        } finally{
                                            if (_didIteratorError2) {
                                                throw _iteratorError2;
                                            }
                                        }
                                    }
                                } else {
                                    A.add(P);
                                    var _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
                                    try {
                                        for(var _iterator3 = S[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                                            var I1 = _step3.value;
                                            c.get("text-".concat(I1, "/[").concat(P, "]"));
                                        }
                                    } catch (err) {
                                        _didIteratorError3 = true;
                                        _iteratorError3 = err;
                                    } finally{
                                        try {
                                            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                                                _iterator3.return();
                                            }
                                        } finally{
                                            if (_didIteratorError3) {
                                                throw _iteratorError3;
                                            }
                                        }
                                    }
                                }
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion && _iterator1.return != null) {
                                    _iterator1.return();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
                var K = new Set;
                var _iteratorNormalCompletion4 = true, _didIteratorError4 = false, _iteratorError4 = undefined, _iteratorNormalCompletion5 = true, _didIteratorError5 = false, _iteratorError5 = undefined;
                try {
                    for(var _iterator4 = d[Symbol.iterator](), _step4; !(_iteratorNormalCompletion5 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion5 = true){
                        var N1 = _step4.value;
                        try {
                            for(var _iterator5 = N1.get("font-size")[Symbol.iterator](), _step5; !(_iteratorNormalCompletion4 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion4 = true){
                                var P1 = _step5.value;
                                if (!K.has(P1)) {
                                    K.add(P1);
                                    var _iteratorNormalCompletion6 = true, _didIteratorError6 = false, _iteratorError6 = undefined;
                                    try {
                                        for(var _iterator6 = A[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true){
                                            var z1 = _step6.value;
                                            ne(z1) ? c.get("text-[".concat(P1, "]/").concat(z1)) : c.get("text-[".concat(P1, "]/[").concat(z1, "]"));
                                        }
                                    } catch (err) {
                                        _didIteratorError6 = true;
                                        _iteratorError6 = err;
                                    } finally{
                                        try {
                                            if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                                                _iterator6.return();
                                            }
                                        } finally{
                                            if (_didIteratorError6) {
                                                throw _iteratorError6;
                                            }
                                        }
                                    }
                                }
                            }
                        } catch (err) {
                            _didIteratorError4 = true;
                            _iteratorError4 = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion4 && _iterator5.return != null) {
                                    _iterator5.return();
                                }
                            } finally{
                                if (_didIteratorError4) {
                                    throw _iteratorError4;
                                }
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError5 = true;
                    _iteratorError5 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion5 && _iterator4.return != null) {
                            _iterator4.return();
                        }
                    } finally{
                        if (_didIteratorError5) {
                            throw _iteratorError5;
                        }
                    }
                }
            }
        }
        var p = d.map(function(S) {
            var A = null;
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = S.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var y = _step.value;
                    var K = new Set;
                    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined, _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                    try {
                        for(var _iterator1 = m.get(y).values()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion2 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion2 = true){
                            var N = _step1.value;
                            try {
                                for(var _iterator2 = N[Symbol.iterator](), _step2; !(_iteratorNormalCompletion1 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion1 = true){
                                    var P = _step2.value;
                                    K.add(P);
                                }
                            } catch (err) {
                                _didIteratorError1 = true;
                                _iteratorError1 = err;
                            } finally{
                                try {
                                    if (!_iteratorNormalCompletion1 && _iterator2.return != null) {
                                        _iterator2.return();
                                    }
                                } finally{
                                    if (_didIteratorError1) {
                                        throw _iteratorError1;
                                    }
                                }
                            }
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator1.return != null) {
                                _iterator1.return();
                            }
                        } finally{
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }
                    if (A === null ? A = K : A = Ai(A, K), A.size === 0) return A;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            return A;
        }), k = new U(function(S) {
            return new Set([
                S
            ]);
        });
        for(var S1 = 0; S1 < p.length; S1++){
            var A1 = p[S1];
            for(var y1 = S1 + 1; y1 < p.length; y1++){
                var K1 = p[y1];
                var _iteratorNormalCompletion7 = true, _didIteratorError7 = false, _iteratorError7 = undefined;
                try {
                    for(var _iterator7 = A1[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true){
                        var N2 = _step7.value;
                        if (K1.has(N2)) {
                            k.get(S1).add(y1), k.get(y1).add(S1);
                            break;
                        }
                    }
                } catch (err) {
                    _didIteratorError7 = true;
                    _iteratorError7 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
                            _iterator7.return();
                        }
                    } finally{
                        if (_didIteratorError7) {
                            throw _iteratorError7;
                        }
                    }
                }
            }
        }
        if (k.size === 0) return f;
        var h = new U(function(S) {
            return S.split(",").map(Number);
        });
        var _iteratorNormalCompletion8 = true, _didIteratorError8 = false, _iteratorError8 = undefined;
        try {
            for(var _iterator8 = k.values()[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true){
                var S2 = _step8.value;
                var A2 = Array.from(S2).sort(function(y, K) {
                    return y - K;
                });
                h.get(A2.join(","));
            }
        } catch (err) {
            _didIteratorError8 = true;
            _iteratorError8 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
                    _iterator8.return();
                }
            } finally{
                if (_didIteratorError8) {
                    throw _iteratorError8;
                }
            }
        }
        var w1 = new Set(f), x = new Set;
        var _iteratorNormalCompletion9 = true, _didIteratorError9 = false, _iteratorError9 = undefined, _iteratorNormalCompletion10 = true, _didIteratorError10 = false, _iteratorError10 = undefined;
        try {
            for(var _iterator9 = h.values()[Symbol.iterator](), _step9; !(_iteratorNormalCompletion10 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion10 = true){
                var S3 = _step9.value;
                try {
                    for(var _iterator10 = ya(S3)[Symbol.iterator](), _step10; !(_iteratorNormalCompletion9 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion9 = true){
                        var A3 = _step10.value;
                        if (A3.some(function(N) {
                            return x.has(f[N]);
                        })) continue;
                        var y2 = A3.flatMap(function(N) {
                            return p[N];
                        }).reduce(Ai), K2 = i.storage[ge].get(u).get(A3.map(function(N) {
                            return f[N];
                        }).sort(function(N, P) {
                            return N.localeCompare(P);
                        }).join(" "));
                        var _iteratorNormalCompletion11 = true, _didIteratorError11 = false, _iteratorError11 = undefined;
                        try {
                            for(var _iterator11 = y2[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true){
                                var N3 = _step11.value;
                                if (i.storage[ge].get(u).get(N3) === K2) {
                                    var _iteratorNormalCompletion12 = true, _didIteratorError12 = false, _iteratorError12 = undefined;
                                    try {
                                        for(var _iterator12 = A3[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true){
                                            var z2 = _step12.value;
                                            x.add(f[z2]);
                                        }
                                    } catch (err) {
                                        _didIteratorError12 = true;
                                        _iteratorError12 = err;
                                    } finally{
                                        try {
                                            if (!_iteratorNormalCompletion12 && _iterator12.return != null) {
                                                _iterator12.return();
                                            }
                                        } finally{
                                            if (_didIteratorError12) {
                                                throw _iteratorError12;
                                            }
                                        }
                                    }
                                    w1.add(N3);
                                    break;
                                }
                            }
                        } catch (err) {
                            _didIteratorError11 = true;
                            _iteratorError11 = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion11 && _iterator11.return != null) {
                                    _iterator11.return();
                                }
                            } finally{
                                if (_didIteratorError11) {
                                    throw _iteratorError11;
                                }
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError9 = true;
                    _iteratorError9 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion9 && _iterator10.return != null) {
                            _iterator10.return();
                        }
                    } finally{
                        if (_didIteratorError9) {
                            throw _iteratorError9;
                        }
                    }
                }
            }
        } catch (err) {
            _didIteratorError10 = true;
            _iteratorError10 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion10 && _iterator9.return != null) {
                    _iterator9.return();
                }
            } finally{
                if (_didIteratorError10) {
                    throw _iteratorError10;
                }
            }
        }
        var _iteratorNormalCompletion13 = true, _didIteratorError13 = false, _iteratorError13 = undefined;
        try {
            for(var _iterator13 = x[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true){
                var S4 = _step13.value;
                w1.delete(S4);
            }
        } catch (err) {
            _didIteratorError13 = true;
            _iteratorError13 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion13 && _iterator13.return != null) {
                    _iterator13.return();
                }
            } finally{
                if (_didIteratorError13) {
                    throw _iteratorError13;
                }
            }
        }
        return Array.from(w1);
    }
}
var $i = Symbol();
function jo() {
    return new U(function(e) {
        var r = e.designSystem, i = r.theme.prefix ? "".concat(r.theme.prefix, ":") : "", t = r.storage[Ti].get(e), n = r.storage[Ei].get(e);
        return new U(function(l, o) {
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = r.parseCandidate(l)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var f = _step.value;
                    var u = f.variants.slice().reverse().flatMap(function(d) {
                        return t.get(d);
                    }), c = f.important;
                    if (c || u.length > 0) {
                        var p = o.get(r.printCandidate(_object_spread_props._(_object_spread._({}, f), {
                            variants: [],
                            important: !1
                        })));
                        return r.theme.prefix !== null && u.length > 0 && (p = p.slice(i.length)), u.length > 0 && (p = "".concat(u.map(function(k) {
                            return r.printVariant(k);
                        }).join(":"), ":").concat(p)), c && (p += "!"), r.theme.prefix !== null && u.length > 0 && (p = "".concat(i).concat(p)), p;
                    }
                    var m = n.get(l);
                    if (m !== l) return m;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            return l;
        });
    });
}
var Fo = [
    Zo,
    ua,
    ca,
    aa
], Ti = Symbol();
function Wo() {
    return new U(function(e) {
        return new U(function(r) {
            var i = [
                r
            ];
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined, _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
            try {
                for(var _iterator = Fo[Symbol.iterator](), _step; !(_iteratorNormalCompletion1 = (_step = _iterator.next()).done); _iteratorNormalCompletion1 = true){
                    var t = _step.value;
                    try {
                        for(var _iterator1 = i.splice(0)[Symbol.iterator](), _step1; !(_iteratorNormalCompletion = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion = true){
                            var n = _step1.value;
                            var l = t(Me(n), e);
                            if (Array.isArray(l)) {
                                var _i;
                                (_i = i).push.apply(_i, _to_consumable_array._(l));
                                continue;
                            } else i.push(l);
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator1.return != null) {
                                _iterator1.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                }
            } catch (err) {
                _didIteratorError1 = true;
                _iteratorError1 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion1 && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError1) {
                        throw _iteratorError1;
                    }
                }
            }
            return i;
        });
    });
}
var Bo = [
    Go,
    Ho,
    ta,
    ia,
    oa,
    la,
    sa,
    fa
], Ei = Symbol();
function Yo() {
    return new U(function(e) {
        var r = e.designSystem;
        return new U(function(i) {
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = r.parseCandidate(i)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var t = _step.value;
                    var n = Lr(t);
                    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        for(var _iterator1 = Bo[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                            var o = _step1.value;
                            n = o(n, e);
                        }
                    } catch (err) {
                        _didIteratorError1 = true;
                        _iteratorError1 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                _iterator1.return();
                            }
                        } finally{
                            if (_didIteratorError1) {
                                throw _iteratorError1;
                            }
                        }
                    }
                    var l = r.printCandidate(n);
                    if (i !== l) return l;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            return i;
        });
    });
}
var qo = [
    "t",
    "tr",
    "r",
    "br",
    "b",
    "bl",
    "l",
    "tl"
];
function Go(e) {
    if (e.kind === "static" && e.root.startsWith("bg-gradient-to-")) {
        var r = e.root.slice(15);
        return qo.includes(r) && (e.root = "bg-linear-to-".concat(r)), e;
    }
    return e;
}
function Ho(e, r) {
    var _e_value;
    var i = r.designSystem.storage[ir];
    if (e.kind === "arbitrary") {
        var _i = _sliced_to_array._(i(e.value, e.modifier === null ? 1 : 0), 2), t = _i[0], n = _i[1];
        t !== e.value && (e.value = t, n !== null && (e.modifier = n));
    } else if (e.kind === "functional" && ((_e_value = e.value) === null || _e_value === void 0 ? void 0 : _e_value.kind) === "arbitrary") {
        var _i1 = _sliced_to_array._(i(e.value.value, e.modifier === null ? 1 : 0), 2), t1 = _i1[0], n1 = _i1[1];
        t1 !== e.value.value && (e.value.value = t1, n1 !== null && (e.modifier = n1));
    }
    return e;
}
function Zo(e, r) {
    var _n_value;
    var i = r.designSystem.storage[ir], t = Et(e);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = t[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array._(_step.value, 1), n = _step_value[0];
            if (n.kind === "arbitrary") {
                var _i = _sliced_to_array._(i(n.selector, 2), 1), l = _i[0];
                l !== n.selector && (n.selector = l);
            } else if (n.kind === "functional" && ((_n_value = n.value) === null || _n_value === void 0 ? void 0 : _n_value.kind) === "arbitrary") {
                var _i1 = _sliced_to_array._(i(n.value.value, 2), 1), l1 = _i1[0];
                l1 !== n.value.value && (n.value.value = l1);
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return e;
}
var ir = Symbol();
function Qo(e) {
    return r(e);
    //TURBOPACK unreachable
    ;
    function r(i) {
        function t(f) {
            var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            var c = B(f);
            if (u & 2) return [
                Ct(c, o),
                null
            ];
            var m = 0, d = 0;
            if (_(c, function(h) {
                h.kind === "function" && h.value === "theme" && (m += 1, _(h.nodes, function(w1) {
                    return w1.kind === "separator" && w1.value.includes(",") ? V.Stop : w1.kind === "word" && w1.value === "/" ? (d += 1, V.Stop) : V.Skip;
                }));
            }), m === 0) return [
                f,
                null
            ];
            if (d === 0) return [
                Ct(c, l),
                null
            ];
            if (d > 1) return [
                Ct(c, o),
                null
            ];
            var p = null;
            return [
                Ct(c, function(h, w1) {
                    var x = L(h, "/").map(function(S) {
                        return S.trim();
                    });
                    if (x.length > 2) return null;
                    if (c.length === 1 && x.length === 2 && u & 1) {
                        var _x = _sliced_to_array._(x, 2), S = _x[0], A = _x[1];
                        if (/^\d+%$/.test(A)) p = {
                            kind: "named",
                            value: A.slice(0, -1)
                        };
                        else if (/^0?\.\d+$/.test(A)) {
                            var y = Number(A) * 100;
                            p = {
                                kind: Number.isInteger(y) ? "named" : "arbitrary",
                                value: y.toString()
                            };
                        } else p = {
                            kind: "arbitrary",
                            value: A
                        };
                        h = S;
                    }
                    return l(h, w1) || o(h, w1);
                }),
                p
            ];
        }
        function n(f) {
            var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
            var c = "--".concat(Ye(Ue(f)));
            return i.theme.get([
                c
            ]) ? u && i.theme.prefix ? "--".concat(i.theme.prefix, "-").concat(c.slice(2)) : c : null;
        }
        function l(f, u) {
            var c = n(f);
            if (c) return u ? "var(".concat(c, ", ").concat(u, ")") : "var(".concat(c, ")");
            var m = Ue(f);
            if (m[0] === "spacing" && i.theme.get([
                "--spacing"
            ])) {
                var d = m[1];
                return ne(d) ? "--spacing(".concat(d, ")") : null;
            }
            return null;
        }
        function o(f, u) {
            var c = L(f, "/").map(function(p) {
                return p.trim();
            });
            f = c.shift();
            var m = n(f, !1);
            if (!m) return null;
            var d = c.length > 0 ? "/".concat(c.join("/")) : "";
            return u ? "--theme(".concat(m).concat(d, ", ").concat(u, ")") : "--theme(".concat(m).concat(d, ")");
        }
        return t;
    }
}
function Ct(e, r) {
    return _(e, function(i, t) {
        if (i.kind === "function" && i.value === "theme") {
            if (i.nodes.length < 1) return;
            i.nodes[0].kind === "separator" && i.nodes[0].value.trim() === "" && i.nodes.shift();
            var n = i.nodes[0];
            if (n.kind !== "word") return;
            var l = n.value, o = 1;
            for(var c = o; c < i.nodes.length && !i.nodes[c].value.includes(","); c++)l += H([
                i.nodes[c]
            ]), o = c + 1;
            l = Jo(l);
            var f = i.nodes.slice(o + 1), u = f.length > 0 ? r(l, H(f)) : r(l);
            if (u === null) return;
            if (t.parent) {
                var c1 = t.parent.nodes.indexOf(i) - 1;
                for(; c1 !== -1;){
                    var m = t.parent.nodes[c1];
                    if (m.kind === "separator" && m.value.trim() === "") {
                        c1 -= 1;
                        continue;
                    }
                    /^[-+*/]$/.test(m.value.trim()) && (u = "(".concat(u, ")"));
                    break;
                }
            }
            return V.Replace(B(u));
        }
    }), H(e);
}
function Jo(e) {
    if (e[0] !== "'" && e[0] !== '"') return e;
    var r = "", i = e[0];
    for(var t = 1; t < e.length - 1; t++){
        var n = e[t], l = e[t + 1];
        n === "\\" && (l === i || l === "\\") ? (r += l, t++) : r += n;
    }
    return r;
}
function Et(e) {
    function r(i) {
        var t, _tmp;
        var _arguments = arguments;
        return _ts_generator._(this, function(_state) {
            switch(_state.label){
                case 0:
                    t = _arguments.length > 1 && _arguments[1] !== void 0 ? _arguments[1] : null;
                    return [
                        4,
                        [
                            i,
                            t
                        ]
                    ];
                case 1:
                    _state.sent();
                    _tmp = i.kind === "compound";
                    if (!_tmp) return [
                        3,
                        3
                    ];
                    return [
                        5,
                        _ts_values._(r(i.variant, i))
                    ];
                case 2:
                    _tmp = _state.sent();
                    _state.label = 3;
                case 3:
                    _tmp;
                    return [
                        2
                    ];
            }
        });
    }
    return _ts_generator._(this, function(_state) {
        switch(_state.label){
            case 0:
                return [
                    5,
                    _ts_values._(r(e, null))
                ];
            case 1:
                _state.sent();
                return [
                    2
                ];
        }
    });
}
function be(e, r) {
    return e.parseCandidate(e.theme.prefix && !r.startsWith("".concat(e.theme.prefix, ":")) ? "".concat(e.theme.prefix, ":").concat(r) : r);
}
function Xo(e, r) {
    var i = e.printCandidate(r);
    return e.theme.prefix && i.startsWith("".concat(e.theme.prefix, ":")) ? i.slice(e.theme.prefix.length + 1) : i;
}
var $t = Symbol();
function ea(e, r) {
    var i = e.resolveThemeValue("--spacing");
    if (i === void 0) return null;
    var _r_rem;
    i = At(i, (_r_rem = r === null || r === void 0 ? void 0 : r.rem) !== null && _r_rem !== void 0 ? _r_rem : null);
    var t = _e1.get(i);
    if (!t) return null;
    var _t = _sliced_to_array._(t, 2), n = _t[0], l = _t[1];
    return new U(function(o) {
        if (n === 0) return null;
        var _r_rem;
        var f = _e1.get(At(o, (_r_rem = r === null || r === void 0 ? void 0 : r.rem) !== null && _r_rem !== void 0 ? _r_rem : null));
        if (!f) return null;
        var _f = _sliced_to_array._(f, 2), u = _f[0], c = _f[1];
        return c !== l ? null : u / n;
    });
}
function ta(e, r) {
    var _e_value;
    if (e.kind !== "arbitrary" && !(e.kind === "functional" && ((_e_value = e.value) === null || _e_value === void 0 ? void 0 : _e_value.kind) === "arbitrary")) return e;
    var i = r.designSystem, t = i.storage[or].get(r.signatureOptions), n = i.storage[ge].get(r.signatureOptions), l = i.printCandidate(e), o = n.get(l);
    if (typeof o != "string") return e;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = f(o, e)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var u = _step.value;
            var c = i.printCandidate(u);
            if (n.get(c) === o && ra(i, e, u)) return u;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return e;
    //TURBOPACK unreachable
    ;
    function f(u, c) {
        var m, d, p, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, k, err, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, d1, err, _c_value, _c_value1, _i_storage_$t, _c_value_value, d2, _i_storage_$t1, _i_storage_$t_get, h, _tmp, _i_storage_$t_get1, p1, k1, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, h1, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, w1, err, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, w2, err, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, w3, err, _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, w4, err, _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, w5, err, _iteratorNormalCompletion8, _didIteratorError8, _iteratorError8, _iterator8, _step8, w6, err, err;
        return _ts_generator._(this, function(_state) {
            switch(_state.label){
                case 0:
                    m = t.get(u);
                    if (!!(m.length > 1)) return [
                        3,
                        74
                    ];
                    if (!(m.length === 0 && c.modifier)) return [
                        3,
                        8
                    ];
                    d = _object_spread_props._(_object_spread._({}, c), {
                        modifier: null
                    }), p = n.get(i.printCandidate(d));
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    if (!(typeof p == "string")) return [
                        3,
                        8
                    ];
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        6,
                        7,
                        8
                    ]);
                    _iterator = f(p, d)[Symbol.iterator]();
                    _state.label = 2;
                case 2:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        5
                    ];
                    k = _step.value;
                    return [
                        4,
                        Object.assign({}, k, {
                            modifier: c.modifier
                        })
                    ];
                case 3:
                    _state.sent();
                    _state.label = 4;
                case 4:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        2
                    ];
                case 5:
                    return [
                        3,
                        8
                    ];
                case 6:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        8
                    ];
                case 7:
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                    return [
                        7
                    ];
                case 8:
                    _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    if (!(m.length === 1)) return [
                        3,
                        17
                    ];
                    _state.label = 9;
                case 9:
                    _state.trys.push([
                        9,
                        14,
                        15,
                        16
                    ]);
                    _iterator1 = be(i, m[0])[Symbol.iterator]();
                    _state.label = 10;
                case 10:
                    if (!!(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done)) return [
                        3,
                        13
                    ];
                    d1 = _step1.value;
                    return [
                        4,
                        d1
                    ];
                case 11:
                    _state.sent();
                    _state.label = 12;
                case 12:
                    _iteratorNormalCompletion1 = true;
                    return [
                        3,
                        10
                    ];
                case 13:
                    return [
                        3,
                        16
                    ];
                case 14:
                    err = _state.sent();
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                    return [
                        3,
                        16
                    ];
                case 15:
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                    return [
                        7
                    ];
                case 16:
                    return [
                        3,
                        74
                    ];
                case 17:
                    if (!(m.length === 0)) return [
                        3,
                        74
                    ];
                    d2 = c.kind === "arbitrary" ? c.value : (_c_value_value = (_c_value = c.value) === null || _c_value === void 0 ? void 0 : _c_value.value) !== null && _c_value_value !== void 0 ? _c_value_value : null;
                    if (d2 === null) return [
                        2
                    ];
                    if (!(r.signatureOptions.rem !== null && c.kind === "functional" && ((_c_value1 = c.value) === null || _c_value1 === void 0 ? void 0 : _c_value1.kind) === "arbitrary")) return [
                        3,
                        20
                    ];
                    h = (_i_storage_$t_get = (_i_storage_$t1 = i.storage[$t]) === null || _i_storage_$t1 === void 0 ? void 0 : _i_storage_$t1.get(d2)) !== null && _i_storage_$t_get !== void 0 ? _i_storage_$t_get : null;
                    _tmp = h !== null && ne(h);
                    if (!_tmp) return [
                        3,
                        19
                    ];
                    return [
                        4,
                        Object.assign({}, c, {
                            value: {
                                kind: "named",
                                value: h,
                                fraction: null
                            }
                        })
                    ];
                case 18:
                    _tmp = _state.sent();
                    _state.label = 19;
                case 19:
                    _tmp;
                    _state.label = 20;
                case 20:
                    p1 = (_i_storage_$t_get1 = (_i_storage_$t = i.storage[$t]) === null || _i_storage_$t === void 0 ? void 0 : _i_storage_$t.get(d2)) !== null && _i_storage_$t_get1 !== void 0 ? _i_storage_$t_get1 : null, k1 = "";
                    p1 !== null && p1 < 0 && (k1 = "-", p1 = Math.abs(p1));
                    _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                    _state.label = 21;
                case 21:
                    _state.trys.push([
                        21,
                        72,
                        73,
                        74
                    ]);
                    _iterator2 = Array.from(i.utilities.keys("functional")).sort(function(w1, x) {
                        return +(w1[0] === "-") - +(x[0] === "-");
                    })[Symbol.iterator]();
                    _state.label = 22;
                case 22:
                    if (!!(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done)) return [
                        3,
                        71
                    ];
                    h1 = _step2.value;
                    k1 && (h1 = "".concat(k1).concat(h1));
                    _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
                    _state.label = 23;
                case 23:
                    _state.trys.push([
                        23,
                        28,
                        29,
                        30
                    ]);
                    _iterator3 = be(i, "".concat(h1, "-").concat(d2))[Symbol.iterator]();
                    _state.label = 24;
                case 24:
                    if (!!(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done)) return [
                        3,
                        27
                    ];
                    w1 = _step3.value;
                    return [
                        4,
                        w1
                    ];
                case 25:
                    _state.sent();
                    _state.label = 26;
                case 26:
                    _iteratorNormalCompletion3 = true;
                    return [
                        3,
                        24
                    ];
                case 27:
                    return [
                        3,
                        30
                    ];
                case 28:
                    err = _state.sent();
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                    return [
                        3,
                        30
                    ];
                case 29:
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                            _iterator3.return();
                        }
                    } finally{
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                    return [
                        7
                    ];
                case 30:
                    _iteratorNormalCompletion4 = true, _didIteratorError4 = false, _iteratorError4 = undefined;
                    if (!c.modifier) return [
                        3,
                        38
                    ];
                    _state.label = 31;
                case 31:
                    _state.trys.push([
                        31,
                        36,
                        37,
                        38
                    ]);
                    _iterator4 = be(i, "".concat(h1, "-").concat(d2).concat(c.modifier))[Symbol.iterator]();
                    _state.label = 32;
                case 32:
                    if (!!(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done)) return [
                        3,
                        35
                    ];
                    w2 = _step4.value;
                    return [
                        4,
                        w2
                    ];
                case 33:
                    _state.sent();
                    _state.label = 34;
                case 34:
                    _iteratorNormalCompletion4 = true;
                    return [
                        3,
                        32
                    ];
                case 35:
                    return [
                        3,
                        38
                    ];
                case 36:
                    err = _state.sent();
                    _didIteratorError4 = true;
                    _iteratorError4 = err;
                    return [
                        3,
                        38
                    ];
                case 37:
                    try {
                        if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                            _iterator4.return();
                        }
                    } finally{
                        if (_didIteratorError4) {
                            throw _iteratorError4;
                        }
                    }
                    return [
                        7
                    ];
                case 38:
                    if (!(p1 !== null)) return [
                        3,
                        54
                    ];
                    _iteratorNormalCompletion5 = true, _didIteratorError5 = false, _iteratorError5 = undefined;
                    _state.label = 39;
                case 39:
                    _state.trys.push([
                        39,
                        44,
                        45,
                        46
                    ]);
                    _iterator5 = be(i, "".concat(h1, "-").concat(p1))[Symbol.iterator]();
                    _state.label = 40;
                case 40:
                    if (!!(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done)) return [
                        3,
                        43
                    ];
                    w3 = _step5.value;
                    return [
                        4,
                        w3
                    ];
                case 41:
                    _state.sent();
                    _state.label = 42;
                case 42:
                    _iteratorNormalCompletion5 = true;
                    return [
                        3,
                        40
                    ];
                case 43:
                    return [
                        3,
                        46
                    ];
                case 44:
                    err = _state.sent();
                    _didIteratorError5 = true;
                    _iteratorError5 = err;
                    return [
                        3,
                        46
                    ];
                case 45:
                    try {
                        if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                            _iterator5.return();
                        }
                    } finally{
                        if (_didIteratorError5) {
                            throw _iteratorError5;
                        }
                    }
                    return [
                        7
                    ];
                case 46:
                    _iteratorNormalCompletion6 = true, _didIteratorError6 = false, _iteratorError6 = undefined;
                    if (!c.modifier) return [
                        3,
                        54
                    ];
                    _state.label = 47;
                case 47:
                    _state.trys.push([
                        47,
                        52,
                        53,
                        54
                    ]);
                    _iterator6 = be(i, "".concat(h1, "-").concat(p1).concat(it(c.modifier)))[Symbol.iterator]();
                    _state.label = 48;
                case 48:
                    if (!!(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done)) return [
                        3,
                        51
                    ];
                    w4 = _step6.value;
                    return [
                        4,
                        w4
                    ];
                case 49:
                    _state.sent();
                    _state.label = 50;
                case 50:
                    _iteratorNormalCompletion6 = true;
                    return [
                        3,
                        48
                    ];
                case 51:
                    return [
                        3,
                        54
                    ];
                case 52:
                    err = _state.sent();
                    _didIteratorError6 = true;
                    _iteratorError6 = err;
                    return [
                        3,
                        54
                    ];
                case 53:
                    try {
                        if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                            _iterator6.return();
                        }
                    } finally{
                        if (_didIteratorError6) {
                            throw _iteratorError6;
                        }
                    }
                    return [
                        7
                    ];
                case 54:
                    _iteratorNormalCompletion7 = true, _didIteratorError7 = false, _iteratorError7 = undefined;
                    _state.label = 55;
                case 55:
                    _state.trys.push([
                        55,
                        60,
                        61,
                        62
                    ]);
                    _iterator7 = be(i, "".concat(h1, "-[").concat(d2, "]"))[Symbol.iterator]();
                    _state.label = 56;
                case 56:
                    if (!!(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done)) return [
                        3,
                        59
                    ];
                    w5 = _step7.value;
                    return [
                        4,
                        w5
                    ];
                case 57:
                    _state.sent();
                    _state.label = 58;
                case 58:
                    _iteratorNormalCompletion7 = true;
                    return [
                        3,
                        56
                    ];
                case 59:
                    return [
                        3,
                        62
                    ];
                case 60:
                    err = _state.sent();
                    _didIteratorError7 = true;
                    _iteratorError7 = err;
                    return [
                        3,
                        62
                    ];
                case 61:
                    try {
                        if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
                            _iterator7.return();
                        }
                    } finally{
                        if (_didIteratorError7) {
                            throw _iteratorError7;
                        }
                    }
                    return [
                        7
                    ];
                case 62:
                    _iteratorNormalCompletion8 = true, _didIteratorError8 = false, _iteratorError8 = undefined;
                    if (!c.modifier) return [
                        3,
                        70
                    ];
                    _state.label = 63;
                case 63:
                    _state.trys.push([
                        63,
                        68,
                        69,
                        70
                    ]);
                    _iterator8 = be(i, "".concat(h1, "-[").concat(d2, "]").concat(it(c.modifier)))[Symbol.iterator]();
                    _state.label = 64;
                case 64:
                    if (!!(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done)) return [
                        3,
                        67
                    ];
                    w6 = _step8.value;
                    return [
                        4,
                        w6
                    ];
                case 65:
                    _state.sent();
                    _state.label = 66;
                case 66:
                    _iteratorNormalCompletion8 = true;
                    return [
                        3,
                        64
                    ];
                case 67:
                    return [
                        3,
                        70
                    ];
                case 68:
                    err = _state.sent();
                    _didIteratorError8 = true;
                    _iteratorError8 = err;
                    return [
                        3,
                        70
                    ];
                case 69:
                    try {
                        if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
                            _iterator8.return();
                        }
                    } finally{
                        if (_didIteratorError8) {
                            throw _iteratorError8;
                        }
                    }
                    return [
                        7
                    ];
                case 70:
                    _iteratorNormalCompletion2 = true;
                    return [
                        3,
                        22
                    ];
                case 71:
                    return [
                        3,
                        74
                    ];
                case 72:
                    err = _state.sent();
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                    return [
                        3,
                        74
                    ];
                case 73:
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                            _iterator2.return();
                        }
                    } finally{
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                    return [
                        7
                    ];
                case 74:
                    return [
                        2
                    ];
            }
        });
    }
}
function ra(e, r, i) {
    var _r_value;
    var t = null;
    if (r.kind === "functional" && ((_r_value = r.value) === null || _r_value === void 0 ? void 0 : _r_value.kind) === "arbitrary" && r.value.value.includes("var(--") ? t = r.value.value : r.kind === "arbitrary" && r.value.includes("var(--") && (t = r.value), t === null) return !0;
    var n = e.candidatesToCss([
        e.printCandidate(i)
    ]).join("\n"), l = !0;
    return _(B(t), function(o) {
        if (o.kind === "function" && o.value === "var") {
            var f = o.nodes[0].value;
            if (!new RegExp("var\\(".concat(f, "[,)]\\s*"), "g").test(n) || n.includes("".concat(f, ":"))) return l = !1, V.Stop;
        }
    }), l;
}
function ia(e, r) {
    var _e_value;
    if (e.kind !== "functional" || ((_e_value = e.value) === null || _e_value === void 0 ? void 0 : _e_value.kind) !== "named") return e;
    var i = r.designSystem, t = i.storage[or].get(r.signatureOptions), n = i.storage[ge].get(r.signatureOptions), l = i.printCandidate(e), o = n.get(l);
    if (typeof o != "string") return e;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = f(o, e)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var u = _step.value;
            var c = i.printCandidate(u);
            if (n.get(c) === o) return u;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return e;
    //TURBOPACK unreachable
    ;
    function f(u, c) {
        var m, d, p, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, k, err, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, d1, err;
        return _ts_generator._(this, function(_state) {
            switch(_state.label){
                case 0:
                    m = t.get(u);
                    if (!!(m.length > 1)) return [
                        3,
                        16
                    ];
                    if (!(m.length === 0 && c.modifier)) return [
                        3,
                        8
                    ];
                    d = _object_spread_props._(_object_spread._({}, c), {
                        modifier: null
                    }), p = n.get(i.printCandidate(d));
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    if (!(typeof p == "string")) return [
                        3,
                        8
                    ];
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        6,
                        7,
                        8
                    ]);
                    _iterator = f(p, d)[Symbol.iterator]();
                    _state.label = 2;
                case 2:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        5
                    ];
                    k = _step.value;
                    return [
                        4,
                        Object.assign({}, k, {
                            modifier: c.modifier
                        })
                    ];
                case 3:
                    _state.sent();
                    _state.label = 4;
                case 4:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        2
                    ];
                case 5:
                    return [
                        3,
                        8
                    ];
                case 6:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        8
                    ];
                case 7:
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                    return [
                        7
                    ];
                case 8:
                    _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    if (!(m.length === 1)) return [
                        3,
                        16
                    ];
                    _state.label = 9;
                case 9:
                    _state.trys.push([
                        9,
                        14,
                        15,
                        16
                    ]);
                    _iterator1 = be(i, m[0])[Symbol.iterator]();
                    _state.label = 10;
                case 10:
                    if (!!(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done)) return [
                        3,
                        13
                    ];
                    d1 = _step1.value;
                    return [
                        4,
                        d1
                    ];
                case 11:
                    _state.sent();
                    _state.label = 12;
                case 12:
                    _iteratorNormalCompletion1 = true;
                    return [
                        3,
                        10
                    ];
                case 13:
                    return [
                        3,
                        16
                    ];
                case 14:
                    err = _state.sent();
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                    return [
                        3,
                        16
                    ];
                case 15:
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                    return [
                        7
                    ];
                case 16:
                    return [
                        2
                    ];
            }
        });
    }
}
var na = new Map([
    [
        "order-none",
        "order-0"
    ],
    [
        "break-words",
        "wrap-break-word"
    ]
]);
function oa(e, r) {
    var _na_get;
    var i = r.designSystem, t = i.storage[ge].get(r.signatureOptions), n = Xo(i, e), l = (_na_get = na.get(n)) !== null && _na_get !== void 0 ? _na_get : null;
    if (l === null) return e;
    var o = t.get(n);
    if (typeof o != "string") return e;
    var f = t.get(l);
    if (typeof f != "string" || o !== f) return e;
    var _be = _sliced_to_array._(be(i, l), 1), u = _be[0];
    return u;
}
function aa(e, r) {
    var i = r.designSystem, t = i.storage[Nt], n = i.storage[Ri], l = Et(e);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = l[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array._(_step.value, 1), o = _step_value[0];
            if (o.kind === "compound") continue;
            var f = i.printVariant(o), u = t.get(f);
            if (typeof u != "string") continue;
            var c = n.get(u);
            if (c.length !== 1) continue;
            var m = c[0], d = i.parseVariant(m);
            d !== null && ce(o, d);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return e;
}
function la(e, r) {
    var _e_value;
    var i = r.designSystem, t = i.storage[ge].get(r.signatureOptions);
    if (e.kind === "functional" && ((_e_value = e.value) === null || _e_value === void 0 ? void 0 : _e_value.kind) === "arbitrary" && e.value.dataType !== null) {
        var n = i.printCandidate(_object_spread_props._(_object_spread._({}, e), {
            value: _object_spread_props._(_object_spread._({}, e.value), {
                dataType: null
            })
        }));
        t.get(i.printCandidate(e)) === t.get(n) && (e.value.dataType = null);
    }
    return e;
}
function sa(e, r) {
    var _e_value;
    if (e.kind !== "functional" || ((_e_value = e.value) === null || _e_value === void 0 ? void 0 : _e_value.kind) !== "arbitrary") return e;
    var i = r.designSystem, t = i.storage[ge].get(r.signatureOptions), n = t.get(i.printCandidate(e));
    if (n === null) return e;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Ni(e)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var l = _step.value;
            if (t.get(i.printCandidate(_object_spread_props._(_object_spread._({}, e), {
                value: l
            }))) === n) return e.value = l, e;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return e;
}
function ua(e) {
    var _i_value, _i_value1, _i_value2;
    var r = Et(e);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = r[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array._(_step.value, 1), i = _step_value[0];
            if (i.kind === "functional" && i.root === "data" && ((_i_value = i.value) === null || _i_value === void 0 ? void 0 : _i_value.kind) === "arbitrary" && !i.value.value.includes("=")) i.value = {
                kind: "named",
                value: i.value.value
            };
            else if (i.kind === "functional" && i.root === "aria" && ((_i_value1 = i.value) === null || _i_value1 === void 0 ? void 0 : _i_value1.kind) === "arbitrary" && (i.value.value.endsWith("=true") || i.value.value.endsWith('="true"') || i.value.value.endsWith("='true'"))) {
                var _L = _sliced_to_array._(L(i.value.value, "="), 2), t = _L[0], n = _L[1];
                if (t[t.length - 1] === "~" || t[t.length - 1] === "|" || t[t.length - 1] === "^" || t[t.length - 1] === "$" || t[t.length - 1] === "*") continue;
                i.value = {
                    kind: "named",
                    value: i.value.value.slice(0, i.value.value.indexOf("="))
                };
            } else i.kind === "functional" && i.root === "supports" && ((_i_value2 = i.value) === null || _i_value2 === void 0 ? void 0 : _i_value2.kind) === "arbitrary" && /^[a-z-][a-z0-9-]*$/i.test(i.value.value) && (i.value = {
                kind: "named",
                value: i.value.value
            });
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return e;
}
var _e_value_value;
function Ni(e) {
    var r, i, _tmp, _r_split, l, o, _tmp1, t, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, l1, n, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, l2, err;
    var _arguments = arguments;
    return _ts_generator._(this, function(_state) {
        switch(_state.label){
            case 0:
                r = _arguments.length > 1 && _arguments[1] !== void 0 ? _arguments[1] : function() {
                    var _e_value;
                    return (_e_value_value = (_e_value = e.value) === null || _e_value === void 0 ? void 0 : _e_value.value) !== null && _e_value_value !== void 0 ? _e_value_value : "";
                }(), i = _arguments.length > 2 && _arguments[2] !== void 0 ? _arguments[2] : new Set;
                if (i.has(r)) return [
                    2
                ];
                i.add(r);
                return [
                    4,
                    {
                        kind: "named",
                        value: r,
                        fraction: null
                    }
                ];
            case 1:
                _state.sent();
                _tmp = r.endsWith("%") && ne(r.slice(0, -1));
                if (!_tmp) return [
                    3,
                    3
                ];
                return [
                    4,
                    {
                        kind: "named",
                        value: r.slice(0, -1),
                        fraction: null
                    }
                ];
            case 2:
                _tmp = _state.sent();
                _state.label = 3;
            case 3:
                if (!(_tmp, r.includes("/"))) return [
                    3,
                    6
                ];
                _r_split = _sliced_to_array._(r.split("/"), 2), l = _r_split[0], o = _r_split[1];
                _tmp1 = O(l) && O(o);
                if (!_tmp1) return [
                    3,
                    5
                ];
                return [
                    4,
                    {
                        kind: "named",
                        value: l,
                        fraction: "".concat(l, "/").concat(o)
                    }
                ];
            case 4:
                _tmp1 = _state.sent();
                _state.label = 5;
            case 5:
                _tmp1;
                _state.label = 6;
            case 6:
                t = new Set;
                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(_iterator = r.matchAll(/(\d+\/\d+)|(\d+\.?\d+)/g)[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        l1 = _step.value;
                        t.add(l1[0].trim());
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                n = Array.from(t).sort(function(l, o) {
                    return l.length - o.length;
                });
                _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                _state.label = 7;
            case 7:
                _state.trys.push([
                    7,
                    12,
                    13,
                    14
                ]);
                _iterator1 = n[Symbol.iterator]();
                _state.label = 8;
            case 8:
                if (!!(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done)) return [
                    3,
                    11
                ];
                l2 = _step1.value;
                return [
                    5,
                    _ts_values._(Ni(e, l2, i))
                ];
            case 9:
                _state.sent();
                _state.label = 10;
            case 10:
                _iteratorNormalCompletion1 = true;
                return [
                    3,
                    8
                ];
            case 11:
                return [
                    3,
                    14
                ];
            case 12:
                err = _state.sent();
                _didIteratorError1 = true;
                _iteratorError1 = err;
                return [
                    3,
                    14
                ];
            case 13:
                try {
                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                        _iterator1.return();
                    }
                } finally{
                    if (_didIteratorError1) {
                        throw _iteratorError1;
                    }
                }
                return [
                    7
                ];
            case 14:
                return [
                    2
                ];
        }
    });
}
function xi(e) {
    return !e.some(function(r) {
        return r.kind === "separator" && r.value.trim() === ",";
    });
}
function St(e) {
    var r = e.value.trim();
    return e.kind === "selector" && r[0] === "[" && r[r.length - 1] === "]";
}
function ca(e, r) {
    var i = [
        e
    ], t = r.designSystem, n = t.storage[Nt], l = Et(e);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        var _loop = function() {
            var _step_value = _sliced_to_array._(_step.value, 2), o = _step_value[0], f = _step_value[1];
            if (o.kind === "compound" && (o.root === "has" || o.root === "not" || o.root === "in") && o.modifier !== null && "modifier" in o.variant && (o.variant.modifier = o.modifier, o.modifier = null), o.kind === "arbitrary") {
                if (o.relative) return "continue";
                var u = De(o.selector.trim());
                if (!xi(u)) return "continue";
                if (f === null && u.length === 3 && u[0].kind === "selector" && u[0].value === "&" && u[1].kind === "combinator" && u[1].value.trim() === ">" && u[2].kind === "selector" && u[2].value === "*") {
                    ce(o, t.parseVariant("*"));
                    return "continue";
                }
                if (f === null && u.length === 3 && u[0].kind === "selector" && u[0].value === "&" && u[1].kind === "combinator" && u[1].value.trim() === "" && u[2].kind === "selector" && u[2].value === "*") {
                    ce(o, t.parseVariant("**"));
                    return "continue";
                }
                if (f === null && u.length === 3 && u[1].kind === "combinator" && u[1].value.trim() === "" && u[2].kind === "selector" && u[2].value === "&") {
                    u.pop(), u.pop(), ce(o, t.parseVariant("in-[".concat(me(u), "]")));
                    return "continue";
                }
                if (f === null && u[0].kind === "selector" && (u[0].value === "@media" || u[0].value === "@supports")) {
                    var p = n.get(t.printVariant(o)), k = B(me(u)), h = !1;
                    if (_(k, function(w1) {
                        if (w1.kind === "word" && w1.value === "not") return h = !0, V.Replace([]);
                    }), k = B(H(k)), _(k, function(w1) {
                        w1.kind === "separator" && w1.value !== " " && w1.value.trim() === "" && (w1.value = " ");
                    }), h) {
                        var w1 = t.parseVariant("not-[".concat(H(k), "]"));
                        if (w1 === null) return "continue";
                        var x = n.get(t.printVariant(w1));
                        if (p === x) {
                            ce(o, w1);
                            return "continue";
                        }
                    }
                }
                var c = null;
                f === null && u.length === 3 && u[0].kind === "selector" && u[0].value.trim() === "&" && u[1].kind === "combinator" && u[1].value.trim() === ">" && u[2].kind === "selector" && (St(u[2]) || u[2].value[0] === ":") && (u = [
                    u[2]
                ], c = t.parseVariant("*")), f === null && u.length === 3 && u[0].kind === "selector" && u[0].value.trim() === "&" && u[1].kind === "combinator" && u[1].value.trim() === "" && u[2].kind === "selector" && (St(u[2]) || u[2].value[0] === ":") && (u = [
                    u[2]
                ], c = t.parseVariant("**"));
                var m = u.filter(function(p) {
                    return !(p.kind === "selector" && p.value.trim() === "&");
                });
                if (m.length !== 1) return "continue";
                var d = m[0];
                if (d.kind === "function" && d.value === ":is") {
                    if (!xi(d.nodes) || d.nodes.length !== 1 || !St(d.nodes[0])) return "continue";
                    d = d.nodes[0];
                }
                if (d.kind === "function" && d.value[0] === ":" || d.kind === "selector" && d.value[0] === ":") {
                    var p1 = d, k1 = !1;
                    if (p1.kind === "function" && p1.value === ":not") {
                        if (k1 = !0, p1.nodes.length !== 1 || p1.nodes[0].kind !== "selector" && p1.nodes[0].kind !== "function" || p1.nodes[0].value[0] !== ":") return "continue";
                        p1 = p1.nodes[0];
                    }
                    var h1 = function(x) {
                        if (x === ":nth-child" && p1.kind === "function" && p1.nodes.length === 1 && p1.nodes[0].kind === "value" && p1.nodes[0].value === "odd") return k1 ? (k1 = !1, "even") : "odd";
                        if (x === ":nth-child" && p1.kind === "function" && p1.nodes.length === 1 && p1.nodes[0].kind === "value" && p1.nodes[0].value === "even") return k1 ? (k1 = !1, "odd") : "even";
                        for(var _i = 0, _iter = [
                            [
                                ":nth-child",
                                "nth"
                            ],
                            [
                                ":nth-last-child",
                                "nth-last"
                            ],
                            [
                                ":nth-of-type",
                                "nth-of-type"
                            ],
                            [
                                ":nth-last-of-type",
                                "nth-of-last-type"
                            ]
                        ]; _i < _iter.length; _i++){
                            var _iter__i = _sliced_to_array._(_iter[_i], 2), S = _iter__i[0], A = _iter__i[1];
                            if (x === S && p1.kind === "function" && p1.nodes.length === 1) return p1.nodes.length === 1 && p1.nodes[0].kind === "value" && O(p1.nodes[0].value) ? "".concat(A, "-").concat(p1.nodes[0].value) : "".concat(A, "-[").concat(me(p1.nodes), "]");
                        }
                        if (k1) {
                            var S1 = n.get(t.printVariant(o)), A1 = n.get("not-[".concat(x, "]"));
                            if (S1 === A1) return "[&".concat(x, "]");
                        }
                        return null;
                    }(p1.value);
                    if (h1 === null) {
                        if (c) return {
                            v: (ce(o, {
                                kind: "arbitrary",
                                selector: d.value,
                                relative: !1
                            }), [
                                c,
                                o
                            ])
                        };
                        return "continue";
                    }
                    k1 && (h1 = "not-".concat(h1));
                    var w2 = t.parseVariant(h1);
                    if (w2 === null) return "continue";
                    ce(o, w2);
                } else if (St(d)) {
                    var p2 = ti(d.value);
                    if (p2 === null) return "continue";
                    if (p2.attribute.startsWith("data-")) {
                        var k2 = p2.attribute.slice(5);
                        var _p_quote, _p_quote1;
                        ce(o, {
                            kind: "functional",
                            root: "data",
                            modifier: null,
                            value: p2.value === null ? {
                                kind: "named",
                                value: k2
                            } : {
                                kind: "arbitrary",
                                value: "".concat(k2).concat(p2.operator).concat((_p_quote = p2.quote) !== null && _p_quote !== void 0 ? _p_quote : "").concat(p2.value).concat((_p_quote1 = p2.quote) !== null && _p_quote1 !== void 0 ? _p_quote1 : "").concat(p2.sensitivity ? " ".concat(p2.sensitivity) : "")
                            }
                        });
                    } else if (p2.attribute.startsWith("aria-")) {
                        var k3 = p2.attribute.slice(5);
                        var _p_quote2, _p_quote3;
                        ce(o, {
                            kind: "functional",
                            root: "aria",
                            modifier: null,
                            value: p2.value === null ? {
                                kind: "arbitrary",
                                value: k3
                            } : p2.operator === "=" && p2.value === "true" && p2.sensitivity === null ? {
                                kind: "named",
                                value: k3
                            } : {
                                kind: "arbitrary",
                                value: "".concat(p2.attribute).concat(p2.operator).concat((_p_quote2 = p2.quote) !== null && _p_quote2 !== void 0 ? _p_quote2 : "").concat(p2.value).concat((_p_quote3 = p2.quote) !== null && _p_quote3 !== void 0 ? _p_quote3 : "").concat(p2.sensitivity ? " ".concat(p2.sensitivity) : "")
                            }
                        });
                    } else ce(o, {
                        kind: "arbitrary",
                        selector: d.value,
                        relative: !1
                    });
                }
                if (c) return {
                    v: [
                        c,
                        o
                    ]
                };
            }
        };
        for(var _iterator = l[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _ret = _loop();
            if (_type_of._(_ret) === "object") return _ret.v;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return i;
}
function fa(e, r) {
    if (e.kind !== "functional" && e.kind !== "arbitrary" || e.modifier === null) return e;
    var i = r.designSystem, t = i.storage[ge].get(r.signatureOptions), n = t.get(i.printCandidate(e)), l = e.modifier;
    if (n === t.get(i.printCandidate(_object_spread_props._(_object_spread._({}, e), {
        modifier: null
    })))) return e.modifier = null, e;
    {
        var o = {
            kind: "named",
            value: l.value.endsWith("%") ? l.value.includes(".") ? "".concat(Number(l.value.slice(0, -1))) : l.value.slice(0, -1) : l.value,
            fraction: null
        };
        if (n === t.get(i.printCandidate(_object_spread_props._(_object_spread._({}, e), {
            modifier: o
        })))) return e.modifier = o, e;
    }
    {
        var o1 = {
            kind: "named",
            value: "".concat(parseFloat(l.value) * 100),
            fraction: null
        };
        if (n === t.get(i.printCandidate(_object_spread_props._(_object_spread._({}, e), {
            modifier: o1
        })))) return e.modifier = o1, e;
    }
    return e;
}
var ge = Symbol();
function pa(e) {
    return new U(function(r) {
        return new U(function(i) {
            try {
                i = e.theme.prefix && !i.startsWith(e.theme.prefix) ? "".concat(e.theme.prefix, ":").concat(i) : i;
                var t = [
                    q(".x", [
                        F("@apply", i)
                    ])
                ];
                return wa(e, function() {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = e.parseCandidate(i)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var l = _step.value;
                            e.compileAstNodes(l, 1);
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    $e(t, e);
                }), Vi(e, t, r), ie(t);
            } catch (e) {
                return Symbol();
            }
        });
    });
}
function Vi(e, r, i) {
    var t = i.rem;
    return _(r, {
        enter: function enter(n, l) {
            if (n.kind === "declaration") {
                var _l_parent;
                if (n.value === void 0 || n.property === "--tw-sort") return V.Replace([]);
                var _l_parent_nodes;
                if (n.property.startsWith("--tw-") && ((_l_parent_nodes = (_l_parent = l.parent) === null || _l_parent === void 0 ? void 0 : _l_parent.nodes) !== null && _l_parent_nodes !== void 0 ? _l_parent_nodes : []).some(function(o) {
                    return o.kind === "declaration" && n.value === o.value && n.important === o.important && !o.property.startsWith("--tw-");
                })) return V.Replace([]);
                if (i.features & 1) {
                    var o = ui(n, i.features);
                    if (o) return V.Replace(o);
                }
                n.value.includes("var(") && (n.value = da(n.value, e)), n.value = At(n.value, t), n.value = Ce(n.value);
            } else {
                if (n.kind === "context" || n.kind === "at-root") return V.Replace(n.nodes);
                if (n.kind === "comment") return V.Replace([]);
                if (n.kind === "at-rule" && n.name === "@property") return V.Replace([]);
            }
        },
        exit: function exit(n) {
            if (n.kind === "rule" || n.kind === "at-rule") {
                if (n.nodes.length > 1) {
                    var l = new Set;
                    for(var o = n.nodes.length - 1; o >= 0; o--){
                        var f = n.nodes[o];
                        f.kind === "declaration" && f.value !== void 0 && (l.has(f.property) && n.nodes.splice(o, 1), l.add(f.property));
                    }
                }
                n.nodes.sort(function(l, o) {
                    return l.kind !== "declaration" || o.kind !== "declaration" ? 0 : l.property.localeCompare(o.property);
                });
            }
        }
    }), r;
}
function da(e, r) {
    var i = !1, t = B(e), n = new Set;
    return _(t, function(l) {
        var _l_nodes;
        if (l.kind !== "function" || l.value !== "var" || l.nodes.length !== 1 && l.nodes.length < 3) return;
        var o = l.nodes[0].value;
        r.theme.prefix && o.startsWith("--".concat(r.theme.prefix, "-")) && (o = o.slice("--".concat(r.theme.prefix, "-").length));
        var f = r.resolveThemeValue(o);
        if (!n.has(o) && (n.add(o), f !== void 0 && (l.nodes.length === 1 && (i = !0, (_l_nodes = l.nodes).push.apply(_l_nodes, _to_consumable_array._(B(",".concat(f))))), l.nodes.length >= 3))) {
            var u = H(l.nodes), c = "".concat(l.nodes[0].value, ",").concat(f);
            if (u === c) return i = !0, V.Replace(B(f));
        }
    }), i ? H(t) : e;
}
var nr = Symbol();
function ma() {
    return new U(function(e) {
        return new U(function(r) {
            return new U(function(i) {
                return new Set;
            });
        });
    });
}
var Tt = Symbol();
function ga(e) {
    return new U(function(r) {
        return new U(function(i) {
            var t = new U(function(l) {
                return new Set;
            });
            e.theme.prefix && !i.startsWith(e.theme.prefix) && (i = "".concat(e.theme.prefix, ":").concat(i));
            var n = e.parseCandidate(i);
            return n.length === 0 || _(Vi(e, e.compileAstNodes(n[0]).map(function(l) {
                return ee(l.node);
            }), r), function(l) {
                l.kind === "declaration" && (t.get(l.property).add(l.value), e.storage[nr].get(r).get(l.property).get(l.value).add(i));
            }), t;
        });
    });
}
var or = Symbol();
function ha(e) {
    return new U(function(r) {
        var i = e.storage[ge].get(r), t = new U(function() {
            return [];
        });
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = e.getClassList()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array._(_step.value, 2), n = _step_value[0], l = _step_value[1];
                var o = i.get(n);
                if (typeof o == "string") {
                    if (n[0] === "-" && n.endsWith("-0")) {
                        var f = i.get(n.slice(1));
                        if (typeof f == "string" && o === f) continue;
                    }
                    t.get(o).push(n), e.storage[Tt].get(r).get(n);
                    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        for(var _iterator1 = l.modifiers[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                            var f1 = _step1.value;
                            if (ne(f1)) continue;
                            var u = "".concat(n, "/").concat(f1), c = i.get(u);
                            typeof c == "string" && (t.get(c).push(u), e.storage[Tt].get(r).get(u));
                        }
                    } catch (err) {
                        _didIteratorError1 = true;
                        _iteratorError1 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                _iterator1.return();
                            }
                        } finally{
                            if (_didIteratorError1) {
                                throw _iteratorError1;
                            }
                        }
                    }
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        return t;
    });
}
var Nt = Symbol();
function va(e) {
    return new U(function(r) {
        try {
            r = e.theme.prefix && !r.startsWith(e.theme.prefix) ? "".concat(e.theme.prefix, ":").concat(r) : r;
            var i = [
                q(".x", [
                    F("@apply", "".concat(r, ":flex"))
                ])
            ];
            return $e(i, e), _(i, function(n) {
                if (n.kind === "at-rule" && n.params.includes(" ")) n.params = n.params.replaceAll(" ", "");
                else if (n.kind === "rule") {
                    var l = De(n.selector), o = !1;
                    _(l, function(f) {
                        var _f_nodes_, _f_nodes_1;
                        if (f.kind === "separator" && f.value !== " ") f.value = f.value.trim(), o = !0;
                        else if (f.kind === "function" && f.value === ":is") {
                            if (f.nodes.length === 1) return o = !0, V.Replace(f.nodes);
                            if (f.nodes.length === 2 && f.nodes[0].kind === "selector" && f.nodes[0].value === "*" && f.nodes[1].kind === "selector" && f.nodes[1].value[0] === ":") return o = !0, V.Replace(f.nodes[1]);
                        } else f.kind === "function" && f.value[0] === ":" && ((_f_nodes_ = f.nodes[0]) === null || _f_nodes_ === void 0 ? void 0 : _f_nodes_.kind) === "selector" && ((_f_nodes_1 = f.nodes[0]) === null || _f_nodes_1 === void 0 ? void 0 : _f_nodes_1.value[0]) === ":" && (o = !0, f.nodes.unshift({
                            kind: "selector",
                            value: "*"
                        }));
                    }), o && (n.selector = me(l));
                }
            }), ie(i);
        } catch (e) {
            return Symbol();
        }
    });
}
var Ri = Symbol();
function ka(e) {
    var r = e.storage[Nt], i = new U(function() {
        return [];
    });
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = e.variants.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array._(_step.value, 2), t = _step_value[0], n = _step_value[1];
            if (n.kind === "static") {
                var l = r.get(t);
                if (typeof l != "string") continue;
                i.get(l).push(t);
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return i;
}
function wa(e, r) {
    var i = e.theme.values.get, t = new Set;
    e.theme.values.get = function(n) {
        var l = i.call(e.theme.values, n);
        return l === void 0 || l.options & 1 && (t.add(l), l.options &= -2), l;
    };
    try {
        return r();
    } finally{
        e.theme.values.get = i;
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = t[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var n = _step.value;
                n.options |= 1;
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
}
function ya(e) {
    var r, i, t, n, l, u, o, f;
    return _ts_generator._(this, function(_state) {
        switch(_state.label){
            case 0:
                r = e.length, i = 1n << BigInt(r);
                t = r;
                _state.label = 1;
            case 1:
                if (!(t >= 2)) return [
                    3,
                    6
                ];
                n = (1n << BigInt(t)) - 1n;
                _state.label = 2;
            case 2:
                if (!(n < i)) return [
                    3,
                    5
                ];
                l = [];
                for(u = 0; u < r; u++)n >> BigInt(u) & 1n && l.push(e[u]);
                return [
                    4,
                    l
                ];
            case 3:
                _state.sent();
                o = n & -n, f = n + o;
                n = ((f ^ n) >> 2n) / o | f;
                _state.label = 4;
            case 4:
                return [
                    3,
                    2
                ];
            case 5:
                t--;
                return [
                    3,
                    1
                ];
            case 6:
                return [
                    2
                ];
        }
    });
}
function Ai(e, r) {
    if (typeof e.intersection == "function") return e.intersection(r);
    if (e.size === 0 || r.size === 0) return new Set;
    var i = new Set(e);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = r[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var t = _step.value;
            i.has(t) || i.delete(t);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return i;
}
var xa = /^\d+\/\d+$/;
function Oi(e) {
    var r = new U(function(n) {
        return {
            name: n,
            utility: n,
            fraction: !1,
            modifiers: []
        };
    });
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = e.utilities.keys("static")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var n = _step.value;
            if (e.utilities.getCompletions(n).length === 0) continue;
            var o = r.get(n);
            o.fraction = !1, o.modifiers = [];
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
    try {
        for(var _iterator1 = e.utilities.keys("functional")[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
            var n1 = _step1.value;
            var l = e.utilities.getCompletions(n1);
            var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined, _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
            try {
                for(var _iterator2 = l[Symbol.iterator](), _step2; !(_iteratorNormalCompletion3 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion3 = true){
                    var o1 = _step2.value;
                    try {
                        for(var _iterator3 = o1.values[Symbol.iterator](), _step3; !(_iteratorNormalCompletion2 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion2 = true){
                            var f = _step3.value;
                            var _m_modifiers;
                            var _m;
                            var u = f !== null && xa.test(f), c = f === null ? n1 : "".concat(n1, "-").concat(f), m = r.get(c);
                            if (m.utility = n1, (_m = m).fraction || (_m.fraction = u), (_m_modifiers = m.modifiers).push.apply(_m_modifiers, _to_consumable_array._(o1.modifiers)), o1.supportsNegative) {
                                var _d_modifiers;
                                var _d;
                                var d = r.get("-".concat(c));
                                d.utility = "-".concat(n1), (_d = d).fraction || (_d.fraction = u), (_d_modifiers = d.modifiers).push.apply(_d_modifiers, _to_consumable_array._(o1.modifiers));
                            }
                            m.modifiers = Array.from(new Set(m.modifiers));
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator3.return != null) {
                                _iterator3.return();
                            }
                        } finally{
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion3 && _iterator2.return != null) {
                        _iterator2.return();
                    }
                } finally{
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        }
    } catch (err) {
        _didIteratorError1 = true;
        _iteratorError1 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                _iterator1.return();
            }
        } finally{
            if (_didIteratorError1) {
                throw _iteratorError1;
            }
        }
    }
    if (r.size === 0) return [];
    var i = Array.from(r.values());
    return i.sort(function(n, l) {
        return xt(n.name, l.name);
    }), Aa(i);
}
function Aa(e) {
    var r = [], i = null, t = new Map, n = new U(function() {
        return [];
    });
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = e[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var o = _step.value;
            var f = o.utility, u = o.fraction;
            i || (i = {
                utility: f,
                items: []
            }, t.set(f, i)), f !== i.utility && (r.push(i), i = {
                utility: f,
                items: []
            }, t.set(f, i)), u ? n.get(f).push(o) : i.items.push(o);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    i && r[r.length - 1] !== i && r.push(i);
    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
    try {
        for(var _iterator1 = n[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
            var _step_value = _sliced_to_array._(_step1.value, 2), o1 = _step_value[0], f1 = _step_value[1];
            var _u_items;
            var u1 = t.get(o1);
            u1 && (_u_items = u1.items).push.apply(_u_items, _to_consumable_array._(f1));
        }
    } catch (err) {
        _didIteratorError1 = true;
        _iteratorError1 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                _iterator1.return();
            }
        } finally{
            if (_didIteratorError1) {
                throw _iteratorError1;
            }
        }
    }
    var l = [];
    var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined, _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
    try {
        for(var _iterator2 = r[Symbol.iterator](), _step2; !(_iteratorNormalCompletion3 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion3 = true){
            var o2 = _step2.value;
            try {
                for(var _iterator3 = o2.items[Symbol.iterator](), _step3; !(_iteratorNormalCompletion2 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion2 = true){
                    var f2 = _step3.value;
                    l.push([
                        f2.name,
                        {
                            modifiers: f2.modifiers
                        }
                    ]);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion2 && _iterator3.return != null) {
                        _iterator3.return();
                    }
                } finally{
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion3 && _iterator2.return != null) {
                _iterator2.return();
            }
        } finally{
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }
    return l;
}
function Pi(e) {
    var r = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        var _loop = function() {
            var _step_value = _sliced_to_array._(_step.value, 2), t = _step_value[0], n = _step_value[1];
            var f = function f() {
                var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, u = _ref.value, c = _ref.modifier;
                var m = t;
                u && (m += l ? "-".concat(u) : u), c && (m += "/".concat(c));
                var d = e.parseVariant(m);
                if (!d) return [];
                var p = q(".__placeholder__", []);
                if (qe(p, d, e.variants) === null) return [];
                var k = [];
                return _(p.nodes, {
                    exit: function exit(h, w1) {
                        if (h.kind !== "rule" && h.kind !== "at-rule" || h.nodes.length > 0) return;
                        var x = w1.path();
                        x.push(h), x.sort(function(y, K) {
                            var N = y.kind === "at-rule", P = K.kind === "at-rule";
                            return N && !P ? -1 : !N && P ? 1 : 0;
                        });
                        var S = x.flatMap(function(y) {
                            return y.kind === "rule" ? y.selector === "&" ? [] : [
                                y.selector
                            ] : y.kind === "at-rule" ? [
                                "".concat(y.name, " ").concat(y.params)
                            ] : [];
                        }), A = "";
                        for(var y = S.length - 1; y >= 0; y--)A = A === "" ? S[y] : "".concat(S[y], " { ").concat(A, " }");
                        k.push(A);
                    }
                }), k;
            };
            var i = f;
            if (n.kind === "arbitrary") return "continue";
            var l = t !== "@", o = e.variants.getCompletions(t);
            switch(n.kind){
                case "static":
                    {
                        r.push({
                            name: t,
                            values: o,
                            isArbitrary: !1,
                            hasDash: l,
                            selectors: f
                        });
                        break;
                    }
                case "functional":
                    {
                        r.push({
                            name: t,
                            values: o,
                            isArbitrary: !0,
                            hasDash: l,
                            selectors: f
                        });
                        break;
                    }
                case "compound":
                    {
                        r.push({
                            name: t,
                            values: o,
                            isArbitrary: !0,
                            hasDash: l,
                            selectors: f
                        });
                        break;
                    }
            }
        };
        for(var _iterator = e.variants.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return r;
}
function _i(e, r) {
    var _Te = Te(Array.from(r), e), i = _Te.astNodes, t = _Te.nodeSorting, n = new Map(r.map(function(o) {
        return [
            o,
            null
        ];
    })), l = 0n;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = i[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var o = _step.value;
            var _t_get;
            var f = (_t_get = t.get(o)) === null || _t_get === void 0 ? void 0 : _t_get.candidate;
            var _n_get;
            f && n.set(f, (_n_get = n.get(f)) !== null && _n_get !== void 0 ? _n_get : l++);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return r.map(function(o) {
        var _n_get;
        return [
            o,
            (_n_get = n.get(o)) !== null && _n_get !== void 0 ? _n_get : null
        ];
    });
}
var Vt = RegExp("^@?[a-z0-9][a-zA-Z0-9_-]*(?<![_-])$");
var ar = /*#__PURE__*/ function() {
    function ar() {
        _class_call_check._(this, ar);
        _define_property._(this, "compareFns", new Map);
        _define_property._(this, "variants", new Map);
        _define_property._(this, "completions", new Map);
        _define_property._(this, "groupOrder", null);
        _define_property._(this, "lastOrder", 0);
    }
    _create_class._(ar, [
        {
            key: "static",
            value: function _static(r, i) {
                var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, t = _ref.compounds, n = _ref.order;
                this.set(r, {
                    kind: "static",
                    applyFn: i,
                    compoundsWith: 0,
                    compounds: t !== null && t !== void 0 ? t : 2,
                    order: n
                });
            }
        },
        {
            key: "fromAst",
            value: function fromAst(r, i, t) {
                var n = [], l = !1;
                _(i, function(o) {
                    o.kind === "rule" ? n.push(o.selector) : o.kind === "at-rule" && o.name === "@variant" ? l = !0 : o.kind === "at-rule" && o.name !== "@slot" && n.push("".concat(o.name, " ").concat(o.params));
                }), this.static(r, function(o) {
                    var f = i.map(ee);
                    l && ot(f, t), lr(f, o.nodes), o.nodes = f;
                }, {
                    compounds: Le(n)
                });
            }
        },
        {
            key: "functional",
            value: function functional(r, i) {
                var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, t = _ref.compounds, n = _ref.order;
                this.set(r, {
                    kind: "functional",
                    applyFn: i,
                    compoundsWith: 0,
                    compounds: t !== null && t !== void 0 ? t : 2,
                    order: n
                });
            }
        },
        {
            key: "compound",
            value: function compound(r, i, t) {
                var _ref = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, n = _ref.compounds, l = _ref.order;
                this.set(r, {
                    kind: "compound",
                    applyFn: t,
                    compoundsWith: i,
                    compounds: n !== null && n !== void 0 ? n : 2,
                    order: l
                });
            }
        },
        {
            key: "group",
            value: function group(r, i) {
                this.groupOrder = this.nextOrder(), i && this.compareFns.set(this.groupOrder, i), r(), this.groupOrder = null;
            }
        },
        {
            key: "has",
            value: function has(r) {
                return this.variants.has(r);
            }
        },
        {
            key: "get",
            value: function get(r) {
                return this.variants.get(r);
            }
        },
        {
            key: "kind",
            value: function kind(r) {
                var _this_variants_get;
                return (_this_variants_get = this.variants.get(r)) === null || _this_variants_get === void 0 ? void 0 : _this_variants_get.kind;
            }
        },
        {
            key: "compoundsWith",
            value: function compoundsWith(r, i) {
                var t = this.variants.get(r), n = typeof i == "string" ? this.variants.get(i) : i.kind === "arbitrary" ? {
                    compounds: Le([
                        i.selector
                    ])
                } : this.variants.get(i.root);
                return !(!t || !n || t.kind !== "compound" || n.compounds === 0 || t.compoundsWith === 0 || (t.compoundsWith & n.compounds) === 0);
            }
        },
        {
            key: "suggest",
            value: function suggest(r, i) {
                this.completions.set(r, i);
            }
        },
        {
            key: "getCompletions",
            value: function getCompletions(r) {
                var _this_completions_get;
                var _this_completions_get1;
                return (_this_completions_get1 = (_this_completions_get = this.completions.get(r)) === null || _this_completions_get === void 0 ? void 0 : _this_completions_get()) !== null && _this_completions_get1 !== void 0 ? _this_completions_get1 : [];
            }
        },
        {
            key: "compare",
            value: function compare(r, i) {
                if (r === i) return 0;
                if (r === null) return -1;
                if (i === null) return 1;
                if (r.kind === "arbitrary" && i.kind === "arbitrary") return r.selector < i.selector ? -1 : 1;
                if (r.kind === "arbitrary") return 1;
                if (i.kind === "arbitrary") return -1;
                var t = this.variants.get(r.root).order, n = this.variants.get(i.root).order, l = t - n;
                if (l !== 0) return l;
                if (r.kind === "compound" && i.kind === "compound") {
                    var c = this.compare(r.variant, i.variant);
                    return c !== 0 ? c : r.modifier && i.modifier ? r.modifier.value < i.modifier.value ? -1 : 1 : r.modifier ? 1 : i.modifier ? -1 : 0;
                }
                var o = this.compareFns.get(t);
                if (o !== void 0) return o(r, i);
                if (r.root !== i.root) return r.root < i.root ? -1 : 1;
                var f = r.value, u = i.value;
                return f === null ? -1 : u === null || f.kind === "arbitrary" && u.kind !== "arbitrary" ? 1 : f.kind !== "arbitrary" && u.kind === "arbitrary" || f.value < u.value ? -1 : 1;
            }
        },
        {
            key: "keys",
            value: function keys() {
                return this.variants.keys();
            }
        },
        {
            key: "entries",
            value: function entries() {
                return this.variants.entries();
            }
        },
        {
            key: "set",
            value: function set(r, param) {
                var i = param.kind, t = param.applyFn, n = param.compounds, l = param.compoundsWith, o = param.order;
                var f = this.variants.get(r);
                f ? Object.assign(f, {
                    kind: i,
                    applyFn: t,
                    compounds: n
                }) : (o === void 0 && (this.lastOrder = this.nextOrder(), o = this.lastOrder), this.variants.set(r, {
                    kind: i,
                    applyFn: t,
                    order: o,
                    compoundsWith: l,
                    compounds: n
                }));
            }
        },
        {
            key: "nextOrder",
            value: function nextOrder() {
                var _this_groupOrder;
                return (_this_groupOrder = this.groupOrder) !== null && _this_groupOrder !== void 0 ? _this_groupOrder : this.lastOrder + 1;
            }
        }
    ]);
    return ar;
}();
function Le(e) {
    var r = 0;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = e[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var i = _step.value;
            if (i[0] === "@") {
                if (!i.startsWith("@media") && !i.startsWith("@supports") && !i.startsWith("@container")) return 0;
                r |= 1;
                continue;
            }
            if (i.includes("::")) return 0;
            r |= 2;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return r;
}
function Di(e) {
    var r = new ar;
    function i(c, m) {
        var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, d = _ref.compounds;
        d = d !== null && d !== void 0 ? d : Le(m), r.static(c, function(p) {
            p.nodes = m.map(function(k) {
                return Z(k, p.nodes);
            });
        }, {
            compounds: d
        });
    }
    i("*", [
        ":is(& > *)"
    ], {
        compounds: 0
    }), i("**", [
        ":is(& *)"
    ], {
        compounds: 0
    });
    function t(c, m) {
        return m.map(function(d) {
            d = d.trim();
            var p = L(d, " ");
            return p[0] === "not" ? p.slice(1).join(" ") : c === "@container" ? p[0][0] === "(" ? "not ".concat(d) : p[1] === "not" ? "".concat(p[0], " ").concat(p.slice(2).join(" ")) : "".concat(p[0], " not ").concat(p.slice(1).join(" ")) : "not ".concat(d);
        });
    }
    var n = [
        "@media",
        "@supports",
        "@container"
    ];
    function l(c) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = n[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var m = _step.value;
                if (m !== c.name) continue;
                var d = L(c.params, ",");
                return d.length > 1 ? null : (d = t(c.name, d), F(c.name, d.join(", ")));
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        return null;
    }
    function o(c) {
        return c.includes("::") ? null : "&:not(".concat(L(c, ",").map(function(d) {
            return d = d.replaceAll("&", "*"), d;
        }).join(", "), ")");
    }
    r.compound("not", 3, function(c, m) {
        if (m.variant.kind === "arbitrary" && m.variant.relative || m.modifier) return null;
        var d = !1;
        if (_([
            c
        ], function(p, k) {
            if (p.kind !== "rule" && p.kind !== "at-rule") return V.Continue;
            if (p.nodes.length > 0) return V.Continue;
            var h = [], w1 = [], x = k.path();
            x.push(p);
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = x[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var A = _step.value;
                    A.kind === "at-rule" ? h.push(A) : A.kind === "rule" && w1.push(A);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            if (h.length > 1) return V.Stop;
            if (w1.length > 1) return V.Stop;
            var S = [];
            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
            try {
                for(var _iterator1 = w1[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                    var A1 = _step1.value;
                    var y = o(A1.selector);
                    if (!y) return d = !1, V.Stop;
                    S.push(q(y, []));
                }
            } catch (err) {
                _didIteratorError1 = true;
                _iteratorError1 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                        _iterator1.return();
                    }
                } finally{
                    if (_didIteratorError1) {
                        throw _iteratorError1;
                    }
                }
            }
            var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
            try {
                for(var _iterator2 = h[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                    var A2 = _step2.value;
                    var y1 = l(A2);
                    if (!y1) return d = !1, V.Stop;
                    S.push(y1);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                        _iterator2.return();
                    }
                } finally{
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
            return Object.assign(c, q("&", S)), d = !0, V.Skip;
        }), c.kind === "rule" && c.selector === "&" && c.nodes.length === 1 && Object.assign(c, c.nodes[0]), !d) return null;
    }), r.suggest("not", function() {
        return Array.from(r.keys()).filter(function(c) {
            return r.compoundsWith("not", c);
        });
    }), r.compound("group", 2, function(c, m) {
        if (m.variant.kind === "arbitrary" && m.variant.relative) return null;
        var d = m.modifier ? ":where(.".concat(e.prefix ? "".concat(e.prefix, "\\:") : "", "group\\/").concat(m.modifier.value, ")") : ":where(.".concat(e.prefix ? "".concat(e.prefix, "\\:") : "", "group)"), p = !1;
        if (_([
            c
        ], function(k, h) {
            if (k.kind !== "rule") return V.Continue;
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = h.path()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var x = _step.value;
                    if (x.kind === "rule") return p = !1, V.Stop;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            var w1 = k.selector.replaceAll("&", d);
            L(w1, ",").length > 1 && (w1 = ":is(".concat(w1, ")")), k.selector = "&:is(".concat(w1, " *)"), p = !0;
        }), !p) return null;
    }), r.suggest("group", function() {
        return Array.from(r.keys()).filter(function(c) {
            return r.compoundsWith("group", c);
        });
    }), r.compound("peer", 2, function(c, m) {
        if (m.variant.kind === "arbitrary" && m.variant.relative) return null;
        var d = m.modifier ? ":where(.".concat(e.prefix ? "".concat(e.prefix, "\\:") : "", "peer\\/").concat(m.modifier.value, ")") : ":where(.".concat(e.prefix ? "".concat(e.prefix, "\\:") : "", "peer)"), p = !1;
        if (_([
            c
        ], function(k, h) {
            if (k.kind !== "rule") return V.Continue;
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = h.path()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var x = _step.value;
                    if (x.kind === "rule") return p = !1, V.Stop;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            var w1 = k.selector.replaceAll("&", d);
            L(w1, ",").length > 1 && (w1 = ":is(".concat(w1, ")")), k.selector = "&:is(".concat(w1, " ~ *)"), p = !0;
        }), !p) return null;
    }), r.suggest("peer", function() {
        return Array.from(r.keys()).filter(function(c) {
            return r.compoundsWith("peer", c);
        });
    }), i("first-letter", [
        "&::first-letter"
    ]), i("first-line", [
        "&::first-line"
    ]), i("marker", [
        "& *::marker",
        "&::marker",
        "& *::-webkit-details-marker",
        "&::-webkit-details-marker"
    ]), i("selection", [
        "& *::selection",
        "&::selection"
    ]), i("file", [
        "&::file-selector-button"
    ]), i("placeholder", [
        "&::placeholder"
    ]), i("backdrop", [
        "&::backdrop"
    ]), i("details-content", [
        "&::details-content"
    ]);
    {
        var c = function c() {
            return W([
                F("@property", "--tw-content", [
                    a("syntax", '"*"'),
                    a("initial-value", '""'),
                    a("inherits", "false")
                ])
            ]);
        };
        var f = c;
        r.static("before", function(m) {
            m.nodes = [
                q("&::before", [
                    c(),
                    a("content", "var(--tw-content)")
                ].concat(_to_consumable_array._(m.nodes)))
            ];
        }, {
            compounds: 0
        }), r.static("after", function(m) {
            m.nodes = [
                q("&::after", [
                    c(),
                    a("content", "var(--tw-content)")
                ].concat(_to_consumable_array._(m.nodes)))
            ];
        }, {
            compounds: 0
        });
    }
    i("first", [
        "&:first-child"
    ]), i("last", [
        "&:last-child"
    ]), i("only", [
        "&:only-child"
    ]), i("odd", [
        "&:nth-child(odd)"
    ]), i("even", [
        "&:nth-child(even)"
    ]), i("first-of-type", [
        "&:first-of-type"
    ]), i("last-of-type", [
        "&:last-of-type"
    ]), i("only-of-type", [
        "&:only-of-type"
    ]), i("visited", [
        "&:visited"
    ]), i("target", [
        "&:target"
    ]), i("open", [
        "&:is([open], :popover-open, :open)"
    ]), i("default", [
        "&:default"
    ]), i("checked", [
        "&:checked"
    ]), i("indeterminate", [
        "&:indeterminate"
    ]), i("placeholder-shown", [
        "&:placeholder-shown"
    ]), i("autofill", [
        "&:autofill"
    ]), i("optional", [
        "&:optional"
    ]), i("required", [
        "&:required"
    ]), i("valid", [
        "&:valid"
    ]), i("invalid", [
        "&:invalid"
    ]), i("user-valid", [
        "&:user-valid"
    ]), i("user-invalid", [
        "&:user-invalid"
    ]), i("in-range", [
        "&:in-range"
    ]), i("out-of-range", [
        "&:out-of-range"
    ]), i("read-only", [
        "&:read-only"
    ]), i("empty", [
        "&:empty"
    ]), i("focus-within", [
        "&:focus-within"
    ]), r.static("hover", function(c) {
        c.nodes = [
            q("&:hover", [
                F("@media", "(hover: hover)", c.nodes)
            ])
        ];
    }), i("focus", [
        "&:focus"
    ]), i("focus-visible", [
        "&:focus-visible"
    ]), i("active", [
        "&:active"
    ]), i("enabled", [
        "&:enabled"
    ]), i("disabled", [
        "&:disabled"
    ]), i("inert", [
        "&:is([inert], [inert] *)"
    ]), r.compound("in", 2, function(c, m) {
        if (m.modifier) return null;
        var d = !1;
        if (_([
            c
        ], function(p, k) {
            if (p.kind !== "rule") return V.Continue;
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = k.path()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var h = _step.value;
                    if (h.kind === "rule") return d = !1, V.Stop;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            p.selector = ":where(".concat(p.selector.replaceAll("&", "*"), ") &"), d = !0;
        }), !d) return null;
    }), r.suggest("in", function() {
        return Array.from(r.keys()).filter(function(c) {
            return r.compoundsWith("in", c);
        });
    }), r.compound("has", 2, function(c, m) {
        if (m.modifier) return null;
        var d = !1;
        if (_([
            c
        ], function(p, k) {
            if (p.kind !== "rule") return V.Continue;
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = k.path()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var h = _step.value;
                    if (h.kind === "rule") return d = !1, V.Stop;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            p.selector = "&:has(".concat(p.selector.replaceAll("&", "*"), ")"), d = !0;
        }), !d) return null;
    }), r.suggest("has", function() {
        return Array.from(r.keys()).filter(function(c) {
            return r.compoundsWith("has", c);
        });
    }), r.functional("aria", function(c, m) {
        if (!m.value || m.modifier) return null;
        m.value.kind === "arbitrary" ? c.nodes = [
            q("&[aria-".concat(Ii(m.value.value), "]"), c.nodes)
        ] : c.nodes = [
            q("&[aria-".concat(m.value.value, '="true"]'), c.nodes)
        ];
    }), r.suggest("aria", function() {
        return [
            "busy",
            "checked",
            "disabled",
            "expanded",
            "hidden",
            "pressed",
            "readonly",
            "required",
            "selected"
        ];
    }), r.functional("data", function(c, m) {
        if (!m.value || m.modifier) return null;
        c.nodes = [
            q("&[data-".concat(Ii(m.value.value), "]"), c.nodes)
        ];
    }), r.functional("nth", function(c, m) {
        if (!m.value || m.modifier || m.value.kind === "named" && !O(m.value.value)) return null;
        c.nodes = [
            q("&:nth-child(".concat(m.value.value, ")"), c.nodes)
        ];
    }), r.functional("nth-last", function(c, m) {
        if (!m.value || m.modifier || m.value.kind === "named" && !O(m.value.value)) return null;
        c.nodes = [
            q("&:nth-last-child(".concat(m.value.value, ")"), c.nodes)
        ];
    }), r.functional("nth-of-type", function(c, m) {
        if (!m.value || m.modifier || m.value.kind === "named" && !O(m.value.value)) return null;
        c.nodes = [
            q("&:nth-of-type(".concat(m.value.value, ")"), c.nodes)
        ];
    }), r.functional("nth-last-of-type", function(c, m) {
        if (!m.value || m.modifier || m.value.kind === "named" && !O(m.value.value)) return null;
        c.nodes = [
            q("&:nth-last-of-type(".concat(m.value.value, ")"), c.nodes)
        ];
    }), r.functional("supports", function(c, m) {
        if (!m.value || m.modifier) return null;
        var d = m.value.value;
        if (d === null) return null;
        if (/^[\w-]*\s*\(/.test(d)) {
            var p = d.replace(/\b(and|or|not)\b/g, " $1 ");
            c.nodes = [
                F("@supports", p, c.nodes)
            ];
            return;
        }
        d.includes(":") || (d = "".concat(d, ": var(--tw)")), (d[0] !== "(" || d[d.length - 1] !== ")") && (d = "(".concat(d, ")")), c.nodes = [
            F("@supports", d, c.nodes)
        ];
    }, {
        compounds: 1
    }), i("motion-safe", [
        "@media (prefers-reduced-motion: no-preference)"
    ]), i("motion-reduce", [
        "@media (prefers-reduced-motion: reduce)"
    ]), i("contrast-more", [
        "@media (prefers-contrast: more)"
    ]), i("contrast-less", [
        "@media (prefers-contrast: less)"
    ]);
    {
        var c1 = function c(m, d, p, k) {
            if (m === d) return 0;
            var h = k.get(m);
            if (h === null) return p === "asc" ? -1 : 1;
            var w1 = k.get(d);
            return w1 === null ? p === "asc" ? 1 : -1 : Oe(h, w1, p);
        };
        var u = c1;
        {
            var m = e.namespace("--breakpoint"), d = new U(function(p) {
                switch(p.kind){
                    case "static":
                        var _e_resolveValue;
                        return (_e_resolveValue = e.resolveValue(p.root, [
                            "--breakpoint"
                        ])) !== null && _e_resolveValue !== void 0 ? _e_resolveValue : null;
                    case "functional":
                        {
                            if (!p.value || p.modifier) return null;
                            var k = null;
                            return p.value.kind === "arbitrary" ? k = p.value.value : p.value.kind === "named" && (k = e.resolveValue(p.value.value, [
                                "--breakpoint"
                            ])), !k || k.includes("var(") ? null : k;
                        }
                    case "arbitrary":
                    case "compound":
                        return null;
                }
            });
            r.group(function() {
                r.functional("max", function(p, k) {
                    if (k.modifier) return null;
                    var h = d.get(k);
                    if (h === null) return null;
                    p.nodes = [
                        F("@media", "(width < ".concat(h, ")"), p.nodes)
                    ];
                }, {
                    compounds: 1
                });
            }, function(p, k) {
                return c1(p, k, "desc", d);
            }), r.suggest("max", function() {
                return Array.from(m.keys()).filter(function(p) {
                    return p !== null;
                });
            }), r.group(function() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    var _loop = function() {
                        var _step_value = _sliced_to_array._(_step.value, 2), p = _step_value[0], k = _step_value[1];
                        p !== null && r.static(p, function(h) {
                            h.nodes = [
                                F("@media", "(width >= ".concat(k, ")"), h.nodes)
                            ];
                        }, {
                            compounds: 1
                        });
                    };
                    for(var _iterator = e.namespace("--breakpoint")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                r.functional("min", function(p, k) {
                    if (k.modifier) return null;
                    var h = d.get(k);
                    if (h === null) return null;
                    p.nodes = [
                        F("@media", "(width >= ".concat(h, ")"), p.nodes)
                    ];
                }, {
                    compounds: 1
                });
            }, function(p, k) {
                return c1(p, k, "asc", d);
            }), r.suggest("min", function() {
                return Array.from(m.keys()).filter(function(p) {
                    return p !== null;
                });
            });
        }
        {
            var m1 = e.namespace("--container"), d1 = new U(function(p) {
                switch(p.kind){
                    case "functional":
                        {
                            if (p.value === null) return null;
                            var k = null;
                            return p.value.kind === "arbitrary" ? k = p.value.value : p.value.kind === "named" && (k = e.resolveValue(p.value.value, [
                                "--container"
                            ])), !k || k.includes("var(") ? null : k;
                        }
                    case "static":
                    case "arbitrary":
                    case "compound":
                        return null;
                }
            });
            r.group(function() {
                r.functional("@max", function(p, k) {
                    var h = d1.get(k);
                    if (h === null) return null;
                    p.nodes = [
                        F("@container", k.modifier ? "".concat(k.modifier.value, " (width < ").concat(h, ")") : "(width < ".concat(h, ")"), p.nodes)
                    ];
                }, {
                    compounds: 1
                });
            }, function(p, k) {
                return c1(p, k, "desc", d1);
            }), r.suggest("@max", function() {
                return Array.from(m1.keys()).filter(function(p) {
                    return p !== null;
                });
            }), r.group(function() {
                r.functional("@", function(p, k) {
                    var h = d1.get(k);
                    if (h === null) return null;
                    p.nodes = [
                        F("@container", k.modifier ? "".concat(k.modifier.value, " (width >= ").concat(h, ")") : "(width >= ".concat(h, ")"), p.nodes)
                    ];
                }, {
                    compounds: 1
                }), r.functional("@min", function(p, k) {
                    var h = d1.get(k);
                    if (h === null) return null;
                    p.nodes = [
                        F("@container", k.modifier ? "".concat(k.modifier.value, " (width >= ").concat(h, ")") : "(width >= ".concat(h, ")"), p.nodes)
                    ];
                }, {
                    compounds: 1
                });
            }, function(p, k) {
                return c1(p, k, "asc", d1);
            }), r.suggest("@min", function() {
                return Array.from(m1.keys()).filter(function(p) {
                    return p !== null;
                });
            }), r.suggest("@", function() {
                return Array.from(m1.keys()).filter(function(p) {
                    return p !== null;
                });
            });
        }
    }
    return i("portrait", [
        "@media (orientation: portrait)"
    ]), i("landscape", [
        "@media (orientation: landscape)"
    ]), i("ltr", [
        '&:where(:dir(ltr), [dir="ltr"], [dir="ltr"] *)'
    ]), i("rtl", [
        '&:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *)'
    ]), i("dark", [
        "@media (prefers-color-scheme: dark)"
    ]), i("starting", [
        "@starting-style"
    ]), i("print", [
        "@media print"
    ]), i("forced-colors", [
        "@media (forced-colors: active)"
    ]), i("inverted-colors", [
        "@media (inverted-colors: inverted)"
    ]), i("pointer-none", [
        "@media (pointer: none)"
    ]), i("pointer-coarse", [
        "@media (pointer: coarse)"
    ]), i("pointer-fine", [
        "@media (pointer: fine)"
    ]), i("any-pointer-none", [
        "@media (any-pointer: none)"
    ]), i("any-pointer-coarse", [
        "@media (any-pointer: coarse)"
    ]), i("any-pointer-fine", [
        "@media (any-pointer: fine)"
    ]), i("noscript", [
        "@media (scripting: none)"
    ]), r;
}
function Ii(e) {
    if (e.includes("=")) {
        var _L = _to_array._(L(e, "=")), r = _L[0], i = _L.slice(1), t = i.join("=").trim();
        if (t[0] === "'" || t[0] === '"') return e;
        if (t.length > 1) {
            var n = t[t.length - 1];
            if (t[t.length - 2] === " " && (n === "i" || n === "I" || n === "s" || n === "S")) return "".concat(r, '="').concat(t.slice(0, -2), '" ').concat(n);
        }
        return "".concat(r, '="').concat(t, '"');
    }
    return e;
}
function lr(e, r) {
    _(e, function(i) {
        if (i.kind === "at-rule" && i.name === "@slot") return V.Replace(r);
        if (i.kind === "at-rule" && (i.name === "@keyframes" || i.name === "@property")) return Object.assign(i, W([
            F(i.name, i.params, i.nodes)
        ])), V.Skip;
    });
}
function ot(e, r) {
    var i = 0;
    return _(e, function(t) {
        if (t.kind !== "at-rule" || t.name !== "@variant") return;
        var n = q("&", t.nodes), l = t.params, o = r.parseVariant(l);
        if (o === null) throw new Error("Cannot use `@variant` with unknown variant: ".concat(l));
        if (qe(n, o, r.variants) === null) throw new Error("Cannot use `@variant` with variant: ".concat(l));
        return i |= 32, V.Replace(n);
    }), i;
}
function Ui(e, r) {
    var i = Qr(e), t = Di(e), n = new U(function(d) {
        return zr(d, m);
    }), l = new U(function(d) {
        return Array.from(Kr(d, m));
    }), o = new U(function(d) {
        return new U(function(p) {
            var k = Li(p, m, d);
            try {
                Fe(k.map(function(param) {
                    var h = param.node;
                    return h;
                }), m), ot(k.map(function(param) {
                    var h = param.node;
                    return h;
                }), m);
            } catch (e) {
                return [];
            }
            return k;
        });
    }), f = new U(function(d) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = gt(d)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var p = _step.value;
                e.markUsedVariable(p);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    });
    function u(d) {
        var p = [];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var k = _step.value;
                var _x;
                var h = !0, _Te = Te([
                    k
                ], m, {
                    onInvalidCandidate: function onInvalidCandidate() {
                        h = !1;
                    }
                }), w1 = _Te.astNodes;
                r && _(w1, function(x) {
                    var _src;
                    return (_src = (_x = x).src) !== null && _src !== void 0 ? _src : _x.src = r, V.Continue;
                }), w1 = Re(w1, m, 0), p.push(h ? w1 : []);
            };
            for(var _iterator = d[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        return p;
    }
    function c(d) {
        return u(d).map(function(p) {
            return p.length > 0 ? ie(p) : null;
        });
    }
    var m = {
        theme: e,
        utilities: i,
        variants: t,
        invalidCandidates: new Set,
        important: !1,
        candidatesToCss: c,
        candidatesToAst: u,
        getClassOrder: function getClassOrder(d) {
            return _i(this, d);
        },
        getClassList: function getClassList() {
            return Oi(this);
        },
        getVariants: function getVariants() {
            return Pi(this);
        },
        parseCandidate: function parseCandidate(d) {
            return l.get(d);
        },
        parseVariant: function parseVariant(d) {
            return n.get(d);
        },
        compileAstNodes: function compileAstNodes(d) {
            var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
            return o.get(p).get(d);
        },
        printCandidate: function printCandidate(d) {
            return jr(m, d);
        },
        printVariant: function printVariant(d) {
            return kt(d);
        },
        getVariantOrder: function getVariantOrder() {
            var _this = this;
            var d = Array.from(n.values());
            d.sort(function(w1, x) {
                return _this.variants.compare(w1, x);
            });
            var p = new Map, k, h = 0;
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = d[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var w1 = _step.value;
                    w1 !== null && (k !== void 0 && this.variants.compare(k, w1) !== 0 && h++, p.set(w1, h), k = w1);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            return p;
        },
        resolveThemeValue: function resolveThemeValue(d) {
            var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
            var k = d.lastIndexOf("/"), h = null;
            k !== -1 && (h = d.slice(k + 1).trim(), d = d.slice(0, k).trim());
            var _e_resolve;
            var w1 = (_e_resolve = e.resolve(null, [
                d
            ], p ? 1 : 0)) !== null && _e_resolve !== void 0 ? _e_resolve : void 0;
            return h && w1 ? J(w1, h) : w1;
        },
        trackUsedVariables: function trackUsedVariables(d) {
            f.get(d);
        },
        canonicalizeCandidates: function canonicalizeCandidates(d, p) {
            return rr(this, d, p);
        },
        storage: {}
    };
    return m;
}
var sr = [
    "container-type",
    "pointer-events",
    "visibility",
    "position",
    "inset",
    "inset-inline",
    "inset-block",
    "inset-inline-start",
    "inset-inline-end",
    "top",
    "right",
    "bottom",
    "left",
    "isolation",
    "z-index",
    "order",
    "grid-column",
    "grid-column-start",
    "grid-column-end",
    "grid-row",
    "grid-row-start",
    "grid-row-end",
    "float",
    "clear",
    "--tw-container-component",
    "margin",
    "margin-inline",
    "margin-block",
    "margin-inline-start",
    "margin-inline-end",
    "margin-top",
    "margin-right",
    "margin-bottom",
    "margin-left",
    "box-sizing",
    "display",
    "field-sizing",
    "aspect-ratio",
    "height",
    "max-height",
    "min-height",
    "width",
    "max-width",
    "min-width",
    "flex",
    "flex-shrink",
    "flex-grow",
    "flex-basis",
    "table-layout",
    "caption-side",
    "border-collapse",
    "border-spacing",
    "transform-origin",
    "translate",
    "--tw-translate-x",
    "--tw-translate-y",
    "--tw-translate-z",
    "scale",
    "--tw-scale-x",
    "--tw-scale-y",
    "--tw-scale-z",
    "rotate",
    "--tw-rotate-x",
    "--tw-rotate-y",
    "--tw-rotate-z",
    "--tw-skew-x",
    "--tw-skew-y",
    "transform",
    "animation",
    "cursor",
    "touch-action",
    "--tw-pan-x",
    "--tw-pan-y",
    "--tw-pinch-zoom",
    "resize",
    "scroll-snap-type",
    "--tw-scroll-snap-strictness",
    "scroll-snap-align",
    "scroll-snap-stop",
    "scroll-margin",
    "scroll-margin-inline",
    "scroll-margin-block",
    "scroll-margin-inline-start",
    "scroll-margin-inline-end",
    "scroll-margin-top",
    "scroll-margin-right",
    "scroll-margin-bottom",
    "scroll-margin-left",
    "scroll-padding",
    "scroll-padding-inline",
    "scroll-padding-block",
    "scroll-padding-inline-start",
    "scroll-padding-inline-end",
    "scroll-padding-top",
    "scroll-padding-right",
    "scroll-padding-bottom",
    "scroll-padding-left",
    "list-style-position",
    "list-style-type",
    "list-style-image",
    "appearance",
    "columns",
    "break-before",
    "break-inside",
    "break-after",
    "grid-auto-columns",
    "grid-auto-flow",
    "grid-auto-rows",
    "grid-template-columns",
    "grid-template-rows",
    "flex-direction",
    "flex-wrap",
    "place-content",
    "place-items",
    "align-content",
    "align-items",
    "justify-content",
    "justify-items",
    "gap",
    "column-gap",
    "row-gap",
    "--tw-space-x-reverse",
    "--tw-space-y-reverse",
    "divide-x-width",
    "divide-y-width",
    "--tw-divide-y-reverse",
    "divide-style",
    "divide-color",
    "place-self",
    "align-self",
    "justify-self",
    "overflow",
    "overflow-x",
    "overflow-y",
    "overscroll-behavior",
    "overscroll-behavior-x",
    "overscroll-behavior-y",
    "scroll-behavior",
    "border-radius",
    "border-start-radius",
    "border-end-radius",
    "border-top-radius",
    "border-right-radius",
    "border-bottom-radius",
    "border-left-radius",
    "border-start-start-radius",
    "border-start-end-radius",
    "border-end-end-radius",
    "border-end-start-radius",
    "border-top-left-radius",
    "border-top-right-radius",
    "border-bottom-right-radius",
    "border-bottom-left-radius",
    "border-width",
    "border-inline-width",
    "border-block-width",
    "border-inline-start-width",
    "border-inline-end-width",
    "border-top-width",
    "border-right-width",
    "border-bottom-width",
    "border-left-width",
    "border-style",
    "border-inline-style",
    "border-block-style",
    "border-inline-start-style",
    "border-inline-end-style",
    "border-top-style",
    "border-right-style",
    "border-bottom-style",
    "border-left-style",
    "border-color",
    "border-inline-color",
    "border-block-color",
    "border-inline-start-color",
    "border-inline-end-color",
    "border-top-color",
    "border-right-color",
    "border-bottom-color",
    "border-left-color",
    "background-color",
    "background-image",
    "--tw-gradient-position",
    "--tw-gradient-stops",
    "--tw-gradient-via-stops",
    "--tw-gradient-from",
    "--tw-gradient-from-position",
    "--tw-gradient-via",
    "--tw-gradient-via-position",
    "--tw-gradient-to",
    "--tw-gradient-to-position",
    "mask-image",
    "--tw-mask-top",
    "--tw-mask-top-from-color",
    "--tw-mask-top-from-position",
    "--tw-mask-top-to-color",
    "--tw-mask-top-to-position",
    "--tw-mask-right",
    "--tw-mask-right-from-color",
    "--tw-mask-right-from-position",
    "--tw-mask-right-to-color",
    "--tw-mask-right-to-position",
    "--tw-mask-bottom",
    "--tw-mask-bottom-from-color",
    "--tw-mask-bottom-from-position",
    "--tw-mask-bottom-to-color",
    "--tw-mask-bottom-to-position",
    "--tw-mask-left",
    "--tw-mask-left-from-color",
    "--tw-mask-left-from-position",
    "--tw-mask-left-to-color",
    "--tw-mask-left-to-position",
    "--tw-mask-linear",
    "--tw-mask-linear-position",
    "--tw-mask-linear-from-color",
    "--tw-mask-linear-from-position",
    "--tw-mask-linear-to-color",
    "--tw-mask-linear-to-position",
    "--tw-mask-radial",
    "--tw-mask-radial-shape",
    "--tw-mask-radial-size",
    "--tw-mask-radial-position",
    "--tw-mask-radial-from-color",
    "--tw-mask-radial-from-position",
    "--tw-mask-radial-to-color",
    "--tw-mask-radial-to-position",
    "--tw-mask-conic",
    "--tw-mask-conic-position",
    "--tw-mask-conic-from-color",
    "--tw-mask-conic-from-position",
    "--tw-mask-conic-to-color",
    "--tw-mask-conic-to-position",
    "box-decoration-break",
    "background-size",
    "background-attachment",
    "background-clip",
    "background-position",
    "background-repeat",
    "background-origin",
    "mask-composite",
    "mask-mode",
    "mask-type",
    "mask-size",
    "mask-clip",
    "mask-position",
    "mask-repeat",
    "mask-origin",
    "fill",
    "stroke",
    "stroke-width",
    "object-fit",
    "object-position",
    "padding",
    "padding-inline",
    "padding-block",
    "padding-inline-start",
    "padding-inline-end",
    "padding-top",
    "padding-right",
    "padding-bottom",
    "padding-left",
    "text-align",
    "text-indent",
    "vertical-align",
    "font-family",
    "font-size",
    "line-height",
    "font-weight",
    "letter-spacing",
    "text-wrap",
    "overflow-wrap",
    "word-break",
    "text-overflow",
    "hyphens",
    "white-space",
    "color",
    "text-transform",
    "font-style",
    "font-stretch",
    "font-variant-numeric",
    "text-decoration-line",
    "text-decoration-color",
    "text-decoration-style",
    "text-decoration-thickness",
    "text-underline-offset",
    "-webkit-font-smoothing",
    "placeholder-color",
    "caret-color",
    "accent-color",
    "color-scheme",
    "opacity",
    "background-blend-mode",
    "mix-blend-mode",
    "box-shadow",
    "--tw-shadow",
    "--tw-shadow-color",
    "--tw-ring-shadow",
    "--tw-ring-color",
    "--tw-inset-shadow",
    "--tw-inset-shadow-color",
    "--tw-inset-ring-shadow",
    "--tw-inset-ring-color",
    "--tw-ring-offset-width",
    "--tw-ring-offset-color",
    "outline",
    "outline-width",
    "outline-offset",
    "outline-color",
    "--tw-blur",
    "--tw-brightness",
    "--tw-contrast",
    "--tw-drop-shadow",
    "--tw-grayscale",
    "--tw-hue-rotate",
    "--tw-invert",
    "--tw-saturate",
    "--tw-sepia",
    "filter",
    "--tw-backdrop-blur",
    "--tw-backdrop-brightness",
    "--tw-backdrop-contrast",
    "--tw-backdrop-grayscale",
    "--tw-backdrop-hue-rotate",
    "--tw-backdrop-invert",
    "--tw-backdrop-opacity",
    "--tw-backdrop-saturate",
    "--tw-backdrop-sepia",
    "backdrop-filter",
    "transition-property",
    "transition-behavior",
    "transition-delay",
    "transition-duration",
    "transition-timing-function",
    "will-change",
    "contain",
    "content",
    "forced-color-adjust"
];
function Te(e, r) {
    var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = _ref.onInvalidCandidate, t = _ref.respectImportant;
    var n = new Map, l = [], o = new Map;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = e[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var c = _step.value;
            if (r.invalidCandidates.has(c)) {
                i === null || i === void 0 ? void 0 : i(c);
                continue;
            }
            var m = r.parseCandidate(c);
            if (m.length === 0) {
                i === null || i === void 0 ? void 0 : i(c);
                continue;
            }
            o.set(c, m);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    var f = 0;
    (t !== null && t !== void 0 ? t : !0) && (f |= 1);
    var u = r.getVariantOrder();
    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
    try {
        for(var _iterator1 = o[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
            var _step_value = _sliced_to_array._(_step1.value, 2), c1 = _step_value[0], m1 = _step_value[1];
            var d = !1;
            var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
            try {
                for(var _iterator2 = m1[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                    var p = _step2.value;
                    var k = r.compileAstNodes(p, f);
                    if (k.length !== 0) {
                        d = !0;
                        var _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
                        try {
                            for(var _iterator3 = k[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                                var _step_value1 = _step3.value, h = _step_value1.node, w1 = _step_value1.propertySort;
                                var x = 0n;
                                var _iteratorNormalCompletion4 = true, _didIteratorError4 = false, _iteratorError4 = undefined;
                                try {
                                    for(var _iterator4 = p.variants[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true){
                                        var S = _step4.value;
                                        x |= 1n << BigInt(u.get(S));
                                    }
                                } catch (err) {
                                    _didIteratorError4 = true;
                                    _iteratorError4 = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                                            _iterator4.return();
                                        }
                                    } finally{
                                        if (_didIteratorError4) {
                                            throw _iteratorError4;
                                        }
                                    }
                                }
                                n.set(h, {
                                    properties: w1,
                                    variants: x,
                                    candidate: c1
                                }), l.push(h);
                            }
                        } catch (err) {
                            _didIteratorError3 = true;
                            _iteratorError3 = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                                    _iterator3.return();
                                }
                            } finally{
                                if (_didIteratorError3) {
                                    throw _iteratorError3;
                                }
                            }
                        }
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                        _iterator2.return();
                    }
                } finally{
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
            d || (i === null || i === void 0 ? void 0 : i(c1));
        }
    } catch (err) {
        _didIteratorError1 = true;
        _iteratorError1 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                _iterator1.return();
            }
        } finally{
            if (_didIteratorError1) {
                throw _iteratorError1;
            }
        }
    }
    return l.sort(function(c, m) {
        var d = n.get(c), p = n.get(m);
        if (d.variants - p.variants !== 0n) return Number(d.variants - p.variants);
        var k = 0;
        for(; k < d.properties.order.length && k < p.properties.order.length && d.properties.order[k] === p.properties.order[k];)k += 1;
        var _d_properties_order_k, _p_properties_order_k;
        return ((_d_properties_order_k = d.properties.order[k]) !== null && _d_properties_order_k !== void 0 ? _d_properties_order_k : 1 / 0) - ((_p_properties_order_k = p.properties.order[k]) !== null && _p_properties_order_k !== void 0 ? _p_properties_order_k : 1 / 0) || p.properties.count - d.properties.count || xt(d.candidate, p.candidate);
    }), {
        astNodes: l,
        nodeSorting: n
    };
}
function Li(e, r, i) {
    var t = Ca(e, r);
    if (t.length === 0) return [];
    var n = r.important && !!(i & 1), l = [], o = ".".concat(xe(e.raw));
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = t[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var f = _step.value;
            var u = Sa(f);
            (e.important || n) && zi(f);
            var c = {
                kind: "rule",
                selector: o,
                nodes: f
            };
            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
            try {
                for(var _iterator1 = e.variants[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                    var m = _step1.value;
                    if (qe(c, m, r.variants) === null) return [];
                }
            } catch (err) {
                _didIteratorError1 = true;
                _iteratorError1 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                        _iterator1.return();
                    }
                } finally{
                    if (_didIteratorError1) {
                        throw _iteratorError1;
                    }
                }
            }
            l.push({
                node: c,
                propertySort: u
            });
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return l;
}
function qe(e, r, i) {
    var t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
    if (r.kind === "arbitrary") {
        if (r.relative && t === 0) return null;
        e.nodes = [
            Z(r.selector, e.nodes)
        ];
        return;
    }
    var _i_get = i.get(r.root), n = _i_get.applyFn;
    if (r.kind === "compound") {
        var o = F("@slot");
        if (qe(o, r.variant, i, t + 1) === null || r.root === "not" && o.nodes.length > 1) return null;
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = o.nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var u = _step.value;
                if (u.kind !== "rule" && u.kind !== "at-rule" || n(u, r) === null) return null;
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        _(o.nodes, function(u) {
            if ((u.kind === "rule" || u.kind === "at-rule") && u.nodes.length <= 0) return u.nodes = e.nodes, V.Skip;
        }), e.nodes = o.nodes;
        return;
    }
    if (n(e, r) === null) return null;
}
function Ki(e) {
    var _e_options;
    var _e_options_types;
    var r = (_e_options_types = (_e_options = e.options) === null || _e_options === void 0 ? void 0 : _e_options.types) !== null && _e_options_types !== void 0 ? _e_options_types : [];
    return r.length > 1 && r.includes("any");
}
function Ca(e, r) {
    if (e.kind === "arbitrary") {
        var o = e.value;
        return e.modifier && (o = X(o, e.modifier, r.theme)), o === null ? [] : [
            [
                a(e.property, o)
            ]
        ];
    }
    var _r_utilities_get;
    var i = (_r_utilities_get = r.utilities.get(e.root)) !== null && _r_utilities_get !== void 0 ? _r_utilities_get : [], t = [], n = i.filter(function(o) {
        return !Ki(o);
    });
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = n[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var o1 = _step.value;
            if (o1.kind !== e.kind) continue;
            var f = o1.compileFn(e);
            if (f !== void 0) {
                if (f === null) return t;
                t.push(f);
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    if (t.length > 0) return t;
    var l = i.filter(function(o) {
        return Ki(o);
    });
    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
    try {
        for(var _iterator1 = l[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
            var o2 = _step1.value;
            if (o2.kind !== e.kind) continue;
            var f1 = o2.compileFn(e);
            if (f1 !== void 0) {
                if (f1 === null) return t;
                t.push(f1);
            }
        }
    } catch (err) {
        _didIteratorError1 = true;
        _iteratorError1 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                _iterator1.return();
            }
        } finally{
            if (_didIteratorError1) {
                throw _iteratorError1;
            }
        }
    }
    return t;
}
function zi(e) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = e[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var r = _step.value;
            r.kind !== "at-root" && (r.kind === "declaration" ? r.important = !0 : (r.kind === "rule" || r.kind === "at-rule") && zi(r.nodes));
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
function Sa(e) {
    var r = new Set, i = 0, t = e.slice(), n = !1;
    for(; t.length > 0;){
        var l = t.shift();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        if (l.kind === "declaration") {
            if (l.value === void 0 || (i++, n)) continue;
            if (l.property === "--tw-sort") {
                var _l_value;
                var f = sr.indexOf((_l_value = l.value) !== null && _l_value !== void 0 ? _l_value : "");
                if (f !== -1) {
                    r.add(f), n = !0;
                    continue;
                }
            }
            var o = sr.indexOf(l.property);
            o !== -1 && r.add(o);
        } else if (l.kind === "rule" || l.kind === "at-rule") try {
            for(var _iterator = l.nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var o1 = _step.value;
                t.push(o1);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return {
        order: Array.from(r).sort(function(l, o) {
            return l - o;
        }),
        count: i
    };
}
function $e(e, r) {
    var i = 0, t = Z("&", e), n = new Set, l = new U(function() {
        return new Set;
    }), o = new U(function() {
        return new Set;
    });
    _([
        t
    ], function(d, p) {
        if (d.kind === "at-rule") {
            if (d.name === "@keyframes") return _(d.nodes, function(k) {
                if (k.kind === "at-rule" && k.name === "@apply") throw new Error("You cannot use `@apply` inside `@keyframes`.");
            }), V.Skip;
            if (d.name === "@utility") {
                var k = d.params.replace(/-\*$/, "");
                o.get(k).add(d), _(d.nodes, function(h) {
                    if (!(h.kind !== "at-rule" || h.name !== "@apply")) {
                        n.add(d);
                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(var _iterator = Mi(h, r)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                var w1 = _step.value;
                                l.get(d).add(w1);
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                    _iterator.return();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                    }
                });
                return;
            }
            if (d.name === "@apply") {
                if (p.parent === null) return;
                i |= 1, n.add(p.parent);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined, _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator = Mi(d, r)[Symbol.iterator](), _step; !(_iteratorNormalCompletion1 = (_step = _iterator.next()).done); _iteratorNormalCompletion1 = true){
                        var k1 = _step.value;
                        try {
                            for(var _iterator1 = p.path()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion = true){
                                var h = _step1.value;
                                n.has(h) && l.get(h).add(k1);
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion && _iterator1.return != null) {
                                    _iterator1.return();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
            }
        }
    });
    var f = new Set, u = [], c = new Set;
    function m(d) {
        var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        if (!f.has(d)) {
            if (c.has(d)) {
                var k = p[(p.indexOf(d) + 1) % p.length];
                throw d.kind === "at-rule" && d.name === "@utility" && k.kind === "at-rule" && k.name === "@utility" && _(d.nodes, function(h) {
                    if (h.kind !== "at-rule" || h.name !== "@apply") return;
                    var w1 = h.params.split(/\s+/g);
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined, _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        for(var _iterator = w1[Symbol.iterator](), _step; !(_iteratorNormalCompletion1 = (_step = _iterator.next()).done); _iteratorNormalCompletion1 = true){
                            var x = _step.value;
                            try {
                                for(var _iterator1 = r.parseCandidate(x)[Symbol.iterator](), _step1; !(_iteratorNormalCompletion = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion = true){
                                    var S = _step1.value;
                                    switch(S.kind){
                                        case "arbitrary":
                                            break;
                                        case "static":
                                        case "functional":
                                            if (k.params.replace(/-\*$/, "") === S.root) throw new Error("You cannot `@apply` the `".concat(x, "` utility here because it creates a circular dependency."));
                                            break;
                                        default:
                                    }
                                }
                            } catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err;
                            } finally{
                                try {
                                    if (!_iteratorNormalCompletion && _iterator1.return != null) {
                                        _iterator1.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                            }
                        }
                    } catch (err) {
                        _didIteratorError1 = true;
                        _iteratorError1 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion1 && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError1) {
                                throw _iteratorError1;
                            }
                        }
                    }
                }), new Error("Circular dependency detected:\n\n".concat(ie([
                    d
                ]), "\nRelies on:\n\n").concat(ie([
                    k
                ])));
            }
            c.add(d);
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined, _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
            try {
                for(var _iterator = l.get(d)[Symbol.iterator](), _step; !(_iteratorNormalCompletion1 = (_step = _iterator.next()).done); _iteratorNormalCompletion1 = true){
                    var k1 = _step.value;
                    try {
                        for(var _iterator1 = o.get(k1)[Symbol.iterator](), _step1; !(_iteratorNormalCompletion = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion = true){
                            var h = _step1.value;
                            p.push(d), m(h, p), p.pop();
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator1.return != null) {
                                _iterator1.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                }
            } catch (err) {
                _didIteratorError1 = true;
                _iteratorError1 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion1 && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError1) {
                        throw _iteratorError1;
                    }
                }
            }
            f.add(d), c.delete(d), u.push(d);
        }
    }
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = n[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var d = _step.value;
            m(d);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
    try {
        for(var _iterator1 = u[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
            var d1 = _step1.value;
            "nodes" in d1 && _(d1.nodes, function(p) {
                if (p.kind !== "at-rule" || p.name !== "@apply") return;
                var k = p.params.split(/(\s+)/g), h = {}, w1 = 0;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = k.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _sliced_to_array._(_step.value, 2), x = _step_value[0], S = _step_value[1];
                        x % 2 === 0 && (h[S] = w1), w1 += S.length;
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                {
                    var x1 = Object.keys(h), S1 = Te(x1, r, {
                        respectImportant: !1,
                        onInvalidCandidate: function(N) {
                            if (r.theme.prefix && !N.startsWith(r.theme.prefix)) throw new Error("Cannot apply unprefixed utility class `".concat(N, "`. Did you mean `").concat(r.theme.prefix, ":").concat(N, "`?"));
                            if (r.invalidCandidates.has(N)) throw new Error("Cannot apply utility class `".concat(N, "` because it has been explicitly disabled: https://tailwindcss.com/docs/detecting-classes-in-source-files#explicitly-excluding-classes"));
                            var P = L(N, ":");
                            if (P.length > 1) {
                                var z = P.pop();
                                if (r.candidatesToCss([
                                    z
                                ])[0]) {
                                    var I = r.candidatesToCss(P.map(function(Y) {
                                        return "".concat(Y, ":[--tw-variant-check:1]");
                                    })), M = P.filter(function(Y, G) {
                                        return I[G] === null;
                                    });
                                    if (M.length > 0) {
                                        if (M.length === 1) throw new Error("Cannot apply utility class `".concat(N, "` because the ").concat(M.map(function(Y) {
                                            return "`".concat(Y, "`");
                                        }), " variant does not exist."));
                                        {
                                            var Y = new Intl.ListFormat("en", {
                                                style: "long",
                                                type: "conjunction"
                                            });
                                            throw new Error("Cannot apply utility class `".concat(N, "` because the ").concat(Y.format(M.map(function(G) {
                                                return "`".concat(G, "`");
                                            })), " variants do not exist."));
                                        }
                                    }
                                }
                            }
                            throw r.theme.size === 0 ? new Error("Cannot apply unknown utility class `".concat(N, "`. Are you using CSS modules or similar and missing `@reference`? https://tailwindcss.com/docs/functions-and-directives#reference-directive")) : new Error("Cannot apply unknown utility class `".concat(N, "`"));
                        }
                    }), A = p.src, y = S1.astNodes.map(function(N) {
                        var _S_nodeSorting_get;
                        var P = (_S_nodeSorting_get = S1.nodeSorting.get(N)) === null || _S_nodeSorting_get === void 0 ? void 0 : _S_nodeSorting_get.candidate, z = P ? h[P] : void 0;
                        if (N = ee(N), !A || !P || z === void 0) return _([
                            N
                        ], function(M) {
                            M.src = A;
                        }), N;
                        var I = [
                            A[0],
                            A[1],
                            A[2]
                        ];
                        return I[1] += 7 + z, I[2] = I[1] + P.length, _([
                            N
                        ], function(M) {
                            M.src = I;
                        }), N;
                    }), K = [];
                    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined, _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                    try {
                        for(var _iterator1 = y[Symbol.iterator](), _step1; !(_iteratorNormalCompletion2 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion2 = true){
                            var N = _step1.value;
                            if (N.kind === "rule") try {
                                for(var _iterator2 = N.nodes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion1 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion1 = true){
                                    var P = _step2.value;
                                    K.push(P);
                                }
                            } catch (err) {
                                _didIteratorError1 = true;
                                _iteratorError1 = err;
                            } finally{
                                try {
                                    if (!_iteratorNormalCompletion1 && _iterator2.return != null) {
                                        _iterator2.return();
                                    }
                                } finally{
                                    if (_didIteratorError1) {
                                        throw _iteratorError1;
                                    }
                                }
                            }
                            else K.push(N);
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator1.return != null) {
                                _iterator1.return();
                            }
                        } finally{
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }
                    return V.Replace(K);
                }
            });
        }
    } catch (err) {
        _didIteratorError1 = true;
        _iteratorError1 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                _iterator1.return();
            }
        } finally{
            if (_didIteratorError1) {
                throw _iteratorError1;
            }
        }
    }
    return i;
}
function Mi(e, r) {
    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator, _step, i, _iterator1, _step1, t, _, err, err;
    return _ts_generator._(this, function(_state) {
        switch(_state.label){
            case 0:
                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined, _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                _state.label = 1;
            case 1:
                _state.trys.push([
                    1,
                    14,
                    15,
                    16
                ]);
                _iterator = e.params.split(/\s+/g)[Symbol.iterator]();
                _state.label = 2;
            case 2:
                if (!!(_iteratorNormalCompletion1 = (_step = _iterator.next()).done)) return [
                    3,
                    13
                ];
                i = _step.value;
                _state.label = 3;
            case 3:
                _state.trys.push([
                    3,
                    10,
                    11,
                    12
                ]);
                _iterator1 = r.parseCandidate(i)[Symbol.iterator]();
                _state.label = 4;
            case 4:
                if (!!(_iteratorNormalCompletion = (_step1 = _iterator1.next()).done)) return [
                    3,
                    9
                ];
                t = _step1.value;
                _ = t.kind;
                switch(_){
                    case "arbitrary":
                        return [
                            3,
                            5
                        ];
                    case "static":
                        return [
                            3,
                            6
                        ];
                    case "functional":
                        return [
                            3,
                            6
                        ];
                }
                return [
                    3,
                    8
                ];
            case 5:
                return [
                    3,
                    8
                ];
            case 6:
                return [
                    4,
                    t.root
                ];
            case 7:
                _state.sent();
                return [
                    3,
                    8
                ];
            case 8:
                _iteratorNormalCompletion = true;
                return [
                    3,
                    4
                ];
            case 9:
                return [
                    3,
                    12
                ];
            case 10:
                err = _state.sent();
                _didIteratorError = true;
                _iteratorError = err;
                return [
                    3,
                    12
                ];
            case 11:
                try {
                    if (!_iteratorNormalCompletion && _iterator1.return != null) {
                        _iterator1.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
                return [
                    7
                ];
            case 12:
                _iteratorNormalCompletion1 = true;
                return [
                    3,
                    2
                ];
            case 13:
                return [
                    3,
                    16
                ];
            case 14:
                err = _state.sent();
                _didIteratorError1 = true;
                _iteratorError1 = err;
                return [
                    3,
                    16
                ];
            case 15:
                try {
                    if (!_iteratorNormalCompletion1 && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError1) {
                        throw _iteratorError1;
                    }
                }
                return [
                    7
                ];
            case 16:
                return [
                    2
                ];
        }
    });
}
function ur(_0, _1, _2) {
    return _async_to_generator._(function(e, r, i) {
        var t, n, l, o, _tmp;
        var _arguments = arguments;
        return _ts_generator._(this, function(_state) {
            switch(_state.label){
                case 0:
                    t = _arguments.length > 3 && _arguments[3] !== void 0 ? _arguments[3] : 0, n = _arguments.length > 4 && _arguments[4] !== void 0 ? _arguments[4] : !1;
                    l = 0, o = [];
                    _(e, function(f) {
                        if (f.kind === "at-rule" && (f.name === "@import" || f.name === "@reference")) {
                            var u = $a(B(f.params));
                            if (u === null) return;
                            f.name === "@reference" && (u.media = "reference"), l |= 2;
                            var c = u.uri, m = u.layer, d = u.media, p = u.supports;
                            if (c.startsWith("data:") || c.startsWith("http://") || c.startsWith("https://")) return;
                            var k = de({}, []);
                            return o.push(function() {
                                return _async_to_generator._(function() {
                                    var h, w1;
                                    return _ts_generator._(this, function(_state) {
                                        switch(_state.label){
                                            case 0:
                                                if (t > 100) throw new Error("Exceeded maximum recursion depth while resolving `".concat(c, "` in `").concat(r, "`)"));
                                                return [
                                                    4,
                                                    i(c, r)
                                                ];
                                            case 1:
                                                h = _state.sent(), w1 = Ne(h.content, {
                                                    from: n ? h.path : void 0
                                                });
                                                return [
                                                    4,
                                                    ur(w1, h.base, i, t + 1, n)
                                                ];
                                            case 2:
                                                _state.sent(), k.nodes = Ta(f, [
                                                    de({
                                                        base: h.base
                                                    }, w1)
                                                ], m, d, p);
                                                return [
                                                    2
                                                ];
                                        }
                                    });
                                })();
                            }()), V.ReplaceSkip(k);
                        }
                    });
                    _tmp = o.length > 0;
                    if (!_tmp) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        Promise.all(o)
                    ];
                case 1:
                    _tmp = _state.sent();
                    _state.label = 2;
                case 2:
                    return [
                        2,
                        (_tmp, l)
                    ];
            }
        });
    }).apply(this, arguments);
}
function $a(e) {
    var r, i = null, t = null, n = null;
    for(var l = 0; l < e.length; l++){
        var o = e[l];
        if (o.kind !== "separator") {
            if (o.kind === "word" && !r) {
                if (!o.value || o.value[0] !== '"' && o.value[0] !== "'") return null;
                r = o.value.slice(1, -1);
                continue;
            }
            if (o.kind === "function" && o.value.toLowerCase() === "url" || !r) return null;
            if ((o.kind === "word" || o.kind === "function") && o.value.toLowerCase() === "layer") {
                if (i) return null;
                if (n) throw new Error("`layer(\u2026)` in an `@import` should come before any other functions or conditions");
                "nodes" in o ? i = H(o.nodes) : i = "";
                continue;
            }
            if (o.kind === "function" && o.value.toLowerCase() === "supports") {
                if (n) return null;
                n = H(o.nodes);
                continue;
            }
            t = H(e.slice(l));
            break;
        }
    }
    return r ? {
        uri: r,
        layer: i,
        media: t,
        supports: n
    } : null;
}
function Ta(e, r, i, t, n) {
    var l = r;
    if (i !== null) {
        var o = F("@layer", i, l);
        o.src = e.src, l = [
            o
        ];
    }
    if (t !== null) {
        var o1 = F("@media", t, l);
        o1.src = e.src, l = [
            o1
        ];
    }
    if (n !== null) {
        var o2 = F("@supports", n[0] === "(" ? n : "(".concat(n, ")"), l);
        o2.src = e.src, l = [
            o2
        ];
    }
    return l;
}
function Ge(e) {
    if (Object.prototype.toString.call(e) !== "[object Object]") return !1;
    var r = Object.getPrototypeOf(e);
    return r === null || Object.getPrototypeOf(r) === null;
}
function at(e, r, i) {
    var t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined, _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
    try {
        for(var _iterator = r[Symbol.iterator](), _step; !(_iteratorNormalCompletion1 = (_step = _iterator.next()).done); _iteratorNormalCompletion1 = true){
            var n = _step.value;
            if (n != null) try {
                for(var _iterator1 = Reflect.ownKeys(n)[Symbol.iterator](), _step1; !(_iteratorNormalCompletion = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion = true){
                    var l = _step1.value;
                    t.push(l);
                    var o = i(e[l], n[l], t);
                    o !== void 0 ? e[l] = o : !Ge(e[l]) || !Ge(n[l]) ? e[l] = n[l] : e[l] = at({}, [
                        e[l],
                        n[l]
                    ], i, t), t.pop();
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator1.return != null) {
                        _iterator1.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    } catch (err) {
        _didIteratorError1 = true;
        _iteratorError1 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion1 && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError1) {
                throw _iteratorError1;
            }
        }
    }
    return e;
}
function Rt(e, r, i) {
    return function(n, l) {
        var o = n.lastIndexOf("/"), f = null;
        o !== -1 && (f = n.slice(o + 1).trim(), n = n.slice(0, o).trim());
        var u = function() {
            var _r, _ji;
            var c = Ue(n), _Ea = _sliced_to_array._(Ea(e.theme, c), 2), m = _Ea[0], d = _Ea[1], p = i((_ji = ji((_r = r()) !== null && _r !== void 0 ? _r : {}, c)) !== null && _ji !== void 0 ? _ji : null);
            if (typeof p == "string" && (p = p.replace("<alpha-value>", "1")), (typeof m === "undefined" ? "undefined" : _type_of._(m)) != "object") return (typeof d === "undefined" ? "undefined" : _type_of._(d)) != "object" && d & 4 ? p !== null && p !== void 0 ? p : m : m;
            if (p !== null && (typeof p === "undefined" ? "undefined" : _type_of._(p)) == "object" && !Array.isArray(p)) {
                var _p___CSS_VALUES__;
                var k = at({}, [
                    p
                ], function(h, w1) {
                    return w1;
                });
                if (m === null && Object.hasOwn(p, "__CSS_VALUES__")) {
                    var h = {};
                    for(var w1 in p.__CSS_VALUES__)h[w1] = p[w1], delete k[w1];
                    m = h;
                }
                for(var h1 in m)h1 !== "__CSS_VALUES__" && ((p === null || p === void 0 ? void 0 : (_p___CSS_VALUES__ = p.__CSS_VALUES__) === null || _p___CSS_VALUES__ === void 0 ? void 0 : _p___CSS_VALUES__[h1]) & 4 && ji(k, h1.split("-")) !== void 0 || (k[Ve(h1)] = m[h1]));
                return k;
            }
            if (Array.isArray(m) && Array.isArray(d) && Array.isArray(p)) {
                var k1 = m[0], h2 = m[1];
                var _p_;
                d[0] & 4 && (k1 = (_p_ = p[0]) !== null && _p_ !== void 0 ? _p_ : k1);
                var _p__w;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = Object.keys(h2)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var w2 = _step.value;
                        d[1][w2] & 4 && (h2[w2] = (_p__w = p[1][w2]) !== null && _p__w !== void 0 ? _p__w : h2[w2]);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return [
                    k1,
                    h2
                ];
            }
            return m !== null && m !== void 0 ? m : p;
        }();
        return f && typeof u == "string" && (u = J(u, f)), u !== null && u !== void 0 ? u : l;
    };
}
function Ea(e, r) {
    if (r.length === 1 && r[0].startsWith("--")) return [
        e.get([
            r[0]
        ]),
        e.getOptions(r[0])
    ];
    var i = Ye(r), t = new Map, n = new U(function() {
        return new Map;
    }), l = e.namespace("--".concat(i));
    if (l.size === 0) return [
        null,
        0
    ];
    var o = new Map;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = l[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array._(_step.value, 2), m = _step_value[0], d = _step_value[1];
            if (!m || !m.includes("--")) {
                t.set(m, d), o.set(m, e.getOptions(m ? "--".concat(i, "-").concat(m) : "--".concat(i)));
                continue;
            }
            var p = m.indexOf("--"), k = m.slice(0, p), h = m.slice(p + 2);
            h = h.replace(/-([a-z])/g, function(w1, x) {
                return x.toUpperCase();
            }), n.get(k === "" ? null : k).set(h, [
                d,
                e.getOptions("--".concat(i).concat(m))
            ]);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    var f = e.getOptions("--".concat(i));
    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
    try {
        for(var _iterator1 = n[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
            var _step_value1 = _sliced_to_array._(_step1.value, 2), m1 = _step_value1[0], d1 = _step_value1[1];
            var p1 = t.get(m1);
            if (typeof p1 != "string") continue;
            var k1 = {}, h1 = {};
            var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
            try {
                for(var _iterator2 = d1[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                    var _step_value2 = _sliced_to_array._(_step2.value, 2), w1 = _step_value2[0], _step_value_ = _sliced_to_array._(_step_value2[1], 2), x = _step_value_[0], S = _step_value_[1];
                    k1[w1] = x, h1[w1] = S;
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                        _iterator2.return();
                    }
                } finally{
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
            t.set(m1, [
                p1,
                k1
            ]), o.set(m1, [
                f,
                h1
            ]);
        }
    } catch (err) {
        _didIteratorError1 = true;
        _iteratorError1 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                _iterator1.return();
            }
        } finally{
            if (_didIteratorError1) {
                throw _iteratorError1;
            }
        }
    }
    var u = {}, c = {};
    var _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
    try {
        for(var _iterator3 = t[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
            var _step_value3 = _sliced_to_array._(_step3.value, 2), m2 = _step_value3[0], d2 = _step_value3[1];
            Fi(u, [
                m2 !== null && m2 !== void 0 ? m2 : "DEFAULT"
            ], d2);
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
            }
        } finally{
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }
    var _iteratorNormalCompletion4 = true, _didIteratorError4 = false, _iteratorError4 = undefined;
    try {
        for(var _iterator4 = o[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true){
            var _step_value4 = _sliced_to_array._(_step4.value, 2), m3 = _step_value4[0], d3 = _step_value4[1];
            Fi(c, [
                m3 !== null && m3 !== void 0 ? m3 : "DEFAULT"
            ], d3);
        }
    } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                _iterator4.return();
            }
        } finally{
            if (_didIteratorError4) {
                throw _iteratorError4;
            }
        }
    }
    var _u_DEFAULT, _c_DEFAULT, _c_DEFAULT1;
    return r[r.length - 1] === "DEFAULT" ? [
        (_u_DEFAULT = u === null || u === void 0 ? void 0 : u.DEFAULT) !== null && _u_DEFAULT !== void 0 ? _u_DEFAULT : null,
        (_c_DEFAULT = c.DEFAULT) !== null && _c_DEFAULT !== void 0 ? _c_DEFAULT : 0
    ] : "DEFAULT" in u && Object.keys(u).length === 1 ? [
        u.DEFAULT,
        (_c_DEFAULT1 = c.DEFAULT) !== null && _c_DEFAULT1 !== void 0 ? _c_DEFAULT1 : 0
    ] : (u.__CSS_VALUES__ = c, [
        u,
        c
    ]);
}
function ji(e, r) {
    for(var i = 0; i < r.length; ++i){
        var t = r[i];
        if ((e === null || e === void 0 ? void 0 : e[t]) === void 0) {
            if (r[i + 1] === void 0) return;
            r[i + 1] = "".concat(t, "-").concat(r[i + 1]);
            continue;
        }
        if (typeof e == "string") return;
        e = e[t];
    }
    return e;
}
function Fi(e, r, i) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = r.slice(0, -1)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var t = _step.value;
            e[t] === void 0 && (e[t] = {}), e = e[t];
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    e[r[r.length - 1]] = i;
}
var Wi = /^[a-z@][a-zA-Z0-9/%._-]*$/;
function cr(param) {
    var e = param.designSystem, r = param.ast, i = param.resolvedConfig, t = param.featuresRef, n = param.referenceMode, l = param.src;
    var o = {
        addBase: function addBase(f) {
            if (n) return;
            var u = he(f);
            t.current |= Fe(u, e);
            var c = F("@layer", "base", u);
            _([
                c
            ], function(m) {
                m.src = l;
            }), r.push(c);
        },
        addVariant: function addVariant(f, u) {
            if (!Vt.test(f)) throw new Error("`addVariant('".concat(f, "')` defines an invalid variant name. Variants should only contain alphanumeric, dashes, or underscore characters and start with a lowercase letter or number."));
            if (typeof u == "string") {
                if (u.includes(":merge(")) return;
            } else if (Array.isArray(u)) {
                if (u.some(function(m) {
                    return m.includes(":merge(");
                })) return;
            } else if ((typeof u === "undefined" ? "undefined" : _type_of._(u)) == "object") {
                var m = function m1(d, p) {
                    return Object.entries(d).some(function(param) {
                        var _param = _sliced_to_array._(param, 2), k = _param[0], h = _param[1];
                        return k.includes(p) || (typeof h === "undefined" ? "undefined" : _type_of._(h)) == "object" && m(h, p);
                    });
                };
                var c = m;
                if (m(u, ":merge(")) return;
            }
            typeof u == "string" || Array.isArray(u) ? e.variants.static(f, function(m) {
                m.nodes = Bi(u, m.nodes);
            }, {
                compounds: Le(typeof u == "string" ? [
                    u
                ] : u)
            }) : (typeof u === "undefined" ? "undefined" : _type_of._(u)) == "object" && e.variants.fromAst(f, he(u), e);
        },
        matchVariant: function matchVariant(f, u, c) {
            function m(p, k, h) {
                var _k_value;
                var w1 = u(p, {
                    modifier: (_k_value = k === null || k === void 0 ? void 0 : k.value) !== null && _k_value !== void 0 ? _k_value : null
                });
                return Bi(w1, h);
            }
            try {
                var p = u("a", {
                    modifier: null
                });
                if (typeof p == "string" && p.includes(":merge(")) return;
                if (Array.isArray(p) && p.some(function(k) {
                    return k.includes(":merge(");
                })) return;
            } catch (e) {}
            var _c_values;
            var d = Object.keys((_c_values = c === null || c === void 0 ? void 0 : c.values) !== null && _c_values !== void 0 ? _c_values : {});
            e.variants.group(function() {
                e.variants.functional(f, function(p, k) {
                    if (!k.value) {
                        if ((c === null || c === void 0 ? void 0 : c.values) && "DEFAULT" in c.values) {
                            p.nodes = m(c.values.DEFAULT, k.modifier, p.nodes);
                            return;
                        }
                        return null;
                    }
                    if (k.value.kind === "arbitrary") p.nodes = m(k.value.value, k.modifier, p.nodes);
                    else if (k.value.kind === "named" && (c === null || c === void 0 ? void 0 : c.values)) {
                        var h = c.values[k.value.value];
                        if (typeof h != "string") return null;
                        p.nodes = m(h, k.modifier, p.nodes);
                    } else return null;
                });
            }, function(p, k) {
                var _c_values, _c_values1, _p_modifier, _k_modifier;
                if (p.kind !== "functional" || k.kind !== "functional") return 0;
                var _c_values_h, _c_values_w;
                var h = p.value ? p.value.value : "DEFAULT", w1 = k.value ? k.value.value : "DEFAULT", x = (_c_values_h = c === null || c === void 0 ? void 0 : (_c_values = c.values) === null || _c_values === void 0 ? void 0 : _c_values[h]) !== null && _c_values_h !== void 0 ? _c_values_h : h, S = (_c_values_w = c === null || c === void 0 ? void 0 : (_c_values1 = c.values) === null || _c_values1 === void 0 ? void 0 : _c_values1[w1]) !== null && _c_values_w !== void 0 ? _c_values_w : w1;
                var _p_modifier_value, _k_modifier_value;
                if (c && typeof c.sort == "function") return c.sort({
                    value: x,
                    modifier: (_p_modifier_value = (_p_modifier = p.modifier) === null || _p_modifier === void 0 ? void 0 : _p_modifier.value) !== null && _p_modifier_value !== void 0 ? _p_modifier_value : null
                }, {
                    value: S,
                    modifier: (_k_modifier_value = (_k_modifier = k.modifier) === null || _k_modifier === void 0 ? void 0 : _k_modifier.value) !== null && _k_modifier_value !== void 0 ? _k_modifier_value : null
                });
                var A = d.indexOf(h), y = d.indexOf(w1);
                return A = A === -1 ? d.length : A, y = y === -1 ? d.length : y, A !== y ? A - y : x < S ? -1 : 1;
            }), e.variants.suggest(f, function() {
                var _c_values;
                return Object.keys((_c_values = c === null || c === void 0 ? void 0 : c.values) !== null && _c_values !== void 0 ? _c_values : {}).filter(function(p) {
                    return p !== "DEFAULT";
                });
            });
        },
        addUtilities: function addUtilities(f) {
            f = Array.isArray(f) ? f : [
                f
            ];
            var u = f.flatMap(function(m) {
                return Object.entries(m);
            });
            u = u.flatMap(function(param) {
                var _param = _sliced_to_array._(param, 2), m = _param[0], d = _param[1];
                return L(m, ",").map(function(p) {
                    return [
                        p.trim(),
                        d
                    ];
                });
            });
            var c = new U(function() {
                return [];
            });
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                var _loop = function() {
                    var _step_value = _sliced_to_array._(_step.value, 2), m = _step_value[0], d = _step_value[1];
                    if (m.startsWith("@keyframes ")) {
                        if (!n) {
                            var h = Z(m, he(d));
                            _([
                                h
                            ], function(w1) {
                                w1.src = l;
                            }), r.push(h);
                        }
                        return "continue";
                    }
                    var p = De(m), k = !1;
                    if (_(p, function(h) {
                        if (h.kind === "selector" && h.value[0] === "." && Wi.test(h.value.slice(1))) {
                            var _c_get;
                            var w1 = h.value;
                            h.value = "&";
                            var x = me(p), S = w1.slice(1), A = x === "&" ? he(d) : [
                                Z(x, he(d))
                            ];
                            (_c_get = c.get(S)).push.apply(_c_get, _to_consumable_array._(A)), k = !0, h.value = w1;
                            return;
                        }
                        if (h.kind === "function" && h.value === ":not") return V.Skip;
                    }), !k) throw new Error("`addUtilities({ '".concat(m, "' : … })` defines an invalid utility selector. Utilities must be a single class name and start with a lowercase letter, eg. `.scrollbar-none`."));
                };
                for(var _iterator = u[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
            try {
                var _loop1 = function() {
                    var _step_value = _sliced_to_array._(_step1.value, 2), m = _step_value[0], d = _step_value[1];
                    e.theme.prefix && _(d, function(p) {
                        if (p.kind === "rule") {
                            var k = De(p.selector);
                            _(k, function(h) {
                                h.kind === "selector" && h.value[0] === "." && (h.value = ".".concat(e.theme.prefix, "\\:").concat(h.value.slice(1)));
                            }), p.selector = me(k);
                        }
                    }), e.utilities.static(m, function(p) {
                        var k = d.map(ee);
                        return Yi(k, m, p.raw), t.current |= $e(k, e), k;
                    });
                };
                for(var _iterator1 = c[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true)_loop1();
            } catch (err) {
                _didIteratorError1 = true;
                _iteratorError1 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                        _iterator1.return();
                    }
                } finally{
                    if (_didIteratorError1) {
                        throw _iteratorError1;
                    }
                }
            }
        },
        matchUtilities: function matchUtilities(f, u) {
            var c = (u === null || u === void 0 ? void 0 : u.type) ? Array.isArray(u === null || u === void 0 ? void 0 : u.type) ? u.type : [
                u.type
            ] : [
                "any"
            ];
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                var _loop = function() {
                    var _step_value = _sliced_to_array._(_step.value, 2), d = _step_value[0], p = _step_value[1];
                    var k = function k(param) {
                        var h = param.negative;
                        return function(w1) {
                            var _w_value, _w_value1;
                            if (((_w_value = w1.value) === null || _w_value === void 0 ? void 0 : _w_value.kind) === "arbitrary" && c.length > 0 && !c.includes("any") && (w1.value.dataType && !c.includes(w1.value.dataType) || !w1.value.dataType && !Q(w1.value.value, c))) return;
                            var x = c.includes("color"), S = null, A = !1;
                            {
                                var _u_values;
                                var N = (_u_values = u === null || u === void 0 ? void 0 : u.values) !== null && _u_values !== void 0 ? _u_values : {};
                                var _N___BARE_VALUE__, _ref, _N_DEFAULT;
                                x && (N = Object.assign({
                                    inherit: "inherit",
                                    transparent: "transparent",
                                    current: "currentcolor"
                                }, N)), w1.value ? w1.value.kind === "arbitrary" ? S = w1.value.value : w1.value.fraction && N[w1.value.fraction] ? (S = N[w1.value.fraction], A = !0) : N[w1.value.value] ? S = N[w1.value.value] : N.__BARE_VALUE__ && (S = (_N___BARE_VALUE__ = N.__BARE_VALUE__(w1.value)) !== null && _N___BARE_VALUE__ !== void 0 ? _N___BARE_VALUE__ : null, A = (_ref = w1.value.fraction !== null && (S === null || S === void 0 ? void 0 : S.includes("/"))) !== null && _ref !== void 0 ? _ref : !1) : S = (_N_DEFAULT = N.DEFAULT) !== null && _N_DEFAULT !== void 0 ? _N_DEFAULT : null;
                            }
                            if (S === null) return;
                            var y;
                            {
                                var _u_modifiers;
                                var N1 = (_u_modifiers = u === null || u === void 0 ? void 0 : u.modifiers) !== null && _u_modifiers !== void 0 ? _u_modifiers : null;
                                w1.modifier ? N1 === "any" || w1.modifier.kind === "arbitrary" ? y = w1.modifier.value : (N1 === null || N1 === void 0 ? void 0 : N1[w1.modifier.value]) ? y = N1[w1.modifier.value] : x && !Number.isNaN(Number(w1.modifier.value)) ? y = "".concat(w1.modifier.value, "%") : y = null : y = null;
                            }
                            if (w1.modifier && y === null && !A) return ((_w_value1 = w1.value) === null || _w_value1 === void 0 ? void 0 : _w_value1.kind) === "arbitrary" ? null : void 0;
                            x && y !== null && (S = J(S, y)), h && (S = "calc(".concat(S, " * -1)"));
                            var K = he(p(S, {
                                modifier: y
                            }));
                            return Yi(K, d, w1.raw), t.current |= $e(K, e), K;
                        };
                    };
                    var m = k;
                    if (!Wi.test(d)) throw new Error("`matchUtilities({ '".concat(d, "' : … })` defines an invalid utility name. Utilities should be alphanumeric and start with a lowercase letter, eg. `scrollbar`."));
                    (u === null || u === void 0 ? void 0 : u.supportsNegativeValues) && e.utilities.functional("-".concat(d), k({
                        negative: !0
                    }), {
                        types: c
                    }), e.utilities.functional(d, k({
                        negative: !1
                    }), {
                        types: c
                    }), e.utilities.suggest(d, function() {
                        var _u_values;
                        var h = (_u_values = u === null || u === void 0 ? void 0 : u.values) !== null && _u_values !== void 0 ? _u_values : {}, w1 = new Set(Object.keys(h));
                        w1.delete("__BARE_VALUE__"), w1.delete("__CSS_VALUES__"), w1.has("DEFAULT") && (w1.delete("DEFAULT"), w1.add(null));
                        var _u_modifiers;
                        var x = (_u_modifiers = u === null || u === void 0 ? void 0 : u.modifiers) !== null && _u_modifiers !== void 0 ? _u_modifiers : {}, S = x === "any" ? [] : Object.keys(x);
                        var _u_supportsNegativeValues;
                        return [
                            {
                                supportsNegative: (_u_supportsNegativeValues = u === null || u === void 0 ? void 0 : u.supportsNegativeValues) !== null && _u_supportsNegativeValues !== void 0 ? _u_supportsNegativeValues : !1,
                                values: Array.from(w1),
                                modifiers: S
                            }
                        ];
                    });
                };
                for(var _iterator = Object.entries(f)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        },
        addComponents: function addComponents(f, u) {
            this.addUtilities(f, u);
        },
        matchComponents: function matchComponents(f, u) {
            this.matchUtilities(f, u);
        },
        theme: Rt(e, function() {
            var _i_theme;
            return (_i_theme = i.theme) !== null && _i_theme !== void 0 ? _i_theme : {};
        }, function(f) {
            return f;
        }),
        prefix: function prefix(f) {
            return f;
        },
        config: function config(f, u) {
            var c = i;
            if (!f) return c;
            var m = Ue(f);
            for(var d = 0; d < m.length; ++d){
                var p = m[d];
                if (c[p] === void 0) return u;
                c = c[p];
            }
            return c !== null && c !== void 0 ? c : u;
        }
    };
    return o.addComponents = o.addComponents.bind(o), o.matchComponents = o.matchComponents.bind(o), o;
}
function he(e) {
    var r = [];
    e = Array.isArray(e) ? e : [
        e
    ];
    var i = e.flatMap(function(t) {
        return Object.entries(t);
    });
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined, _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
    try {
        for(var _iterator = i[Symbol.iterator](), _step; !(_iteratorNormalCompletion1 = (_step = _iterator.next()).done); _iteratorNormalCompletion1 = true){
            var _step_value = _sliced_to_array._(_step.value, 2), t = _step_value[0], n = _step_value[1];
            if (n != null && n !== !1) if ((typeof n === "undefined" ? "undefined" : _type_of._(n)) != "object") {
                if (!t.startsWith("--")) {
                    if (n === "@slot") {
                        r.push(Z(t, [
                            F("@slot")
                        ]));
                        continue;
                    }
                    t = t.replace(/([A-Z])/g, "-$1").toLowerCase();
                }
                r.push(a(t, String(n)));
            } else if (Array.isArray(n)) try {
                for(var _iterator1 = n[Symbol.iterator](), _step1; !(_iteratorNormalCompletion = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion = true){
                    var l = _step1.value;
                    typeof l == "string" ? r.push(a(t, l)) : r.push(Z(t, he(l)));
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator1.return != null) {
                        _iterator1.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            else r.push(Z(t, he(n)));
        }
    } catch (err) {
        _didIteratorError1 = true;
        _iteratorError1 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion1 && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError1) {
                throw _iteratorError1;
            }
        }
    }
    return r;
}
function Bi(e, r) {
    return (typeof e == "string" ? [
        e
    ] : e).flatMap(function(t) {
        if (t.trim().endsWith("}")) {
            var n = t.replace("}", "{@slot}}"), l = Ne(n);
            return lr(l, r), l;
        } else return Z(t, r);
    });
}
function Yi(e, r, i) {
    _(e, function(t) {
        if (t.kind === "rule") {
            var n = De(t.selector);
            _(n, function(l) {
                l.kind === "selector" && l.value === ".".concat(r) && (l.value = ".".concat(xe(i)));
            }), t.selector = me(n);
        }
    });
}
function qi(e, r) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Na(r)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var i = _step.value;
            e.theme.addKeyframes(i);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
function Na(e) {
    var r = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    if ("keyframes" in e.theme) try {
        for(var _iterator = Object.entries(e.theme.keyframes)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array._(_step.value, 2), i = _step_value[0], t = _step_value[1];
            r.push(F("@keyframes", i, he(t)));
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return r;
}
var Ot = {
    inherit: "inherit",
    current: "currentcolor",
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    slate: {
        50: "oklch(98.4% 0.003 247.858)",
        100: "oklch(96.8% 0.007 247.896)",
        200: "oklch(92.9% 0.013 255.508)",
        300: "oklch(86.9% 0.022 252.894)",
        400: "oklch(70.4% 0.04 256.788)",
        500: "oklch(55.4% 0.046 257.417)",
        600: "oklch(44.6% 0.043 257.281)",
        700: "oklch(37.2% 0.044 257.287)",
        800: "oklch(27.9% 0.041 260.031)",
        900: "oklch(20.8% 0.042 265.755)",
        950: "oklch(12.9% 0.042 264.695)"
    },
    gray: {
        50: "oklch(98.5% 0.002 247.839)",
        100: "oklch(96.7% 0.003 264.542)",
        200: "oklch(92.8% 0.006 264.531)",
        300: "oklch(87.2% 0.01 258.338)",
        400: "oklch(70.7% 0.022 261.325)",
        500: "oklch(55.1% 0.027 264.364)",
        600: "oklch(44.6% 0.03 256.802)",
        700: "oklch(37.3% 0.034 259.733)",
        800: "oklch(27.8% 0.033 256.848)",
        900: "oklch(21% 0.034 264.665)",
        950: "oklch(13% 0.028 261.692)"
    },
    zinc: {
        50: "oklch(98.5% 0 0)",
        100: "oklch(96.7% 0.001 286.375)",
        200: "oklch(92% 0.004 286.32)",
        300: "oklch(87.1% 0.006 286.286)",
        400: "oklch(70.5% 0.015 286.067)",
        500: "oklch(55.2% 0.016 285.938)",
        600: "oklch(44.2% 0.017 285.786)",
        700: "oklch(37% 0.013 285.805)",
        800: "oklch(27.4% 0.006 286.033)",
        900: "oklch(21% 0.006 285.885)",
        950: "oklch(14.1% 0.005 285.823)"
    },
    neutral: {
        50: "oklch(98.5% 0 0)",
        100: "oklch(97% 0 0)",
        200: "oklch(92.2% 0 0)",
        300: "oklch(87% 0 0)",
        400: "oklch(70.8% 0 0)",
        500: "oklch(55.6% 0 0)",
        600: "oklch(43.9% 0 0)",
        700: "oklch(37.1% 0 0)",
        800: "oklch(26.9% 0 0)",
        900: "oklch(20.5% 0 0)",
        950: "oklch(14.5% 0 0)"
    },
    stone: {
        50: "oklch(98.5% 0.001 106.423)",
        100: "oklch(97% 0.001 106.424)",
        200: "oklch(92.3% 0.003 48.717)",
        300: "oklch(86.9% 0.005 56.366)",
        400: "oklch(70.9% 0.01 56.259)",
        500: "oklch(55.3% 0.013 58.071)",
        600: "oklch(44.4% 0.011 73.639)",
        700: "oklch(37.4% 0.01 67.558)",
        800: "oklch(26.8% 0.007 34.298)",
        900: "oklch(21.6% 0.006 56.043)",
        950: "oklch(14.7% 0.004 49.25)"
    },
    red: {
        50: "oklch(97.1% 0.013 17.38)",
        100: "oklch(93.6% 0.032 17.717)",
        200: "oklch(88.5% 0.062 18.334)",
        300: "oklch(80.8% 0.114 19.571)",
        400: "oklch(70.4% 0.191 22.216)",
        500: "oklch(63.7% 0.237 25.331)",
        600: "oklch(57.7% 0.245 27.325)",
        700: "oklch(50.5% 0.213 27.518)",
        800: "oklch(44.4% 0.177 26.899)",
        900: "oklch(39.6% 0.141 25.723)",
        950: "oklch(25.8% 0.092 26.042)"
    },
    orange: {
        50: "oklch(98% 0.016 73.684)",
        100: "oklch(95.4% 0.038 75.164)",
        200: "oklch(90.1% 0.076 70.697)",
        300: "oklch(83.7% 0.128 66.29)",
        400: "oklch(75% 0.183 55.934)",
        500: "oklch(70.5% 0.213 47.604)",
        600: "oklch(64.6% 0.222 41.116)",
        700: "oklch(55.3% 0.195 38.402)",
        800: "oklch(47% 0.157 37.304)",
        900: "oklch(40.8% 0.123 38.172)",
        950: "oklch(26.6% 0.079 36.259)"
    },
    amber: {
        50: "oklch(98.7% 0.022 95.277)",
        100: "oklch(96.2% 0.059 95.617)",
        200: "oklch(92.4% 0.12 95.746)",
        300: "oklch(87.9% 0.169 91.605)",
        400: "oklch(82.8% 0.189 84.429)",
        500: "oklch(76.9% 0.188 70.08)",
        600: "oklch(66.6% 0.179 58.318)",
        700: "oklch(55.5% 0.163 48.998)",
        800: "oklch(47.3% 0.137 46.201)",
        900: "oklch(41.4% 0.112 45.904)",
        950: "oklch(27.9% 0.077 45.635)"
    },
    yellow: {
        50: "oklch(98.7% 0.026 102.212)",
        100: "oklch(97.3% 0.071 103.193)",
        200: "oklch(94.5% 0.129 101.54)",
        300: "oklch(90.5% 0.182 98.111)",
        400: "oklch(85.2% 0.199 91.936)",
        500: "oklch(79.5% 0.184 86.047)",
        600: "oklch(68.1% 0.162 75.834)",
        700: "oklch(55.4% 0.135 66.442)",
        800: "oklch(47.6% 0.114 61.907)",
        900: "oklch(42.1% 0.095 57.708)",
        950: "oklch(28.6% 0.066 53.813)"
    },
    lime: {
        50: "oklch(98.6% 0.031 120.757)",
        100: "oklch(96.7% 0.067 122.328)",
        200: "oklch(93.8% 0.127 124.321)",
        300: "oklch(89.7% 0.196 126.665)",
        400: "oklch(84.1% 0.238 128.85)",
        500: "oklch(76.8% 0.233 130.85)",
        600: "oklch(64.8% 0.2 131.684)",
        700: "oklch(53.2% 0.157 131.589)",
        800: "oklch(45.3% 0.124 130.933)",
        900: "oklch(40.5% 0.101 131.063)",
        950: "oklch(27.4% 0.072 132.109)"
    },
    green: {
        50: "oklch(98.2% 0.018 155.826)",
        100: "oklch(96.2% 0.044 156.743)",
        200: "oklch(92.5% 0.084 155.995)",
        300: "oklch(87.1% 0.15 154.449)",
        400: "oklch(79.2% 0.209 151.711)",
        500: "oklch(72.3% 0.219 149.579)",
        600: "oklch(62.7% 0.194 149.214)",
        700: "oklch(52.7% 0.154 150.069)",
        800: "oklch(44.8% 0.119 151.328)",
        900: "oklch(39.3% 0.095 152.535)",
        950: "oklch(26.6% 0.065 152.934)"
    },
    emerald: {
        50: "oklch(97.9% 0.021 166.113)",
        100: "oklch(95% 0.052 163.051)",
        200: "oklch(90.5% 0.093 164.15)",
        300: "oklch(84.5% 0.143 164.978)",
        400: "oklch(76.5% 0.177 163.223)",
        500: "oklch(69.6% 0.17 162.48)",
        600: "oklch(59.6% 0.145 163.225)",
        700: "oklch(50.8% 0.118 165.612)",
        800: "oklch(43.2% 0.095 166.913)",
        900: "oklch(37.8% 0.077 168.94)",
        950: "oklch(26.2% 0.051 172.552)"
    },
    teal: {
        50: "oklch(98.4% 0.014 180.72)",
        100: "oklch(95.3% 0.051 180.801)",
        200: "oklch(91% 0.096 180.426)",
        300: "oklch(85.5% 0.138 181.071)",
        400: "oklch(77.7% 0.152 181.912)",
        500: "oklch(70.4% 0.14 182.503)",
        600: "oklch(60% 0.118 184.704)",
        700: "oklch(51.1% 0.096 186.391)",
        800: "oklch(43.7% 0.078 188.216)",
        900: "oklch(38.6% 0.063 188.416)",
        950: "oklch(27.7% 0.046 192.524)"
    },
    cyan: {
        50: "oklch(98.4% 0.019 200.873)",
        100: "oklch(95.6% 0.045 203.388)",
        200: "oklch(91.7% 0.08 205.041)",
        300: "oklch(86.5% 0.127 207.078)",
        400: "oklch(78.9% 0.154 211.53)",
        500: "oklch(71.5% 0.143 215.221)",
        600: "oklch(60.9% 0.126 221.723)",
        700: "oklch(52% 0.105 223.128)",
        800: "oklch(45% 0.085 224.283)",
        900: "oklch(39.8% 0.07 227.392)",
        950: "oklch(30.2% 0.056 229.695)"
    },
    sky: {
        50: "oklch(97.7% 0.013 236.62)",
        100: "oklch(95.1% 0.026 236.824)",
        200: "oklch(90.1% 0.058 230.902)",
        300: "oklch(82.8% 0.111 230.318)",
        400: "oklch(74.6% 0.16 232.661)",
        500: "oklch(68.5% 0.169 237.323)",
        600: "oklch(58.8% 0.158 241.966)",
        700: "oklch(50% 0.134 242.749)",
        800: "oklch(44.3% 0.11 240.79)",
        900: "oklch(39.1% 0.09 240.876)",
        950: "oklch(29.3% 0.066 243.157)"
    },
    blue: {
        50: "oklch(97% 0.014 254.604)",
        100: "oklch(93.2% 0.032 255.585)",
        200: "oklch(88.2% 0.059 254.128)",
        300: "oklch(80.9% 0.105 251.813)",
        400: "oklch(70.7% 0.165 254.624)",
        500: "oklch(62.3% 0.214 259.815)",
        600: "oklch(54.6% 0.245 262.881)",
        700: "oklch(48.8% 0.243 264.376)",
        800: "oklch(42.4% 0.199 265.638)",
        900: "oklch(37.9% 0.146 265.522)",
        950: "oklch(28.2% 0.091 267.935)"
    },
    indigo: {
        50: "oklch(96.2% 0.018 272.314)",
        100: "oklch(93% 0.034 272.788)",
        200: "oklch(87% 0.065 274.039)",
        300: "oklch(78.5% 0.115 274.713)",
        400: "oklch(67.3% 0.182 276.935)",
        500: "oklch(58.5% 0.233 277.117)",
        600: "oklch(51.1% 0.262 276.966)",
        700: "oklch(45.7% 0.24 277.023)",
        800: "oklch(39.8% 0.195 277.366)",
        900: "oklch(35.9% 0.144 278.697)",
        950: "oklch(25.7% 0.09 281.288)"
    },
    violet: {
        50: "oklch(96.9% 0.016 293.756)",
        100: "oklch(94.3% 0.029 294.588)",
        200: "oklch(89.4% 0.057 293.283)",
        300: "oklch(81.1% 0.111 293.571)",
        400: "oklch(70.2% 0.183 293.541)",
        500: "oklch(60.6% 0.25 292.717)",
        600: "oklch(54.1% 0.281 293.009)",
        700: "oklch(49.1% 0.27 292.581)",
        800: "oklch(43.2% 0.232 292.759)",
        900: "oklch(38% 0.189 293.745)",
        950: "oklch(28.3% 0.141 291.089)"
    },
    purple: {
        50: "oklch(97.7% 0.014 308.299)",
        100: "oklch(94.6% 0.033 307.174)",
        200: "oklch(90.2% 0.063 306.703)",
        300: "oklch(82.7% 0.119 306.383)",
        400: "oklch(71.4% 0.203 305.504)",
        500: "oklch(62.7% 0.265 303.9)",
        600: "oklch(55.8% 0.288 302.321)",
        700: "oklch(49.6% 0.265 301.924)",
        800: "oklch(43.8% 0.218 303.724)",
        900: "oklch(38.1% 0.176 304.987)",
        950: "oklch(29.1% 0.149 302.717)"
    },
    fuchsia: {
        50: "oklch(97.7% 0.017 320.058)",
        100: "oklch(95.2% 0.037 318.852)",
        200: "oklch(90.3% 0.076 319.62)",
        300: "oklch(83.3% 0.145 321.434)",
        400: "oklch(74% 0.238 322.16)",
        500: "oklch(66.7% 0.295 322.15)",
        600: "oklch(59.1% 0.293 322.896)",
        700: "oklch(51.8% 0.253 323.949)",
        800: "oklch(45.2% 0.211 324.591)",
        900: "oklch(40.1% 0.17 325.612)",
        950: "oklch(29.3% 0.136 325.661)"
    },
    pink: {
        50: "oklch(97.1% 0.014 343.198)",
        100: "oklch(94.8% 0.028 342.258)",
        200: "oklch(89.9% 0.061 343.231)",
        300: "oklch(82.3% 0.12 346.018)",
        400: "oklch(71.8% 0.202 349.761)",
        500: "oklch(65.6% 0.241 354.308)",
        600: "oklch(59.2% 0.249 0.584)",
        700: "oklch(52.5% 0.223 3.958)",
        800: "oklch(45.9% 0.187 3.815)",
        900: "oklch(40.8% 0.153 2.432)",
        950: "oklch(28.4% 0.109 3.907)"
    },
    rose: {
        50: "oklch(96.9% 0.015 12.422)",
        100: "oklch(94.1% 0.03 12.58)",
        200: "oklch(89.2% 0.058 10.001)",
        300: "oklch(81% 0.117 11.638)",
        400: "oklch(71.2% 0.194 13.428)",
        500: "oklch(64.5% 0.246 16.439)",
        600: "oklch(58.6% 0.253 17.585)",
        700: "oklch(51.4% 0.222 16.935)",
        800: "oklch(45.5% 0.188 13.697)",
        900: "oklch(41% 0.159 10.272)",
        950: "oklch(27.1% 0.105 12.094)"
    }
};
function Ke(e) {
    return {
        __BARE_VALUE__: e
    };
}
var fe = Ke(function(e) {
    if (O(e.value)) return e.value;
}), re = Ke(function(e) {
    if (O(e.value)) return "".concat(e.value, "%");
}), Ee = Ke(function(e) {
    if (O(e.value)) return "".concat(e.value, "px");
}), Gi = Ke(function(e) {
    if (O(e.value)) return "".concat(e.value, "ms");
}), Pt = Ke(function(e) {
    if (O(e.value)) return "".concat(e.value, "deg");
}), Va = Ke(function(e) {
    if (e.fraction === null) return;
    var _L = _sliced_to_array._(L(e.fraction, "/"), 2), r = _L[0], i = _L[1];
    if (!(!O(r) || !O(i))) return e.fraction;
}), Hi = Ke(function(e) {
    if (O(Number(e.value))) return "repeat(".concat(e.value, ", minmax(0, 1fr))");
}), Zi = {
    accentColor: function(param) {
        var e = param.theme;
        return e("colors");
    },
    animation: {
        none: "none",
        spin: "spin 1s linear infinite",
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 1s infinite"
    },
    aria: {
        busy: 'busy="true"',
        checked: 'checked="true"',
        disabled: 'disabled="true"',
        expanded: 'expanded="true"',
        hidden: 'hidden="true"',
        pressed: 'pressed="true"',
        readonly: 'readonly="true"',
        required: 'required="true"',
        selected: 'selected="true"'
    },
    aspectRatio: _object_spread._({
        auto: "auto",
        square: "1 / 1",
        video: "16 / 9"
    }, Va),
    backdropBlur: function(param) {
        var e = param.theme;
        return e("blur");
    },
    backdropBrightness: function(param) {
        var e = param.theme;
        return _object_spread._({}, e("brightness"), re);
    },
    backdropContrast: function(param) {
        var e = param.theme;
        return _object_spread._({}, e("contrast"), re);
    },
    backdropGrayscale: function(param) {
        var e = param.theme;
        return _object_spread._({}, e("grayscale"), re);
    },
    backdropHueRotate: function(param) {
        var e = param.theme;
        return _object_spread._({}, e("hueRotate"), Pt);
    },
    backdropInvert: function(param) {
        var e = param.theme;
        return _object_spread._({}, e("invert"), re);
    },
    backdropOpacity: function(param) {
        var e = param.theme;
        return _object_spread._({}, e("opacity"), re);
    },
    backdropSaturate: function(param) {
        var e = param.theme;
        return _object_spread._({}, e("saturate"), re);
    },
    backdropSepia: function(param) {
        var e = param.theme;
        return _object_spread._({}, e("sepia"), re);
    },
    backgroundColor: function(param) {
        var e = param.theme;
        return e("colors");
    },
    backgroundImage: {
        none: "none",
        "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
        "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))",
        "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
        "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))",
        "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
        "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))",
        "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
        "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))"
    },
    backgroundOpacity: function(param) {
        var e = param.theme;
        return e("opacity");
    },
    backgroundPosition: {
        bottom: "bottom",
        center: "center",
        left: "left",
        "left-bottom": "left bottom",
        "left-top": "left top",
        right: "right",
        "right-bottom": "right bottom",
        "right-top": "right top",
        top: "top"
    },
    backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain"
    },
    blur: {
        0: "0",
        none: "",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "40px",
        "3xl": "64px"
    },
    borderColor: function(param) {
        var e = param.theme;
        return _object_spread._({
            DEFAULT: "currentcolor"
        }, e("colors"));
    },
    borderOpacity: function(param) {
        var e = param.theme;
        return e("opacity");
    },
    borderRadius: {
        none: "0px",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px"
    },
    borderSpacing: function(param) {
        var e = param.theme;
        return e("spacing");
    },
    borderWidth: _object_spread._({
        DEFAULT: "1px",
        0: "0px",
        2: "2px",
        4: "4px",
        8: "8px"
    }, Ee),
    boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
        inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
        none: "none"
    },
    boxShadowColor: function(param) {
        var e = param.theme;
        return e("colors");
    },
    brightness: _object_spread._({
        0: "0",
        50: ".5",
        75: ".75",
        90: ".9",
        95: ".95",
        100: "1",
        105: "1.05",
        110: "1.1",
        125: "1.25",
        150: "1.5",
        200: "2"
    }, re),
    caretColor: function(param) {
        var e = param.theme;
        return e("colors");
    },
    colors: function() {
        return _object_spread._({}, Ot);
    },
    columns: _object_spread._({
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        "3xs": "16rem",
        "2xs": "18rem",
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem"
    }, fe),
    container: {},
    content: {
        none: "none"
    },
    contrast: _object_spread._({
        0: "0",
        50: ".5",
        75: ".75",
        100: "1",
        125: "1.25",
        150: "1.5",
        200: "2"
    }, re),
    cursor: {
        auto: "auto",
        default: "default",
        pointer: "pointer",
        wait: "wait",
        text: "text",
        move: "move",
        help: "help",
        "not-allowed": "not-allowed",
        none: "none",
        "context-menu": "context-menu",
        progress: "progress",
        cell: "cell",
        crosshair: "crosshair",
        "vertical-text": "vertical-text",
        alias: "alias",
        copy: "copy",
        "no-drop": "no-drop",
        grab: "grab",
        grabbing: "grabbing",
        "all-scroll": "all-scroll",
        "col-resize": "col-resize",
        "row-resize": "row-resize",
        "n-resize": "n-resize",
        "e-resize": "e-resize",
        "s-resize": "s-resize",
        "w-resize": "w-resize",
        "ne-resize": "ne-resize",
        "nw-resize": "nw-resize",
        "se-resize": "se-resize",
        "sw-resize": "sw-resize",
        "ew-resize": "ew-resize",
        "ns-resize": "ns-resize",
        "nesw-resize": "nesw-resize",
        "nwse-resize": "nwse-resize",
        "zoom-in": "zoom-in",
        "zoom-out": "zoom-out"
    },
    divideColor: function(param) {
        var e = param.theme;
        return e("borderColor");
    },
    divideOpacity: function(param) {
        var e = param.theme;
        return e("borderOpacity");
    },
    divideWidth: function(param) {
        var e = param.theme;
        return _object_spread._({}, e("borderWidth"), Ee);
    },
    dropShadow: {
        sm: "0 1px 1px rgb(0 0 0 / 0.05)",
        DEFAULT: [
            "0 1px 2px rgb(0 0 0 / 0.1)",
            "0 1px 1px rgb(0 0 0 / 0.06)"
        ],
        md: [
            "0 4px 3px rgb(0 0 0 / 0.07)",
            "0 2px 2px rgb(0 0 0 / 0.06)"
        ],
        lg: [
            "0 10px 8px rgb(0 0 0 / 0.04)",
            "0 4px 3px rgb(0 0 0 / 0.1)"
        ],
        xl: [
            "0 20px 13px rgb(0 0 0 / 0.03)",
            "0 8px 5px rgb(0 0 0 / 0.08)"
        ],
        "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
        none: "0 0 #0000"
    },
    fill: function(param) {
        var e = param.theme;
        return e("colors");
    },
    flex: {
        1: "1 1 0%",
        auto: "1 1 auto",
        initial: "0 1 auto",
        none: "none"
    },
    flexBasis: function(param) {
        var e = param.theme;
        return _object_spread._({
            auto: "auto",
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            "1/5": "20%",
            "2/5": "40%",
            "3/5": "60%",
            "4/5": "80%",
            "1/6": "16.666667%",
            "2/6": "33.333333%",
            "3/6": "50%",
            "4/6": "66.666667%",
            "5/6": "83.333333%",
            "1/12": "8.333333%",
            "2/12": "16.666667%",
            "3/12": "25%",
            "4/12": "33.333333%",
            "5/12": "41.666667%",
            "6/12": "50%",
            "7/12": "58.333333%",
            "8/12": "66.666667%",
            "9/12": "75%",
            "10/12": "83.333333%",
            "11/12": "91.666667%",
            full: "100%"
        }, e("spacing"));
    },
    flexGrow: _object_spread._({
        0: "0",
        DEFAULT: "1"
    }, fe),
    flexShrink: _object_spread._({
        0: "0",
        DEFAULT: "1"
    }, fe),
    fontFamily: {
        sans: [
            "ui-sans-serif",
            "system-ui",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            '"Noto Color Emoji"'
        ],
        serif: [
            "ui-serif",
            "Georgia",
            "Cambria",
            '"Times New Roman"',
            "Times",
            "serif"
        ],
        mono: [
            "ui-monospace",
            "SFMono-Regular",
            "Menlo",
            "Monaco",
            "Consolas",
            '"Liberation Mono"',
            '"Courier New"',
            "monospace"
        ]
    },
    fontSize: {
        xs: [
            "0.75rem",
            {
                lineHeight: "1rem"
            }
        ],
        sm: [
            "0.875rem",
            {
                lineHeight: "1.25rem"
            }
        ],
        base: [
            "1rem",
            {
                lineHeight: "1.5rem"
            }
        ],
        lg: [
            "1.125rem",
            {
                lineHeight: "1.75rem"
            }
        ],
        xl: [
            "1.25rem",
            {
                lineHeight: "1.75rem"
            }
        ],
        "2xl": [
            "1.5rem",
            {
                lineHeight: "2rem"
            }
        ],
        "3xl": [
            "1.875rem",
            {
                lineHeight: "2.25rem"
            }
        ],
        "4xl": [
            "2.25rem",
            {
                lineHeight: "2.5rem"
            }
        ],
        "5xl": [
            "3rem",
            {
                lineHeight: "1"
            }
        ],
        "6xl": [
            "3.75rem",
            {
                lineHeight: "1"
            }
        ],
        "7xl": [
            "4.5rem",
            {
                lineHeight: "1"
            }
        ],
        "8xl": [
            "6rem",
            {
                lineHeight: "1"
            }
        ],
        "9xl": [
            "8rem",
            {
                lineHeight: "1"
            }
        ]
    },
    fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900"
    },
    gap: function(param) {
        var e = param.theme;
        return e("spacing");
    },
    gradientColorStops: function(param) {
        var e = param.theme;
        return e("colors");
    },
    gradientColorStopPositions: _object_spread._({
        "0%": "0%",
        "5%": "5%",
        "10%": "10%",
        "15%": "15%",
        "20%": "20%",
        "25%": "25%",
        "30%": "30%",
        "35%": "35%",
        "40%": "40%",
        "45%": "45%",
        "50%": "50%",
        "55%": "55%",
        "60%": "60%",
        "65%": "65%",
        "70%": "70%",
        "75%": "75%",
        "80%": "80%",
        "85%": "85%",
        "90%": "90%",
        "95%": "95%",
        "100%": "100%"
    }, re),
    grayscale: _object_spread._({
        0: "0",
        DEFAULT: "100%"
    }, re),
    gridAutoColumns: {
        auto: "auto",
        min: "min-content",
        max: "max-content",
        fr: "minmax(0, 1fr)"
    },
    gridAutoRows: {
        auto: "auto",
        min: "min-content",
        max: "max-content",
        fr: "minmax(0, 1fr)"
    },
    gridColumn: {
        auto: "auto",
        "span-1": "span 1 / span 1",
        "span-2": "span 2 / span 2",
        "span-3": "span 3 / span 3",
        "span-4": "span 4 / span 4",
        "span-5": "span 5 / span 5",
        "span-6": "span 6 / span 6",
        "span-7": "span 7 / span 7",
        "span-8": "span 8 / span 8",
        "span-9": "span 9 / span 9",
        "span-10": "span 10 / span 10",
        "span-11": "span 11 / span 11",
        "span-12": "span 12 / span 12",
        "span-full": "1 / -1"
    },
    gridColumnEnd: _object_spread._({
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13"
    }, fe),
    gridColumnStart: _object_spread._({
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13"
    }, fe),
    gridRow: {
        auto: "auto",
        "span-1": "span 1 / span 1",
        "span-2": "span 2 / span 2",
        "span-3": "span 3 / span 3",
        "span-4": "span 4 / span 4",
        "span-5": "span 5 / span 5",
        "span-6": "span 6 / span 6",
        "span-7": "span 7 / span 7",
        "span-8": "span 8 / span 8",
        "span-9": "span 9 / span 9",
        "span-10": "span 10 / span 10",
        "span-11": "span 11 / span 11",
        "span-12": "span 12 / span 12",
        "span-full": "1 / -1"
    },
    gridRowEnd: _object_spread._({
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13"
    }, fe),
    gridRowStart: _object_spread._({
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13"
    }, fe),
    gridTemplateColumns: _object_spread._({
        none: "none",
        subgrid: "subgrid",
        1: "repeat(1, minmax(0, 1fr))",
        2: "repeat(2, minmax(0, 1fr))",
        3: "repeat(3, minmax(0, 1fr))",
        4: "repeat(4, minmax(0, 1fr))",
        5: "repeat(5, minmax(0, 1fr))",
        6: "repeat(6, minmax(0, 1fr))",
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
        9: "repeat(9, minmax(0, 1fr))",
        10: "repeat(10, minmax(0, 1fr))",
        11: "repeat(11, minmax(0, 1fr))",
        12: "repeat(12, minmax(0, 1fr))"
    }, Hi),
    gridTemplateRows: _object_spread._({
        none: "none",
        subgrid: "subgrid",
        1: "repeat(1, minmax(0, 1fr))",
        2: "repeat(2, minmax(0, 1fr))",
        3: "repeat(3, minmax(0, 1fr))",
        4: "repeat(4, minmax(0, 1fr))",
        5: "repeat(5, minmax(0, 1fr))",
        6: "repeat(6, minmax(0, 1fr))",
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
        9: "repeat(9, minmax(0, 1fr))",
        10: "repeat(10, minmax(0, 1fr))",
        11: "repeat(11, minmax(0, 1fr))",
        12: "repeat(12, minmax(0, 1fr))"
    }, Hi),
    height: function(param) {
        var e = param.theme;
        return _object_spread._({
            auto: "auto",
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            "1/5": "20%",
            "2/5": "40%",
            "3/5": "60%",
            "4/5": "80%",
            "1/6": "16.666667%",
            "2/6": "33.333333%",
            "3/6": "50%",
            "4/6": "66.666667%",
            "5/6": "83.333333%",
            full: "100%",
            screen: "100vh",
            svh: "100svh",
            lvh: "100lvh",
            dvh: "100dvh",
            min: "min-content",
            max: "max-content",
            fit: "fit-content"
        }, e("spacing"));
    },
    hueRotate: _object_spread._({
        0: "0deg",
        15: "15deg",
        30: "30deg",
        60: "60deg",
        90: "90deg",
        180: "180deg"
    }, Pt),
    inset: function(param) {
        var e = param.theme;
        return _object_spread._({
            auto: "auto",
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            full: "100%"
        }, e("spacing"));
    },
    invert: _object_spread._({
        0: "0",
        DEFAULT: "100%"
    }, re),
    keyframes: {
        spin: {
            to: {
                transform: "rotate(360deg)"
            }
        },
        ping: {
            "75%, 100%": {
                transform: "scale(2)",
                opacity: "0"
            }
        },
        pulse: {
            "50%": {
                opacity: ".5"
            }
        },
        bounce: {
            "0%, 100%": {
                transform: "translateY(-25%)",
                animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
            },
            "50%": {
                transform: "none",
                animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
            }
        }
    },
    letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0em",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em"
    },
    lineHeight: {
        none: "1",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
        3: ".75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem"
    },
    listStyleType: {
        none: "none",
        disc: "disc",
        decimal: "decimal"
    },
    listStyleImage: {
        none: "none"
    },
    margin: function(param) {
        var e = param.theme;
        return _object_spread._({
            auto: "auto"
        }, e("spacing"));
    },
    lineClamp: _object_spread._({
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6"
    }, fe),
    maxHeight: function(param) {
        var e = param.theme;
        return _object_spread._({
            none: "none",
            full: "100%",
            screen: "100vh",
            svh: "100svh",
            lvh: "100lvh",
            dvh: "100dvh",
            min: "min-content",
            max: "max-content",
            fit: "fit-content"
        }, e("spacing"));
    },
    maxWidth: function(param) {
        var e = param.theme;
        return _object_spread._({
            none: "none",
            xs: "20rem",
            sm: "24rem",
            md: "28rem",
            lg: "32rem",
            xl: "36rem",
            "2xl": "42rem",
            "3xl": "48rem",
            "4xl": "56rem",
            "5xl": "64rem",
            "6xl": "72rem",
            "7xl": "80rem",
            full: "100%",
            min: "min-content",
            max: "max-content",
            fit: "fit-content",
            prose: "65ch"
        }, e("spacing"));
    },
    minHeight: function(param) {
        var e = param.theme;
        return _object_spread._({
            full: "100%",
            screen: "100vh",
            svh: "100svh",
            lvh: "100lvh",
            dvh: "100dvh",
            min: "min-content",
            max: "max-content",
            fit: "fit-content"
        }, e("spacing"));
    },
    minWidth: function(param) {
        var e = param.theme;
        return _object_spread._({
            full: "100%",
            min: "min-content",
            max: "max-content",
            fit: "fit-content"
        }, e("spacing"));
    },
    objectPosition: {
        bottom: "bottom",
        center: "center",
        left: "left",
        "left-bottom": "left bottom",
        "left-top": "left top",
        right: "right",
        "right-bottom": "right bottom",
        "right-top": "right top",
        top: "top"
    },
    opacity: _object_spread._({
        0: "0",
        5: "0.05",
        10: "0.1",
        15: "0.15",
        20: "0.2",
        25: "0.25",
        30: "0.3",
        35: "0.35",
        40: "0.4",
        45: "0.45",
        50: "0.5",
        55: "0.55",
        60: "0.6",
        65: "0.65",
        70: "0.7",
        75: "0.75",
        80: "0.8",
        85: "0.85",
        90: "0.9",
        95: "0.95",
        100: "1"
    }, re),
    order: _object_spread._({
        first: "-9999",
        last: "9999",
        none: "0",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12"
    }, fe),
    outlineColor: function(param) {
        var e = param.theme;
        return e("colors");
    },
    outlineOffset: _object_spread._({
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px"
    }, Ee),
    outlineWidth: _object_spread._({
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px"
    }, Ee),
    padding: function(param) {
        var e = param.theme;
        return e("spacing");
    },
    placeholderColor: function(param) {
        var e = param.theme;
        return e("colors");
    },
    placeholderOpacity: function(param) {
        var e = param.theme;
        return e("opacity");
    },
    ringColor: function(param) {
        var e = param.theme;
        return _object_spread._({
            DEFAULT: "currentcolor"
        }, e("colors"));
    },
    ringOffsetColor: function(param) {
        var e = param.theme;
        return e("colors");
    },
    ringOffsetWidth: _object_spread._({
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px"
    }, Ee),
    ringOpacity: function(param) {
        var e = param.theme;
        return _object_spread._({
            DEFAULT: "0.5"
        }, e("opacity"));
    },
    ringWidth: _object_spread._({
        DEFAULT: "3px",
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px"
    }, Ee),
    rotate: _object_spread._({
        0: "0deg",
        1: "1deg",
        2: "2deg",
        3: "3deg",
        6: "6deg",
        12: "12deg",
        45: "45deg",
        90: "90deg",
        180: "180deg"
    }, Pt),
    saturate: _object_spread._({
        0: "0",
        50: ".5",
        100: "1",
        150: "1.5",
        200: "2"
    }, re),
    scale: _object_spread._({
        0: "0",
        50: ".5",
        75: ".75",
        90: ".9",
        95: ".95",
        100: "1",
        105: "1.05",
        110: "1.1",
        125: "1.25",
        150: "1.5"
    }, re),
    screens: {
        sm: "40rem",
        md: "48rem",
        lg: "64rem",
        xl: "80rem",
        "2xl": "96rem"
    },
    scrollMargin: function(param) {
        var e = param.theme;
        return e("spacing");
    },
    scrollPadding: function(param) {
        var e = param.theme;
        return e("spacing");
    },
    sepia: _object_spread._({
        0: "0",
        DEFAULT: "100%"
    }, re),
    skew: _object_spread._({
        0: "0deg",
        1: "1deg",
        2: "2deg",
        3: "3deg",
        6: "6deg",
        12: "12deg"
    }, Pt),
    space: function(param) {
        var e = param.theme;
        return e("spacing");
    },
    spacing: {
        px: "1px",
        0: "0px",
        .5: "0.125rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem"
    },
    stroke: function(param) {
        var e = param.theme;
        return _object_spread._({
            none: "none"
        }, e("colors"));
    },
    strokeWidth: _object_spread._({
        0: "0",
        1: "1",
        2: "2"
    }, fe),
    supports: {},
    data: {},
    textColor: function(param) {
        var e = param.theme;
        return e("colors");
    },
    textDecorationColor: function(param) {
        var e = param.theme;
        return e("colors");
    },
    textDecorationThickness: _object_spread._({
        auto: "auto",
        "from-font": "from-font",
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px"
    }, Ee),
    textIndent: function(param) {
        var e = param.theme;
        return e("spacing");
    },
    textOpacity: function(param) {
        var e = param.theme;
        return e("opacity");
    },
    textUnderlineOffset: _object_spread._({
        auto: "auto",
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px"
    }, Ee),
    transformOrigin: {
        center: "center",
        top: "top",
        "top-right": "top right",
        right: "right",
        "bottom-right": "bottom right",
        bottom: "bottom",
        "bottom-left": "bottom left",
        left: "left",
        "top-left": "top left"
    },
    transitionDelay: _object_spread._({
        0: "0s",
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1e3: "1000ms"
    }, Gi),
    transitionDuration: _object_spread._({
        DEFAULT: "150ms",
        0: "0s",
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1e3: "1000ms"
    }, Gi),
    transitionProperty: {
        none: "none",
        all: "all",
        DEFAULT: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
        colors: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke",
        opacity: "opacity",
        shadow: "box-shadow",
        transform: "transform"
    },
    transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
        linear: "linear",
        in: "cubic-bezier(0.4, 0, 1, 1)",
        out: "cubic-bezier(0, 0, 0.2, 1)",
        "in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
    },
    translate: function(param) {
        var e = param.theme;
        return _object_spread._({
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            full: "100%"
        }, e("spacing"));
    },
    size: function(param) {
        var e = param.theme;
        return _object_spread._({
            auto: "auto",
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            "1/5": "20%",
            "2/5": "40%",
            "3/5": "60%",
            "4/5": "80%",
            "1/6": "16.666667%",
            "2/6": "33.333333%",
            "3/6": "50%",
            "4/6": "66.666667%",
            "5/6": "83.333333%",
            "1/12": "8.333333%",
            "2/12": "16.666667%",
            "3/12": "25%",
            "4/12": "33.333333%",
            "5/12": "41.666667%",
            "6/12": "50%",
            "7/12": "58.333333%",
            "8/12": "66.666667%",
            "9/12": "75%",
            "10/12": "83.333333%",
            "11/12": "91.666667%",
            full: "100%",
            min: "min-content",
            max: "max-content",
            fit: "fit-content"
        }, e("spacing"));
    },
    width: function(param) {
        var e = param.theme;
        return _object_spread._({
            auto: "auto",
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            "1/5": "20%",
            "2/5": "40%",
            "3/5": "60%",
            "4/5": "80%",
            "1/6": "16.666667%",
            "2/6": "33.333333%",
            "3/6": "50%",
            "4/6": "66.666667%",
            "5/6": "83.333333%",
            "1/12": "8.333333%",
            "2/12": "16.666667%",
            "3/12": "25%",
            "4/12": "33.333333%",
            "5/12": "41.666667%",
            "6/12": "50%",
            "7/12": "58.333333%",
            "8/12": "66.666667%",
            "9/12": "75%",
            "10/12": "83.333333%",
            "11/12": "91.666667%",
            full: "100%",
            screen: "100vw",
            svw: "100svw",
            lvw: "100lvw",
            dvw: "100dvw",
            min: "min-content",
            max: "max-content",
            fit: "fit-content"
        }, e("spacing"));
    },
    willChange: {
        auto: "auto",
        scroll: "scroll-position",
        contents: "contents",
        transform: "transform"
    },
    zIndex: _object_spread._({
        auto: "auto",
        0: "0",
        10: "10",
        20: "20",
        30: "30",
        40: "40",
        50: "50"
    }, fe)
};
function Qi(e) {
    var _e_get, _e_get1;
    return {
        theme: _object_spread_props._(_object_spread._({}, Zi), {
            colors: function(param) {
                var r = param.theme;
                return r("color", {});
            },
            extend: {
                fontSize: function(param) {
                    var r = param.theme;
                    return _object_spread._({}, r("text", {}));
                },
                boxShadow: function(param) {
                    var r = param.theme;
                    return _object_spread._({}, r("shadow", {}));
                },
                animation: function(param) {
                    var r = param.theme;
                    return _object_spread._({}, r("animate", {}));
                },
                aspectRatio: function(param) {
                    var r = param.theme;
                    return _object_spread._({}, r("aspect", {}));
                },
                borderRadius: function(param) {
                    var r = param.theme;
                    return _object_spread._({}, r("radius", {}));
                },
                screens: function(param) {
                    var r = param.theme;
                    return _object_spread._({}, r("breakpoint", {}));
                },
                letterSpacing: function(param) {
                    var r = param.theme;
                    return _object_spread._({}, r("tracking", {}));
                },
                lineHeight: function(param) {
                    var r = param.theme;
                    return _object_spread._({}, r("leading", {}));
                },
                transitionDuration: {
                    DEFAULT: (_e_get = e.get([
                        "--default-transition-duration"
                    ])) !== null && _e_get !== void 0 ? _e_get : null
                },
                transitionTimingFunction: {
                    DEFAULT: (_e_get1 = e.get([
                        "--default-transition-timing-function"
                    ])) !== null && _e_get1 !== void 0 ? _e_get1 : null
                },
                maxWidth: function(param) {
                    var r = param.theme;
                    return _object_spread._({}, r("container", {}));
                }
            }
        })
    };
}
var Ra = {
    blocklist: [],
    future: {},
    experimental: {},
    prefix: "",
    important: !1,
    darkMode: null,
    theme: {},
    plugins: [],
    content: {
        files: []
    }
};
function pr(e, r) {
    var i = {
        design: e,
        configs: [],
        plugins: [],
        content: {
            files: []
        },
        theme: {},
        extend: {},
        result: structuredClone(Ra)
    };
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = r[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var n = _step.value;
            fr(i, n);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    var _n_darkMode, _n_prefix, _n_blocklist, _n_important;
    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
    try {
        for(var _iterator1 = i.configs[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
            var n1 = _step1.value;
            "darkMode" in n1 && n1.darkMode !== void 0 && (i.result.darkMode = (_n_darkMode = n1.darkMode) !== null && _n_darkMode !== void 0 ? _n_darkMode : null), "prefix" in n1 && n1.prefix !== void 0 && (i.result.prefix = (_n_prefix = n1.prefix) !== null && _n_prefix !== void 0 ? _n_prefix : ""), "blocklist" in n1 && n1.blocklist !== void 0 && (i.result.blocklist = (_n_blocklist = n1.blocklist) !== null && _n_blocklist !== void 0 ? _n_blocklist : []), "important" in n1 && n1.important !== void 0 && (i.result.important = (_n_important = n1.important) !== null && _n_important !== void 0 ? _n_important : !1);
        }
    } catch (err) {
        _didIteratorError1 = true;
        _iteratorError1 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                _iterator1.return();
            }
        } finally{
            if (_didIteratorError1) {
                throw _iteratorError1;
            }
        }
    }
    var t = Pa(i);
    return {
        resolvedConfig: _object_spread_props._(_object_spread._({}, i.result), {
            content: i.content,
            theme: i.theme,
            plugins: i.plugins
        }),
        replacedThemeKeys: t
    };
}
function Oa(e, r) {
    if (Array.isArray(e) && Ge(e[0])) return e.concat(r);
    if (Array.isArray(r) && Ge(r[0]) && Ge(e)) return [
        e
    ].concat(_to_consumable_array._(r));
    if (Array.isArray(r)) return r;
}
function fr(e, param) {
    var r = param.config, i = param.base, t = param.path, n = param.reference, l = param.src;
    var o = [];
    var _r_plugins;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = ((_r_plugins = r.plugins) !== null && _r_plugins !== void 0 ? _r_plugins : [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var c = _step.value;
            "__isOptionsFunction" in c ? o.push(_object_spread_props._(_object_spread._({}, c()), {
                reference: n,
                src: l
            })) : "handler" in c ? o.push(_object_spread_props._(_object_spread._({}, c), {
                reference: n,
                src: l
            })) : o.push({
                handler: c,
                reference: n,
                src: l
            });
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    if (Array.isArray(r.presets) && r.presets.length === 0) throw new Error("Error in the config file/plugin/preset. An empty preset (`preset: []`) is not currently supported.");
    var _r_presets;
    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
    try {
        for(var _iterator1 = ((_r_presets = r.presets) !== null && _r_presets !== void 0 ? _r_presets : [])[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
            var c1 = _step1.value;
            fr(e, {
                path: t,
                base: i,
                config: c1,
                reference: n,
                src: l
            });
        }
    } catch (err) {
        _didIteratorError1 = true;
        _iteratorError1 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                _iterator1.return();
            }
        } finally{
            if (_didIteratorError1) {
                throw _iteratorError1;
            }
        }
    }
    var _c_src;
    var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
    try {
        for(var _iterator2 = o[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
            var c2 = _step2.value;
            e.plugins.push(c2), c2.config && fr(e, {
                path: t,
                base: i,
                config: c2.config,
                reference: !!c2.reference,
                src: (_c_src = c2.src) !== null && _c_src !== void 0 ? _c_src : l
            });
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
            }
        } finally{
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
    var _r_content;
    var f = (_r_content = r.content) !== null && _r_content !== void 0 ? _r_content : [], u = Array.isArray(f) ? f : f.files;
    var _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
    try {
        for(var _iterator3 = u[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
            var c3 = _step3.value;
            e.content.files.push((typeof c3 === "undefined" ? "undefined" : _type_of._(c3)) == "object" ? c3 : {
                base: i,
                pattern: c3
            });
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
            }
        } finally{
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }
    e.configs.push(r);
}
function Pa(e) {
    var _loop = function(l1) {
        var o = [
            e.theme[l1]
        ].concat(_to_consumable_array._(e.extend[l1]));
        e.theme[l1] = function() {
            var f = o.map(n);
            return at({}, f, Oa);
        };
    };
    var r = new Set, i = Rt(e.design, function() {
        return e.theme;
    }, n), t = Object.assign(i, {
        theme: i,
        colors: Ot
    });
    function n(l) {
        var _l;
        return typeof l == "function" ? (_l = l(t)) !== null && _l !== void 0 ? _l : null : l !== null && l !== void 0 ? l : null;
    }
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = e.configs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var l = _step.value;
            var _e_extend, _u;
            var _l_theme, _o_extend;
            var o = (_l_theme = l.theme) !== null && _l_theme !== void 0 ? _l_theme : {}, f = (_o_extend = o.extend) !== null && _o_extend !== void 0 ? _o_extend : {};
            for(var u in o)u !== "extend" && r.add(u);
            Object.assign(e.theme, o);
            var _;
            for(var u1 in f)(_ = (_e_extend = e.extend)[_u = u1]) !== null && _ !== void 0 ? _ : _e_extend[_u] = [], e.extend[u1].push(f[u1]);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    delete e.theme.extend;
    for(var l1 in e.extend)_loop(l1);
    for(var l2 in e.theme)e.theme[l2] = n(e.theme[l2]);
    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
    if (e.theme.screens && _type_of._(e.theme.screens) == "object") try {
        for(var _iterator1 = Object.keys(e.theme.screens)[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
            var l3 = _step1.value;
            var o1 = e.theme.screens[l3];
            o1 && (typeof o1 === "undefined" ? "undefined" : _type_of._(o1)) == "object" && ("raw" in o1 || "max" in o1 || "min" in o1 && (e.theme.screens[l3] = o1.min));
        }
    } catch (err) {
        _didIteratorError1 = true;
        _iteratorError1 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                _iterator1.return();
            }
        } finally{
            if (_didIteratorError1) {
                throw _iteratorError1;
            }
        }
    }
    return r;
}
function Ji(e, r) {
    var i = e.theme.container || {};
    if ((typeof i === "undefined" ? "undefined" : _type_of._(i)) != "object" || i === null) return;
    var t = _a(i, r);
    t.length !== 0 && r.utilities.static("container", function() {
        return t.map(ee);
    });
}
function _a(param, t) {
    var e = param.center, r = param.padding, i = param.screens;
    var n = [], l = null;
    if (e && n.push(a("margin-inline", "auto")), (typeof r == "string" || (typeof r === "undefined" ? "undefined" : _type_of._(r)) == "object" && r !== null && "DEFAULT" in r) && n.push(a("padding-inline", typeof r == "string" ? r : r.DEFAULT)), (typeof i === "undefined" ? "undefined" : _type_of._(i)) == "object" && i !== null) {
        l = new Map;
        var o = Array.from(t.theme.namespace("--breakpoint").entries());
        if (o.sort(function(f, u) {
            return Oe(f[1], u[1], "asc");
        }), o.length > 0) {
            var _o_ = _sliced_to_array._(o[0], 1), f = _o_[0];
            n.push(F("@media", "(width >= --theme(--breakpoint-".concat(f, "))"), [
                a("max-width", "none")
            ]));
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = Object.entries(i)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array._(_step.value, 2), f1 = _step_value[0], u = _step_value[1];
                if ((typeof u === "undefined" ? "undefined" : _type_of._(u)) == "object") if ("min" in u) u = u.min;
                else continue;
                l.set(f1, F("@media", "(width >= ".concat(u, ")"), [
                    a("max-width", u)
                ]));
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    if ((typeof r === "undefined" ? "undefined" : _type_of._(r)) == "object" && r !== null) {
        var o1 = Object.entries(r).filter(function(param) {
            var _param = _sliced_to_array._(param, 1), f = _param[0];
            return f !== "DEFAULT";
        }).map(function(param) {
            var _param = _sliced_to_array._(param, 2), f = _param[0], u = _param[1];
            return [
                f,
                t.theme.resolveValue(f, [
                    "--breakpoint"
                ]),
                u
            ];
        }).filter(Boolean);
        o1.sort(function(f, u) {
            return Oe(f[1], u[1], "asc");
        });
        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
        try {
            for(var _iterator1 = o1[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var _step_value1 = _sliced_to_array._(_step1.value, 3), f2 = _step_value1[0], u1 = _step_value1[2];
                if (l && l.has(f2)) l.get(f2).nodes.push(a("padding-inline", u1));
                else {
                    if (l) continue;
                    n.push(F("@media", "(width >= theme(--breakpoint-".concat(f2, "))"), [
                        a("padding-inline", u1)
                    ]));
                }
            }
        } catch (err) {
            _didIteratorError1 = true;
            _iteratorError1 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                    _iterator1.return();
                }
            } finally{
                if (_didIteratorError1) {
                    throw _iteratorError1;
                }
            }
        }
    }
    var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
    if (l) try {
        for(var _iterator2 = l[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
            var _step_value2 = _sliced_to_array._(_step2.value, 2), o2 = _step_value2[1];
            n.push(o2);
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
            }
        } finally{
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
    return n;
}
function Xi(param) {
    var e = param.addVariant, r = param.config;
    var i = r("darkMode", null), _ref = _sliced_to_array._(Array.isArray(i) ? i : [
        i
    ], 2), t = _ref[0], tmp = _ref[1], n = tmp === void 0 ? ".dark" : tmp;
    if (t === "variant") {
        var l;
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        if (Array.isArray(n) || typeof n == "function" ? l = n : typeof n == "string" && (l = [
            n
        ]), Array.isArray(l)) try {
            for(var _iterator = l[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var o = _step.value;
                o === ".dark" ? (t = !1, console.warn('When using `variant` for `darkMode`, you must provide a selector.\nExample: `darkMode: ["variant", ".your-selector &"]`')) : o.includes("&") || (t = !1, console.warn('When using `variant` for `darkMode`, your selector must contain `&`.\nExample `darkMode: ["variant", ".your-selector &"]`'));
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        n = l;
    }
    t === null || (t === "selector" ? e("dark", "&:where(".concat(n, ", ").concat(n, " *)")) : t === "media" ? e("dark", "@media (prefers-color-scheme: dark)") : t === "variant" ? e("dark", n) : t === "class" && e("dark", "&:is(".concat(n, " *)")));
}
function en(e) {
    var _loop = function(_i, _iter) {
        var _iter__i = _sliced_to_array._(_iter[_i], 2), r = _iter__i[0], i = _iter__i[1];
        e.utilities.suggest("bg-gradient-to-".concat(r), function() {
            return [];
        }), e.utilities.static("bg-gradient-to-".concat(r), function() {
            return [
                a("--tw-gradient-position", "to ".concat(i, " in oklab")),
                a("background-image", "linear-gradient(var(--tw-gradient-stops))")
            ];
        });
    };
    for(var _i = 0, _iter = [
        [
            "t",
            "top"
        ],
        [
            "tr",
            "top right"
        ],
        [
            "r",
            "right"
        ],
        [
            "br",
            "bottom right"
        ],
        [
            "b",
            "bottom"
        ],
        [
            "bl",
            "bottom left"
        ],
        [
            "l",
            "left"
        ],
        [
            "tl",
            "top left"
        ]
    ]; _i < _iter.length; _i++)_loop(_i, _iter);
    e.utilities.suggest("bg-left-top", function() {
        return [];
    }), e.utilities.static("bg-left-top", function() {
        return [
            a("background-position", "left top")
        ];
    }), e.utilities.suggest("bg-right-top", function() {
        return [];
    }), e.utilities.static("bg-right-top", function() {
        return [
            a("background-position", "right top")
        ];
    }), e.utilities.suggest("bg-left-bottom", function() {
        return [];
    }), e.utilities.static("bg-left-bottom", function() {
        return [
            a("background-position", "left bottom")
        ];
    }), e.utilities.suggest("bg-right-bottom", function() {
        return [];
    }), e.utilities.static("bg-right-bottom", function() {
        return [
            a("background-position", "right bottom")
        ];
    }), e.utilities.suggest("object-left-top", function() {
        return [];
    }), e.utilities.static("object-left-top", function() {
        return [
            a("object-position", "left top")
        ];
    }), e.utilities.suggest("object-right-top", function() {
        return [];
    }), e.utilities.static("object-right-top", function() {
        return [
            a("object-position", "right top")
        ];
    }), e.utilities.suggest("object-left-bottom", function() {
        return [];
    }), e.utilities.static("object-left-bottom", function() {
        return [
            a("object-position", "left bottom")
        ];
    }), e.utilities.suggest("object-right-bottom", function() {
        return [];
    }), e.utilities.static("object-right-bottom", function() {
        return [
            a("object-position", "right bottom")
        ];
    }), e.utilities.suggest("max-w-screen", function() {
        return [];
    }), e.utilities.functional("max-w-screen", function(r) {
        if (!r.value || r.value.kind === "arbitrary") return;
        var i = e.theme.resolve(r.value.value, [
            "--breakpoint"
        ]);
        if (i) return [
            a("max-width", i)
        ];
    }), e.utilities.suggest("overflow-ellipsis", function() {
        return [];
    }), e.utilities.static("overflow-ellipsis", function() {
        return [
            a("text-overflow", "ellipsis")
        ];
    }), e.utilities.suggest("decoration-slice", function() {
        return [];
    }), e.utilities.static("decoration-slice", function() {
        return [
            a("-webkit-box-decoration-break", "slice"),
            a("box-decoration-break", "slice")
        ];
    }), e.utilities.suggest("decoration-clone", function() {
        return [];
    }), e.utilities.static("decoration-clone", function() {
        return [
            a("-webkit-box-decoration-break", "clone"),
            a("box-decoration-break", "clone")
        ];
    }), e.utilities.suggest("flex-shrink", function() {
        return [];
    }), e.utilities.functional("flex-shrink", function(r) {
        if (!r.modifier) {
            if (!r.value) return [
                a("flex-shrink", "1")
            ];
            if (r.value.kind === "arbitrary") return [
                a("flex-shrink", r.value.value)
            ];
            if (O(r.value.value)) return [
                a("flex-shrink", r.value.value)
            ];
        }
    }), e.utilities.suggest("flex-grow", function() {
        return [];
    }), e.utilities.functional("flex-grow", function(r) {
        if (!r.modifier) {
            if (!r.value) return [
                a("flex-grow", "1")
            ];
            if (r.value.kind === "arbitrary") return [
                a("flex-grow", r.value.value)
            ];
            if (O(r.value.value)) return [
                a("flex-grow", r.value.value)
            ];
        }
    }), e.utilities.suggest("order-none", function() {
        return [];
    }), e.utilities.static("order-none", function() {
        return [
            a("order", "0")
        ];
    }), e.utilities.suggest("break-words", function() {
        return [];
    }), e.utilities.static("break-words", function() {
        return [
            a("overflow-wrap", "break-word")
        ];
    });
}
function tn(e, r) {
    var _r_variants_get;
    var _r_variants_get_order;
    var i = e.theme.screens || {}, t = (_r_variants_get_order = (_r_variants_get = r.variants.get("min")) === null || _r_variants_get === void 0 ? void 0 : _r_variants_get.order) !== null && _r_variants_get_order !== void 0 ? _r_variants_get_order : 0, n = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        var _loop = function() {
            var _step_value = _sliced_to_array._(_step.value, 2), o = _step_value[0], f = _step_value[1];
            var p = function p(k) {
                r.variants.static(o, function(h) {
                    h.nodes = [
                        F("@media", d, h.nodes)
                    ];
                }, {
                    order: k
                });
            };
            var l = p;
            var u = r.variants.get(o), c = r.theme.resolveValue(o, [
                "--breakpoint"
            ]);
            if (u && c && !r.theme.hasDefault("--breakpoint-".concat(o))) return "continue";
            var m = !0;
            typeof f == "string" && (m = !1);
            var d = Ia(f);
            m ? n.push(p) : p(t);
        };
        for(var _iterator = Object.entries(i)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    if (n.length !== 0) {
        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
        try {
            for(var _iterator1 = r.variants.variants[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var _step_value = _sliced_to_array._(_step1.value, 2), o = _step_value[1];
                o.order > t && (o.order += n.length);
            }
        } catch (err) {
            _didIteratorError1 = true;
            _iteratorError1 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                    _iterator1.return();
                }
            } finally{
                if (_didIteratorError1) {
                    throw _iteratorError1;
                }
            }
        }
        r.variants.compareFns = new Map(Array.from(r.variants.compareFns).map(function(param) {
            var _param = _sliced_to_array._(param, 2), o = _param[0], f = _param[1];
            return o > t && (o += n.length), [
                o,
                f
            ];
        }));
        var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
        try {
            for(var _iterator2 = n.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                var _step_value1 = _sliced_to_array._(_step2.value, 2), o1 = _step_value1[0], f = _step_value1[1];
                f(t + o1 + 1);
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                    _iterator2.return();
                }
            } finally{
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }
    }
}
function Ia(e) {
    return (Array.isArray(e) ? e : [
        e
    ]).map(function(i) {
        return typeof i == "string" ? {
            min: i
        } : i && (typeof i === "undefined" ? "undefined" : _type_of._(i)) == "object" ? i : null;
    }).map(function(i) {
        if (i === null) return null;
        if ("raw" in i) return i.raw;
        var t = "";
        return i.max !== void 0 && (t += "".concat(i.max, " >= ")), t += "width", i.min !== void 0 && (t += " >= ".concat(i.min)), "(".concat(t, ")");
    }).filter(Boolean).join(", ");
}
function rn(e, r) {
    var i = e.theme.aria || {}, t = e.theme.supports || {}, n = e.theme.data || {};
    if (Object.keys(i).length > 0) {
        var l = r.variants.get("aria"), o = l === null || l === void 0 ? void 0 : l.applyFn, f = l === null || l === void 0 ? void 0 : l.compounds;
        r.variants.functional("aria", function(u, c) {
            var m = c.value;
            return m && m.kind === "named" && m.value in i ? o === null || o === void 0 ? void 0 : o(u, _object_spread_props._(_object_spread._({}, c), {
                value: {
                    kind: "arbitrary",
                    value: i[m.value]
                }
            })) : o === null || o === void 0 ? void 0 : o(u, c);
        }, {
            compounds: f
        });
    }
    if (Object.keys(t).length > 0) {
        var l1 = r.variants.get("supports"), o1 = l1 === null || l1 === void 0 ? void 0 : l1.applyFn, f1 = l1 === null || l1 === void 0 ? void 0 : l1.compounds;
        r.variants.functional("supports", function(u, c) {
            var m = c.value;
            return m && m.kind === "named" && m.value in t ? o1 === null || o1 === void 0 ? void 0 : o1(u, _object_spread_props._(_object_spread._({}, c), {
                value: {
                    kind: "arbitrary",
                    value: t[m.value]
                }
            })) : o1 === null || o1 === void 0 ? void 0 : o1(u, c);
        }, {
            compounds: f1
        });
    }
    if (Object.keys(n).length > 0) {
        var l2 = r.variants.get("data"), o2 = l2 === null || l2 === void 0 ? void 0 : l2.applyFn, f2 = l2 === null || l2 === void 0 ? void 0 : l2.compounds;
        r.variants.functional("data", function(u, c) {
            var m = c.value;
            return m && m.kind === "named" && m.value in n ? o2 === null || o2 === void 0 ? void 0 : o2(u, _object_spread_props._(_object_spread._({}, c), {
                value: {
                    kind: "arbitrary",
                    value: n[m.value]
                }
            })) : o2 === null || o2 === void 0 ? void 0 : o2(u, c);
        }, {
            compounds: f2
        });
    }
}
var Da = /^[a-z]+$/;
function on(_0) {
    return _async_to_generator._(function(param) {
        var e, r, i, t, n, l, o, f, u, _ref, c, m;
        return _ts_generator._(this, function(_state) {
            switch(_state.label){
                case 0:
                    e = param.designSystem, r = param.base, i = param.ast, t = param.loadModule, n = param.sources;
                    l = 0, o = [], f = [];
                    _(i, function(d, p) {
                        if (d.kind !== "at-rule") return;
                        var k = et(p);
                        if (d.name === "@plugin") {
                            if (k.parent !== null) throw new Error("`@plugin` cannot be nested.");
                            var h = d.params.slice(1, -1);
                            if (h.length === 0) throw new Error("`@plugin` must have a path.");
                            var w1 = {};
                            var _d_nodes;
                            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            try {
                                var _loop = function() {
                                    var x = _step.value;
                                    if (x.kind !== "declaration") throw new Error("Unexpected `@plugin` option:\n\n".concat(ie([
                                        x
                                    ]), "\n\n`@plugin` options must be a flat list of declarations."));
                                    if (x.value === void 0) return "continue";
                                    var S = x.value, A = L(S, ",").map(function(y) {
                                        if (y = y.trim(), y === "null") return null;
                                        if (y === "true") return !0;
                                        if (y === "false") return !1;
                                        if (Number.isNaN(Number(y))) {
                                            if (y[0] === '"' && y[y.length - 1] === '"' || y[0] === "'" && y[y.length - 1] === "'") return y.slice(1, -1);
                                            if (y[0] === "{" && y[y.length - 1] === "}") throw new Error("Unexpected `@plugin` option: Value of declaration `".concat(ie([
                                                x
                                            ]).trim(), "` is not supported.\n\nUsing an object as a plugin option is currently only supported in JavaScript configuration files."));
                                        } else return Number(y);
                                        return y;
                                    });
                                    w1[x.property] = A.length === 1 ? A[0] : A;
                                };
                                for(var _iterator = ((_d_nodes = d.nodes) !== null && _d_nodes !== void 0 ? _d_nodes : [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
                            } catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err;
                            } finally{
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                            }
                            return o.push([
                                {
                                    id: h,
                                    base: k.context.base,
                                    reference: !!k.context.reference,
                                    src: d.src
                                },
                                Object.keys(w1).length > 0 ? w1 : null
                            ]), l |= 4, V.Replace([]);
                        }
                        if (d.name === "@config") {
                            if (d.nodes.length > 0) throw new Error("`@config` cannot have a body.");
                            if (k.parent !== null) throw new Error("`@config` cannot be nested.");
                            return f.push({
                                id: d.params.slice(1, -1),
                                base: k.context.base,
                                reference: !!k.context.reference,
                                src: d.src
                            }), l |= 4, V.Replace([]);
                        }
                    }), en(e);
                    u = e.resolveThemeValue;
                    if (e.resolveThemeValue = function(p, k) {
                        return p.startsWith("--") ? u(p, k) : (l |= nn({
                            designSystem: e,
                            base: r,
                            ast: i,
                            sources: n,
                            configs: [],
                            pluginDetails: []
                        }), e.resolveThemeValue(p, k));
                    }, !o.length && !f.length) return [
                        2,
                        0
                    ];
                    return [
                        4,
                        Promise.all([
                            Promise.all(f.map(function(param) {
                                var d = param.id, p = param.base, k = param.reference, h = param.src;
                                return _async_to_generator._(function() {
                                    var w1;
                                    return _ts_generator._(this, function(_state) {
                                        switch(_state.label){
                                            case 0:
                                                return [
                                                    4,
                                                    t(d, p, "config")
                                                ];
                                            case 1:
                                                w1 = _state.sent();
                                                return [
                                                    2,
                                                    {
                                                        path: d,
                                                        base: w1.base,
                                                        config: w1.module,
                                                        reference: k,
                                                        src: h
                                                    }
                                                ];
                                        }
                                    });
                                })();
                            })),
                            Promise.all(o.map(function(param) {
                                var _param = _sliced_to_array._(param, 2), _param_ = _param[0], d = _param_.id, p = _param_.base, k = _param_.reference, h = _param_.src, w1 = _param[1];
                                return _async_to_generator._(function() {
                                    var x;
                                    return _ts_generator._(this, function(_state) {
                                        switch(_state.label){
                                            case 0:
                                                return [
                                                    4,
                                                    t(d, p, "plugin")
                                                ];
                                            case 1:
                                                x = _state.sent();
                                                return [
                                                    2,
                                                    {
                                                        path: d,
                                                        base: x.base,
                                                        plugin: x.module,
                                                        options: w1,
                                                        reference: k,
                                                        src: h
                                                    }
                                                ];
                                        }
                                    });
                                })();
                            }))
                        ])
                    ];
                case 1:
                    _ref = _sliced_to_array._.apply(void 0, [
                        _state.sent(),
                        2
                    ]), c = _ref[0], m = _ref[1];
                    return [
                        2,
                        (l |= nn({
                            designSystem: e,
                            base: r,
                            ast: i,
                            sources: n,
                            configs: c,
                            pluginDetails: m
                        }), l)
                    ];
            }
        });
    }).apply(this, arguments);
}
function nn(param) {
    var e = param.designSystem, r = param.base, i = param.ast, t = param.sources, n = param.configs, l = param.pluginDetails;
    var o = 0, u = _to_consumable_array._(l.map(function(w1) {
        if (!w1.options) return {
            config: {
                plugins: [
                    w1.plugin
                ]
            },
            base: w1.base,
            reference: w1.reference,
            src: w1.src
        };
        if ("__isOptionsFunction" in w1.plugin) return {
            config: {
                plugins: [
                    w1.plugin(w1.options)
                ]
            },
            base: w1.base,
            reference: w1.reference,
            src: w1.src
        };
        throw new Error('The plugin "'.concat(w1.path, '" does not accept options'));
    })).concat(_to_consumable_array._(n)), _pr = pr(e, [
        {
            config: Qi(e.theme),
            base: r,
            reference: !0,
            src: void 0
        }
    ].concat(_to_consumable_array._(u), [
        {
            config: {
                plugins: [
                    Xi
                ]
            },
            base: r,
            reference: !0,
            src: void 0
        }
    ])), c = _pr.resolvedConfig, _pr1 = pr(e, u), m = _pr1.resolvedConfig, d = _pr1.replacedThemeKeys, p = {
        designSystem: e,
        ast: i,
        resolvedConfig: c,
        featuresRef: {
            set current (w){
                o |= w;
            }
        }
    }, k = cr(_object_spread_props._(_object_spread._({}, p), {
        referenceMode: !1,
        src: void 0
    })), h = e.resolveThemeValue;
    e.resolveThemeValue = function(x, S) {
        if (x[0] === "-" && x[1] === "-") return h(x, S);
        var A = k.theme(x, void 0);
        if (Array.isArray(A) && A.length === 2) return A[0];
        if (Array.isArray(A)) return A.join(", ");
        if ((typeof A === "undefined" ? "undefined" : _type_of._(A)) == "object" && A !== null && "DEFAULT" in A) return A.DEFAULT;
        if (typeof A == "string") return A;
    };
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = c.plugins[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _step.value, _$w = _step_value.handler, x = _step_value.reference, S = _step_value.src;
            var A = cr(_object_spread_props._(_object_spread._({}, p), {
                referenceMode: x !== null && x !== void 0 ? x : !1,
                src: S
            }));
            _$w(A);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    if (ri(e, m, d), qi(e, m), rn(m, e), tn(m, e), Ji(m, e), !e.theme.prefix && c.prefix) {
        if (c.prefix.endsWith("-") && (c.prefix = c.prefix.slice(0, -1), console.warn('The prefix "'.concat(c.prefix, '" is invalid. Prefixes must be lowercase ASCII letters (a-z) only and is written as a variant before all utilities. We have fixed up the prefix for you. Remove the trailing `-` to silence this warning.'))), !Da.test(c.prefix)) throw new Error('The prefix "'.concat(c.prefix, '" is invalid. Prefixes must be lowercase ASCII letters (a-z) only.'));
        e.theme.prefix = c.prefix;
    }
    if (!e.important && c.important === !0 && (e.important = !0), typeof c.important == "string") {
        var _$w1 = c.important;
        _(i, function(x, S) {
            var _A_parent;
            if (x.kind !== "at-rule" || x.name !== "@tailwind" || x.params !== "utilities") return;
            var A = et(S);
            return ((_A_parent = A.parent) === null || _A_parent === void 0 ? void 0 : _A_parent.kind) === "rule" && A.parent.selector === _$w1 ? V.Stop : V.ReplaceStop(q(_$w1, [
                x
            ]));
        });
    }
    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
    try {
        for(var _iterator1 = c.blocklist[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
            var _$w2 = _step1.value;
            e.invalidCandidates.add(_$w2);
        }
    } catch (err) {
        _didIteratorError1 = true;
        _iteratorError1 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                _iterator1.return();
            }
        } finally{
            if (_didIteratorError1) {
                throw _iteratorError1;
            }
        }
    }
    var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
    try {
        for(var _iterator2 = c.content.files[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
            var _$w3 = _step2.value;
            if ("raw" in _$w3) throw new Error("Error in the config file/plugin/preset. The `content` key contains a `raw` entry:\n\n".concat(JSON.stringify(_$w3, null, 2), "\n\nThis feature is not currently supported."));
            var x1 = !1;
            _$w3.pattern[0] == "!" && (x1 = !0, _$w3.pattern = _$w3.pattern.slice(1)), t.push(_object_spread_props._(_object_spread._({}, _$w3), {
                negated: x1
            }));
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
            }
        } finally{
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
    return o;
}
function an(param) {
    var e = param.ast;
    var r = new U(function(n) {
        return st(n.code);
    }), i = new U(function(n) {
        return {
            url: n.file,
            content: n.code,
            ignore: !1
        };
    }), t = {
        file: null,
        sources: [],
        mappings: []
    };
    _(e, function(n) {
        if (!n.src || !n.dst) return;
        var l = i.get(n.src[0]);
        if (!l.content) return;
        var o = r.get(n.src[0]), f = r.get(n.dst[0]), u = l.content.slice(n.src[1], n.src[2]), c = 0;
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = u.split("\n")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var p = _step.value;
                if (p.trim() !== "") {
                    var k = o.find(n.src[1] + c), h = f.find(n.dst[1]);
                    t.mappings.push({
                        name: null,
                        originalPosition: _object_spread._({
                            source: l
                        }, k),
                        generatedPosition: h
                    });
                }
                c += p.length, c += 1;
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        var m = o.find(n.src[2]), d = f.find(n.dst[2]);
        t.mappings.push({
            name: null,
            originalPosition: _object_spread._({
                source: l
            }, m),
            generatedPosition: d
        });
    });
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = r.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var n = _step.value;
            t.sources.push(i.get(n));
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return t.mappings.sort(function(n, l) {
        var _n_originalPosition, _l_originalPosition, _n_originalPosition1, _l_originalPosition1;
        var _n_originalPosition_line, _l_originalPosition_line, _n_originalPosition_column, _l_originalPosition_column;
        return n.generatedPosition.line - l.generatedPosition.line || n.generatedPosition.column - l.generatedPosition.column || ((_n_originalPosition_line = (_n_originalPosition = n.originalPosition) === null || _n_originalPosition === void 0 ? void 0 : _n_originalPosition.line) !== null && _n_originalPosition_line !== void 0 ? _n_originalPosition_line : 0) - ((_l_originalPosition_line = (_l_originalPosition = l.originalPosition) === null || _l_originalPosition === void 0 ? void 0 : _l_originalPosition.line) !== null && _l_originalPosition_line !== void 0 ? _l_originalPosition_line : 0) || ((_n_originalPosition_column = (_n_originalPosition1 = n.originalPosition) === null || _n_originalPosition1 === void 0 ? void 0 : _n_originalPosition1.column) !== null && _n_originalPosition_column !== void 0 ? _n_originalPosition_column : 0) - ((_l_originalPosition_column = (_l_originalPosition1 = l.originalPosition) === null || _l_originalPosition1 === void 0 ? void 0 : _l_originalPosition1.column) !== null && _l_originalPosition_column !== void 0 ? _l_originalPosition_column : 0);
    }), t;
}
var ln = /^(-?\d+)\.\.(-?\d+)(?:\.\.(-?\d+))?$/;
function _t1(e) {
    var r = e.indexOf("{");
    if (r === -1) return [
        e
    ];
    var i = [], t = e.slice(0, r), n = e.slice(r), l = 0, o = n.lastIndexOf("}");
    for(var d = 0; d < n.length; d++){
        var p = n[d];
        if (p === "{") l++;
        else if (p === "}" && (l--, l === 0)) {
            o = d;
            break;
        }
    }
    if (o === -1) throw new Error("The pattern `".concat(e, "` is not balanced."));
    var f = n.slice(1, o), u = n.slice(o + 1), c;
    Ua(f) ? c = La(f) : c = L(f, ","), c = c.flatMap(function(d) {
        return _t1(d);
    });
    var m = _t1(u);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined, _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
    try {
        for(var _iterator = m[Symbol.iterator](), _step; !(_iteratorNormalCompletion1 = (_step = _iterator.next()).done); _iteratorNormalCompletion1 = true){
            var d1 = _step.value;
            try {
                for(var _iterator1 = c[Symbol.iterator](), _step1; !(_iteratorNormalCompletion = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion = true){
                    var p1 = _step1.value;
                    i.push(t + p1 + d1);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator1.return != null) {
                        _iterator1.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    } catch (err) {
        _didIteratorError1 = true;
        _iteratorError1 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion1 && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError1) {
                throw _iteratorError1;
            }
        }
    }
    return i;
}
function Ua(e) {
    return ln.test(e);
}
function La(e) {
    var r = e.match(ln);
    if (!r) return [
        e
    ];
    var _r = _sliced_to_array._(r, 4), i = _r[1], t = _r[2], n = _r[3], l = n ? parseInt(n, 10) : void 0, o = [];
    if (/^-?\d+$/.test(i) && /^-?\d+$/.test(t)) {
        var f = parseInt(i, 10), u = parseInt(t, 10);
        if (l === void 0 && (l = f <= u ? 1 : -1), l === 0) throw new Error("Step cannot be zero in sequence expansion.");
        var c = f < u;
        c && l < 0 && (l = -l), !c && l > 0 && (l = -l);
        for(var m = f; c ? m <= u : m >= u; m += l)o.push(m.toString());
    }
    return o;
}
function sn(e, r) {
    var i = new Set, t = new Set, n = [];
    function l(o) {
        var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        if (e.has(o) && !i.has(o)) {
            var _r_onCircularDependency;
            t.has(o) && ((_r_onCircularDependency = r.onCircularDependency) === null || _r_onCircularDependency === void 0 ? void 0 : _r_onCircularDependency.call(r, f, o)), t.add(o);
            var _e_get;
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = ((_e_get = e.get(o)) !== null && _e_get !== void 0 ? _e_get : [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var u = _step.value;
                    f.push(o), l(u, f), f.pop();
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            i.add(o), t.delete(o), n.push(o);
        }
    }
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = e.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var o = _step.value;
            l(o);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return n;
}
var Ka = /^[a-z]+$/, ht = function(n) {
    return n[n.None = 0] = "None", n[n.AtProperty = 1] = "AtProperty", n[n.ColorMix = 2] = "ColorMix", n[n.All = 3] = "All", n;
}(ht || {});
function za() {
    throw new Error("No `loadModule` function provided to `compile`");
}
function Ma() {
    throw new Error("No `loadStylesheet` function provided to `compile`");
}
function ja(e) {
    var r = 0, i = null;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = L(e, " ")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var t = _step.value;
            t === "reference" ? r |= 2 : t === "inline" ? r |= 1 : t === "default" ? r |= 4 : t === "static" ? r |= 8 : t.startsWith("prefix(") && t.endsWith(")") && (i = t.slice(7, -1));
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return [
        r,
        i
    ];
}
var Pe = function(u) {
    return u[u.None = 0] = "None", u[u.AtApply = 1] = "AtApply", u[u.AtImport = 2] = "AtImport", u[u.JsPluginCompat = 4] = "JsPluginCompat", u[u.ThemeFunction = 8] = "ThemeFunction", u[u.Utilities = 16] = "Utilities", u[u.Variants = 32] = "Variants", u[u.AtTheme = 64] = "AtTheme", u;
}(Pe || {});
function un(_0) {
    return _async_to_generator._(function(e) {
        var _ref, tmp, r, i, tmp1, t, tmp2, n, _u_get, l, o, f, u, c, m, d, p, k, h, w1, x, S, A, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, y, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, y1, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, y2, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, y3, y4, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, _step_value, N, P, z, K, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, N1, y5;
        var _arguments = arguments;
        return _ts_generator._(this, function(_state) {
            switch(_state.label){
                case 0:
                    _ref = _arguments.length > 1 && _arguments[1] !== void 0 ? _arguments[1] : {}, tmp = _ref.base, r = tmp === void 0 ? "" : tmp, i = _ref.from, tmp1 = _ref.loadModule, t = tmp1 === void 0 ? za : tmp1, tmp2 = _ref.loadStylesheet, n = tmp2 === void 0 ? Ma : tmp2;
                    l = 0;
                    e = [
                        de({
                            base: r
                        }, e)
                    ];
                    return [
                        4,
                        ur(e, r, n, 0, i !== void 0)
                    ];
                case 1:
                    l |= _state.sent();
                    o = null, f = new mt, u = new Map, c = new Map, m = [], d = null, p = null, k = [], h = [], w1 = [], x = [], S = null;
                    _(e, function(y, K) {
                        if (y.kind !== "at-rule") return;
                        var N = et(K);
                        if (y.name === "@tailwind" && (y.params === "utilities" || y.params.startsWith("utilities"))) {
                            if (p !== null) return V.Replace([]);
                            if (N.context.reference) return V.Replace([]);
                            var P = L(y.params, " ");
                            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            try {
                                for(var _iterator = P[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                    var z = _step.value;
                                    if (z.startsWith("source(")) {
                                        var I = z.slice(7, -1);
                                        if (I === "none") {
                                            S = I;
                                            continue;
                                        }
                                        if (I[0] === '"' && I[I.length - 1] !== '"' || I[0] === "'" && I[I.length - 1] !== "'" || I[0] !== "'" && I[0] !== '"') throw new Error("`source(\u2026)` paths must be quoted.");
                                        var _N_context_sourceBase;
                                        S = {
                                            base: (_N_context_sourceBase = N.context.sourceBase) !== null && _N_context_sourceBase !== void 0 ? _N_context_sourceBase : N.context.base,
                                            pattern: I.slice(1, -1)
                                        };
                                    }
                                }
                            } catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err;
                            } finally{
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                            }
                            p = y, l |= 16;
                        }
                        if (y.name === "@utility") {
                            if (N.parent !== null) throw new Error("`@utility` cannot be nested.");
                            if (y.nodes.length === 0) throw new Error("`@utility ".concat(y.params, "` is empty. Utilities should include at least one property."));
                            var P1 = Jr(y);
                            if (P1 === null) {
                                if (!y.params.endsWith("-*")) {
                                    if (y.params.endsWith("*")) throw new Error("`@utility ".concat(y.params, "` defines an invalid utility name. A functional utility must end in `-*`."));
                                    if (y.params.includes("*")) throw new Error("`@utility ".concat(y.params, "` defines an invalid utility name. The dynamic portion marked by `-*` must appear once at the end."));
                                }
                                throw new Error("`@utility ".concat(y.params, "` defines an invalid utility name. Utilities should be alphanumeric and start with a lowercase letter."));
                            }
                            m.push(P1);
                        }
                        if (y.name === "@source") {
                            if (y.nodes.length > 0) throw new Error("`@source` cannot have a body.");
                            if (N.parent !== null) throw new Error("`@source` cannot be nested.");
                            var P2 = !1, z1 = !1, I1 = y.params;
                            if (I1[0] === "n" && I1.startsWith("not ") && (P2 = !0, I1 = I1.slice(4)), I1[0] === "i" && I1.startsWith("inline(") && (z1 = !0, I1 = I1.slice(7, -1)), I1[0] === '"' && I1[I1.length - 1] !== '"' || I1[0] === "'" && I1[I1.length - 1] !== "'" || I1[0] !== "'" && I1[0] !== '"') throw new Error("`@source` paths must be quoted.");
                            var M = I1.slice(1, -1);
                            if (z1) {
                                var Y = P2 ? x : w1, G = L(M, " ");
                                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined, _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                                try {
                                    for(var _iterator1 = G[Symbol.iterator](), _step1; !(_iteratorNormalCompletion2 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion2 = true){
                                        var ae = _step1.value;
                                        try {
                                            for(var _iterator2 = _t1(ae)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion1 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion1 = true){
                                                var le = _step2.value;
                                                Y.push(le);
                                            }
                                        } catch (err) {
                                            _didIteratorError1 = true;
                                            _iteratorError1 = err;
                                        } finally{
                                            try {
                                                if (!_iteratorNormalCompletion1 && _iterator2.return != null) {
                                                    _iterator2.return();
                                                }
                                            } finally{
                                                if (_didIteratorError1) {
                                                    throw _iteratorError1;
                                                }
                                            }
                                        }
                                    }
                                } catch (err) {
                                    _didIteratorError2 = true;
                                    _iteratorError2 = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion2 && _iterator1.return != null) {
                                            _iterator1.return();
                                        }
                                    } finally{
                                        if (_didIteratorError2) {
                                            throw _iteratorError2;
                                        }
                                    }
                                }
                            } else h.push({
                                base: N.context.base,
                                pattern: M,
                                negated: P2
                            });
                            return V.ReplaceSkip([]);
                        }
                        if (y.name === "@variant" && (N.parent === null ? y.nodes.length === 0 ? y.name = "@custom-variant" : (_(y.nodes, function(P) {
                            if (P.kind === "at-rule" && P.name === "@slot") return y.name = "@custom-variant", V.Stop;
                        }), y.name === "@variant" && k.push(y)) : k.push(y)), y.name === "@custom-variant") {
                            if (N.parent !== null) throw new Error("`@custom-variant` cannot be nested.");
                            var _L = _sliced_to_array._(L(y.params, " "), 2), P3 = _L[0], z2 = _L[1];
                            if (!Vt.test(P3)) throw new Error("`@custom-variant ".concat(P3, "` defines an invalid variant name. Variants should only contain alphanumeric, dashes, or underscore characters and start with a lowercase letter or number."));
                            if (y.nodes.length > 0 && z2) throw new Error("`@custom-variant ".concat(P3, "` cannot have both a selector and a body."));
                            if (y.nodes.length === 0) {
                                if (!z2) throw new Error("`@custom-variant ".concat(P3, "` has no selector or body."));
                                var I2 = L(z2.slice(1, -1), ",");
                                if (I2.length === 0 || I2.some(function(G) {
                                    return G.trim() === "";
                                })) throw new Error("`@custom-variant ".concat(P3, " (").concat(I2.join(","), ")` selector is invalid."));
                                var M1 = [], Y1 = [];
                                var _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
                                try {
                                    for(var _iterator3 = I2[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                                        var G1 = _step3.value;
                                        G1 = G1.trim(), G1[0] === "@" ? M1.push(G1) : Y1.push(G1);
                                    }
                                } catch (err) {
                                    _didIteratorError3 = true;
                                    _iteratorError3 = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                                            _iterator3.return();
                                        }
                                    } finally{
                                        if (_didIteratorError3) {
                                            throw _iteratorError3;
                                        }
                                    }
                                }
                                u.set(P3, function(G) {
                                    G.variants.static(P3, function(ae) {
                                        var le = [];
                                        Y1.length > 0 && le.push(q(Y1.join(", "), ae.nodes));
                                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                        try {
                                            for(var _iterator = M1[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                                var s = _step.value;
                                                le.push(Z(s, ae.nodes));
                                            }
                                        } catch (err) {
                                            _didIteratorError = true;
                                            _iteratorError = err;
                                        } finally{
                                            try {
                                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                                    _iterator.return();
                                                }
                                            } finally{
                                                if (_didIteratorError) {
                                                    throw _iteratorError;
                                                }
                                            }
                                        }
                                        ae.nodes = le;
                                    }, {
                                        compounds: Le(_to_consumable_array._(Y1).concat(_to_consumable_array._(M1)))
                                    });
                                }), c.set(P3, new Set);
                            } else {
                                var I3 = new Set;
                                _(y.nodes, function(M) {
                                    M.kind === "at-rule" && M.name === "@variant" && I3.add(M.params);
                                }), u.set(P3, function(M) {
                                    M.variants.fromAst(P3, y.nodes, M);
                                }), c.set(P3, I3);
                            }
                            return V.ReplaceSkip([]);
                        }
                        if (y.name === "@media") {
                            var P4 = L(y.params, " "), z3 = [];
                            var _iteratorNormalCompletion4 = true, _didIteratorError4 = false, _iteratorError4 = undefined;
                            try {
                                var _loop = function() {
                                    var I = _step4.value;
                                    if (I.startsWith("source(")) {
                                        var M = I.slice(7, -1);
                                        _(y.nodes, function(Y) {
                                            if (Y.kind === "at-rule" && Y.name === "@tailwind" && Y.params === "utilities") return Y.params += " source(".concat(M, ")"), V.ReplaceStop([
                                                de({
                                                    sourceBase: N.context.base
                                                }, [
                                                    Y
                                                ])
                                            ]);
                                        });
                                    } else if (I.startsWith("theme(")) {
                                        var M1 = I.slice(6, -1), Y = M1.includes("reference");
                                        _(y.nodes, function(G) {
                                            if (G.kind !== "context") {
                                                if (G.kind !== "at-rule") {
                                                    if (Y) throw new Error('Files imported with `@import "\u2026" theme(reference)` must only contain `@theme` blocks.\nUse `@reference "\u2026";` instead.');
                                                    return V.Continue;
                                                }
                                                if (G.name === "@theme") return G.params += " " + M1, V.Skip;
                                            }
                                        });
                                    } else if (I.startsWith("prefix(")) {
                                        var M2 = I.slice(7, -1);
                                        _(y.nodes, function(Y) {
                                            if (Y.kind === "at-rule" && Y.name === "@theme") return Y.params += " prefix(".concat(M2, ")"), V.Skip;
                                        });
                                    } else I === "important" ? o = !0 : I === "reference" ? y.nodes = [
                                        de({
                                            reference: !0
                                        }, y.nodes)
                                    ] : z3.push(I);
                                };
                                for(var _iterator4 = P4[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true)_loop();
                            } catch (err) {
                                _didIteratorError4 = true;
                                _iteratorError4 = err;
                            } finally{
                                try {
                                    if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                                        _iterator4.return();
                                    }
                                } finally{
                                    if (_didIteratorError4) {
                                        throw _iteratorError4;
                                    }
                                }
                            }
                            if (z3.length > 0) y.params = z3.join(" ");
                            else if (P4.length > 0) return V.Replace(y.nodes);
                            return V.Continue;
                        }
                        if (y.name === "@theme") {
                            var _ja = _sliced_to_array._(ja(y.params), 2), P5 = _ja[0], z4 = _ja[1];
                            if (l |= 64, N.context.reference && (P5 |= 2), z4) {
                                if (!Ka.test(z4)) throw new Error('The prefix "'.concat(z4, '" is invalid. Prefixes must be lowercase ASCII letters (a-z) only.'));
                                f.prefix = z4;
                            }
                            return _(y.nodes, function(I) {
                                if (I.kind === "at-rule" && I.name === "@keyframes") return f.addKeyframes(I), V.Skip;
                                if (I.kind === "comment") return;
                                if (I.kind === "declaration" && I.property.startsWith("--")) {
                                    var _I_value;
                                    f.add(Ve(I.property), (_I_value = I.value) !== null && _I_value !== void 0 ? _I_value : "", P5, I.src);
                                    return;
                                }
                                var M = ie([
                                    F(y.name, y.params, [
                                        I
                                    ])
                                ]).split("\n").map(function(Y, G, ae) {
                                    return "".concat(G === 0 || G >= ae.length - 2 ? " " : ">", " ").concat(Y);
                                }).join("\n");
                                throw new Error("`@theme` blocks must only contain custom properties or `@keyframes`.\n\n".concat(M));
                            }), d ? V.ReplaceSkip([]) : (d = q(":root, :host", []), d.src = y.src, V.ReplaceSkip(d));
                        }
                    });
                    A = Ui(f, p === null || p === void 0 ? void 0 : p.src);
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    if (o && (A.important = o), x.length > 0) try {
                        for(_iterator = x[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            y = _step.value;
                            A.invalidCandidates.add(y);
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    return [
                        4,
                        on({
                            designSystem: A,
                            base: r,
                            ast: e,
                            loadModule: t,
                            sources: h
                        })
                    ];
                case 2:
                    l |= _state.sent();
                    _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        for(_iterator1 = u.keys()[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                            y1 = _step1.value;
                            A.variants.static(y1, function() {});
                        }
                    } catch (err) {
                        _didIteratorError1 = true;
                        _iteratorError1 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                _iterator1.return();
                            }
                        } finally{
                            if (_didIteratorError1) {
                                throw _iteratorError1;
                            }
                        }
                    }
                    _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                    try {
                        for(_iterator2 = sn(c, {
                            onCircularDependency: function onCircularDependency(K, N) {
                                var P = ie(K.map(function(z, I) {
                                    var _K_;
                                    return F("@custom-variant", z, [
                                        F("@variant", (_K_ = K[I + 1]) !== null && _K_ !== void 0 ? _K_ : N, [])
                                    ]);
                                })).replaceAll(";", " { \u2026 }").replace("@custom-variant ".concat(N, " {"), "@custom-variant ".concat(N, " { /* ← */"));
                                throw new Error("Circular dependency detected in custom variants:\n\n".concat(P));
                            }
                        })[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                            y2 = _step2.value;
                            (_u_get = u.get(y2)) === null || _u_get === void 0 ? void 0 : _u_get(A);
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                                _iterator2.return();
                            }
                        } finally{
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }
                    _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
                    try {
                        for(_iterator3 = m[Symbol.iterator](); !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                            y3 = _step3.value;
                            y3(A);
                        }
                    } catch (err) {
                        _didIteratorError3 = true;
                        _iteratorError3 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                                _iterator3.return();
                            }
                        } finally{
                            if (_didIteratorError3) {
                                throw _iteratorError3;
                            }
                        }
                    }
                    if (d) {
                        y4 = [];
                        _iteratorNormalCompletion4 = true, _didIteratorError4 = false, _iteratorError4 = undefined;
                        try {
                            for(_iterator4 = A.theme.entries()[Symbol.iterator](); !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true){
                                _step_value = _sliced_to_array._(_step4.value, 2), N = _step_value[0], P = _step_value[1];
                                if (P.options & 2) continue;
                                z = a(xe(N), P.value);
                                z.src = P.src, y4.push(z);
                            }
                        } catch (err) {
                            _didIteratorError4 = true;
                            _iteratorError4 = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                                    _iterator4.return();
                                }
                            } finally{
                                if (_didIteratorError4) {
                                    throw _iteratorError4;
                                }
                            }
                        }
                        K = A.theme.getKeyframes();
                        _iteratorNormalCompletion5 = true, _didIteratorError5 = false, _iteratorError5 = undefined;
                        try {
                            for(_iterator5 = K[Symbol.iterator](); !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true){
                                N1 = _step5.value;
                                e.push(de({
                                    theme: !0
                                }, [
                                    W([
                                        N1
                                    ])
                                ]));
                            }
                        } catch (err) {
                            _didIteratorError5 = true;
                            _iteratorError5 = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                                    _iterator5.return();
                                }
                            } finally{
                                if (_didIteratorError5) {
                                    throw _iteratorError5;
                                }
                            }
                        }
                        d.nodes = [
                            de({
                                theme: !0
                            }, y4)
                        ];
                    }
                    if (l |= ot(e, A), l |= Fe(e, A), l |= $e(e, A), p) {
                        y5 = p;
                        y5.kind = "context", y5.context = {};
                    }
                    return [
                        2,
                        (_(e, function(y) {
                            if (y.kind === "at-rule") return y.name === "@utility" ? V.Replace([]) : V.Skip;
                        }), {
                            designSystem: A,
                            ast: e,
                            sources: h,
                            root: S,
                            utilitiesNode: p,
                            features: l,
                            inlineCandidates: w1
                        })
                    ];
            }
        });
    }).apply(this, arguments);
}
function cn(_0) {
    return _async_to_generator._(function(e) {
        var r, _ref, i, t, n, l, o, f, u, m, d, p, k, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, h;
        var _arguments = arguments;
        function c(h) {
            i.invalidCandidates.add(h);
        }
        return _ts_generator._(this, function(_state) {
            switch(_state.label){
                case 0:
                    r = _arguments.length > 1 && _arguments[1] !== void 0 ? _arguments[1] : {};
                    return [
                        4,
                        un(e, r)
                    ];
                case 1:
                    _ref = _state.sent(), i = _ref.designSystem, t = _ref.ast, n = _ref.sources, l = _ref.root, o = _ref.utilitiesNode, f = _ref.features, u = _ref.inlineCandidates;
                    t.unshift(dt("! tailwindcss v".concat(dr, " | MIT License | https://tailwindcss.com ")));
                    m = new Set, d = null, p = 0, k = !1;
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = u[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            h = _step.value;
                            i.invalidCandidates.has(h) || (m.add(h), k = !0);
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    return [
                        2,
                        {
                            sources: n,
                            root: l,
                            features: f,
                            build: function build(h) {
                                if (f === 0) return e;
                                if (!o) return d !== null && d !== void 0 ? d : d = Re(t, i, r.polyfills), d;
                                var w1 = k, x = !1;
                                k = !1;
                                var S = m.size;
                                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(var _iterator = h[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        var y = _step.value;
                                        if (!i.invalidCandidates.has(y)) if (y[0] === "-" && y[1] === "-") {
                                            var K = i.theme.markUsedVariable(y);
                                            w1 || (w1 = K), x || (x = K);
                                        } else m.add(y), w1 || (w1 = m.size !== S);
                                    }
                                } catch (err) {
                                    _didIteratorError = true;
                                    _iteratorError = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                                            _iterator.return();
                                        }
                                    } finally{
                                        if (_didIteratorError) {
                                            throw _iteratorError;
                                        }
                                    }
                                }
                                if (!w1) return d !== null && d !== void 0 ? d : d = Re(t, i, r.polyfills), d;
                                var A = Te(m, i, {
                                    onInvalidCandidate: c
                                }).astNodes;
                                return r.from && _(A, function(y) {
                                    var _y;
                                    var _src;
                                    (_src = (_y = y).src) !== null && _src !== void 0 ? _src : _y.src = o.src;
                                }), !x && p === A.length ? (d !== null && d !== void 0 ? d : d = Re(t, i, r.polyfills), d) : (p = A.length, o.nodes = A, d = Re(t, i, r.polyfills), d);
                            }
                        }
                    ];
            }
        });
    }).apply(this, arguments);
}
function Fa(_0) {
    return _async_to_generator._(function(e) {
        var r, i, t, n, l;
        var _arguments = arguments;
        return _ts_generator._(this, function(_state) {
            switch(_state.label){
                case 0:
                    r = _arguments.length > 1 && _arguments[1] !== void 0 ? _arguments[1] : {};
                    i = Ne(e, {
                        from: r.from
                    });
                    return [
                        4,
                        cn(i, r)
                    ];
                case 1:
                    t = _state.sent(), n = i, l = e;
                    return [
                        2,
                        _object_spread_props._(_object_spread._({}, t), {
                            build: function build(o) {
                                var f = t.build(o);
                                return f === n || (l = ie(f, !!r.from), n = f), l;
                            },
                            buildSourceMap: function buildSourceMap() {
                                return an({
                                    ast: n
                                });
                            }
                        })
                    ];
            }
        });
    }).apply(this, arguments);
}
function Wa(_0) {
    return _async_to_generator._(function(e) {
        var r;
        var _arguments = arguments;
        return _ts_generator._(this, function(_state) {
            switch(_state.label){
                case 0:
                    r = _arguments.length > 1 && _arguments[1] !== void 0 ? _arguments[1] : {};
                    return [
                        4,
                        un(Ne(e, {
                            from: r.from
                        }), r)
                    ];
                case 1:
                    return [
                        2,
                        _state.sent().designSystem
                    ];
            }
        });
    }).apply(this, arguments);
}
function lt() {
    throw new Error("It looks like you're trying to use `tailwindcss` directly as a PostCSS plugin. The PostCSS plugin has moved to a separate package, so to continue using Tailwind CSS with PostCSS you'll need to install `@tailwindcss/postcss` and update your PostCSS configuration.");
}
for(var e in It)e !== "default" && (lt[e] = It[e]);
module.exports = lt;
function r(r) {
    return this.prefix ? "--".concat(r.slice(3 + this.prefix.length)) : r;
}
function e1(r, i) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = i[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var t = _step.value;
            var n = r !== null ? "".concat(t, "-").concat(r) : t;
            if (!this.values.has(n)) if (r !== null && r.includes(".")) {
                if (n = "".concat(t, "-").concat(r.replaceAll(".", "_")), !this.values.has(n)) continue;
            } else continue;
            if (!yr(n, t)) return n;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return null;
}
function t(r) {
    var i = this.values.get(r);
    if (!i) return null;
    var t = null;
    return i.options & 2 && (t = i.value), "var(".concat(xe(this.prefixKey(r))).concat(t ? ", ".concat(t) : "", ")");
}
}),
]);

//# sourceMappingURL=4e0c1_tailwindcss_dist_lib_0f607bdc.js.map