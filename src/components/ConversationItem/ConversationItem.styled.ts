import styled from "styled-components";

export const ChatItem = styled.li<{ isActive?: boolean }>`
  user-select: none;
  cursor: pointer;
  display: grid;
  padding: 10px 0;
  grid-template-areas:
    "avatar name timestamp"
    "avatar message counter";
  grid-template-columns: min-content minmax(200px, 1fr) 35px;
  column-gap: 1rem;

  &:hover {
    background-color: #f5f6f6;
  }

  & > * {
    align-self: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  & img {
    grid-area: avatar;
  }
  & h2 {
    grid-area: name;
    font-size: 1.1rem;
    line-height: 1.1rem;
    font-weight: 600;
  }
  & p {
    grid-area: message;
    font-size: 0.8rem;
    color: gray;
  }
  & small {
    grid-area: timestamp;
    font-size: 0.7rem;
    color: gray;
  }
  & div {
    grid-area: counter;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    background-color: #83b08c;
    color: white;
    padding: 5px 2px;
  }
`;
