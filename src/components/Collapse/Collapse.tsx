import classNames from 'classnames';
import { isEqual, noop, remove } from 'lodash';
import React, { Children, cloneElement, Component } from 'react';
import CollapseItem from './CollapseItem';

export interface CollapseProps {
  activeKey?: string[];
  defaultActiveKey?: string[];
  accordion?: boolean;
  children: React.ReactElement<any>[];
  onChange: (key: string[]) => void;
  className?: string;
  style?: React.CSSProperties;
}

export interface CollapseState {
  activeKey: string[];
}

export default class Collapse extends Component<CollapseProps, CollapseState> {
  static CollapseItem = CollapseItem;

  static defaultProps = {
    accordion: false,
    onChange: noop,
  };

  constructor(props: CollapseProps) {
    super(props);

    this.state = {
      activeKey: props.activeKey || props.defaultActiveKey || [],
    };
  }

  static getDerivedStateFromProps(
    nextProps: CollapseProps,
    prevState: CollapseState,
  ) {
    if (
      'activeKey' in nextProps &&
      !isEqual(nextProps.activeKey, prevState.activeKey)
    ) {
      return { activeKey: nextProps.activeKey };
    }
    return null;
  }

  handleVisible = (key: string, visible: boolean) => {
    const { accordion, onChange } = this.props;
    const { activeKey } = this.state;

    let nextKey = [...activeKey];

    if (accordion) {
      nextKey = visible ? [key] : [];
    }
    if (!accordion && visible && !activeKey.includes(key)) {
      nextKey = activeKey.concat(key);
    }
    if (!accordion && !visible && activeKey.includes(key)) {
      remove(nextKey, (k) => k === key);
    }

    if (!('activeKey' in this.props)) {
      this.setState({ activeKey: nextKey });
    }

    onChange(nextKey);
  };

  renderChildren = () => {
    const { children } = this.props;
    const { activeKey } = this.state;

    if (!children) return null;

    return Children.map(children, (child, i) => {
      if (!child) {
        return null;
      }
      return cloneElement(child, {
        visible: activeKey.includes(child.key as string),
        specKey: child.key,
        isLast: children.length - 1 === i,
        handleVisible: this.handleVisible,
      });
    });
  };

  render() {
    const { children, className, style } = this.props;
    return (
      <div
        className={classNames({ collapse: !!children.length }, className)}
        style={style}
      >
        <div className="collapse-wrap">{this.renderChildren()}</div>
      </div>
    );
  }
}
