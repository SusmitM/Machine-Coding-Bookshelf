import { Routes,Route } from "react-router-dom"
import {Main,Search} from "../pages"
export const AllRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/search" element={<Search/>}/>
   </Routes>
  )
}
