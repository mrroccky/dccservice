import { HoverEffect } from "./cardHover";



export function CardHoverUse() {
  return (
    <>
    <div className="bg-white p-2 mt-1 flex flex-col justify-center items-center font-sans">
      <h1 className="text-center font-extrabold text-2xl mt-5 mb-5 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
      OUR SERVICE DOMAINS
      </h1>
      </div>
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
    </>
  );
}
export const projects = [
  {
    title: "Domestic Services",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Corporate Services",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Commercial Services",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
