const { setContext: te, getContext: v } = window.__gradio__svelte__internal, y = "WORKER_PROXY_CONTEXT_KEY";
function w() {
  return v(y);
}
function k(l) {
  return l.host === window.location.host || l.host === "localhost:7860" || l.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  l.host === "lite.local";
}
async function f(l) {
  if (l == null)
    return l;
  const e = new URL(l);
  if (!k(e) || e.protocol !== "http:" && e.protocol !== "https:")
    return l;
  const o = w();
  if (o == null)
    return l;
  const n = e.pathname;
  return o.httpRequest({
    method: "GET",
    path: n,
    headers: {},
    query_string: ""
  }).then((t) => {
    if (t.status !== 200)
      throw new Error(`Failed to get file ${n} from the Wasm worker.`);
    const s = new Blob([t.body], {
      type: t.headers["Content-Type"]
    });
    return URL.createObjectURL(s);
  });
}
const {
  SvelteComponent: C,
  append: E,
  assign: c,
  compute_rest_props: d,
  detach: u,
  element: b,
  empty: R,
  exclude_internal_props: q,
  get_spread_update: O,
  handle_promise: g,
  init: T,
  insert: m,
  noop: _,
  safe_not_equal: P,
  set_attributes: h,
  set_data: U,
  set_style: W,
  src_url_equal: K,
  text: X,
  toggle_class: p,
  update_await_block_branch: Y
} = window.__gradio__svelte__internal;
function L(l) {
  let e, o = (
    /*error*/
    l[3].message + ""
  ), n;
  return {
    c() {
      e = b("p"), n = X(o), W(e, "color", "red");
    },
    m(t, s) {
      m(t, e, s), E(e, n);
    },
    p(t, s) {
      s & /*src*/
      1 && o !== (o = /*error*/
      t[3].message + "") && U(n, o);
    },
    d(t) {
      t && u(e);
    }
  };
}
function N(l) {
  let e, o, n = [
    {
      src: o = /*resolved_src*/
      l[2]
    },
    /*$$restProps*/
    l[1]
  ], t = {};
  for (let s = 0; s < n.length; s += 1)
    t = c(t, n[s]);
  return {
    c() {
      e = b("img"), h(e, t), p(e, "svelte-1k0wid7", !0);
    },
    m(s, r) {
      m(s, e, r);
    },
    p(s, r) {
      h(e, t = O(n, [
        r & /*src*/
        1 && !K(e.src, o = /*resolved_src*/
        s[2]) && { src: o },
        r & /*$$restProps*/
        2 && /*$$restProps*/
        s[1]
      ])), p(e, "svelte-1k0wid7", !0);
    },
    d(s) {
      s && u(e);
    }
  };
}
function S(l) {
  return { c: _, m: _, p: _, d: _ };
}
function j(l) {
  let e, o, n = {
    ctx: l,
    current: null,
    token: null,
    hasCatch: !0,
    pending: S,
    then: N,
    catch: L,
    value: 2,
    error: 3
  };
  return g(o = f(
    /*src*/
    l[0]
  ), n), {
    c() {
      e = R(), n.block.c();
    },
    m(t, s) {
      m(t, e, s), n.block.m(t, n.anchor = s), n.mount = () => e.parentNode, n.anchor = e;
    },
    p(t, [s]) {
      l = t, n.ctx = l, s & /*src*/
      1 && o !== (o = f(
        /*src*/
        l[0]
      )) && g(o, n) || Y(n, l, s);
    },
    i: _,
    o: _,
    d(t) {
      t && u(e), n.block.d(t), n.token = null, n = null;
    }
  };
}
function I(l, e, o) {
  const n = ["src"];
  let t = d(e, n), { src: s = void 0 } = e;
  return l.$$set = (r) => {
    e = c(c({}, e), q(r)), o(1, t = d(e, n)), "src" in r && o(0, s = r.src);
  }, [s, t];
}
class z extends C {
  constructor(e) {
    super(), T(this, e, I, j, P, { src: 0 });
  }
}
const {
  SvelteComponent: B,
  attr: F,
  create_component: G,
  destroy_component: A,
  detach: D,
  element: H,
  init: J,
  insert: M,
  mount_component: Q,
  safe_not_equal: V,
  toggle_class: i,
  transition_in: Z,
  transition_out: x
} = window.__gradio__svelte__internal;
function $(l) {
  let e, o, n;
  return o = new z({
    props: {
      src: (
        /*samples_dir*/
        l[1] + /*value*/
        l[0]
      ),
      alt: ""
    }
  }), {
    c() {
      e = H("div"), G(o.$$.fragment), F(e, "class", "container svelte-1iqucjz"), i(
        e,
        "table",
        /*type*/
        l[2] === "table"
      ), i(
        e,
        "gallery",
        /*type*/
        l[2] === "gallery"
      ), i(
        e,
        "selected",
        /*selected*/
        l[3]
      );
    },
    m(t, s) {
      M(t, e, s), Q(o, e, null), n = !0;
    },
    p(t, [s]) {
      const r = {};
      s & /*samples_dir, value*/
      3 && (r.src = /*samples_dir*/
      t[1] + /*value*/
      t[0]), o.$set(r), (!n || s & /*type*/
      4) && i(
        e,
        "table",
        /*type*/
        t[2] === "table"
      ), (!n || s & /*type*/
      4) && i(
        e,
        "gallery",
        /*type*/
        t[2] === "gallery"
      ), (!n || s & /*selected*/
      8) && i(
        e,
        "selected",
        /*selected*/
        t[3]
      );
    },
    i(t) {
      n || (Z(o.$$.fragment, t), n = !0);
    },
    o(t) {
      x(o.$$.fragment, t), n = !1;
    },
    d(t) {
      t && D(e), A(o);
    }
  };
}
function ee(l, e, o) {
  let { value: n } = e, { samples_dir: t } = e, { type: s } = e, { selected: r = !1 } = e;
  return l.$$set = (a) => {
    "value" in a && o(0, n = a.value), "samples_dir" in a && o(1, t = a.samples_dir), "type" in a && o(2, s = a.type), "selected" in a && o(3, r = a.selected);
  }, [n, t, s, r];
}
class ne extends B {
  constructor(e) {
    super(), J(this, e, ee, $, V, {
      value: 0,
      samples_dir: 1,
      type: 2,
      selected: 3
    });
  }
}
export {
  ne as default
};
