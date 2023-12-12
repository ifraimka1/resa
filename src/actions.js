// actions.js
export const ActionTypes = {
    MAKE_MOVE: "MAKE_MOVE",
    RESET_GAME: "RESET_GAME",
};
  
export const makeMove = (index) => ({
    type: ActionTypes.MAKE_MOVE,
    index: index,
});

export const resetGame = () => ({
    type: ActionTypes.RESET_GAME,
});
