import React from 'react';
import { Button } from './../Button/ButtonElement';

import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    Column2,
    BtnWrap,
    ImgWrap,
    Img
} from './InfoElements';
 

const InfoSection = ({
    id,
    LightBg,
    LightText,
    topLine,
    headline,
    description,
    imgStart,
    img,
    alt,
    buttonLabel,
    darkText,
    primary,
    dark,
    dark2,
}) => {
  return (
    <React.Fragment>
        <InfoContainer LightBg={LightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading LightText={LightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                             <BtnWrap>
                                <Button 
                                 to="home"
                                 smooth={true}
                                 duration={500}
                                 spy={true}
                                 exact="true"
                                 offset={-80}
                                 primary={primary ? 1 : 0}
                                 dark={dark ? 1 : 0}
                                 dark2={dark2 ? 1 : 0}
                                > {buttonLabel}</Button>
                             </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </React.Fragment>
  )
}

export default InfoSection