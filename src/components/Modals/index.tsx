import { useEffect, useState } from "react";
import { FaArrowRight, FaCommentDollar } from "react-icons/fa";
import { SponsorEvent } from "../../types";
import { Button } from "../Button";
import { Input } from "../Input";
import { ModalOverlay, OpineModalOptions } from "./styles";
import { closeModal } from "./utils";

type Props = {
  id: string;
  event: SponsorEvent | null;
};

export function OpineModal({ id, event }: Props) {
  const totalSections = event?.sections.length;
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [hasSocialMedias, setHasSocialMedias] = useState(false);

  useEffect(() => {
    if (event) setHasSocialMedias(event.social_medias.length > 0);
  }, [event]);

  return (
    <ModalOverlay id={id}>
      <Button
        className="close-button"
        borderless
        withoutSvgStyle
        padding="0"
        onClick={() => closeModal(id)}
      >
        <FaArrowRight />
      </Button>
      {event && (
        <>
          <h5>{event.name}</h5>
          {!hasSocialMedias && <span>Participação livre</span>}
          {hasSocialMedias && <span>Necessário seguir em:</span>}
          <OpineModalOptions>
            <Input
              id="opine-answer-1"
              label={event.sections[0].title}
              mask={event.sections[0].type}
              value={answer1}
              valueChanger={setAnswer1}
            />
            {totalSections === 2 && (
              <Input
                id="opine-answer-2"
                label={event.sections[1].title}
                mask={event.sections[1].type}
                value={answer2}
                valueChanger={setAnswer2}
              />
            )}
            {totalSections === 3 && (
              <Input
                id="opine-answer-3"
                label={event.sections[2].title}
                mask={event.sections[2].type}
                value={answer3}
                valueChanger={setAnswer3}
              />
            )}
          </OpineModalOptions>
          <p>
            <span>Prêmio total:</span> R${event.value.toFixed(2)}
          </p>
        </>
      )}
      <Button
        margin="0 auto"
        padding="8px 16px"
        onClick={() => console.log("")}
      >
        Opinar <FaCommentDollar />
      </Button>
    </ModalOverlay>
  );
}
