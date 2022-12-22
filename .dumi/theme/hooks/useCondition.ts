import { context } from 'dumi/theme';
import { Location } from 'history-with-query';
import { useContext } from 'react';

export const useCondition = (
  condition: 'isCN' | 'isHome' | 'showSideMenu' | 'showSlugs' | 'showDevice',
  location: Location,
) => {
  const { meta, locale } = useContext(context);
  const hasDemo = !!meta?.demo;

  if (condition === 'isCN') {
    return locale && /^zh|cn$/i.test(locale);
  }

  const isHome = !!meta?.hero || location?.pathname.replace(locale, '') === '/';
  if (condition === 'isHome') {
    return isHome;
  }

  if (condition === 'showSideMenu') {
    const showSideMenu = meta.sidemenu !== false && !isHome && !meta.gapless;
    return showSideMenu;
  }
};
