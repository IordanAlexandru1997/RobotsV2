
const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input type='search' placeholder='Bot' className="pa3 ba b--green bg-lightest-blue" onChange={searchChange}></input>
        </div>
    )
}

export default SearchBox;