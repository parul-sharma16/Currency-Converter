import React, {useId} from 'react'


function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],    
    selectCurrency="usd",
    amountDisable=false,
    currencyDisable=false,
    className = "",
}) {
    const AmountInputId = useId() //not necessary but good practice for optimisation 

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}> 
        {/* in case user wants to add own css  */}
            <div className="w-1/2">
                <label htmlFor={AmountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={AmountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} 
                    //&& is to make sure that it has a value, default is string so convert to number
                    
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={ (e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                    
                >
                    {/* while using loops in jsx, key must be used to increase performance */}
                    {currencyOptions.map((c) => 
                    (
                        <option key={c} value={c}>
                            {c}
                        </option>
                    ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
