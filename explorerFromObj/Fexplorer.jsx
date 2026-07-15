import React, { useState } from 'react'
import explorer from './explorer';
import './styles.css'

const Fexplorer = () => {
    // const [exp, setExp] = useState(explorer)
    return (
        <div className="file-explorer">
            {explorer.map((item) => (
                <ExplorerItem key={item.id} item={item} />
            ))}
        </div>
    );
};

const ExplorerItem = ({ item }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        if (item.isFolder) {
            setIsExpanded(!isExpanded);
        }
    };

    return (
        <div className="explorer-item">
            <div
                className={`item-name ${item.isFolder ? 'folder' : 'file'}`}
                onClick={handleExpand}
            >
                {item.isFolder ? (isExpanded ? '📂' : '📁') : '📄'} {item.name}
            </div>

            {isExpanded && item.items && item.items.length > 0 && (
                <div className="nested-items">
                    {item.items.map((nestedItem) => (
                        <ExplorerItem key={nestedItem.id} item={nestedItem} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Fexplorer