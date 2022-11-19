const Header = ({ showForm, setSort }) => {
  const handleSortBy = (e) => {
    setSort(e.target.value);
  }

  return (
    <div className="header">
      <h1 className="header__title">
        Watch My Pet
      </h1>

      <div className="header__right-btns">
        <label className="header__sort-by">
          Sort By:
          <select className="header__sort-by__drop-down" onChange={handleSortBy}>
            <option className="header__sort-by__drop-down-option" value="rating">
              Best Reviewed
            </option>
            <option className="header__sort-by__drop-down-option" value="rate">
              Lowest Rates
            </option>
          </select>
        </label>

        <button className="header__sign-up" onClick={showForm}>
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default Header;
