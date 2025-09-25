import SideNavContent from "./SideNavContent";

export default function DesktopSideNav () {
  return (
    <aside className="basis-3/12 hidden lg:block 2xl:basis-2/12 px-10 py-4 xl:p-10 shadow shadow-gray-800 rounded-md z-10">
      <SideNavContent />
    </aside>
  );
}
