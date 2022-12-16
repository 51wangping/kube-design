import React, { Component } from 'react';
import type { BasicProps } from '../components/Layout/Basic';

type GeneratorHocClass = (
  BasicComponent: React.ElementType,
) => React.FunctionComponent<BasicProps> | any;

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
