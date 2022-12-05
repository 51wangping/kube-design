import React, { Component } from 'react';
type GeneratorHocClass = (
  BasicComponent: React.ComponentType<any>,
) => React.ComponentType;

type GeneratorProps = (props: {
  [propsName: string]: any;
}) => GeneratorHocClass;

const Generator: GeneratorProps = (props) => (BasicComponent) =>
  class Adapter extends Component {
    render() {
      return <BasicComponent {...props} {...this.props} />;
    }
  };

export default Generator;
