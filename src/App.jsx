// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import { useCartContext } from "./context";

function App() {
  const { loading } = useCartContext();

  if (loading) {
    return (
      <main>
        <div className="loading" style={{ marinTop: "6rem" }}></div>
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
