interface Message {
  text: string;
  response?: string;
  createdAt?: admin.firestore.Timestamp;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
}
