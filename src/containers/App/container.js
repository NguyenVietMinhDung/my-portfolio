import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { activateNavigationItem } from '../../actions';
import App from './App';

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
