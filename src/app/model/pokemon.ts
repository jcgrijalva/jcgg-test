export interface Pokemon {
  id: number
  name: string
  sprites: Sprites
}

export interface Sprites {
  other: Other
}

export interface Other {
  home: Home
}

export interface Home {
  front_default: string
}
