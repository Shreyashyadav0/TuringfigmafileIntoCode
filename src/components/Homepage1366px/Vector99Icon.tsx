import { memo, SVGProps } from 'react';

const Vector99Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 2077 1570' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      opacity={0.6}
      d='M2077 303.436C1768.71 353.944 1542.87 -55.2308 1274.49 6.32649C966.195 77.0382 906.853 671.404 870.559 1056.9C817.692 1618.44 135.17 1762.83 21.1199 1269.63C-40.4396 1003.42 21.1199 695.619 359.113 749.099C704.508 803.75 1905.33 816.84 2045.52 1137.12'
      stroke='url(#paint0_linear_405_489)'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeDasharray='32 32'
    />
    <defs>
      <linearGradient
        id='paint0_linear_405_489'
        x1={884.815}
        y1={1515.05}
        x2={1338.58}
        y2={-246.561}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0.237279} stopColor='#42A7C3' />
        <stop offset={1} stopColor='#8ADBF0' stopOpacity={0.54} />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Vector99Icon);
export { Memo as Vector99Icon };
