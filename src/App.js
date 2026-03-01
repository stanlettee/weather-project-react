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
  const [menuOpen, setMenuOpen] = useState(false)

  const [users, setUsers] = useState(() => {
    const stored = localStorage.getItem("users");
    return stored ? JSON.parse(stored) : [];
  });

  const [currentUser, setCurrentUser] = useState(() => {
    const stored = localStorage.getItem("currentUser");
    return stored ? JSON.parse(stored) : null;
  });

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem("currentUser");
  });

  const [likedCities, setLikedCities] = useState(() => {
    const storedUser = localStorage.getItem("currentUser");

    if (!storedUser) return [];

    const parsedUser = JSON.parse(storedUser);
    const storedLikes = localStorage.getItem(
      `likedCities_${parsedUser.email}`
    );

    return storedLikes ? JSON.parse(storedLikes) : [];
  });

  useEffect(() => {
    document.body.style.overflow =
      modal || menuOpen ? "hidden" : "auto";
  }, [modal, menuOpen]);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    if (!currentUser) return;

    localStorage.setItem(
      `likedCities_${currentUser.email}`,
      JSON.stringify(likedCities)
    );
  }, [likedCities, currentUser]);


  const registerUser = (username, email, password) => {
    const userExists = users.find(user => user.email === email);

    if (userExists) {
      return { success: false, message: "User already exists" };
    }

    const newUser = { username, email, password };

    setUsers(prev => [...prev, newUser]);
    setCurrentUser(newUser);
    setIsLoggedIn(true);

    localStorage.setItem("currentUser", JSON.stringify(newUser));

    toast.success("Registered successfully!");
    return { success: true };
  };

  const loginUser = (email, password) => {
    const user = users.find(
      user => user.email === email && user.password === password
    );

    if (!user) {
      return { success: false, message: "Invalid credentials" };
    }

    setCurrentUser(user);
    setIsLoggedIn(true);

    localStorage.setItem("currentUser", JSON.stringify(user));

    const storedLikes = localStorage.getItem(
      `likedCities_${user.email}`
    );

    setLikedCities(storedLikes ? JSON.parse(storedLikes) : []);

    toast.success("Logged in successfully!");
    return { success: true };
  };

  const logoutUser = () => {
    localStorage.removeItem("currentUser");

    setCurrentUser(null);
    setIsLoggedIn(false);
    setLikedCities([]);

    toast.info("Logged out successfully!");
  };

  return (
    <div className='app'>
      <Header
        setModal={setModal}
        logoutUser={logoutUser}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main className='content'>
        <ToastContainer position="top-right" autoClose={2000} />

        <Hero
          setLocation={setLocation}
          setIsUserLocation={setIsUserLocation}
        />

        <Weather
          likedCities={likedCities}
          setLikedCities={setLikedCities}
          location={location}
          isUserLocation={isUserLocation}
          setIsUserLocation={setIsUserLocation}
          isLoggedIn={isLoggedIn}
          currentUser={currentUser}
          setLocation={setLocation}
        />

        <News />
        <Gallery />
      </main>

      <Footer />

      <Modal
        modal={modal}
        setModal={setModal}
        registerUser={registerUser}
        loginUser={loginUser}
      />
    </div>
  );
}

export default App;