import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { FacebookIcon } from './FacebookIcon';
import classes from './SocialMedia.module.css';
import { TwitterIcon } from './TwitterIcon';
import { VectorIcon } from './VectorIcon';
import { VectorIcon2 } from './VectorIcon2';
import { VectorIcon3 } from './VectorIcon3';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    facebook?: ReactNode;
    twitter?: ReactNode;
    vector?: ReactNode;
    vector2?: ReactNode;
    vector3?: ReactNode;
  };
}
/* @figmaId 0:1449 */
export const SocialMedia: FC<Props> = memo(function SocialMedia(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle27}></div>
      <div className={classes.facebook}>{props.swap?.facebook || <FacebookIcon className={classes.icon} />}</div>
      <div className={classes.rectangle28}></div>
      <div className={classes.twitter}>{props.swap?.twitter || <TwitterIcon className={classes.icon2} />}</div>
      <div className={classes.rectangle29}></div>
      <div className={classes.rectangle30}></div>
      <div className={classes.vector}>{props.swap?.vector || <VectorIcon className={classes.icon3} />}</div>
      <div className={classes.vector2}>{props.swap?.vector2 || <VectorIcon2 className={classes.icon4} />}</div>
      <div className={classes.vector3}>{props.swap?.vector3 || <VectorIcon3 className={classes.icon5} />}</div>
    </div>
  );
});
