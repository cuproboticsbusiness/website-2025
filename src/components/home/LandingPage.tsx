import { CSSProperties } from "react";
import { TextAnimateOnce } from "../TextAnimate";
import styles from "./home.module.css";

const LandingPage = () => {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 150 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };

  return (
    <section
      id={styles.landingPage}
      className="w-screen h-screen overflow-hidden"
    >
      {/* BG VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/home/bgvid.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-[#1c0303]/70" />

      {/* CRC LOGO */}
      <svg
        width="520"
        height="520"
        viewBox="0 0 510 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id={styles.logoWrapper}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <path
          id="logo-big-arc"
          d="M193.57 6.6426C105.555 27.8159 27.0894 107.112 5.91608 195.542C-1.97203 229.585 -1.97203 285.217 5.91608 319.26C27.0894 408.521 105.97 487.402 195.231 508.575C229.274 516.463 284.906 516.463 318.949 508.575C378.733 494.459 444.744 446.716 477.126 393.99L490.412 372.401L476.296 381.535C435.61 408.521 385.79 419.73 341.783 411.427C222.216 389.423 154.96 262.383 205.61 154.856C242.974 75.9748 340.122 34.0434 423.57 60.1986C438.516 65.1806 431.458 58.1228 410.7 47.7438C377.072 30.7221 342.613 23.6643 304.834 26.1553C255.844 29.0614 228.028 41.1011 178.624 80.5416C174.888 83.4478 176.133 78.4658 181.53 68.0867C191.909 47.3286 223.046 18.6823 245.88 7.88809L263.317 -1.53854e-05L240.483 0.415148C228.028 0.415148 206.855 3.32129 193.57 6.6426Z"
          fill="#B40A02"
          className={styles.logoArc}
          style={{ "--dash": "2300", "--time": "3s" } as CSSProperties}
        />
        <path
          id="logo-medium-arc"
          d="M327.668 76.8051C282.415 91.3358 238.823 136.173 225.537 181.841C215.989 215.054 218.895 261.553 233.01 291.444C268.299 367.834 358.805 403.954 435.195 372.816C448.48 367.419 447.65 367.419 418.588 368.665C340.953 372.401 280.754 315.524 280.754 238.719C280.754 186.408 307.325 143.231 354.653 119.982C401.151 97.148 453.047 102.96 496.639 135.758L512 147.383L502.866 134.513C488.751 114.17 465.087 95.4874 439.762 83.8628C411.531 70.5776 357.144 67.2563 327.668 76.8051Z"
          fill="#B40A02"
          className={styles.logoArc}
          style={{ "--dash": "1300", "--time": "3s" } as CSSProperties}
        />
        <path
          id="logo-small-arc"
          d="M317.704 197.202C299.021 235.397 305.664 287.293 333.48 318.845C362.126 351.643 420.249 362.853 460.52 343.755L479.202 334.621L454.292 332.13C418.588 327.979 389.527 313.863 367.108 290.199C343.444 264.874 332.234 240.379 328.498 206.336L325.592 180.596L317.704 197.202Z"
          fill="#B40A02"
          className={styles.logoArc}
          style={{ "--dash": "600", "--time": "3.5s" } as CSSProperties}
        />
      </svg>

      <div id={styles.slidingWindow} />

      {/* HEADER TEXT */}
      <strong>
        <TextAnimateOnce
          by="line"
          as="p"
          delay={3.85}
          variants={fadeInVariant}
          once
          className="text-white text-[clamp(2rem,6.75vw,6rem)] absolute top-[calc(50%+clamp(1.5rem,15%,4rem))] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center"
        >
          {"CORNELL CUP ROBOTICS"}
        </TextAnimateOnce>
        <TextAnimateOnce
          by="line"
          as="p"
          delay={3.85}
          variants={fadeInVariant}
          once
          className="text-white text-[clamp(1.125rem,3.2vw,2.25rem)] absolute top-[calc(55%+clamp(1.5rem,15%,4rem))] sm:top-[calc(60%+clamp(1.5rem,15%,4rem))] left-1/2 -translate-x-1/2 w-full text-center font-normal"
        >
          {"SYSTEMS ENGINEERING PROJECT TEAM"}
        </TextAnimateOnce>
      </strong>
    </section>
  );
};

export default LandingPage;
