export default {
  updateCount(state, {num, param}) {
    state.count = param;
  },
  changeDateStyle(state, { undefine, dateFormat }) {
    state.date = dateFormat;
  }
};
