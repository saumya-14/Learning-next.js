"use client"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

const NavigationTestPage=()=>{
    //client side navigation
    const router=useRouter()
    const pathname= usePathname();
    const searchParams =useSearchParams()

    const q=searchParams.get("q");
    console.log(q);
    console.log(pathname);
     
    const handleClick=()=>{
        
     console.log("clicked");
     router.push("/");

    }
    return(
        <div>
        <Link href="/" prefetch={false}>
        Click here
        </Link>
        <button onClick={handleClick}>Write and Redirect</button>
        </div>
    )
}
export default NavigationTestPage