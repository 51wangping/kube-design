import { Column, Columns, Space } from '@kube-design/components';
import React from 'react';

export default function Basic() {
  return (
    <Space>
      <Columns>
        <Column>
          <div className="grid-item is-dark">1</div>
        </Column>
        <Column>
          <div className="grid-item is-dark">2</div>
        </Column>
        <Column>
          <div className="grid-item is-dark">3</div>
        </Column>
        <Column>
          <div className="grid-item is-dark">4</div>
        </Column>
      </Columns>
    </Space>
  );
}
