import {useContext,FC} from 'react'
import { ProductContext } from '../context/ProductContext'

const Search:FC = () => {

    const {search,setSearch} = useContext(ProductContext)
    return (
        <div className='flex-1 justify-center align-center mt-8'>
            <input
                className='mx-auto flex bg-slate-100 p-3 w-1/2 shadow-lg' 
                value={search} 
                onChange={(e)=> setSearch(e.target.value)} 
                type="text" 
                placeholder="Search by Product Name"
            />
        </div>
    )
}

export default Search