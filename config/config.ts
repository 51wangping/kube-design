import { IConfig } from 'dumi';
import { menus } from './menus';
import { navs } from './navs';
const repo = '@kube-design/components';

const config: IConfig = {
  mode: 'site',
  title: 'kube-design',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  navs,
  menus,
  resolve: {
    includes: ['docs', 'src'],
    passivePreview: true,
  },
  publicPath: `/${repo}/`,
  base: `/${repo}`,
  alias: {
    '@kube-design/components/es': process.cwd() + '/src',
    demos: process.cwd() + '/src/demos/index.ts',
  },
  metas: [],
  hash: true,
  themeConfig: {},
  exportStatic: {},
  dynamicImport: {},
};

export default config;
