import React, {useRef, useState} from 'react';
import JoditEditor from 'jodit-react';

const TextEditor = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    return (
        <>
            <label htmlFor="Product-Description" style={{color: "#666666", display: "flex"}}>Product
                Description</label>
            <JoditEditor
                ref={editor}
                value={content}
                tabIndex={1}
                onBlur={newContent => setContent(newContent)}
                onChange={newContent => setContent(newContent)}
            />
        </>
    );
};

export default TextEditor;