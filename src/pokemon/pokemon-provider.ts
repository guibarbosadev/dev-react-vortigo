import axios, { AxiosInstance } from 'axios';
import type { IPokemonType } from './types';

export async function fetchPokemonTypes() {
    let types: IPokemonType[] = [];

    try {
        const response = await axios.get<{ results: IPokemonType[] }>('https://run.mocky.io/v3/0a6cb8c7-1305-487f-bf6b-3f41524b93bf');
        types = response.data.results;
    } catch {}

    return types;
}
