import { useContext } from "react"
import { FilterContext } from "../context/FilterContext"
interface CategoriesProps {
    category: string;
  }
const Categories:React.FC<CategoriesProps> = ({category}) => {
    
    const {selectedCategory,setSelectedCategory} = useContext(FilterContext)
    
    return (
        console.log("sc", selectedCategory, category),
        <div className="flex items-center mb-4 ">
            <button className={`p-2 hover:shadow-lg hover:scale-105 hover:transition-all  ${category === selectedCategory ? `bg-blue-400 text-white` : `bg-slate-50 text-black` }`} onClick={() => setSelectedCategory(category)}>
                {category}
            </button>
        </div>
    )
}

export default Categories