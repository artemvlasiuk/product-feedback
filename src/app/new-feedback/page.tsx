import Image from 'next/image';
import { Button } from '../ui/Button';
import styles from './page.module.scss';
import { NewFeedbackForm } from '../ui/NewFeedbackForm';
import { FormContainer } from '../ui/FormContainer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create  New Feedback',
};

export default function NewFeedback() {
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
      <NewFeedbackForm />
    </FormContainer>
  );
}
