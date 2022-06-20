import React from 'react';
import styled from 'styled-components';
import Resume from "../img/resume.png";
import PrimaryButton from './PrimaryButton';

function Image() {
    return (
        <ImageStyled>
            <div className='content'>
            <div className="left-content">
                <img src={Resume} alt="" />
            </div>
            <div className="right-content">
                <h4>I am <span>Syed Ehsanul Karim</span></h4>
                <p className="paragraph">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo enim totam aut culpa quia quis velit cumque ab, repellat obcaecati dolorem perferendis maxime iste facere quaerat.
                </p>

                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Language</p>
                        <p>Location</p>
                        <p>Services</p>
                    </div>
                    <div className="info">
                        <p>: Syed Ehsanul Karim</p>
                        <p>: 24</p>
                        <p>: Bangladeshi</p>
                        <p>: Bengali, English</p>
                        <p>: Sylhet, Bangladesh</p>
                        <p>: Freelance</p>
                    </div>
                </div>
                <PrimaryButton title={'Download CV'} />
            </div>
            </div>

        </ImageStyled>
    )
};

const ImageStyled = styled.div`
    .content{
        margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .right-content, .left-content{
            margin-bottom: 2rem;
        }
    }
    
}
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }

    }
    .right-content{
        width: 100%;
       @media screen and (max-width:370px){
        .right-content{
            width: 100%;
            margin-bottom: 2rem;
        }
    }
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
               
            }
            
    }
}
`;
export default Image;
