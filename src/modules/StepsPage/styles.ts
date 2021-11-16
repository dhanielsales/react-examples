import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  background-color: #2dba4e;
  border-radius: 10px;
  color: #fff;
  font-weight: bold;
  transition: all 0.2s ease-in-out;

  :hover,
  :active {
    filter: brightness(80%);
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
