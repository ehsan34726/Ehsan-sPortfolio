import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import ProgressBar from './ProgressBar';
import Title from './Title';

function Skills() {
    return (
        <SkillsStyled>
                <Title title={'My Skills'} span={"My Skills"} />
            <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={"HTML5"}
                            width={'75%'}
                            text={'75%'}
                        />
                        <ProgressBar 
                            title={"CSS3"}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar 
                            title={"JAVASCRIPT"}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar 
                            title={"REACT JS"}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar 
                            title={"TAILWIND"}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar 
                            title={"BOOTSTRAP"}
                            width={'95%'}
                            text={'95%'}
                        />
                        <ProgressBar 
                            title={"PHOTOSHOP"}
                            width={'90%'}
                            text={'90%'}
                        />
                    </div>
            </InnerLayout>
        </SkillsStyled>
    )
};
const SkillsStyled = styled.section ` 
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
