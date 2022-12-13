import classnames from 'classnames';
import React from 'react';

import { SizeType } from '@kube-design/components/utils/interface';

export type SpaceSize = SizeType | number;

export interface SpaceProps {
  prefix?: string;
  className?: string;
  style?: React.CSSProperties;
  size?: SpaceSize;
  direction?: 'horizontal' | 'vertical';
  align?: 'start' | 'end' | 'center' | 'baseline';
  wrap?: boolean;
  children?: React.ReactNode;
}

const spaceSize = {
  small: 8,
  medium: 16,
  large: 24,
};

function getNumberSize(size: SpaceSize) {
  return typeof size === 'string' ? spaceSize[size] : size || 0;
}

export default class Space extends React.PureComponent<SpaceProps> {
  static defaultProps = {
    prefix: 'kube-space',
    direction: 'vertical',
    align: 'start',
  };

  render() {
    const {
      className,
      size = 'small',
      align,
      children,
      prefix,
      style,
      wrap = false,
      direction,
      ...rest
    } = this.props;
    const flexDirection = direction === 'vertical' ? 'column' : 'row';
    const flexWrap = wrap ? 'wrap' : 'nowrap';

    return (
      <div
        className={classnames(
          'space',
          `${prefix}${className ? '-' + className : ''}`,
        )}
        style={{
          ...style,
          gap: getNumberSize(size),
          flexDirection: flexDirection,
          flexWrap: flexWrap,
          justifyContent: align,
          ...rest,
        }}
      >
        {children}
      </div>
    );
  }
}
