import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// export const client = sanityClient({
// 	projectId: "9cgkrnvg",
// 	dataset: "production",
// 	apiVersion: "2021-11-16",
// 	useCdn: true,
// 	token:
// 		"sk0szDDBprKndxI5W12vpiMrUBR5qa8zXUCb3rKuUeyGj9dk1VZRYdjPnc9cHOboFfChNr2oRRq01nRhfhiwLlNThCctZyeyc6rOOZ7WOqj4IgbwvlYmFe0Gd92aUb0qnX9D8eXUSO82MoAYsPgjYSmltPEOpHDqklCMsiXpI4CVDac0Ks2W",
// });
export const client = sanityClient({
	projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
	dataset: 'production',
	apiVersion: '2021-11-16',
	useCdn: true,
	token: process.env.REACT_APP_SANITY_TOKEN,
  });

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
