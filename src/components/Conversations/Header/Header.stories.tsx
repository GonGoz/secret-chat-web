import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DrawerHeader from "./Header";
import styled from "styled-components";

export default {
  title: "Conversations Drawer/Header",
  component: DrawerHeader,
  argTypes: {},
} as ComponentMeta<typeof DrawerHeader>;

const Template: ComponentStory<typeof DrawerHeader> = (args) => (
  <DrawerHeader {...args} />
);

export const Header = Template.bind({});
Header.args = {
  chatsCount: 15,
};
