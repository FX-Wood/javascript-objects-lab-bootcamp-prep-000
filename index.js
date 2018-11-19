var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var cloneObject = Object.assign(cloneObject, object, key, value)
  return cloneObject
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
