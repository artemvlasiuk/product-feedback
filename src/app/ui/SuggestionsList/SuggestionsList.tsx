import { SuggestionCard } from '../SuggestionCard';
import styles from './SuggestionsList.module.scss';

export function SuggestionsList() {
  return (
    <ul className={styles.list}>
      <SuggestionCard />
      <SuggestionCard />
      <SuggestionCard />
      <SuggestionCard />
    </ul>
  );
}
