import { Toaster } from "react-hot-toast";
import AppContent from "../components/AppContent";
import AppHeader from "../components/AppHeader";
import PageTitle from "../components/PageTitle";
// import AppContent from '../components/'
import styles from "../styles/modules/app.module.scss";

function Dashboard() {
  return (
    <>
      <div className="container">
        <PageTitle>TODO List</PageTitle>
        <div className={styles.app__wrapper}>
          <AppHeader />
          <AppContent />
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: "1.4rem",
          },
        }}
      />
    </>
  );
}

export default Dashboard;
