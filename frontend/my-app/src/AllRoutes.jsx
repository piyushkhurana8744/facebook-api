import React from 'react'
import {Routes,Route} from "react-router-dom"

import FacebookLogin from './facebooklogin'
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FacebookLogin />}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes
