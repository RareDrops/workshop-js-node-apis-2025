import {Router} from 'express';
import {
	retrieveContacts,
	retrieveContact,
	createContact,
	updateContact,
	deleteContact,
} from '../data/contacts-dao.js';

const  router = Router();

// Contacts API

router.get("/", (req, res) => {
	res.send("This is a contact router API")
})

router.get("/retrieve-contact", async (req, res) => {
	// test id: 6b0c1d4f-8d2d-4a23-b6e8-8830a0cd5c06
	const contact = await retrieveContact(req.query.id)
	res.json(contact)
})

//TODO
router.post("/create-contact", async (req, res) => {
	// we aren't doing any validation, so things might crash
	const contact = await createContact(req.body)
	return res.status(201).json(contact);
})


export default router;