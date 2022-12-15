import classNames from 'classnames';
import { omit } from 'lodash';
import React, { Component } from 'react';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  className?: string;
  value?: InputValue;
  defaultValue?: InputValue;
  type?: React.HTMLInputTypeAttribute;
  innerRef?: React.RefObject<any>;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string | number,
  ) => void;
}

export type InputValue = React.InputHTMLAttributes<HTMLInputElement>['value'];

export interface InputState {
  value?: InputValue;
  type?: string;
}

export default class Input extends Component<InputProps, InputState> {
  static defaultProps = {
    type: 'text',
    defaultValue: '',
    onChange() {},
  };

  inputRef = React.createRef();

  constructor(props: InputProps) {
    super(props);

    this.state = {
      value: 'value' in props ? props.value : props.defaultValue,
      type: props.type || 'text',
    };
  }

  static getDerivedStateFromProps(
    nextProps: InputProps,
    prevState: InputState,
  ) {
    if ('value' in nextProps && nextProps.value !== prevState.value) {
      return {
        value: nextProps.value,
      };
    }

    if ('type' in nextProps && nextProps.type !== prevState.type) {
      return { type: nextProps.type };
    }
    return null;
  }

  componentDidUpdate(prevProps: InputProps, prevState: InputState) {
    if (this.state.type !== prevState.type && prevState.type === 'text') {
      this.clearPasswordValueAttribute();
    }
  }

  clearPasswordValueAttribute = () => {
    const { innerRef } = this.props;
    const ref = innerRef || this.inputRef;
    ref.current.removeAttribute('value');
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const { value: propsValue, onChange } = this.props;
    const newValue = propsValue || value;
    onChange?.(e, value);
    this.setState({ value: newValue });
  };

  render() {
    const { className, innerRef, ...rest } = this.props;
    const { value, type } = this.state;

    const params =
      type && type === 'password'
        ? { ...omit(rest, 'onChange', 'value', 'defaultValue') }
        : { ...omit(rest, 'onChange', 'value', 'defaultValue'), value: value };

    return (
      <input
        {...params}
        ref={innerRef || this.inputRef}
        type={type}
        onChange={this.handleChange}
        className={classNames('input', className)}
      />
    );
  }
}
