/* eslint-disable @typescript-eslint/no-unused-vars */
import classNames from 'classnames';
import Flatpickr from 'flatpickr';
import { isEqual, noop, omit } from 'lodash';
import React, { Component } from 'react';
import ReactDomServer from 'react-dom/server';
import Icon from '../Icon';
import getDefaultLocale from './locale';

import CustomUI from './plugins/customUI';
type Option = {
  locale?: {};
  plugins?: any[];
  time_24hr?: boolean;
  nextArrow?: string;
  prevArrow?: string;
  [optionName: string]: any;
};

type DateValue = string | number | any[] | undefined;

export interface DatePickerProps {
  className?: string;
  showClearBtn?: boolean;
  disabled?: boolean;
  enableTime?: boolean;
  mode?: string;
  defaultValue?: string | number | any[];
  value?: DateValue;
  options?: Option;
  onChange?: (value: DateValue, daetaStr: string, instance: any) => void;
  onOpen?: (value: DateValue, daetaStr: string, instance: any) => void;
  onClose?: (value: DateValue, daetaStr: string, instance: any) => void;
  onClear?: () => void;
  onMonthChange?: () => void;
  onYearChange?: () => void;
  onReady?: () => void;
  onValueUpdate?: () => void;
  onDayCreate?: () => void;
  [propName: string]: any;
}

export interface DatePickerState {
  value?: string | number | any[] | undefined;
  isHover: boolean;
  isOpen: boolean;
  isFocus: boolean;
}

const propsKey: string[] = [
  'onChange',
  'onOpen',
  'onClose',
  'onMonthChange',
  'onYearChange',
  'onReady',
  'onValueUpdate',
  'onDayCreate',
  'defaultDate',
  'enableTime',
  'enableSeconds',
  'defaultHour',
  'defaultMinute',
  'dateFormat',
  'formatDate',
  'hourIncrement',
  'minuteIncrement',
  'enable',
  'disable',
  'maxDate',
  'minDate',
  'mode',
  'conjunction',
  'noCalendar',
  'enableSeconds',
  'weekNumbers',
  'appendTo',
  'locale',
];

const defaultOptions = {
  locale: {},
  plugins: [CustomUI()],
  time_24hr: true,
  nextArrow: ReactDomServer.renderToString(<Icon name="next" size={20} />),
  prevArrow: ReactDomServer.renderToString(<Icon name="previous" size={20} />),
};

class DatePicker extends Component<DatePickerProps, DatePickerState> {
  static defaultProps = {
    options: {},
    onChange: noop,
    onOpen: noop,
    onClose: noop,
    onClear: noop,
    showClearBtn: true,
    mode: 'single',
  };
  instance: any;
  node: any;

  constructor(props: DatePickerProps) {
    super(props);
    this.instance = null;
    this.state = {
      value:
        'value' in props || 'defaultValue' in props
          ? props.value || props.defaultValue
          : undefined,
      isHover: false,
      isOpen: false,
      isFocus: false,
    };
  }

  static getDerivedStateFromProps(
    nextProps: DatePickerProps,
    prevState: DatePickerState,
  ) {
    if ('value' in nextProps && !isEqual(nextProps.value, prevState.value)) {
      return {
        value: nextProps.value,
      };
    }
    return null;
  }

  componentDidMount() {
    const { props } = this;
    const { options: propsOptions } = this.props;
    const { value } = this.state;
    const options: Option = {
      ...defaultOptions,
      ...propsOptions,
    };

    propsKey.forEach((key) => {
      if (props[key]) {
        options[key] = props[key];
      }
    });
    options.locale = { ...getDefaultLocale(), ...options.locale };
    this.instance = new (Flatpickr as any)(this.node, this.bindEvents(options));

    this.instance.setDate(value, false);
  }

  componentDidUpdate(prevProps: DatePickerProps) {
    const { props } = this;
    const { options: propsOptions } = this.props;
    const prevOptions = { ...prevProps.options };
    const nextOptions = { ...propsOptions };

    propsKey.forEach((key) => {
      if (key in this.props) {
        nextOptions[key] = props[key];
      }
      if (key in prevProps) {
        prevOptions[key] = prevProps[key];
      }
    });

    let optionsKeys: (string | undefined)[] =
      Object.getOwnPropertyNames(nextOptions);

    optionsKeys = omit(optionsKeys, [
      'onChange',
      'onOpen',
      'onClose',
      'onMonthChange',
      'onYearChange',
      'onReady',
      'onValueUpdate',
      'onDayCreate',
    ]);

    for (let index = optionsKeys.length - 1; index >= 0; index -= 1) {
      const key = optionsKeys[index];
      const value = nextOptions[key as string];
      if (value !== prevOptions[key as string]) {
        this.instance.set(key, value);
      }
    }

    if ('value' in this.props && this.instance) {
      this.instance.setDate(props.value, false);
    }
  }

  componentWillUnmount() {
    if (this.instance) {
      this.instance.destroy();
      this.instance = null;
    }
  }

  bindEvents = (options = {}) => {
    const { onOpen, onClose, onChange } = this.props;
    const nextOptions = {
      ...options,
      onOpen: (dates: DateValue, dateStr: string, instance: any) => {
        this.setState(
          {
            isFocus: true,
            value: dates,
            isOpen: true,
          },
          () => {
            onOpen?.(dates, dateStr, instance);
          },
        );
      },

      onClose: (dates: DateValue, dateStr: string, instance: any) => {
        if (this.node.blur) {
          this.node.blur();
        }
        this.setState(
          {
            isFocus: false,
            value: dates,
            isOpen: false,
          },
          () => {
            this.instance.setDate(dates, false);
            onClose?.(dates, dateStr, instance);
          },
        );
      },

      onChange: (dates: DateValue, dateStr: string, instance: any) => {
        this.setState({ value: dates }, () => {
          onChange?.(dates, dateStr, instance);
        });
      },
    };

    return nextOptions;
  };

  handleMouseEnter = () => {
    const { showClearBtn } = this.props;
    const { isHover, isOpen } = this.state;
    if (showClearBtn && !isHover && !isOpen) {
      this.setState({ isHover: true });
    }
  };

  handleMouseLeave = () => {
    const { showClearBtn } = this.props;
    const { isHover } = this.state;
    if (showClearBtn && isHover) {
      this.setState({ isHover: false });
    }
  };

  handleClear = (e: any) => {
    e.stopPropagation();
    const { onClear, onChange } = this.props;
    if (this.instance.isOpen) {
      this.instance.close();
    }

    if (!('value' in this.props)) {
      this.setState({ value: '' }, () => {
        this.instance.setDate([], false);
      });
    }
    onClear?.();
    onChange?.([], '', this.instance);
  };

  renderIcon() {
    const { showClearBtn, disabled } = this.props;
    const { value, isHover, isFocus } = this.state;
    const iconName =
      'noCalendar' in this.props && 'enableTime' in this.props
        ? 'clock'
        : 'calendar';
    if (showClearBtn && (isFocus || isHover) && !disabled && value !== '') {
      return (
        <Icon
          className="is-right"
          name="close"
          clickable
          onClick={this.handleClear}
        />
      );
    }

    return <Icon className="is-right" name={iconName} />;
  }

  render() {
    const { options, defaultValue, value, className, showClearBtn, ...props } =
      this.props;
    const { isHover, isOpen } = this.state;

    propsKey.forEach((key) => {
      // @ts-ignore
      delete props[key];
    });

    delete props.onClear;
    // @ts-ignore
    props.className = classNames(
      'datepicker-input input',
      { 'is-hover': isHover },
      { 'is-active': isOpen },
    );

    return (
      <div
        className={classNames('datepicker has-icons-right', className)}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {/* @ts-ignore */}
        <input
          {...props}
          ref={(n) => {
            this.node = n;
          }}
        />
        {this.renderIcon()}
      </div>
    );
  }
}

export default DatePicker;
