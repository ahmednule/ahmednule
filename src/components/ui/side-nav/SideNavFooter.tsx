import { Button } from "@heroui/button";

const SideNavFooter = () => {
  return (
    <footer className="flex justify-center">
      <a
        href="/assets/files/ahmednule.pdf"
        target="_blank"     
        rel="noopener noreferrer" 
      >
        <Button
          variant="shadow"
          className="text-white bg-gradient-to-br from-indigo-500 to-pink-600 border-small border-white/50 shadow-pink-500/30"
        >
          Download CV
        </Button>
      </a>
    </footer>
  );
};

export default SideNavFooter;