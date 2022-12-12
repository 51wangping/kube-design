import { Alert, Space } from '@kube-design/components';
import React from 'react';

export default function Basic() {
  return (
    <Space>
      <Alert type="default" message="Default Text" />
      <Alert type="info" message="Info Text" />
      <Alert type="warning" message="Warning Text" />
      <Alert type="error" message="Error Text" />
    </Space>
  );
}
