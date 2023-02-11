import React from "react";
import ConversationItem, {
  ConversationItemProps,
} from "../ConversationItem/ConversationItem";
import { ChatsDrawerWrapper, ChatsList } from "./ConversationsDrawer.styled";
import ConversationsHeader from "./Header/Header";

interface ConversationsDrawerProps {
  conversations: ConversationItemProps[];
}

const ConversationsDrawer: React.FC<ConversationsDrawerProps> = ({
  conversations,
}) => {
  const totalUnreadCount = conversations.reduce(
    (acc, curr) => acc + curr.unreadCount,
    0
  );
  return (
    <ChatsDrawerWrapper>
      <ConversationsHeader chatsCount={totalUnreadCount} />
      <ChatsList>
        {conversations.map(({ ...args }) => (
          <ConversationItem {...args} />
        ))}
      </ChatsList>
    </ChatsDrawerWrapper>
  );
};

export default ConversationsDrawer;
