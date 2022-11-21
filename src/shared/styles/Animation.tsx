import { css, keyframes } from '@emotion/react';

/**
 * 하트 클릭 시 애니메이션
 */
export const handleAnimation = () =>
  css({
    animation: `${likeButtonAnimation} .45s`,
    width: '100%',
  });

export const shakeAnimation = keyframes`
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

export const likeButtonAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.2);
  }

  50% {
    transform: scale(.95);
  }
  100% {
    transform: scale(1);
  }
`;
