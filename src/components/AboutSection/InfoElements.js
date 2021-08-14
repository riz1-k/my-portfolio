import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const InfoContainer = styled.div`
  /* background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='962' preserveAspectRatio='none' viewBox='0 0 1920 962'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1207%26quot%3b)' fill='none'%3e%3crect width='1920' height='962' x='0' y='0' fill='rgba(19%2c 191%2c 211%2c 1)'%3e%3c/rect%3e%3cpath d='M420.97647362388875 73.36584808200269L211.1393735378305 58.49163811255723 288.8550197297884 225.1533792030833z' fill='rgba(11%2c 156%2c 193%2c 1)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1611.587613636113 446.50791527374156L1431.8162245937713 546.1568234121487 1531.4651327321785 725.9282124544903 1711.23652177452 626.2793043160832z' fill='rgba(11%2c 156%2c 193%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1799.3665598548696 742.6847777501189L1656.561955635034 707.0795909831764 1620.9567688680916 849.884195203012 1763.761373087927 885.4893819699545z' fill='rgba(11%2c 156%2c 193%2c 1)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1188.3270128165996 641.822681570871L1055.9338495563418 712.2173751638481 1227.7224715759364 875.6097732577464z' fill='rgba(11%2c 156%2c 193%2c 1)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1194.491023651553 61.44377648310554L1187.158547691074 271.41841527826955 1397.133186486238 278.75089123874847 1404.465662446717 68.77625244358445z' fill='rgba(11%2c 156%2c 193%2c 1)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1207'%3e%3crect width='1920' height='962' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e"); */
  height: 962px;
  @media screen and (max-width: 884px) {
    height: 800px;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100%;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  padding: 0 26px;
  align-items: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-column-gap: 10rem;
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 884px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const Heading = styled.p`
  font-family: 'Kaushan Script', cursive;
  color: #fff;
  font-size: 5rem;
  line-height: 16px;
  text-shadow: 2px 2px #000;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: capitalize;
  margin-bottom: 5rem;

  @media screen and (max-width: 1027px) {
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  @media screen and (max-width: 980px) {
    font-size: 3rem;
    margin-bottom: 3rem;
  }
`;

export const Description = styled.p`
  color: #f2f5f5;
  font-family: 'Baloo Tamma 2', cursive;
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 1.8rem;
  word-spacing: 3px;
  line-height: 30px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
  @media screen and (max-width: 970px) {
    font-size: 1.3rem;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Button = styled(LinkR)`
  display: flex;
  justify-content: space-around;
  border-radius: 4px;
  background: #256ce1;
  padding: 15px 45px;
  color: #fff;
  font-size: 1.3rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: 'Baloo Tamma 2', cursive;

  &:hover {
    transition: all 0.3s ease-in-out;
    transform: scale(1.05);
  }
`;

export const ButtonText = styled.p`
  margin-top: 2px;
  margin-right: 4px;
`;

export const BtnIcon = styled.div`
  margin-top: 5px;
  margin-left: 7px;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  @media screen and (max-width: 884px) {
    display: none;
  }
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
