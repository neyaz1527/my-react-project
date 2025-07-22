import React,  { use, useState } from "react"

function MyComponent() {

    const [car, setCar] = useState({year: 2024,
                         maker: "Mustang",
                          Model: "carbanour" });

    function handleYearChange(event) {
        setCar(c=>({...car, year:event.target.value}));
    }
    function handleMakerchange(event) {
        setCar(c=>({...car, maker:event.target.value}))
    }
    function handleModelChange(event) {
        setCar(c=>({...car, Model: event.target.value}))
    }
    return(
        <div>
            <p>your favoiite car is {car.year} {car.maker} {car.Model}</p>

            <input type="number" value={car.year} onChange={handleYearChange}></input><br/>
            <input type="text" value={car.maker} onChange={handleMakerchange}></input><br/>
            <input type="text" value={car.Model} onChange={handleModelChange}></input>
             <input type="text" value={car.Model} onChange={handleModelChange}></input>
        </div>
    );
}

export default MyComponent;
