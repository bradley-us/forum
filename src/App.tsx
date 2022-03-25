import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import './App.css'
import AllPages from './pages/AllPages'
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'
import ErrorPage from './pages/404/views/ErrorPage'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// TODO: TEMPORAL
import Discussions from './pages/Discussions/Discussions'
import Ask from './pages/Asks/Ask'
import Question from './pages/Question/Question'

function App(props:any) {

  const { authStatus } = props

  const [isLogged, setIsLogged] = useState<any>(true)

  useEffect(() => {
    if(authStatus === false) setIsLogged(authStatus)
  }, [authStatus])
  

  return (
    <div className='h-full dark:bg-gray-900'>
      <div className='h-full dark:bg-gray-900 dark:text-gray-300'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={
              <ProtectedRoute userAuth={isLogged}>
                <AllPages />
              </ProtectedRoute>
            } />

            <Route path='/dashboard' element={
              <ProtectedRoute userAuth={isLogged}>
                <AllPages />
              </ProtectedRoute>
            } />

            <Route path='/login' element={
              <PublicRoute userAuth={isLogged}>
                <Login />
              </PublicRoute>
            } />
            <Route path='/register' element={
              <PublicRoute userAuth={isLogged}>
                <Register />
              </PublicRoute>
            } />
            <Route path='/*' element={<ErrorPage />} />
            <Route path='/discussions' element={<Discussions />} />
            <Route path='/asks' element={<Ask />} />
            <Route path='/question' element={<Question />} />

          </Routes>
        </BrowserRouter>
      </div>
    </div>
    
  );
}

const ProtectedRoute = ({userAuth, children}:{userAuth:boolean, children?:any}) => {
  
  if(!userAuth) {
    return <Navigate to='/login' replace />
  }

  return children
}

const PublicRoute = ({userAuth, children}:{userAuth:boolean, children?:any}) => {
  
  if(userAuth) {
    return <Navigate to='/' replace />
  }

  return children
}

const mapStateToProps = state => {
  return {
    authStatus: state.toggleAuth.auth
  }
}

export default connect(mapStateToProps)(App);
