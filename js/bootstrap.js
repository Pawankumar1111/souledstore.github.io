if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
! function(t) { var e = jQuery.fn.jquery.split(" ")[0].split("."); if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0") }(),
function() {
    var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
        e = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) { return n && t(e.prototype, n), i && t(e, i), e }
        }();

    function n(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
    var i, o, r, s, a, l, h, c, u, d, f, _, g, p, m, v, E, y, T, I, C, A, D, S, w, b, N, O, k, P, L, j, R, H, W, x, M, Q, K, U, V, B, F, Y, G, X, z, q, Z, J, $, tt, et, nt, it, ot, rt, st, at, lt, ht, ct, ut, dt, ft, _t, gt, pt, mt, vt, Et, yt, Tt, It, Ct, At, Dt, St, wt, bt, Nt, Ot, kt, Pt, Lt, jt, Rt, Ht, Wt, xt, Mt, Qt, Kt, Ut, Vt, Bt, Ft, Yt, Gt, Xt, zt, qt, Zt, Jt, $t, te, ee, ne, ie, oe, re, se, ae, le, he, ce, ue, de, fe, _e, ge, pe, me, ve, Ee, ye, Te, Ie, Ce, Ae, De, Se, we, be, Ne, Oe, ke, Pe, Le, je, Re, He = function(t) {
            var e = !1,
                n = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };

            function i(e) {
                var n = this,
                    i = !1;
                return t(this).one(o.TRANSITION_END, function() { i = !0 }), setTimeout(function() { i || o.triggerTransitionEnd(n) }, e), this
            }
            var o = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function(t) { do { t += ~~(1e6 * Math.random()) } while (document.getElementById(t)); return t },
                getSelectorFromElement: function(t) { var e = t.getAttribute("data-target"); return e || (e = t.getAttribute("href") || "", e = /^#[a-z]/i.test(e) ? e : null), e },
                reflow: function(t) { return t.offsetHeight },
                triggerTransitionEnd: function(n) { t(n).trigger(e.end) },
                supportsTransitionEnd: function() { return Boolean(e) },
                typeCheckConfig: function(t, e, n) {
                    for (var i in n)
                        if (n.hasOwnProperty(i)) {
                            var o = n[i],
                                r = e[i],
                                s = r && ((l = r)[0] || l).nodeType ? "element" : (a = r, {}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase());
                            if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
                        }
                    var a, l
                }
            };
            return e = function() {
                if (window.QUnit) return !1;
                var t = document.createElement("bootstrap");
                for (var e in n)
                    if (void 0 !== t.style[e]) return { end: n[e] };
                return !1
            }(), t.fn.emulateTransitionEnd = i, o.supportsTransitionEnd() && (t.event.special[o.TRANSITION_END] = { bindType: e.end, delegateType: e.end, handle: function(e) { if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments) } }), o
        }(jQuery),
        We = (i = jQuery, o = "alert", s = "." + (r = "bs.alert"), a = i.fn[o], l = { CLOSE: "close" + s, CLOSED: "closed" + s, CLICK_DATA_API: "click" + s + ".data-api" }, h = "alert", c = "fade", u = "show", d = function() {
            function t(e) { n(this, t), this._element = e }
            return t.prototype.close = function(t) {
                t = t || this._element;
                var e = this._getRootElement(t);
                this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }, t.prototype.dispose = function() { i.removeData(this._element, r), this._element = null }, t.prototype._getRootElement = function(t) {
                var e = He.getSelectorFromElement(t),
                    n = !1;
                return e && (n = i(e)[0]), n || (n = i(t).closest("." + h)[0]), n
            }, t.prototype._triggerCloseEvent = function(t) { var e = i.Event(l.CLOSE); return i(t).trigger(e), e }, t.prototype._removeElement = function(t) {
                var e = this;
                i(t).removeClass(u), He.supportsTransitionEnd() && i(t).hasClass(c) ? i(t).one(He.TRANSITION_END, function(n) { return e._destroyElement(t, n) }).emulateTransitionEnd(150) : this._destroyElement(t)
            }, t.prototype._destroyElement = function(t) { i(t).detach().trigger(l.CLOSED).remove() }, t._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = i(this),
                        o = n.data(r);
                    o || (o = new t(this), n.data(r, o)), "close" === e && o[e](this)
                })
            }, t._handleDismiss = function(t) { return function(e) { e && e.preventDefault(), t.close(this) } }, e(t, null, [{ key: "VERSION", get: function() { return "4.0.0-alpha.6" } }]), t
        }(), i(document).on(l.CLICK_DATA_API, '[data-dismiss="alert"]', d._handleDismiss(new d)), i.fn[o] = d._jQueryInterface, i.fn[o].Constructor = d, i.fn[o].noConflict = function() { return i.fn[o] = a, d._jQueryInterface }, f = jQuery, _ = "button", p = "." + (g = "bs.button"), m = ".data-api", v = f.fn[_], E = "active", y = "btn", T = "focus", I = '[data-toggle^="button"]', C = '[data-toggle="buttons"]', A = "input", D = ".active", S = ".btn", w = { CLICK_DATA_API: "click" + p + m, FOCUS_BLUR_DATA_API: "focus" + p + m + " blur" + p + m }, b = function() {
            function t(e) { n(this, t), this._element = e }
            return t.prototype.toggle = function() {
                var t = !0,
                    e = f(this._element).closest(C)[0];
                if (e) {
                    var n = f(this._element).find(A)[0];
                    if (n) {
                        if ("radio" === n.type)
                            if (n.checked && f(this._element).hasClass(E)) t = !1;
                            else {
                                var i = f(e).find(D)[0];
                                i && f(i).removeClass(E)
                            }
                        t && (n.checked = !f(this._element).hasClass(E), f(n).trigger("change")), n.focus()
                    }
                }
                this._element.setAttribute("aria-pressed", !f(this._element).hasClass(E)), t && f(this._element).toggleClass(E)
            }, t.prototype.dispose = function() { f.removeData(this._element, g), this._element = null }, t._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = f(this).data(g);
                    n || (n = new t(this), f(this).data(g, n)), "toggle" === e && n[e]()
                })
            }, e(t, null, [{ key: "VERSION", get: function() { return "4.0.0-alpha.6" } }]), t
        }(), f(document).on(w.CLICK_DATA_API, I, function(t) {
            t.preventDefault();
            var e = t.target;
            f(e).hasClass(y) || (e = f(e).closest(S)), b._jQueryInterface.call(f(e), "toggle")
        }).on(w.FOCUS_BLUR_DATA_API, I, function(t) {
            var e = f(t.target).closest(S)[0];
            f(e).toggleClass(T, /^focus(in)?$/.test(t.type))
        }), f.fn[_] = b._jQueryInterface, f.fn[_].Constructor = b, f.fn[_].noConflict = function() { return f.fn[_] = v, b._jQueryInterface }, N = jQuery, O = "carousel", P = "." + (k = "bs.carousel"), L = ".data-api", j = N.fn[O], R = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 }, H = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" }, W = { NEXT: "next", PREV: "prev", LEFT: "left", RIGHT: "right" }, x = { SLIDE: "slide" + P, SLID: "slid" + P, KEYDOWN: "keydown" + P, MOUSEENTER: "mouseenter" + P, MOUSELEAVE: "mouseleave" + P, LOAD_DATA_API: "load" + P + L, CLICK_DATA_API: "click" + P + L }, M = "carousel", Q = "active", K = "slide", U = "carousel-item-right", V = "carousel-item-left", B = "carousel-item-next", F = "carousel-item-prev", Y = { ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", NEXT_PREV: ".carousel-item-next, .carousel-item-prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]' }, G = function() {
            function i(t, e) { n(this, i), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this._config = this._getConfig(e), this._element = N(t)[0], this._indicatorsElement = N(this._element).find(Y.INDICATORS)[0], this._addEventListeners() }
            return i.prototype.next = function() {
                if (this._isSliding) throw new Error("Carousel is sliding");
                this._slide(W.NEXT)
            }, i.prototype.nextWhenVisible = function() { document.hidden || this.next() }, i.prototype.prev = function() {
                if (this._isSliding) throw new Error("Carousel is sliding");
                this._slide(W.PREVIOUS)
            }, i.prototype.pause = function(t) { t || (this._isPaused = !0), N(this._element).find(Y.NEXT_PREV)[0] && He.supportsTransitionEnd() && (He.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null }, i.prototype.cycle = function(t) { t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)) }, i.prototype.to = function(t) {
                var e = this;
                this._activeElement = N(this._element).find(Y.ACTIVE_ITEM)[0];
                var n = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0))
                    if (this._isSliding) N(this._element).one(x.SLID, function() { return e.to(t) });
                    else {
                        if (n === t) return this.pause(), void this.cycle();
                        var i = t > n ? W.NEXT : W.PREVIOUS;
                        this._slide(i, this._items[t])
                    }
            }, i.prototype.dispose = function() { N(this._element).off(P), N.removeData(this._element, k), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null }, i.prototype._getConfig = function(t) { return t = N.extend({}, R, t), He.typeCheckConfig(O, t, H), t }, i.prototype._addEventListeners = function() {
                var t = this;
                this._config.keyboard && N(this._element).on(x.KEYDOWN, function(e) { return t._keydown(e) }), "hover" !== this._config.pause || "ontouchstart" in document.documentElement || N(this._element).on(x.MOUSEENTER, function(e) { return t.pause(e) }).on(x.MOUSELEAVE, function(e) { return t.cycle(e) })
            }, i.prototype._keydown = function(t) {
                if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                    case 37:
                        t.preventDefault(), this.prev();
                        break;
                    case 39:
                        t.preventDefault(), this.next();
                        break;
                    default:
                        return
                }
            }, i.prototype._getItemIndex = function(t) { return this._items = N.makeArray(N(t).parent().find(Y.ITEM)), this._items.indexOf(t) }, i.prototype._getItemByDirection = function(t, e) {
                var n = t === W.NEXT,
                    i = t === W.PREVIOUS,
                    o = this._getItemIndex(e),
                    r = this._items.length - 1;
                if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;
                var s = (o + (t === W.PREVIOUS ? -1 : 1)) % this._items.length;
                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
            }, i.prototype._triggerSlideEvent = function(t, e) { var n = N.Event(x.SLIDE, { relatedTarget: t, direction: e }); return N(this._element).trigger(n), n }, i.prototype._setActiveIndicatorElement = function(t) {
                if (this._indicatorsElement) {
                    N(this._indicatorsElement).find(Y.ACTIVE).removeClass(Q);
                    var e = this._indicatorsElement.children[this._getItemIndex(t)];
                    e && N(e).addClass(Q)
                }
            }, i.prototype._slide = function(t, e) {
                var n = this,
                    i = N(this._element).find(Y.ACTIVE_ITEM)[0],
                    o = e || i && this._getItemByDirection(t, i),
                    r = Boolean(this._interval),
                    s = void 0,
                    a = void 0,
                    l = void 0;
                if (t === W.NEXT ? (s = V, a = B, l = W.LEFT) : (s = U, a = F, l = W.RIGHT), o && N(o).hasClass(Q)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(o, l).isDefaultPrevented() && i && o) {
                    this._isSliding = !0, r && this.pause(), this._setActiveIndicatorElement(o);
                    var h = N.Event(x.SLID, { relatedTarget: o, direction: l });
                    He.supportsTransitionEnd() && N(this._element).hasClass(K) ? (N(o).addClass(a), He.reflow(o), N(i).addClass(s), N(o).addClass(s), N(i).one(He.TRANSITION_END, function() { N(o).removeClass(s + " " + a).addClass(Q), N(i).removeClass(Q + " " + a + " " + s), n._isSliding = !1, setTimeout(function() { return N(n._element).trigger(h) }, 0) }).emulateTransitionEnd(600)) : (N(i).removeClass(Q), N(o).addClass(Q), this._isSliding = !1, N(this._element).trigger(h)), r && this.cycle()
                }
            }, i._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = N(this).data(k),
                        o = N.extend({}, R, N(this).data());
                    "object" === (void 0 === e ? "undefined" : t(e)) && N.extend(o, e);
                    var r = "string" == typeof e ? e : o.slide;
                    if (n || (n = new i(this, o), N(this).data(k, n)), "number" == typeof e) n.to(e);
                    else if ("string" == typeof r) {
                        if (void 0 === n[r]) throw new Error('No method named "' + r + '"');
                        n[r]()
                    } else o.interval && (n.pause(), n.cycle())
                })
            }, i._dataApiClickHandler = function(t) {
                var e = He.getSelectorFromElement(this);
                if (e) {
                    var n = N(e)[0];
                    if (n && N(n).hasClass(M)) {
                        var o = N.extend({}, N(n).data(), N(this).data()),
                            r = this.getAttribute("data-slide-to");
                        r && (o.interval = !1), i._jQueryInterface.call(N(n), o), r && N(n).data(k).to(r), t.preventDefault()
                    }
                }
            }, e(i, null, [{ key: "VERSION", get: function() { return "4.0.0-alpha.6" } }, { key: "Default", get: function() { return R } }]), i
        }(), N(document).on(x.CLICK_DATA_API, Y.DATA_SLIDE, G._dataApiClickHandler), N(window).on(x.LOAD_DATA_API, function() {
            N(Y.DATA_RIDE).each(function() {
                var t = N(this);
                G._jQueryInterface.call(t, t.data())
            })
        }), N.fn[O] = G._jQueryInterface, N.fn[O].Constructor = G, N.fn[O].noConflict = function() { return N.fn[O] = j, G._jQueryInterface }, X = jQuery, z = "collapse", Z = "." + (q = "bs.collapse"), J = X.fn[z], $ = { toggle: !0, parent: "" }, tt = { toggle: "boolean", parent: "string" }, et = { SHOW: "show" + Z, SHOWN: "shown" + Z, HIDE: "hide" + Z, HIDDEN: "hidden" + Z, CLICK_DATA_API: "click" + Z + ".data-api" }, nt = "show", it = "collapse", ot = "collapsing", rt = "collapsed", st = "width", at = "height", lt = ".card > .show, .card > .collapsing", ht = '[data-toggle="collapse"]', ct = function() {
            function i(t, e) { n(this, i), this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = X.makeArray(X('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]')), this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle() }
            return i.prototype.toggle = function() { X(this._element).hasClass(nt) ? this.hide() : this.show() }, i.prototype.show = function() {
                var t = this;
                if (this._isTransitioning) throw new Error("Collapse is transitioning");
                if (!X(this._element).hasClass(nt)) {
                    var e = void 0,
                        n = void 0;
                    if (this._parent && ((e = X.makeArray(X(this._parent).find(lt))).length || (e = null)), !(e && (n = X(e).data(q)) && n._isTransitioning)) {
                        var o = X.Event(et.SHOW);
                        if (X(this._element).trigger(o), !o.isDefaultPrevented()) {
                            e && (i._jQueryInterface.call(X(e), "hide"), n || X(e).data(q, null));
                            var r = this._getDimension();
                            X(this._element).removeClass(it).addClass(ot), this._element.style[r] = 0, this._element.setAttribute("aria-expanded", !0), this._triggerArray.length && X(this._triggerArray).removeClass(rt).attr("aria-expanded", !0), this.setTransitioning(!0);
                            var s = function() { X(t._element).removeClass(ot).addClass(it).addClass(nt), t._element.style[r] = "", t.setTransitioning(!1), X(t._element).trigger(et.SHOWN) };
                            if (He.supportsTransitionEnd()) {
                                var a = "scroll" + (r[0].toUpperCase() + r.slice(1));
                                X(this._element).one(He.TRANSITION_END, s).emulateTransitionEnd(600), this._element.style[r] = this._element[a] + "px"
                            } else s()
                        }
                    }
                }
            }, i.prototype.hide = function() {
                var t = this;
                if (this._isTransitioning) throw new Error("Collapse is transitioning");
                if (X(this._element).hasClass(nt)) {
                    var e = X.Event(et.HIDE);
                    if (X(this._element).trigger(e), !e.isDefaultPrevented()) {
                        var n = this._getDimension(),
                            i = n === st ? "offsetWidth" : "offsetHeight";
                        this._element.style[n] = this._element[i] + "px", He.reflow(this._element), X(this._element).addClass(ot).removeClass(it).removeClass(nt), this._element.setAttribute("aria-expanded", !1), this._triggerArray.length && X(this._triggerArray).addClass(rt).attr("aria-expanded", !1), this.setTransitioning(!0);
                        var o = function() { t.setTransitioning(!1), X(t._element).removeClass(ot).addClass(it).trigger(et.HIDDEN) };
                        this._element.style[n] = "", He.supportsTransitionEnd() ? X(this._element).one(He.TRANSITION_END, o).emulateTransitionEnd(600) : o()
                    }
                }
            }, i.prototype.setTransitioning = function(t) { this._isTransitioning = t }, i.prototype.dispose = function() { X.removeData(this._element, q), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null }, i.prototype._getConfig = function(t) { return (t = X.extend({}, $, t)).toggle = Boolean(t.toggle), He.typeCheckConfig(z, t, tt), t }, i.prototype._getDimension = function() { return X(this._element).hasClass(st) ? st : at }, i.prototype._getParent = function() {
                var t = this,
                    e = X(this._config.parent)[0],
                    n = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                return X(e).find(n).each(function(e, n) { t._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n]) }), e
            }, i.prototype._addAriaAndCollapsedClass = function(t, e) {
                if (t) {
                    var n = X(t).hasClass(nt);
                    t.setAttribute("aria-expanded", n), e.length && X(e).toggleClass(rt, !n).attr("aria-expanded", n)
                }
            }, i._getTargetFromElement = function(t) { var e = He.getSelectorFromElement(t); return e ? X(e)[0] : null }, i._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = X(this),
                        o = n.data(q),
                        r = X.extend({}, $, n.data(), "object" === (void 0 === e ? "undefined" : t(e)) && e);
                    if (!o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || (o = new i(this, r), n.data(q, o)), "string" == typeof e) {
                        if (void 0 === o[e]) throw new Error('No method named "' + e + '"');
                        o[e]()
                    }
                })
            }, e(i, null, [{ key: "VERSION", get: function() { return "4.0.0-alpha.6" } }, { key: "Default", get: function() { return $ } }]), i
        }(), X(document).on(et.CLICK_DATA_API, ht, function(t) {
            t.preventDefault();
            var e = ct._getTargetFromElement(this),
                n = X(e).data(q) ? "toggle" : X(this).data();
            ct._jQueryInterface.call(X(e), n)
        }), X.fn[z] = ct._jQueryInterface, X.fn[z].Constructor = ct, X.fn[z].noConflict = function() { return X.fn[z] = J, ct._jQueryInterface }, ut = jQuery, dt = "dropdown", _t = "." + (ft = "bs.dropdown"), gt = ".data-api", pt = ut.fn[dt], mt = { HIDE: "hide" + _t, HIDDEN: "hidden" + _t, SHOW: "show" + _t, SHOWN: "shown" + _t, CLICK: "click" + _t, CLICK_DATA_API: "click" + _t + gt, FOCUSIN_DATA_API: "focusin" + _t + gt, KEYDOWN_DATA_API: "keydown" + _t + gt }, vt = "dropdown-backdrop", Et = "disabled", yt = "show", Tt = ".dropdown-backdrop", It = '[data-toggle="dropdown"]', Ct = ".dropdown form", At = '[role="menu"]', Dt = '[role="listbox"]', St = ".navbar-nav", wt = '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a', bt = function() {
            function t(e) { n(this, t), this._element = e, this._addEventListeners() }
            return t.prototype.toggle = function() {
                if (this.disabled || ut(this).hasClass(Et)) return !1;
                var e = t._getParentFromElement(this),
                    n = ut(e).hasClass(yt);
                if (t._clearMenus(), n) return !1;
                if ("ontouchstart" in document.documentElement && !ut(e).closest(St).length) {
                    var i = document.createElement("div");
                    i.className = vt, ut(i).insertBefore(this), ut(i).on("click", t._clearMenus)
                }
                var o = { relatedTarget: this },
                    r = ut.Event(mt.SHOW, o);
                return ut(e).trigger(r), !r.isDefaultPrevented() && (this.focus(), this.setAttribute("aria-expanded", !0), ut(e).toggleClass(yt), ut(e).trigger(ut.Event(mt.SHOWN, o)), !1)
            }, t.prototype.dispose = function() { ut.removeData(this._element, ft), ut(this._element).off(_t), this._element = null }, t.prototype._addEventListeners = function() { ut(this._element).on(mt.CLICK, this.toggle) }, t._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = ut(this).data(ft);
                    if (n || (n = new t(this), ut(this).data(ft, n)), "string" == typeof e) {
                        if (void 0 === n[e]) throw new Error('No method named "' + e + '"');
                        n[e].call(this)
                    }
                })
            }, t._clearMenus = function(e) {
                if (!e || 3 !== e.which) {
                    var n = ut(Tt)[0];
                    n && n.parentNode.removeChild(n);
                    for (var i = ut.makeArray(ut(It)), o = 0; o < i.length; o++) {
                        var r = t._getParentFromElement(i[o]),
                            s = { relatedTarget: i[o] };
                        if (ut(r).hasClass(yt) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "focusin" === e.type) && ut.contains(r, e.target))) {
                            var a = ut.Event(mt.HIDE, s);
                            ut(r).trigger(a), a.isDefaultPrevented() || (i[o].setAttribute("aria-expanded", "false"), ut(r).removeClass(yt).trigger(ut.Event(mt.HIDDEN, s)))
                        }
                    }
                }
            }, t._getParentFromElement = function(t) {
                var e = void 0,
                    n = He.getSelectorFromElement(t);
                return n && (e = ut(n)[0]), e || t.parentNode
            }, t._dataApiKeydownHandler = function(e) {
                if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !ut(this).hasClass(Et))) {
                    var n = t._getParentFromElement(this),
                        i = ut(n).hasClass(yt);
                    if (!i && 27 !== e.which || i && 27 === e.which) {
                        if (27 === e.which) {
                            var o = ut(n).find(It)[0];
                            ut(o).trigger("focus")
                        }
                        ut(this).trigger("click")
                    } else {
                        var r = ut(n).find(wt).get();
                        if (r.length) {
                            var s = r.indexOf(e.target);
                            38 === e.which && s > 0 && s--, 40 === e.which && s < r.length - 1 && s++, s < 0 && (s = 0), r[s].focus()
                        }
                    }
                }
            }, e(t, null, [{ key: "VERSION", get: function() { return "4.0.0-alpha.6" } }]), t
        }(), ut(document).on(mt.KEYDOWN_DATA_API, It, bt._dataApiKeydownHandler).on(mt.KEYDOWN_DATA_API, At, bt._dataApiKeydownHandler).on(mt.KEYDOWN_DATA_API, Dt, bt._dataApiKeydownHandler).on(mt.CLICK_DATA_API + " " + mt.FOCUSIN_DATA_API, bt._clearMenus).on(mt.CLICK_DATA_API, It, bt.prototype.toggle).on(mt.CLICK_DATA_API, Ct, function(t) { t.stopPropagation() }), ut.fn[dt] = bt._jQueryInterface, ut.fn[dt].Constructor = bt, ut.fn[dt].noConflict = function() { return ut.fn[dt] = pt, bt._jQueryInterface }, Nt = jQuery, Ot = "modal", Pt = "." + (kt = "bs.modal"), Lt = Nt.fn[Ot], jt = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }, Rt = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" }, Ht = { HIDE: "hide" + Pt, HIDDEN: "hidden" + Pt, SHOW: "show" + Pt, SHOWN: "shown" + Pt, FOCUSIN: "focusin" + Pt, RESIZE: "resize" + Pt, CLICK_DISMISS: "click.dismiss" + Pt, KEYDOWN_DISMISS: "keydown.dismiss" + Pt, MOUSEUP_DISMISS: "mouseup.dismiss" + Pt, MOUSEDOWN_DISMISS: "mousedown.dismiss" + Pt, CLICK_DATA_API: "click" + Pt + ".data-api" }, Wt = "modal-scrollbar-measure", xt = "modal-backdrop", Mt = "modal-open", Qt = "fade", Kt = "show", Ut = { DIALOG: ".modal-dialog", DATA_TOGGLE: '[data-toggle="modal"]', DATA_DISMISS: '[data-dismiss="modal"]', FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top" }, Vt = function() {
            function i(t, e) { n(this, i), this._config = this._getConfig(e), this._element = t, this._dialog = Nt(t).find(Ut.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0 }
            return i.prototype.toggle = function(t) { return this._isShown ? this.hide() : this.show(t) }, i.prototype.show = function(t) {
                var e = this;
                if (this._isTransitioning) throw new Error("Modal is transitioning");
                He.supportsTransitionEnd() && Nt(this._element).hasClass(Qt) && (this._isTransitioning = !0);
                var n = Nt.Event(Ht.SHOW, { relatedTarget: t });
                Nt(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), Nt(document.body).addClass(Mt), this._setEscapeEvent(), this._setResizeEvent(), Nt(this._element).on(Ht.CLICK_DISMISS, Ut.DATA_DISMISS, function(t) { return e.hide(t) }), Nt(this._dialog).on(Ht.MOUSEDOWN_DISMISS, function() { Nt(e._element).one(Ht.MOUSEUP_DISMISS, function(t) { Nt(t.target).is(e._element) && (e._ignoreBackdropClick = !0) }) }), this._showBackdrop(function() { return e._showElement(t) }))
            }, i.prototype.hide = function(t) {
                var e = this;
                if (t && t.preventDefault(), this._isTransitioning) throw new Error("Modal is transitioning");
                var n = He.supportsTransitionEnd() && Nt(this._element).hasClass(Qt);
                n && (this._isTransitioning = !0);
                var i = Nt.Event(Ht.HIDE);
                Nt(this._element).trigger(i), this._isShown && !i.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), Nt(document).off(Ht.FOCUSIN), Nt(this._element).removeClass(Kt), Nt(this._element).off(Ht.CLICK_DISMISS), Nt(this._dialog).off(Ht.MOUSEDOWN_DISMISS), n ? Nt(this._element).one(He.TRANSITION_END, function(t) { return e._hideModal(t) }).emulateTransitionEnd(300) : this._hideModal())
            }, i.prototype.dispose = function() { Nt.removeData(this._element, kt), Nt(window, document, this._element, this._backdrop).off(Pt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._originalBodyPadding = null, this._scrollbarWidth = null }, i.prototype._getConfig = function(t) { return t = Nt.extend({}, jt, t), He.typeCheckConfig(Ot, t, Rt), t }, i.prototype._showElement = function(t) {
                var e = this,
                    n = He.supportsTransitionEnd() && Nt(this._element).hasClass(Qt);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && He.reflow(this._element), Nt(this._element).addClass(Kt), this._config.focus && this._enforceFocus();
                var i = Nt.Event(Ht.SHOWN, { relatedTarget: t }),
                    o = function() { e._config.focus && e._element.focus(), e._isTransitioning = !1, Nt(e._element).trigger(i) };
                n ? Nt(this._dialog).one(He.TRANSITION_END, o).emulateTransitionEnd(300) : o()
            }, i.prototype._enforceFocus = function() {
                var t = this;
                Nt(document).off(Ht.FOCUSIN).on(Ht.FOCUSIN, function(e) { document === e.target || t._element === e.target || Nt(t._element).has(e.target).length || t._element.focus() })
            }, i.prototype._setEscapeEvent = function() {
                var t = this;
                this._isShown && this._config.keyboard ? Nt(this._element).on(Ht.KEYDOWN_DISMISS, function(e) { 27 === e.which && t.hide() }) : this._isShown || Nt(this._element).off(Ht.KEYDOWN_DISMISS)
            }, i.prototype._setResizeEvent = function() {
                var t = this;
                this._isShown ? Nt(window).on(Ht.RESIZE, function(e) { return t._handleUpdate(e) }) : Nt(window).off(Ht.RESIZE)
            }, i.prototype._hideModal = function() {
                var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", "true"), this._isTransitioning = !1, this._showBackdrop(function() { Nt(document.body).removeClass(Mt), t._resetAdjustments(), t._resetScrollbar(), Nt(t._element).trigger(Ht.HIDDEN) })
            }, i.prototype._removeBackdrop = function() { this._backdrop && (Nt(this._backdrop).remove(), this._backdrop = null) }, i.prototype._showBackdrop = function(t) {
                var e = this,
                    n = Nt(this._element).hasClass(Qt) ? Qt : "";
                if (this._isShown && this._config.backdrop) {
                    var i = He.supportsTransitionEnd() && n;
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = xt, n && Nt(this._backdrop).addClass(n), Nt(this._backdrop).appendTo(document.body), Nt(this._element).on(Ht.CLICK_DISMISS, function(t) { e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide()) }), i && He.reflow(this._backdrop), Nt(this._backdrop).addClass(Kt), !t) return;
                    if (!i) return void t();
                    Nt(this._backdrop).one(He.TRANSITION_END, t).emulateTransitionEnd(150)
                } else if (!this._isShown && this._backdrop) {
                    Nt(this._backdrop).removeClass(Kt);
                    var o = function() { e._removeBackdrop(), t && t() };
                    He.supportsTransitionEnd() && Nt(this._element).hasClass(Qt) ? Nt(this._backdrop).one(He.TRANSITION_END, o).emulateTransitionEnd(150) : o()
                } else t && t()
            }, i.prototype._handleUpdate = function() { this._adjustDialog() }, i.prototype._adjustDialog = function() { var t = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px") }, i.prototype._resetAdjustments = function() { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" }, i.prototype._checkScrollbar = function() { this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth() }, i.prototype._setScrollbar = function() {
                var t = parseInt(Nt(Ut.FIXED_CONTENT).css("padding-right") || 0, 10);
                this._originalBodyPadding = document.body.style.paddingRight || "", this._isBodyOverflowing && (document.body.style.paddingRight = t + this._scrollbarWidth + "px")
            }, i.prototype._resetScrollbar = function() { document.body.style.paddingRight = this._originalBodyPadding }, i.prototype._getScrollbarWidth = function() {
                var t = document.createElement("div");
                t.className = Wt, document.body.appendChild(t);
                var e = t.offsetWidth - t.clientWidth;
                return document.body.removeChild(t), e
            }, i._jQueryInterface = function(e, n) {
                return this.each(function() {
                    var o = Nt(this).data(kt),
                        r = Nt.extend({}, i.Default, Nt(this).data(), "object" === (void 0 === e ? "undefined" : t(e)) && e);
                    if (o || (o = new i(this, r), Nt(this).data(kt, o)), "string" == typeof e) {
                        if (void 0 === o[e]) throw new Error('No method named "' + e + '"');
                        o[e](n)
                    } else r.show && o.show(n)
                })
            }, e(i, null, [{ key: "VERSION", get: function() { return "4.0.0-alpha.6" } }, { key: "Default", get: function() { return jt } }]), i
        }(), Nt(document).on(Ht.CLICK_DATA_API, Ut.DATA_TOGGLE, function(t) {
            var e = this,
                n = void 0,
                i = He.getSelectorFromElement(this);
            i && (n = Nt(i)[0]);
            var o = Nt(n).data(kt) ? "toggle" : Nt.extend({}, Nt(n).data(), Nt(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
            var r = Nt(n).one(Ht.SHOW, function(t) { t.isDefaultPrevented() || r.one(Ht.HIDDEN, function() { Nt(e).is(":visible") && e.focus() }) });
            Vt._jQueryInterface.call(Nt(n), o, this)
        }), Nt.fn[Ot] = Vt._jQueryInterface, Nt.fn[Ot].Constructor = Vt, Nt.fn[Ot].noConflict = function() { return Nt.fn[Ot] = Lt, Vt._jQueryInterface }, Bt = jQuery, Ft = "scrollspy", Gt = "." + (Yt = "bs.scrollspy"), Xt = Bt.fn[Ft], zt = { offset: 10, method: "auto", target: "" }, qt = { offset: "number", method: "string", target: "(string|element)" }, Zt = { ACTIVATE: "activate" + Gt, SCROLL: "scroll" + Gt, LOAD_DATA_API: "load" + Gt + ".data-api" }, Jt = "dropdown-item", $t = "active", te = { DATA_SPY: '[data-spy="scroll"]', ACTIVE: ".active", LIST_ITEM: ".list-item", LI: "li", LI_DROPDOWN: "li.dropdown", NAV_LINKS: ".nav-link", DROPDOWN: ".dropdown", DROPDOWN_ITEMS: ".dropdown-item", DROPDOWN_TOGGLE: ".dropdown-toggle" }, ee = "offset", ne = "position", ie = function() {
            function i(t, e) {
                var o = this;
                n(this, i), this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + te.NAV_LINKS + "," + this._config.target + " " + te.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, Bt(this._scrollElement).on(Zt.SCROLL, function(t) { return o._process(t) }), this.refresh(), this._process()
            }
            return i.prototype.refresh = function() {
                var t = this,
                    e = this._scrollElement !== this._scrollElement.window ? ne : ee,
                    n = "auto" === this._config.method ? e : this._config.method,
                    i = n === ne ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), Bt.makeArray(Bt(this._selector)).map(function(t) {
                    var e = void 0,
                        o = He.getSelectorFromElement(t);
                    return o && (e = Bt(o)[0]), e && (e.offsetWidth || e.offsetHeight) ? [Bt(e)[n]().top + i, o] : null
                }).filter(function(t) { return t }).sort(function(t, e) { return t[0] - e[0] }).forEach(function(e) { t._offsets.push(e[0]), t._targets.push(e[1]) })
            }, i.prototype.dispose = function() { Bt.removeData(this._element, Yt), Bt(this._scrollElement).off(Gt), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null }, i.prototype._getConfig = function(t) {
                if ("string" != typeof(t = Bt.extend({}, zt, t)).target) {
                    var e = Bt(t.target).attr("id");
                    e || (e = He.getUID(Ft), Bt(t.target).attr("id", e)), t.target = "#" + e
                }
                return He.typeCheckConfig(Ft, t, qt), t
            }, i.prototype._getScrollTop = function() { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop }, i.prototype._getScrollHeight = function() { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }, i.prototype._getOffsetHeight = function() { return this._scrollElement === window ? window.innerHeight : this._scrollElement.offsetHeight }, i.prototype._process = function() {
                var t = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), t >= n) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else { if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear(); for (var o = this._offsets.length; o--;) { this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]) } }
            }, i.prototype._activate = function(t) {
                this._activeTarget = t, this._clear();
                var e = this._selector.split(",");
                e = e.map(function(e) { return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]' });
                var n = Bt(e.join(","));
                n.hasClass(Jt) ? (n.closest(te.DROPDOWN).find(te.DROPDOWN_TOGGLE).addClass($t), n.addClass($t)) : n.parents(te.LI).find("> " + te.NAV_LINKS).addClass($t), Bt(this._scrollElement).trigger(Zt.ACTIVATE, { relatedTarget: t })
            }, i.prototype._clear = function() { Bt(this._selector).filter(te.ACTIVE).removeClass($t) }, i._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = Bt(this).data(Yt),
                        o = "object" === (void 0 === e ? "undefined" : t(e)) && e;
                    if (n || (n = new i(this, o), Bt(this).data(Yt, n)), "string" == typeof e) {
                        if (void 0 === n[e]) throw new Error('No method named "' + e + '"');
                        n[e]()
                    }
                })
            }, e(i, null, [{ key: "VERSION", get: function() { return "4.0.0-alpha.6" } }, { key: "Default", get: function() { return zt } }]), i
        }(), Bt(window).on(Zt.LOAD_DATA_API, function() {
            for (var t = Bt.makeArray(Bt(te.DATA_SPY)), e = t.length; e--;) {
                var n = Bt(t[e]);
                ie._jQueryInterface.call(n, n.data())
            }
        }), Bt.fn[Ft] = ie._jQueryInterface, Bt.fn[Ft].Constructor = ie, Bt.fn[Ft].noConflict = function() { return Bt.fn[Ft] = Xt, ie._jQueryInterface }, oe = jQuery, se = "." + (re = "bs.tab"), ae = oe.fn.tab, le = { HIDE: "hide" + se, HIDDEN: "hidden" + se, SHOW: "show" + se, SHOWN: "shown" + se, CLICK_DATA_API: "click" + se + ".data-api" }, he = "dropdown-menu", ce = "active", ue = "disabled", de = "fade", fe = "show", _e = ".dropdown", ge = "ul:not(.dropdown-menu), ol:not(.dropdown-menu), nav:not(.dropdown-menu)", pe = "> .nav-item .fade, > .fade", me = ".active", ve = "> .nav-item > .active, > .active", Ee = '[data-toggle="tab"], [data-toggle="pill"]', ye = ".dropdown-toggle", Te = "> .dropdown-menu .active", Ie = function() {
            function t(e) { n(this, t), this._element = e }
            return t.prototype.show = function() {
                var t = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && oe(this._element).hasClass(ce) || oe(this._element).hasClass(ue))) {
                    var e = void 0,
                        n = void 0,
                        i = oe(this._element).closest(ge)[0],
                        o = He.getSelectorFromElement(this._element);
                    i && (n = (n = oe.makeArray(oe(i).find(me)))[n.length - 1]);
                    var r = oe.Event(le.HIDE, { relatedTarget: this._element }),
                        s = oe.Event(le.SHOW, { relatedTarget: n });
                    if (n && oe(n).trigger(r), oe(this._element).trigger(s), !s.isDefaultPrevented() && !r.isDefaultPrevented()) {
                        o && (e = oe(o)[0]), this._activate(this._element, i);
                        var a = function() {
                            var e = oe.Event(le.HIDDEN, { relatedTarget: t._element }),
                                i = oe.Event(le.SHOWN, { relatedTarget: n });
                            oe(n).trigger(e), oe(t._element).trigger(i)
                        };
                        e ? this._activate(e, e.parentNode, a) : a()
                    }
                }
            }, t.prototype.dispose = function() { oe.removeClass(this._element, re), this._element = null }, t.prototype._activate = function(t, e, n) {
                var i = this,
                    o = oe(e).find(ve)[0],
                    r = n && He.supportsTransitionEnd() && (o && oe(o).hasClass(de) || Boolean(oe(e).find(pe)[0])),
                    s = function() { return i._transitionComplete(t, o, r, n) };
                o && r ? oe(o).one(He.TRANSITION_END, s).emulateTransitionEnd(150) : s(), o && oe(o).removeClass(fe)
            }, t.prototype._transitionComplete = function(t, e, n, i) {
                if (e) {
                    oe(e).removeClass(ce);
                    var o = oe(e.parentNode).find(Te)[0];
                    o && oe(o).removeClass(ce), e.setAttribute("aria-expanded", !1)
                }
                if (oe(t).addClass(ce), t.setAttribute("aria-expanded", !0), n ? (He.reflow(t), oe(t).addClass(fe)) : oe(t).removeClass(de), t.parentNode && oe(t.parentNode).hasClass(he)) {
                    var r = oe(t).closest(_e)[0];
                    r && oe(r).find(ye).addClass(ce), t.setAttribute("aria-expanded", !0)
                }
                i && i()
            }, t._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = oe(this),
                        i = n.data(re);
                    if (i || (i = new t(this), n.data(re, i)), "string" == typeof e) {
                        if (void 0 === i[e]) throw new Error('No method named "' + e + '"');
                        i[e]()
                    }
                })
            }, e(t, null, [{ key: "VERSION", get: function() { return "4.0.0-alpha.6" } }]), t
        }(), oe(document).on(le.CLICK_DATA_API, Ee, function(t) { t.preventDefault(), Ie._jQueryInterface.call(oe(this), "show") }), oe.fn.tab = Ie._jQueryInterface, oe.fn.tab.Constructor = Ie, oe.fn.tab.noConflict = function() { return oe.fn.tab = ae, Ie._jQueryInterface }, function(i) {
            if ("undefined" == typeof Tether) throw new Error("Bootstrap tooltips require Tether (http://tether.io/)");
            var o = "tooltip",
                r = "bs.tooltip",
                s = "." + r,
                a = i.fn[o],
                l = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: "0 0", constraints: [], container: !1 },
                h = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "string", constraints: "array", container: "(string|element|boolean)" },
                c = { TOP: "bottom center", RIGHT: "middle left", BOTTOM: "top center", LEFT: "middle right" },
                u = "show",
                d = "out",
                f = { HIDE: "hide" + s, HIDDEN: "hidden" + s, SHOW: "show" + s, SHOWN: "shown" + s, INSERTED: "inserted" + s, CLICK: "click" + s, FOCUSIN: "focusin" + s, FOCUSOUT: "focusout" + s, MOUSEENTER: "mouseenter" + s, MOUSELEAVE: "mouseleave" + s },
                _ = "fade",
                g = "show",
                p = ".tooltip-inner",
                m = { element: !1, enabled: !1 },
                v = "hover",
                E = "focus",
                y = "click",
                T = "manual",
                I = function() {
                    function a(t, e) { n(this, a), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._isTransitioning = !1, this._tether = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners() }
                    return a.prototype.enable = function() { this._isEnabled = !0 }, a.prototype.disable = function() { this._isEnabled = !1 }, a.prototype.toggleEnabled = function() { this._isEnabled = !this._isEnabled }, a.prototype.toggle = function(t) {
                        if (t) {
                            var e = this.constructor.DATA_KEY,
                                n = i(t.currentTarget).data(e);
                            n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), i(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                        } else {
                            if (i(this.getTipElement()).hasClass(g)) return void this._leave(null, this);
                            this._enter(null, this)
                        }
                    }, a.prototype.dispose = function() { clearTimeout(this._timeout), this.cleanupTether(), i.removeData(this.element, this.constructor.DATA_KEY), i(this.element).off(this.constructor.EVENT_KEY), i(this.element).closest(".modal").off("hide.bs.modal"), this.tip && i(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._tether = null, this.element = null, this.config = null, this.tip = null }, a.prototype.show = function() {
                        var t = this;
                        if ("none" === i(this.element).css("display")) throw new Error("Please use show on visible elements");
                        var e = i.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                            if (this._isTransitioning) throw new Error("Tooltip is transitioning");
                            i(this.element).trigger(e);
                            var n = i.contains(this.element.ownerDocument.documentElement, this.element);
                            if (e.isDefaultPrevented() || !n) return;
                            var o = this.getTipElement(),
                                r = He.getUID(this.constructor.NAME);
                            o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && i(o).addClass(_);
                            var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                                l = this._getAttachment(s),
                                h = !1 === this.config.container ? document.body : i(this.config.container);
                            i(o).data(this.constructor.DATA_KEY, this).appendTo(h), i(this.element).trigger(this.constructor.Event.INSERTED), this._tether = new Tether({ attachment: l, element: o, target: this.element, classes: m, classPrefix: "bs-tether", offset: this.config.offset, constraints: this.config.constraints, addTargetClasses: !1 }), He.reflow(o), this._tether.position(), i(o).addClass(g);
                            var c = function() {
                                var e = t._hoverState;
                                t._hoverState = null, t._isTransitioning = !1, i(t.element).trigger(t.constructor.Event.SHOWN), e === d && t._leave(null, t)
                            };
                            if (He.supportsTransitionEnd() && i(this.tip).hasClass(_)) return this._isTransitioning = !0, void i(this.tip).one(He.TRANSITION_END, c).emulateTransitionEnd(a._TRANSITION_DURATION);
                            c()
                        }
                    }, a.prototype.hide = function(t) {
                        var e = this,
                            n = this.getTipElement(),
                            o = i.Event(this.constructor.Event.HIDE);
                        if (this._isTransitioning) throw new Error("Tooltip is transitioning");
                        var r = function() { e._hoverState !== u && n.parentNode && n.parentNode.removeChild(n), e.element.removeAttribute("aria-describedby"), i(e.element).trigger(e.constructor.Event.HIDDEN), e._isTransitioning = !1, e.cleanupTether(), t && t() };
                        i(this.element).trigger(o), o.isDefaultPrevented() || (i(n).removeClass(g), this._activeTrigger[y] = !1, this._activeTrigger[E] = !1, this._activeTrigger[v] = !1, He.supportsTransitionEnd() && i(this.tip).hasClass(_) ? (this._isTransitioning = !0, i(n).one(He.TRANSITION_END, r).emulateTransitionEnd(150)) : r(), this._hoverState = "")
                    }, a.prototype.isWithContent = function() { return Boolean(this.getTitle()) }, a.prototype.getTipElement = function() { return this.tip = this.tip || i(this.config.template)[0] }, a.prototype.setContent = function() {
                        var t = i(this.getTipElement());
                        this.setElementContent(t.find(p), this.getTitle()), t.removeClass(_ + " " + g), this.cleanupTether()
                    }, a.prototype.setElementContent = function(e, n) { var o = this.config.html; "object" === (void 0 === n ? "undefined" : t(n)) && (n.nodeType || n.jquery) ? o ? i(n).parent().is(e) || e.empty().append(n) : e.text(i(n).text()): e[o ? "html" : "text"](n) }, a.prototype.getTitle = function() { var t = this.element.getAttribute("data-original-title"); return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t }, a.prototype.cleanupTether = function() { this._tether && this._tether.destroy() }, a.prototype._getAttachment = function(t) { return c[t.toUpperCase()] }, a.prototype._setListeners = function() {
                        var t = this;
                        this.config.trigger.split(" ").forEach(function(e) {
                            if ("click" === e) i(t.element).on(t.constructor.Event.CLICK, t.config.selector, function(e) { return t.toggle(e) });
                            else if (e !== T) {
                                var n = e === v ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                                    o = e === v ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                                i(t.element).on(n, t.config.selector, function(e) { return t._enter(e) }).on(o, t.config.selector, function(e) { return t._leave(e) })
                            }
                            i(t.element).closest(".modal").on("hide.bs.modal", function() { return t.hide() })
                        }), this.config.selector ? this.config = i.extend({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle()
                    }, a.prototype._fixTitle = function() {
                        var e = t(this.element.getAttribute("data-original-title"));
                        (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                    }, a.prototype._enter = function(t, e) {
                        var n = this.constructor.DATA_KEY;
                        (e = e || i(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), i(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? E : v] = !0), i(e.getTipElement()).hasClass(g) || e._hoverState === u ? e._hoverState = u : (clearTimeout(e._timeout), e._hoverState = u, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function() { e._hoverState === u && e.show() }, e.config.delay.show) : e.show())
                    }, a.prototype._leave = function(t, e) {
                        var n = this.constructor.DATA_KEY;
                        (e = e || i(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), i(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? E : v] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = d, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function() { e._hoverState === d && e.hide() }, e.config.delay.hide) : e.hide())
                    }, a.prototype._isWithActiveTrigger = function() {
                        for (var t in this._activeTrigger)
                            if (this._activeTrigger[t]) return !0;
                        return !1
                    }, a.prototype._getConfig = function(t) { return (t = i.extend({}, this.constructor.Default, i(this.element).data(), t)).delay && "number" == typeof t.delay && (t.delay = { show: t.delay, hide: t.delay }), He.typeCheckConfig(o, t, this.constructor.DefaultType), t }, a.prototype._getDelegateConfig = function() {
                        var t = {};
                        if (this.config)
                            for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                        return t
                    }, a._jQueryInterface = function(e) {
                        return this.each(function() {
                            var n = i(this).data(r),
                                o = "object" === (void 0 === e ? "undefined" : t(e)) && e;
                            if ((n || !/dispose|hide/.test(e)) && (n || (n = new a(this, o), i(this).data(r, n)), "string" == typeof e)) {
                                if (void 0 === n[e]) throw new Error('No method named "' + e + '"');
                                n[e]()
                            }
                        })
                    }, e(a, null, [{ key: "VERSION", get: function() { return "4.0.0-alpha.6" } }, { key: "Default", get: function() { return l } }, { key: "NAME", get: function() { return o } }, { key: "DATA_KEY", get: function() { return r } }, { key: "Event", get: function() { return f } }, { key: "EVENT_KEY", get: function() { return s } }, { key: "DefaultType", get: function() { return h } }]), a
                }();
            return i.fn[o] = I._jQueryInterface, i.fn[o].Constructor = I, i.fn[o].noConflict = function() { return i.fn[o] = a, I._jQueryInterface }, I
        }(jQuery));
    Ce = jQuery, Ae = "popover", Se = "." + (De = "bs.popover"), we = Ce.fn[Ae], be = Ce.extend({}, We.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), Ne = Ce.extend({}, We.DefaultType, { content: "(string|element|function)" }), Oe = "fade", ke = "show", Pe = ".popover-title", Le = ".popover-content", je = { HIDE: "hide" + Se, HIDDEN: "hidden" + Se, SHOW: "show" + Se, SHOWN: "shown" + Se, INSERTED: "inserted" + Se, CLICK: "click" + Se, FOCUSIN: "focusin" + Se, FOCUSOUT: "focusout" + Se, MOUSEENTER: "mouseenter" + Se, MOUSELEAVE: "mouseleave" + Se }, Re = function(i) {
        function o() {
            return n(this, o),
                function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, i.apply(this, arguments))
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(o, i), o.prototype.isWithContent = function() { return this.getTitle() || this._getContent() }, o.prototype.getTipElement = function() { return this.tip = this.tip || Ce(this.config.template)[0] }, o.prototype.setContent = function() {
            var t = Ce(this.getTipElement());
            this.setElementContent(t.find(Pe), this.getTitle()), this.setElementContent(t.find(Le), this._getContent()), t.removeClass(Oe + " " + ke), this.cleanupTether()
        }, o.prototype._getContent = function() { return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content) }, o._jQueryInterface = function(e) {
            return this.each(function() {
                var n = Ce(this).data(De),
                    i = "object" === (void 0 === e ? "undefined" : t(e)) ? e : null;
                if ((n || !/destroy|hide/.test(e)) && (n || (n = new o(this, i), Ce(this).data(De, n)), "string" == typeof e)) {
                    if (void 0 === n[e]) throw new Error('No method named "' + e + '"');
                    n[e]()
                }
            })
        }, e(o, null, [{ key: "VERSION", get: function() { return "4.0.0-alpha.6" } }, { key: "Default", get: function() { return be } }, { key: "NAME", get: function() { return Ae } }, { key: "DATA_KEY", get: function() { return De } }, { key: "Event", get: function() { return je } }, { key: "EVENT_KEY", get: function() { return Se } }, { key: "DefaultType", get: function() { return Ne } }]), o
    }(We), Ce.fn[Ae] = Re._jQueryInterface, Ce.fn[Ae].Constructor = Re, Ce.fn[Ae].noConflict = function() { return Ce.fn[Ae] = we, Re._jQueryInterface }
}();