import { keyframes } from '@emotion/core';

export const cardHovering = keyframes`
0% {
  transform: scale(1);
}
2% {
    transform: scale(1.07)
}
100% {
    transform: scale(1.1);
}
`;

export const cardClick = keyframes`
0% {
  transform: scale(1);
}
2% {
  transform: scale(0.8);
}
100% {
  transform: scale(0.8);
}
`;
