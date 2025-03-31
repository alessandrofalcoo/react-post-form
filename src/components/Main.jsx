import { useState } from "react"

export default function Main() {
    const [authorName, setAuthorName] = useState('')
    const [titleName, setTitleName] = useState('')
    const [postDescription, setPostDescription] = useState('')
    const [checkbox, setCheckbox] = useState(false)

    fetch('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts')
        .then(res => res.json(

        ))
        .then(data => {

        });

    function handleCheckBox(element) {
        if (element) {
            setCheckbox('Available');

        } else if (element === false) {
            setCheckbox('Unavailable');

        }
    }

    function handleFormSubmit(e) {
        e.preventDefault()
        console.log('button clicked');

    }


    return (
        <>
            <div className="container">
                <form>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label"></label>
                        <input
                            type="text"
                            className="form-control"
                            name=""
                            id=""
                            aria-describedby="helpId"
                            placeholder="Inserisci il nome dell'autore..."
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label"></label>
                        <input
                            type="text"
                            className="form-control"
                            name=""
                            id=""
                            aria-describedby="helpId"
                            placeholder="Inserisci il titolo del post..."
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="body" className="form-label"></label>
                        <textarea className="form-control" name="body" id="body" rows="6"></textarea>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="checkbox" onChange={handleCheckBox} />
                        <label className="form-check-label" htmlFor="checkbox" >{checkbox}</label>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3" onChange={handleFormSubmit} value={e => e.target.value}>Submit</button>

                </form>

            </div>

        </>
    )
}