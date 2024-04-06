import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import NavContextProvider from '../context/NavContextProvider'

export default function Skeleton() {
  return (
    <div className="bg-gray-200 h-screen">
      <div className="mx-auto p-2 bg-gray-300 h-full sm:max-w-96 max-h-full overflow-auto">
        <NavContextProvider>
          <Header />
          <Outlet />
          <Footer />
        </NavContextProvider>
      </div>
    </div>
  )
}