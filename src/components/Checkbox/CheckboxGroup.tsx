import classNames from 'classnames';
import React, { Component } from 'react';

import type { Value } from './Checkbox';
import Checkbox from './Checkbox';

type Options = {
  value: string;
  label: string;
  disabled?: boolean;
};

export interface CheckboxGroupProps {
  options: Options[];
  value?: string[];
  defaultValue?: string[];
  name?: string;
  onChange: (value: Value[] | undefined) => void;
  direction?: 'row' | 'column';
  className?: string;
  disabled?: boolean;
  children?: React.ReactElement<any>[];
}

export default class CheckboxGroup extends Component<CheckboxGroupProps> {
  static defaultProps = {
    direction: 'row',
    options: [],
    value: [],
    onChange() {},
  };

  state = {
    values: this.props.defaultValue || this.props.value || [],
  };

  handleOptionChange = (checked: boolean, value: Value | undefined) => {
    const { onChange } = this.props;
    const { values } = this.state;
    let newValues: any[] = [];
    if (checked) {
      newValues = [...values, value];
    } else {
      newValues = values.filter((item) => item !== value);
    }

    this.setState({ values: newValues }, () => onChange!(newValues));
  };

  render() {
    const { className, name, direction, options, disabled, children } =
      this.props;
    const { values } = this.state;

    if (children && children.length > 0) {
      const childContent = React.Children.map(children, (child) =>
        React.cloneElement(child, {
          ...child.props,
          name,
          checked: values.includes(child.props.value),
          onChange: this.handleOptionChange,
        }),
      );

      return (
        <div
          data-direction={direction}
          className={classNames(`checkbox-group`, className)}
        >
          {childContent}
        </div>
      );
    }

    return (
      <div
        data-direction={direction}
        className={classNames(`checkbox-group`, className)}
      >
        {options.map((option) => (
          <Checkbox
            key={option.value}
            name={name}
            value={option.value}
            disabled={
              disabled
                ? option.disabled === false
                  ? false
                  : disabled
                : disabled
            }
            checked={values.includes(option.value)}
            onChange={this.handleOptionChange}
          >
            {option.label}
          </Checkbox>
        ))}
      </div>
    );
  }
}
