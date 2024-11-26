function skillsMember() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('skillsMember');
      resolve('skillsMember');
    }, 1000);
  });
}