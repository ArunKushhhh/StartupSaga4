import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Logo from "/images/logo.svg";
import Button from "./Button";

const navItems = [
  "Timeline",
  "Testimonials",
  "Sponsors",
  "FAQs",
  "Sponsor Us",
  "Contact",
];

const NavBar = () => {
  const navContainerRef = useRef(null);
  const logoRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Get the navbar height to offset the scroll position
      const navHeight = navContainerRef.current?.offsetHeight || 0;
      
      // Calculate the final scroll position with offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight - 20; // 20px extra padding

      // Smooth scroll to the section
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Handle nav item click
  const handleNavClick = (e, item) => {
    e.preventDefault();
    const sectionId = item.toLowerCase().replace(/\s+/g, '-');
    scrollToSection(sectionId);
  };

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
      logoRef.current.classList.remove("invert");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
      logoRef.current.classList.add("invert");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
      logoRef.current.classList.add("invert");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed w-[90%] md:w-[80%] top-4 z-50 py-3 md:py-6 md:px-12 px-4 transition-all duration-700 rounded-lg"
    >
      <header className="w-full">
        <nav className="flex items-center justify-between">
          {/* Logo and Product button */}
          <div className="flex items-center gap-7">
            <img
              ref={logoRef}
              src={Logo}
              alt="logo"
              className="w-8 md:w-auto transition-all duration-300"
            />

            <Button
              id="product-button"
              title="Brochure"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 flex items-center justify-center gap-1"
            />
          </div>

          {/* Navigation Links and Audio Button */}
          <div className="flex h-full items-center">
            <div className="hidden lg:block">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="nav-hover-btn"
                  onClick={(e) => handleNavClick(e, item)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;