import { WithContext as ReactTags } from 'react-tag-input';
import type { Tag } from 'react-tag-input';
import { useState } from 'react';

const KeyCodes = {
    comma: 188,
    enter: 13,
};
const delimiters = [KeyCodes.comma, KeyCodes.enter];

export default function TagInput() {
    const [tags, setTags] = useState<Tag[]>([]);

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
        <ReactTags
            tags={tags}
            delimiters={delimiters}
            handleDelete={handleDelete}
            handleAddition={handleAddition}
            handleDrag={handleDrag}
            autoFocus={false}
            placeholder="Insert Bahasa"
            classNames={{
                selected: 'flex gap-2 flex-wrap w-full',
                tags: 'flex flex-wrap items-center gap-2 min-h-[2.25rem] w-full rounded-md border border-input bg-transparent px-3 py-2 shadow-xs transition focus-within:ring-2 focus-within:ring-ring/50 focus-within:border-ring text-sm',
                tag: 'bg-primary text-primary-foreground text-sm px-2 py-0.5 rounded-md flex gap-2',
                tagInputField: 'focus:outline-none focus:ring-0 text-sm placeholder:text-muted-foreground w-full h-full bg-transparent flex flex-1',
            }}
        />
    );
}
