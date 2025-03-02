const express = require("express");
const router = express.Router();
const languageController = require("../controller/language.controller");

/**
 * @swagger
 * tags:
 *   name: Language
 *   description: Language management
 */

/**
 * @swagger
 * /api/languages:
 *  post:
 *     tags: [Language]
 *     summary: Create a new Language
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               properties:
 *                  language:
 *                    type: string
 *                  description:
 *                    type: string
 *     responses:
 *      201:
 *        description: Language created
 *      400:
 *        description: Invalid input
 *      500:
 *        description: Server error
 */
router.post("/languages", languageController.createLanguage);

/**
 * @swagger
 * /api/languages:
 *   get:
 *     tags: [Language]
 *     summary: Get all Languages
 *     responses:
 *       200:
 *         description: List of Languages
 *       500:
 *         description: Server error
 */
router.get("/languages", languageController.getLanguages);

/**
 * @swagger
 * /api/languages/{id}:
 *  get:
 *    tags: [Language]
 *    summary: Get Language by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Language ID
 *    responses:
 *      200:
 *        description: Language details
 *      404:
 *        description: Language not found
 *      500:
 *        description: Server error
 */
router.get("/languages/:id", languageController.getLanguageById);

/**
 * @swagger
 * /api/languages/{id}:
 *   put:
 *     tags: [Language]
 *     summary: Update Language by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Language ID
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  language:
 *                    type: string
 *                  description:
 *                    type: string
 *     responses:
 *       200:
 *         description: Language updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Language not found
 *       500:
 *         description: Server Error
 */
router.put("/languages/:id", languageController.updateLanguage);

/**
 * @swagger
 * /api/languages/{id}:
 *   delete:
 *     tags: [Language]
 *     summary: Delete Language by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Language ID
 *     responses:
 *       204:
 *         description: Language deleted
 *       404:
 *         description: Language not found
 *       500:
 *         description: Server error
 */
router.delete("/languages/:id", languageController.deleteLanguage);

module.exports = router;
