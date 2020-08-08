import { connect } from 'react-redux';
import { increment, decrement, reset, load } from '../../store/actions/counter';
import Counter from '../components/counter/counter';
import { RootState } from '../../store';

const mapStateToProps = (state: RootState) => ({
  counter: state.counter,
});

const mapDispatchProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  reset: () => dispatch(reset()),
  load: () => dispatch(load()),
});

export default connect(mapStateToProps, mapDispatchProps)(Counter);
