import styled from 'styled-components';

const Button = styled.div`
  font-size: 1em;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  color: ${props => props.color || 'white'};
  padding: 10px 15px;
  background: ${props => props.background || '#FA8B34'};
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;

  :hover {
    -webkit-filter: drop-shadow(0px 0px 3px #000);
    filter: drop-shadow(0px 0px 3px #000);
  }
`;

const ImgIconAdd = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 8px;
`;

export { Button, ImgIconAdd };
