import { createGlobalStyle } from "styled-components";
const HomeTheme = createGlobalStyle`
:root {
  --bg-color: #111111;
  --primary-color: white;
}
`;
const AboutTheme = createGlobalStyle`
:root {
  --bg-color: #F6F6F6;
  --primary-color: black;
}
`;
export { HomeTheme, AboutTheme };
