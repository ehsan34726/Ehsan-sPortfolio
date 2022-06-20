import React from 'react';
import styled from 'styled-components';
import Title from '../Component/Title';
import { InnerLayout } from '../styles/Layouts';
import ReviewItem from './ReviewItem';

function Reviews() {
    return (
       
            <ReviewsStyled>
                <Title title={'Reviews'} span={'Reviews'} />
                <InnerLayout>
                       <div className="reviews">
                            <ReviewItem
                            text = {'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi expedita totam repellat eum modi consectetur suscipit!'}
                            />
                            <ReviewItem
                            text = {'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi expedita totam repellat eum modi consectetur suscipit nisi cum veniam in!'}
                            />
                             <ReviewItem
                            text = {'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi expedita totam repellat eum modi consectetur suscipit nisi cum veniam in!'}
                            />
                       </div>
                </InnerLayout>
            </ReviewsStyled>
        
    )
}

const ReviewsStyled = styled.section` 
    .reviews{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
        width: 100%;
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
           }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`

export default Reviews
