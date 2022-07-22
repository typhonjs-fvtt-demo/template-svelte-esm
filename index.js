var Vr = Object.defineProperty;
var Jr = Object.getPrototypeOf;
var Kr = Reflect.get;
var Qr = (e, t, i) => t in e ? Vr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var ae = (e, t, i) => (Qr(e, typeof t != "symbol" ? t + "" : t, i), i), an = (e, t, i) => {
  if (!t.has(e))
    throw TypeError("Cannot " + i);
};
var f = (e, t, i) => (an(e, t, "read from private field"), i ? i.call(e) : t.get(e)), M = (e, t, i) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, i);
}, E = (e, t, i, n) => (an(e, t, "write to private field"), n ? n.call(e, i) : t.set(e, i), i), Ie = (e, t, i, n) => ({
  set _(r) {
    E(e, t, r, i);
  },
  get _() {
    return f(e, t, n);
  }
}), H = (e, t, i) => (an(e, t, "access private method"), i), ln = (e, t, i) => Kr(Jr(e), i, t);
function tt() {
}
const pi = (e) => e;
function On(e, t) {
  for (const i in t)
    e[i] = t[i];
  return e;
}
function ir(e) {
  return e();
}
function Cn() {
  return /* @__PURE__ */ Object.create(null);
}
function kt(e) {
  e.forEach(ir);
}
function Ot(e) {
  return typeof e == "function";
}
function oe(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function ts(e) {
  return Object.keys(e).length === 0;
}
function En(e, ...t) {
  if (e == null)
    return tt;
  const i = e.subscribe(...t);
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
function jn(e) {
  let t;
  return En(e, (i) => t = i)(), t;
}
function Ct(e, t, i) {
  e.$$.on_destroy.push(En(t, i));
}
function es(e, t, i, n) {
  if (e) {
    const r = nr(e, t, i, n);
    return e[0](r);
  }
}
function nr(e, t, i, n) {
  return e[1] && n ? On(i.ctx.slice(), e[1](n(t))) : i.ctx;
}
function is(e, t, i, n) {
  if (e[2] && n) {
    const r = e[2](n(i));
    if (t.dirty === void 0)
      return r;
    if (typeof r == "object") {
      const s = [], a = Math.max(t.dirty.length, r.length);
      for (let o = 0; o < a; o += 1)
        s[o] = t.dirty[o] | r[o];
      return s;
    }
    return t.dirty | r;
  }
  return t.dirty;
}
function ns(e, t, i, n, r, s) {
  if (r) {
    const a = nr(t, i, n, s);
    e.p(a, r);
  }
}
function rs(e) {
  if (e.ctx.length > 32) {
    const t = [], i = e.ctx.length / 32;
    for (let n = 0; n < i; n++)
      t[n] = -1;
    return t;
  }
  return -1;
}
function ie(e) {
  return e && Ot(e.destroy) ? e.destroy : tt;
}
const rr = typeof window < "u";
let sr = rr ? () => window.performance.now() : () => Date.now(), An = rr ? (e) => requestAnimationFrame(e) : tt;
const We = /* @__PURE__ */ new Set();
function or(e) {
  We.forEach((t) => {
    t.c(e) || (We.delete(t), t.f());
  }), We.size !== 0 && An(or);
}
function ar(e) {
  let t;
  return We.size === 0 && An(or), {
    promise: new Promise((i) => {
      We.add(t = { c: e, f: i });
    }),
    abort() {
      We.delete(t);
    }
  };
}
function re(e, t) {
  e.appendChild(t);
}
function zn(e, t, i) {
  const n = Sn(e);
  if (!n.getElementById(t)) {
    const r = Et("style");
    r.id = t, r.textContent = i, lr(n, r);
  }
}
function Sn(e) {
  if (!e)
    return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && t.host ? t : e.ownerDocument;
}
function ss(e) {
  const t = Et("style");
  return lr(Sn(e), t), t.sheet;
}
function lr(e, t) {
  re(e.head || e, t);
}
function Mt(e, t, i) {
  e.insertBefore(t, i || null);
}
function yt(e) {
  e.parentNode.removeChild(e);
}
function fr(e, t) {
  for (let i = 0; i < e.length; i += 1)
    e[i] && e[i].d(t);
}
function Et(e) {
  return document.createElement(e);
}
function os(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function sn(e) {
  return document.createTextNode(e);
}
function dn() {
  return sn(" ");
}
function Ei() {
  return sn("");
}
function li(e, t, i, n) {
  return e.addEventListener(t, i, n), () => e.removeEventListener(t, i, n);
}
function Ai(e) {
  return function(t) {
    return t.preventDefault(), e.call(this, t);
  };
}
function zi(e) {
  return function(t) {
    return t.stopPropagation(), e.call(this, t);
  };
}
function pt(e, t, i) {
  i == null ? e.removeAttribute(t) : e.getAttribute(t) !== i && e.setAttribute(t, i);
}
function as(e) {
  return Array.from(e.childNodes);
}
function cr(e, t) {
  t = "" + t, e.wholeText !== t && (e.data = t);
}
function Wn(e, t, i, n) {
  i === null ? e.style.removeProperty(t) : e.style.setProperty(t, i, n ? "important" : "");
}
function ls(e, t, { bubbles: i = !1, cancelable: n = !1 } = {}) {
  const r = document.createEvent("CustomEvent");
  return r.initCustomEvent(e, i, n, t), r;
}
class fs {
  constructor(t = !1) {
    this.is_svg = !1, this.is_svg = t, this.e = this.n = null;
  }
  c(t) {
    this.h(t);
  }
  m(t, i, n = null) {
    this.e || (this.is_svg ? this.e = os(i.nodeName) : this.e = Et(i.nodeName), this.t = i, this.c(t)), this.i(n);
  }
  h(t) {
    this.e.innerHTML = t, this.n = Array.from(this.e.childNodes);
  }
  i(t) {
    for (let i = 0; i < this.n.length; i += 1)
      Mt(this.t, this.n[i], t);
  }
  p(t) {
    this.d(), this.h(t), this.i(this.a);
  }
  d() {
    this.n.forEach(yt);
  }
}
const Ri = /* @__PURE__ */ new Map();
let Fi = 0;
function cs(e) {
  let t = 5381, i = e.length;
  for (; i--; )
    t = (t << 5) - t ^ e.charCodeAt(i);
  return t >>> 0;
}
function hs(e, t) {
  const i = { stylesheet: ss(t), rules: {} };
  return Ri.set(e, i), i;
}
function hr(e, t, i, n, r, s, a, o = 0) {
  const l = 16.666 / n;
  let h = `{
`;
  for (let g = 0; g <= 1; g += l) {
    const y = t + (i - t) * s(g);
    h += g * 100 + `%{${a(y, 1 - y)}}
`;
  }
  const c = h + `100% {${a(i, 1 - i)}}
}`, u = `__svelte_${cs(c)}_${o}`, d = Sn(e), { stylesheet: p, rules: b } = Ri.get(d) || hs(d, e);
  b[u] || (b[u] = !0, p.insertRule(`@keyframes ${u} ${c}`, p.cssRules.length));
  const m = e.style.animation || "";
  return e.style.animation = `${m ? `${m}, ` : ""}${u} ${n}ms linear ${r}ms 1 both`, Fi += 1, u;
}
function mn(e, t) {
  const i = (e.style.animation || "").split(", "), n = i.filter(t ? (s) => s.indexOf(t) < 0 : (s) => s.indexOf("__svelte") === -1), r = i.length - n.length;
  r && (e.style.animation = n.join(", "), Fi -= r, Fi || us());
}
function us() {
  An(() => {
    Fi || (Ri.forEach((e) => {
      const { stylesheet: t } = e;
      let i = t.cssRules.length;
      for (; i--; )
        t.deleteRule(i);
      e.rules = {};
    }), Ri.clear());
  });
}
let gi;
function di(e) {
  gi = e;
}
function ur() {
  if (!gi)
    throw new Error("Function called outside component initialization");
  return gi;
}
function Rn(e, t) {
  return ur().$$.context.set(e, t), t;
}
function qt(e) {
  return ur().$$.context.get(e);
}
const fi = [], ti = [], Pi = [], pn = [], ds = Promise.resolve();
let gn = !1;
function ms() {
  gn || (gn = !0, ds.then(J));
}
function ei(e) {
  Pi.push(e);
}
function ps(e) {
  pn.push(e);
}
const fn = /* @__PURE__ */ new Set();
let Si = 0;
function J() {
  const e = gi;
  do {
    for (; Si < fi.length; ) {
      const t = fi[Si];
      Si++, di(t), gs(t.$$);
    }
    for (di(null), fi.length = 0, Si = 0; ti.length; )
      ti.pop()();
    for (let t = 0; t < Pi.length; t += 1) {
      const i = Pi[t];
      fn.has(i) || (fn.add(i), i());
    }
    Pi.length = 0;
  } while (fi.length);
  for (; pn.length; )
    pn.pop()();
  gn = !1, fn.clear(), di(e);
}
function gs(e) {
  if (e.fragment !== null) {
    e.update(), kt(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(ei);
  }
}
let oi;
function dr() {
  return oi || (oi = Promise.resolve(), oi.then(() => {
    oi = null;
  })), oi;
}
function $i(e, t, i) {
  e.dispatchEvent(ls(`${t ? "intro" : "outro"}${i}`));
}
const Ii = /* @__PURE__ */ new Set();
let ne;
function Ne() {
  ne = {
    r: 0,
    c: [],
    p: ne
  };
}
function Pe() {
  ne.r || kt(ne.c), ne = ne.p;
}
function nt(e, t) {
  e && e.i && (Ii.delete(e), e.i(t));
}
function rt(e, t, i, n) {
  if (e && e.o) {
    if (Ii.has(e))
      return;
    Ii.add(e), ne.c.push(() => {
      Ii.delete(e), n && (i && e.d(1), n());
    }), e.o(t);
  } else
    n && n();
}
const mr = { duration: 0 };
function bs(e, t, i) {
  let n = t(e, i), r = !1, s, a, o = 0;
  function l() {
    s && mn(e, s);
  }
  function h() {
    const { delay: u = 0, duration: d = 300, easing: p = pi, tick: b = tt, css: m } = n || mr;
    m && (s = hr(e, 0, 1, d, u, p, m, o++)), b(0, 1);
    const g = sr() + u, y = g + d;
    a && a.abort(), r = !0, ei(() => $i(e, !0, "start")), a = ar((w) => {
      if (r) {
        if (w >= y)
          return b(1, 0), $i(e, !0, "end"), l(), r = !1;
        if (w >= g) {
          const _ = p((w - g) / d);
          b(_, 1 - _);
        }
      }
      return r;
    });
  }
  let c = !1;
  return {
    start() {
      c || (c = !0, mn(e), Ot(n) ? (n = n(), dr().then(h)) : h());
    },
    invalidate() {
      c = !1;
    },
    end() {
      r && (l(), r = !1);
    }
  };
}
function ys(e, t, i) {
  let n = t(e, i), r = !0, s;
  const a = ne;
  a.r += 1;
  function o() {
    const { delay: l = 0, duration: h = 300, easing: c = pi, tick: u = tt, css: d } = n || mr;
    d && (s = hr(e, 1, 0, h, l, c, d));
    const p = sr() + l, b = p + h;
    ei(() => $i(e, !1, "start")), ar((m) => {
      if (r) {
        if (m >= b)
          return u(0, 1), $i(e, !1, "end"), --a.r || kt(a.c), !1;
        if (m >= p) {
          const g = c((m - p) / h);
          u(1 - g, g);
        }
      }
      return r;
    });
  }
  return Ot(n) ? dr().then(() => {
    n = n(), o();
  }) : o(), {
    end(l) {
      l && n.tick && n.tick(1, 0), r && (s && mn(e, s), r = !1);
    }
  };
}
function pr(e, t) {
  const i = {}, n = {}, r = { $$scope: 1 };
  let s = e.length;
  for (; s--; ) {
    const a = e[s], o = t[s];
    if (o) {
      for (const l in a)
        l in o || (n[l] = 1);
      for (const l in o)
        r[l] || (i[l] = o[l], r[l] = 1);
      e[s] = o;
    } else
      for (const l in a)
        r[l] = 1;
  }
  for (const a in n)
    a in i || (i[a] = void 0);
  return i;
}
function gr(e) {
  return typeof e == "object" && e !== null ? e : {};
}
function vs(e, t, i) {
  const n = e.$$.props[t];
  n !== void 0 && (e.$$.bound[n] = i, i(e.$$.ctx[n]));
}
function se(e) {
  e && e.c();
}
function Zt(e, t, i, n) {
  const { fragment: r, on_mount: s, on_destroy: a, after_update: o } = e.$$;
  r && r.m(t, i), n || ei(() => {
    const l = s.map(ir).filter(Ot);
    a ? a.push(...l) : kt(l), e.$$.on_mount = [];
  }), o.forEach(ei);
}
function Bt(e, t) {
  const i = e.$$;
  i.fragment !== null && (kt(i.on_destroy), i.fragment && i.fragment.d(t), i.on_destroy = i.fragment = null, i.ctx = []);
}
function ws(e, t) {
  e.$$.dirty[0] === -1 && (fi.push(e), ms(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function ii(e, t, i, n, r, s, a, o = [-1]) {
  const l = gi;
  di(e);
  const h = e.$$ = {
    fragment: null,
    ctx: null,
    props: s,
    update: tt,
    not_equal: r,
    bound: Cn(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (l ? l.$$.context : [])),
    callbacks: Cn(),
    dirty: o,
    skip_bound: !1,
    root: t.target || l.$$.root
  };
  a && a(h.root);
  let c = !1;
  if (h.ctx = i ? i(e, t.props || {}, (u, d, ...p) => {
    const b = p.length ? p[0] : d;
    return h.ctx && r(h.ctx[u], h.ctx[u] = b) && (!h.skip_bound && h.bound[u] && h.bound[u](b), c && ws(e, u)), d;
  }) : [], h.update(), c = !0, kt(h.before_update), h.fragment = n ? n(h.ctx) : !1, t.target) {
    if (t.hydrate) {
      const u = as(t.target);
      h.fragment && h.fragment.l(u), u.forEach(yt);
    } else
      h.fragment && h.fragment.c();
    t.intro && nt(e.$$.fragment), Zt(e, t.target, t.anchor, t.customElement), J();
  }
  di(l);
}
class ni {
  $destroy() {
    Bt(this, 1), this.$destroy = tt;
  }
  $on(t, i) {
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(i), () => {
      const r = n.indexOf(i);
      r !== -1 && n.splice(r, 1);
    };
  }
  $set(t) {
    this.$$set && !ts(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const ke = [];
function Ts(e, t) {
  return {
    subscribe: It(e, t).subscribe
  };
}
function It(e, t = tt) {
  let i;
  const n = /* @__PURE__ */ new Set();
  function r(o) {
    if (oe(e, o) && (e = o, i)) {
      const l = !ke.length;
      for (const h of n)
        h[1](), ke.push(h, e);
      if (l) {
        for (let h = 0; h < ke.length; h += 2)
          ke[h][0](ke[h + 1]);
        ke.length = 0;
      }
    }
  }
  function s(o) {
    r(o(e));
  }
  function a(o, l = tt) {
    const h = [o, l];
    return n.add(h), n.size === 1 && (i = t(r) || tt), o(e), () => {
      n.delete(h), n.size === 0 && (i(), i = null);
    };
  }
  return { set: r, update: s, subscribe: a };
}
function bn(e, t, i) {
  const n = !Array.isArray(e), r = n ? [e] : e, s = t.length < 2;
  return Ts(i, (a) => {
    let o = !1;
    const l = [];
    let h = 0, c = tt;
    const u = () => {
      if (h)
        return;
      c();
      const p = t(n ? l[0] : l, a);
      s ? a(p) : c = Ot(p) ? p : tt;
    }, d = r.map((p, b) => En(p, (m) => {
      l[b] = m, h &= ~(1 << b), o && u();
    }, () => {
      h |= 1 << b;
    }));
    return o = !0, u(), function() {
      kt(d), c();
    };
  });
}
const _s = /(\d+)\s*px/;
function P(e) {
  if (typeof e != "string")
    return;
  const t = _s.test(e), i = parseInt(e);
  return t && Number.isFinite(i) ? i : void 0;
}
const yn = ["elementRoot"];
Object.freeze(yn);
function vn(e) {
  if (e == null)
    return !1;
  let t = !0, i = !0;
  for (const r of yn) {
    const s = Object.getOwnPropertyDescriptor(e, r);
    (s === void 0 || s.get === void 0 || s.set === void 0) && (t = !1);
  }
  const n = Object.getPrototypeOf(e);
  for (const r of yn) {
    const s = Object.getOwnPropertyDescriptor(n, r);
    (s === void 0 || s.get === void 0 || s.set === void 0) && (i = !1);
  }
  return t || i;
}
function Fn(e) {
  var n, r, s;
  const t = (n = e == null ? void 0 : e.constructor) == null ? void 0 : n.name;
  if (typeof t == "string" && (t.startsWith("Proxy<") || t === "ProxyComponent"))
    return !0;
  const i = (s = (r = e == null ? void 0 : e.prototype) == null ? void 0 : r.constructor) == null ? void 0 : s.name;
  return typeof i == "string" && (i.startsWith("Proxy<") || i === "ProxyComponent");
}
function ki(e) {
  var i, n;
  if (e == null || typeof e != "function")
    return !1;
  const t = (n = (i = e == null ? void 0 : e.prototype) == null ? void 0 : i.constructor) == null ? void 0 : n.name;
  return typeof t == "string" && (t.startsWith("Proxy<") || t === "ProxyComponent") ? !0 : typeof window !== void 0 ? typeof e.prototype.$destroy == "function" && typeof e.prototype.$on == "function" : typeof e.render == "function";
}
async function Ms(e) {
  return new Promise((t) => {
    e.$$.fragment && e.$$.fragment.o ? (Ne(), rt(e.$$.fragment, 0, 0, () => {
      e.$destroy(), t();
    }), Pe()) : (e.$destroy(), t());
  });
}
function xs(e, t = void 0) {
  if (typeof e != "object")
    throw new TypeError(`parseSvelteConfig - 'config' is not an object:
${JSON.stringify(e)}.`);
  if (!ki(e.class))
    throw new TypeError(`parseSvelteConfig - 'class' is not a Svelte component constructor for config:
${JSON.stringify(e)}.`);
  if (e.hydrate !== void 0 && typeof e.hydrate != "boolean")
    throw new TypeError(`parseSvelteConfig - 'hydrate' is not a boolean for config:
${JSON.stringify(e)}.`);
  if (e.intro !== void 0 && typeof e.intro != "boolean")
    throw new TypeError(`parseSvelteConfig - 'intro' is not a boolean for config:
${JSON.stringify(e)}.`);
  if (e.target !== void 0 && typeof e.target != "string" && !(e.target instanceof HTMLElement) && !(e.target instanceof ShadowRoot) && !(e.target instanceof DocumentFragment))
    throw new TypeError(`parseSvelteConfig - 'target' is not a string, HTMLElement, ShadowRoot, or DocumentFragment for config:
${JSON.stringify(e)}.`);
  if (e.anchor !== void 0 && typeof e.anchor != "string" && !(e.anchor instanceof HTMLElement) && !(e.anchor instanceof ShadowRoot) && !(e.anchor instanceof DocumentFragment))
    throw new TypeError(`parseSvelteConfig - 'anchor' is not a string, HTMLElement, ShadowRoot, or DocumentFragment for config:
${JSON.stringify(e)}.`);
  if (e.context !== void 0 && typeof e.context != "function" && !(e.context instanceof Map) && typeof e.context != "object")
    throw new TypeError(`parseSvelteConfig - 'context' is not a Map, function or object for config:
${JSON.stringify(e)}.`);
  if (e.selectorTarget !== void 0 && typeof e.selectorTarget != "string")
    throw new TypeError(`parseSvelteConfig - 'selectorTarget' is not a string for config:
${JSON.stringify(e)}.`);
  if (e.options !== void 0 && typeof e.options != "object")
    throw new TypeError(`parseSvelteConfig - 'options' is not an object for config:
${JSON.stringify(e)}.`);
  if (e.options !== void 0) {
    if (e.options.injectApp !== void 0 && typeof e.options.injectApp != "boolean")
      throw new TypeError(`parseSvelteConfig - 'options.injectApp' is not a boolean for config:
${JSON.stringify(e)}.`);
    if (e.options.injectEventbus !== void 0 && typeof e.options.injectEventbus != "boolean")
      throw new TypeError(`parseSvelteConfig - 'options.injectEventbus' is not a boolean for config:
${JSON.stringify(e)}.`);
    if (e.options.selectorElement !== void 0 && typeof e.options.selectorElement != "string")
      throw new TypeError(`parseSvelteConfig - 'selectorElement' is not a string for config:
${JSON.stringify(e)}.`);
  }
  const i = { ...e };
  delete i.options;
  let n = {};
  if (typeof i.context == "function") {
    const r = i.context;
    delete i.context;
    const s = r.call(t);
    if (typeof s == "object")
      n = { ...s };
    else
      throw new Error(`parseSvelteConfig - 'context' is a function that did not return an object for config:
${JSON.stringify(e)}`);
  } else
    i.context instanceof Map ? (n = Object.fromEntries(i.context), delete i.context) : typeof i.context == "object" && (n = i.context, delete i.context);
  if (i.props = cn(i.props, t, e), Array.isArray(i.children)) {
    const r = [];
    for (let s = 0; s < i.children.length; s++) {
      const a = i.children[s];
      if (!ki(a.class))
        throw new Error(`parseSvelteConfig - 'class' is not a Svelte component for child[${s}] for config:
${JSON.stringify(e)}`);
      a.props = cn(a.props, t, e), r.push(a);
    }
    r.length > 0 && (n.children = r), delete i.children;
  } else if (typeof i.children == "object") {
    if (!ki(i.children.class))
      throw new Error(`parseSvelteConfig - 'class' is not a Svelte component for children object for config:
${JSON.stringify(e)}`);
    i.children.props = cn(i.children.props, t, e), n.children = [i.children], delete i.children;
  }
  return i.context instanceof Map || (i.context = /* @__PURE__ */ new Map()), i.context.set("external", n), i;
}
function cn(e, t, i) {
  if (typeof e == "function") {
    const n = e.call(t);
    if (typeof n == "object")
      return n;
    throw new Error(`parseSvelteConfig - 'props' is a function that did not return an object for config:
${JSON.stringify(i)}`);
  } else {
    if (typeof e == "object")
      return e;
    if (e !== void 0)
      throw new Error(`parseSvelteConfig - 'props' is not a function or an object for config:
${JSON.stringify(i)}`);
  }
  return {};
}
function Hi(e, t) {
  if (e == null)
    return !1;
  const i = Object.getOwnPropertyDescriptor(e, t);
  if (i !== void 0 && i.get !== void 0)
    return !0;
  for (let n = Object.getPrototypeOf(e); n; n = Object.getPrototypeOf(n)) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r !== void 0 && r.get !== void 0)
      return !0;
  }
  return !1;
}
const wn = "[object Object]";
function ci(e = {}, ...t) {
  if (Object.prototype.toString.call(e) !== wn)
    throw new TypeError("deepMerge error: 'target' is not an 'object'.");
  for (let i = 0; i < t.length; i++)
    if (Object.prototype.toString.call(t[i]) !== wn)
      throw new TypeError(`deepMerge error: 'sourceObj[${i}]' is not an 'object'.`);
  return br(e, ...t);
}
function ot(e) {
  return e == null || typeof e != "object" ? !1 : typeof e[Symbol.iterator] == "function";
}
function q(e) {
  return e !== null && typeof e == "object";
}
function Os(e) {
  if (Object.prototype.toString.call(e) !== wn)
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
function Es(e, t, i = void 0) {
  if (typeof e != "object" || typeof t != "string")
    return i;
  const n = t.split(".");
  for (let r = 0; r < n.length; r++) {
    if (typeof e[n[r]] > "u" || e[n[r]] === null)
      return i;
    e = e[n[r]];
  }
  return e;
}
function As(e, t, i, n = "set", r = !0) {
  if (typeof e != "object")
    throw new TypeError("safeSet Error: 'data' is not an 'object'.");
  if (typeof t != "string")
    throw new TypeError("safeSet Error: 'accessor' is not a 'string'.");
  const s = t.split(".");
  for (let a = 0; a < s.length; a++) {
    if (Array.isArray(e)) {
      const o = +s[a];
      if (!Number.isInteger(o) || o < 0)
        return !1;
    }
    if (a === s.length - 1)
      switch (n) {
        case "add":
          e[s[a]] += i;
          break;
        case "div":
          e[s[a]] /= i;
          break;
        case "mult":
          e[s[a]] *= i;
          break;
        case "set":
          e[s[a]] = i;
          break;
        case "set-undefined":
          typeof e[s[a]] > "u" && (e[s[a]] = i);
          break;
        case "sub":
          e[s[a]] -= i;
          break;
      }
    else {
      if (r && typeof e[s[a]] > "u" && (e[s[a]] = {}), e[s[a]] === null || typeof e[s[a]] != "object")
        return !1;
      e = e[s[a]];
    }
  }
  return !0;
}
function br(e = {}, ...t) {
  var i, n;
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    for (const a in s)
      if (Object.prototype.hasOwnProperty.call(s, a)) {
        if (a.startsWith("-=")) {
          delete e[a.slice(2)];
          continue;
        }
        e[a] = Object.prototype.hasOwnProperty.call(e, a) && ((i = e[a]) == null ? void 0 : i.constructor) === Object && ((n = s[a]) == null ? void 0 : n.constructor) === Object ? br({}, e[a], s[a]) : s[a];
      }
  }
  return e;
}
function $n(e) {
  if (e == null)
    return !1;
  switch (typeof e) {
    case "function":
    case "object":
      return typeof e.subscribe == "function" && typeof e.update == "function";
  }
  return !1;
}
function Li(e, t) {
  let i = !1;
  return e.subscribe((n) => {
    i ? t(n) : i = !0;
  });
}
function Xn(e, t, i, n) {
  var r, s, a = !1, o = "withOld" in i, l = (y, w) => {
    if (r = w, o && (s = y), !a) {
      let _ = t(y, w);
      if (t.length < 2)
        w(_);
      else
        return _;
    }
    a = !1;
  }, h = bn(e, l, n), c = !Array.isArray(e), u = (y) => {
    c ? (a = !0, e.set(y)) : y.forEach((w, _) => {
      a = !0, e[_].set(w);
    }), a = !1;
  };
  o && (i = i.withOld);
  var d = i.length >= (o ? 3 : 2), p = null;
  function b(y) {
    if (p && (p(), p = null), o)
      var w = i(y, s, u);
    else
      var w = i(y, u);
    d ? typeof w == "function" && (p = w) : u(w);
  }
  var m = !1;
  function g(y) {
    var w, _, x, O;
    if (m) {
      O = y(jn(h)), r(O);
      return;
    }
    var T = h.subscribe((v) => {
      m ? w ? _ = !0 : w = !0 : x = v;
    });
    O = y(x), m = !0, r(O), T(), m = !1, _ && (O = jn(h)), w && b(O);
  }
  return {
    subscribe: h.subscribe,
    set(y) {
      g(() => y);
    },
    update: g
  };
}
function Y(e, t) {
  if (Array.isArray(t)) {
    let i = t.concat();
    return Xn(e, (n) => {
      for (let r = 0; r < i.length; ++r)
        n = n[i[r]];
      return n;
    }, { withOld(n, r) {
      let s = r;
      for (let a = 0; a < i.length - 1; ++a)
        s = s[i[a]];
      return s[i[i.length - 1]] = n, r;
    } });
  } else
    return Xn(e, (i) => i[t], { withOld(i, n) {
      return n[t] = i, n;
    } });
}
const yr = It(void 0), zs = {
  subscribe: yr.subscribe,
  get: () => game
};
Object.freeze(zs);
Hooks.once("ready", () => yr.set(game));
function Yt(e) {
  const t = e - 1;
  return t * t * t + 1;
}
function ue(e, t, i) {
  return (1 - i) * e + i * t;
}
function vt(e) {
  return e * (Math.PI / 180);
}
var U = 1e-6, st = typeof Float32Array < "u" ? Float32Array : Array, Yn = Math.random;
Math.hypot || (Math.hypot = function() {
  for (var e = 0, t = arguments.length; t--; )
    e += arguments[t] * arguments[t];
  return Math.sqrt(e);
});
function Ss() {
  var e = new st(9);
  return st != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[5] = 0, e[6] = 0, e[7] = 0), e[0] = 1, e[4] = 1, e[8] = 1, e;
}
function Hs() {
  var e = new st(16);
  return st != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0), e[0] = 1, e[5] = 1, e[10] = 1, e[15] = 1, e;
}
function Ns(e) {
  var t = new st(16);
  return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t;
}
function Ps(e, t) {
  return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e;
}
function Is(e, t, i, n, r, s, a, o, l, h, c, u, d, p, b, m) {
  var g = new st(16);
  return g[0] = e, g[1] = t, g[2] = i, g[3] = n, g[4] = r, g[5] = s, g[6] = a, g[7] = o, g[8] = l, g[9] = h, g[10] = c, g[11] = u, g[12] = d, g[13] = p, g[14] = b, g[15] = m, g;
}
function ks(e, t, i, n, r, s, a, o, l, h, c, u, d, p, b, m, g) {
  return e[0] = t, e[1] = i, e[2] = n, e[3] = r, e[4] = s, e[5] = a, e[6] = o, e[7] = l, e[8] = h, e[9] = c, e[10] = u, e[11] = d, e[12] = p, e[13] = b, e[14] = m, e[15] = g, e;
}
function vr(e) {
  return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function Ls(e, t) {
  if (e === t) {
    var i = t[1], n = t[2], r = t[3], s = t[6], a = t[7], o = t[11];
    e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = i, e[6] = t[9], e[7] = t[13], e[8] = n, e[9] = s, e[11] = t[14], e[12] = r, e[13] = a, e[14] = o;
  } else
    e[0] = t[0], e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = t[1], e[5] = t[5], e[6] = t[9], e[7] = t[13], e[8] = t[2], e[9] = t[6], e[10] = t[10], e[11] = t[14], e[12] = t[3], e[13] = t[7], e[14] = t[11], e[15] = t[15];
  return e;
}
function Cs(e, t) {
  var i = t[0], n = t[1], r = t[2], s = t[3], a = t[4], o = t[5], l = t[6], h = t[7], c = t[8], u = t[9], d = t[10], p = t[11], b = t[12], m = t[13], g = t[14], y = t[15], w = i * o - n * a, _ = i * l - r * a, x = i * h - s * a, O = n * l - r * o, T = n * h - s * o, v = r * h - s * l, N = c * m - u * b, I = c * g - d * b, k = c * y - p * b, S = u * g - d * m, W = u * y - p * m, R = d * y - p * g, L = w * R - _ * W + x * S + O * k - T * I + v * N;
  return L ? (L = 1 / L, e[0] = (o * R - l * W + h * S) * L, e[1] = (r * W - n * R - s * S) * L, e[2] = (m * v - g * T + y * O) * L, e[3] = (d * T - u * v - p * O) * L, e[4] = (l * k - a * R - h * I) * L, e[5] = (i * R - r * k + s * I) * L, e[6] = (g * x - b * v - y * _) * L, e[7] = (c * v - d * x + p * _) * L, e[8] = (a * W - o * k + h * N) * L, e[9] = (n * k - i * W - s * N) * L, e[10] = (b * T - m * x + y * w) * L, e[11] = (u * x - c * T - p * w) * L, e[12] = (o * I - a * S - l * N) * L, e[13] = (i * S - n * I + r * N) * L, e[14] = (m * _ - b * O - g * w) * L, e[15] = (c * O - u * _ + d * w) * L, e) : null;
}
function js(e, t) {
  var i = t[0], n = t[1], r = t[2], s = t[3], a = t[4], o = t[5], l = t[6], h = t[7], c = t[8], u = t[9], d = t[10], p = t[11], b = t[12], m = t[13], g = t[14], y = t[15];
  return e[0] = o * (d * y - p * g) - u * (l * y - h * g) + m * (l * p - h * d), e[1] = -(n * (d * y - p * g) - u * (r * y - s * g) + m * (r * p - s * d)), e[2] = n * (l * y - h * g) - o * (r * y - s * g) + m * (r * h - s * l), e[3] = -(n * (l * p - h * d) - o * (r * p - s * d) + u * (r * h - s * l)), e[4] = -(a * (d * y - p * g) - c * (l * y - h * g) + b * (l * p - h * d)), e[5] = i * (d * y - p * g) - c * (r * y - s * g) + b * (r * p - s * d), e[6] = -(i * (l * y - h * g) - a * (r * y - s * g) + b * (r * h - s * l)), e[7] = i * (l * p - h * d) - a * (r * p - s * d) + c * (r * h - s * l), e[8] = a * (u * y - p * m) - c * (o * y - h * m) + b * (o * p - h * u), e[9] = -(i * (u * y - p * m) - c * (n * y - s * m) + b * (n * p - s * u)), e[10] = i * (o * y - h * m) - a * (n * y - s * m) + b * (n * h - s * o), e[11] = -(i * (o * p - h * u) - a * (n * p - s * u) + c * (n * h - s * o)), e[12] = -(a * (u * g - d * m) - c * (o * g - l * m) + b * (o * d - l * u)), e[13] = i * (u * g - d * m) - c * (n * g - r * m) + b * (n * d - r * u), e[14] = -(i * (o * g - l * m) - a * (n * g - r * m) + b * (n * l - r * o)), e[15] = i * (o * d - l * u) - a * (n * d - r * u) + c * (n * l - r * o), e;
}
function Ws(e) {
  var t = e[0], i = e[1], n = e[2], r = e[3], s = e[4], a = e[5], o = e[6], l = e[7], h = e[8], c = e[9], u = e[10], d = e[11], p = e[12], b = e[13], m = e[14], g = e[15], y = t * a - i * s, w = t * o - n * s, _ = t * l - r * s, x = i * o - n * a, O = i * l - r * a, T = n * l - r * o, v = h * b - c * p, N = h * m - u * p, I = h * g - d * p, k = c * m - u * b, S = c * g - d * b, W = u * g - d * m;
  return y * W - w * S + _ * k + x * I - O * N + T * v;
}
function wr(e, t, i) {
  var n = t[0], r = t[1], s = t[2], a = t[3], o = t[4], l = t[5], h = t[6], c = t[7], u = t[8], d = t[9], p = t[10], b = t[11], m = t[12], g = t[13], y = t[14], w = t[15], _ = i[0], x = i[1], O = i[2], T = i[3];
  return e[0] = _ * n + x * o + O * u + T * m, e[1] = _ * r + x * l + O * d + T * g, e[2] = _ * s + x * h + O * p + T * y, e[3] = _ * a + x * c + O * b + T * w, _ = i[4], x = i[5], O = i[6], T = i[7], e[4] = _ * n + x * o + O * u + T * m, e[5] = _ * r + x * l + O * d + T * g, e[6] = _ * s + x * h + O * p + T * y, e[7] = _ * a + x * c + O * b + T * w, _ = i[8], x = i[9], O = i[10], T = i[11], e[8] = _ * n + x * o + O * u + T * m, e[9] = _ * r + x * l + O * d + T * g, e[10] = _ * s + x * h + O * p + T * y, e[11] = _ * a + x * c + O * b + T * w, _ = i[12], x = i[13], O = i[14], T = i[15], e[12] = _ * n + x * o + O * u + T * m, e[13] = _ * r + x * l + O * d + T * g, e[14] = _ * s + x * h + O * p + T * y, e[15] = _ * a + x * c + O * b + T * w, e;
}
function Rs(e, t, i) {
  var n = i[0], r = i[1], s = i[2], a, o, l, h, c, u, d, p, b, m, g, y;
  return t === e ? (e[12] = t[0] * n + t[4] * r + t[8] * s + t[12], e[13] = t[1] * n + t[5] * r + t[9] * s + t[13], e[14] = t[2] * n + t[6] * r + t[10] * s + t[14], e[15] = t[3] * n + t[7] * r + t[11] * s + t[15]) : (a = t[0], o = t[1], l = t[2], h = t[3], c = t[4], u = t[5], d = t[6], p = t[7], b = t[8], m = t[9], g = t[10], y = t[11], e[0] = a, e[1] = o, e[2] = l, e[3] = h, e[4] = c, e[5] = u, e[6] = d, e[7] = p, e[8] = b, e[9] = m, e[10] = g, e[11] = y, e[12] = a * n + c * r + b * s + t[12], e[13] = o * n + u * r + m * s + t[13], e[14] = l * n + d * r + g * s + t[14], e[15] = h * n + p * r + y * s + t[15]), e;
}
function Fs(e, t, i) {
  var n = i[0], r = i[1], s = i[2];
  return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e[3] = t[3] * n, e[4] = t[4] * r, e[5] = t[5] * r, e[6] = t[6] * r, e[7] = t[7] * r, e[8] = t[8] * s, e[9] = t[9] * s, e[10] = t[10] * s, e[11] = t[11] * s, e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e;
}
function $s(e, t, i, n) {
  var r = n[0], s = n[1], a = n[2], o = Math.hypot(r, s, a), l, h, c, u, d, p, b, m, g, y, w, _, x, O, T, v, N, I, k, S, W, R, L, lt;
  return o < U ? null : (o = 1 / o, r *= o, s *= o, a *= o, l = Math.sin(i), h = Math.cos(i), c = 1 - h, u = t[0], d = t[1], p = t[2], b = t[3], m = t[4], g = t[5], y = t[6], w = t[7], _ = t[8], x = t[9], O = t[10], T = t[11], v = r * r * c + h, N = s * r * c + a * l, I = a * r * c - s * l, k = r * s * c - a * l, S = s * s * c + h, W = a * s * c + r * l, R = r * a * c + s * l, L = s * a * c - r * l, lt = a * a * c + h, e[0] = u * v + m * N + _ * I, e[1] = d * v + g * N + x * I, e[2] = p * v + y * N + O * I, e[3] = b * v + w * N + T * I, e[4] = u * k + m * S + _ * W, e[5] = d * k + g * S + x * W, e[6] = p * k + y * S + O * W, e[7] = b * k + w * S + T * W, e[8] = u * R + m * L + _ * lt, e[9] = d * R + g * L + x * lt, e[10] = p * R + y * L + O * lt, e[11] = b * R + w * L + T * lt, t !== e && (e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e);
}
function Xs(e, t, i) {
  var n = Math.sin(i), r = Math.cos(i), s = t[4], a = t[5], o = t[6], l = t[7], h = t[8], c = t[9], u = t[10], d = t[11];
  return t !== e && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[4] = s * r + h * n, e[5] = a * r + c * n, e[6] = o * r + u * n, e[7] = l * r + d * n, e[8] = h * r - s * n, e[9] = c * r - a * n, e[10] = u * r - o * n, e[11] = d * r - l * n, e;
}
function Ys(e, t, i) {
  var n = Math.sin(i), r = Math.cos(i), s = t[0], a = t[1], o = t[2], l = t[3], h = t[8], c = t[9], u = t[10], d = t[11];
  return t !== e && (e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[0] = s * r - h * n, e[1] = a * r - c * n, e[2] = o * r - u * n, e[3] = l * r - d * n, e[8] = s * n + h * r, e[9] = a * n + c * r, e[10] = o * n + u * r, e[11] = l * n + d * r, e;
}
function Zs(e, t, i) {
  var n = Math.sin(i), r = Math.cos(i), s = t[0], a = t[1], o = t[2], l = t[3], h = t[4], c = t[5], u = t[6], d = t[7];
  return t !== e && (e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[0] = s * r + h * n, e[1] = a * r + c * n, e[2] = o * r + u * n, e[3] = l * r + d * n, e[4] = h * r - s * n, e[5] = c * r - a * n, e[6] = u * r - o * n, e[7] = d * r - l * n, e;
}
function Bs(e, t) {
  return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = t[0], e[13] = t[1], e[14] = t[2], e[15] = 1, e;
}
function qs(e, t) {
  return e[0] = t[0], e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = t[1], e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = t[2], e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function Gs(e, t, i) {
  var n = i[0], r = i[1], s = i[2], a = Math.hypot(n, r, s), o, l, h;
  return a < U ? null : (a = 1 / a, n *= a, r *= a, s *= a, o = Math.sin(t), l = Math.cos(t), h = 1 - l, e[0] = n * n * h + l, e[1] = r * n * h + s * o, e[2] = s * n * h - r * o, e[3] = 0, e[4] = n * r * h - s * o, e[5] = r * r * h + l, e[6] = s * r * h + n * o, e[7] = 0, e[8] = n * s * h + r * o, e[9] = r * s * h - n * o, e[10] = s * s * h + l, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e);
}
function Us(e, t) {
  var i = Math.sin(t), n = Math.cos(t);
  return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = n, e[6] = i, e[7] = 0, e[8] = 0, e[9] = -i, e[10] = n, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function Ds(e, t) {
  var i = Math.sin(t), n = Math.cos(t);
  return e[0] = n, e[1] = 0, e[2] = -i, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = i, e[9] = 0, e[10] = n, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function Vs(e, t) {
  var i = Math.sin(t), n = Math.cos(t);
  return e[0] = n, e[1] = i, e[2] = 0, e[3] = 0, e[4] = -i, e[5] = n, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function Tr(e, t, i) {
  var n = t[0], r = t[1], s = t[2], a = t[3], o = n + n, l = r + r, h = s + s, c = n * o, u = n * l, d = n * h, p = r * l, b = r * h, m = s * h, g = a * o, y = a * l, w = a * h;
  return e[0] = 1 - (p + m), e[1] = u + w, e[2] = d - y, e[3] = 0, e[4] = u - w, e[5] = 1 - (c + m), e[6] = b + g, e[7] = 0, e[8] = d + y, e[9] = b - g, e[10] = 1 - (c + p), e[11] = 0, e[12] = i[0], e[13] = i[1], e[14] = i[2], e[15] = 1, e;
}
function Js(e, t) {
  var i = new st(3), n = -t[0], r = -t[1], s = -t[2], a = t[3], o = t[4], l = t[5], h = t[6], c = t[7], u = n * n + r * r + s * s + a * a;
  return u > 0 ? (i[0] = (o * a + c * n + l * s - h * r) * 2 / u, i[1] = (l * a + c * r + h * n - o * s) * 2 / u, i[2] = (h * a + c * s + o * r - l * n) * 2 / u) : (i[0] = (o * a + c * n + l * s - h * r) * 2, i[1] = (l * a + c * r + h * n - o * s) * 2, i[2] = (h * a + c * s + o * r - l * n) * 2), Tr(e, t, i), e;
}
function Ks(e, t) {
  return e[0] = t[12], e[1] = t[13], e[2] = t[14], e;
}
function _r(e, t) {
  var i = t[0], n = t[1], r = t[2], s = t[4], a = t[5], o = t[6], l = t[8], h = t[9], c = t[10];
  return e[0] = Math.hypot(i, n, r), e[1] = Math.hypot(s, a, o), e[2] = Math.hypot(l, h, c), e;
}
function Qs(e, t) {
  var i = new st(3);
  _r(i, t);
  var n = 1 / i[0], r = 1 / i[1], s = 1 / i[2], a = t[0] * n, o = t[1] * r, l = t[2] * s, h = t[4] * n, c = t[5] * r, u = t[6] * s, d = t[8] * n, p = t[9] * r, b = t[10] * s, m = a + c + b, g = 0;
  return m > 0 ? (g = Math.sqrt(m + 1) * 2, e[3] = 0.25 * g, e[0] = (u - p) / g, e[1] = (d - l) / g, e[2] = (o - h) / g) : a > c && a > b ? (g = Math.sqrt(1 + a - c - b) * 2, e[3] = (u - p) / g, e[0] = 0.25 * g, e[1] = (o + h) / g, e[2] = (d + l) / g) : c > b ? (g = Math.sqrt(1 + c - a - b) * 2, e[3] = (d - l) / g, e[0] = (o + h) / g, e[1] = 0.25 * g, e[2] = (u + p) / g) : (g = Math.sqrt(1 + b - a - c) * 2, e[3] = (o - h) / g, e[0] = (d + l) / g, e[1] = (u + p) / g, e[2] = 0.25 * g), e;
}
function to(e, t, i, n) {
  var r = t[0], s = t[1], a = t[2], o = t[3], l = r + r, h = s + s, c = a + a, u = r * l, d = r * h, p = r * c, b = s * h, m = s * c, g = a * c, y = o * l, w = o * h, _ = o * c, x = n[0], O = n[1], T = n[2];
  return e[0] = (1 - (b + g)) * x, e[1] = (d + _) * x, e[2] = (p - w) * x, e[3] = 0, e[4] = (d - _) * O, e[5] = (1 - (u + g)) * O, e[6] = (m + y) * O, e[7] = 0, e[8] = (p + w) * T, e[9] = (m - y) * T, e[10] = (1 - (u + b)) * T, e[11] = 0, e[12] = i[0], e[13] = i[1], e[14] = i[2], e[15] = 1, e;
}
function eo(e, t, i, n, r) {
  var s = t[0], a = t[1], o = t[2], l = t[3], h = s + s, c = a + a, u = o + o, d = s * h, p = s * c, b = s * u, m = a * c, g = a * u, y = o * u, w = l * h, _ = l * c, x = l * u, O = n[0], T = n[1], v = n[2], N = r[0], I = r[1], k = r[2], S = (1 - (m + y)) * O, W = (p + x) * O, R = (b - _) * O, L = (p - x) * T, lt = (1 - (d + y)) * T, At = (g + w) * T, zt = (b + _) * v, z = (g - w) * v, D = (1 - (d + m)) * v;
  return e[0] = S, e[1] = W, e[2] = R, e[3] = 0, e[4] = L, e[5] = lt, e[6] = At, e[7] = 0, e[8] = zt, e[9] = z, e[10] = D, e[11] = 0, e[12] = i[0] + N - (S * N + L * I + zt * k), e[13] = i[1] + I - (W * N + lt * I + z * k), e[14] = i[2] + k - (R * N + At * I + D * k), e[15] = 1, e;
}
function io(e, t) {
  var i = t[0], n = t[1], r = t[2], s = t[3], a = i + i, o = n + n, l = r + r, h = i * a, c = n * a, u = n * o, d = r * a, p = r * o, b = r * l, m = s * a, g = s * o, y = s * l;
  return e[0] = 1 - u - b, e[1] = c + y, e[2] = d - g, e[3] = 0, e[4] = c - y, e[5] = 1 - h - b, e[6] = p + m, e[7] = 0, e[8] = d + g, e[9] = p - m, e[10] = 1 - h - u, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function no(e, t, i, n, r, s, a) {
  var o = 1 / (i - t), l = 1 / (r - n), h = 1 / (s - a);
  return e[0] = s * 2 * o, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = s * 2 * l, e[6] = 0, e[7] = 0, e[8] = (i + t) * o, e[9] = (r + n) * l, e[10] = (a + s) * h, e[11] = -1, e[12] = 0, e[13] = 0, e[14] = a * s * 2 * h, e[15] = 0, e;
}
function Mr(e, t, i, n, r) {
  var s = 1 / Math.tan(t / 2), a;
  return e[0] = s / i, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = s, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = -1, e[12] = 0, e[13] = 0, e[15] = 0, r != null && r !== 1 / 0 ? (a = 1 / (n - r), e[10] = (r + n) * a, e[14] = 2 * r * n * a) : (e[10] = -1, e[14] = -2 * n), e;
}
var ro = Mr;
function so(e, t, i, n, r) {
  var s = 1 / Math.tan(t / 2), a;
  return e[0] = s / i, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = s, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = -1, e[12] = 0, e[13] = 0, e[15] = 0, r != null && r !== 1 / 0 ? (a = 1 / (n - r), e[10] = r * a, e[14] = r * n * a) : (e[10] = -1, e[14] = -n), e;
}
function oo(e, t, i, n) {
  var r = Math.tan(t.upDegrees * Math.PI / 180), s = Math.tan(t.downDegrees * Math.PI / 180), a = Math.tan(t.leftDegrees * Math.PI / 180), o = Math.tan(t.rightDegrees * Math.PI / 180), l = 2 / (a + o), h = 2 / (r + s);
  return e[0] = l, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = h, e[6] = 0, e[7] = 0, e[8] = -((a - o) * l * 0.5), e[9] = (r - s) * h * 0.5, e[10] = n / (i - n), e[11] = -1, e[12] = 0, e[13] = 0, e[14] = n * i / (i - n), e[15] = 0, e;
}
function xr(e, t, i, n, r, s, a) {
  var o = 1 / (t - i), l = 1 / (n - r), h = 1 / (s - a);
  return e[0] = -2 * o, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = -2 * l, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 2 * h, e[11] = 0, e[12] = (t + i) * o, e[13] = (r + n) * l, e[14] = (a + s) * h, e[15] = 1, e;
}
var ao = xr;
function lo(e, t, i, n, r, s, a) {
  var o = 1 / (t - i), l = 1 / (n - r), h = 1 / (s - a);
  return e[0] = -2 * o, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = -2 * l, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = h, e[11] = 0, e[12] = (t + i) * o, e[13] = (r + n) * l, e[14] = s * h, e[15] = 1, e;
}
function fo(e, t, i, n) {
  var r, s, a, o, l, h, c, u, d, p, b = t[0], m = t[1], g = t[2], y = n[0], w = n[1], _ = n[2], x = i[0], O = i[1], T = i[2];
  return Math.abs(b - x) < U && Math.abs(m - O) < U && Math.abs(g - T) < U ? vr(e) : (c = b - x, u = m - O, d = g - T, p = 1 / Math.hypot(c, u, d), c *= p, u *= p, d *= p, r = w * d - _ * u, s = _ * c - y * d, a = y * u - w * c, p = Math.hypot(r, s, a), p ? (p = 1 / p, r *= p, s *= p, a *= p) : (r = 0, s = 0, a = 0), o = u * a - d * s, l = d * r - c * a, h = c * s - u * r, p = Math.hypot(o, l, h), p ? (p = 1 / p, o *= p, l *= p, h *= p) : (o = 0, l = 0, h = 0), e[0] = r, e[1] = o, e[2] = c, e[3] = 0, e[4] = s, e[5] = l, e[6] = u, e[7] = 0, e[8] = a, e[9] = h, e[10] = d, e[11] = 0, e[12] = -(r * b + s * m + a * g), e[13] = -(o * b + l * m + h * g), e[14] = -(c * b + u * m + d * g), e[15] = 1, e);
}
function co(e, t, i, n) {
  var r = t[0], s = t[1], a = t[2], o = n[0], l = n[1], h = n[2], c = r - i[0], u = s - i[1], d = a - i[2], p = c * c + u * u + d * d;
  p > 0 && (p = 1 / Math.sqrt(p), c *= p, u *= p, d *= p);
  var b = l * d - h * u, m = h * c - o * d, g = o * u - l * c;
  return p = b * b + m * m + g * g, p > 0 && (p = 1 / Math.sqrt(p), b *= p, m *= p, g *= p), e[0] = b, e[1] = m, e[2] = g, e[3] = 0, e[4] = u * g - d * m, e[5] = d * b - c * g, e[6] = c * m - u * b, e[7] = 0, e[8] = c, e[9] = u, e[10] = d, e[11] = 0, e[12] = r, e[13] = s, e[14] = a, e[15] = 1, e;
}
function ho(e) {
  return "mat4(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ", " + e[4] + ", " + e[5] + ", " + e[6] + ", " + e[7] + ", " + e[8] + ", " + e[9] + ", " + e[10] + ", " + e[11] + ", " + e[12] + ", " + e[13] + ", " + e[14] + ", " + e[15] + ")";
}
function uo(e) {
  return Math.hypot(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]);
}
function mo(e, t, i) {
  return e[0] = t[0] + i[0], e[1] = t[1] + i[1], e[2] = t[2] + i[2], e[3] = t[3] + i[3], e[4] = t[4] + i[4], e[5] = t[5] + i[5], e[6] = t[6] + i[6], e[7] = t[7] + i[7], e[8] = t[8] + i[8], e[9] = t[9] + i[9], e[10] = t[10] + i[10], e[11] = t[11] + i[11], e[12] = t[12] + i[12], e[13] = t[13] + i[13], e[14] = t[14] + i[14], e[15] = t[15] + i[15], e;
}
function Or(e, t, i) {
  return e[0] = t[0] - i[0], e[1] = t[1] - i[1], e[2] = t[2] - i[2], e[3] = t[3] - i[3], e[4] = t[4] - i[4], e[5] = t[5] - i[5], e[6] = t[6] - i[6], e[7] = t[7] - i[7], e[8] = t[8] - i[8], e[9] = t[9] - i[9], e[10] = t[10] - i[10], e[11] = t[11] - i[11], e[12] = t[12] - i[12], e[13] = t[13] - i[13], e[14] = t[14] - i[14], e[15] = t[15] - i[15], e;
}
function po(e, t, i) {
  return e[0] = t[0] * i, e[1] = t[1] * i, e[2] = t[2] * i, e[3] = t[3] * i, e[4] = t[4] * i, e[5] = t[5] * i, e[6] = t[6] * i, e[7] = t[7] * i, e[8] = t[8] * i, e[9] = t[9] * i, e[10] = t[10] * i, e[11] = t[11] * i, e[12] = t[12] * i, e[13] = t[13] * i, e[14] = t[14] * i, e[15] = t[15] * i, e;
}
function go(e, t, i, n) {
  return e[0] = t[0] + i[0] * n, e[1] = t[1] + i[1] * n, e[2] = t[2] + i[2] * n, e[3] = t[3] + i[3] * n, e[4] = t[4] + i[4] * n, e[5] = t[5] + i[5] * n, e[6] = t[6] + i[6] * n, e[7] = t[7] + i[7] * n, e[8] = t[8] + i[8] * n, e[9] = t[9] + i[9] * n, e[10] = t[10] + i[10] * n, e[11] = t[11] + i[11] * n, e[12] = t[12] + i[12] * n, e[13] = t[13] + i[13] * n, e[14] = t[14] + i[14] * n, e[15] = t[15] + i[15] * n, e;
}
function bo(e, t) {
  return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3] && e[4] === t[4] && e[5] === t[5] && e[6] === t[6] && e[7] === t[7] && e[8] === t[8] && e[9] === t[9] && e[10] === t[10] && e[11] === t[11] && e[12] === t[12] && e[13] === t[13] && e[14] === t[14] && e[15] === t[15];
}
function yo(e, t) {
  var i = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], l = e[6], h = e[7], c = e[8], u = e[9], d = e[10], p = e[11], b = e[12], m = e[13], g = e[14], y = e[15], w = t[0], _ = t[1], x = t[2], O = t[3], T = t[4], v = t[5], N = t[6], I = t[7], k = t[8], S = t[9], W = t[10], R = t[11], L = t[12], lt = t[13], At = t[14], zt = t[15];
  return Math.abs(i - w) <= U * Math.max(1, Math.abs(i), Math.abs(w)) && Math.abs(n - _) <= U * Math.max(1, Math.abs(n), Math.abs(_)) && Math.abs(r - x) <= U * Math.max(1, Math.abs(r), Math.abs(x)) && Math.abs(s - O) <= U * Math.max(1, Math.abs(s), Math.abs(O)) && Math.abs(a - T) <= U * Math.max(1, Math.abs(a), Math.abs(T)) && Math.abs(o - v) <= U * Math.max(1, Math.abs(o), Math.abs(v)) && Math.abs(l - N) <= U * Math.max(1, Math.abs(l), Math.abs(N)) && Math.abs(h - I) <= U * Math.max(1, Math.abs(h), Math.abs(I)) && Math.abs(c - k) <= U * Math.max(1, Math.abs(c), Math.abs(k)) && Math.abs(u - S) <= U * Math.max(1, Math.abs(u), Math.abs(S)) && Math.abs(d - W) <= U * Math.max(1, Math.abs(d), Math.abs(W)) && Math.abs(p - R) <= U * Math.max(1, Math.abs(p), Math.abs(R)) && Math.abs(b - L) <= U * Math.max(1, Math.abs(b), Math.abs(L)) && Math.abs(m - lt) <= U * Math.max(1, Math.abs(m), Math.abs(lt)) && Math.abs(g - At) <= U * Math.max(1, Math.abs(g), Math.abs(At)) && Math.abs(y - zt) <= U * Math.max(1, Math.abs(y), Math.abs(zt));
}
var vo = wr, wo = Or, A = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  create: Hs,
  clone: Ns,
  copy: Ps,
  fromValues: Is,
  set: ks,
  identity: vr,
  transpose: Ls,
  invert: Cs,
  adjoint: js,
  determinant: Ws,
  multiply: wr,
  translate: Rs,
  scale: Fs,
  rotate: $s,
  rotateX: Xs,
  rotateY: Ys,
  rotateZ: Zs,
  fromTranslation: Bs,
  fromScaling: qs,
  fromRotation: Gs,
  fromXRotation: Us,
  fromYRotation: Ds,
  fromZRotation: Vs,
  fromRotationTranslation: Tr,
  fromQuat2: Js,
  getTranslation: Ks,
  getScaling: _r,
  getRotation: Qs,
  fromRotationTranslationScale: to,
  fromRotationTranslationScaleOrigin: eo,
  fromQuat: io,
  frustum: no,
  perspectiveNO: Mr,
  perspective: ro,
  perspectiveZO: so,
  perspectiveFromFieldOfView: oo,
  orthoNO: xr,
  ortho: ao,
  orthoZO: lo,
  lookAt: fo,
  targetTo: co,
  str: ho,
  frob: uo,
  add: mo,
  subtract: Or,
  multiplyScalar: po,
  multiplyScalarAndAdd: go,
  exactEquals: bo,
  equals: yo,
  mul: vo,
  sub: wo
});
function Hn() {
  var e = new st(3);
  return st != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0), e;
}
function To(e) {
  var t = new st(3);
  return t[0] = e[0], t[1] = e[1], t[2] = e[2], t;
}
function Er(e) {
  var t = e[0], i = e[1], n = e[2];
  return Math.hypot(t, i, n);
}
function Tn(e, t, i) {
  var n = new st(3);
  return n[0] = e, n[1] = t, n[2] = i, n;
}
function _o(e, t) {
  return e[0] = t[0], e[1] = t[1], e[2] = t[2], e;
}
function Mo(e, t, i, n) {
  return e[0] = t, e[1] = i, e[2] = n, e;
}
function xo(e, t, i) {
  return e[0] = t[0] + i[0], e[1] = t[1] + i[1], e[2] = t[2] + i[2], e;
}
function Ar(e, t, i) {
  return e[0] = t[0] - i[0], e[1] = t[1] - i[1], e[2] = t[2] - i[2], e;
}
function zr(e, t, i) {
  return e[0] = t[0] * i[0], e[1] = t[1] * i[1], e[2] = t[2] * i[2], e;
}
function Sr(e, t, i) {
  return e[0] = t[0] / i[0], e[1] = t[1] / i[1], e[2] = t[2] / i[2], e;
}
function Oo(e, t) {
  return e[0] = Math.ceil(t[0]), e[1] = Math.ceil(t[1]), e[2] = Math.ceil(t[2]), e;
}
function Eo(e, t) {
  return e[0] = Math.floor(t[0]), e[1] = Math.floor(t[1]), e[2] = Math.floor(t[2]), e;
}
function Ao(e, t, i) {
  return e[0] = Math.min(t[0], i[0]), e[1] = Math.min(t[1], i[1]), e[2] = Math.min(t[2], i[2]), e;
}
function zo(e, t, i) {
  return e[0] = Math.max(t[0], i[0]), e[1] = Math.max(t[1], i[1]), e[2] = Math.max(t[2], i[2]), e;
}
function So(e, t) {
  return e[0] = Math.round(t[0]), e[1] = Math.round(t[1]), e[2] = Math.round(t[2]), e;
}
function Ho(e, t, i) {
  return e[0] = t[0] * i, e[1] = t[1] * i, e[2] = t[2] * i, e;
}
function No(e, t, i, n) {
  return e[0] = t[0] + i[0] * n, e[1] = t[1] + i[1] * n, e[2] = t[2] + i[2] * n, e;
}
function Hr(e, t) {
  var i = t[0] - e[0], n = t[1] - e[1], r = t[2] - e[2];
  return Math.hypot(i, n, r);
}
function Nr(e, t) {
  var i = t[0] - e[0], n = t[1] - e[1], r = t[2] - e[2];
  return i * i + n * n + r * r;
}
function Pr(e) {
  var t = e[0], i = e[1], n = e[2];
  return t * t + i * i + n * n;
}
function Po(e, t) {
  return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e;
}
function Io(e, t) {
  return e[0] = 1 / t[0], e[1] = 1 / t[1], e[2] = 1 / t[2], e;
}
function Ir(e, t) {
  var i = t[0], n = t[1], r = t[2], s = i * i + n * n + r * r;
  return s > 0 && (s = 1 / Math.sqrt(s)), e[0] = t[0] * s, e[1] = t[1] * s, e[2] = t[2] * s, e;
}
function Nn(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function Ci(e, t, i) {
  var n = t[0], r = t[1], s = t[2], a = i[0], o = i[1], l = i[2];
  return e[0] = r * l - s * o, e[1] = s * a - n * l, e[2] = n * o - r * a, e;
}
function ko(e, t, i, n) {
  var r = t[0], s = t[1], a = t[2];
  return e[0] = r + n * (i[0] - r), e[1] = s + n * (i[1] - s), e[2] = a + n * (i[2] - a), e;
}
function Lo(e, t, i, n, r, s) {
  var a = s * s, o = a * (2 * s - 3) + 1, l = a * (s - 2) + s, h = a * (s - 1), c = a * (3 - 2 * s);
  return e[0] = t[0] * o + i[0] * l + n[0] * h + r[0] * c, e[1] = t[1] * o + i[1] * l + n[1] * h + r[1] * c, e[2] = t[2] * o + i[2] * l + n[2] * h + r[2] * c, e;
}
function Co(e, t, i, n, r, s) {
  var a = 1 - s, o = a * a, l = s * s, h = o * a, c = 3 * s * o, u = 3 * l * a, d = l * s;
  return e[0] = t[0] * h + i[0] * c + n[0] * u + r[0] * d, e[1] = t[1] * h + i[1] * c + n[1] * u + r[1] * d, e[2] = t[2] * h + i[2] * c + n[2] * u + r[2] * d, e;
}
function jo(e, t) {
  t = t || 1;
  var i = Yn() * 2 * Math.PI, n = Yn() * 2 - 1, r = Math.sqrt(1 - n * n) * t;
  return e[0] = Math.cos(i) * r, e[1] = Math.sin(i) * r, e[2] = n * t, e;
}
function Wo(e, t, i) {
  var n = t[0], r = t[1], s = t[2], a = i[3] * n + i[7] * r + i[11] * s + i[15];
  return a = a || 1, e[0] = (i[0] * n + i[4] * r + i[8] * s + i[12]) / a, e[1] = (i[1] * n + i[5] * r + i[9] * s + i[13]) / a, e[2] = (i[2] * n + i[6] * r + i[10] * s + i[14]) / a, e;
}
function Ro(e, t, i) {
  var n = t[0], r = t[1], s = t[2];
  return e[0] = n * i[0] + r * i[3] + s * i[6], e[1] = n * i[1] + r * i[4] + s * i[7], e[2] = n * i[2] + r * i[5] + s * i[8], e;
}
function Fo(e, t, i) {
  var n = i[0], r = i[1], s = i[2], a = i[3], o = t[0], l = t[1], h = t[2], c = r * h - s * l, u = s * o - n * h, d = n * l - r * o, p = r * d - s * u, b = s * c - n * d, m = n * u - r * c, g = a * 2;
  return c *= g, u *= g, d *= g, p *= 2, b *= 2, m *= 2, e[0] = o + c + p, e[1] = l + u + b, e[2] = h + d + m, e;
}
function $o(e, t, i, n) {
  var r = [], s = [];
  return r[0] = t[0] - i[0], r[1] = t[1] - i[1], r[2] = t[2] - i[2], s[0] = r[0], s[1] = r[1] * Math.cos(n) - r[2] * Math.sin(n), s[2] = r[1] * Math.sin(n) + r[2] * Math.cos(n), e[0] = s[0] + i[0], e[1] = s[1] + i[1], e[2] = s[2] + i[2], e;
}
function Xo(e, t, i, n) {
  var r = [], s = [];
  return r[0] = t[0] - i[0], r[1] = t[1] - i[1], r[2] = t[2] - i[2], s[0] = r[2] * Math.sin(n) + r[0] * Math.cos(n), s[1] = r[1], s[2] = r[2] * Math.cos(n) - r[0] * Math.sin(n), e[0] = s[0] + i[0], e[1] = s[1] + i[1], e[2] = s[2] + i[2], e;
}
function Yo(e, t, i, n) {
  var r = [], s = [];
  return r[0] = t[0] - i[0], r[1] = t[1] - i[1], r[2] = t[2] - i[2], s[0] = r[0] * Math.cos(n) - r[1] * Math.sin(n), s[1] = r[0] * Math.sin(n) + r[1] * Math.cos(n), s[2] = r[2], e[0] = s[0] + i[0], e[1] = s[1] + i[1], e[2] = s[2] + i[2], e;
}
function Zo(e, t) {
  var i = e[0], n = e[1], r = e[2], s = t[0], a = t[1], o = t[2], l = Math.sqrt(i * i + n * n + r * r), h = Math.sqrt(s * s + a * a + o * o), c = l * h, u = c && Nn(e, t) / c;
  return Math.acos(Math.min(Math.max(u, -1), 1));
}
function Bo(e) {
  return e[0] = 0, e[1] = 0, e[2] = 0, e;
}
function qo(e) {
  return "vec3(" + e[0] + ", " + e[1] + ", " + e[2] + ")";
}
function Go(e, t) {
  return e[0] === t[0] && e[1] === t[1] && e[2] === t[2];
}
function Uo(e, t) {
  var i = e[0], n = e[1], r = e[2], s = t[0], a = t[1], o = t[2];
  return Math.abs(i - s) <= U * Math.max(1, Math.abs(i), Math.abs(s)) && Math.abs(n - a) <= U * Math.max(1, Math.abs(n), Math.abs(a)) && Math.abs(r - o) <= U * Math.max(1, Math.abs(r), Math.abs(o));
}
var Do = Ar, Vo = zr, Jo = Sr, Ko = Hr, Qo = Nr, kr = Er, ta = Pr, ea = function() {
  var e = Hn();
  return function(t, i, n, r, s, a) {
    var o, l;
    for (i || (i = 3), n || (n = 0), r ? l = Math.min(r * i + n, t.length) : l = t.length, o = n; o < l; o += i)
      e[0] = t[o], e[1] = t[o + 1], e[2] = t[o + 2], s(e, e, a), t[o] = e[0], t[o + 1] = e[1], t[o + 2] = e[2];
    return t;
  };
}(), it = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  create: Hn,
  clone: To,
  length: Er,
  fromValues: Tn,
  copy: _o,
  set: Mo,
  add: xo,
  subtract: Ar,
  multiply: zr,
  divide: Sr,
  ceil: Oo,
  floor: Eo,
  min: Ao,
  max: zo,
  round: So,
  scale: Ho,
  scaleAndAdd: No,
  distance: Hr,
  squaredDistance: Nr,
  squaredLength: Pr,
  negate: Po,
  inverse: Io,
  normalize: Ir,
  dot: Nn,
  cross: Ci,
  lerp: ko,
  hermite: Lo,
  bezier: Co,
  random: jo,
  transformMat4: Wo,
  transformMat3: Ro,
  transformQuat: Fo,
  rotateX: $o,
  rotateY: Xo,
  rotateZ: Yo,
  angle: Zo,
  zero: Bo,
  str: qo,
  exactEquals: Go,
  equals: Uo,
  sub: Do,
  mul: Vo,
  div: Jo,
  dist: Ko,
  sqrDist: Qo,
  len: kr,
  sqrLen: ta,
  forEach: ea
});
function ia() {
  var e = new st(4);
  return st != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0), e;
}
function na(e, t) {
  var i = t[0], n = t[1], r = t[2], s = t[3], a = i * i + n * n + r * r + s * s;
  return a > 0 && (a = 1 / Math.sqrt(a)), e[0] = i * a, e[1] = n * a, e[2] = r * a, e[3] = s * a, e;
}
(function() {
  var e = ia();
  return function(t, i, n, r, s, a) {
    var o, l;
    for (i || (i = 4), n || (n = 0), r ? l = Math.min(r * i + n, t.length) : l = t.length, o = n; o < l; o += i)
      e[0] = t[o], e[1] = t[o + 1], e[2] = t[o + 2], e[3] = t[o + 3], s(e, e, a), t[o] = e[0], t[o + 1] = e[1], t[o + 2] = e[2], t[o + 3] = e[3];
    return t;
  };
})();
function Zn() {
  var e = new st(4);
  return st != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0), e[3] = 1, e;
}
function ra(e, t, i) {
  i = i * 0.5;
  var n = Math.sin(i);
  return e[0] = n * t[0], e[1] = n * t[1], e[2] = n * t[2], e[3] = Math.cos(i), e;
}
function hn(e, t, i, n) {
  var r = t[0], s = t[1], a = t[2], o = t[3], l = i[0], h = i[1], c = i[2], u = i[3], d, p, b, m, g;
  return p = r * l + s * h + a * c + o * u, p < 0 && (p = -p, l = -l, h = -h, c = -c, u = -u), 1 - p > U ? (d = Math.acos(p), b = Math.sin(d), m = Math.sin((1 - n) * d) / b, g = Math.sin(n * d) / b) : (m = 1 - n, g = n), e[0] = m * r + g * l, e[1] = m * s + g * h, e[2] = m * a + g * c, e[3] = m * o + g * u, e;
}
function sa(e, t) {
  var i = t[0] + t[4] + t[8], n;
  if (i > 0)
    n = Math.sqrt(i + 1), e[3] = 0.5 * n, n = 0.5 / n, e[0] = (t[5] - t[7]) * n, e[1] = (t[6] - t[2]) * n, e[2] = (t[1] - t[3]) * n;
  else {
    var r = 0;
    t[4] > t[0] && (r = 1), t[8] > t[r * 3 + r] && (r = 2);
    var s = (r + 1) % 3, a = (r + 2) % 3;
    n = Math.sqrt(t[r * 3 + r] - t[s * 3 + s] - t[a * 3 + a] + 1), e[r] = 0.5 * n, n = 0.5 / n, e[3] = (t[s * 3 + a] - t[a * 3 + s]) * n, e[s] = (t[s * 3 + r] + t[r * 3 + s]) * n, e[a] = (t[a * 3 + r] + t[r * 3 + a]) * n;
  }
  return e;
}
var Lr = na;
(function() {
  var e = Hn(), t = Tn(1, 0, 0), i = Tn(0, 1, 0);
  return function(n, r, s) {
    var a = Nn(r, s);
    return a < -0.999999 ? (Ci(e, t, r), kr(e) < 1e-6 && Ci(e, i, r), Ir(e, e), ra(n, e, Math.PI), n) : a > 0.999999 ? (n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 1, n) : (Ci(e, r, s), n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = 1 + a, Lr(n, n));
  };
})();
(function() {
  var e = Zn(), t = Zn();
  return function(i, n, r, s, a, o) {
    return hn(e, n, a, o), hn(t, r, s, o), hn(i, e, t, 2 * o * (1 - o)), i;
  };
})();
(function() {
  var e = Ss();
  return function(t, i, n, r) {
    return e[0] = n[0], e[3] = n[1], e[6] = n[2], e[1] = r[0], e[4] = r[1], e[7] = r[2], e[2] = -i[0], e[5] = -i[1], e[8] = -i[2], Lr(t, sa(t, e));
  };
})();
function oa() {
  var e = new st(2);
  return st != Float32Array && (e[0] = 0, e[1] = 0), e;
}
(function() {
  var e = oa();
  return function(t, i, n, r, s, a) {
    var o, l;
    for (i || (i = 2), n || (n = 0), r ? l = Math.min(r * i + n, t.length) : l = t.length, o = n; o < l; o += i)
      e[0] = t[o], e[1] = t[o + 1], s(e, e, a), t[o] = e[0], t[o + 1] = e[1];
    return t;
  };
})();
var Ut, Fe, bi, Yi;
const kn = class {
  constructor(t, i = !1) {
    M(this, Ut, void 0);
    M(this, Fe, void 0);
    M(this, bi, void 0);
    E(this, Ut, t), E(this, bi, i), t !== null && typeof t == "object" && (t.control = this);
  }
  static get voidControl() {
    return f(this, Yi);
  }
  get finished() {
    return f(this, Fe) instanceof Promise || E(this, Fe, f(this, bi) ? new Promise((t) => f(this, Ut).resolve = t) : Promise.resolve()), f(this, Fe);
  }
  get isActive() {
    return f(this, Ut).active;
  }
  get isFinished() {
    return f(this, Ut).finished;
  }
  cancel() {
    const t = f(this, Ut);
    t != null && (t.cancelled = !0);
  }
};
let Gt = kn;
Ut = new WeakMap(), Fe = new WeakMap(), bi = new WeakMap(), Yi = new WeakMap(), M(Gt, Yi, new kn(null));
const C = class {
  static add(t) {
    const i = performance.now();
    t.start = i + (C.current - i), C.newList.push(t);
  }
  static animate() {
    const t = C.current = performance.now();
    if (C.activeList.length === 0 && C.newList.length === 0) {
      globalThis.requestAnimationFrame(C.animate);
      return;
    }
    if (C.newList.length)
      for (let i = C.newList.length; --i >= 0; ) {
        const n = C.newList[i];
        n.cancelled && (C.newList.splice(i, 1), n.cleanup(n)), n.active && (C.newList.splice(i, 1), C.activeList.push(n));
      }
    for (let i = C.activeList.length; --i >= 0; ) {
      const n = C.activeList[i];
      if (n.cancelled || n.el !== void 0 && !n.el.isConnected) {
        C.activeList.splice(i, 1), n.cleanup(n);
        continue;
      }
      if (n.current = t - n.start, n.current >= n.duration) {
        for (let s = n.keys.length; --s >= 0; ) {
          const a = n.keys[s];
          n.newData[a] = n.destination[a];
        }
        n.position.set(n.newData), C.activeList.splice(i, 1), n.cleanup(n);
        continue;
      }
      const r = n.ease(n.current / n.duration);
      for (let s = n.keys.length; --s >= 0; ) {
        const a = n.keys[s];
        n.newData[a] = n.interpolate(n.initial[a], n.destination[a], r);
      }
      n.position.set(n.newData);
    }
    globalThis.requestAnimationFrame(C.animate);
  }
  static cancel(t) {
    for (let i = C.activeList.length; --i >= 0; ) {
      const n = C.activeList[i];
      n.position === t && (C.activeList.splice(i, 1), n.cancelled = !0, n.cleanup(n));
    }
    for (let i = C.newList.length; --i >= 0; ) {
      const n = C.newList[i];
      n.position === t && (C.newList.splice(i, 1), n.cancelled = !0, n.cleanup(n));
    }
  }
  static cancelAll() {
    for (let t = C.activeList.length; --t >= 0; ) {
      const i = C.activeList[t];
      i.cancelled = !0, i.cleanup(i);
    }
    for (let t = C.newList.length; --t >= 0; ) {
      const i = C.newList[t];
      i.cancelled = !0, i.cleanup(i);
    }
    C.activeList.length = 0, C.newList.length = 0;
  }
  static getScheduled(t) {
    const i = [];
    for (let n = C.activeList.length; --n >= 0; ) {
      const r = C.activeList[n];
      r.position === t && i.push(r.control);
    }
    for (let n = C.newList.length; --n >= 0; ) {
      const r = C.newList[n];
      r.position === t && i.push(r.control);
    }
    return i;
  }
};
let at = C;
ae(at, "activeList", []), ae(at, "newList", []), ae(at, "current");
at.animate();
const Cr = /* @__PURE__ */ new Set([
  "left",
  "top",
  "maxWidth",
  "maxHeight",
  "minWidth",
  "minHeight",
  "width",
  "height",
  "rotateX",
  "rotateY",
  "rotateZ",
  "scale",
  "translateX",
  "translateY",
  "translateZ",
  "zIndex",
  "rotation"
]), fe = ["rotateX", "rotateY", "rotateZ", "scale", "translateX", "translateY", "translateZ"];
Object.freeze(fe);
const aa = /^([-+*])=(-?[\d]*\.?[\d]+)$/, jr = {
  height: 0,
  left: 0,
  maxHeight: null,
  maxWidth: null,
  minHeight: null,
  minWidth: null,
  top: 0,
  transformOrigin: null,
  width: 0,
  zIndex: null,
  rotateX: 0,
  rotateY: 0,
  rotateZ: 0,
  scale: 1,
  translateX: 0,
  translateY: 0,
  translateZ: 0,
  rotation: 0
};
Object.freeze(jr);
function hi(e) {
  e.rotateX === null && (e.rotateX = 0), e.rotateY === null && (e.rotateY = 0), e.rotateZ === null && (e.rotateZ = 0), e.translateX === null && (e.translateX = 0), e.translateY === null && (e.translateY = 0), e.translateZ === null && (e.translateZ = 0), e.scale === null && (e.scale = 1), e.rotation === null && (e.rotation = 0);
}
const gt = {
  rotateX: 1,
  rotateY: 2,
  rotateZ: 4,
  scale: 8,
  translateX: 16,
  translateY: 32,
  translateZ: 64
};
Object.freeze(gt);
const la = "top left", Ce = [
  "top left",
  "top center",
  "top right",
  "center left",
  "center",
  "center right",
  "bottom left",
  "bottom center",
  "bottom right"
];
Object.freeze(Ce);
function je(e, t) {
  for (const i in e)
    if (Cr.has(i)) {
      const n = e[i];
      if (typeof n != "string" || n === "auto" || n === "inherit")
        continue;
      const r = aa.exec(n);
      if (!r)
        throw new Error(`convertRelative error: malformed relative key (${i}) with value (${n})`);
      const s = t[i];
      switch (r[1]) {
        case "-":
          e[i] = s - parseFloat(r[2]);
          break;
        case "+":
          e[i] = s + parseFloat(r[2]);
          break;
        case "*":
          e[i] = s * parseFloat(r[2]);
          break;
      }
    }
}
var Dt, wt, de, $e, Xe, ji, Zi, Rr;
class Wr {
  constructor(t, i) {
    M(this, Xe);
    M(this, Zi);
    M(this, Dt, void 0);
    M(this, wt, void 0);
    M(this, de, 0);
    M(this, $e, void 0);
    E(this, wt, t), E(this, Dt, i), E(this, $e, H(this, Zi, Rr).bind(this));
  }
  get isScheduled() {
    return f(this, de) > 0;
  }
  cancel() {
    at.cancel(f(this, wt));
  }
  getScheduled() {
    return at.getScheduled(f(this, wt));
  }
  from(t, { delay: i = 0, duration: n = 1, ease: r = Yt, interpolate: s = ue } = {}) {
    var p, b;
    if (!q(t))
      throw new TypeError("AnimationAPI.from error: 'fromData' is not an object.");
    const o = f(this, wt).parent;
    if (o !== void 0 && typeof ((p = o == null ? void 0 : o.options) == null ? void 0 : p.positionable) == "boolean" && !((b = o == null ? void 0 : o.options) != null && b.positionable))
      return Gt.voidControl;
    const l = o instanceof HTMLElement ? o : o == null ? void 0 : o.elementTarget, h = l instanceof HTMLElement && l.isConnected ? l : void 0;
    if (!Number.isFinite(i) || i < 0)
      throw new TypeError("AnimationAPI.from error: 'delay' is not a positive number.");
    if (!Number.isFinite(n) || n < 0)
      throw new TypeError("AnimationAPI.from error: 'duration' is not a positive number.");
    if (typeof r != "function")
      throw new TypeError("AnimationAPI.from error: 'ease' is not a function.");
    if (typeof s != "function")
      throw new TypeError("AnimationAPI.from error: 'interpolate' is not a function.");
    const c = {}, u = {}, d = f(this, Dt);
    for (const m in t)
      d[m] !== void 0 && t[m] !== d[m] && (c[m] = t[m], u[m] = d[m]);
    return je(c, d), H(this, Xe, ji).call(this, c, u, n, h, i, r, s);
  }
  fromTo(t, i, { delay: n = 0, duration: r = 1, ease: s = Yt, interpolate: a = ue } = {}) {
    var p, b;
    if (!q(t))
      throw new TypeError("AnimationAPI.fromTo error: 'fromData' is not an object.");
    if (!q(i))
      throw new TypeError("AnimationAPI.fromTo error: 'toData' is not an object.");
    const o = f(this, wt).parent;
    if (o !== void 0 && typeof ((p = o == null ? void 0 : o.options) == null ? void 0 : p.positionable) == "boolean" && !((b = o == null ? void 0 : o.options) != null && b.positionable))
      return Gt.voidControl;
    const l = o instanceof HTMLElement ? o : o == null ? void 0 : o.elementTarget, h = l instanceof HTMLElement && l.isConnected ? l : void 0;
    if (!Number.isFinite(n) || n < 0)
      throw new TypeError("AnimationAPI.fromTo error: 'delay' is not a positive number.");
    if (!Number.isFinite(r) || r < 0)
      throw new TypeError("AnimationAPI.fromTo error: 'duration' is not a positive number.");
    if (typeof s != "function")
      throw new TypeError("AnimationAPI.fromTo error: 'ease' is not a function.");
    if (typeof a != "function")
      throw new TypeError("AnimationAPI.fromTo error: 'interpolate' is not a function.");
    const c = {}, u = {}, d = f(this, Dt);
    for (const m in t) {
      if (i[m] === void 0) {
        console.warn(`AnimationAPI.fromTo warning: key ('${m}') from 'fromData' missing in 'toData'; skipping this key.`);
        continue;
      }
      d[m] !== void 0 && (c[m] = t[m], u[m] = i[m]);
    }
    return je(c, d), je(u, d), H(this, Xe, ji).call(this, c, u, r, h, n, s, a);
  }
  to(t, { delay: i = 0, duration: n = 1, ease: r = Yt, interpolate: s = ue } = {}) {
    var d, p;
    if (!q(t))
      throw new TypeError("AnimationAPI.to error: 'toData' is not an object.");
    const a = f(this, wt).parent;
    if (a !== void 0 && typeof ((d = a == null ? void 0 : a.options) == null ? void 0 : d.positionable) == "boolean" && !((p = a == null ? void 0 : a.options) != null && p.positionable))
      return Gt.voidControl;
    const o = a instanceof HTMLElement ? a : a == null ? void 0 : a.elementTarget, l = o instanceof HTMLElement && o.isConnected ? o : void 0;
    if (!Number.isFinite(i) || i < 0)
      throw new TypeError("AnimationAPI.to error: 'delay' is not a positive number.");
    if (!Number.isFinite(n) || n < 0)
      throw new TypeError("AnimationAPI.to error: 'duration' is not a positive number.");
    if (typeof r != "function")
      throw new TypeError("AnimationAPI.to error: 'ease' is not a function.");
    if (typeof s != "function")
      throw new TypeError("AnimationAPI.to error: 'interpolate' is not a function.");
    const h = {}, c = {}, u = f(this, Dt);
    for (const b in t)
      u[b] !== void 0 && t[b] !== u[b] && (c[b] = t[b], h[b] = u[b]);
    return je(c, u), H(this, Xe, ji).call(this, h, c, n, l, i, r, s);
  }
  quickTo(t, { duration: i = 1, ease: n = Yt, interpolate: r = ue } = {}) {
    var p, b;
    if (!ot(t))
      throw new TypeError("AnimationAPI.quickTo error: 'keys' is not an iterable list.");
    const s = f(this, wt).parent;
    if (s !== void 0 && typeof ((p = s == null ? void 0 : s.options) == null ? void 0 : p.positionable) == "boolean" && !((b = s == null ? void 0 : s.options) != null && b.positionable))
      throw new Error("AnimationAPI.quickTo error: 'parent' is not positionable.");
    if (!Number.isFinite(i) || i < 0)
      throw new TypeError("AnimationAPI.quickTo error: 'duration' is not a positive number.");
    if (typeof n != "function")
      throw new TypeError("AnimationAPI.quickTo error: 'ease' is not a function.");
    if (typeof r != "function")
      throw new TypeError("AnimationAPI.quickTo error: 'interpolate' is not a function.");
    const a = {}, o = {}, l = f(this, Dt);
    for (const m of t) {
      if (typeof m != "string")
        throw new TypeError("AnimationAPI.quickTo error: key is not a string.");
      if (!Cr.has(m))
        throw new Error(`AnimationAPI.quickTo error: key ('${m}') is not animatable.`);
      l[m] !== void 0 && (o[m] = l[m], a[m] = l[m]);
    }
    const h = [...t];
    Object.freeze(h);
    const c = Object.assign({ immediateElementUpdate: !0 }, a), u = {
      active: !0,
      cleanup: f(this, $e),
      cancelled: !1,
      control: void 0,
      current: 0,
      destination: o,
      duration: i * 1e3,
      ease: n,
      el: void 0,
      finished: !0,
      initial: a,
      interpolate: r,
      keys: t,
      newData: c,
      position: f(this, wt),
      resolve: void 0,
      start: void 0
    }, d = (...m) => {
      const g = m.length;
      if (g === 0)
        return;
      for (let w = h.length; --w >= 0; ) {
        const _ = h[w];
        l[_] !== void 0 && (a[_] = l[_]);
      }
      if (q(m[0])) {
        const w = m[0];
        for (const _ in w)
          o[_] !== void 0 && (o[_] = w[_]);
      } else
        for (let w = 0; w < g && w < h.length; w++) {
          const _ = h[w];
          o[_] !== void 0 && (o[_] = m[w]);
        }
      je(o, l), hi(a), hi(o);
      const y = s instanceof HTMLElement ? s : s == null ? void 0 : s.elementTarget;
      if (u.el = y instanceof HTMLElement && y.isConnected ? y : void 0, u.finished)
        u.finished = !1, u.active = !0, u.current = 0, Ie(this, de)._++, at.add(u);
      else {
        const w = performance.now();
        u.start = w + (at.current - w), u.current = 0;
      }
    };
    return d.keys = h, d.options = ({ duration: m, ease: g, interpolate: y } = {}) => {
      if (m !== void 0 && (!Number.isFinite(m) || m < 0))
        throw new TypeError("AnimationAPI.quickTo.options error: 'duration' is not a positive number.");
      if (g !== void 0 && typeof g != "function")
        throw new TypeError("AnimationAPI.quickTo.options error: 'ease' is not a function.");
      if (y !== void 0 && typeof y != "function")
        throw new TypeError("AnimationAPI.quickTo.options error: 'interpolate' is not a function.");
      return m >= 0 && (u.duration = m * 1e3), g && (u.ease = g), y && (u.interpolate = y), d;
    }, d;
  }
}
Dt = new WeakMap(), wt = new WeakMap(), de = new WeakMap(), $e = new WeakMap(), Xe = new WeakSet(), ji = function(t, i, n, r, s, a, o) {
  hi(t), hi(i);
  for (const u in t)
    Number.isFinite(t[u]) || delete t[u];
  const l = Object.keys(t), h = Object.assign({ immediateElementUpdate: !0 }, t);
  if (l.length === 0)
    return Gt.voidControl;
  const c = {
    active: !0,
    cleanup: f(this, $e),
    cancelled: !1,
    control: void 0,
    current: 0,
    destination: i,
    duration: n * 1e3,
    ease: a,
    el: r,
    finished: !1,
    initial: t,
    interpolate: o,
    keys: l,
    newData: h,
    position: f(this, wt),
    resolve: void 0,
    start: void 0
  };
  return s > 0 && (c.active = !1, setTimeout(() => {
    if (!c.cancelled) {
      c.active = !0;
      const u = performance.now();
      c.start = u + (at.current - u);
    }
  }, s * 1e3)), Ie(this, de)._++, at.add(c), new Gt(c, !0);
}, Zi = new WeakSet(), Rr = function(t) {
  Ie(this, de)._--, t.active = !1, t.finished = !0, typeof t.resolve == "function" && t.resolve(t.cancelled);
};
var St, Ye, Bi;
const Ln = class {
  constructor(t) {
    M(this, St, void 0);
    M(this, Ye, void 0);
    E(this, St, t);
  }
  static get voidControl() {
    return f(this, Bi);
  }
  get finished() {
    const t = f(this, St);
    if (t == null)
      return Promise.resolve();
    if (!(f(this, Ye) instanceof Promise)) {
      const i = [];
      for (let n = t.length; --n >= 0; )
        i.push(t[n].finished);
      E(this, Ye, Promise.all(i));
    }
    return f(this, Ye);
  }
  get isActive() {
    const t = f(this, St);
    if (t == null)
      return !1;
    for (let i = t.length; --i >= 0; )
      if (t[i].isActive)
        return !0;
    return !1;
  }
  get isFinished() {
    const t = f(this, St);
    if (t == null)
      return !0;
    for (let i = t.length; --i >= 0; )
      if (!t[i].isFinished)
        return !1;
    return !1;
  }
  cancel() {
    const t = f(this, St);
    if (t != null)
      for (let i = f(this, St).length; --i >= 0; )
        f(this, St)[i].cancel();
  }
};
let jt = Ln;
St = new WeakMap(), Ye = new WeakMap(), Bi = new WeakMap(), M(jt, Bi, new Ln(null));
var j, F;
class Fr {
  static cancel(t) {
    if (ot(t)) {
      let i = -1;
      for (const n of t) {
        i++;
        const r = H(this, j, F).call(this, n) ? n : n.position;
        if (!H(this, j, F).call(this, r)) {
          console.warn(`AnimationGroupAPI.cancel warning: No Position instance found at index: ${i}.`);
          continue;
        }
        at.cancel(r);
      }
    } else {
      const i = H(this, j, F).call(this, t) ? t : t.position;
      if (!H(this, j, F).call(this, i)) {
        console.warn("AnimationGroupAPI.cancel warning: No Position instance found.");
        return;
      }
      at.cancel(i);
    }
  }
  static cancelAll() {
    at.cancelAll();
  }
  static getScheduled(t) {
    const i = [];
    if (ot(t)) {
      let n = -1;
      for (const r of t) {
        n++;
        const s = H(this, j, F).call(this, r), a = s ? r : r.position;
        if (!H(this, j, F).call(this, a)) {
          console.warn(`AnimationGroupAPI.getScheduled warning: No Position instance found at index: ${n}.`);
          continue;
        }
        const o = at.getScheduled(a);
        i.push({ position: a, data: s ? void 0 : r, controls: o });
      }
    } else {
      const n = H(this, j, F).call(this, t), r = n ? t : t.position;
      if (!H(this, j, F).call(this, r))
        return console.warn("AnimationGroupAPI.getScheduled warning: No Position instance found."), i;
      const s = at.getScheduled(r);
      i.push({ position: r, data: n ? void 0 : t, controls: s });
    }
    return i;
  }
  static from(t, i, n) {
    if (!q(i) && typeof i != "function")
      throw new TypeError("AnimationGroupAPI.from error: 'fromData' is not an object or function.");
    if (n !== void 0 && !q(n) && typeof n != "function")
      throw new TypeError("AnimationGroupAPI.from error: 'options' is not an object or function.");
    const r = [];
    let s = -1, a;
    const o = typeof i == "function", l = typeof n == "function", h = o || l;
    h && (a = { index: s, position: void 0, data: void 0 });
    let c = i, u = n;
    if (ot(t))
      for (const d of t) {
        s++;
        const p = H(this, j, F).call(this, d), b = p ? d : d.position;
        if (!H(this, j, F).call(this, b)) {
          console.warn(`AnimationGroupAPI.from warning: No Position instance found at index: ${s}.`);
          continue;
        }
        if (h && (a.index = s, a.position = t, a.data = p ? void 0 : d), o) {
          if (c = i(a), c == null)
            continue;
          if (typeof c != "object")
            throw new TypeError(`AnimationGroupAPI.from error: fromData callback function iteration(${s}) failed to return an object.`);
        }
        if (l) {
          if (u = n(a), u == null)
            continue;
          if (typeof u != "object")
            throw new TypeError(`AnimationGroupAPI.from error: options callback function iteration(${s}) failed to return an object.`);
        }
        r.push(b.animate.from(c, u));
      }
    else {
      const d = H(this, j, F).call(this, t), p = d ? t : t.position;
      if (!H(this, j, F).call(this, p))
        return console.warn("AnimationGroupAPI.from warning: No Position instance found."), jt.voidControl;
      if (h && (a.index = 0, a.position = t, a.data = d ? void 0 : t), o && (c = i(a), typeof c != "object"))
        throw new TypeError("AnimationGroupAPI.from error: fromData callback function failed to return an object.");
      if (l && (u = n(a), typeof u != "object"))
        throw new TypeError("AnimationGroupAPI.from error: options callback function failed to return an object.");
      r.push(p.animate.from(c, u));
    }
    return new jt(r);
  }
  static fromTo(t, i, n, r) {
    if (!q(i) && typeof i != "function")
      throw new TypeError("AnimationGroupAPI.fromTo error: 'fromData' is not an object or function.");
    if (!q(n) && typeof n != "function")
      throw new TypeError("AnimationGroupAPI.fromTo error: 'toData' is not an object or function.");
    if (r !== void 0 && !q(r) && typeof r != "function")
      throw new TypeError("AnimationGroupAPI.fromTo error: 'options' is not an object or function.");
    const s = [];
    let a = -1, o;
    const l = typeof i == "function", h = typeof n == "function", c = typeof r == "function", u = l || h || c;
    u && (o = { index: a, position: void 0, data: void 0 });
    let d = i, p = n, b = r;
    if (ot(t))
      for (const m of t) {
        a++;
        const g = H(this, j, F).call(this, m), y = g ? m : m.position;
        if (!H(this, j, F).call(this, y)) {
          console.warn(`AnimationGroupAPI.fromTo warning: No Position instance found at index: ${a}.`);
          continue;
        }
        if (u && (o.index = a, o.position = t, o.data = g ? void 0 : m), l) {
          if (d = i(o), d == null)
            continue;
          if (typeof d != "object")
            throw new TypeError(`AnimationGroupAPI.fromTo error: fromData callback function iteration(${a}) failed to return an object.`);
        }
        if (h) {
          if (p = n(o), p == null)
            continue;
          if (typeof p != "object")
            throw new TypeError(`AnimationGroupAPI.fromTo error: toData callback function iteration(${a}) failed to return an object.`);
        }
        if (c) {
          if (b = r(o), b == null)
            continue;
          if (typeof b != "object")
            throw new TypeError(`AnimationGroupAPI.fromTo error: options callback function iteration(${a}) failed to return an object.`);
        }
        s.push(y.animate.fromTo(d, p, b));
      }
    else {
      const m = H(this, j, F).call(this, t), g = m ? t : t.position;
      if (!H(this, j, F).call(this, g))
        return console.warn("AnimationGroupAPI.fromTo warning: No Position instance found."), jt.voidControl;
      if (u && (o.index = 0, o.position = t, o.data = m ? void 0 : t), l && (d = i(o), typeof d != "object"))
        throw new TypeError("AnimationGroupAPI.fromTo error: fromData callback function failed to return an object.");
      if (h && (p = n(o), typeof p != "object"))
        throw new TypeError("AnimationGroupAPI.fromTo error: toData callback function failed to return an object.");
      if (c && (b = r(o), typeof b != "object"))
        throw new TypeError("AnimationGroupAPI.fromTo error: options callback function failed to return an object.");
      s.push(g.animate.fromTo(d, p, b));
    }
    return new jt(s);
  }
  static to(t, i, n) {
    if (!q(i) && typeof i != "function")
      throw new TypeError("AnimationGroupAPI.to error: 'toData' is not an object or function.");
    if (n !== void 0 && !q(n) && typeof n != "function")
      throw new TypeError("AnimationGroupAPI.to error: 'options' is not an object or function.");
    const r = [];
    let s = -1, a;
    const o = typeof i == "function", l = typeof n == "function", h = o || l;
    h && (a = { index: s, position: void 0, data: void 0 });
    let c = i, u = n;
    if (ot(t))
      for (const d of t) {
        s++;
        const p = H(this, j, F).call(this, d), b = p ? d : d.position;
        if (!H(this, j, F).call(this, b)) {
          console.warn(`AnimationGroupAPI.to warning: No Position instance found at index: ${s}.`);
          continue;
        }
        if (h && (a.index = s, a.position = t, a.data = p ? void 0 : d), o) {
          if (c = i(a), c == null)
            continue;
          if (typeof c != "object")
            throw new TypeError(`AnimationGroupAPI.to error: toData callback function iteration(${s}) failed to return an object.`);
        }
        if (l) {
          if (u = n(a), u == null)
            continue;
          if (typeof u != "object")
            throw new TypeError(`AnimationGroupAPI.to error: options callback function iteration(${s}) failed to return an object.`);
        }
        r.push(b.animate.to(c, u));
      }
    else {
      const d = H(this, j, F).call(this, t), p = d ? t : t.position;
      if (!H(this, j, F).call(this, p))
        return console.warn("AnimationGroupAPI.to warning: No Position instance found."), jt.voidControl;
      if (h && (a.index = 0, a.position = t, a.data = d ? void 0 : t), o && (c = i(a), typeof c != "object"))
        throw new TypeError("AnimationGroupAPI.to error: toData callback function failed to return an object.");
      if (l && (u = n(a), typeof u != "object"))
        throw new TypeError("AnimationGroupAPI.to error: options callback function failed to return an object.");
      r.push(p.animate.to(c, u));
    }
    return new jt(r);
  }
  static quickTo(t, i, n) {
    if (!ot(i))
      throw new TypeError("AnimationGroupAPI.quickTo error: 'keys' is not an iterable list.");
    if (n !== void 0 && !q(n) && typeof n != "function")
      throw new TypeError("AnimationGroupAPI.quickTo error: 'options' is not an object or function.");
    const r = [];
    let s = -1;
    const a = typeof n == "function", o = { index: s, position: void 0, data: void 0 };
    let l = n;
    if (ot(t))
      for (const u of t) {
        s++;
        const d = H(this, j, F).call(this, u), p = d ? u : u.position;
        if (!H(this, j, F).call(this, p)) {
          console.warn(`AnimationGroupAPI.quickTo warning: No Position instance found at index: ${s}.`);
          continue;
        }
        if (o.index = s, o.position = t, o.data = d ? void 0 : u, a) {
          if (l = n(o), l == null)
            continue;
          if (typeof l != "object")
            throw new TypeError(`AnimationGroupAPI.quickTo error: options callback function iteration(${s}) failed to return an object.`);
        }
        r.push(p.animate.quickTo(i, l));
      }
    else {
      const u = H(this, j, F).call(this, t), d = u ? t : t.position;
      if (!H(this, j, F).call(this, d))
        return console.warn("AnimationGroupAPI.quickTo warning: No Position instance found."), () => null;
      if (o.index = 0, o.position = t, o.data = u ? void 0 : t, a && (l = n(o), typeof l != "object"))
        throw new TypeError("AnimationGroupAPI.quickTo error: options callback function failed to return an object.");
      r.push(d.animate.quickTo(i, l));
    }
    const h = [...i];
    Object.freeze(h);
    const c = (...u) => {
      if (u.length !== 0)
        if (typeof u[0] == "function") {
          const p = u[0];
          s = -1;
          let b = 0;
          if (ot(t))
            for (const m of t) {
              s++;
              const g = H(this, j, F).call(this, m), y = g ? m : m.position;
              if (!H(this, j, F).call(this, y))
                continue;
              o.index = s, o.position = t, o.data = g ? void 0 : m;
              const w = p(o);
              if (w == null)
                continue;
              const _ = ot(w);
              if (!Number.isFinite(w) && !_ && typeof w != "object")
                throw new TypeError(`AnimationGroupAPI.quickTo error: toData callback function iteration(${s}) failed to return a finite number, iterable list, or object.`);
              _ ? r[b++](...w) : r[b++](w);
            }
          else {
            const m = H(this, j, F).call(this, t), g = m ? t : t.position;
            if (!H(this, j, F).call(this, g))
              return;
            o.index = 0, o.position = t, o.data = m ? void 0 : t;
            const y = p(o);
            if (y == null)
              return;
            const w = ot(y);
            if (!Number.isFinite(y) && !w && typeof y != "object")
              throw new TypeError(`AnimationGroupAPI.quickTo error: toData callback function iteration(${s}) failed to return a finite number, iterable list, or object.`);
            w ? r[b++](...y) : r[b++](y);
          }
        } else
          for (let p = r.length; --p >= 0; )
            r[p](...u);
    };
    return c.keys = h, c.options = (u) => {
      if (u !== void 0 && !q(u) && typeof u != "function")
        throw new TypeError("AnimationGroupAPI.quickTo error: 'options' is not an object or function.");
      if (q(u))
        for (let d = r.length; --d >= 0; )
          r[d].options(u);
      else if (typeof u == "function")
        if (ot(t)) {
          s = -1;
          let d = 0;
          for (const p of t) {
            s++;
            const b = H(this, j, F).call(this, p), m = b ? p : p.position;
            if (!H(this, j, F).call(this, m)) {
              console.warn(`AnimationGroupAPI.quickTo.options warning: No Position instance found at index: ${s}.`);
              continue;
            }
            if (o.index = s, o.position = t, o.data = b ? void 0 : p, l = u(o), l != null) {
              if (typeof l != "object")
                throw new TypeError(`AnimationGroupAPI.quickTo.options error: options callback function iteration(${s}) failed to return an object.`);
              r[d++].options(l);
            }
          }
        } else {
          const d = H(this, j, F).call(this, t), p = d ? t : t.position;
          if (!H(this, j, F).call(this, p))
            return console.warn("AnimationGroupAPI.quickTo.options warning: No Position instance found."), c;
          if (o.index = 0, o.position = t, o.data = d ? void 0 : t, l = u(o), typeof l != "object")
            throw new TypeError("AnimationGroupAPI.quickTo error: options callback function failed to return an object.");
          r[0].options(l);
        }
      return c;
    }, c;
  }
}
j = new WeakSet(), F = function(t) {
  return t !== null && typeof t == "object" && t.animate instanceof Wr;
}, M(Fr, j);
var me, pe, Vt, ge;
class $r {
  constructor({ element: t, lock: i = !1, width: n, height: r } = {}) {
    M(this, me, void 0);
    M(this, pe, void 0);
    M(this, Vt, void 0);
    M(this, ge, void 0);
    this.element = t, this.width = n, this.height = r, E(this, Vt, typeof i == "boolean" ? i : !1);
  }
  get element() {
    return f(this, me);
  }
  get height() {
    return f(this, pe);
  }
  get width() {
    return f(this, ge);
  }
  set element(t) {
    if (!f(this, Vt))
      if (t == null || t instanceof HTMLElement)
        E(this, me, t);
      else
        throw new TypeError("'element' is not a HTMLElement, undefined, or null.");
  }
  set height(t) {
    if (!f(this, Vt))
      if (t === void 0 || Number.isFinite(t))
        E(this, pe, t);
      else
        throw new TypeError("'height' is not a finite number or undefined.");
  }
  set width(t) {
    if (!f(this, Vt))
      if (t === void 0 || Number.isFinite(t))
        E(this, ge, t);
      else
        throw new TypeError("'width' is not a finite number or undefined.");
  }
  setDimension(t, i) {
    if (!f(this, Vt)) {
      if (t === void 0 || Number.isFinite(t))
        E(this, ge, t);
      else
        throw new TypeError("'width' is not a finite number or undefined.");
      if (i === void 0 || Number.isFinite(i))
        E(this, pe, i);
      else
        throw new TypeError("'height' is not a finite number or undefined.");
    }
  }
  getLeft(t) {
    var n, r, s;
    return (((s = (r = f(this, ge)) != null ? r : (n = f(this, me)) == null ? void 0 : n.offsetWidth) != null ? s : globalThis.innerWidth) - t) / 2;
  }
  getTop(t) {
    var n, r, s;
    return (((s = (r = f(this, pe)) != null ? r : (n = f(this, me)) == null ? void 0 : n.offsetHeight) != null ? s : globalThis.innerHeight) - t) / 2;
  }
}
me = new WeakMap(), pe = new WeakMap(), Vt = new WeakMap(), ge = new WeakMap();
const fa = new $r(), ca = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  browserCentered: fa,
  Centered: $r
}, Symbol.toStringTag, { value: "Module" }));
class ha {
  constructor() {
    this.left = !1, this.top = !1, this.width = !1, this.height = !1, this.maxHeight = !1, this.maxWidth = !1, this.minHeight = !1, this.minWidth = !1, this.zIndex = !1, this.transform = !1, this.transformOrigin = !1;
  }
  hasChange() {
    return this.left || this.top || this.width || this.height || this.maxHeight || this.maxWidth || this.minHeight || this.minWidth || this.zIndex || this.transform || this.transformOrigin;
  }
  set(t) {
    this.left = t, this.top = t, this.width = t, this.height = t, this.maxHeight = t, this.maxWidth = t, this.minHeight = t, this.minWidth = t, this.zIndex = t, this.transform = t, this.transformOrigin = t;
  }
}
class Pn {
  constructor({
    height: t = null,
    left: i = null,
    maxHeight: n = null,
    maxWidth: r = null,
    minHeight: s = null,
    minWidth: a = null,
    rotateX: o = null,
    rotateY: l = null,
    rotateZ: h = null,
    scale: c = null,
    translateX: u = null,
    translateY: d = null,
    translateZ: p = null,
    top: b = null,
    transformOrigin: m = null,
    width: g = null,
    zIndex: y = null
  } = {}) {
    this.height = t, this.left = i, this.maxHeight = n, this.maxWidth = r, this.minHeight = s, this.minWidth = a, this.rotateX = o, this.rotateY = l, this.rotateZ = h, this.scale = c, this.top = b, this.transformOrigin = m, this.translateX = u, this.translateY = d, this.translateZ = p, this.width = g, this.zIndex = y, Object.seal(this);
  }
  copy(t) {
    return this.height = t.height, this.left = t.left, this.maxHeight = t.maxHeight, this.maxWidth = t.maxWidth, this.minHeight = t.minHeight, this.minWidth = t.minWidth, this.rotateX = t.rotateX, this.rotateY = t.rotateY, this.rotateZ = t.rotateZ, this.scale = t.scale, this.top = t.top, this.transformOrigin = t.transformOrigin, this.translateX = t.translateX, this.translateY = t.translateY, this.translateZ = t.translateZ, this.width = t.width, this.zIndex = t.zIndex, this;
  }
}
var yi, Tt, ct, vi;
class ua {
  constructor(t, i, n) {
    M(this, yi, void 0);
    M(this, Tt, /* @__PURE__ */ new Map());
    M(this, ct, void 0);
    M(this, vi, void 0);
    E(this, ct, t), E(this, yi, i), E(this, vi, n);
  }
  get({ name: t }) {
    if (typeof t != "string")
      throw new TypeError("Position - getSave error: 'name' is not a string.");
    return f(this, Tt).get(t);
  }
  getDefault() {
    return f(this, Tt).get("#defaultData");
  }
  remove({ name: t }) {
    if (typeof t != "string")
      throw new TypeError("Position - remove: 'name' is not a string.");
    const i = f(this, Tt).get(t);
    return f(this, Tt).delete(t), i;
  }
  reset({ keepZIndex: t = !1, invokeSet: i = !0 } = {}) {
    var a, o, l, h;
    const n = f(this, Tt).get("#defaultData");
    if (typeof n != "object")
      return !1;
    f(this, ct).animate.isScheduled && f(this, ct).animate.cancel();
    const r = f(this, ct).zIndex, s = Object.assign({}, n);
    return t && (s.zIndex = r), f(this, vi).reset(s), (o = (a = f(this, ct).parent) == null ? void 0 : a.reactive) != null && o.minimized && ((h = (l = f(this, ct).parent) == null ? void 0 : l.maximize) == null || h.call(l, { animate: !1, duration: 0 })), i && setTimeout(() => f(this, ct).set(s), 0), !0;
  }
  restore({
    name: t,
    remove: i = !1,
    properties: n,
    silent: r = !1,
    async: s = !1,
    animateTo: a = !1,
    duration: o = 0.1,
    ease: l = pi,
    interpolate: h = ue
  }) {
    if (typeof t != "string")
      throw new TypeError("Position - restore error: 'name' is not a string.");
    const c = f(this, Tt).get(t);
    if (c) {
      i && f(this, Tt).delete(t);
      let u = c;
      if (ot(n)) {
        u = {};
        for (const d of n)
          u[d] = c[d];
      }
      if (r) {
        for (const d in u)
          f(this, yi)[d] = u[d];
        return c;
      } else if (a) {
        if (u.transformOrigin !== f(this, ct).transformOrigin && (f(this, ct).transformOrigin = u.transformOrigin), s)
          return f(this, ct).animate.to(u, { duration: o, ease: l, interpolate: h }).finished.then(() => c);
        f(this, ct).animate.to(u, { duration: o, ease: l, interpolate: h });
      } else
        f(this, ct).set(u);
    }
    return c;
  }
  save({ name: t, ...i }) {
    if (typeof t != "string")
      throw new TypeError("Position - save error: 'name' is not a string.");
    const n = f(this, ct).get(i);
    return f(this, Tt).set(t, n), n;
  }
  set({ name: t, ...i }) {
    if (typeof t != "string")
      throw new TypeError("Position - set error: 'name' is not a string.");
    f(this, Tt).set(t, i);
  }
}
yi = new WeakMap(), Tt = new WeakMap(), ct = new WeakMap(), vi = new WeakMap();
class da {
  constructor() {
    this.el = void 0, this.computed = void 0, this.marginLeft = void 0, this.marginTop = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.minHeight = void 0, this.minWidth = void 0, this.hasWillChange = !1, this.resizeObserved = {
      contentHeight: void 0,
      contentWidth: void 0,
      offsetHeight: void 0,
      offsetWidth: void 0
    };
    const t = It(this.resizeObserved);
    this.stores = {
      element: It(this.el),
      resizeContentHeight: Y(t, "contentHeight"),
      resizeContentWidth: Y(t, "contentWidth"),
      resizeObserved: t,
      resizeOffsetHeight: Y(t, "offsetHeight"),
      resizeOffsetWidth: Y(t, "offsetWidth")
    };
  }
  get offsetHeight() {
    if (this.el instanceof HTMLElement)
      return this.resizeObserved.offsetHeight !== void 0 ? this.resizeObserved.offsetHeight : this.el.offsetHeight;
    throw new Error("StyleCache - get offsetHeight error: no element assigned.");
  }
  get offsetWidth() {
    if (this.el instanceof HTMLElement)
      return this.resizeObserved.offsetWidth !== void 0 ? this.resizeObserved.offsetWidth : this.el.offsetWidth;
    throw new Error("StyleCache - get offsetWidth error: no element assigned.");
  }
  hasData(t) {
    return this.el === t;
  }
  reset() {
    this.el instanceof HTMLElement && this.el.isConnected && !this.hasWillChange && (this.el.style.willChange = null), this.el = void 0, this.computed = void 0, this.marginLeft = void 0, this.marginTop = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.minHeight = void 0, this.minWidth = void 0, this.hasWillChange = !1, this.resizeObserved.contentHeight = void 0, this.resizeObserved.contentWidth = void 0, this.resizeObserved.offsetHeight = void 0, this.resizeObserved.offsetWidth = void 0, this.stores.element.set(void 0);
  }
  update(t) {
    var n, r, s, a, o, l;
    this.el = t, this.computed = globalThis.getComputedStyle(t), this.marginLeft = (n = P(t.style.marginLeft)) != null ? n : P(this.computed.marginLeft), this.marginTop = (r = P(t.style.marginTop)) != null ? r : P(this.computed.marginTop), this.maxHeight = (s = P(t.style.maxHeight)) != null ? s : P(this.computed.maxHeight), this.maxWidth = (a = P(t.style.maxWidth)) != null ? a : P(this.computed.maxWidth), this.minHeight = (o = P(t.style.minHeight)) != null ? o : P(this.computed.minHeight), this.minWidth = (l = P(t.style.minWidth)) != null ? l : P(this.computed.minWidth);
    const i = t.style.willChange !== "" ? t.style.willChange : this.computed.willChange;
    this.hasWillChange = i !== "" && i !== "auto", this.stores.element.set(t);
  }
}
var qi, Gi, Ui, Di;
class on {
  constructor() {
    M(this, qi, new DOMRect());
    M(this, Gi, [it.create(), it.create(), it.create(), it.create()]);
    M(this, Ui, A.create());
    M(this, Di, [A.create(), A.create()]);
    Object.seal(this);
  }
  get boundingRect() {
    return f(this, qi);
  }
  get corners() {
    return f(this, Gi);
  }
  get css() {
    return `matrix3d(${this.mat4.join(",")})`;
  }
  get mat4() {
    return f(this, Ui);
  }
  get originTranslations() {
    return f(this, Di);
  }
}
qi = new WeakMap(), Gi = new WeakMap(), Ui = new WeakMap(), Di = new WeakMap();
var Q, bt;
class ma {
  constructor() {
    M(this, Q, void 0);
    M(this, bt, /* @__PURE__ */ new Map());
    return E(this, Q, []), Object.seal(this), [this, f(this, Q)];
  }
  get length() {
    return f(this, Q).length;
  }
  *[Symbol.iterator]() {
    if (f(this, Q).length !== 0)
      for (const t of f(this, Q))
        yield { ...t };
  }
  add(...t) {
    var i;
    for (const n of t) {
      const r = typeof n;
      if (r !== "function" && r !== "object" || n === null)
        throw new TypeError("AdapterValidator error: 'validator' is not a function or object.");
      let s, a;
      switch (r) {
        case "function":
          s = {
            id: void 0,
            validator: n,
            weight: 1
          }, a = n.subscribe;
          break;
        case "object":
          if (typeof n.validator != "function")
            throw new TypeError("AdapterValidator error: 'validator' attribute is not a function.");
          if (n.weight !== void 0 && typeof n.weight != "number" || n.weight < 0 || n.weight > 1)
            throw new TypeError("AdapterValidator error: 'weight' attribute is not a number between '0 - 1' inclusive.");
          s = {
            id: n.id !== void 0 ? n.id : void 0,
            validator: n.validator.bind(n),
            weight: n.weight || 1,
            instance: n
          }, a = (i = n.validator.subscribe) != null ? i : n.subscribe;
          break;
      }
      const o = f(this, Q).findIndex((l) => s.weight < l.weight);
      if (o >= 0 ? f(this, Q).splice(o, 0, s) : f(this, Q).push(s), typeof a == "function") {
        const l = a();
        if (typeof l != "function")
          throw new TypeError("AdapterValidator error: Filter has subscribe function, but no unsubscribe function is returned.");
        if (f(this, bt).has(s.validator))
          throw new Error("AdapterValidator error: Filter added already has an unsubscribe function registered.");
        f(this, bt).set(s.validator, l);
      }
    }
  }
  clear() {
    f(this, Q).length = 0;
    for (const t of f(this, bt).values())
      t();
    f(this, bt).clear();
  }
  remove(...t) {
    if (f(this, Q).length !== 0)
      for (const n of t) {
        const r = typeof n == "function" ? n : n !== null && typeof n == "object" ? n.validator : void 0;
        if (!!r) {
          for (let s = f(this, Q).length; --s >= 0; )
            if (f(this, Q)[s].validator === r) {
              f(this, Q).splice(s, 1);
              let a;
              typeof (a = f(this, bt).get(r)) == "function" && (a(), f(this, bt).delete(r));
            }
        }
      }
  }
  removeBy(t) {
    if (f(this, Q).length !== 0) {
      if (typeof t != "function")
        throw new TypeError("AdapterValidator error: 'callback' is not a function.");
      E(this, Q, f(this, Q).filter((n) => {
        const r = t.call(t, { ...n });
        if (r) {
          let s;
          typeof (s = f(this, bt).get(n.validator)) == "function" && (s(), f(this, bt).delete(n.validator));
        }
        return !r;
      }));
    }
  }
  removeById(...t) {
    f(this, Q).length !== 0 && E(this, Q, f(this, Q).filter((n) => {
      let r = !1;
      for (const s of t)
        r |= n.id === s;
      if (r) {
        let s;
        typeof (s = f(this, bt).get(n.validator)) == "function" && (s(), f(this, bt).delete(n.validator));
      }
      return !r;
    }));
  }
}
Q = new WeakMap(), bt = new WeakMap();
var be, ye, Ze, ve, Ht, we;
class Xr {
  constructor({ constrain: t = !0, element: i, enabled: n = !0, lock: r = !1, width: s, height: a } = {}) {
    M(this, be, void 0);
    M(this, ye, void 0);
    M(this, Ze, void 0);
    M(this, ve, void 0);
    M(this, Ht, void 0);
    M(this, we, void 0);
    this.element = i, this.constrain = t, this.enabled = n, this.width = s, this.height = a, E(this, Ht, typeof r == "boolean" ? r : !1);
  }
  get constrain() {
    return f(this, be);
  }
  get element() {
    return f(this, ye);
  }
  get enabled() {
    return f(this, Ze);
  }
  get height() {
    return f(this, ve);
  }
  get width() {
    return f(this, we);
  }
  set constrain(t) {
    if (!f(this, Ht)) {
      if (typeof t != "boolean")
        throw new TypeError("'constrain' is not a boolean.");
      E(this, be, t);
    }
  }
  set element(t) {
    if (!f(this, Ht))
      if (t == null || t instanceof HTMLElement)
        E(this, ye, t);
      else
        throw new TypeError("'element' is not a HTMLElement, undefined, or null.");
  }
  set enabled(t) {
    if (!f(this, Ht)) {
      if (typeof t != "boolean")
        throw new TypeError("'enabled' is not a boolean.");
      E(this, Ze, t);
    }
  }
  set height(t) {
    if (!f(this, Ht))
      if (t === void 0 || Number.isFinite(t))
        E(this, ve, t);
      else
        throw new TypeError("'height' is not a finite number or undefined.");
  }
  set width(t) {
    if (!f(this, Ht))
      if (t === void 0 || Number.isFinite(t))
        E(this, we, t);
      else
        throw new TypeError("'width' is not a finite number or undefined.");
  }
  setDimension(t, i) {
    if (!f(this, Ht)) {
      if (t === void 0 || Number.isFinite(t))
        E(this, we, t);
      else
        throw new TypeError("'width' is not a finite number or undefined.");
      if (i === void 0 || Number.isFinite(i))
        E(this, ve, i);
      else
        throw new TypeError("'height' is not a finite number or undefined.");
    }
  }
  validator(t) {
    var a, o, l, h, c, u, d, p;
    if (!f(this, Ze))
      return t.position;
    const i = (l = (o = f(this, we)) != null ? o : (a = f(this, ye)) == null ? void 0 : a.offsetWidth) != null ? l : globalThis.innerWidth, n = (u = (c = f(this, ve)) != null ? c : (h = f(this, ye)) == null ? void 0 : h.offsetHeight) != null ? u : globalThis.innerHeight;
    if (typeof t.position.width == "number") {
      const b = (d = t.maxWidth) != null ? d : f(this, be) ? i : Number.MAX_SAFE_INTEGER;
      t.position.width = t.width = Math.clamped(t.position.width, t.minWidth, b), t.width + t.position.left + t.marginLeft > i && (t.position.left = i - t.width - t.marginLeft);
    }
    if (typeof t.position.height == "number") {
      const b = (p = t.maxHeight) != null ? p : f(this, be) ? n : Number.MAX_SAFE_INTEGER;
      t.position.height = t.height = Math.clamped(t.position.height, t.minHeight, b), t.height + t.position.top + t.marginTop > n && (t.position.top = n - t.height - t.marginTop);
    }
    const r = Math.max(i - t.width - t.marginLeft, 0);
    t.position.left = Math.round(Math.clamped(t.position.left, 0, r));
    const s = Math.max(n - t.height - t.marginTop, 0);
    return t.position.top = Math.round(Math.clamped(t.position.top, 0, s)), t.position;
  }
}
be = new WeakMap(), ye = new WeakMap(), Ze = new WeakMap(), ve = new WeakMap(), Ht = new WeakMap(), we = new WeakMap();
const pa = new on();
var Te, _e, Be, Me, Nt, xe;
class Yr {
  constructor({ constrain: t = !0, element: i, enabled: n = !0, lock: r = !1, width: s, height: a } = {}) {
    M(this, Te, void 0);
    M(this, _e, void 0);
    M(this, Be, void 0);
    M(this, Me, void 0);
    M(this, Nt, void 0);
    M(this, xe, void 0);
    this.element = i, this.constrain = t, this.enabled = n, this.width = s, this.height = a, E(this, Nt, typeof r == "boolean" ? r : !1);
  }
  get constrain() {
    return f(this, Te);
  }
  get element() {
    return f(this, _e);
  }
  get enabled() {
    return f(this, Be);
  }
  get height() {
    return f(this, Me);
  }
  get width() {
    return f(this, xe);
  }
  set constrain(t) {
    if (!f(this, Nt)) {
      if (typeof t != "boolean")
        throw new TypeError("'constrain' is not a boolean.");
      E(this, Te, t);
    }
  }
  set element(t) {
    if (!f(this, Nt))
      if (t == null || t instanceof HTMLElement)
        E(this, _e, t);
      else
        throw new TypeError("'element' is not a HTMLElement, undefined, or null.");
  }
  set enabled(t) {
    if (!f(this, Nt)) {
      if (typeof t != "boolean")
        throw new TypeError("'enabled' is not a boolean.");
      E(this, Be, t);
    }
  }
  set height(t) {
    if (!f(this, Nt))
      if (t === void 0 || Number.isFinite(t))
        E(this, Me, t);
      else
        throw new TypeError("'height' is not a finite number or undefined.");
  }
  set width(t) {
    if (!f(this, Nt))
      if (t === void 0 || Number.isFinite(t))
        E(this, xe, t);
      else
        throw new TypeError("'width' is not a finite number or undefined.");
  }
  setDimension(t, i) {
    if (!f(this, Nt)) {
      if (t === void 0 || Number.isFinite(t))
        E(this, xe, t);
      else
        throw new TypeError("'width' is not a finite number or undefined.");
      if (i === void 0 || Number.isFinite(i))
        E(this, Me, i);
      else
        throw new TypeError("'height' is not a finite number or undefined.");
    }
  }
  validator(t) {
    var o, l, h, c, u, d, p, b;
    if (!f(this, Be))
      return t.position;
    const i = (h = (l = f(this, xe)) != null ? l : (o = f(this, _e)) == null ? void 0 : o.offsetWidth) != null ? h : globalThis.innerWidth, n = (d = (u = f(this, Me)) != null ? u : (c = f(this, _e)) == null ? void 0 : c.offsetHeight) != null ? d : globalThis.innerHeight;
    if (typeof t.position.width == "number") {
      const m = (p = t.maxWidth) != null ? p : f(this, Te) ? i : Number.MAX_SAFE_INTEGER;
      t.position.width = Math.clamped(t.width, t.minWidth, m);
    }
    if (typeof t.position.height == "number") {
      const m = (b = t.maxHeight) != null ? b : f(this, Te) ? n : Number.MAX_SAFE_INTEGER;
      t.position.height = Math.clamped(t.height, t.minHeight, m);
    }
    const r = t.transforms.getData(t.position, pa, t), s = r.boundingRect.x, a = r.boundingRect.y;
    return r.boundingRect.bottom + t.marginTop > n && (r.boundingRect.y += n - r.boundingRect.bottom - t.marginTop), r.boundingRect.right + t.marginLeft > i && (r.boundingRect.x += i - r.boundingRect.right - t.marginLeft), r.boundingRect.top - t.marginTop < 0 && (r.boundingRect.y += Math.abs(r.boundingRect.top - t.marginTop)), r.boundingRect.left - t.marginLeft < 0 && (r.boundingRect.x += Math.abs(r.boundingRect.left - t.marginLeft)), t.position.left -= s - r.boundingRect.x, t.position.top -= a - r.boundingRect.y, t.position;
  }
}
Te = new WeakMap(), _e = new WeakMap(), Be = new WeakMap(), Me = new WeakMap(), Nt = new WeakMap(), xe = new WeakMap();
const ga = new Xr({ lock: !0 }), ba = new Yr({ lock: !0 }), ya = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  basicWindow: ga,
  BasicBounds: Xr,
  transformWindow: ba,
  TransformBounds: Yr
}, Symbol.toStringTag, { value: "Module" })), Lt = [1, 1, 1], B = [0, 0, 0], Bn = A.create(), K = A.create(), va = it.create();
var Z;
class wa {
  constructor() {
    M(this, Z, []);
    this._data = {};
  }
  get isActive() {
    return f(this, Z).length > 0;
  }
  get rotateX() {
    return this._data.rotateX;
  }
  get rotateY() {
    return this._data.rotateY;
  }
  get rotateZ() {
    return this._data.rotateZ;
  }
  get scale() {
    return this._data.scale;
  }
  get translateX() {
    return this._data.translateX;
  }
  get translateY() {
    return this._data.translateY;
  }
  get translateZ() {
    return this._data.translateZ;
  }
  set rotateX(t) {
    if (Number.isFinite(t))
      this._data.rotateX === void 0 && f(this, Z).push("rotateX"), this._data.rotateX = t;
    else {
      if (this._data.rotateX !== void 0) {
        const i = f(this, Z).findIndex((n) => n === "rotateX");
        i >= 0 && f(this, Z).splice(i, 1);
      }
      delete this._data.rotateX;
    }
  }
  set rotateY(t) {
    if (Number.isFinite(t))
      this._data.rotateY === void 0 && f(this, Z).push("rotateY"), this._data.rotateY = t;
    else {
      if (this._data.rotateY !== void 0) {
        const i = f(this, Z).findIndex((n) => n === "rotateY");
        i >= 0 && f(this, Z).splice(i, 1);
      }
      delete this._data.rotateY;
    }
  }
  set rotateZ(t) {
    if (Number.isFinite(t))
      this._data.rotateZ === void 0 && f(this, Z).push("rotateZ"), this._data.rotateZ = t;
    else {
      if (this._data.rotateZ !== void 0) {
        const i = f(this, Z).findIndex((n) => n === "rotateZ");
        i >= 0 && f(this, Z).splice(i, 1);
      }
      delete this._data.rotateZ;
    }
  }
  set scale(t) {
    if (Number.isFinite(t))
      this._data.scale === void 0 && f(this, Z).push("scale"), this._data.scale = t;
    else {
      if (this._data.scale !== void 0) {
        const i = f(this, Z).findIndex((n) => n === "scale");
        i >= 0 && f(this, Z).splice(i, 1);
      }
      delete this._data.scale;
    }
  }
  set translateX(t) {
    if (Number.isFinite(t))
      this._data.translateX === void 0 && f(this, Z).push("translateX"), this._data.translateX = t;
    else {
      if (this._data.translateX !== void 0) {
        const i = f(this, Z).findIndex((n) => n === "translateX");
        i >= 0 && f(this, Z).splice(i, 1);
      }
      delete this._data.translateX;
    }
  }
  set translateY(t) {
    if (Number.isFinite(t))
      this._data.translateY === void 0 && f(this, Z).push("translateY"), this._data.translateY = t;
    else {
      if (this._data.translateY !== void 0) {
        const i = f(this, Z).findIndex((n) => n === "translateY");
        i >= 0 && f(this, Z).splice(i, 1);
      }
      delete this._data.translateY;
    }
  }
  set translateZ(t) {
    if (Number.isFinite(t))
      this._data.translateZ === void 0 && f(this, Z).push("translateZ"), this._data.translateZ = t;
    else {
      if (this._data.translateZ !== void 0) {
        const i = f(this, Z).findIndex((n) => n === "translateZ");
        i >= 0 && f(this, Z).splice(i, 1);
      }
      delete this._data.translateZ;
    }
  }
  getCSS(t = this._data) {
    return `matrix3d(${this.getMat4(t, Bn).join(",")})`;
  }
  getCSSOrtho(t = this._data) {
    return `matrix3d(${this.getMat4Ortho(t, Bn).join(",")})`;
  }
  getData(t, i = new on(), n = {}) {
    var g, y, w, _, x, O;
    const r = (g = n.width) != null ? g : 0, s = (y = n.height) != null ? y : 0, a = (_ = (w = n.offsetTop) != null ? w : n.marginTop) != null ? _ : 0, o = (O = (x = n.offsetLeft) != null ? x : n.offsetLeft) != null ? O : 0;
    t.top += a, t.left += o;
    const l = Number.isFinite(t.width) ? t.width : r, h = Number.isFinite(t.height) ? t.height : s, c = i.corners;
    if (this.hasTransform(t)) {
      c[0][0] = c[0][1] = c[0][2] = 0, c[1][0] = l, c[1][1] = c[1][2] = 0, c[2][0] = l, c[2][1] = h, c[2][2] = 0, c[3][0] = 0, c[3][1] = h, c[3][2] = 0;
      const T = this.getMat4(t, i.mat4), v = Ta(t.transformOrigin, l, h, i.originTranslations);
      la === t.transformOrigin ? (it.transformMat4(c[0], c[0], T), it.transformMat4(c[1], c[1], T), it.transformMat4(c[2], c[2], T), it.transformMat4(c[3], c[3], T)) : (it.transformMat4(c[0], c[0], v[0]), it.transformMat4(c[0], c[0], T), it.transformMat4(c[0], c[0], v[1]), it.transformMat4(c[1], c[1], v[0]), it.transformMat4(c[1], c[1], T), it.transformMat4(c[1], c[1], v[1]), it.transformMat4(c[2], c[2], v[0]), it.transformMat4(c[2], c[2], T), it.transformMat4(c[2], c[2], v[1]), it.transformMat4(c[3], c[3], v[0]), it.transformMat4(c[3], c[3], T), it.transformMat4(c[3], c[3], v[1])), c[0][0] = t.left + c[0][0], c[0][1] = t.top + c[0][1], c[1][0] = t.left + c[1][0], c[1][1] = t.top + c[1][1], c[2][0] = t.left + c[2][0], c[2][1] = t.top + c[2][1], c[3][0] = t.left + c[3][0], c[3][1] = t.top + c[3][1];
    } else
      c[0][0] = t.left, c[0][1] = t.top, c[1][0] = t.left + l, c[1][1] = t.top, c[2][0] = t.left + l, c[2][1] = t.top + h, c[3][0] = t.left, c[3][1] = t.top + h, A.identity(i.mat4);
    let u = Number.MIN_SAFE_INTEGER, d = Number.MIN_SAFE_INTEGER, p = Number.MAX_SAFE_INTEGER, b = Number.MAX_SAFE_INTEGER;
    for (let T = 4; --T >= 0; )
      c[T][0] > u && (u = c[T][0]), c[T][0] < p && (p = c[T][0]), c[T][1] > d && (d = c[T][1]), c[T][1] < b && (b = c[T][1]);
    const m = i.boundingRect;
    return m.x = p, m.y = b, m.width = u - p, m.height = d - b, t.top -= a, t.left -= o, i;
  }
  getMat4(t = this._data, i = A.create()) {
    const n = A.identity(i);
    let r = 0;
    const s = f(this, Z);
    for (let a = 0; a < s.length; a++) {
      const o = s[a];
      switch (o) {
        case "rotateX":
          r |= gt.rotateX, A.multiply(n, n, A.fromXRotation(K, vt(t[o])));
          break;
        case "rotateY":
          r |= gt.rotateY, A.multiply(n, n, A.fromYRotation(K, vt(t[o])));
          break;
        case "rotateZ":
          r |= gt.rotateZ, A.multiply(n, n, A.fromZRotation(K, vt(t[o])));
          break;
        case "scale":
          r |= gt.scale, Lt[0] = Lt[1] = t[o], A.multiply(n, n, A.fromScaling(K, Lt));
          break;
        case "translateX":
          r |= gt.translateX, B[0] = t.translateX, B[1] = 0, B[2] = 0, A.multiply(n, n, A.fromTranslation(K, B));
          break;
        case "translateY":
          r |= gt.translateY, B[0] = 0, B[1] = t.translateY, B[2] = 0, A.multiply(n, n, A.fromTranslation(K, B));
          break;
        case "translateZ":
          r |= gt.translateZ, B[0] = 0, B[1] = 0, B[2] = t.translateZ, A.multiply(n, n, A.fromTranslation(K, B));
          break;
      }
    }
    if (t !== this._data)
      for (let a = 0; a < fe.length; a++) {
        const o = fe[a];
        if (!(t[o] === null || (r & gt[o]) > 0))
          switch (o) {
            case "rotateX":
              A.multiply(n, n, A.fromXRotation(K, vt(t[o])));
              break;
            case "rotateY":
              A.multiply(n, n, A.fromYRotation(K, vt(t[o])));
              break;
            case "rotateZ":
              A.multiply(n, n, A.fromZRotation(K, vt(t[o])));
              break;
            case "scale":
              Lt[0] = Lt[1] = t[o], A.multiply(n, n, A.fromScaling(K, Lt));
              break;
            case "translateX":
              B[0] = t[o], B[1] = 0, B[2] = 0, A.multiply(n, n, A.fromTranslation(K, B));
              break;
            case "translateY":
              B[0] = 0, B[1] = t[o], B[2] = 0, A.multiply(n, n, A.fromTranslation(K, B));
              break;
            case "translateZ":
              B[0] = 0, B[1] = 0, B[2] = t[o], A.multiply(n, n, A.fromTranslation(K, B));
              break;
          }
      }
    return n;
  }
  getMat4Ortho(t = this._data, i = A.create()) {
    var a, o, l, h, c;
    const n = A.identity(i);
    if (B[0] = ((a = t.left) != null ? a : 0) + ((o = t.translateX) != null ? o : 0), B[1] = ((l = t.top) != null ? l : 0) + ((h = t.translateY) != null ? h : 0), B[2] = (c = t.translateZ) != null ? c : 0, A.multiply(n, n, A.fromTranslation(K, B)), t.scale !== null && (Lt[0] = Lt[1] = t.scale, A.multiply(n, n, A.fromScaling(K, Lt))), t.rotateX === null && t.rotateY === null && t.rotateZ === null)
      return n;
    let r = 0;
    const s = f(this, Z);
    for (let u = 0; u < s.length; u++) {
      const d = s[u];
      switch (d) {
        case "rotateX":
          r |= gt.rotateX, A.multiply(n, n, A.fromXRotation(K, vt(t[d])));
          break;
        case "rotateY":
          r |= gt.rotateY, A.multiply(n, n, A.fromYRotation(K, vt(t[d])));
          break;
        case "rotateZ":
          r |= gt.rotateZ, A.multiply(n, n, A.fromZRotation(K, vt(t[d])));
          break;
      }
    }
    if (t !== this._data)
      for (let u = 0; u < fe.length; u++) {
        const d = fe[u];
        if (!(t[d] === null || (r & gt[d]) > 0))
          switch (d) {
            case "rotateX":
              A.multiply(n, n, A.fromXRotation(K, vt(t[d])));
              break;
            case "rotateY":
              A.multiply(n, n, A.fromYRotation(K, vt(t[d])));
              break;
            case "rotateZ":
              A.multiply(n, n, A.fromZRotation(K, vt(t[d])));
              break;
          }
      }
    return n;
  }
  hasTransform(t) {
    for (const i of fe)
      if (Number.isFinite(t[i]))
        return !0;
    return !1;
  }
  reset(t) {
    for (const i in t)
      if (fe.includes(i))
        if (Number.isFinite(t[i]))
          this._data[i] = t[i];
        else {
          const n = f(this, Z).findIndex((r) => r === i);
          n >= 0 && f(this, Z).splice(n, 1), delete this._data[i];
        }
  }
}
Z = new WeakMap();
function Ta(e, t, i, n) {
  const r = va;
  switch (e) {
    case "top left":
      r[0] = r[1] = 0, A.fromTranslation(n[0], r), A.fromTranslation(n[1], r);
      break;
    case "top center":
      r[0] = -t * 0.5, r[1] = 0, A.fromTranslation(n[0], r), r[0] = t * 0.5, A.fromTranslation(n[1], r);
      break;
    case "top right":
      r[0] = -t, r[1] = 0, A.fromTranslation(n[0], r), r[0] = t, A.fromTranslation(n[1], r);
      break;
    case "center left":
      r[0] = 0, r[1] = -i * 0.5, A.fromTranslation(n[0], r), r[1] = i * 0.5, A.fromTranslation(n[1], r);
      break;
    case null:
    case "center":
      r[0] = -t * 0.5, r[1] = -i * 0.5, A.fromTranslation(n[0], r), r[0] = t * 0.5, r[1] = i * 0.5, A.fromTranslation(n[1], r);
      break;
    case "center right":
      r[0] = -t, r[1] = -i * 0.5, A.fromTranslation(n[0], r), r[0] = t, r[1] = i * 0.5, A.fromTranslation(n[1], r);
      break;
    case "bottom left":
      r[0] = 0, r[1] = -i, A.fromTranslation(n[0], r), r[1] = i, A.fromTranslation(n[1], r);
      break;
    case "bottom center":
      r[0] = -t * 0.5, r[1] = -i, A.fromTranslation(n[0], r), r[0] = t * 0.5, r[1] = i, A.fromTranslation(n[1], r);
      break;
    case "bottom right":
      r[0] = -t, r[1] = -i, A.fromTranslation(n[0], r), r[0] = t, r[1] = i, A.fromTranslation(n[1], r);
      break;
    default:
      A.identity(n[0]), A.identity(n[1]);
      break;
  }
  return n;
}
class _a {
  constructor() {
    this.data = void 0, this.dataSubscribers = new Pn(), this.dimensionData = { width: 0, height: 0 }, this.changeSet = void 0, this.options = void 0, this.queued = !1, this.styleCache = void 0, this.transforms = void 0, this.transformData = new on(), this.subscriptions = void 0, this.storeDimension = It(this.dimensionData), this.storeTransform = It(this.transformData, () => (this.options.transformSubscribed = !0, () => this.options.transformSubscribed = !1)), this.queued = !1, Object.seal(this.dimensionData);
  }
}
async function Ma(e = 1) {
  if (!Number.isInteger(e) || e < 1)
    throw new TypeError("nextAnimationFrame error: 'cntr' must be a positive integer greater than 0.");
  let t = performance.now();
  for (; --e >= 0; )
    t = await new Promise((i) => requestAnimationFrame(i));
  return t;
}
class Re {
  static get promise() {
    return this.updatePromise;
  }
  static add(t, i) {
    if (this.listCntr < this.list.length) {
      const n = this.list[this.listCntr];
      n[0] = t, n[1] = i;
    } else
      this.list.push([t, i]);
    return this.listCntr++, i.queued = !0, this.updatePromise || (this.updatePromise = this.wait()), this.updatePromise;
  }
  static async wait() {
    const t = await Ma();
    this.updatePromise = void 0;
    for (let i = this.listCntr; --i >= 0; ) {
      const n = this.list[i], r = n[0], s = n[1];
      n[0] = void 0, n[1] = void 0, s.queued = !1, r.isConnected && (s.options.ortho ? Gn(r, s) : qn(r, s), (s.options.calculateTransform || s.options.transformSubscribed) && Un(r, s), this.updateSubscribers(s));
    }
    return this.listCntr = 0, t;
  }
  static immediate(t, i) {
    !t.isConnected || (i.options.ortho ? Gn(t, i) : qn(t, i), (i.options.calculateTransform || i.options.transformSubscribed) && Un(t, i), this.updateSubscribers(i));
  }
  static updateSubscribers(t) {
    const i = t.data, n = t.changeSet;
    if (!n.hasChange())
      return;
    const r = t.dataSubscribers.copy(i), s = t.subscriptions;
    if (s.length > 0)
      for (let a = 0; a < s.length; a++)
        s[a](r);
    (n.width || n.height) && (t.dimensionData.width = i.width, t.dimensionData.height = i.height, t.storeDimension.set(t.dimensionData)), n.set(!1);
  }
}
ae(Re, "list", []), ae(Re, "listCntr", 0), ae(Re, "updatePromise");
function qn(e, t) {
  const i = t.changeSet, n = t.data;
  i.left && (e.style.left = `${n.left}px`), i.top && (e.style.top = `${n.top}px`), i.zIndex && (e.style.zIndex = typeof n.zIndex == "number" ? `${n.zIndex}` : null), i.width && (e.style.width = typeof n.width == "number" ? `${n.width}px` : n.width), i.height && (e.style.height = typeof n.height == "number" ? `${n.height}px` : n.height), i.transformOrigin && (e.style.transformOrigin = n.transformOrigin === "center" ? null : n.transformOrigin), i.transform && (e.style.transform = t.transforms.isActive ? t.transforms.getCSS() : null);
}
function Gn(e, t) {
  const i = t.changeSet, n = t.data;
  i.zIndex && (e.style.zIndex = typeof n.zIndex == "number" ? `${n.zIndex}` : null), i.width && (e.style.width = typeof n.width == "number" ? `${n.width}px` : n.width), i.height && (e.style.height = typeof n.height == "number" ? `${n.height}px` : n.height), i.transformOrigin && (e.style.transformOrigin = n.transformOrigin === "center" ? null : n.transformOrigin), (i.left || i.top || i.transform) && (e.style.transform = t.transforms.getCSSOrtho(n));
}
function Un(e, t) {
  ai.height = t.data.height !== "auto" ? t.data.height : t.styleCache.offsetHeight, ai.width = t.data.width !== "auto" ? t.data.width : t.styleCache.offsetWidth, ai.marginLeft = t.styleCache.marginLeft, ai.marginTop = t.styleCache.marginTop, t.transforms.getData(t.data, t.transformData, ai), t.storeTransform.set(t.transformData);
}
const ai = {
  height: void 0,
  width: void 0,
  marginLeft: void 0,
  marginTop: void 0
};
var X, Vi, wi, ut, Jt, G, dt, Oe, Kt, xt, qe, Ee, Ti, Ae, Ji, Zr;
const Ki = class {
  constructor(t, i) {
    M(this, Ji);
    M(this, X, new Pn());
    M(this, Vi, new Wr(this, f(this, X)));
    M(this, wi, new ha());
    M(this, ut, {
      calculateTransform: !1,
      initialHelper: void 0,
      ortho: !0,
      transformSubscribed: !1
    });
    M(this, Jt, void 0);
    M(this, G, void 0);
    M(this, dt, void 0);
    M(this, Oe, []);
    M(this, Kt, new wa());
    M(this, xt, void 0);
    M(this, qe, void 0);
    M(this, Ee, void 0);
    M(this, Ti, void 0);
    M(this, Ae, new ua(this, f(this, X), f(this, Kt)));
    var a;
    Os(t) ? i = t : E(this, Jt, t);
    const n = f(this, X), r = f(this, Kt);
    E(this, dt, new da());
    const s = new _a();
    if (s.changeSet = f(this, wi), s.data = f(this, X), s.options = f(this, ut), s.styleCache = f(this, dt), s.subscriptions = f(this, Oe), s.transforms = f(this, Kt), E(this, xt, s), typeof i == "object" && (typeof i.calculateTransform == "boolean" && (f(this, ut).calculateTransform = i.calculateTransform), typeof i.ortho == "boolean" && (f(this, ut).ortho = i.ortho), (Number.isFinite(i.height) || i.height === "auto" || i.height === "inherit" || i.height === null) && (n.height = s.dimensionData.height = typeof i.height == "number" ? Math.round(i.height) : i.height), (Number.isFinite(i.left) || i.left === null) && (n.left = typeof i.left == "number" ? Math.round(i.left) : i.left), (Number.isFinite(i.maxHeight) || i.maxHeight === null) && (n.maxHeight = typeof i.maxHeight == "number" ? Math.round(i.maxHeight) : i.maxHeight), (Number.isFinite(i.maxWidth) || i.maxWidth === null) && (n.maxWidth = typeof i.maxWidth == "number" ? Math.round(i.maxWidth) : i.maxWidth), (Number.isFinite(i.minHeight) || i.minHeight === null) && (n.minHeight = typeof i.minHeight == "number" ? Math.round(i.minHeight) : i.minHeight), (Number.isFinite(i.minWidth) || i.minWidth === null) && (n.minWidth = typeof i.minWidth == "number" ? Math.round(i.minWidth) : i.minWidth), (Number.isFinite(i.rotateX) || i.rotateX === null) && (r.rotateX = n.rotateX = i.rotateX), (Number.isFinite(i.rotateY) || i.rotateY === null) && (r.rotateY = n.rotateY = i.rotateY), (Number.isFinite(i.rotateZ) || i.rotateZ === null) && (r.rotateZ = n.rotateZ = i.rotateZ), (Number.isFinite(i.scale) || i.scale === null) && (r.scale = n.scale = i.scale), (Number.isFinite(i.top) || i.top === null) && (n.top = typeof i.top == "number" ? Math.round(i.top) : i.top), (typeof i.transformOrigin == "string" || i.transformOrigin === null) && (n.transformOrigin = Ce.includes(i.transformOrigin) ? i.transformOrigin : null), (Number.isFinite(i.translateX) || i.translateX === null) && (r.translateX = n.translateX = i.translateX), (Number.isFinite(i.translateY) || i.translateY === null) && (r.translateY = n.translateY = i.translateY), (Number.isFinite(i.translateZ) || i.translateZ === null) && (r.translateZ = n.translateZ = i.translateZ), (Number.isFinite(i.width) || i.width === "auto" || i.width === "inherit" || i.width === null) && (n.width = s.dimensionData.width = typeof i.width == "number" ? Math.round(i.width) : i.width), (Number.isFinite(i.zIndex) || i.zIndex === null) && (n.zIndex = typeof i.zIndex == "number" ? Math.round(i.zIndex) : i.zIndex)), E(this, G, {
      height: Y(this, "height"),
      left: Y(this, "left"),
      rotateX: Y(this, "rotateX"),
      rotateY: Y(this, "rotateY"),
      rotateZ: Y(this, "rotateZ"),
      scale: Y(this, "scale"),
      top: Y(this, "top"),
      transformOrigin: Y(this, "transformOrigin"),
      translateX: Y(this, "translateX"),
      translateY: Y(this, "translateY"),
      translateZ: Y(this, "translateZ"),
      width: Y(this, "width"),
      zIndex: Y(this, "zIndex"),
      maxHeight: Y(this, "maxHeight"),
      maxWidth: Y(this, "maxWidth"),
      minHeight: Y(this, "minHeight"),
      minWidth: Y(this, "minWidth"),
      dimension: { subscribe: s.storeDimension.subscribe },
      element: { subscribe: f(this, dt).stores.element.subscribe },
      resizeContentHeight: { subscribe: f(this, dt).stores.resizeContentHeight.subscribe },
      resizeContentWidth: { subscribe: f(this, dt).stores.resizeContentWidth.subscribe },
      resizeOffsetHeight: { subscribe: f(this, dt).stores.resizeOffsetHeight.subscribe },
      resizeOffsetWidth: { subscribe: f(this, dt).stores.resizeOffsetWidth.subscribe },
      transform: { subscribe: s.storeTransform.subscribe },
      resizeObserved: f(this, dt).stores.resizeObserved
    }), Li(f(this, G).resizeObserved, (o) => {
      const l = f(this, Jt);
      (l instanceof HTMLElement ? l : l == null ? void 0 : l.elementTarget) instanceof HTMLElement && Number.isFinite(o == null ? void 0 : o.offsetWidth) && Number.isFinite(o == null ? void 0 : o.offsetHeight) && this.set(n);
    }), f(this, G).transformOrigin.values = Ce, [Ie(this, Ee)._, Ie(this, Ti)._] = new ma(), (i == null ? void 0 : i.initial) || (i == null ? void 0 : i.positionInitial)) {
      const o = (a = i.initial) != null ? a : i.positionInitial;
      if (typeof (o == null ? void 0 : o.getLeft) != "function" || typeof (o == null ? void 0 : o.getTop) != "function")
        throw new Error("'options.initial' position helper does not contain 'getLeft' and / or 'getTop' functions.");
      f(this, ut).initialHelper = i.initial;
    }
    i != null && i.validator && (ot(i == null ? void 0 : i.validator) ? this.validators.add(...i.validator) : this.validators.add(i.validator));
  }
  static get Animate() {
    return Fr;
  }
  static get Initial() {
    return ca;
  }
  static get TransformData() {
    return on;
  }
  static get Validators() {
    return ya;
  }
  static duplicate(t, i) {
    if (!(t instanceof Ki))
      throw new TypeError("'position' is not an instance of Position.");
    const n = new Ki(i);
    return E(n, ut, Object.assign({}, f(t, ut), i)), f(n, Ee).add(...f(t, Ee)), n.set(f(t, X)), n;
  }
  get animate() {
    return f(this, Vi);
  }
  get dimension() {
    return f(this, xt).dimensionData;
  }
  get element() {
    return f(this, dt).el;
  }
  get elementUpdated() {
    return f(this, qe);
  }
  get parent() {
    return f(this, Jt);
  }
  get state() {
    return f(this, Ae);
  }
  get stores() {
    return f(this, G);
  }
  get transform() {
    return f(this, xt).transformData;
  }
  get validators() {
    return f(this, Ee);
  }
  set parent(t) {
    if (t !== void 0 && !(t instanceof HTMLElement) && !q(t))
      throw new TypeError("'parent' is not an HTMLElement, object, or undefined.");
    E(this, Jt, t), f(this, Ae).remove({ name: "#defaultData" }), f(this, dt).reset(), t && this.set(f(this, X));
  }
  get height() {
    return f(this, X).height;
  }
  get left() {
    return f(this, X).left;
  }
  get maxHeight() {
    return f(this, X).maxHeight;
  }
  get maxWidth() {
    return f(this, X).maxWidth;
  }
  get minHeight() {
    return f(this, X).minHeight;
  }
  get minWidth() {
    return f(this, X).minWidth;
  }
  get rotateX() {
    return f(this, X).rotateX;
  }
  get rotateY() {
    return f(this, X).rotateY;
  }
  get rotateZ() {
    return f(this, X).rotateZ;
  }
  get rotation() {
    return f(this, X).rotateZ;
  }
  get scale() {
    return f(this, X).scale;
  }
  get top() {
    return f(this, X).top;
  }
  get transformOrigin() {
    return f(this, X).transformOrigin;
  }
  get translateX() {
    return f(this, X).translateX;
  }
  get translateY() {
    return f(this, X).translateY;
  }
  get translateZ() {
    return f(this, X).translateZ;
  }
  get width() {
    return f(this, X).width;
  }
  get zIndex() {
    return f(this, X).zIndex;
  }
  set height(t) {
    f(this, G).height.set(t);
  }
  set left(t) {
    f(this, G).left.set(t);
  }
  set maxHeight(t) {
    f(this, G).maxHeight.set(t);
  }
  set maxWidth(t) {
    f(this, G).maxWidth.set(t);
  }
  set minHeight(t) {
    f(this, G).minHeight.set(t);
  }
  set minWidth(t) {
    f(this, G).minWidth.set(t);
  }
  set rotateX(t) {
    f(this, G).rotateX.set(t);
  }
  set rotateY(t) {
    f(this, G).rotateY.set(t);
  }
  set rotateZ(t) {
    f(this, G).rotateZ.set(t);
  }
  set rotation(t) {
    f(this, G).rotateZ.set(t);
  }
  set scale(t) {
    f(this, G).scale.set(t);
  }
  set top(t) {
    f(this, G).top.set(t);
  }
  set transformOrigin(t) {
    Ce.includes(t) && f(this, G).transformOrigin.set(t);
  }
  set translateX(t) {
    f(this, G).translateX.set(t);
  }
  set translateY(t) {
    f(this, G).translateY.set(t);
  }
  set translateZ(t) {
    f(this, G).translateZ.set(t);
  }
  set width(t) {
    f(this, G).width.set(t);
  }
  set zIndex(t) {
    f(this, G).zIndex.set(t);
  }
  get(t = {}, i) {
    var a, o;
    const n = i == null ? void 0 : i.keys, r = i == null ? void 0 : i.exclude, s = (a = i == null ? void 0 : i.numeric) != null ? a : !1;
    if (ot(n)) {
      if (s)
        for (const l of n)
          t[l] = (o = this[l]) != null ? o : jr[l];
      else
        for (const l of n)
          t[l] = this[l];
      if (ot(r))
        for (const l of r)
          delete t[l];
      return t;
    } else {
      const l = Object.assign(t, f(this, X));
      if (ot(r))
        for (const h of r)
          delete l[h];
      return s && hi(l), l;
    }
  }
  toJSON() {
    return Object.assign({}, f(this, X));
  }
  set(t = {}) {
    var c, u;
    if (typeof t != "object")
      throw new TypeError("Position - set error: 'position' is not an object.");
    const i = f(this, Jt);
    if (i !== void 0 && typeof ((c = i == null ? void 0 : i.options) == null ? void 0 : c.positionable) == "boolean" && !((u = i == null ? void 0 : i.options) != null && u.positionable))
      return this;
    const n = t.immediateElementUpdate === !0, r = f(this, X), s = f(this, Kt), a = i instanceof HTMLElement ? i : i == null ? void 0 : i.elementTarget, o = a instanceof HTMLElement && a.isConnected ? a : void 0, l = f(this, wi), h = f(this, dt);
    return o && (h.hasData(o) || (h.update(o), h.hasWillChange || (o.style.willChange = f(this, ut).ortho ? "transform" : "top, left, transform"), l.set(!0), f(this, xt).queued = !1), je(t, this), t = H(this, Ji, Zr).call(this, t, i, o, h), t === null) ? this : (Number.isFinite(t.left) && (t.left = Math.round(t.left), r.left !== t.left && (r.left = t.left, l.left = !0)), Number.isFinite(t.top) && (t.top = Math.round(t.top), r.top !== t.top && (r.top = t.top, l.top = !0)), (Number.isFinite(t.maxHeight) || t.maxHeight === null) && (t.maxHeight = typeof t.maxHeight == "number" ? Math.round(t.maxHeight) : null, r.maxHeight !== t.maxHeight && (r.maxHeight = t.maxHeight, l.maxHeight = !0)), (Number.isFinite(t.maxWidth) || t.maxWidth === null) && (t.maxWidth = typeof t.maxWidth == "number" ? Math.round(t.maxWidth) : null, r.maxWidth !== t.maxWidth && (r.maxWidth = t.maxWidth, l.maxWidth = !0)), (Number.isFinite(t.minHeight) || t.minHeight === null) && (t.minHeight = typeof t.minHeight == "number" ? Math.round(t.minHeight) : null, r.minHeight !== t.minHeight && (r.minHeight = t.minHeight, l.minHeight = !0)), (Number.isFinite(t.minWidth) || t.minWidth === null) && (t.minWidth = typeof t.minWidth == "number" ? Math.round(t.minWidth) : null, r.minWidth !== t.minWidth && (r.minWidth = t.minWidth, l.minWidth = !0)), (Number.isFinite(t.rotateX) || t.rotateX === null) && r.rotateX !== t.rotateX && (r.rotateX = s.rotateX = t.rotateX, l.transform = !0), (Number.isFinite(t.rotateY) || t.rotateY === null) && r.rotateY !== t.rotateY && (r.rotateY = s.rotateY = t.rotateY, l.transform = !0), (Number.isFinite(t.rotateZ) || t.rotateZ === null) && r.rotateZ !== t.rotateZ && (r.rotateZ = s.rotateZ = t.rotateZ, l.transform = !0), (Number.isFinite(t.scale) || t.scale === null) && (t.scale = typeof t.scale == "number" ? Math.max(0, Math.min(t.scale, 1e3)) : null, r.scale !== t.scale && (r.scale = s.scale = t.scale, l.transform = !0)), (typeof t.transformOrigin == "string" && Ce.includes(t.transformOrigin) || t.transformOrigin === null) && r.transformOrigin !== t.transformOrigin && (r.transformOrigin = t.transformOrigin, l.transformOrigin = !0), (Number.isFinite(t.translateX) || t.translateX === null) && r.translateX !== t.translateX && (r.translateX = s.translateX = t.translateX, l.transform = !0), (Number.isFinite(t.translateY) || t.translateY === null) && r.translateY !== t.translateY && (r.translateY = s.translateY = t.translateY, l.transform = !0), (Number.isFinite(t.translateZ) || t.translateZ === null) && r.translateZ !== t.translateZ && (r.translateZ = s.translateZ = t.translateZ, l.transform = !0), Number.isFinite(t.zIndex) && (t.zIndex = Math.round(t.zIndex), r.zIndex !== t.zIndex && (r.zIndex = t.zIndex, l.zIndex = !0)), (Number.isFinite(t.width) || t.width === "auto" || t.width === "inherit" || t.width === null) && (t.width = typeof t.width == "number" ? Math.round(t.width) : t.width, r.width !== t.width && (r.width = t.width, l.width = !0)), (Number.isFinite(t.height) || t.height === "auto" || t.height === "inherit" || t.height === null) && (t.height = typeof t.height == "number" ? Math.round(t.height) : t.height, r.height !== t.height && (r.height = t.height, l.height = !0)), o ? (typeof f(this, Ae).getDefault() != "object" && f(this, Ae).save({ name: "#defaultData", ...Object.assign({}, r) }), n ? (Re.immediate(o, f(this, xt)), E(this, qe, Promise.resolve(performance.now()))) : f(this, xt).queued || E(this, qe, Re.add(o, f(this, xt)))) : Re.updateSubscribers(f(this, xt)), this);
  }
  subscribe(t) {
    return f(this, Oe).push(t), t(Object.assign({}, f(this, X))), () => {
      const i = f(this, Oe).findIndex((n) => n === t);
      i >= 0 && f(this, Oe).splice(i, 1);
    };
  }
};
let mi = Ki;
X = new WeakMap(), Vi = new WeakMap(), wi = new WeakMap(), ut = new WeakMap(), Jt = new WeakMap(), G = new WeakMap(), dt = new WeakMap(), Oe = new WeakMap(), Kt = new WeakMap(), xt = new WeakMap(), qe = new WeakMap(), Ee = new WeakMap(), Ti = new WeakMap(), Ae = new WeakMap(), Ji = new WeakSet(), Zr = function({
  left: t,
  top: i,
  maxWidth: n,
  maxHeight: r,
  minWidth: s,
  minHeight: a,
  width: o,
  height: l,
  rotateX: h,
  rotateY: c,
  rotateZ: u,
  scale: d,
  transformOrigin: p,
  translateX: b,
  translateY: m,
  translateZ: g,
  zIndex: y,
  rotation: w,
  ..._
} = {}, x, O, T) {
  var I, k, S, W, R, L, lt, At, zt, z;
  let v = xa.copy(f(this, X));
  if (O.style.width === "" || o !== void 0)
    if (o === "auto" || v.width === "auto" && o !== null)
      v.width = "auto", o = T.offsetWidth;
    else if (o === "inherit" || v.width === "inherit" && o !== null)
      v.width = "inherit", o = T.offsetWidth;
    else {
      const D = Number.isFinite(o) ? o : v.width;
      v.width = o = Number.isFinite(D) ? Math.round(D) : T.offsetWidth;
    }
  else
    o = Number.isFinite(v.width) ? v.width : T.offsetWidth;
  if (O.style.height === "" || l !== void 0)
    if (l === "auto" || v.height === "auto" && l !== null)
      v.height = "auto", l = T.offsetHeight;
    else if (l === "inherit" || v.height === "inherit" && l !== null)
      v.height = "inherit", l = T.offsetHeight;
    else {
      const D = Number.isFinite(l) ? l : v.height;
      v.height = l = Number.isFinite(D) ? Math.round(D) : T.offsetHeight;
    }
  else
    l = Number.isFinite(v.height) ? v.height : T.offsetHeight;
  Number.isFinite(t) ? v.left = t : Number.isFinite(v.left) || (v.left = typeof ((I = f(this, ut).initialHelper) == null ? void 0 : I.getLeft) == "function" ? f(this, ut).initialHelper.getLeft(o) : 0), Number.isFinite(i) ? v.top = i : Number.isFinite(v.top) || (v.top = typeof ((k = f(this, ut).initialHelper) == null ? void 0 : k.getTop) == "function" ? f(this, ut).initialHelper.getTop(l) : 0), (Number.isFinite(r) || r === null) && (v.maxHeight = Number.isFinite(r) ? Math.round(r) : null), (Number.isFinite(n) || n === null) && (v.maxWidth = Number.isFinite(n) ? Math.round(n) : null), (Number.isFinite(a) || a === null) && (v.minHeight = Number.isFinite(a) ? Math.round(a) : null), (Number.isFinite(s) || s === null) && (v.minWidth = Number.isFinite(s) ? Math.round(s) : null), (Number.isFinite(h) || h === null) && (v.rotateX = h), (Number.isFinite(c) || c === null) && (v.rotateY = c), u !== v.rotateZ && (Number.isFinite(u) || u === null) ? v.rotateZ = u : w !== v.rotateZ && (Number.isFinite(w) || w === null) && (v.rotateZ = w), (Number.isFinite(b) || b === null) && (v.translateX = b), (Number.isFinite(m) || m === null) && (v.translateY = m), (Number.isFinite(g) || g === null) && (v.translateZ = g), (Number.isFinite(d) || d === null) && (v.scale = typeof d == "number" ? Math.max(0, Math.min(d, 1e3)) : null), (typeof p == "string" || p === null) && (v.transformOrigin = Ce.includes(p) ? p : null), (Number.isFinite(y) || y === null) && (v.zIndex = typeof y == "number" ? Math.round(y) : y);
  const N = f(this, Ti);
  if (N.length) {
    ft.parent = x, ft.el = O, ft.computed = T.computed, ft.transforms = f(this, Kt), ft.height = l, ft.width = o, ft.marginLeft = T.marginLeft, ft.marginTop = T.marginTop, ft.maxHeight = (S = T.maxHeight) != null ? S : v.maxHeight, ft.maxWidth = (W = T.maxWidth) != null ? W : v.maxWidth;
    const D = (L = (R = x == null ? void 0 : x.reactive) == null ? void 0 : R.minimized) != null ? L : !1;
    ft.minHeight = D ? (lt = v.minHeight) != null ? lt : 0 : T.minHeight || ((At = v.minHeight) != null ? At : 0), ft.minWidth = D ? (zt = v.minWidth) != null ? zt : 0 : T.minWidth || ((z = v.minWidth) != null ? z : 0);
    for (let ri = 0; ri < N.length; ri++)
      if (ft.position = v, ft.rest = _, v = N[ri].validator(ft), v === null)
        return null;
  }
  return v;
};
const xa = new Pn(), ft = {
  position: void 0,
  parent: void 0,
  el: void 0,
  computed: void 0,
  transforms: void 0,
  height: void 0,
  width: void 0,
  marginLeft: void 0,
  marginTop: void 0,
  maxHeight: void 0,
  maxWidth: void 0,
  minHeight: void 0,
  minWidth: void 0,
  rest: void 0
};
Object.seal(ft);
var Wt, Rt;
class Oa {
  constructor(t) {
    M(this, Wt, void 0);
    M(this, Rt, /* @__PURE__ */ new Map());
    E(this, Wt, t);
  }
  get(t = {}) {
    var i, n, r, s, a, o, l;
    return Object.assign(t, {
      position: (n = (i = f(this, Wt)) == null ? void 0 : i.position) == null ? void 0 : n.get(),
      beforeMinimized: (s = (r = f(this, Wt)) == null ? void 0 : r.position) == null ? void 0 : s.state.get({ name: "#beforeMinimized" }),
      options: Object.assign({}, (a = f(this, Wt)) == null ? void 0 : a.options),
      ui: { minimized: (l = (o = f(this, Wt)) == null ? void 0 : o.reactive) == null ? void 0 : l.minimized }
    });
  }
  getSave({ name: t }) {
    if (typeof t != "string")
      throw new TypeError("ApplicationState - getSave error: 'name' is not a string.");
    return f(this, Rt).get(t);
  }
  remove({ name: t }) {
    if (typeof t != "string")
      throw new TypeError("ApplicationState - remove: 'name' is not a string.");
    const i = f(this, Rt).get(t);
    return f(this, Rt).delete(t), i;
  }
  restore({
    name: t,
    remove: i = !1,
    async: n = !1,
    animateTo: r = !1,
    duration: s = 0.1,
    ease: a = pi,
    interpolate: o = ue
  }) {
    if (typeof t != "string")
      throw new TypeError("ApplicationState - restore error: 'name' is not a string.");
    const l = f(this, Rt).get(t);
    if (l) {
      if (i && f(this, Rt).delete(t), n)
        return this.set(l, { async: n, animateTo: r, duration: s, ease: a, interpolate: o }).then(() => l);
      this.set(l, { async: n, animateTo: r, duration: s, ease: a, interpolate: o });
    }
    return l;
  }
  save({ name: t, ...i }) {
    if (typeof t != "string")
      throw new TypeError("ApplicationState - save error: 'name' is not a string.");
    const n = this.get(i);
    return f(this, Rt).set(t, n), n;
  }
  set(t, { async: i = !1, animateTo: n = !1, duration: r = 0.1, ease: s = pi, interpolate: a = ue } = {}) {
    var h, c, u, d, p;
    if (!q(t))
      throw new TypeError("ApplicationState - restore error: 'data' is not an object.");
    const o = f(this, Wt);
    if (!q(t == null ? void 0 : t.position))
      return console.warn("ApplicationState.set warning: 'data.position' is not an object."), o;
    const l = o.rendered;
    if (n && !l)
      return console.warn("ApplicationState.set warning: Application is not rendered and 'animateTo' is true."), o;
    if (n) {
      if (t.position.transformOrigin !== o.position.transformOrigin && (o.position.transformOrigin = t.position.transformOrigin), q(t == null ? void 0 : t.ui)) {
        const m = typeof ((h = t.ui) == null ? void 0 : h.minimized) == "boolean" ? t.ui.minimized : !1;
        ((c = o == null ? void 0 : o.reactive) == null ? void 0 : c.minimized) && !m && o.maximize({ animate: !1, duration: 0 });
      }
      const b = o.position.animate.to(t.position, { duration: r, ease: s, interpolate: a }).finished.then((m) => {
        var g, y;
        if (m)
          return o;
        if (q(t == null ? void 0 : t.options) && (o == null || o.reactive.mergeOptions(t.options)), q(t == null ? void 0 : t.ui)) {
          const w = typeof ((g = t.ui) == null ? void 0 : g.minimized) == "boolean" ? t.ui.minimized : !1;
          !((y = o == null ? void 0 : o.reactive) != null && y.minimized) && w && o.minimize({ animate: !1, duration: 0 });
        }
        return q(t == null ? void 0 : t.beforeMinimized) && o.position.state.set({ name: "#beforeMinimized", ...t.beforeMinimized }), o;
      });
      if (i)
        return b;
    } else if (l) {
      if (q(t == null ? void 0 : t.options) && (o == null || o.reactive.mergeOptions(t.options)), q(t == null ? void 0 : t.ui)) {
        const b = typeof ((u = t.ui) == null ? void 0 : u.minimized) == "boolean" ? t.ui.minimized : !1;
        ((d = o == null ? void 0 : o.reactive) == null ? void 0 : d.minimized) && !b ? o.maximize({ animate: !1, duration: 0 }) : !((p = o == null ? void 0 : o.reactive) != null && p.minimized) && b && o.minimize({ animate: !1, duration: r });
      }
      q(t == null ? void 0 : t.beforeMinimized) && o.position.state.set({ name: "#beforeMinimized", ...t.beforeMinimized }), o.position.set(t.position);
    } else {
      let b = t.position;
      q(t.beforeMinimized) && (b = t.beforeMinimized, b.left = t.position.left, b.top = t.position.top), o.position.set(b);
    }
    return o;
  }
}
Wt = new WeakMap(), Rt = new WeakMap();
var _i, mt;
class Ea {
  constructor(t, i) {
    M(this, _i, void 0);
    M(this, mt, void 0);
    E(this, _i, t), E(this, mt, i);
  }
  get applicationShell() {
    return f(this, _i)[0];
  }
  component(t) {
    const i = f(this, mt)[t];
    return typeof i == "object" ? i == null ? void 0 : i.component : void 0;
  }
  *componentEntries() {
    for (let t = 0; t < f(this, mt).length; t++)
      yield [t, f(this, mt)[t].component];
  }
  *componentValues() {
    for (let t = 0; t < f(this, mt).length; t++)
      yield f(this, mt)[t].component;
  }
  data(t) {
    return f(this, mt)[t];
  }
  dataByComponent(t) {
    for (const i of f(this, mt))
      if (i.component === t)
        return i;
  }
  dataEntries() {
    return f(this, mt).entries();
  }
  dataValues() {
    return f(this, mt).values();
  }
  get length() {
    return f(this, mt).length;
  }
}
_i = new WeakMap(), mt = new WeakMap();
function Dn({ app: e, template: t, config: i, elementRootUpdate: n } = {}) {
  const r = typeof i.options == "object" ? i.options : {};
  let s;
  if (i.target instanceof HTMLElement ? s = i.target : t instanceof HTMLElement && typeof i.target == "string" ? s = t.querySelector(i.target) : s = document.createDocumentFragment(), s === void 0)
    throw console.log(`%c[TRL] loadSvelteConfig error - could not find target selector, '${i.target}', for config:
`, "background: rgb(57,34,34)", i), new Error();
  const a = i.class, o = xs({ ...i, target: s }, e), l = o.context.get("external");
  l.application = e, l.elementRootUpdate = n;
  let h;
  typeof e._eventbus == "object" && typeof e._eventbus.createProxy == "function" && (h = e._eventbus.createProxy(), l.eventbus = h);
  const c = new a(o);
  o.eventbus = h;
  let u;
  if (vn(c) && (u = c.elementRoot), s instanceof DocumentFragment && s.firstElementChild)
    u === void 0 && (u = s.firstElementChild), t.append(s);
  else if (i.target instanceof HTMLElement && u === void 0) {
    if (i.target instanceof HTMLElement && typeof r.selectorElement != "string")
      throw console.log(`%c[TRL] loadSvelteConfig error - HTMLElement target with no 'selectorElement' defined.

Note: If configuring an application shell and directly targeting a HTMLElement did you bind an'elementRoot' and include '<svelte:options accessors={true}/>'?

Offending config:
`, "background: rgb(57,34,34)", i), new Error();
    if (u = s.querySelector(r.selectorElement), u == null)
      throw console.log(`%c[TRL] loadSvelteConfig error - HTMLElement target with 'selectorElement', '${r.selectorElement}', not found for config:
`, "background: rgb(57,34,34)", i), new Error();
  }
  const d = !(i.target instanceof HTMLElement);
  return { config: o, component: c, element: u, injectHTML: d };
}
var V, Mi, Qt, ze, te, xi, Ge, ee, Qi, Br, tn, qr, en, Gr;
class Aa {
  constructor(t) {
    M(this, Qi);
    M(this, tn);
    M(this, en);
    M(this, V, void 0);
    M(this, Mi, !1);
    M(this, Qt, void 0);
    M(this, ze, void 0);
    M(this, te, void 0);
    M(this, xi, void 0);
    M(this, Ge, void 0);
    M(this, ee, []);
    E(this, V, t);
  }
  initialize() {
    if (!f(this, Mi))
      return E(this, Mi, !0), H(this, Qi, Br).call(this), {
        appOptionsUpdate: f(this, ze),
        uiOptionsUpdate: f(this, Ge),
        subscribe: H(this, tn, qr).bind(this),
        unsubscribe: H(this, en, Gr).bind(this)
      };
  }
  get dragging() {
    return f(this, te).dragging;
  }
  get minimized() {
    return f(this, te).minimized;
  }
  get resizing() {
    return f(this, te).resizing;
  }
  get draggable() {
    var t, i;
    return (i = (t = f(this, V)) == null ? void 0 : t.options) == null ? void 0 : i.draggable;
  }
  get headerButtonNoClose() {
    var t, i;
    return (i = (t = f(this, V)) == null ? void 0 : t.options) == null ? void 0 : i.headerButtonNoClose;
  }
  get headerButtonNoLabel() {
    var t, i;
    return (i = (t = f(this, V)) == null ? void 0 : t.options) == null ? void 0 : i.headerButtonNoLabel;
  }
  get headerNoTitleMinimized() {
    var t, i;
    return (i = (t = f(this, V)) == null ? void 0 : t.options) == null ? void 0 : i.headerNoTitleMinimized;
  }
  get minimizable() {
    var t, i;
    return (i = (t = f(this, V)) == null ? void 0 : t.options) == null ? void 0 : i.minimizable;
  }
  get popOut() {
    return f(this, V).popOut;
  }
  get resizable() {
    var t, i;
    return (i = (t = f(this, V)) == null ? void 0 : t.options) == null ? void 0 : i.resizable;
  }
  get storeAppOptions() {
    return f(this, Qt);
  }
  get storeUIState() {
    return f(this, xi);
  }
  get title() {
    return f(this, V).title;
  }
  set draggable(t) {
    typeof t == "boolean" && this.setOptions("draggable", t);
  }
  set headerButtonNoClose(t) {
    typeof t == "boolean" && this.setOptions("headerButtonNoClose", t);
  }
  set headerButtonNoLabel(t) {
    typeof t == "boolean" && this.setOptions("headerButtonNoLabel", t);
  }
  set headerNoTitleMinimized(t) {
    typeof t == "boolean" && this.setOptions("headerNoTitleMinimized", t);
  }
  set minimizable(t) {
    typeof t == "boolean" && this.setOptions("minimizable", t);
  }
  set popOut(t) {
    typeof t == "boolean" && this.setOptions("popOut", t);
  }
  set resizable(t) {
    typeof t == "boolean" && this.setOptions("resizable", t);
  }
  set title(t) {
    typeof t == "string" ? this.setOptions("title", t) : t == null && this.setOptions("title", "");
  }
  getOptions(t, i) {
    return Es(f(this, V).options, t, i);
  }
  mergeOptions(t) {
    f(this, ze).call(this, (i) => ci(i, t));
  }
  setOptions(t, i) {
    As(f(this, V).options, t, i) && f(this, ze).call(this, () => f(this, V).options);
  }
  updateHeaderButtons({
    headerButtonNoClose: t = f(this, V).options.headerButtonNoClose,
    headerButtonNoLabel: i = f(this, V).options.headerButtonNoLabel
  } = {}) {
    let n = f(this, V)._getHeaderButtons();
    if (typeof t == "boolean" && t && (n = n.filter((r) => r.class !== "close")), typeof i == "boolean" && i)
      for (const r of n)
        r.label = void 0;
    f(this, Ge).call(this, (r) => (r.headerButtons = n, r));
  }
}
V = new WeakMap(), Mi = new WeakMap(), Qt = new WeakMap(), ze = new WeakMap(), te = new WeakMap(), xi = new WeakMap(), Ge = new WeakMap(), ee = new WeakMap(), Qi = new WeakSet(), Br = function() {
  const t = It(f(this, V).options);
  E(this, ze, t.update);
  const i = {
    subscribe: t.subscribe,
    draggable: Y(t, "draggable"),
    headerButtonNoClose: Y(t, "headerButtonNoClose"),
    headerButtonNoLabel: Y(t, "headerButtonNoLabel"),
    headerNoTitleMinimized: Y(t, "headerNoTitleMinimized"),
    minimizable: Y(t, "minimizable"),
    popOut: Y(t, "popOut"),
    resizable: Y(t, "resizable"),
    title: Y(t, "title")
  };
  Object.freeze(i), E(this, Qt, i), E(this, te, {
    dragging: !1,
    headerButtons: [],
    minimized: f(this, V)._minimized,
    resizing: !1
  });
  const n = It(f(this, te));
  E(this, Ge, n.update);
  const r = {
    subscribe: n.subscribe,
    dragging: Y(n, "dragging"),
    headerButtons: bn(n, (s, a) => a(s.headerButtons)),
    minimized: bn(n, (s, a) => a(s.minimized)),
    resizing: Y(n, "resizing")
  };
  Object.freeze(r), E(this, xi, r);
}, tn = new WeakSet(), qr = function() {
  f(this, ee).push(Li(f(this, Qt).headerButtonNoClose, (t) => {
    this.updateHeaderButtons({ headerButtonNoClose: t });
  })), f(this, ee).push(Li(f(this, Qt).headerButtonNoLabel, (t) => {
    this.updateHeaderButtons({ headerButtonNoLabel: t });
  })), f(this, ee).push(Li(f(this, Qt).popOut, (t) => {
    t && f(this, V).rendered ? ui.windows[f(this, V).appId] = f(this, V) : delete ui.windows[f(this, V).appId];
  }));
}, en = new WeakSet(), Gr = function() {
  f(this, ee).forEach((t) => t()), E(this, ee, []);
};
var Se, Oi, et, Ft, Ue, De, Ve, Je, Pt, nn, $t, Ke, Wi;
const rn = class extends Application {
  constructor(i = {}) {
    super(i);
    M(this, Ke);
    M(this, Se, [null]);
    M(this, Oi, void 0);
    M(this, et, null);
    M(this, Ft, null);
    M(this, Ue, 95);
    M(this, De, !1);
    M(this, Ve, void 0);
    M(this, Je, void 0);
    M(this, Pt, []);
    M(this, nn, new Ea(f(this, Se), f(this, Pt)));
    M(this, $t, void 0);
    E(this, Oi, new Oa(this)), E(this, Ve, new mi(this, {
      ...this.position,
      ...this.options,
      initial: this.options.positionInitial,
      ortho: this.options.positionOrtho,
      validator: this.options.positionValidator
    })), delete this.position, Object.defineProperty(this, "position", {
      get: () => f(this, Ve),
      set: (n) => {
        typeof n == "object" && f(this, Ve).set(n);
      }
    }), E(this, Je, new Aa(this)), E(this, $t, f(this, Je).initialize());
  }
  static get defaultOptions() {
    return ci(super.defaultOptions, {
      defaultCloseAnimation: !0,
      draggable: !0,
      headerButtonNoClose: !1,
      headerButtonNoLabel: !1,
      headerNoTitleMinimized: !1,
      minHeight: MIN_WINDOW_HEIGHT,
      minWidth: MIN_WINDOW_WIDTH,
      positionable: !0,
      positionInitial: mi.Initial.browserCentered,
      positionOrtho: !0,
      positionValidator: mi.Validators.transformWindow,
      transformOrigin: "top left"
    });
  }
  get elementContent() {
    return f(this, Ft);
  }
  get elementTarget() {
    return f(this, et);
  }
  get reactive() {
    return f(this, Je);
  }
  get state() {
    return f(this, Oi);
  }
  get svelte() {
    return f(this, nn);
  }
  _activateCoreListeners(i) {
    super._activateCoreListeners(typeof this.options.template == "string" ? i : [f(this, et)]);
  }
  bringToTop({ force: i = !1 } = {}) {
    (i || this.popOut) && super.bringToTop(), document.activeElement !== document.body && !this.elementTarget.contains(document.activeElement) && (document.activeElement instanceof HTMLElement && document.activeElement.blur(), document.body.focus()), ui.activeWindow = this;
  }
  async close(i = {}) {
    const n = Application.RENDER_STATES;
    if (!i.force && ![n.RENDERED, n.ERROR].includes(this._state))
      return;
    f(this, $t).unsubscribe(), this._state = n.CLOSING;
    const r = f(this, et);
    if (!r)
      return this._state = n.CLOSED;
    const s = r.querySelector(".window-content");
    if (s) {
      s.style.overflow = "hidden";
      for (let l = s.children.length; --l >= 0; )
        s.children[l].style.overflow = "hidden";
    }
    for (const l of this.constructor._getInheritanceChain())
      Hooks.call(`close${l.name}`, this, r);
    if (typeof this.options.defaultCloseAnimation == "boolean" ? this.options.defaultCloseAnimation : !0) {
      r.style.minHeight = "0";
      const { paddingBottom: l, paddingTop: h } = globalThis.getComputedStyle(r);
      await r.animate([
        { maxHeight: `${r.clientHeight}px`, paddingTop: h, paddingBottom: l },
        { maxHeight: 0, paddingTop: 0, paddingBottom: 0 }
      ], { duration: 250, easing: "ease-in", fill: "forwards" }).finished;
    }
    const o = [];
    for (const l of f(this, Pt)) {
      o.push(Ms(l.component));
      const h = l.config.eventbus;
      typeof h == "object" && typeof h.off == "function" && (h.off(), l.config.eventbus = void 0);
    }
    await Promise.all(o), f(this, Pt).length = 0, r.remove(), this.position.state.restore({
      name: "#beforeMinimized",
      properties: ["width", "height"],
      silent: !0,
      remove: !0
    }), f(this, Se)[0] = null, this._element = null, E(this, Ft, null), E(this, et, null), delete ui.windows[this.appId], this._minimized = !1, this._scrollPositions = null, this._state = n.CLOSED, E(this, De, !1), f(this, $t).uiOptionsUpdate((l) => ci(l, { minimized: this._minimized }));
  }
  _injectHTML(i) {
    var a, o, l, h, c;
    if (this.popOut && i.length === 0 && Array.isArray(this.options.svelte))
      throw new Error("SvelteApplication - _injectHTML - A popout app with no template can only support one Svelte component.");
    this.reactive.updateHeaderButtons();
    const n = () => {
      let u = 0;
      return (d) => d != null && u++ > 0 ? (H(this, Ke, Wi).call(this), !0) : !1;
    };
    if (Array.isArray(this.options.svelte))
      for (const u of this.options.svelte) {
        const d = Dn({
          app: this,
          template: i[0],
          config: u,
          elementRootUpdate: n
        });
        if (vn(d.component)) {
          if (this.svelte.applicationShell !== null)
            throw new Error(`SvelteApplication - _injectHTML - An application shell is already mounted; offending config:
                    ${JSON.stringify(u)}`);
          f(this, Se)[0] = d.component, Fn(d.component) && Array.isArray((o = (a = d.component) == null ? void 0 : a.$$) == null ? void 0 : o.on_hmr) && d.component.$$.on_hmr.push(() => () => H(this, Ke, Wi).call(this));
        }
        f(this, Pt).push(d);
      }
    else if (typeof this.options.svelte == "object") {
      const u = Dn({
        app: this,
        template: i[0],
        config: this.options.svelte,
        elementRootUpdate: n
      });
      if (vn(u.component)) {
        if (this.svelte.applicationShell !== null)
          throw new Error(`SvelteApplication - _injectHTML - An application shell is already mounted; offending config:
                 ${JSON.stringify(this.options.svelte)}`);
        f(this, Se)[0] = u.component, Fn(u.component) && Array.isArray((h = (l = u.component) == null ? void 0 : l.$$) == null ? void 0 : h.on_hmr) && u.component.$$.on_hmr.push(() => () => H(this, Ke, Wi).call(this));
      }
      f(this, Pt).push(u);
    }
    const r = i.length && i[0] instanceof DocumentFragment;
    let s = !0;
    for (const u of f(this, Pt))
      if (!u.injectHTML) {
        s = !1;
        break;
      }
    if (s && super._injectHTML(i), this.svelte.applicationShell !== null)
      this._element = $(this.svelte.applicationShell.elementRoot), E(this, Ft, Hi(this.svelte.applicationShell, "elementContent") ? this.svelte.applicationShell.elementContent : null), E(this, et, Hi(this.svelte.applicationShell, "elementTarget") ? this.svelte.applicationShell.elementTarget : null);
    else if (r) {
      for (const u of f(this, Pt))
        if (u.element instanceof HTMLElement) {
          this._element = $(u.element);
          break;
        }
    }
    if (f(this, et) === null) {
      const u = typeof this.options.selectorTarget == "string" ? this._element.find(this.options.selectorTarget) : this._element;
      E(this, et, u[0]);
    }
    if (f(this, et) === null || f(this, et) === void 0 || f(this, et).length === 0)
      throw new Error(`SvelteApplication - _injectHTML: Target element '${this.options.selectorTarget}' not found.`);
    typeof this.options.positionable == "boolean" && this.options.positionable && (f(this, et).style.zIndex = typeof this.options.zIndex == "number" ? this.options.zIndex : (c = f(this, Ue)) != null ? c : 95), f(this, $t).subscribe();
  }
  async maximize({ animate: i = !0, duration: n = 0.1 } = {}) {
    var c, u, d, p, b, m;
    if (!this.popOut || [!1, null].includes(this._minimized))
      return;
    this._minimized = null;
    const r = n * 1e3, s = this.elementTarget, a = s.querySelector(".window-header"), o = s.querySelector(".window-content"), l = this.position.state.get({ name: "#beforeMinimized" });
    i && await this.position.state.restore({
      name: "#beforeMinimized",
      async: !0,
      animateTo: !0,
      properties: ["width"],
      duration: 0.1
    });
    for (let g = a.children.length; --g >= 0; )
      a.children[g].style.display = null;
    o.style.display = null;
    let h;
    i ? { constraints: h } = this.position.state.restore({
      name: "#beforeMinimized",
      animateTo: !0,
      properties: ["height"],
      remove: !0,
      duration: n
    }) : { constraints: h } = this.position.state.remove({ name: "#beforeMinimized" }), await o.animate([
      { maxHeight: 0, paddingTop: 0, paddingBottom: 0, offset: 0 },
      { ...h, offset: 1 },
      { maxHeight: "100%", offset: 1 }
    ], { duration: r, fill: "forwards" }).finished, this.position.set({
      minHeight: (d = (u = l.minHeight) != null ? u : (c = this.options) == null ? void 0 : c.minHeight) != null ? d : MIN_WINDOW_HEIGHT,
      minWidth: (m = (b = l.minWidth) != null ? b : (p = this.options) == null ? void 0 : p.minWidth) != null ? m : MIN_WINDOW_WIDTH
    }), s.style.minWidth = null, s.style.minHeight = null, s.classList.remove("minimized"), this._minimized = !1, setTimeout(() => {
      o.style.overflow = null;
      for (let g = o.children.length; --g >= 0; )
        o.children[g].style.overflow = null;
    }, 50), f(this, $t).uiOptionsUpdate((g) => ci(g, { minimized: !1 }));
  }
  async minimize({ animate: i = !0, duration: n = 0.1 } = {}) {
    if (!this.rendered || !this.popOut || [!0, null].includes(this._minimized))
      return;
    f(this, $t).uiOptionsUpdate((m) => ci(m, { minimized: !0 })), this._minimized = null;
    const r = n * 1e3, s = this.elementTarget, a = s.querySelector(".window-header"), o = s.querySelector(".window-content"), l = this.position.minWidth, h = this.position.minHeight;
    if (this.position.set({ minWidth: 100, minHeight: 30 }), s.style.minWidth = "100px", s.style.minHeight = "30px", o) {
      o.style.overflow = "hidden";
      for (let m = o.children.length; --m >= 0; )
        o.children[m].style.overflow = "hidden";
    }
    const { paddingBottom: c, paddingTop: u } = globalThis.getComputedStyle(o), d = {
      maxHeight: `${o.clientHeight}px`,
      paddingTop: u,
      paddingBottom: c
    };
    i ? o.animate([
      d,
      { maxHeight: 0, paddingTop: 0, paddingBottom: 0 }
    ], { duration: r, fill: "forwards" }).finished.then(() => o.style.display = "none") : setTimeout(() => o.style.display = "none", r);
    const p = this.position.state.save({ name: "#beforeMinimized", constraints: d });
    p.minWidth = l, p.minHeight = h;
    const b = a.offsetHeight;
    this.position.minHeight = b, i && await this.position.animate.to({ height: b }, { duration: n }).finished;
    for (let m = a.children.length; --m >= 0; ) {
      const g = a.children[m].className;
      g.includes("window-title") || g.includes("close") || g.includes("keep-minimized") || (a.children[m].style.display = "none");
    }
    i && await this.position.animate.to({ width: MIN_WINDOW_WIDTH }, { duration: 0.1 }).finished, s.classList.add("minimized"), this._minimized = !0;
  }
  onSvelteMount({ element: i, elementContent: n, elementTarget: r } = {}) {
  }
  onSvelteRemount({ element: i, elementContent: n, elementTarget: r } = {}) {
  }
  _replaceHTML(i, n) {
    !i.length || this.reactive.updateHeaderButtons();
  }
  async _render(i = !1, n = {}) {
    if (this._state === Application.RENDER_STATES.NONE && document.querySelector(`#${this.id}`) instanceof HTMLElement) {
      console.warn(`SvelteApplication - _render: A DOM element already exists for CSS ID '${this.id}'. Cancelling initial render for new application with appId '${this.appId}'.`);
      return;
    }
    await super._render(i, n), f(this, De) || (this.onSvelteMount({ element: this._element[0], elementContent: f(this, Ft), elementTarget: f(this, et) }), E(this, De, !0));
  }
  async _renderInner(i) {
    const n = typeof this.template == "string" ? await renderTemplate(this.template, i) : document.createDocumentFragment();
    return $(n);
  }
  async _renderOuter() {
    const i = await super._renderOuter();
    return E(this, Ue, i[0].style.zIndex), i;
  }
  setPosition(i) {
    return this.position.set(i);
  }
};
let _n = rn;
Se = new WeakMap(), Oi = new WeakMap(), et = new WeakMap(), Ft = new WeakMap(), Ue = new WeakMap(), De = new WeakMap(), Ve = new WeakMap(), Je = new WeakMap(), Pt = new WeakMap(), nn = new WeakMap(), $t = new WeakMap(), Ke = new WeakSet(), Wi = function() {
  var n;
  const i = this.svelte.applicationShell;
  if (i !== null) {
    if (this._element = $(i.elementRoot), E(this, Ft, Hi(i, "elementContent") ? i.elementContent : null), E(this, et, Hi(i, "elementTarget") ? i.elementTarget : null), f(this, et) === null) {
      const r = typeof this.options.selectorTarget == "string" ? this._element.find(this.options.selectorTarget) : this._element;
      E(this, et, r[0]);
    }
    typeof this.options.positionable == "boolean" && this.options.positionable && (f(this, et).style.zIndex = typeof this.options.zIndex == "number" ? this.options.zIndex : (n = f(this, Ue)) != null ? n : 95, ln(rn.prototype, this, "bringToTop").call(this), this.position.set(this.position.get())), ln(rn.prototype, this, "_activateCoreListeners").call(this, [f(this, et)]), this.onSvelteRemount({ element: this._element[0], elementContent: f(this, Ft), elementTarget: f(this, et) });
  }
};
const le = () => {
}, Le = {};
function Mn(e, t) {
  return Ni.add(e, t), {
    update: (i) => {
      Ni.remove(e, t), t = i, Ni.add(e, t);
    },
    destroy: () => {
      Ni.remove(e, t);
    }
  };
}
Mn.updateCache = function(e) {
  var i, n, r, s, a, o, l, h, c, u, d, p, b, m, g, y;
  if (!(e instanceof HTMLElement))
    throw new TypeError("resizeObserverUpdate error: 'el' is not an HTMLElement.");
  const t = he.get(e);
  if (Array.isArray(t)) {
    const w = globalThis.getComputedStyle(e), _ = (n = (i = P(e.style.borderBottom)) != null ? i : P(w.borderBottom)) != null ? n : 0, x = (s = (r = P(e.style.borderLeft)) != null ? r : P(w.borderLeft)) != null ? s : 0, O = (o = (a = P(e.style.borderRight)) != null ? a : P(w.borderRight)) != null ? o : 0, T = (h = (l = P(e.style.borderTop)) != null ? l : P(w.borderTop)) != null ? h : 0, v = (u = (c = P(e.style.paddingBottom)) != null ? c : P(w.paddingBottom)) != null ? u : 0, N = (p = (d = P(e.style.paddingLeft)) != null ? d : P(w.paddingLeft)) != null ? p : 0, I = (m = (b = P(e.style.paddingRight)) != null ? b : P(w.paddingRight)) != null ? m : 0, k = (y = (g = P(e.style.paddingTop)) != null ? g : P(w.paddingTop)) != null ? y : 0, S = x + O + N + I, W = T + _ + k + v;
    for (const R of t)
      R.styles.additionalWidth = S, R.styles.additionalHeight = W, In(R, R.contentWidth, R.contentHeight);
  }
};
const he = /* @__PURE__ */ new Map();
class Ni {
  static add(t, i) {
    var b, m, g, y, w, _, x, O, T, v, N, I, k, S, W, R;
    const n = za(i);
    if (n === 0)
      throw new Error("'target' does not match supported ResizeObserverManager update mechanisms.");
    const r = globalThis.getComputedStyle(t), s = (m = (b = P(t.style.borderBottom)) != null ? b : P(r.borderBottom)) != null ? m : 0, a = (y = (g = P(t.style.borderLeft)) != null ? g : P(r.borderLeft)) != null ? y : 0, o = (_ = (w = P(t.style.borderRight)) != null ? w : P(r.borderRight)) != null ? _ : 0, l = (O = (x = P(t.style.borderTop)) != null ? x : P(r.borderTop)) != null ? O : 0, h = (v = (T = P(t.style.paddingBottom)) != null ? T : P(r.paddingBottom)) != null ? v : 0, c = (I = (N = P(t.style.paddingLeft)) != null ? N : P(r.paddingLeft)) != null ? I : 0, u = (S = (k = P(t.style.paddingRight)) != null ? k : P(r.paddingRight)) != null ? S : 0, d = (R = (W = P(t.style.paddingTop)) != null ? W : P(r.paddingTop)) != null ? R : 0, p = {
      updateType: n,
      target: i,
      contentWidth: 0,
      contentHeight: 0,
      styles: {
        additionalWidth: a + o + c + u,
        additionalHeight: l + s + d + h
      }
    };
    he.has(t) ? he.get(t).push(p) : he.set(t, [p]), Vn.observe(t);
  }
  static remove(t, i = void 0) {
    const n = he.get(t);
    if (Array.isArray(n)) {
      const r = n.findIndex((s) => s.target === i);
      r >= 0 && (In(n[r], void 0, void 0), n.splice(r, 1)), n.length === 0 && (he.delete(t), Vn.unobserve(t));
    }
  }
}
const ht = {
  none: 0,
  attribute: 1,
  function: 2,
  resizeObserved: 3,
  setContentBounds: 4,
  setDimension: 5,
  storeObject: 6,
  storesObject: 7
}, Vn = new ResizeObserver((e) => {
  for (const t of e) {
    const i = he.get(t == null ? void 0 : t.target);
    if (Array.isArray(i)) {
      const n = t.contentRect.width, r = t.contentRect.height;
      for (const s of i)
        In(s, n, r);
    }
  }
});
function za(e) {
  if ((e == null ? void 0 : e.resizeObserved) instanceof Function)
    return ht.resizeObserved;
  if ((e == null ? void 0 : e.setDimension) instanceof Function)
    return ht.setDimension;
  if ((e == null ? void 0 : e.setContentBounds) instanceof Function)
    return ht.setContentBounds;
  const t = typeof e;
  if (t === "object" || t === "function") {
    if ($n(e.resizeObserved))
      return ht.storeObject;
    const i = e == null ? void 0 : e.stores;
    if ((typeof i == "object" || typeof i == "function") && $n(i.resizeObserved))
      return ht.storesObject;
  }
  return t === "object" ? ht.attribute : t === "function" ? ht.function : ht.none;
}
function In(e, t, i) {
  var o, l, h;
  const n = e.styles;
  e.contentWidth = t, e.contentHeight = i;
  const r = Number.isFinite(t) ? t + n.additionalWidth : void 0, s = Number.isFinite(i) ? i + n.additionalHeight : void 0, a = e.target;
  switch (e.updateType) {
    case ht.attribute:
      a.contentWidth = t, a.contentHeight = i, a.offsetWidth = r, a.offsetHeight = s;
      break;
    case ht.function:
      a == null || a(r, s, t, i);
      break;
    case ht.resizeObserved:
      (o = a.resizeObserved) == null || o.call(a, r, s, t, i);
      break;
    case ht.setContentBounds:
      (l = a.setContentBounds) == null || l.call(a, t, i);
      break;
    case ht.setDimension:
      (h = a.setDimension) == null || h.call(a, r, s);
      break;
    case ht.storeObject:
      a.resizeObserved.update((c) => (c.contentHeight = i, c.contentWidth = t, c.offsetHeight = s, c.offsetWidth = r, c));
      break;
    case ht.storesObject:
      a.stores.resizeObserved.update((c) => (c.contentHeight = i, c.contentWidth = t, c.offsetHeight = s, c.offsetWidth = r, c));
      break;
  }
}
function xn(e, t) {
  function i() {
    if (typeof t == "object")
      for (const n of Object.keys(t))
        e.style.setProperty(`${n}`, t[n]);
  }
  return i(), {
    update(n) {
      t = n, i();
    }
  };
}
function Ur(e, {
  position: t,
  active: i = !0,
  button: n = 0,
  storeDragging: r = void 0,
  ease: s = !1,
  easeOptions: a = { duration: 0.1, ease: Yt }
}) {
  let o = null, l = {}, h = !1, c = t.animate.quickTo(["top", "left"], a);
  const u = {
    dragDown: ["pointerdown", (y) => b(y), !1],
    dragMove: ["pointermove", (y) => m(y), !1],
    dragUp: ["pointerup", (y) => g(y), !1]
  };
  function d() {
    e.addEventListener(...u.dragDown), e.classList.add("draggable");
  }
  function p() {
    typeof (r == null ? void 0 : r.set) == "function" && r.set(!1), e.removeEventListener(...u.dragDown), e.removeEventListener(...u.dragMove), e.removeEventListener(...u.dragUp), e.classList.remove("draggable");
  }
  i && d();
  function b(y) {
    y.button !== n || !y.isPrimary || (y.preventDefault(), h = !1, o = t.get(), l = { x: y.clientX, y: y.clientY }, e.addEventListener(...u.dragMove), e.addEventListener(...u.dragUp), e.setPointerCapture(y.pointerId));
  }
  function m(y) {
    if ((y.buttons & 1) === 0) {
      g(y);
      return;
    }
    if (y.button !== -1 || !y.isPrimary)
      return;
    y.preventDefault(), !h && typeof (r == null ? void 0 : r.set) == "function" && (h = !0, r.set(!0));
    const w = o.left + (y.clientX - l.x), _ = o.top + (y.clientY - l.y);
    s ? c(_, w) : (un.left = w, un.top = _, t.set(un));
  }
  function g(y) {
    y.preventDefault(), h = !1, typeof (r == null ? void 0 : r.set) == "function" && r.set(!1), e.removeEventListener(...u.dragMove), e.removeEventListener(...u.dragUp);
  }
  return {
    update: (y) => {
      typeof y.active == "boolean" && (i = y.active, i ? d() : p()), typeof y.button == "number" && (n = y.button), y.position !== void 0 && y.position !== t && (t = y.position, c = t.animate.quickTo(["top", "left"], a)), typeof y.ease == "boolean" && (s = y.ease), typeof y.easeOptions == "object" && (a = y.easeOptions, c.options(a));
    },
    destroy: () => p()
  };
}
var Qe, _t, He, Xt, ce;
class Sa {
  constructor({ ease: t, easeOptions: i } = {}) {
    M(this, Xt);
    M(this, Qe, !1);
    M(this, _t, { duration: 0.1, ease: Yt });
    M(this, He, []);
    Object.defineProperty(this, "ease", {
      get: () => f(this, Qe),
      set: (n) => {
        if (typeof n != "boolean")
          throw new TypeError("'ease' is not a boolean.");
        E(this, Qe, n), H(this, Xt, ce).call(this);
      },
      enumerable: !0
    }), Object.defineProperty(this, "easeOptions", {
      get: () => f(this, _t),
      set: (n) => {
        if (n === null || typeof n != "object")
          throw new TypeError("'easeOptions' is not an object.");
        if (n.duration !== void 0) {
          if (!Number.isFinite(n.duration))
            throw new TypeError("'easeOptions.duration' is not a finite number.");
          if (n.duration < 0)
            throw new Error("'easeOptions.duration' is less than 0.");
          f(this, _t).duration = n.duration;
        }
        if (n.ease !== void 0) {
          if (typeof n.ease != "function" && typeof n.ease != "string")
            throw new TypeError("'easeOptions.ease' is not a function or string.");
          f(this, _t).ease = n.ease;
        }
        H(this, Xt, ce).call(this);
      },
      enumerable: !0
    }), t !== void 0 && (this.ease = t), i !== void 0 && (this.easeOptions = i);
  }
  get easeDuration() {
    return f(this, _t).duration;
  }
  get easeValue() {
    return f(this, _t).ease;
  }
  set easeDuration(t) {
    if (!Number.isFinite(t))
      throw new TypeError("'duration' is not a finite number.");
    if (t < 0)
      throw new Error("'duration' is less than 0.");
    f(this, _t).duration = t, H(this, Xt, ce).call(this);
  }
  set easeValue(t) {
    if (typeof t != "function" && typeof t != "string")
      throw new TypeError("'value' is not a function or string.");
    f(this, _t).ease = t, H(this, Xt, ce).call(this);
  }
  reset() {
    E(this, Qe, !1), E(this, _t, { duration: 0.1, ease: Yt }), H(this, Xt, ce).call(this);
  }
  resetEase() {
    E(this, _t, { duration: 0.1, ease: Yt }), H(this, Xt, ce).call(this);
  }
  subscribe(t) {
    return f(this, He).push(t), t(this), () => {
      const i = f(this, He).findIndex((n) => n === t);
      i >= 0 && f(this, He).splice(i, 1);
    };
  }
}
Qe = new WeakMap(), _t = new WeakMap(), He = new WeakMap(), Xt = new WeakSet(), ce = function() {
  const t = f(this, He);
  if (t.length > 0)
    for (let i = 0; i < t.length; i++)
      t[i](this);
};
Ur.options = (e) => new Sa(e);
const un = { left: 0, top: 0 };
function Xi(e, t) {
  const i = typeof t != "object" ? game.i18n.localize(e) : game.i18n.format(e, t);
  return i !== void 0 ? i : "";
}
function Ha(e) {
  zn(e, "svelte-1s361pr", "p.svelte-1s361pr{color:red;font-size:18px}");
}
function Jn(e, t, i) {
  const n = e.slice();
  return n[2] = t[i], n;
}
function Na(e) {
  let t;
  return {
    c() {
      t = Et("p"), t.textContent = "Container warning: No children.", pt(t, "class", "svelte-1s361pr");
    },
    m(i, n) {
      Mt(i, t, n);
    },
    p: tt,
    i: tt,
    o: tt,
    d(i) {
      i && yt(t);
    }
  };
}
function Pa(e) {
  let t, i, n = e[1], r = [];
  for (let a = 0; a < n.length; a += 1)
    r[a] = Kn(Jn(e, n, a));
  const s = (a) => rt(r[a], 1, 1, () => {
    r[a] = null;
  });
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      t = Ei();
    },
    m(a, o) {
      for (let l = 0; l < r.length; l += 1)
        r[l].m(a, o);
      Mt(a, t, o), i = !0;
    },
    p(a, o) {
      if (o & 2) {
        n = a[1];
        let l;
        for (l = 0; l < n.length; l += 1) {
          const h = Jn(a, n, l);
          r[l] ? (r[l].p(h, o), nt(r[l], 1)) : (r[l] = Kn(h), r[l].c(), nt(r[l], 1), r[l].m(t.parentNode, t));
        }
        for (Ne(), l = n.length; l < r.length; l += 1)
          s(l);
        Pe();
      }
    },
    i(a) {
      if (!i) {
        for (let o = 0; o < n.length; o += 1)
          nt(r[o]);
        i = !0;
      }
    },
    o(a) {
      r = r.filter(Boolean);
      for (let o = 0; o < r.length; o += 1)
        rt(r[o]);
      i = !1;
    },
    d(a) {
      fr(r, a), a && yt(t);
    }
  };
}
function Kn(e) {
  let t, i, n;
  const r = [e[2].props];
  var s = e[2].class;
  function a(o) {
    let l = {};
    for (let h = 0; h < r.length; h += 1)
      l = On(l, r[h]);
    return { props: l };
  }
  return s && (t = new s(a())), {
    c() {
      t && se(t.$$.fragment), i = Ei();
    },
    m(o, l) {
      t && Zt(t, o, l), Mt(o, i, l), n = !0;
    },
    p(o, l) {
      const h = l & 2 ? pr(r, [gr(o[2].props)]) : {};
      if (s !== (s = o[2].class)) {
        if (t) {
          Ne();
          const c = t;
          rt(c.$$.fragment, 1, 0, () => {
            Bt(c, 1);
          }), Pe();
        }
        s ? (t = new s(a()), se(t.$$.fragment), nt(t.$$.fragment, 1), Zt(t, i.parentNode, i)) : t = null;
      } else
        s && t.$set(h);
    },
    i(o) {
      n || (t && nt(t.$$.fragment, o), n = !0);
    },
    o(o) {
      t && rt(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && yt(i), t && Bt(t, o);
    }
  };
}
function Ia(e) {
  let t, i, n, r, s;
  const a = [Pa, Na], o = [];
  function l(h, c) {
    return c & 2 && (t = null), t == null && (t = !!Array.isArray(h[1])), t ? 0 : h[0] ? 1 : -1;
  }
  return ~(i = l(e, -1)) && (n = o[i] = a[i](e)), {
    c() {
      n && n.c(), r = Ei();
    },
    m(h, c) {
      ~i && o[i].m(h, c), Mt(h, r, c), s = !0;
    },
    p(h, [c]) {
      let u = i;
      i = l(h, c), i === u ? ~i && o[i].p(h, c) : (n && (Ne(), rt(o[u], 1, 1, () => {
        o[u] = null;
      }), Pe()), ~i ? (n = o[i], n ? n.p(h, c) : (n = o[i] = a[i](h), n.c()), nt(n, 1), n.m(r.parentNode, r)) : n = null);
    },
    i(h) {
      s || (nt(n), s = !0);
    },
    o(h) {
      rt(n), s = !1;
    },
    d(h) {
      ~i && o[i].d(h), h && yt(r);
    }
  };
}
function ka(e, t, i) {
  let { warn: n = !1 } = t, { children: r = void 0 } = t;
  return e.$$set = (s) => {
    "warn" in s && i(0, n = s.warn), "children" in s && i(1, r = s.children);
  }, [n, r];
}
class La extends ni {
  constructor(t) {
    super(), ii(this, t, ka, Ia, oe, { warn: 0, children: 1 }, Ha);
  }
  get warn() {
    return this.$$.ctx[0];
  }
  set warn(t) {
    this.$$set({ warn: t }), J();
  }
  get children() {
    return this.$$.ctx[1];
  }
  set children(t) {
    this.$$set({ children: t }), J();
  }
}
function Ca(e) {
  let t, i, n, r, s, a, o;
  return {
    c() {
      t = Et("a"), i = new fs(!1), n = sn(e[2]), i.a = n, pt(t, "class", r = "header-button " + e[0].class);
    },
    m(l, h) {
      Mt(l, t, h), i.m(e[1], t), re(t, n), a || (o = [
        li(t, "click", zi(Ai(e[4])), !0),
        li(t, "pointerdown", zi(Ai(Wa)), !0),
        li(t, "mousedown", zi(Ai(Ra)), !0),
        li(t, "dblclick", zi(Ai(Fa)), !0),
        ie(s = xn.call(null, t, e[3]))
      ], a = !0);
    },
    p(l, [h]) {
      h & 2 && i.p(l[1]), h & 4 && cr(n, l[2]), h & 1 && r !== (r = "header-button " + l[0].class) && pt(t, "class", r), s && Ot(s.update) && h & 8 && s.update.call(null, l[3]);
    },
    i: tt,
    o: tt,
    d(l) {
      l && yt(t), a = !1, kt(o);
    }
  };
}
const ja = /^\s*<.*>$/, Wa = () => null, Ra = () => null, Fa = () => null;
function $a(e, t, i) {
  let { button: n } = t, r, s, a, o;
  function l(h) {
    var u;
    const c = (u = n.callback) != null ? u : n.onclick;
    typeof c == "function" && (c.call(n, h), i(0, n));
  }
  return e.$$set = (h) => {
    "button" in h && i(0, n = h.button);
  }, e.$$.update = () => {
    e.$$.dirty & 33 && n && (i(5, a = typeof n.title == "string" ? Xi(n.title) : ""), i(1, r = typeof n.icon != "string" ? void 0 : ja.test(n.icon) ? n.icon : `<i class="${n.icon}" title="${a}"></i>`), i(2, s = typeof n.label == "string" ? Xi(n.label) : ""), i(3, o = typeof n.styles == "object" ? n.styles : void 0));
  }, [n, r, s, o, l, a];
}
class Xa extends ni {
  constructor(t) {
    super(), ii(this, t, $a, Ca, oe, { button: 0 });
  }
  get button() {
    return this.$$.ctx[0];
  }
  set button(t) {
    this.$$set({ button: t }), J();
  }
}
function Ya(e) {
  zn(e, "svelte-3umz0z", ".window-title.svelte-3umz0z{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}");
}
function Qn(e, t, i) {
  const n = e.slice();
  return n[20] = t[i], n;
}
function tr(e) {
  let t, i, n;
  const r = [e[20].props];
  var s = e[20].class;
  function a(o) {
    let l = {};
    for (let h = 0; h < r.length; h += 1)
      l = On(l, r[h]);
    return { props: l };
  }
  return s && (t = new s(a())), {
    c() {
      t && se(t.$$.fragment), i = Ei();
    },
    m(o, l) {
      t && Zt(t, o, l), Mt(o, i, l), n = !0;
    },
    p(o, l) {
      const h = l & 8 ? pr(r, [gr(o[20].props)]) : {};
      if (s !== (s = o[20].class)) {
        if (t) {
          Ne();
          const c = t;
          rt(c.$$.fragment, 1, 0, () => {
            Bt(c, 1);
          }), Pe();
        }
        s ? (t = new s(a()), se(t.$$.fragment), nt(t.$$.fragment, 1), Zt(t, i.parentNode, i)) : t = null;
      } else
        s && t.$set(h);
    },
    i(o) {
      n || (t && nt(t.$$.fragment, o), n = !0);
    },
    o(o) {
      t && rt(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && yt(i), t && Bt(t, o);
    }
  };
}
function er(e) {
  let t, i, n = Xi(e[5]) + "", r, s, a, o, l, h, c, u = e[3], d = [];
  for (let b = 0; b < u.length; b += 1)
    d[b] = tr(Qn(e, u, b));
  const p = (b) => rt(d[b], 1, 1, () => {
    d[b] = null;
  });
  return {
    c() {
      t = Et("header"), i = Et("h4"), r = sn(n), s = dn();
      for (let b = 0; b < d.length; b += 1)
        d[b].c();
      pt(i, "class", "window-title svelte-3umz0z"), Wn(i, "display", e[2], !1), pt(t, "class", "window-header flexrow");
    },
    m(b, m) {
      Mt(b, t, m), re(t, i), re(i, r), re(t, s);
      for (let g = 0; g < d.length; g += 1)
        d[g].m(t, null);
      l = !0, h || (c = [
        ie(a = e[0].call(null, t, e[1])),
        ie(o = e[12].call(null, t, e[4]))
      ], h = !0);
    },
    p(b, m) {
      if ((!l || m & 32) && n !== (n = Xi(b[5]) + "") && cr(r, n), m & 4 && Wn(i, "display", b[2], !1), m & 8) {
        u = b[3];
        let g;
        for (g = 0; g < u.length; g += 1) {
          const y = Qn(b, u, g);
          d[g] ? (d[g].p(y, m), nt(d[g], 1)) : (d[g] = tr(y), d[g].c(), nt(d[g], 1), d[g].m(t, null));
        }
        for (Ne(), g = u.length; g < d.length; g += 1)
          p(g);
        Pe();
      }
      a && Ot(a.update) && m & 2 && a.update.call(null, b[1]), o && Ot(o.update) && m & 16 && o.update.call(null, b[4]);
    },
    i(b) {
      if (!l) {
        for (let m = 0; m < u.length; m += 1)
          nt(d[m]);
        l = !0;
      }
    },
    o(b) {
      d = d.filter(Boolean);
      for (let m = 0; m < d.length; m += 1)
        rt(d[m]);
      l = !1;
    },
    d(b) {
      b && yt(t), fr(d, b), h = !1, kt(c);
    }
  };
}
function Za(e) {
  let t = e[0], i, n, r = er(e);
  return {
    c() {
      r.c(), i = Ei();
    },
    m(s, a) {
      r.m(s, a), Mt(s, i, a), n = !0;
    },
    p(s, [a]) {
      a & 1 && oe(t, t = s[0]) ? (Ne(), rt(r, 1, 1, tt), Pe(), r = er(s), r.c(), nt(r, 1), r.m(i.parentNode, i)) : r.p(s, a);
    },
    i(s) {
      n || (nt(r), n = !0);
    },
    o(s) {
      rt(r), n = !1;
    },
    d(s) {
      s && yt(i), r.d(s);
    }
  };
}
function Ba(e, t, i) {
  let n, r, s, a, o, l, { draggable: h } = t, { draggableOptions: c } = t;
  const u = qt("external").application, d = u.reactive.storeAppOptions.title;
  Ct(e, d, (v) => i(5, l = v));
  const p = u.reactive.storeAppOptions.draggable;
  Ct(e, p, (v) => i(17, a = v));
  const b = u.reactive.storeUIState.dragging, m = u.reactive.storeUIState.headerButtons;
  Ct(e, m, (v) => i(14, n = v));
  const g = u.reactive.storeAppOptions.headerNoTitleMinimized;
  Ct(e, g, (v) => i(16, s = v));
  const y = u.reactive.storeAppOptions.minimizable;
  Ct(e, y, (v) => i(4, o = v));
  const w = u.reactive.storeUIState.minimized;
  Ct(e, w, (v) => i(15, r = v));
  let _, x, O;
  function T(v, N) {
    const I = u._onToggleMinimize.bind(u);
    function k() {
      v.addEventListener("dblclick", I);
    }
    function S() {
      v.removeEventListener("dblclick", I);
    }
    return N && k(), {
      update: (W) => {
        W ? k() : S();
      },
      destroy: () => S()
    };
  }
  return e.$$set = (v) => {
    "draggable" in v && i(0, h = v.draggable), "draggableOptions" in v && i(13, c = v.draggableOptions);
  }, e.$$.update = () => {
    e.$$.dirty & 1 && i(0, h = typeof h == "function" ? h : Ur), e.$$.dirty & 139264 && i(1, _ = Object.assign({}, {
      ease: !0,
      easeOptions: { duration: 0.1, ease: Yt }
    }, typeof c == "object" ? c : {}, {
      position: u.position,
      active: a,
      storeDragging: b
    })), e.$$.dirty & 98304 && i(2, x = s && r ? "none" : null), e.$$.dirty & 16384 && i(3, O = n.reduce((v, N) => (v.push(ki(N) ? { class: N, props: {} } : {
      class: Xa,
      props: { button: N }
    }), v), []));
  }, [
    h,
    _,
    x,
    O,
    o,
    l,
    d,
    p,
    m,
    g,
    y,
    w,
    T,
    c,
    n,
    r,
    s,
    a
  ];
}
class qa extends ni {
  constructor(t) {
    super(), ii(this, t, Ba, Za, oe, { draggable: 0, draggableOptions: 13 }, Ya);
  }
}
function Ga(e) {
  let t, i, n, r;
  return {
    c() {
      t = Et("div"), t.innerHTML = '<i class="fas fa-arrows-alt-h"></i>', pt(t, "class", "window-resizable-handle");
    },
    m(s, a) {
      Mt(s, t, a), e[10](t), n || (r = ie(i = e[6].call(null, t, {
        active: e[1],
        storeResizing: e[5]
      })), n = !0);
    },
    p(s, [a]) {
      i && Ot(i.update) && a & 2 && i.update.call(null, {
        active: s[1],
        storeResizing: s[5]
      });
    },
    i: tt,
    o: tt,
    d(s) {
      s && yt(t), e[10](null), n = !1, r();
    }
  };
}
function Ua(e, t, i) {
  let n, r, s, { isResizable: a = !1 } = t;
  const o = qt("external").application, l = qt("storeElementRoot");
  Ct(e, l, (m) => i(8, n = m));
  const h = o.reactive.storeAppOptions.resizable;
  Ct(e, h, (m) => i(1, s = m));
  const c = o.reactive.storeUIState.minimized;
  Ct(e, c, (m) => i(9, r = m));
  const u = o.reactive.storeUIState.resizing;
  let d;
  function p(m, { active: g = !0, storeResizing: y = void 0 } = {}) {
    let w = null, _ = {}, x = !1;
    const O = {
      resizeDown: ["pointerdown", (S) => N(S), !1],
      resizeMove: ["pointermove", (S) => I(S), !1],
      resizeUp: ["pointerup", (S) => k(S), !1]
    };
    function T() {
      m.addEventListener(...O.resizeDown), i(7, a = !0), m.style.display = "block";
    }
    function v() {
      typeof (y == null ? void 0 : y.set) == "function" && y.set(!1), m.removeEventListener(...O.resizeDown), m.removeEventListener(...O.resizeMove), m.removeEventListener(...O.resizeUp), m.style.display = "none", i(7, a = !1);
    }
    g ? T() : m.style.display = "none";
    function N(S) {
      S.preventDefault(), x = !1, w = o.position.get(), w.height === "auto" && (w.height = n.clientHeight), w.width === "auto" && (w.width = n.clientWidth), _ = { x: S.clientX, y: S.clientY }, m.addEventListener(...O.resizeMove), m.addEventListener(...O.resizeUp), m.setPointerCapture(S.pointerId);
    }
    function I(S) {
      S.preventDefault(), !x && typeof (y == null ? void 0 : y.set) == "function" && (x = !0, y.set(!0)), o.position.set({
        width: w.width + (S.clientX - _.x),
        height: w.height + (S.clientY - _.y)
      });
    }
    function k(S) {
      x = !1, typeof (y == null ? void 0 : y.set) == "function" && y.set(!1), S.preventDefault(), m.removeEventListener(...O.resizeMove), m.removeEventListener(...O.resizeUp), o._onResize(S);
    }
    return {
      update: ({ active: S }) => {
        S ? T() : v();
      },
      destroy: () => v()
    };
  }
  function b(m) {
    ti[m ? "unshift" : "push"](() => {
      d = m, i(0, d), i(7, a), i(9, r), i(8, n);
    });
  }
  return e.$$set = (m) => {
    "isResizable" in m && i(7, a = m.isResizable);
  }, e.$$.update = () => {
    if (e.$$.dirty & 897 && d) {
      i(0, d.style.display = a && !r ? "block" : "none", d);
      const m = n;
      m && m.classList[a ? "add" : "remove"]("resizable");
    }
  }, [
    d,
    s,
    l,
    h,
    c,
    u,
    p,
    a,
    n,
    r,
    b
  ];
}
class Da extends ni {
  constructor(t) {
    super(), ii(this, t, Ua, Ga, oe, { isResizable: 7 });
  }
}
function Va(e) {
  zn(e, "svelte-are4no", ".window-app.svelte-are4no.svelte-are4no.svelte-are4no{overflow:inherit}.window-app.svelte-are4no .window-content.svelte-are4no>.svelte-are4no{flex:none}");
}
function Ja(e) {
  let t;
  const i = e[27].default, n = es(i, e, e[26], null);
  return {
    c() {
      n && n.c();
    },
    m(r, s) {
      n && n.m(r, s), t = !0;
    },
    p(r, s) {
      n && n.p && (!t || s & 67108864) && ns(n, i, r, r[26], t ? is(i, r[26], s, null) : rs(r[26]), null);
    },
    i(r) {
      t || (nt(n, r), t = !0);
    },
    o(r) {
      rt(n, r), t = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function Ka(e) {
  let t, i;
  return t = new La({
    props: { children: e[14] }
  }), {
    c() {
      se(t.$$.fragment);
    },
    m(n, r) {
      Zt(t, n, r), i = !0;
    },
    p: tt,
    i(n) {
      i || (nt(t.$$.fragment, n), i = !0);
    },
    o(n) {
      rt(t.$$.fragment, n), i = !1;
    },
    d(n) {
      Bt(t, n);
    }
  };
}
function Qa(e) {
  let t, i, n, r, s, a, o, l, h, c, u, d, p, b, m, g, y, w;
  i = new qa({
    props: {
      draggable: e[6],
      draggableOptions: e[7]
    }
  });
  const _ = [Ka, Ja], x = [];
  function O(T, v) {
    return Array.isArray(T[14]) ? 0 : 1;
  }
  return s = O(e), a = x[s] = _[s](e), h = new Da({}), {
    c() {
      t = Et("div"), se(i.$$.fragment), n = dn(), r = Et("section"), a.c(), l = dn(), se(h.$$.fragment), pt(r, "class", "window-content svelte-are4no"), pt(t, "id", c = e[10].id), pt(t, "class", u = "app window-app " + e[10].options.classes.join(" ") + " svelte-are4no"), pt(t, "data-appid", d = e[10].appId);
    },
    m(T, v) {
      Mt(T, t, v), Zt(i, t, null), re(t, n), re(t, r), x[s].m(r, null), e[28](r), re(t, l), Zt(h, t, null), e[29](t), g = !0, y || (w = [
        ie(o = xn.call(null, r, e[9])),
        ie(e[12].call(null, r, e[15])),
        li(t, "pointerdown", e[13], !0),
        ie(p = xn.call(null, t, e[8])),
        ie(e[11].call(null, t, e[16]))
      ], y = !0);
    },
    p(T, [v]) {
      e = T;
      const N = {};
      v & 64 && (N.draggable = e[6]), v & 128 && (N.draggableOptions = e[7]), i.$set(N), a.p(e, v), o && Ot(o.update) && v & 512 && o.update.call(null, e[9]), (!g || v & 1024 && c !== (c = e[10].id)) && pt(t, "id", c), (!g || v & 1024 && u !== (u = "app window-app " + e[10].options.classes.join(" ") + " svelte-are4no")) && pt(t, "class", u), (!g || v & 1024 && d !== (d = e[10].appId)) && pt(t, "data-appid", d), p && Ot(p.update) && v & 256 && p.update.call(null, e[8]);
    },
    i(T) {
      g || (nt(i.$$.fragment, T), nt(a), nt(h.$$.fragment, T), ei(() => {
        m && m.end(1), b = bs(t, e[2], e[4]), b.start();
      }), g = !0);
    },
    o(T) {
      rt(i.$$.fragment, T), rt(a), rt(h.$$.fragment, T), b && b.invalidate(), m = ys(t, e[3], e[5]), g = !1;
    },
    d(T) {
      T && yt(t), Bt(i), x[s].d(), e[28](null), Bt(h), e[29](null), T && m && m.end(), y = !1, kt(w);
    }
  };
}
function tl(e, t, i) {
  let { $$slots: n = {}, $$scope: r } = t, { elementContent: s } = t, { elementRoot: a } = t, { draggable: o } = t, { draggableOptions: l } = t, { children: h = void 0 } = t, { stylesApp: c } = t, { stylesContent: u } = t, { appOffsetHeight: d = !1 } = t, { appOffsetWidth: p = !1 } = t;
  const b = !!d || !!p ? Mn : () => null;
  let { contentOffsetHeight: m = !1 } = t, { contentOffsetWidth: g = !1 } = t;
  const y = !!m || !!g ? Mn : () => null, w = (z) => {
    typeof x.options.popOut == "boolean" && x.options.popOut && (x !== (ui == null ? void 0 : ui.activeWindow) && x.bringToTop.call(x), document.activeElement !== document.body && z.target !== document.activeElement && (document.activeElement instanceof HTMLElement && document.activeElement.blur(), document.body.focus()));
  };
  qt("storeElementContent") || Rn("storeElementContent", It(s)), qt("storeElementRoot") || Rn("storeElementRoot", It(a));
  const _ = qt("external"), x = _.application, O = Array.isArray(h) ? h : typeof _ == "object" ? _.children : void 0;
  let { transition: T = void 0 } = t, { inTransition: v = le } = t, { outTransition: N = le } = t, { transitionOptions: I = void 0 } = t, { inTransitionOptions: k = Le } = t, { outTransitionOptions: S = Le } = t, W, R;
  function L(z, D) {
    i(20, g = z), i(19, m = D);
  }
  function lt(z, D, ri, Dr) {
    x.position.stores.resizeObserved.update((si) => (si.contentWidth = ri, si.contentHeight = Dr, si.offsetWidth = z, si.offsetHeight = D, si)), i(17, d = D), i(18, p = z);
  }
  function At(z) {
    ti[z ? "unshift" : "push"](() => {
      s = z, i(0, s);
    });
  }
  function zt(z) {
    ti[z ? "unshift" : "push"](() => {
      a = z, i(1, a);
    });
  }
  return e.$$set = (z) => {
    "elementContent" in z && i(0, s = z.elementContent), "elementRoot" in z && i(1, a = z.elementRoot), "draggable" in z && i(6, o = z.draggable), "draggableOptions" in z && i(7, l = z.draggableOptions), "children" in z && i(21, h = z.children), "stylesApp" in z && i(8, c = z.stylesApp), "stylesContent" in z && i(9, u = z.stylesContent), "appOffsetHeight" in z && i(17, d = z.appOffsetHeight), "appOffsetWidth" in z && i(18, p = z.appOffsetWidth), "contentOffsetHeight" in z && i(19, m = z.contentOffsetHeight), "contentOffsetWidth" in z && i(20, g = z.contentOffsetWidth), "transition" in z && i(22, T = z.transition), "inTransition" in z && i(2, v = z.inTransition), "outTransition" in z && i(3, N = z.outTransition), "transitionOptions" in z && i(23, I = z.transitionOptions), "inTransitionOptions" in z && i(4, k = z.inTransitionOptions), "outTransitionOptions" in z && i(5, S = z.outTransitionOptions), "$$scope" in z && i(26, r = z.$$scope);
  }, e.$$.update = () => {
    var z;
    if (e.$$.dirty & 1 && s != null && qt("storeElementContent").set(s), e.$$.dirty & 2 && a != null && qt("storeElementRoot").set(a), e.$$.dirty & 20971520 && W !== T) {
      const D = le !== T && typeof T == "function" ? T : le;
      i(2, v = D), i(3, N = D), i(24, W = D);
    }
    if (e.$$.dirty & 41943040 && R !== I) {
      const D = I !== Le && typeof I == "object" ? I : Le;
      i(4, k = D), i(5, S = D), i(25, R = D);
    }
    e.$$.dirty & 4 && typeof v != "function" && i(2, v = le), e.$$.dirty & 1032 && (typeof N != "function" && i(3, N = le), x && typeof ((z = x == null ? void 0 : x.options) == null ? void 0 : z.defaultCloseAnimation) == "boolean" && i(10, x.options.defaultCloseAnimation = N === le, x)), e.$$.dirty & 16 && typeof k != "object" && i(4, k = Le), e.$$.dirty & 32 && typeof S != "object" && i(5, S = Le);
  }, [
    s,
    a,
    v,
    N,
    k,
    S,
    o,
    l,
    c,
    u,
    x,
    b,
    y,
    w,
    O,
    L,
    lt,
    d,
    p,
    m,
    g,
    h,
    T,
    I,
    W,
    R,
    r,
    n,
    At,
    zt
  ];
}
class el extends ni {
  constructor(t) {
    super(), ii(this, t, tl, Qa, oe, {
      elementContent: 0,
      elementRoot: 1,
      draggable: 6,
      draggableOptions: 7,
      children: 21,
      stylesApp: 8,
      stylesContent: 9,
      appOffsetHeight: 17,
      appOffsetWidth: 18,
      contentOffsetHeight: 19,
      contentOffsetWidth: 20,
      transition: 22,
      inTransition: 2,
      outTransition: 3,
      transitionOptions: 23,
      inTransitionOptions: 4,
      outTransitionOptions: 5
    }, Va);
  }
  get elementContent() {
    return this.$$.ctx[0];
  }
  set elementContent(t) {
    this.$$set({ elementContent: t }), J();
  }
  get elementRoot() {
    return this.$$.ctx[1];
  }
  set elementRoot(t) {
    this.$$set({ elementRoot: t }), J();
  }
  get draggable() {
    return this.$$.ctx[6];
  }
  set draggable(t) {
    this.$$set({ draggable: t }), J();
  }
  get draggableOptions() {
    return this.$$.ctx[7];
  }
  set draggableOptions(t) {
    this.$$set({ draggableOptions: t }), J();
  }
  get children() {
    return this.$$.ctx[21];
  }
  set children(t) {
    this.$$set({ children: t }), J();
  }
  get stylesApp() {
    return this.$$.ctx[8];
  }
  set stylesApp(t) {
    this.$$set({ stylesApp: t }), J();
  }
  get stylesContent() {
    return this.$$.ctx[9];
  }
  set stylesContent(t) {
    this.$$set({ stylesContent: t }), J();
  }
  get appOffsetHeight() {
    return this.$$.ctx[17];
  }
  set appOffsetHeight(t) {
    this.$$set({ appOffsetHeight: t }), J();
  }
  get appOffsetWidth() {
    return this.$$.ctx[18];
  }
  set appOffsetWidth(t) {
    this.$$set({ appOffsetWidth: t }), J();
  }
  get contentOffsetHeight() {
    return this.$$.ctx[19];
  }
  set contentOffsetHeight(t) {
    this.$$set({ contentOffsetHeight: t }), J();
  }
  get contentOffsetWidth() {
    return this.$$.ctx[20];
  }
  set contentOffsetWidth(t) {
    this.$$set({ contentOffsetWidth: t }), J();
  }
  get transition() {
    return this.$$.ctx[22];
  }
  set transition(t) {
    this.$$set({ transition: t }), J();
  }
  get inTransition() {
    return this.$$.ctx[2];
  }
  set inTransition(t) {
    this.$$set({ inTransition: t }), J();
  }
  get outTransition() {
    return this.$$.ctx[3];
  }
  set outTransition(t) {
    this.$$set({ outTransition: t }), J();
  }
  get transitionOptions() {
    return this.$$.ctx[23];
  }
  set transitionOptions(t) {
    this.$$set({ transitionOptions: t }), J();
  }
  get inTransitionOptions() {
    return this.$$.ctx[4];
  }
  set inTransitionOptions(t) {
    this.$$set({ inTransitionOptions: t }), J();
  }
  get outTransitionOptions() {
    return this.$$.ctx[5];
  }
  set outTransitionOptions(t) {
    this.$$set({ outTransitionOptions: t }), J();
  }
}
function il(e) {
  let t;
  return {
    c() {
      t = Et("main"), t.innerHTML = "<h1>Basic application</h1>", pt(t, "class", "svelte-9lusmr");
    },
    m(i, n) {
      Mt(i, t, n);
    },
    p: tt,
    d(i) {
      i && yt(t);
    }
  };
}
function nl(e) {
  let t, i, n;
  function r(a) {
    e[1](a);
  }
  let s = {
    $$slots: { default: [il] },
    $$scope: { ctx: e }
  };
  return e[0] !== void 0 && (s.elementRoot = e[0]), t = new el({ props: s }), ti.push(() => vs(t, "elementRoot", r)), {
    c() {
      se(t.$$.fragment);
    },
    m(a, o) {
      Zt(t, a, o), n = !0;
    },
    p(a, [o]) {
      const l = {};
      o & 4 && (l.$$scope = { dirty: o, ctx: a }), !i && o & 1 && (i = !0, l.elementRoot = a[0], ps(() => i = !1)), t.$set(l);
    },
    i(a) {
      n || (nt(t.$$.fragment, a), n = !0);
    },
    o(a) {
      rt(t.$$.fragment, a), n = !1;
    },
    d(a) {
      Bt(t, a);
    }
  };
}
function rl(e, t, i) {
  let { elementRoot: n } = t;
  function r(s) {
    n = s, i(0, n);
  }
  return e.$$set = (s) => {
    "elementRoot" in s && i(0, n = s.elementRoot);
  }, [n, r];
}
class sl extends ni {
  constructor(t) {
    super(), ii(this, t, rl, nl, oe, { elementRoot: 0 });
  }
  get elementRoot() {
    return this.$$.ctx[0];
  }
  set elementRoot(t) {
    this.$$set({ elementRoot: t }), J();
  }
}
class ol extends _n {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      title: "TemplateESM.title",
      width: 300,
      svelte: {
        class: sl,
        target: document.body
      }
    });
  }
}
Hooks.once("ready", () => new ol().render(!0, { focus: !0 }));
//# sourceMappingURL=index.js.map
