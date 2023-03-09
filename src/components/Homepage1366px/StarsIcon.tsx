import { memo, SVGProps } from 'react';

const StarsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 213 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M19.0892 3.42742C19.3886 2.50611 20.692 2.50611 20.9914 3.42742L24.2275 13.3872C24.3614 13.7992 24.7453 14.0782 25.1785 14.0782H35.6509C36.6196 14.0782 37.0224 15.3178 36.2387 15.8872L27.7664 22.0427C27.4159 22.2973 27.2692 22.7487 27.4031 23.1607L30.6392 33.1205C30.9386 34.0418 29.8841 34.8079 29.1004 34.2385L20.6281 28.083C20.2776 27.8284 19.803 27.8284 19.4525 28.083L10.9802 34.2385C10.1965 34.8079 9.14202 34.0418 9.44137 33.1205L12.6775 23.1607C12.8114 22.7487 12.6647 22.2973 12.3142 22.0427L3.84194 15.8872C3.05822 15.3178 3.461 14.0782 4.42972 14.0782H14.9021C15.3353 14.0782 15.7192 13.7992 15.8531 13.3872L19.0892 3.42742Z'
      fill='#3282AD'
    />
    <path
      d='M62.3192 3.4273C62.6185 2.50599 63.922 2.50598 64.2213 3.4273L67.4574 13.3871C67.5913 13.7991 67.9753 14.0781 68.4085 14.0781H78.8808C79.8496 14.0781 80.2523 15.3177 79.4686 15.8871L70.9963 22.0426C70.6458 22.2972 70.4992 22.7486 70.633 23.1606L73.8692 33.1204C74.1685 34.0417 73.114 34.8078 72.3303 34.2384L63.858 28.0829C63.5076 27.8283 63.033 27.8283 62.6825 28.0829L54.2102 34.2384C53.4265 34.8078 52.372 34.0417 52.6713 33.1204L55.9075 23.1606C56.0413 22.7486 55.8947 22.2972 55.5442 22.0426L47.0719 15.8871C46.2882 15.3177 46.691 14.0781 47.6597 14.0781H58.132C58.5652 14.0781 58.9492 13.7991 59.0831 13.3871L62.3192 3.4273Z'
      fill='#3282AD'
    />
    <path
      d='M105.55 3.4273C105.849 2.50599 107.152 2.50598 107.452 3.4273L110.688 13.3871C110.822 13.7991 111.206 14.0781 111.639 14.0781H122.111C123.08 14.0781 123.483 15.3177 122.699 15.8871L114.227 22.0426C113.876 22.2972 113.73 22.7486 113.863 23.1606L117.1 33.1204C117.399 34.0417 116.344 34.8078 115.561 34.2384L107.088 28.0829C106.738 27.8283 106.263 27.8283 105.913 28.0829L97.4405 34.2384C96.6568 34.8078 95.6023 34.0417 95.9017 33.1204L99.1378 23.1606C99.2717 22.7486 99.125 22.2972 98.7746 22.0426L90.3023 15.8871C89.5185 15.3177 89.9213 14.0781 90.89 14.0781H101.362C101.796 14.0781 102.18 13.7991 102.313 13.3871L105.55 3.4273Z'
      fill='#3282AD'
    />
    <path
      d='M148.779 3.4273C149.079 2.50599 150.382 2.50598 150.681 3.4273L153.918 13.3871C154.051 13.7991 154.435 14.0781 154.869 14.0781H165.341C166.31 14.0781 166.712 15.3177 165.929 15.8871L157.456 22.0426C157.106 22.2972 156.959 22.7486 157.093 23.1606L160.329 33.1204C160.629 34.0417 159.574 34.8078 158.79 34.2384L150.318 28.0829C149.968 27.8283 149.493 27.8283 149.143 28.0829L140.67 34.2384C139.887 34.8078 138.832 34.0417 139.131 33.1204L142.368 23.1606C142.501 22.7486 142.355 22.2972 142.004 22.0426L133.532 15.8871C132.748 15.3177 133.151 14.0781 134.12 14.0781H144.592C145.025 14.0781 145.409 13.7991 145.543 13.3871L148.779 3.4273Z'
      fill='#3282AD'
    />
    <path
      d='M192.009 3.4273C192.309 2.50599 193.612 2.50598 193.911 3.4273L197.147 13.3871C197.281 13.7991 197.665 14.0781 198.098 14.0781H208.571C209.54 14.0781 209.942 15.3177 209.159 15.8871L200.686 22.0426C200.336 22.2972 200.189 22.7486 200.323 23.1606L203.559 33.1204C203.858 34.0417 202.804 34.8078 202.02 34.2384L193.548 28.0829C193.198 27.8283 192.723 27.8283 192.372 28.0829L183.9 34.2384C183.116 34.8078 182.062 34.0417 182.361 33.1204L185.597 23.1606C185.731 22.7486 185.585 22.2972 185.234 22.0426L176.762 15.8871C175.978 15.3177 176.381 14.0781 177.35 14.0781H187.822C188.255 14.0781 188.639 13.7991 188.773 13.3871L192.009 3.4273Z'
      fill='#3282AD'
    />
  </svg>
);

const Memo = memo(StarsIcon);
export { Memo as StarsIcon };
