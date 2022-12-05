import { Icon } from '@kube-design/components';
import React, { FC } from 'react';
import './index.scss';

interface Props {
  icons: string[];
}

export const DemoIcon: FC<Props> = ({ icons }) => {
  return (
    <div className="list">
      {icons.map((name: string) => (
        <div className="iconDemoBlock" key={name}>
          <div className="main">
            <Icon name={name} size="large" />
          </div>
          <div className="title">{name}</div>
        </div>
      ))}
    </div>
  );
};
