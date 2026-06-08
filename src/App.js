import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./global/navbar";
import Home from "./components/Home/homepage";
import Footer from "./global/footer";
import Aboutus from "./components/about us/aboutus";
import Contact from "./components/contactus/contactus";
import AdminDashboard from "../src/components/AdminDashboard";
import Homepage from "./components/Home/homepage";
import Softservices from "../src/pages/softservices";
import Securityservice from "./pages/securityservice";
import Housekeeping from "./pages/housekeeping";
import ScrollToTop from "../src/components/Scrolltop";
import RepairMaintenance from "../src/pages/repair";
import PestManagement from "./pages/pest";
import ManpowerOutsourcing from "./pages/manpower";
import Career from "./components/career";
import SocialSidebar from "./components/sidesocialbar";
import WhatsAppButton from "./components/whatsappbutton";
import Pestcareer from "./components/career/pestcareer";
import Acuitygroups from "./components/career/acuitygroup";
import Blogs from "./components/blogs/allblogs";
import Cockroaches from "./components/blogs/cockroaches";
import TermiteControlGuide from "./components/blogs/termite";
import MosquitoPrevention from "./components/blogs/mosquito";
import FromFunctiontoFeeling from "./components/blogs/FromFunction";
import TheImportanceFacilities from "./components/blogs/TheImportanceFacilities";
import Learnhow from "./components/blogs/Learnhow";
import UnleashDesigne from "./components/blogs/UnleashDesigne";
import WhyIntegrated from "./components/blogs/WhyIntegrated";
import HousekeepingServices from "./components/blogs/HousekeepingServices";
import WhyRegularPest from "./components/blogs/WhyRegularPest";
import RepairingMaintenance from "./components/blogs/RepairingMaintenance";
import Mps from "./components/blogs/mps";
import ImportanceofFacility from "./components/blogs/ImportanceofFacility";
import EducationIndustry from "./components/blogs/EducationIndustry";
import ManufacturingIndustry from "./components/blogs/ManufacturingIndustry";
import Facilitymanagment from "./pages/facilitymanagment1";
import Services from "./pages/servicepage";

export default function App() {
  return (
    
    <Router>
      <WhatsAppButton />
      <SocialSidebar />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/Securityservice" element={<Securityservice />} />
        <Route path="/facilitymanagment1" element={<Facilitymanagment />} />
        <Route path="/Housekeeping" element={<Housekeeping />} />
        <Route path="/repair" element={<RepairMaintenance />} />
        <Route path="/pest" element={<PestManagement />} />
        <Route path="/manpower" element={<ManpowerOutsourcing />} />
        <Route path="/softservices" element={<Softservices />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/career" element={<Career />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/career/pestcareer" element={<Pestcareer />} />
        <Route path="/career/acuitygroups" element={<Acuitygroups />} />
        <Route path="/blogs/allblogs" element={<Blogs />} />
        <Route path="/blogs/cockroaches" element={<Cockroaches />} />
        <Route path="/blogs/termite" element={<TermiteControlGuide />} />
        <Route path="/blogs/mosquito" element={<MosquitoPrevention />} />
        <Route
          path="/blogs/ImportanceofFacility"
          element={<ImportanceofFacility />}
        />
        <Route
          path="/blogs/EducationIndustry"
          element={<EducationIndustry />}
        />

        <Route
          path="/blogs/facilitymanagment"
          element={<Facilitymanagment />}
        />

        <Route path="/blogs/FromFunction" element={<FromFunctiontoFeeling />} />
        <Route
          path="/blogs/TheImportanceFacilities"
          element={<TheImportanceFacilities />}
        />
        <Route path="/blogs/Learnhow" element={<Learnhow />} />
        <Route path="/blogs/UnleashDesigne" element={<UnleashDesigne />} />
        <Route path="/blogs/WhyIntegrated" element={<WhyIntegrated />} />
        <Route
          path="/blogs/HousekeepingServices"
          element={<HousekeepingServices />}
        />
        <Route path="/blogs/WhyRegularPest" element={<WhyRegularPest />} />
        <Route
          path="/blogs/RepairingMaintenance"
          element={<RepairingMaintenance />}
        />
        <Route path="/blogs/mps" element={<Mps />} />
        <Route
          path="/blogs/ManufacturingIndustry"
          element={<ManufacturingIndustry />}
        />
        <Route path="/pages/servicepage" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}
