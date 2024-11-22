import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddItems from '../screens/AddItems'
import UpdateItems from '../screens/UpdateItems'
import UpdateStockCount from '../screens/UpdateStockCount'
import RemoveStockCount from '../screens/RemoveStockCount'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/add-item' element={<AddItems />} />
        <Route path='/update-item' element={<UpdateItems />} />
        <Route path='/update-stock-count' element={<UpdateStockCount />} />
        <Route path='/remove-stock-count' element={<RemoveStockCount />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
