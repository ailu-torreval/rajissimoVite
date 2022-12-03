import { useContext } from "react";
import { PageContext } from './contexts/PageContext'
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import AbUsPage from "./pages/AbUsPage";
import SubsPage from "./pages/SubsPage";

function Website() {
  const { page, setPage } = useContext(PageContext);


  return (
    <main>
    {page === 'homePage' && <HomePage />}
    {page === 'menuPage' && <MenuPage />}
    {page === 'abUsPage' && <AbUsPage />}
    {page === 'subsPage' && <SubsPage />}
    </main>
  )
}



export default Website