import React from 'react';
import { InnerLayout } from '../styles/Layouts';
import Title from './Title';
import styled from 'styled-components';
import SmallTitle from './SmallTitle';
import BusinessCenterIcon from '@material-ui/icons//BusinessCenter';
import SchoolIcon from '@material-ui/icons//School';
import ResumeItem from './ResumeItem';

function ResumeComp() {
    const briefcasae = <BusinessCenterIcon />
    const school = <SchoolIcon />


    return (
        <ResumeCompStyled>
            <Title title={'Resume'} span={'Resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcasae} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem
                        year={'2020-Present'}
                        title={'Frontend Developer'}
                        subTitle={'Freelance'}
                        text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero reiciendis dolorem provident, laudantium quidem at ipsam officiis enim dolor molestias?'}
                    />
                    <ResumeItem
                        year={'2020'}
                        title={'Final Year Project for My Graduation'}
                        subTitle={'E-shop'}
                        text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero reiciendis dolorem provident, laudantium quidem at ipsam officiis enim dolor molestias?'}
                    />
                    <ResumeItem
                        year={'2019'}
                        title={'3rd Year Project'}
                        subTitle={'Rental Master'}
                        text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero reiciendis dolorem provident, laudantium quidem at ipsam officiis enim dolor molestias?'}
                    />
                    <div className="u-margin-bottom">
                    <ResumeItem
                        year={'2018'}
                        title={'Poster Designing'}
                        subTitle={'Secured Second Position'}
                        text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero reiciendis dolorem provident, laudantium quidem at ipsam officiis enim dolor molestias?'}
                    />
                    </div>
                

                </div>
                <div className="small-title">
                    <SmallTitle icon={school} title={'Educational Qualificatoins '} />
                </div>
                <div className="resume-content">
                    <ResumeItem
                        year={'2017-2022'}
                        title={'B.Sc in CSE'}
                        subTitle={'Metropolitan University, Sylhet'}
                        text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero reiciendis dolorem provident, laudantium quidem at ipsam officiis enim dolor molestias?'}
                    />
                    <ResumeItem
                        year={'2019'}
                        title={'Skill Development and Mobile Game Application'}
                        subTitle={'ICT Devision, Bangladesh'}
                        text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero reiciendis dolorem provident, laudantium quidem at ipsam officiis enim dolor molestias?'}
                    />
                    <ResumeItem
                        year={'2015-2016'}
                        title={'HSC'}
                        subTitle={'Moulvibazar Govt. College'}
                        text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero reiciendis dolorem provident, laudantium quidem at ipsam officiis enim dolor molestias?'}
                    />
                    <ResumeItem
                        year={'2014'}
                        title={'SSC'}
                        subTitle={'The Flowers KG and High School'}
                        text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero reiciendis dolorem provident, laudantium quidem at ipsam officiis enim dolor molestias?'}
                    />

                </div>
            </InnerLayout>
        </ResumeCompStyled>
    )
};

const ResumeCompStyled = styled.section` 
    .small-title{
        padding-bottom: 3rem;
    }
    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`

export default ResumeComp
