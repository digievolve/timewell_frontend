import Link from "next/link";
import type { ButtonVariant } from "@/types";

interface ButtonProps extends ButtonVariant {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  external?: boolean;
}

const variantClasses: Record<string, string> = {
  primary:   "bg-primary-500 hover:bg-primary-600 text-white shadow-blue hover:shadow-lg hover:-translate-y-0.5",
  secondary: "bg-secondary-500 hover:bg-secondary-600 text-white shadow-green hover:shadow-lg hover:-translate-y-0.5",
  outline:   "border-2 border-primary-500 text-primary-600 hover:bg-primary-50",
  ghost:     "text-primary-600 hover:bg-primary-50",
};

const sizeClasses: Record<string, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  children,
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  variant = "primary",
  size = "md",
  external,
}: ButtonProps) {
  const base = `inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={base}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base}>
      {children}
    </button>
  );
}
