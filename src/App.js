import Sidebar from './Component/Sidebar';
import styled from 'styled-components';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Resume from './Pages/Resume';
import Portfolios from './Pages/Portfolios';
import { Routes, Route } from 'react-router-dom';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import MenuIcon from '@material-ui/icons/Menu';
import Switch from '@material-ui/core/Switch'
import { useState } from 'react';
import { useEffect } from 'react';
import { IconButton } from '@material-ui/core';

function App() {
  const [theme, setTheme] = useState('dark-theme');
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() =>{
    document.documentElement.className = theme 
  }, [theme]);

  const themeToggler = () => {
    if(theme === 'light-theme'){
      setTheme('dark-theme');
      setChecked(false)
    }else{
      setTheme('light-theme');
      setChecked(true)
    }
  }


  return (
    <div className='App'>
      <Sidebar navToggle={navToggle}/>

      <div className="theme">
      <div className="light-dark-mode">
            <div className="left-content">
                <Brightness4Icon />
            </div>
            <div className="right-content">
              <Switch
                value=""
                checked={checked}
                inputProps={{ "aria-label": '' }}
                onClick= {themeToggler}
                size='medium'
                
              />
            </div>
          </div>
      </div>
      <div className="ham-burger-menu">
          <IconButton onClick={() => setNavToggle(!navToggle)}>
              <MenuIcon />
          </IconButton>
        </div>

      <MainContentStyled>
      <div className="lines">
               <div className="line-1"></div>
               <div className="line-2"></div>
               <div className="line-3"></div>
                <div className="line-4"></div>
            </div>

         
            
          <Routes>
            <Route path="home" element={<HomePage/>} />
          
          
            <Route path="/about" element={<About/>} />
          
          
            <Route path="/resume" element={<Resume/>} />
          
          
            <Route path="/portfolios" element={<Portfolios/>} />
          
          
            <Route path="/contact" element={<Contact/>} />
          </Routes>

      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main` 
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width:1200px){
       
        margin-left: 0px;
    }

  
  /* .lines{
        position: absolute;
        min-height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-evenly;

        .line-1, .line-2, .line-3, .line-4{
            width: 1px;
            min-height: 100vh;
            background-color: var(--border-color);
        }
    } */

`

export default App;
