import imgOverview from "images/ecommerce/overview.jpg";

import imgApi from "images/ecommerce/api.jpg";
import imgAuth from "images/ecommerce/auth.jpg";
import imgDatabase from "images/ecommerce/database.jpg";
import imgOrderHistory from "images/ecommerce/order-history.jpg";
import imgPayment from "images/ecommerce/payment.jpg";
import imgShoppingCart from "images/ecommerce/shopping-cart.jpg";



export const overview = {
	description: "Krause Co is an online seed shop for all your gardening needs. This ecommerce website was built using a mern stack and has third-party services integrated to handle secure authentication and payment.",
	image: imgOverview,
	imageAlt: "ecommerce website landing page",
	liveLink: "https://krauseco.timkrause.dev/",
	githubLink: "https://github.com/TimKrauseDev/Krause-Co"
}

export const slides = [
	{
		name: "Api",
		description: "Restful api endpoints were created using express.",
		image: imgApi,
		imageAlt: "shopping cart dropdown on ecommerce website"

	},
	{
		name: "Authentication",
		description: "Passport was integrated to handle secure user authentication, allowing customers to login through google, twitter or github.",
		image: imgAuth,
		imageAlt: "login screen on ecommerce website"
	},
	{
		name: "Database",
		description: "Mongodb was used to handle all storage for users, orders and product data.",
		image: imgDatabase,
		imageAlt: "strawberry product on ecommerce website"
	},
	{
		name: "Order History",
		description: "After payment through stripe has been confirmed, orders are store and can be accessed through the the order history page.",
		image: imgOrderHistory,
		imageAlt: "order page on ecommerce website"
	},
	{
		name: "Payments",
		description: "Stripe was integrated to handle payment transactions of goods.",
		image: imgPayment,
		imageAlt: "checkout page on ecommerce website"
	},
	{
		name: "Shopping Carts",
		description: "Come back to where you left off. Your shopping carts are stored, so you don't have to worry about making a decision right away.",
		image: imgShoppingCart,
		imageAlt: "shopping cart on ecommerce website"
	},
]

