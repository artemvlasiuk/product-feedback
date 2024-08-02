import { Header } from '../Header';
import { NoFeedback } from '../NoFeedback';
import { SuggestionsList } from '../SuggestionsList';
import { TopBar } from '../TopBar';
import styles from './Suggestions.module.scss';

export function Suggestions() {
  return (
    <main className={styles.suggestions}>
      <Header />
      <TopBar />
      <SuggestionsList />
      
    </main>
  );
}
