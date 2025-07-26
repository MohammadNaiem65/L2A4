import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router";

function App() {
  return (
    <div>
      <Navbar />

      <Outlet />
    </div>
  );
}

export default App;
