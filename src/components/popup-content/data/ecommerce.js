import imgOverview from "images/ecommerce/overview.jpg";

import imgApi from "images/ecommerce/api.jpg";
import imgAuth from "images/ecommerce/auth.jpg";
import imgDatabase from "images/ecommerce/database.jpg";
import imgOrderHistory from "images/ecommerce/order-history.jpg";
import imgPayment from "images/ecommerce/payment.jpg";
import imgShoppingCart from "images/ecommerce/shopping-cart.jpg";



export const overview = {
	description: "Krause Co is an online seed shop for all your gardening needs. This e-commerce website was developed using a MERN stack and integrates third-party services for secure authentication and payment.",
	image: imgOverview,
	imageAlt: "ecommerce website landing page",
	liveLink: "https://krauseco.timkrause.dev/",
	githubLink: "https://github.com/TimKrauseDev/Krause-Co"
}

export const slides = [
	{
		name: "Api",
		description: "RESTful API endpoints were created using Express.",
		image: imgApi,
		imageAlt: "shopping cart dropdown on ecommerce website"
	},
	{
		name: "Authentication",
		description: "Integrated Passport to handle secure user authentication, providing customers with the option to login through Google or GitHub.",
		image: imgAuth,
		imageAlt: "login screen on ecommerce website"
	},
	{
		name: "Database",
		description: "MongoDB was utilized for all storage needs, including user, order, and product data.",
		image: imgDatabase,
		imageAlt: "strawberry product on ecommerce website"
	},
	{
		name: "Order History",
		description: "Upon confirmation of payment through Stripe, orders are stored and can be accessed through the order history page.",
		image: imgOrderHistory,
		imageAlt: "order page on ecommerce website"
	},
	{
		name: "Payments",
		description: "Stripe was integrated to handle payment transactions for goods.",
		image: imgPayment,
		imageAlt: "checkout page on ecommerce website"
	},
	{
		name: "Shopping Carts",
		description: "Pick up where you left off with confidence, as your shopping carts are securely stored for future consideration.",
		image: imgShoppingCart,
		imageAlt: "shopping cart on ecommerce website"
	},
]