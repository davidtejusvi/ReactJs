import React, { useState } from 'react';
import './fileExplorer.css'
import explorer from './data';
import Folder from './Folder';
import useTraversTree from './useTraversTree';

const FileExplorer = () => {
    const [fileExplorer, setFileExplorer] = useState(explorer)
    const { insertNode, updateNode, deleteNode } = useTraversTree()
    const handleInsertNode = (folderId, item, isFolder) => {
        const finalTree = insertNode(fileExplorer, folderId, item, isFolder)
        setFileExplorer(finalTree)
    }
    const handleEditNode = (folderId, item) => {
        setFileExplorer(prev =>
            updateNode(prev, folderId, item)
        );
    }

    const handleDelete = (folderId) => {
        setFileExplorer(prev =>
            deleteNode(prev, folderId)
        );
    }
    return (
        <div>
            <Folder
                fileExplorer={fileExplorer}
                handleInsertNode={handleInsertNode}
                handleEditNode={handleEditNode}
                handleDelete={handleDelete}
            />
        </div>
    )
}

export default FileExplorer