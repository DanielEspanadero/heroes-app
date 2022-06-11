import { useForm } from "../../hooks/useForm"

export const SearchScreen = () => {

    const [formValues, handleInputChange] = useForm({
        searchText: ''
    })

    const {searchText} = formValues

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(searchText);
    }

    return (
        <>
            <h1>Búsquedas</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Buscar</h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input
                            type='text'
                            placeholder="Buscar un héroe"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        >
                        </input>
                        <button
                            className="btn btn-outline-prymary mt-1"
                            type="submit"
                        >
                            Buscar...
                        </button>

                    </form>
                </div>
            </div>
        </>
    )
}
