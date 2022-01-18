import  { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Avenir Next:wght@300;400;700&display=swap");

/* Global Styles */
:root {
  --general-font: "Avenir Next", sans-serif;
  --primary-btn-color: #505ca4;
  --text-grey-color: #bdbdbd;
  --title-text-color: #1b2056;
  --Text-Body-color: #505ca4;

  --mainWhite: #ffffff;
  --offWhite: #f9f9f9;
  --mainBlack: #222;
  --mainGrey: #ececec;
  --mainTransition: all 0.3s linear;
  --lightShadow: 2px 4px 3px 0px rgba(209, 209, 239, 0.5);
  --darkShadow: 3px 4px 4px 0px rgba(0, 0, 0, 0.5);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  overflow-x: hidden;
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
body {
  font-family: var(--general-font);
  font-size: 14px;
  line-height: 1.42857143;
  /* color: var(--Text-Body-color); */
  overflow-x: hidden;
}

img {
  max-width: 100% !important;
  vertical-align: middle;
  border: none;
}
a {
  color: var(--Text-Body-color);
  text-decoration: none;
}
a:valid {
  outline: none;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.three-column-grid,.two-column-grid{
  display: grid;
    grid-template-columns: 1fr ;
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    justify-items: stretch;
    align-items: stretch; 
}

@media screen and (min-width: 768px) {
  .two-column-grid{
  display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    justify-items: stretch;
    align-items: stretch;
}
    .three-column-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 20px;
        grid-row-gap: 20px;
        justify-items: stretch;
        align-items: stretch;
     }
 }
`