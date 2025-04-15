/**
 * @file The data router.
 * @module dataRouter
 * @author Robin Pettersson
 */
import express from 'express'
import { DataController } from '../controllers/DataController.js'

export const router = express.Router()
const controller = new DataController()

router.param('year', (req, res, next, year) => controller.getYear(req, res, next, year))

// Handle data routes
router.get('/', (req, res, next) => res.send('Data route not implemented'))
router.get('/:year', (req, res, next) => controller.yearGameData(req, res, next))
