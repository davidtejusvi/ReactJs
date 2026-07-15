import React from 'react'

const useTraversTree = () => {
    const insertNode = (tree, folderId, item, isFolder) => {
        if (tree.id === folderId && tree.isFolder) {
            tree.items.unshift({
                id: new Date().getTime(),
                name: item,
                isFolder,
                items: []
            })
            return tree;
        }
        let latestNode
        latestNode = tree.items.map(obj => {
            return insertNode(obj, folderId, item, isFolder)
        })
        return { ...tree, items: latestNode }

    }

    const updateNode = (tree, folderId, name) => {
        if (tree.id === folderId) {
            return {
                ...tree,
                name
            };
        }

        // Recursive case: search through child items
        return {
            ...tree,
            items: tree.items.map(child =>
                updateNode(child, folderId, name)
            )
        };
    }
    const deleteNode = (tree, folderId) => {
        if (tree.id === folderId) {
            return null;
        }

        // Filter out deleted children
        const newItems = tree.items
            .map(child => deleteNode(child, folderId))
            .filter(child => child !== null);

        return {
            ...tree,
            items: newItems
        };
    }
    return { insertNode, updateNode, deleteNode }

}

export default useTraversTree