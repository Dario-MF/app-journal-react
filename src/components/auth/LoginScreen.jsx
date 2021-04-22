import React from 'react'
import { Link } from 'react-router-dom'

const LoginScreen = () => {
    return (
        <>
            <h3 className='auth__title'>Login</h3>
            <form>
                <input
                    type="text"
                    placeholder='Email'
                    name='email'
                    className='auth__input'
                />
                <input
                    type="password"
                    placeholder='Password'
                    name='password'
                    className='auth__input'
                />
                <button
                    type='submit'
                >
                    Login
                </button>
                <hr />
                <div className='auth__social-networks'>
                    <p>Login Social Networks</p>
                    <div className="google-btn">
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link to='/auth/register'>

                </Link>
            </form>
        </>
    )
}

export default LoginScreen
