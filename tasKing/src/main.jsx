import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Nav} from './components/Nav.jsx'
import { SideBar } from './components/SideBar.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
 <>
 <Nav/>
 <div className="grid grid-cols-[repeat(7_,1fr)] gap-4 w-[90%] m-auto mt-8 auto-rows-[minmax(70px_,auto)]">
    <SideBar />
 </div>
 </>
)
