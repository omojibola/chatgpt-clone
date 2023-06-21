import { Comment } from '@/icons';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { query, collection, orderBy } from 'firebase/firestore';
import { db } from '@/firebase';
import Link from 'next/link';
import { truncate } from '@/lib/utils';

const ChatHistoryRow = ({ id }: { id: string }) => {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!pathname) return;
    setActive(pathname.includes(id));
  }, [pathname, id]);

  const [messages] = useCollection(
    session &&
      query(
        collection(db, 'users', session?.user?.email!, 'chats', id, 'messages'),
        orderBy('createdAt', 'asc')
      )
  );

  return (
    <div className='chat-wrapper__sidebar__history__row'>
      <Link
        href={`/chat/${id}`}
        className='chat-wrapper__sidebar__history__row__btn'
        style={{ background: active ? '#343541' : '' }}
      >
        <Comment />

        <p>{truncate(messages?.docs[0]?.data().text) || 'New Chat'}</p>
      </Link>
    </div>
  );
};

export default ChatHistoryRow;
