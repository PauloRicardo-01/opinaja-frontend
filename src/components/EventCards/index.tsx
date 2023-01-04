/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect, useState } from "react";
import {
  FaCommentDollar,
  FaFutbol,
  FaVolleyballBall,
  FaTv,
  FaTimes,
} from "react-icons/fa";
import { SponsorEvent } from "../../types";
import { Button } from "../Button";
import { CardContainer } from "./styles";

type Props = {
  event: SponsorEvent;
  onClick: () => void;
};

export function EventCard({ event, onClick }: Props) {
  let socialMediaCount = 0;
  const [realityText, setRealityText] = useState("");
  const [categoryIcon, setCategoryIcon] = useState<ReactNode>(null);

  event.social_medias.forEach(() => {
    socialMediaCount++;
  });

  function getCategoryIcon() {
    switch (event.subcategory.name) {
      case "Futebol":
        setCategoryIcon(<FaFutbol className="category-icon" />);
        break;
      case "Volei":
        setCategoryIcon(<FaVolleyballBall className="category-icon" />);
        break;
      case "Tenis":
        setCategoryIcon(<FaTimes className="category-icon" />);
        break;
      case "BBB":
        setRealityText("BBB");
        setCategoryIcon(<FaTv className="category-icon reality" />);
        break;
      case "A Fazenda":
        setRealityText("A\n Fazenda");
        setCategoryIcon(<FaTv className="category-icon reality" />);
        break;
      default:
        setCategoryIcon(<FaTimes className="category-icon" />);
        break;
    }
  }

  useEffect(() => {
    getCategoryIcon();
  }, []);

  return (
    <CardContainer>
      {categoryIcon}
      {realityText !== "" && (
        <span className={`reality-text ${realityText}`}>{realityText}</span>
      )}
      <p>{event.name}</p>
      <span>Criado por {event.user.name}</span>
      <span>Criado em {event.create_date}</span>
      <div>
        {socialMediaCount === 0 && <p>Participação livre</p>}
        {socialMediaCount > 0 && (
          <p>Necessário seguir criador em {socialMediaCount} redes sociais</p>
        )}
        <p>
          Prêmio total: <span>R${event.value}</span>
        </p>
      </div>
      <Button onClick={() => onClick()}>
        Opinar <FaCommentDollar />
      </Button>
    </CardContainer>
  );
}
