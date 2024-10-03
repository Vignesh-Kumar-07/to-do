// import React from "react";
// import { Toaster } from "react-hot-toast";
// import AppContent from "./components/AppContent";
// import AppHeader from "./components/AppHeader";
// import PageTitle from "./components/PageTitle";
// import styles from "./styles/modules/app.module.scss";

// function App() {
//   return (
//     <>
//       <div className="container">
//         <PageTitle>TODO List</PageTitle>
//         <div className={styles.app__wrapper}>
//           <AppHeader />
//           <AppContent />
//         </div>
//       </div>
//       <Toaster
//         position="bottom-right"
//         toastOptions={{
//           style: {
//             fontSize: '1.4rem',
//           },
//         }}
//       />
//     </>
//   );

//   <></>;
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoginPage from "./pages/LoginPage";
// import DashboardPage from "./pages/DashboardPage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
