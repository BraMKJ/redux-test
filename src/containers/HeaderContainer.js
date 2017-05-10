import { connect } from 'react-redux'
import { toggleMenu } from '../actions/ui'
import Header from '../components/Header'

const mapStateToProps = (state) => {
  return {
    menuIsActive: state.ui.menu.isActive
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMenuToggleClick: () => {
      dispatch(toggleMenu())
    }
  }
}

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderContainer