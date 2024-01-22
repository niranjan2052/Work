import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
import './App.css'

const App = () => {
    const [addItem, setAddItem] = useState([]);

    const addNote =(note)=>{     
         setAddItem((prevData) => {
            return [...prevData,note];
         });

         console.log(note);
    };

    const onDelete = (id) => {
        setAddItem((oldData)=>
            oldData.filter((curData, index) => {
                return index !==id;
            })
        );
    };

    return(
        <>
            <Header />
            <CreateNote passNote ={addNote}/>
            <div className="notes">
            { addItem.map((val, index) =>{
                return ( <Note 
                    key={index}
                    id={index}
                    title={val.title}
                    content ={val.content}
                    deleteItem = {onDelete}
                />
                );
            })}
            </div>
            <Footer />
        </>
    );
};

export default App;