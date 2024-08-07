'use client';

import { useState } from 'react';
import { Button } from '../Button';
import { Dropdown } from '../Dropdown';
import { Textarea } from '../Textarea';
import styles from './EditForm.module.scss';
import Image from 'next/image';

export function EditForm() {
  const statusOptions = ['Planned', 'Suggestion', 'In-Progress', 'Live'];
  const categoryOptions = ['Feature', 'UI', 'UX', 'Enhancement', 'Bug'];
  const [edit, setEdit] = useState<string>('');
  const [category, setCategory] = useState('Feature');
  const [status, setStatus] = useState('Planned');

  return (
    <form className={styles.editForm}>
      <div className={styles.imageWrapper}>
        <Image
          alt='New Feedback Icon'
          src='/assets/shared/icon-edit-feedback.svg'
          width={40}
          height={40}
        />
      </div>
      <h2 className={styles.title}>Editing ‘Add a dark theme option’</h2>
      <label htmlFor='title' className={styles.label}>
        Feedback Title
        <span>Add a short, descriptive headline</span>
        <input type='text' id='title' className={styles.input} />
      </label>
      <label className={styles.label}>
        Category
        <span>Choose a category for your feedback</span>
        <Dropdown
          options={categoryOptions}
          type={category}
          changeType={setCategory}
        />
      </label>
      <label className={styles.label}>
        Update Status
        <span>Change feature state</span>
        <Dropdown
          options={statusOptions}
          type={status}
          changeType={setStatus}
        />
      </label>
      <label className={styles.label}>
        Feedback Detail
        <span>
          Include any specific comments on what should be improved, added, etc.
        </span>
        <Textarea
          value={edit}
          placeholder={`It would help people with light sensitivities and who prefer dark mode.`}
          onChange={(e) => setEdit(e.target.value)}
        />
      </label>
      <div className={styles.buttons}>
        <Button color='primary'>Save Changes</Button>
        <Button color='secondary'>Cancel</Button>
        <div className={styles.buttonWrapper}>
          <Button color='danger'>Delete</Button>
        </div>
      </div>
    </form>
  );
}
