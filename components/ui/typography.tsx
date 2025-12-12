import { ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export const H1 = ({ children, className = "" }: TypographyProps) => (
  <h1
    className={`text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl md:text-6xl ${className}`}
  >
    {children}
  </h1>
);

export const H2 = ({ children, className = "" }: TypographyProps) => (
  <h2
    className={`text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl ${className}`}
  >
    {children}
  </h2>
);

export const H3 = ({ children, className = "" }: TypographyProps) => (
  <h3 className={`text-sm font-semibold text-slate-50 ${className}`}>
    {children}
  </h3>
);

export const H4 = ({ children, className = "" }: TypographyProps) => (
  <h4 className={`text-base font-semibold text-slate-50 ${className}`}>
    {children}
  </h4>
);

export const H5 = ({ children, className = "" }: TypographyProps) => (
  <h5 className={`text-sm font-medium text-slate-50 ${className}`}>
    {children}
  </h5>
);

export const H6 = ({ children, className = "" }: TypographyProps) => (
  <h6 className={`text-xs font-medium text-slate-50 ${className}`}>
    {children}
  </h6>
);

export const P = ({ children, className = "" }: TypographyProps) => (
  <p className={`text-sm text-slate-400 sm:text-base ${className}`}>
    {children}
  </p>
);

export const PSmall = ({ children, className = "" }: TypographyProps) => (
  <p className={`text-sm text-slate-400 ${className}`}>{children}</p>
);

export const PXSmall = ({ children, className = "" }: TypographyProps) => (
  <p className={`text-xs text-slate-400 ${className}`}>{children}</p>
);

export const Badge = ({ children, className = "" }: TypographyProps) => (
  <p
    className={`inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-blue-300 ${className}`}
  >
    {children}
  </p>
);

export const Label = ({ children, className = "" }: TypographyProps) => (
  <p
    className={`text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 ${className}`}
  >
    {children}
  </p>
);

// Typography map for dynamic rendering
export const TypographyMap = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: P,
  pSmall: PSmall,
  pXSmall: PXSmall,
  badge: Badge,
  label: Label,
};

export type TypographyType = keyof typeof TypographyMap;
