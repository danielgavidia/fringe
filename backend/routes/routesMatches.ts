import express from "express";
import { getAllMatches, getMatchById } from "../controllers/controllerMatch";

const router = express.Router();

router.get("/matches", getAllMatches);
router.get("/matches/:id", getMatchById);
export default router;
