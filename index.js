var recipes = {}
var newObj = {}

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign(newObj, object, key, value)
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
