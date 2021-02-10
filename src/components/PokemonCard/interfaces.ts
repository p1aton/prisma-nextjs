export type Pokemon = {
  type: 'flying' | 'poison' | 'electric' | 'grass' | 'fire'
  values: {
    top: number | 'A'
    right: number | 'A'
    bottom: number | 'A'
    left: number | 'A'
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
