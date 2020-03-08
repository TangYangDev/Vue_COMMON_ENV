//异步修改数据，dispatch触发
export default {
  updateDateStyleAsync(store, callData) {
    setTimeout(() => {
      store.commit("changeDateStyle", {
        dateFormat: callData.date
      });
    }, callData.time);
  }
};
