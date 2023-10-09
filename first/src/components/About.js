import React from 'react'

function About(props) {

    //const name = props.name
    //const age = props.age

    const {name, age, myObj} = props


    //console.log(name)
    //console.log(age)
    console.log(myObj)
     

    return (
        <>
            <div className="w3-container w3-padding-32" id="about">
                <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
                    About
                </h3>
                <p>
                    {name} {age} {myObj.title + ' ' + myObj.company }
                </p>
            </div>
            <div className="w3-row-padding w3-grayscale">
                <div className="w3-col l3 m6 w3-margin-bottom">
                    <img src="https://www.w3schools.com/w3images/team2.jpg" alt="John" style={{ width: "100%" }} />
                    <h3>John Doe</h3>
                    <p className="w3-opacity">CEO &amp; Founder</p>
                    <p>
                        Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales
                        pellentesque elementum.
                    </p>
                    <p>
                        <button className="w3-button w3-light-grey w3-block">Contact</button>
                    </p>
                </div>
                <div className="w3-col l3 m6 w3-margin-bottom">
                    <img src="https://www.w3schools.com/w3images/team1.jpg" alt="Jane" style={{ width: "100%" }} />
                    <h3>Jane Doe</h3>
                    <p className="w3-opacity">Architect</p>
                    <p>
                        Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales
                        pellentesque elementum.
                    </p>
                    <p>
                        <button className="w3-button w3-light-grey w3-block">Contact</button>
                    </p>
                </div>
                <div className="w3-col l3 m6 w3-margin-bottom">
                    <img src="https://www.w3schools.com/w3images/team3.jpg" alt="Mike" style={{ width: "100%" }} />
                    <h3>Mike Ross</h3>
                    <p className="w3-opacity">Architect</p>
                    <p>
                        Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales
                        pellentesque elementum.
                    </p>
                    <p>
                        <button className="w3-button w3-light-grey w3-block">Contact</button>
                    </p>
                </div>
                <div className="w3-col l3 m6 w3-margin-bottom">
                    <img src="https://www.w3schools.com/w3images/team4.jpg" alt="Dan" style={{ width: "100%" }} />
                    <h3>Dan Star</h3>
                    <p className="w3-opacity">Architect</p>
                    <p>
                        Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales
                        pellentesque elementum.
                    </p>
                    <p>
                        <button className="w3-button w3-light-grey w3-block">Contact</button>
                    </p>
                </div>
            </div>
            {/* Contact Section */}
            <div className="w3-container w3-padding-32" id="contact">
                <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
                    Contact
                </h3>
                <p>Lets get in touch and talk about your next project.</p>
                <form action="/action_page.php" target="_blank">
                    <input
                        className="w3-input w3-border"
                        type="text"
                        placeholder="Name"
                        required=""
                        name="Name"
                    />
                    <input
                        className="w3-input w3-section w3-border"
                        type="text"
                        placeholder="Email"
                        required=""
                        name="Email"
                    />
                    <input
                        className="w3-input w3-section w3-border"
                        type="text"
                        placeholder="Subject"
                        required=""
                        name="Subject"
                    />
                    <input
                        className="w3-input w3-section w3-border"
                        type="text"
                        placeholder="Comment"
                        required=""
                        name="Comment"
                    />
                    <button className="w3-button w3-black w3-section" type="submit">
                        <i className="fa fa-paper-plane" /> SEND MESSAGE
                    </button>
                </form>
            </div>
        </>

    )
}

export default About