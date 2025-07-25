import Note from "../models/Note.js";
import mongoose from 'mongoose';

export async function getAllNotes(req, res){
    try {
        const notes = await Note.find();
         res.status(200).json(notes)
    } catch (error) {
        console.error("Error in getAllNotes controller", error)
        res.status(500).json({message: "Internal server error"})
    }
 }

export async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found!" });
    res.json(note);
  } catch (error) {
    console.error("Error in getNoteById controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

 export async function postNote(req, res) {
    const {title, content } = req.body;
    if(!title || !content) {
        return res.status(400).json({sucess:false, message: "Please provide all fields"});
    }
     try {
        
        const newNote = new Note({title, content})
        await newNote.save();
        res.status(201).json({message: "note created successfully"})
     } catch (error) {
        console.error("Error in postNote controller", error)
        res.status(500).json({message: "Internal server error"})
     }
    
 }

 export async function updateNote(req, res) {
    const { id } = req.params;
    const note = req.body
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({sucess: false, message:"Invalid Note ID"})
    }
    try {
       const updatedNote =  await Note.findByIdAndUpdate(id, note, {new:true})
       res.status(201).json({sucess:true, data: updatedNote});
    } catch (error) {
        res.status(500).json({sucess:false, message:"Server Error"});
    }
}

export async function deleteNote(req, res) {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({sucess: false, message:"Invalid Note ID"})
    }
    try {
        await Note.findByIdAndDelete(id)
        res.status(201).json({sucess:true, message: "note deleted"});
    } catch (error) {
        res.status(500).json({sucess:false, message:"Server Error"});
    }
}