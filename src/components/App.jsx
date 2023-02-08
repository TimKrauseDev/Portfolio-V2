import { useState, useRef, useEffect } from 'react';

import '../styles/App.scss';

import Container from './blocks/Container';
import GridButton from './blocks/GridButton';
import Popup from './blocks/Popup';
import Hero from './blocks/Hero';

import CirclePlus from '../svgs/CirclePlus';
import GithubSquare from '../svgs/GithubSquare';
import Envelope from '../svgs/Envelope';
import Linkedin from '../svgs/Linkedin';
import Download from '../svgs/Download';

import techImages from '../images/technologies/index.js';
import resumePDF from '../images/TimKrauseResume.pdf';

import { overview as ecommerceOverview } from './popup-content/data/ecommerce'
import { overview as messengerOverview } from './popup-content/data/messenger'
import { overview as sortingOverview } from './popup-content/data/sorting'

function App() {
    const [scaleX, setScaleX] = useState(null);
    const [scaleY, setScaleY] = useState(null);
    const [translateX, setTranslateX] = useState(null);
    const [translateY, setTranslateY] = useState(null);
    const [isActive, setIsActive] = useState(false);
    const [activeVersion, setActiveVersion] = useState(1);
    const [activeTitle, setActiveTitle] = useState('');

    const popupRef = useRef(null);
    const popupStyles = { transform: `translate3d(${translateX},${translateY},0) scale(${scaleX}, ${scaleY})` }

    useEffect(() => {
        window.history.pushState(null, document.title, window.location.href);
    }, []);

    return (
        <>
            <main className={`app ${isActive ? 'is-active' : ''}`}>
                <Container grid={true} size='lg'>
                    <GridButton
                        version={1}
                        title="About"
                        isPopup={false}
                    >
                        <div className="item-wrapper">
                            <Hero />
                        </div>

                    </GridButton>
                    <GridButton
                        version={2}
                        title="Other"
                        isPopup={false}
                    >
                        <div className="item-wrapper has-padding">
                            <div className="tech-list-wrapper">
                                <div className="image-wrapper">
                                    <img src={techImages.html} alt="html" />
                                </div>
                                <div className="image-wrapper">
                                    <img src={techImages.css} alt="css" />
                                </div>
                                <div className="image-wrapper">
                                    <img src={techImages.js} alt="js" />
                                </div>
                                <div className="image-wrapper">
                                    <img src={techImages.jquery} alt="jquery" />
                                </div>
                                <div className="image-wrapper">
                                    <img src={techImages.bootstrap} alt="bootstrap" />
                                </div>
                                <div className="image-wrapper">
                                    <img src={techImages.scss} alt="scss" />
                                </div>
                                <div className="image-wrapper">
                                    <img src={techImages.react} alt="react" />
                                </div>
                                <div className="image-wrapper">
                                    <img src={techImages.redux} alt="redux" />
                                </div>
                                <div className="image-wrapper">
                                    <img src={techImages.node} alt="node" />
                                </div>
                                <div className="image-wrapper">
                                    <img src={techImages.mongoDB} alt="mongoDB" />
                                </div>
                                <div className="image-wrapper">
                                    <img src={techImages.postman} alt="postman" />
                                </div>
                                <div className="image-wrapper">
                                    <img src={techImages.stackoverflow} alt="stackoverflow" />
                                </div>
                            </div>
                        </div>
                    </GridButton>
                    <GridButton
                        version={3}
                        title="Other"
                        isPopup={false}
                    >
                        <div className="item-wrapper comming-soon">
                            <p className="lead">coming soon.</p>
                        </div>
                    </GridButton>
                    <GridButton
                        version={4}
                        title="Other"
                        isPopup={false}
                    >
                        <div className="item-wrapper has-padding">
                            <h6 className="float-number m-0">
                                <span className="spacer"></span>
                                <span>Links</span>
                                <span className="spacer"></span>
                            </h6>
                            <div className="social-links">
                                <a href={resumePDF} rel="noopener noreferrer" target="_blank" className="social-link">
                                    <Download />
                                    Resume
                                </a>
                                <a href="https://github.com/TimKrauseDev" rel="noopener noreferrer" target="_blank" className="social-link">
                                    <GithubSquare />
                                    Github
                                </a>
                                <a href="mailto:timkrausedev@gmail.com" rel="noopener noreferrer" target="_blank" className="social-link">
                                    <Envelope />
                                    Email
                                </a>
                                <a href="https://www.linkedin.com/in/timothyckrause/" rel="noopener noreferrer" target="_blank" className="social-link">
                                    <Linkedin />
                                    Linkedin
                                </a>
                            </div>
                        </div>
                    </GridButton>
                    <GridButton
                        version={5}
                        title="Contact"
                        isPopup={true}
                        setScaleX={setScaleX}
                        setScaleY={setScaleY}
                        setTranslateX={setTranslateX}
                        setTranslateY={setTranslateY}
                        popupRef={popupRef}
                        setIsActive={setIsActive}
                        setActiveVersion={setActiveVersion}
                        setActiveTitle={setActiveTitle}
                    >
                        <div className="contact-item-wrapper">
                            <div className="contact-item__title"><span>Contact</span></div>
                            <CirclePlus />
                        </div>
                    </GridButton>
                    <GridButton
                        version={7}
                        title="UI/UX"
                        isPopup={true}
                        setScaleX={setScaleX}
                        setScaleY={setScaleY}
                        setTranslateX={setTranslateX}
                        setTranslateY={setTranslateY}
                        popupRef={popupRef}
                        setIsActive={setIsActive}
                        setActiveVersion={setActiveVersion}
                        setActiveTitle={setActiveTitle}
                    >
                        <div className="item-wrapper has-padding">
                            <p className="text-popart">
                                <span label="UI/UX">UI/UX.</span>
                            </p>
                            <div>
                                <p className="text-tag">{"<Projects>"}</p>
                                <p>Learn more more about some of the completed designs I have done.</p>
                                <p className="text-tag">{"</Projects>"}</p>
                            </div>
                        </div>
                    </GridButton>
                    <GridButton
                        version={8}
                        title="Other"
                        isPopup={true}
                        setScaleX={setScaleX}
                        setScaleY={setScaleY}
                        setTranslateX={setTranslateX}
                        setTranslateY={setTranslateY}
                        popupRef={popupRef}
                        setIsActive={setIsActive}
                        setActiveVersion={setActiveVersion}
                        setActiveTitle={setActiveTitle}
                    >
                        <div className="item-wrapper has-padding center">
                            <p className="text-shadow" >
                                <span>about.</span>
                                <span className="border-echo--2"></span>
                                <span className="border-echo--1"></span>
                                <span className="border-echo--1"></span>
                            </p>
                        </div>
                    </GridButton>
                    <GridButton
                        version={9}
                        title="Messenger"
                        isPopup={true}
                        setScaleX={setScaleX}
                        setScaleY={setScaleY}
                        setTranslateX={setTranslateX}
                        setTranslateY={setTranslateY}
                        popupRef={popupRef}
                        setIsActive={setIsActive}
                        setActiveVersion={setActiveVersion}
                        setActiveTitle={setActiveTitle}
                    >
                        <div className="item-wrapper has-padding">
                            <p className="text-popart text-yellow">
                                <span label="messenger">messenger.</span>
                            </p>
                            <div>
                                <p className="text-tag">{"<Project>"}</p>
                                <p>{messengerOverview.description}</p>
                                <p className="text-tag">{"</Project>"}</p>
                            </div>
                        </div>
                    </GridButton>
                    <GridButton
                        version={10}
                        title="Ecommerce"
                        isPopup={true}
                        setScaleX={setScaleX}
                        setScaleY={setScaleY}
                        setTranslateX={setTranslateX}
                        setTranslateY={setTranslateY}
                        popupRef={popupRef}
                        setIsActive={setIsActive}
                        setActiveVersion={setActiveVersion}
                        setActiveTitle={setActiveTitle}
                    >
                        <div className="item-wrapper has-padding">
                            <p className="text-popart">
                                <span label="ecommerce">ecommerce.</span>
                            </p>
                            <div>
                                <p className="text-tag">{"<Project>"}</p>
                                <p>{ecommerceOverview.description}</p>
                                <p className="text-tag">{"</Project>"}</p>
                            </div>
                        </div>
                    </GridButton>
                    <GridButton
                        version={11}
                        title="Sorting Visualizer"
                        isPopup={true}
                        setScaleX={setScaleX}
                        setScaleY={setScaleY}
                        setTranslateX={setTranslateX}
                        setTranslateY={setTranslateY}
                        popupRef={popupRef}
                        setIsActive={setIsActive}
                        setActiveVersion={setActiveVersion}
                        setActiveTitle={setActiveTitle}
                    >
                        <div className="item-wrapper has-padding">
                            <p className="text-popart text-orange">
                                <span label="sorting">sorting.</span>
                            </p>
                            <div>
                                <p className="text-tag">{"<Project>"}</p>
                                <p>{sortingOverview.description}</p>
                                <p className="text-tag">{"</Project>"}</p>
                            </div>
                        </div>
                    </GridButton>
                </Container>
            </main>

            <div ref={popupRef} className={`popup ${isActive ? 'is-active' : ''}`} style={popupStyles}>
                <Popup
                    setIsActive={setIsActive}
                    activeVersion={activeVersion}
                    activeTitle={activeTitle}
                />
            </div>
        </>
    );
}

export default App;
