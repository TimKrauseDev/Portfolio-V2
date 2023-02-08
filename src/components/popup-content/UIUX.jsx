import Container from '../blocks/Container';

import imgMeteor from '../../images/meteor_home.jpg';
import imgVeeker from '../../images/professional_projects/veeker_home.jpg';
import imgDLDesign from '../../images/professional_projects/dldesign_home.jpg';
import imgLandology from '../../images/professional_projects/land_home.jpg';
import imgZirbel from '../../images/professional_projects/zirbel_home.jpg';
import imgKane from '../../images/professional_projects/hollykane.jpg';
import imgFCStudio from '../../images/professional_projects/fcstudio_home.jpg';

const About = () => {

    return (
        <>
            <section className="popup-section no-bottom-border">
                <Container className="title-banner">
                    <h1>
                        UI/UX.
                        <span className="border-echo--1"></span>
                        <span className="border-echo--1"></span>
                    </h1>
                    <div className="row-flex">
                        <div className="col col-12 mobile-full">
                            <h2>Personal</h2>
                            <div className='projects-list'>
                                <div>
                                    <img
                                        className="screen"
                                        src={imgMeteor}
                                        style={{ border: '2px solid black', padding: '5px' }}
                                        alt="Meteor project landing page"
                                    />
                                    <p>Duplication of Meteor's landing page using React and SCSS.</p>
                                    <div>
                                        <a href="https://meteor.timkrause.dev/" className="btn" target="_blank" rel="noopener noreferrer">View Live</a>
                                        <a href="https://github.com/TimKrauseDev/Meteor-Duplication" className="btn"  target="_blank" rel="noopener noreferrer">Github</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="border-echo--1"></span>
                    <div className="row-flex">
                        <div className="col col-12 mobile-full">
                            <h2>Professional</h2>
                            <div className="projects-list">
                                <div>
                                    <img
                                        className="screen"
                                        src={imgVeeker}
                                        style={{ border: '2px solid black', padding: '5px', }}
                                        alt="The Veeker Collective homepage"
                                    />
                                    <h3 className="h3">The Veeker Collective</h3>
                                    <p>Key Contributions</p>
                                    <ul>
                                        <li style={{ listStyleType: 'square', marginLeft: '18px' }}>Custom cursor as text hover effects on Collective Mission page and Individual Gallery pages.</li>
                                    </ul>
                                    <div>
                                        <a href="https://www.theveekarcollective.com/" className="btn" target="_blank" rel="noopener noreferrer">View Website</a>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        className="screen"
                                        src={imgDLDesign}
                                        style={{ border: '2px solid black', padding: '5px', }}
                                        alt="DL Design Studiohomepage"
                                    />
                                    <h3 className="h3">DL Design Studio</h3>
                                    <p>Key Contributions</p>
                                    <ul>
                                        <li style={{ listStyleType: 'square', marginLeft: '18px' }}>Website's build out and current design</li>
                                        <li style={{ listStyleType: 'square', marginLeft: '18px' }}>All website animation, hover & transition effects</li>
                                        <li style={{ listStyleType: 'square', marginLeft: '18px' }}>Custom Services page</li>
                                    </ul>
                                    <div style={{marginTop: 'auto'}}>
                                        <a href="https://www.dldesignstudioltd.com/" className="btn" target="_blank" rel="noopener noreferrer">View Website</a>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        className="screen"
                                        src={imgLandology}
                                        style={{ border: '2px solid black', padding: '5px', }}
                                        alt="Landology homepage"
                                    />
                                    <h3 className="h3">Landology</h3>
                                    <p>Key Contributions</p>
                                    <ul>
                                        <li style={{ listStyleType: 'square', marginLeft: '18px' }}>Homepage gallery animation and titles</li>
                                        <li style={{ listStyleType: 'square', marginLeft: '18px' }}>Custom Navigation dropdown w/ images & pronounciations</li>
                                    </ul>
                                    <div>
                                        <a href="http://www.landology.net/" className="btn" target="_blank" rel="noopener noreferrer">View Website</a>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        className="screen"
                                        src={imgZirbel}
                                        style={{ border: '2px solid black', padding: '5px', }}
                                        alt="Zirbel Architects homepage"
                                    />
                                    <h3 className="h3">Zirbel Architects</h3>
                                    <p>Key Contributions</p>
                                    <ul>
                                        <li style={{ listStyleType: 'square', marginLeft: '18px' }}>Custom Navigation</li>
                                    </ul>
                                    <div>
                                        <a href="https://www.zirbelarchitect.com/" className="btn" target="_blank" rel="noopener noreferrer">View Website</a>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        className="screen"
                                        src={imgKane}
                                        style={{ border: '2px solid black', padding: '5px', }}
                                        alt="Holly Kane homepage"
                                    />
                                    <h3 className="h3">Holly Kane</h3>
                                    <p>Key Contributions</p>
                                    <ul>
                                        <li style={{ listStyleType: 'square', marginLeft: '18px' }}>Website's build out and current design</li>
                                        <li style={{ listStyleType: 'square', marginLeft: '18px' }}>Custom navigation hover effects</li>
                                        <li style={{ listStyleType: 'square', marginLeft: '18px' }}>Custom button hover effects</li>
                                    </ul>
                                    <div>
                                        <a href="https://www.hollykane.com/" className="btn" target="_blank" rel="noopener noreferrer">View Website</a>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        className="screen"
                                        src={imgFCStudio}
                                        style={{ border: '2px solid black', padding: '5px', }}
                                        alt="FC Studio homepage"
                                    />
                                    <h3 className="h3">FC Studio</h3>
                                    <p>Key Contributions</p>
                                    <ul>
                                        <li style={{ listStyleType: 'square', marginLeft: '18px' }}>Webiste's current design</li>
                                    </ul>
                                    <div>
                                        <a href="https://www.fcstudioinc.com/" className="btn" target="_blank" rel="noopener noreferrer">View Website</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default About;
