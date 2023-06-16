import { Navbar, TextRevealLoop } from '@/components';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='nav-hero' style={{ background: '#015453' }}>
      <Navbar />
      <TextRevealLoop />
    </main>
  );
}
