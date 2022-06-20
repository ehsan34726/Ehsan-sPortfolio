import React from 'react';
import styled from 'styled-components';
import Image from '../Component/Image';
import Reviews from '../Component/Reviews';
import Service from '../Component/Service';
import Title from '../Component/Title';
import { MainLayout } from '../styles/Layouts';

const About = () => {
    return (
        <MainLayout>
            <AboutStyled>
                <Title title={'About Me'} span={'About Me'} />
                <Image />
                <Service />
                <Reviews />
            </AboutStyled>
        </MainLayout>
    )
};

const AboutStyled = styled.section` 

`

export default About;
