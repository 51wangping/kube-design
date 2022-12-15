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
      <Dropdown theme="dark" placement="bottomLeft" content={Context()}>
        <Button>bottomLeft</Button>
      </Dropdown>
      <Dropdown theme="dark" placement="bottomRight" content={Context()}>
        <Button>bottomRight</Button>
      </Dropdown>
      <Dropdown theme="dark" placement="left" content={Context()}>
        <Button>left</Button>
      </Dropdown>
      <Dropdown theme="dark" placement="leftBottom" content={Context()}>
        <Button>leftBottom</Button>
      </Dropdown>
      <Dropdown theme="dark" placement="leftTop" content={Context()}>
        <Button>leftTop</Button>
      </Dropdown>
      <Dropdown theme="dark" placement="right" content={Context()}>
        <Button>leftTop</Button>
      </Dropdown>
      <Dropdown theme="dark" placement="rightBottom" content={Context()}>
        <Button>leftTop</Button>
      </Dropdown>
      <Dropdown theme="dark" placement="rightTop" content={Context()}>
        <Button>leftTop</Button>
      </Dropdown>
      <Dropdown theme="dark" placement="top" content={Context()}>
        <Button>leftTop</Button>
      </Dropdown>
      <Dropdown theme="dark" placement="topLeft" content={Context()}>
        <Button>leftTop</Button>
      </Dropdown>
      <Dropdown theme="dark" placement="topRight" content={Context()}>
        <Button>leftTop</Button>
      </Dropdown>
    </Space>
  );
}
