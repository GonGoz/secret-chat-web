import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ConversationItem from "./ConversationItem";
import styled from "styled-components";

export default {
  title: "Conversations Drawer/ChatItem",
  component: ConversationItem,
  argTypes: {},
} as ComponentMeta<typeof ConversationItem>;

const ChatItemStoryWrapper = styled.div`
  max-width: 500px;
`;

const Template: ComponentStory<typeof ConversationItem> = (args) => (
  <ChatItemStoryWrapper>
    <ConversationItem {...args} />
  </ChatItemStoryWrapper>
);

export const ChatItem = Template.bind({});
ChatItem.args = {
  unreadCount: 0,
  lastMessage: "Hi there, juste texting to test this component",
  timestamp: "11:11",
  title: "Core developer",
};
