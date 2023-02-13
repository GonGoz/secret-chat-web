/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AppSearchBar from './SearchBar';

export default {
  title: 'Atoms/SearchBar',
  component: AppSearchBar,
  argTypes: {
    onChange: {
      action: 'Value change',
    },
  },
} as ComponentMeta<typeof AppSearchBar>;

const Template: ComponentStory<typeof AppSearchBar> = ({
  onChange,
  placeholder,
}) => {
  const [search, setSearch] = useState('');
  return (
    <AppSearchBar
      value={search}
      onChange={(v) => {
        onChange(v);
        setSearch(v);
      }}
      placeholder={placeholder}
    />
  );
};

export const SearchBar = Template.bind({});
SearchBar.args = {};
