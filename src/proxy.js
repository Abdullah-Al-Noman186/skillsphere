import { NextResponse } from 'next/server'
import { auth } from "@/lib/auth"; // path to your auth file
import { headers } from "next/headers";
 
// This function can be marked `async` if using `await` inside
export  async function proxy(request) {

    const session = await auth.api.getSession({headers: await headers()})

    if(!session?.user){
       return NextResponse.redirect(new URL('/login', request.url))
    }



  
}
 
// Alternatively, you can use a default export:
// export default function proxy(request) { ... }
 
export const config = {
  matcher: ['/my-profile', '/my-profile/update', '/courses/:path*'],
}