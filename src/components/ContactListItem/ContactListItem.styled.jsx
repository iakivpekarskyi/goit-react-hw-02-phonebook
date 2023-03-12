import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  width: 350px;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-size: 18px;
`;

export const Button = styled.button`
  background-color: #ffffff;

  font-size: 24px;
  color: #aeaeae;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  :hover,
  :focus {
    background-color: #ffffff;
    color: #7b7b7b;
    box-shadow: rgba(100, 100, 111, 0.4) 0px 7px 29px 0px;
    border: #ffffff;
  }
`;
