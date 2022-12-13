import { Badge, Space } from '@kube-design/components';
import React from 'react';

export default function Basic() {
  return (
    <Space direction="vertical">
      <Badge count={999} status="success" />
      <Badge count={999} status="warning" />
      <Badge count={999} status="error" />
    </Space>
  );
}
