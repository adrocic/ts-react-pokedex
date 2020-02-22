import React from 'react';
import { Flex, Spinner } from '@chakra-ui/core';
import { fetchPokemon } from 'Services/API/pokemon';
import { useQuery } from 'react-query';

import PokemonCard from 'Components/PokemonCard';

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
    const { data, isLoading, error } = useQuery(['pokemon', { page, name }], fetchPokemon);

    return isLoading ? (
        <Flex width="100%" height="100vh" bg="teal.500" justify="center" align="center">
            <Spinner size="xl" />
        </Flex>
    ) : data ? (
        <Flex direction="row" wrap="wrap" justify="center">
            {data.data.map((pokemon: Pokemon) => (
                // eslint-disable-next-line react/jsx-key
                <Flex m={3}>
                    <PokemonCard
                        key={pokemon.id}
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
