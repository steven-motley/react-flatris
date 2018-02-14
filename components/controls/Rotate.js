// @flow

import React from 'react';
import PointerButton from '../PointerButton';

type Props = {
  onPress: Function
};

export default ({ onPress, ...rest }: Props) => (
  <PointerButton
    {...rest}
    bgColor="#fff"
    color="#34495f"
    hoverEffect={false}
    onPress={onPress}
  >
    <svg viewBox="0 0 24 24">
      <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
    </svg>
    <style jsx>{`
      svg {
        fill: #34495f;
        transform: scale(0.6);
        transform-origin: 50% 50%;
        transform: scale(-0.6, 0.6);
      }
    `}</style>
  </PointerButton>
);
