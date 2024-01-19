import {useContext,FC,useEffect} from 'react'
import Product from './Product'
import Search from './Search'
import { ProductContext, ProductInterface } from '../context/ProductContext'
import { FilterContext } from '../context/FilterContext'
import { Loading } from './Loading'

interface ProductListProps {}

const ProductList:FC<ProductListProps> = () => {
    const {productList,search,loading,error,setProductList} = useContext(ProductContext)
    const {selectedCategory,setSelectedCategory,selectedRating, setSelectedRating,selectedPrice,setSelectedPrice,selectedSort} = useContext(FilterContext)
    
    useEffect(() => {
        sorting();
    }, [selectedSort])

    // sort by
    const sorting = () => {
        const productListCopy = [...productList]
        if(!selectedSort){
             productListCopy
        }
        productListCopy.sort((a,b)=> {
            if(selectedSort === "low"){
                return a.price - b.price
            }
            if(selectedSort === "high"){
                return b.price - a.price
            }
            if(selectedSort === "ascending"){
                return a.title.localeCompare(b.title)
            }
            if(selectedSort === "descending"){
                return b.title.localeCompare(a.title)
            }

        })
        setProductList(productListCopy)    
    };

    // category filter
    const filterByCategory = (product: ProductInterface) => {
        if( !selectedCategory ) {
            return product
        }else{
            return product.category === selectedCategory
        }
    };
    
    // rating filter
    const filterByRating = (product: ProductInterface) => {
        if( !selectedRating) {
            return product
        }else{
            return product.rating.rate.toString().charAt(0) === selectedRating.toString()
        }
    };

    // price range filter
    const filterByPrice = (product: ProductInterface) => {
        if( !selectedPrice.label) {
            return product
        }else{
            return product.price <= selectedPrice.max && product.price >= selectedPrice.min
        }
    };
    
    if(loading) return <Loading/>

    if(error) return <div className='font-bold text-3xl text-red-500'> {error.message ? error.message : "There is an error!!"} </div>
    
    return (
        <div className='flex-1'>
            <Search/>
            {/* show filters */}
            <div className='flex justify-center align-center gap-1 relative'>
                {
                    selectedCategory &&    
                    <div className='py-2 px-4 bg-white m-4 rounded-lg text-sm border-2 border-slate-200 relative'>
                        {selectedCategory}
                        <span onClick={()=>setSelectedCategory('')} className='absolute cursor-pointer text-red-600 font-bold text-sm rounded-full -top-2 -right-3 bg-red-200 px-3'>x</span>
                    </div>
                }
                {
                    selectedRating !== 0 &&
                    <div className='py-2 px-4 cursor-pointer bg-white m-4 rounded-lg text-sm border-2 border-slate-200 relative'>
                        {selectedRating} star
                        <span onClick={()=>setSelectedRating(0)} className='absolute text-red-600 font-bold text-sm rounded-full -top-2 -right-3 bg-red-200 px-3'>x</span>
                    </div>
                }
                {
                    selectedPrice.label !== "" &&
                    <div className='py-2 px-4 cursor-pointer bg-white m-4 rounded-lg text-sm border-2 border-slate-200 relative'>
                        {selectedPrice.label}
                        <span onClick={()=>setSelectedPrice({label: "", max: 0 , min: 0})} className='absolute text-red-600 font-bold text-sm rounded-full -top-2 -right-3 bg-red-200 px-3'>x</span>
                    </div>
                }
                
            </div>
            <div className='p-4 m-4 grid xs:grid-cols-1 tab:grid-cols-2 desktop:grid-cols-2 monitor:grid-cols-3 gap-4'>

                {
                    productList
                        .filter((product)=> search.toLowerCase() === "" ? product : product.title.toLowerCase().includes(search))
                        .filter(filterByCategory)
                        .filter(filterByRating)
                        .filter(filterByPrice)
                        .map((product, index) => {
                            console.log("inside map " , product, index);
                            if(!index){
                                <div> NO Items found</div>
                            }else{
                                return <Product key={product.id} product={product}/>
                            }
                        } ) 
                }
            </div>
        </div>
    )
}

export default ProductList