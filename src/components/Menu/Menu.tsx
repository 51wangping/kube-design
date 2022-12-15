import classnames from 'classnames';
import { isFunction, noop } from 'lodash';
import React, { cloneElement, Component } from 'react';
import MenuItem from './MenuItem';

export interface MenuProps {
  className?: string;
  label?: string;
  width?: number;
  style?: React.CSSProperties;
  children: Array<React.ReactElement<MenuItem>>;
  selectedKey?: string;
  onClick?: (
    e: React.MouseEvent,
    specKey: string | undefined,
    value: any,
  ) => void;
}

class Menu extends Component<MenuProps> {
  static MenuItem = MenuItem;

  static defaultProps = {
    onClick: noop,
    style: {},
  };

  handleClick = (e: React.MouseEvent, key: string, value: any) => {
    const { onClick } = this.props;
    if (isFunction(onClick)) {
      onClick(e, key, value);
    }
  };

  renderMenuItem = (component: any, index: any) => {
    if (!component) {
      return null;
    }

    if (!component) return null;

    const { selectedKey } = this.props;

    const newChildProps = {
      specKey: component.key || `menu-${index}`,
      onClick: this.handleClick,
      selected: component.key === selectedKey,
    };

    return cloneElement(component, newChildProps);
  };

  render() {
    const { children, className, style, width, label } = this.props;

    const classString = classnames('menu', className);

    const widthStyle = width ? { width } : null;

    return (
      <ul className={classString} style={Object.assign({}, style, widthStyle)}>
        {label && <div className="menu-label">{label}</div>}
        {React.Children.map(children, this.renderMenuItem)}
      </ul>
    );
  }
}

export default Menu;
