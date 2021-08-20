import React from "react";
import { Flex, Spinner } from "@chakra-ui/react";
import { fetchPokemon } from "Services/API/pokemon";
import { useQuery } from "react-query";

import PokemonCard from "Components/PokemonCard";

interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
}

interface PokemonListProps {
  page: string;
  name: string;
}

const PokemonList: React.FC<PokemonListProps> = ({ page, name }) => {
  const { data, isLoading, error } = useQuery(
    ["pokemon", page, name],
    () => fetchPokemon(page, name),
    {
      enabled: !!page,
    }
  );

  return isLoading ? (
    <Flex
      width="100%"
      height="100vh"
      bg="teal.500"
      justify="center"
      align="center"
    >
      <Spinner size="xl" />
    </Flex>
  ) : data ? (
    <Flex direction="row" wrap="wrap" justify="center">
      {(data as any).data.map((pokemon: Pokemon, index: number) => (
        <Flex m={3} key={pokemon.id}>
          <PokemonCard
            id={pokemon.id}
            name={pokemon.name}
            types={pokemon.types}
            image={pokemon.image}
          />
        </Flex>
      ))}
    </Flex>
  ) : error ? (
    <Flex>Houston... we have a problem.</Flex>
  ) : null;
};

export default PokemonList;
