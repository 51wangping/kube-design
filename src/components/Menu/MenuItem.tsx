import classnames from 'classnames';
import React, { Component } from 'react';

export interface MenuItemProps {
  className?: string;
  disabled?: boolean;
  selected?: boolean;
  value?: any;
  specKey?: string;
  onClick?: (
    e: React.MouseEvent,
    specKey: string | undefined,
    value: any,
  ) => void;
  children: React.ReactNode;
}

class MenuItem extends Component<MenuItemProps> {
  static menuType = 'MenuItem';

  handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const { specKey, value, onClick, disabled } = this.props;
    if (disabled) return;

    onClick?.(e, specKey, value);
  };

  render() {
    const { className, children, disabled, selected } = this.props;

    return (
      <li
        className={classnames('menu-item', className, {
          'menu-item-disabled': disabled,
          'menu-item-selected': selected,
        })}
        onClick={this.handleClick}
      >
        {children}
      </li>
    );
  }
}

export default MenuItem;
