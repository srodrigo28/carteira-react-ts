import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    // @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;700&family=Roboto:wght@300;400;500;700&display=swap');
   }
   html, body, #root{
    height: 100%;
   }
   body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    width: 100%;
    height: 100vh;
   }
   *, button, input{
    border: 0;
    outline: 0;
    // font-family: 'Roboto', sans-serif;
   }
   button{
    cursor: pointer;
   }
`;