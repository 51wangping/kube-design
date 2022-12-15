import { Input, InputPassword, Space } from '@kube-design/components';
import React from 'react';

export default function Basic() {
  return (
    <Space size="large">
      <Space>
        <p>Normal</p>
        <Input name="test" placeholder="please input a word" />
      </Space>
      <Space>
        <p>readOnly</p>
        <Input name="test" placeholder="please input a word" readOnly />
      </Space>
      <Space>
        <p>Disabled</p>
        <Input name="test" placeholder="please input a word" disabled />
      </Space>
      <Space>
        <p>Password</p>
        <InputPassword name="password" defaultValue="password" />
      </Space>
    </Space>
  );
}
