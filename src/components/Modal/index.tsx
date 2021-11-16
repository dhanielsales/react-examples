import { forwardRef, useCallback, useImperativeHandle, useState } from 'react';

import { Button, Container, Footer, Overlay } from './styles';

export interface ModalFunctions {
  openModal: () => void;
}

interface ModalProps {
  title: string;
  children?: React.ReactNode;
}

const Modal: React.ForwardRefRenderFunction<ModalFunctions, ModalProps> = (
  { children, title },
  ref,
) => {
  const [visible, setVisible] = useState<boolean>(false);

  const openModal = useCallback(() => {
    setVisible(true);
  }, []);

  useImperativeHandle(ref, () => {
    return {
      openModal,
    };
  });

  return (
    <Overlay visible={visible}>
      <Container>
        <h1>{title}</h1>
        <p style={{ marginTop: '20px' }}>{children}</p>
        <Footer>
          <Button onClick={() => setVisible(false)}>Fechar</Button>
        </Footer>
      </Container>
    </Overlay>
  );
};

export default forwardRef(Modal);
