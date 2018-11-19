var recipes = {}
var cloneObject = {}

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign(cloneObject, object, key, value)
  return cloneObject
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
