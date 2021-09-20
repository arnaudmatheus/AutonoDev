import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
    --green : #4CD964;

    --green_light: #26DEA8;

    --red: #EF4040;

    --purple: #6F5A9A;

    --purple_light: #8E2DE2;

    --purple_dark: #3E3F68;

    --blue: #5157bb;

    --blue_dark: #2a2e6c;

    --body: #f8f8f9;

    --primary_color: #343C44;

    --secondary_color: #06BD58;

}

*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}

html{
    height: 100%;
  scroll-behavior: smooth; // scroll suavizado
    @media(max-width:1080px){
        font-size: 93.75%;
    }
    @media(max-width:720px){
        font-size: 82.5%;
    }
    
}
button{
    cursor: pointer;
}
[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}

body{
  background: var(--primary_color);
  -webkit-font-smoothing:antialised;
  font-family: 'Roboto', sans-serif !important;
  font-size: 0.9375rem;
  top: 0px;
  left: 0px;
  overflow-x: hidden;

  max-width: 100%;
  background-color: white !important;
  background-position: bottom !important;
  background-repeat: no-repeat;
  background-attachment: fixed !important;
  opacity: 1;

  @media only screen and (min-width: 1000px) {
  }
}

body,input,textarea,button{
    font-family: 'Poppins',sans-serif;
    font-weight: 400;
}

h1,h2,h3,h4,h5,h6,strong{
    font-weight: 500;
    
}

.react-modal-overlay{
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
.react-modal-content{
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
}
`;
