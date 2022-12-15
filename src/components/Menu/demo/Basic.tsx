import { Menu, Space } from '@kube-design/components';
import React from 'react';

export default function Basic() {
  return (
    <Space direction="horizontal" wrap>
      <Menu
        selectedKey="option-1"
        onClick={(e, value, index) => console.log(e, value, index)}
      >
        <Menu.MenuItem key="option-1" value="option1">
          value-1
        </Menu.MenuItem>
        <Menu.MenuItem key="option-2" value="option2">
          value-2
        </Menu.MenuItem>
        <Menu.MenuItem key="option-3">value-3</Menu.MenuItem>
      </Menu>
    </Space>
  );
}
