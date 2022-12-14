import { DatePicker, LocaleProvider } from '@kube-design/components';
import React from 'react';

export default function Basic() {
  return (
    <LocaleProvider currentLocale="zh">
      <div>
        <div style={{ padding: 20 }}>
          <label style={{ display: 'inline-block', width: 100 }}>Date: </label>
          <DatePicker name="start" dateFormat={'Y-m-d H:i:S'} />
        </div>
        <div style={{ padding: 20 }}>
          <label style={{ display: 'inline-block', width: 100 }}>
            Enable Time:{' '}
          </label>
          <DatePicker name="start" enableTime dateFormat={'Y-m-d H:i:S'} />
        </div>
        <div style={{ padding: 20 }}>
          <label style={{ display: 'inline-block', width: 100 }}>
            Time Range:{' '}
          </label>
          <DatePicker name="start" mode="range" dateFormat={'Y-m-d H:i:S'} />
        </div>
      </div>
    </LocaleProvider>
  );
}
