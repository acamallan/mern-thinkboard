import express from 'express'
import { deleteNote, getAllNotes, postNote, updateNote, getNoteById } from '../controllers/notesController.js';

const router = express.Router();

router.get("/", getAllNotes)
router.post("/",postNote)
router.put("/:id", updateNote)
router.get("/:id", getNoteById);
router.delete("/:id", deleteNote)
export default router;