import { DatePicker, LocaleProvider } from '@kube-design/components';
import React from 'react';

export default function Basic() {
  return (
    <LocaleProvider currentLocale="zh">
      <div>
        <div style={{ padding: 20 }}>
          <label style={{ display: 'inline-block', width: 100 }}>Date: </label>
          <DatePicker
            name="start"
            onChange={(data, dataSting, instance) => {
              console.log(data, dataSting, instance, 'onChange');
            }}
            onOpen={(data, dataSting, instance) => {
              console.log(data, dataSting, instance, 'onOpen');
            }}
            onClose={(data, dataSting, instance) => {
              console.log(data, dataSting, instance, 'onClose');
            }}
            onClear={(data, dataSting, instance) => {
              console.log(data, dataSting, instance, 'onClose');
            }}
            onMonthChange={(data, dataSting, instance) => {
              console.log(data, dataSting, instance, 'onMonthChange');
            }}
            onYearChange={(data, dataSting, instance) => {
              console.log(data, dataSting, instance, 'onYearChange');
            }}
            onReady={(data, dataSting, instance) => {
              console.log(data, dataSting, instance, 'onReady');
            }}
            onValueUpdate={(data, dataSting, instance) => {
              console.log(data, dataSting, instance, 'onValueUpdate');
            }}
          />
        </div>
        <div style={{ padding: 20 }}>
          <label style={{ display: 'inline-block', width: 100 }}>
            Enable Time:{' '}
          </label>
          <DatePicker name="start" enableTime dateFormat={'Y-m-d H:i:S'} />
        </div>
        <div style={{ padding: 20 }}>
          <label style={{ display: 'inline-block', width: 100 }}>
            Enable Seconds:{' '}
          </label>
          <DatePicker
            name="start"
            enableTime
            enableSeconds
            dateFormat={'Y-m-d H:i:S'}
          />
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
