import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Styles, StyledLink, StyledSpan, StyledSpanLink } from './styles';

BreadcrumbComponent.propTypes = {
  routes: PropTypes.array,
};

BreadcrumbComponent.defaultProps = {
  routes: [
    {
      path: '/',
      breadcrumbName: 'Home',
    },
  ],
};

export default function BreadcrumbComponent(props) {
  const { t } = useTranslation();
  const { routes } = props;
  // eslint-disable-next-line no-shadow
  function itemRender(route, params, routes, paths) {
    const last = routes.indexOf(route) === routes.length - 1;
    return last ? (
      <StyledSpan>{t(route.keyName)}</StyledSpan>
    ) : (
      <StyledLink to={`/${paths.join('/')}`}>
        <StyledSpanLink>{t(route.keyName)}</StyledSpanLink>
      </StyledLink>
      // <StyledLink to={`/${paths.join('/')}`}>{route.breadcrumbName}</StyledLink>
    );
  }
  return <Styles itemRender={itemRender} items={routes} />;
}
