import { WithContext as ReactTags } from 'react-tag-input';
import type { Tag } from 'react-tag-input';
import { useState } from 'react';
import './tags.css'; // You MUST import this CSS

const KeyCodes = {
    comma: 188,
    enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

export default function TagInputExample() {
    const [tags, setTags] = useState<Tag[]>([
        { id: '1', text: 'react', className: '' },
        { id: '2', text: 'javascript', className: '' }
    ]);


    const handleDelete = (i: number) => {
        setTags(tags.filter((tag, index) => index !== i));
    };

    const handleAddition = (tag: Tag) => {
        setTags([...tags, { ...tag, className: '' }]);
    };


    const handleDrag = (tag: any, currPos: number, newPos: number) => {
        const newTags = [...tags];
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
        setTags(newTags);
    };

    return (
        <div>
            <ReactTags
                tags={tags}
                delimiters={delimiters}
                handleDelete={handleDelete}
                handleAddition={handleAddition}
                handleDrag={handleDrag}
                placeholder="Add new tag"
            />
        </div>
    );
}
