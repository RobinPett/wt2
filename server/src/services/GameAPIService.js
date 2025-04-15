/**
 * @file Class for Game API services
 * @module GameAPIService
 * @author Robin Pettersson
 */

import { GameAPIRepository } from '../repositories/GameAPIRepository.js'
import { gql } from 'graphql-request'

/**
 * Class representing the Game API Service
 */
export class GameAPIService {
  /**
   * The repository.
   */
  _repository

  constructor(repository = new GameAPIRepository()) {
    this._repository = repository
  }

  /**
   * Fetches data from the Game API.
   * @param {object} query - The query to be sent to the API.
   * @returns {Promise<object>} - The response from the API.
   */
  async fetch(query) {
    try {
      return await this._repository.fetch(query)
    } catch (error) {
      console.error(`Error in GameAPIService: ${error.message}`)
      throw error
    }
  }

  async fetchAllGames() {
    const query = gql`
      query {
        games {
          title
          release_year
          platforms {
            name
          }
          genres {
            name
          }
          developers {
            name
          }
          rating {
            text
          }
        }
      }
    `
    try {
      return await this._repository.fetch(query)
    } catch (error) {
      console.error(`Error in GameAPIService: ${error.message}`)
      throw error
    }
  }


  /**
   * Fetches games by year from the Game API.
   * @param {Number} year 
   * @returns 
   */
  async fetchGamesByYear(year) {
    const query = gql`
      query {
        games(release_year: ${year}) {
          title
          release_year
          platforms {
            name
          }
          genres {
            name
          }
          developers {
            name
          }
          rating {
            text
          }
        }
      } 
    `
    try {
      return await this._repository.fetch(query)
    } catch (error) {
      console.error(`Error in GameAPIService: ${error.message}`)
      throw error
    }
  }
}