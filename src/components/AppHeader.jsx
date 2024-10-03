import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button, { SelectButton } from "./Button";
import styles from "../styles/modules/app.module.scss";
import TodoModal from "./TodoModal";
import { updateFilterStatus } from "../slices/todoSlice";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../slices/userSlice";
function AppHeader() {
  const [modalOpen, setModalOpen] = useState(false);
  const initialFilterStatus = useSelector((state) => state.todo.filterStatus);
  const [filterStatus, setFilterStatus] = useState(initialFilterStatus);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateFilter = (e) => {
    setFilterStatus(e.target.value);
    dispatch(updateFilterStatus(e.target.value));
  };
  function handleLogout() {
    dispatch(logoutUser());
    navigate("/");
  }

  return (
    <div className={styles.appHeader}>
      <Button variant="primary" onClick={() => setModalOpen(true)}>
        Add Task
      </Button>

      <div>
        <Button variant="primary" onClick={handleLogout}>
          Logout
        </Button>
        <SelectButton
          id="status"
          onChange={(e) => updateFilter(e)}
          value={filterStatus}
          style={{ marginLeft: "20px" }}
        >
          <option value="all">All</option>
          <option value="incomplete">Incomplete</option>
          <option value="complete">Completed</option>
        </SelectButton>
      </div>
      <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default AppHeader;
