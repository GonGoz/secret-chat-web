import React from "react";
import Avatar from "../Avatar/Avatar";
import { ChatItem } from "./ConversationItem.styled";

export interface ConversationItemProps {
  profileImg?: string;
  title: string;
  lastMessage?: string;
  unreadCount: number;
  timestamp: string;
  isActive?: boolean;
}

const ConversationItem: React.FC<ConversationItemProps> = ({
  title,
  unreadCount,
  lastMessage,
  profileImg,
  timestamp,
}) => {
  return (
    <ChatItem isActive>
      <Avatar src={profileImg} />
      <h2>{title}</h2>
      <p>{lastMessage}</p>
      <small>{timestamp}</small>
      {!!unreadCount && <div>+{unreadCount}</div>}
    </ChatItem>
  );
};

export default ConversationItem;
