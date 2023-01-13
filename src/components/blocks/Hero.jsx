import { useState, useEffect } from 'react';
import { format } from 'date-fns';

import LogoBranding from '../../svgs/LogoBranding';

const Hero = () => {
	const [currentDate, setCurrentDate] = useState(new Date());

	useEffect(() => {

		const currentDateInterval = setInterval(() => {
			setCurrentDate(new Date());
		}, 1000);

		return () => { clearInterval(currentDateInterval) }

	}, [])

	return (
		<div className='hero'>
			<div className="hero-header__wrapper">
				<div className="hero-header--left">
					<div className="logo-branding-wrapper">
						<LogoBranding />
					</div>
				</div>
				<div className="hero-header--right">
					<div className="date__wrapper">
						<p className="lead date date--day">{format(currentDate, 'dd')} <strong>{format(currentDate, 'LLLL')}</strong> {format(currentDate, 'yyyy')}</p>
						<p className="lead date date--time">{format(currentDate, 'HH:mm:ss')}</p>
					</div>
				</div>
			</div>
			<div className="hero-content">
				<p className="text-tag">{"<Hello>"}</p>
				<h1 className="h2"><span>I'm</span> Tim Krause</h1>
				<p className="lead">Full Stack Developer<br />Based out of Wilmington, NC</p>
				<p className="text-tag">{"</Hello>"}</p>

			</div>
		</div>
    );
};

export default Hero;
