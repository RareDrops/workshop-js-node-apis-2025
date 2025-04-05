import {Router} from "express"


const router = Router();

router.get("/test1", (req, res) => {
	const name = req.query.name;

	res.send(`Your name is ${name}`)
})

export default router;