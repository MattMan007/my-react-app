
function Button(){
    
    const styles = {
        backgroundColor: "lightskyblue",
        color: "#535bf2",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
    }

    const handleClick = (e) => e.target.textContent = "OUCH!";

    return(
        <button style={styles} onClick = {(e) => handleClick(e)}>Click Me!</button>
    );
}

export default Button