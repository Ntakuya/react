const VisibilityFilter = {
  setFilter: 'visibilityFilter/SET_VISIBILITY_FILTER',
} as const;

type VisibilityFilter = typeof VisibilityFilter[keyof typeof VisibilityFilter];

export default VisibilityFilter;
