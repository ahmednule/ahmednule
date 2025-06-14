import PageHeader from "../../wrappers/PageHeader";

const MainHeading = () => {
  return (
    <PageHeader borderClassName="max-w-2xl">
      <span className="flex flex-col sm:flex-row justify-center gap-0 sm:gap-3">
        <span>Ahmed Nule</span>
        <span className="text-[#ffc0cb] rotate-90 sm:rotate-0">|</span>
        <span className="purple-gradient">Software Engineer</span>
      </span>
    </PageHeader>
  );
};

export default MainHeading;
