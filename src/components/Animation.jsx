import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Animation = ({
  position,
  positionOffset,
  positionEasing,
  positionDuration,
  positionAnchorPlacement,
  children,
  className,
  onClick,
}) => {
  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      throttleDelay: 99,
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <div
      onClick={onClick}
      className={className}
      data-aos={position}
      data-os-offset={positionOffset}
      data-os-easing={positionEasing}
      data-os-duration={positionDuration}
      data-aos-anchor-placement={positionAnchorPlacement}
    >
      {children}
    </div>
  );
};

export default Animation;
