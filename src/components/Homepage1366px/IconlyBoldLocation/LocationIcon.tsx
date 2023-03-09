import { memo, SVGProps } from 'react';

const LocationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.5 8.31776C0.5 3.71789 4.34388 0 8.99345 0C13.6561 0 17.5 3.71789 17.5 8.31776C17.5 10.6357 16.657 12.7876 15.2695 14.6116C13.7388 16.6235 11.8522 18.3765 9.72854 19.7524C9.24251 20.0704 8.80387 20.0944 8.27045 19.7524C6.13474 18.3765 4.24809 16.6235 2.7305 14.6116C1.34198 12.7876 0.5 10.6357 0.5 8.31776ZM6.19423 8.57675C6.19423 10.1177 7.45166 11.3297 8.99345 11.3297C10.5362 11.3297 11.8058 10.1177 11.8058 8.57675C11.8058 7.0478 10.5362 5.77683 8.99345 5.77683C7.45166 5.77683 6.19423 7.0478 6.19423 8.57675Z'
      fill='#130F26'
    />
  </svg>
);

const Memo = memo(LocationIcon);
export { Memo as LocationIcon };
