import { Button, Space } from '@kube-design/components';
import React from 'react';

export default function Basic() {
  return (
    <Space>
      <Space direction="horizontal" align="start">
        <Button>Button</Button>
        <Button type="primary">Button</Button>
        <Button type="control">Button</Button>
      </Space>
      <Space direction="horizontal" align="center">
        <Button>Button</Button>
        <Button type="primary">Button</Button>
        <Button type="control">Button</Button>
      </Space>
      <Space direction="horizontal" align="baseline">
        <Button>Button</Button>
        <Button type="primary">Button</Button>
        <Button type="control">Button</Button>
      </Space>
      <Space direction="horizontal" align="end">
        <Button>Button</Button>
        <Button type="primary">Button</Button>
        <Button type="control">Button</Button>
      </Space>
    </Space>
  );
}
