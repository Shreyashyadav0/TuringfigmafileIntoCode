import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { AddOutline } from '../AddOutline/AddOutline';
import classes from './Button_StateHoverChangeIconLef.module.css';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
  swap?: {
    vector?: ReactNode;
  };
  text?: {
    button?: ReactNode;
  };
}
/* @figmaId 0:1404 */
export const Button_StateHoverChangeIconLef: FC<Props> = memo(function Button_StateHoverChangeIconLef(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.style_layer}>
        <AddOutline
          className={classes.addOutline}
          swap={{
            vector: props.swap?.vector || <VectorIcon className={classes.icon} />,
          }}
        />
        {props.text?.button != null ? props.text?.button : <div className={classes.button}>Button</div>}
      </div>
    </div>
  );
});
