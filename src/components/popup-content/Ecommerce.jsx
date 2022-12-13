import Container from '../blocks/Container';
import FeatureSlider from '../blocks/FeatureSlider';

import { overview, slides } from './data/ecommerce';

const Ecommerce = () => {

	return (
		<>
			<section className="popup-section">
				<Container className="title-banner">
					<h1>
						Ecommerce.
						<span className="border-echo--1"></span>     
						<span className="border-echo--1"></span>     
					</h1>
					<div className="row-flex">
						<div className="col col-6 mobile-full">
							<img
								className="screen"
							    src={overview.image}
							    alt={overview.imageAlt}
							/>
						</div>
						<div className="col col-6 mobile-full vert-center">
							<h2>Overview</h2>
							<p className="lead">
								{overview.description}
							</p>
							<div>
								<a href={overview.liveLink} className="btn">view live</a>
								<a href={overview.githubLink} className="btn">view code</a>
							</div>
						</div>
					</div>
				</Container>   
			</section>
			<section className="popup-section no-bottom-border">
				<Container>
					<FeatureSlider slides={slides} />
				</Container>
			</section>
		</>

    );
}

export default Ecommerce;