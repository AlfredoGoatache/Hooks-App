import React from "react";

const Small = React.memo ( ({value}:any)=>{

    console.log('ASASASAS') 

    return(
        <small>{value}</small>
    );
}
);
export{
    Small
}