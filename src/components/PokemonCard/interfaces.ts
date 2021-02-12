
export type PokemonCardProps = {
  type: string;
  values: {
    top: number; 
    right: number;
    bottom: number;
    left: number;
  }
  id: string;
  img: string;
  name: string;
  handleClickCard: (id: string) => void;
  isActive: boolean;
}