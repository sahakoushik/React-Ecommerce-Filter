import {FC,useState} from 'react'
import Modal from './Modal'

interface ProductProps {
    product: {
      image: string;
      title: string;
      category: string;
      description: string;
      price: number;
      rating: {
        rate: number;
        count: number;
      };
    };
}

const Product:FC<ProductProps>= ({product}) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
  
    return (
        <>
            <div className='p-8 shadow-md bg-slate-100 m-4 cursor-pointer scale-100 hover:bg-slate-200 hover:shadow-lg hover:scale-105 hover:transition-all '>
                <img className='size-48 object-contain cursor-pointer' onClick={() => setIsOpen(true)} src={product?.image} />
                <div>
                    <div className='font-bold text-lg text-black pt-4'>{product?.title}</div>
                    <div className='font-semibold text-md text-slate-600 pb-4'>{product?.category}</div> 
                    <div className='text-xs text-slate-600 pb-4'>{product?.description}</div>
                    <div className='grid grid-cols-3'>
                        <div className='text-xs text-slate-600 pb-4'>
                            Price <br/>
                            <span className='text-lg font-bold text-black'>{product?.price}</span>
                        </div>
                        <div className='text-xs text-slate-600 pb-4'>
                            Rating <br/>
                            <span className='text-lg font-bold text-black'>{product?.rating.rate}</span>
                        </div>

                        <div className='text-xs text-slate-600 pb-4'>
                            Rated by <br/>
                            <span className='text-lg font-bold text-black'>{product?.rating.count}</span>
                        </div>
                    </div> 
                    
                </div>
            </div>
            {
                isOpen &&
                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <img className='w-full h-full' onClick={() => setIsOpen(true)} src={product?.image} />
                </Modal>
            }
        </>
    )
}

export default Product