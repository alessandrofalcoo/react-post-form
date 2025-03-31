import { useState } from "react"

export default function Main() {
    const [post, setPost] = useState()
    const [authorName, setAuthorName] = useState('')
    const [titleName, setTitleName] = useState('')
    const [postDescription, setPostDescription] = useState('')
    const [checkbox, setCheckbox] = useState(false)

    function handleCheckBox(e) {
        if (e.target.type === 'checkbox') {
            setCheckbox(e.target.checked)
        } else {
            setCheckbox(e.target.value)
        }
    }


    function handleFormSubmit(e) {
        e.preventDefault()
        console.log('button clicked');

        fetch('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts', {
            method: 'POST',
            headers: { 'Content-type ': 'application/json' },
            body: JSON.stringify(post)
        })

            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json()
            })
            .then(data => {

            });
    }









    return (
        <>
            <div className="container">
                <form method="POST" onSubmit={handleFormSubmit}>
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
                        <textarea className="form-control" name="body" id="body" rows="6" placeholder="Body"></textarea>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="checkbox" onChange={handleCheckBox} checked={checkbox} />
                        <label className="form-check-label" htmlFor="checkbox" ></label>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Submit</button>

                </form>

            </div>

        </>
    )
}