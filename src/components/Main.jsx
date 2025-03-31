import { useState } from "react"

export default function Main() {
    const [post, setPost] = useState({
        author: '',
        title: '',
        body: '',
        public: false
    })

    function handleCheckBox(e) {
        if (e.target.type === 'checkbox') {

            setPost(e.target.checked)
            console.log(post);
        } else {
            setPost(e.target.value)

        }
    }

    function handleFormSubmit(e) {
        e.preventDefault()
        console.log('button clicked');

        fetch("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        })


            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json()
            })
            .then(data => {
                console.log('Success: ', data);

            })
            .catch(error => {
                console.error('Error:', error);
            });

    }

    return (
        <>
            <div className="container">
                <form method="POST" onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name=""
                            id=""
                            aria-describedby="helpId"
                            placeholder="Inserisci il nome dell'autore..."
                            required
/*                             value={authorName}
                            onChange={(e) => (e.target.value)}
 */                        />

                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name=""
                            id=""
                            aria-describedby="helpId"
                            placeholder="Inserisci il titolo del post..."
                            required
/*                             value={titleName}
                            onChange={(e) => (e.target.value)}
 */                        />
                    </div>
                    <div className="mb-3">
                        <textarea
                            className="form-control"
                            name="body"
                            id="body"
                            rows="6"
                            placeholder="Body"
                            required
                        /*                             value={postDescription}
                                                    onChange={(e) => (e.target.value)}
                         */
                        >

                        </textarea>
                    </div>

                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="checkbox"
                            checked={handleCheckBox}
                            onChange={handleCheckBox}

                        />
                        <label className="form-check-label" htmlFor="checkbox" ></label>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Submit</button>

                </form>

            </div>

        </>
    )
}