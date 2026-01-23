import { createContext, useContext } from "react";
import type { ReactNode } from "react";

export type HeadCollector = {
  add: (tag: string) => void;
};

const HeadContext = createContext<HeadCollector | null>(null);

export function HeadProvider({
  children,
  collector
}: {
  children: ReactNode;
  collector?: HeadCollector | null;
}) {
  return (
    <HeadContext.Provider value={collector ?? null}>
      {children}
    </HeadContext.Provider>
  );
}

export function useHeadCollector() {
  return useContext(HeadContext);
}
