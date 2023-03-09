import { memo, SVGProps } from 'react';

const Star1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 27 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M13.4799 0L16.5063 8.2918H26.3L18.3768 13.4164L21.4032 21.7082L13.4799 16.5836L5.55661 21.7082L8.58303 13.4164L0.659753 8.2918H10.4535L13.4799 0Z'
      fill='#42A7C3'
    />
  </svg>
);

const Memo = memo(Star1Icon);
export { Memo as Star1Icon };
