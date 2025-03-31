import { useState } from "react"

export default function Main() {
    const [authorName, setAuthorName] = useState('')
    const [titleName, setTitleName] = useState('')
    const [postDescription, setPostDescription] = useState('')
    const [checkbox, setCheckbox] = useState(false)

    return (
        <>
            <div className="container">
                <form>
                    <div class="mb-3">
                        <label for="" class="form-label"></label>
                        <input
                            type="text"
                            class="form-control"
                            name=""
                            id=""
                            aria-describedby="helpId"
                            placeholder="Inserisci il nome dell'autore..."
                        />
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label"></label>
                        <input
                            type="text"
                            class="form-control"
                            name=""
                            id=""
                            aria-describedby="helpId"
                            placeholder="Inserisci il titolo del post..."
                        />
                    </div>
                    <div class="mb-3">
                        <label for="body" class="form-label"></label>
                        <textarea class="form-control" name="body" id="body" rows="6"></textarea>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="checkbox" id="checkbox" />
                        <label class="form-check-label" for="checkbox" ></label>
                    </div>

                </form>

            </div>

        </>
    )
}