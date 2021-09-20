import Image from 'next/image';
import styled from 'styled-components';
import { device } from '../../theme/Breakpoints';
import { borderRadius } from '../../theme/Variables';

const ImageContainer = styled.section`
  overflow: hidden;
  z-index: -1;
  @media ${device.phone} {
    position: absolute;
    top: -20px;
  }
  @media ${device.tablet} {
    height: 100vh;
    top: 0px;
  }
  @media ${device.laptop} {
    position: relative;
  }
`;

const PicGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  padding-top: 2rem;
  @media ${device.phone} {
    grid-template-columns: 1fr repeat(4, 1fr);
    grid-template-rows: 150px 193px 214px 245px;
    grid-template-areas:
      '.    .    .    .    pic1'
      '.    pic6 pic6 pic6 pic6'
      '.    .    pic5 pic5 pic5'
      '.    .    .    pic3 pic3';
  }
  @media ${device.tablet} {
    grid-template-columns: 10fr repeat(4, 1fr) 8fr 6fr 8fr;
    grid-template-rows: 205px 97px 97px 207px 206px;
    grid-template-areas:
      '.    pic1 pic1  pic1 pic1 pic2 pic2 pic3'
      '.    .    .     .    pic4 pic4 pic4 pic3'
      '.    .    .     .    pic4 pic4 pic4 pic5'
      '.    .    .     pic6 pic6 pic6 pic6 pic5'
      '.    .    pic7  pic7 pic7 pic7 pic8 pic8';
  }
  @media ${device.laptop} {
    grid-template-columns: repeat(4, 1fr) 8fr 6fr 8fr;
    grid-template-areas:
      'pic1 pic1  pic1 pic1 pic2 pic2 pic3'
      '.    .     .    pic4 pic4 pic4 pic3'
      '.    .     .    pic4 pic4 pic4 pic5'
      '.    .     pic6 pic6 pic6 pic6 pic5'
      '.    pic7  pic7 pic7 pic7 pic8 pic8';
  }
`;

// const Pic = styled(Image)`
//   background-color: ${currentColor.greyPale};
// `;

const MeatPic = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: ${borderRadius.default};
  @media ${device.phone} {
    filter: opacity(0.1);
  }
  @media ${device.tablet} {
    filter: opacity(0.1);
  }
  @media ${device.laptop} {
    filter: none;
  }
`;
const Image1 = styled(MeatPic)`
  grid-area: pic1;
`;
const Image2 = styled(MeatPic)`
  grid-area: pic2;
  @media ${device.phone} {
    display: none;
  }
  @media ${device.tablet} {
    display: block;
  }
`;
const Image3 = styled(MeatPic)`
  grid-area: pic3;
`;
const Image4 = styled(MeatPic)`
  grid-area: pic4;
  @media ${device.phone} {
    display: none;
  }
  @media ${device.tablet} {
    display: block;
  }
`;
const Image5 = styled(MeatPic)`
  grid-area: pic5;
`;
const Image6 = styled(MeatPic)`
  grid-area: pic6;
`;
const Image7 = styled(MeatPic)`
  grid-area: pic7;
  @media ${device.phone} {
    display: none;
  }
  @media ${device.tablet} {
    display: block;
  }
`;
const Image8 = styled(MeatPic)`
  grid-area: pic8;
  @media ${device.phone} {
    display: none;
  }
  @media ${device.tablet} {
    display: block;
  }
`;

const PicCollage = () => (
  <ImageContainer>
    <PicGrid>
      <Image1 src="https://res.cloudinary.com/meat-friends/image/upload/v1631221893/meat-friends/parking/jon-tyson-kctt4tL1dkE-unsplash_yfyu1y.jpg" />
      <Image2 src="https://res.cloudinary.com/meat-friends/image/upload/v1631221896/meat-friends/parking/myles-tan-IWCljYv1TJw-unsplash_dqnada.jpg" />
      <Image3 src="https://res.cloudinary.com/meat-friends/image/upload/v1631221896/meat-friends/parking/rafael-hoyos-weht-Aqot8S_Keb8-unsplash_qdqhql.jpg" />
      <Image4 src="https://res.cloudinary.com/meat-friends/image/upload/v1631221892/meat-friends/parking/photo-1495749388945-9d6e4e5b67b1_wcxwnx.webp" />
      <Image5 src="https://res.cloudinary.com/meat-friends/image/upload/v1631221891/meat-friends/parking/photo-1535460479858-adfd5d59dbad_hxmi0b.webp" />
      <Image6 src="https://res.cloudinary.com/meat-friends/image/upload/v1631221897/meat-friends/parking/emerson-vieira-_aR4l6fj6wQ-unsplash_q89sty.jpg" />
      <Image7 src="https://res.cloudinary.com/meat-friends/image/upload/v1631221892/meat-friends/parking/chad-montano-iSDSIrV9zEo-unsplash_kdsljp.jpg" />
      <Image8 src="https://res.cloudinary.com/meat-friends/image/upload/v1631221896/meat-friends/parking/luis-santoyo-IePWXTF3-0Y-unsplash_yqilwh.jpg" />
    </PicGrid>
  </ImageContainer>
);
export default PicCollage;
