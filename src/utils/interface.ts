import { tuple } from './type';

const SizeTypes = tuple('small', 'medium', 'large');
export type SizeType = typeof SizeTypes[number];

const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];
