import { memo, SVGProps } from 'react';

const IcBaselineFlightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6.66667 17.5L8.33333 17.5L12.5 10.8333L17.0833 10.8333C17.775 10.8333 18.3333 10.275 18.3333 9.58334C18.3333 8.89167 17.775 8.33334 17.0833 8.33334L12.5 8.33334L8.33333 1.66667L6.66667 1.66667L8.75 8.33334L4.16667 8.33334L2.91667 6.66667L1.66667 6.66667L2.5 9.58334L1.66667 12.5L2.91667 12.5L4.16667 10.8333L8.75 10.8333L6.66667 17.5Z'
      fill='#42A7C3'
    />
  </svg>
);

const Memo = memo(IcBaselineFlightIcon);
export { Memo as IcBaselineFlightIcon };
