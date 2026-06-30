import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import { Toaster } from "sonner"
import {DashboardProvider} from "./features/dashboard/dashboard.context.jsx";
import {ArticleProvider} from "./features/articles/article.context.jsx";

createRoot(document.getElementById('root')).render(

 <DashboardProvider>
  <ArticleProvider>
    <BrowserRouter>
      <Toaster  position="top-right"/>
      <App />
    </BrowserRouter>
  </ArticleProvider>
 </DashboardProvider>
)
