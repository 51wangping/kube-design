import { CheckboxGroup } from '@kube-design/components';
import React from 'react';

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];

export default function Basic() {
  const onChange = (checkedValues: any) => {
    console.log('checked = ', checkedValues);
  };

  return (
    <div>
      <CheckboxGroup options={options}></CheckboxGroup>
      <CheckboxGroup
        disabled
        defaultValue={['Apple']}
        options={optionsWithDisabled}
        onChange={onChange}
      ></CheckboxGroup>
    </div>
  );
}
