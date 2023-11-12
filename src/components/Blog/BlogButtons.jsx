export default function BlogButtons(props){
    return(
        props.isEditing ?
        <div>
            <button onClick={props.onSaveClick}>Save</button>
        </div>
        :
        <div className="buttonWrapper">
            <button onClick={props.onDeleteBlog}>Delete</button>
            <button onClick={props.onEditClick}>Edit</button>
        </div>
    )
}