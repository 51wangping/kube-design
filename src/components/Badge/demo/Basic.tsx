import { Badge, Space } from '@kube-design/components';
import React from 'react';

export default function Basic() {
  return (
    <Space>
      <Space direction="horizontal">
        <Badge count={20} status="default" />
        <Badge count={20} status="success" />
        <Badge count={20} status="warning" />
        <Badge count={20} status="error" />
      </Space>
      <Space direction="horizontal">
        <Badge count={999} status="default" />
        <Badge count={999} status="success" />
        <Badge count={999} status="warning" />
        <Badge count={999} status="error" />
      </Space>
      <Space direction="horizontal">
        <Badge count={99} status="error" />
        <Badge count={100} status="error" />
        <Badge count={99} overflowCount={10} status="error" />
        <Badge count={1000} overflowCount={999} status="error" />
      </Space>
    </Space>
  );
}
