import React from 'react';
import './Job.css';

import developImg from '../../../assets/images/developer.png';
import designImg from '../../../assets/images/designer.png';
import testerImg from '../../../assets/images/tester.png';

const job = (props) => {

  let img = null;

  switch(props.area) {
    case 'Desenvolvimento':
      img = developImg;
      break;
    case 'Testes':
      img = testerImg;
      break;
    case 'Design': 
      img = designImg;
      break;
    default:
      img = null;
      break;
  }

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img className="card-img-top" src={ img } alt="Developer card"></img>
      <div className="card-body">
        <h5 className="card-title">{ props.name }</h5>
        <p className="card-text">
          { props.description }
        </p>
        <span><strong>Salario base:</strong></span>
        <p>
          R$ { props.salary }
        </p>
        <button className="btn btn-warning icon mr-1" onClick={ props.editHandler }><i className="far fa-edit"></i> Excluir</button>
        <button className="btn btn-danger icon" onClick={ props.removeHandler }><i className="far fa-trash-alt"></i> Editar</button>
      </div>
    </div>
  )
}

export default job;
