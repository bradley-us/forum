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

  const [isLogged, setIsLogged] = useState<any>(authStatus)

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

            <Route path='/asks' element={
              <ProtectedRoute userAuth={isLogged}>
                <Ask />
              </ProtectedRoute>
            } />
            <Route path='/question' element={
              <ProtectedRoute userAuth={isLogged}>
                <Question />
              </ProtectedRoute>
            } />
            <Route path='/discussions' element={
              <ProtectedRoute userAuth={isLogged}>
                <Discussions />
              </ProtectedRoute>
            } />
            <Route path='/*' element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
    
  );
}

export const ProtectedRoute = ({userAuth, children}:{userAuth:boolean, children?:any}) => {
  
  if(!userAuth) {
    return <Navigate to='/login' replace />
  }

  return children
}

export const PublicRoute = ({userAuth, children}:{userAuth:boolean, children?:any}) => {
  
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
