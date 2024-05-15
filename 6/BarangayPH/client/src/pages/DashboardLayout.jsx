import { Outlet } from "react-router-dom"
import Wrapper from "../assets/wrappers/Dashboard"
import { BigSideBar, NavBar, SmallSideBar } from "../components"
import { createContext, useContext, useState } from "react"


const DashboardContext = createContext();
const user = {name:"john"}

const DashboardLayout = () => {
  const [showSideBar, setShowSideBar] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(false)


const toggleDarkTheme =  () => {
  console.log('toggle dark')
}

const toggleSideBar =  () => {
  setShowSideBar(!showSideBar)
}

const logOutUser = async () => {
  console.log('logout');
}

  return <DashboardContext.Provider value={{user, showSideBar,isDarkTheme,toggleDarkTheme,toggleSideBar}}> 
    <Wrapper>
    
    <main className="dashboard">
      <SmallSideBar/>
      <BigSideBar />
      <div>
        <NavBar/>
        <div className="dashboard-page">
        <Outlet/>
        </div>
      </div>
    </main>
    </Wrapper>
    </DashboardContext.Provider>
}
export const useDashboardContext = () => useContext(DashboardContext)
export default DashboardLayout