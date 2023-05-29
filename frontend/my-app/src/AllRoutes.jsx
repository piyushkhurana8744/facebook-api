import React from 'react'
import {Routes,Route} from "react-router-dom"
import Facebookleads from './Facebookleads'
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="facebook-leads" element={<Facebookleads />}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes
