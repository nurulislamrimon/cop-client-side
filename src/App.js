import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import auth from './firebase.init';
import Directors from './Pages/Directors/Directors';
import Executive from './Pages/Executive/Executive';
import Finance from './Pages/Finance/Finance';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Members from './Pages/Members/Members';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import CustomLink from './Utilities/CustomLink';
import RequireAuth from './Utilities/RequireAuth';
import Spinner from './Utilities/Spinner';


function App() {
  const [user] = useAuthState(auth);
  const menus = [
    <CustomLink key={1} to='/' className='btn btn-ghost w-full' > Home</CustomLink >,
    <CustomLink key={2} to='/members' className='btn btn-ghost w-full' > Members</CustomLink >,
    <CustomLink key={3} to='/finance' className='btn btn-ghost w-full' > Finance</CustomLink >,
    <CustomLink key={4} to='/directors' className='btn btn-ghost w-full' > Directors</CustomLink >,
    <CustomLink key={5} to='/executive' className='btn btn-ghost w-full' > Executive</CustomLink >,
    !user?.uid ? <CustomLink key={6} to='/login' className='btn btn-ghost w-full' > Login</CustomLink > : <button key={7} onClick={() => signOut(auth)}>Log out</button>
  ]
  return (
    <div className="App" >

      <Header menus={menus} />

      <div className="container mx-auto h-[calc(100vh-100px)] overflow-hidden">
        <Routes>
          <Route path='/' element={
            // <RequireAuth>
            <Home />
            // </RequireAuth>
          } />
          <Route path='/members' element={
            <RequireAuth>
              <Members />
            </RequireAuth>
          } />
          <Route path='/finance' element={
            <RequireAuth>
              <Finance />
            </RequireAuth>
          } />
          <Route path='/directors' element={
            <RequireAuth>
              <Directors />
            </RequireAuth>
          } />
          <Route path='/executive' element={
            <RequireAuth>
              <Executive />
            </RequireAuth>
          } />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>

      <Footer />
    </div >
  );
}

export default App;
