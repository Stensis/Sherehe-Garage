import Homepage from "./Components/Homepage/Homepage";
import HomeNavbar from "./Components/Navbar/Navbar";
import background2 from "../src/Assets/background2.avif";
import Event from "./Components/Events/Event";

function App() {
  return (
    <div
      style={{
        // backgroundImage:
        //   "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29sb3IlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",

        backgroundImage: `url(${background2})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh"
      }}
    >
      <HomeNavbar />
      <Homepage />
      <Event/>
    </div>
  );
}

export default App;
