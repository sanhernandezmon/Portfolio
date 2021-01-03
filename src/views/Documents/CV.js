import React from "react";

export default function CV() {

    return (
        <div style={{position: "absolute" ,width: "100%" , height: "100%"}}>
            <object data={require("./CV.pdf")}
                    type="application/pdf"
                    height="100%"
                    width="100%"

            >cv</object>
        </div>
    );
}
