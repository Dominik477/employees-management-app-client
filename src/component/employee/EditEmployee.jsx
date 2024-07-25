import React, {
	useEffect,
	useState,
} from "react";
import axios from "axios";

import {
	Link,
	useNavigate,
	useParams,
} from "react-router-dom";

const EditEmployee = () => {
	let navigate = useNavigate();

	const { id } = useParams();

	const [employee, setEmployee] = useState({
		firstName: "",
		lastName: "",
		email: "",
		position: "",
	});
	const {
		firstName,
		lastName,
		email,
		position,
	} = employee;

	useEffect(() => {
		loadEmployee();
	}, []);

	const loadEmployee = async () => {
		const result = await axios.get(
			`http://localhost:9192/employees/employee/${id}`
		);
		setEmployee(result.data);
	};

	const handleInputChange = (e) => {
		setEmployee({
			...employee,
			[e.target.name]: e.target.value,
		});
	};
	const updateEmployee = async (e) => {
		e.preventDefault();
		await axios.put(
			`http://localhost:9192/employees/update/${id}`,
			employee
		);
		navigate("/view-employees");
	};

	return (
		<div className="col-sm-8 py-2 px-5 offset-2 shadow mt-4" style={{ backgroundColor: "#eee" }}>
			<h3 className="mt-3 mb-4"> Edit Employee</h3>
			<form onSubmit={(e) => updateEmployee(e)}>
				<div className="input-group mb-3">
					<label
						className="input-group-text col-sm-2 d-flex justify-content-center"
						htmlFor="fristName">
						First Name
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="firstName"
						id="firstName"
						required
						value={firstName}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-3">
					<label
						className="input-group-text col-sm-2 d-flex justify-content-center"
						htmlFor="lastName">
						Last Name
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="lastName"
						id="lastName"
						required
						value={lastName}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-3">
					<label
						className="input-group-text col-sm-2 d-flex justify-content-center"
						htmlFor="email">
						Email
					</label>
					<input
						className="form-control col-sm-6"
						type="email"
						name="email"
						id="email"
						required
						value={email}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-3">
					<label
						className="input-group-text col-sm-2 d-flex justify-content-center"
						htmlFor="position">
						Position
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="position"
						id="position"
						required
						value={position}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="row mb-4 mt-4 justify-content-end" >
					<div className="col-sm-1">
						<button
							type="submit"
							className="btn btn-outline-success btn-m">
							Save
						</button>
					</div>

					<div className="col-sm-1 me-5">
						<Link
							to={"/view-employees"}
							type="submit"
							className="btn btn-outline-warning btn-m">
							Cancel
						</Link>
					</div>
				</div>
			</form>
		</div>
	);
};

export default EditEmployee;