import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
html, body, .App {
        background-color: var(--grey1);
}


:root {
        --green1: #9bd160;
        --green2: #7aab56;
        --green3: #5a854d;
        --green4: #395f43;
        --green5: #183939;
        --grey1 : #e0e3e0;
        --grey2 : #c4c4c4; 
        --grey3 : #e3e3e3; 
        --red   : #B21818;   
        --blue  : #3D8ED9; 
        --yellow: #FFE70B;
        --brown : #402200;
        --orange: #FF630B;
        --black : #000000;
        --white : #ffffff;
}


/* reset */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
button {
    font-family: 'Inter', sans-serif;
    cursor: pointer;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
  -moz-appearance: textfield;
}
`