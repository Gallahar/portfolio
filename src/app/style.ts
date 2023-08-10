import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root{
  --main-gr: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
  --text-primary: #FFF;
  --text-secondary: #BCBCBC;
  --bg-primary:#0F1624;
  --bg-secondary:#162950 ;	
  font-size: 62.5%;
   scroll-behavior: smooth;

}

body{
  font-family: "Poppins" ;
  box-sizing: border-box;
  font-weight: 600;
  color: var(--text-primary);
  background-color: var(--bg-primary);
  overflow-x: hidden;
 

}


*,
*::after,
*::before {
	margin: 0;
	padding: 0;
	border: none;
	box-sizing: border-box;
}

a,
a:visited {
	color: inherit;
	text-decoration: none;
	display: inline-block;
}

a:focus,
a:active,
a:hover {
	outline: none;
}

aside,
nav,
footer,
header,
main,
section {
	display: block;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
	font-size: inherit;
	font-weight: inherit;
	line-height: inherit;
}

img,
svg {
	vertical-align: top;
	max-width: 100%;
	height: auto;
}

input,
textarea,
button,
select _ {
	font-family: inherit;
	font-size: inherit;
	color: inherit;
}

input::-ms-clear {
	display: none;
}

button,
input[type='submit'] {
	display: inline-block;
	box-shadow: none;
	background-color: transparent;
	background: none;
	cursor: pointer;
}

input:active,
input:focus,
button:active,
button:focus {
	outline: none;
}

button::-moz-focus-inner {
	padding: 0;
	border: 0;
}

label {
	cursor: pointer;
}
//reset end

.container{
	width: 100%;
	max-width: 1660px;
	margin: 0 auto;
}

`
