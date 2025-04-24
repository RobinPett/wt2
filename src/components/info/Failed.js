/**
 * Displays when something has failed.
 */
const Failed = ({ onFailed }) => {
    return (
        <div className="cc0-fail">
            <BiSolidError size={50}/>
            <h3>A problem occured while processing your request</h3>
            <button onClick={onFailed} className="cc0-button">Try again</button>
        </div>
    )
}
 
export default Failed;