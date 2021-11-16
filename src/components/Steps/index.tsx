import { forwardRef, Fragment, useCallback, useImperativeHandle, useState } from 'react';

import { Container, Step, StepBox, StepLine } from './styles';

export interface StepsFunctions {
  nextStep: () => void;
  prevStep: () => void;
}

interface StepsProps {
  children?: React.ReactNode;
  numberOfSteps: number;
  initialSteps: number;
}

const Steps: React.ForwardRefRenderFunction<StepsFunctions, StepsProps> = (
  { numberOfSteps, initialSteps },
  ref,
) => {
  const [currentStep, setCurrentStep] = useState<number>(initialSteps);

  const nextStep = useCallback(() => {
    setCurrentStep((prevState) => (prevState < numberOfSteps ? prevState + 1 : prevState));
  }, [numberOfSteps]);

  const prevStep = useCallback(() => {
    setCurrentStep((prevState) => (prevState > 1 ? prevState - 1 : prevState));
  }, []);

  useImperativeHandle(ref, () => {
    return {
      nextStep,
      prevStep,
    };
  });

  return (
    <Container>
      <StepBox>
        {Array.from({ length: numberOfSteps }, (_, i) => i + 1).map((value) => (
          <Fragment key={value}>
            {value > 1 && <StepLine active={value <= currentStep} />}
            <Step active={value <= currentStep} onClick={() => setCurrentStep(value)}>
              {value}
            </Step>
            {value < numberOfSteps && <StepLine active={value <= currentStep} />}
          </Fragment>
        ))}
      </StepBox>
    </Container>
  );
};

export default forwardRef(Steps);
