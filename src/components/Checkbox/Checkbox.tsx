import classNames from 'classnames';
import React, { Component } from 'react';

export type Value = string | number | readonly string[];
export interface CheckboxProps {
  className?: string;
  name?: string;
  value?: Value;
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  onChange?: (
    checked: boolean,
    value: Value | undefined,
    e?: React.ChangeEvent<HTMLInputElement>,
  ) => void;
}

export interface CheckboxState {
  checked?: boolean;
}

export default class Checkbox extends Component<CheckboxProps, CheckboxState> {
  static defaultProps = {
    indeterminate: false,
    onChange() {},
  };

  isControlled: boolean | undefined;

  constructor(props: CheckboxProps) {
    super(props);

    if ('checked' in this.props) {
      this.isControlled = true;
    }

    this.state = {
      checked: !!this.props.checked,
    };
  }

  componentDidUpdate(prevProps: CheckboxProps, prevState: CheckboxState) {
    if (this.isControlled && this.props.checked !== prevState.checked) {
      this.setState({ checked: this.props.checked });
    }
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange, value } = this.props;
    const { checked } = this.state;

    if (!this.isControlled) {
      this.setState({ checked: !checked });
    }

    onChange!(!checked, value, e);
  };

  render() {
    const { className, children, indeterminate, ...rest } = this.props;

    return (
      <label
        className={classNames(
          'checkbox',
          {
            indeterminate,
            checked: this.state.checked,
            disabled: rest.disabled,
          },
          className,
        )}
      >
        <input
          type="checkbox"
          {...rest}
          checked={this.state.checked}
          onChange={this.handleChange}
        />
        {children ? <span className="label-value">{children}</span> : null}
      </label>
    );
  }
}
