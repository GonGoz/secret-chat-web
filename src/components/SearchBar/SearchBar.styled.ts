import styled from 'styled-components';

const ICON_WIDTH = '23px';
const SIDES_PADDING = '15px';

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px calc(${ICON_WIDTH} + ${SIDES_PADDING} * 2) 12px ${SIDES_PADDING};
  border: none;
  border-radius: 15px;
  background-color: #f8f8f8;
  outline: none;
  font-size: 1.2rem;

  &::placeholder {
    color: #afafaf;
  }
`;

export const SearchBarWrapper = styled.div`
  position: relative;
  width: 100%;
  min-width: 370px;
  & img {
    position: absolute;
    right: ${SIDES_PADDING};
    top: 50%;
    transform: translateY(-50%);
  }
`;
