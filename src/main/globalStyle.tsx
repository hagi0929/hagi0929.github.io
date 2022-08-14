import { createGlobalStyle } from "styled-components";

const HomeTheme = createGlobalStyle`
:root {
  --bg-color: #111111;
  --primary-color: white;
}
`;
const AboutTheme = createGlobalStyle`
:root {
  --bg-color: #293462;
  --primary-color: #D61C4E;
}
`;
const Crazy = createGlobalStyle`
:root {
  --bg-color: #411530;
  --primary-color: #D1512D;
}
`;

export { HomeTheme, AboutTheme, Crazy };
