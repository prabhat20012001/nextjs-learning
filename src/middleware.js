import { NextResponse } from "next/server";

function middleware(request) {
    // Uncomment this block if you want to restrict redirection only for specific paths
    // if (request.nextUrl.pathname !== "/login") {
    //    return NextResponse.redirect("/login");
    // }

    // Redirect all requests to /login
    return NextResponse.redirect(new URL("/login",request.url))
    // return NextResponse.redirect("http://localhost:3000/login");
}

export default middleware;

export const config = {
    matcher: ["/contact/:path", "/studentlist/:path"]
};
