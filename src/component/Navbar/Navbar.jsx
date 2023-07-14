import  Link  from 'next/link'
const Navbar = () =>{
    return(
        <div className="flex flex- h-300">
            <div className="flex-1">
                <Link href='/'>Home</Link>
            </div>
            <div className="flex flex-1  justify-space-between">
                <Link href='/login'>Login</Link>
            </div>

        </div>
    )
}

export default Navbar