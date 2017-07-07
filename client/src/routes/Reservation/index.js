import {connect} from 'react-redux'
import {
  compose,
  withHandlers,
  lifecycle,
  branch,
  renderComponent
} from 'recompose'

import Reservation from './Reservation'
import Loader from '../../components/Loader'
import {getReservation} from '../../modules/Reservation/actions'
import {
  handleEditButton,
  handleDeleteButton
} from '../../modules/Reservation/handlers'

export default compose(
  connect(state => ({
    Reservations: state.Reservation.data
  })),
  withHandlers({
    handleEditButton,
    handleDeleteButton
  }),
  lifecycle({
    componentDidMount() {
      this.props.dispatch(getReservation())
    }
  }),
  branch(props => !props.Reservations, renderComponent(Loader))
)(Reservation)
