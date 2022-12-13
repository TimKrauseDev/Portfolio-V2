import Container from '../blocks/Container';

import imgAbout from '../../images/about.jpg';

const About = () => {

	return (
		<>
			<section className="popup-section no-bottom-border">
				<Container className="title-banner">
					<h1>
						About.
						<span className="border-echo--1"></span>     
						<span className="border-echo--1"></span>     
					</h1>
					<div className="row-flex">
						<div className="col col-6 mobile-full">
							<figure>
								<img
									className="screen"
								    src={imgAbout}
								    alt="Milkyway taken in Joshua Tree National Park."
								/>
								<figcaption>Photo by Tim Krause</figcaption>
							</figure>
						</div>
						<div className="col col-6 mobile-full vert-center">
							<h2>Tim Krause</h2>
							<p className="lead">Frontend Developer</p>
							<p><strong>Hi there!</strong> My name is Tim and I am a programmer who loves nothing more than diving into a tough challenge and coming out the other side with a solution. I am always looking for new ways to improve my skills and stay on the cutting edge of technology.</p>

							<p>In my free time, I love traveling and exploring new places. I also enjoy taking photos and spending time at the beach. And when I'm not out and about, you can usually find me curled up on the couch binge-watching my latest TV obsession.</p>

							<p>I am known for my organizational skills, resourcefulness, and attention to detail, which have helped me excel in my field. I am excited to continue building my career and making a positive impact in the world of programming.</p>
							<div>
								<a href="mailto:timkrausedev@gmail.com" className="btn">Email Me</a>
							</div>
						</div>
					</div>
				</Container>   
			</section>
		</>
    );
}

export default About;