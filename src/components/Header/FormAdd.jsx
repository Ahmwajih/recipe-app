import './StyleHeader.css'

function FormAdd() {
    return (
        <div className="search">
            <div>
                <h1>Food App</h1>
            </div>
            <div className='searchbar'>
                <form action="form" className='formHeader'>

                    <input type="text" placeholder="Search" id='input' />
                    <button id='btn'>Search</button>
                    <select name="food" id="food">
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="dinner">dinner</option>
                        <option value="Snack">Snack</option>
                        <option value="Teatime">Teatime</option>

                    </select>
                </form>

            </div>
        </div>
    )
}

export default FormAdd