import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Part from '../Component/Part';


 
function HomePage() {
    return (
       
        <HomePageStyled>
           <div className="particle-con">
        <Part />
    </div>
           <div className="typography">
               <h1>Assalamualikum, I'm <span>Syed Ehsanul karim</span></h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi expedita totam repellat eum modi consectetur suscipit nisi cum veniam in!</p>
               <div className="icons">
                   <a href="https://facebook.com/karimehsan3" className="icon i-facebook">
                       <FacebookIcon />
                   </a>
                    <a href="https://www.linkedin.com/in/ehsanul001/" className="icon i-linkedin">
                       <LinkedInIcon />
                   </a>
                   <a href="https://github.com/ehsan34726" className="icon i-github">
                       <GithubIcon />
                   </a>
               </div>
           </div>
        </HomePageStyled>
    )
};

const HomePageStyled = styled.header` 
    width: 100%;
    height: 100vh;
    position: relative ;
   
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
    }
    .icons{
        
        display: flex;
        margin-top: 1rem;
        justify-content: center;
        .icon{
            border: 2px solid var(--border-color);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.3s ease-in-out;
            &:hover{
                border: 2px solid var(--primary-color);
                color: var(--primary-color);
               
            }
            &:not(:last-child){
                margin-right: 1rem;
            }
            svg{
                margin: 0.7rem;
            }
        }

        .i-facebook{
            &:hover{
                border: 2px solid #0088FF;
                color: #0088FF;
            }
        }
        .i-linkedin{
            &:hover{
                border: 2px solid white;
                color: white;
            }
        }
        .i-github{
            &:hover{
                border: 2px solid #C5B4E3;
                color: white;
            }
        }
    }
`

export default HomePage;
