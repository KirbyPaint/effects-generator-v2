import { createGlobalStyle } from "styled-components";

import MoriaCitadel from "../moria_citadel/moria_df-webfont.woff";
import MoriaCitadel2 from "../moria_citadel/moria_df-webfont.woff2";

export default createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        src: local('Font Name'), local('FontName'),
        url(${MoriaCitadel}) format('woff2'),
        url(${MoriaCitadel2}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
