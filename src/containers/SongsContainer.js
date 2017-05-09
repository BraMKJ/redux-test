import { connect } from 'react-redux'
import Songs from '../components/Songs'

const mapStateToProps = ({ songs }) => {
  return { songs }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Songs)