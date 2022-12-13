import { Button, Space } from '@kube-design/components';
import React from 'react';

export default function Basic() {
  return (
    <Space>
      <Space direction="horizontal" size="small">
        <Button>Button</Button>
        <Button type="primary">Button</Button>
        <Button type="control">Button</Button>
      </Space>
      <Space direction="horizontal" size="medium">
        <Button>Button</Button>
        <Button type="primary">Button</Button>
        <Button type="control">Button</Button>
      </Space>
      <Space direction="horizontal" size="large">
        <Button>Button</Button>
        <Button type="primary">Button</Button>
        <Button type="control">Button</Button>
      </Space>
    </Space>
  );
}
