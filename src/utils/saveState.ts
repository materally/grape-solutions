export const saveState = (key: string, state: unknown) => {
  try {
    const serializedState = JSON.stringify(state);

    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Error while saving localstorage: " + error)
  }
}