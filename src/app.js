import React from 'react';

import NoteEditor from './components/NoteEditor';
import NotesGrid from './components/NotesGrid';
import Search from './components/Search';

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        };
    }

    componentDidMount() {
        const localNotes = JSON.parse(localStorage.getItem('notes'));
        if (localNotes) {
            this.setState({ notes: localNotes });
        }
    }

    componentDidUpdate() {
        this._updateLocalStorage();
    }

    handleNoteDelete(note) {
        const noteId = note.id;
        const newNotes = this.state.notes.filter(function(note) {
            return note.id !== noteId;
        });
        this.setState({ notes: newNotes });
    }


    handleNoteAdd(newNote) {
        const newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        this.setState({ notes: newNotes });
    }

    handleNoteSearch(event){
        const searchQuery = event.target.value.toLowerCase();
        const displayedNotes = this.state.notes.filter(function(el) {
            const searchValue = el.text.toLowerCase();
            return searchValue.indexOf(searchQuery);
        });
        this.setState({notes: displayedNotes});
    }

    render() {
        return (
            <div className="notes-app">
                <h2 className="app-header">NotesApp</h2>
                <NoteEditor onNoteAdd={this.handleNoteAdd.bind(this)}/>
                <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete.bind(this)} />
            </div>
        );
    }

    _updateLocalStorage() {
        let notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes);
    }
}