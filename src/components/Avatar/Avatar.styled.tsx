import styled from "styled-components";
import { AvatarSize } from "./types";

const sizes: Record<AvatarSize, number> = {
  s: 20,
  m: 50,
  l: 70,
};

export const AvatarContainer = styled.img<{ size: AvatarSize }>`
  height: ${({ size }) => `${sizes[size]}px`};
  width: auto;
  border-radius: 50%;
`;
