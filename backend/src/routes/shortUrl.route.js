import express from 'express';
import {   createShortUrl } from '../controller/short-url-controller.js';

const router = express.Router();

router.post("/", createShortUrl)
// router.post("/", createShortAuth)
export default router;