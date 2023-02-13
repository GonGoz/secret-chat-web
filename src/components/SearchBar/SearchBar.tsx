import React from 'react';
import { SearchBarWrapper, SearchInput } from './SearchBar.styled';
import searchIcon from '../../assets/searchIcon.svg';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onChange,
  value,
  placeholder = 'Search',
}) => (
  <SearchBarWrapper>
    <SearchInput
      type="text"
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
    />
    <img src={searchIcon} alt="search icon" />
  </SearchBarWrapper>
);

export default SearchBar;
