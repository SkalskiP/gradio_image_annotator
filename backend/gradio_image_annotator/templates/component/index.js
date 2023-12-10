const jo = [
  { color: "red", primary: 600, secondary: 100 },
  { color: "green", primary: 600, secondary: 100 },
  { color: "blue", primary: 600, secondary: 100 },
  { color: "yellow", primary: 500, secondary: 100 },
  { color: "purple", primary: 600, secondary: 100 },
  { color: "teal", primary: 600, secondary: 100 },
  { color: "orange", primary: 600, secondary: 100 },
  { color: "cyan", primary: 600, secondary: 100 },
  { color: "lime", primary: 500, secondary: 100 },
  { color: "pink", primary: 600, secondary: 100 }
], $r = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724"
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519"
  }
};
jo.reduce(
  (e, { color: t, primary: n, secondary: r }) => ({
    ...e,
    [t]: {
      primary: $r[t][n],
      secondary: $r[t][r]
    }
  }),
  {}
);
function xo(e) {
  let t, n = e[0], r = 1;
  for (; r < e.length; ) {
    const i = e[r], l = e[r + 1];
    if (r += 2, (i === "optionalAccess" || i === "optionalCall") && n == null)
      return;
    i === "access" || i === "optionalAccess" ? (t = n, n = l(n)) : (i === "call" || i === "optionalCall") && (n = l((...o) => n.call(t, ...o)), t = void 0);
  }
  return n;
}
class pn extends Error {
  constructor(t) {
    super(t), this.name = "ShareError";
  }
}
async function zo(e, t) {
  if (window.__gradio_space__ == null)
    throw new pn("Must be on Spaces to share.");
  let n, r, i;
  if (t === "url") {
    const s = await fetch(e);
    n = await s.blob(), r = s.headers.get("content-type") || "", i = s.headers.get("content-disposition") || "";
  } else
    n = Vo(e), r = e.split(";")[0].split(":")[1], i = "file" + r.split("/")[1];
  const l = new File([n], i, { type: r }), o = await fetch("https://huggingface.co/uploads", {
    method: "POST",
    body: l,
    headers: {
      "Content-Type": l.type,
      "X-Requested-With": "XMLHttpRequest"
    }
  });
  if (!o.ok) {
    if (xo([o, "access", (s) => s.headers, "access", (s) => s.get, "call", (s) => s("content-type"), "optionalAccess", (s) => s.includes, "call", (s) => s("application/json")])) {
      const s = await o.json();
      throw new pn(`Upload failed: ${s.error}`);
    }
    throw new pn("Upload failed.");
  }
  return await o.text();
}
function Vo(e) {
  for (var t = e.split(","), n = t[0].match(/:(.*?);/)[1], r = atob(t[1]), i = r.length, l = new Uint8Array(i); i--; )
    l[i] = r.charCodeAt(i);
  return new Blob([l], { type: n });
}
const {
  SvelteComponent: Xo,
  assign: Wo,
  create_slot: Zo,
  detach: Jo,
  element: Qo,
  get_all_dirty_from_scope: Yo,
  get_slot_changes: Ko,
  get_spread_update: $o,
  init: es,
  insert: ts,
  safe_not_equal: ns,
  set_dynamic_element_data: ei,
  set_style: he,
  toggle_class: Ze,
  transition_in: Fl,
  transition_out: Gl,
  update_slot_base: rs
} = window.__gradio__svelte__internal;
function is(e) {
  let t, n, r;
  const i = (
    /*#slots*/
    e[17].default
  ), l = Zo(
    i,
    e,
    /*$$scope*/
    e[16],
    null
  );
  let o = [
    { "data-testid": (
      /*test_id*/
      e[7]
    ) },
    { id: (
      /*elem_id*/
      e[2]
    ) },
    {
      class: n = "block " + /*elem_classes*/
      e[3].join(" ") + " svelte-1t38q2d"
    }
  ], a = {};
  for (let s = 0; s < o.length; s += 1)
    a = Wo(a, o[s]);
  return {
    c() {
      t = Qo(
        /*tag*/
        e[14]
      ), l && l.c(), ei(
        /*tag*/
        e[14]
      )(t, a), Ze(
        t,
        "hidden",
        /*visible*/
        e[10] === !1
      ), Ze(
        t,
        "padded",
        /*padding*/
        e[6]
      ), Ze(
        t,
        "border_focus",
        /*border_mode*/
        e[5] === "focus"
      ), Ze(t, "hide-container", !/*explicit_call*/
      e[8] && !/*container*/
      e[9]), he(t, "height", typeof /*height*/
      e[0] == "number" ? (
        /*height*/
        e[0] + "px"
      ) : void 0), he(t, "width", typeof /*width*/
      e[1] == "number" ? `calc(min(${/*width*/
      e[1]}px, 100%))` : void 0), he(
        t,
        "border-style",
        /*variant*/
        e[4]
      ), he(
        t,
        "overflow",
        /*allow_overflow*/
        e[11] ? "visible" : "hidden"
      ), he(
        t,
        "flex-grow",
        /*scale*/
        e[12]
      ), he(t, "min-width", `calc(min(${/*min_width*/
      e[13]}px, 100%))`), he(t, "border-width", "var(--block-border-width)");
    },
    m(s, u) {
      ts(s, t, u), l && l.m(t, null), r = !0;
    },
    p(s, u) {
      l && l.p && (!r || u & /*$$scope*/
      65536) && rs(
        l,
        i,
        s,
        /*$$scope*/
        s[16],
        r ? Ko(
          i,
          /*$$scope*/
          s[16],
          u,
          null
        ) : Yo(
          /*$$scope*/
          s[16]
        ),
        null
      ), ei(
        /*tag*/
        s[14]
      )(t, a = $o(o, [
        (!r || u & /*test_id*/
        128) && { "data-testid": (
          /*test_id*/
          s[7]
        ) },
        (!r || u & /*elem_id*/
        4) && { id: (
          /*elem_id*/
          s[2]
        ) },
        (!r || u & /*elem_classes*/
        8 && n !== (n = "block " + /*elem_classes*/
        s[3].join(" ") + " svelte-1t38q2d")) && { class: n }
      ])), Ze(
        t,
        "hidden",
        /*visible*/
        s[10] === !1
      ), Ze(
        t,
        "padded",
        /*padding*/
        s[6]
      ), Ze(
        t,
        "border_focus",
        /*border_mode*/
        s[5] === "focus"
      ), Ze(t, "hide-container", !/*explicit_call*/
      s[8] && !/*container*/
      s[9]), u & /*height*/
      1 && he(t, "height", typeof /*height*/
      s[0] == "number" ? (
        /*height*/
        s[0] + "px"
      ) : void 0), u & /*width*/
      2 && he(t, "width", typeof /*width*/
      s[1] == "number" ? `calc(min(${/*width*/
      s[1]}px, 100%))` : void 0), u & /*variant*/
      16 && he(
        t,
        "border-style",
        /*variant*/
        s[4]
      ), u & /*allow_overflow*/
      2048 && he(
        t,
        "overflow",
        /*allow_overflow*/
        s[11] ? "visible" : "hidden"
      ), u & /*scale*/
      4096 && he(
        t,
        "flex-grow",
        /*scale*/
        s[12]
      ), u & /*min_width*/
      8192 && he(t, "min-width", `calc(min(${/*min_width*/
      s[13]}px, 100%))`);
    },
    i(s) {
      r || (Fl(l, s), r = !0);
    },
    o(s) {
      Gl(l, s), r = !1;
    },
    d(s) {
      s && Jo(t), l && l.d(s);
    }
  };
}
function ls(e) {
  let t, n = (
    /*tag*/
    e[14] && is(e)
  );
  return {
    c() {
      n && n.c();
    },
    m(r, i) {
      n && n.m(r, i), t = !0;
    },
    p(r, [i]) {
      /*tag*/
      r[14] && n.p(r, i);
    },
    i(r) {
      t || (Fl(n, r), t = !0);
    },
    o(r) {
      Gl(n, r), t = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function os(e, t, n) {
  let { $$slots: r = {}, $$scope: i } = t, { height: l = void 0 } = t, { width: o = void 0 } = t, { elem_id: a = "" } = t, { elem_classes: s = [] } = t, { variant: u = "solid" } = t, { border_mode: f = "base" } = t, { padding: _ = !0 } = t, { type: c = "normal" } = t, { test_id: h = void 0 } = t, { explicit_call: m = !1 } = t, { container: d = !0 } = t, { visible: E = !0 } = t, { allow_overflow: S = !0 } = t, { scale: A = null } = t, { min_width: v = 0 } = t, p = c === "fieldset" ? "fieldset" : "div";
  return e.$$set = (k) => {
    "height" in k && n(0, l = k.height), "width" in k && n(1, o = k.width), "elem_id" in k && n(2, a = k.elem_id), "elem_classes" in k && n(3, s = k.elem_classes), "variant" in k && n(4, u = k.variant), "border_mode" in k && n(5, f = k.border_mode), "padding" in k && n(6, _ = k.padding), "type" in k && n(15, c = k.type), "test_id" in k && n(7, h = k.test_id), "explicit_call" in k && n(8, m = k.explicit_call), "container" in k && n(9, d = k.container), "visible" in k && n(10, E = k.visible), "allow_overflow" in k && n(11, S = k.allow_overflow), "scale" in k && n(12, A = k.scale), "min_width" in k && n(13, v = k.min_width), "$$scope" in k && n(16, i = k.$$scope);
  }, [
    l,
    o,
    a,
    s,
    u,
    f,
    _,
    h,
    m,
    d,
    E,
    S,
    A,
    v,
    p,
    c,
    i,
    r
  ];
}
class ql extends Xo {
  constructor(t) {
    super(), es(this, t, os, ls, ns, {
      height: 0,
      width: 1,
      elem_id: 2,
      elem_classes: 3,
      variant: 4,
      border_mode: 5,
      padding: 6,
      type: 15,
      test_id: 7,
      explicit_call: 8,
      container: 9,
      visible: 10,
      allow_overflow: 11,
      scale: 12,
      min_width: 13
    });
  }
}
const {
  SvelteComponent: ss,
  append: jn,
  attr: sn,
  create_component: as,
  destroy_component: us,
  detach: fs,
  element: ti,
  init: cs,
  insert: _s,
  mount_component: hs,
  safe_not_equal: ds,
  set_data: ms,
  space: gs,
  text: ps,
  toggle_class: Je,
  transition_in: bs,
  transition_out: vs
} = window.__gradio__svelte__internal;
function ws(e) {
  let t, n, r, i, l, o;
  return r = new /*Icon*/
  e[1]({}), {
    c() {
      t = ti("label"), n = ti("span"), as(r.$$.fragment), i = gs(), l = ps(
        /*label*/
        e[0]
      ), sn(n, "class", "svelte-9gxdi0"), sn(t, "for", ""), sn(t, "data-testid", "block-label"), sn(t, "class", "svelte-9gxdi0"), Je(t, "hide", !/*show_label*/
      e[2]), Je(t, "sr-only", !/*show_label*/
      e[2]), Je(
        t,
        "float",
        /*float*/
        e[4]
      ), Je(
        t,
        "hide-label",
        /*disable*/
        e[3]
      );
    },
    m(a, s) {
      _s(a, t, s), jn(t, n), hs(r, n, null), jn(t, i), jn(t, l), o = !0;
    },
    p(a, [s]) {
      (!o || s & /*label*/
      1) && ms(
        l,
        /*label*/
        a[0]
      ), (!o || s & /*show_label*/
      4) && Je(t, "hide", !/*show_label*/
      a[2]), (!o || s & /*show_label*/
      4) && Je(t, "sr-only", !/*show_label*/
      a[2]), (!o || s & /*float*/
      16) && Je(
        t,
        "float",
        /*float*/
        a[4]
      ), (!o || s & /*disable*/
      8) && Je(
        t,
        "hide-label",
        /*disable*/
        a[3]
      );
    },
    i(a) {
      o || (bs(r.$$.fragment, a), o = !0);
    },
    o(a) {
      vs(r.$$.fragment, a), o = !1;
    },
    d(a) {
      a && fs(t), us(r);
    }
  };
}
function ys(e, t, n) {
  let { label: r = null } = t, { Icon: i } = t, { show_label: l = !0 } = t, { disable: o = !1 } = t, { float: a = !0 } = t;
  return e.$$set = (s) => {
    "label" in s && n(0, r = s.label), "Icon" in s && n(1, i = s.Icon), "show_label" in s && n(2, l = s.show_label), "disable" in s && n(3, o = s.disable), "float" in s && n(4, a = s.float);
  }, [r, i, l, o, a];
}
class jl extends ss {
  constructor(t) {
    super(), cs(this, t, ys, ws, ds, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: Es,
  append: vr,
  attr: Fe,
  bubble: Ss,
  create_component: ks,
  destroy_component: Ts,
  detach: xl,
  element: wr,
  init: As,
  insert: zl,
  listen: Cs,
  mount_component: Bs,
  safe_not_equal: Hs,
  set_data: Ps,
  set_style: an,
  space: Ns,
  text: Is,
  toggle_class: we,
  transition_in: Ls,
  transition_out: Os
} = window.__gradio__svelte__internal;
function ni(e) {
  let t, n;
  return {
    c() {
      t = wr("span"), n = Is(
        /*label*/
        e[1]
      ), Fe(t, "class", "svelte-lpi64a");
    },
    m(r, i) {
      zl(r, t, i), vr(t, n);
    },
    p(r, i) {
      i & /*label*/
      2 && Ps(
        n,
        /*label*/
        r[1]
      );
    },
    d(r) {
      r && xl(t);
    }
  };
}
function Ms(e) {
  let t, n, r, i, l, o, a, s = (
    /*show_label*/
    e[2] && ni(e)
  );
  return i = new /*Icon*/
  e[0]({}), {
    c() {
      t = wr("button"), s && s.c(), n = Ns(), r = wr("div"), ks(i.$$.fragment), Fe(r, "class", "svelte-lpi64a"), we(
        r,
        "small",
        /*size*/
        e[4] === "small"
      ), we(
        r,
        "large",
        /*size*/
        e[4] === "large"
      ), t.disabled = /*disabled*/
      e[7], Fe(
        t,
        "aria-label",
        /*label*/
        e[1]
      ), Fe(
        t,
        "aria-haspopup",
        /*hasPopup*/
        e[8]
      ), Fe(
        t,
        "title",
        /*label*/
        e[1]
      ), Fe(t, "class", "svelte-lpi64a"), we(
        t,
        "pending",
        /*pending*/
        e[3]
      ), we(
        t,
        "padded",
        /*padded*/
        e[5]
      ), we(
        t,
        "highlight",
        /*highlight*/
        e[6]
      ), we(
        t,
        "transparent",
        /*transparent*/
        e[9]
      ), an(t, "color", !/*disabled*/
      e[7] && /*_color*/
      e[11] ? (
        /*_color*/
        e[11]
      ) : "var(--block-label-text-color)"), an(t, "--bg-color", /*disabled*/
      e[7] ? "auto" : (
        /*background*/
        e[10]
      ));
    },
    m(u, f) {
      zl(u, t, f), s && s.m(t, null), vr(t, n), vr(t, r), Bs(i, r, null), l = !0, o || (a = Cs(
        t,
        "click",
        /*click_handler*/
        e[13]
      ), o = !0);
    },
    p(u, [f]) {
      /*show_label*/
      u[2] ? s ? s.p(u, f) : (s = ni(u), s.c(), s.m(t, n)) : s && (s.d(1), s = null), (!l || f & /*size*/
      16) && we(
        r,
        "small",
        /*size*/
        u[4] === "small"
      ), (!l || f & /*size*/
      16) && we(
        r,
        "large",
        /*size*/
        u[4] === "large"
      ), (!l || f & /*disabled*/
      128) && (t.disabled = /*disabled*/
      u[7]), (!l || f & /*label*/
      2) && Fe(
        t,
        "aria-label",
        /*label*/
        u[1]
      ), (!l || f & /*hasPopup*/
      256) && Fe(
        t,
        "aria-haspopup",
        /*hasPopup*/
        u[8]
      ), (!l || f & /*label*/
      2) && Fe(
        t,
        "title",
        /*label*/
        u[1]
      ), (!l || f & /*pending*/
      8) && we(
        t,
        "pending",
        /*pending*/
        u[3]
      ), (!l || f & /*padded*/
      32) && we(
        t,
        "padded",
        /*padded*/
        u[5]
      ), (!l || f & /*highlight*/
      64) && we(
        t,
        "highlight",
        /*highlight*/
        u[6]
      ), (!l || f & /*transparent*/
      512) && we(
        t,
        "transparent",
        /*transparent*/
        u[9]
      ), f & /*disabled, _color*/
      2176 && an(t, "color", !/*disabled*/
      u[7] && /*_color*/
      u[11] ? (
        /*_color*/
        u[11]
      ) : "var(--block-label-text-color)"), f & /*disabled, background*/
      1152 && an(t, "--bg-color", /*disabled*/
      u[7] ? "auto" : (
        /*background*/
        u[10]
      ));
    },
    i(u) {
      l || (Ls(i.$$.fragment, u), l = !0);
    },
    o(u) {
      Os(i.$$.fragment, u), l = !1;
    },
    d(u) {
      u && xl(t), s && s.d(), Ts(i), o = !1, a();
    }
  };
}
function Rs(e, t, n) {
  let r, { Icon: i } = t, { label: l = "" } = t, { show_label: o = !1 } = t, { pending: a = !1 } = t, { size: s = "small" } = t, { padded: u = !0 } = t, { highlight: f = !1 } = t, { disabled: _ = !1 } = t, { hasPopup: c = !1 } = t, { color: h = "var(--block-label-text-color)" } = t, { transparent: m = !1 } = t, { background: d = "var(--background-fill-primary)" } = t;
  function E(S) {
    Ss.call(this, e, S);
  }
  return e.$$set = (S) => {
    "Icon" in S && n(0, i = S.Icon), "label" in S && n(1, l = S.label), "show_label" in S && n(2, o = S.show_label), "pending" in S && n(3, a = S.pending), "size" in S && n(4, s = S.size), "padded" in S && n(5, u = S.padded), "highlight" in S && n(6, f = S.highlight), "disabled" in S && n(7, _ = S.disabled), "hasPopup" in S && n(8, c = S.hasPopup), "color" in S && n(12, h = S.color), "transparent" in S && n(9, m = S.transparent), "background" in S && n(10, d = S.background);
  }, e.$$.update = () => {
    e.$$.dirty & /*highlight, color*/
    4160 && n(11, r = f ? "var(--color-accent)" : h);
  }, [
    i,
    l,
    o,
    a,
    s,
    u,
    f,
    _,
    c,
    m,
    d,
    r,
    h,
    E
  ];
}
class Pn extends Es {
  constructor(t) {
    super(), As(this, t, Rs, Ms, Hs, {
      Icon: 0,
      label: 1,
      show_label: 2,
      pending: 3,
      size: 4,
      padded: 5,
      highlight: 6,
      disabled: 7,
      hasPopup: 8,
      color: 12,
      transparent: 9,
      background: 10
    });
  }
}
const {
  SvelteComponent: Ds,
  append: Us,
  attr: xn,
  binding_callbacks: Fs,
  create_slot: Gs,
  detach: qs,
  element: ri,
  get_all_dirty_from_scope: js,
  get_slot_changes: xs,
  init: zs,
  insert: Vs,
  safe_not_equal: Xs,
  toggle_class: Qe,
  transition_in: Ws,
  transition_out: Zs,
  update_slot_base: Js
} = window.__gradio__svelte__internal;
function Qs(e) {
  let t, n, r;
  const i = (
    /*#slots*/
    e[5].default
  ), l = Gs(
    i,
    e,
    /*$$scope*/
    e[4],
    null
  );
  return {
    c() {
      t = ri("div"), n = ri("div"), l && l.c(), xn(n, "class", "icon svelte-3w3rth"), xn(t, "class", "empty svelte-3w3rth"), xn(t, "aria-label", "Empty value"), Qe(
        t,
        "small",
        /*size*/
        e[0] === "small"
      ), Qe(
        t,
        "large",
        /*size*/
        e[0] === "large"
      ), Qe(
        t,
        "unpadded_box",
        /*unpadded_box*/
        e[1]
      ), Qe(
        t,
        "small_parent",
        /*parent_height*/
        e[3]
      );
    },
    m(o, a) {
      Vs(o, t, a), Us(t, n), l && l.m(n, null), e[6](t), r = !0;
    },
    p(o, [a]) {
      l && l.p && (!r || a & /*$$scope*/
      16) && Js(
        l,
        i,
        o,
        /*$$scope*/
        o[4],
        r ? xs(
          i,
          /*$$scope*/
          o[4],
          a,
          null
        ) : js(
          /*$$scope*/
          o[4]
        ),
        null
      ), (!r || a & /*size*/
      1) && Qe(
        t,
        "small",
        /*size*/
        o[0] === "small"
      ), (!r || a & /*size*/
      1) && Qe(
        t,
        "large",
        /*size*/
        o[0] === "large"
      ), (!r || a & /*unpadded_box*/
      2) && Qe(
        t,
        "unpadded_box",
        /*unpadded_box*/
        o[1]
      ), (!r || a & /*parent_height*/
      8) && Qe(
        t,
        "small_parent",
        /*parent_height*/
        o[3]
      );
    },
    i(o) {
      r || (Ws(l, o), r = !0);
    },
    o(o) {
      Zs(l, o), r = !1;
    },
    d(o) {
      o && qs(t), l && l.d(o), e[6](null);
    }
  };
}
function Ys(e) {
  let t, n = e[0], r = 1;
  for (; r < e.length; ) {
    const i = e[r], l = e[r + 1];
    if (r += 2, (i === "optionalAccess" || i === "optionalCall") && n == null)
      return;
    i === "access" || i === "optionalAccess" ? (t = n, n = l(n)) : (i === "call" || i === "optionalCall") && (n = l((...o) => n.call(t, ...o)), t = void 0);
  }
  return n;
}
function Ks(e, t, n) {
  let r, { $$slots: i = {}, $$scope: l } = t, { size: o = "small" } = t, { unpadded_box: a = !1 } = t, s;
  function u(_) {
    if (!_)
      return !1;
    const { height: c } = _.getBoundingClientRect(), { height: h } = Ys([
      _,
      "access",
      (m) => m.parentElement,
      "optionalAccess",
      (m) => m.getBoundingClientRect,
      "call",
      (m) => m()
    ]) || { height: c };
    return c > h + 2;
  }
  function f(_) {
    Fs[_ ? "unshift" : "push"](() => {
      s = _, n(2, s);
    });
  }
  return e.$$set = (_) => {
    "size" in _ && n(0, o = _.size), "unpadded_box" in _ && n(1, a = _.unpadded_box), "$$scope" in _ && n(4, l = _.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*el*/
    4 && n(3, r = u(s));
  }, [o, a, s, r, l, i, f];
}
class Vl extends Ds {
  constructor(t) {
    super(), zs(this, t, Ks, Qs, Xs, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: $s,
  append: ii,
  attr: fe,
  detach: ea,
  init: ta,
  insert: na,
  noop: zn,
  safe_not_equal: ra,
  svg_element: Vn
} = window.__gradio__svelte__internal;
function ia(e) {
  let t, n, r;
  return {
    c() {
      t = Vn("svg"), n = Vn("path"), r = Vn("circle"), fe(n, "d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"), fe(r, "cx", "12"), fe(r, "cy", "13"), fe(r, "r", "4"), fe(t, "xmlns", "http://www.w3.org/2000/svg"), fe(t, "width", "100%"), fe(t, "height", "100%"), fe(t, "viewBox", "0 0 24 24"), fe(t, "fill", "none"), fe(t, "stroke", "currentColor"), fe(t, "stroke-width", "1.5"), fe(t, "stroke-linecap", "round"), fe(t, "stroke-linejoin", "round"), fe(t, "class", "feather feather-camera");
    },
    m(i, l) {
      na(i, t, l), ii(t, n), ii(t, r);
    },
    p: zn,
    i: zn,
    o: zn,
    d(i) {
      i && ea(t);
    }
  };
}
class la extends $s {
  constructor(t) {
    super(), ta(this, t, null, ia, ra, {});
  }
}
const {
  SvelteComponent: oa,
  append: sa,
  attr: de,
  detach: aa,
  init: ua,
  insert: fa,
  noop: Xn,
  safe_not_equal: ca,
  svg_element: li
} = window.__gradio__svelte__internal;
function _a(e) {
  let t, n;
  return {
    c() {
      t = li("svg"), n = li("circle"), de(n, "cx", "12"), de(n, "cy", "12"), de(n, "r", "10"), de(t, "xmlns", "http://www.w3.org/2000/svg"), de(t, "width", "100%"), de(t, "height", "100%"), de(t, "viewBox", "0 0 24 24"), de(t, "fill", "red"), de(t, "stroke", "red"), de(t, "stroke-width", "1.5"), de(t, "stroke-linecap", "round"), de(t, "stroke-linejoin", "round"), de(t, "class", "feather feather-circle");
    },
    m(r, i) {
      fa(r, t, i), sa(t, n);
    },
    p: Xn,
    i: Xn,
    o: Xn,
    d(r) {
      r && aa(t);
    }
  };
}
class ha extends oa {
  constructor(t) {
    super(), ua(this, t, null, _a, ca, {});
  }
}
const {
  SvelteComponent: da,
  append: Wn,
  attr: Be,
  detach: ma,
  init: ga,
  insert: pa,
  noop: Zn,
  safe_not_equal: ba,
  set_style: Ie,
  svg_element: un
} = window.__gradio__svelte__internal;
function va(e) {
  let t, n, r, i;
  return {
    c() {
      t = un("svg"), n = un("g"), r = un("path"), i = un("path"), Be(r, "d", "M18,6L6.087,17.913"), Ie(r, "fill", "none"), Ie(r, "fill-rule", "nonzero"), Ie(r, "stroke-width", "2px"), Be(n, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), Be(i, "d", "M4.364,4.364L19.636,19.636"), Ie(i, "fill", "none"), Ie(i, "fill-rule", "nonzero"), Ie(i, "stroke-width", "2px"), Be(t, "width", "100%"), Be(t, "height", "100%"), Be(t, "viewBox", "0 0 24 24"), Be(t, "version", "1.1"), Be(t, "xmlns", "http://www.w3.org/2000/svg"), Be(t, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Be(t, "xml:space", "preserve"), Be(t, "stroke", "currentColor"), Ie(t, "fill-rule", "evenodd"), Ie(t, "clip-rule", "evenodd"), Ie(t, "stroke-linecap", "round"), Ie(t, "stroke-linejoin", "round");
    },
    m(l, o) {
      pa(l, t, o), Wn(t, n), Wn(n, r), Wn(t, i);
    },
    p: Zn,
    i: Zn,
    o: Zn,
    d(l) {
      l && ma(t);
    }
  };
}
class wa extends da {
  constructor(t) {
    super(), ga(this, t, null, va, ba, {});
  }
}
const {
  SvelteComponent: ya,
  append: Ea,
  attr: Rt,
  detach: Sa,
  init: ka,
  insert: Ta,
  noop: Jn,
  safe_not_equal: Aa,
  svg_element: oi
} = window.__gradio__svelte__internal;
function Ca(e) {
  let t, n;
  return {
    c() {
      t = oi("svg"), n = oi("path"), Rt(n, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), Rt(n, "fill", "currentColor"), Rt(t, "id", "icon"), Rt(t, "xmlns", "http://www.w3.org/2000/svg"), Rt(t, "viewBox", "0 0 32 32");
    },
    m(r, i) {
      Ta(r, t, i), Ea(t, n);
    },
    p: Jn,
    i: Jn,
    o: Jn,
    d(r) {
      r && Sa(t);
    }
  };
}
class Ba extends ya {
  constructor(t) {
    super(), ka(this, t, null, Ca, Aa, {});
  }
}
const {
  SvelteComponent: Ha,
  append: Pa,
  attr: _t,
  detach: Na,
  init: Ia,
  insert: La,
  noop: Qn,
  safe_not_equal: Oa,
  svg_element: si
} = window.__gradio__svelte__internal;
function Ma(e) {
  let t, n;
  return {
    c() {
      t = si("svg"), n = si("path"), _t(n, "fill", "currentColor"), _t(n, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), _t(t, "xmlns", "http://www.w3.org/2000/svg"), _t(t, "width", "100%"), _t(t, "height", "100%"), _t(t, "viewBox", "0 0 32 32");
    },
    m(r, i) {
      La(r, t, i), Pa(t, n);
    },
    p: Qn,
    i: Qn,
    o: Qn,
    d(r) {
      r && Na(t);
    }
  };
}
class Ra extends Ha {
  constructor(t) {
    super(), Ia(this, t, null, Ma, Oa, {});
  }
}
const {
  SvelteComponent: Da,
  append: Ua,
  attr: ht,
  detach: Fa,
  init: Ga,
  insert: qa,
  noop: Yn,
  safe_not_equal: ja,
  svg_element: ai
} = window.__gradio__svelte__internal;
function xa(e) {
  let t, n;
  return {
    c() {
      t = ai("svg"), n = ai("path"), ht(n, "d", "M5 8l4 4 4-4z"), ht(t, "class", "dropdown-arrow svelte-145leq6"), ht(t, "xmlns", "http://www.w3.org/2000/svg"), ht(t, "width", "100%"), ht(t, "height", "100%"), ht(t, "viewBox", "0 0 18 18");
    },
    m(r, i) {
      qa(r, t, i), Ua(t, n);
    },
    p: Yn,
    i: Yn,
    o: Yn,
    d(r) {
      r && Fa(t);
    }
  };
}
class Xl extends Da {
  constructor(t) {
    super(), Ga(this, t, null, xa, ja, {});
  }
}
const {
  SvelteComponent: za,
  append: Kn,
  attr: Q,
  detach: Va,
  init: Xa,
  insert: Wa,
  noop: $n,
  safe_not_equal: Za,
  svg_element: fn
} = window.__gradio__svelte__internal;
function Ja(e) {
  let t, n, r, i;
  return {
    c() {
      t = fn("svg"), n = fn("rect"), r = fn("circle"), i = fn("polyline"), Q(n, "x", "3"), Q(n, "y", "3"), Q(n, "width", "18"), Q(n, "height", "18"), Q(n, "rx", "2"), Q(n, "ry", "2"), Q(r, "cx", "8.5"), Q(r, "cy", "8.5"), Q(r, "r", "1.5"), Q(i, "points", "21 15 16 10 5 21"), Q(t, "xmlns", "http://www.w3.org/2000/svg"), Q(t, "width", "100%"), Q(t, "height", "100%"), Q(t, "viewBox", "0 0 24 24"), Q(t, "fill", "none"), Q(t, "stroke", "currentColor"), Q(t, "stroke-width", "1.5"), Q(t, "stroke-linecap", "round"), Q(t, "stroke-linejoin", "round"), Q(t, "class", "feather feather-image");
    },
    m(l, o) {
      Wa(l, t, o), Kn(t, n), Kn(t, r), Kn(t, i);
    },
    p: $n,
    i: $n,
    o: $n,
    d(l) {
      l && Va(t);
    }
  };
}
let Nn = class extends za {
  constructor(t) {
    super(), Xa(this, t, null, Ja, Za, {});
  }
};
const {
  SvelteComponent: Qa,
  append: Ya,
  attr: dt,
  detach: Ka,
  init: $a,
  insert: eu,
  noop: er,
  safe_not_equal: tu,
  svg_element: ui
} = window.__gradio__svelte__internal;
function nu(e) {
  let t, n;
  return {
    c() {
      t = ui("svg"), n = ui("path"), dt(n, "fill", "currentColor"), dt(n, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a3.99 3.99 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2h3.5Zm2.245 2.096L16 4.25c0-.052-.002-.103-.005-.154ZM13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5ZM15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3h-5Zm0 11a2.985 2.985 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A2.985 2.985 0 0 1 20 23h-5Zm5-7a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"), dt(t, "xmlns", "http://www.w3.org/2000/svg"), dt(t, "width", "100%"), dt(t, "height", "100%"), dt(t, "viewBox", "0 0 24 24");
    },
    m(r, i) {
      eu(r, t, i), Ya(t, n);
    },
    p: er,
    i: er,
    o: er,
    d(r) {
      r && Ka(t);
    }
  };
}
class ru extends Qa {
  constructor(t) {
    super(), $a(this, t, null, nu, tu, {});
  }
}
const {
  SvelteComponent: iu,
  append: lu,
  attr: oe,
  detach: ou,
  init: su,
  insert: au,
  noop: tr,
  safe_not_equal: uu,
  svg_element: fi
} = window.__gradio__svelte__internal;
function fu(e) {
  let t, n;
  return {
    c() {
      t = fi("svg"), n = fi("rect"), oe(n, "x", "3"), oe(n, "y", "3"), oe(n, "width", "18"), oe(n, "height", "18"), oe(n, "rx", "2"), oe(n, "ry", "2"), oe(t, "xmlns", "http://www.w3.org/2000/svg"), oe(t, "width", "100%"), oe(t, "height", "100%"), oe(t, "viewBox", "0 0 24 24"), oe(t, "fill", "red"), oe(t, "stroke", "red"), oe(t, "stroke-width", "1.5"), oe(t, "stroke-linecap", "round"), oe(t, "stroke-linejoin", "round"), oe(t, "class", "feather feather-square");
    },
    m(r, i) {
      au(r, t, i), lu(t, n);
    },
    p: tr,
    i: tr,
    o: tr,
    d(r) {
      r && ou(t);
    }
  };
}
class cu extends iu {
  constructor(t) {
    super(), su(this, t, null, fu, uu, {});
  }
}
const {
  SvelteComponent: _u,
  append: nr,
  attr: se,
  detach: hu,
  init: du,
  insert: mu,
  noop: rr,
  safe_not_equal: gu,
  svg_element: cn
} = window.__gradio__svelte__internal;
function pu(e) {
  let t, n, r, i;
  return {
    c() {
      t = cn("svg"), n = cn("path"), r = cn("polyline"), i = cn("line"), se(n, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), se(r, "points", "17 8 12 3 7 8"), se(i, "x1", "12"), se(i, "y1", "3"), se(i, "x2", "12"), se(i, "y2", "15"), se(t, "xmlns", "http://www.w3.org/2000/svg"), se(t, "width", "90%"), se(t, "height", "90%"), se(t, "viewBox", "0 0 24 24"), se(t, "fill", "none"), se(t, "stroke", "currentColor"), se(t, "stroke-width", "2"), se(t, "stroke-linecap", "round"), se(t, "stroke-linejoin", "round"), se(t, "class", "feather feather-upload");
    },
    m(l, o) {
      mu(l, t, o), nr(t, n), nr(t, r), nr(t, i);
    },
    p: rr,
    i: rr,
    o: rr,
    d(l) {
      l && hu(t);
    }
  };
}
let Wl = class extends _u {
  constructor(t) {
    super(), du(this, t, null, pu, gu, {});
  }
};
const {
  SvelteComponent: bu,
  append: ci,
  attr: Ye,
  detach: vu,
  init: wu,
  insert: yu,
  noop: ir,
  safe_not_equal: Eu,
  svg_element: lr
} = window.__gradio__svelte__internal;
function Su(e) {
  let t, n, r;
  return {
    c() {
      t = lr("svg"), n = lr("path"), r = lr("path"), Ye(n, "fill", "currentColor"), Ye(n, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), Ye(r, "fill", "currentColor"), Ye(r, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), Ye(t, "xmlns", "http://www.w3.org/2000/svg"), Ye(t, "width", "100%"), Ye(t, "height", "100%"), Ye(t, "viewBox", "0 0 24 24");
    },
    m(i, l) {
      yu(i, t, l), ci(t, n), ci(t, r);
    },
    p: ir,
    i: ir,
    o: ir,
    d(i) {
      i && vu(t);
    }
  };
}
let ku = class extends bu {
  constructor(t) {
    super(), wu(this, t, null, Su, Eu, {});
  }
};
const {
  SvelteComponent: Tu,
  create_component: Au,
  destroy_component: Cu,
  init: Bu,
  mount_component: Hu,
  safe_not_equal: Pu,
  transition_in: Nu,
  transition_out: Iu
} = window.__gradio__svelte__internal, { createEventDispatcher: Lu } = window.__gradio__svelte__internal;
function Ou(e) {
  let t, n;
  return t = new Pn({
    props: {
      Icon: Ba,
      label: (
        /*i18n*/
        e[2]("common.share")
      ),
      pending: (
        /*pending*/
        e[3]
      )
    }
  }), t.$on(
    "click",
    /*click_handler*/
    e[5]
  ), {
    c() {
      Au(t.$$.fragment);
    },
    m(r, i) {
      Hu(t, r, i), n = !0;
    },
    p(r, [i]) {
      const l = {};
      i & /*i18n*/
      4 && (l.label = /*i18n*/
      r[2]("common.share")), i & /*pending*/
      8 && (l.pending = /*pending*/
      r[3]), t.$set(l);
    },
    i(r) {
      n || (Nu(t.$$.fragment, r), n = !0);
    },
    o(r) {
      Iu(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Cu(t, r);
    }
  };
}
function Mu(e, t, n) {
  const r = Lu();
  let { formatter: i } = t, { value: l } = t, { i18n: o } = t, a = !1;
  const s = async () => {
    try {
      n(3, a = !0);
      const u = await i(l);
      r("share", { description: u });
    } catch (u) {
      console.error(u);
      let f = u instanceof pn ? u.message : "Share failed.";
      r("error", f);
    } finally {
      n(3, a = !1);
    }
  };
  return e.$$set = (u) => {
    "formatter" in u && n(0, i = u.formatter), "value" in u && n(1, l = u.value), "i18n" in u && n(2, o = u.i18n);
  }, [i, l, o, a, r, s];
}
class Ru extends Tu {
  constructor(t) {
    super(), Bu(this, t, Mu, Ou, Pu, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: Du,
  append: at,
  attr: yr,
  create_component: Uu,
  destroy_component: Fu,
  detach: bn,
  element: Er,
  init: Gu,
  insert: vn,
  mount_component: qu,
  safe_not_equal: ju,
  set_data: Sr,
  space: kr,
  text: Ft,
  toggle_class: _i,
  transition_in: xu,
  transition_out: zu
} = window.__gradio__svelte__internal;
function hi(e) {
  let t, n, r = (
    /*i18n*/
    e[1]("common.or") + ""
  ), i, l, o, a = (
    /*message*/
    (e[2] || /*i18n*/
    e[1]("upload_text.click_to_upload")) + ""
  ), s;
  return {
    c() {
      t = Er("span"), n = Ft("- "), i = Ft(r), l = Ft(" -"), o = kr(), s = Ft(a), yr(t, "class", "or svelte-kzcjhc");
    },
    m(u, f) {
      vn(u, t, f), at(t, n), at(t, i), at(t, l), vn(u, o, f), vn(u, s, f);
    },
    p(u, f) {
      f & /*i18n*/
      2 && r !== (r = /*i18n*/
      u[1]("common.or") + "") && Sr(i, r), f & /*message, i18n*/
      6 && a !== (a = /*message*/
      (u[2] || /*i18n*/
      u[1]("upload_text.click_to_upload")) + "") && Sr(s, a);
    },
    d(u) {
      u && (bn(t), bn(o), bn(s));
    }
  };
}
function Vu(e) {
  let t, n, r, i, l = (
    /*i18n*/
    e[1](
      /*defs*/
      e[5][
        /*type*/
        e[0]
      ] || /*defs*/
      e[5].file
    ) + ""
  ), o, a, s;
  r = new Wl({});
  let u = (
    /*mode*/
    e[3] !== "short" && hi(e)
  );
  return {
    c() {
      t = Er("div"), n = Er("span"), Uu(r.$$.fragment), i = kr(), o = Ft(l), a = kr(), u && u.c(), yr(n, "class", "icon-wrap svelte-kzcjhc"), _i(
        n,
        "hovered",
        /*hovered*/
        e[4]
      ), yr(t, "class", "wrap svelte-kzcjhc");
    },
    m(f, _) {
      vn(f, t, _), at(t, n), qu(r, n, null), at(t, i), at(t, o), at(t, a), u && u.m(t, null), s = !0;
    },
    p(f, [_]) {
      (!s || _ & /*hovered*/
      16) && _i(
        n,
        "hovered",
        /*hovered*/
        f[4]
      ), (!s || _ & /*i18n, type*/
      3) && l !== (l = /*i18n*/
      f[1](
        /*defs*/
        f[5][
          /*type*/
          f[0]
        ] || /*defs*/
        f[5].file
      ) + "") && Sr(o, l), /*mode*/
      f[3] !== "short" ? u ? u.p(f, _) : (u = hi(f), u.c(), u.m(t, null)) : u && (u.d(1), u = null);
    },
    i(f) {
      s || (xu(r.$$.fragment, f), s = !0);
    },
    o(f) {
      zu(r.$$.fragment, f), s = !1;
    },
    d(f) {
      f && bn(t), Fu(r), u && u.d();
    }
  };
}
function Xu(e, t, n) {
  let { type: r = "file" } = t, { i18n: i } = t, { message: l = void 0 } = t, { mode: o = "full" } = t, { hovered: a = !1 } = t;
  const s = {
    image: "upload_text.drop_image",
    video: "upload_text.drop_video",
    audio: "upload_text.drop_audio",
    file: "upload_text.drop_file",
    csv: "upload_text.drop_csv"
  };
  return e.$$set = (u) => {
    "type" in u && n(0, r = u.type), "i18n" in u && n(1, i = u.i18n), "message" in u && n(2, l = u.message), "mode" in u && n(3, o = u.mode), "hovered" in u && n(4, a = u.hovered);
  }, [r, i, l, o, a, s];
}
class Wu extends Du {
  constructor(t) {
    super(), Gu(this, t, Xu, Vu, ju, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: Zu,
  attr: Ju,
  create_slot: Qu,
  detach: Yu,
  element: Ku,
  get_all_dirty_from_scope: $u,
  get_slot_changes: ef,
  init: tf,
  insert: nf,
  safe_not_equal: rf,
  toggle_class: di,
  transition_in: lf,
  transition_out: of,
  update_slot_base: sf
} = window.__gradio__svelte__internal;
function af(e) {
  let t, n;
  const r = (
    /*#slots*/
    e[2].default
  ), i = Qu(
    r,
    e,
    /*$$scope*/
    e[1],
    null
  );
  return {
    c() {
      t = Ku("div"), i && i.c(), Ju(t, "class", "svelte-ipfyu7"), di(
        t,
        "show_border",
        /*show_border*/
        e[0]
      );
    },
    m(l, o) {
      nf(l, t, o), i && i.m(t, null), n = !0;
    },
    p(l, [o]) {
      i && i.p && (!n || o & /*$$scope*/
      2) && sf(
        i,
        r,
        l,
        /*$$scope*/
        l[1],
        n ? ef(
          r,
          /*$$scope*/
          l[1],
          o,
          null
        ) : $u(
          /*$$scope*/
          l[1]
        ),
        null
      ), (!n || o & /*show_border*/
      1) && di(
        t,
        "show_border",
        /*show_border*/
        l[0]
      );
    },
    i(l) {
      n || (lf(i, l), n = !0);
    },
    o(l) {
      of(i, l), n = !1;
    },
    d(l) {
      l && Yu(t), i && i.d(l);
    }
  };
}
function uf(e, t, n) {
  let { $$slots: r = {}, $$scope: i } = t, { show_border: l = !1 } = t;
  return e.$$set = (o) => {
    "show_border" in o && n(0, l = o.show_border), "$$scope" in o && n(1, i = o.$$scope);
  }, [l, i, r];
}
class ff extends Zu {
  constructor(t) {
    super(), tf(this, t, uf, af, rf, { show_border: 0 });
  }
}
const Zl = (e) => {
  let t = e.currentTarget;
  const n = t.getBoundingClientRect(), r = t.naturalWidth / n.width, i = t.naturalHeight / n.height;
  if (r > i) {
    const a = t.naturalHeight / r, s = (n.height - a) / 2;
    var l = Math.round((e.clientX - n.left) * r), o = Math.round((e.clientY - n.top - s) * r);
  } else {
    const a = t.naturalWidth / i, s = (n.width - a) / 2;
    var l = Math.round((e.clientX - n.left - s) * i), o = Math.round((e.clientY - n.top) * i);
  }
  return l < 0 || l >= t.naturalWidth || o < 0 || o >= t.naturalHeight ? null : [l, o];
};
var or = new Intl.Collator(0, { numeric: 1 }).compare;
function mi(e, t, n) {
  return e = e.split("."), t = t.split("."), or(e[0], t[0]) || or(e[1], t[1]) || (t[2] = t.slice(2).join("."), n = /[.-]/.test(e[2] = e.slice(2).join(".")), n == /[.-]/.test(t[2]) ? or(e[2], t[2]) : n ? -1 : 1);
}
function $e(e, t, n) {
  return t.startsWith("http://") || t.startsWith("https://") ? n ? e : t : e + t;
}
function sr(e) {
  if (e.startsWith("http")) {
    const { protocol: t, host: n } = new URL(e);
    return n.endsWith("hf.space") ? {
      ws_protocol: "wss",
      host: n,
      http_protocol: t
    } : {
      ws_protocol: t === "https:" ? "wss" : "ws",
      http_protocol: t,
      host: n
    };
  } else if (e.startsWith("file:"))
    return {
      ws_protocol: "ws",
      http_protocol: "http:",
      host: "lite.local"
      // Special fake hostname only used for this case. This matches the hostname allowed in `is_self_host()` in `js/wasm/network/host.ts`.
    };
  return {
    ws_protocol: "wss",
    http_protocol: "https:",
    host: e
  };
}
const Jl = /^[^\/]*\/[^\/]*$/, cf = /.*hf\.space\/{0,1}$/;
async function _f(e, t) {
  const n = {};
  t && (n.Authorization = `Bearer ${t}`);
  const r = e.trim();
  if (Jl.test(r))
    try {
      const i = await fetch(
        `https://huggingface.co/api/spaces/${r}/host`,
        { headers: n }
      );
      if (i.status !== 200)
        throw new Error("Space metadata could not be loaded.");
      const l = (await i.json()).host;
      return {
        space_id: e,
        ...sr(l)
      };
    } catch (i) {
      throw new Error("Space metadata could not be loaded." + i.message);
    }
  if (cf.test(r)) {
    const { ws_protocol: i, http_protocol: l, host: o } = sr(r);
    return {
      space_id: o.replace(".hf.space", ""),
      ws_protocol: i,
      http_protocol: l,
      host: o
    };
  }
  return {
    space_id: !1,
    ...sr(r)
  };
}
function hf(e) {
  let t = {};
  return e.forEach(({ api_name: n }, r) => {
    n && (t[n] = r);
  }), t;
}
const df = /^(?=[^]*\b[dD]iscussions{0,1}\b)(?=[^]*\b[dD]isabled\b)[^]*$/;
async function gi(e) {
  try {
    const n = (await fetch(
      `https://huggingface.co/api/spaces/${e}/discussions`,
      {
        method: "HEAD"
      }
    )).headers.get("x-error-message");
    return !(n && df.test(n));
  } catch {
    return !1;
  }
}
function Ge(e, t, n) {
  if (e == null)
    return null;
  if (Array.isArray(e)) {
    const r = [];
    for (const i of e)
      i == null ? r.push(null) : r.push(Ge(i, t, n));
    return r;
  }
  return e.is_stream ? n == null ? new wt({
    ...e,
    url: t + "/stream/" + e.path
  }) : new wt({
    ...e,
    url: "/proxy=" + n + "stream/" + e.path
  }) : new wt({
    ...e,
    url: gf(e.path, t, n)
  });
}
function mf(e) {
  try {
    const t = new URL(e);
    return t.protocol === "http:" || t.protocol === "https:";
  } catch {
    return !1;
  }
}
function gf(e, t, n) {
  return e == null ? n ? `/proxy=${n}file=` : `${t}/file=` : mf(e) ? e : n ? `/proxy=${n}file=${e}` : `${t}/file=${e}`;
}
async function pf(e, t, n, r = yf) {
  let i = (Array.isArray(e) ? e : [e]).map(
    (l) => l.blob
  );
  return await Promise.all(
    await r(t, i, void 0, n).then(
      async (l) => {
        if (l.error)
          throw new Error(l.error);
        return l.files ? l.files.map((o, a) => {
          const s = new wt({ ...e[a], path: o });
          return Ge(s, t, null);
        }) : [];
      }
    )
  );
}
async function bf(e, t) {
  return e.map(
    (n, r) => new wt({
      path: n.name,
      orig_name: n.name,
      blob: n,
      size: n.size,
      mime_type: n.type,
      is_stream: t
    })
  );
}
class wt {
  constructor({
    path: t,
    url: n,
    orig_name: r,
    size: i,
    blob: l,
    is_stream: o,
    mime_type: a,
    alt_text: s
  }) {
    this.path = t, this.url = n, this.orig_name = r, this.size = i, this.blob = n ? void 0 : l, this.is_stream = o, this.mime_type = a, this.alt_text = s;
  }
}
const vf = "This application is too busy. Keep trying!", Dt = "Connection errored out.";
let Ql;
function wf(e, t) {
  return { post_data: n, upload_files: r, client: i, handle_blob: l };
  async function n(o, a, s) {
    const u = { "Content-Type": "application/json" };
    s && (u.Authorization = `Bearer ${s}`);
    try {
      var f = await e(o, {
        method: "POST",
        body: JSON.stringify(a),
        headers: u
      });
    } catch {
      return [{ error: Dt }, 500];
    }
    return [await f.json(), f.status];
  }
  async function r(o, a, s, u) {
    const f = {};
    s && (f.Authorization = `Bearer ${s}`);
    const _ = 1e3, c = [];
    for (let m = 0; m < a.length; m += _) {
      const d = a.slice(m, m + _), E = new FormData();
      d.forEach((A) => {
        E.append("files", A);
      });
      try {
        const A = u ? `${o}/upload?upload_id=${u}` : `${o}/upload`;
        var h = await e(A, {
          method: "POST",
          body: E,
          headers: f
        });
      } catch {
        return { error: Dt };
      }
      const S = await h.json();
      c.push(...S);
    }
    return { files: c };
  }
  async function i(o, a = { normalise_files: !0 }) {
    return new Promise(async (s) => {
      const { status_callback: u, hf_token: f, normalise_files: _ } = a, c = {
        predict: W,
        submit: O,
        view_api: B,
        component_server: ie
      }, h = _ ?? !0;
      if ((typeof window > "u" || !("WebSocket" in window)) && !global.Websocket) {
        const C = await import("./wrapper-6f348d45-f837cf34.js");
        Ql = (await import("./__vite-browser-external-2447137e.js")).Blob, global.WebSocket = C.WebSocket;
      }
      const { ws_protocol: m, http_protocol: d, host: E, space_id: S } = await _f(o, f), A = Math.random().toString(36).substring(2), v = {};
      let p, k = {}, P = !1;
      f && S && (P = await Sf(S, f));
      async function q(C) {
        if (p = C, k = hf((C == null ? void 0 : C.dependencies) || []), p.auth_required)
          return {
            config: p,
            ...c
          };
        try {
          T = await B(p);
        } catch (D) {
          console.error(`Could not get api details: ${D.message}`);
        }
        return {
          config: p,
          ...c
        };
      }
      let T;
      async function N(C) {
        if (u && u(C), C.status === "running")
          try {
            p = await wi(
              e,
              `${d}//${E}`,
              f
            );
            const D = await q(p);
            s(D);
          } catch (D) {
            console.error(D), u && u({
              status: "error",
              message: "Could not load this space.",
              load_status: "error",
              detail: "NOT_FOUND"
            });
          }
      }
      try {
        p = await wi(
          e,
          `${d}//${E}`,
          f
        );
        const C = await q(p);
        s(C);
      } catch (C) {
        console.error(C), S ? Ar(
          S,
          Jl.test(S) ? "space_name" : "subdomain",
          N
        ) : u && u({
          status: "error",
          message: "Could not load this space.",
          load_status: "error",
          detail: "NOT_FOUND"
        });
      }
      function W(C, D, K) {
        let j = !1, H = !1, z;
        if (typeof C == "number")
          z = p.dependencies[C];
        else {
          const y = C.replace(/^\//, "");
          z = p.dependencies[k[y]];
        }
        if (z.types.continuous)
          throw new Error(
            "Cannot call predict on this function as it may run forever. Use submit instead"
          );
        return new Promise((y, w) => {
          const U = O(C, D, K);
          let g;
          U.on("data", ($) => {
            H && (U.destroy(), y($)), j = !0, g = $;
          }).on("status", ($) => {
            $.stage === "error" && w($), $.stage === "complete" && (H = !0, j && (U.destroy(), y(g)));
          });
        });
      }
      function O(C, D, K, j = null) {
        let H, z;
        if (typeof C == "number")
          H = C, z = T.unnamed_endpoints[H];
        else {
          const te = C.replace(/^\//, "");
          H = k[te], z = T.named_endpoints[C.trim()];
        }
        if (typeof H != "number")
          throw new Error(
            "There is no endpoint matching that name of fn_index matching that number."
          );
        let y, w, U = p.protocol ?? "sse";
        const g = typeof C == "number" ? "/predict" : C;
        let $, Re = null, _e = !1;
        const De = {};
        let Ue = "";
        typeof window < "u" && (Ue = new URLSearchParams(window.location.search).toString()), l(
          `${d}//${$e(E, p.path, !0)}`,
          D,
          z,
          f
        ).then((te) => {
          if ($ = { data: te || [], event_data: K, fn_index: H, trigger_id: j }, kf(H, p))
            b({
              type: "status",
              endpoint: g,
              stage: "pending",
              queue: !1,
              fn_index: H,
              time: /* @__PURE__ */ new Date()
            }), n(
              `${d}//${$e(E, p.path, !0)}/run${g.startsWith("/") ? g : `/${g}`}${Ue ? "?" + Ue : ""}`,
              {
                ...$,
                session_hash: A
              },
              f
            ).then(([Z, ne]) => {
              const We = h ? ar(
                Z.data,
                z,
                p.root,
                p.root_url
              ) : Z.data;
              ne == 200 ? (b({
                type: "data",
                endpoint: g,
                fn_index: H,
                data: We,
                time: /* @__PURE__ */ new Date()
              }), b({
                type: "status",
                endpoint: g,
                fn_index: H,
                stage: "complete",
                eta: Z.average_duration,
                queue: !1,
                time: /* @__PURE__ */ new Date()
              })) : b({
                type: "status",
                stage: "error",
                endpoint: g,
                fn_index: H,
                message: Z.error,
                queue: !1,
                time: /* @__PURE__ */ new Date()
              });
            }).catch((Z) => {
              b({
                type: "status",
                stage: "error",
                message: Z.message,
                endpoint: g,
                fn_index: H,
                queue: !1,
                time: /* @__PURE__ */ new Date()
              });
            });
          else if (U == "ws") {
            b({
              type: "status",
              stage: "pending",
              queue: !0,
              endpoint: g,
              fn_index: H,
              time: /* @__PURE__ */ new Date()
            });
            let Z = new URL(`${m}://${$e(
              E,
              p.path,
              !0
            )}
							/queue/join${Ue ? "?" + Ue : ""}`);
            P && Z.searchParams.set("__sign", P), y = t(Z), y.onclose = (ne) => {
              ne.wasClean || b({
                type: "status",
                stage: "error",
                broken: !0,
                message: Dt,
                queue: !0,
                endpoint: g,
                fn_index: H,
                time: /* @__PURE__ */ new Date()
              });
            }, y.onmessage = function(ne) {
              const We = JSON.parse(ne.data), { type: ve, status: ee, data: Ce } = yi(
                We,
                v[H]
              );
              if (ve === "update" && ee && !_e)
                b({
                  type: "status",
                  endpoint: g,
                  fn_index: H,
                  time: /* @__PURE__ */ new Date(),
                  ...ee
                }), ee.stage === "error" && y.close();
              else if (ve === "hash") {
                y.send(JSON.stringify({ fn_index: H, session_hash: A }));
                return;
              } else
                ve === "data" ? y.send(JSON.stringify({ ...$, session_hash: A })) : ve === "complete" ? _e = ee : ve === "log" ? b({
                  type: "log",
                  log: Ce.log,
                  level: Ce.level,
                  endpoint: g,
                  fn_index: H
                }) : ve === "generating" && b({
                  type: "status",
                  time: /* @__PURE__ */ new Date(),
                  ...ee,
                  stage: ee == null ? void 0 : ee.stage,
                  queue: !0,
                  endpoint: g,
                  fn_index: H
                });
              Ce && (b({
                type: "data",
                time: /* @__PURE__ */ new Date(),
                data: h ? ar(
                  Ce.data,
                  z,
                  p.root,
                  p.root_url
                ) : Ce.data,
                endpoint: g,
                fn_index: H
              }), _e && (b({
                type: "status",
                time: /* @__PURE__ */ new Date(),
                ..._e,
                stage: ee == null ? void 0 : ee.stage,
                queue: !0,
                endpoint: g,
                fn_index: H
              }), y.close()));
            }, mi(p.version || "2.0.0", "3.6") < 0 && addEventListener(
              "open",
              () => y.send(JSON.stringify({ hash: A }))
            );
          } else {
            b({
              type: "status",
              stage: "pending",
              queue: !0,
              endpoint: g,
              fn_index: H,
              time: /* @__PURE__ */ new Date()
            });
            var be = new URLSearchParams({
              fn_index: H.toString(),
              session_hash: A
            }).toString();
            let Z = new URL(
              `${d}//${$e(
                E,
                p.path,
                !0
              )}/queue/join?${Ue ? Ue + "&" : ""}${be}`
            );
            w = new EventSource(Z), w.onmessage = async function(ne) {
              const We = JSON.parse(ne.data), { type: ve, status: ee, data: Ce } = yi(
                We,
                v[H]
              );
              if (ve === "update" && ee && !_e)
                b({
                  type: "status",
                  endpoint: g,
                  fn_index: H,
                  time: /* @__PURE__ */ new Date(),
                  ...ee
                }), ee.stage === "error" && w.close();
              else if (ve === "data") {
                Re = We.event_id;
                let [Vd, qo] = await n(
                  `${d}//${$e(
                    E,
                    p.path,
                    !0
                  )}/queue/data`,
                  {
                    ...$,
                    session_hash: A,
                    event_id: Re
                  },
                  f
                );
                qo !== 200 && (b({
                  type: "status",
                  stage: "error",
                  message: Dt,
                  queue: !0,
                  endpoint: g,
                  fn_index: H,
                  time: /* @__PURE__ */ new Date()
                }), w.close());
              } else
                ve === "complete" ? _e = ee : ve === "log" ? b({
                  type: "log",
                  log: Ce.log,
                  level: Ce.level,
                  endpoint: g,
                  fn_index: H
                }) : ve === "generating" && b({
                  type: "status",
                  time: /* @__PURE__ */ new Date(),
                  ...ee,
                  stage: ee == null ? void 0 : ee.stage,
                  queue: !0,
                  endpoint: g,
                  fn_index: H
                });
              Ce && (b({
                type: "data",
                time: /* @__PURE__ */ new Date(),
                data: h ? ar(
                  Ce.data,
                  z,
                  p.root,
                  p.root_url
                ) : Ce.data,
                endpoint: g,
                fn_index: H
              }), _e && (b({
                type: "status",
                time: /* @__PURE__ */ new Date(),
                ..._e,
                stage: ee == null ? void 0 : ee.stage,
                queue: !0,
                endpoint: g,
                fn_index: H
              }), w.close()));
            };
          }
        });
        function b(te) {
          const Z = De[te.type] || [];
          Z == null || Z.forEach((ne) => ne(te));
        }
        function Fn(te, be) {
          const Z = De, ne = Z[te] || [];
          return Z[te] = ne, ne == null || ne.push(be), { on: Fn, off: on, cancel: Gn, destroy: qn };
        }
        function on(te, be) {
          const Z = De;
          let ne = Z[te] || [];
          return ne = ne == null ? void 0 : ne.filter((We) => We !== be), Z[te] = ne, { on: Fn, off: on, cancel: Gn, destroy: qn };
        }
        async function Gn() {
          const te = {
            stage: "complete",
            queue: !1,
            time: /* @__PURE__ */ new Date()
          };
          _e = te, b({
            ...te,
            type: "status",
            endpoint: g,
            fn_index: H
          });
          let be = {};
          U === "ws" ? (y && y.readyState === 0 ? y.addEventListener("open", () => {
            y.close();
          }) : y.close(), be = { fn_index: H, session_hash: A }) : (w.close(), be = { event_id: Re });
          try {
            await e(
              `${d}//${$e(
                E,
                p.path,
                !0
              )}/reset`,
              {
                headers: { "Content-Type": "application/json" },
                method: "POST",
                body: JSON.stringify(be)
              }
            );
          } catch {
            console.warn(
              "The `/reset` endpoint could not be called. Subsequent endpoint results may be unreliable."
            );
          }
        }
        function qn() {
          for (const te in De)
            De[te].forEach((be) => {
              on(te, be);
            });
        }
        return {
          on: Fn,
          off: on,
          cancel: Gn,
          destroy: qn
        };
      }
      async function ie(C, D, K) {
        var j;
        const H = { "Content-Type": "application/json" };
        f && (H.Authorization = `Bearer ${f}`);
        let z, y = p.components.find(
          (g) => g.id === C
        );
        (j = y == null ? void 0 : y.props) != null && j.root_url ? z = y.props.root_url : z = `${d}//${$e(
          E,
          p.path,
          !0
        )}/`;
        const w = await e(
          `${z}component_server/`,
          {
            method: "POST",
            body: JSON.stringify({
              data: K,
              component_id: C,
              fn_name: D,
              session_hash: A
            }),
            headers: H
          }
        );
        if (!w.ok)
          throw new Error(
            "Could not connect to component server: " + w.statusText
          );
        return await w.json();
      }
      async function B(C) {
        if (T)
          return T;
        const D = { "Content-Type": "application/json" };
        f && (D.Authorization = `Bearer ${f}`);
        let K;
        if (mi(C.version || "2.0.0", "3.30") < 0 ? K = await e(
          "https://gradio-space-api-fetcher-v2.hf.space/api",
          {
            method: "POST",
            body: JSON.stringify({
              serialize: !1,
              config: JSON.stringify(C)
            }),
            headers: D
          }
        ) : K = await e(`${C.root}/info`, {
          headers: D
        }), !K.ok)
          throw new Error(Dt);
        let j = await K.json();
        return "api" in j && (j = j.api), j.named_endpoints["/predict"] && !j.unnamed_endpoints[0] && (j.unnamed_endpoints[0] = j.named_endpoints["/predict"]), Ef(j, C, k);
      }
    });
  }
  async function l(o, a, s, u) {
    const f = await Tr(
      a,
      void 0,
      [],
      !0,
      s
    );
    return Promise.all(
      f.map(async ({ path: _, blob: c, type: h }) => {
        if (c) {
          const m = (await r(o, [c], u)).files[0];
          return { path: _, file_url: m, type: h, name: c == null ? void 0 : c.name };
        }
        return { path: _, type: h };
      })
    ).then((_) => (_.forEach(({ path: c, file_url: h, type: m, name: d }) => {
      if (m === "Gallery")
        vi(a, h, c);
      else if (h) {
        const E = new wt({ path: h, orig_name: d });
        vi(a, E, c);
      }
    }), a));
  }
}
const { post_data: Jd, upload_files: yf, client: Qd, handle_blob: Yd } = wf(
  fetch,
  (...e) => new WebSocket(...e)
);
function ar(e, t, n, r) {
  return e.map((i, l) => {
    var o, a, s, u;
    return ((a = (o = t == null ? void 0 : t.returns) == null ? void 0 : o[l]) == null ? void 0 : a.component) === "File" ? Ge(i, n, r) : ((u = (s = t == null ? void 0 : t.returns) == null ? void 0 : s[l]) == null ? void 0 : u.component) === "Gallery" ? i.map((f) => Array.isArray(f) ? [Ge(f[0], n, r), f[1]] : [Ge(f, n, r), null]) : typeof i == "object" && i.path ? Ge(i, n, r) : i;
  });
}
function pi(e, t, n, r) {
  switch (e.type) {
    case "string":
      return "string";
    case "boolean":
      return "boolean";
    case "number":
      return "number";
  }
  if (n === "JSONSerializable" || n === "StringSerializable")
    return "any";
  if (n === "ListStringSerializable")
    return "string[]";
  if (t === "Image")
    return r === "parameter" ? "Blob | File | Buffer" : "string";
  if (n === "FileSerializable")
    return (e == null ? void 0 : e.type) === "array" ? r === "parameter" ? "(Blob | File | Buffer)[]" : "{ name: string; data: string; size?: number; is_file?: boolean; orig_name?: string}[]" : r === "parameter" ? "Blob | File | Buffer" : "{ name: string; data: string; size?: number; is_file?: boolean; orig_name?: string}";
  if (n === "GallerySerializable")
    return r === "parameter" ? "[(Blob | File | Buffer), (string | null)][]" : "[{ name: string; data: string; size?: number; is_file?: boolean; orig_name?: string}, (string | null))][]";
}
function bi(e, t) {
  return t === "GallerySerializable" ? "array of [file, label] tuples" : t === "ListStringSerializable" ? "array of strings" : t === "FileSerializable" ? "array of files or single file" : e.description;
}
function Ef(e, t, n) {
  const r = {
    named_endpoints: {},
    unnamed_endpoints: {}
  };
  for (const i in e) {
    const l = e[i];
    for (const o in l) {
      const a = t.dependencies[o] ? o : n[o.replace("/", "")], s = l[o];
      r[i][o] = {}, r[i][o].parameters = {}, r[i][o].returns = {}, r[i][o].type = t.dependencies[a].types, r[i][o].parameters = s.parameters.map(
        ({ label: u, component: f, type: _, serializer: c }) => ({
          label: u,
          component: f,
          type: pi(_, f, c, "parameter"),
          description: bi(_, c)
        })
      ), r[i][o].returns = s.returns.map(
        ({ label: u, component: f, type: _, serializer: c }) => ({
          label: u,
          component: f,
          type: pi(_, f, c, "return"),
          description: bi(_, c)
        })
      );
    }
  }
  return r;
}
async function Sf(e, t) {
  try {
    return (await (await fetch(`https://huggingface.co/api/spaces/${e}/jwt`, {
      headers: {
        Authorization: `Bearer ${t}`
      }
    })).json()).token || !1;
  } catch (n) {
    return console.error(n), !1;
  }
}
function vi(e, t, n) {
  for (; n.length > 1; )
    e = e[n.shift()];
  e[n.shift()] = t;
}
async function Tr(e, t = void 0, n = [], r = !1, i = void 0) {
  if (Array.isArray(e)) {
    let l = [];
    return await Promise.all(
      e.map(async (o, a) => {
        var s;
        let u = n.slice();
        u.push(a);
        const f = await Tr(
          e[a],
          r ? ((s = i == null ? void 0 : i.parameters[a]) == null ? void 0 : s.component) || void 0 : t,
          u,
          !1,
          i
        );
        l = l.concat(f);
      })
    ), l;
  } else {
    if (globalThis.Buffer && e instanceof globalThis.Buffer)
      return [
        {
          path: n,
          blob: t === "Image" ? !1 : new Ql([e]),
          type: t
        }
      ];
    if (typeof e == "object") {
      let l = [];
      for (let o in e)
        if (e.hasOwnProperty(o)) {
          let a = n.slice();
          a.push(o), l = l.concat(
            await Tr(
              e[o],
              void 0,
              a,
              !1,
              i
            )
          );
        }
      return l;
    }
  }
  return [];
}
function kf(e, t) {
  var n, r, i, l;
  return !(((r = (n = t == null ? void 0 : t.dependencies) == null ? void 0 : n[e]) == null ? void 0 : r.queue) === null ? t.enable_queue : (l = (i = t == null ? void 0 : t.dependencies) == null ? void 0 : i[e]) != null && l.queue) || !1;
}
async function wi(e, t, n) {
  const r = {};
  if (n && (r.Authorization = `Bearer ${n}`), typeof window < "u" && window.gradio_config && location.origin !== "http://localhost:9876" && !window.gradio_config.dev_mode) {
    const i = window.gradio_config.root, l = window.gradio_config;
    return l.root = $e(t, l.root, !1), { ...l, path: i };
  } else if (t) {
    let i = await e(`${t}/config`, {
      headers: r
    });
    if (i.status === 200) {
      const l = await i.json();
      return l.path = l.path ?? "", l.root = t, l;
    }
    throw new Error("Could not get config.");
  }
  throw new Error("No config or app endpoint found");
}
async function Ar(e, t, n) {
  let r = t === "subdomain" ? `https://huggingface.co/api/spaces/by-subdomain/${e}` : `https://huggingface.co/api/spaces/${e}`, i, l;
  try {
    if (i = await fetch(r), l = i.status, l !== 200)
      throw new Error();
    i = await i.json();
  } catch {
    n({
      status: "error",
      load_status: "error",
      message: "Could not get space status",
      detail: "NOT_FOUND"
    });
    return;
  }
  if (!i || l !== 200)
    return;
  const {
    runtime: { stage: o },
    id: a
  } = i;
  switch (o) {
    case "STOPPED":
    case "SLEEPING":
      n({
        status: "sleeping",
        load_status: "pending",
        message: "Space is asleep. Waking it up...",
        detail: o
      }), setTimeout(() => {
        Ar(e, t, n);
      }, 1e3);
      break;
    case "PAUSED":
      n({
        status: "paused",
        load_status: "error",
        message: "This space has been paused by the author. If you would like to try this demo, consider duplicating the space.",
        detail: o,
        discussions_enabled: await gi(a)
      });
      break;
    case "RUNNING":
    case "RUNNING_BUILDING":
      n({
        status: "running",
        load_status: "complete",
        message: "",
        detail: o
      });
      break;
    case "BUILDING":
      n({
        status: "building",
        load_status: "pending",
        message: "Space is building...",
        detail: o
      }), setTimeout(() => {
        Ar(e, t, n);
      }, 1e3);
      break;
    default:
      n({
        status: "space_error",
        load_status: "error",
        message: "This space is experiencing an issue.",
        detail: o,
        discussions_enabled: await gi(a)
      });
      break;
  }
}
function yi(e, t) {
  switch (e.msg) {
    case "send_data":
      return { type: "data" };
    case "send_hash":
      return { type: "hash" };
    case "queue_full":
      return {
        type: "update",
        status: {
          queue: !0,
          message: vf,
          stage: "error",
          code: e.code,
          success: e.success
        }
      };
    case "estimation":
      return {
        type: "update",
        status: {
          queue: !0,
          stage: t || "pending",
          code: e.code,
          size: e.queue_size,
          position: e.rank,
          eta: e.rank_eta,
          success: e.success
        }
      };
    case "progress":
      return {
        type: "update",
        status: {
          queue: !0,
          stage: "pending",
          code: e.code,
          progress_data: e.progress_data,
          success: e.success
        }
      };
    case "log":
      return { type: "log", data: e };
    case "process_generating":
      return {
        type: "generating",
        status: {
          queue: !0,
          message: e.success ? null : e.output.error,
          stage: e.success ? "generating" : "error",
          code: e.code,
          progress_data: e.progress_data,
          eta: e.average_duration
        },
        data: e.success ? e.output : null
      };
    case "process_completed":
      return "error" in e.output ? {
        type: "update",
        status: {
          queue: !0,
          message: e.output.error,
          stage: "error",
          code: e.code,
          success: e.success
        }
      } : {
        type: "complete",
        status: {
          queue: !0,
          message: e.success ? void 0 : e.output.error,
          stage: e.success ? "complete" : "error",
          code: e.code,
          progress_data: e.progress_data,
          eta: e.output.average_duration
        },
        data: e.success ? e.output : null
      };
    case "process_starts":
      return {
        type: "update",
        status: {
          queue: !0,
          stage: "pending",
          code: e.code,
          size: e.rank,
          position: 0,
          success: e.success
        }
      };
  }
  return { type: "none", status: { stage: "error", queue: !0 } };
}
const {
  SvelteComponent: Tf,
  append: Ei,
  attr: ke,
  bubble: Si,
  check_outros: Cr,
  create_component: Jt,
  destroy_component: Qt,
  detach: yt,
  element: wn,
  empty: Af,
  group_outros: Br,
  init: Cf,
  insert: Et,
  listen: Bf,
  mount_component: Yt,
  safe_not_equal: Hf,
  space: Hr,
  src_url_equal: ki,
  toggle_class: Ti,
  transition_in: me,
  transition_out: Ne
} = window.__gradio__svelte__internal, { createEventDispatcher: Pf } = window.__gradio__svelte__internal;
function Nf(e) {
  let t, n, r, i, l, o, a, s, u, f = (
    /*show_download_button*/
    e[3] && Ai(e)
  ), _ = (
    /*show_share_button*/
    e[5] && Ci(e)
  );
  return {
    c() {
      t = wn("div"), f && f.c(), n = Hr(), _ && _.c(), r = Hr(), i = wn("button"), l = wn("img"), ke(t, "class", "icon-buttons svelte-4mma78"), ki(l.src, o = /*value*/
      e[0].url) || ke(l, "src", o), ke(l, "alt", ""), ke(l, "loading", "lazy"), ke(l, "class", "svelte-4mma78"), Ti(
        l,
        "selectable",
        /*selectable*/
        e[4]
      ), ke(i, "class", "svelte-4mma78");
    },
    m(c, h) {
      Et(c, t, h), f && f.m(t, null), Ei(t, n), _ && _.m(t, null), Et(c, r, h), Et(c, i, h), Ei(i, l), a = !0, s || (u = Bf(
        i,
        "click",
        /*handle_click*/
        e[7]
      ), s = !0);
    },
    p(c, h) {
      /*show_download_button*/
      c[3] ? f ? (f.p(c, h), h & /*show_download_button*/
      8 && me(f, 1)) : (f = Ai(c), f.c(), me(f, 1), f.m(t, n)) : f && (Br(), Ne(f, 1, 1, () => {
        f = null;
      }), Cr()), /*show_share_button*/
      c[5] ? _ ? (_.p(c, h), h & /*show_share_button*/
      32 && me(_, 1)) : (_ = Ci(c), _.c(), me(_, 1), _.m(t, null)) : _ && (Br(), Ne(_, 1, 1, () => {
        _ = null;
      }), Cr()), (!a || h & /*value*/
      1 && !ki(l.src, o = /*value*/
      c[0].url)) && ke(l, "src", o), (!a || h & /*selectable*/
      16) && Ti(
        l,
        "selectable",
        /*selectable*/
        c[4]
      );
    },
    i(c) {
      a || (me(f), me(_), a = !0);
    },
    o(c) {
      Ne(f), Ne(_), a = !1;
    },
    d(c) {
      c && (yt(t), yt(r), yt(i)), f && f.d(), _ && _.d(), s = !1, u();
    }
  };
}
function If(e) {
  let t, n;
  return t = new Vl({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [Lf] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Jt(t.$$.fragment);
    },
    m(r, i) {
      Yt(t, r, i), n = !0;
    },
    p(r, i) {
      const l = {};
      i & /*$$scope*/
      4096 && (l.$$scope = { dirty: i, ctx: r }), t.$set(l);
    },
    i(r) {
      n || (me(t.$$.fragment, r), n = !0);
    },
    o(r) {
      Ne(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Qt(t, r);
    }
  };
}
function Ai(e) {
  let t, n, r, i, l;
  return n = new Pn({
    props: {
      Icon: Ra,
      label: (
        /*i18n*/
        e[6]("common.download")
      )
    }
  }), {
    c() {
      t = wn("a"), Jt(n.$$.fragment), ke(t, "href", r = /*value*/
      e[0].url), ke(t, "target", window.__is_colab__ ? "_blank" : null), ke(t, "download", i = /*value*/
      e[0].orig_name || "image");
    },
    m(o, a) {
      Et(o, t, a), Yt(n, t, null), l = !0;
    },
    p(o, a) {
      const s = {};
      a & /*i18n*/
      64 && (s.label = /*i18n*/
      o[6]("common.download")), n.$set(s), (!l || a & /*value*/
      1 && r !== (r = /*value*/
      o[0].url)) && ke(t, "href", r), (!l || a & /*value*/
      1 && i !== (i = /*value*/
      o[0].orig_name || "image")) && ke(t, "download", i);
    },
    i(o) {
      l || (me(n.$$.fragment, o), l = !0);
    },
    o(o) {
      Ne(n.$$.fragment, o), l = !1;
    },
    d(o) {
      o && yt(t), Qt(n);
    }
  };
}
function Ci(e) {
  let t, n;
  return t = new Ru({
    props: {
      i18n: (
        /*i18n*/
        e[6]
      ),
      formatter: (
        /*func*/
        e[8]
      ),
      value: (
        /*value*/
        e[0]
      )
    }
  }), t.$on(
    "share",
    /*share_handler*/
    e[9]
  ), t.$on(
    "error",
    /*error_handler*/
    e[10]
  ), {
    c() {
      Jt(t.$$.fragment);
    },
    m(r, i) {
      Yt(t, r, i), n = !0;
    },
    p(r, i) {
      const l = {};
      i & /*i18n*/
      64 && (l.i18n = /*i18n*/
      r[6]), i & /*value*/
      1 && (l.value = /*value*/
      r[0]), t.$set(l);
    },
    i(r) {
      n || (me(t.$$.fragment, r), n = !0);
    },
    o(r) {
      Ne(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Qt(t, r);
    }
  };
}
function Lf(e) {
  let t, n;
  return t = new Nn({}), {
    c() {
      Jt(t.$$.fragment);
    },
    m(r, i) {
      Yt(t, r, i), n = !0;
    },
    i(r) {
      n || (me(t.$$.fragment, r), n = !0);
    },
    o(r) {
      Ne(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Qt(t, r);
    }
  };
}
function Of(e) {
  let t, n, r, i, l, o;
  t = new jl({
    props: {
      show_label: (
        /*show_label*/
        e[2]
      ),
      Icon: Nn,
      label: (
        /*label*/
        e[1] || /*i18n*/
        e[6]("image.image")
      )
    }
  });
  const a = [If, Nf], s = [];
  function u(f, _) {
    return (
      /*value*/
      f[0] === null || !/*value*/
      f[0].url ? 0 : 1
    );
  }
  return r = u(e), i = s[r] = a[r](e), {
    c() {
      Jt(t.$$.fragment), n = Hr(), i.c(), l = Af();
    },
    m(f, _) {
      Yt(t, f, _), Et(f, n, _), s[r].m(f, _), Et(f, l, _), o = !0;
    },
    p(f, [_]) {
      const c = {};
      _ & /*show_label*/
      4 && (c.show_label = /*show_label*/
      f[2]), _ & /*label, i18n*/
      66 && (c.label = /*label*/
      f[1] || /*i18n*/
      f[6]("image.image")), t.$set(c);
      let h = r;
      r = u(f), r === h ? s[r].p(f, _) : (Br(), Ne(s[h], 1, 1, () => {
        s[h] = null;
      }), Cr(), i = s[r], i ? i.p(f, _) : (i = s[r] = a[r](f), i.c()), me(i, 1), i.m(l.parentNode, l));
    },
    i(f) {
      o || (me(t.$$.fragment, f), me(i), o = !0);
    },
    o(f) {
      Ne(t.$$.fragment, f), Ne(i), o = !1;
    },
    d(f) {
      f && (yt(n), yt(l)), Qt(t, f), s[r].d(f);
    }
  };
}
function Mf(e, t, n) {
  let { value: r } = t, { label: i = void 0 } = t, { show_label: l } = t, { show_download_button: o = !0 } = t, { selectable: a = !1 } = t, { show_share_button: s = !1 } = t, { i18n: u } = t;
  const f = Pf(), _ = (d) => {
    let E = Zl(d);
    E && f("select", { index: E, value: null });
  }, c = async (d) => d ? `<img src="${await zo(d, "base64")}" />` : "";
  function h(d) {
    Si.call(this, e, d);
  }
  function m(d) {
    Si.call(this, e, d);
  }
  return e.$$set = (d) => {
    "value" in d && n(0, r = d.value), "label" in d && n(1, i = d.label), "show_label" in d && n(2, l = d.show_label), "show_download_button" in d && n(3, o = d.show_download_button), "selectable" in d && n(4, a = d.selectable), "show_share_button" in d && n(5, s = d.show_share_button), "i18n" in d && n(6, u = d.i18n);
  }, [
    r,
    i,
    l,
    o,
    a,
    s,
    u,
    _,
    c,
    h,
    m
  ];
}
class Rf extends Tf {
  constructor(t) {
    super(), Cf(this, t, Mf, Of, Hf, {
      value: 0,
      label: 1,
      show_label: 2,
      show_download_button: 3,
      selectable: 4,
      show_share_button: 5,
      i18n: 6
    });
  }
}
const {
  SvelteComponent: Df,
  action_destroyer: Uf,
  append: Me,
  attr: Y,
  binding_callbacks: Ff,
  check_outros: xt,
  create_component: Kt,
  destroy_component: $t,
  destroy_each: Gf,
  detach: Ve,
  element: Te,
  empty: qf,
  ensure_array_like: Bi,
  group_outros: zt,
  init: jf,
  insert: Xe,
  is_function: xf,
  listen: In,
  mount_component: en,
  noop: zf,
  run_all: Vf,
  safe_not_equal: Xf,
  set_data: Wf,
  space: tn,
  stop_propagation: Zf,
  text: Jf,
  toggle_class: Sn,
  transition_in: re,
  transition_out: ue
} = window.__gradio__svelte__internal, { createEventDispatcher: Qf, onMount: Yf, tick: Kd } = window.__gradio__svelte__internal;
function Hi(e, t, n) {
  const r = e.slice();
  return r[27] = t[n], r;
}
function Pi(e) {
  let t, n, r, i, l, o, a, s, u;
  const f = [$f, Kf], _ = [];
  function c(m, d) {
    return (
      /*mode*/
      m[1] === "video" ? 0 : 1
    );
  }
  r = c(e), i = _[r] = f[r](e);
  let h = !/*recording*/
  e[5] && Ni(e);
  return {
    c() {
      t = Te("div"), n = Te("button"), i.c(), o = tn(), h && h.c(), Y(n, "aria-label", l = /*mode*/
      e[1] === "image" ? "capture photo" : "start recording"), Y(n, "class", "svelte-fbzos1"), Y(t, "class", "button-wrap svelte-fbzos1"), Sn(t, "capture", !/*recording*/
      e[5]);
    },
    m(m, d) {
      Xe(m, t, d), Me(t, n), _[r].m(n, null), Me(t, o), h && h.m(t, null), a = !0, s || (u = In(n, "click", function() {
        xf(
          /*mode*/
          e[1] === "image" ? (
            /*take_picture*/
            e[8]
          ) : (
            /*take_recording*/
            e[9]
          )
        ) && /*mode*/
        (e[1] === "image" ? (
          /*take_picture*/
          e[8]
        ) : (
          /*take_recording*/
          e[9]
        )).apply(this, arguments);
      }), s = !0);
    },
    p(m, d) {
      e = m;
      let E = r;
      r = c(e), r === E ? _[r].p(e, d) : (zt(), ue(_[E], 1, 1, () => {
        _[E] = null;
      }), xt(), i = _[r], i ? i.p(e, d) : (i = _[r] = f[r](e), i.c()), re(i, 1), i.m(n, null)), (!a || d & /*mode*/
      2 && l !== (l = /*mode*/
      e[1] === "image" ? "capture photo" : "start recording")) && Y(n, "aria-label", l), /*recording*/
      e[5] ? h && (zt(), ue(h, 1, 1, () => {
        h = null;
      }), xt()) : h ? (h.p(e, d), d & /*recording*/
      32 && re(h, 1)) : (h = Ni(e), h.c(), re(h, 1), h.m(t, null)), (!a || d & /*recording*/
      32) && Sn(t, "capture", !/*recording*/
      e[5]);
    },
    i(m) {
      a || (re(i), re(h), a = !0);
    },
    o(m) {
      ue(i), ue(h), a = !1;
    },
    d(m) {
      m && Ve(t), _[r].d(), h && h.d(), s = !1, u();
    }
  };
}
function Kf(e) {
  let t, n, r;
  return n = new la({}), {
    c() {
      t = Te("div"), Kt(n.$$.fragment), Y(t, "class", "icon svelte-fbzos1"), Y(t, "title", "capture photo");
    },
    m(i, l) {
      Xe(i, t, l), en(n, t, null), r = !0;
    },
    p: zf,
    i(i) {
      r || (re(n.$$.fragment, i), r = !0);
    },
    o(i) {
      ue(n.$$.fragment, i), r = !1;
    },
    d(i) {
      i && Ve(t), $t(n);
    }
  };
}
function $f(e) {
  let t, n, r, i;
  const l = [tc, ec], o = [];
  function a(s, u) {
    return (
      /*recording*/
      s[5] ? 0 : 1
    );
  }
  return t = a(e), n = o[t] = l[t](e), {
    c() {
      n.c(), r = qf();
    },
    m(s, u) {
      o[t].m(s, u), Xe(s, r, u), i = !0;
    },
    p(s, u) {
      let f = t;
      t = a(s), t !== f && (zt(), ue(o[f], 1, 1, () => {
        o[f] = null;
      }), xt(), n = o[t], n || (n = o[t] = l[t](s), n.c()), re(n, 1), n.m(r.parentNode, r));
    },
    i(s) {
      i || (re(n), i = !0);
    },
    o(s) {
      ue(n), i = !1;
    },
    d(s) {
      s && Ve(r), o[t].d(s);
    }
  };
}
function ec(e) {
  let t, n, r;
  return n = new ha({}), {
    c() {
      t = Te("div"), Kt(n.$$.fragment), Y(t, "class", "icon svelte-fbzos1"), Y(t, "title", "start recording");
    },
    m(i, l) {
      Xe(i, t, l), en(n, t, null), r = !0;
    },
    i(i) {
      r || (re(n.$$.fragment, i), r = !0);
    },
    o(i) {
      ue(n.$$.fragment, i), r = !1;
    },
    d(i) {
      i && Ve(t), $t(n);
    }
  };
}
function tc(e) {
  let t, n, r;
  return n = new cu({}), {
    c() {
      t = Te("div"), Kt(n.$$.fragment), Y(t, "class", "icon svelte-fbzos1"), Y(t, "title", "stop recording");
    },
    m(i, l) {
      Xe(i, t, l), en(n, t, null), r = !0;
    },
    i(i) {
      r || (re(n.$$.fragment, i), r = !0);
    },
    o(i) {
      ue(n.$$.fragment, i), r = !1;
    },
    d(i) {
      i && Ve(t), $t(n);
    }
  };
}
function Ni(e) {
  let t, n, r, i, l, o, a, s;
  r = new Xl({});
  let u = (
    /*options_open*/
    e[7] && Ii(e)
  );
  return {
    c() {
      t = Te("button"), n = Te("div"), Kt(r.$$.fragment), i = tn(), u && u.c(), Y(n, "class", "icon svelte-fbzos1"), Y(n, "title", "select video source"), Y(t, "aria-label", l = /*mode*/
      e[1] === "image" ? "capture photo" : "start recording"), Y(t, "class", "svelte-fbzos1");
    },
    m(f, _) {
      Xe(f, t, _), Me(t, n), en(r, n, null), Me(t, i), u && u.m(t, null), o = !0, a || (s = In(
        t,
        "click",
        /*select_source*/
        e[10]
      ), a = !0);
    },
    p(f, _) {
      /*options_open*/
      f[7] ? u ? (u.p(f, _), _ & /*options_open*/
      128 && re(u, 1)) : (u = Ii(f), u.c(), re(u, 1), u.m(t, null)) : u && (zt(), ue(u, 1, 1, () => {
        u = null;
      }), xt()), (!o || _ & /*mode*/
      2 && l !== (l = /*mode*/
      f[1] === "image" ? "capture photo" : "start recording")) && Y(t, "aria-label", l);
    },
    i(f) {
      o || (re(r.$$.fragment, f), re(u), o = !0);
    },
    o(f) {
      ue(r.$$.fragment, f), ue(u), o = !1;
    },
    d(f) {
      f && Ve(t), $t(r), u && u.d(), a = !1, s();
    }
  };
}
function Ii(e) {
  let t, n, r, i, l, o, a;
  r = new Xl({});
  let s = Bi(
    /*video_sources*/
    e[6]
  ), u = [];
  for (let f = 0; f < s.length; f += 1)
    u[f] = Li(Hi(e, s, f));
  return {
    c() {
      t = Te("div"), n = Te("span"), Kt(r.$$.fragment), i = tn();
      for (let f = 0; f < u.length; f += 1)
        u[f].c();
      Y(n, "class", "inset-icon svelte-fbzos1"), Y(t, "class", "select-wrap svelte-fbzos1");
    },
    m(f, _) {
      Xe(f, t, _), Me(t, n), en(r, n, null), Me(t, i);
      for (let c = 0; c < u.length; c += 1)
        u[c] && u[c].m(t, null);
      l = !0, o || (a = [
        In(n, "click", Zf(
          /*click_handler*/
          e[17]
        )),
        Uf(Xr.call(
          null,
          t,
          /*handle_click_outside*/
          e[12]
        ))
      ], o = !0);
    },
    p(f, _) {
      if (_ & /*selectVideoSource, video_sources*/
      2112) {
        s = Bi(
          /*video_sources*/
          f[6]
        );
        let c;
        for (c = 0; c < s.length; c += 1) {
          const h = Hi(f, s, c);
          u[c] ? u[c].p(h, _) : (u[c] = Li(h), u[c].c(), u[c].m(t, null));
        }
        for (; c < u.length; c += 1)
          u[c].d(1);
        u.length = s.length;
      }
    },
    i(f) {
      l || (re(r.$$.fragment, f), l = !0);
    },
    o(f) {
      ue(r.$$.fragment, f), l = !1;
    },
    d(f) {
      f && Ve(t), $t(r), Gf(u, f), o = !1, Vf(a);
    }
  };
}
function Li(e) {
  let t, n = (
    /*source*/
    e[27].label + ""
  ), r, i, l, o;
  function a() {
    return (
      /*click_handler_1*/
      e[18](
        /*source*/
        e[27]
      )
    );
  }
  return {
    c() {
      t = Te("div"), r = Jf(n), i = tn(), Y(t, "class", "svelte-fbzos1");
    },
    m(s, u) {
      Xe(s, t, u), Me(t, r), Me(t, i), l || (o = In(t, "click", a), l = !0);
    },
    p(s, u) {
      e = s, u & /*video_sources*/
      64 && n !== (n = /*source*/
      e[27].label + "") && Wf(r, n);
    },
    d(s) {
      s && Ve(t), l = !1, o();
    }
  };
}
function nc(e) {
  let t, n, r, i, l = !/*streaming*/
  e[0] && Pi(e);
  return {
    c() {
      t = Te("div"), n = Te("video"), r = tn(), l && l.c(), Y(n, "class", "svelte-fbzos1"), Sn(
        n,
        "flip",
        /*mirror_webcam*/
        e[2]
      ), Y(t, "class", "wrap svelte-fbzos1");
    },
    m(o, a) {
      Xe(o, t, a), Me(t, n), e[16](n), Me(t, r), l && l.m(t, null), i = !0;
    },
    p(o, [a]) {
      (!i || a & /*mirror_webcam*/
      4) && Sn(
        n,
        "flip",
        /*mirror_webcam*/
        o[2]
      ), /*streaming*/
      o[0] ? l && (zt(), ue(l, 1, 1, () => {
        l = null;
      }), xt()) : l ? (l.p(o, a), a & /*streaming*/
      1 && re(l, 1)) : (l = Pi(o), l.c(), re(l, 1), l.m(t, null));
    },
    i(o) {
      i || (re(l), i = !0);
    },
    o(o) {
      ue(l), i = !1;
    },
    d(o) {
      o && Ve(t), e[16](null), l && l.d();
    }
  };
}
function Xr(e, t) {
  const n = (r) => {
    e && !e.contains(r.target) && !r.defaultPrevented && t(r);
  };
  return document.addEventListener("click", n, !0), {
    destroy() {
      document.removeEventListener("click", n, !0);
    }
  };
}
function rc(e, t, n) {
  let r, i, { streaming: l = !1 } = t, { pending: o = !1 } = t, { mode: a = "image" } = t, { mirror_webcam: s } = t, { include_audio: u } = t, { i18n: f } = t;
  const _ = Qf();
  Yf(() => i = document.createElement("canvas"));
  const c = {
    width: { ideal: 1920 },
    height: { ideal: 1440 }
  };
  async function h(B) {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      _("error", f("image.no_webcam_support"));
      return;
    }
    try {
      S = await navigator.mediaDevices.getUserMedia({
        video: B ? { deviceId: { exact: B }, ...c } : c,
        audio: u
      }), n(4, r.srcObject = S, r), n(4, r.muted = !0, r), r.play();
    } catch (C) {
      if (C instanceof DOMException && C.name == "NotAllowedError")
        _("error", f("image.allow_webcam_access"));
      else
        throw C;
    }
  }
  function m() {
    var B = i.getContext("2d");
    r.videoWidth && r.videoHeight && (i.width = r.videoWidth, i.height = r.videoHeight, B.drawImage(r, 0, 0, r.videoWidth, r.videoHeight), s && (B.scale(-1, 1), B.drawImage(r, -r.videoWidth, 0)), i.toBlob(
      (C) => {
        _(l ? "stream" : "capture", C);
      },
      "image/png",
      0.8
    ));
  }
  let d = !1, E = [], S, A, v;
  function p() {
    if (d) {
      v.stop();
      let B = new Blob(E, { type: A }), C = new FileReader();
      C.onload = function(D) {
        D.target && (_("capture", {
          //@ts-ignore
          data: D.target.result,
          name: "sample." + A.substring(6),
          is_example: !1,
          is_file: !1
        }), _("stop_recording"));
      }, C.readAsDataURL(B);
    } else {
      _("start_recording"), E = [];
      let B = ["video/webm", "video/mp4"];
      for (let C of B)
        if (MediaRecorder.isTypeSupported(C)) {
          A = C;
          break;
        }
      if (A === null) {
        console.error("No supported MediaRecorder mimeType");
        return;
      }
      v = new MediaRecorder(S, { mimeType: A }), v.addEventListener("dataavailable", function(C) {
        E.push(C.data);
      }), v.start(200);
    }
    n(5, d = !d);
  }
  h(), l && a === "image" && window.setInterval(
    () => {
      r && !o && m();
    },
    500
  );
  async function k() {
    const B = await navigator.mediaDevices.enumerateDevices();
    n(6, P = B.filter((C) => C.kind === "videoinput")), n(7, T = !0);
  }
  let P = [];
  async function q(B) {
    await h(B), n(7, T = !1);
  }
  let T = !1;
  function N(B) {
    B.preventDefault(), B.stopPropagation(), n(7, T = !1);
  }
  function W(B) {
    Ff[B ? "unshift" : "push"](() => {
      r = B, n(4, r);
    });
  }
  const O = () => n(7, T = !1), ie = (B) => q(B.deviceId);
  return e.$$set = (B) => {
    "streaming" in B && n(0, l = B.streaming), "pending" in B && n(13, o = B.pending), "mode" in B && n(1, a = B.mode), "mirror_webcam" in B && n(2, s = B.mirror_webcam), "include_audio" in B && n(14, u = B.include_audio), "i18n" in B && n(15, f = B.i18n);
  }, [
    l,
    a,
    s,
    Xr,
    r,
    d,
    P,
    T,
    m,
    p,
    k,
    q,
    N,
    o,
    u,
    f,
    W,
    O,
    ie
  ];
}
class ic extends Df {
  constructor(t) {
    super(), jf(this, t, rc, nc, Xf, {
      streaming: 0,
      pending: 13,
      mode: 1,
      mirror_webcam: 2,
      include_audio: 14,
      i18n: 15,
      click_outside: 3
    });
  }
  get click_outside() {
    return Xr;
  }
}
function ft() {
}
function lc(e) {
  return e();
}
function oc(e) {
  e.forEach(lc);
}
function sc(e) {
  return typeof e == "function";
}
function ac(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function uc(e, ...t) {
  if (e == null) {
    for (const r of t)
      r(void 0);
    return ft;
  }
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const Yl = typeof window < "u";
let Oi = Yl ? () => window.performance.now() : () => Date.now(), Kl = Yl ? (e) => requestAnimationFrame(e) : ft;
const St = /* @__PURE__ */ new Set();
function $l(e) {
  St.forEach((t) => {
    t.c(e) || (St.delete(t), t.f());
  }), St.size !== 0 && Kl($l);
}
function fc(e) {
  let t;
  return St.size === 0 && Kl($l), {
    promise: new Promise((n) => {
      St.add(t = { c: e, f: n });
    }),
    abort() {
      St.delete(t);
    }
  };
}
const mt = [];
function cc(e, t) {
  return {
    subscribe: nn(e, t).subscribe
  };
}
function nn(e, t = ft) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function i(a) {
    if (ac(e, a) && (e = a, n)) {
      const s = !mt.length;
      for (const u of r)
        u[1](), mt.push(u, e);
      if (s) {
        for (let u = 0; u < mt.length; u += 2)
          mt[u][0](mt[u + 1]);
        mt.length = 0;
      }
    }
  }
  function l(a) {
    i(a(e));
  }
  function o(a, s = ft) {
    const u = [a, s];
    return r.add(u), r.size === 1 && (n = t(i, l) || ft), a(e), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: l, subscribe: o };
}
function Lt(e, t, n) {
  const r = !Array.isArray(e), i = r ? [e] : e;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const l = t.length < 2;
  return cc(n, (o, a) => {
    let s = !1;
    const u = [];
    let f = 0, _ = ft;
    const c = () => {
      if (f)
        return;
      _();
      const m = t(r ? u[0] : u, o, a);
      l ? o(m) : _ = sc(m) ? m : ft;
    }, h = i.map(
      (m, d) => uc(
        m,
        (E) => {
          u[d] = E, f &= ~(1 << d), s && c();
        },
        () => {
          f |= 1 << d;
        }
      )
    );
    return s = !0, c(), function() {
      oc(h), _(), s = !1;
    };
  });
}
function Mi(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function Pr(e, t, n, r) {
  if (typeof n == "number" || Mi(n)) {
    const i = r - n, l = (n - t) / (e.dt || 1 / 60), o = e.opts.stiffness * i, a = e.opts.damping * l, s = (o - a) * e.inv_mass, u = (l + s) * e.dt;
    return Math.abs(u) < e.opts.precision && Math.abs(i) < e.opts.precision ? r : (e.settled = !1, Mi(n) ? new Date(n.getTime() + u) : n + u);
  } else {
    if (Array.isArray(n))
      return n.map(
        (i, l) => Pr(e, t[l], n[l], r[l])
      );
    if (typeof n == "object") {
      const i = {};
      for (const l in n)
        i[l] = Pr(e, t[l], n[l], r[l]);
      return i;
    } else
      throw new Error(`Cannot spring ${typeof n} values`);
  }
}
function Ri(e, t = {}) {
  const n = nn(e), { stiffness: r = 0.15, damping: i = 0.8, precision: l = 0.01 } = t;
  let o, a, s, u = e, f = e, _ = 1, c = 0, h = !1;
  function m(E, S = {}) {
    f = E;
    const A = s = {};
    return e == null || S.hard || d.stiffness >= 1 && d.damping >= 1 ? (h = !0, o = Oi(), u = E, n.set(e = f), Promise.resolve()) : (S.soft && (c = 1 / ((S.soft === !0 ? 0.5 : +S.soft) * 60), _ = 0), a || (o = Oi(), h = !1, a = fc((v) => {
      if (h)
        return h = !1, a = null, !1;
      _ = Math.min(_ + c, 1);
      const p = {
        inv_mass: _,
        opts: d,
        settled: !0,
        dt: (v - o) * 60 / 1e3
      }, k = Pr(p, u, e, f);
      return o = v, u = e, n.set(e = k), p.settled && (a = null), !p.settled;
    })), new Promise((v) => {
      a.promise.then(() => {
        A === s && v();
      });
    }));
  }
  const d = {
    set: m,
    update: (E, S) => m(E(f, e), S),
    subscribe: n.subscribe,
    stiffness: r,
    damping: i,
    precision: l
  };
  return d;
}
function _c(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var hc = function(t) {
  return dc(t) && !mc(t);
};
function dc(e) {
  return !!e && typeof e == "object";
}
function mc(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || bc(e);
}
var gc = typeof Symbol == "function" && Symbol.for, pc = gc ? Symbol.for("react.element") : 60103;
function bc(e) {
  return e.$$typeof === pc;
}
function vc(e) {
  return Array.isArray(e) ? [] : {};
}
function Vt(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? kt(vc(e), e, t) : e;
}
function wc(e, t, n) {
  return e.concat(t).map(function(r) {
    return Vt(r, n);
  });
}
function yc(e, t) {
  if (!t.customMerge)
    return kt;
  var n = t.customMerge(e);
  return typeof n == "function" ? n : kt;
}
function Ec(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.propertyIsEnumerable.call(e, t);
  }) : [];
}
function Di(e) {
  return Object.keys(e).concat(Ec(e));
}
function eo(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function Sc(e, t) {
  return eo(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function kc(e, t, n) {
  var r = {};
  return n.isMergeableObject(e) && Di(e).forEach(function(i) {
    r[i] = Vt(e[i], n);
  }), Di(t).forEach(function(i) {
    Sc(e, i) || (eo(e, i) && n.isMergeableObject(t[i]) ? r[i] = yc(i, n)(e[i], t[i], n) : r[i] = Vt(t[i], n));
  }), r;
}
function kt(e, t, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || wc, n.isMergeableObject = n.isMergeableObject || hc, n.cloneUnlessOtherwiseSpecified = Vt;
  var r = Array.isArray(t), i = Array.isArray(e), l = r === i;
  return l ? r ? n.arrayMerge(e, t, n) : kc(e, t, n) : Vt(t, n);
}
kt.all = function(t, n) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(r, i) {
    return kt(r, i, n);
  }, {});
};
var Tc = kt, Ac = Tc;
const Cc = /* @__PURE__ */ _c(Ac);
var Nr = function(e, t) {
  return Nr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r)
      Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, Nr(e, t);
};
function Ln(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Nr(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var G = function() {
  return G = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var l in n)
        Object.prototype.hasOwnProperty.call(n, l) && (t[l] = n[l]);
    }
    return t;
  }, G.apply(this, arguments);
};
function ur(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, l; r < i; r++)
      (l || !(r in t)) && (l || (l = Array.prototype.slice.call(t, 0, r)), l[r] = t[r]);
  return e.concat(l || Array.prototype.slice.call(t));
}
var M;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(M || (M = {}));
var x;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(x || (x = {}));
var Tt;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(Tt || (Tt = {}));
function Ui(e) {
  return e.type === x.literal;
}
function Bc(e) {
  return e.type === x.argument;
}
function to(e) {
  return e.type === x.number;
}
function no(e) {
  return e.type === x.date;
}
function ro(e) {
  return e.type === x.time;
}
function io(e) {
  return e.type === x.select;
}
function lo(e) {
  return e.type === x.plural;
}
function Hc(e) {
  return e.type === x.pound;
}
function oo(e) {
  return e.type === x.tag;
}
function so(e) {
  return !!(e && typeof e == "object" && e.type === Tt.number);
}
function Ir(e) {
  return !!(e && typeof e == "object" && e.type === Tt.dateTime);
}
var ao = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Pc = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Nc(e) {
  var t = {};
  return e.replace(Pc, function(n) {
    var r = n.length;
    switch (n[0]) {
      case "G":
        t.era = r === 4 ? "long" : r === 5 ? "narrow" : "short";
        break;
      case "y":
        t.year = r === 2 ? "2-digit" : "numeric";
        break;
      case "Y":
      case "u":
      case "U":
      case "r":
        throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
      case "q":
      case "Q":
        throw new RangeError("`q/Q` (quarter) patterns are not supported");
      case "M":
      case "L":
        t.month = ["numeric", "2-digit", "short", "long", "narrow"][r - 1];
        break;
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        t.day = ["numeric", "2-digit"][r - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      case "E":
        t.weekday = r === 4 ? "short" : r === 5 ? "narrow" : "short";
        break;
      case "e":
        if (r < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][r - 4];
        break;
      case "c":
        if (r < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][r - 4];
        break;
      case "a":
        t.hour12 = !0;
        break;
      case "b":
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      case "h":
        t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "H":
        t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "K":
        t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "k":
        t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      case "m":
        t.minute = ["numeric", "2-digit"][r - 1];
        break;
      case "s":
        t.second = ["numeric", "2-digit"][r - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      case "z":
        t.timeZoneName = r < 4 ? "short" : "long";
        break;
      case "Z":
      case "O":
      case "v":
      case "V":
      case "X":
      case "x":
        throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
    }
    return "";
  }), t;
}
var Ic = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Lc(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(Ic).filter(function(c) {
    return c.length > 0;
  }), n = [], r = 0, i = t; r < i.length; r++) {
    var l = i[r], o = l.split("/");
    if (o.length === 0)
      throw new Error("Invalid number skeleton");
    for (var a = o[0], s = o.slice(1), u = 0, f = s; u < f.length; u++) {
      var _ = f[u];
      if (_.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: a, options: s });
  }
  return n;
}
function Oc(e) {
  return e.replace(/^(.*?)-/, "");
}
var Fi = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, uo = /^(@+)?(\+|#+)?[rs]?$/g, Mc = /(\*)(0+)|(#+)(0+)|(0+)/g, fo = /^(0+)$/;
function Gi(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(uo, function(n, r, i) {
    return typeof i != "string" ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : i === "+" ? t.minimumSignificantDigits = r.length : r[0] === "#" ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), t;
}
function co(e) {
  switch (e) {
    case "sign-auto":
      return {
        signDisplay: "auto"
      };
    case "sign-accounting":
    case "()":
      return {
        currencySign: "accounting"
      };
    case "sign-always":
    case "+!":
      return {
        signDisplay: "always"
      };
    case "sign-accounting-always":
    case "()!":
      return {
        signDisplay: "always",
        currencySign: "accounting"
      };
    case "sign-except-zero":
    case "+?":
      return {
        signDisplay: "exceptZero"
      };
    case "sign-accounting-except-zero":
    case "()?":
      return {
        signDisplay: "exceptZero",
        currencySign: "accounting"
      };
    case "sign-never":
    case "+_":
      return {
        signDisplay: "never"
      };
  }
}
function Rc(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var n = e.slice(0, 2);
    if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !fo.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function qi(e) {
  var t = {}, n = co(e);
  return n || t;
}
function Dc(e) {
  for (var t = {}, n = 0, r = e; n < r.length; n++) {
    var i = r[n];
    switch (i.stem) {
      case "percent":
      case "%":
        t.style = "percent";
        continue;
      case "%x100":
        t.style = "percent", t.scale = 100;
        continue;
      case "currency":
        t.style = "currency", t.currency = i.options[0];
        continue;
      case "group-off":
      case ",_":
        t.useGrouping = !1;
        continue;
      case "precision-integer":
      case ".":
        t.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
      case "unit":
        t.style = "unit", t.unit = Oc(i.options[0]);
        continue;
      case "compact-short":
      case "K":
        t.notation = "compact", t.compactDisplay = "short";
        continue;
      case "compact-long":
      case "KK":
        t.notation = "compact", t.compactDisplay = "long";
        continue;
      case "scientific":
        t = G(G(G({}, t), { notation: "scientific" }), i.options.reduce(function(s, u) {
          return G(G({}, s), qi(u));
        }, {}));
        continue;
      case "engineering":
        t = G(G(G({}, t), { notation: "engineering" }), i.options.reduce(function(s, u) {
          return G(G({}, s), qi(u));
        }, {}));
        continue;
      case "notation-simple":
        t.notation = "standard";
        continue;
      case "unit-width-narrow":
        t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
        continue;
      case "unit-width-short":
        t.currencyDisplay = "code", t.unitDisplay = "short";
        continue;
      case "unit-width-full-name":
        t.currencyDisplay = "name", t.unitDisplay = "long";
        continue;
      case "unit-width-iso-code":
        t.currencyDisplay = "symbol";
        continue;
      case "scale":
        t.scale = parseFloat(i.options[0]);
        continue;
      case "integer-width":
        if (i.options.length > 1)
          throw new RangeError("integer-width stems only accept a single optional option");
        i.options[0].replace(Mc, function(s, u, f, _, c, h) {
          if (u)
            t.minimumIntegerDigits = f.length;
          else {
            if (_ && c)
              throw new Error("We currently do not support maximum integer digits");
            if (h)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (fo.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (Fi.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(Fi, function(s, u, f, _, c, h) {
        return f === "*" ? t.minimumFractionDigits = u.length : _ && _[0] === "#" ? t.maximumFractionDigits = _.length : c && h ? (t.minimumFractionDigits = c.length, t.maximumFractionDigits = c.length + h.length) : (t.minimumFractionDigits = u.length, t.maximumFractionDigits = u.length), "";
      });
      var l = i.options[0];
      l === "w" ? t = G(G({}, t), { trailingZeroDisplay: "stripIfInteger" }) : l && (t = G(G({}, t), Gi(l)));
      continue;
    }
    if (uo.test(i.stem)) {
      t = G(G({}, t), Gi(i.stem));
      continue;
    }
    var o = co(i.stem);
    o && (t = G(G({}, t), o));
    var a = Rc(i.stem);
    a && (t = G(G({}, t), a));
  }
  return t;
}
var _n = {
  AX: [
    "H"
  ],
  BQ: [
    "H"
  ],
  CP: [
    "H"
  ],
  CZ: [
    "H"
  ],
  DK: [
    "H"
  ],
  FI: [
    "H"
  ],
  ID: [
    "H"
  ],
  IS: [
    "H"
  ],
  ML: [
    "H"
  ],
  NE: [
    "H"
  ],
  RU: [
    "H"
  ],
  SE: [
    "H"
  ],
  SJ: [
    "H"
  ],
  SK: [
    "H"
  ],
  AS: [
    "h",
    "H"
  ],
  BT: [
    "h",
    "H"
  ],
  DJ: [
    "h",
    "H"
  ],
  ER: [
    "h",
    "H"
  ],
  GH: [
    "h",
    "H"
  ],
  IN: [
    "h",
    "H"
  ],
  LS: [
    "h",
    "H"
  ],
  PG: [
    "h",
    "H"
  ],
  PW: [
    "h",
    "H"
  ],
  SO: [
    "h",
    "H"
  ],
  TO: [
    "h",
    "H"
  ],
  VU: [
    "h",
    "H"
  ],
  WS: [
    "h",
    "H"
  ],
  "001": [
    "H",
    "h"
  ],
  AL: [
    "h",
    "H",
    "hB"
  ],
  TD: [
    "h",
    "H",
    "hB"
  ],
  "ca-ES": [
    "H",
    "h",
    "hB"
  ],
  CF: [
    "H",
    "h",
    "hB"
  ],
  CM: [
    "H",
    "h",
    "hB"
  ],
  "fr-CA": [
    "H",
    "h",
    "hB"
  ],
  "gl-ES": [
    "H",
    "h",
    "hB"
  ],
  "it-CH": [
    "H",
    "h",
    "hB"
  ],
  "it-IT": [
    "H",
    "h",
    "hB"
  ],
  LU: [
    "H",
    "h",
    "hB"
  ],
  NP: [
    "H",
    "h",
    "hB"
  ],
  PF: [
    "H",
    "h",
    "hB"
  ],
  SC: [
    "H",
    "h",
    "hB"
  ],
  SM: [
    "H",
    "h",
    "hB"
  ],
  SN: [
    "H",
    "h",
    "hB"
  ],
  TF: [
    "H",
    "h",
    "hB"
  ],
  VA: [
    "H",
    "h",
    "hB"
  ],
  CY: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  GR: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  CO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  DO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KP: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  VE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BW: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BZ: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  DG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  FK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GB: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IM: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IO: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  JE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  LT: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MS: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NF: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NR: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NU: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  PN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SH: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  TA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ZA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "af-ZA": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  AR: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CL: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CR: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CU: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  EA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-BO": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-BR": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-EC": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-ES": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-GQ": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-PE": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  GT: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  HN: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  IC: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KG: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KM: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  LK: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MX: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  NI: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  PY: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  SV: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  UY: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  JP: [
    "H",
    "h",
    "K"
  ],
  AD: [
    "H",
    "hB"
  ],
  AM: [
    "H",
    "hB"
  ],
  AO: [
    "H",
    "hB"
  ],
  AT: [
    "H",
    "hB"
  ],
  AW: [
    "H",
    "hB"
  ],
  BE: [
    "H",
    "hB"
  ],
  BF: [
    "H",
    "hB"
  ],
  BJ: [
    "H",
    "hB"
  ],
  BL: [
    "H",
    "hB"
  ],
  BR: [
    "H",
    "hB"
  ],
  CG: [
    "H",
    "hB"
  ],
  CI: [
    "H",
    "hB"
  ],
  CV: [
    "H",
    "hB"
  ],
  DE: [
    "H",
    "hB"
  ],
  EE: [
    "H",
    "hB"
  ],
  FR: [
    "H",
    "hB"
  ],
  GA: [
    "H",
    "hB"
  ],
  GF: [
    "H",
    "hB"
  ],
  GN: [
    "H",
    "hB"
  ],
  GP: [
    "H",
    "hB"
  ],
  GW: [
    "H",
    "hB"
  ],
  HR: [
    "H",
    "hB"
  ],
  IL: [
    "H",
    "hB"
  ],
  IT: [
    "H",
    "hB"
  ],
  KZ: [
    "H",
    "hB"
  ],
  MC: [
    "H",
    "hB"
  ],
  MD: [
    "H",
    "hB"
  ],
  MF: [
    "H",
    "hB"
  ],
  MQ: [
    "H",
    "hB"
  ],
  MZ: [
    "H",
    "hB"
  ],
  NC: [
    "H",
    "hB"
  ],
  NL: [
    "H",
    "hB"
  ],
  PM: [
    "H",
    "hB"
  ],
  PT: [
    "H",
    "hB"
  ],
  RE: [
    "H",
    "hB"
  ],
  RO: [
    "H",
    "hB"
  ],
  SI: [
    "H",
    "hB"
  ],
  SR: [
    "H",
    "hB"
  ],
  ST: [
    "H",
    "hB"
  ],
  TG: [
    "H",
    "hB"
  ],
  TR: [
    "H",
    "hB"
  ],
  WF: [
    "H",
    "hB"
  ],
  YT: [
    "H",
    "hB"
  ],
  BD: [
    "h",
    "hB",
    "H"
  ],
  PK: [
    "h",
    "hB",
    "H"
  ],
  AZ: [
    "H",
    "hB",
    "h"
  ],
  BA: [
    "H",
    "hB",
    "h"
  ],
  BG: [
    "H",
    "hB",
    "h"
  ],
  CH: [
    "H",
    "hB",
    "h"
  ],
  GE: [
    "H",
    "hB",
    "h"
  ],
  LI: [
    "H",
    "hB",
    "h"
  ],
  ME: [
    "H",
    "hB",
    "h"
  ],
  RS: [
    "H",
    "hB",
    "h"
  ],
  UA: [
    "H",
    "hB",
    "h"
  ],
  UZ: [
    "H",
    "hB",
    "h"
  ],
  XK: [
    "H",
    "hB",
    "h"
  ],
  AG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  CA: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  DM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-001": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FJ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GD: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  JM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KN: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LR: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MH: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MP: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MW: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  NZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SL: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TT: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  UM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  US: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ZM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BO: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  EC: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  ES: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  GQ: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  PE: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  AE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "ar-001": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  BH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  DZ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EG: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  HK: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  IQ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  JO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  KW: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LB: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MR: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  OM: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PS: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  QA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SD: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  TN: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  YE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  AF: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  LA: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  CN: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  LV: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  TL: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  "zu-ZA": [
    "H",
    "hB",
    "hb",
    "h"
  ],
  CD: [
    "hB",
    "H"
  ],
  IR: [
    "hB",
    "H"
  ],
  "hi-IN": [
    "hB",
    "h",
    "H"
  ],
  "kn-IN": [
    "hB",
    "h",
    "H"
  ],
  "ml-IN": [
    "hB",
    "h",
    "H"
  ],
  "te-IN": [
    "hB",
    "h",
    "H"
  ],
  KH: [
    "hB",
    "h",
    "H",
    "hb"
  ],
  "ta-IN": [
    "hB",
    "h",
    "hb",
    "H"
  ],
  BN: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  MY: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  ET: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "gu-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "mr-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "pa-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  TW: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  KE: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  MM: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  TZ: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UG: [
    "hB",
    "hb",
    "H",
    "h"
  ]
};
function Uc(e, t) {
  for (var n = "", r = 0; r < e.length; r++) {
    var i = e.charAt(r);
    if (i === "j") {
      for (var l = 0; r + 1 < e.length && e.charAt(r + 1) === i; )
        l++, r++;
      var o = 1 + (l & 1), a = l < 2 ? 1 : 3 + (l >> 1), s = "a", u = Fc(t);
      for ((u == "H" || u == "k") && (a = 0); a-- > 0; )
        n += s;
      for (; o-- > 0; )
        n = u + n;
    } else
      i === "J" ? n += "H" : n += i;
  }
  return n;
}
function Fc(e) {
  var t = e.hourCycle;
  if (t === void 0 && // @ts-ignore hourCycle(s) is not identified yet
  e.hourCycles && // @ts-ignore
  e.hourCycles.length && (t = e.hourCycles[0]), t)
    switch (t) {
      case "h24":
        return "k";
      case "h23":
        return "H";
      case "h12":
        return "h";
      case "h11":
        return "K";
      default:
        throw new Error("Invalid hourCycle");
    }
  var n = e.language, r;
  n !== "root" && (r = e.maximize().region);
  var i = _n[r || ""] || _n[n || ""] || _n["".concat(n, "-001")] || _n["001"];
  return i[0];
}
var fr, Gc = new RegExp("^".concat(ao.source, "*")), qc = new RegExp("".concat(ao.source, "*$"));
function R(e, t) {
  return { start: e, end: t };
}
var jc = !!String.prototype.startsWith, xc = !!String.fromCodePoint, zc = !!Object.fromEntries, Vc = !!String.prototype.codePointAt, Xc = !!String.prototype.trimStart, Wc = !!String.prototype.trimEnd, Zc = !!Number.isSafeInteger, Jc = Zc ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, Lr = !0;
try {
  var Qc = ho("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Lr = ((fr = Qc.exec("a")) === null || fr === void 0 ? void 0 : fr[0]) === "a";
} catch {
  Lr = !1;
}
var ji = jc ? (
  // Native
  function(t, n, r) {
    return t.startsWith(n, r);
  }
) : (
  // For IE11
  function(t, n, r) {
    return t.slice(r, r + n.length) === n;
  }
), Or = xc ? String.fromCodePoint : (
  // IE11
  function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    for (var r = "", i = t.length, l = 0, o; i > l; ) {
      if (o = t[l++], o > 1114111)
        throw RangeError(o + " is not a valid code point");
      r += o < 65536 ? String.fromCharCode(o) : String.fromCharCode(((o -= 65536) >> 10) + 55296, o % 1024 + 56320);
    }
    return r;
  }
), xi = (
  // native
  zc ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var n = {}, r = 0, i = t; r < i.length; r++) {
        var l = i[r], o = l[0], a = l[1];
        n[o] = a;
      }
      return n;
    }
  )
), _o = Vc ? (
  // Native
  function(t, n) {
    return t.codePointAt(n);
  }
) : (
  // IE 11
  function(t, n) {
    var r = t.length;
    if (!(n < 0 || n >= r)) {
      var i = t.charCodeAt(n), l;
      return i < 55296 || i > 56319 || n + 1 === r || (l = t.charCodeAt(n + 1)) < 56320 || l > 57343 ? i : (i - 55296 << 10) + (l - 56320) + 65536;
    }
  }
), Yc = Xc ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Gc, "");
  }
), Kc = Wc ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(qc, "");
  }
);
function ho(e, t) {
  return new RegExp(e, t);
}
var Mr;
if (Lr) {
  var zi = ho("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Mr = function(t, n) {
    var r;
    zi.lastIndex = n;
    var i = zi.exec(t);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  Mr = function(t, n) {
    for (var r = []; ; ) {
      var i = _o(t, n);
      if (i === void 0 || mo(i) || n0(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return Or.apply(void 0, r);
  };
var $c = (
  /** @class */
  function() {
    function e(t, n) {
      n === void 0 && (n = {}), this.message = t, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!n.ignoreTag, this.locale = n.locale, this.requiresOtherClause = !!n.requiresOtherClause, this.shouldParseSkeletons = !!n.shouldParseSkeletons;
    }
    return e.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, e.prototype.parseMessage = function(t, n, r) {
      for (var i = []; !this.isEOF(); ) {
        var l = this.char();
        if (l === 123) {
          var o = this.parseArgument(t, r);
          if (o.err)
            return o;
          i.push(o.val);
        } else {
          if (l === 125 && t > 0)
            break;
          if (l === 35 && (n === "plural" || n === "selectordinal")) {
            var a = this.clonePosition();
            this.bump(), i.push({
              type: x.pound,
              location: R(a, this.clonePosition())
            });
          } else if (l === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(M.UNMATCHED_CLOSING_TAG, R(this.clonePosition(), this.clonePosition()));
          } else if (l === 60 && !this.ignoreTag && Rr(this.peek() || 0)) {
            var o = this.parseTag(t, n);
            if (o.err)
              return o;
            i.push(o.val);
          } else {
            var o = this.parseLiteral(t, n);
            if (o.err)
              return o;
            i.push(o.val);
          }
        }
      }
      return { val: i, err: null };
    }, e.prototype.parseTag = function(t, n) {
      var r = this.clonePosition();
      this.bump();
      var i = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: x.literal,
            value: "<".concat(i, "/>"),
            location: R(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var l = this.parseMessage(t + 1, n, !0);
        if (l.err)
          return l;
        var o = l.val, a = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !Rr(this.char()))
            return this.error(M.INVALID_TAG, R(a, this.clonePosition()));
          var s = this.clonePosition(), u = this.parseTagName();
          return i !== u ? this.error(M.UNMATCHED_CLOSING_TAG, R(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: x.tag,
              value: i,
              children: o,
              location: R(r, this.clonePosition())
            },
            err: null
          } : this.error(M.INVALID_TAG, R(a, this.clonePosition())));
        } else
          return this.error(M.UNCLOSED_TAG, R(r, this.clonePosition()));
      } else
        return this.error(M.INVALID_TAG, R(r, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && t0(this.char()); )
        this.bump();
      return this.message.slice(t, this.offset());
    }, e.prototype.parseLiteral = function(t, n) {
      for (var r = this.clonePosition(), i = ""; ; ) {
        var l = this.tryParseQuote(n);
        if (l) {
          i += l;
          continue;
        }
        var o = this.tryParseUnquoted(t, n);
        if (o) {
          i += o;
          continue;
        }
        var a = this.tryParseLeftAngleBracket();
        if (a) {
          i += a;
          continue;
        }
        break;
      }
      var s = R(r, this.clonePosition());
      return {
        val: { type: x.literal, value: i, location: s },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !e0(this.peek() || 0)) ? (this.bump(), "<") : null;
    }, e.prototype.tryParseQuote = function(t) {
      if (this.isEOF() || this.char() !== 39)
        return null;
      switch (this.peek()) {
        case 39:
          return this.bump(), this.bump(), "'";
        case 123:
        case 60:
        case 62:
        case 125:
          break;
        case 35:
          if (t === "plural" || t === "selectordinal")
            break;
          return null;
        default:
          return null;
      }
      this.bump();
      var n = [this.char()];
      for (this.bump(); !this.isEOF(); ) {
        var r = this.char();
        if (r === 39)
          if (this.peek() === 39)
            n.push(39), this.bump();
          else {
            this.bump();
            break;
          }
        else
          n.push(r);
        this.bump();
      }
      return Or.apply(void 0, n);
    }, e.prototype.tryParseUnquoted = function(t, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && t > 0 ? null : (this.bump(), Or(r));
    }, e.prototype.parseArgument = function(t, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(M.EXPECT_ARGUMENT_CLOSING_BRACE, R(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(M.EMPTY_ARGUMENT, R(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(M.MALFORMED_ARGUMENT, R(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(M.EXPECT_ARGUMENT_CLOSING_BRACE, R(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: x.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: R(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(M.EXPECT_ARGUMENT_CLOSING_BRACE, R(r, this.clonePosition())) : this.parseArgumentOptions(t, n, i, r);
        default:
          return this.error(M.MALFORMED_ARGUMENT, R(r, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), n = this.offset(), r = Mr(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var l = this.clonePosition(), o = R(t, l);
      return { value: r, location: o };
    }, e.prototype.parseArgumentOptions = function(t, n, r, i) {
      var l, o = this.clonePosition(), a = this.parseIdentifierIfPossible().value, s = this.clonePosition();
      switch (a) {
        case "":
          return this.error(M.EXPECT_ARGUMENT_TYPE, R(o, s));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var u = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var f = this.clonePosition(), _ = this.parseSimpleArgStyleIfPossible();
            if (_.err)
              return _;
            var c = Kc(_.val);
            if (c.length === 0)
              return this.error(M.EXPECT_ARGUMENT_STYLE, R(this.clonePosition(), this.clonePosition()));
            var h = R(f, this.clonePosition());
            u = { style: c, styleLocation: h };
          }
          var m = this.tryParseArgumentClose(i);
          if (m.err)
            return m;
          var d = R(i, this.clonePosition());
          if (u && ji(u == null ? void 0 : u.style, "::", 0)) {
            var E = Yc(u.style.slice(2));
            if (a === "number") {
              var _ = this.parseNumberSkeletonFromString(E, u.styleLocation);
              return _.err ? _ : {
                val: { type: x.number, value: r, location: d, style: _.val },
                err: null
              };
            } else {
              if (E.length === 0)
                return this.error(M.EXPECT_DATE_TIME_SKELETON, d);
              var S = E;
              this.locale && (S = Uc(E, this.locale));
              var c = {
                type: Tt.dateTime,
                pattern: S,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Nc(S) : {}
              }, A = a === "date" ? x.date : x.time;
              return {
                val: { type: A, value: r, location: d, style: c },
                err: null
              };
            }
          }
          return {
            val: {
              type: a === "number" ? x.number : a === "date" ? x.date : x.time,
              value: r,
              location: d,
              style: (l = u == null ? void 0 : u.style) !== null && l !== void 0 ? l : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var v = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(M.EXPECT_SELECT_ARGUMENT_OPTIONS, R(v, G({}, v)));
          this.bumpSpace();
          var p = this.parseIdentifierIfPossible(), k = 0;
          if (a !== "select" && p.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(M.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, R(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var _ = this.tryParseDecimalInteger(M.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, M.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (_.err)
              return _;
            this.bumpSpace(), p = this.parseIdentifierIfPossible(), k = _.val;
          }
          var P = this.tryParsePluralOrSelectOptions(t, a, n, p);
          if (P.err)
            return P;
          var m = this.tryParseArgumentClose(i);
          if (m.err)
            return m;
          var q = R(i, this.clonePosition());
          return a === "select" ? {
            val: {
              type: x.select,
              value: r,
              options: xi(P.val),
              location: q
            },
            err: null
          } : {
            val: {
              type: x.plural,
              value: r,
              options: xi(P.val),
              offset: k,
              pluralType: a === "plural" ? "cardinal" : "ordinal",
              location: q
            },
            err: null
          };
        }
        default:
          return this.error(M.INVALID_ARGUMENT_TYPE, R(o, s));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(M.EXPECT_ARGUMENT_CLOSING_BRACE, R(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(M.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, R(i, this.clonePosition()));
            this.bump();
            break;
          }
          case 123: {
            t += 1, this.bump();
            break;
          }
          case 125: {
            if (t > 0)
              t -= 1;
            else
              return {
                val: this.message.slice(n.offset, this.offset()),
                err: null
              };
            break;
          }
          default:
            this.bump();
            break;
        }
      }
      return {
        val: this.message.slice(n.offset, this.offset()),
        err: null
      };
    }, e.prototype.parseNumberSkeletonFromString = function(t, n) {
      var r = [];
      try {
        r = Lc(t);
      } catch {
        return this.error(M.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Tt.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? Dc(r) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, n, r, i) {
      for (var l, o = !1, a = [], s = /* @__PURE__ */ new Set(), u = i.value, f = i.location; ; ) {
        if (u.length === 0) {
          var _ = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var c = this.tryParseDecimalInteger(M.EXPECT_PLURAL_ARGUMENT_SELECTOR, M.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (c.err)
              return c;
            f = R(_, this.clonePosition()), u = this.message.slice(_.offset, this.offset());
          } else
            break;
        }
        if (s.has(u))
          return this.error(n === "select" ? M.DUPLICATE_SELECT_ARGUMENT_SELECTOR : M.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, f);
        u === "other" && (o = !0), this.bumpSpace();
        var h = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? M.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : M.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, R(this.clonePosition(), this.clonePosition()));
        var m = this.parseMessage(t + 1, n, r);
        if (m.err)
          return m;
        var d = this.tryParseArgumentClose(h);
        if (d.err)
          return d;
        a.push([
          u,
          {
            value: m.val,
            location: R(h, this.clonePosition())
          }
        ]), s.add(u), this.bumpSpace(), l = this.parseIdentifierIfPossible(), u = l.value, f = l.location;
      }
      return a.length === 0 ? this.error(n === "select" ? M.EXPECT_SELECT_ARGUMENT_SELECTOR : M.EXPECT_PLURAL_ARGUMENT_SELECTOR, R(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(M.MISSING_OTHER_CLAUSE, R(this.clonePosition(), this.clonePosition())) : { val: a, err: null };
    }, e.prototype.tryParseDecimalInteger = function(t, n) {
      var r = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (r = -1);
      for (var l = !1, o = 0; !this.isEOF(); ) {
        var a = this.char();
        if (a >= 48 && a <= 57)
          l = !0, o = o * 10 + (a - 48), this.bump();
        else
          break;
      }
      var s = R(i, this.clonePosition());
      return l ? (o *= r, Jc(o) ? { val: o, err: null } : this.error(n, s)) : this.error(t, s);
    }, e.prototype.offset = function() {
      return this.position.offset;
    }, e.prototype.isEOF = function() {
      return this.offset() === this.message.length;
    }, e.prototype.clonePosition = function() {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column
      };
    }, e.prototype.char = function() {
      var t = this.position.offset;
      if (t >= this.message.length)
        throw Error("out of bound");
      var n = _o(this.message, t);
      if (n === void 0)
        throw Error("Offset ".concat(t, " is at invalid UTF-16 code unit boundary"));
      return n;
    }, e.prototype.error = function(t, n) {
      return {
        val: null,
        err: {
          kind: t,
          message: this.message,
          location: n
        }
      };
    }, e.prototype.bump = function() {
      if (!this.isEOF()) {
        var t = this.char();
        t === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += t < 65536 ? 1 : 2);
      }
    }, e.prototype.bumpIf = function(t) {
      if (ji(this.message, t, this.offset())) {
        for (var n = 0; n < t.length; n++)
          this.bump();
        return !0;
      }
      return !1;
    }, e.prototype.bumpUntil = function(t) {
      var n = this.offset(), r = this.message.indexOf(t, n);
      return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1);
    }, e.prototype.bumpTo = function(t) {
      if (this.offset() > t)
        throw Error("targetOffset ".concat(t, " must be greater than or equal to the current offset ").concat(this.offset()));
      for (t = Math.min(t, this.message.length); ; ) {
        var n = this.offset();
        if (n === t)
          break;
        if (n > t)
          throw Error("targetOffset ".concat(t, " is at invalid UTF-16 code unit boundary"));
        if (this.bump(), this.isEOF())
          break;
      }
    }, e.prototype.bumpSpace = function() {
      for (; !this.isEOF() && mo(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (t >= 65536 ? 2 : 1));
      return r ?? null;
    }, e;
  }()
);
function Rr(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function e0(e) {
  return Rr(e) || e === 47;
}
function t0(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function mo(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function n0(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function Dr(e) {
  e.forEach(function(t) {
    if (delete t.location, io(t) || lo(t))
      for (var n in t.options)
        delete t.options[n].location, Dr(t.options[n].value);
    else
      to(t) && so(t.style) || (no(t) || ro(t)) && Ir(t.style) ? delete t.style.location : oo(t) && Dr(t.children);
  });
}
function r0(e, t) {
  t === void 0 && (t = {}), t = G({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var n = new $c(e, t).parse();
  if (n.err) {
    var r = SyntaxError(M[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return t != null && t.captureLocation || Dr(n.val), n.val;
}
function cr(e, t) {
  var n = t && t.cache ? t.cache : u0, r = t && t.serializer ? t.serializer : a0, i = t && t.strategy ? t.strategy : l0;
  return i(e, {
    cache: n,
    serializer: r
  });
}
function i0(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function go(e, t, n, r) {
  var i = i0(r) ? r : n(r), l = t.get(i);
  return typeof l > "u" && (l = e.call(this, r), t.set(i, l)), l;
}
function po(e, t, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), l = t.get(i);
  return typeof l > "u" && (l = e.apply(this, r), t.set(i, l)), l;
}
function Wr(e, t, n, r, i) {
  return n.bind(t, e, r, i);
}
function l0(e, t) {
  var n = e.length === 1 ? go : po;
  return Wr(e, this, n, t.cache.create(), t.serializer);
}
function o0(e, t) {
  return Wr(e, this, po, t.cache.create(), t.serializer);
}
function s0(e, t) {
  return Wr(e, this, go, t.cache.create(), t.serializer);
}
var a0 = function() {
  return JSON.stringify(arguments);
};
function Zr() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
Zr.prototype.get = function(e) {
  return this.cache[e];
};
Zr.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var u0 = {
  create: function() {
    return new Zr();
  }
}, _r = {
  variadic: o0,
  monadic: s0
}, At;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(At || (At = {}));
var On = (
  /** @class */
  function(e) {
    Ln(t, e);
    function t(n, r, i) {
      var l = e.call(this, n) || this;
      return l.code = r, l.originalMessage = i, l;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), Vi = (
  /** @class */
  function(e) {
    Ln(t, e);
    function t(n, r, i, l) {
      return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), At.INVALID_VALUE, l) || this;
    }
    return t;
  }(On)
), f0 = (
  /** @class */
  function(e) {
    Ln(t, e);
    function t(n, r, i) {
      return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), At.INVALID_VALUE, i) || this;
    }
    return t;
  }(On)
), c0 = (
  /** @class */
  function(e) {
    Ln(t, e);
    function t(n, r) {
      return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), At.MISSING_VALUE, r) || this;
    }
    return t;
  }(On)
), ae;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(ae || (ae = {}));
function _0(e) {
  return e.length < 2 ? e : e.reduce(function(t, n) {
    var r = t[t.length - 1];
    return !r || r.type !== ae.literal || n.type !== ae.literal ? t.push(n) : r.value += n.value, t;
  }, []);
}
function h0(e) {
  return typeof e == "function";
}
function yn(e, t, n, r, i, l, o) {
  if (e.length === 1 && Ui(e[0]))
    return [
      {
        type: ae.literal,
        value: e[0].value
      }
    ];
  for (var a = [], s = 0, u = e; s < u.length; s++) {
    var f = u[s];
    if (Ui(f)) {
      a.push({
        type: ae.literal,
        value: f.value
      });
      continue;
    }
    if (Hc(f)) {
      typeof l == "number" && a.push({
        type: ae.literal,
        value: n.getNumberFormat(t).format(l)
      });
      continue;
    }
    var _ = f.value;
    if (!(i && _ in i))
      throw new c0(_, o);
    var c = i[_];
    if (Bc(f)) {
      (!c || typeof c == "string" || typeof c == "number") && (c = typeof c == "string" || typeof c == "number" ? String(c) : ""), a.push({
        type: typeof c == "string" ? ae.literal : ae.object,
        value: c
      });
      continue;
    }
    if (no(f)) {
      var h = typeof f.style == "string" ? r.date[f.style] : Ir(f.style) ? f.style.parsedOptions : void 0;
      a.push({
        type: ae.literal,
        value: n.getDateTimeFormat(t, h).format(c)
      });
      continue;
    }
    if (ro(f)) {
      var h = typeof f.style == "string" ? r.time[f.style] : Ir(f.style) ? f.style.parsedOptions : r.time.medium;
      a.push({
        type: ae.literal,
        value: n.getDateTimeFormat(t, h).format(c)
      });
      continue;
    }
    if (to(f)) {
      var h = typeof f.style == "string" ? r.number[f.style] : so(f.style) ? f.style.parsedOptions : void 0;
      h && h.scale && (c = c * (h.scale || 1)), a.push({
        type: ae.literal,
        value: n.getNumberFormat(t, h).format(c)
      });
      continue;
    }
    if (oo(f)) {
      var m = f.children, d = f.value, E = i[d];
      if (!h0(E))
        throw new f0(d, "function", o);
      var S = yn(m, t, n, r, i, l), A = E(S.map(function(k) {
        return k.value;
      }));
      Array.isArray(A) || (A = [A]), a.push.apply(a, A.map(function(k) {
        return {
          type: typeof k == "string" ? ae.literal : ae.object,
          value: k
        };
      }));
    }
    if (io(f)) {
      var v = f.options[c] || f.options.other;
      if (!v)
        throw new Vi(f.value, c, Object.keys(f.options), o);
      a.push.apply(a, yn(v.value, t, n, r, i));
      continue;
    }
    if (lo(f)) {
      var v = f.options["=".concat(c)];
      if (!v) {
        if (!Intl.PluralRules)
          throw new On(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, At.MISSING_INTL_API, o);
        var p = n.getPluralRules(t, { type: f.pluralType }).select(c - (f.offset || 0));
        v = f.options[p] || f.options.other;
      }
      if (!v)
        throw new Vi(f.value, c, Object.keys(f.options), o);
      a.push.apply(a, yn(v.value, t, n, r, i, c - (f.offset || 0)));
      continue;
    }
  }
  return _0(a);
}
function d0(e, t) {
  return t ? G(G(G({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
    return n[r] = G(G({}, e[r]), t[r] || {}), n;
  }, {})) : e;
}
function m0(e, t) {
  return t ? Object.keys(e).reduce(function(n, r) {
    return n[r] = d0(e[r], t[r]), n;
  }, G({}, e)) : e;
}
function hr(e) {
  return {
    create: function() {
      return {
        get: function(t) {
          return e[t];
        },
        set: function(t, n) {
          e[t] = n;
        }
      };
    }
  };
}
function g0(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: cr(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.NumberFormat).bind.apply(t, ur([void 0], n, !1)))();
    }, {
      cache: hr(e.number),
      strategy: _r.variadic
    }),
    getDateTimeFormat: cr(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, ur([void 0], n, !1)))();
    }, {
      cache: hr(e.dateTime),
      strategy: _r.variadic
    }),
    getPluralRules: cr(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.PluralRules).bind.apply(t, ur([void 0], n, !1)))();
    }, {
      cache: hr(e.pluralRules),
      strategy: _r.variadic
    })
  };
}
var p0 = (
  /** @class */
  function() {
    function e(t, n, r, i) {
      var l = this;
      if (n === void 0 && (n = e.defaultLocale), this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(o) {
        var a = l.formatToParts(o);
        if (a.length === 1)
          return a[0].value;
        var s = a.reduce(function(u, f) {
          return !u.length || f.type !== ae.literal || typeof u[u.length - 1] != "string" ? u.push(f.value) : u[u.length - 1] += f.value, u;
        }, []);
        return s.length <= 1 ? s[0] || "" : s;
      }, this.formatToParts = function(o) {
        return yn(l.ast, l.locales, l.formatters, l.formats, o, void 0, l.message);
      }, this.resolvedOptions = function() {
        return {
          locale: l.resolvedLocale.toString()
        };
      }, this.getAst = function() {
        return l.ast;
      }, this.locales = n, this.resolvedLocale = e.resolveLocale(n), typeof t == "string") {
        if (this.message = t, !e.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        this.ast = e.__parse(t, {
          ignoreTag: i == null ? void 0 : i.ignoreTag,
          locale: this.resolvedLocale
        });
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = m0(e.formats, r), this.formatters = i && i.formatters || g0(this.formatterCache);
    }
    return Object.defineProperty(e, "defaultLocale", {
      get: function() {
        return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale;
      },
      enumerable: !1,
      configurable: !0
    }), e.memoizedDefaultLocale = null, e.resolveLocale = function(t) {
      var n = Intl.NumberFormat.supportedLocalesOf(t);
      return n.length > 0 ? new Intl.Locale(n[0]) : new Intl.Locale(typeof t == "string" ? t : t[0]);
    }, e.__parse = r0, e.formats = {
      number: {
        integer: {
          maximumFractionDigits: 0
        },
        currency: {
          style: "currency"
        },
        percent: {
          style: "percent"
        }
      },
      date: {
        short: {
          month: "numeric",
          day: "numeric",
          year: "2-digit"
        },
        medium: {
          month: "short",
          day: "numeric",
          year: "numeric"
        },
        long: {
          month: "long",
          day: "numeric",
          year: "numeric"
        },
        full: {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric"
        }
      },
      time: {
        short: {
          hour: "numeric",
          minute: "numeric"
        },
        medium: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        },
        long: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        },
        full: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        }
      }
    }, e;
  }()
);
function b0(e, t) {
  if (t == null)
    return;
  if (t in e)
    return e[t];
  const n = t.split(".");
  let r = e;
  for (let i = 0; i < n.length; i++)
    if (typeof r == "object") {
      if (i > 0) {
        const l = n.slice(i, n.length).join(".");
        if (l in r) {
          r = r[l];
          break;
        }
      }
      r = r[n[i]];
    } else
      r = void 0;
  return r;
}
const tt = {}, v0 = (e, t, n) => n && (t in tt || (tt[t] = {}), e in tt[t] || (tt[t][e] = n), n), bo = (e, t) => {
  if (t == null)
    return;
  if (t in tt && e in tt[t])
    return tt[t][e];
  const n = Mn(t);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], l = y0(i, e);
    if (l)
      return v0(e, t, l);
  }
};
let Jr;
const rn = nn({});
function w0(e) {
  return Jr[e] || null;
}
function vo(e) {
  return e in Jr;
}
function y0(e, t) {
  if (!vo(e))
    return null;
  const n = w0(e);
  return b0(n, t);
}
function E0(e) {
  if (e == null)
    return;
  const t = Mn(e);
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (vo(r))
      return r;
  }
}
function S0(e, ...t) {
  delete tt[e], rn.update((n) => (n[e] = Cc.all([n[e] || {}, ...t]), n));
}
Lt(
  [rn],
  ([e]) => Object.keys(e)
);
rn.subscribe((e) => Jr = e);
const En = {};
function k0(e, t) {
  En[e].delete(t), En[e].size === 0 && delete En[e];
}
function wo(e) {
  return En[e];
}
function T0(e) {
  return Mn(e).map((t) => {
    const n = wo(t);
    return [t, n ? [...n] : []];
  }).filter(([, t]) => t.length > 0);
}
function Ur(e) {
  return e == null ? !1 : Mn(e).some(
    (t) => {
      var n;
      return (n = wo(t)) == null ? void 0 : n.size;
    }
  );
}
function A0(e, t) {
  return Promise.all(
    t.map((r) => (k0(e, r), r().then((i) => i.default || i)))
  ).then((r) => S0(e, ...r));
}
const Ut = {};
function yo(e) {
  if (!Ur(e))
    return e in Ut ? Ut[e] : Promise.resolve();
  const t = T0(e);
  return Ut[e] = Promise.all(
    t.map(
      ([n, r]) => A0(n, r)
    )
  ).then(() => {
    if (Ur(e))
      return yo(e);
    delete Ut[e];
  }), Ut[e];
}
const C0 = {
  number: {
    scientific: { notation: "scientific" },
    engineering: { notation: "engineering" },
    compactLong: { notation: "compact", compactDisplay: "long" },
    compactShort: { notation: "compact", compactDisplay: "short" }
  },
  date: {
    short: { month: "numeric", day: "numeric", year: "2-digit" },
    medium: { month: "short", day: "numeric", year: "numeric" },
    long: { month: "long", day: "numeric", year: "numeric" },
    full: { weekday: "long", month: "long", day: "numeric", year: "numeric" }
  },
  time: {
    short: { hour: "numeric", minute: "numeric" },
    medium: { hour: "numeric", minute: "numeric", second: "numeric" },
    long: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    },
    full: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    }
  }
}, B0 = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: C0,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, H0 = B0;
function Ct() {
  return H0;
}
const dr = nn(!1);
var P0 = Object.defineProperty, N0 = Object.defineProperties, I0 = Object.getOwnPropertyDescriptors, Xi = Object.getOwnPropertySymbols, L0 = Object.prototype.hasOwnProperty, O0 = Object.prototype.propertyIsEnumerable, Wi = (e, t, n) => t in e ? P0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, M0 = (e, t) => {
  for (var n in t || (t = {}))
    L0.call(t, n) && Wi(e, n, t[n]);
  if (Xi)
    for (var n of Xi(t))
      O0.call(t, n) && Wi(e, n, t[n]);
  return e;
}, R0 = (e, t) => N0(e, I0(t));
let Fr;
const kn = nn(null);
function Zi(e) {
  return e.split("-").map((t, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function Mn(e, t = Ct().fallbackLocale) {
  const n = Zi(e);
  return t ? [.../* @__PURE__ */ new Set([...n, ...Zi(t)])] : n;
}
function ct() {
  return Fr ?? void 0;
}
kn.subscribe((e) => {
  Fr = e ?? void 0, typeof window < "u" && e != null && document.documentElement.setAttribute("lang", e);
});
const D0 = (e) => {
  if (e && E0(e) && Ur(e)) {
    const { loadingDelay: t } = Ct();
    let n;
    return typeof window < "u" && ct() != null && t ? n = window.setTimeout(
      () => dr.set(!0),
      t
    ) : dr.set(!0), yo(e).then(() => {
      kn.set(e);
    }).finally(() => {
      clearTimeout(n), dr.set(!1);
    });
  }
  return kn.set(e);
}, ln = R0(M0({}, kn), {
  set: D0
}), Rn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in t ? t[i] : t[i] = e(r);
  };
};
var U0 = Object.defineProperty, Tn = Object.getOwnPropertySymbols, Eo = Object.prototype.hasOwnProperty, So = Object.prototype.propertyIsEnumerable, Ji = (e, t, n) => t in e ? U0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Qr = (e, t) => {
  for (var n in t || (t = {}))
    Eo.call(t, n) && Ji(e, n, t[n]);
  if (Tn)
    for (var n of Tn(t))
      So.call(t, n) && Ji(e, n, t[n]);
  return e;
}, Ot = (e, t) => {
  var n = {};
  for (var r in e)
    Eo.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Tn)
    for (var r of Tn(e))
      t.indexOf(r) < 0 && So.call(e, r) && (n[r] = e[r]);
  return n;
};
const Xt = (e, t) => {
  const { formats: n } = Ct();
  if (e in n && t in n[e])
    return n[e][t];
  throw new Error(`[svelte-i18n] Unknown "${t}" ${e} format.`);
}, F0 = Rn(
  (e) => {
    var t = e, { locale: n, format: r } = t, i = Ot(t, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = Xt("number", r)), new Intl.NumberFormat(n, i);
  }
), G0 = Rn(
  (e) => {
    var t = e, { locale: n, format: r } = t, i = Ot(t, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = Xt("date", r) : Object.keys(i).length === 0 && (i = Xt("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), q0 = Rn(
  (e) => {
    var t = e, { locale: n, format: r } = t, i = Ot(t, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = Xt("time", r) : Object.keys(i).length === 0 && (i = Xt("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), j0 = (e = {}) => {
  var t = e, {
    locale: n = ct()
  } = t, r = Ot(t, [
    "locale"
  ]);
  return F0(Qr({ locale: n }, r));
}, x0 = (e = {}) => {
  var t = e, {
    locale: n = ct()
  } = t, r = Ot(t, [
    "locale"
  ]);
  return G0(Qr({ locale: n }, r));
}, z0 = (e = {}) => {
  var t = e, {
    locale: n = ct()
  } = t, r = Ot(t, [
    "locale"
  ]);
  return q0(Qr({ locale: n }, r));
}, V0 = Rn(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (e, t = ct()) => new p0(e, t, Ct().formats, {
    ignoreTag: Ct().ignoreTag
  })
), X0 = (e, t = {}) => {
  var n, r, i, l;
  let o = t;
  typeof e == "object" && (o = e, e = o.id);
  const {
    values: a,
    locale: s = ct(),
    default: u
  } = o;
  if (s == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let f = bo(e, s);
  if (!f)
    f = (l = (i = (r = (n = Ct()).handleMissingMessage) == null ? void 0 : r.call(n, { locale: s, id: e, defaultValue: u })) != null ? i : u) != null ? l : e;
  else if (typeof f != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${e}" must be of type "string", found: "${typeof f}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), f;
  if (!a)
    return f;
  let _ = f;
  try {
    _ = V0(f, s).format(a);
  } catch (c) {
    c instanceof Error && console.warn(
      `[svelte-i18n] Message "${e}" has syntax error:`,
      c.message
    );
  }
  return _;
}, W0 = (e, t) => z0(t).format(e), Z0 = (e, t) => x0(t).format(e), J0 = (e, t) => j0(t).format(e), Q0 = (e, t = ct()) => bo(e, t);
Lt([ln, rn], () => X0);
Lt([ln], () => W0);
Lt([ln], () => Z0);
Lt([ln], () => J0);
Lt([ln, rn], () => Q0);
const {
  SvelteComponent: Y0,
  append: ce,
  attr: ot,
  detach: ko,
  element: st,
  init: K0,
  insert: To,
  noop: Qi,
  safe_not_equal: $0,
  set_data: An,
  set_style: mr,
  space: Gr,
  text: pt,
  toggle_class: Yi
} = window.__gradio__svelte__internal, { onMount: e_, createEventDispatcher: t_ } = window.__gradio__svelte__internal;
function Ki(e) {
  let t, n, r, i, l = Gt(
    /*current_file_upload*/
    e[2]
  ) + "", o, a, s, u, f = (
    /*current_file_upload*/
    e[2].orig_name + ""
  ), _;
  return {
    c() {
      t = st("div"), n = st("span"), r = st("div"), i = st("progress"), o = pt(l), s = Gr(), u = st("span"), _ = pt(f), mr(i, "visibility", "hidden"), mr(i, "height", "0"), mr(i, "width", "0"), i.value = a = Gt(
        /*current_file_upload*/
        e[2]
      ), ot(i, "max", "100"), ot(i, "class", "svelte-12ckl9l"), ot(r, "class", "progress-bar svelte-12ckl9l"), ot(u, "class", "file-name svelte-12ckl9l"), ot(t, "class", "file svelte-12ckl9l");
    },
    m(c, h) {
      To(c, t, h), ce(t, n), ce(n, r), ce(r, i), ce(i, o), ce(t, s), ce(t, u), ce(u, _);
    },
    p(c, h) {
      h & /*current_file_upload*/
      4 && l !== (l = Gt(
        /*current_file_upload*/
        c[2]
      ) + "") && An(o, l), h & /*current_file_upload*/
      4 && a !== (a = Gt(
        /*current_file_upload*/
        c[2]
      )) && (i.value = a), h & /*current_file_upload*/
      4 && f !== (f = /*current_file_upload*/
      c[2].orig_name + "") && An(_, f);
    },
    d(c) {
      c && ko(t);
    }
  };
}
function n_(e) {
  let t, n, r, i = (
    /*files_with_progress*/
    e[0].length + ""
  ), l, o, a = (
    /*files_with_progress*/
    e[0].length > 1 ? "files" : "file"
  ), s, u, f, _ = (
    /*current_file_upload*/
    e[2] && Ki(e)
  );
  return {
    c() {
      t = st("div"), n = st("span"), r = pt("Uploading "), l = pt(i), o = Gr(), s = pt(a), u = pt("..."), f = Gr(), _ && _.c(), ot(n, "class", "uploading svelte-12ckl9l"), ot(t, "class", "wrap svelte-12ckl9l"), Yi(
        t,
        "progress",
        /*progress*/
        e[1]
      );
    },
    m(c, h) {
      To(c, t, h), ce(t, n), ce(n, r), ce(n, l), ce(n, o), ce(n, s), ce(n, u), ce(t, f), _ && _.m(t, null);
    },
    p(c, [h]) {
      h & /*files_with_progress*/
      1 && i !== (i = /*files_with_progress*/
      c[0].length + "") && An(l, i), h & /*files_with_progress*/
      1 && a !== (a = /*files_with_progress*/
      c[0].length > 1 ? "files" : "file") && An(s, a), /*current_file_upload*/
      c[2] ? _ ? _.p(c, h) : (_ = Ki(c), _.c(), _.m(t, null)) : _ && (_.d(1), _ = null), h & /*progress*/
      2 && Yi(
        t,
        "progress",
        /*progress*/
        c[1]
      );
    },
    i: Qi,
    o: Qi,
    d(c) {
      c && ko(t), _ && _.d();
    }
  };
}
function Gt(e) {
  return e.progress * 100 / (e.size || 0) || 0;
}
function r_(e) {
  let t = 0;
  return e.forEach((n) => {
    t += Gt(n);
  }), document.documentElement.style.setProperty("--upload-progress-width", (t / e.length).toFixed(2) + "%"), t / e.length;
}
function i_(e, t, n) {
  let { upload_id: r } = t, { root: i } = t, { files: l } = t, o, a = !1, s, u = l.map((c) => ({ ...c, progress: 0 }));
  const f = t_();
  function _(c, h) {
    n(0, u = u.map((m) => (m.orig_name === c && (m.progress += h), m)));
  }
  return e_(() => {
    o = new EventSource(`${i}/upload_progress?upload_id=${r}`), o.onmessage = async function(c) {
      const h = JSON.parse(c.data);
      a || n(1, a = !0), h.msg === "done" ? (o.close(), f("done")) : (n(2, s = h), _(h.orig_name, h.chunk_size));
    };
  }), e.$$set = (c) => {
    "upload_id" in c && n(3, r = c.upload_id), "root" in c && n(4, i = c.root), "files" in c && n(5, l = c.files);
  }, e.$$.update = () => {
    e.$$.dirty & /*files_with_progress*/
    1 && r_(u);
  }, [u, a, s, r, i, l];
}
class l_ extends Y0 {
  constructor(t) {
    super(), K0(this, t, i_, n_, $0, { upload_id: 3, root: 4, files: 5 });
  }
}
const {
  SvelteComponent: o_,
  append: $i,
  attr: ye,
  binding_callbacks: s_,
  bubble: rt,
  check_outros: a_,
  create_component: u_,
  create_slot: f_,
  destroy_component: c_,
  detach: Ao,
  element: el,
  empty: __,
  get_all_dirty_from_scope: h_,
  get_slot_changes: d_,
  group_outros: m_,
  init: g_,
  insert: Co,
  listen: Ee,
  mount_component: p_,
  prevent_default: it,
  run_all: b_,
  safe_not_equal: v_,
  set_style: tl,
  space: w_,
  stop_propagation: lt,
  toggle_class: Ke,
  transition_in: Cn,
  transition_out: Bn,
  update_slot_base: y_
} = window.__gradio__svelte__internal, { createEventDispatcher: E_, tick: S_, getContext: k_ } = window.__gradio__svelte__internal;
function T_(e) {
  let t, n, r, i, l, o, a, s, u, f;
  const _ = (
    /*#slots*/
    e[21].default
  ), c = f_(
    _,
    e,
    /*$$scope*/
    e[20],
    null
  );
  return {
    c() {
      t = el("button"), c && c.c(), n = w_(), r = el("input"), ye(r, "aria-label", "file upload"), ye(r, "type", "file"), ye(
        r,
        "accept",
        /*filetype*/
        e[1]
      ), r.multiple = i = /*file_count*/
      e[5] === "multiple" || void 0, ye(r, "webkitdirectory", l = /*file_count*/
      e[5] === "directory" || void 0), ye(r, "mozdirectory", o = /*file_count*/
      e[5] === "directory" || void 0), ye(r, "class", "svelte-1aq8tno"), ye(t, "tabindex", a = /*hidden*/
      e[7] ? -1 : 0), ye(t, "class", "svelte-1aq8tno"), Ke(
        t,
        "hidden",
        /*hidden*/
        e[7]
      ), Ke(
        t,
        "center",
        /*center*/
        e[3]
      ), Ke(
        t,
        "boundedheight",
        /*boundedheight*/
        e[2]
      ), Ke(
        t,
        "flex",
        /*flex*/
        e[4]
      ), tl(
        t,
        "height",
        /*include_sources*/
        e[8] ? "calc(100% - 40px" : "100%"
      );
    },
    m(h, m) {
      Co(h, t, m), c && c.m(t, null), $i(t, n), $i(t, r), e[29](r), s = !0, u || (f = [
        Ee(
          r,
          "change",
          /*load_files_from_upload*/
          e[14]
        ),
        Ee(t, "drag", lt(it(
          /*drag_handler*/
          e[22]
        ))),
        Ee(t, "dragstart", lt(it(
          /*dragstart_handler*/
          e[23]
        ))),
        Ee(t, "dragend", lt(it(
          /*dragend_handler*/
          e[24]
        ))),
        Ee(t, "dragover", lt(it(
          /*dragover_handler*/
          e[25]
        ))),
        Ee(t, "dragenter", lt(it(
          /*dragenter_handler*/
          e[26]
        ))),
        Ee(t, "dragleave", lt(it(
          /*dragleave_handler*/
          e[27]
        ))),
        Ee(t, "drop", lt(it(
          /*drop_handler*/
          e[28]
        ))),
        Ee(
          t,
          "click",
          /*open_file_upload*/
          e[9]
        ),
        Ee(
          t,
          "drop",
          /*loadFilesFromDrop*/
          e[15]
        ),
        Ee(
          t,
          "dragenter",
          /*updateDragging*/
          e[13]
        ),
        Ee(
          t,
          "dragleave",
          /*updateDragging*/
          e[13]
        )
      ], u = !0);
    },
    p(h, m) {
      c && c.p && (!s || m[0] & /*$$scope*/
      1048576) && y_(
        c,
        _,
        h,
        /*$$scope*/
        h[20],
        s ? d_(
          _,
          /*$$scope*/
          h[20],
          m,
          null
        ) : h_(
          /*$$scope*/
          h[20]
        ),
        null
      ), (!s || m[0] & /*filetype*/
      2) && ye(
        r,
        "accept",
        /*filetype*/
        h[1]
      ), (!s || m[0] & /*file_count*/
      32 && i !== (i = /*file_count*/
      h[5] === "multiple" || void 0)) && (r.multiple = i), (!s || m[0] & /*file_count*/
      32 && l !== (l = /*file_count*/
      h[5] === "directory" || void 0)) && ye(r, "webkitdirectory", l), (!s || m[0] & /*file_count*/
      32 && o !== (o = /*file_count*/
      h[5] === "directory" || void 0)) && ye(r, "mozdirectory", o), (!s || m[0] & /*hidden*/
      128 && a !== (a = /*hidden*/
      h[7] ? -1 : 0)) && ye(t, "tabindex", a), (!s || m[0] & /*hidden*/
      128) && Ke(
        t,
        "hidden",
        /*hidden*/
        h[7]
      ), (!s || m[0] & /*center*/
      8) && Ke(
        t,
        "center",
        /*center*/
        h[3]
      ), (!s || m[0] & /*boundedheight*/
      4) && Ke(
        t,
        "boundedheight",
        /*boundedheight*/
        h[2]
      ), (!s || m[0] & /*flex*/
      16) && Ke(
        t,
        "flex",
        /*flex*/
        h[4]
      ), m[0] & /*include_sources*/
      256 && tl(
        t,
        "height",
        /*include_sources*/
        h[8] ? "calc(100% - 40px" : "100%"
      );
    },
    i(h) {
      s || (Cn(c, h), s = !0);
    },
    o(h) {
      Bn(c, h), s = !1;
    },
    d(h) {
      h && Ao(t), c && c.d(h), e[29](null), u = !1, b_(f);
    }
  };
}
function A_(e) {
  let t, n;
  return t = new l_({
    props: {
      root: (
        /*root*/
        e[6]
      ),
      upload_id: (
        /*upload_id*/
        e[10]
      ),
      files: (
        /*file_data*/
        e[11]
      )
    }
  }), {
    c() {
      u_(t.$$.fragment);
    },
    m(r, i) {
      p_(t, r, i), n = !0;
    },
    p(r, i) {
      const l = {};
      i[0] & /*root*/
      64 && (l.root = /*root*/
      r[6]), i[0] & /*upload_id*/
      1024 && (l.upload_id = /*upload_id*/
      r[10]), i[0] & /*file_data*/
      2048 && (l.files = /*file_data*/
      r[11]), t.$set(l);
    },
    i(r) {
      n || (Cn(t.$$.fragment, r), n = !0);
    },
    o(r) {
      Bn(t.$$.fragment, r), n = !1;
    },
    d(r) {
      c_(t, r);
    }
  };
}
function C_(e) {
  let t, n, r, i;
  const l = [A_, T_], o = [];
  function a(s, u) {
    return (
      /*uploading*/
      s[0] ? 0 : 1
    );
  }
  return t = a(e), n = o[t] = l[t](e), {
    c() {
      n.c(), r = __();
    },
    m(s, u) {
      o[t].m(s, u), Co(s, r, u), i = !0;
    },
    p(s, u) {
      let f = t;
      t = a(s), t === f ? o[t].p(s, u) : (m_(), Bn(o[f], 1, 1, () => {
        o[f] = null;
      }), a_(), n = o[t], n ? n.p(s, u) : (n = o[t] = l[t](s), n.c()), Cn(n, 1), n.m(r.parentNode, r));
    },
    i(s) {
      i || (Cn(n), i = !0);
    },
    o(s) {
      Bn(n), i = !1;
    },
    d(s) {
      s && Ao(r), o[t].d(s);
    }
  };
}
function gr(e) {
  let t, n = e[0], r = 1;
  for (; r < e.length; ) {
    const i = e[r], l = e[r + 1];
    if (r += 2, (i === "optionalAccess" || i === "optionalCall") && n == null)
      return;
    i === "access" || i === "optionalAccess" ? (t = n, n = l(n)) : (i === "call" || i === "optionalCall") && (n = l((...o) => n.call(t, ...o)), t = void 0);
  }
  return n;
}
function B_(e, t) {
  return !e || e === "*" ? !0 : e.endsWith("/*") ? t.startsWith(e.slice(0, -1)) : e === t;
}
function H_(e, t, n) {
  let { $$slots: r = {}, $$scope: i } = t, { filetype: l = null } = t, { dragging: o = !1 } = t, { boundedheight: a = !0 } = t, { center: s = !0 } = t, { flex: u = !0 } = t, { file_count: f = "single" } = t, { disable_click: _ = !1 } = t, { root: c } = t, { hidden: h = !1 } = t, { format: m = "file" } = t, { include_sources: d = !1 } = t, { uploading: E = !1 } = t, S, A;
  const v = k_("upload_files");
  let p;
  const k = E_();
  function P() {
    n(16, o = !o);
  }
  function q() {
    _ || (n(12, p.value = "", p), p.click());
  }
  async function T(y) {
    await S_(), n(10, S = Math.random().toString(36).substring(2, 15)), n(0, E = !0);
    const w = await pf(y, c, S, v);
    return k("load", f === "single" ? gr([w, "optionalAccess", (U) => U[0]]) : w), n(0, E = !1), w || [];
  }
  async function N(y) {
    if (!y.length)
      return;
    let w = y.map((U) => new File([U], U.name));
    return n(11, A = await bf(w)), await T(A);
  }
  async function W(y) {
    const w = y.target;
    if (w.files)
      if (m != "blob")
        await N(Array.from(w.files));
      else {
        if (f === "single") {
          k("load", w.files[0]);
          return;
        }
        k("load", w.files);
      }
  }
  async function O(y) {
    if (n(16, o = !1), !gr([y, "access", (U) => U.dataTransfer, "optionalAccess", (U) => U.files]))
      return;
    const w = Array.from(y.dataTransfer.files).filter((U) => gr([
      l,
      "optionalAccess",
      (g) => g.split,
      "call",
      (g) => g(","),
      "access",
      (g) => g.some,
      "call",
      (g) => g(($) => B_($, U.type))
    ]) ? !0 : (k("error", `Invalid file type only ${l} allowed.`), !1));
    await N(w);
  }
  function ie(y) {
    rt.call(this, e, y);
  }
  function B(y) {
    rt.call(this, e, y);
  }
  function C(y) {
    rt.call(this, e, y);
  }
  function D(y) {
    rt.call(this, e, y);
  }
  function K(y) {
    rt.call(this, e, y);
  }
  function j(y) {
    rt.call(this, e, y);
  }
  function H(y) {
    rt.call(this, e, y);
  }
  function z(y) {
    s_[y ? "unshift" : "push"](() => {
      p = y, n(12, p);
    });
  }
  return e.$$set = (y) => {
    "filetype" in y && n(1, l = y.filetype), "dragging" in y && n(16, o = y.dragging), "boundedheight" in y && n(2, a = y.boundedheight), "center" in y && n(3, s = y.center), "flex" in y && n(4, u = y.flex), "file_count" in y && n(5, f = y.file_count), "disable_click" in y && n(17, _ = y.disable_click), "root" in y && n(6, c = y.root), "hidden" in y && n(7, h = y.hidden), "format" in y && n(18, m = y.format), "include_sources" in y && n(8, d = y.include_sources), "uploading" in y && n(0, E = y.uploading), "$$scope" in y && n(20, i = y.$$scope);
  }, [
    E,
    l,
    a,
    s,
    u,
    f,
    c,
    h,
    d,
    q,
    S,
    A,
    p,
    P,
    W,
    O,
    o,
    _,
    m,
    N,
    i,
    r,
    ie,
    B,
    C,
    D,
    K,
    j,
    H,
    z
  ];
}
class P_ extends o_ {
  constructor(t) {
    super(), g_(
      this,
      t,
      H_,
      C_,
      v_,
      {
        filetype: 1,
        dragging: 16,
        boundedheight: 2,
        center: 3,
        flex: 4,
        file_count: 5,
        disable_click: 17,
        root: 6,
        hidden: 7,
        format: 18,
        include_sources: 8,
        uploading: 0,
        open_file_upload: 9,
        load_files: 19
      },
      null,
      [-1, -1]
    );
  }
  get open_file_upload() {
    return this.$$.ctx[9];
  }
  get load_files() {
    return this.$$.ctx[19];
  }
}
const {
  SvelteComponent: N_,
  attr: I_,
  create_component: L_,
  destroy_component: O_,
  detach: M_,
  element: R_,
  init: D_,
  insert: U_,
  mount_component: F_,
  noop: G_,
  safe_not_equal: q_,
  transition_in: j_,
  transition_out: x_
} = window.__gradio__svelte__internal, { createEventDispatcher: z_ } = window.__gradio__svelte__internal;
function V_(e) {
  let t, n, r;
  return n = new Pn({
    props: { Icon: wa, label: "Remove Image" }
  }), n.$on(
    "click",
    /*click_handler*/
    e[1]
  ), {
    c() {
      t = R_("div"), L_(n.$$.fragment), I_(t, "class", "svelte-1g74h68");
    },
    m(i, l) {
      U_(i, t, l), F_(n, t, null), r = !0;
    },
    p: G_,
    i(i) {
      r || (j_(n.$$.fragment, i), r = !0);
    },
    o(i) {
      x_(n.$$.fragment, i), r = !1;
    },
    d(i) {
      i && M_(t), O_(n);
    }
  };
}
function X_(e) {
  const t = z_();
  return [t, (r) => {
    t("remove_image"), r.stopPropagation();
  }];
}
class W_ extends N_ {
  constructor(t) {
    super(), D_(this, t, X_, V_, q_, {});
  }
}
const {
  SvelteComponent: Z_,
  add_flush_callback: nl,
  append: hn,
  attr: et,
  bind: rl,
  binding_callbacks: qr,
  bubble: pr,
  check_outros: qt,
  create_component: Bt,
  create_slot: J_,
  destroy_component: Ht,
  destroy_each: Q_,
  detach: Wt,
  element: jr,
  empty: Bo,
  ensure_array_like: il,
  get_all_dirty_from_scope: Y_,
  get_slot_changes: K_,
  group_outros: jt,
  init: $_,
  insert: Zt,
  listen: eh,
  mount_component: Pt,
  noop: xr,
  safe_not_equal: th,
  space: dn,
  src_url_equal: ll,
  toggle_class: ol,
  transition_in: J,
  transition_out: le,
  update_slot_base: nh
} = window.__gradio__svelte__internal, { createEventDispatcher: rh, tick: ih } = window.__gradio__svelte__internal;
function sl(e, t, n) {
  const r = e.slice();
  return r[34] = t[n], r;
}
function al(e) {
  let t, n;
  return t = new W_({}), t.$on(
    "remove_image",
    /*remove_image_handler*/
    e[22]
  ), {
    c() {
      Bt(t.$$.fragment);
    },
    m(r, i) {
      Pt(t, r, i), n = !0;
    },
    p: xr,
    i(r) {
      n || (J(t.$$.fragment, r), n = !0);
    },
    o(r) {
      le(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Ht(t, r);
    }
  };
}
function ul(e) {
  let t;
  const n = (
    /*#slots*/
    e[21].default
  ), r = J_(
    n,
    e,
    /*$$scope*/
    e[33],
    null
  );
  return {
    c() {
      r && r.c();
    },
    m(i, l) {
      r && r.m(i, l), t = !0;
    },
    p(i, l) {
      r && r.p && (!t || l[1] & /*$$scope*/
      4) && nh(
        r,
        n,
        i,
        /*$$scope*/
        i[33],
        t ? K_(
          n,
          /*$$scope*/
          i[33],
          l,
          null
        ) : Y_(
          /*$$scope*/
          i[33]
        ),
        null
      );
    },
    i(i) {
      t || (J(r, i), t = !0);
    },
    o(i) {
      le(r, i), t = !1;
    },
    d(i) {
      r && r.d(i);
    }
  };
}
function lh(e) {
  let t, n, r = (
    /*value*/
    e[0] === null && !/*active_tool*/
    e[1] && ul(e)
  );
  return {
    c() {
      r && r.c(), t = Bo();
    },
    m(i, l) {
      r && r.m(i, l), Zt(i, t, l), n = !0;
    },
    p(i, l) {
      /*value*/
      i[0] === null && !/*active_tool*/
      i[1] ? r ? (r.p(i, l), l[0] & /*value, active_tool*/
      3 && J(r, 1)) : (r = ul(i), r.c(), J(r, 1), r.m(t.parentNode, t)) : r && (jt(), le(r, 1, 1, () => {
        r = null;
      }), qt());
    },
    i(i) {
      n || (J(r), n = !0);
    },
    o(i) {
      le(r), n = !1;
    },
    d(i) {
      i && Wt(t), r && r.d(i);
    }
  };
}
function oh(e) {
  let t, n, r, i, l;
  return {
    c() {
      t = jr("img"), ll(t.src, n = /*value*/
      e[0].url) || et(t, "src", n), et(t, "alt", r = /*value*/
      e[0].alt_text), et(t, "class", "svelte-1xg4trb"), ol(
        t,
        "selectable",
        /*selectable*/
        e[7]
      );
    },
    m(o, a) {
      Zt(o, t, a), i || (l = eh(
        t,
        "click",
        /*handle_click*/
        e[17]
      ), i = !0);
    },
    p(o, a) {
      a[0] & /*value*/
      1 && !ll(t.src, n = /*value*/
      o[0].url) && et(t, "src", n), a[0] & /*value*/
      1 && r !== (r = /*value*/
      o[0].alt_text) && et(t, "alt", r), a[0] & /*selectable*/
      128 && ol(
        t,
        "selectable",
        /*selectable*/
        o[7]
      );
    },
    i: xr,
    o: xr,
    d(o) {
      o && Wt(t), i = !1, l();
    }
  };
}
function sh(e) {
  let t, n;
  return t = new ic({
    props: {
      mirror_webcam: (
        /*mirror_webcam*/
        e[6]
      ),
      streaming: (
        /*streaming*/
        e[5]
      ),
      mode: "image",
      include_audio: !1,
      i18n: (
        /*i18n*/
        e[9]
      )
    }
  }), t.$on(
    "capture",
    /*capture_handler*/
    e[27]
  ), t.$on(
    "stream",
    /*stream_handler*/
    e[28]
  ), t.$on(
    "error",
    /*error_handler_1*/
    e[29]
  ), t.$on(
    "drag",
    /*drag_handler*/
    e[30]
  ), t.$on(
    "upload",
    /*upload_handler*/
    e[31]
  ), {
    c() {
      Bt(t.$$.fragment);
    },
    m(r, i) {
      Pt(t, r, i), n = !0;
    },
    p(r, i) {
      const l = {};
      i[0] & /*mirror_webcam*/
      64 && (l.mirror_webcam = /*mirror_webcam*/
      r[6]), i[0] & /*streaming*/
      32 && (l.streaming = /*streaming*/
      r[5]), i[0] & /*i18n*/
      512 && (l.i18n = /*i18n*/
      r[9]), t.$set(l);
    },
    i(r) {
      n || (J(t.$$.fragment, r), n = !0);
    },
    o(r) {
      le(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Ht(t, r);
    }
  };
}
function fl(e) {
  var r;
  let t, n;
  return t = new ff({
    props: {
      show_border: !/*value*/
      ((r = e[0]) != null && r.url),
      $$slots: { default: [ah] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Bt(t.$$.fragment);
    },
    m(i, l) {
      Pt(t, i, l), n = !0;
    },
    p(i, l) {
      var a;
      const o = {};
      l[0] & /*value*/
      1 && (o.show_border = !/*value*/
      ((a = i[0]) != null && a.url)), l[0] & /*sources_list*/
      8192 | l[1] & /*$$scope*/
      4 && (o.$$scope = { dirty: l, ctx: i }), t.$set(o);
    },
    i(i) {
      n || (J(t.$$.fragment, i), n = !0);
    },
    o(i) {
      le(t.$$.fragment, i), n = !1;
    },
    d(i) {
      Ht(t, i);
    }
  };
}
function cl(e) {
  let t, n;
  function r() {
    return (
      /*click_handler*/
      e[32](
        /*source*/
        e[34]
      )
    );
  }
  return t = new Pn({
    props: {
      Icon: (
        /*sources_meta*/
        e[18][
          /*source*/
          e[34]
        ].icon
      ),
      size: "large",
      label: (
        /*source*/
        e[34] + "-image-toolbar-btn"
      ),
      padded: !1
    }
  }), t.$on("click", r), {
    c() {
      Bt(t.$$.fragment);
    },
    m(i, l) {
      Pt(t, i, l), n = !0;
    },
    p(i, l) {
      e = i;
      const o = {};
      l[0] & /*sources_list*/
      8192 && (o.Icon = /*sources_meta*/
      e[18][
        /*source*/
        e[34]
      ].icon), l[0] & /*sources_list*/
      8192 && (o.label = /*source*/
      e[34] + "-image-toolbar-btn"), t.$set(o);
    },
    i(i) {
      n || (J(t.$$.fragment, i), n = !0);
    },
    o(i) {
      le(t.$$.fragment, i), n = !1;
    },
    d(i) {
      Ht(t, i);
    }
  };
}
function ah(e) {
  let t, n, r = il(
    /*sources_list*/
    e[13]
  ), i = [];
  for (let o = 0; o < r.length; o += 1)
    i[o] = cl(sl(e, r, o));
  const l = (o) => le(i[o], 1, 1, () => {
    i[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < i.length; o += 1)
        i[o].c();
      t = Bo();
    },
    m(o, a) {
      for (let s = 0; s < i.length; s += 1)
        i[s] && i[s].m(o, a);
      Zt(o, t, a), n = !0;
    },
    p(o, a) {
      if (a[0] & /*sources_meta, sources_list, handle_toolbar*/
      794624) {
        r = il(
          /*sources_list*/
          o[13]
        );
        let s;
        for (s = 0; s < r.length; s += 1) {
          const u = sl(o, r, s);
          i[s] ? (i[s].p(u, a), J(i[s], 1)) : (i[s] = cl(u), i[s].c(), J(i[s], 1), i[s].m(t.parentNode, t));
        }
        for (jt(), s = r.length; s < i.length; s += 1)
          l(s);
        qt();
      }
    },
    i(o) {
      if (!n) {
        for (let a = 0; a < r.length; a += 1)
          J(i[a]);
        n = !0;
      }
    },
    o(o) {
      i = i.filter(Boolean);
      for (let a = 0; a < i.length; a += 1)
        le(i[a]);
      n = !1;
    },
    d(o) {
      o && Wt(t), Q_(i, o);
    }
  };
}
function uh(e) {
  var q;
  let t, n, r, i, l, o, a, s, u, f, _, c, h = (
    /*sources*/
    e[4].length > 1 || /*sources*/
    e[4].includes("clipboard")
  ), m;
  t = new jl({
    props: {
      show_label: (
        /*show_label*/
        e[3]
      ),
      Icon: Nn,
      label: (
        /*label*/
        e[2] || "Image"
      )
    }
  });
  let d = (
    /*value*/
    ((q = e[0]) == null ? void 0 : q.url) && al(e)
  );
  function E(T) {
    e[24](T);
  }
  function S(T) {
    e[25](T);
  }
  let A = {
    hidden: (
      /*value*/
      e[0] !== null || /*active_tool*/
      e[1] === "webcam"
    ),
    filetype: "image/*",
    root: (
      /*root*/
      e[8]
    ),
    disable_click: !/*sources*/
    e[4].includes("upload"),
    $$slots: { default: [lh] },
    $$scope: { ctx: e }
  };
  /*uploading*/
  e[10] !== void 0 && (A.uploading = /*uploading*/
  e[10]), /*dragging*/
  e[11] !== void 0 && (A.dragging = /*dragging*/
  e[11]), o = new P_({ props: A }), e[23](o), qr.push(() => rl(o, "uploading", E)), qr.push(() => rl(o, "dragging", S)), o.$on(
    "load",
    /*handle_upload*/
    e[14]
  ), o.$on(
    "error",
    /*error_handler*/
    e[26]
  );
  const v = [sh, oh], p = [];
  function k(T, N) {
    return (
      /*active_tool*/
      T[1] === "webcam" ? 0 : (
        /*value*/
        T[0] !== null && !/*streaming*/
        T[5] ? 1 : -1
      )
    );
  }
  ~(f = k(e)) && (_ = p[f] = v[f](e));
  let P = h && fl(e);
  return {
    c() {
      Bt(t.$$.fragment), n = dn(), r = jr("div"), d && d.c(), i = dn(), l = jr("div"), Bt(o.$$.fragment), u = dn(), _ && _.c(), c = dn(), P && P.c(), et(l, "class", "upload-container svelte-1xg4trb"), et(r, "data-testid", "image"), et(r, "class", "image-container svelte-1xg4trb");
    },
    m(T, N) {
      Pt(t, T, N), Zt(T, n, N), Zt(T, r, N), d && d.m(r, null), hn(r, i), hn(r, l), Pt(o, l, null), hn(l, u), ~f && p[f].m(l, null), hn(r, c), P && P.m(r, null), m = !0;
    },
    p(T, N) {
      var B;
      const W = {};
      N[0] & /*show_label*/
      8 && (W.show_label = /*show_label*/
      T[3]), N[0] & /*label*/
      4 && (W.label = /*label*/
      T[2] || "Image"), t.$set(W), /*value*/
      (B = T[0]) != null && B.url ? d ? (d.p(T, N), N[0] & /*value*/
      1 && J(d, 1)) : (d = al(T), d.c(), J(d, 1), d.m(r, i)) : d && (jt(), le(d, 1, 1, () => {
        d = null;
      }), qt());
      const O = {};
      N[0] & /*value, active_tool*/
      3 && (O.hidden = /*value*/
      T[0] !== null || /*active_tool*/
      T[1] === "webcam"), N[0] & /*root*/
      256 && (O.root = /*root*/
      T[8]), N[0] & /*sources*/
      16 && (O.disable_click = !/*sources*/
      T[4].includes("upload")), N[0] & /*value, active_tool*/
      3 | N[1] & /*$$scope*/
      4 && (O.$$scope = { dirty: N, ctx: T }), !a && N[0] & /*uploading*/
      1024 && (a = !0, O.uploading = /*uploading*/
      T[10], nl(() => a = !1)), !s && N[0] & /*dragging*/
      2048 && (s = !0, O.dragging = /*dragging*/
      T[11], nl(() => s = !1)), o.$set(O);
      let ie = f;
      f = k(T), f === ie ? ~f && p[f].p(T, N) : (_ && (jt(), le(p[ie], 1, 1, () => {
        p[ie] = null;
      }), qt()), ~f ? (_ = p[f], _ ? _.p(T, N) : (_ = p[f] = v[f](T), _.c()), J(_, 1), _.m(l, null)) : _ = null), N[0] & /*sources*/
      16 && (h = /*sources*/
      T[4].length > 1 || /*sources*/
      T[4].includes("clipboard")), h ? P ? (P.p(T, N), N[0] & /*sources*/
      16 && J(P, 1)) : (P = fl(T), P.c(), J(P, 1), P.m(r, null)) : P && (jt(), le(P, 1, 1, () => {
        P = null;
      }), qt());
    },
    i(T) {
      m || (J(t.$$.fragment, T), J(d), J(o.$$.fragment, T), J(_), J(P), m = !0);
    },
    o(T) {
      le(t.$$.fragment, T), le(d), le(o.$$.fragment, T), le(_), le(P), m = !1;
    },
    d(T) {
      T && (Wt(n), Wt(r)), Ht(t, T), d && d.d(), e[23](null), Ht(o), ~f && p[f].d(), P && P.d();
    }
  };
}
function _l(e) {
  let t, n = e[0], r = 1;
  for (; r < e.length; ) {
    const i = e[r], l = e[r + 1];
    if (r += 2, (i === "optionalAccess" || i === "optionalCall") && n == null)
      return;
    i === "access" || i === "optionalAccess" ? (t = n, n = l(n)) : (i === "call" || i === "optionalCall") && (n = l((...o) => n.call(t, ...o)), t = void 0);
  }
  return n;
}
function fh(e, t, n) {
  let r, { $$slots: i = {}, $$scope: l } = t, { value: o } = t, { label: a = void 0 } = t, { show_label: s } = t, { sources: u = ["upload", "clipboard", "webcam"] } = t, { streaming: f = !1 } = t, { pending: _ = !1 } = t, { mirror_webcam: c } = t, { selectable: h = !1 } = t, { root: m } = t, { i18n: d } = t, E, S = !1, { active_tool: A = null } = t;
  function v({ detail: w }) {
    n(0, o = Ge(w, m, null)), k("upload");
  }
  async function p(w) {
    n(20, _ = !0);
    const U = await E.load_files([new File([w], "webcam.png")]);
    n(0, o = _l([U, "optionalAccess", (g) => g[0]]) || null), f || n(1, A = null), await ih(), k(f ? "stream" : "change"), n(20, _ = !1);
  }
  const k = rh();
  let P = !1;
  function q(w) {
    let U = Zl(w);
    U && k("select", { index: U, value: null });
  }
  const T = {
    upload: {
      icon: Wl,
      label: d("Upload"),
      order: 0
    },
    webcam: {
      icon: ku,
      label: d("Webcam"),
      order: 1
    },
    clipboard: {
      icon: ru,
      label: d("Paste"),
      order: 2
    }
  };
  async function N(w) {
    switch (w) {
      case "clipboard":
        navigator.clipboard.read().then(async (U) => {
          for (let g = 0; g < U.length; g++) {
            const $ = U[g].types.find((Re) => Re.startsWith("image/"));
            if ($) {
              n(0, o = null), U[g].getType($).then(async (Re) => {
                const _e = await E.load_files([new File([Re], `clipboard.${$.replace("image/", "")}`)]);
                n(0, o = _l([_e, "optionalAccess", (De) => De[0]]) || null);
              });
              break;
            }
          }
        });
        break;
      case "webcam":
        n(1, A = "webcam");
        break;
      case "upload":
        E.open_file_upload();
        break;
    }
  }
  const W = () => {
    n(0, o = null), k("clear");
  };
  function O(w) {
    qr[w ? "unshift" : "push"](() => {
      E = w, n(12, E);
    });
  }
  function ie(w) {
    S = w, n(10, S);
  }
  function B(w) {
    P = w, n(11, P);
  }
  function C(w) {
    pr.call(this, e, w);
  }
  const D = (w) => p(w.detail), K = (w) => p(w.detail);
  function j(w) {
    pr.call(this, e, w);
  }
  function H(w) {
    pr.call(this, e, w);
  }
  const z = (w) => p(w.detail), y = (w) => N(w);
  return e.$$set = (w) => {
    "value" in w && n(0, o = w.value), "label" in w && n(2, a = w.label), "show_label" in w && n(3, s = w.show_label), "sources" in w && n(4, u = w.sources), "streaming" in w && n(5, f = w.streaming), "pending" in w && n(20, _ = w.pending), "mirror_webcam" in w && n(6, c = w.mirror_webcam), "selectable" in w && n(7, h = w.selectable), "root" in w && n(8, m = w.root), "i18n" in w && n(9, d = w.i18n), "active_tool" in w && n(1, A = w.active_tool), "$$scope" in w && n(33, l = w.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*uploading*/
    1024 && S && n(0, o = null), e.$$.dirty[0] & /*value, root*/
    257 && o && !o.url && n(0, o = Ge(o, m, null)), e.$$.dirty[0] & /*dragging*/
    2048 && k("drag", P), e.$$.dirty[0] & /*sources*/
    16 && n(13, r = u.sort((w, U) => T[w].order - T[U].order)), e.$$.dirty[0] & /*sources*/
    16 && u.length === 1 && u[0] === "webcam" && n(1, A = "webcam");
  }, [
    o,
    A,
    a,
    s,
    u,
    f,
    c,
    h,
    m,
    d,
    S,
    P,
    E,
    r,
    v,
    p,
    k,
    q,
    T,
    N,
    _,
    i,
    W,
    O,
    ie,
    B,
    C,
    D,
    K,
    j,
    H,
    z,
    y,
    l
  ];
}
class ch extends Z_ {
  constructor(t) {
    super(), $_(
      this,
      t,
      fh,
      uh,
      th,
      {
        value: 0,
        label: 2,
        show_label: 3,
        sources: 4,
        streaming: 5,
        pending: 20,
        mirror_webcam: 6,
        selectable: 7,
        root: 8,
        i18n: 9,
        active_tool: 1
      },
      null,
      [-1, -1]
    );
  }
}
function bt(e) {
  let t = ["", "k", "M", "G", "T", "P", "E", "Z"], n = 0;
  for (; e > 1e3 && n < t.length - 1; )
    e /= 1e3, n++;
  let r = t[n];
  return (Number.isInteger(e) ? e : e.toFixed(1)) + r;
}
const {
  SvelteComponent: _h,
  append: He,
  attr: F,
  component_subscribe: hl,
  detach: hh,
  element: dh,
  init: mh,
  insert: gh,
  noop: dl,
  safe_not_equal: ph,
  set_style: mn,
  svg_element: Pe,
  toggle_class: ml
} = window.__gradio__svelte__internal, { onMount: bh } = window.__gradio__svelte__internal;
function vh(e) {
  let t, n, r, i, l, o, a, s, u, f, _, c;
  return {
    c() {
      t = dh("div"), n = Pe("svg"), r = Pe("g"), i = Pe("path"), l = Pe("path"), o = Pe("path"), a = Pe("path"), s = Pe("g"), u = Pe("path"), f = Pe("path"), _ = Pe("path"), c = Pe("path"), F(i, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), F(i, "fill", "#FF7C00"), F(i, "fill-opacity", "0.4"), F(i, "class", "svelte-43sxxs"), F(l, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), F(l, "fill", "#FF7C00"), F(l, "class", "svelte-43sxxs"), F(o, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), F(o, "fill", "#FF7C00"), F(o, "fill-opacity", "0.4"), F(o, "class", "svelte-43sxxs"), F(a, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), F(a, "fill", "#FF7C00"), F(a, "class", "svelte-43sxxs"), mn(r, "transform", "translate(" + /*$top*/
      e[1][0] + "px, " + /*$top*/
      e[1][1] + "px)"), F(u, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), F(u, "fill", "#FF7C00"), F(u, "fill-opacity", "0.4"), F(u, "class", "svelte-43sxxs"), F(f, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), F(f, "fill", "#FF7C00"), F(f, "class", "svelte-43sxxs"), F(_, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), F(_, "fill", "#FF7C00"), F(_, "fill-opacity", "0.4"), F(_, "class", "svelte-43sxxs"), F(c, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), F(c, "fill", "#FF7C00"), F(c, "class", "svelte-43sxxs"), mn(s, "transform", "translate(" + /*$bottom*/
      e[2][0] + "px, " + /*$bottom*/
      e[2][1] + "px)"), F(n, "viewBox", "-1200 -1200 3000 3000"), F(n, "fill", "none"), F(n, "xmlns", "http://www.w3.org/2000/svg"), F(n, "class", "svelte-43sxxs"), F(t, "class", "svelte-43sxxs"), ml(
        t,
        "margin",
        /*margin*/
        e[0]
      );
    },
    m(h, m) {
      gh(h, t, m), He(t, n), He(n, r), He(r, i), He(r, l), He(r, o), He(r, a), He(n, s), He(s, u), He(s, f), He(s, _), He(s, c);
    },
    p(h, [m]) {
      m & /*$top*/
      2 && mn(r, "transform", "translate(" + /*$top*/
      h[1][0] + "px, " + /*$top*/
      h[1][1] + "px)"), m & /*$bottom*/
      4 && mn(s, "transform", "translate(" + /*$bottom*/
      h[2][0] + "px, " + /*$bottom*/
      h[2][1] + "px)"), m & /*margin*/
      1 && ml(
        t,
        "margin",
        /*margin*/
        h[0]
      );
    },
    i: dl,
    o: dl,
    d(h) {
      h && hh(t);
    }
  };
}
function wh(e, t, n) {
  let r, i, { margin: l = !0 } = t;
  const o = Ri([0, 0]);
  hl(e, o, (c) => n(1, r = c));
  const a = Ri([0, 0]);
  hl(e, a, (c) => n(2, i = c));
  let s;
  async function u() {
    await Promise.all([o.set([125, 140]), a.set([-125, -140])]), await Promise.all([o.set([-125, 140]), a.set([125, -140])]), await Promise.all([o.set([-125, 0]), a.set([125, -0])]), await Promise.all([o.set([125, 0]), a.set([-125, 0])]);
  }
  async function f() {
    await u(), s || f();
  }
  async function _() {
    await Promise.all([o.set([125, 0]), a.set([-125, 0])]), f();
  }
  return bh(() => (_(), () => s = !0)), e.$$set = (c) => {
    "margin" in c && n(0, l = c.margin);
  }, [l, r, i, o, a];
}
class yh extends _h {
  constructor(t) {
    super(), mh(this, t, wh, vh, ph, { margin: 0 });
  }
}
const {
  SvelteComponent: Eh,
  append: ut,
  attr: Le,
  binding_callbacks: gl,
  check_outros: Ho,
  create_component: Sh,
  create_slot: kh,
  destroy_component: Th,
  destroy_each: Po,
  detach: I,
  element: qe,
  empty: Mt,
  ensure_array_like: Hn,
  get_all_dirty_from_scope: Ah,
  get_slot_changes: Ch,
  group_outros: No,
  init: Bh,
  insert: L,
  mount_component: Hh,
  noop: zr,
  safe_not_equal: Ph,
  set_data: Ae,
  set_style: nt,
  space: Oe,
  text: X,
  toggle_class: Se,
  transition_in: Nt,
  transition_out: It,
  update_slot_base: Nh
} = window.__gradio__svelte__internal, { tick: Ih } = window.__gradio__svelte__internal, { onDestroy: Lh } = window.__gradio__svelte__internal, Oh = (e) => ({}), pl = (e) => ({});
function bl(e, t, n) {
  const r = e.slice();
  return r[38] = t[n], r[40] = n, r;
}
function vl(e, t, n) {
  const r = e.slice();
  return r[38] = t[n], r;
}
function Mh(e) {
  let t, n = (
    /*i18n*/
    e[1]("common.error") + ""
  ), r, i, l;
  const o = (
    /*#slots*/
    e[29].error
  ), a = kh(
    o,
    e,
    /*$$scope*/
    e[28],
    pl
  );
  return {
    c() {
      t = qe("span"), r = X(n), i = Oe(), a && a.c(), Le(t, "class", "error svelte-1txqlrd");
    },
    m(s, u) {
      L(s, t, u), ut(t, r), L(s, i, u), a && a.m(s, u), l = !0;
    },
    p(s, u) {
      (!l || u[0] & /*i18n*/
      2) && n !== (n = /*i18n*/
      s[1]("common.error") + "") && Ae(r, n), a && a.p && (!l || u[0] & /*$$scope*/
      268435456) && Nh(
        a,
        o,
        s,
        /*$$scope*/
        s[28],
        l ? Ch(
          o,
          /*$$scope*/
          s[28],
          u,
          Oh
        ) : Ah(
          /*$$scope*/
          s[28]
        ),
        pl
      );
    },
    i(s) {
      l || (Nt(a, s), l = !0);
    },
    o(s) {
      It(a, s), l = !1;
    },
    d(s) {
      s && (I(t), I(i)), a && a.d(s);
    }
  };
}
function Rh(e) {
  let t, n, r, i, l, o, a, s, u, f = (
    /*variant*/
    e[8] === "default" && /*show_eta_bar*/
    e[18] && /*show_progress*/
    e[6] === "full" && wl(e)
  );
  function _(v, p) {
    if (
      /*progress*/
      v[7]
    )
      return Fh;
    if (
      /*queue_position*/
      v[2] !== null && /*queue_size*/
      v[3] !== void 0 && /*queue_position*/
      v[2] >= 0
    )
      return Uh;
    if (
      /*queue_position*/
      v[2] === 0
    )
      return Dh;
  }
  let c = _(e), h = c && c(e), m = (
    /*timer*/
    e[5] && Sl(e)
  );
  const d = [xh, jh], E = [];
  function S(v, p) {
    return (
      /*last_progress_level*/
      v[15] != null ? 0 : (
        /*show_progress*/
        v[6] === "full" ? 1 : -1
      )
    );
  }
  ~(l = S(e)) && (o = E[l] = d[l](e));
  let A = !/*timer*/
  e[5] && Pl(e);
  return {
    c() {
      f && f.c(), t = Oe(), n = qe("div"), h && h.c(), r = Oe(), m && m.c(), i = Oe(), o && o.c(), a = Oe(), A && A.c(), s = Mt(), Le(n, "class", "progress-text svelte-1txqlrd"), Se(
        n,
        "meta-text-center",
        /*variant*/
        e[8] === "center"
      ), Se(
        n,
        "meta-text",
        /*variant*/
        e[8] === "default"
      );
    },
    m(v, p) {
      f && f.m(v, p), L(v, t, p), L(v, n, p), h && h.m(n, null), ut(n, r), m && m.m(n, null), L(v, i, p), ~l && E[l].m(v, p), L(v, a, p), A && A.m(v, p), L(v, s, p), u = !0;
    },
    p(v, p) {
      /*variant*/
      v[8] === "default" && /*show_eta_bar*/
      v[18] && /*show_progress*/
      v[6] === "full" ? f ? f.p(v, p) : (f = wl(v), f.c(), f.m(t.parentNode, t)) : f && (f.d(1), f = null), c === (c = _(v)) && h ? h.p(v, p) : (h && h.d(1), h = c && c(v), h && (h.c(), h.m(n, r))), /*timer*/
      v[5] ? m ? m.p(v, p) : (m = Sl(v), m.c(), m.m(n, null)) : m && (m.d(1), m = null), (!u || p[0] & /*variant*/
      256) && Se(
        n,
        "meta-text-center",
        /*variant*/
        v[8] === "center"
      ), (!u || p[0] & /*variant*/
      256) && Se(
        n,
        "meta-text",
        /*variant*/
        v[8] === "default"
      );
      let k = l;
      l = S(v), l === k ? ~l && E[l].p(v, p) : (o && (No(), It(E[k], 1, 1, () => {
        E[k] = null;
      }), Ho()), ~l ? (o = E[l], o ? o.p(v, p) : (o = E[l] = d[l](v), o.c()), Nt(o, 1), o.m(a.parentNode, a)) : o = null), /*timer*/
      v[5] ? A && (A.d(1), A = null) : A ? A.p(v, p) : (A = Pl(v), A.c(), A.m(s.parentNode, s));
    },
    i(v) {
      u || (Nt(o), u = !0);
    },
    o(v) {
      It(o), u = !1;
    },
    d(v) {
      v && (I(t), I(n), I(i), I(a), I(s)), f && f.d(v), h && h.d(), m && m.d(), ~l && E[l].d(v), A && A.d(v);
    }
  };
}
function wl(e) {
  let t, n = `translateX(${/*eta_level*/
  (e[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      t = qe("div"), Le(t, "class", "eta-bar svelte-1txqlrd"), nt(t, "transform", n);
    },
    m(r, i) {
      L(r, t, i);
    },
    p(r, i) {
      i[0] & /*eta_level*/
      131072 && n !== (n = `translateX(${/*eta_level*/
      (r[17] || 0) * 100 - 100}%)`) && nt(t, "transform", n);
    },
    d(r) {
      r && I(t);
    }
  };
}
function Dh(e) {
  let t;
  return {
    c() {
      t = X("processing |");
    },
    m(n, r) {
      L(n, t, r);
    },
    p: zr,
    d(n) {
      n && I(t);
    }
  };
}
function Uh(e) {
  let t, n = (
    /*queue_position*/
    e[2] + 1 + ""
  ), r, i, l, o;
  return {
    c() {
      t = X("queue: "), r = X(n), i = X("/"), l = X(
        /*queue_size*/
        e[3]
      ), o = X(" |");
    },
    m(a, s) {
      L(a, t, s), L(a, r, s), L(a, i, s), L(a, l, s), L(a, o, s);
    },
    p(a, s) {
      s[0] & /*queue_position*/
      4 && n !== (n = /*queue_position*/
      a[2] + 1 + "") && Ae(r, n), s[0] & /*queue_size*/
      8 && Ae(
        l,
        /*queue_size*/
        a[3]
      );
    },
    d(a) {
      a && (I(t), I(r), I(i), I(l), I(o));
    }
  };
}
function Fh(e) {
  let t, n = Hn(
    /*progress*/
    e[7]
  ), r = [];
  for (let i = 0; i < n.length; i += 1)
    r[i] = El(vl(e, n, i));
  return {
    c() {
      for (let i = 0; i < r.length; i += 1)
        r[i].c();
      t = Mt();
    },
    m(i, l) {
      for (let o = 0; o < r.length; o += 1)
        r[o] && r[o].m(i, l);
      L(i, t, l);
    },
    p(i, l) {
      if (l[0] & /*progress*/
      128) {
        n = Hn(
          /*progress*/
          i[7]
        );
        let o;
        for (o = 0; o < n.length; o += 1) {
          const a = vl(i, n, o);
          r[o] ? r[o].p(a, l) : (r[o] = El(a), r[o].c(), r[o].m(t.parentNode, t));
        }
        for (; o < r.length; o += 1)
          r[o].d(1);
        r.length = n.length;
      }
    },
    d(i) {
      i && I(t), Po(r, i);
    }
  };
}
function yl(e) {
  let t, n = (
    /*p*/
    e[38].unit + ""
  ), r, i, l = " ", o;
  function a(f, _) {
    return (
      /*p*/
      f[38].length != null ? qh : Gh
    );
  }
  let s = a(e), u = s(e);
  return {
    c() {
      u.c(), t = Oe(), r = X(n), i = X(" | "), o = X(l);
    },
    m(f, _) {
      u.m(f, _), L(f, t, _), L(f, r, _), L(f, i, _), L(f, o, _);
    },
    p(f, _) {
      s === (s = a(f)) && u ? u.p(f, _) : (u.d(1), u = s(f), u && (u.c(), u.m(t.parentNode, t))), _[0] & /*progress*/
      128 && n !== (n = /*p*/
      f[38].unit + "") && Ae(r, n);
    },
    d(f) {
      f && (I(t), I(r), I(i), I(o)), u.d(f);
    }
  };
}
function Gh(e) {
  let t = bt(
    /*p*/
    e[38].index || 0
  ) + "", n;
  return {
    c() {
      n = X(t);
    },
    m(r, i) {
      L(r, n, i);
    },
    p(r, i) {
      i[0] & /*progress*/
      128 && t !== (t = bt(
        /*p*/
        r[38].index || 0
      ) + "") && Ae(n, t);
    },
    d(r) {
      r && I(n);
    }
  };
}
function qh(e) {
  let t = bt(
    /*p*/
    e[38].index || 0
  ) + "", n, r, i = bt(
    /*p*/
    e[38].length
  ) + "", l;
  return {
    c() {
      n = X(t), r = X("/"), l = X(i);
    },
    m(o, a) {
      L(o, n, a), L(o, r, a), L(o, l, a);
    },
    p(o, a) {
      a[0] & /*progress*/
      128 && t !== (t = bt(
        /*p*/
        o[38].index || 0
      ) + "") && Ae(n, t), a[0] & /*progress*/
      128 && i !== (i = bt(
        /*p*/
        o[38].length
      ) + "") && Ae(l, i);
    },
    d(o) {
      o && (I(n), I(r), I(l));
    }
  };
}
function El(e) {
  let t, n = (
    /*p*/
    e[38].index != null && yl(e)
  );
  return {
    c() {
      n && n.c(), t = Mt();
    },
    m(r, i) {
      n && n.m(r, i), L(r, t, i);
    },
    p(r, i) {
      /*p*/
      r[38].index != null ? n ? n.p(r, i) : (n = yl(r), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    d(r) {
      r && I(t), n && n.d(r);
    }
  };
}
function Sl(e) {
  let t, n = (
    /*eta*/
    e[0] ? `/${/*formatted_eta*/
    e[19]}` : ""
  ), r, i;
  return {
    c() {
      t = X(
        /*formatted_timer*/
        e[20]
      ), r = X(n), i = X("s");
    },
    m(l, o) {
      L(l, t, o), L(l, r, o), L(l, i, o);
    },
    p(l, o) {
      o[0] & /*formatted_timer*/
      1048576 && Ae(
        t,
        /*formatted_timer*/
        l[20]
      ), o[0] & /*eta, formatted_eta*/
      524289 && n !== (n = /*eta*/
      l[0] ? `/${/*formatted_eta*/
      l[19]}` : "") && Ae(r, n);
    },
    d(l) {
      l && (I(t), I(r), I(i));
    }
  };
}
function jh(e) {
  let t, n;
  return t = new yh({
    props: { margin: (
      /*variant*/
      e[8] === "default"
    ) }
  }), {
    c() {
      Sh(t.$$.fragment);
    },
    m(r, i) {
      Hh(t, r, i), n = !0;
    },
    p(r, i) {
      const l = {};
      i[0] & /*variant*/
      256 && (l.margin = /*variant*/
      r[8] === "default"), t.$set(l);
    },
    i(r) {
      n || (Nt(t.$$.fragment, r), n = !0);
    },
    o(r) {
      It(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Th(t, r);
    }
  };
}
function xh(e) {
  let t, n, r, i, l, o = `${/*last_progress_level*/
  e[15] * 100}%`, a = (
    /*progress*/
    e[7] != null && kl(e)
  );
  return {
    c() {
      t = qe("div"), n = qe("div"), a && a.c(), r = Oe(), i = qe("div"), l = qe("div"), Le(n, "class", "progress-level-inner svelte-1txqlrd"), Le(l, "class", "progress-bar svelte-1txqlrd"), nt(l, "width", o), Le(i, "class", "progress-bar-wrap svelte-1txqlrd"), Le(t, "class", "progress-level svelte-1txqlrd");
    },
    m(s, u) {
      L(s, t, u), ut(t, n), a && a.m(n, null), ut(t, r), ut(t, i), ut(i, l), e[30](l);
    },
    p(s, u) {
      /*progress*/
      s[7] != null ? a ? a.p(s, u) : (a = kl(s), a.c(), a.m(n, null)) : a && (a.d(1), a = null), u[0] & /*last_progress_level*/
      32768 && o !== (o = `${/*last_progress_level*/
      s[15] * 100}%`) && nt(l, "width", o);
    },
    i: zr,
    o: zr,
    d(s) {
      s && I(t), a && a.d(), e[30](null);
    }
  };
}
function kl(e) {
  let t, n = Hn(
    /*progress*/
    e[7]
  ), r = [];
  for (let i = 0; i < n.length; i += 1)
    r[i] = Hl(bl(e, n, i));
  return {
    c() {
      for (let i = 0; i < r.length; i += 1)
        r[i].c();
      t = Mt();
    },
    m(i, l) {
      for (let o = 0; o < r.length; o += 1)
        r[o] && r[o].m(i, l);
      L(i, t, l);
    },
    p(i, l) {
      if (l[0] & /*progress_level, progress*/
      16512) {
        n = Hn(
          /*progress*/
          i[7]
        );
        let o;
        for (o = 0; o < n.length; o += 1) {
          const a = bl(i, n, o);
          r[o] ? r[o].p(a, l) : (r[o] = Hl(a), r[o].c(), r[o].m(t.parentNode, t));
        }
        for (; o < r.length; o += 1)
          r[o].d(1);
        r.length = n.length;
      }
    },
    d(i) {
      i && I(t), Po(r, i);
    }
  };
}
function Tl(e) {
  let t, n, r, i, l = (
    /*i*/
    e[40] !== 0 && zh()
  ), o = (
    /*p*/
    e[38].desc != null && Al(e)
  ), a = (
    /*p*/
    e[38].desc != null && /*progress_level*/
    e[14] && /*progress_level*/
    e[14][
      /*i*/
      e[40]
    ] != null && Cl()
  ), s = (
    /*progress_level*/
    e[14] != null && Bl(e)
  );
  return {
    c() {
      l && l.c(), t = Oe(), o && o.c(), n = Oe(), a && a.c(), r = Oe(), s && s.c(), i = Mt();
    },
    m(u, f) {
      l && l.m(u, f), L(u, t, f), o && o.m(u, f), L(u, n, f), a && a.m(u, f), L(u, r, f), s && s.m(u, f), L(u, i, f);
    },
    p(u, f) {
      /*p*/
      u[38].desc != null ? o ? o.p(u, f) : (o = Al(u), o.c(), o.m(n.parentNode, n)) : o && (o.d(1), o = null), /*p*/
      u[38].desc != null && /*progress_level*/
      u[14] && /*progress_level*/
      u[14][
        /*i*/
        u[40]
      ] != null ? a || (a = Cl(), a.c(), a.m(r.parentNode, r)) : a && (a.d(1), a = null), /*progress_level*/
      u[14] != null ? s ? s.p(u, f) : (s = Bl(u), s.c(), s.m(i.parentNode, i)) : s && (s.d(1), s = null);
    },
    d(u) {
      u && (I(t), I(n), I(r), I(i)), l && l.d(u), o && o.d(u), a && a.d(u), s && s.d(u);
    }
  };
}
function zh(e) {
  let t;
  return {
    c() {
      t = X(" /");
    },
    m(n, r) {
      L(n, t, r);
    },
    d(n) {
      n && I(t);
    }
  };
}
function Al(e) {
  let t = (
    /*p*/
    e[38].desc + ""
  ), n;
  return {
    c() {
      n = X(t);
    },
    m(r, i) {
      L(r, n, i);
    },
    p(r, i) {
      i[0] & /*progress*/
      128 && t !== (t = /*p*/
      r[38].desc + "") && Ae(n, t);
    },
    d(r) {
      r && I(n);
    }
  };
}
function Cl(e) {
  let t;
  return {
    c() {
      t = X("-");
    },
    m(n, r) {
      L(n, t, r);
    },
    d(n) {
      n && I(t);
    }
  };
}
function Bl(e) {
  let t = (100 * /*progress_level*/
  (e[14][
    /*i*/
    e[40]
  ] || 0)).toFixed(1) + "", n, r;
  return {
    c() {
      n = X(t), r = X("%");
    },
    m(i, l) {
      L(i, n, l), L(i, r, l);
    },
    p(i, l) {
      l[0] & /*progress_level*/
      16384 && t !== (t = (100 * /*progress_level*/
      (i[14][
        /*i*/
        i[40]
      ] || 0)).toFixed(1) + "") && Ae(n, t);
    },
    d(i) {
      i && (I(n), I(r));
    }
  };
}
function Hl(e) {
  let t, n = (
    /*p*/
    (e[38].desc != null || /*progress_level*/
    e[14] && /*progress_level*/
    e[14][
      /*i*/
      e[40]
    ] != null) && Tl(e)
  );
  return {
    c() {
      n && n.c(), t = Mt();
    },
    m(r, i) {
      n && n.m(r, i), L(r, t, i);
    },
    p(r, i) {
      /*p*/
      r[38].desc != null || /*progress_level*/
      r[14] && /*progress_level*/
      r[14][
        /*i*/
        r[40]
      ] != null ? n ? n.p(r, i) : (n = Tl(r), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    d(r) {
      r && I(t), n && n.d(r);
    }
  };
}
function Pl(e) {
  let t, n;
  return {
    c() {
      t = qe("p"), n = X(
        /*loading_text*/
        e[9]
      ), Le(t, "class", "loading svelte-1txqlrd");
    },
    m(r, i) {
      L(r, t, i), ut(t, n);
    },
    p(r, i) {
      i[0] & /*loading_text*/
      512 && Ae(
        n,
        /*loading_text*/
        r[9]
      );
    },
    d(r) {
      r && I(t);
    }
  };
}
function Vh(e) {
  let t, n, r, i, l;
  const o = [Rh, Mh], a = [];
  function s(u, f) {
    return (
      /*status*/
      u[4] === "pending" ? 0 : (
        /*status*/
        u[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(n = s(e)) && (r = a[n] = o[n](e)), {
    c() {
      t = qe("div"), r && r.c(), Le(t, "class", i = "wrap " + /*variant*/
      e[8] + " " + /*show_progress*/
      e[6] + " svelte-1txqlrd"), Se(t, "hide", !/*status*/
      e[4] || /*status*/
      e[4] === "complete" || /*show_progress*/
      e[6] === "hidden"), Se(
        t,
        "translucent",
        /*variant*/
        e[8] === "center" && /*status*/
        (e[4] === "pending" || /*status*/
        e[4] === "error") || /*translucent*/
        e[11] || /*show_progress*/
        e[6] === "minimal"
      ), Se(
        t,
        "generating",
        /*status*/
        e[4] === "generating"
      ), Se(
        t,
        "border",
        /*border*/
        e[12]
      ), nt(
        t,
        "position",
        /*absolute*/
        e[10] ? "absolute" : "static"
      ), nt(
        t,
        "padding",
        /*absolute*/
        e[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(u, f) {
      L(u, t, f), ~n && a[n].m(t, null), e[31](t), l = !0;
    },
    p(u, f) {
      let _ = n;
      n = s(u), n === _ ? ~n && a[n].p(u, f) : (r && (No(), It(a[_], 1, 1, () => {
        a[_] = null;
      }), Ho()), ~n ? (r = a[n], r ? r.p(u, f) : (r = a[n] = o[n](u), r.c()), Nt(r, 1), r.m(t, null)) : r = null), (!l || f[0] & /*variant, show_progress*/
      320 && i !== (i = "wrap " + /*variant*/
      u[8] + " " + /*show_progress*/
      u[6] + " svelte-1txqlrd")) && Le(t, "class", i), (!l || f[0] & /*variant, show_progress, status, show_progress*/
      336) && Se(t, "hide", !/*status*/
      u[4] || /*status*/
      u[4] === "complete" || /*show_progress*/
      u[6] === "hidden"), (!l || f[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && Se(
        t,
        "translucent",
        /*variant*/
        u[8] === "center" && /*status*/
        (u[4] === "pending" || /*status*/
        u[4] === "error") || /*translucent*/
        u[11] || /*show_progress*/
        u[6] === "minimal"
      ), (!l || f[0] & /*variant, show_progress, status*/
      336) && Se(
        t,
        "generating",
        /*status*/
        u[4] === "generating"
      ), (!l || f[0] & /*variant, show_progress, border*/
      4416) && Se(
        t,
        "border",
        /*border*/
        u[12]
      ), f[0] & /*absolute*/
      1024 && nt(
        t,
        "position",
        /*absolute*/
        u[10] ? "absolute" : "static"
      ), f[0] & /*absolute*/
      1024 && nt(
        t,
        "padding",
        /*absolute*/
        u[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(u) {
      l || (Nt(r), l = !0);
    },
    o(u) {
      It(r), l = !1;
    },
    d(u) {
      u && I(t), ~n && a[n].d(), e[31](null);
    }
  };
}
let gn = [], br = !1;
async function Xh(e, t = !0) {
  if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
    if (gn.push(e), !br)
      br = !0;
    else
      return;
    await Ih(), requestAnimationFrame(() => {
      let n = [0, 0];
      for (let r = 0; r < gn.length; r++) {
        const l = gn[r].getBoundingClientRect();
        (r === 0 || l.top + window.scrollY <= n[0]) && (n[0] = l.top + window.scrollY, n[1] = r);
      }
      window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), br = !1, gn = [];
    });
  }
}
function Wh(e, t, n) {
  let r, { $$slots: i = {}, $$scope: l } = t, { i18n: o } = t, { eta: a = null } = t, { queue: s = !1 } = t, { queue_position: u } = t, { queue_size: f } = t, { status: _ } = t, { scroll_to_output: c = !1 } = t, { timer: h = !0 } = t, { show_progress: m = "full" } = t, { message: d = null } = t, { progress: E = null } = t, { variant: S = "default" } = t, { loading_text: A = "Loading..." } = t, { absolute: v = !0 } = t, { translucent: p = !1 } = t, { border: k = !1 } = t, { autoscroll: P } = t, q, T = !1, N = 0, W = 0, O = null, ie = 0, B = null, C, D = null, K = !0;
  const j = () => {
    n(25, N = performance.now()), n(26, W = 0), T = !0, H();
  };
  function H() {
    requestAnimationFrame(() => {
      n(26, W = (performance.now() - N) / 1e3), T && H();
    });
  }
  function z() {
    n(26, W = 0), T && (T = !1);
  }
  Lh(() => {
    T && z();
  });
  let y = null;
  function w(g) {
    gl[g ? "unshift" : "push"](() => {
      D = g, n(16, D), n(7, E), n(14, B), n(15, C);
    });
  }
  function U(g) {
    gl[g ? "unshift" : "push"](() => {
      q = g, n(13, q);
    });
  }
  return e.$$set = (g) => {
    "i18n" in g && n(1, o = g.i18n), "eta" in g && n(0, a = g.eta), "queue" in g && n(21, s = g.queue), "queue_position" in g && n(2, u = g.queue_position), "queue_size" in g && n(3, f = g.queue_size), "status" in g && n(4, _ = g.status), "scroll_to_output" in g && n(22, c = g.scroll_to_output), "timer" in g && n(5, h = g.timer), "show_progress" in g && n(6, m = g.show_progress), "message" in g && n(23, d = g.message), "progress" in g && n(7, E = g.progress), "variant" in g && n(8, S = g.variant), "loading_text" in g && n(9, A = g.loading_text), "absolute" in g && n(10, v = g.absolute), "translucent" in g && n(11, p = g.translucent), "border" in g && n(12, k = g.border), "autoscroll" in g && n(24, P = g.autoscroll), "$$scope" in g && n(28, l = g.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*eta, old_eta, queue, timer_start*/
    169869313 && (a === null ? n(0, a = O) : s && n(0, a = (performance.now() - N) / 1e3 + a), a != null && (n(19, y = a.toFixed(1)), n(27, O = a))), e.$$.dirty[0] & /*eta, timer_diff*/
    67108865 && n(17, ie = a === null || a <= 0 || !W ? null : Math.min(W / a, 1)), e.$$.dirty[0] & /*progress*/
    128 && E != null && n(18, K = !1), e.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (E != null ? n(14, B = E.map((g) => {
      if (g.index != null && g.length != null)
        return g.index / g.length;
      if (g.progress != null)
        return g.progress;
    })) : n(14, B = null), B ? (n(15, C = B[B.length - 1]), D && (C === 0 ? n(16, D.style.transition = "0", D) : n(16, D.style.transition = "150ms", D))) : n(15, C = void 0)), e.$$.dirty[0] & /*status*/
    16 && (_ === "pending" ? j() : z()), e.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && q && c && (_ === "pending" || _ === "complete") && Xh(q, P), e.$$.dirty[0] & /*status, message*/
    8388624, e.$$.dirty[0] & /*timer_diff*/
    67108864 && n(20, r = W.toFixed(1));
  }, [
    a,
    o,
    u,
    f,
    _,
    h,
    m,
    E,
    S,
    A,
    v,
    p,
    k,
    q,
    B,
    C,
    D,
    ie,
    K,
    y,
    r,
    s,
    c,
    d,
    P,
    N,
    W,
    O,
    l,
    i,
    w,
    U
  ];
}
class Io extends Eh {
  constructor(t) {
    super(), Bh(
      this,
      t,
      Wh,
      Vh,
      Ph,
      {
        i18n: 1,
        eta: 0,
        queue: 21,
        queue_position: 2,
        queue_size: 3,
        status: 4,
        scroll_to_output: 22,
        timer: 5,
        show_progress: 6,
        message: 23,
        progress: 7,
        variant: 8,
        loading_text: 9,
        absolute: 10,
        translucent: 11,
        border: 12,
        autoscroll: 24
      },
      null,
      [-1, -1]
    );
  }
}
const { setContext: $d, getContext: Zh } = window.__gradio__svelte__internal, Jh = "WORKER_PROXY_CONTEXT_KEY";
function Qh() {
  return Zh(Jh);
}
function Yh(e) {
  return e.host === window.location.host || e.host === "localhost:7860" || e.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  e.host === "lite.local";
}
async function Nl(e) {
  if (e == null)
    return e;
  const t = new URL(e);
  if (!Yh(t) || t.protocol !== "http:" && t.protocol !== "https:")
    return e;
  const n = Qh();
  if (n == null)
    return e;
  const r = t.pathname;
  return n.httpRequest({
    method: "GET",
    path: r,
    headers: {},
    query_string: ""
  }).then((i) => {
    if (i.status !== 200)
      throw new Error(`Failed to get file ${r} from the Wasm worker.`);
    const l = new Blob([i.body], {
      type: i.headers["Content-Type"]
    });
    return URL.createObjectURL(l);
  });
}
const {
  SvelteComponent: Kh,
  append: $h,
  assign: Vr,
  compute_rest_props: Il,
  detach: Yr,
  element: Lo,
  empty: ed,
  exclude_internal_props: td,
  get_spread_update: nd,
  handle_promise: Ll,
  init: rd,
  insert: Kr,
  noop: vt,
  safe_not_equal: id,
  set_attributes: Ol,
  set_data: ld,
  set_style: od,
  src_url_equal: sd,
  text: ad,
  toggle_class: Ml,
  update_await_block_branch: ud
} = window.__gradio__svelte__internal;
function fd(e) {
  let t, n = (
    /*error*/
    e[3].message + ""
  ), r;
  return {
    c() {
      t = Lo("p"), r = ad(n), od(t, "color", "red");
    },
    m(i, l) {
      Kr(i, t, l), $h(t, r);
    },
    p(i, l) {
      l & /*src*/
      1 && n !== (n = /*error*/
      i[3].message + "") && ld(r, n);
    },
    d(i) {
      i && Yr(t);
    }
  };
}
function cd(e) {
  let t, n, r = [
    {
      src: n = /*resolved_src*/
      e[2]
    },
    /*$$restProps*/
    e[1]
  ], i = {};
  for (let l = 0; l < r.length; l += 1)
    i = Vr(i, r[l]);
  return {
    c() {
      t = Lo("img"), Ol(t, i), Ml(t, "svelte-1k0wid7", !0);
    },
    m(l, o) {
      Kr(l, t, o);
    },
    p(l, o) {
      Ol(t, i = nd(r, [
        o & /*src*/
        1 && !sd(t.src, n = /*resolved_src*/
        l[2]) && { src: n },
        o & /*$$restProps*/
        2 && /*$$restProps*/
        l[1]
      ])), Ml(t, "svelte-1k0wid7", !0);
    },
    d(l) {
      l && Yr(t);
    }
  };
}
function _d(e) {
  return { c: vt, m: vt, p: vt, d: vt };
}
function hd(e) {
  let t, n, r = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !0,
    pending: _d,
    then: cd,
    catch: fd,
    value: 2,
    error: 3
  };
  return Ll(n = Nl(
    /*src*/
    e[0]
  ), r), {
    c() {
      t = ed(), r.block.c();
    },
    m(i, l) {
      Kr(i, t, l), r.block.m(i, r.anchor = l), r.mount = () => t.parentNode, r.anchor = t;
    },
    p(i, [l]) {
      e = i, r.ctx = e, l & /*src*/
      1 && n !== (n = Nl(
        /*src*/
        e[0]
      )) && Ll(n, r) || ud(r, e, l);
    },
    i: vt,
    o: vt,
    d(i) {
      i && Yr(t), r.block.d(i), r.token = null, r = null;
    }
  };
}
function dd(e, t, n) {
  const r = ["src"];
  let i = Il(t, r), { src: l = void 0 } = t;
  return e.$$set = (o) => {
    t = Vr(Vr({}, t), td(o)), n(1, i = Il(t, r)), "src" in o && n(0, l = o.src);
  }, [l, i];
}
class md extends Kh {
  constructor(t) {
    super(), rd(this, t, dd, hd, id, { src: 0 });
  }
}
const {
  SvelteComponent: gd,
  attr: pd,
  create_component: bd,
  destroy_component: vd,
  detach: wd,
  element: yd,
  init: Ed,
  insert: Sd,
  mount_component: kd,
  safe_not_equal: Td,
  toggle_class: gt,
  transition_in: Ad,
  transition_out: Cd
} = window.__gradio__svelte__internal;
function Bd(e) {
  let t, n, r;
  return n = new md({
    props: {
      src: (
        /*samples_dir*/
        e[1] + /*value*/
        e[0]
      ),
      alt: ""
    }
  }), {
    c() {
      t = yd("div"), bd(n.$$.fragment), pd(t, "class", "container svelte-1iqucjz"), gt(
        t,
        "table",
        /*type*/
        e[2] === "table"
      ), gt(
        t,
        "gallery",
        /*type*/
        e[2] === "gallery"
      ), gt(
        t,
        "selected",
        /*selected*/
        e[3]
      );
    },
    m(i, l) {
      Sd(i, t, l), kd(n, t, null), r = !0;
    },
    p(i, [l]) {
      const o = {};
      l & /*samples_dir, value*/
      3 && (o.src = /*samples_dir*/
      i[1] + /*value*/
      i[0]), n.$set(o), (!r || l & /*type*/
      4) && gt(
        t,
        "table",
        /*type*/
        i[2] === "table"
      ), (!r || l & /*type*/
      4) && gt(
        t,
        "gallery",
        /*type*/
        i[2] === "gallery"
      ), (!r || l & /*selected*/
      8) && gt(
        t,
        "selected",
        /*selected*/
        i[3]
      );
    },
    i(i) {
      r || (Ad(n.$$.fragment, i), r = !0);
    },
    o(i) {
      Cd(n.$$.fragment, i), r = !1;
    },
    d(i) {
      i && wd(t), vd(n);
    }
  };
}
function Hd(e, t, n) {
  let { value: r } = t, { samples_dir: i } = t, { type: l } = t, { selected: o = !1 } = t;
  return e.$$set = (a) => {
    "value" in a && n(0, r = a.value), "samples_dir" in a && n(1, i = a.samples_dir), "type" in a && n(2, l = a.type), "selected" in a && n(3, o = a.selected);
  }, [r, i, l, o];
}
class em extends gd {
  constructor(t) {
    super(), Ed(this, t, Hd, Bd, Td, {
      value: 0,
      samples_dir: 1,
      type: 2,
      selected: 3
    });
  }
}
const {
  SvelteComponent: Pd,
  add_flush_callback: Rl,
  assign: Oo,
  bind: Dl,
  binding_callbacks: Ul,
  bubble: Nd,
  check_outros: Mo,
  create_component: je,
  destroy_component: xe,
  detach: Dn,
  empty: Ro,
  flush: V,
  get_spread_object: Do,
  get_spread_update: Uo,
  group_outros: Fo,
  init: Id,
  insert: Un,
  mount_component: ze,
  safe_not_equal: Ld,
  space: Go,
  transition_in: ge,
  transition_out: pe
} = window.__gradio__svelte__internal;
function Od(e) {
  let t, n;
  return t = new ql({
    props: {
      visible: (
        /*visible*/
        e[4]
      ),
      variant: (
        /*_value*/
        e[22] === null ? "dashed" : "solid"
      ),
      border_mode: (
        /*dragging*/
        e[23] ? "focus" : "base"
      ),
      padding: !1,
      elem_id: (
        /*elem_id*/
        e[2]
      ),
      elem_classes: (
        /*elem_classes*/
        e[3]
      ),
      height: (
        /*height*/
        e[9] || void 0
      ),
      width: (
        /*width*/
        e[10]
      ),
      allow_overflow: !1,
      container: (
        /*container*/
        e[12]
      ),
      scale: (
        /*scale*/
        e[13]
      ),
      min_width: (
        /*min_width*/
        e[14]
      ),
      $$slots: { default: [Gd] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      je(t.$$.fragment);
    },
    m(r, i) {
      ze(t, r, i), n = !0;
    },
    p(r, i) {
      const l = {};
      i[0] & /*visible*/
      16 && (l.visible = /*visible*/
      r[4]), i[0] & /*_value*/
      4194304 && (l.variant = /*_value*/
      r[22] === null ? "dashed" : "solid"), i[0] & /*dragging*/
      8388608 && (l.border_mode = /*dragging*/
      r[23] ? "focus" : "base"), i[0] & /*elem_id*/
      4 && (l.elem_id = /*elem_id*/
      r[2]), i[0] & /*elem_classes*/
      8 && (l.elem_classes = /*elem_classes*/
      r[3]), i[0] & /*height*/
      512 && (l.height = /*height*/
      r[9] || void 0), i[0] & /*width*/
      1024 && (l.width = /*width*/
      r[10]), i[0] & /*container*/
      4096 && (l.container = /*container*/
      r[12]), i[0] & /*scale*/
      8192 && (l.scale = /*scale*/
      r[13]), i[0] & /*min_width*/
      16384 && (l.min_width = /*min_width*/
      r[14]), i[0] & /*_selectable, root, sources, label, show_label, pending, streaming, mirror_webcam, gradio, active_tool, value, dragging, loading_status*/
      29165923 | i[1] & /*$$scope*/
      2048 && (l.$$scope = { dirty: i, ctx: r }), t.$set(l);
    },
    i(r) {
      n || (ge(t.$$.fragment, r), n = !0);
    },
    o(r) {
      pe(t.$$.fragment, r), n = !1;
    },
    d(r) {
      xe(t, r);
    }
  };
}
function Md(e) {
  let t, n;
  return t = new ql({
    props: {
      visible: (
        /*visible*/
        e[4]
      ),
      variant: "solid",
      border_mode: (
        /*dragging*/
        e[23] ? "focus" : "base"
      ),
      padding: !1,
      elem_id: (
        /*elem_id*/
        e[2]
      ),
      elem_classes: (
        /*elem_classes*/
        e[3]
      ),
      height: (
        /*height*/
        e[9] || void 0
      ),
      width: (
        /*width*/
        e[10]
      ),
      allow_overflow: !1,
      container: (
        /*container*/
        e[12]
      ),
      scale: (
        /*scale*/
        e[13]
      ),
      min_width: (
        /*min_width*/
        e[14]
      ),
      $$slots: { default: [qd] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      je(t.$$.fragment);
    },
    m(r, i) {
      ze(t, r, i), n = !0;
    },
    p(r, i) {
      const l = {};
      i[0] & /*visible*/
      16 && (l.visible = /*visible*/
      r[4]), i[0] & /*dragging*/
      8388608 && (l.border_mode = /*dragging*/
      r[23] ? "focus" : "base"), i[0] & /*elem_id*/
      4 && (l.elem_id = /*elem_id*/
      r[2]), i[0] & /*elem_classes*/
      8 && (l.elem_classes = /*elem_classes*/
      r[3]), i[0] & /*height*/
      512 && (l.height = /*height*/
      r[9] || void 0), i[0] & /*width*/
      1024 && (l.width = /*width*/
      r[10]), i[0] & /*container*/
      4096 && (l.container = /*container*/
      r[12]), i[0] & /*scale*/
      8192 && (l.scale = /*scale*/
      r[13]), i[0] & /*min_width*/
      16384 && (l.min_width = /*min_width*/
      r[14]), i[0] & /*_value, label, show_label, show_download_button, _selectable, show_share_button, gradio, loading_status*/
      6326498 | i[1] & /*$$scope*/
      2048 && (l.$$scope = { dirty: i, ctx: r }), t.$set(l);
    },
    i(r) {
      n || (ge(t.$$.fragment, r), n = !0);
    },
    o(r) {
      pe(t.$$.fragment, r), n = !1;
    },
    d(r) {
      xe(t, r);
    }
  };
}
function Rd(e) {
  let t, n;
  return t = new Vl({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [Ud] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      je(t.$$.fragment);
    },
    m(r, i) {
      ze(t, r, i), n = !0;
    },
    p(r, i) {
      const l = {};
      i[1] & /*$$scope*/
      2048 && (l.$$scope = { dirty: i, ctx: r }), t.$set(l);
    },
    i(r) {
      n || (ge(t.$$.fragment, r), n = !0);
    },
    o(r) {
      pe(t.$$.fragment, r), n = !1;
    },
    d(r) {
      xe(t, r);
    }
  };
}
function Dd(e) {
  let t, n;
  return t = new Wu({
    props: {
      i18n: (
        /*gradio*/
        e[21].i18n
      ),
      type: "image",
      mode: "short"
    }
  }), {
    c() {
      je(t.$$.fragment);
    },
    m(r, i) {
      ze(t, r, i), n = !0;
    },
    p(r, i) {
      const l = {};
      i[0] & /*gradio*/
      2097152 && (l.i18n = /*gradio*/
      r[21].i18n), t.$set(l);
    },
    i(r) {
      n || (ge(t.$$.fragment, r), n = !0);
    },
    o(r) {
      pe(t.$$.fragment, r), n = !1;
    },
    d(r) {
      xe(t, r);
    }
  };
}
function Ud(e) {
  let t, n;
  return t = new Nn({}), {
    c() {
      je(t.$$.fragment);
    },
    m(r, i) {
      ze(t, r, i), n = !0;
    },
    i(r) {
      n || (ge(t.$$.fragment, r), n = !0);
    },
    o(r) {
      pe(t.$$.fragment, r), n = !1;
    },
    d(r) {
      xe(t, r);
    }
  };
}
function Fd(e) {
  let t, n, r, i, l;
  const o = [Dd, Rd], a = [];
  function s(u, f) {
    return f[0] & /*sources*/
    65536 && (t = null), t == null && (t = !!/*sources*/
    u[16].includes("upload")), t ? 0 : 1;
  }
  return n = s(e, [-1, -1]), r = a[n] = o[n](e), {
    c() {
      r.c(), i = Ro();
    },
    m(u, f) {
      a[n].m(u, f), Un(u, i, f), l = !0;
    },
    p(u, f) {
      let _ = n;
      n = s(u, f), n === _ ? a[n].p(u, f) : (Fo(), pe(a[_], 1, 1, () => {
        a[_] = null;
      }), Mo(), r = a[n], r ? r.p(u, f) : (r = a[n] = o[n](u), r.c()), ge(r, 1), r.m(i.parentNode, i));
    },
    i(u) {
      l || (ge(r), l = !0);
    },
    o(u) {
      pe(r), l = !1;
    },
    d(u) {
      u && Dn(i), a[n].d(u);
    }
  };
}
function Gd(e) {
  let t, n, r, i, l, o;
  const a = [
    {
      autoscroll: (
        /*gradio*/
        e[21].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      e[21].i18n
    ) },
    /*loading_status*/
    e[1]
  ];
  let s = {};
  for (let c = 0; c < a.length; c += 1)
    s = Oo(s, a[c]);
  t = new Io({ props: s });
  function u(c) {
    e[30](c);
  }
  function f(c) {
    e[31](c);
  }
  let _ = {
    selectable: (
      /*_selectable*/
      e[11]
    ),
    root: (
      /*root*/
      e[8]
    ),
    sources: (
      /*sources*/
      e[16]
    ),
    label: (
      /*label*/
      e[5]
    ),
    show_label: (
      /*show_label*/
      e[6]
    ),
    pending: (
      /*pending*/
      e[19]
    ),
    streaming: (
      /*streaming*/
      e[18]
    ),
    mirror_webcam: (
      /*mirror_webcam*/
      e[20]
    ),
    i18n: (
      /*gradio*/
      e[21].i18n
    ),
    $$slots: { default: [Fd] },
    $$scope: { ctx: e }
  };
  return (
    /*active_tool*/
    e[24] !== void 0 && (_.active_tool = /*active_tool*/
    e[24]), /*value*/
    e[0] !== void 0 && (_.value = /*value*/
    e[0]), r = new ch({ props: _ }), Ul.push(() => Dl(r, "active_tool", u)), Ul.push(() => Dl(r, "value", f)), r.$on(
      "edit",
      /*edit_handler*/
      e[32]
    ), r.$on(
      "clear",
      /*clear_handler*/
      e[33]
    ), r.$on(
      "stream",
      /*stream_handler*/
      e[34]
    ), r.$on(
      "drag",
      /*drag_handler*/
      e[35]
    ), r.$on(
      "upload",
      /*upload_handler*/
      e[36]
    ), r.$on(
      "select",
      /*select_handler_1*/
      e[37]
    ), r.$on(
      "share",
      /*share_handler_1*/
      e[38]
    ), r.$on(
      "error",
      /*error_handler_2*/
      e[39]
    ), r.$on(
      "click",
      /*click_handler*/
      e[40]
    ), r.$on(
      "error",
      /*error_handler*/
      e[41]
    ), {
      c() {
        je(t.$$.fragment), n = Go(), je(r.$$.fragment);
      },
      m(c, h) {
        ze(t, c, h), Un(c, n, h), ze(r, c, h), o = !0;
      },
      p(c, h) {
        const m = h[0] & /*gradio, loading_status*/
        2097154 ? Uo(a, [
          h[0] & /*gradio*/
          2097152 && {
            autoscroll: (
              /*gradio*/
              c[21].autoscroll
            )
          },
          h[0] & /*gradio*/
          2097152 && { i18n: (
            /*gradio*/
            c[21].i18n
          ) },
          h[0] & /*loading_status*/
          2 && Do(
            /*loading_status*/
            c[1]
          )
        ]) : {};
        t.$set(m);
        const d = {};
        h[0] & /*_selectable*/
        2048 && (d.selectable = /*_selectable*/
        c[11]), h[0] & /*root*/
        256 && (d.root = /*root*/
        c[8]), h[0] & /*sources*/
        65536 && (d.sources = /*sources*/
        c[16]), h[0] & /*label*/
        32 && (d.label = /*label*/
        c[5]), h[0] & /*show_label*/
        64 && (d.show_label = /*show_label*/
        c[6]), h[0] & /*pending*/
        524288 && (d.pending = /*pending*/
        c[19]), h[0] & /*streaming*/
        262144 && (d.streaming = /*streaming*/
        c[18]), h[0] & /*mirror_webcam*/
        1048576 && (d.mirror_webcam = /*mirror_webcam*/
        c[20]), h[0] & /*gradio*/
        2097152 && (d.i18n = /*gradio*/
        c[21].i18n), h[0] & /*gradio, sources*/
        2162688 | h[1] & /*$$scope*/
        2048 && (d.$$scope = { dirty: h, ctx: c }), !i && h[0] & /*active_tool*/
        16777216 && (i = !0, d.active_tool = /*active_tool*/
        c[24], Rl(() => i = !1)), !l && h[0] & /*value*/
        1 && (l = !0, d.value = /*value*/
        c[0], Rl(() => l = !1)), r.$set(d);
      },
      i(c) {
        o || (ge(t.$$.fragment, c), ge(r.$$.fragment, c), o = !0);
      },
      o(c) {
        pe(t.$$.fragment, c), pe(r.$$.fragment, c), o = !1;
      },
      d(c) {
        c && Dn(n), xe(t, c), xe(r, c);
      }
    }
  );
}
function qd(e) {
  let t, n, r, i;
  const l = [
    {
      autoscroll: (
        /*gradio*/
        e[21].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      e[21].i18n
    ) },
    /*loading_status*/
    e[1]
  ];
  let o = {};
  for (let a = 0; a < l.length; a += 1)
    o = Oo(o, l[a]);
  return t = new Io({ props: o }), r = new Rf({
    props: {
      value: (
        /*_value*/
        e[22]
      ),
      label: (
        /*label*/
        e[5]
      ),
      show_label: (
        /*show_label*/
        e[6]
      ),
      show_download_button: (
        /*show_download_button*/
        e[7]
      ),
      selectable: (
        /*_selectable*/
        e[11]
      ),
      show_share_button: (
        /*show_share_button*/
        e[15]
      ),
      i18n: (
        /*gradio*/
        e[21].i18n
      )
    }
  }), r.$on(
    "select",
    /*select_handler*/
    e[27]
  ), r.$on(
    "share",
    /*share_handler*/
    e[28]
  ), r.$on(
    "error",
    /*error_handler_1*/
    e[29]
  ), {
    c() {
      je(t.$$.fragment), n = Go(), je(r.$$.fragment);
    },
    m(a, s) {
      ze(t, a, s), Un(a, n, s), ze(r, a, s), i = !0;
    },
    p(a, s) {
      const u = s[0] & /*gradio, loading_status*/
      2097154 ? Uo(l, [
        s[0] & /*gradio*/
        2097152 && {
          autoscroll: (
            /*gradio*/
            a[21].autoscroll
          )
        },
        s[0] & /*gradio*/
        2097152 && { i18n: (
          /*gradio*/
          a[21].i18n
        ) },
        s[0] & /*loading_status*/
        2 && Do(
          /*loading_status*/
          a[1]
        )
      ]) : {};
      t.$set(u);
      const f = {};
      s[0] & /*_value*/
      4194304 && (f.value = /*_value*/
      a[22]), s[0] & /*label*/
      32 && (f.label = /*label*/
      a[5]), s[0] & /*show_label*/
      64 && (f.show_label = /*show_label*/
      a[6]), s[0] & /*show_download_button*/
      128 && (f.show_download_button = /*show_download_button*/
      a[7]), s[0] & /*_selectable*/
      2048 && (f.selectable = /*_selectable*/
      a[11]), s[0] & /*show_share_button*/
      32768 && (f.show_share_button = /*show_share_button*/
      a[15]), s[0] & /*gradio*/
      2097152 && (f.i18n = /*gradio*/
      a[21].i18n), r.$set(f);
    },
    i(a) {
      i || (ge(t.$$.fragment, a), ge(r.$$.fragment, a), i = !0);
    },
    o(a) {
      pe(t.$$.fragment, a), pe(r.$$.fragment, a), i = !1;
    },
    d(a) {
      a && Dn(n), xe(t, a), xe(r, a);
    }
  };
}
function jd(e) {
  let t, n, r, i;
  const l = [Md, Od], o = [];
  function a(s, u) {
    return (
      /*interactive*/
      s[17] ? 1 : 0
    );
  }
  return t = a(e), n = o[t] = l[t](e), {
    c() {
      n.c(), r = Ro();
    },
    m(s, u) {
      o[t].m(s, u), Un(s, r, u), i = !0;
    },
    p(s, u) {
      let f = t;
      t = a(s), t === f ? o[t].p(s, u) : (Fo(), pe(o[f], 1, 1, () => {
        o[f] = null;
      }), Mo(), n = o[t], n ? n.p(s, u) : (n = o[t] = l[t](s), n.c()), ge(n, 1), n.m(r.parentNode, r));
    },
    i(s) {
      i || (ge(n), i = !0);
    },
    o(s) {
      pe(n), i = !1;
    },
    d(s) {
      s && Dn(r), o[t].d(s);
    }
  };
}
function xd(e) {
  let t, n = e[0], r = 1;
  for (; r < e.length; ) {
    const i = e[r], l = e[r + 1];
    if (r += 2, (i === "optionalAccess" || i === "optionalCall") && n == null)
      return;
    i === "access" || i === "optionalAccess" ? (t = n, n = l(n)) : (i === "call" || i === "optionalCall") && (n = l((...o) => n.call(t, ...o)), t = void 0);
  }
  return n;
}
function zd(e, t, n) {
  let r, i, { elem_id: l = "" } = t, { elem_classes: o = [] } = t, { visible: a = !0 } = t, { value: s = null } = t, { label: u } = t, { show_label: f } = t, { show_download_button: _ } = t, { root: c } = t, { proxy_url: h } = t, { height: m } = t, { width: d } = t, { _selectable: E = !1 } = t, { container: S = !0 } = t, { scale: A = null } = t, { min_width: v = void 0 } = t, { loading_status: p } = t, { show_share_button: k = !1 } = t, { sources: P = ["upload", "clipboard", "webcam"] } = t, { interactive: q } = t, { streaming: T } = t, { pending: N } = t, { mirror_webcam: W } = t, { gradio: O } = t, ie, B = null;
  const C = ({ detail: b }) => O.dispatch("select", b), D = ({ detail: b }) => O.dispatch("share", b), K = ({ detail: b }) => O.dispatch("error", b);
  function j(b) {
    B = b, n(24, B);
  }
  function H(b) {
    s = b, n(0, s);
  }
  const z = () => O.dispatch("edit"), y = () => {
    O.dispatch("clear"), O.dispatch("change");
  }, w = () => O.dispatch("stream"), U = ({ detail: b }) => n(23, ie = b), g = () => O.dispatch("upload"), $ = ({ detail: b }) => O.dispatch("select", b), Re = ({ detail: b }) => O.dispatch("share", b), _e = ({ detail: b }) => {
    n(1, p = p || {}), n(1, p.status = "error", p), O.dispatch("error", b);
  }, De = () => O.dispatch("error", "bad thing happened");
  function Ue(b) {
    Nd.call(this, e, b);
  }
  return e.$$set = (b) => {
    "elem_id" in b && n(2, l = b.elem_id), "elem_classes" in b && n(3, o = b.elem_classes), "visible" in b && n(4, a = b.visible), "value" in b && n(0, s = b.value), "label" in b && n(5, u = b.label), "show_label" in b && n(6, f = b.show_label), "show_download_button" in b && n(7, _ = b.show_download_button), "root" in b && n(8, c = b.root), "proxy_url" in b && n(25, h = b.proxy_url), "height" in b && n(9, m = b.height), "width" in b && n(10, d = b.width), "_selectable" in b && n(11, E = b._selectable), "container" in b && n(12, S = b.container), "scale" in b && n(13, A = b.scale), "min_width" in b && n(14, v = b.min_width), "loading_status" in b && n(1, p = b.loading_status), "show_share_button" in b && n(15, k = b.show_share_button), "sources" in b && n(16, P = b.sources), "interactive" in b && n(17, q = b.interactive), "streaming" in b && n(18, T = b.streaming), "pending" in b && n(19, N = b.pending), "mirror_webcam" in b && n(20, W = b.mirror_webcam), "gradio" in b && n(21, O = b.gradio);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*value, root, proxy_url*/
    33554689 && n(22, r = Ge(s, c, h)), e.$$.dirty[0] & /*_value*/
    4194304 && n(26, i = xd([r, "optionalAccess", (b) => b.url])), e.$$.dirty[0] & /*url, gradio*/
    69206016 && i && O.dispatch("change");
  }, [
    s,
    p,
    l,
    o,
    a,
    u,
    f,
    _,
    c,
    m,
    d,
    E,
    S,
    A,
    v,
    k,
    P,
    q,
    T,
    N,
    W,
    O,
    r,
    ie,
    B,
    h,
    i,
    C,
    D,
    K,
    j,
    H,
    z,
    y,
    w,
    U,
    g,
    $,
    Re,
    _e,
    De,
    Ue
  ];
}
class tm extends Pd {
  constructor(t) {
    super(), Id(
      this,
      t,
      zd,
      jd,
      Ld,
      {
        elem_id: 2,
        elem_classes: 3,
        visible: 4,
        value: 0,
        label: 5,
        show_label: 6,
        show_download_button: 7,
        root: 8,
        proxy_url: 25,
        height: 9,
        width: 10,
        _selectable: 11,
        container: 12,
        scale: 13,
        min_width: 14,
        loading_status: 1,
        show_share_button: 15,
        sources: 16,
        interactive: 17,
        streaming: 18,
        pending: 19,
        mirror_webcam: 20,
        gradio: 21
      },
      null,
      [-1, -1]
    );
  }
  get elem_id() {
    return this.$$.ctx[2];
  }
  set elem_id(t) {
    this.$$set({ elem_id: t }), V();
  }
  get elem_classes() {
    return this.$$.ctx[3];
  }
  set elem_classes(t) {
    this.$$set({ elem_classes: t }), V();
  }
  get visible() {
    return this.$$.ctx[4];
  }
  set visible(t) {
    this.$$set({ visible: t }), V();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(t) {
    this.$$set({ value: t }), V();
  }
  get label() {
    return this.$$.ctx[5];
  }
  set label(t) {
    this.$$set({ label: t }), V();
  }
  get show_label() {
    return this.$$.ctx[6];
  }
  set show_label(t) {
    this.$$set({ show_label: t }), V();
  }
  get show_download_button() {
    return this.$$.ctx[7];
  }
  set show_download_button(t) {
    this.$$set({ show_download_button: t }), V();
  }
  get root() {
    return this.$$.ctx[8];
  }
  set root(t) {
    this.$$set({ root: t }), V();
  }
  get proxy_url() {
    return this.$$.ctx[25];
  }
  set proxy_url(t) {
    this.$$set({ proxy_url: t }), V();
  }
  get height() {
    return this.$$.ctx[9];
  }
  set height(t) {
    this.$$set({ height: t }), V();
  }
  get width() {
    return this.$$.ctx[10];
  }
  set width(t) {
    this.$$set({ width: t }), V();
  }
  get _selectable() {
    return this.$$.ctx[11];
  }
  set _selectable(t) {
    this.$$set({ _selectable: t }), V();
  }
  get container() {
    return this.$$.ctx[12];
  }
  set container(t) {
    this.$$set({ container: t }), V();
  }
  get scale() {
    return this.$$.ctx[13];
  }
  set scale(t) {
    this.$$set({ scale: t }), V();
  }
  get min_width() {
    return this.$$.ctx[14];
  }
  set min_width(t) {
    this.$$set({ min_width: t }), V();
  }
  get loading_status() {
    return this.$$.ctx[1];
  }
  set loading_status(t) {
    this.$$set({ loading_status: t }), V();
  }
  get show_share_button() {
    return this.$$.ctx[15];
  }
  set show_share_button(t) {
    this.$$set({ show_share_button: t }), V();
  }
  get sources() {
    return this.$$.ctx[16];
  }
  set sources(t) {
    this.$$set({ sources: t }), V();
  }
  get interactive() {
    return this.$$.ctx[17];
  }
  set interactive(t) {
    this.$$set({ interactive: t }), V();
  }
  get streaming() {
    return this.$$.ctx[18];
  }
  set streaming(t) {
    this.$$set({ streaming: t }), V();
  }
  get pending() {
    return this.$$.ctx[19];
  }
  set pending(t) {
    this.$$set({ pending: t }), V();
  }
  get mirror_webcam() {
    return this.$$.ctx[20];
  }
  set mirror_webcam(t) {
    this.$$set({ mirror_webcam: t }), V();
  }
  get gradio() {
    return this.$$.ctx[21];
  }
  set gradio(t) {
    this.$$set({ gradio: t }), V();
  }
}
export {
  em as BaseExample,
  md as BaseImage,
  ch as BaseImageUploader,
  Rf as BaseStaticImage,
  ic as Webcam,
  tm as default
};
