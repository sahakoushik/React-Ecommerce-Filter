import { useContext,FC, ChangeEvent } from 'react'
import { sortingData } from '../api/filterData'
import { FilterContext } from '../context/FilterContext'

const SortList:FC = () => {

    const {setSelectedSort} = useContext(FilterContext)

    const handelSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedSort(e.target.value);
      };
    return (
        <select className='py-2 px-4 mb-4 w-100 bg-slate-100 rounded border-2 hover:shadow-lg hover:scale-105 hover:transition-all ' onChange={handelSelect}>
            {
                sortingData.map((item)=>(
                    <option key={item.value} value={item.value}>{item.label}</option>
                ))
            }
        </select>
    )
}

export default SortList