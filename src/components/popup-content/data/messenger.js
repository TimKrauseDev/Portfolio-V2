import imgOverview from "images/messenger/overview.jpg";

import imgUsers from "images/messenger/users.jpg";
import imgLiveChat from "images/messenger/live-chat.jpg";
import imgMessages from "images/messenger/messages.jpg";
import imgNotifications from "images/messenger/notifications.jpg";


export const overview = {
	description: "Chatic is an online chat room that utilizes Socket.IO for real-time communication.",
	image: imgOverview,
	imageAlt: "messenger website landing page",
	liveLink: "https://chatic.timkrause.dev/",
	githubLink: "https://github.com/TimKrauseDev/chatic-app"
}


export const slides = [
	{
		name: "Users",
		description: "Choose from existing users or create a new account with a custom avatar.",
		image: imgUsers,
		imageAlt: ""
	},
	{
		name: "Live Chat",
		description: "Socket.IO was integrated to enable websockets and provide live chat and other features.",
		image: imgLiveChat,
		imageAlt: ""
	},
	{
		name: "Messages",
		description: "Manage messages with the ability to send, receive, edit, and delete.",
		image: imgMessages,
		imageAlt: ""
	},
	{
		name: "Chat History",
		description: "Your messages are securely stored in a MongoDB database, ensuring their availability upon your return.",
		image: imgLiveChat,
		imageAlt: ""
	},
	{
		name: "Notifications",
		description: "Stay informed with notifications when a message is received in another room.",
		image: imgNotifications,
		imageAlt: ""
	},
]