import React from 'react';

import withForm from '../hocs/withForm';

function BookForm({ data, onSubmit, onChange }) {
  const { firstName, lastName, pages, year } = data;

  return (
    <form className="ui form" onSubmit={onSubmit}>
      <div className="field">
        <label>Book Name</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={onChange}
        />
      </div>
      <div className="field">
        <label>Author Name</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={onChange}
        />
      </div>
      <div className="field">
        <label>Number of pages</label>
        <input type="number" name="pages" value={pages} onChange={onChange} />
      </div>
      <div className="field">
        <label>Year</label>
        <input type="date" name="year" value={year} onChange={onChange} />
      </div>
      <button className="ui button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default withForm(BookForm);
