import React from 'react';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import styled from 'styled-components';
import Title from '../Component/Title';
import PrimaryButton from '../Component/PrimaryButton';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../Component/ContactItem';

function Contact() {
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />

    return (
        <MainLayout>
            <Title title={'Contact'} span={'contact'} />
            <ContactStyled>
                <InnerLayout className='contact-section'>
                    <div className="left-content">
                        <div className="contact-title">
                            <h4>Stay Tuned</h4>
                        </div>

                        <div className="form">
                            <div className="form-field">
                                <label htmlFor="name" >Name: </label>
                                <input type="text" id="name" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="email" >Email: </label>
                                <input type="email" id="email" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="subject" >Subject: </label>
                                <input type="text" id="subject" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="text-area">Enter Your Message</label>
                                <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
                            </div>
                            <div className="form-field f-button">
                                <PrimaryButton title={'Send Email'}/>
                            </div>
                        </div>
                    </div>
                    <div className="right-content">
                        <ContactItem 
                            title={'Phone'}
                            icon={phone}
                            contact1={'+88017-97283528'}
                            contact2={'+88016-17283535'}
                        />
                        <ContactItem 
                            title={'Email'}
                            icon={email}
                            contact1={'karimehsan3@gmail.com'}
                        />
                        <ContactItem 
                            title={'Address'}
                            icon={location}
                            contact1={'26/D Chandantula, amberkhana, Sylhet'}
                        />
                    </div>
                </InnerLayout>
            </ContactStyled>
        </MainLayout>
    )
}

const ContactStyled = styled.section` 
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
        
        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);
            .f-button{
                margin-bottom: 3rem;
            }
        }
        .right-content{
            display: grid;
            grid-template-columns: repeat(1, 1fr) ;
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font: 100.8rem;
            }
        }
        .form{
            width: 100%;
            @media screen and (max-width: 502px){
                width: 100%;
            }
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding: 0 .5rem;
                    color: inherit;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding: 0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    padding: .8rem 1rem;
                    width: 100%;
                }
            }
            .f-button{
                margin-bottom: 2rem;
            }
        }
    }
`;

export default Contact;
