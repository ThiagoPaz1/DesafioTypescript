import styled from 'styled-components'

export const ProductListContainer = styled.ul`
  display: grid;
  grid-template-columns: 220px 220px 220px 220px 220px;
  justify-content: center;
  column-gap: 40px;
  row-gap: 60px;
  margin-top: 85px;
  margin-bottom: 3rem;

  @media (min-width: 1729px) {
    grid-template-columns: 241.47px 241.47px 241.47px 241.47px 241.47px;
    column-gap: 65.53px;
    row-gap: 85.43px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 200px 200px 200px 200px; 
  }

  @media (max-width: 768px) {
    grid-template-columns: 200px 200px 200px; 
    row-gap: 60px;
  }

  @media (max-width: 425px) {
    grid-template-columns: 160px 160px; 
  }

  @media (max-width: 375px) { 
    grid-template-columns: 140px 140px;
    column-gap: 35px;
    row-gap: 50px;
  }

  @media (max-width: 320px) { 
    grid-template-columns: 140px 140px;
    column-gap: 15px;
    row-gap: 40px;
    margin-top: 70px;
  }
`;