/**
 * ...
 */

import React, { useState } from 'react';
import BmosLogin from 'shared/components/BmosLogin';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import bgLeft from '../../images/bgLeft.svg';
import bgRight from '../../images/bgRight.svg';
import logo from '../../images/bgLogoLogin.svg';
import { COOKIES, LOGIN_API_URL, STATUS_CODE } from '../../utils/constants';
import { NotificationPopup } from '../../shared/components/NotificationPopup';
import { ERROR } from '../../shared/components/NotificationPopup/constants';

const Login = () => {
  const navigate = useNavigate();
  const [isWrong, setIsWrong] = useState();

  const handleCallbackResponse = (res, isKeepLogin) => {
    if (res.status === STATUS_CODE.success) {
      Cookies.set(COOKIES.accessToken, res.data[COOKIES.accessToken]);
      Cookies.set(COOKIES.email, res.data[COOKIES.email]);
      Cookies.set(COOKIES.username, res.data[COOKIES.username]);
      Cookies.set(COOKIES.userId, res.data[COOKIES.userId]);
      if (isKeepLogin) {
        Cookies.set(COOKIES.refreshToken, res.data[COOKIES.refreshToken]);
      } else {
        Cookies.set(COOKIES.refreshToken, '');
      }
      navigate('/');
    }
  };

  const handleErrorResponse = err => {
    if (err.response.status === STATUS_CODE.authenticationError) {
      setIsWrong(true);
    } else {
      NotificationPopup(err.message, ERROR);
    }
  };

  return (
    <BmosLogin
      backgroundLeftImg={bgLeft}
      backgroundRightImg={bgRight}
      logoLogin={logo}
      url={LOGIN_API_URL}
      callbackResponse={handleCallbackResponse}
      callbackError={handleErrorResponse}
      onClickLogin={() => setIsWrong(false)}
      isWrong={isWrong}
    />
  );
};

export default Login;
