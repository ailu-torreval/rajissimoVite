import {useContext} from 'react'
import { LoginContext } from '../contexts/LoginContext'
import { PageContext } from '../contexts/PageContext'

function Logo() {

  const {isLogin, setIsLogin} = useContext(LoginContext);
  const { page, setPage } = useContext(PageContext);

  function goToHomepage() {
    isLogin === true && setIsLogin(false);
    setPage("homePage");

  }

  return (
    <div onClick={goToHomepage}>Logo</div>
  )
}

export default Logo