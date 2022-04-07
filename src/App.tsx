import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Owner from "./Pages/Owners/Owner/Owner";
import Owners from "./Pages/Owners/Owners";
import Pet from "./Pages/Pets/Pet/Pet";
import Pets from "./Pages/Pets/Pets";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="owners" element={<Owners />} />
      <Route path="owners/:ownerId" element={<Owner />} />
      <Route path="pets" element={<Pets />} />
      <Route path="pets/:petId" element={<Pet />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
};

export default App;
