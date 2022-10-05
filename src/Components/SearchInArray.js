import React, { useState } from 'react'
const searchArray = ["Newton", "School", "Newton School", "React", "Preact", "Node", "Mongoose", "Angular", "Vue", "Apple", "Microsoft", "Netflix", "Meta"]
function SearchinArray() {
    const [Text, SetText] = useState();
    let getValue = (e) => {
        SetText(e.target.value);

    }

    return (
        <>
            <input type="text" onChange={getValue} value={Text} /><br /> <br />
            
            {
                searchArray.filter((value) => {
                    if (Text === "") {
                        return Text;
                    } else if (value.toLocaleLowerCase().includes(Text)) {
                        return value;
                    }
                }).map((value) => {
                        return (
                        <ul><li>{value}</li></ul>
                        )
                    })
            }

        </>
    )
}

export default SearchinArray
