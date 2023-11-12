export default function EditableImage({ isEditing, value, onValueChange }) {
    return (
        isEditing ?
            <>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onValueChange(e.target.value)}
                />
            </>
            :
            <img src={value} />
    )
}