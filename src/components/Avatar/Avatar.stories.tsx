import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Avatar from "./Avatar";

export default {
  title: "Atoms/Avatar",
  component: Avatar,
  argTypes: {},
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Medium = Template.bind({});
Medium.args = {
  size: "m",
};

export const Large = Template.bind({});
Large.args = {
  size: "l",
};

export const Small = Template.bind({});
Small.args = {
  size: "s",
};
