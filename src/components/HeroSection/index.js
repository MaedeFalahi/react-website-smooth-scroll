import React ,{useState} from 'react';
import video  from './../../video/video.mp4';
import {Button} from './../Button/ButtonElement';

import {
    HeroContainer ,
    HeroBg ,
    VideoBg ,
    HeroContent,
    HeroH1,
    HeroP,
    HeroWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';
const HeroSection = () =>{

    const [hover , setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={video} type='video/mp4'></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>In publishing and graphic design,</HeroH1>
                <HeroP>It is a long established fact that a reader will be
                     distracted by the readable content of a page when looking at
                      its layout
                </HeroP>
                <HeroWrapper>
                    <Button to='signup'
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        > 
                        Get start {hover ? <ArrowForward /> :<ArrowRight />}
                    </Button>
                </HeroWrapper>
            </HeroContent>
        </HeroContainer>
    )
}


export default HeroSection;
