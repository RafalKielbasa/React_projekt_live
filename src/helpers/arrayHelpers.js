export const onlySting = (array) =>
  array.map((object) => {
    for (const key in object) {
      if (typeof object[key] !== 'string') {
        delete object[key]
      }
    }
    return object
  })
