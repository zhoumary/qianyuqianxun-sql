import React from 'react';
import ReactDOM from 'react-dom';
import './ToolBar.css';
import './custom.scss';

import Logo from './pics/logo01.gif';

class ToolBar extends React.Component {

    render() {
        return (
            <>
                <div id="toolBar">
                    <header>
                        <a href="#" id="homeLink"><img src={Logo} /></a>
                        <nav>
                            <ul id="navList">
                                <li><a href="#">首頁</a></li>
                                <li><a href="#">目的地</a></li>
                                <li><a href="#">旅游攻略</a></li>
                                <li><a href="#">聯係我們</a></li>
                            </ul>
                        </nav>
                    </header>
                </div>
            </>
        )
    }
}

export default ToolBar;