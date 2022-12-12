/* eslint-disable react/button-has-type */
import classNames from 'classnames';
import React, { PureComponent } from 'react';
import Icon from '../Icon';
import { IconTypes } from '../Icon/Icon';
import './styles.scss';

import {
  ButtonHTMLType,
  SizeType,
} from '@kube-design/components/utils/interface';
import Loading from '../Loading';

export interface ButtonProps {
  type?: string;
  htmlType?: ButtonHTMLType;
  className?: string;
  style?: React.CSSProperties;
  size?: SizeType | number;
  icon?: string;
  iconSize?: SizeType | number;
  iconType?: IconTypes;
  loading?: boolean;
  disabled?: boolean;
  ghost?: boolean;
  children?: React.ReactNode;
}

export default class Button extends PureComponent<ButtonProps> {
  static defaultProps = {
    type: 'default',
    htmlType: 'button',
    size: 'normal',
    icon: '',
    iconType: 'dark',
  };

  render() {
    const {
      children,
      type,
      htmlType,
      className,
      size,
      icon,
      iconType,
      iconSize,
      loading,
      ghost,
      ...rest
    } = this.props;

    return (
      <button
        className={classNames(
          'button',
          `button-${type}`,
          `button-size-${size}`,
          {
            'has-icon': icon,
            'is-loading': loading,
            'is-ghost': ghost,
          },
          className,
        )}
        type={htmlType}
        {...rest}
      >
        {icon && <Icon name={icon} type={iconType} size={iconSize} />}
        {children && <div className="button-content">{children}</div>}
        {loading && <Loading size={16} />}
      </button>
    );
  }
}
