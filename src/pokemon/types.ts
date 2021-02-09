export type TPokemonType = 'water' | 'eletric' | 'fire' | 'normal';
export interface IPokemonType {
    name: string;
    thumbnailImage: string;
}

export interface IPokemon {
    abilities: string[];
    detailPageURL: string;
    weight: number;
    weakness: string[];
    number: string;
    height: number;
    collectibles_slug: string;
    featured: string;
    slug: string;
    name: string;
    thumbnailAltText: string;
    thumbnailImage: string;
    id: number;
    type: string[];
}
