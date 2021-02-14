import { NavBarStyledProps } from './styles';

export type NavBarProps = {
  isOpen: boolean
  bgActive: boolean
  onClickHamburg: () => void
} & Omit<Partial<NavBarStyledProps>, "bgActive">
