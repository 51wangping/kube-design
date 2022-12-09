import React from 'react';
import ColorPellete from './ColorPellete';

const ColorDemo = () => {
  return (
    <>
      <ColorPellete
        title="Dark Color Pallete"
        colors={{
          '$dark-color01': '#79879c',
          '$dark-color02': '#6b7b95',
          '$dark-color03': '#5f708a',
          '$dark-color04': '#4a5974',
          '$dark-color05': '#404e68',
          '$dark-color06': '#36435c',
          '$dark-color07': '#242e42',
          '$dark-color08': '#181d28',
        }}
      />
      <ColorPellete
        title="Light Color Pallete"
        colors={{
          '$light-color01': '#f9fbfd',
          '$light-color02': '#eff4f9',
          '$light-color03': '#e3e9ef',
          '$light-color04': '#d8dee5',
          '$light-color05': '#d1d7df',
          '$light-color06': '#ccd3db',
          '$light-color07': '#c1c9d1',
          '$light-color08': '#abb4be',
        }}
      />
      <ColorPellete
        title="Green Color Pallete"
        colors={{
          '$green-color01': '#c4e6d4',
          '$green-color02': '#a2d8bb',
          '$green-color03': '#55bc8a',
          '$green-color04': '#479e88',
          '$green-color05': '#3b747a',
        }}
      />
      <ColorPellete
        title="Blue Color Pallete"
        colors={{
          '$blue-color01': '#c7deef',
          '$blue-color02': '#7eb8dc',
          '$blue-color03': '#329dce',
          '$blue-color04': '#3385b0',
          '$blue-color05': '#326e93',
        }}
      />
      <ColorPellete
        title="Red Color Pallete"
        colors={{
          '$red-color01': '#fae7e5',
          '$red-color02': '#ea8573',
          '$red-color03': '#ca2621',
          '$red-color04': '#ab2f29',
          '$red-color05': '#8c3231',
        }}
      />
      <ColorPellete
        title="Yellow Color Pallete"
        colors={{
          '$yellow-color01': '#ffe1be',
          '$yellow-color02': '#ffc781',
          '$yellow-color03': '#f5a623',
          '$yellow-color04': '#e0992c',
          '$yellow-color05': '#8d663e',
        }}
      />
    </>
  );
};

export default ColorDemo;
