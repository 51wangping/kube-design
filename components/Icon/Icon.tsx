import React, { FC } from 'react'
import classNames from 'classnames'
import svgSprite from './spirits'
import domReady from '../utils/domReady'

type colorProps = {
  primary: string
  secondary: string
}

export type IconType = 'dark' | 'light' | 'coloured'

export type IconProps = {
  name: string
  prefix?: string
  type?: string
  size?: string | number
  className?: string
  style?: object
  changeable?: boolean
  clickable?: boolean
  onClick?: React.MouseEventHandler<HTMLElement>
  disabled?: boolean
  color?: colorProps
}

const idPrefix = 'icon-'

const prepend = (el: SVGSVGElement, target: HTMLElement) => {
  if (target.firstChild) {
    target.insertBefore(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

const appendSvg = () => {
  const svgContainer = document.createElement('div')
  svgContainer.innerHTML = svgSprite
  const svg = svgContainer.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = '0px'
    svg.style.height = '0px'
    svg.style.overflow = 'hidden'
    prepend(svg, document.body)
  }
}
if (typeof window !== 'undefined' && !(window as any).iconfont__svg__inject) {
  ;(window as any).iconfont__svg__inject = true
  domReady(appendSvg)
}

const Icon: FC<IconProps> = ({
  prefix,
  name,
  type,
  size,
  className,
  style,
  changeable,
  clickable,
  onClick,
  disabled,
  color,
}) => {
  const isNumberSize = !Number.isNaN(Number(size))
  let styles = style
  let colorStyles = {}

  const classes = classNames(
    'icon',
    {
      [`is-${size}`]: !isNumberSize,
      'icon-clickable': clickable,
      'icon-changeable': changeable && !disabled,
      'icon-disabled': disabled,
    },
    className,
  )

  if (isNumberSize) {
    styles = {
      ...style,
      width: `${size}px`,
      height: `${size}px`,
    }
  }
  if (color) {
    colorStyles = {
      color: color.primary,
      fill: color.secondary,
    }
  }

  return (
    <span style={styles} className={classes} onClick={disabled ? () => {} : onClick}>
      <svg
        className={`${prefix} ${prefix}-${name} ${prefix}-${type}`}
        style={colorStyles}
      >
        <use xlinkHref={`#${idPrefix + name}`} />
      </svg>
    </span>
  )
}

export default Icon

Icon.defaultProps = {
  type: 'dark',
  size: 'lg',
  prefix: 'kubed-icon',
  style: {},
  changeable: false,
  clickable: false,
  disabled: false,
  onClick() {},
}
