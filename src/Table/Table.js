import { useState, useEffect } from 'react'

export default function Datatable() {
	const [data, setData] = useState(null)
	useEffect(() => {
		fetch('https://62245c133af069a0f9b4080b.mockapi.io/tabledata')
			.then((response) => response.json())
			.then((dat) => {
				setData(dat)
			})
	}, [])

	return <>{data ? <Table data={data} /> : <h1>Loading...</h1>}</>
}

function Table({ data }) {
	return (
		<div class="container-fluid">
			<h1 class="h3 mb-2 text-gray-800">Tables</h1>

			<div class="card shadow mb-4">
				<div class="card-header py-3">
					<h6 class="m-0 font-weight-bold text-primary">Users List</h6>
				</div>
				<div class="card-body">
					<div class="table-responsive">
						<table
							class="table table-bordered"
							id="dataTable"
							width="100%"
							cellspacing="0"
						>
							<thead>
								<tr>
									<th>Name</th>
									<th>Position</th>
									<th>Office</th>
									<th>Start date</th>
									<th>Salary</th>
								</tr>
							</thead>

							<tbody>
								{data.map((item) => (
									<Cell item={item} />
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}

function Cell({ item }) {
	return (
		<tr>
			<td>{item.Name}</td>
			<td>{item.Position}</td>
			<td>{item.Office}</td>
			<td>{item.StartDate}</td>
			<td>${item.Salary}</td>
		</tr>
	)
}
