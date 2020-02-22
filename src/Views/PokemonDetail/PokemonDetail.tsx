import React from 'react';
import { Flex, Spinner, Divider, Image, Stack } from '@chakra-ui/core';
import { fetchPokemonByID } from 'Services/API/pokemon';
import { useQuery } from 'react-query';

import PokemonTypeBubble from 'Components/PokemonTypeBubble';

const PokemonDetail: React.FC = ({ match }: any) => {
    const pokemonID = match.params.id;
    const { data, isLoading, error } = useQuery(['pokemon', { pokemonID }], fetchPokemonByID);

    const pokemon = data?.data ?? null;

    return isLoading ? (
        <Flex width="100%" height="100vh" bg="teal.500" justify="center" align="center">
            <Spinner size="xl" />
        </Flex>
    ) : pokemon ? (
        <Flex maxHeight="100vh" align="center" bg="snow">
            <Flex direction="column" ml="48">
                <Flex justify="center" fontSize={40}>{`#${pokemon.id} ${pokemon.name}`}</Flex>
                <Divider />
                <Flex>
                    <Image size="sm" src={`${pokemon.image}`} />
                </Flex>
            </Flex>
            <Stack spacing={10} ml={20}>
                <Flex fontSize={32} width={800} mr="auto" rounded="3px">
                    Types: <PokemonTypeBubble types={pokemon.types} fontSize={32} mx={5} px={6} />
                </Flex>
                <Flex fontSize={32} width={800} mr="auto" rounded="3px">
                    <Flex direction="column" width="100%">
                        Stats
                        <Divider />
                        <Stack fontSize={24} width="100%" color="gray.500" ml={6}>
                            <Flex>hp: {pokemon.stats.hp}</Flex>
                            <Flex>speed: {pokemon.stats.speed}</Flex>
                            <Flex>attack: {pokemon.stats.attack}</Flex>
                            <Flex>defense: {pokemon.stats.defense}</Flex>
                            <Flex>special-attack: {pokemon.stats['special-attack']}</Flex>
                            <Flex>special-defense: {pokemon.stats['special-defense']}</Flex>
                        </Stack>
                    </Flex>
                </Flex>
                <Flex fontSize={32} width={800} mr="auto">
                    <Flex direction="column" width="100%">
                        Pokemon Info.
                        <Divider />
                        <Stack fontSize={24} width="100%" color="gray.500" ml={6}>
                            <Flex>height: {pokemon.height}m</Flex>
                            <Flex>weight: {pokemon.weight}kg.</Flex>
                            <Flex>genus: {pokemon.genus}</Flex>
                            <Flex>description: {pokemon.description}</Flex>
                            <Flex>abilities: {pokemon.abilities}</Flex>
                            <Flex>egg groups: {pokemon['egg_groups']}</Flex>
                        </Stack>
                    </Flex>
                </Flex>
            </Stack>
        </Flex>
    ) : error ? (
        <Flex>Houston, we have a problem...</Flex>
    ) : null;
};

export default PokemonDetail;
