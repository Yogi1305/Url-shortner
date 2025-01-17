import express from "express"
import { search, shorturl } from "../controller/logic.js";

const router=express.Router();

router.route("/shortid").post(shorturl);
router.route("/:short").get(search);
export default router