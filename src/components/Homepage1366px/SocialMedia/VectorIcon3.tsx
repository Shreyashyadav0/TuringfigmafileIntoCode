import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M7.5 14.9718C11.6421 14.9718 15 11.7194 15 7.70734C15 3.69528 11.6421 0.442871 7.5 0.442871C3.35786 0.442871 0 3.69528 0 7.70734C0 11.7194 3.35786 14.9718 7.5 14.9718Z'
      fill='#3FA0BB'
    />
  </svg>
);

const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
