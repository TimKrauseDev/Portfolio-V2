import Container from '../blocks/Container';
import FeatureSlider from '../blocks/FeatureSlider';

import { overview, slides } from './data/sorting';

const Sorting = () => {

	return (
		<>
			<section className="popup-section">
				<Container className="title-banner">
					<h1>
						Sorting.
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
								<a href={overview.liveLink} className="btn" target="_blank" rel="noopener noreferrer">view live</a>
								<a href={overview.githubLink} className="btn" target="_blank" rel="noopener noreferrer">view code</a>
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

export default Sorting;
