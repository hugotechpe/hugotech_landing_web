import * as React from "react";

export default function FacebookIcon({
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
      <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07C2 17.09 5.66 21.23 10.44 22v-7h-2.5v-3h2.5V9.5c0-2.47 1.47-3.84 3.72-3.84 1.08 0 2.21.19 2.21.19v2.43h-1.24c-1.22 0-1.6.76-1.6 1.54V12h2.73l-.44 3h-2.29v7c4.78-.77 8.44-4.91 8.44-9.93z" />
    </svg>
  );
}
