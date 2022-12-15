import { Button, Dropdown, Menu, Space } from '@kube-design/components';
import React from 'react';

export default function Basic() {
  function Context() {
    return (
      <Menu>
        <Menu.MenuItem key="option-1">value-1</Menu.MenuItem>
        <Menu.MenuItem key="option-2">value-2</Menu.MenuItem>
        <Menu.MenuItem key="option-3">value-3</Menu.MenuItem>
      </Menu>
    );
  }

  return (
    <Space direction="horizontal" wrap>
      <Dropdown content={Context}>
        <Button>Dropdown</Button>
      </Dropdown>
      <Dropdown theme="dark" content={Context()}>
        <Button>Dark Dropdown</Button>
      </Dropdown>

      <Dropdown theme="dark" content={Context()}>
        <Button icon="add" iconType="light" type="primary">
          Dark Dropdown
        </Button>
      </Dropdown>
    </Space>
  );
}
