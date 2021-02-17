export type BoardProps = {
  className?: string // не знаю, что сюда ставить
  isActive?: boolean
  key: string
  id: number
  name: string
  img: string
  type: string
  values: {
    top: number | string
    right: number | string
    bottom: number | string
    left: number | string
  }
  minimize?: string // не знаю, что сюда ставить

}

