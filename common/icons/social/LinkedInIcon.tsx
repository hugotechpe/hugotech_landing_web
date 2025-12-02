import * as React from "react";

export default function LinkedInIcon({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 7h5v14H0zM8 7h4.66v2.2h.07c.65-1.24 2.24-2.55 4.61-2.55 4.93 0 5.84 3.24 5.84 7.45V21H18v-6.36c0-1.52-.03-3.48-2.12-3.48-2.12 0-2.44 1.66-2.44 3.37V21H8z" />
    </svg>
  );
}
