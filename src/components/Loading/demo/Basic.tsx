import { Loading } from '@kube-design/components';
import React from 'react';

export default function Basic() {
  return (
    <div>
      <Loading size="large" />
      <Loading size="medium" />
      <Loading size="small" />
    </div>
  );
}
