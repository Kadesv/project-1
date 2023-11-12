export default function EditableText({value, isEditing, onValueChange}) {
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
            <p>{value}</p>
    )
}