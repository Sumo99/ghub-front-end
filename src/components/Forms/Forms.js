import React from 'react'

export const LoginForm = props => (
  <form onSubmit={e => props.handleSubmit(e, props.dispatch)}>
    <div className="Box-body">
      <fieldset className="my-2">
        <label className="d-block mb-2" htmlFor="username">
          Username
        </label>
        <input
          className="form-control width-full mb-2"
          id="username"
          name="username"
          type="text"
          placeholder="username"
          aria-label="username"
          onChange={props.handleInput}
          value={props.username}
        />
      </fieldset>
      <fieldset className="mb-2">
        <label className="d-block mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="form-control width-full mb-2"
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          aria-label="Password"
          onChange={props.handleInput}
          value={props.password}
        />
      </fieldset>
    </div>
    <div className="Box-footer d-flex flex-justify-between flex-items-center py-2">
      <button
        type="button"
        className="btn btn-small"
        onClick={props.handleFormSwitch}
      >
        Register
      </button>

      <div>
        <button
          type="button"
          className="btn btn-small btn-danger mx-1"
        >
          Cancel
        </button>
        <button
          className="btn btn-small btn-primary mx-1"
          type="submit"
          onClick={e => props.handleSubmit(e, props.dispatch)}
        >
          Sign In
        </button>
      </div>
    </div>
  </form>
)

export const RegisterForm = props => (
  <form onSubmit={e => props.handleSubmit(e, props.dispatch)}>
    <div className="Box-body">
      <fieldset className="my-2">
        <label className="d-block mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="form-control width-full mb-2"
          id="email"
          name="email"
          type="text"
          placeholder="email"
          aria-label="email"
          onChange={props.handleInput}
          value={props.email}
        />
      </fieldset>
      <fieldset className="my-2">
        <label className="d-block mb-2" htmlFor="username">
          Username
        </label>
        <input
          className="form-control width-full mb-2"
          id="username"
          name="username"
          type="text"
          placeholder="username"
          aria-label="username"
          onChange={props.handleInput}
          value={props.username}
        />
      </fieldset>
      <fieldset className="mb-2">
        <label className="d-block mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="form-control width-full mb-2"
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          aria-label="Password"
          onChange={props.handleInput}
          value={props.password}
        />
      </fieldset>
    </div>
    <div className="Box-footer d-flex flex-justify-between flex-items-center py-2">
      <button
        type="button"
        className="btn btn-small"
        onClick={props.handleFormSwitch}
      >
        Sign In
      </button>

      <div>
        <button
          type="button"
          className="btn btn-small btn-danger mx-1"
        >
          Cancel
        </button>
        <button
          className="btn btn-small btn-primary mx-1"
          type="submit"
          onClick={e => props.handleSubmit(e, props.dispatch)}
        >
          Register
        </button>
      </div>
    </div>
  </form>
)