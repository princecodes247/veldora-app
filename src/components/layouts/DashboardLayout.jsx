import Drawer from "../Drawer";
import Header from "../Header";
import { GlobalModal } from "../modals/GlobalModal";
import CreateProjectModal from "../modals/CreateProjectModal";
import { useAuth } from "../../hooks";

function DashboardLayout({ children }) {
  const { user } = useAuth();
  console.log(user);
  return (
    <GlobalModal>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-8 pt-0">
          <Header />
          {/* <!-- Page content here --> */}
          {children}
        </div>
        <Drawer />
        <CreateProjectModal />
      </div>
    </GlobalModal>
  );
}

export default DashboardLayout;
