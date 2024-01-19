import { useContext, FC } from "react"
import { FilterContext } from "../context/FilterContext"

interface PriceRangeProps {
    price: {
      label: string;
      min:number;
      max:number;
    };
}

const PriceRange: FC<PriceRangeProps> = ({price}) => {
    
    const {selectedPrice,setSelectedPrice} = useContext(FilterContext)
    
    return (
        <div className="flex items-center mb-4">
            <button className={`p-2 hover:shadow-lg hover:scale-105 hover:transition-all  ${price === selectedPrice ? `bg-blue-400 text-white` : `bg-slate-50 text-black` }`} onClick={() => setSelectedPrice(price)}>
                {price.label}
            </button>
        </div>
    )
}

export default PriceRange