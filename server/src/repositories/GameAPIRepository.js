/**
 * @file Communicates directly with Game API
 * @module GameAPIRepository
 * @author Robin Pettersson
 */

import { request } from 'graphql-request'

/**
 * Class to communicate with GAME API.
 */
export class GameAPIRepository {
/**
 * Initializes the Gitlab repository base.
 * @param {string} baseUrl - The base URL for the Gitlab API.
 */
  constructor(baseUrl = process.env.GAMEAPI_URL) {
    this.baseUrl = baseUrl
  }

  /**
   * Fetches data from GameAPI.
   * 
   * @param {object} query - The query.
   * @returns response
   */
  async fetch(query) { 
    try {
      const response = await request(this.baseUrl, query)

      if (!response) {
        throw new Error(`Error! Status: ${response.status} - ${response.statusText}`)
      }

      return await response
    } catch (error) {
      console.error(`Error fetching Game API data: ${error.message}`) 
      throw error
    }
  }
}
