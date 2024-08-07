'use client';

import Image from 'next/image';
import styles from './Dropdown.module.scss';
import { useCallback, useState } from 'react';

export interface DropdownProps {
  options: string[];
  type: string;
  changeType: (option: string) => void;
}

export function Dropdown({ options, type, changeType }: DropdownProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((isOpen) => !isOpen);
  }, []);
  // TEST THIS FUNCTION!!!
  const handleOptionChange = (option: string) => {
    changeType(option);
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
        {type}
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
              {option === type && (
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
