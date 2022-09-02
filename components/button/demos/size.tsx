import React from 'react'
import { Button } from '@kube-design/components'
import '@kube-design/components/dist/index.css'

export default () => (
  <div id="components-button-demo-shape">
    <Button size="lg" type="primary">
      Large
    </Button>
    <Button size="md" type="info">
      Medium
    </Button>
    <Button size="sm">Small</Button>
  </div>
)
