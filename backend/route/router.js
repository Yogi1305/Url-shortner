import express from "express"
import { search, shorturl } from "../controller/logic.js";

const router=express.Router();

router.route("/shortid").post(shorturl);
router.route("/").get(search);
export default router