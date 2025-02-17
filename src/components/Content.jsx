import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";


const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 5l7 7-7 7" />
    <line x1="4" y1="12" x2="20" y2="12" />
  </svg>
);

const Content = () => {
  return (
    <>
      <div className="w-[100%] m-auto flex flex-col items-center justify-start">
        <div className="w-[100%] flex flex-col items-center gap-4">
          {" "}
          {/* Changed to items-start */}
          <h1 className="uppercase text-center text-5xl md:text-6xl lg:text-9xl font-['shakuro'] text-white">
            FAQs
          </h1>
          <p className="font-normal text-[16px] text-white text-center">
            {" "}
            {/* Font size set to 16px */}
            Have questions? Find quick answers to the most common queries about
            Unaati 4.0. If you need more details, feel free to reach out!
          </p>
          <a
            href="https://www.aitecell.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between  bg-white backdrop-blur-md rounded-full text-black"
          >
          <Button title={"Visit I&E Cell"} bg={"bg-violet-50"} rightIcon={<TiLocationArrow />} containerClass={"flex justify-between gap-2 items-center w-full"}/>
          </a>
        </div>
      </div>
    </>
  );
};

export default Content;
