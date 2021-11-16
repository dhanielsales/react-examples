import styled from 'styled-components';

interface OverlayProps {
  visible: boolean;
}

export const Overlay = styled.div<OverlayProps>`
  z-index: 0;
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  background-color: #00000060;
  transition: all 0.5s ease-in-out;
`;

export const Container = styled.div`
  transition: all 0.2s ease-in-out;
  z-index: 10;
  position: relative;
  width: 550px;
  min-height: 390px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
`;

export const Footer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
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
