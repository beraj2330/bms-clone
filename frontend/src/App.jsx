import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { menuContext } from './context/contextProvider';


function App() {
  const router = createBrowserRouter()
  const [moduleRoleWise, setModuleRoleWise] = useState([])
  const [menuData, setMenuData] = useState([])

  return (
    <menuContext.Provider value={{ menuData, setMenuData, moduleRoleWise, setModuleRoleWise }}>
      <main className="App relative">
        <RouterProvider router={router} />
      </main>
    </menuContext.Provider>
  );
}

export default App
