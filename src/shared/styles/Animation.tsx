import { keyframes } from '@emotion/react';

export const shake = keyframes`
 0% {
    transform: translate(1px, 0px);
  }
  10% {
    transform: translate(-1px, 0px);
  }
  20% {
    transform: translate(-3px, 0px);
  }
  30% {
    transform: translate(3px, 0px);
  }
  40% {
    transform: translate(1px, 0px);
  }
  50% {
    transform: translate(-1px, 0px);
  }
  60% {
    transform: translate(-3px, 0px);
  }
  70% {
    transform: translate(3px, 0px);
  }
  80% {
    transform: translate(-1px, 0px);
  }
  90% {
    transform: translate(1px, 0px);
  }
  100% {
    transform: translate(1px, 0px);
  }            
`;
