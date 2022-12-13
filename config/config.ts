import { IConfig } from 'dumi';
import { menus } from './menus';
import { navs } from './navs';
const repo = 'kube-design';

const logo = 'https://kubesphere.com.cn/KubeSphere.ico';
const config: IConfig = {
  mode: 'site',
  title: 'kube-design',
  logo: logo,
  favicon: logo,
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
  locales: [
    ['zh', '中文'],
    ['en', 'English'],
  ],
  hash: true,
  themeConfig: {},
  exportStatic: {},
  dynamicImport: {},
  chainWebpack(memo, { createCSSRule }) {
    createCSSRule({
      lang: 'sass',
      test: new RegExp(/\.(scss|sass)$/),
      type: 'csr',
      loader: 'sass-loader',
    });
  },
  // styles: ['https://cdn.bootcdn.net/ajax/libs/bulma/0.9.4/css/bulma.min.css'],
};

export default config;

// (opts: { lang: string; type: "ssr" | "csr"; test: RegExp; loader?: string | undefined; options?: object | undefined; }): void
