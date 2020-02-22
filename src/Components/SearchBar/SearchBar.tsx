import React from 'react';
import { useHistory } from 'react-router-dom';
import { Input } from '@chakra-ui/core';
import css from '@styled-system/css';

type SearchBarProps = {
    currentSearch: string;
    setCurrentSearch: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar: React.FC<SearchBarProps> = ({ currentSearch, setCurrentSearch }): JSX.Element => {
    const history = useHistory();

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        setCurrentSearch(e.target.value);
        history.push(`/pokedex?page=1&name=${e.target.value}`);
    };

    return (
        <Input
            css={css({
                '::placeholder': {
                    color: 'teal.600',
                    textAlign: 'center',
                },
            })}
            placeholder="Pokédex"
            bg="teal.500"
            border="none"
            focusBorderColor="none"
            color="white"
            height={24}
            maxWidth="450px"
            fontSize={48}
            fontWeight="bold"
            onChange={changeHandler}
            value={currentSearch}
        />
    );
};
export default SearchBar;
