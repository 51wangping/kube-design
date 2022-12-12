import { Button } from '@kube-design/components';
import React from 'react';

export default function WithLoading() {
  return (
    <div>
      <Button type="primary" loading={true}>
        Kube Design
      </Button>
      <Button type="control" loading={true}>
        Kube Design
      </Button>
      <Button type="danger" loading={true}>
        Kube Design
      </Button>
      <Button type="flat" loading={true}>
        Kube Design
      </Button>
      <Button type="default" loading={true}>
        Kube Design
      </Button>
      <Button type="default" loading={true} ghost>
        Kube Design
      </Button>
    </div>
  );
}
