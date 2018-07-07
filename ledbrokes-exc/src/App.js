import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="page">
                <input type="checkbox" id="mob-menu-toggle"/>
                <div id="ham-wrp">
                    <label className="ham-icon" htmlFor="mob-menu-toggle">
                        <div className="ham-icon-span-wrp">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </label>
                </div>


                <header className="page-header">
                    <nav id="top-menu">
                        <ul className="top-menu-items list-style-prevent">
                            <li className="top-menu-item">
                                <a href="" className="top-menu-item-link link-default">
                                    <span>Home</span>
                                </a>
                            </li>
                            <li className="top-menu-item">
                                <a href="" className="top-menu-item-link link-default">
                                    <span>Let’s get started</span>
                                </a>
                            </li>
                            <li className="top-menu-item">
                                <a href="" className="top-menu-item-link link-default">
                                    <span>FAQ</span>
                                    </a>
                            </li>
                            <li className="top-menu-item">
                                <a href="" className="top-menu-item-link link-default">
                                    <span>How to get this</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <ul id="items" className="list-style-prevent">
                        <li className="item">
                            <div className="img-wrp drop-shadow" data-title="Bugs & Sam">
                                <div className="bkg-holder centered-bkg bugs-bunny-bkg"></div>
                            </div>
                        </li>
                        <li className="item">
                            <div className="img-wrp drop-shadow" data-title="Another Bugs & Sam pic...">
                                <div className="bkg-holder centered-bkg bugs-bunny-bkg"></div>
                            </div>
                        </li>
                        <li className="item">
                            <div className="img-wrp drop-shadow" data-title="Yet another Bugs & Sam pic...">
                                <div className="bkg-holder centered-bkg bugs-bunny-bkg"></div>
                            </div>
                        </li>
                        <li className="item">
                            <div className="img-wrp drop-shadow" data-title="Bugs & Sam">
                                <div className="bkg-holder centered-bkg bugs-bunny-bkg"></div>
                            </div>
                        </li>
                        <li className="item">
                            <div className="img-wrp drop-shadow" data-title="Bugs & Sam">
                                <div className="bkg-holder centered-bkg bugs-bunny-bkg"></div>
                            </div>
                        </li>
                        <li className="item">
                            <div className="img-wrp drop-shadow" data-title="Bugs & Sam">
                                <div className="bkg-holder centered-bkg bugs-bunny-bkg"></div>
                            </div>
                        </li>
                        <li className="item">
                            <div className="img-wrp drop-shadow" data-title="Bugs & Sam">
                                <div className="bkg-holder centered-bkg bugs-bunny-bkg"></div>
                            </div>
                        </li>
                        <li className="item">
                            <div className="img-wrp drop-shadow" data-title="Bugs & Sam">
                                <div className="bkg-holder centered-bkg bugs-bunny-bkg"></div>
                            </div>
                        </li>
                        <li className="item">
                            <div className="img-wrp drop-shadow" data-title="Bugs & Sam">
                                <div className="bkg-holder centered-bkg bugs-bunny-bkg"></div>
                            </div>
                        </li>

                    </ul>
                </main>
            </div>
        );
    }
}

export default App;
