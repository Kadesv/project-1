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
            <div className="textWrapper">
            <p>{value}</p>
            </div>
    )
}