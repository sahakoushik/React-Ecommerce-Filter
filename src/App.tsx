
import ProductList from "./components/ProductList"
import Filters from "./components/Filters"

function App() {
  return(
    <div className="flex flex-col xs:flex-row">
      <aside className="xs:h-screen xs:sticky top-0 xs:w-64 xs:overflow-scroll p-8">
        <Filters/> 
      </aside>
      <ProductList/>
    </div>
  )
}

export default App
