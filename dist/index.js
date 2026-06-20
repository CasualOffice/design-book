import { forwardRef, useState } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';

// src/Icon.tsx
var SIZE_PX = {
  xs: 14,
  sm: 16,
  md: 18,
  lg: 20,
  xl: 24
};
var Icon = forwardRef(function Icon2({ name, size = "md", filled = false, weight = 400, className, style, ...rest }, ref) {
  const px = typeof size === "number" ? size : SIZE_PX[size];
  const fontVariationSettings = `'FILL' ${filled ? 1 : 0}, 'wght' ${weight}, 'GRAD' 0, 'opsz' 24`;
  const merged = {
    fontSize: px,
    lineHeight: 1,
    fontVariationSettings,
    ...style
  };
  const classes = className ? `material-symbols-outlined ${className}` : "material-symbols-outlined";
  return /* @__PURE__ */ jsx("span", { ref, "aria-hidden": "true", className: classes, style: merged, ...rest, children: name });
});
var SIZES = {
  sm: { height: 28, padding: "0 11px", font: "var(--text-sm)", gap: 5, icon: 16 },
  md: { height: 34, padding: "0 15px", font: "var(--text-md)", gap: 7, icon: 18 },
  lg: { height: 42, padding: "0 22px", font: "var(--text-md)", gap: 8, icon: 20 }
};
var VARIANTS = {
  primary: {
    background: "var(--accent-gradient)",
    color: "var(--color-accent-fg)",
    border: "1px solid transparent",
    boxShadow: "0 1px 2px rgba(16,24,40,0.18), inset 0 1px 0 rgba(255,255,255,0.18)"
  },
  secondary: {
    background: "var(--color-surface)",
    color: "var(--color-text)",
    border: "1px solid var(--color-border-strong)",
    boxShadow: "var(--shadow-1)"
  },
  subtle: {
    background: "transparent",
    color: "var(--color-text)",
    border: "1px solid transparent",
    boxShadow: "none"
  },
  danger: {
    background: "var(--color-danger)",
    color: "#fff",
    border: "1px solid transparent",
    boxShadow: "0 1px 2px rgba(16,24,40,0.18), inset 0 1px 0 rgba(255,255,255,0.15)"
  }
};
var Button = forwardRef(function Button2({
  children,
  variant = "secondary",
  size = "md",
  icon,
  iconRight,
  disabled = false,
  full = false,
  type = "button",
  style,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
  onFocus,
  onBlur,
  ...rest
}, ref) {
  const s = SIZES[size];
  const v = VARIANTS[variant];
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const [focus, setFocus] = useState(false);
  const hoverStyle = !disabled && hover ? variant === "primary" ? {
    filter: "brightness(1.06) saturate(1.05)",
    boxShadow: "0 4px 12px -2px color-mix(in srgb, var(--color-accent) 45%, transparent), inset 0 1px 0 rgba(255,255,255,0.22)"
  } : variant === "danger" ? { filter: "brightness(1.05)" } : { background: "var(--color-hover)", borderColor: "var(--color-text-secondary)" } : null;
  const ring = focus && !disabled ? { boxShadow: "var(--glow-accent)" } : null;
  return /* @__PURE__ */ jsxs(
    "button",
    {
      ref,
      type,
      disabled,
      onFocus: (e) => {
        setFocus(true);
        onFocus?.(e);
      },
      onBlur: (e) => {
        setFocus(false);
        onBlur?.(e);
      },
      onMouseEnter: (e) => {
        setHover(true);
        onMouseEnter?.(e);
      },
      onMouseLeave: (e) => {
        setHover(false);
        setActive(false);
        onMouseLeave?.(e);
      },
      onMouseDown: (e) => {
        setActive(true);
        onMouseDown?.(e);
      },
      onMouseUp: (e) => {
        setActive(false);
        onMouseUp?.(e);
      },
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: s.gap,
        width: full ? "100%" : void 0,
        height: s.height,
        padding: s.padding,
        font: "inherit",
        fontFamily: "var(--font-sans)",
        fontSize: s.font,
        fontWeight: "var(--weight-semibold)",
        letterSpacing: "-0.005em",
        lineHeight: 1,
        whiteSpace: "nowrap",
        borderRadius: "var(--radius-md)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        transform: active && !disabled ? "translateY(1px)" : hover && !disabled && variant !== "subtle" ? "translateY(-1px)" : "none",
        transition: "transform var(--motion-base) var(--ease-spring), background var(--motion-fast) var(--ease-out), border-color var(--motion-fast) var(--ease-out), filter var(--motion-fast) var(--ease-out), box-shadow var(--motion-base) var(--ease-out)",
        ...v,
        ...hoverStyle,
        ...ring,
        ...style
      },
      ...rest,
      children: [
        icon && /* @__PURE__ */ jsx(Icon, { name: icon, size: s.icon }),
        children != null && /* @__PURE__ */ jsx("span", { children }),
        iconRight && /* @__PURE__ */ jsx(Icon, { name: iconRight, size: s.icon })
      ]
    }
  );
});
var SIZES2 = {
  sm: { box: 24, icon: 16 },
  md: { box: 28, icon: 18 },
  lg: { box: 36, icon: 20 }
};
var IconButton = forwardRef(function IconButton2({
  icon,
  label,
  size = "md",
  pressed = false,
  disabled = false,
  style,
  onFocus,
  onBlur,
  onMouseEnter,
  onMouseLeave,
  ...rest
}, ref) {
  const s = SIZES2[size];
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);
  const bg = pressed ? "var(--color-selected)" : hover && !disabled ? "var(--color-hover)" : "transparent";
  return /* @__PURE__ */ jsx(
    "button",
    {
      ref,
      type: "button",
      "aria-label": label,
      "aria-pressed": pressed,
      title: label,
      disabled,
      onFocus: (e) => {
        setFocus(true);
        onFocus?.(e);
      },
      onBlur: (e) => {
        setFocus(false);
        onBlur?.(e);
      },
      onMouseEnter: (e) => {
        setHover(true);
        onMouseEnter?.(e);
      },
      onMouseLeave: (e) => {
        setHover(false);
        onMouseLeave?.(e);
      },
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: s.box,
        height: s.box,
        padding: 0,
        border: "1px solid transparent",
        borderRadius: "var(--radius-md)",
        background: bg,
        color: pressed ? "var(--color-accent)" : "var(--color-text)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.4 : 1,
        boxShadow: focus && !disabled ? "var(--glow-accent)" : "none",
        transition: "background var(--motion-fast) var(--ease-out), color var(--motion-fast) var(--ease-out), box-shadow var(--motion-base) var(--ease-out)",
        ...style
      },
      ...rest,
      children: /* @__PURE__ */ jsx(Icon, { name: icon, size: s.icon })
    }
  );
});
var SIZES3 = {
  sm: { height: 28, padding: "0 8px", font: "var(--text-sm)" },
  md: { height: 34, padding: "0 10px", font: "var(--text-md)" }
};
var Input = forwardRef(function Input2({
  value,
  defaultValue,
  placeholder,
  label,
  hint,
  icon,
  type = "text",
  size = "md",
  disabled = false,
  invalid = false,
  full = false,
  onChange,
  onFocus,
  onBlur,
  style,
  ...rest
}, ref) {
  const s = SIZES3[size];
  const [focus, setFocus] = useState(false);
  const borderColor = invalid ? "var(--color-danger)" : focus ? "var(--color-accent)" : "var(--color-border-strong)";
  const field = /* @__PURE__ */ jsxs(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        height: s.height,
        padding: s.padding,
        background: disabled ? "var(--color-surface-alt)" : "var(--color-surface)",
        border: `1px solid ${borderColor}`,
        borderRadius: "var(--radius-md)",
        boxShadow: focus ? `0 0 0 3px ${invalid ? "var(--color-danger-soft)" : "var(--color-accent-soft)"}` : "none",
        transition: "border-color var(--motion-fast) var(--ease-out), box-shadow var(--motion-fast) var(--ease-out)",
        width: full ? "100%" : void 0,
        opacity: disabled ? 0.6 : 1
      },
      children: [
        icon && /* @__PURE__ */ jsx(Icon, { name: icon, size: "md", style: { color: "var(--color-text-secondary)" } }),
        /* @__PURE__ */ jsx(
          "input",
          {
            ref,
            type,
            value,
            defaultValue,
            placeholder,
            disabled,
            onChange,
            onFocus: (e) => {
              setFocus(true);
              onFocus?.(e);
            },
            onBlur: (e) => {
              setFocus(false);
              onBlur?.(e);
            },
            style: {
              flex: 1,
              minWidth: 0,
              border: 0,
              outline: 0,
              background: "transparent",
              font: "inherit",
              fontFamily: "var(--font-sans)",
              fontSize: s.font,
              color: "var(--color-text)"
            },
            ...rest
          }
        )
      ]
    }
  );
  if (label == null && hint == null) {
    return /* @__PURE__ */ jsx("div", { style: { width: full ? "100%" : void 0, ...style }, children: field });
  }
  return /* @__PURE__ */ jsxs(
    "label",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 5,
        width: full ? "100%" : void 0,
        ...style
      },
      children: [
        label != null && /* @__PURE__ */ jsx(
          "span",
          {
            style: {
              fontSize: "var(--text-sm)",
              fontWeight: "var(--weight-medium)",
              color: "var(--color-text)"
            },
            children: label
          }
        ),
        field,
        hint != null && /* @__PURE__ */ jsx(
          "span",
          {
            style: {
              fontSize: "var(--text-xs)",
              color: invalid ? "var(--color-danger)" : "var(--color-text-secondary)"
            },
            children: hint
          }
        )
      ]
    }
  );
});
var SIZES4 = {
  sm: { height: 26, padding: "0 26px 0 8px", font: "var(--text-sm)" },
  md: { height: 32, padding: "0 28px 0 10px", font: "var(--text-md)" }
};
var Select = forwardRef(function Select2({
  value,
  defaultValue,
  options = [],
  label,
  size = "md",
  disabled = false,
  full = false,
  width,
  onChange,
  onFocus,
  onBlur,
  style,
  containerStyle,
  children,
  ...rest
}, ref) {
  const s = SIZES4[size];
  const [focus, setFocus] = useState(false);
  const control = /* @__PURE__ */ jsxs(
    "div",
    {
      style: {
        position: "relative",
        width: full ? "100%" : width,
        display: "inline-flex",
        ...containerStyle
      },
      children: [
        /* @__PURE__ */ jsx(
          "select",
          {
            ref,
            value,
            defaultValue,
            disabled,
            onChange,
            onFocus: (e) => {
              setFocus(true);
              onFocus?.(e);
            },
            onBlur: (e) => {
              setFocus(false);
              onBlur?.(e);
            },
            style: {
              appearance: "none",
              WebkitAppearance: "none",
              width: full ? "100%" : width || "auto",
              height: s.height,
              padding: s.padding,
              font: "inherit",
              fontFamily: "var(--font-sans)",
              fontSize: s.font,
              color: "var(--color-text)",
              background: disabled ? "var(--color-surface-alt)" : "var(--color-surface)",
              border: `1px solid ${focus ? "var(--color-accent)" : "var(--color-border-strong)"}`,
              borderRadius: "var(--radius-md)",
              boxShadow: focus ? "0 0 0 3px var(--color-accent-soft)" : "none",
              cursor: disabled ? "not-allowed" : "pointer",
              opacity: disabled ? 0.6 : 1,
              transition: "border-color var(--motion-fast) var(--ease-out), box-shadow var(--motion-fast) var(--ease-out)",
              ...style
            },
            ...rest,
            children: children ?? options.map((o) => {
              const opt = typeof o === "string" ? { value: o, label: o } : o;
              return /* @__PURE__ */ jsx("option", { value: opt.value, children: opt.label }, opt.value);
            })
          }
        ),
        /* @__PURE__ */ jsx(
          "span",
          {
            style: {
              position: "absolute",
              right: 6,
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
              color: "var(--color-text-secondary)",
              display: "inline-flex"
            },
            children: /* @__PURE__ */ jsx(Icon, { name: "arrow_drop_down", size: "md" })
          }
        )
      ]
    }
  );
  if (label == null) return /* @__PURE__ */ jsx("span", { children: control });
  return /* @__PURE__ */ jsxs("label", { style: { display: "flex", flexDirection: "column", gap: 5 }, children: [
    /* @__PURE__ */ jsx(
      "span",
      {
        style: {
          fontSize: "var(--text-sm)",
          fontWeight: "var(--weight-medium)",
          color: "var(--color-text)"
        },
        children: label
      }
    ),
    control
  ] });
});
var Checkbox = forwardRef(function Checkbox2({
  checked = false,
  indeterminate = false,
  label,
  hint,
  disabled = false,
  onChange,
  style,
  ...rest
}, ref) {
  const on = checked || indeterminate;
  const [hover, setHover] = useState(false);
  return /* @__PURE__ */ jsxs(
    "label",
    {
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        display: "inline-flex",
        alignItems: hint != null ? "flex-start" : "center",
        gap: 8,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.55 : 1,
        ...style
      },
      children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            ref,
            type: "checkbox",
            checked,
            disabled,
            onChange,
            style: { position: "absolute", opacity: 0, width: 0, height: 0 },
            ...rest
          }
        ),
        /* @__PURE__ */ jsx(
          "span",
          {
            style: {
              flex: "0 0 auto",
              marginTop: hint != null ? 1 : 0,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 16,
              height: 16,
              borderRadius: 3,
              background: on ? "var(--color-accent)" : "var(--color-surface)",
              border: `1.5px solid ${on ? "var(--color-accent)" : hover && !disabled ? "var(--color-text-secondary)" : "var(--color-border-strong)"}`,
              color: "#fff",
              transition: "background var(--motion-fast) var(--ease-out), border-color var(--motion-fast) var(--ease-out)"
            },
            children: on && /* @__PURE__ */ jsx(
              Icon,
              {
                name: indeterminate ? "remove" : "check",
                size: 14,
                weight: 700
              }
            )
          }
        ),
        (label != null || hint != null) && /* @__PURE__ */ jsxs("span", { style: { display: "flex", flexDirection: "column", gap: 2 }, children: [
          label != null && /* @__PURE__ */ jsx("span", { style: { fontSize: "var(--text-md)", color: "var(--color-text)", lineHeight: 1.3 }, children: label }),
          hint != null && /* @__PURE__ */ jsx("span", { style: { fontSize: "var(--text-xs)", color: "var(--color-text-secondary)" }, children: hint })
        ] })
      ]
    }
  );
});
var Switch = forwardRef(function Switch2({ checked = false, label, disabled = false, onChange, style, ...rest }, ref) {
  return /* @__PURE__ */ jsxs(
    "label",
    {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.55 : 1,
        ...style
      },
      children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            ref,
            type: "checkbox",
            role: "switch",
            checked,
            disabled,
            onChange,
            style: { position: "absolute", opacity: 0, width: 0, height: 0 },
            ...rest
          }
        ),
        /* @__PURE__ */ jsx(
          "span",
          {
            style: {
              position: "relative",
              flex: "0 0 auto",
              width: 32,
              height: 18,
              borderRadius: "var(--radius-pill)",
              background: checked ? "var(--color-accent)" : "var(--color-border-strong)",
              transition: "background var(--motion-base) var(--ease-out)"
            },
            children: /* @__PURE__ */ jsx(
              "span",
              {
                style: {
                  position: "absolute",
                  top: 2,
                  left: checked ? 16 : 2,
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: "#fff",
                  boxShadow: "var(--shadow-1)",
                  transition: "left var(--motion-base) var(--ease-out)"
                }
              }
            )
          }
        ),
        label != null && /* @__PURE__ */ jsx("span", { style: { fontSize: "var(--text-md)", color: "var(--color-text)" }, children: label })
      ]
    }
  );
});
var TONES = {
  neutral: {
    fg: "var(--color-text-secondary)",
    bg: "var(--color-surface-alt)",
    bd: "var(--color-border-strong)"
  },
  accent: {
    fg: "var(--color-accent)",
    bg: "var(--color-accent-soft)",
    bd: "var(--color-accent)"
  },
  success: {
    fg: "var(--color-success)",
    bg: "var(--color-success-soft)",
    bd: "var(--color-success)"
  },
  warning: {
    fg: "var(--color-warning)",
    bg: "var(--color-warning-soft)",
    bd: "var(--color-warning)"
  },
  danger: {
    fg: "var(--color-danger)",
    bg: "var(--color-danger-soft)",
    bd: "var(--color-danger)"
  },
  info: {
    fg: "var(--color-info)",
    bg: "var(--color-info-soft)",
    bd: "var(--color-info)"
  }
};
var Badge = forwardRef(function Badge2({ children, tone = "neutral", solid = false, dot = false, icon, style, ...rest }, ref) {
  const t = TONES[tone];
  const borderHue = t.bd === "var(--color-border-strong)" ? "var(--color-border-strong)" : t.fg;
  const border = solid ? "1px solid transparent" : `1px solid color-mix(in srgb, ${borderHue} 35%, transparent)`;
  const merged = {
    display: "inline-flex",
    alignItems: "center",
    gap: 5,
    height: 19,
    padding: "0 8px",
    borderRadius: "var(--radius-pill)",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-xs)",
    fontWeight: "var(--weight-semibold)",
    lineHeight: 1,
    whiteSpace: "nowrap",
    color: solid ? "#fff" : t.fg,
    background: solid ? t.bd : t.bg,
    border,
    ...style
  };
  return /* @__PURE__ */ jsxs("span", { ref, style: merged, ...rest, children: [
    dot && /* @__PURE__ */ jsx(
      "span",
      {
        style: {
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: solid ? "#fff" : t.fg,
          flex: "0 0 auto"
        }
      }
    ),
    icon && /* @__PURE__ */ jsx(Icon, { name: icon, size: 13 }),
    children
  ] });
});
var TONES2 = {
  neutral: {
    fg: "var(--color-text-secondary)",
    bg: "var(--color-toolbar-pill)",
    bd: "var(--color-border)"
  },
  accent: {
    fg: "var(--color-accent)",
    bg: "var(--color-accent-soft)",
    bd: "color-mix(in srgb, var(--color-accent) 30%, transparent)"
  },
  success: {
    fg: "var(--color-success)",
    bg: "var(--color-success-soft)",
    bd: "color-mix(in srgb, var(--color-success) 30%, transparent)"
  },
  warning: {
    fg: "var(--color-warning)",
    bg: "var(--color-warning-soft)",
    bd: "color-mix(in srgb, var(--color-warning) 35%, transparent)"
  }
};
function pillStyle(t, mono, clickable) {
  return {
    display: "inline-flex",
    alignItems: "center",
    gap: 5,
    height: 22,
    padding: "0 9px",
    borderRadius: "var(--radius-pill)",
    fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)",
    fontSize: "var(--text-sm)",
    fontWeight: "var(--weight-medium)",
    lineHeight: 1,
    whiteSpace: "nowrap",
    color: t.fg,
    background: t.bg,
    border: `1px solid ${t.bd}`,
    cursor: clickable ? "pointer" : "default"
  };
}
var Pill = forwardRef(function Pill2(props, ref) {
  const { tone = "neutral", mono = false, icon, children, style, ...rest } = props;
  const t = TONES2[tone];
  const onClick = props.onClick;
  if (typeof onClick === "function") {
    return /* @__PURE__ */ jsxs(
      "button",
      {
        ref,
        type: "button",
        style: { ...pillStyle(t, mono, true), ...style },
        ...rest,
        children: [
          icon && /* @__PURE__ */ jsx(Icon, { name: icon, size: 15 }),
          children
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxs(
    "span",
    {
      ref,
      style: { ...pillStyle(t, mono, false), ...style },
      ...rest,
      children: [
        icon && /* @__PURE__ */ jsx(Icon, { name: icon, size: 15 }),
        children
      ]
    }
  );
});
var PALETTE = [
  "#0e7490",
  "#6d28d9",
  "#b91c1c",
  "#ea580c",
  "#15803d",
  "#0ea5e9",
  "#db2777",
  "#ca8a04"
];
function colorFor(name) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = h * 31 + name.charCodeAt(i) >>> 0;
  return PALETTE[h % PALETTE.length];
}
function initials(name) {
  const parts = name.trim().split(/\s+/);
  if (!parts[0]) return "?";
  return (parts[0][0] + (parts[1]?.[0] ?? "")).toUpperCase();
}
var Avatar = forwardRef(function Avatar2({ name = "", src, size = 28, active = false, color, style, ...rest }, ref) {
  const bg = color ?? colorFor(name);
  return /* @__PURE__ */ jsx(
    "span",
    {
      ref,
      title: name,
      style: {
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: "50%",
        background: src ? "transparent" : bg,
        color: "#fff",
        fontFamily: "var(--font-sans)",
        fontSize: Math.round(size * 0.4),
        fontWeight: "var(--weight-semibold)",
        lineHeight: 1,
        flex: "0 0 auto",
        boxShadow: active ? "0 0 0 2px var(--color-surface), 0 0 0 4px var(--color-success)" : "0 0 0 2px var(--color-surface)",
        overflow: "hidden",
        ...style
      },
      ...rest,
      children: src ? /* @__PURE__ */ jsx("img", { src, alt: name, style: { width: "100%", height: "100%", objectFit: "cover" } }) : initials(name)
    }
  );
});
var AvatarStack = forwardRef(function AvatarStack2({ people = [], size = 28, max = 4, style }, ref) {
  const shown = people.slice(0, max);
  const extra = people.length - shown.length;
  return /* @__PURE__ */ jsxs("span", { ref, style: { display: "inline-flex", alignItems: "center", ...style }, children: [
    shown.map((p, i) => {
      const props = typeof p === "string" ? { name: p } : p;
      return /* @__PURE__ */ jsx(
        "span",
        {
          style: { marginLeft: i === 0 ? 0 : -size * 0.3, zIndex: shown.length - i },
          children: /* @__PURE__ */ jsx(Avatar, { ...props, size })
        },
        i
      );
    }),
    extra > 0 && /* @__PURE__ */ jsx("span", { style: { marginLeft: -size * 0.3, zIndex: 0 }, children: /* @__PURE__ */ jsx(Avatar, { name: `+${extra}`, color: "var(--color-text-secondary)", size }) })
  ] });
});
var Card = forwardRef(function Card2({
  children,
  accent,
  interactive = false,
  padding = 16,
  style,
  onMouseEnter,
  onMouseLeave,
  ...rest
}, ref) {
  const [hover, setHover] = useState(false);
  const lift = interactive && hover;
  const base = {
    position: "relative",
    background: "var(--color-surface)",
    border: `1px solid ${lift ? accent ?? "var(--color-border-strong)" : "var(--color-border)"}`,
    borderRadius: "var(--radius-lg)",
    boxShadow: lift ? "var(--shadow-2)" : "var(--shadow-1)",
    padding,
    cursor: interactive ? "pointer" : "default",
    transform: lift ? "translateY(-2px)" : "none",
    transition: "transform var(--motion-base) var(--ease-out), box-shadow var(--motion-base) var(--ease-out), border-color var(--motion-base) var(--ease-out)",
    overflow: "hidden"
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      onMouseEnter: (e) => {
        setHover(true);
        onMouseEnter?.(e);
      },
      onMouseLeave: (e) => {
        setHover(false);
        onMouseLeave?.(e);
      },
      style: { ...base, ...style },
      ...rest,
      children: [
        accent && /* @__PURE__ */ jsx(
          "span",
          {
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 3,
              background: accent,
              opacity: lift ? 1 : 0,
              transition: "opacity var(--motion-base) var(--ease-out)"
            }
          }
        ),
        children
      ]
    }
  );
});
var SIZES5 = {
  sm: { h: 16, pad: "0 4px", font: 10, gap: 2 },
  md: { h: 20, pad: "0 6px", font: 11, gap: 3 }
};
var Kbd = forwardRef(function Kbd2({ keys, size = "md", style, ...rest }, ref) {
  const tokens = Array.isArray(keys) ? keys : String(keys).split("+").map((k) => k.trim()).filter(Boolean);
  const s = SIZES5[size];
  const keyStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: s.h,
    height: s.h,
    padding: s.pad,
    fontFamily: "var(--font-mono)",
    fontSize: s.font,
    fontWeight: "var(--weight-medium)",
    lineHeight: 1,
    color: "var(--color-text-secondary)",
    background: "var(--color-surface)",
    border: "1px solid var(--color-border-strong)",
    borderBottomWidth: 2,
    borderRadius: "var(--radius-sm)",
    boxShadow: "var(--shadow-1)",
    whiteSpace: "nowrap"
  };
  return /* @__PURE__ */ jsx(
    "span",
    {
      ref,
      style: { display: "inline-flex", alignItems: "center", gap: s.gap, ...style },
      ...rest,
      children: tokens.map((k, i) => /* @__PURE__ */ jsx("kbd", { style: keyStyle, children: k }, i))
    }
  );
});
function Dialog({
  open = true,
  title,
  icon,
  children,
  footer,
  width = 440,
  onClose,
  style
}) {
  if (!open) return null;
  const stop = (e) => e.stopPropagation();
  return /* @__PURE__ */ jsx(
    "div",
    {
      role: "presentation",
      className: "cs-anim-scrim",
      onClick: onClose,
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 1e3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--color-scrim)",
        backdropFilter: "blur(3px) saturate(1.1)",
        WebkitBackdropFilter: "blur(3px) saturate(1.1)",
        padding: 24
      },
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          role: "dialog",
          "aria-modal": "true",
          "aria-label": typeof title === "string" ? title : void 0,
          className: "cs-anim-rise",
          onClick: stop,
          style: {
            width,
            maxWidth: "100%",
            maxHeight: "88vh",
            display: "flex",
            flexDirection: "column",
            background: "var(--color-surface-raised)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-xl)",
            boxShadow: "var(--shadow-4)",
            overflow: "hidden",
            ...style
          },
          children: [
            /* @__PURE__ */ jsxs(
              "div",
              {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 12px 12px 16px",
                  borderBottom: "1px solid var(--color-divider)"
                },
                children: [
                  icon && /* @__PURE__ */ jsx(Icon, { name: icon, size: "lg", style: { color: "var(--color-accent)" } }),
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      style: {
                        flex: 1,
                        fontFamily: "var(--font-sans)",
                        fontSize: "var(--text-lg)",
                        fontWeight: "var(--weight-semibold)",
                        color: "var(--color-text)"
                      },
                      children: title
                    }
                  ),
                  onClose && /* @__PURE__ */ jsx(
                    "button",
                    {
                      type: "button",
                      "aria-label": "Close",
                      onClick: onClose,
                      style: {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 28,
                        height: 28,
                        border: 0,
                        background: "transparent",
                        borderRadius: "var(--radius-md)",
                        cursor: "pointer",
                        color: "var(--color-text-secondary)"
                      },
                      children: /* @__PURE__ */ jsx(Icon, { name: "close", size: "lg" })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                style: {
                  padding: 16,
                  overflowY: "auto",
                  fontFamily: "var(--font-sans)",
                  fontSize: "var(--text-md)",
                  color: "var(--color-text-secondary)",
                  lineHeight: "var(--leading-normal)"
                },
                children
              }
            ),
            footer && /* @__PURE__ */ jsx(
              "div",
              {
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: 8,
                  padding: "12px 16px",
                  borderTop: "1px solid var(--color-divider)",
                  background: "var(--color-surface)"
                },
                children: footer
              }
            )
          ]
        }
      )
    }
  );
}
function Menu({ items, width = 232, style }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      role: "menu",
      className: "cs-anim-pop",
      style: {
        width,
        padding: "5px 0",
        background: "var(--color-surface-raised)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow-3)",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-base)",
        color: "var(--color-text)",
        ...style
      },
      children: items.map((entry, i) => {
        if ("divider" in entry) {
          return /* @__PURE__ */ jsx(
            "div",
            {
              style: { height: 1, background: "var(--color-divider)", margin: "4px 0" }
            },
            i
          );
        }
        if ("header" in entry) {
          return /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                padding: "6px 12px 2px",
                fontSize: "var(--text-xs)",
                fontWeight: "var(--weight-semibold)",
                textTransform: "uppercase",
                letterSpacing: "var(--tracking-wide)",
                color: "var(--color-text-muted)"
              },
              children: entry.header
            },
            i
          );
        }
        return /* @__PURE__ */ jsx(MenuItemView, { item: entry }, i);
      })
    }
  );
}
function MenuItemView({ item }) {
  const [hover, setHover] = useState(false);
  const fg = item.danger ? "var(--color-danger)" : "var(--color-text)";
  const iconName = item.checked ? "check" : item.icon ?? "check";
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      role: "menuitem",
      disabled: item.disabled,
      onClick: item.onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        width: "100%",
        height: 30,
        padding: "0 12px",
        border: 0,
        background: hover && !item.disabled ? "var(--color-hover)" : "transparent",
        color: fg,
        font: "inherit",
        textAlign: "left",
        cursor: item.disabled ? "not-allowed" : "pointer",
        opacity: item.disabled ? 0.45 : 1
      },
      children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            style: {
              width: 18,
              display: "inline-flex",
              visibility: item.icon || item.checked ? "visible" : "hidden",
              color: item.danger ? "var(--color-danger)" : "var(--color-text-secondary)"
            },
            children: /* @__PURE__ */ jsx(Icon, { name: iconName, size: "md" })
          }
        ),
        /* @__PURE__ */ jsx("span", { style: { flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }, children: item.label }),
        item.shortcut && /* @__PURE__ */ jsx(
          "span",
          {
            style: {
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-xs)",
              color: "var(--color-text-muted)"
            },
            children: item.shortcut
          }
        )
      ]
    }
  );
}
var PLACEMENTS = {
  top: { bottom: "100%", left: "50%", transform: "translateX(-50%)", marginBottom: 6 },
  bottom: { top: "100%", left: "50%", transform: "translateX(-50%)", marginTop: 6 },
  left: { right: "100%", top: "50%", transform: "translateY(-50%)", marginRight: 6 },
  right: { left: "100%", top: "50%", transform: "translateY(-50%)", marginLeft: 6 }
};
function Tooltip({
  label,
  shortcut,
  placement = "top",
  children,
  style
}) {
  const [show, setShow] = useState(false);
  const pos = PLACEMENTS[placement];
  return /* @__PURE__ */ jsxs(
    "span",
    {
      style: { position: "relative", display: "inline-flex" },
      onMouseEnter: () => setShow(true),
      onMouseLeave: () => setShow(false),
      onFocus: () => setShow(true),
      onBlur: () => setShow(false),
      children: [
        children,
        show && /* @__PURE__ */ jsxs(
          "span",
          {
            role: "tooltip",
            className: "cs-anim-fade",
            style: {
              position: "absolute",
              zIndex: 1200,
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "4px 8px",
              whiteSpace: "nowrap",
              background: "#201f1e",
              color: "#fff",
              borderRadius: "var(--radius-md)",
              boxShadow: "var(--shadow-2)",
              fontFamily: "var(--font-sans)",
              fontSize: "var(--text-sm)",
              fontWeight: "var(--weight-medium)",
              lineHeight: 1.3,
              pointerEvents: "none",
              ...pos,
              ...style
            },
            children: [
              label,
              shortcut && /* @__PURE__ */ jsx(
                "span",
                {
                  style: {
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-xs)",
                    color: "rgba(255,255,255,0.65)"
                  },
                  children: shortcut
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function Tabs({
  tabs,
  value,
  defaultValue,
  onChange,
  style
}) {
  const [internal, setInternal] = useState(defaultValue ?? tabs[0]?.value);
  const active = value !== void 0 ? value : internal;
  const select = (v) => {
    if (value === void 0) setInternal(v);
    onChange?.(v);
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      role: "tablist",
      style: {
        display: "flex",
        alignItems: "stretch",
        gap: 2,
        borderBottom: "1px solid var(--color-divider)",
        ...style
      },
      children: tabs.map((t) => /* @__PURE__ */ jsx(Tab, { tab: t, active: t.value === active, onClick: () => select(t.value) }, t.value))
    }
  );
}
function Tab({
  tab,
  active,
  onClick
}) {
  const [hover, setHover] = useState(false);
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      role: "tab",
      "aria-selected": active,
      onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        height: 34,
        padding: "0 12px",
        border: 0,
        background: "transparent",
        font: "inherit",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-base)",
        fontWeight: active ? "var(--weight-semibold)" : "var(--weight-medium)",
        color: active ? "var(--color-accent)" : hover ? "var(--color-text)" : "var(--color-text-secondary)",
        cursor: "pointer",
        transition: "color var(--motion-fast) var(--ease-out)"
      },
      children: [
        tab.icon && /* @__PURE__ */ jsx(Icon, { name: tab.icon, size: "md" }),
        tab.label,
        /* @__PURE__ */ jsx(
          "span",
          {
            style: {
              position: "absolute",
              left: 6,
              right: 6,
              bottom: -1,
              height: 2,
              borderRadius: "2px 2px 0 0",
              background: "var(--color-accent)",
              opacity: active ? 1 : 0,
              transition: "opacity var(--motion-fast) var(--ease-out)"
            }
          }
        )
      ]
    }
  );
}

export { Avatar, AvatarStack, Badge, Button, Card, Checkbox, Dialog, Icon, IconButton, Input, Kbd, Menu, Pill, Select, Switch, Tabs, Tooltip };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map