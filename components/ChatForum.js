"use client"

import { useState, useEffect } from 'react';
import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/v2/index.css';

const apiKey = 'kqm5c2a3yjak';
const userId = 'user_2rTh2LvYGneiRLxtmXq6IZMw369';
const userName = 'KIRAN';
const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidXNlcl8yclRoMkx2WUduZWlSTHh0bVhxNklaTXczNjkifQ.hPFgO2Nzcb6F85ax67wco6Dg4X8uEd8eEk_S6w6DDrY';


const user = {
  id: userId,
  name: userName,
  image: `https://getstream.io/random_png/?name=${userName}`,
};

export default function ChatForum({slug}){
  function toTitleCase(str){
    return str.replace(
      /\b[a=z]/g,
      (char) => char.toUpperCase()
    )
  }
  const [channel, setChannel] = useState();
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    if (!client) return;

    const channel = client.channel('messaging', slug, {
      image: 'https://getstream.io/random_png/?name=react',
      name: toTitleCase(slug.replace(/-/g, " ")),
      members: [userId],
    });

    setChannel(channel);
  }, [client]);

  if (!client) return <div>Setting up client & connection...</div>;

  return (
    <Chat client={client}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

57.26