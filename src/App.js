import React from 'react'
import PostalCodeInputComponent from './Components/Postalcode/PostalCodeInputComponent'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LocationInformationDisplayComponent from './Components/LocationInfo/LocationInformationDisplayComponent'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={PostalCodeInputComponent} />
          <Route exact path='/LocationInfo' Component={LocationInformationDisplayComponent} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App