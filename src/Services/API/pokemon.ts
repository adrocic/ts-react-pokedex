import API from './api';
import { AxiosResponse } from 'axios';

interface FetchPokemonProps {
    page: string;
    name: string;
}

interface PokemonStats {
    hp: number;
    speed: number;
    attack: number;
    defense: number;
    'special-attack': number;
    'special-defense': number;
}

export interface PokemonObject {
    id: number;
    name: string;
    image: string;
    types: string[];
}

export interface DetailedPokemonObject extends PokemonObject {
    height: number;
    weight: number;
    abilities: string[];
    egg_groups: string[];
    stats: PokemonStats;
    genus: string;
    description: string;
}

interface FetchPokemonByIDProps {
    pokemonID: string;
}

export const fetchPokemon = ({ page, name }: FetchPokemonProps): Promise<AxiosResponse<PokemonObject[]>> => {
    return API.get('/pokemon', { params: { page: page, name: name } });
};

export const fetchPokemonByID = ({
    pokemonID,
}: FetchPokemonByIDProps): Promise<AxiosResponse<DetailedPokemonObject>> => {
    return API.get(`/pokemon/${pokemonID}`);
};
