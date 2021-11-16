import Link from 'next/link';
import { useCallback, useRef } from 'react';

import Steps, { StepsFunctions } from '~/components/Steps';

import { Button, Container, Footer } from './styles';

const StepsPage: React.FC = () => {
  const modalRef = useRef<StepsFunctions>(null);

  const handlePrevStep = useCallback(() => {
    modalRef.current?.prevStep();
  }, []);

  const handleNextStep = useCallback(() => {
    modalRef.current?.nextStep();
  }, []);

  return (
    <Container>
      <Link href="/">Go back</Link>
      <Steps numberOfSteps={10} initialSteps={1} ref={modalRef} />

      <Footer>
        <Button onClick={handlePrevStep}>Voltar</Button>
        <Button onClick={handleNextStep}>Avançar</Button>
      </Footer>
    </Container>
  );
};

export default StepsPage;
