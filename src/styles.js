import { css, injectGlobal } from 'styled-components';

const globals = css`
  html,
  #root,
  body {
    height: 100%;
  }
`;

injectGlobal`
  ${globals}
`;
