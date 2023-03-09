import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Ellipse25Icon } from './Ellipse25Icon';
import { Ellipse26Icon } from './Ellipse26Icon';
import { Ellipse27Icon } from './Ellipse27Icon';
import classes from './Slider.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 0:1445 */
export const Slider: FC<Props> = memo(function Slider(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.ellipse25}>
        <Ellipse25Icon className={classes.icon} />
      </div>
      <div className={classes.ellipse26}>
        <Ellipse26Icon className={classes.icon2} />
      </div>
      <div className={classes.ellipse27}>
        <Ellipse27Icon className={classes.icon3} />
      </div>
    </div>
  );
});
