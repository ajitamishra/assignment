import React, { useState } from "react";
import MOCK_DATA from "./MOCK_DATA.json";
import "./table.css";

function Child(props) {
	const [document, setDocument] = useState([]);
	const [res, setRes] = useState([]);

	const data = MOCK_DATA;
	const columns = [
		"Name",
		"ScreeName",
		"Followers",
		"Following",
		"Location",
		"Verified",
	];

	React.useEffect(() => {
		const res = [];
		// eslint-disable-next-line array-callback-return
		const filteredData = data.filter((item) => {
			var val = true;
			props.con.forEach((doc) => {
				if (doc.id === "followers") {
					if (doc.operator === "GTE") {
						if (item.followers >= doc.filter && val) val = true;
						else val = false;
					} else if (doc.operator === "LTE") {
						if (item.followers <= doc.filter && val) val = true;
						else val = false;
					}
				}
				if (doc.id === "location") {
					if (item.location.includes(doc.filter) && val) val = true;
					else val = false;
				}
				if (doc.id === "verified") {
					if (
						item.verified === (doc.filter === "verified" ? true : false) &&
						val
					) {
						val = true;
						
					} else val = false;
				}
			});
			if (val) res.push(item);
		});

		setRes(res);
		setDocument(filteredData);
	}, [data,document,props.con]);

	return (
		<div>
			<table>
				<thead>
					{columns.map((column) => (
						<th>{column}</th>
					))}
				</thead>

				<tbody>
					{res.map((user) => (
						<tr>
							<td>{user.name}</td>
							<td>{user.sname}</td>
							<td>{user.followers}</td>
							<td>{user.following}</td>
							<td>{user.location}</td>
							<td>{user.verified === true ? "Verified" : "Not Verified"}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Child;
