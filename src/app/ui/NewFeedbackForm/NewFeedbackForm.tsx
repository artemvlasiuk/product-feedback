'use client';

import styles from './NewFeedbackForm.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '../Button';
import { Textarea } from '../Textarea';
import { Dropdown } from '../Dropdown';

export function NewFeedbackForm() {
  const [feedbackText, setFeedBackText] = useState<string>('');

  return (
    <form className={styles.form}>
      <div className={styles.imageWrapper}>
        <Image
          alt='New Feedback Icon'
          src='/assets/shared/icon-new-feedback.svg'
          width={40}
          height={40}
        />
      </div>
      <h2 className={styles.title}>Create New Feedback</h2>
      <label htmlFor='title' className={styles.label}>
        Feedback Title
        <span>Add a short, descriptive headline</span>
        <input type='text' id='title' className={styles.input} />
      </label>
      <label className={styles.label}>
        Category
        <span>Choose a category for your feedback</span>
        <Dropdown />
      </label>
      <label className={styles.label}>
        Feedback Detail
        <span>
          Include any specific comments on what should be improved, added, etc.
        </span>
        <Textarea
          placeholder={`Type your feedback here`}
          value={feedbackText}
          onChange={(e) => setFeedBackText(e.target.value)}
        />
      </label>
      <div className={styles.buttons}>
        <Button color='primary'>Add Feedback</Button>
        <Button color='secondary'>Cancel</Button>
      </div>
    </form>
  );
}
