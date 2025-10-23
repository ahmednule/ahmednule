import Image from "next/image";
import SectionWrapper from "../../wrappers/SectionWrapper";
import ManNearComputerImage from "/public/assets/images/man-near-computer.svg";

const Introduction = () => {
  return (
    <SectionWrapper className="flex md:flex-row justify-between gap-5 space-y-0 md:gap-0 flex-col-reverse">
      <div className="md:basis-1/2 self-center">
        <p>
          Hello, I&apos;m <strong>Ahmed</strong> — a{" "}
          <strong className="purple-gradient">Software Engineer</strong>{" "}
          passionate about building scalable web applications and AI-driven systems. 
          I combine creativity and technical precision to craft products that make real-world impact. 
          Currently exploring new opportunities to contribute to forward-thinking teams and projects.
        </p>
      </div>
      <div className="relative md:basis-1/2 h-52 md:h-64">
        <Image
          priority
          fill
          src={ManNearComputerImage}
          alt="Developer sitting on a desk with a computer"
        />
      </div>
    </SectionWrapper>
  );
};

export default Introduction;
