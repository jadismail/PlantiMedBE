import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Components/Home/Home";
import PlantsList from "./Components/Plants/PlantsList";
import PlantForm from "./Components/Plants/PlantForm";
import PlantDetails from "./Components/Plants/PlantDetails";
import MedicinesList from "./Components/Medicines/MedicinesList";
import MedicineForm from "./Components/Medicines/MedicineForm";
import MedicineDetails from "./Components/Medicines/MedicineDetails";
import UserProfile from "./Components/UserProfile/UserProfile";
import EditProfileForm from "./Components/UserProfile/EditProfileForm";
import PremiumSupportRequest from "./Components/PremiumSupport/PremiumSupportRequest";
import PremiumSupportHistory from "./Components/PremiumSupport/PremiumSupportHistory";
import DiseasesList from "./Components/Diseases/DiseasesList";
import DiseaseForm from "./Components/Diseases/DiseaseForm";
import DiseaseDetails from "./Components/Diseases/DiseaseDetails";
import WateringSchedulesList from "./Components/WateringSchedules/WateringSchedulesList";
import WateringScheduleForm from "./Components/WateringSchedules/WateringScheduleForm";
import WateringScheduleDetails from "./Components/WateringSchedules/WateringScheduleDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<PlantsList />} />
        <Route path="/add-plant" element={<PlantForm />} />
        <Route path="/plant-details/:id" element={<PlantDetails />} />
        <Route path="/medicines" element={<MedicinesList />} />
        <Route path="/add-medicine" element={<MedicineForm />} />
        <Route path="/medicine-details/:id" element={<MedicineDetails />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/edit-profile" element={<EditProfileForm />} />
        <Route path="/premium-support" element={<PremiumSupportRequest />} />
        <Route path="/support-history" element={<PremiumSupportHistory />} />
        <Route path="/diseases" element={<DiseasesList />} />
        <Route path="/add-disease" element={<DiseaseForm />} />
        <Route path="/disease-details/:id" element={<DiseaseDetails />} />
        <Route path="/watering-schedules" element={<WateringSchedulesList />} />
        <Route
          path="/add-watering-schedule"
          element={<WateringScheduleForm />}
        />
        <Route
          path="/watering-schedule-details/:id"
          element={<WateringScheduleDetails />}
        />
      </Routes>
    </Router>
  );
}

export default App;
