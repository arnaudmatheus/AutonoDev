import styled from 'styled-components'


interface BookCardProps {
  numberOfCards: number
  books: boolean
}

export const Container = styled.div`
  height:100vh;
  width:100vw;
  background-color: #343C44;
  display:flex;
  align-itens:center;
  flex-direction:column;
  overflow-y:scroll;
  }
`


export const Input = styled.div`


  border: 2.5px solid #1D0632;
  display:flex;
  align-self:center;
  margin-top: 2vh;
  height: 70px;
  max-width: 420px; 
  background: white;
  border-radius: 15px;
  @media only screen and (max-width: 379px) {
    height: 52.5px;
    width: 280px;
  }
  @media only screen and (max-width: 493px) and (min-width: 380px) {
    height: 62.5px;
    width: 350px;
  }
  input {
    font-size: 17.5px;
    margin-left: 15px;
    border: 0;
    border-radius: 15px;
    height: 60px;
    width: 340px;
    margin-right: 10px;
    @media only screen and (max-width: 379px){
      font-size: 14px;
      height: 40px;
      width: 240px;
    }
    @media only screen and (max-width: 493px) and (min-width: 380px){
      height: 50px;
      width: 270px;
    }
    &::placeholder {
      font-size: 17.5px;   
      @media only screen and (max-width: 379px){
        font-size: 12px;
      } 
    }
  }
  
  }
`

export const Books = styled.div<BookCardProps>`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;

  grid-gap: 10px;
  margin-top:4vh;
  
  
}

`