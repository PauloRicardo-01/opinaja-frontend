/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { useQuery } from "react-query";
import { Loading } from "../../assets";
import { EventCard } from "../../components/EventCards";
import { OpineModal } from "../../components/Modals";
import { openModal } from "../../components/Modals/utils";
import { api } from "../../pages/api";
import { SponsorEvent } from "../../types";
import { HomeEventsContainer, HomePageContainer } from "./styles";

export function HomePage() {
  const [selectedEvent, setSelectedEvent] = useState<SponsorEvent | null>(null);
  const { data: sponsorEvents, isFetching } = useQuery<SponsorEvent[]>(
    "sponsor-events",
    async () => {
      const result = await api.get("listarEventosPatrocinado?user_id=3");
      return result.data;
    }
  );

  function handleOpine(event: SponsorEvent) {
    setSelectedEvent(event);
    openModal("home-opine-modal");
  }

  return (
    <HomePageContainer>
      {isFetching && <Loading />}
      {!isFetching && (
        <HomeEventsContainer>
          {sponsorEvents?.map((sponsorEvent, i) => {
            return (
              <EventCard
                key={i}
                event={sponsorEvent}
                onClick={() => handleOpine(sponsorEvent)}
              />
            );
          })}
        </HomeEventsContainer>
      )}
      <OpineModal id="home-opine-modal" event={selectedEvent} />
    </HomePageContainer>
  );
}
