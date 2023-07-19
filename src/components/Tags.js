function Tags({tags}){
    // Display tags of logment in logment page
    return(
        <div>
            {tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
            ))}
        </div>
    )
}
export default Tags