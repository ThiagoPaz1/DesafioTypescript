import styled from 'styled-components'

export const ProductContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 17.25px 0 12px 0;
  background: #FFFFFF;
  border: 1px solid #000000;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);

  div {
    width: 190px;

    img {
      width: 100%;
      height: 123.61px;
    }
    
    h1, h3, p {
      align-self: flex-start;
      color: #000000;
    }

    h1 {
      margin-top: 10px;
      font-weight: 400;
      font-size: 15px;
      line-height: 18px;
    }
    
    h3 {
      margin-top: 1px;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
    }
    
    p {
      margin-top: 12px;
      font-weight: 700;
      font-size: 26px;
      line-height: 31px;
      color: #000000;
    }
  }

  @media (min-width: 1729px) {
    div {
      width: 200.65px;

      img {
        width: 100%;
        height: 123.61px;
      }
    }
  }

  @media (max-width: 1024px) {
    div {
      width: 170px;
      
      img {
        height: 100px;
      }

      h1 {
        font-size: 13px;
        line-height: 18px;
      }
    
      h3 {
        font-size: 12px;
        line-height: 17px;
      }
    
      p {
        font-size: 22px;
      }
    }
  }

  @media (max-width: 425px) {
    div {
      width: 130px;
      
      img {
        height: 80px;
      }

      h1 {
        font-size: 10px;
        line-height: 18px;
      }
    
      h3 {
        font-size: 10px;
        line-height: 17px;
      }
    
      p {
        font-size: 18px;
      }
    }
}

@media (max-width: 375px) {
    div {
      width: 120px;
      
      img {
        height: 80px;
      }

      h1 {
        font-size: 9px;
        line-height: 18px;
      }
    
      h3 {
        font-size: 9px;
        line-height: 17px;
      }
    
      p {
        font-size: 16px;
      }
    }
}
`;