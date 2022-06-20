import React, { useState } from 'react';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../Component/Title';
import portfolios from '../data/portfolios';
import Menu from '../Component/Menu';
import Button from '../Component/Button';

const allButtons = ['All', ...new Set(portfolios.map(item => item.category))]

function Portfolios() {
    const [menuItem, setMenuItems] = useState(portfolios);
    const [button] = useState(allButtons);

    const filter = (button) => {

        if(button === 'All'){
            setMenuItems(portfolios);
            return;
        }

        const filteredData = portfolios.filter(item => item.category === button);
        setMenuItems(filteredData);
    }
    return (
        <MainLayout>
            <Title title={'Portfolios'} span={'portfolios'} />
            <InnerLayout>

                <Button filter={filter} button={button} />
                <Menu menuItem={menuItem} />
            </InnerLayout>
        </MainLayout>
    )
}

export default Portfolios