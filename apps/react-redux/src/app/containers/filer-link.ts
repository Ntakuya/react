import { connect } from 'react-redux';
import { setVisibilityFilter } from '../../store/actions';
import Link from '../components/link/link';
import { RootState } from '../../store';

const mapStateToProps = (state: RootState, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
