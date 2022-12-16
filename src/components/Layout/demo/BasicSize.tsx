import { Column, Columns } from '@kube-design/components';
import React from 'react';

const GridDemo = () => (
  <div>
    {Array(11)
      .fill('')
      .map((_, index) => (
        <Columns key={index}>
          <Column className={`is-${index + 1}`}>
            <div className="grid-item is-dark">is-{index + 1}</div>
          </Column>
          <Column key={index}>
            <div className="grid-item">Auto</div>
          </Column>
        </Columns>
      ))}
  </div>
);

export default GridDemo;
