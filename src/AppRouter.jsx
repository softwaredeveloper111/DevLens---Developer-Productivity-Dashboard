import {Routes,Route} from "react-router-dom"
import Dashboard from "./features/dashboard/pages/Dashboard"
import Articles from "./features/articles/pages/Article"
import Bookmarks from "./features/bookmarks/pages/Bookmark"
import Tasks from "./features/tasks/pages/Task"

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />


      <Route path="/articles" element={<Articles />} />
      <Route path="/bookmarks" element={<Bookmarks />} />
      <Route path="/tasks" element={<Tasks />} />
      

    </Routes>
  )
}

export default AppRouter