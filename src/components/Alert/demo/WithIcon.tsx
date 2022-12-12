import { Alert, Space } from '@kube-design/components';
import React from 'react';

export default function WithIcon() {
  const customMessage = () => {
    return (
      <div style={{ marginTop: '10px', color: 'red' }}>custom Message</div>
    );
  };
  return (
    <Space>
      <Alert type="default" message="Default Text" title="Default title" />
      <Alert type="info" message="Info Text" title="Info title" />
      <Alert type="warning" message="Warning Text" title="Warning title" />
      <Alert type="error" message="Error Text" title="Error title" />
      <Alert
        type="error"
        message={customMessage()}
        title="Error title"
        icon="loudspeaker"
      />
    </Space>
  );
}
