import { Router } from "express";

const router = Router();

/**
 * @openapi
 * /api/v1/health:
 *   get:
 *     tags:
 *       - Health
 *     summary: Check backend health
 *     description: Checks whether the ReverbDoc AI backend is running.
 *     responses:
 *       200:
 *         description: Backend is running successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: ReverbDoc AI backend is running
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *                   example: "2026-11-05T12:00:00.000Z"
 */
router.get("/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "ReverbDoc AI backend is running",
    timestamp: new Date().toISOString(),
  });
});

export default router;