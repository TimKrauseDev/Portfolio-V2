import { useState } from 'react';

const FeatureSlider = ({slides}) => {

	const [selectedFeature, setSelectedFeature] = useState("feature0");

	const handleRenderRadioItems = () => {
		return slides.map( (slide, index) => (
        	<div key={index} className="radio-item">
        	<label>
                <input
                	type="radio"
                	value={`feature${index}`}
                	name="feature"
                	checked={selectedFeature === `feature${index}`}
                	onChange={ (e) => { setSelectedFeature(e.target.value); } }
                />
                <span className="radio-label-name lead">{slide.name}</span>
            </label>
        	</div>
    	));
	}

	const handleRenderSlides = () => {
		return slides.map( (slide, index) => (
			<div key={index} className={`slider-container ${selectedFeature === `feature${index}` ? "active" : ""}`}>
				<div className="top">
					<h3>{slide.name}</h3>
					<p className="lead">{slide.description}</p>
				</div>
				<div className="bottom">
					<img
						className="screen"
					    src={slide.image}
					    alt="company logo"
					/>

				</div>
			</div>
        ));
	}
	

	return (
		<div className="feature-slider">
			<div className="row-flex">

				<div className="col col-4 md-full mobile-full">
					<h2>Features</h2>
					<div className="radio-wrapper">
						{slides && handleRenderRadioItems()}
		            </div>
				</div>
				
				<div className="col col-8 md-full mobile-full">
					<div className="slider-container-wrapper">
						{slides && handleRenderSlides()}
					</div>
				</div>

			</div>
		</div>
    );
}

export default FeatureSlider;