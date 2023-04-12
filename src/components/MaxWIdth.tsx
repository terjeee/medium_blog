import type { PropsChildren } from "@/types/types";

export default function MaxWIdth({ children }: PropsChildren) {
  return <div className="max-w-7xl mx-auto">{children}</div>;
}
