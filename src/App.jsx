import {useState} from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmt, setConvertedAmt] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo || {})

  const swap = () =>{
    setFrom(to)
    setTo(from)
    setAmount(convertedAmt)
    setConvertedAmt(amount)
  }

  const convert = () =>{
    setConvertedAmt(amount * currencyInfo[to])
  }

  return (
        <div
            className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/4960438/pexels-photo-4960438.jpeg?_gl=1*197w6ym*_ga*MTgwODMzMTMyOC4xNzU5MDAwMDMw*_ga_8JE65Q40S6*czE3NTkwMDY4NTckbzIkZzEkdDE3NTkwMDY4NTgkajU5JGwwJGgw')`,
            }}
        >
            <div className="w-full">
                {/* <h1 className="text-3xl font-bold text-blue-600">Hello Tailwind</h1> */}

                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute text-white left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-800 px-2 py-0.5"
                                onClick={swap}                                
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmt}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-800 px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
