import React from 'react';
import './App.scss';
import {Navigate} from './Components/Navigate/Navigate';
import style from './Components/Contents/ContentsStyle.module.scss';
import {Route} from 'react-router-dom';
import {Home} from './Components/Contents/Home/Home';
import {AboutMePage} from './Components/Contents/About/AboutMePage';
import {ResumePage} from './Components/Contents/Resume/ResumePage';
import {Portfolios} from './Components/Contents/Portfolios/Portfolios';
import {Contacts} from './Components/Contents/Contacts/Contacts';


export function App() {
    return (
        <div className="App">
            <Navigate/>
            <div className={style.contents}>
                <Route exact path={'/'} render={() => <Home/>}/>
                <Route path={'/about'} render={() => <AboutMePage/>}/>
                <Route path={'/resume'} render={() => <ResumePage/>}/>
                <Route path={'/projects'} render={() => <Portfolios/>}/>
                <Route path={'/contacts'} render={() => <Contacts/>}/>
            </div>
        </div>
    );
}
