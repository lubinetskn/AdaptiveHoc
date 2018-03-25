import React from 'react';

import BookForm from '../BookForm/BookForm';
import enhance from '../hocs/withBookshelf';

const initialBookData = {
  firstName: '',
  lastName: '',
  pages: '',
  year: '',
};

function DesktopBookshelf({ submit }) {
  return (
    <div className="ui grid padded">
      <h2 className="centered">Add books to the mobile library</h2>
      <BookForm initialData={initialBookData} onSubmit={submit} />
    </div>
  );
}

export default enhance(DesktopBookshelf);
