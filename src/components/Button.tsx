import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
} from "react";

type ButtonVariant = "primary" | "secondary" | "inverted" | "outlined";

type SharedProps = {
  variant?: ButtonVariant;
  className?: string;
};

type ButtonProps =
  | (SharedProps &
      Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string })
  | (SharedProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never });

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-secondary text-white hover:bg-secondary/90",
  secondary: "bg-white text-primary hover:bg-surface-subtle",
  inverted: "bg-primary text-white hover:bg-slate-800",
  outlined:
    "border border-slate-300 bg-white text-primary hover:bg-surface-subtle",
};

export default function Button({
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  const styles = `inline-flex min-h-11 items-center justify-center gap-2 rounded-control px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:pointer-events-none disabled:opacity-50 ${variantStyles[variant]} ${className}`;

  if ("href" in props && typeof props.href === "string") {
    return <a className={styles} {...props} />;
  }

  const { type = "button", ...buttonProps } = props;
  return <button className={styles} type={type} {...buttonProps} />;
}
