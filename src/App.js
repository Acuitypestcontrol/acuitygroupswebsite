import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./global/navbar";
import Footer from "./global/footer";
import ScrollToTop from "../src/components/Scrolltop";

import Home from "./components/Home/homepage";
import Aboutus from "./components/about us/aboutus";
import Contact from "./components/contactus/contactus";

import AdminDashboard from "../src/components/AdminDashboard";

import Softservices from "../src/pages/softservices";
import Securityservice from "./pages/securityservice";
import Housekeeping from "./pages/housekeeping";
import RepairMaintenance from "../src/pages/repair";
import PestManagement from "./pages/pest";
import ManpowerOutsourcing from "./pages/manpower";
import Facilitymanagment from "./pages/facilitymanagment1";
import Services from "./pages/servicepage";

import Career from "./components/career";
import Pestcareer from "./components/career/pestcareer";
import Acuitygroups from "./components/career/acuitygroup";

import SocialSidebar from "./components/sidesocialbar";
import WhatsAppButton from "./components/whatsappbutton";
import LeadPopup from "./components/popup";

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
import HotelsHospitality from "./components/blogs/HotelsHospitality";

import Whitefield from "./components/seofolder/integrated-facility-management-whitefield";
import ElectronicCity from "./components/seofolder/integrated-facility-management-electronic-city";
import Koramangala from "./components/seofolder/integrated-facility-management-koramangala";
import HSRLayout from "./components/seofolder/integrated-facility-management-hsr-layout";
import IntegratedFacilityManagementJPNagar from "./components/seofolder/integrated-facility-management-jp-nagar";
import Dabaspet from "./components/seofolder/integrated-facility-management-dabaspet";
import Peenya from "./components/seofolder/integrated-facility-management-peenya";
import Hebbal from "./components/seofolder/integrated-facility-management-hebbal";
import Beml from "./components/seofolder/integrated-facility-management-beml";
import Doddaballapur from "./components/seofolder/integrated-facility-management-doddaballapur";
import Attibele from "./components/seofolder/integrated-facility-management-attibele";
import Kumbalgodu from "./components/seofolder/integrated-facility-management-kumbalgodu";

export default function App() {
  return (
    <Router>
      <WhatsAppButton />
      <SocialSidebar />
      <ScrollToTop />
      <Navbar />
      <LeadPopup />

      <Routes>
        {/* Main canonical pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        {/* Service canonical pages */}
        <Route path="/security-services" element={<Securityservice />} />
        <Route
          path="/integrated-facility-management"
          element={<Facilitymanagment />}
        />
        <Route path="/housekeeping-services" element={<Housekeeping />} />
        <Route path="/repair-maintenance" element={<RepairMaintenance />} />
        <Route path="/pest-management" element={<PestManagement />} />
        <Route path="/manpower-outsourcing" element={<ManpowerOutsourcing />} />
        <Route path="/soft-services" element={<Softservices />} />

        {/* Career pages */}
        <Route path="/career" element={<Career />} />
        <Route path="/career/pest-control" element={<Pestcareer />} />
        <Route path="/career/acuity-groups" element={<Acuitygroups />} />

        {/* Blog pages */}
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/cockroach-control" element={<Cockroaches />} />
        <Route path="/blogs/termite-control" element={<TermiteControlGuide />} />
        <Route path="/blogs/mosquito-prevention" element={<MosquitoPrevention />} />
        <Route
          path="/blogs/hotels-hospitality"
          element={<HotelsHospitality />}
        />
        <Route
          path="/blogs/importance-of-facility-management"
          element={<ImportanceofFacility />}
        />
        <Route
          path="/blogs/education-industry"
          element={<EducationIndustry />}
        />
        <Route
          path="/blogs/from-function-to-feeling"
          element={<FromFunctiontoFeeling />}
        />
        <Route
          path="/blogs/the-importance-of-facilities"
          element={<TheImportanceFacilities />}
        />
        <Route path="/blogs/learn-how" element={<Learnhow />} />
        <Route path="/blogs/unleash-design" element={<UnleashDesigne />} />
        <Route
          path="/blogs/why-integrated-facility-management"
          element={<WhyIntegrated />}
        />
        <Route
          path="/blogs/housekeeping-services"
          element={<HousekeepingServices />}
        />
        <Route
          path="/blogs/why-regular-pest-control"
          element={<WhyRegularPest />}
        />
        <Route
          path="/blogs/repairing-maintenance"
          element={<RepairingMaintenance />}
        />
        <Route path="/blogs/manpower-outsourcing" element={<Mps />} />
        <Route
          path="/blogs/manufacturing-industry"
          element={<ManufacturingIndustry />}
        />

        {/* Location SEO pages */}
        <Route
          path="/integrated-facility-management-whitefield"
          element={<Whitefield />}
        />
        <Route
          path="/integrated-facility-management-electronic-city"
          element={<ElectronicCity />}
        />
        <Route
          path="/integrated-facility-management-koramangala"
          element={<Koramangala />}
        />
        <Route
          path="/integrated-facility-management-hsr-layout"
          element={<HSRLayout />}
        />
        <Route
          path="/integrated-facility-management-jp-nagar"
          element={<IntegratedFacilityManagementJPNagar />}
        />
        <Route
          path="/integrated-facility-management-dabaspet"
          element={<Dabaspet />}
        />
        <Route
          path="/integrated-facility-management-peenya"
          element={<Peenya />}
        />
        <Route
          path="/integrated-facility-management-hebbal"
          element={<Hebbal />}
        />
        <Route
          path="/integrated-facility-management-beml"
          element={<Beml />}
        />
        <Route
          path="/integrated-facility-management-doddaballapur"
          element={<Doddaballapur />}
        />
        <Route
          path="/integrated-facility-management-attibele"
          element={<Attibele />}
        />
        <Route
          path="/integrated-facility-management-kumbalgodu"
          element={<Kumbalgodu />}
        />

        {/* Admin */}
        <Route path="/admindashboard" element={<AdminDashboard />} />

        {/* Old URL redirects */}
        <Route path="/homepage" element={<Navigate to="/" replace />} />
        <Route path="/aboutus" element={<Navigate to="/about" replace />} />
        <Route path="/contactus" element={<Navigate to="/contact" replace />} />
        <Route path="/pages/servicepage" element={<Navigate to="/services" replace />} />
        <Route path="/services-5" element={<Navigate to="/services" replace />} />

        <Route
          path="/Securityservice"
          element={<Navigate to="/security-services" replace />}
        />
        <Route
          path="/facilitymanagment1"
          element={<Navigate to="/integrated-facility-management" replace />}
        />
        <Route
          path="/Housekeeping"
          element={<Navigate to="/housekeeping-services" replace />}
        />
        <Route path="/repair" element={<Navigate to="/repair-maintenance" replace />} />
        <Route path="/pest" element={<Navigate to="/pest-management" replace />} />
        <Route
          path="/manpower"
          element={<Navigate to="/manpower-outsourcing" replace />}
        />
        <Route
          path="/softservices"
          element={<Navigate to="/soft-services" replace />}
        />

        <Route
          path="/career/pestcareer"
          element={<Navigate to="/career/pest-control" replace />}
        />
        <Route
          path="/career/acuitygroups"
          element={<Navigate to="/career/acuity-groups" replace />}
        />

        <Route
          path="/blogs/allblogs"
          element={<Navigate to="/blogs" replace />}
        />
        <Route
          path="/blogs/cockroaches"
          element={<Navigate to="/blogs/cockroach-control" replace />}
        />
        <Route
          path="/blogs/termite"
          element={<Navigate to="/blogs/termite-control" replace />}
        />
        <Route
          path="/blogs/mosquito"
          element={<Navigate to="/blogs/mosquito-prevention" replace />}
        />
        <Route
          path="/blogs/HotelsHospitality"
          element={<Navigate to="/blogs/hotels-hospitality" replace />}
        />
        <Route
          path="/blogs/ImportanceofFacility"
          element={<Navigate to="/blogs/importance-of-facility-management" replace />}
        />
        <Route
          path="/blogs/EducationIndustry"
          element={<Navigate to="/blogs/education-industry" replace />}
        />
        <Route
          path="/blogs/facilitymanagment"
          element={<Navigate to="/integrated-facility-management" replace />}
        />
        <Route
          path="/blogs/FromFunction"
          element={<Navigate to="/blogs/from-function-to-feeling" replace />}
        />
        <Route
          path="/blogs/TheImportanceFacilities"
          element={<Navigate to="/blogs/the-importance-of-facilities" replace />}
        />
        <Route
          path="/blogs/Learnhow"
          element={<Navigate to="/blogs/learn-how" replace />}
        />
        <Route
          path="/blogs/UnleashDesigne"
          element={<Navigate to="/blogs/unleash-design" replace />}
        />
        <Route
          path="/blogs/WhyIntegrated"
          element={<Navigate to="/blogs/why-integrated-facility-management" replace />}
        />
        <Route
          path="/blogs/HousekeepingServices"
          element={<Navigate to="/blogs/housekeeping-services" replace />}
        />
        <Route
          path="/blogs/WhyRegularPest"
          element={<Navigate to="/blogs/why-regular-pest-control" replace />}
        />
        <Route
          path="/blogs/RepairingMaintenance"
          element={<Navigate to="/blogs/repairing-maintenance" replace />}
        />
        <Route
          path="/blogs/mps"
          element={<Navigate to="/blogs/manpower-outsourcing" replace />}
        />
        <Route
          path="/blogs/ManufacturingIndustry"
          element={<Navigate to="/blogs/manufacturing-industry" replace />}
        />

        {/* 404 fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </Router>
  );
}