import React from 'react';


const List = ({ people, dateSelect }) => {
    return (
        <>
            {
                people.map((person) => {
                    // console.log(person);
                    const { id, name, dob, comments } = person;
                    const dob1 = new Date(dob).getFullYear();
                    const dob2 = new Date(dateSelect).getFullYear();
                    const age = dob2 - dob1;
                    // const age = new Date().getFullYear();
                    // console.log(dob1);
                    return (
                        <article key={id} className="person ba ph3 mb2 black grow ">
                            {/* <img src={image} alt={name} /> */}
                            <div className="db center black link dim">
                                <h2 className="">{name}</h2>
                                <h4>{age} years</h4>
                                <p>{comments}</p>
                            </div>
                        </article>
                    )
                })
            }
        </>
    )
}
export default List;