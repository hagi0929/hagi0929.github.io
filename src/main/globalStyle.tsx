import { createGlobalStyle } from "styled-components";

const HomeTheme = createGlobalStyle`
:root {
  --bg-color: #111111;
  --primary-color: white;
}
`;
const AboutTheme = createGlobalStyle`
:root {
  --bg-color: white;
  --primary-color: black;
}
`;
const Crazy = createGlobalStyle`
:root {
  --bg-color: #411530;
  --primary-color: #D1512D;
}
`;
// 0 % {
//   transform: translateX(100 %);
//   opacity: 0;
// }
const AnimationKit = createGlobalStyle`
:root {

  @keyframes moveToY {
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes moveToX {
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes moveToInverse {
    100% {
      opacity: 1;
      transform: translateX(0) scale(-1);
    }
  }
  
  @keyframes showUp {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  @keyframes wave {
  from {
    -webkit-transform: none;
    transform: none
  }
  15% {
    -webkit-transform: translate3d(-20%, 0, 0) rotate3d(0, 0, 1, -10deg);
    transform: translate3d(-20%, 0, 0) rotate3d(0, 0, 1, -10deg)
  }
  30% {
    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 7deg);
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 7deg)
  }
  45% {
    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -10deg);
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -10deg)
  }
  60% {
    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 5deg);
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 5deg)
  }
  75% {
    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -2deg);
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -2deg)
  }
  to {
    -webkit-transform: none;
    transform: none
  }
}

  
}
`;
export { HomeTheme, AboutTheme, Crazy, AnimationKit };
