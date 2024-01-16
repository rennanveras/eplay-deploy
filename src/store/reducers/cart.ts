import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Game from '../../types/Game'
import { stat } from 'fs'

type CartState = {
  items: Game[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Game>) => {
      const repeatedGame = state.items.find(
        (item) => item.id === action.payload.id
      )

      if (!repeatedGame) {
        state.items.push(action.payload)
      } else {
        alert('O jogo já foi adicionado ao carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
