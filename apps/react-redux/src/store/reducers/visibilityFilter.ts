import { VisilibilityFilters } from '../actions';
import VisibilityFilter from '../action-types/visibility-fiter';

/**
 * @todo to use const assertion
 */
const initialState = VisilibilityFilters.SHOW_ALL;

const visibilityFilter = (
  state = initialState,
  action: {
    type: VisibilityFilter;
    payload: {
      filter: any;
    };
  }
) => {
  const { payload, type } = action;
  switch (type) {
    case VisibilityFilter.setFilter:
      return payload.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
