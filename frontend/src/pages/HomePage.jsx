import React from 'react'
import NavBar from '../components/NavBar'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import toast from 'react-hot-toast';
import NoteCard from '../components/NoteCard';
import api from '../lib/axios';
import NotesNotFound from '../components/NotesNotFound';

const Homepage = () => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNotes = async () => {
            try {               
                const res = await api.get("/notes");
                setNotes(res.data)
            } catch (error) {
                console.log("error fetching notes")
                toast.error("failed to load notes")
            } finally {
                setLoading(false)
            }
        }
        fetchNotes()
    },[])
    return (
        <div className='min-h-screen'>
            <NavBar />
            <div className='max-w-7xl mx-auto p-4 mt6'>
                {loading && <div className='text-center text-primary py-10'>Loading notes....</div>}

                {notes.length === 0 && <NotesNotFound />}
                {notes.length > 0 && (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {
                            notes.map(note => (
                                <NoteCard key={note._id} note={note} setNotes={setNotes}/>
                            ))
                        }
                    </div>
                )}
            </div>
        </div>
    )
}

export default Homepage
