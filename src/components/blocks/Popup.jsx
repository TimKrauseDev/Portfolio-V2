import Container from './Container';

import Contact from '../popup-content/Contact';
import About from '../popup-content/About';
import UIUX from '../popup-content/UIUX';
import Ecommerce from '../popup-content/Ecommerce';
import Sorting from '../popup-content/Sorting';
import Messenger from '../popup-content/Messenger';

import LogoBranding from '../../svgs/LogoBranding';


const handleContentSwitch = (activeVersion) => {
	switch (activeVersion) {
		case 5: return <Contact />
        case 7: return <UIUX />
		case 8: return <About />
		case 9: return <Messenger />
		case 10: return <Ecommerce />
		case 11: return <Sorting />
		default: return <section><Container><h1>404</h1><p className="lead">The page your are looking for does not exist.</p></Container></section>
	}
}

const Popup = ({ setIsActive, activeVersion, activeTitle }) => {

	return (
	    <div className="popup-content">
	    	<header>
	    		<div className="header-inner-wrapper">
	    			<div className="header-inner header-inner--left">
					<div className="logo-branding-wrapper">
						<LogoBranding />
					</div>
	    			</div>
	    			<div className="header-inner header-inner--center"></div>
	    			<div className="header-inner header-inner--right">
	    				<button className="button--close" onClick={() => { setIsActive(false) }}>Menu</button>
	    			</div>
	    		</div>
	    	</header>
	    	{ handleContentSwitch(activeVersion) }
	    	<footer>
	    		<div className="footer-inner-wrapper">
	    			<div className="footer-inner footer-inner--left">Created by Tim Krause</div>
	    			<div className="footer-inner footer-inner--right">Copyright 2023</div>
	    		</div>

	    	</footer>
	    </div>
    );
}

export default Popup;
