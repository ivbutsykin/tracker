import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

import { CREATE, REMOVE, RESUME, PAUSE } from './types';

const initialState = {
  trackers: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE: {
      return {
        ...state,
        trackers: [
          {
            id: uuidv4(),
            name: action.payload.trim() || `Timer from ${moment().format('HH:mm:ss')}`,
            isPaused: false,
            intervals: [{
              startedAt: Date.now(),
              pausedAt: null,
            }],
          },
          ...state.trackers,
        ]
      };
    }
    case REMOVE: {
      const trackers = state.trackers.filter(tracker => tracker.id !== action.payload);
      return {
        ...state,
        trackers
      };
    }

    case PAUSE: {
      const trackers = state.trackers.map(tracker => {
        if (tracker.id === action.payload) {
          const intervals = [...tracker.intervals];

          intervals[intervals.length - 1].pausedAt = Date.now();

          return {
            ...tracker,
            isPaused: true,
            intervals,
          }
        }

        return tracker;
      });
      return {
        ...state,
        trackers
      };
    }

    case RESUME: {
      const trackers = state.trackers.map(tracker => {
        if (tracker.id === action.payload) {
          return {
            ...tracker,
            isPaused: false,
            intervals: [
              ...tracker.intervals,
              {
                startedAt: Date.now(),
                pausedAt: null,
              }
            ],
          }
        }

        return tracker;
      });

      return {
        ...state,
        trackers
      };
    }

    default:
      return state;
  }
}
