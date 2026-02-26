import './App.css';
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Gallery } from "./components/Gallery"
import { Hero } from "./components/Hero"
import { Modal } from "./components/Modal"
import { News } from "./components/News"
import { Weather } from "./components/Weather"
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [modal, setModal] = useState(false)
  const [location, setLocation] = useState('Kyiv')
  const [isUserLocation, setIsUserLocation] = useState(false) 
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [users, setUsers] = useState(() => {
    const stored = localStorage.getItem("users");
    console.log(stored)
    return stored ? JSON.parse(stored) : [];
  });




  const registerUser = (username, email, password) => {
    const userExists = users.find(user => user.email === email);
    if (userExists) {
      return { success: false, message: "User already exists" };
    }

    const newUser = { username, email, password };
    setUsers(prev => [...prev, newUser]);
    setIsLoggedIn(true)
    console.log(newUser)
    console.log(isLoggedIn)
    return { success: true };
  };

  const loginUser = (email, password) => {
    const user = users.find(
      user => user.email === email && user.password === password
    );

    if (!user) {
      toast.error("Invalid credentials");
      return { success: false, message: "Invalid credentials" };
      
    }
    setCurrentUser(user)
    localStorage.setItem("currentUser", JSON.stringify(user));


    setIsLoggedIn(true)
    toast.success("Registered successfully!");
    return { success: true };
  };

  const logoutUser = () => {
    localStorage.removeItem("currentUser");
    setIsLoggedIn(false);
    setCurrentUser(null)
  };

  useEffect(() => {
    console.log(location)
    console.log(isUserLocation)
  }, [location])

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className='app'>
      <Header setModal={setModal} setIsLoggedIn={setIsLoggedIn} logoutUser={logoutUser} isLoggedIn={isLoggedIn} currentUser={currentUser}/>
      <main className='content'>
        <Hero setLocation={setLocation} setIsUserLocation={setIsUserLocation}/>
        <Weather location={location} isUserLocation={isUserLocation} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>
        <News />
        <Gallery />
      </main> 
      <Footer />
      <Modal modal={modal} setModal={setModal} registerUser={registerUser} loginUser={loginUser}/>
    </div>
  );
}

export default App;
