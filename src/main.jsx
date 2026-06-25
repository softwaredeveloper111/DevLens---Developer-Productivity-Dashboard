import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import { Toaster } from "sonner"
import {DashboardProvider} from "./features/dashboard/dashboard.context.jsx"

createRoot(document.getElementById('root')).render(

 <DashboardProvider>
  <BrowserRouter>
    <Toaster  position="top-right" richColors />
    <App />
  </BrowserRouter>
 </DashboardProvider>
)
