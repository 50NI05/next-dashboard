'use client'

import { useAppSelector } from '@/store'
import { PokemonGrid } from './PokemonGrid'
// import { useEffect, useState } from 'react'
import { IoHeartOutline } from 'react-icons/io5'
import { SimplePokemon } from '../interfaces/simple-pokemon'

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector(state => state.pokemons.favorites)
  const favoriteList: SimplePokemon[] = Object.values(favoritePokemons)

  // const [pokemons, setPokemons] = useState(favoriteList)

  // useEffect(() => {
  //   setPokemons( favoriteList )
  // }, [favoriteList])
  

  return (
    <>
      {
        !favoriteList.length
          ? (<NoFavorites/>)
          : (<PokemonGrid pokemons={favoriteList} />)
      }
    </>
  )
}


export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay favoritos</span>
    </div>
  )
}