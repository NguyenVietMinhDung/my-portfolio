import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../../actions';
import App from './App';

const { actionCreators: { activateNavigationItem } } = actions;

const mapStateToProps = state => ({
  activatedIndex: state.activatedIndex,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  { activateNavigationItem },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
