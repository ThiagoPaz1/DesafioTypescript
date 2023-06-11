import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 12px 0 12px 50.43px;
  background-color: #510083;

  h1 {
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
  }

  @media (max-width: 425px) {
    padding: 12px 0 12px 40px;
    
    h1 {
      font-size: 30px;
    }
  }

  @media (max-width: 375px) {
    padding: 12px 0 12px 40px;
    
    h1 {
      font-size: 30px;
    } 
  }
`;