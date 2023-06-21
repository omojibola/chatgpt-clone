'use client';
import { Navbar, TextRevealLoop } from '@/components';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push('/auth/');
  }, []);

  return (
    <main className='nav-hero' style={{ background: '#015453' }}>
      <Navbar />
    </main>
  );
}
