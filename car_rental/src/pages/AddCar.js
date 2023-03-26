
import React from "react";
//  import "../Styles/AddCar.css";
function AddCars() {
    return (<>
        {/* <div className="header">
            <nav>logo</nav>
            <nav>logout</nav>
        </div> */}
        <h3 >ADD CAR DETAILS</h3>
        <div className="dividor">
            <div className="sec1">
                <div className="CN">
                    <label for="name">Car Name</label>
                    <input type="text" id="name" placeholder="Name" ></input>
                </div>
                <div className="dev1">
                    <div className="devv">
                        <label for="cartype">TYPE</label>
                        <select id="cartype" >
                            <option value="manual">manual</option>
                            <option value="driver">driver</option>
                        </select>
                    </div>

                    <div className="devv">
                        <label for="model">model</label>
                        <select id="model" >
                            <option value="s15">s15</option>
                            <option value="514">514</option>
                        </select>
                    </div>
                </div>

                <div className="dev2">
                    <div className="">
                        <label for="milage">Milage</label>
                        <select id="milage" >
                            <option value="50">50</option>
                            <option value="40">40</option>
                            <option value="30">30</option>
                        </select>
                    </div>

                    <div className="">
                        <label for="perkm">per KM</label>
                        <input type="number" id="perkm" placeholder="0000"></input>
                        
                    </div>
                </div>
                
                <div className="dev3">
                    <div className="">
                        <label for="doa">Available from</label>
                        <input type="date" id="doa"></input>
                    </div>

                    <div className="">
                        <label for="dt">Available till</label>
                        <input type="date" id="dt" ></input>
                        
                    </div>
                </div>
            </div>
            <div className="sec2">
                <div>
                   <label>images</label><button>ADD</button>
                   <ui></ui>
                   <div className="space"></div>
                    <br></br>
                </div>
                <div>
                    <label for="cd">car details</label>
                    <textarea id="cd" rows="4" colums="100"></textarea>
                </div>
                <div>
                    <label for="details"> details</label>
                    <textarea id="details" rows="4" colums="100"></textarea>
                </div>
            </div>
        </div>


    </>

    )
}


export default AddCars;