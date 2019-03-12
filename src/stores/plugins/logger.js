export default store => {
  store.subscribe(mutation => {
    if (mutation.type === "userInfo/failed") {
      console.log(`ERROR_LOG: ${JSON.stringify(mutation)}`, );
    }
  })
}