import {useContext, FC} from 'react'
import Categories from './Categories';
import { FilterContext } from '../context/FilterContext';
import Rating from './Rating';
import {ratingData, priceRange} from '../api/filterData';
import PriceRange from './PriceRange';
import SortList from './SortList';

const Filters : FC = () => {
    const {category} = useContext(FilterContext)
    
  return (
    console.log("category", category),
    <>
      {/* sort filter */}
      <div>
        <div className='text-xl text-black font-bold mb-4'>
            Sort by
        </div>
        <SortList/>
      </div>

      {/* category filter */}
      <div>
        <div className='text-xl text-black font-bold mb-4'>
            Category
        </div>
        <div className='flex gap-2 flex-wrap xs:flex-col mb-8'>
          {
              category.map((category: string) => <Categories key={category} category={category}/> ) 
          }
          </div>
      </div>

      {/* rating filter */}
      <div className='mb-8'>
        <div className='text-xl text-black font-bold mb-4'>
            Rating
        </div>
        <div className='flex'>
        {
          ratingData.map((rating: number)=> <Rating key={rating} rating={rating} />)
        }
        </div>
      </div>

      {/* price filter */}
      <div>
        <div className='text-xl text-black font-bold mb-4'>
            Price Range
        </div>
        <div className='flex gap-2 flex-wrap xs:flex-col mb-8'>
        {
          priceRange.map((price)=> <PriceRange key={price.label} price={price}/>)
        }
        </div>
      </div>
    </>
  )
}

export default Filters