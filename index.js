var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  obj = Object.assign({}, object, {key : value})
  return obj
}

function u