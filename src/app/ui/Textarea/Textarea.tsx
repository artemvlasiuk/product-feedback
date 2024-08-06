import React, { useRef } from 'react';
import styles from './Textarea.module.scss';

interface TextareaProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function Textarea({ placeholder, value, onChange }: TextareaProps) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e);
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  };

  return (
    <textarea
      className={styles.textArea}
      placeholder={placeholder}
      value={value}
      onChange={handleTextChange}
      ref={textAreaRef}
    ></textarea>
  );
}
