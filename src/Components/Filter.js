import React from "react";
import MOCK_DATA from "./MOCK_DATA.json";
import Child from "./table";
import './filter.css'

const con = [
	{
		id: "",
		operator: "",
		filter: null,
	},
];


class Filter extends React.Component {
	state = {
		id: "",
		operator: "",
		filter: null,
		data: MOCK_DATA,
		clicked: false,
		stringFilter: {
			id: "",
		
			operator: "",
			filter: null,
		},
		integerFilter: {
			id: "",
			operator: "",
			filter: null,
		},
		boolFilter: {
			id: "",
			operator: "",
			filter: null,
		},
		followingFilter: {
			id: "",
			operator: "",
			filter: null,
		},
	};

	handleChangeIntegerId = (e) => {
		this.setState({ id: e.target.value });
		this.setState((prevState) => ({
			integerFilter: {
				...prevState.integerFilter, 
				id: e.target.value, 
			},
		}));
	};
	handleChangeIntegerOperator = (e) => {
		this.setState({ operator: e.target.value });
		this.setState((prevState) => ({
			integerFilter: {
				
				...prevState.integerFilter, 
				operator: e.target.value, 
			},
		}));
	};
	handleChangeIntegerFilter = (e) => {
		this.setState({ filter: e.target.value });
		this.setState((prevState) => ({
			integerFilter: {
				
				...prevState.integerFilter, 
				filter: e.target.value, 
			},
		}));
	};

	handleChangeBoolId = (e) => {
		this.setState({ id: e.target.value });
		this.setState((prevState) => ({
			boolFilter: {
				
				...prevState.boolFilter, 
				id: e.target.value,
			},
		}));
	};
	handleChangeBoolOperator = (e) => {
		this.setState({ operator: e.target.value });
		this.setState((prevState) => ({
			boolFilter: {
		
				...prevState.boolFilter,
				operator: e.target.value, 			},
		}));
	};
	handleChangeBoolFilter = (e) => {
		this.setState({ filter: e.target.value });
		this.setState((prevState) => ({
			boolFilter: {
				
				...prevState.boolFilter, 
				filter: e.target.value, 
			},
		}));
	};
	handleChangeStringId = (e) => {
		this.setState({ id: e.target.value });
		this.setState((prevState) => ({
			stringFilter: {
				...prevState.stringFilter, 
				id: e.target.value, 
			},
		}));
	};

	handleChangeStringOperator = (e) => {
		this.setState({ operator: e.target.value });
		this.setState((prevState) => ({
			stringFilter: {
				...prevState.stringFilter, 
				operator: e.target.value, 
			},
		}));
	};
	handleChangeStringFilter = (e) => {
		this.setState({ filter: e.target.value });
		this.setState((prevState) => ({
			stringFilter: {
				
				...prevState.stringFilter,
				filter: e.target.value, 
			},
		}));
	};

	handleSearch = (e) => {
		con.splice(0, con.length);
		con.push(this.state.stringFilter);
		con.push(this.state.integerFilter);
		con.push(this.state.boolFilter);
		console.log(con);
	};

	render() {
		return (
			<div>
				<span>
					<select name="filters" id="id" onChange={this.handleChangeIntegerId}>
						<option value="">Add Filter</option>
						<option value="location">Location</option>
						<option value="followers">Followers</option>
						<option value="verified">Verified</option>
					</select>
				</span>

				{this.state.integerFilter.id === "followers" ? (
					<span>
						<select
							name=""
							id="operator"
							onChange={this.handleChangeIntegerOperator}
						>
							<option value="">Select</option>
							<option value="GTE">{" >= "}</option>
							<option value="LTE">{" <= "}</option>
						</select>
					</span>
				) : this.state.integerFilter.id === "location" ? (
					<span>
						<select
							name=""
							id="operator1"
							onChange={this.handleChangeStringOperator}
						>
							<option value="">Select</option>
							<option value="CONTAINS">{" contains "}</option>
						</select>
					</span>
				) : this.state.integerFilter.id === "verified" ? (
					<span>
						<select
							name=""
							id="operator2"
							onChange={this.handleChangeBoolOperator}
						>
							<option value="">Select</option>
							<option value="EQUALS">{" equals "}</option>
						</select>
					</span>
				) : null}

				<span>
					{this.state.integerFilter.id === "verified" ? (
						<select onChange={this.handleChangeIntegerFilter}>
							<option value="">Select</option>
							<option value="verified">Verified</option>
							<option value="notverified">Not Verified</option>
						</select>
					) : (
						<input
							value={this.state.integerFilter.filter}
							onChange={this.handleChangeIntegerFilter}
						/>
					)}
				</span>

				<span>
					<select name="filters1" id="id1" onChange={this.handleChangeStringId}>
						<option value="">Add Filter</option>
						<option value="location">Location</option>
						<option value="followers">Followers</option>
						<option value="verified">Verified</option>
					</select>
				</span>

				{this.state.stringFilter.id === "followers" ? (
					<span>
						<select
							name=""
							id="operator"
							onChange={this.handleChangeIntegerOperator}
						>
							<option value="">Select</option>
							<option value="GTE">{" >= "}</option>
							<option value="LTE">{" <= "}</option>
						</select>
					</span>
				) : this.state.stringFilter.id === "location" ? (
					<span>
						<select
							name=""
							id="operator1"
							onChange={this.handleChangeStringOperator}
						>
							<option value="">Select</option>
							<option value="CONTAINS">{" contains "}</option>
						</select>
					</span>
				) : this.state.stringFilter.id === "verified" ? (
					<span>
						<select
							name=""
							id="operator2"
							onChange={this.handleChangeBoolOperator}
						>
							<option value="">Select</option>
							<option value="EQUALS">{" equals "}</option>
						</select>
					</span>
				) : null}

				<span>
					{this.state.stringFilter.id === "verified" ? (
						<select onChange={this.handleChangeStringFilter}>
							<option value="">Select</option>
							<option value="verified">Verified</option>
							<option value="notverified">Not Verified</option>
						</select>
					) : (
						<input
							value={this.state.stringFilter.filter}
							onChange={this.handleChangeStringFilter}
						/>
					)}
				</span>

				<span>
					<select name="filters2" id="id2" onChange={this.handleChangeBoolId}>
						<option value="">Add Filter</option>
						<option value="location">Location</option>
						<option value="followers">Followers</option>
						<option value="verified">Verified</option>
					</select>
				</span>

				{this.state.boolFilter.id === "followers" ? (
					<span>
						<select
							name=""
							id="operator"
							onChange={this.handleChangeIntegerOperator}
						>
							<option value="">Select</option>
							<option value="GTE">{" >= "}</option>
							<option value="LTE">{" <= "}</option>
						</select>
					</span>
				) : this.state.boolFilter.id === "location" ? (
					<span>
						<select
							name=""
							id="operator1"
							onChange={this.handleChangeStringOperator}
						>
							<option value="">Select</option>
							<option value="CONTAINS">{" contains "}</option>
						</select>
					</span>
				) : this.state.boolFilter.id === "verified" ? (
					<span>
						<select
							name=""
							id="operator2"
							onChange={this.handleChangeBoolOperator}
						>
							<option value="">Select</option>
							<option value="EQUALS">{" equals "}</option>
						</select>
					</span>
				) : null}

				<span>
					{this.state.boolFilter.id === "verified" ? (
						<select onChange={this.handleChangeBoolFilter}>
							<option value="">Select</option>
							<option value="verified">Verified</option>
							<option value="notverified">Not Verified</option>
						</select>
					) : (
						<input
							value={this.state.boolFilter.filter}
							onChange={this.handleChangeBoolFilter}
						/>
					)}
				</span>

				
				<button onClick={this.handleSearch}>Search</button>

				<Child con={con} />
			</div>
		);
	}
}

export default Filter;
