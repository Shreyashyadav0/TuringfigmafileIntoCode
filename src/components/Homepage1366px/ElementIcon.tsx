import { memo, SVGProps } from 'react';

const ElementIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 538 408' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g opacity={0.25}>
      <mask
        id='mask0_405_632'
        style={{
          maskType: 'alpha',
        }}
        maskUnits='userSpaceOnUse'
        x={-1}
        y={-1}
        width={539}
        height={410}
      >
        <rect
          x={537.053}
          width={407.678}
          height={536.857}
          transform='rotate(90 537.053 0)'
          fill='url(#paint0_linear_405_632)'
          stroke='#6246E5'
        />
      </mask>
      <g mask='url(#mask0_405_632)'>
        <ellipse
          cx={145.59}
          cy={379.674}
          rx={142.538}
          ry={140.969}
          transform='rotate(90 145.59 379.674)'
          stroke='#E5E5E5'
        />
        <ellipse
          cx={160.428}
          cy={368.42}
          rx={159.418}
          ry={157.663}
          transform='rotate(90 160.428 368.42)'
          stroke='#E5E5E5'
        />
        <ellipse
          cx={172.486}
          cy={359.044}
          rx={174.422}
          ry={172.501}
          transform='rotate(90 172.486 359.044)'
          stroke='#E5E5E5'
        />
        <ellipse
          cx={190.106}
          cy={349.666}
          rx={187.55}
          ry={185.486}
          transform='rotate(90 190.106 349.666)'
          stroke='#E5E5E5'
        />
        <ellipse
          cx={207.264}
          cy={340.757}
          rx={200.21}
          ry={198.006}
          transform='rotate(90 207.264 340.757)'
          stroke='#E5E5E5'
        />
        <ellipse
          cx={226.74}
          cy={325.754}
          rx={219.903}
          ry={217.482}
          transform='rotate(90 226.74 325.754)'
          stroke='#E5E5E5'
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id='paint0_linear_405_632'
        x1={826.194}
        y1={15.0621}
        x2={549.966}
        y2={543.606}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#747DEF' />
        <stop offset={1} stopColor='#5E3BE1' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(ElementIcon);
export { Memo as ElementIcon };
