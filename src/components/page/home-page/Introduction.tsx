import Image from "next/image";
import SectionWrapper from "../../wrappers/SectionWrapper";
import ManNearComputerImage from "/public/assets/images/man-near-computer.svg";

const Introduction = () => {
  return (
    <SectionWrapper className="flex md:flex-row justify-between gap-5 space-y-0 md:gap-0 flex-col-reverse">
      <div className="md:basis-1/2 self-center">
        <p>
          Hello I&apos;m Ahmed, a{" "}
          <strong className="purple-gradient">modern Software Engineer</strong>
          {" "}specializing in creating innovative web applications and AI-powered solutions. 
          Available for exciting projects and collaborations that transform digital experiences.
        </p>
      </div>
      <div className="relative md:basis-1/2 h-52 md:h-64">
        <Image
          priority
          fill
          src={ManNearComputerImage}
          alt="Developer sitting on a desk that has a computer"
        />
      </div>
    </SectionWrapper>
  );
};

export default Introduction;
