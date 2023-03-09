import { memo, SVGProps } from 'react';

const VectorIcon5 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8.09375 14.2388C12.023 14.2388 15.2083 11.1683 15.2083 7.38078C15.2083 3.59323 12.023 0.522803 8.09375 0.522803C4.16448 0.522803 0.979172 3.59323 0.979172 7.38078C0.979172 11.1683 4.16448 14.2388 8.09375 14.2388Z'
      fill='#3FA0BB'
    />
  </svg>
);

const Memo = memo(VectorIcon5);
export { Memo as VectorIcon5 };
