import React from "react";
import Entries from "./Entries";

function Create(katiMagiko) {
    return (
        <Entries
            key={katiMagiko.key}
            title={katiMagiko.title}
            content={katiMagiko.content}
        />
    )
}

export default Create;