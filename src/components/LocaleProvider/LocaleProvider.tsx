import locale from '@pitrix/lego-locale';
import { merge } from 'lodash';
import React, { Component } from 'react';
import defaultLocales from './locales';

export interface LocaleProviderProps {
  children: React.ReactNode;
  currentLocale: string;
  locales: { [name: string]: string };
  localeKey?: string;
  localeFallback: { [name: string]: string };
  ignoreWarnings?: boolean;
}

export interface LocaleProviderState {
  initDone: boolean;
  currentLocale?: string;
  curLocale?: string;
}

class LocaleProvider extends Component<
  LocaleProviderProps,
  LocaleProviderState
> {
  static locale = locale;

  static defaultProps = {
    locales: {},
    localeFallback: {
      'zh-CN': 'zh',
      'en-US': 'en',
    },
    ignoreWarnings: false,
  };

  constructor(props: LocaleProviderProps) {
    super(props);
    this.state = {
      initDone: false,
    };
  }

  static getDerivedStateFromProps(
    props: LocaleProviderProps,
    state: LocaleProviderState,
  ) {
    const { currentLocale: stateCurLocale, initDone } = state;
    const {
      currentLocale: nextCurLocale,
      locales,
      localeKey,
      localeFallback,
    } = props;
    let curLocale = null;
    if (!(nextCurLocale in locales)) {
      curLocale = locale.determineLocale({
        cookieLocaleKey: localeKey,
        urlLocaleKey: localeKey,
      });
      curLocale = localeFallback[curLocale] || curLocale;
    }
    if (nextCurLocale && nextCurLocale !== stateCurLocale) {
      curLocale = nextCurLocale;
    }
    if (initDone) {
      locale.setCurrentLocale(curLocale);
    }
    return { curLocale };
  }

  componentDidMount() {
    const { locales, ignoreWarnings } = this.props;
    const { curLocale } = this.state;
    locale
      .init({
        currentLocale: curLocale,
        locales: merge(defaultLocales, locales),
        ignoreWarnings,
      })
      .then(this.setState({ initDone: true }));
  }

  render() {
    const { children } = this.props;
    const { initDone } = this.state;
    return initDone ? React.Children.only(children) : null;
  }
}

export default LocaleProvider;
