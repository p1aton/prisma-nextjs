export type Pokemon = {
  type: string
  values: {
    top: number
    right: number
    bottom: number
    left: number
  }
  id: string
  img: string
  name: string
  isActive: boolean
}

export type PokemonCardProps = {
  handleClickCard: (id: string) => void
} & Pokemon
