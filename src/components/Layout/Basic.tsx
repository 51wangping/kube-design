import classNames from 'classnames';
import React, { ElementType } from 'react';

export interface BasicProps {
  className?: string;
  componentCls?: string;
  children?: any;
  as?: ElementType;
}

const Basic: React.FC<BasicProps> = ({
  children,
  as: ElementType = 'div',
  componentCls,
  className,
  ...restProps
}) => (
  <ElementType className={classNames(componentCls, className)} {...restProps}>
    {children}
  </ElementType>
);

export default Basic;
