import { Icon, Space } from '@kube-design/components';
import { IconDemoBlock } from 'demos';
import React from 'react';

export default function Size() {
  return (
    <Space direction="horizontal">
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
    </Space>
  );
}
