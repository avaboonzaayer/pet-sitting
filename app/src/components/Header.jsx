const Header = () => {
  return (
    <div className="header">
      <h1 className="header__title">
        Watch My Pet
      </h1>

      <div className="header__right-btns">
        <label className="header__sort-by">
          Sort By:
          <select className="header__sort-by__drop-down">
            <option className="header__sort-by__drop-down-option">
              Lowest Rates
            </option>
            <option className="header__sort-by__drop-down-option">
              Location
            </option>
            <option className="header__sort-by__drop-down-option">
              Best Reviewed
            </option>
          </select>
        </label>

        <button className="header__sign-up">
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default Header;
