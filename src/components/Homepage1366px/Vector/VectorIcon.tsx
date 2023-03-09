import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 64 69' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M48.4201 54.2344L50.5917 49.5899L38.3767 28.8322L44.3489 16.0598C45.2501 14.1323 44.4999 11.8104 42.6693 10.8614C40.8387 9.91249 38.6335 10.7024 37.7323 12.6298L31.7602 25.4022L8.68673 27.867L6.51505 32.5115L26.8739 35.8524L20.9017 48.6248L14.8619 49.8215L13.2332 53.3049L22.0383 54.9842L28.6719 61.3081L30.3006 57.8247L27.5183 52.0547L33.4904 39.2823L48.4201 54.2344Z'
      fill='#42A7C3'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
