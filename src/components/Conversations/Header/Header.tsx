import React from "react";
import { StyledHeader } from "./Header.styled";

const ConversationsHeader: React.FC<{ chatsCount: number }> = ({
  chatsCount,
}) => {
  return (
    <StyledHeader>
      Messages <span>({chatsCount})</span>
    </StyledHeader>
  );
};

export default ConversationsHeader;
