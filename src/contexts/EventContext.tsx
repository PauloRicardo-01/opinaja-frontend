import { createContext, ReactNode } from "react";
import { useQuery } from "react-query";
import { api } from "../pages/api";
import { Category, SponsorEvent } from "../types";

type EventContextType = {
  isFetching: boolean;
  categories: Category[] | undefined;
  sponsorEvents: SponsorEvent[] | undefined;
};

export const EventContext = createContext({} as EventContextType);

export function EventProvider({ children }: { children: ReactNode }) {
  const { data: categories, isFetching } = useQuery<Category[]>(
    "categories",
    async () => {
      const result = await api.get("listarCategorias");
      return result.data;
    }
  );

  const { data: sponsorEvents } = useQuery<SponsorEvent[]>(
    "sponsor-events",
    async () => {
      const result = await api.get("listarEventosPatrocinado");
      return result.data;
    }
  );

  return (
    <EventContext.Provider
      value={{
        isFetching,
        categories,
        sponsorEvents,
      }}
    >
      {children}
    </EventContext.Provider>
  );
}
