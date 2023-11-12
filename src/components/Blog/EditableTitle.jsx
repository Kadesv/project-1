export default function EditableTitle({ value, isEditing, onValueChange }) {
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
            <h2>{value}</h2>
    )
}