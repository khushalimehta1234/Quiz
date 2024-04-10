import { Router } from "express";
const router = Router();
/** import controller */
import * as  controller from '../controllers/controller.js';
/**Question Routes */
router.get('/questions',controller.getQuestions)
router.post('/questions',controller.insertQuestionsAndAnswers)

router.route('/questions')
    .get(controller.getQuestions)/**GET request */
    .post(controller.insertQuestionsAndAnswers) /**POST request */
    .delete(controller.dropQuestions) /**Delete request */

router.route('/result')
         .get(controller.getResult)
         .post(controller.storeResult)
         .delete(controller.dropResult)
export default router;
