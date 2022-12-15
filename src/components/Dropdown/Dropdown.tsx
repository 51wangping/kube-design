/* eslint-disable react/prefer-stateless-function */
import classNames from 'classnames';
import { noop } from 'lodash';
import React, { cloneElement, Component, isValidElement } from 'react';
import type { PlacementType } from '../Popper';
import Popper from '../Popper';

export interface DropdownProps {
  className?: string;
  trigger?: string;
  theme?: 'dark' | '';
  content: React.ReactNode | (() => React.ReactNode);
  placement?: keyof PlacementType;
  showArrow?: boolean;
  visible?: boolean;
  closeAfterMouseLeave?: boolean;
  children: React.ReactNode;
  closeAfterClick?: boolean;
  onClose?: (e?: React.MouseEvent<HTMLDivElement>) => void;
  onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void;
  onOpen?: () => void;
}

class Dropdown extends Component<DropdownProps> {
  static defaultProps = {
    theme: '',
    trigger: 'click',
    placement: 'bottomLeft',
    showArrow: false,
    closeAfterClick: true,
    closeAfterMouseLeave: false,
    onClick: noop,
  };

  render() {
    const { className, children, onClick, theme, ...restProps } = this.props;
    const isTriggerValid = isValidElement(children);

    return (
      <Popper
        {...restProps}
        type="dropdown"
        className={classNames('dropdown', `dropdown-${theme}`, className)}
        onClick={onClick}
      >
        {isTriggerValid ? (
          cloneElement<any>(children, {
            className: classNames('is-trigger', children.props.className),
          })
        ) : (
          <span className="is-trigger">{children}</span>
        )}
      </Popper>
    );
  }
}

export default Dropdown;
