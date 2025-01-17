import { URL } from "../model/url.js";
import shortid from "shortid";

export const shorturl = async (req, res) => {
    try {
        const { original } = req.body;
        if (!original) {
            return res.status(400).json({ message: "Original URL is required" });
        }
        const sid = shortid.generate();
        await URL.create({
            shortid: sid,
            redirect: original,
            visited: []
        });
        console.log(sid);
        return res.status(200).json({ message: "Successfully created short URL", shortid: sid });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const search = async (req, res) => {
    try {
        const {short}  = req.params; 
        console.log(short);
        if (!short) {
            return res.status(400).json({ message: "Short ID is required" });
        }
        const finds = await URL.findOne({ shortid: short });
        if (finds) {
            
            return res.redirect(finds.redirect);
        } else {
            return res.status(404).json({ message: "No such URL exists" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
