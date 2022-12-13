import { useRef } from 'react';

const GridButton = ({ 
	children, 
	version,
	title,
	setScaleX, 
	setScaleY, 
	setTranslateX, 
	setTranslateY, 
	popupRef, 
	setIsActive,
	setActiveVersion,
	setActiveTitle,
	isPopup
}) => {
	const buttonRef = useRef(null);

    const handleButtonClick = () => {

    	setActiveTitle(title || '');
    	setActiveVersion(version || 1);

        setScaleX(buttonRef.current.offsetWidth / popupRef.current.offsetWidth);
        setScaleY(buttonRef.current.offsetHeight / popupRef.current.offsetHeight);
        setTranslateX(buttonRef.current.offsetLeft + 'px');
        setTranslateY(buttonRef.current.offsetTop + 'px');
        setActiveVersion(version);

        setTimeout(() => {
	        setIsActive(true);
	        setTranslateX(0)
	        setTranslateY(0)
	        setScaleX(1)
	        setScaleY(1)
        }, 100)
    }

    if(!isPopup) {
    	return <div className={`grid-button grid-button--${version}`} >{children}</div>
    }

	return (
		<button 
			ref={buttonRef} 
			className={`grid-button grid-button--${version}`} 
			onClick={handleButtonClick}
		>{children}</button>
	
	);
}

export default GridButton;