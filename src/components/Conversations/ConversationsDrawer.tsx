import React from 'react';
import ConversationItem, {
  ConversationItemProps,
} from '../ConversationItem/ConversationItem';
import SearchBar from '../SearchBar/SearchBar';
import { ChatsDrawerWrapper, ChatsList } from './ConversationsDrawer.styled';
import ConversationsHeader from './Header/Header';

interface ConversationsDrawerProps {
  conversations: (ConversationItemProps & { id: string })[];
  searchValue: string;
  onSearch: (value: string) => void;
}

const ConversationsDrawer: React.FC<ConversationsDrawerProps> = ({
  conversations,
  searchValue,
  onSearch,
}) => {
  const totalUnreadCount = conversations.reduce(
    (acc, curr) => acc + curr.unreadCount,
    0,
  );
  return (
    <ChatsDrawerWrapper>
      <ConversationsHeader chatsCount={totalUnreadCount} />
      <SearchBar value={searchValue} onChange={onSearch} />
      <ChatsList>
        {conversations.map(({ id, ...args }) => (
          <ConversationItem {...args} key={id} />
        ))}
      </ChatsList>
    </ChatsDrawerWrapper>
  );
};

export default ConversationsDrawer;
