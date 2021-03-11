import moment from 'moment';

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

    case 'TICK': {
      const trackers = state.trackers.map(tracker => (tracker.id === action.payload && tracker.isPaused === false) ? {
        ...tracker,
        startedAt: moment(tracker.startedAt)
          .add(1, 'seconds')
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
