import React, { useState } from 'react';

function Login() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Login</button>
      {isOpen && (
        <div className="login-modal">
          <form>
            <label>
              Email:
              <input type="email" name="email" />
            </label>
            <br />
            <label>
              Password:
              <input type="password" name="password" />
            </label>
            <br />
            <button type="submit">Submit</button>
            <button onClick={() => setIsOpen(false)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login
