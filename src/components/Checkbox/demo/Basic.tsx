import { Checkbox } from '@kube-design/components';
import React from 'react';

export default function Basic() {
  return (
    <div>
      <Checkbox>Checkbox</Checkbox>
      <Checkbox disabled>Checkbox</Checkbox>
      <Checkbox disabled checked>
        Checkbox
      </Checkbox>
      <Checkbox indeterminate>Checkbox</Checkbox>
      <Checkbox checked>Checkbox</Checkbox>
      <Checkbox
        value={'check'}
        onChange={(checked: boolean, val) => {
          console.log(checked, val);
        }}
      >
        Checkbox
      </Checkbox>
    </div>
  );
}
