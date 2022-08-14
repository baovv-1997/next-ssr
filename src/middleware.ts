import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCookie } from "cookies-next";
import axiosInstant from "./services/axios";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const jwt = getCookie("jwt");
  console.log("middleware===", jwt);
  if (jwt) {
    (axiosInstant.defaults as any).headers["x-access-token"] = `Bearer ${jwt}`;
  }
  return NextResponse.rewrite(request.url);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/",
};
