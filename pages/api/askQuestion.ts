import query from '@/lib/queryApi';
import type { NextApiRequest, NextApiResponse } from 'next';
import admin from 'firebase-admin';
import { adminDb } from '@/firebaseAdmin';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model, session } = req.body;
  if (!prompt) {
    res.status(400).json({ answer: 'Please provode a prompt' });
    return;
  }

  if (!chatId) {
    res.status(400).json({ answer: 'Please provode a valid chatid' });
    return;
  }

  //chatgpt query
  const response = await query(prompt, chatId, model);

  const message: Message = {
    text: prompt,
    response: response || 'ChatGPT could not find an answer for that',
    createdAt: serverTimestamp(),
    user: {
      _id: session?.user?.email!,
      name: session?.user?.name!,
      avatar: session?.user?.image! || '',
    },
  };

  const chatgptRes: Message = {
    text: response || 'ChatGPT could not find an answer for that',
    user: {
      _id: 'chatgpt',
      name: 'chatgpt',
      avatar: 'https://links.papareact.com/89k',
    },
  };

  await addDoc(
    collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'),
    message
  );

  // await addDoc(collection(db, 'users', session?.user?.email!, 'chats'), {
  //   createdAt: serverTimestamp(),
  //   question,
  //   chatgptRes,
  // });

  //   await adminDb
  //     .collection('users')
  //     .doc(session?.user?.email)
  //     .collection('chats')
  //     .doc('testid')
  //     .collection('messages')
  //     .add(message);

  res.status(200).json({ answer: chatgptRes.text });
}
