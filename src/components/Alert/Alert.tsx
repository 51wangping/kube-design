import classnames from 'classnames';
import React from 'react';

import Icon from '../Icon';

import { tuple } from '../../utils/type';

const Types = tuple('info', 'error', 'warning', 'default');
export type TYPE = typeof Types[number];

export interface AlertProps {
  className?: string;
  type: TYPE;
  icon?: string;
  title?: React.ReactNode;
  message?: React.ReactNode;
}

interface ICONSS {
  info: string;
  error: string;
  warning: string;
  default: string;
}

type ICON_COLORS_TYPE = {
  info: {
    primary: string;
    secondary: string;
  };
  error: {
    primary: string;
    secondary: string;
  };
  warning: {
    primary: string;
    secondary: string;
  };
  default: {
    primary: string;
    secondary: string;
  };
};

const ICON_COLORS: ICON_COLORS_TYPE = {
  info: {
    primary: '#3385b0',
    secondary: '#fff',
  },
  error: {
    primary: '#8c3231',
    secondary: '#fff',
  },
  warning: {
    primary: '#8d663e',
    secondary: '#ffc781',
  },
  default: {
    primary: '#242e42',
    secondary: '#f9fbfd',
  },
};

const ICONS: ICONSS = {
  info: 'check',
  error: 'close',
  warning: 'substract',
  default: 'information',
};

export default class Alert extends React.PureComponent<AlertProps> {
  static defaultProps = {
    type: 'default',
    message: '',
  };

  render() {
    const { className, type, title, message } = this.props;

    return (
      <div className={classnames('alert', className, `alert-${type}`)}>
        {this.renderIcon()}
        <div className="alert-content">
          {title && <div className="alert-title">{title}</div>}
          <span className="alert-message">{message}</span>
        </div>
      </div>
    );
  }

  renderIcon() {
    const { icon, type, title } = this.props;

    if (!icon && !title) {
      return null;
    }

    const iconName = icon || ICONS[type];

    return (
      <Icon
        className="alert-icon"
        name={iconName}
        size={!!title ? 32 : 20}
        color={ICON_COLORS[type]}
      />
    );
  }
}
