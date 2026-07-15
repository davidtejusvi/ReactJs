import React, { useState } from 'react';
import './fileExplorer.css';


const Folder = ({ fileExplorer, handleInsertNode, handleEditNode, handleDelete }) => {
    const [expand, setExpand] = useState(false);
    const [name, setName] = useState('')
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: null,
        isEditing: false
    })

    console.log(fileExplorer)
    const handleAddFolder = (e, isFolder) => {
        e.stopPropagation()
        setExpand(!expand)
        setShowInput({
            visible: true,
            isFolder
        })
    }
    const onAddFolder = (e) => {
        if (e.keyCode === 13 && name) {
            if (showInput.isEditing) {
                handleEditNode(fileExplorer.id, name)
            } else {
                handleInsertNode(fileExplorer.id, name, showInput.isFolder)
            }
            setShowInput({ ...showInput, visible: false })
            setName('');
        }
    }

    const onEditing = (e) => {
        e.stopPropagation()
        setName(fileExplorer.name);
        setShowInput({
            visible: true,
            isFolder: fileExplorer.isFolder,
            isEditing: true
        })
    }
    const onDelete = (e) => {
        e.stopPropagation()
        handleDelete(fileExplorer.id)

    }

    return (
        <div style={{ marginLeft: '15px', marginTop: '5px' }}>
            <div
                onClick={() => setExpand(!expand)}
                style={{ cursor: 'pointer', fontWeight: fileExplorer.isFolder ? 'bold' : 'normal', display: "flex" }}
            >
                {fileExplorer.isFolder ? (expand ? '📂 ' : '📁 ') : '📄 '}
                {fileExplorer.name}
                <div style={{ marginLeft: 5 }}>
                    <button onClick={(e) => handleAddFolder(e, true)}>📂 Folder + </button>
                    <button onClick={(e) => handleAddFolder(e, false)}>📄 File +</button>
                    <button onClick={(e) => onEditing(e, true)}>Edit </button>
                    {
                        fileExplorer.name === "root" ? "" : <button onClick={(e) => onDelete(e)}>Delete </button>
                    }

                </div>
            </div>

            {
                showInput.visible && showInput.isEditing && (
                    <div className='inputContainer'>
                        <span>{showInput.isFolder ? '📂 ' : '📄 '}</span>
                        <input
                            type='text'
                            className='input'
                            autoFocus
                            onBlur={() => setShowInput(!showInput)}
                            onKeyDown={onAddFolder}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                )
            }
            <div style={{ display: expand ? 'block' : 'none' }}>
                {fileExplorer.isFolder && fileExplorer.items.map((exp) => (
                    <Folder
                        key={exp.id}
                        fileExplorer={exp}
                        handleInsertNode={handleInsertNode}
                        handleEditNode={handleEditNode}
                        handleDelete={handleDelete} />
                ))}
            </div>
        </div>
    );
};

export default Folder;