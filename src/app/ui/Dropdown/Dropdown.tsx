'use client';

import Image from 'next/image';
import styles from './Dropdown.module.scss';
import { useCallback, useState } from 'react';

const options = ['Feature', 'UI', 'UX', 'Enhancement', 'Bug'];

export function Dropdown() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState('Feature');

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((isOpen) => !isOpen);
  }, []);
  // TEST THIS FUNCTION!!!
  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button
        type='button'
        className={styles.button}
        aria-expanded={isMenuOpen}
        onClick={toggleMenu}
        aria-controls='dropdown-options'
      >
        {selectedOption}
        <Image
          alt='Check Icon'
          src='/assets/shared/icon-downvote.svg'
          width={8}
          height={4}
        />
      </button>

      {isMenuOpen && (
        <ul className={styles.options}>
          {options.map((option) => (
            <li
              key={option}
              className={styles.option}
              onClick={() => handleOptionChange(option)}
            >
              {option}
              {option === selectedOption && (
                <Image
                  alt='Check Icon'
                  src='/assets/shared/icon-check.svg'
                  width={11}
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
