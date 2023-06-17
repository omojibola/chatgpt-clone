'use client';
import { Session } from 'next-auth';
import { SessionProvider as Provider } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

type Props = {
  children: React.ReactNode;
  session: Session | null;
};

const SessionProvider = ({ children, session }: Props) => {
  const router = useRouter();
  useEffect(() => {
    const pushRoute = () => {
      router.push('/auth/login');
    };
    if (!session) {
      pushRoute();
    }
  }, [session]);

  return <Provider>{children}</Provider>;
};

export default SessionProvider;
