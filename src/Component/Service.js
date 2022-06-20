import React from 'react';
import {InnerLayout} from '../styles/Layouts';
import styled from 'styled-components';
import Title from './Title';
import ServiceCard from './ServiceCard';
import Design from '../img/design.svg';
import Intelligence from '../img/intelligence.svg';
import Gamedev from '../img/game-dev.svg';

function Service() {
    return (
        <InnerLayout>
            <ServiceStyled>
                <Title title={'Services'} span={'services'} />
                <div className="services">
                    <ServiceCard 
                        image={Design}
                        title={'Web Design'}
                        paragraph= {'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                    />
                    <div className="mid-card">
                        <ServiceCard 
                            image={Intelligence}
                            title={'Artificial Intelligence'}
                            paragraph= {'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                        />
                    </div>
                    <ServiceCard 
                        image={Gamedev}
                        title={'Game Development'}
                        paragraph= {'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                    />
                </div>
            </ServiceStyled>
        </InnerLayout>
    )
};

const ServiceStyled = styled.section` 
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem; 
        @media screen and (max-width:1000px){
            flex-direction: column;
           }
           @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
           }
           @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
           }
    }
`

export default Service
