import { noop } from 'lodash';
import React, { PureComponent } from 'react';
import Icon from '../Icon';
import type { InputState, InputValue } from './Input';
import Input from './Input';

export interface InputPasswordProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value?: InputValue;
  defaultValue?: InputValue;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>,
    value: InputValue,
  ) => void;
}

class InputPassword extends PureComponent<InputPasswordProps, InputState> {
  static defaultProps = {
    defaultValue: '',
    onChange: noop,
  };

  constructor(props: InputPasswordProps) {
    super(props);
    this.state = {
      type: 'password',
      value: String(props.value || props.defaultValue),
    };
  }

  static getDerivedStateFromProps(
    nextProps: InputPasswordProps,
    prevState: InputState,
  ) {
    if ('value' in nextProps && nextProps.value !== prevState.value) {
      return {
        value: nextProps.value,
      };
    }
    return null;
  }

  handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: InputValue,
  ) => {
    const { onChange } = this.props;
    this.setState({ value });
    if (onChange && onChange !== noop) {
      onChange(e, value);
    }
  };

  handleChange = () => {
    this.setState((prevState) => ({
      type: prevState.type === 'text' ? 'password' : 'text',
    }));
  };

  render() {
    const { type, value } = this.state;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { defaultValue, ...rest } = this.props;

    return (
      <div className="input-password has-icons-right">
        <Input
          {...rest}
          type={type}
          value={value}
          onChange={this.handleInputChange}
        />
        <Icon
          className="is-right"
          name={type === 'text' ? 'eye' : 'eye-closed'}
          size="small"
          clickable
          onClick={this.handleChange}
        />
      </div>
    );
  }
}

export default InputPassword;
