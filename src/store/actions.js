import { CREATE, REMOVE, PAUSE, RESUME } from './types';

export function create(name) {
  return {
    type: CREATE,
    payload: name
  };
}

export function pause(id) {
  return {
    type: PAUSE,
    payload: id
  };
}

export function resume(id) {
  return {
    type: RESUME,
    payload: id
  };
}

export function remove(id) {
  return {
    type: REMOVE,
    payload: id
  };
}
