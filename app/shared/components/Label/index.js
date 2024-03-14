import React from 'react';
import PropTypes from 'prop-types';

import { RedStart, Wrapper } from './style';

const Label = ({ title, isRequired }) => (
  <Wrapper>
    {title} {isRequired && <RedStart>*</RedStart>}
  </Wrapper>
);

export default Label;
Label.propTypes = {
  isRequired: PropTypes.bool,
  title: PropTypes.string,
};
