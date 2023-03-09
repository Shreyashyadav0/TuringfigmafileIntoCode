import { memo, SVGProps } from 'react';

const Star1Icon7 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M12.4032 0L15.1879 6.72452L24.1993 6.72452L16.9089 10.8805L19.6936 17.605L12.4032 13.449L5.11277 17.605L7.89746 10.8805L0.607055 6.72452L9.61849 6.72452L12.4032 0Z'
      fill='#42A7C3'
    />
  </svg>
);

const Memo = memo(Star1Icon7);
export { Memo as Star1Icon7 };
