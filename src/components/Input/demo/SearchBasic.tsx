import { InputSearch, Space } from '@kube-design/components';
import React from 'react';

export default function Basic() {
  return (
    <Space>
      <InputSearch name="search" placeholder="please input a word" />
    </Space>
  );
}
