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
  function onRef(instance) {
    console.log(instance);
  }

  return (
    <div className="ui grid  padded">
      <div className="row ui block header centered">Goodreads</div>
      <div className="column eight wide">
        <h3>Add books to the library</h3>
        <BookForm initialData={initialBookData} onSubmit={submit} ref={onRef} />
      </div>

      <div className="column eight wide">
        <h3>Goodreads Choice Awards</h3>
        <p>Announcing the BEST BOOKS of 2017!</p>
        <div>
          <a href="https://www.goodreads.com/choiceawards/best-books-2017">
            <img
              src="https://s.gr-assets.com/assets/award/2017/choice-logo-medium-284616a5fbdf1442f127ca334987ccad.png"
              alt="Goodreads Choice Awards"
            />
          </a>
        </div>
        <a
          className="ui red button"
          href="https://www.goodreads.com/choiceawards/best-books-2017"
        >
          See the Winners
        </a>
      </div>
    </div>
  );
}

export default enhance(DesktopBookshelf);
