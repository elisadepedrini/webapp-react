import AppHeader from "./components/AppHeader"
import AppFooter from "./components/AppFooter"
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import ContactsPage from "./pages/ContactsPage"
import FilmPage from "./pages/FilmPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout/>}>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/contacts" element={<ContactsPage/>}/>
            <Route path="/film/:id" element={<FilmPage/>}/>
          </Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
