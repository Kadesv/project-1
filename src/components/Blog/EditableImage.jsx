export default function EditableImage({ isEditing, value, onValueChange }) {
    return (
        isEditing ?
            <>  
                <input
                    name="image"
                    type="text"
                    value={value}
                    onChange={(e) => onValueChange(e.target.value)}
                />
            </>
            :
            <img src={value} />
    )
}