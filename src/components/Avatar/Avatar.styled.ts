import styled from 'styled-components';
import type { AvatarSize } from './types';

const sizes: Record<AvatarSize, number> = {
  s: 20,
  m: 50,
  l: 70,
};

export default styled.img<{ size: AvatarSize }>`
  height: ${({ size }) => `${sizes[size]}px`};
  width: auto;
  border-radius: 50%;
`;
