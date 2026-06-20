import * as react from 'react';
import { HTMLAttributes, ButtonHTMLAttributes, ReactNode, InputHTMLAttributes, SelectHTMLAttributes, CSSProperties } from 'react';

type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
interface IconProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
    /** Material Symbols Outlined ligature name (e.g. `format_bold`, `cloud_done`). */
    name: string;
    /** Pixel size or named scale. Defaults to `md` (18px). */
    size?: IconSize;
    /** Filled variant. The icon font is variable; `filled` ramps the FILL axis to 1. */
    filled?: boolean;
    /** Adjust the weight axis (100..700). Defaults to 400. */
    weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
}
/**
 * Material Symbols Outlined ligature icon. Pass the ligature name (e.g.
 * `format_bold`) and the icon font renders the glyph in-place. Requires the
 * design system tokens stylesheet (`@schnsrw/design-system/tokens.css`) to
 * have been imported, which pulls the variable icon font from Google Fonts.
 */
declare const Icon: react.ForwardRefExoticComponent<IconProps & react.RefAttributes<HTMLSpanElement>>;

type ButtonVariant = 'primary' | 'secondary' | 'subtle' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';
interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    /** Leading Material Symbols ligature name. */
    icon?: string;
    /** Trailing Material Symbols ligature name. */
    iconRight?: string;
    /** Stretch to fill its container. */
    full?: boolean;
    /** Defaults to `'button'`. */
    type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
    children?: ReactNode;
}
declare const Button: react.ForwardRefExoticComponent<ButtonProps & react.RefAttributes<HTMLButtonElement>>;

type IconButtonSize = 'sm' | 'md' | 'lg';
interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    /** Material Symbols Outlined ligature name. */
    icon: string;
    /** Accessible label — surfaced as `aria-label` and `title`. */
    label: string;
    size?: IconButtonSize;
    /** When true the button paints as a toggled-on formatting control. */
    pressed?: boolean;
}
declare const IconButton: react.ForwardRefExoticComponent<IconButtonProps & react.RefAttributes<HTMLButtonElement>>;

type InputSize = 'sm' | 'md';
interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: ReactNode;
    hint?: ReactNode;
    /** Leading Material Symbols ligature name. */
    icon?: string;
    size?: InputSize;
    invalid?: boolean;
    full?: boolean;
}
declare const Input: react.ForwardRefExoticComponent<InputProps & react.RefAttributes<HTMLInputElement>>;

type SelectSize = 'sm' | 'md';
interface SelectOption {
    value: string;
    label: string;
}
interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
    options?: Array<SelectOption | string>;
    label?: ReactNode;
    size?: SelectSize;
    full?: boolean;
    width?: number | string;
    containerStyle?: CSSProperties;
}
declare const Select: react.ForwardRefExoticComponent<SelectProps & react.RefAttributes<HTMLSelectElement>>;

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
    label?: ReactNode;
    hint?: ReactNode;
    indeterminate?: boolean;
}
declare const Checkbox: react.ForwardRefExoticComponent<CheckboxProps & react.RefAttributes<HTMLInputElement>>;

interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
    label?: ReactNode;
}
declare const Switch: react.ForwardRefExoticComponent<SwitchProps & react.RefAttributes<HTMLInputElement>>;

type BadgeTone = 'neutral' | 'accent' | 'success' | 'warning' | 'danger' | 'info';
interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    tone?: BadgeTone;
    /** Filled capsule with white text instead of tinted fill. */
    solid?: boolean;
    /** Leading status dot. */
    dot?: boolean;
    /** Leading Material Symbols ligature name. */
    icon?: string;
    children?: ReactNode;
}
declare const Badge: react.ForwardRefExoticComponent<BadgeProps & react.RefAttributes<HTMLSpanElement>>;

type PillTone = 'neutral' | 'accent' | 'success' | 'warning';
interface BasePillProps {
    tone?: PillTone;
    /** Render text in JetBrains Mono — used for cell addresses / version chips. */
    mono?: boolean;
    /** Leading Material Symbols ligature name. */
    icon?: string;
    children?: ReactNode;
}
type StaticPillProps = BasePillProps & Omit<HTMLAttributes<HTMLSpanElement>, 'children'>;
type ButtonPillProps = BasePillProps & {
    onClick: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;
type PillProps = StaticPillProps | ButtonPillProps;
declare const Pill: react.ForwardRefExoticComponent<PillProps & react.RefAttributes<HTMLElement>>;

interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
    name?: string;
    src?: string;
    size?: number;
    /** Adds the green "active now" ring used for live co-editing peers. */
    active?: boolean;
    /** Override the deterministic palette colour. */
    color?: string;
}
declare const Avatar: react.ForwardRefExoticComponent<AvatarProps & react.RefAttributes<HTMLSpanElement>>;

type AvatarStackPerson = string | (Omit<AvatarProps, 'size'> & {
    name: string;
});
interface AvatarStackProps {
    people?: AvatarStackPerson[];
    size?: number;
    /** Maximum avatars to render; the remainder collapses into a `+N` chip. */
    max?: number;
    style?: CSSProperties;
}
declare const AvatarStack: react.ForwardRefExoticComponent<AvatarStackProps & react.RefAttributes<HTMLSpanElement>>;

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    /** Coloured top strip revealed on hover (e.g. file-type colour bar). */
    accent?: string;
    /** Lift + shadow on hover. */
    interactive?: boolean;
    padding?: number | string;
    children?: ReactNode;
}
declare const Card: react.ForwardRefExoticComponent<CardProps & react.RefAttributes<HTMLDivElement>>;

type KbdSize = 'sm' | 'md';
interface KbdProps extends HTMLAttributes<HTMLSpanElement> {
    /** A combo string ("Ctrl+Shift+L") or an explicit token array. */
    keys: string | string[];
    size?: KbdSize;
}
declare const Kbd: react.ForwardRefExoticComponent<KbdProps & react.RefAttributes<HTMLSpanElement>>;

interface DialogProps {
    open?: boolean;
    title?: ReactNode;
    /** Leading Material Symbols ligature name shown beside the title. */
    icon?: string;
    children?: ReactNode;
    /** Right-aligned footer slot (typically a button row). */
    footer?: ReactNode;
    width?: number | string;
    onClose?: () => void;
    style?: CSSProperties;
}
declare function Dialog({ open, title, icon, children, footer, width, onClose, style, }: DialogProps): react.JSX.Element | null;

interface MenuItem {
    label?: ReactNode;
    /** Material Symbols ligature name. */
    icon?: string;
    /** Shortcut chip rendered in JetBrains Mono, right-aligned. */
    shortcut?: string;
    danger?: boolean;
    checked?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}
interface MenuDivider {
    divider: true;
}
interface MenuHeader {
    header: string;
}
type MenuEntry = MenuItem | MenuDivider | MenuHeader;
interface MenuProps {
    items: MenuEntry[];
    width?: number | string;
    style?: CSSProperties;
}
declare function Menu({ items, width, style }: MenuProps): react.JSX.Element;

type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';
interface TooltipProps {
    label: ReactNode;
    /** Optional keyboard shortcut shown in JetBrains Mono next to the label. */
    shortcut?: string;
    placement?: TooltipPlacement;
    children?: ReactNode;
    style?: CSSProperties;
}
declare function Tooltip({ label, shortcut, placement, children, style, }: TooltipProps): react.JSX.Element;

interface TabDescriptor<V extends string = string> {
    value: V;
    label: string;
    /** Material Symbols ligature name. */
    icon?: string;
}
interface TabsProps<V extends string = string> {
    tabs: TabDescriptor<V>[];
    value?: V;
    defaultValue?: V;
    onChange?: (value: V) => void;
    style?: CSSProperties;
}
declare function Tabs<V extends string = string>({ tabs, value, defaultValue, onChange, style, }: TabsProps<V>): react.JSX.Element;

export { Avatar, type AvatarProps, AvatarStack, type AvatarStackPerson, type AvatarStackProps, Badge, type BadgeProps, type BadgeTone, Button, type ButtonProps, type ButtonSize, type ButtonVariant, Card, type CardProps, Checkbox, type CheckboxProps, Dialog, type DialogProps, Icon, IconButton, type IconButtonProps, type IconButtonSize, type IconProps, type IconSize, Input, type InputProps, type InputSize, Kbd, type KbdProps, type KbdSize, Menu, type MenuDivider, type MenuEntry, type MenuHeader, type MenuItem, type MenuProps, Pill, type PillProps, type PillTone, Select, type SelectOption, type SelectProps, type SelectSize, Switch, type SwitchProps, type TabDescriptor, Tabs, type TabsProps, Tooltip, type TooltipPlacement, type TooltipProps };
