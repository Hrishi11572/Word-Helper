import express from 'express';
import AutoCorrectController from '../controllers/autoCorrect.controller.js';

const router = express.Router();

const autoCorrectController = new AutoCorrectController();

router.post('/process', (req, res) => {
    autoCorrectController.autoCorrect(req, res);
});

export default router;