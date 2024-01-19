import { createContext, useState, useEffect, ReactNode} from "react"

export interface ProductInterface {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
  }
  
interface ProductContextProps {
    loading: boolean;
    error: string;
    search: string;
    setSearch: (search: string) => void;
    productList: ProductInterface[];
    setProductList: (productList: ProductInterface[]) => void;
  }

interface ProductContextProviderProps {
    children: ReactNode;
  }

export const ProductContext = createContext<ProductContextProps>({
    loading: false,
    error: "",
    search: "",
    setSearch: () => {},
    productList: [],
    setProductList: () => {},
  });

const ProductContextProvider: React.FC<ProductContextProviderProps> = ({children}) =>{
    const [productList, setProductList] = useState<ProductInterface[]>([]);
    const [search, setSearch] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>('');

    useEffect(() => {
        const fetchProductList = async () => {
            try {
                setLoading(true)
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProductList(data);
                setLoading(false)
            } catch(error) {
                
                setLoading(false);
                // console.log(error);
                setError(error);
            }
          }
        
          fetchProductList();
      }, [])
    
    return(
        <ProductContext.Provider 
        value={{
            loading,
            error,
            search,
            setSearch,
            productList,
            setProductList,
        }}
        >
            {children}
        </ProductContext.Provider>

    )
}

export default ProductContextProvider