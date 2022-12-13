import classNames from 'classnames';
import React, { Component } from 'react';

import Icon from '../Icon';

import CollapseTransition from './CollapseTransition';

export interface CollapseItemProps {
  label: string;
  children?: React.ReactNode;
  specKey?: string;
  handleVisible?: (specKey: string | undefined, visible: boolean) => void;
  visible: boolean;
  isLast?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default class CollapseItem extends Component<CollapseItemProps> {
  static defaultProps = {
    visible: false,
  };

  handleVisible = () => {
    const { specKey, handleVisible, visible } = this.props;
    handleVisible!(specKey, !visible);
  };

  render() {
    const { label, children, visible, isLast, className, style } = this.props;
    const prefixCls = 'collapse';
    const classLabel = classNames({
      [`${prefixCls}-item-label`]: true,
      [`${prefixCls}-item-label-border-bottom`]: !!visible,
      [`${prefixCls}-item-label-last-border-bottom`]: isLast && !visible,
    });
    const classContent = classNames({
      [`${prefixCls}-item-content`]: true,
      [`${prefixCls}-item-content-last-border-bottom`]: isLast && !!visible,
    });
    return (
      <div className={classNames(`${prefixCls}-item`, className)} style={style}>
        <div className={classLabel} onClick={this.handleVisible}>
          {label}
          <Icon
            name={`caret-${visible ? 'up' : 'down'}`}
            type={visible ? 'dark' : 'light'}
            size={20}
          />
        </div>
        <CollapseTransition visible={visible}>
          <div className={classContent}>{children}</div>
        </CollapseTransition>
      </div>
    );
  }
}
