import classNames from 'classnames';
import { isEmpty } from 'lodash';
import React, { Component } from 'react';

import { tuple } from '../../utils/type';

const StatusTypes = tuple('default', 'success', 'warning', 'error');
export type Status = typeof StatusTypes[number];

export interface BadgeProps {
  className?: string;
  count: number;
  overflowCount?: number;
  status?: Status;
  style?: React.CSSProperties;
  text?: string;
  children?: React.ReactNode;
}

class Badge extends Component<BadgeProps> {
  static defaultProps = {
    status: 'success',
    overflowCount: 99,
    count: 0,
  };

  renderBadge = () => {
    const { status, text, overflowCount, count, children } = this.props;

    let number: string | number = '';

    if (text) {
      number = text;
    } else if (overflowCount && count > overflowCount) {
      number = `${overflowCount}+`;
    } else {
      number = count;
    }
    return (
      <span
        className={classNames(`is-${status}`, 'badge', {
          absolute: !isEmpty(children),
        })}
      >
        {number}
      </span>
    );
  };

  render = () => {
    const { style, className, children } = this.props;
    return (
      <div className={classNames('badge-wrapper', className)} style={style}>
        {children}
        {this.renderBadge()}
      </div>
    );
  };
}
export default Badge;
