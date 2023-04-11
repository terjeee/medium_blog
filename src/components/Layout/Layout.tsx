import type { PropsChildren } from "@/types/types";

import Header from "@/components/Layout/Header";

export default function Layout({ children }: PropsChildren) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
