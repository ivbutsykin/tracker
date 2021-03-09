const initialState = {
  trackers: []
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'CREATE': {
      const trackers = [...state.trackers, action.payload];
      return {
        ...state,
        trackers
      };
    }
    case 'REMOVE': {
      const trackers = state.trackers.filter(tracker => tracker.id !== action.payload);
      return {
        ...state,
        trackers
      };
    }

    case 'STOP': {
      const trackers = state.trackers.map(tracker => tracker.id === action.payload ? {
        ...tracker,
        isPaused: !tracker.isPaused
      } : tracker);
      return {
        ...state,
        trackers
      };
    }

    default:
      return state;
  }
}
