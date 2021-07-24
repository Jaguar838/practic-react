import hero from "../../images/hero.jpg";

const Hero = () => {
  return (
    <section>
      <img src={hero} alt="hero" />
      <div>
        <h1>Design that inspires a better way to work.</h1>
        <p>
          We've developed a series of purpose-built rooms that offer companies
          looking for change an affordable, sustainable, and flexible
          alternative to fixed construction and traditional office design.
        </p>
      </div>
    </section>
  );
};

export default Hero;
