export function playPosition (x, y, turn, values) {
    return{
        type: 'PLAY_POSITION',
        x: x,
        y: y,
        turn: turn,
        values: values
    };
}

export function reset() {
    return { type: 'RESET' };
}

export function fetchDataAction (moves, turn, values) {
  return{
      type: 'FETCH_DATA',
      moves: moves,
      turn: turn,
      values: values
  };
}
