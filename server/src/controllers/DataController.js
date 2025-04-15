/**
 * @file Defines the GameController class.
 * @module DataController
 * @author Robin Pettersson
 */

/**
 * Encapsualates a controller.
 */
export class DataController {
  /**
   * Get data.
   *
   * @param {object} req - Request object.
   * @param {object} res - Response object.
   * @param {Function} next - Next middleware function.
   */
  data (req, res, next) {
    const year = req.doc
    console.log(year)
    res.send(year)
  }

  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @param {Function} next 
   * @param {Number} year 
   * @returns 
   */
  async getYear(req, res, next, year) {

    const yearAsNumber = parseInt(year, 10)

    if (yearAsNumber < 1900 || yearAsNumber > 9999) {
      const error = new Error('Year must be between 1900 and 9999')
      error.status = 400
      return next(error)
    }

    req.doc = yearAsNumber
    next()
  }
}
