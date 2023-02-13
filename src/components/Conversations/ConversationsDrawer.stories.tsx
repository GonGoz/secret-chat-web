import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ConversationsDrawer from "./ConversationsDrawer";
import styled from "styled-components";

export default {
  title: "Organisms/Conversations Drawer",
  component: ConversationsDrawer,
  argTypes: {},
} as ComponentMeta<typeof ConversationsDrawer>;

const ChatItemStoryWrapper = styled.div`
  max-width: 600px;
`;

const Template: ComponentStory<typeof ConversationsDrawer> = (args) => (
  <ChatItemStoryWrapper>
    <ConversationsDrawer {...args} />
  </ChatItemStoryWrapper>
);

export const Overview = Template.bind({});
Overview.args = {
  conversations: [
    {
      unreadCount: 0,
      lastMessage: "Hi there, juste texting to test this component",
      timestamp: "11:11",
      title: "Core developer",
      profileImg:
        "https://media.licdn.com/dms/image/D4D03AQG_YdYLD1eqxw/profile-displayphoto-shrink_200_200/0/1661431628115?e=1681344000&v=beta&t=td4Fr9WOlBGK1SVHmVBMFmZRZn8sPVT2GsivibNMEYQ",
    },
    {
      unreadCount: 2,
      lastMessage:
        "Siema! Ready for Kampinos? This is a very long message, explaining how to get there.",
      timestamp: "09:00",
      title: "Hiking buddy",
      profileImg:
        "https://media.licdn.com/dms/image/C4D03AQE1M8IJgr21UQ/profile-displayphoto-shrink_200_200/0/1632225355380?e=1681344000&v=beta&t=R4NpBLpxtJLxQu3AW-5e8KXC5boaffQqsn8IRaapsbM",
    },
    {
      unreadCount: 3,
      lastMessage: "Have a nice hike! Be safe",
      timestamp: "09:00",
      title: "Mom",
    },
  ],
};
