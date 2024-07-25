import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Home from "./Home";
import EmployeesView from "./component/employee/EmployeesView";
import NavBar from "./component/common/NavBar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import AddEmployee from "./component/employee/AddEmployee";
import EditEmployee from "./component/employee/EditEmployee";
import EmployeeProfile from "./component/employee/EmployeeProfile";

function App() {
	return (
		<main className="container mt-3">
			<Router>
				<NavBar />
				<Routes>
					<Route
						exact
						path="/"
						element={<Home />}></Route>
					<Route
						exact
						path="/view-employees"
						element={<EmployeesView />}></Route>
					<Route
						exact
						path="/add-employees"
						element={<AddEmployee />}></Route>
					<Route
						exact
						path="/edit-employee/:id"
						element={<EditEmployee />}></Route>
					<Route
						exact
						path="/employee-profile/:id"
						element={<EmployeeProfile />}></Route>
				</Routes>
			</Router>
		</main>
	);
}

export default App;