import { Container } from './ui/Container';
import { ControlPanel } from './ui/ControlPanel';
import { Feedbacks } from './ui/Feedbacks';

export default function Home() {
  return (
    <Container>
      <ControlPanel />
      <Feedbacks />
    </Container>
  );
}
