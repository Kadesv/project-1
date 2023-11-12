import EditableImage from "./EditableImage";
import EditableTitle from "./EditableTitle";
import EditableText from "./EditableText";
import BlogButtons from "./BlogButtons";
import axios from "axios";
import { useState } from "react";


export default function BlogTemplate({ initialData, initialIsEditing, onDeleteBlog }) {

    const [isEditing, setIsEditing] = useState(initialIsEditing);

    const editMode = () => setIsEditing(true);

    const viewMode = async () =>{
    const { data } = await axios.put(`/api/blog/${initialData.id}`,{
        title,
        image,
        text,
    });

    if(!data.error) {
        setTitle(data.title);
        setImage(data.image);
        setText(data.text);
    }

    setIsEditing(false);
};

    const [title, setTitle] = useState(initialData.title);
    const [image, setImage] = useState(initialData.image);
    const [text, setText] = useState(initialData.text);

    return (
        <div className="template">
            <EditableTitle
                value={title}
                isEditing={isEditing}
                onValueChange={setTitle}
            />
            <EditableImage
                value={image}
                isEditing={isEditing}
                onValueChange={setImage}
            />
            <EditableText
                value={text}
                isEditing={isEditing}
                onValueChange={setText}
            />
            <div>
                <BlogButtons
                    isEditing={isEditing}
                    onEditClick={editMode}
                    onSaveClick={viewMode}
                    onDeleteBlog={onDeleteBlog}
                />
            </div>
        </div>
    );

}