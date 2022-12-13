import imgOverview from "images/sorting/overview.jpg";

import imgAlgorithm from "images/sorting/algorithm.jpg";
import imgSteps from "images/sorting/steps.jpg";
import imgSettings from "images/sorting/settings.jpg";


export const overview = {
	description: "This sorting visualizer offers users the ability to see the various sorting algorithms in action.",
	image: imgOverview,
	imageAlt: "sorting visualizers website landing page",
	liveLink: "https://sorting-visualizer.timkrause.dev/",
	githubLink: "https://github.com/TimKrauseDev/Sorting-Visualizer"
}

export const slides = [
	{
		name: "Algoritms",
		description: "Explore the visual representation of five different sorting algorithms: Bubble, Insertion, Merge, Quick and Selector Sort.",
		image: imgAlgorithm,
		imageAlt: "visual of in-progress merge sort."

	},
	{
		name: "Step Through Time",
		description: "Navigate through the steps of the algorithm's process, advancing or reversing to observe the movements in action.",
		image: imgSteps,
		imageAlt: "Visual of the visualizer controls."

	},
	{
		name: "Settings",
		description: "Control the number of bars being sorted and the speed of sorting with adjustable settings.",
		image: imgSettings,
		imageAlt: "Visual of all visualizer settings."

	}
]