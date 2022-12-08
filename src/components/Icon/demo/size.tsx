import { Icon } from '@kube-design/components';
import { IconDemoBlock } from 'demos';
import React from 'react';

export default function Size() {
  return (
    <div style={{ display: 'flex' }}>
      <IconDemoBlock name="docker">
        <Icon name="docker" size="large" />
      </IconDemoBlock>
      <IconDemoBlock name="docker">
        <Icon name="docker" size="medium" />
      </IconDemoBlock>
      <IconDemoBlock name="docker">
        <Icon name="docker" size="small" />
      </IconDemoBlock>
      <IconDemoBlock name="docker">
        <Icon name="docker" size={56} />
      </IconDemoBlock>
    </div>
  );
}
