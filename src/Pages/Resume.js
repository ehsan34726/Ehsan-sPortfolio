import React from 'react';
import ResumeComp from '../Component/ResumeComp';
import Skills from '../Component/Skills';
import { MainLayout } from '../styles/Layouts';

function Resume() {
    return (
        <MainLayout>
            <Skills />
            <ResumeComp />
        </MainLayout>
    )
}

export default Resume
