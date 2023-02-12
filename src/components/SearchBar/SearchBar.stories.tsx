import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AppSearchBar from "./SearchBar";
import styled from "styled-components";

export default {
  title: "SearchBar/SearchBar",
  component: AppSearchBar,
  argTypes: {
    onChange: {
      action: "Value change",
    },
  },
} as ComponentMeta<typeof AppSearchBar>;

const StoryWrapper = styled.div`
  /* max-width: 600px; */
`;

const Template: ComponentStory<typeof AppSearchBar> = ({
  onChange,
  placeholder,
}) => {
  const [search, setSearch] = useState("");
  return (
    <StoryWrapper>
      <AppSearchBar
        value={search}
        onChange={(v) => {
          onChange(v);
          setSearch(v);
        }}
        placeholder={placeholder}
      />
    </StoryWrapper>
  );
};

export const SearchBar = Template.bind({});
SearchBar.args = {};
