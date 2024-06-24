import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
    // publicRoutes: ['/', '/public'],
    // publicRoutes: ["/"],
    // debug: true
    publicRoutes: ['/']

});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};