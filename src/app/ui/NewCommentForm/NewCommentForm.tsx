'use client'

import { useRef, useState } from 'react';
import { Button } from '../Button';
import styles from './NewCommentForm.module.scss';

export function NewCommentForm() {
  const [text, setText] = useState<string>('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  };

  return (
    <form className={styles.form}>
      <h4 className={styles.title}>Add Comment</h4>
      <textarea
        className={styles.textArea}
        name=''
        id=''
        placeholder={`Can't wait for dark mode!`}
        value={text}
        onChange={handleTextChange}
        ref={textAreaRef}
      ></textarea>
      <div className={styles.actions}>
        <p className={styles.chQuantity}>250 Characters left</p>
        <Button color='primary'>Post Comment</Button>
      </div>
    </form>
  );
}
