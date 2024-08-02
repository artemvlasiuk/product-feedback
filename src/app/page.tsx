import { Container } from './ui/Container';
import { ControlPanel } from './ui/ControlPanel';
import { Suggestions } from './ui/Suggestions';

export default function Home() {
  return (
    <Container>
      <ControlPanel />
      <Suggestions />
    </Container>
  );
}
