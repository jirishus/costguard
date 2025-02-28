import React, { useState, useEffect } from 'react';

function EmailForm() {
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1); // ✅ Track current page
  const [totalPages, setTotalPages] = useState(1); // ✅ Track total pages

  const USERS_PER_PAGE = 3; // ✅ Number of users per page

  async function fetchUsers(currentPage) {
    setLoading(true);
    setError('');

    try {
      // ✅ Simulate pagination using _limit and _page (JSONPlaceholder supports it)
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?_limit=${USERS_PER_PAGE}&_page=${currentPage}`
      );

      if (!response.ok) throw new Error('Network error');
      const data = await response.json();
      
      setUsers(data); // ✅ Update users state

      // JSONPlaceholder does not return total pages, so we assume 10 users in total.
      setTotalPages(Math.ceil(10 / USERS_PER_PAGE)); 

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function handleSignup(evt) {
    evt.preventDefault();
    console.log('handle signup with:', email);
    fetchUsers(page); // ✅ Fetch users on form submit
  }

  // ✅ Fetch new users when page changes
  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  return (
    <form onSubmit={handleSignup}>
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Subscribe</button>

      {loading && <p>Loading users...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      {/* Pagination Buttons */}
      <div>
        <button
          disabled={page === 1} // Disable if on first page
          onClick={() => setPage((prev) => prev - 1)}
        >
          Previous
        </button>

        <span> Page {page} of {totalPages} </span>

        <button
          disabled={page === totalPages} // Disable if on last page
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </form>
  );
}

export default EmailForm;
