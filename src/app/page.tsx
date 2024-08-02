import { Container } from './ui/Container';
import { ControlPanel } from './ui/ControlPanel';
import { Header } from './ui/Header';
import { TopBar } from './ui/TopBar';

export default function Home() {
  return (
    <Container>
      <ControlPanel />
      <Header />
      <TopBar />
    </Container>
  );
}
