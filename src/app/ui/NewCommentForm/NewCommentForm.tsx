'use client';

import { useState } from 'react';
import { Button } from '../Button';
import styles from './NewCommentForm.module.scss';
import { Textarea } from '../Textarea';

export function NewCommentForm() {
  const [text, setText] = useState<string>('');

  return (
    <form className={styles.form}>
      <h4 className={styles.title}>Add Comment</h4>
      <Textarea
        placeholder={`Can't wait for dark mode!`}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className={styles.actions}>
        <p className={styles.chQuantity}>250 Characters left</p>
        <Button color='primary'>Post Comment</Button>
      </div>
    </form>
  );
}
