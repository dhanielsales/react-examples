import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StepBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Step = styled.div<{ active: boolean }>`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ active }) => (active ? '#2dba4e' : '#c3c3c3')};
  border-radius: 100%;
  color: #fff;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  :hover,
  :active {
    filter: brightness(80%);
  }
`;

export const StepLine = styled.div<{ active: boolean }>`
  width: 30px;
  height: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ active }) => (active ? '#2dba4e' : '#c3c3c3')};
`;
