function Aswinilearn() {

   const singleClick  =(e) => {console.log(e)}
    // function singleClick(e) {
    //     console.log("hi aswini")
    // }

    return(
        <div>
            <button onClick={(e) => {singleClick(e)}}>click me</button>
        </div>
    );
}

export default Aswinilearn;