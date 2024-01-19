import { createContext, useState, useEffect,ReactNode } from "react"

interface FilterContextProps {
    category: string[];
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
    selectedRating: number;
    setSelectedRating: (rating: number) => void;
    selectedPrice: Price;
    setSelectedPrice: (price: Price) => void;
    selectedSort: string;
    setSelectedSort: (sort: string) => void;
}
interface Price {
    label: string;
    min:number;
    max:number;
}

export const FilterContext = createContext<FilterContextProps>({
    category:[],
    selectedCategory: "",
    setSelectedCategory: () => {},
    selectedRating: 0,
    setSelectedRating: () => {},
    selectedPrice: {label:'', min: 0 , max: 0},
    setSelectedPrice: () => {},
    selectedSort: "",
    setSelectedSort: () => {},
});

interface FilterContextProviderProps {
    children: ReactNode;
}

const FilterContextProvider = ({children}: FilterContextProviderProps) =>{
    const [selectedCategory, setSelectedCategory] = useState<string>('')
    const [category, setCategory] = useState<string[]>([]);
    const [selectedRating, setSelectedRating] = useState<number>(0);
    const [selectedPrice,setSelectedPrice] = useState<Price>({label:'', min: 0 , max: 0})
    const [selectedSort,setSelectedSort] = useState<string>('')
    
    useEffect(() => {
      const fetchCategory = async() =>{
        const response = await fetch("https://fakestoreapi.com/products/categories");
        const data =  await response.json();
        setCategory(data);
      }
      fetchCategory();
    }, [])
    
    return(
        <FilterContext.Provider 
        value={{
            category,
            selectedCategory,
            setSelectedCategory,
            selectedRating, 
            setSelectedRating,
            selectedPrice,
            setSelectedPrice,
            selectedSort,
            setSelectedSort

        }}
        >
            {children}
        </FilterContext.Provider>

    )
}

export default FilterContextProvider