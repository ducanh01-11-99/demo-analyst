/**
 * ...
 */

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet/es/Helmet';
import { useSpeechSynthesis } from 'react-speech-kit';
import { Button } from 'antd';
import styled from 'styled-components';
import { Container } from '../../common.styles';
import SearchTextHighLight from '../../components/demo/SearchTextHighLight';
import { SvgIconBotStyled } from './styled';
import SvgIconBot from '../../components/svg/IconBot';

// eslint-disable-next-line no-unused-vars
const SpanStyled = styled.span`
  background-color: #979752;
`;

const TextToVoice = () => {
  const { t } = useTranslation();
  const [text, setText] = useState('Tôi là Nguyễn Quang Huy');
  const { speak, voices } = useSpeechSynthesis();

  const handleSpeak = () => {
    speak({ text });
  };

  const selectVoice = voice => {
    const speechText = new SpeechSynthesisUtterance(
      'Xin chào! Tôi là một ví dụ về nói tiếng Việt bằng ReactJS.',
    );
    speechText.lang = 'vi-VN';
    speechText.voice = voice;
    speak(speechText);
  };

  return (
    <>
      <Container>
        <Helmet title={t('common.textToVoice')}>
          <meta name="description" content="AI Event Management System" />
        </Helmet>
        <div>
          <div>{t('common.textToVoice')}</div>
          <SvgIconBotStyled width={200} height={150} />
          <SvgIconBot width={200} height={150} fill="red" />
          <SearchTextHighLight />
          <div>
            <input
              type="text"
              value={text}
              onChange={e => setText(e.target.value)}
            />
            <Button onClick={() => handleSpeak()}>Speak</Button>
          </div>
          <div>
            <select onChange={e => selectVoice(e.target.value)}>
              {voices.map((voice, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <option key={index} value={voice}>
                  {voice.name}
                </option>
              ))}
            </select>
            <Button onClick={speak}>Nói tiếng Việt</Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TextToVoice;
