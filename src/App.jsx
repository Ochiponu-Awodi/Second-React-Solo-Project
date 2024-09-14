import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'
{data}

const cards = data.map(item => {
  return (
    <Card 
        key={item.id}
        {...item}
    />
  )
})

function App() {

  return (
    <>
        <Navbar />
        <section className='cards--list'>
          {cards}
        </section>
    </>
  )
}

export default App
