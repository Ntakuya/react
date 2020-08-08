import { Route } from 'react-router';
import Counter from '@containers/redux/counter/counter';

export const routes = [
  {
    path: '/redux',
    component: Counter,
  },
  {
    path: '/redux/counter',
    component: Counter,
  },
];

export default routes;
