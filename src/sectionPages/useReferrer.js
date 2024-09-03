import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const useReferrer = () => {
  const [referrer, setReferrer] = useState('');
  const router = useRouter();

  useEffect(() => {
    const currentReferrer = document.referrer;
    console.log('Referrer:', currentReferrer);
    if (currentReferrer) {
      console.log('Referrer:', currentReferrer);
      setReferrer(currentReferrer);
    }

    // Optionally, store the referrer in localStorage or state if needed
    // localStorage.setItem('lastReferrer', currentReferrer);
  }, [router.asPath]);

  return referrer;
};
