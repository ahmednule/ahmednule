import { PropsWithChildren } from "react";

export default function PageWrapper ({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto max-w-4xl py-10 px-5 md:px-10 xl:px-0">{children}</div>
  );
};