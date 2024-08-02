'use client';

import Image from 'next/image';
import styles from './SortSelector.module.scss';
import { useCallback, useState } from 'react';

export type SortOption =
  | 'Most Upvotes'
  | 'Least Upvotes'
  | 'Most Comments'
  | 'Least Comments';

const options: SortOption[] = [
  'Most Upvotes',
  'Least Upvotes',
  'Most Comments',
  'Least Comments',
];

export function SortSelector() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [selectedSort, setSelectedSort] = useState<SortOption>('Most Upvotes');

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((isOpen) => !isOpen);
  }, []);

  const handleSortChange = (option: SortOption) => {
    setSelectedSort(option);
    setIsMenuOpen(false);
  };

  const arrowIconPath = isMenuOpen
    ? '/assets/shared/icon-arrow-up.svg'
    : '/assets/shared/icon-arrow-down.svg';

  return (
    <div className={styles.sort}>
      Sort by :
      <button
        className={styles.sort__btn}
        type='button'
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-controls='sort-options'
      >
        {selectedSort}
        <Image alt='Arrow Icon' src={arrowIconPath} width={8} height={4} />
      </button>
      {isMenuOpen && (
        <ul id='sort-options' className={styles.options}>
          {options.map((option) => (
            <li
              key={option}
              className={styles.option}
              onClick={() => handleSortChange(option)}
            >
              {option}
              {option === selectedSort && (
                <Image
                  alt='Check Icon'
                  src='/assets/shared/icon-check.svg'
                  width={12}
                  height={8}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
