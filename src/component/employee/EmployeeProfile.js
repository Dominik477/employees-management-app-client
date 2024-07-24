import React, {
	useEffect,
	useState,
} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EmployeePofile = () => {
	const { id } = useParams();

	const [employee, setEmployee] = useState({
		firstName: "",
		lastName: "",
		email: "",
		position: "",
	});

	useEffect(() => {
		loadEmployee();
	}, []);

	const loadEmployee = async () => {
		const result = await axios.get(
			`http://localhost:9192/employees/employee/${id}`
		);
		setEmployee(result.data);
	};

	return (
		<section
			className="shadow"
			style={{ backgroundColor: "#eee" }}>
			<div className="container py-5">

				<div class="row">
					<div class="col">
						<nav aria-label="breadcrumb" class="bg-body-tertiary rounded-3 p-3 mb-4">
						<ol class="breadcrumb mb-0">
							<li class="breadcrumb-item"><a href="#">Home</a></li>
							<li class="breadcrumb-item"><a href="#">User</a></li>
							<li class="breadcrumb-item active" aria-current="page">User Profile</li>
						</ol>
						</nav>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-3">
						<div className="card mb-4">
							<div className="card-body text-center">
								<img
									src="https://cdn-icons-png.flaticon.com/512/3048/3048127.png"
									alt="avatar"
									className="rounded-circle img-fluid"
									style={{ width: 160 }}
								/>
								<h5 className="my-3">
									{`${employee.firstName} ${employee.lastName}`}
								</h5>
								<div className="d-flex justify-content-center mb-2">
									<button
										type="button"
										className="btn btn-outline-primary">
										Call
									</button>
									<button
										type="button"
										className="btn btn-outline-warning ms-1">
										Email
									</button>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-9">
						<div className="card mb-5">
							<div className="card-body">

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											First Name
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{employee.firstName}
										</p>
									</div>
								</div>

								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Last Name
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{employee.lastName}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Email
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{employee.email}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Position
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{employee.position}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};




export default EmployeePofile;