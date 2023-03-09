import { memo, SVGProps } from 'react';

const Ellipse26Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={16} cy={16} r={16} fill='#3282AD' />
  </svg>
);

const Memo = memo(Ellipse26Icon);
export { Memo as Ellipse26Icon };
