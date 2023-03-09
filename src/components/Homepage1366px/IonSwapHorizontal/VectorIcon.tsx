import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M10.25 0.25L15.5 5.5L10.25 10.75M14.697 5.5H0.5M5.75 19.75L0.5 14.5L5.75 9.25M1.34375 14.5H15.5'
      stroke='black'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
