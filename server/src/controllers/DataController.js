/**
 * @file Defines the GameController class.
 * @module DataController
 * @author Robin Pettersson
 */

import { GameAPIService } from '../services/GameAPIService.js'

/**
 * Encapsualates a controller.
 */
export class DataController {
  _service

  constructor(service = new GameAPIService()) {
    this._service = service
  }

  /**
   * Get data.
   *
   * @param {object} req - Request object.
   * @param {object} res - Response object.
   * @param {Function} next - Next middleware function.
   */
  async allGameData (req, res, next) {
    const gameData = await this._service.fetchAllGames()

    if (!gameData) {
      const error = new Error('No data found')
      error.status = 404
      return next(error)
    }

    res.send(gameData)
  }

    /**
   * Get data.
   *
   * @param {object} req - Request object.
   * @param {object} res - Response object.
   * @param {Function} next - Next middleware function.
   */
    async yearGameData (req, res, next) {
      const year = req.doc
      const gameData = await this._service.fetchGamesByYear(year)
  
      if (!gameData) {
        const error = new Error('No data found')
        error.status = 404
        return next(error)
      }
  
      res.send(gameData)
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
