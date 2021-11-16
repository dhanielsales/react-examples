import Link from 'next/link';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Link href="/modal">Modal Page</Link>
      <Link href="/steps">Steps Page</Link>
    </Container>
  );
};

export default Home;
