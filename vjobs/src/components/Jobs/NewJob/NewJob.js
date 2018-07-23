import React, { Component } from 'react';
import './NewJob.css';

class NewJob extends Component {
    render() {
        return(
            <div className="row mt-3 mb-3">
                <div className="col-12">
                    <button type="button" className="btn btn-primary" data-toggle="collapse" data-target="#newJob" aria-expanded="false" aria-controls="newJob">
                        Nova vaga
                    </button>
                    <div className="collapse mt-3" id="newJob">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Nome</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nome da vaga" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Descrição</label>
                                <textarea type="text" rows="4" className="form-control" id="exampleInputPassword1" placeholder="Descrição"></textarea>
                            </div>
                            <div className="row">
                                <div className="form-group col-6">
                                    <label htmlFor="exampleInputPassword1">Habilidades necessárias</label>
                                    <textarea type="text" rows="4" className="form-control" id="exampleInputPassword1" placeholder="Habilidades"></textarea>
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="exampleInputPassword1">Diferenciais</label>
                                    <textarea type="text" rows="4" className="form-control" id="exampleInputPassword1" placeholder="Diferenciais"></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-6">
                                    <label htmlFor="exampleInputPassword1">Salário base</label>
                                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Salário" />
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="exampleInputPassword1">Área</label>
                                    <select className="form-control" id="exampleInputPassword1">
                                        <option value="0">Desenvolvimento</option>
                                        <option value="1">Design</option>
                                        <option value="2">Testes</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Vaga para PCD</label>
                            </div>
                            <button type="submit" className="btn btn-success float-right">Salvar</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewJob;