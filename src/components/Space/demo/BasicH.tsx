import { Badge, Button, Space } from '@kube-design/components';
import React from 'react';

export default function Basic() {
  return (
    <Space direction="horizontal">
      <Button>Button</Button>
      <Button type="primary">Button</Button>
      <Button type="control">Button</Button>
      <Badge count={999} status="default" />
    </Space>
  );
}
