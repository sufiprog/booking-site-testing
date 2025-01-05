import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;

  const isPublicPath =
    path === "/auth/login" ||
    path === "/auth/signup" ||
    path === "/verifyemail";

  const token = request.cookies.get("token")?.value || "";

  const homeRoute = path === "/";

  if (homeRoute && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
}

export const config = {
  matcher: ["/", "/auth/login", "/auth/signup", "/dashboard", "/verifyemail"],
};
