var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  cloneObject = Object.assign({}, object, key, value)
  return cloneObject
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
