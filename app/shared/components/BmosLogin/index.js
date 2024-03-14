import React, { useEffect, useState } from 'react';
import { Checkbox } from 'antd';
import axios from 'axios';
import InputLogin from '../InputLogin';
import ButtonLogin from '../ButtonLoading';
import {
  Container,
  DivContentRight,
  DivLeft,
  DivRight,
  ImgLeft,
  ImgTitleRight,
  DivOption,
  SpanKeepingLogin,
  DivLinkForgotPassword,
  ButtonLoginUSB,
  DivInputUsername,
  DivInputPassword,
  FormItem,
  FormInput,
  DivError,
  LinkForgotPassword,
  ImageQr,
  DivBoxQr,
  DivTextQr,
  SpanText,
  DivButton,
  ButtonDownLoad,
  IconButton,
} from './styles';
import {
  LABEL_PASSWORD,
  LABEL_USER_NAME,
  REGEX_PASSWORD,
  TEXT_BTN_LOG_USB,
  TEXT_BTN_LOGIN,
  TEXT_FORGET_PASSWORD,
  TEXT_KEEP_LOGIN,
  TEXT_REQUIRE_PASSWORD,
  TEXT_REQUIRE_USER_NAME,
  TEXT_REQUIRE_USER_NAME_PASSWORD,
  TEXT_WRONG_ACCOUNT,
} from './constants';

const BmosLogin = ({
  // eslint-disable-next-line react/prop-types
  backgroundLeftImg,
  // eslint-disable-next-line react/prop-types
  backgroundRightImg,
  // eslint-disable-next-line react/prop-types
  logoLogin,
  // eslint-disable-next-line react/prop-types
  textRequireUserNamePassword,
  // eslint-disable-next-line react/prop-types
  textRequireUserName,
  // eslint-disable-next-line react/prop-types
  textRequirePassword,
  // eslint-disable-next-line react/prop-types
  textWrongAccount,
  // eslint-disable-next-line react/prop-types
  labelUserName,
  // eslint-disable-next-line react/prop-types
  labelPassword,
  // eslint-disable-next-line react/prop-types
  textKeepLogin,
  // eslint-disable-next-line react/prop-types
  textForgetPassword,
  // eslint-disable-next-line react/prop-types
  textBtnLogin,
  // eslint-disable-next-line react/prop-types
  isLoginUSB,
  // eslint-disable-next-line react/prop-types
  textBtnLogUSB,
  // eslint-disable-next-line react/prop-types
  url,
  // eslint-disable-next-line react/prop-types
  callbackResponse,
  // eslint-disable-next-line react/prop-types
  callbackError,
  // eslint-disable-next-line react/prop-types
  onClickLogin,
  // eslint-disable-next-line react/prop-types
  isWrong,
  // eslint-disable-next-line react/prop-types
  onClickForgetPassword,
  // eslint-disable-next-line react/prop-types
  Qrcode,
  // eslint-disable-next-line react/prop-types
  textDownload,
  // eslint-disable-next-line react/prop-types
  imageIos,
  // eslint-disable-next-line react/prop-types
  imageAndroid,
  // eslint-disable-next-line react/prop-types
  onClickIos,
  // eslint-disable-next-line react/prop-types
  onClickAndroid,
}) => {
  const [keepLogin, setKeepLogin] = useState(false);
  const [textError, setTextError] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    username: false,
    password: false,
  });
  const [dataLogin, setDataLogin] = useState({
    username: '',
    password: '',
  });

  useEffect(() => {
    if (isWrong) {
      setError({
        username: isWrong,
        password: isWrong,
      });
      setTextError(TEXT_WRONG_ACCOUNT || textWrongAccount);
    }
  }, [isWrong]);

  const onSubmitLogin = e => {
    e.preventDefault();
    setTextError('');
    onLogin();
  };

  const onLogin = () => {
    onClickLogin();
    const { username } = dataLogin;
    const { password } = dataLogin;
    const isValidNullUsername = username.length === 0;
    const isValidNullPassword = password.length === 0;
    const isValidPassword = !REGEX_PASSWORD.test(password);
    setError({
      username: isValidNullUsername && isValidPassword,
      password: isValidNullPassword && isValidPassword,
    });
    if (isValidNullUsername && isValidNullPassword) {
      setTextError(
        TEXT_REQUIRE_USER_NAME_PASSWORD || textRequireUserNamePassword,
      );
    } else if (isValidNullUsername) {
      setTextError(TEXT_REQUIRE_USER_NAME || textRequireUserName);
    } else if (isValidNullPassword) {
      setTextError(TEXT_REQUIRE_PASSWORD || textRequirePassword);
    } else if (isValidPassword) {
      setTextError(TEXT_WRONG_ACCOUNT || textWrongAccount);
    }
    if (!isValidNullUsername && !isValidPassword && !isValidNullPassword) {
      setLoading(true);
      const data = {
        username: username.trim(),
        password,
      };
      axios
        .post(url, data)
        .then(response => {
          setLoading(false);
          callbackResponse(response, keepLogin);
        })
        // eslint-disable-next-line no-shadow
        .catch(error => {
          setLoading(false);
          callbackError(error);
        });
    }
  };

  return (
    <Container>
      <DivLeft>
        <ImgLeft src={backgroundLeftImg} alt="anh bia" />
        {Qrcode && (
          <DivBoxQr>
            <ImageQr src={Qrcode} alt="" />
            <DivTextQr>
              <SpanText>{textDownload}</SpanText>
              <DivButton>
                <ButtonDownLoad onClick={onClickIos}>
                  {imageIos ? (
                    <IconButton src={imageIos} alt="" />
                  ) : (
                    <span> App Store</span>
                  )}
                </ButtonDownLoad>
                <ButtonDownLoad onClick={onClickAndroid}>
                  {imageAndroid ? (
                    <IconButton src={imageAndroid} alt="" />
                  ) : (
                    <span> Google Play</span>
                  )}
                </ButtonDownLoad>
              </DivButton>
            </DivTextQr>
          </DivBoxQr>
        )}
      </DivLeft>
      <DivRight background={backgroundRightImg}>
        <DivContentRight>
          <ImgTitleRight src={logoLogin} alt="image title" />
          <FormInput>
            <DivInputUsername>
              <FormItem name="email">
                <InputLogin
                  onChange={value =>
                    setDataLogin({ ...dataLogin, username: value })
                  }
                  label={LABEL_USER_NAME || labelUserName}
                  placeholder={LABEL_USER_NAME || labelUserName}
                  name="email"
                  error={error.username}
                />
              </FormItem>
            </DivInputUsername>
            <DivInputPassword>
              <FormItem name="password">
                <InputLogin
                  label={LABEL_PASSWORD || labelPassword}
                  placeholder={LABEL_PASSWORD || labelPassword}
                  name="password"
                  type="password"
                  onChange={value =>
                    setDataLogin({ ...dataLogin, password: value })
                  }
                  error={error.password}
                  onEnter={() => onLogin()}
                />
              </FormItem>
            </DivInputPassword>
            <DivError>{textError}</DivError>
            <DivOption>
              <Checkbox onChange={e => setKeepLogin(e.target.checked)}>
                <SpanKeepingLogin
                  style={keepLogin ? { color: ' #212529' } : null}
                >
                  {TEXT_KEEP_LOGIN || textKeepLogin}
                </SpanKeepingLogin>
              </Checkbox>
              <DivLinkForgotPassword>
                <LinkForgotPassword onClick={onClickForgetPassword}>
                  {TEXT_FORGET_PASSWORD || textForgetPassword}
                </LinkForgotPassword>
              </DivLinkForgotPassword>
            </DivOption>

            <ButtonLogin
              onClick={onSubmitLogin}
              loading={loading}
              value={TEXT_BTN_LOGIN || textBtnLogin}
            />
            {isLoginUSB ? (
              <ButtonLoginUSB>
                {TEXT_BTN_LOG_USB || textBtnLogUSB}
              </ButtonLoginUSB>
            ) : null}
          </FormInput>
        </DivContentRight>
      </DivRight>
    </Container>
  );
};

export default BmosLogin;
