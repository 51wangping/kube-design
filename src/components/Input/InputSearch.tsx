import classNames from 'classnames';
import { isEmpty, trim } from 'lodash';
import React from 'react';
import Icon from '../Icon';
import type { InputState, InputValue } from './Input';
import Input from './Input';

export interface InputSearchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  className?: string;
  value?: InputValue;
  defaultValue?: InputValue;
  placeholder?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  onSearch?: (value?: InputValue) => void;
}

type InputSearchState = InputState & { defaultValue?: InputValue };

export default class InputSearch extends React.Component<
  InputSearchProps,
  InputSearchState
> {
  static defaultProps = {
    style: {},
    onSearch() {},
    disabled: false,
  };

  constructor(props: InputSearchProps) {
    super(props);

    this.state = { value: props.value, defaultValue: props.value };
  }

  static getDerivedStateFromProps(
    props: InputSearchProps,
    state: InputSearchState,
  ) {
    if (props.value !== state.defaultValue) {
      return {
        value: props.value,
        defaultValue: props.value,
      };
    }
    return null;
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    this.setState({ value }, () => {
      if (isEmpty(value)) {
        this.props.onSearch?.();
      }
    });
  };

  handleClear = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.nativeEvent.stopImmediatePropagation();
    this.setState({ value: '' }, () => {
      this.props.onSearch?.(this.state.value);
    });
  };

  handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      const { value } = this.state;
      if (!isEmpty(value)) {
        this.props.onSearch?.(trim(this.state.value as string));
      }
    }
  };

  render() {
    const { value } = this.state;
    const {
      name,
      placeholder,
      disabled,
      className,
      style,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onSearch,
      ...rest
    } = this.props;

    return (
      <div
        className={classNames(
          'has-icons-left',
          'has-icons-right',
          'input-search',
          className,
        )}
        style={style}
      >
        <Icon className="is-left" name="magnifier" />
        <Input
          type="text"
          placeholder={placeholder}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          name={name}
          disabled={disabled}
          {...rest}
          value={value || ''}
        />
        {!isEmpty(value) && (
          <Icon
            className="is-right"
            name="close"
            clickable
            onClick={this.handleClear}
          />
        )}
      </div>
    );
  }
}
