// @desc create a drink
// @route POST /api/v1/drinks
// @access private
export function createDrink(req, res) {
  res.send('create drink')
}

// @desc delete a drink
// @route DELETE /api/v1/drinks/:id
// @access private
export function deleteDrink(req, res) {
  res.send('delete drink')
}

// @desc get all drinks
// @route GET /api/v1/drinks
// @access private
export function getAllDrinks(req, res) {
  res.send('get all drinks')
}

// @desc update a drink
// @route PATCH /api/v1/drinks/:id
// @access private
export function updateDrink(req, res) {
  res.send('update drink')
}

// @desc show user drink stats
// @route GET /api/v1/drinks/stats
// @access private
export function showInfo(req, res) {
  res.send('show info')
}
