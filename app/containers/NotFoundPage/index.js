/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import styled from 'styled-components';
import Img404 from '../../images/404.jpg';

const Wrapper = styled.article`
  text-align: center;
`;

export default function NotFound() {
  return (
    <Wrapper>
      <img src={Img404} alt="page not found" />
    </Wrapper>
  );
}
