import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './PlayStore.module.css';

interface Props {
  className?: string;
  classes?: {
    googlePlayPngLogo37891?: string;
    root?: string;
  };
}
/* @figmaId 0:1459 */
export const PlayStore: FC<Props> = memo(function PlayStore(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle17}></div>
      <div className={`${props.classes?.googlePlayPngLogo37891 || ''} ${classes.googlePlayPngLogo37891}`}></div>
      <div className={classes.gETINON}>GET IN ON</div>
      <div className={classes.googlePlay}>Google Play</div>
    </div>
  );
});
