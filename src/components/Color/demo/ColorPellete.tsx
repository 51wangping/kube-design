import React from 'react';
import './styles.scss';

export interface ColorPelleteProps {
  title: string;
  colors: { [colorName: string]: string };
}

function hexToRgbA(hex: string) {
  let c: any;

  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return (
      'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',1)'
    );
  }
  throw new Error('Bad Hex');
}

const Item = ({ name, value }: { name: string; value: string }) => (
  <div className="color-item">
    <div className="color-item-square" style={{ backgroundColor: value }} />
    <div className="color-item-prop">
      <p>Color Variable</p>
      <div>{name}</div>
    </div>
    <div className="color-item-prop">
      <p>Color Hex</p>
      <div>{value}</div>
    </div>
    <div className="color-item-prop">
      <p>Color RGBA</p>
      <div>{hexToRgbA(value)}</div>
    </div>
  </div>
);

const ColorPellete = ({ title, colors }: ColorPelleteProps) => (
  <div className="color-card">
    <div className="color-card-title">{title}</div>
    {Object.keys(colors).map((key) => (
      <Item key={key} name={key} value={colors[key]} />
    ))}
  </div>
);

export default ColorPellete;
