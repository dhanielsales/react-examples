import Link from 'next/link';
import { useCallback, useRef } from 'react';

import Modal, { ModalFunctions } from '~/components/Modal';
import { Button } from '~/components/Modal/styles';

import { Container } from './styles';

const ModalPage: React.FC = () => {
  const modalRef = useRef<ModalFunctions>(null);

  const toggleModal = useCallback(() => {
    modalRef.current?.openModal();
  }, []);

  return (
    <Container>
      <Link href="/">Go back</Link>

      <Button onClick={toggleModal}>Open Modal</Button>
      <Modal ref={modalRef} title="Title of the Modal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae tempora ad quod saepe
        assumenda veritatis nihil modi architecto porro commodi voluptates odit quisquam iste
        beatae, sapiente molestias fuga. Voluptatibus, incidunt? Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Fugiat eum quidem voluptatum nemo nostrum sapiente, illum
        corporis totam! Ipsa cum deleniti explicabo, odio repellat vitae odit enim ea porro velit?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae reiciendis laborum dolore,
        velit soluta unde voluptatibus corporis earum consequatur ea laudantium natus, quo
        perferendis totam fugit saepe officiis accusamus ullam!
      </Modal>
    </Container>
  );
};

export default ModalPage;
