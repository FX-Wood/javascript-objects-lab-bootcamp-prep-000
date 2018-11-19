var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}