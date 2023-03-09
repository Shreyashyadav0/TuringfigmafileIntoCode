import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { AddOutline } from '../AddOutline/AddOutline';
import classes from './Button_StateHoverChangeIconLef2.module.css';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
  classes?: {
    style_layer?: string;
  };
  swap?: {
    addOutline?: ReactNode;
  };
  text?: {
    button?: ReactNode;
  };
}
/* @figmaId 0:984 */
export const Button_StateHoverChangeIconLef2: FC<Props> = memo(function Button_StateHoverChangeIconLef2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={`${props.classes?.style_layer || ''} ${classes.style_layer}`}>
        {props.swap?.addOutline || (
          <AddOutline
            className={classes.addOutline}
            swap={{
              vector: <VectorIcon className={classes.icon} />,
            }}
          />
        )}
        {props.text?.button != null ? props.text?.button : <div className={classes.button}>Button</div>}
      </div>
    </div>
  );
});
