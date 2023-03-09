import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Star12 } from '../Star12/Star12';
import classes from './Star1.module.css';
import { Star1Icon } from './Star1Icon';

interface Props {
  className?: string;
}
/* @figmaId 0:1441 */
export const Star1: FC<Props> = memo(function Star1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Star12
        className={classes.star1}
        swap={{
          star1: <Star1Icon className={classes.icon} />,
        }}
      />
    </div>
  );
});
