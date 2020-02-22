import React from 'react';
import { Flex } from '@chakra-ui/core';

interface Props {
    types: string[];
    fontSize: number;
    mx?: number;
    px?: number;
}

const PokemonTypeBubble = ({ types, fontSize, mx, px }: Props): JSX.Element => {
    return (
        <Flex>
            {types.map((type: string) => (
                <Flex
                    border="1px solid"
                    color={`${type}.400`}
                    bg={`${type}.50` || 'gray.900'}
                    rounded="3px"
                    fontSize={fontSize}
                    mx={mx}
                    px={px}
                >
                    {type}
                </Flex>
            ))}
        </Flex>
    );
};

export default PokemonTypeBubble;
