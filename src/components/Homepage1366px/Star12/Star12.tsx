import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Star1Icon } from './Star1Icon';
import classes from './Star12.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    star1?: ReactNode;
  };
}
/* @figmaId 0:1443 */
export const Star12: FC<Props> = memo(function Star12(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.star1}>{props.swap?.star1 || <Star1Icon className={classes.icon} />}</div>
    </div>
  );
});
