import { memo, SVGProps } from 'react';

const Star1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8.9866 0L11.0042 5.52786H17.5334L12.2512 8.94427L14.2688 14.4721L8.9866 11.0557L3.70441 14.4721L5.72202 8.94427L0.439836 5.52786H6.96898L8.9866 0Z'
      fill='#42A7C3'
    />
  </svg>
);

const Memo = memo(Star1Icon);
export { Memo as Star1Icon };
