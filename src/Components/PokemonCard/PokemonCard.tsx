import React from "react";
import { Flex, Divider, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import PokemonTypeBubble from "Components/PokemonTypeBubble";
import { cardHovering, cardClick } from "./CardAnimations";

type PokemonCardProps = {
  id: number;
  name: string;
  image: string;
  types: string[];
};

const PokemonCard: React.FC<PokemonCardProps> = ({
  id,
  name,
  image,
  types,
}) => {
  return (
    <Link style={{ textDecoration: "none" }} to={`/pokedex/${id}`}>
      <Flex
        height={48}
        width={40}
        bg="gray.50"
        direction="column"
        rounded={3}
        shadow="md"
      >
        <Flex pl="2" pt="1">
          {name}
        </Flex>
        <Divider borderColor="gray.300" />
        <Flex justify="center">
          <Image src={`${image}`} alt={`${name}`} />
        </Flex>
        <Flex justify="flex-end" mt="4">
          <PokemonTypeBubble types={types} fontSize={12} />
        </Flex>
      </Flex>
    </Link>
  );
};

export default PokemonCard;
