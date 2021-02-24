
/**
 * Ключ записи - id этой записи
 */

export type PokemonState = Record<Pokemon["id"], Pokemon>

export type Pokemon = {
  type: string
  values: {
    top: number | string
    right: number | string
    bottom: number | string
    left: number | string
  }
  id: number
  img: string
  name: string
  abilities: string[]

  stats: {
    hp: number
    attack: number
    defense: number
    'special-attack': number
    'special-defense': number
    speed: number
  }

  base_experience: number
  height: number
  
}

export type PokemonCardProps = {

  pokemon: Pokemon
  
  onClickCard?: (pokemon: Pokemon) => void

  isSelected?: boolean;

  minimize?: boolean;

  isActive?: boolean
} 
// & Omit<Pokemon, 'abilities' | 'stats' | 'base_experience' | 'height'>
