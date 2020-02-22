import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Flex } from '@chakra-ui/core';

import CircleNavButton from 'Components/CircleNavButton';
import SearchBar from 'Components/SearchBar';
import PokemonList from 'Components/PokemonList';

const Pokedex: React.FC = () => {
    const [currentSearch, setCurrentSearch] = useState('');

    const useQuery = (): URLSearchParams => {
        return new URLSearchParams(useLocation().search);
    };

    const page = useQuery();
    const name = useQuery();

    const currentPage = page.get('page') ?? '1';
    const searchTerm = name.get('name') ?? '';

    return (
        <Flex height="100%" width="100vw" justify="center">
            <Flex px={12} py={12} align="center" direction="column" width="70%" bg="teal.400">
                <Flex width="100%" align="center" justify="center" mb={12}>
                    <CircleNavButton navDirection="back" currentSearch={currentSearch} />
                    <SearchBar currentSearch={currentSearch} setCurrentSearch={setCurrentSearch} />
                    <CircleNavButton navDirection="forward" currentSearch={currentSearch} />
                </Flex>
                <PokemonList page={currentPage} name={searchTerm} />
            </Flex>
        </Flex>
    );
};

export default Pokedex;
