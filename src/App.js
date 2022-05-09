import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Container } from 'react-bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';
import Register from './views/Register';
import Login from './views/Login';
import NotFound from './components/NotFound';
import Home from './views/Home';
import ResetPassword from './views/ResetPassword';

import { AuthProvider } from './context/authContext';
import RequireAuth from './context/RequireAuth';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <header>
          <Header />
        </header>
        <Container>
          <main className='py-3'>
            <Routes>
              <Route path={'/'} element={
                <RequireAuth>
                  <Home />
                </RequireAuth>  
              } exact />
              <Route path={'/register'} element={<Register />} />
              <Route path={'/login'} element={<Login />} />
              <Route path={'/reset'} element={<ResetPassword />} />
              <Route path={'*'} element={<NotFound />} />
            </Routes>
          </main>
        </Container>
        <footer>
          <Footer />
        </footer>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
