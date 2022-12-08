import { Icon } from '@kube-design/components';
import React from 'react';
import './index.scss';

interface Props {
  icons: string[];
}

export const IconDemoBlock: React.FC<{
  name: string;
  children?: React.ReactNode;
}> = ({ name, children }) => {
  return (
    <div className="iconDemoBlock">
      <div className="main">{children}</div>
      <div className="title">{name}</div>
    </div>
  );
};

export const DemoIcon: React.FC<Props> = ({ icons }) => {
  return (
    <div className="list">
      {icons.map((name: string) => (
        <IconDemoBlock name={name} key={name}>
          <Icon name={name} size="large" />
        </IconDemoBlock>
      ))}
    </div>
  );
};
