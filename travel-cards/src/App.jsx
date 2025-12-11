import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Data from './data/cardsData.json'

function App() {
  const [cardData, setCardData] = useState(Data.data);

  const reduceCard = (id) => {
    const newData = cardData.filter((element) => element.id !== id
    )
    setCardData(newData);
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <h1 className=' text-5xl text-black-300 text-center border-dotted m-8 border-4 border-blue-400 w-[400px] rounded-md'>Tour and Travels</h1>
        <div className='flex flex-wrap justify-center items-center gap-x-[30px] gap-y-[35px] w-[80%]'>
          {
            cardData.map((element, index) => {
              return <Card key={index} element = {element} reduceCard = {reduceCard}/>
            })
          }
        </div>
      </div>
    </>
  )
}

export default App
