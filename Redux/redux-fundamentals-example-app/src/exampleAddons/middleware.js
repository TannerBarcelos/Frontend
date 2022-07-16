// Learn - https://redux.js.org/tutorials/fundamentals/part-4-store#:~:text=Redux%20middleware%20are%20written%20as%20a%20series%20of%20three%20nested%20functions
export const logger = (storeAPI) => (next) => (action) => {
  const logger = {
    timestamp: Date.now(),
  };
  console.log(logger);
  return next(action);
};
