import React, { useEffect, useState } from 'react'
import { Icon } from '@kube-design/components'
import '@kube-design/components/dist/index.css'

const IconWrapperStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}

const ComponentsWrapperStyles: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
}

export default () => (
  <div id="components" style={ComponentsWrapperStyles}>
    <div style={IconWrapperStyles}>
      <Icon name="javascript" size="lg" />
      <span>javascript</span>
    </div>
    <div style={IconWrapperStyles}>
      <Icon name="javascript" size="md" />
      <span>javascript</span>
    </div>
    <div style={IconWrapperStyles}>
      <Icon name="javascript" size="sm" />
      <span>javascript</span>
    </div>
  </div>
)
