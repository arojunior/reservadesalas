import React from 'react'

const List = props => {
  const listagem = props.reservas
    ? props.reservas.map(reserva => (
        <tr key={reserva._id}>
          <td>{reserva.descricao}</td>
          <td>{reserva.responsavel}</td>
          <td>{reserva.local}</td>
          <td>{reserva.sala}</td>
          <td>{reserva.data_inicio}</td>
          <td>
            <button
              className="btn btn-info"
              onClick={() => props.editReservas(reserva)}>
              Editar
            </button>
            {' '}
            <button
              className="btn btn-warning"
              onClick={() => props.deleteReservas(reserva)}>
              Excluir
            </button>
          </td>
        </tr>
      ))
    : null
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Desc.</th>
          <th>Resp.</th>
          <th>Local</th>
          <th>Sala</th>
          <th>Data</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {listagem}
      </tbody>
    </table>
  )
}

export default List
