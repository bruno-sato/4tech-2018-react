import React, { Component } from 'react';
import Job from './Job/Job.js';
import NewJob from './NewJob/NewJob.js'
import './Jobs.css';

import jobs from '../../assets/vagas.js';

class Jobs extends Component {

	state = {
		jobs: []
	}

	constructor() {
		super();
	}
	
	componentDidMount() {
		this.setState({ jobs: jobs });
	}

	jobRemoveHandler = (id, name) => {
			window.confirm(`Deseja realmente excluir a vaga "${name}"?`);
	}

	jobEditHandler = (id, name) => {
		window.alert(`Vaga "${name}" foi editado com sucesso!`);
	}

	render() {
		return (
			<div className="container">
				<NewJob />
				<div className="row">
					{this.state.jobs.map(job => {
						return (
							<div className="col-sm-12 col-md-6 col-lg-4 mb-3">
								<Job 
								name={ job.name } 
								description={ job.description } 
								salary={ job.salary } 
								area={ job.area } 
								removeHandler={ () => this.jobRemoveHandler(job.id, job.name) } 
								editHandler={ () => this.jobEditHandler(job.id, job.name) }
								/>
							</div>                            
						)
					})}
				</div>
			</div>
		)
	}
}

export default Jobs;