import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router";

function App() {
  return (
    <div>
      <Navbar />

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 pt-14 pb-24 mx-auto">
          <Outlet />
        </div>
      </section>
    </div>
  );
}

export default App;
