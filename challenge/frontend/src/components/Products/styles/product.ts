import styled from 'styled-components'

export const ProductContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 241.47px;
  height: 234.57px;
  padding: 17.25px 20.7px 0 20.7px;
  background: #FFFFFF;
  border: 1px solid #000000;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);

  div {
    width: 200.65px;

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
`;