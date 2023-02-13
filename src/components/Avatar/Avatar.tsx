import React from 'react';
import AvatarContainer from './Avatar.styled';
import type { AvatarSize } from './types';

interface AvatarProps {
  src?: string;
  size?: AvatarSize;
}

const Avatar: React.FC<AvatarProps> = ({ src, size = 'm' }) => (
  <AvatarContainer
    // TODO: set default somehow else
    src={src ?? 'https://avatars.githubusercontent.com/u/124579123?s=70&v=4'}
    size={size}
    alt="avatar"
  />
);

export default Avatar;
