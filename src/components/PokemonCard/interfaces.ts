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
  isActive?: boolean
}

export type PokemonCardProps = {
  handleClickCard?: (id: number) => void
} & Omit<Pokemon, 'abilities' | 'stats' | 'base_experience' | 'height'>
