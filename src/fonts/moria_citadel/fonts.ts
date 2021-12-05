import { createGlobalStyle } from "styled-components";

import MoriaCitadel from "../moria_citadel/moria_df-webfont.woff";
import MoriaCitadel2 from "../moria_citadel/moria_df-webfont.woff2";

export default createGlobalStyle`
    @font-face {
        font-family: 'Moria Citadel';
        src: local('Moria Citadel'), local('MoriaCitadel'),
        url(${MoriaCitadel}) format('woff'),
        url(${MoriaCitadel2}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }
`;
