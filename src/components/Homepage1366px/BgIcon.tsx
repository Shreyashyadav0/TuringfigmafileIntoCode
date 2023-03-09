import { memo, SVGProps } from 'react';

const BgIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 386 371' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={359.024} cy={272.484} rx={24.5451} ry={24.5377} fill='url(#paint0_linear_405_494)' />
    <g filter='url(#filter0_b_405_494)'>
      <ellipse
        cx={200.844}
        cy={185.511}
        rx={184.632}
        ry={184.576}
        stroke='url(#paint1_radial_405_494)'
        strokeWidth={80}
      />
    </g>
    <ellipse cx={35.4142} cy={137.867} rx={34.4314} ry={34.421} fill='url(#paint2_linear_405_494)' />
    <g filter='url(#filter1_b_405_494)'>
      <ellipse
        cx={200.844}
        cy={184.763}
        rx={149.5}
        ry={149.455}
        stroke='url(#paint3_radial_405_494)'
        strokeOpacity={0.49}
        strokeWidth={60}
      />
    </g>
    <ellipse cx={186.844} cy={184.762} rx={119.6} ry={119.564} stroke='url(#paint4_radial_405_494)' strokeWidth={80} />
    <ellipse cx={285.707} cy={30.5146} rx={8.86352} ry={8.86084} fill='url(#paint5_linear_405_494)' />
    <defs>
      <filter
        id='filter0_b_405_494'
        x={-33.7878}
        y={-49.0658}
        width={469.264}
        height={469.153}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feGaussianBlur in='BackgroundImageFix' stdDeviation={5} />
        <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_405_494' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_backgroundBlur_405_494' result='shape' />
      </filter>
      <filter
        id='filter1_b_405_494'
        x={11.3446}
        y={-4.69135}
        width={378.999}
        height={378.909}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feGaussianBlur in='BackgroundImageFix' stdDeviation={5} />
        <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_405_494' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_backgroundBlur_405_494' result='shape' />
      </filter>
      <linearGradient
        id='paint0_linear_405_494'
        x1={383.569}
        y1={297.022}
        x2={334.494}
        y2={247.931}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#42A7C3' />
        <stop offset={0.750282} stopColor='#8ADBF0' />
      </linearGradient>
      <radialGradient
        id='paint1_radial_405_494'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(195.652 193.586) rotate(88.7893) scale(245.772 245.846)'
      >
        <stop offset={0.654764} stopColor='#E2F6FC' stopOpacity={0.36} />
        <stop offset={1} stopColor='#48B7D6' stopOpacity={0.84} />
      </radialGradient>
      <linearGradient
        id='paint2_linear_405_494'
        x1={69.8455}
        y1={172.288}
        x2={1.00359}
        y2={103.425}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#42A7C3' />
        <stop offset={0.750282} stopColor='#8ADBF0' />
      </linearGradient>
      <radialGradient
        id='paint3_radial_405_494'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(196.64 191.302) rotate(88.7893) scale(199.006 199.066)'
      >
        <stop offset={0.654764} stopColor='#E2F6FC' stopOpacity={0.36} />
        <stop offset={1} stopColor='#48B7D6' stopOpacity={0.84} />
      </radialGradient>
      <radialGradient
        id='paint4_radial_405_494'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(183.481 189.993) rotate(88.7893) scale(159.205 159.253)'
      >
        <stop offset={0.654764} stopColor='#E2F6FC' stopOpacity={0.36} />
        <stop offset={1} stopColor='#48B7D6' stopOpacity={0.84} />
      </radialGradient>
      <linearGradient
        id='paint5_linear_405_494'
        x1={294.57}
        y1={39.3754}
        x2={276.849}
        y2={21.6484}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#42A7C3' />
        <stop offset={0.750282} stopColor='#8ADBF0' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(BgIcon);
export { Memo as BgIcon };
