import Image from 'next/image';
import { Button } from '../ui/Button';
import { FormContainer } from '../ui/FormContainer';
import styles from './page.module.scss';
import { EditForm } from '../ui/EditForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Edit Feedback',
};

export default function EditFeedback() {
  return (
    <FormContainer>
      <div className={styles.buttonWrapper}>
        <Button color='back'>
          <Image
            alt='Back Button Icon'
            src='/assets/shared/icon-arrow-left.svg'
            width={4}
            height={8}
          />
          Go Back
        </Button>
      </div>
      <EditForm />
    </FormContainer>
  );
}
