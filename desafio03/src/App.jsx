import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [beer, setBeer] = useState(0)
  const [dessert, setDessert] = useState(0)
  const [wine, setWine] = useState(0)
  const [water, setWater] = useState(0)
  const [dinner, setDinner] = useState(0)
  const [expenses, setExpenses] = useState([])
  const [totalBill, setTotalBill] = useState(0)

  const addExpense = () => {
    const expense = {
      name: name,
      totalValue: calculateTotalValue(beer, dessert, wine, water, dinner)
    }

    setExpenses([...expenses, expense])
    setName('')
    setBeer(0)
    setDessert(0)
    setWine(0)
    setWater(0)
    setDinner(0)
  }

  useEffect(() => {
    const totalValue = expenses.reduce(
      (total, expense) => total + expense.totalValue,
      0
    )
    setTotalBill(totalValue)
  }, [expenses])

  const calculateTotalValue = (beer, dessert, wine, water, dinner) => {
    const beerValue = 8
    const dessertValue = 15
    const wineValue = 15
    const waterValue = 3
    const dinnerValue = 200

    let totalValue =
      beer * beerValue +
      dessert * dessertValue +
      wine * wineValue +
      water * waterValue +
      dinner * dinnerValue

    const serviceCharge = totalValue * 0.1
    const totalBill = totalValue + serviceCharge

    return totalBill
  }

  return (
    <div className="contador">
      <h1>Calculadora para dividir conta</h1>
      <div>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            placeholder="Adicione o nome da pessoa"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <br />
          <h3>Produtos consumidos:</h3>
          <div className="product">
            <input
              type="checkbox"
              checked={beer > 0}
              onChange={() => setBeer(beer > 0 ? 0 : 1)}
            />
            <label>Cerveja (individual)</label>
            <input
              type="number"
              min="0"
              value={beer}
              onChange={e => setBeer(parseInt(e.target.value))}
            />
          </div>
          <div className="product">
            <input
              type="checkbox"
              checked={dessert > 0}
              onChange={() => setDessert(dessert > 0 ? 0 : 1)}
            />
            <label>Sobremesa (individual)</label>
            <input
              type="number"
              min="0"
              value={dessert}
              onChange={e => setDessert(parseInt(e.target.value))}
            />
          </div>
          <div className="product">
            <input
              type="checkbox"
              checked={wine > 0}
              onChange={() => setWine(wine > 0 ? 0 : 1)}
            />
            <label>Vinho (individual)</label>
            <input
              type="number"
              min="0"
              value={wine}
              onChange={e => setWine(parseInt(e.target.value))}
            />
          </div>
          <div className="product">
            <input
              type="checkbox"
              checked={water > 0}
              onChange={() => setWater(water > 0 ? 0 : 1)}
            />
            <label>Água (individual)</label>
            <input
              type="number"
              min="0"
              value={water}
              onChange={e => setWater(parseInt(e.target.value))}
            />
          </div>
          <div className="product">
            <input
              type="checkbox"
              checked={dinner > 0}
              onChange={() => setDinner(dinner > 0 ? 0 : 1)}
            />
            <label>Jantar (individual)</label>
            <input
              type="number"
              min="0"
              max="1"
              value={dinner}
              onChange={() => {}}
              disabled
            />
          </div>

          <br />
          <button onClick={addExpense} disabled={name === ''}>
            Adicionar compra
          </button>
        </div>
        <div>
          <h2>Resultado:</h2>
          <div>
            {expenses.length > 0 && (
              <>
                <h3>Valores individuais:</h3>
                {expenses.map((expense, index) => {
                  return (
                    <div key={index}>
                      <p>
                        {expense.name}: $ {expense.totalValue.toFixed(2)}
                      </p>
                    </div>
                  )
                })}
                <h3>Valor total: $ {totalBill.toFixed(2)}</h3>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
