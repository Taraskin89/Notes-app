const COLORS = [
    {
        id:1,
        color:"#ff897d"
    },
    {
        id:2,
        color:'#ffd27a'
    },
    {
        id:3,
        color:'#ffff85'
    },
    {
        id:4,
        color:'#cfd8dd'
    },
    {
        id:5,
        color:'#7cd7ff'
    },
    {
        id:6,
        color:'#a4ffeb'
    },
    {
        id:7,
        color:'#cbff8a'
    }
];

import React from 'react';
import ReactDOM from 'react-dom';

import SelectColor from './SelectColor';

export default class NoteEditor extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            col: COLORS,
            text: '',
            nCol: '',
            isToggleOn: false
        };
    }

    handleTextChange(event) {
        const text = event.target.value;
        this.setState({ text: text });
    }

    // handleColorChange(event){
    //     const colors = event.target.value;
    //     this.setState({color: colors});
    //     console.log(event.target.value);
    // }

    handleNoteAdd() {
        const newNote = {
            text: this.state.text,
            color: this.state.nCol,
            id: Date.now()
        };

        this.props.onNoteAdd(newNote);
        this.setState({
            text: '',
            nCol: this.state.color
        });
    }


    onAddColorNote(event){
        const col = event.target.attributes.id.value;
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn,
            nCol: col

        }));
    }

    render() {
        return (
            <div className='note-editor'>
                <textarea
                    placeholder='Enter your note here...'
                    rows={5}
                    className='textarea'
                    value={ this.state.text }
                    onChange={ ::this.handleTextChange }
                />
                <div className='colors'>
                    <ul>
                        {
                            this.state.col.map((el)=>{
                                return <SelectColor
                                    key = {el.id}
                                    colors = { el.color }
                                    onAddColor = { ::this.onAddColorNote }
                                />
                            })
                        }
                    </ul>
                </div>

                <button className='add-button' onClick={ ::this.handleNoteAdd }>Add</button>
            </div>
        );
    }
}
