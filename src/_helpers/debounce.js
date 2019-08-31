export const debounce = (func, wait, immediate = false) => {
  let timeout;
  return (e, ...args) => {
    const later = () => {
      timeout = null;
      if (!immediate) {
        func.apply(this, [e, ...args]);
      }
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(this, [e, ...args]);
    }
  };
}
