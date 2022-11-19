import { useState } from "react"

const AddMovie = (props) => {
    //desestruturando o objeto props e colocando addNewMovie em uma variável
    const { addNewMovie } = props

    //Criamos um estado para cada input do formulário
    const [title, setTitle] = useState("")
    const [director, setDirector] = useState("")
    const [IMDBRating, setIMDBRating] = useState(5)
    //Inputs de checkbox são booleanos
    const [hasOscars, setHasOscars] = useState(true)

    //Criamos as funções que conectam o evento onChange com os estados
    const handleTitleInput = e => setTitle(e.target.value)
    const handleDirectorInput = e => setDirector(e.target.value)
    const handleIMDBRatingInput = e => setIMDBRating(e.target.value)
    //Checkbox não tem value, mas checked
    const handleHasOscarsInput = e => setHasOscars(e.target.checked)

    //Criamos a função que cuidará do envio do formulário
    const handleSubmit = e => {
        //Prevenindo o comportamento padrão do formulário de recarregar a página
        e.preventDefault()

        //Criar o objeto que guardará os dados do novo filme 
        let newMovie = { title, director, IMDBRating, hasOscars }
        addNewMovie(newMovie)

        setTitle("")
        setDirector("")
        setIMDBRating(5)
        setHasOscars(true)
    }

    return (
        <div className="AddMovie">
            <h4>Add a Movie</h4>

            <form onSubmit={handleSubmit} >
                <label>Title: </label>
                <input 
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleTitleInput} />

                <label>Director: </label>
                <input 
                    type="text"
                    name="director"
                    value={director}
                    onChange={handleDirectorInput} />

                <label>IMDB Rating: </label>
                <input 
                    type="number"
                    name="IMDBRating"
                    value={IMDBRating}
                    onChange={handleIMDBRatingInput} />

                <label>Won Oscars:</label>
                <input 
                    type="checkbox"
                    name="hasOscars"
                    checked={hasOscars}
                    onChange={handleHasOscarsInput} />

                <button type="submit">Add a Movie</button>
            </form>
        </div>
    )
}

export default AddMovie