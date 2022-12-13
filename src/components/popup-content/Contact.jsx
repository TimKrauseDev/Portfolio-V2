import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

import Container from '../blocks/Container';

import imgContact from '../../images/contact.jpg';

const Contact = () => {
	const { register, formState: { errors, isSubmitSuccessful }, handleSubmit, reset } = useForm();

	useEffect(() => {
		if(isSubmitSuccessful) reset();
	}, [isSubmitSuccessful, reset])

	const onSubmit = (data) => {
	    const templateParams = {
	    	from_name: data.name,
	    	reply_to: data.email,
	    	message: data.message,
	    };

	    emailjs.send(
	    	"service_3637lis",
	    	"template_l8j28lo",
	    	templateParams,
	    	"user_4yd3QPeis99cVN9odcI5s"
	    );
	};

	return (
		<>
			<section className="popup-section no-bottom-border">
				<Container className="title-banner">
					<h1>
						Contact.
						<span className="border-echo--1"></span>     
						<span className="border-echo--1"></span>     
					</h1>
					<div className="row-flex">
						<div className="col col-6 mobile-full">
							<figure>
								<img
									className="screen"
								    src={imgContact}
								    alt="Milkyway taken in Joshua Tree National Park."
								/>
								<figcaption>Photo by Tim Krause</figcaption>
							</figure>
						</div>
						<div className="col col-6 mobile-full vert-center">
							<h2>Reach out.</h2>


							<form onSubmit={handleSubmit(onSubmit)}>
								<label htmlFor="name">Name</label>
							    <input 
							    	id="name"
							    	type="text"
							        {...register("name", { required: "Name is required" })} 
							        aria-invalid={errors.name ? "true" : "false"} 
							    />
							    {errors.name?.type === 'required' && <p role="alert" className="alert">{errors.name?.message}</p>}

								<label htmlFor="email">E-mail</label>
							    <input 
							    	id="email"
							    	type="email"
							        {...register("email", { 
							        	required: "Email is required",
							        	pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ //eslint-disable-line
						        	})} 
							        aria-invalid={errors.email ? "true" : "false"} 
							    />
							    {errors.email?.type === 'required' && <p role="alert" className="alert">{errors.email?.message}</p>}
							    {errors.email?.type === 'pattern' && <p role="alert" className="alert">Valid email is required</p>}

								<label htmlFor="message">Message</label>
							    <textarea
							    	id="message"
							    	type="text"
									{...register("message", { required: "Message is required" })} 
							        aria-invalid={errors.message ? "true" : "false"} 
							    />
							    {errors.message?.type === 'required' && <p role="alert" className="alert">{errors.message?.message}</p>}

							      
								<input type="submit" className="btn"/>
							</form>
						</div>
					</div>
				</Container>   
			</section>
		</>
    );
}

export default Contact;