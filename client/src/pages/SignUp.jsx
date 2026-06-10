import {Link} from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='p-3 mx-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type="text" placeholder="Username" id="username" className='bg-slate-100 p-3 rounded-lg'
        />
          <input type="email" placeholder="Email" id="email" className='bg-slate-100 p-3 rounded-lg'
        />
          <input type="password" placeholder="Password" id="password" className='bg-slate-100 p-3 rounded-lg'
        />
        <button className='bg-slate-700 text-white uppercase rounded-lg p-3 hover:opacity-95 disabled:opacity-80'>
          sign up
        </button>
         </form>
         <div className='flex gap-2 my-5'>
          <p>
            Have an account? </p>
           <Link to='/sign-in'>
            <span className='text-blue-500'> SignIn</span>
           </Link>
         </div>
    </div>
  )
}
