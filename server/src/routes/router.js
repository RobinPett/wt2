/**
 * @file Main router.
 * @module router
 * @author Robin Pettersson
 */

import express from 'express'
import { router as dataRouter } from './dataRouter.js'

export const router = new express.Router()

router.use('/data', dataRouter)