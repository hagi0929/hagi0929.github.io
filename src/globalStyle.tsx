import { createGlobalStyle } from "styled-components";
const HomeTheme = createGlobalStyle`
:root {
  --bg-color: black;
  --primary-color: white;
}
`;
const AboutTheme = createGlobalStyle`
:root {
  --bg-color: white;
  --primary-color: black;
}
`;
export { HomeTheme, AboutTheme };
