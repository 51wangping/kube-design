import { Button } from '@kube-design/components';
import React from 'react';

export default function WithIcon() {
  return (
    <div>
      <Button icon="add">Kube Design</Button>
      <Button icon="add" />
      <Button icon="add" type="flat" />
      <Button icon="add" disabled />
    </div>
  );
}
