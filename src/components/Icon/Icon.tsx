import classNames from 'classnames';
import React, { PureComponent } from 'react';
import domReady from '../../utils/domReady';
import { tuple } from '../../utils/type';
import svgSprite from './spirits';

const SizeTypes = tuple('small', 'medium', 'large');
export type SizeType = typeof SizeTypes[number];

const TypeColor = tuple('dark', 'light', 'coloured');
export type IconTypes = typeof TypeColor[number];

export interface Color {
  primary: string;
  secondary: string;
}

export interface IconProps {
  name: string;
  prefix?: string;
  type?: IconTypes;
  size?: SizeType | number;
  className?: string;
  onClick?: (e?: React.MouseEvent<HTMLSpanElement>) => void;
  style?: React.CSSProperties;
  clickable?: boolean;
  changeable?: boolean;
  disabled: boolean;
  color?: Color;
}

const idPrefix = 'icon-';

const prepend = (el: Element, target: Element) => {
  if (target.firstChild) {
    target.insertBefore(el, target.firstChild);
  } else {
    target.appendChild(el);
  }
};

const appendSvg = () => {
  const svgContainer: HTMLDivElement = document.createElement('div');
  svgContainer.innerHTML = svgSprite;
  const svg: SVGSVGElement = svgContainer.getElementsByTagName('svg')[0];
  if (svg) {
    svg.setAttribute('aria-hidden', 'true');
    svg.style.position = 'absolute';
    svg.style.width = 0 + 'px';
    svg.style.height = 0 + 'px';
    svg.style.overflow = 'hidden';
    prepend(svg, document.body);
  }
};

// @ts-ignore
if (typeof window !== 'undefined' && !window.iconfont__svg__inject) {
  // @ts-ignore
  window.iconfont__svg__inject = true;
  domReady(appendSvg);
}

export default class Icon extends PureComponent<IconProps, {}> {
  static defaultProps = {
    type: 'dark',
    size: 'small',
    prefix: 'kubed-icon',
    style: {},
    changeable: false,
    clickable: false,
    disabled: false,
    onClick() {},
  };

  render() {
    const {
      prefix,
      name,
      type,
      size,
      className,
      onClick,
      style,
      clickable,
      changeable,
      disabled,
      color,
    } = this.props;

    let styles = style;
    let colorStyles = {};

    const isNumberSize = !isNaN(Number(size));

    if (isNumberSize) {
      styles = Object.assign({}, style, {
        width: `${size}px`,
        height: `${size}px`,
      });
    }

    if (color) {
      colorStyles = {
        color: color.primary,
        fill: color.secondary,
      };
    }
    return (
      <span
        style={styles}
        className={classNames(
          'icon',
          {
            [`is-${size}`]: !isNumberSize,
            'icon-clickable': clickable,
            'icon-changeable': changeable && !disabled,
            'icon-disabled': disabled,
          },
          className,
        )}
        // @ts-ignore
        onClick={disabled ? null : onClick}
      >
        <svg
          className={`${prefix} ${prefix}-${name} ${prefix}-${type}`}
          style={colorStyles}
        >
          <use xlinkHref={`#${idPrefix + name}`} />
        </svg>
      </span>
    );
  }
}
