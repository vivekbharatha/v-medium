const PromiseMiddleware = (store) => {
  return (next) => {
    return (action) => {
      if (isPromise(action.payload)) {
        action.payload.then(res => {
          action.payload = res.data;
          store.dispatch(action);
        })
        .catch(err => {
          action.error = true;
          action.payload = err.response.body;
          store.dispatch(action);
        });

        return;
      }
      next(action);
    }
  }
}

function isPromise(v) {
  return v && typeof v.then === 'function';
}

export default PromiseMiddleware;
