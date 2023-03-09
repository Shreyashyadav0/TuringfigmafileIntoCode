import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 9 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M4.243 5.657L0 1.414L1.415 0L4.243 2.829L7.071 0L8.486 1.414L4.243 5.657Z' fill='black' />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
