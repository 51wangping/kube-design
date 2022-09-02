import React, { useEffect, useState } from 'react'
import { Icon } from '@kube-design/components'
import svgSprites from '../spirits'
import '@kube-design/components/dist/index.css'

const IconWrapperStyles: React.CSSProperties = {
  display: 'flex',
  width: '100px',
  height: '90px',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}

const ComponentsWrapperStyles: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
}

export default () => {
  const [icons, setIcons] = useState<string[]>([])
  useEffect(() => {
    const arr: string[] = []
    svgSprites.replace(/id="icon-([\w-]+)"/g, (a, b) => {
      arr.push(b)
      return '$&'
    })
    setIcons(arr)
  }, [svgSprites])

  return (
    <div id="components" style={ComponentsWrapperStyles}>
      {icons?.map((name, i) => (
        <div key={`${name + i}`} style={IconWrapperStyles}>
          <Icon name={name} size="lg" />
          <span>{name}</span>
        </div>
      ))}
    </div>
  )
}
