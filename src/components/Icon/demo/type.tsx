import { Icon } from '@kube-design/components';
import { IconDemoBlock } from 'demos';
import React from 'react';

export default function Size() {
  return (
    <div style={{ display: 'flex' }}>
      <IconDemoBlock name="docker">
        <Icon name="docker" size="large" type="dark" />
      </IconDemoBlock>
      <IconDemoBlock name="docker">
        <Icon name="docker" size="medium" type="light" />
      </IconDemoBlock>
      <IconDemoBlock name="docker">
        <Icon name="docker" size="small" type="coloured" />
      </IconDemoBlock>
      <IconDemoBlock name="docker">
        <Icon name="docker" size={56} />
      </IconDemoBlock>
    </div>
  );
}
