import { Container } from './ui/Container';
import { ControlPanel } from './ui/ControlPanel';
import { Feedbacks } from './ui/Feedbacks';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Product Feedback Dashboard',
};

export default async function Home() {
  return (
    <Container>
      <ControlPanel />
      <Feedbacks />
    </Container>
  );
}
