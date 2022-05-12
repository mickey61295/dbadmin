import React from 'react'
function Navbar() {
	return (
		<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
			<button
				id="sidebarToggleTop"
				className="btn btn-link d-md-none rounded-circle mr-3"
			>
				<i className="fa fa-bars"></i>
			</button>

			<form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
				<div className="input-group">
					<input
						type="text"
						className="form-control bg-light border-0 small"
						placeholder="Search for..."
						aria-label="Search"
						aria-describedby="basic-addon2"
					/>
					<div className="input-group-append">
						<button className="btn btn-primary" type="button">
							<i className="fas fa-search fa-sm"></i>
						</button>
					</div>
				</div>
			</form>

			<ul className="navbar-nav ml-auto">
				<li className="nav-item dropdown no-arrow d-sm-none">
					<a
						className="nav-link dropdown-toggle"
						href="/"
						id="searchDropdown"
						role="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						<i className="fas fa-search fa-fw"></i>
					</a>

					<div
						className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
						aria-labelledby="searchDropdown"
					>
						<form className="form-inline mr-auto w-100 navbar-search">
							<div className="input-group">
								<input
									type="text"
									className="form-control bg-light border-0 small"
									placeholder="Search for..."
									aria-label="Search"
									aria-describedby="basic-addon2"
								/>
								<div className="input-group-append">
									<button className="btn btn-primary" type="button">
										<i className="fas fa-search fa-sm"></i>
									</button>
								</div>
							</div>
						</form>
					</div>
				</li>

				<li className="nav-item dropdown no-arrow mx-1">
					<a
						className="nav-link dropdown-toggle"
						href="/"
						id="alertsDropdown"
						role="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						<i className="fas fa-bell fa-fw"></i>

						<span className="badge badge-danger badge-counter">2+</span>
					</a>

					<div
						className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
						aria-labelledby="alertsDropdown"
					>
						<h6 className="dropdown-header">Notifications</h6>
						<a className="dropdown-item d-flex align-items-center" href="/">
							<div className="mr-3">
								<div className="icon-circle bg-primary">
									<i className="fas fa-file-alt text-white"></i>
								</div>
							</div>
							<div>
								<div className="small text-gray-500">January 31, 2022</div>
								<span className="font-weight-bold">
									Download the new metrics report!
								</span>
							</div>
						</a>
						<a className="dropdown-item d-flex align-items-center" href="/">
							<div className="mr-3">
								<div className="icon-circle bg-success">
									<i className="fas fa-donate text-white"></i>
								</div>
							</div>
							<div>
								<div className="small text-gray-500">February 1, 2022</div>
								Quickly Upload the new metrics report!
							</div>
						</a>
						<a className="dropdown-item d-flex align-items-center" href="/">
							<div className="mr-3">
								<div className="icon-circle bg-warning">
									<i className="fas fa-exclamation-triangle text-white"></i>
								</div>
							</div>
							<div>
								<div className="small text-gray-500">February 4, 2022</div>
								You were fired for not uploading the metrics report😜!
							</div>
						</a>
						<a
							className="dropdown-item text-center small text-gray-500"
							href="/"
						>
							Show All Notifications
						</a>
					</div>
				</li>

				<li className="nav-item dropdown no-arrow mx-1">
					<a
						className="nav-link dropdown-toggle"
						href="/"
						id="messagesDropdown"
						role="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						<i className="fas fa-envelope fa-fw"></i>

						<span className="badge badge-danger badge-counter">25</span>
					</a>

					<div
						className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
						aria-labelledby="messagesDropdown"
					>
						<h6 className="dropdown-header">Message Center</h6>
						<a className="dropdown-item d-flex align-items-center" href="/">
							<div className="dropdown-list-image mr-3">
								<img
									className="rounded-circle"
									src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
									alt="..."
								/>
								<div className="status-indicator bg-success"></div>
							</div>
							<div className="font-weight-bold">
								<div className="text-truncate">Lorem, ipsum.</div>
								<div className="small text-gray-500">pp1 - 2m</div>
							</div>
						</a>
						<a className="dropdown-item d-flex align-items-center" href="/">
							<div className="dropdown-list-image mr-3">
								<img
									className="rounded-circle"
									src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
									alt="..."
								/>
								<div className="status-indicator"></div>
							</div>
							<div>
								<div className="text-truncate">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Magni.
								</div>
								<div className="small text-gray-500">pp2 - 51m</div>
							</div>
						</a>
						<a className="dropdown-item d-flex align-items-center" href="/">
							<div className="dropdown-list-image mr-3">
								<img
									className="rounded-circle"
									src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
									alt="..."
								/>
								<div className="status-indicator bg-warning"></div>
							</div>
							<div>
								<div className="text-truncate">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Consectetur asperiores officiis dolores.
								</div>
								<div className="small text-gray-500">pp3 · 54m</div>
							</div>
						</a>
						<a
							className="dropdown-item text-center small text-gray-500"
							href="/"
						>
							Read More Messages
						</a>
					</div>
				</li>

				<div className="topbar-divider d-none d-sm-block"></div>

				<li className="nav-item dropdown no-arrow">
					<a
						className="nav-link dropdown-toggle"
						href="/"
						id="userDropdown"
						role="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						<i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
						<span className="mr-2 d-none d-lg-inline text-gray-600 small">
							Maheshbabu Jeyaraj
						</span>
					</a>

					<div
						className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
						aria-labelledby="userDropdown"
					>
						<a className="dropdown-item" href="/">
							<i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
							Profile
						</a>
						<a className="dropdown-item" href="/">
							<i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
							Settings
						</a>
						<a className="dropdown-item" href="/">
							<i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
							Activity Log
						</a>
						<div className="dropdown-divider"></div>
						<a
							className="dropdown-item"
							href="/"
							data-toggle="modal"
							data-target="#logoutModal"
						>
							<i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
							Logout
						</a>
					</div>
				</li>
			</ul>
		</nav>
	)
}
export default Navbar
