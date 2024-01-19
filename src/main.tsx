import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ProductContextProvider from './context/ProductContext.tsx'
import FilterContextProvider from './context/FilterContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProductContextProvider>
      <FilterContextProvider>
        <App />
      </FilterContextProvider>
    </ProductContextProvider>
  </React.StrictMode>,
)
