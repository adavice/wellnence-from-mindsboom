(() => {
    "use strict";
    var e = {
        80: (e, t, n) => {
            n.r(t)
        }
        ,
        835: (e, t, n) => {
            e.exports = n.p + "android-chrome-192x192.png"
        }
        ,
        167: (e, t, n) => {
            e.exports = n.p + "android-chrome-512x512.png"
        }
        ,
        281: (e, t, n) => {
            e.exports = n.p + "apple-touch-icon.png"
        }
        ,
        231: (e, t, n) => {
            e.exports = n.p + "favicon-16x16.png"
        }
        ,
        750: (e, t, n) => {
            e.exports = n.p + "favicon-32x32.png"
        }
        ,
        892: (e, t, n) => {
            e.exports = n.p + "favicon.ico"
        }
        ,
        366: (e, t, n) => {
            e.exports = n.p + "site.webmanifest"
        }
    }
        , t = {};
    function n(r) {
        var o = t[r];
        if (void 0 !== o)
            return o.exports;
        var l = t[r] = {
            exports: {}
        };
        return e[r](l, l.exports, n),
            l.exports
    }
    n.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
    },
        n.p = "/",
        (() => {
            function e(e) {
                null !== e.resultElem && (e.resultElem.remove(),
                    e.resultElem = null,
                    e.resultValue = null)
            }
            function t(e) {
                e.style.backgroundColor = "",
                    e.style.color = ""
            }
            function r(e) {
                e.style.backgroundColor = "#a4c74d",
                    e.style.color = "white",
                    e.scrollIntoView()
            }
            function o(e, t) {
                if (null === e.resultElem) {
                    var n = document.createElement("p");
                    n.setAttribute("id", t),
                        e.result.appendChild(n),
                        e.resultElem = document.getElementById(t)
                }
            }
            function l(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                    , n = e.options[e.selectedIndex];
                return t ? n.value : n.text
            }
            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            var u = {
                form: document.getElementById("maxLiftForm"),
                formReset: document.getElementById("maxLiftFormReset"),
                result: document.getElementById("maxLiftResult"),
                resultElem: null,
                resultValue: null,
                formulas: {
                    epley: function (e, t, n) {
                        return n ? (30 * n - 30 * e) / e : e * (1 + .0333 * t)
                    },
                    brzycki: function (e, t, n) {
                        return n ? (e / n - 1.0278) / -.0278 : e / (1.0278 - .0278 * t)
                    },
                    lander: function (e, t, n) {
                        return n ? (100 * e / n - 101.3) / -2.67123 : 100 * e / (101.3 - 2.67123 * t)
                    },
                    lombardi: function (e, t, n) {
                        return n ? Math.pow(n / e, 10) : e * Math.pow(t, .1)
                    },
                    mayhew: function (e, t, n) {
                        return n ? Math.log((100 * e / n - 52.2) / 41.9) / -.055 : 100 * e / (52.2 + 41.9 * Math.pow(Math.E, -.055 * t))
                    },
                    oconner: function (e, t, n) {
                        return n ? 40 * n / e - 40 : e * (1 + t / 40)
                    },
                    walthen: function (e, t, n) {
                        return n ? Math.log((100 * e / n - 48.8) / 53.8) / -.075 : 100 * e / (48.8 + 53.8 * Math.pow(Math.E, -.075 * t))
                    }
                },
                run: function () {
                    this.form && (this.form.addEventListener("submit", i),
                        this.formReset.addEventListener("click", s))
                }
            };
            function i(e) {
                var t = document.getElementById("maxLiftFormula")
                    , n = document.getElementById("maxLiftWeight")
                    , r = document.getElementById("maxLiftReps")
                    , a = document.getElementById("maxLiftUnit")
                    , i = l(t, !0)
                    , m = function (e, t, n) {
                        var r = 0;
                        if ("average" === e) {
                            for (var o = 0, l = Object.values(u.formulas); o < l.length; o++)
                                r += (0,
                                    l[o])(t, n);
                            r /= Object.keys(u.formulas).length
                        } else
                            r = u.formulas[e](t, n);
                        return f(r)
                    }(i, n.value, r.value)
                    , s = l(a);
                o(u, "maxLiftResultElem"),
                    u.resultElem.textContent = "1RM: ".concat(m, " ").concat(s),
                    u.resultElem.style.color = "#a4c74d",
                    u.resultValue = m,
                    c(m, i),
                    e.preventDefault()
            }
            function c(e, n) {
                var o, l = [1, .95, .9, .85, .8, .75, .7, .65, .6, .55, .5], i = 0, c = function (e, t) {
                    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!n) {
                        if (Array.isArray(e) || (n = function (e, t) {
                            if (e) {
                                if ("string" == typeof e)
                                    return a(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name),
                                    "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0
                            }
                        }(e)) || t && e && "number" == typeof e.length) {
                            n && (e = n);
                            var r = 0
                                , o = function () { };
                            return {
                                s: o,
                                n: function () {
                                    return r >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[r++]
                                    }
                                },
                                e: function (e) {
                                    throw e
                                },
                                f: o
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var l, u = !0, i = !1;
                    return {
                        s: function () {
                            n = n.call(e)
                        },
                        n: function () {
                            var e = n.next();
                            return u = e.done,
                                e
                        },
                        e: function (e) {
                            i = !0,
                                l = e
                        },
                        f: function () {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (i)
                                    throw l
                            }
                        }
                    }
                }(document.getElementById("percentagesDiv").getElementsByTagName("tbody")[0].children);
                try {
                    for (c.s(); !(o = c.n()).done;) {
                        var s = o.value
                            , d = s.getElementsByTagName("td")[2]
                            , y = s.getElementsByTagName("td")[1];
                        if (e)
                            if (0 === i)
                                d.textContent = 1,
                                    y.textContent = e,
                                    r(y);
                            else {
                                var g = f(e * l[i]);
                                y.textContent = g,
                                    d.textContent = m(n, g, u.resultValue)
                            }
                        else
                            d.textContent = null,
                                y.textContent = null,
                                t(y);
                        i++
                    }
                } catch (e) {
                    c.e(e)
                } finally {
                    c.f()
                }
            }
            function m(e, t, n) {
                var r = 0;
                if ("average" === e) {
                    for (var o = 0, l = Object.values(u.formulas); o < l.length; o++)
                        r += (0,
                            l[o])(t, null, n);
                    r /= Object.keys(u.formulas).length
                } else
                    r = u.formulas[e](t, null, n);
                return f(r)
            }
            function s(t) {
                e(u),
                    c()
            }
            function f(e) {
                return Math.round(10 * e) / 10
            }
            function d(e, t) {
                return function (e) {
                    if (Array.isArray(e))
                        return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, l, a, u = [], i = !0, c = !1;
                        try {
                            if (l = (n = n.call(e)).next,
                                0 === t) {
                                if (Object(n) !== n)
                                    return;
                                i = !1
                            } else
                                for (; !(i = (r = l.call(n)).done) && (u.push(r.value),
                                    u.length !== t); i = !0)
                                    ;
                        } catch (e) {
                            c = !0,
                                o = e
                        } finally {
                            try {
                                if (!i && null != n.return && (a = n.return(),
                                    Object(a) !== a))
                                    return
                            } finally {
                                if (c)
                                    throw o
                            }
                        }
                        return u
                    }
                }(e, t) || y(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function y(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return g(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? g(e, t) : void 0
                }
            }
            function g(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            var v = {
                form: document.getElementById("calorieTargetForm"),
                formReset: document.getElementById("calorieTargetFormReset"),
                result: document.getElementById("calorieTargetResult"),
                resultElem: null,
                resultValue: null,
                activityMultipliers: {
                    sedentary: 1.2,
                    light: 1.375,
                    moderate: 1.55,
                    very: 1.725,
                    extra: 1.9
                },
                calorieModifiers: {
                    loseQuickly: -500,
                    loseSlowly: -250,
                    maintain: 0,
                    gainSlowly: 250,
                    gainQuickly: 500
                },
                run: function () {
                    this.form && (this.form.addEventListener("submit", h),
                        this.formReset.addEventListener("click", b))

                }
            };
            function h(e) {
                var t = document.getElementById("calorieTargetWeight")
                    , n = document.getElementById("calorieTargetWeightUnit")
                    , r = document.getElementById("calorieTargetHeight")
                    , a = document.getElementById("calorieTargetHeightUnit")
                    , u = document.getElementById("calorieTargetAge")
                    , i = document.getElementById("calorieTargetActivityLevel")
                    , c = document.getElementById("calorieTargetGender")
                    , m = document.getElementById("calorieTargetWeightGoal")
                    , s = t.value
                    , f = l(n)
                    , d = r.value
                    , y = l(a)
                    , g = u.value
                    , h = l(i, !0)
                    , b = l(c, !0)
                    , x = l(m, !0);
                o(v, "calorieTargetResultElem");
                var B = function (e, t, n, r, o, l) {
                    "lbs" === t && (e /= 2.2046),
                        "in" === r && (n /= .3937);
                    var a = 10 * e + 6.25 * n - 5 * o + ("male" === l ? 5 : "female" === l ? -161 : -78);
                    return Math.round(a)
                }(s, f, d, y, g, b)
                    , I = function (e, t) {
                        var n = e + v.calorieModifiers[t];
                        return Math.round(n)
                    }(E(B, h), x);
                v.resultElem.textContent = "Consume ".concat(I, " kcal per day to achieve your weight goal"),
                    v.resultElem.style.color = "#a4c74d",
                    v.resultValue = I,
                    p(B),
                    e.preventDefault()
            }
            function p(e) {
                var n, o = 0, l = function (e, t) {
                    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!n) {
                        if (Array.isArray(e) || (n = y(e))) {
                            n && (e = n);
                            var r = 0
                                , o = function () { };
                            return {
                                s: o,
                                n: function () {
                                    return r >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[r++]
                                    }
                                },
                                e: function (e) {
                                    throw e
                                },
                                f: o
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var l, a = !0, u = !1;
                    return {
                        s: function () {
                            n = n.call(e)
                        },
                        n: function () {
                            var e = n.next();
                            return a = e.done,
                                e
                        },
                        e: function (e) {
                            u = !0,
                                l = e
                        },
                        f: function () {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u)
                                    throw l
                            }
                        }
                    }
                }(document.getElementById("multipliersDiv").getElementsByTagName("tbody")[0].children);
                try {
                    for (l.s(); !(n = l.n()).done;) {
                        var a = n.value
                            , u = a.getElementsByTagName("td")[0]
                            , i = a.getElementsByTagName("td")[2]
                            , c = {
                                maintain: a.getElementsByTagName("td")[2],
                                loseQuickly: a.getElementsByTagName("td")[3],
                                loseSlowly: a.getElementsByTagName("td")[4],
                                gainSlowly: a.getElementsByTagName("td")[5],
                                gainQuickly: a.getElementsByTagName("td")[6]
                            }
                            , m = E(e, Object.keys(v.activityMultipliers)[o]);
                        if (e) {
                            u.textContent = e,
                                i.textContent = m;
                            for (var s = 0, f = Object.entries(c); s < f.length; s++) {
                                var g = d(f[s], 2)
                                    , h = g[0]
                                    , p = g[1]
                                    , b = m + v.calorieModifiers[h];
                                p.textContent = b,
                                    v.resultValue && b === v.resultValue ? r(p) : t(p)
                            }

                        } else {
                            u.textContent = null,
                                i.textContent = null;
                            for (var x = 0, B = Object.values(c); x < B.length; x++) {
                                var I = B[x];
                                I.textContent = null,
                                    t(I)
                            }
                        }
                        o++
                    }
                } catch (e) {
                    l.e(e)
                } finally {
                    l.f()
                }
            }
            function b(t) {
                e(v),
                    p()
            }
            function E(e, t) {
                var n = v.activityMultipliers[t];
                return Math.round(e * n)
            }
            n(80),
                n(366),
                n(892),
                n(750),
                n(231),
                n(281),
                n(835),
                n(167),
                u.run(),
                v.run()
        }
        )()

}
)();

function show() {
    setTimeout(() => {
        document.getElementById("recipes_link").style.display = "block";
        document.getElementById("main").scrollIntoView()
    }, "600")
}

function hide() {
    document.getElementById("recipes_link").style.display = "none";
}


//# sourceMappingURL=bundleefe9f62f734aec96018b.js.map
