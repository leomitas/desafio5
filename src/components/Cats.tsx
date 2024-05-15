'use client'

import useFetch from 'react-fetch-hook'

const URL = 'https://api.thecatapi.com/v1/images/search?limit=10'

interface iCat {
  id: string
  heigth: number
  width: number
  url: string
}

interface fetchResult {
  isLoading: boolean
  error?: Error | undefined | null
  data?: iCat[] | undefined | null
}

export default function Cats() {
  const { isLoading, error, data }: fetchResult = useFetch(URL)

  if (isLoading) return 'Loading...'
  if (error) return 'Error...'

  return (
    <main>
      <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-16 mx-8 border-2 p-8 rounded-lg'>
        {data!.map((cat) => {
          return (
            <li key={cat.id} className='justify-center flex'>
              <img src={cat.url} className='w-64 h-48' />
            </li>
          )
        })}
      </ul>
    </main>
  )
}
