//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import react from "react";
import reactDOM from "react-dom";


const name = "Zohaib Rashid";

const date = new Date();
const currentYear = date.getFullYear();

reactDOM.render(<div>
<p>Created by {name}</p>
<p>Copyright {currentYear}</p>
</div>, document.getElementById("root"));

