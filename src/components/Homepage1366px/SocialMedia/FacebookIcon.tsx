import { memo, SVGProps } from 'react';

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 39 39' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M39 19.8544C39 9.35888 30.27 0.851074 19.5024 0.851074C8.73003 0.853435 0 9.35888 0 19.8567C0 29.3395 7.13123 37.2005 16.4511 38.6263V25.3476H11.5036V19.8567H16.4559V15.6666C16.4559 10.9051 19.3684 8.27534 23.8211 8.27534C25.9561 8.27534 28.1862 8.64596 28.1862 8.64596V13.3201H25.727C23.3069 13.3201 22.5514 14.786 22.5514 16.2898V19.8544H27.9571L27.0943 25.3452H22.5489V38.6239C31.8688 37.1981 39 29.3371 39 19.8544Z'
      fill='#3FA0BB'
    />
  </svg>
);

const Memo = memo(FacebookIcon);
export { Memo as FacebookIcon };
