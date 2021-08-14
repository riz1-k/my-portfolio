import styled from 'styled-components';

export const ServicesContainer = styled.div`
  height: 962px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 2400px;
  }

  @media screen and (max-width: 980px) {
    height: 1700px;
  }

  @media screen and (max-width: 480px) {
    height: 2000px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 24px;
  padding: 0 10px;

  @media screen and (max-width: 1440px) {
    grid-template-columns: 1fr 1fr;
    max-width: 1000px;
  }

  @media screen and (max-width: 980px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    max-width: 700px;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 800px;
  padding: 50px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transform: scale(1.03);
    transition: all 0.4s ease-in-out;
    cursor: pointer;
  }
`;

export const ServiceIcons = styled.img`
  height: 250px;
  width: 350px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

export const ServicesH1 = styled.h1`
  font-family: 'Kaushan Script', cursive;
  color: #fff;
  font-size: 4rem;
  text-shadow: 2px 2px #000;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1.3rem;
  font-family: 'Baloo Tamma 2', cursive;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  font-family: 'Baloo Tamma 2', cursive;
  text-align: center;
`;
