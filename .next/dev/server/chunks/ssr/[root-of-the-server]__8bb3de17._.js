module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/dev/portfolio-2.1/src/contexts/AboutContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutContext",
    ()=>AboutContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
const AboutContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({});
}),
"[project]/dev/portfolio-2.1/src/sections/Navbar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2f$modules$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/index.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const Logo = '/logo-fkodama.svg';
const Menu = '/images/menu-hamburguer.svg';
const Close = '/images/card-icon-close-white.svg';
const Navbar = ()=>{
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isActive, setIsActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleClickClose = ()=>{
        setIsOpen(!isOpen);
        setIsActive(false);
    };
    const hangleClickOpen = ()=>{
        setIsOpen(!isOpen);
        setIsActive(true);
    };
    const handleClickOnLink = ()=>{
        setIsActive(false);
        setIsOpen(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
    // console.log(isOpen, isActive);
    }, [
        isActive,
        isOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "section navbar",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2f$modules$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                    to: "hero",
                    spy: true,
                    smooth: true,
                    offset: 0,
                    duration: 500,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        className: "navbar__logo",
                        alt: "logo fkodama",
                        src: Logo
                    }, void 0, false, {
                        fileName: "[project]/dev/portfolio-2.1/src/sections/Navbar.js",
                        lineNumber: 38,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/dev/portfolio-2.1/src/sections/Navbar.js",
                    lineNumber: 37,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "navbar__toggle",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: "navbar__menu",
                            style: {
                                display: isOpen ? 'none' : 'block',
                                backgroundColor: 'var(--dark-color)'
                            },
                            onClick: hangleClickOpen,
                            src: Menu,
                            alt: "hamburguer icon menu"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Navbar.js",
                            lineNumber: 44,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: "navbar__close",
                            style: {
                                display: isOpen ? 'block' : 'none'
                            },
                            onClick: handleClickClose,
                            src: Close,
                            alt: "close icon menu"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Navbar.js",
                            lineNumber: 54,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/dev/portfolio-2.1/src/sections/Navbar.js",
                    lineNumber: 43,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "navbar__extended",
                    style: {
                        display: isActive ? 'block' : 'none'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2f$modules$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                            className: "navbar__item",
                            to: "reason",
                            spy: true,
                            smooth: true,
                            offset: -50,
                            duration: 2000,
                            onClick: handleClickOnLink,
                            children: "this.portfolio"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Navbar.js",
                            lineNumber: 83,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2f$modules$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                            className: "navbar__item",
                            to: "about",
                            spy: true,
                            smooth: true,
                            offset: 0,
                            duration: 500,
                            onClick: handleClickOnLink,
                            children: "about.me"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Navbar.js",
                            lineNumber: 94,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2f$modules$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                            className: "navbar__item",
                            to: "whyme",
                            spy: true,
                            smooth: true,
                            offset: 100,
                            duration: 500,
                            onClick: handleClickOnLink,
                            children: "why.me"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Navbar.js",
                            lineNumber: 105,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2f$modules$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                            className: "navbar__item",
                            to: "ai",
                            spy: true,
                            smooth: true,
                            offset: 100,
                            duration: 500,
                            onClick: handleClickOnLink,
                            children: "a.i."
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Navbar.js",
                            lineNumber: 116,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2f$modules$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                            className: "navbar__item",
                            to: "projects",
                            spy: true,
                            smooth: true,
                            offset: 0,
                            duration: 500,
                            onClick: handleClickOnLink,
                            children: "projects"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Navbar.js",
                            lineNumber: 127,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2f$modules$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                            className: "navbar__item",
                            to: "api",
                            spy: true,
                            smooth: true,
                            offset: -150,
                            duration: 500,
                            onClick: handleClickOnLink,
                            children: "api"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Navbar.js",
                            lineNumber: 139,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2f$modules$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                            className: "navbar__item",
                            to: "code",
                            spy: true,
                            smooth: true,
                            offset: 0,
                            duration: 500,
                            onClick: handleClickOnLink,
                            children: "my.code"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Navbar.js",
                            lineNumber: 151,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2f$modules$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                            className: "navbar__item",
                            to: "contact",
                            spy: true,
                            smooth: true,
                            offset: 0,
                            duration: 500,
                            onClick: handleClickOnLink,
                            children: "contact"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Navbar.js",
                            lineNumber: 162,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/dev/portfolio-2.1/src/sections/Navbar.js",
                    lineNumber: 67,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "navbar__horizontal",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2f$modules$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                            className: "navbar__item",
                            to: "reason",
                            spy: true,
                            smooth: true,
                            offset: -50,
                            duration: 2000,
                            onClick: handleClickOnLink,
                            children: "this.portfolio"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Navbar.js",
                            lineNumber: 190,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2f$modules$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                            className: "navbar__item",
                            to: "about",
                            spy: true,
                            smooth: true,
                            offset: 0,
                            duration: 500,
                            onClick: handleClickOnLink,
                            children: "about.me"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Navbar.js",
                            lineNumber: 201,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2f$modules$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                            className: "navbar__item",
                            to: "whyme",
                            spy: true,
                            smooth: true,
                            offset: 100,
                            duration: 500,
                            onClick: handleClickOnLink,
                            children: "why.me"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Navbar.js",
                            lineNumber: 212,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2f$modules$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                            className: "navbar__item",
                            to: "ai",
                            spy: true,
                            smooth: true,
                            offset: 100,
                            duration: 500,
                            onClick: handleClickOnLink,
                            children: [
                                ' ',
                                "a.i.",
                                ' '
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Navbar.js",
                            lineNumber: 223,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2f$modules$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                            className: "navbar__item",
                            to: "projects",
                            spy: true,
                            smooth: true,
                            offset: 0,
                            duration: 500,
                            onClick: handleClickOnLink,
                            children: [
                                ' ',
                                "projects",
                                ' '
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Navbar.js",
                            lineNumber: 235,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2f$modules$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                            className: "navbar__item",
                            to: "api",
                            spy: true,
                            smooth: true,
                            offset: -150,
                            duration: 500,
                            onClick: handleClickOnLink,
                            children: "api"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Navbar.js",
                            lineNumber: 248,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2f$modules$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                            className: "navbar__item",
                            to: "code",
                            spy: true,
                            smooth: true,
                            offset: 0,
                            duration: 500,
                            onClick: handleClickOnLink,
                            children: "my.code"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Navbar.js",
                            lineNumber: 259,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2f$modules$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                            className: "navbar__item",
                            to: "contact",
                            spy: true,
                            smooth: true,
                            offset: 0,
                            duration: 500,
                            onClick: handleClickOnLink,
                            children: "contact"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Navbar.js",
                            lineNumber: 270,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/dev/portfolio-2.1/src/sections/Navbar.js",
                    lineNumber: 177,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/dev/portfolio-2.1/src/sections/Navbar.js",
            lineNumber: 36,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/dev/portfolio-2.1/src/sections/Navbar.js",
        lineNumber: 35,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Navbar;
}),
"[project]/dev/portfolio-2.1/src/assets/images/ico-scroll.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/ico-scroll.11b25cee.svg");}),
"[project]/dev/portfolio-2.1/src/assets/images/ico-scroll.svg.mjs { IMAGE => \"[project]/dev/portfolio-2.1/src/assets/images/ico-scroll.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$ico$2d$scroll$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/assets/images/ico-scroll.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$ico$2d$scroll$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 32,
    height: 32,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/dev/portfolio-2.1/src/sections/Hero.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2f$modules$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$ico$2d$scroll$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$ico$2d$scroll$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dev/portfolio-2.1/src/assets/images/ico-scroll.svg.mjs { IMAGE => "[project]/dev/portfolio-2.1/src/assets/images/ico-scroll.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
'use client';
;
;
;
;
const Video = '/hero-bg.mp4';
;
const Hero = ()=>{
    const sidesWrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sideLeftRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sideTopRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sideRightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const onMoveHandler = (e)=>{
        let X = e.pageX;
        let Y = e.pageY;
        sideLeftRef.current.style.transform = 'skew(0deg, 30deg) scaleY(1.33333) translate(' + X / 100 * -3 + 'px, ' + Y / 100 * -3 + 'px)';
        sideTopRef.current.style.transform = 'skew(60deg, -30deg) scaleY(.66667) translate(' + X / 100 * 3 + 'px, ' + Y / 100 * -3 + 'px)';
        sideRightRef.current.style.transform = 'skew(0deg, -30deg) scaleY(1.33333) translate(' + X / 100 * -3 + 'px, ' + Y / 100 * -3 + 'px)';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section hero bg-dark text-bright",
        id: "hero",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                autoPlay: true,
                loop: true,
                muted: true,
                style: {
                    position: 'absolute',
                    width: '100%',
                    height: '100vh',
                    left: '50%',
                    top: 0,
                    objectFit: 'cover',
                    transform: 'translate(-50%, 0)',
                    zIndex: '1'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                    src: Video,
                    type: "video/mp4"
                }, void 0, false, {
                    fileName: "[project]/dev/portfolio-2.1/src/sections/Hero.js",
                    lineNumber: 56,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/dev/portfolio-2.1/src/sections/Hero.js",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 w-full h-screen bg-dark/50 z-2"
            }, void 0, false, {
                fileName: "[project]/dev/portfolio-2.1/src/sections/Hero.js",
                lineNumber: 58,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex items-center justify-center h-full w-[90%] mx-auto z-3",
                ref: sidesWrapperRef,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative font-main-heavy text-[1.7rem] leading-[1.5rem] w-[15em] h-[13em] z-10",
                    onMouseMove: onMoveHandler,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cube__left",
                            ref: sideLeftRef,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "hey, I'm"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/Hero.js",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Francis"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/Hero.js",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Kodama"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/Hero.js",
                                    lineNumber: 63,
                                    columnNumber: 30
                                }, ("TURBOPACK compile-time value", void 0)),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Based in"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/Hero.js",
                                    lineNumber: 63,
                                    columnNumber: 46
                                }, ("TURBOPACK compile-time value", void 0)),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Ottawa, "
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/Hero.js",
                                    lineNumber: 63,
                                    columnNumber: 64
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Canada."
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/Hero.js",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Hero.js",
                            lineNumber: 61,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cube__top",
                            ref: sideTopRef,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Software"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/Hero.js",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "developer "
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/Hero.js",
                                    lineNumber: 67,
                                    columnNumber: 31
                                }, ("TURBOPACK compile-time value", void 0)),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "-----------"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/Hero.js",
                                    lineNumber: 67,
                                    columnNumber: 51
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "react sass"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/Hero.js",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "next.js, js"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/Hero.js",
                                    lineNumber: 68,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Hero.js",
                            lineNumber: 66,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cube__right",
                            ref: sideRightRef,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "typescript"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/Hero.js",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "apis design"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/Hero.js",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "agile + jira"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/Hero.js",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "git figma xd"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/Hero.js",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "PHOTOSHOP"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/Hero.js",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "responsive"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/Hero.js",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Hero.js",
                            lineNumber: 70,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/dev/portfolio-2.1/src/sections/Hero.js",
                    lineNumber: 60,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/dev/portfolio-2.1/src/sections/Hero.js",
                lineNumber: 59,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2f$modules$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                to: "reason",
                spy: true,
                smooth: true,
                offset: -150,
                duration: 2000,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$ico$2d$scroll$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$ico$2d$scroll$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                    className: "absolute bottom-[3%] left-[49%] -translate-x-1/2 w-10 h-10 border-0 cursor-pointer z-3",
                    alt: "icon to scroll"
                }, void 0, false, {
                    fileName: "[project]/dev/portfolio-2.1/src/sections/Hero.js",
                    lineNumber: 81,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/dev/portfolio-2.1/src/sections/Hero.js",
                lineNumber: 80,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/dev/portfolio-2.1/src/sections/Hero.js",
        lineNumber: 40,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Hero;
}),
"[project]/dev/portfolio-2.1/src/components/Palette.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const Color = ({ isActive, firstColors, secondColors, thirdColors })=>{
    const [toggle, setToggle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const paletteRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "color",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: toggle ? "color__square-first color__icon--close" : "color__square-first color__icon--open",
                onClick: ()=>setToggle(!toggle)
            }, void 0, false, {
                fileName: "[project]/dev/portfolio-2.1/src/components/Palette.js",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "color__square-wrapper",
                ref: paletteRef,
                style: {
                    display: toggle ? "block" : "none"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: isActive.first ? "color__options color--active" : "color__options",
                        onClick: firstColors,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "color__square color--one"
                            }, void 0, false, {
                                fileName: "[project]/dev/portfolio-2.1/src/components/Palette.js",
                                lineNumber: 32,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "color__square color--two"
                            }, void 0, false, {
                                fileName: "[project]/dev/portfolio-2.1/src/components/Palette.js",
                                lineNumber: 33,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dev/portfolio-2.1/src/components/Palette.js",
                        lineNumber: 26,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: isActive.second ? "color__options color--active" : "color__options",
                        onClick: secondColors,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "color__square color--three"
                            }, void 0, false, {
                                fileName: "[project]/dev/portfolio-2.1/src/components/Palette.js",
                                lineNumber: 41,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "color__square color--four"
                            }, void 0, false, {
                                fileName: "[project]/dev/portfolio-2.1/src/components/Palette.js",
                                lineNumber: 42,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dev/portfolio-2.1/src/components/Palette.js",
                        lineNumber: 35,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: isActive.third ? "color__options color--active" : "color__options",
                        onClick: thirdColors,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "color__square color--five"
                            }, void 0, false, {
                                fileName: "[project]/dev/portfolio-2.1/src/components/Palette.js",
                                lineNumber: 50,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "color__square color--six"
                            }, void 0, false, {
                                fileName: "[project]/dev/portfolio-2.1/src/components/Palette.js",
                                lineNumber: 51,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dev/portfolio-2.1/src/components/Palette.js",
                        lineNumber: 44,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/dev/portfolio-2.1/src/components/Palette.js",
                lineNumber: 21,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/dev/portfolio-2.1/src/components/Palette.js",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Color;
}),
"[project]/dev/portfolio-2.1/src/assets/images/why-eye-open.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/why-eye-open.d03d2908.svg");}),
"[project]/dev/portfolio-2.1/src/assets/images/why-eye-open.svg.mjs { IMAGE => \"[project]/dev/portfolio-2.1/src/assets/images/why-eye-open.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$eye$2d$open$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/assets/images/why-eye-open.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$eye$2d$open$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 32,
    height: 32,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/dev/portfolio-2.1/src/assets/images/why-eye-closed.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/why-eye-closed.ea854539.svg");}),
"[project]/dev/portfolio-2.1/src/assets/images/why-eye-closed.svg.mjs { IMAGE => \"[project]/dev/portfolio-2.1/src/assets/images/why-eye-closed.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$eye$2d$closed$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/assets/images/why-eye-closed.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$eye$2d$closed$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 32,
    height: 32,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/dev/portfolio-2.1/src/assets/images/why-icon-check.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/why-icon-check.6bac3cef.svg");}),
"[project]/dev/portfolio-2.1/src/assets/images/why-icon-check.svg.mjs { IMAGE => \"[project]/dev/portfolio-2.1/src/assets/images/why-icon-check.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$icon$2d$check$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/assets/images/why-icon-check.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$icon$2d$check$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 32,
    height: 32,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/dev/portfolio-2.1/src/assets/images/card-icon-close-white.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/card-icon-close-white.e45145f2.svg");}),
"[project]/dev/portfolio-2.1/src/assets/images/card-icon-close-white.svg.mjs { IMAGE => \"[project]/dev/portfolio-2.1/src/assets/images/card-icon-close-white.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$card$2d$icon$2d$close$2d$white$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/assets/images/card-icon-close-white.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$card$2d$icon$2d$close$2d$white$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 32,
    height: 32,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/dev/portfolio-2.1/src/components/WhyCard.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$eye$2d$open$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$eye$2d$open$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dev/portfolio-2.1/src/assets/images/why-eye-open.svg.mjs { IMAGE => "[project]/dev/portfolio-2.1/src/assets/images/why-eye-open.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$eye$2d$closed$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$eye$2d$closed$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dev/portfolio-2.1/src/assets/images/why-eye-closed.svg.mjs { IMAGE => "[project]/dev/portfolio-2.1/src/assets/images/why-eye-closed.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$icon$2d$check$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$icon$2d$check$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dev/portfolio-2.1/src/assets/images/why-icon-check.svg.mjs { IMAGE => "[project]/dev/portfolio-2.1/src/assets/images/why-icon-check.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$card$2d$icon$2d$close$2d$white$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$card$2d$icon$2d$close$2d$white$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dev/portfolio-2.1/src/assets/images/card-icon-close-white.svg.mjs { IMAGE => "[project]/dev/portfolio-2.1/src/assets/images/card-icon-close-white.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
'use client';
;
;
;
;
;
;
;
const WhyCard = ({ titleOne, textOne, titleTwo, textTwo, titleThree, textThree, titleFour, textFour, observation, bottom, left })=>{
    const [isCardShow, setIsCardShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isOnMouse, setisOnMouse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const refButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const refButtonLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const refWhy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const onMouseEnterHandler = ()=>{
        setisOnMouse(true);
    };
    const onMouseOutHandler = ()=>{
        setisOnMouse(false);
    };
    const clickHandler = ()=>{
        isCardShow ? setIsCardShow(false) : setIsCardShow(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "why-container",
        style: {
            bottom: bottom,
            left: left
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: refButton,
                className: `why-container__toggle ${isCardShow ? "why-container__toggle--active" : ""}`,
                onMouseEnter: onMouseEnterHandler,
                onMouseLeave: onMouseOutHandler,
                onClick: clickHandler,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `why-container__label ${isOnMouse && !isCardShow ? "why-container__label--active" : null}`,
                        ref: refButtonLabel,
                        children: "Click me"
                    }, void 0, false, {
                        fileName: "[project]/dev/portfolio-2.1/src/components/WhyCard.js",
                        lineNumber: 53,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        className: "why-container__eye",
                        src: isCardShow ? __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$eye$2d$closed$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$eye$2d$closed$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$eye$2d$open$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$eye$2d$open$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                        alt: "icon eye"
                    }, void 0, false, {
                        fileName: "[project]/dev/portfolio-2.1/src/components/WhyCard.js",
                        lineNumber: 62,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/dev/portfolio-2.1/src/components/WhyCard.js",
                lineNumber: 44,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "why",
                ref: refWhy,
                style: {
                    display: isCardShow ? "block" : "none"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        className: "why__close",
                        onClick: clickHandler,
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$card$2d$icon$2d$close$2d$white$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$card$2d$icon$2d$close$2d$white$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                        alt: "close button icon"
                    }, void 0, false, {
                        fileName: "[project]/dev/portfolio-2.1/src/components/WhyCard.js",
                        lineNumber: 74,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "why__item",
                        style: {
                            margin: titleOne ? "2.5em 0 2em 0" : "0"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "why__title why__title--flag",
                                style: {
                                    display: titleOne ? "block" : "none"
                                },
                                children: titleOne
                            }, void 0, false, {
                                fileName: "[project]/dev/portfolio-2.1/src/components/WhyCard.js",
                                lineNumber: 85,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "why__description",
                                children: textOne
                            }, void 0, false, {
                                fileName: "[project]/dev/portfolio-2.1/src/components/WhyCard.js",
                                lineNumber: 91,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dev/portfolio-2.1/src/components/WhyCard.js",
                        lineNumber: 81,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "why__item",
                        style: {
                            marginBottom: titleTwo ? "2em" : "0"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "why__title why__title--bolt",
                                style: {
                                    display: titleTwo ? "block" : "none"
                                },
                                children: titleTwo
                            }, void 0, false, {
                                fileName: "[project]/dev/portfolio-2.1/src/components/WhyCard.js",
                                lineNumber: 98,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "why__description",
                                children: textTwo
                            }, void 0, false, {
                                fileName: "[project]/dev/portfolio-2.1/src/components/WhyCard.js",
                                lineNumber: 104,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dev/portfolio-2.1/src/components/WhyCard.js",
                        lineNumber: 94,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "why__item",
                        style: {
                            marginBottom: titleThree ? "2em" : "0"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "why__title why__title--robot",
                                style: {
                                    display: titleThree ? "block" : "none"
                                },
                                children: titleThree
                            }, void 0, false, {
                                fileName: "[project]/dev/portfolio-2.1/src/components/WhyCard.js",
                                lineNumber: 111,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "why__description",
                                children: textThree
                            }, void 0, false, {
                                fileName: "[project]/dev/portfolio-2.1/src/components/WhyCard.js",
                                lineNumber: 117,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dev/portfolio-2.1/src/components/WhyCard.js",
                        lineNumber: 107,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "why__item",
                        style: {
                            marginBottom: titleFour ? "2em" : "0"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "why__title why__title--brush",
                                style: {
                                    display: titleFour ? "block" : "none"
                                },
                                children: titleFour
                            }, void 0, false, {
                                fileName: "[project]/dev/portfolio-2.1/src/components/WhyCard.js",
                                lineNumber: 124,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "why__description",
                                children: textFour
                            }, void 0, false, {
                                fileName: "[project]/dev/portfolio-2.1/src/components/WhyCard.js",
                                lineNumber: 130,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dev/portfolio-2.1/src/components/WhyCard.js",
                        lineNumber: 120,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "why__footer",
                        style: {
                            display: observation ? "flex" : "none"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                className: "why__footer-icon",
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$icon$2d$check$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$icon$2d$check$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                alt: "icon check"
                            }, void 0, false, {
                                fileName: "[project]/dev/portfolio-2.1/src/components/WhyCard.js",
                                lineNumber: 137,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "why__footer-text",
                                children: observation
                            }, void 0, false, {
                                fileName: "[project]/dev/portfolio-2.1/src/components/WhyCard.js",
                                lineNumber: 138,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dev/portfolio-2.1/src/components/WhyCard.js",
                        lineNumber: 133,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/dev/portfolio-2.1/src/components/WhyCard.js",
                lineNumber: 69,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/dev/portfolio-2.1/src/components/WhyCard.js",
        lineNumber: 43,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = WhyCard;
}),
"[project]/dev/portfolio-2.1/src/data/Data.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ----------------------------------------
// --------------- WHY CARD ---------------
// ----------------------------------------
__turbopack_context__.s([
    "avatarData",
    ()=>avatarData,
    "contactData",
    ()=>contactData,
    "projects",
    ()=>projects,
    "whyData",
    ()=>whyData
]);
const whyData = {
    reason: {
        titleOne: 'Why?',
        textOne: 'This portfolio has been created to help me gain a deeper understanding and practice of the languages I work with.',
        titleTwo: 'Showcase',
        textTwo: 'In addition, the portfolio displays my varied skill set which extends from conception to creativity, design, and coding.',
        titleThree: 'Tech used',
        textThree: 'React, Javascript, CSS, SASS, HTML, NPM, and Git.',
        titleFour: 'Tools used',
        textFour: 'Figma, Adobe Photoshop, and VS Code.',
        observation: 'This portfolio was 100% created and programmed by me. :)',
        bottom: '5%',
        left: '50%'
    },
    about: {
        titleOne: 'Why?',
        textOne: `This page was created to serve as a real showcase for my future employer, who may be involved with e-commerce. Besides, the numerous "states" made it a good sandbox to practice my React skills.`,
        titleTwo: 'Showcase',
        textTwo: `Go with the flow: choosing a location is required to "add to my team". By clicking this button, an item will appear in the shop bag. When the customer clicks on the bag, I will appear as a product to be checked out with the location chosen. Next, you can delete the item or click on "schedule an interview." You will be directed to the contact form with the data you picked.`,
        titleThree: 'Tech used',
        textThree: 'As a starting point, I challenged myself to use either CSS Grid or Flexbox on each side of the page. Regarding JS, conditional was used to control the appearance of certain elements. Additionally, I used React events and React Hooks, such as useState and useRef.',
        titleFour: '',
        textFour: '',
        observation: '',
        bottom: '0.5%',
        left: '50%'
    },
    ai: {
        titleOne: 'Why?',
        textOne: 'Artificial Intelligence had to be a part of my portfolio.',
        titleTwo: 'Showcase',
        textTwo: 'To demonstrate how powerful this technology is, I created a fun and mystical area where you can place any question, and the crystal ball will give you a reasonable response.',
        titleThree: 'Tech used',
        textThree: 'I used a cutting-edge API called OpenAI to achieve this.',
        titleFour: '',
        textFour: '',
        observation: '',
        bottom: '5%',
        left: '50%'
    },
    selectedProjects: {
        titleOne: 'Why?',
        textOne: 'Managing props in reusable components were the goal of this page. There are three primary reusable components in this portfolio: the project cards on this page, these red cards from where you are reading right now, and some buttons.',
        titleTwo: 'Showcase',
        textTwo: 'The data is imported from another file, and the code creates the cards dynamically in two versions, the closed small card and the bigger opened card.',
        titleThree: 'Tech used',
        textThree: 'I highlight here the React Hooks such as useState, useRef, and useEffect.',
        titleFour: '',
        textFour: '',
        observation: '',
        bottom: '5%',
        left: '50%'
    },
    api: {
        titleOne: 'Why?',
        textOne: 'I will certainly need to manage API interactions in my future job, so creating this portfolio page was crucial.',
        titleTwo: 'Showcase',
        textTwo: 'Fetching data from a third party, and promises were the key to this page. Moreover, the method of calculating the time, as well as how to present the data on the screen to the user, also contributed to my learning of React.',
        titleThree: 'Tech used',
        textThree: 'Fetch request, promises, React hooks such as useState and useEffect, and some JS methods.',
        titleFour: '',
        textFour: '',
        observation: '',
        bottom: '10%',
        left: '50%'
    },
    code: {
        titleOne: 'Why?',
        textOne: 'As a professional obsessed with organization, standards, and clean code, I wanted to present this passion in a provocative and creative manner.',
        titleTwo: 'Showcase',
        textTwo: 'To be transparent, I want to show my code exactly as I write it. Thus, to view the original code of this page, click the magnifying glass icon.',
        titleThree: 'Tech used',
        textThree: 'ScrollTrigger, CSS and JS animation, useState, useRef, and use Effect.',
        titleFour: '',
        textFour: '',
        observation: '',
        bottom: '2%',
        left: '50%'
    },
    contact: {
        titleOne: 'Why?',
        textOne: 'In order to feel complete in my learning, I needed drag-and-drop functionality. In response, I created the Hello Generator, an easy way to get you in touch, and of course, schedule an interview! :)',
        titleTwo: 'Showcase',
        textTwo: 'The ability to program and be creative. In addition to the drag and drop feature, this page receives and manages props (the interview request and the location information) from the about me page.',
        titleThree: 'Tech used',
        textThree: 'Hook useContext, DragDropContext, Droppable, Draggable from React Beautiful DnD library.',
        titleFour: '',
        textFour: '',
        observation: '',
        bottom: '6%',
        left: '50%'
    }
};
const avatarData = [
    {
        key: 0,
        title: 'creative and innovation',
        description: 'Due to my continuous curiosity and extensive advertising experience, I am always ready to contribute to the development of innovative solutions that can make a real impact.',
        imgUrl: '/images/avatar-creative.jpg'
    },
    {
        key: 1,
        title: 'creative and innovation',
        description: 'Due to my continuous curiosity and extensive advertising experience, I am always ready to contribute to the development of innovative solutions that can make a real impact.',
        imgUrl: '/images/avatar-creative.jpg'
    },
    {
        key: 2,
        title: 'problem-solving',
        description: 'I have the ability to handle and calmly identify solutions to difficult or unexpected situations both in programming challenges and in the workplace.',
        imgUrl: '/images/avatar-problem.jpg'
    },
    {
        key: 3,
        title: 'effective communication',
        description: 'Listening actively to the stakeholders is crucial, which has been my job for all my life. Good communication is one of my most valuable qualities.',
        imgUrl: '/images/avatar-communication.jpg'
    },
    {
        key: 4,
        title: 'lifelong learner',
        description: 'I find joy in continuous growth and development to keep up with changes in this new world. My aim is to develop skills and master new technologies in order to add value to the projects I work on.',
        imgUrl: '/images/avatar-learner2.jpg'
    },
    {
        key: 5,
        title: 'goal-oriented',
        description: 'Motivated by my vision, goals, and meaningful aspirations, I really believe in hard work, good choices, and persistence. I am rarely distracted from my goals.',
        imgUrl: '/images/avatar-goal.jpg'
    },
    {
        key: 6,
        title: 'positive attitude',
        description: 'I am truly interested in deep relationships. Collaboration, flexibility, and empathy are some qualities I have developed over a strong and consistent career.',
        imgUrl: '/images/avatar-friendly.jpg'
    }
];
const projects = [
    {
        id: 1,
        frontShow: true,
        icon: '/images/card-icon-thisportfolio.png',
        title0: 'this.',
        titleA: 'Portfolio',
        year: '2022',
        tech: 'react, js, html, sass',
        category: 'website',
        url: 'https://www.fkodama.com',
        image: '/images/project-portfolio.jpg',
        frontText: '100% React-based, this is my most important project built.',
        backText_titleOne: 'why',
        backText_textOne: `As a product strategist, I began by thinking about how to create a portfolio that would appeal to employers seeking talents with my skills.`,
        backText_titleTwo: 'how',
        backText_textTwo: 'Therefore, I decided to develop pages that simulate digital product pages, such as an e-commerce site, a page with artificial intelligence, or a page with access to an API (Weather API in this case).',
        backText_titleFour: 'what',
        backText_textFour: '100% React-based, JSX, SASS, and HTML. Some tools used: Git, VisualCode, Figma, Adobe Photoshop, and Adobe Premiere.',
        backgroundColor: '#FC9651',
        visitIcon: false
    },
    {
        id: 2,
        frontShow: true,
        icon: '/images/card-icon-seletos.png',
        titleA: 'Seletos',
        year: '2021',
        tech: 'html css',
        category: 'website',
        url: 'https://fkodama.com/_dev/seletos',
        image: '/images/project-seletos.jpg',
        frontText: 'This was the first website that I fully developed with HTML, CSS, and JS.',
        backText_titleOne: 'why',
        backText_textOne: 'Customizing template websites was already something I knew how to do. Now, it was time to build a website from scratch.',
        backText_titleTwo: 'how',
        backText_textTwo: "In response to a client's briefing, I used my experience in digital marketing to design and code the entire website.",
        backText_titleThree: 'what',
        backText_textThree: 'The key features of the project were Flexbox, Display Grid, some simple animations, and Responsiveness in general.',
        backText_titleFour: '',
        backText_textFour: '',
        backgroundColor: '#BA88F9',
        visitIcon: true
    },
    {
        id: 3,
        frontShow: true,
        icon: '/images/card-icon-pacman.png',
        titleA: 'Pac Man',
        year: '2021',
        tech: 'html css js',
        category: 'video game',
        url: 'https://fkodama.com/_dev/pacman/',
        image: '/images/project-pacman.jpg',
        frontText: "Here's a tutorial project I took to a whole new level.",
        backText_titleOne: 'why',
        backText_textOne: 'After some courses, I focused on building projects following tutorials, until I got some fluency with the language. This was my first relevant project in Vanilla Javascript.',
        backText_titleTwo: 'how',
        backText_textTwo: "For this project, Ania Kubow's tutorial was very helpful. However, the design was really simple, and that was my opportunity to customize it myself.",
        backText_titleThree: 'what',
        backText_textThree: 'Using mainly Javascript and CSS, I redesigned the entire game and added a button to restart creating a better user experience.',
        backText_titleFour: '',
        backText_textFour: '',
        backText_linkName: "Compare with original: Ania Kubów's Tutorial",
        backText_link: 'https://www.youtube.com/watch?v=CeUGlSl2i4Q&t=45s',
        backgroundColor: '#efbe1c',
        visitIcon: true
    },
    {
        id: 4,
        frontShow: true,
        icon: '/images/card-icon-mundial.png',
        titleA: 'Mundial',
        year: '2021',
        tech: 'html css',
        category: 'website',
        url: 'https://www.mundialcomunicacao.com.br/',
        image: '/images/project-mundial.jpg',
        frontText: 'My first client website, my first big challenge.',
        backText_titleOne: 'why',
        backText_textOne: 'This client needed a new communication and a new website as well.',
        backText_titleTwo: 'how',
        backText_textTwo: 'This project challenged me to come up with a new brand, font type, icons, and to create content for all areas.',
        backText_titleThree: 'what',
        backText_textThree: 'The client was very pleased with the final outcome, and so was I. Seeing that I was on the right track was the best motivation for me to keep studying even harder.',
        backText_titleFour: '',
        backText_textFour: '',
        backgroundColor: '#3FABD8',
        visitIcon: true
    },
    {
        id: 5,
        frontShow: true,
        icon: '/images/card-icon-resume.png',
        titleA: 'Resume',
        year: '2021',
        tech: 'html css js',
        category: 'resume online',
        url: 'https://www.fkodama.com/_dev/resume-online/',
        image: '/images/project-resume.jpg',
        frontText: 'Building a website based on the design reference.',
        backText_titleOne: 'why',
        backText_textOne: 'After completing my HTML and CSS course, I found this design offered by the author so people like me can practice building it using this design as a guide.',
        backText_titleTwo: 'how',
        backText_textTwo: 'Despite being the beginning of my journey, I used advanced CSS techniques, such as flexbox and display grid, to construct this website.',
        backText_titleThree: 'what',
        backText_textThree: 'Developing this single-page application was my first experience with JS: the logic to scroll the page from the menu.',
        backText_titleFour: '',
        backText_textFour: '',
        backgroundColor: '#D3CFCC',
        visitIcon: true
    },
    {
        id: 6,
        frontShow: true,
        icon: '/images/card-icon-spaceinvaders.png',
        titleA: 'Space Invaders',
        year: '2021',
        tech: 'html css js',
        category: 'video game',
        url: 'https://fkodama.com/_dev/space-invaders/',
        image: '/images/project-space.jpg',
        frontText: 'Time to have fun with Vanilla Javascript.',
        backText_titleOne: 'why',
        backText_textOne: 'As I studied product management, agile, and some other things, I have not been coding for some time. I want to make my big return with a fun project to allow me to catch up with the syntax.',
        backText_titleTwo: 'how',
        backText_textTwo: "That's why I decided to build this project. This tutorial again from Ania Kubow (mentioned on the Pac Man project) uses a great deal of Vanilla Javascript logic. Therefore, it was a good place to restart.",
        backText_titleThree: 'what',
        backText_textThree: 'As with Pac-Man, I challenged myself to create a restart button, redesign the entire video game, and this time, I even included some sound effects to boost the user experience.',
        backText_titleFour: '',
        backText_textFour: '',
        backText_linkName: "Compare with original: Ania Kubów's Tutorial",
        backText_link: 'https://www.youtube.com/watch?v=3Nz4Yp7Y_uA',
        backgroundColor: '#70D1D5',
        visitIcon: true
    }
];
const contactData = [
    {
        id: '1',
        content: 'Hey Francis!'
    },
    {
        id: '2',
        content: 'I hope this message finds you well.'
    },
    {
        id: '3',
        content: 'Cool website, man!'
    },
    {
        id: '4',
        content: 'Do you want to work in our company?'
    },
    {
        id: '5',
        content: 'ops, I found a bug.'
    },
    {
        id: '6',
        content: 'Holly cow, what a portfolio!'
    },
    {
        id: '7',
        content: `Let's schedule an interview?`
    },
    {
        id: '8',
        content: 'I am looking for a professional like you.'
    },
    {
        id: '9',
        content: 'Are you freelancing?'
    },
    {
        id: '10',
        content: 'Thanks! :)'
    }
];
}),
"[project]/dev/portfolio-2.1/src/sections/Reason.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$components$2f$WhyCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/components/WhyCard.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/data/Data.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const Reason = ()=>{
    const originalMessageBright = "this portfolio has been built to showcase my variety of skills from creativity to code";
    const originalMessageDark = ".click on the eye below to know more about each page";
    const arrOfLettersBright = Array.from(originalMessageBright);
    const arrOfLettersDark = Array.from(originalMessageDark);
    let arrOfDiv = [];
    const createGrid = ()=>{
        for(let i = 0; i < arrOfLettersBright.length; i++){
            arrOfDiv.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "reason__letter-bright reason__reveal-bright",
                children: arrOfLettersBright[i]
            }, i, false, {
                fileName: "[project]/dev/portfolio-2.1/src/sections/Reason.js",
                lineNumber: 23,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)));
        }
        for(let l = 0; l < arrOfLettersDark.length; l++){
            arrOfDiv.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "reason__letter-dark reason__reveal-dark",
                children: arrOfLettersDark[l]
            }, l + 100, false, {
                fileName: "[project]/dev/portfolio-2.1/src/sections/Reason.js",
                lineNumber: 30,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)));
        }
        return arrOfDiv;
    };
    // ========================== ANIMATION ==========================
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const reasonReveal = ()=>{
            const revealsBright = document.querySelectorAll(".reason__reveal-bright");
            const revealsDark = document.querySelectorAll(".reason__reveal-dark");
            const elementVisible = 250;
            let windowHeight = window.innerHeight;
            for(var a = 0; a < revealsBright.length; a++){
                let elementTop = revealsBright[a].getBoundingClientRect().top;
                if (elementTop < windowHeight - elementVisible) {
                    revealsBright[a].classList.add("reason__reveal--active");
                } else {
                    revealsBright[a].classList.remove("reason__reveal--active");
                }
            }
            for(var b = 0; b < revealsDark.length; b++){
                let elementTop = revealsDark[b].getBoundingClientRect().top;
                if (elementTop < windowHeight - elementVisible) {
                    revealsDark[b].classList.add("reason__reveal--active");
                } else {
                    revealsDark[b].classList.remove("reason__reveal--active");
                }
            }
        };
        window.addEventListener("scroll", reasonReveal);
        reasonReveal();
        return ()=>window.removeEventListener("scroll", reasonReveal);
    }, []);
    // -------------- ANIMATION --------------
    const gridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    // const q = gsap.utils.selector(gridRef);
    // useEffect(() => {
    //   gsap.from(q(".reason__letter-bright"), {
    //     scrollTrigger: {
    //       trigger: q(".reason__letter-bright"),
    //       toggleActions: "restart pause reverse pause",
    //       start: "top bottom",
    //       end: "top 20%",
    //       scrub: true,
    //       pin: true,
    //     },
    //     duration: 1,
    //     x: "1000",
    //     stagger: 0.01,
    //     yoyo: true,
    //   });
    //   gsap.from(q(".reason__letter-dark"), {
    //     scrollTrigger: {
    //       trigger: q(".reason__letter-dark"),
    //       toggleActions: "restart pause reverse pause",
    //       start: "top bottom",
    //       end: "top center",
    //       scrub: true,
    //       pin: true,
    //     },
    //     duration: 1,
    //     x: "-1000",
    //     stagger: 0.01,
    //     yoyo: true,
    //     ease: "power1.inOut",
    //   });
    // }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section reason",
        id: "reason",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "reason__grid",
                ref: gridRef,
                children: createGrid()
            }, void 0, false, {
                fileName: "[project]/dev/portfolio-2.1/src/sections/Reason.js",
                lineNumber: 110,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$components$2f$WhyCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                titleOne: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].reason.titleOne,
                textOne: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].reason.textOne,
                titleTwo: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].reason.titleTwo,
                textTwo: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].reason.textTwo,
                titleThree: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].reason.titleThree,
                textThree: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].reason.textThree,
                titleFour: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].reason.titleFour,
                textFour: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].reason.textFour,
                observation: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].reason.observation,
                bottom: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].reason.bottom,
                left: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].reason.left
            }, void 0, false, {
                fileName: "[project]/dev/portfolio-2.1/src/sections/Reason.js",
                lineNumber: 113,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/dev/portfolio-2.1/src/sections/Reason.js",
        lineNumber: 109,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Reason;
}),
"[project]/dev/portfolio-2.1/src/components/Button.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const Button = ({ text, align, onClick, className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: className,
        onClick: onClick,
        style: {
            alignSelf: align
        },
        type: "button",
        children: text
    }, void 0, false, {
        fileName: "[project]/dev/portfolio-2.1/src/components/Button.js",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
Button.defaultProps = {
    align: "flex-start",
    text: "Click",
    className: "btn btn--third-color"
};
const __TURBOPACK__default__export__ = Button;
}),
"[project]/dev/portfolio-2.1/src/assets/images/bag.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/bag.5aa8156a.svg");}),
"[project]/dev/portfolio-2.1/src/assets/images/bag.svg.mjs { IMAGE => \"[project]/dev/portfolio-2.1/src/assets/images/bag.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$bag$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/assets/images/bag.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$bag$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 21,
    height: 24,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/dev/portfolio-2.1/src/assets/images/about-lightbulb.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/about-lightbulb.6d7ea5c2.svg");}),
"[project]/dev/portfolio-2.1/src/assets/images/about-lightbulb.svg.mjs { IMAGE => \"[project]/dev/portfolio-2.1/src/assets/images/about-lightbulb.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$lightbulb$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/assets/images/about-lightbulb.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$lightbulb$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 43,
    height: 43,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/dev/portfolio-2.1/src/assets/images/about-puzzle.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/about-puzzle.2fa580d1.svg");}),
"[project]/dev/portfolio-2.1/src/assets/images/about-puzzle.svg.mjs { IMAGE => \"[project]/dev/portfolio-2.1/src/assets/images/about-puzzle.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$puzzle$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/assets/images/about-puzzle.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$puzzle$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 43,
    height: 43,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/dev/portfolio-2.1/src/assets/images/about-chat.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/about-chat.0645e61a.svg");}),
"[project]/dev/portfolio-2.1/src/assets/images/about-chat.svg.mjs { IMAGE => \"[project]/dev/portfolio-2.1/src/assets/images/about-chat.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$chat$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/assets/images/about-chat.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$chat$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 33,
    height: 33,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/dev/portfolio-2.1/src/assets/images/about-student.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/about-student.4ca40f24.svg");}),
"[project]/dev/portfolio-2.1/src/assets/images/about-student.svg.mjs { IMAGE => \"[project]/dev/portfolio-2.1/src/assets/images/about-student.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$student$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/assets/images/about-student.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$student$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 43,
    height: 43,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/dev/portfolio-2.1/src/assets/images/about-eye.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/about-eye.9c84d014.svg");}),
"[project]/dev/portfolio-2.1/src/assets/images/about-eye.svg.mjs { IMAGE => \"[project]/dev/portfolio-2.1/src/assets/images/about-eye.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$eye$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/assets/images/about-eye.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$eye$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 43,
    height: 43,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/dev/portfolio-2.1/src/assets/images/about-smile.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/about-smile.b647474d.svg");}),
"[project]/dev/portfolio-2.1/src/assets/images/about-smile.svg.mjs { IMAGE => \"[project]/dev/portfolio-2.1/src/assets/images/about-smile.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$smile$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/assets/images/about-smile.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$smile$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 43,
    height: 43,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/dev/portfolio-2.1/src/components/Avatar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/data/Data.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$lightbulb$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$lightbulb$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dev/portfolio-2.1/src/assets/images/about-lightbulb.svg.mjs { IMAGE => "[project]/dev/portfolio-2.1/src/assets/images/about-lightbulb.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$puzzle$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$puzzle$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dev/portfolio-2.1/src/assets/images/about-puzzle.svg.mjs { IMAGE => "[project]/dev/portfolio-2.1/src/assets/images/about-puzzle.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$chat$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$chat$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dev/portfolio-2.1/src/assets/images/about-chat.svg.mjs { IMAGE => "[project]/dev/portfolio-2.1/src/assets/images/about-chat.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$student$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$student$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dev/portfolio-2.1/src/assets/images/about-student.svg.mjs { IMAGE => "[project]/dev/portfolio-2.1/src/assets/images/about-student.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$eye$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$eye$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dev/portfolio-2.1/src/assets/images/about-eye.svg.mjs { IMAGE => "[project]/dev/portfolio-2.1/src/assets/images/about-eye.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$smile$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$smile$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dev/portfolio-2.1/src/assets/images/about-smile.svg.mjs { IMAGE => "[project]/dev/portfolio-2.1/src/assets/images/about-smile.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
'use client';
;
;
;
;
;
;
;
;
;
;
const Avatar = ()=>{
    const [isImgShown, setIsImgShown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [imgActive, setImgActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setImgActive(true);
    }, [
        isImgShown
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "avatar-container",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "avatar",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "avatar__icons-title",
                    children: "soft skills:"
                }, void 0, false, {
                    fileName: "[project]/dev/portfolio-2.1/src/components/Avatar.js",
                    lineNumber: 24,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "avatar__icons-wrapper",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            onClick: ()=>{
                                setIsImgShown(1);
                                setImgActive(false);
                            },
                            className: "avatar__icon",
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$lightbulb$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$lightbulb$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                            alt: "creative"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/components/Avatar.js",
                            lineNumber: 27,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            onClick: ()=>{
                                setIsImgShown(2);
                                setImgActive(false);
                            },
                            className: "avatar__icon",
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$puzzle$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$puzzle$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                            alt: "problem solving"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/components/Avatar.js",
                            lineNumber: 37,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            onClick: ()=>{
                                setIsImgShown(3);
                                setImgActive(false);
                            },
                            className: "avatar__icon",
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$chat$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$chat$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                            alt: "passionate for technology"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/components/Avatar.js",
                            lineNumber: 47,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            onClick: ()=>{
                                setIsImgShown(4);
                                setImgActive(false);
                            },
                            className: "avatar__icon",
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$student$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$student$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                            alt: "constant learning"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/components/Avatar.js",
                            lineNumber: 57,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            onClick: ()=>{
                                setIsImgShown(5);
                                setImgActive(false);
                            },
                            className: "avatar__icon",
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$eye$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$eye$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                            alt: "detail oriented"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/components/Avatar.js",
                            lineNumber: 67,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            onClick: ()=>{
                                setIsImgShown(6);
                                setImgActive(false);
                            },
                            className: "avatar__icon",
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$smile$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$smile$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                            alt: "friendly"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/components/Avatar.js",
                            lineNumber: 77,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/dev/portfolio-2.1/src/components/Avatar.js",
                    lineNumber: 26,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    className: imgActive ? "avatar__image avatar__image--active" : "avatar__image",
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["avatarData"][isImgShown].imgUrl,
                    alt: "my avatar images"
                }, void 0, false, {
                    fileName: "[project]/dev/portfolio-2.1/src/components/Avatar.js",
                    lineNumber: 88,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: imgActive ? "avatar__skills-wrapper avatar__skills-wrapper--active" : "avatar__skills-wrapper",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "avatar__skills-title",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["avatarData"][isImgShown].title
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/components/Avatar.js",
                            lineNumber: 103,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "avatar__skills-description",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["avatarData"][isImgShown].description
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/components/Avatar.js",
                            lineNumber: 106,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/dev/portfolio-2.1/src/components/Avatar.js",
                    lineNumber: 96,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/dev/portfolio-2.1/src/components/Avatar.js",
            lineNumber: 23,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/dev/portfolio-2.1/src/components/Avatar.js",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Avatar;
}),
"[project]/dev/portfolio-2.1/src/assets/images/avatar-70x70.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/avatar-70x70.157e142e.jpg");}),
"[project]/dev/portfolio-2.1/src/assets/images/avatar-70x70.jpg.mjs { IMAGE => \"[project]/dev/portfolio-2.1/src/assets/images/avatar-70x70.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$avatar$2d$70x70$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/assets/images/avatar-70x70.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$avatar$2d$70x70$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 70,
    height: 70,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCWZPK1GOaN+SxGTkHGOmM9K5YR+zY2bXLdH//Z"
};
}),
"[project]/dev/portfolio-2.1/src/assets/images/about-trash.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/about-trash.fca91ace.svg");}),
"[project]/dev/portfolio-2.1/src/assets/images/about-trash.svg.mjs { IMAGE => \"[project]/dev/portfolio-2.1/src/assets/images/about-trash.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$trash$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/assets/images/about-trash.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$trash$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 32,
    height: 32,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/dev/portfolio-2.1/src/sections/About.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$contexts$2f$AboutContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/contexts/AboutContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2f$modules$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$components$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/components/Button.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$bag$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$bag$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dev/portfolio-2.1/src/assets/images/bag.svg.mjs { IMAGE => "[project]/dev/portfolio-2.1/src/assets/images/bag.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$components$2f$Avatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/components/Avatar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$avatar$2d$70x70$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$avatar$2d$70x70$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dev/portfolio-2.1/src/assets/images/avatar-70x70.jpg.mjs { IMAGE => "[project]/dev/portfolio-2.1/src/assets/images/avatar-70x70.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$trash$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$trash$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dev/portfolio-2.1/src/assets/images/about-trash.svg.mjs { IMAGE => "[project]/dev/portfolio-2.1/src/assets/images/about-trash.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$card$2d$icon$2d$close$2d$white$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$card$2d$icon$2d$close$2d$white$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dev/portfolio-2.1/src/assets/images/card-icon-close-white.svg.mjs { IMAGE => "[project]/dev/portfolio-2.1/src/assets/images/card-icon-close-white.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$components$2f$WhyCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/components/WhyCard.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/data/Data.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const About = ()=>{
    const { location, setLocation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$contexts$2f$AboutContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AboutContext"]);
    const [showMessageError, setShowMessageError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [addMe, setAddMe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        showMe: false
    });
    const [showMessage, setShowMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        show: false
    });
    const [inBag, setInBag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const refMessageEmpty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const refMessageFull = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const modalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(modalRef.current, {
            opacity: 0,
            duration: 0.5,
            scale: 0.9
        });
    });
    const handleClickLocation = (e)=>{
        const newLocation = {
            data: e.target.value
        };
        setLocation(newLocation);
        const error = false;
        setShowMessageError(error);
    };
    const handleClickAddToTeam = ()=>{
        if (location.data) {
            setShowMessage({
                show: false
            });
            setAddMe({
                showMe: true
            });
            setInBag(true);
        } else {
            const error = true;
            setShowMessageError(error);
        }
    };
    const handleClickBag = ()=>{
        if (inBag) {
            refMessageEmpty.current.style.display = 'none';
            refMessageFull.current.style.display = 'block';
            setShowMessage(showMessage.show ? {
                show: false
            } : {
                show: true
            });
        } else {
            refMessageEmpty.current.style.display = 'flex';
            refMessageFull.current.style.display = 'none';
            setShowMessage(showMessage.show ? {
                show: false
            } : {
                show: true
            });
        }
    };
    const handleClickDelete = ()=>{
        refMessageEmpty.current.style.display = 'flex';
        refMessageFull.current.style.display = 'none';
        setAddMe({
            show: false
        });
        setInBag(false);
    };
    const handleClickClose = ()=>{
        setShowMessage({
            show: false
        });
    };
    const handleClickInterview = ()=>{
        setShowMessage({
            show: false
        });
    };
    // ========================== ANIMATION ==========================
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const revealAbout = ()=>{
            const reveals = document.querySelectorAll('.about__container-reveal');
            for(var i = 0; i < reveals.length; i++){
                let windowHeight = window.innerHeight;
                let elementTop = reveals[i].getBoundingClientRect().top;
                let elementVisible = 150;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add('about__container-reveal--active');
                } else {
                    reveals[i].classList.remove('about__container-reveal--active');
                }
            }
        };
        window.addEventListener('scroll', revealAbout);
        revealAbout();
        return ()=>window.removeEventListener('scroll', revealAbout);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section about",
        id: "about",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "about__container-reveal"
                    }, void 0, false, {
                        fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                        lineNumber: 106,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "about__avatar-container",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$components$2f$Avatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                            lineNumber: 108,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                        lineNumber: 107,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "about__info-container",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "work-permit",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "work-permit__text",
                                        children: "VALID WORK PERMIT"
                                    }, void 0, false, {
                                        fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "to work in Canada"
                                    }, void 0, false, {
                                        fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                lineNumber: 112,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: handleClickBag,
                                className: "bag",
                                id: "bag",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$bag$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$bag$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                        alt: "Shop bag empty"
                                    }, void 0, false, {
                                        fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "bag__number-one",
                                        style: {
                                            display: addMe.showMe ? 'block' : 'none'
                                        },
                                        children: "1"
                                    }, void 0, false, {
                                        fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                lineNumber: 117,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "modal",
                                ref: modalRef,
                                style: {
                                    display: showMessage.show ? 'block' : 'none'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "modal__header",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "modal__title",
                                                children: "CHECKOUT"
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                                lineNumber: 134,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                className: "modal__close",
                                                onClick: handleClickClose,
                                                src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$card$2d$icon$2d$close$2d$white$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$card$2d$icon$2d$close$2d$white$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                alt: "close button"
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                                lineNumber: 135,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                        lineNumber: 133,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "modal__full",
                                        ref: refMessageFull,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "modal__full-wrapper",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        className: "modal__image",
                                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$avatar$2d$70x70$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$avatar$2d$70x70$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                        alt: "thumbanail avatar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                                        lineNumber: 147,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "modal__text-wrapper",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "modal__name",
                                                                children: "Francis Kodama"
                                                            }, void 0, false, {
                                                                fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                                                lineNumber: 153,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "modal__email",
                                                                children: "fk@fkodama.com"
                                                            }, void 0, false, {
                                                                fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                                                lineNumber: 154,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "modal__location-wrapper",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "modal__location-title",
                                                                    children: [
                                                                        "Location:",
                                                                        ' ',
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                textTransform: 'uppercase',
                                                                                fontFamily: 'var(--main-font-semibold)'
                                                                            },
                                                                            children: location.data
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                                                            lineNumber: 158,
                                                                            columnNumber: 23
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                                                    lineNumber: 156,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                                                lineNumber: 155,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                                        lineNumber: 152,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        onClick: handleClickDelete,
                                                        className: "modal__delete",
                                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$trash$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$about$2d$trash$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                        alt: "icon trash to delete"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                                        lineNumber: 170,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                                lineNumber: 146,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "modal__button-title",
                                                children: "Confirm Purchase:"
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                                lineNumber: 177,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2f$modules$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                                to: "contact",
                                                spy: true,
                                                smooth: true,
                                                offset: -150,
                                                duration: 500,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$components$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "btn btn--bright",
                                                    onClick: handleClickInterview,
                                                    text: "schedule an interview"
                                                }, void 0, false, {
                                                    fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                                    lineNumber: 185,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                                lineNumber: 178,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "modal__empty",
                                        ref: refMessageEmpty,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "modal__empty-wrapper",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "modal__empty-text",
                                                        children: "Your bag is"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                                        lineNumber: 197,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "modal__empty-title",
                                                        children: "EMPTY"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                                        lineNumber: 198,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                                lineNumber: 196,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "modal__button-title",
                                                children: "Would you like to return?"
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                                lineNumber: 201,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$components$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                className: "btn btn--bright",
                                                onClick: handleClickClose,
                                                text: "Continue Shopping"
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                                lineNumber: 202,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                        lineNumber: 195,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                lineNumber: 128,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "about__container",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "about__name",
                                        children: "Francis Kodama"
                                    }, void 0, false, {
                                        fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                        lineNumber: 213,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "about__job",
                                        children: "Software Developer"
                                    }, void 0, false, {
                                        fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                        lineNumber: 214,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "about__languages",
                                        style: {
                                            marginBottom: "0"
                                        },
                                        children: "React, Next.js, JavaScript,"
                                    }, void 0, false, {
                                        fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                        lineNumber: 215,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "about__languages",
                                        children: [
                                            "Typescript, CSS,",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "about__and",
                                                children: " and"
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                                lineNumber: 217,
                                                columnNumber: 30
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " HTML"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                        lineNumber: 216,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "about__description",
                                        children: "I'm an experienced tech services provider with a strong understanding of the industry trends, as well as of the entire web development process, including coding, UX/UI design, product management, and client services."
                                    }, void 0, false, {
                                        fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                        lineNumber: 218,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "about__description",
                                        children: "Resourceful, curious, creative, and critical thinker, who loves to solve problems by designing and coding enjoyable and useful products."
                                    }, void 0, false, {
                                        fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                        lineNumber: 224,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                lineNumber: 212,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bottom-container",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "location",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "location__title",
                                                children: "location:"
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                                lineNumber: 233,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                className: "location__form",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        onClick: handleClickLocation,
                                                        className: "location__input",
                                                        type: "radio",
                                                        name: "location",
                                                        value: "remote"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                                        lineNumber: 235,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "remote",
                                                        children: "Remote"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                                        lineNumber: 242,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        onClick: handleClickLocation,
                                                        className: "location__input",
                                                        type: "radio",
                                                        name: "location",
                                                        value: "ottawa"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                                        lineNumber: 243,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "ottawa",
                                                        children: "Ottawa"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                                        lineNumber: 250,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        onClick: handleClickLocation,
                                                        className: "location__input",
                                                        type: "radio",
                                                        name: "location",
                                                        value: "hybrid"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                                        lineNumber: 251,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "hybrid",
                                                        children: "Hybrid"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                                        lineNumber: 258,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                                lineNumber: 234,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$components$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                className: "btn btn--dark",
                                                onClick: handleClickAddToTeam,
                                                text: "add to my team",
                                                align: "flex-start"
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                                lineNumber: 261,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: showMessageError ? 'location__error--active' : 'location__error',
                                                children: "...Ops, choose a location"
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                                lineNumber: 268,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "about__skills",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "about__skills-title",
                                                children: "included:"
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                                lineNumber: 280,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "git"
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                                lineNumber: 281,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "jira"
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                                lineNumber: 282,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "agile"
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                                lineNumber: 283,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "figma"
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                                lineNumber: 284,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "adobe xd"
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                                lineNumber: 285,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "adobe photoshop"
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                                lineNumber: 286,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "adobe illustrator"
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                                lineNumber: 287,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                        lineNumber: 279,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                                lineNumber: 231,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                        lineNumber: 111,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                lineNumber: 105,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$components$2f$WhyCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                titleOne: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].about.titleOne,
                textOne: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].about.textOne,
                titleTwo: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].about.titleTwo,
                textTwo: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].about.textTwo,
                titleThree: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].about.titleThree,
                textThree: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].about.textThree,
                titleFour: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].about.titleFour,
                textFour: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].about.textFour,
                observation: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].about.observation,
                bottom: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].about.bottom,
                left: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].about.left
            }, void 0, false, {
                fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
                lineNumber: 293,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/dev/portfolio-2.1/src/sections/About.js",
        lineNumber: 104,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = About;
}),
"[project]/dev/portfolio-2.1/src/assets/images/why-pic-01.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/why-pic-01.003d48e2.jpg");}),
"[project]/dev/portfolio-2.1/src/assets/images/why-pic-01.jpg.mjs { IMAGE => \"[project]/dev/portfolio-2.1/src/assets/images/why-pic-01.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$01$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/assets/images/why-pic-01.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$01$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 500,
    height: 1000,
    blurWidth: 4,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAQDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCFPGtjaQxJPp0ZJQEHZncOmfzBpp8yui6lP2cnFvY//9k="
};
}),
"[project]/dev/portfolio-2.1/src/assets/images/why-pic-02.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/why-pic-02.df22f575.jpg");}),
"[project]/dev/portfolio-2.1/src/assets/images/why-pic-02.jpg.mjs { IMAGE => \"[project]/dev/portfolio-2.1/src/assets/images/why-pic-02.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$02$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/assets/images/why-pic-02.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$02$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 500,
    height: 1000,
    blurWidth: 4,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAQDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDLlvL5pXEfmptO1gQOtc7uh2fQ/9k="
};
}),
"[project]/dev/portfolio-2.1/src/assets/images/why-pic-03.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/why-pic-03.eaf9a518.jpg");}),
"[project]/dev/portfolio-2.1/src/assets/images/why-pic-03.jpg.mjs { IMAGE => \"[project]/dev/portfolio-2.1/src/assets/images/why-pic-03.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$03$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/assets/images/why-pic-03.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$03$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 500,
    height: 500,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDnrbVZpWLxzncj7TyMYB9OlcMly1Fd6djb2jta/wDX5n//2Q=="
};
}),
"[project]/dev/portfolio-2.1/src/assets/images/why-pic-04.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/why-pic-04.bd9314ed.jpg");}),
"[project]/dev/portfolio-2.1/src/assets/images/why-pic-04.jpg.mjs { IMAGE => \"[project]/dev/portfolio-2.1/src/assets/images/why-pic-04.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$04$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/assets/images/why-pic-04.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$04$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 500,
    height: 1000,
    blurWidth: 4,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAQDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDDltNFL4VIMKAPmG4jj6VzXl3Z6igrtOK0P//Z"
};
}),
"[project]/dev/portfolio-2.1/src/assets/images/why-pic-05.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/why-pic-05.141cc058.jpg");}),
"[project]/dev/portfolio-2.1/src/assets/images/why-pic-05.jpg.mjs { IMAGE => \"[project]/dev/portfolio-2.1/src/assets/images/why-pic-05.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$05$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/assets/images/why-pic-05.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$05$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 500,
    height: 1000,
    blurWidth: 4,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAQDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCpp91crbmL7FAfKYpua4KbvfG30xVezQXP/9k="
};
}),
"[project]/dev/portfolio-2.1/src/assets/images/why-pic-06.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/why-pic-06.3cfa5a8c.jpg");}),
"[project]/dev/portfolio-2.1/src/assets/images/why-pic-06.jpg.mjs { IMAGE => \"[project]/dev/portfolio-2.1/src/assets/images/why-pic-06.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$06$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/assets/images/why-pic-06.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$06$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 500,
    height: 1000,
    blurWidth: 4,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAQDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCKz1u62OcyqjSEook6Keg5Fc0MRBRtJ6mzhqf/2Q=="
};
}),
"[project]/dev/portfolio-2.1/src/assets/images/why-pic-07.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/why-pic-07.4fff8ecb.jpg");}),
"[project]/dev/portfolio-2.1/src/assets/images/why-pic-07.jpg.mjs { IMAGE => \"[project]/dev/portfolio-2.1/src/assets/images/why-pic-07.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$07$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/assets/images/why-pic-07.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$07$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 500,
    height: 500,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDJ8N67ZtrMN8LZl8p8gI4z6AE4HPFY6p2uaXjy7H//2Q=="
};
}),
"[project]/dev/portfolio-2.1/src/assets/images/why-pic-08.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/why-pic-08.0ea89199.jpg");}),
"[project]/dev/portfolio-2.1/src/assets/images/why-pic-08.jpg.mjs { IMAGE => \"[project]/dev/portfolio-2.1/src/assets/images/why-pic-08.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$08$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/assets/images/why-pic-08.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$08$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 500,
    height: 1000,
    blurWidth: 4,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAQDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCraalp0MRjv9Nt7uVT99wFIGAcYrJziuhsqba3P//Z"
};
}),
"[project]/dev/portfolio-2.1/src/assets/images/why-pic-09.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/why-pic-09.905b1a1e.jpg");}),
"[project]/dev/portfolio-2.1/src/assets/images/why-pic-09.jpg.mjs { IMAGE => \"[project]/dev/portfolio-2.1/src/assets/images/why-pic-09.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$09$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/assets/images/why-pic-09.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$09$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 500,
    height: 1000,
    blurWidth: 4,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAQDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCK8+JWpx31wtnb2/2cSHywyknHbvS0A//Z"
};
}),
"[project]/dev/portfolio-2.1/src/assets/images/why-pic-10.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/why-pic-10.e5f091bb.jpg");}),
"[project]/dev/portfolio-2.1/src/assets/images/why-pic-10.jpg.mjs { IMAGE => \"[project]/dev/portfolio-2.1/src/assets/images/why-pic-10.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$10$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/assets/images/why-pic-10.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$10$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 500,
    height: 1000,
    blurWidth: 4,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAQDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDHPxFsFYmTR1kLHdxN0z25Fczw66HZ9Y8j/9k="
};
}),
"[project]/dev/portfolio-2.1/src/assets/images/why-pic-11.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/why-pic-11.b92ade50.jpg");}),
"[project]/dev/portfolio-2.1/src/assets/images/why-pic-11.jpg.mjs { IMAGE => \"[project]/dev/portfolio-2.1/src/assets/images/why-pic-11.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$11$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/assets/images/why-pic-11.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$11$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 500,
    height: 500,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDmBbadDoiXwQM4bBQuSSeRz7Vlb3uUpVPI/9k="
};
}),
"[project]/dev/portfolio-2.1/src/assets/images/why-pic-12.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/why-pic-12.b773097b.jpg");}),
"[project]/dev/portfolio-2.1/src/assets/images/why-pic-12.jpg.mjs { IMAGE => \"[project]/dev/portfolio-2.1/src/assets/images/why-pic-12.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$12$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/assets/images/why-pic-12.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$12$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 500,
    height: 500,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCnpmoWMeiXdpNdRysrq/mJE3y9Bz9frSH0P//Z"
};
}),
"[project]/dev/portfolio-2.1/src/assets/images/why-pic-13.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/why-pic-13.77f3305f.jpg");}),
"[project]/dev/portfolio-2.1/src/assets/images/why-pic-13.jpg.mjs { IMAGE => \"[project]/dev/portfolio-2.1/src/assets/images/why-pic-13.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$13$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/assets/images/why-pic-13.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$13$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 500,
    height: 500,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCpdSSG1d7hnmdZQkThtsbEAk445HBpX/mL5Unof//Z"
};
}),
"[project]/dev/portfolio-2.1/src/assets/images/why-pic-14.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/why-pic-14.f557c21a.jpg");}),
"[project]/dev/portfolio-2.1/src/assets/images/why-pic-14.jpg.mjs { IMAGE => \"[project]/dev/portfolio-2.1/src/assets/images/why-pic-14.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$14$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/assets/images/why-pic-14.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$14$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 500,
    height: 500,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDolvb6SeK8022ku7VpCsik42cAZHr3qG9TSMdD/9k="
};
}),
"[project]/dev/portfolio-2.1/src/assets/images/why-pic-15.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/why-pic-15.abd4f179.jpg");}),
"[project]/dev/portfolio-2.1/src/assets/images/why-pic-15.jpg.mjs { IMAGE => \"[project]/dev/portfolio-2.1/src/assets/images/why-pic-15.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$15$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/assets/images/why-pic-15.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$15$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 500,
    height: 500,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwBftK395dzyqoDv5kaYAO5jwaAP/9k="
};
}),
"[project]/dev/portfolio-2.1/src/assets/images/why-pic-16.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/why-pic-16.071f46ff.jpg");}),
"[project]/dev/portfolio-2.1/src/assets/images/why-pic-16.jpg.mjs { IMAGE => \"[project]/dev/portfolio-2.1/src/assets/images/why-pic-16.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$16$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/assets/images/why-pic-16.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$16$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 500,
    height: 500,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDQ0VRdaa19ZxNdE7hs3KpT1U5x0561za3OttdGf//Z"
};
}),
"[project]/dev/portfolio-2.1/src/sections/WhyMe.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2d$parallax$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-scroll-parallax/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$01$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$01$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dev/portfolio-2.1/src/assets/images/why-pic-01.jpg.mjs { IMAGE => "[project]/dev/portfolio-2.1/src/assets/images/why-pic-01.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$02$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$02$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dev/portfolio-2.1/src/assets/images/why-pic-02.jpg.mjs { IMAGE => "[project]/dev/portfolio-2.1/src/assets/images/why-pic-02.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$03$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$03$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dev/portfolio-2.1/src/assets/images/why-pic-03.jpg.mjs { IMAGE => "[project]/dev/portfolio-2.1/src/assets/images/why-pic-03.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$04$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$04$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dev/portfolio-2.1/src/assets/images/why-pic-04.jpg.mjs { IMAGE => "[project]/dev/portfolio-2.1/src/assets/images/why-pic-04.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$05$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$05$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dev/portfolio-2.1/src/assets/images/why-pic-05.jpg.mjs { IMAGE => "[project]/dev/portfolio-2.1/src/assets/images/why-pic-05.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$06$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$06$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dev/portfolio-2.1/src/assets/images/why-pic-06.jpg.mjs { IMAGE => "[project]/dev/portfolio-2.1/src/assets/images/why-pic-06.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$07$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$07$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dev/portfolio-2.1/src/assets/images/why-pic-07.jpg.mjs { IMAGE => "[project]/dev/portfolio-2.1/src/assets/images/why-pic-07.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$08$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$08$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dev/portfolio-2.1/src/assets/images/why-pic-08.jpg.mjs { IMAGE => "[project]/dev/portfolio-2.1/src/assets/images/why-pic-08.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$09$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$09$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dev/portfolio-2.1/src/assets/images/why-pic-09.jpg.mjs { IMAGE => "[project]/dev/portfolio-2.1/src/assets/images/why-pic-09.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$10$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$10$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dev/portfolio-2.1/src/assets/images/why-pic-10.jpg.mjs { IMAGE => "[project]/dev/portfolio-2.1/src/assets/images/why-pic-10.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$11$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$11$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dev/portfolio-2.1/src/assets/images/why-pic-11.jpg.mjs { IMAGE => "[project]/dev/portfolio-2.1/src/assets/images/why-pic-11.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$12$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$12$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dev/portfolio-2.1/src/assets/images/why-pic-12.jpg.mjs { IMAGE => "[project]/dev/portfolio-2.1/src/assets/images/why-pic-12.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$13$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$13$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dev/portfolio-2.1/src/assets/images/why-pic-13.jpg.mjs { IMAGE => "[project]/dev/portfolio-2.1/src/assets/images/why-pic-13.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$14$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$14$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dev/portfolio-2.1/src/assets/images/why-pic-14.jpg.mjs { IMAGE => "[project]/dev/portfolio-2.1/src/assets/images/why-pic-14.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$15$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$15$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dev/portfolio-2.1/src/assets/images/why-pic-15.jpg.mjs { IMAGE => "[project]/dev/portfolio-2.1/src/assets/images/why-pic-15.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$16$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$16$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dev/portfolio-2.1/src/assets/images/why-pic-16.jpg.mjs { IMAGE => "[project]/dev/portfolio-2.1/src/assets/images/why-pic-16.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const WhyMe = ()=>{
    const [heartShown, setHeartShown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [oneShown, setOneShown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [twoShown, setTwoShown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [threeShown, setThreeShown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fourShown, setFourShown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fiveShown, setFiveShown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sixShown, setSixShown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sevenShown, setSevenShown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [eightShown, setEightShown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [nineShown, setNineShown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tenShown, setTenShown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [elevenShown, setElevenShown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [twelveShown, setTwelveShown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [thirteenShown, setThirteenShown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fourteenShown, setFourteenShown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fifteenShown, setFifteenShown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sixteenShown, setSixteenShown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section whyme",
        id: "whyme",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "section-title",
                    children: "Why Me?"
                }, void 0, false, {
                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                    lineNumber: 46,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "whyme-subtitle",
                    children: [
                        "The opportunity to have a fully",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                            lineNumber: 48,
                            columnNumber: 42
                        }, ("TURBOPACK compile-time value", void 0)),
                        "qualified professional in your team."
                    ]
                }, void 0, true, {
                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                    lineNumber: 47,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "circle",
                    style: {
                        display: heartShown ? 'none' : 'flex'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "circle__title",
                            children: "Whole package"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                            lineNumber: 56,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "circle__text",
                            children: "Maturity, organization, strategic view, and much more from 24 years of experience."
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                            lineNumber: 57,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                    lineNumber: 52,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "circle-clicked",
                    style: {
                        display: heartShown ? 'flex' : 'none'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "circle-clicked__title",
                            children: "PASSION"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                            lineNumber: 67,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                            className: "circle-clicked__text",
                            children: [
                                "My career in marketing ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                    lineNumber: 69,
                                    columnNumber: 36
                                }, ("TURBOPACK compile-time value", void 0)),
                                " spanned more than two decades, and I achieved important positions ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                    lineNumber: 70,
                                    columnNumber: 44
                                }, ("TURBOPACK compile-time value", void 0)),
                                "I had planned. Now is the time for me to pursue a career I've been passionate about since I was a teenager. A career that I've been working on and having a lot of fun with!",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("q", {
                                    className: "circle-clicked__quote",
                                    rel: "Joe Namath",
                                    children: '"When you have fun, you can do amazing things."'
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "circle-clicked__quote--bright",
                                    children: "- Joe Namath"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                            lineNumber: 68,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                    lineNumber: 63,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "circle-small",
                    onClick: ()=>setHeartShown(!heartShown),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "circle-small__title",
                            children: "Why changing carrers?"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                            lineNumber: 87,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "circle-small__text",
                            children: "Click here"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                            lineNumber: 88,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                    lineNumber: 83,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "cv",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2d$parallax$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Parallax"], {
                            opacity: [
                                0,
                                2
                            ],
                            translateY: [
                                '100%',
                                '-50%'
                            ],
                            scale: [
                                2,
                                0.8
                            ],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cv__item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "cv__first-container",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "cv__first-wrapper",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "cv__first-title",
                                                        children: "Changing carreers"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                        lineNumber: 100,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "cv__first-title-curly",
                                                        style: {
                                                            marginLeft: '0.3em',
                                                            marginRight: '0.3em'
                                                        },
                                                        children: String.fromCharCode(123)
                                                    }, void 0, false, {
                                                        fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                        lineNumber: 101,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "cv__first-title--bright",
                                                        children: "software developer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                        lineNumber: 107,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "cv__first-title-curly",
                                                        children: String.fromCharCode(125)
                                                    }, void 0, false, {
                                                        fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                        lineNumber: 110,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "cv__first-square"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                        lineNumber: 113,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                lineNumber: 99,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "cv__cia-date cv__hightlight",
                                                children: [
                                                    "2020 ~ ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "cv__today",
                                                        children: "TODAY"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                        lineNumber: 116,
                                                        columnNumber: 26
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                lineNumber: 115,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "cv__tech cv__tech--mobile",
                                                style: {
                                                    width: "95%"
                                                },
                                                children: "React | Next.js | JavaScript | Typescript | CSS3 | SASS | HTML5 | Styled Components | Tailwind | APIs | Prisma | GraphQL | Retool | Airtable | Firebase | Responsive Design | Git | Yarn | NPM | Figma | Adobe Photoshop | Jira | Agile | ...And a big  smile"
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                lineNumber: 118,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "cv__b-wrapper cv__b-wrapper--mobile",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                className: "cv__benefit-title",
                                                children: "How does all of this benefit you?"
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: "cv__benefit",
                                                children: "I will work with teams, contributing and inspiring colleagues in order to get the best out of us."
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                lineNumber: 131,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                lineNumber: 97,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                            lineNumber: 92,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2d$parallax$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Parallax"], {
                            opacity: [
                                0,
                                2
                            ],
                            translateY: [
                                '100%',
                                '-50%'
                            ],
                            scale: [
                                2,
                                0.8
                            ],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cv__item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "cv__a-wrapper",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "cv__title",
                                                children: "General Director"
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                lineNumber: 145,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "cv__square"
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                lineNumber: 146,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "cv__cia-date",
                                                children: [
                                                    "Circus | ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "cv__hightlight",
                                                        children: "2016 ~ 2020"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                        lineNumber: 148,
                                                        columnNumber: 28
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "cv__tech",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Leadership"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                        lineNumber: 151,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Product Strategy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                        lineNumber: 152,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Agile methodology"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                        lineNumber: 153,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                lineNumber: 150,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "cv__b-wrapper",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                className: "cv__benefit-title",
                                                children: "Why is it good for you?"
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                lineNumber: 158,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: "cv__benefit",
                                                children: "I will bring valuable experience and leadership skills to your organization."
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                lineNumber: 159,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                lineNumber: 143,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                            lineNumber: 138,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2d$parallax$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Parallax"], {
                            opacity: [
                                0,
                                2
                            ],
                            translateY: [
                                '100%',
                                '-50%'
                            ],
                            scale: [
                                2,
                                0.8
                            ],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cv__item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "cv__a-wrapper",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "cv__title",
                                                children: "Planning and new business director"
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                lineNumber: 173,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "cv__square"
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                lineNumber: 176,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "cv__cia-date",
                                                children: [
                                                    "Circus | ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "cv__hightlight",
                                                        children: "2011 ~ 2015"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                        lineNumber: 178,
                                                        columnNumber: 28
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                lineNumber: 177,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "cv__tech",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Presentations"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                        lineNumber: 181,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Leadership"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                        lineNumber: 182,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Sales"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                        lineNumber: 183,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                lineNumber: 180,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "cv__b-wrapper",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                className: "cv__benefit-title",
                                                children: "Why is it good for you?"
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                lineNumber: 188,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: "cv__benefit",
                                                children: [
                                                    "Through listening, ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                        lineNumber: 190,
                                                        columnNumber: 38
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "strategy, and effective communication, I will present my ideas, negotiating and optimizing results on multiple fronts."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                lineNumber: 189,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                        lineNumber: 187,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                lineNumber: 171,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                            lineNumber: 166,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2d$parallax$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Parallax"], {
                            opacity: [
                                0,
                                2
                            ],
                            translateY: [
                                '100%',
                                '-50%'
                            ],
                            scale: [
                                2,
                                0.8
                            ],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cv__item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "cv__a-wrapper",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "cv__title",
                                                children: "Client Services Director"
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                lineNumber: 204,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "cv__square"
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                lineNumber: 205,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "cv__cia-date",
                                                children: [
                                                    "WE | ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "cv__hightlight",
                                                        children: "2008 ~ 2010"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                        lineNumber: 207,
                                                        columnNumber: 24
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                lineNumber: 206,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "cv__cia-date",
                                                children: [
                                                    "Rapp Collins |",
                                                    ' ',
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "cv__hightlight",
                                                        children: "2007 ~ 2008"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                        lineNumber: 211,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                lineNumber: 209,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "cv__tech",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Leadership"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                        lineNumber: 214,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Business & Financial"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                        lineNumber: 215,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Problem Solving"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                        lineNumber: 216,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                lineNumber: 213,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                        lineNumber: 203,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "cv__b-wrapper",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                className: "cv__benefit-title",
                                                children: "Why is it good for you?"
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                lineNumber: 221,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: "cv__benefit",
                                                children: "I will listen closely to customers to understand and discover their real needs."
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                lineNumber: 222,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                        lineNumber: 220,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                lineNumber: 202,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                            lineNumber: 197,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2d$parallax$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Parallax"], {
                            opacity: [
                                0,
                                2
                            ],
                            translateY: [
                                '100%',
                                '-50%'
                            ],
                            scale: [
                                2,
                                0.8
                            ],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cv__item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "cv__a-wrapper",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "cv__title",
                                                children: [
                                                    "Advertising ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                        lineNumber: 237,
                                                        columnNumber: 31
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "and digital marketing manager"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                lineNumber: 236,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "cv__square"
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                lineNumber: 239,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "cv__cia-date",
                                                children: [
                                                    "Peugeot-Citroën Automobile |",
                                                    ' ',
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "cv__hightlight",
                                                        children: "2000 ~ 2007"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                        lineNumber: 242,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                lineNumber: 240,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "cv__tech",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Critical Thinking"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                        lineNumber: 245,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Strategy & Criativity"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                        lineNumber: 246,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Keen eye for design"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                        lineNumber: 247,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                lineNumber: 244,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                        lineNumber: 235,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "cv__b-wrapper",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                className: "cv__benefit-title",
                                                children: "Why is it good for you?"
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                lineNumber: 252,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: "cv__benefit",
                                                children: "I will use my experience in campaign evaluation, critical thinking, and a keen eye for design to provide my opinion so the team can develop the best digital product."
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                                lineNumber: 253,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                        lineNumber: 251,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                lineNumber: 234,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                            lineNumber: 229,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                    lineNumber: 91,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "pics",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pics__wrapper-vertical",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$01$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$01$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                    alt: "gallery element",
                                    className: "pics__pic",
                                    onMouseEnter: ()=>setOneShown(true),
                                    onMouseLeave: ()=>setOneShown(false)
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                    lineNumber: 265,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                oneShown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "pics__subtitle",
                                    children: "WE 2008"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                    lineNumber: 272,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                            lineNumber: 264,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pics__wrapper-vertical",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$02$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$02$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                    alt: "gallery element",
                                    className: "pics__pic",
                                    onMouseEnter: ()=>setTwoShown(true),
                                    onMouseLeave: ()=>setTwoShown(false)
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                    lineNumber: 276,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                twoShown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "pics__subtitle",
                                    children: "Circus 2017"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                    lineNumber: 283,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                            lineNumber: 275,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pics__wrapper",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$03$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$03$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                    alt: "gallery element",
                                    className: "pics__pic",
                                    onMouseEnter: ()=>setThirteenShown(true),
                                    s: true,
                                    onMouseLeave: ()=>setThirteenShown(false)
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                    lineNumber: 287,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                thirteenShown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "pics__subtitle",
                                    children: "Circus 2019"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                    lineNumber: 296,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                            lineNumber: 286,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pics__wrapper-vertical",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$04$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$04$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                    alt: "gallery element",
                                    className: "pics__pic",
                                    onMouseEnter: ()=>setFourShown(true),
                                    onMouseLeave: ()=>setFourShown(false)
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                    lineNumber: 301,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                fourShown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "pics__subtitle",
                                    children: "Citroën 2007"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                    lineNumber: 308,
                                    columnNumber: 26
                                }, ("TURBOPACK compile-time value", void 0)) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                            lineNumber: 300,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pics__wrapper-vertical",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$05$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$05$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                    alt: "gallery element",
                                    className: "pics__pic",
                                    onMouseEnter: ()=>setFiveShown(true),
                                    onMouseLeave: ()=>setFiveShown(false)
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                    lineNumber: 312,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                fiveShown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "pics__subtitle",
                                    children: "WE 2008"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                    lineNumber: 319,
                                    columnNumber: 26
                                }, ("TURBOPACK compile-time value", void 0)) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                            lineNumber: 311,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pics__wrapper-vertical",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$06$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$06$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                    alt: "gallery element",
                                    className: "pics__pic",
                                    onMouseEnter: ()=>setSixShown(true),
                                    onMouseLeave: ()=>setSixShown(false)
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                    lineNumber: 323,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                sixShown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "pics__subtitle",
                                    children: "Circus 2020"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                    lineNumber: 330,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                            lineNumber: 322,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pics__wrapper",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$07$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$07$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                    alt: "gallery element",
                                    className: "pics__pic",
                                    onMouseEnter: ()=>setSevenShown(true),
                                    onMouseLeave: ()=>setSevenShown(false)
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                    lineNumber: 334,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                sevenShown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "pics__subtitle",
                                    children: "Circus 2016"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                    lineNumber: 341,
                                    columnNumber: 27
                                }, ("TURBOPACK compile-time value", void 0)) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                            lineNumber: 333,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pics__wrapper-vertical",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$08$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$08$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                    alt: "gallery element",
                                    className: "pics__pic",
                                    onMouseEnter: ()=>setEightShown(true),
                                    onMouseLeave: ()=>setEightShown(false)
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                    lineNumber: 345,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                eightShown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "pics__subtitle",
                                    children: "Circus 2014"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                    lineNumber: 352,
                                    columnNumber: 27
                                }, ("TURBOPACK compile-time value", void 0)) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                            lineNumber: 344,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pics__wrapper-vertical",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$09$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$09$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                    alt: "gallery element",
                                    className: "pics__pic",
                                    onMouseEnter: ()=>setNineShown(true),
                                    onMouseLeave: ()=>setNineShown(false)
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                    lineNumber: 356,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                nineShown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "pics__subtitle",
                                    children: "Citroën 2006"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                    lineNumber: 363,
                                    columnNumber: 26
                                }, ("TURBOPACK compile-time value", void 0)) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                            lineNumber: 355,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pics__wrapper-vertical",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$10$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$10$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                    alt: "gallery element",
                                    className: "pics__pic",
                                    onMouseEnter: ()=>setTenShown(true),
                                    onMouseLeave: ()=>setTenShown(false)
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                    lineNumber: 367,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                tenShown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "pics__subtitle",
                                    children: "Circus 2020"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                    lineNumber: 374,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                            lineNumber: 366,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pics__wrapper",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$11$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$11$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                    alt: "gallery element",
                                    className: "pics__pic",
                                    onMouseEnter: ()=>setElevenShown(true),
                                    onMouseLeave: ()=>setElevenShown(false)
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                    lineNumber: 378,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                elevenShown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "pics__subtitle",
                                    children: "Circus 2019"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                    lineNumber: 385,
                                    columnNumber: 28
                                }, ("TURBOPACK compile-time value", void 0)) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                            lineNumber: 377,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pics__wrapper",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$12$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$12$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                    alt: "gallery element",
                                    className: "pics__pic",
                                    onMouseEnter: ()=>setTwelveShown(true),
                                    onMouseLeave: ()=>setTwelveShown(false)
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                    lineNumber: 389,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                twelveShown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "pics__subtitle",
                                    children: "Rapp Collins 2008"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                    lineNumber: 397,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                            lineNumber: 388,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pics__wrapper",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$13$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$13$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                    alt: "gallery element",
                                    className: "pics__pic",
                                    onMouseEnter: ()=>setThreeShown(true),
                                    onMouseLeave: ()=>setThreeShown(false)
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                    lineNumber: 401,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                threeShown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "pics__subtitle",
                                    children: "Circus 2012"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                    lineNumber: 408,
                                    columnNumber: 27
                                }, ("TURBOPACK compile-time value", void 0)) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                            lineNumber: 400,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pics__wrapper",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$14$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$14$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                    alt: "gallery element",
                                    className: "pics__pic",
                                    onMouseEnter: ()=>setFourteenShown(true),
                                    onMouseLeave: ()=>setFourteenShown(false)
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                    lineNumber: 412,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                fourteenShown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "pics__subtitle",
                                    children: "Rapp Collins 2007"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                    lineNumber: 420,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                            lineNumber: 411,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pics__wrapper",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$15$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$15$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                    alt: "gallery element",
                                    className: "pics__pic",
                                    onMouseEnter: ()=>setFifteenShown(true),
                                    onMouseLeave: ()=>setFifteenShown(false)
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                    lineNumber: 425,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                fifteenShown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "pics__subtitle",
                                    children: "Circus 2013"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                    lineNumber: 433,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                            lineNumber: 424,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pics__wrapper",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$16$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$why$2d$pic$2d$16$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                    alt: "gallery element",
                                    className: "pics__pic",
                                    onMouseEnter: ()=>setSixteenShown(true),
                                    onMouseLeave: ()=>setSixteenShown(false)
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                    lineNumber: 438,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                sixteenShown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "pics__subtitle",
                                    children: "Rapp Collins 2007"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                                    lineNumber: 446,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                            lineNumber: 437,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
                    lineNumber: 263,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
            lineNumber: 45,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/dev/portfolio-2.1/src/sections/WhyMe.js",
        lineNumber: 44,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = WhyMe;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/dev/portfolio-2.1/src/sections/Ai.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$components$2f$WhyCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/components/WhyCard.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/data/Data.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$openai$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/openai/dist/index.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const Ai = ({ color })=>{
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Ask me');
    const [prompt, setPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [newPrompt, setNewPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isResultActive, setIsResultActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    let imageRightHand = '';
    let imageLeftHand = '';
    const HandImageColor = ()=>{
        if (color.first) {
            imageRightHand = '/images/hand-right-black-bg.png';
            imageLeftHand = '/images/hand-left-black-bg.png';
        } else if (color.second) {
            imageRightHand = '/images/hand-right-blue-bg.png';
            imageLeftHand = '/images/hand-left-blue-bg.png';
        } else if (color.third) {
            imageRightHand = '/images/hand-right-grey-bg.png';
            imageLeftHand = '/images/hand-left-grey-bg.png';
        }
    };
    HandImageColor();
    const onSubmit = (e)=>{
        e.preventDefault();
        const configuration = new __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$openai$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Configuration"]({
            apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY
        });
        setStatus('Thinking...');
        const openai = new __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$openai$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OpenAIApi"](configuration);
        openai.createCompletion('text-curie-001', {
            prompt: prompt,
            temperature: 1,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
        }).then((response)=>{
            setResult(response.data.choices[0].text.trim());
            setIsResultActive(true);
            setNewPrompt(prompt);
            setStatus('ASK ME AGAIN');
            setPrompt('');
        }).catch((error)=>console.log(error.message));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section ai",
        id: "ai",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "section-title",
                        children: "Crystal Ball"
                    }, void 0, false, {
                        fileName: "[project]/dev/portfolio-2.1/src/sections/Ai.js",
                        lineNumber: 63,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "ai__question",
                        children: "A.I. technology or Witchcraft?"
                    }, void 0, false, {
                        fileName: "[project]/dev/portfolio-2.1/src/sections/Ai.js",
                        lineNumber: 64,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: "ai__form",
                        onSubmit: onSubmit,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ai__examples",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "ai__examples-title",
                                        children: "Here are some suggestions for what to ask for:"
                                    }, void 0, false, {
                                        fileName: "[project]/dev/portfolio-2.1/src/sections/Ai.js",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "ai__examples-item",
                                                children: "Suggest a drama movie based on a true story with a good score on the rotten tomatoes website."
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/Ai.js",
                                                lineNumber: 71,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "ai__examples-item",
                                                children: "I need a gift suggestion for my wife. She is 35 years old and loves to work out and challenge herself."
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/Ai.js",
                                                lineNumber: 75,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "ai__examples-item",
                                                children: "Correct this to standard English: She no went to the market."
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/Ai.js",
                                                lineNumber: 79,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "ai__examples-item",
                                                children: "Write a recipe based on these ingredients: meat, cheddar cheese, onions, sour cream, and rice."
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/Ai.js",
                                                lineNumber: 82,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dev/portfolio-2.1/src/sections/Ai.js",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dev/portfolio-2.1/src/sections/Ai.js",
                                lineNumber: 66,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ai__hands",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        className: "ai__hand-left",
                                        src: imageLeftHand,
                                        alt: "hand over crystal ball"
                                    }, void 0, false, {
                                        fileName: "[project]/dev/portfolio-2.1/src/sections/Ai.js",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        className: "ai__hand-right",
                                        src: imageRightHand,
                                        alt: "hand over crystal ball"
                                    }, void 0, false, {
                                        fileName: "[project]/dev/portfolio-2.1/src/sections/Ai.js",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dev/portfolio-2.1/src/sections/Ai.js",
                                lineNumber: 88,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                className: "ai__textarea",
                                type: "text",
                                name: "prompt",
                                placeholder: "Ask me anything, but at your own risk.",
                                value: prompt,
                                onChange: (e)=>setPrompt(e.target.value),
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/dev/portfolio-2.1/src/sections/Ai.js",
                                lineNumber: 100,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn--third-color ai__button",
                                type: "submit",
                                style: {
                                    backgroundColor: status === 'Thinking...' ? 'var(--dark-color)' : 'var(--third-color)'
                                },
                                children: status
                            }, void 0, false, {
                                fileName: "[project]/dev/portfolio-2.1/src/sections/Ai.js",
                                lineNumber: 109,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dev/portfolio-2.1/src/sections/Ai.js",
                        lineNumber: 65,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "result",
                        id: "ai-result",
                        style: {
                            display: isResultActive ? 'flex' : 'none'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "result__item",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "result__wrapper",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "result__title",
                                            children: "Your question:"
                                        }, void 0, false, {
                                            fileName: "[project]/dev/portfolio-2.1/src/sections/Ai.js",
                                            lineNumber: 130,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "result__text",
                                            children: newPrompt
                                        }, void 0, false, {
                                            fileName: "[project]/dev/portfolio-2.1/src/sections/Ai.js",
                                            lineNumber: 131,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/Ai.js",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "result__wrapper",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "result__title",
                                            children: "My wisdom:"
                                        }, void 0, false, {
                                            fileName: "[project]/dev/portfolio-2.1/src/sections/Ai.js",
                                            lineNumber: 134,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "result__text",
                                            children: result
                                        }, void 0, false, {
                                            fileName: "[project]/dev/portfolio-2.1/src/sections/Ai.js",
                                            lineNumber: 135,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/Ai.js",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Ai.js",
                            lineNumber: 128,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/dev/portfolio-2.1/src/sections/Ai.js",
                        lineNumber: 123,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/dev/portfolio-2.1/src/sections/Ai.js",
                lineNumber: 62,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$components$2f$WhyCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                titleOne: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].ai.titleOne,
                textOne: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].ai.textOne,
                titleTwo: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].ai.titleTwo,
                textTwo: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].ai.textTwo,
                titleThree: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].ai.titleThree,
                textThree: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].ai.textThree,
                titleFour: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].ai.titleFour,
                textFour: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].ai.textFour,
                observation: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].ai.observation,
                bottom: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].ai.bottom,
                left: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].ai.left
            }, void 0, false, {
                fileName: "[project]/dev/portfolio-2.1/src/sections/Ai.js",
                lineNumber: 140,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/dev/portfolio-2.1/src/sections/Ai.js",
        lineNumber: 61,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Ai;
}),
"[project]/dev/portfolio-2.1/src/assets/images/line-cracked.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/line-cracked.b0cb7181.svg");}),
"[project]/dev/portfolio-2.1/src/assets/images/line-cracked.svg.mjs { IMAGE => \"[project]/dev/portfolio-2.1/src/assets/images/line-cracked.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$line$2d$cracked$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/assets/images/line-cracked.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$line$2d$cracked$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1336,
    height: 32,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/dev/portfolio-2.1/src/components/Card.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$card$2d$icon$2d$close$2d$white$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$card$2d$icon$2d$close$2d$white$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dev/portfolio-2.1/src/assets/images/card-icon-close-white.svg.mjs { IMAGE => "[project]/dev/portfolio-2.1/src/assets/images/card-icon-close-white.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$line$2d$cracked$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$line$2d$cracked$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dev/portfolio-2.1/src/assets/images/line-cracked.svg.mjs { IMAGE => "[project]/dev/portfolio-2.1/src/assets/images/line-cracked.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
'use client';
;
;
;
;
;
const Card = ({ project })=>{
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false
    });
    const handleClickToOpen = ()=>{
        handleClickToClose();
        setIsOpen((prev)=>({
                ...prev,
                [project.id]: true
            }));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
    // console.log(project.id);
    }, [
        isOpen
    ]);
    const handleClickToClose = ()=>{
        setIsOpen((prev)=>({
                prev: false
            }));
    };
    // ========================== ANIMATION ==========================
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const reveal = ()=>{
            const reveals = document.querySelectorAll(".card-front__reveal");
            for(var i = 0; i < reveals.length; i++){
                let windowHeight = window.innerHeight;
                let elementTop = reveals[i].getBoundingClientRect().top;
                let elementVisible = 150;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("card-front__reveal--active");
                } else {
                    reveals[i].classList.remove("card-front__reveal--active");
                }
            }
        };
        window.addEventListener("scroll", reveal);
        reveal();
        return ()=>window.removeEventListener("scroll", reveal);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card-front card-front__reveal",
                onClick: handleClickToOpen,
                style: {
                    display: isOpen[project.id] ? "none" : "block"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "card-front__category",
                        children: project.category
                    }, void 0, false, {
                        fileName: "[project]/dev/portfolio-2.1/src/components/Card.js",
                        lineNumber: 65,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-front__box",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                className: "card-front__icon",
                                src: project.icon,
                                alt: "icon project"
                            }, void 0, false, {
                                fileName: "[project]/dev/portfolio-2.1/src/components/Card.js",
                                lineNumber: 67,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-front__title-wrapper",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "card-front__title--red",
                                        children: project.title0
                                    }, void 0, false, {
                                        fileName: "[project]/dev/portfolio-2.1/src/components/Card.js",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "card-front__title",
                                        children: project.titleA
                                    }, void 0, false, {
                                        fileName: "[project]/dev/portfolio-2.1/src/components/Card.js",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "card-front__tech",
                                        children: project.tech
                                    }, void 0, false, {
                                        fileName: "[project]/dev/portfolio-2.1/src/components/Card.js",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dev/portfolio-2.1/src/components/Card.js",
                                lineNumber: 72,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dev/portfolio-2.1/src/components/Card.js",
                        lineNumber: 66,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "card-front__description",
                        children: project.frontText
                    }, void 0, false, {
                        fileName: "[project]/dev/portfolio-2.1/src/components/Card.js",
                        lineNumber: 78,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/dev/portfolio-2.1/src/components/Card.js",
                lineNumber: 58,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card-back",
                style: {
                    display: isOpen[project.id] ? "block" : "none"
                },
                onClick: handleClickToClose,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-back__background",
                    style: {
                        backgroundColor: project.backgroundColor
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: "card-back__close",
                            onClick: handleClickToClose,
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$card$2d$icon$2d$close$2d$white$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$card$2d$icon$2d$close$2d$white$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                            alt: "close button"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/components/Card.js",
                            lineNumber: 94,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-back__first-container",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-back__first-wrapper",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "card-back__main-title",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: project.title0
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/components/Card.js",
                                                lineNumber: 103,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            project.titleA
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dev/portfolio-2.1/src/components/Card.js",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "card-back__year",
                                        children: project.year
                                    }, void 0, false, {
                                        fileName: "[project]/dev/portfolio-2.1/src/components/Card.js",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        className: "card-back__image",
                                        src: project.image,
                                        alt: "main project"
                                    }, void 0, false, {
                                        fileName: "[project]/dev/portfolio-2.1/src/components/Card.js",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    project.visitIcon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "card-back__visit-wraper",
                                        href: project.url,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "card-back__visit icon-visit",
                                            children: "visit project"
                                        }, void 0, false, {
                                            fileName: "[project]/dev/portfolio-2.1/src/components/Card.js",
                                            lineNumber: 119,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/dev/portfolio-2.1/src/components/Card.js",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dev/portfolio-2.1/src/components/Card.js",
                                lineNumber: 101,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/components/Card.js",
                            lineNumber: 100,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$line$2d$cracked$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$line$2d$cracked$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                            alt: "line separation",
                            className: "card-back__line"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/components/Card.js",
                            lineNumber: 125,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-back__second-container",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-back__second-wrapper",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "card-back__category",
                                        children: project.category
                                    }, void 0, false, {
                                        fileName: "[project]/dev/portfolio-2.1/src/components/Card.js",
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "card-back__title",
                                        children: project.backText_titleOne
                                    }, void 0, false, {
                                        fileName: "[project]/dev/portfolio-2.1/src/components/Card.js",
                                        lineNumber: 131,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "card-back__text",
                                        children: project.backText_textOne
                                    }, void 0, false, {
                                        fileName: "[project]/dev/portfolio-2.1/src/components/Card.js",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "card-back__title",
                                        children: project.backText_titleTwo
                                    }, void 0, false, {
                                        fileName: "[project]/dev/portfolio-2.1/src/components/Card.js",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "card-back__text",
                                        children: project.backText_textTwo
                                    }, void 0, false, {
                                        fileName: "[project]/dev/portfolio-2.1/src/components/Card.js",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "card-back__title",
                                        children: project.backText_titleThree
                                    }, void 0, false, {
                                        fileName: "[project]/dev/portfolio-2.1/src/components/Card.js",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "card-back__text card-back__text--last",
                                        children: project.backText_textThree
                                    }, void 0, false, {
                                        fileName: "[project]/dev/portfolio-2.1/src/components/Card.js",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "card-back__title",
                                        children: project.backText_titleFour
                                    }, void 0, false, {
                                        fileName: "[project]/dev/portfolio-2.1/src/components/Card.js",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "card-back__text card-back__text--last",
                                        children: project.backText_textFour
                                    }, void 0, false, {
                                        fileName: "[project]/dev/portfolio-2.1/src/components/Card.js",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "card-back__text card-back__text--bold",
                                        href: project.backText_link,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: project.backText_linkName
                                    }, void 0, false, {
                                        fileName: "[project]/dev/portfolio-2.1/src/components/Card.js",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dev/portfolio-2.1/src/components/Card.js",
                                lineNumber: 128,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/components/Card.js",
                            lineNumber: 127,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/dev/portfolio-2.1/src/components/Card.js",
                    lineNumber: 90,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/dev/portfolio-2.1/src/components/Card.js",
                lineNumber: 83,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/dev/portfolio-2.1/src/components/Card.js",
        lineNumber: 56,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Card;
}),
"[project]/dev/portfolio-2.1/src/sections/Projects.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$components$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/components/Card.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$components$2f$WhyCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/components/WhyCard.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/data/Data.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2d$parallax$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-scroll-parallax/dist/index.mjs [app-ssr] (ecmascript) <locals>");
'use client';
;
;
;
;
;
;
;
const Projects = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section projects",
        id: "projects",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2d$parallax$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Parallax"], {
                    opacity: [
                        0,
                        3
                    ],
                    scale: [
                        1.5,
                        0.9
                    ],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "section-title projects__title",
                        children: "selected projects"
                    }, void 0, false, {
                        fileName: "[project]/dev/portfolio-2.1/src/sections/Projects.js",
                        lineNumber: 15,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/dev/portfolio-2.1/src/sections/Projects.js",
                    lineNumber: 14,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "projects__wrapper",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"].map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$components$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            project: project
                        }, project.id, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Projects.js",
                            lineNumber: 20,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/dev/portfolio-2.1/src/sections/Projects.js",
                    lineNumber: 18,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$components$2f$WhyCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    titleOne: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].selectedProjects.titleOne,
                    textOne: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].selectedProjects.textOne,
                    titleTwo: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].selectedProjects.titleTwo,
                    textTwo: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].selectedProjects.textTwo,
                    titleThree: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].selectedProjects.titleThree,
                    textThree: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].selectedProjects.textThree,
                    titleFour: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].selectedProjects.titleFour,
                    textFour: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].selectedProjects.textFour,
                    observation: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].selectedProjects.observation,
                    bottom: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].selectedProjects.bottom,
                    left: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].selectedProjects.left
                }, void 0, false, {
                    fileName: "[project]/dev/portfolio-2.1/src/sections/Projects.js",
                    lineNumber: 23,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/dev/portfolio-2.1/src/sections/Projects.js",
            lineNumber: 13,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/dev/portfolio-2.1/src/sections/Projects.js",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Projects;
}),
"[project]/dev/portfolio-2.1/src/sections/AboveApi.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const AboveApi = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section above-api"
    }, void 0, false, {
        fileName: "[project]/dev/portfolio-2.1/src/sections/AboveApi.js",
        lineNumber: 7,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = AboveApi;
}),
"[project]/dev/portfolio-2.1/src/sections/Api.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/axios/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$components$2f$WhyCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/components/WhyCard.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/data/Data.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const Api = ()=>{
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [location, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY}&units=metric`;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`https://api.openweathermap.org/data/2.5/weather?q=ottawa&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY}&units=metric`).then((response)=>{
            setData(response.data);
        });
    }, []);
    const searchLocation = (e)=>{
        if (e.key === "Enter") {
            document.getElementById("api__error").style.display = "none";
            __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(url).then((response)=>{
                setData(response.data);
            }).catch((error)=>{
                if (error.response) {
                    document.getElementById("api__error").style.display = "block";
                }
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "api-external",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                className: "api-external__image",
                src: data.weather ? `/images/${data.weather[0].icon}.png` : null,
                alt: "weather condition"
            }, void 0, false, {
                fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section api",
                id: "api",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "api__grid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "api__question",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: "What city"
                                        }, void 0, false, {
                                            fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: "are you in?"
                                        }, void 0, false, {
                                            fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "api__input",
                                            value: location,
                                            onChange: (e)=>setLocation(e.target.value),
                                            onKeyPress: searchLocation,
                                            placeholder: "enter location",
                                            type: "text"
                                        }, void 0, false, {
                                            fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    id: "api__error",
                                    children: "...Ops, city not found. Try again! :)"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "api__location-title",
                                    children: "Weather in"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "api__city",
                                    children: data.name
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                data.sys ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "api__country",
                                    children: data.sys.country
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : null,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "api__log",
                                    children: [
                                        "Longitude ",
                                        data.coord ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: data.coord.lon
                                        }, void 0, false, {
                                            fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                            lineNumber: 72,
                                            columnNumber: 39
                                        }, ("TURBOPACK compile-time value", void 0)) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "api__lat",
                                    children: [
                                        "Latitude ",
                                        data.coord ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: data.coord.lat
                                        }, void 0, false, {
                                            fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                            lineNumber: 75,
                                            columnNumber: 38
                                        }, ("TURBOPACK compile-time value", void 0)) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "api__description",
                                    children: data.weather ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: data.weather[0].description
                                    }, void 0, false, {
                                        fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                        lineNumber: 80,
                                        columnNumber: 31
                                    }, ("TURBOPACK compile-time value", void 0)) : null
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "api__feels-wrapper",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "api__feels-title",
                                            children: "Feels like"
                                        }, void 0, false, {
                                            fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: data.main ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "data-feels",
                                                children: Math.trunc(data.main.feels_like)
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                                lineNumber: 87,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)) : null
                                        }, void 0, false, {
                                            fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                            lineNumber: 85,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    className: "api__feels-c",
                                    children: "°C"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "api__temp-wrapper",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "api__temp-title",
                                            children: "Current weather"
                                        }, void 0, false, {
                                            fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: data.main ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "api__temp",
                                                children: [
                                                    Math.trunc(data.main.temp),
                                                    "°C"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                                lineNumber: 99,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)) : null
                                        }, void 0, false, {
                                            fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "api__wind-wrapper",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "api__others-title",
                                            children: "Wind"
                                        }, void 0, false, {
                                            fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: data.wind ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "data",
                                                children: data.wind.speed
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                                lineNumber: 106,
                                                columnNumber: 30
                                            }, ("TURBOPACK compile-time value", void 0)) : null
                                        }, void 0, false, {
                                            fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                            lineNumber: 105,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            className: "api__unit",
                                            children: "km/h"
                                        }, void 0, false, {
                                            fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "api__pressure-wrapper",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "api__others-title",
                                            children: "Pressure"
                                        }, void 0, false, {
                                            fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                            lineNumber: 112,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: data.main ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "data",
                                                children: data.main.pressure
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                                lineNumber: 115,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)) : null
                                        }, void 0, false, {
                                            fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            className: "api__unit",
                                            children: "kPa"
                                        }, void 0, false, {
                                            fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                            lineNumber: 118,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "api__humidity-wrapper",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "api__others-title",
                                            children: "Humidity"
                                        }, void 0, false, {
                                            fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                            lineNumber: 122,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: data.main ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "data",
                                                children: data.main.humidity
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                                lineNumber: 125,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)) : null
                                        }, void 0, false, {
                                            fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            className: "api__unit",
                                            children: "%"
                                        }, void 0, false, {
                                            fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                            lineNumber: 128,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "api__visibility-wrapper",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "api__others-title",
                                            children: "Visibility"
                                        }, void 0, false, {
                                            fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                            lineNumber: 132,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "data",
                                            children: data.visibility
                                        }, void 0, false, {
                                            fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                            lineNumber: 133,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            className: "api__unit",
                                            children: "km"
                                        }, void 0, false, {
                                            fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                            lineNumber: 134,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "api__sunrise-wrapper",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "api__others-title",
                                            children: "Sunrise"
                                        }, void 0, false, {
                                            fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                            lineNumber: 138,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: data.sys ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "data",
                                                children: new Date(data.sys.sunrise * 6000 - data.timezone * 1000).toString().slice(17, 21)
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                                lineNumber: 141,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)) : null
                                        }, void 0, false, {
                                            fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            className: "api__unit",
                                            children: "a.m."
                                        }, void 0, false, {
                                            fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                            lineNumber: 148,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "api__sunset-wrapper",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "api__others-title",
                                            children: "Sunset"
                                        }, void 0, false, {
                                            fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                            lineNumber: 152,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: data.sys ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "data",
                                                children: new Date(data.sys.sunrise * 6000 - data.timezone * 1000).toString().slice(17, 21)
                                            }, void 0, false, {
                                                fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                                lineNumber: 155,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)) : null
                                        }, void 0, false, {
                                            fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            className: "api__unit",
                                            children: "p.m."
                                        }, void 0, false, {
                                            fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "api__updated-wrapper",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "api__date",
                                            children: "Updated on"
                                        }, void 0, false, {
                                            fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                            lineNumber: 166,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "api__date",
                                            children: new Date(data.dt * 1000 - data.timezone * 6000).toString().slice(4)
                                        }, void 0, false, {
                                            fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                            lineNumber: 167,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                            lineNumber: 51,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                        lineNumber: 50,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$components$2f$WhyCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        titleOne: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].api.titleOne,
                        textOne: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].api.textOne,
                        titleTwo: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].api.titleTwo,
                        textTwo: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].api.textTwo,
                        titleThree: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].api.titleThree,
                        textThree: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].api.textThree,
                        titleFour: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].api.titleFour,
                        textFour: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].api.textFour,
                        observation: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].api.observation,
                        bottom: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].api.bottom,
                        left: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].api.left
                    }, void 0, false, {
                        fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                        lineNumber: 176,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
                lineNumber: 49,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/dev/portfolio-2.1/src/sections/Api.js",
        lineNumber: 39,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Api;
}),
"[project]/dev/portfolio-2.1/src/assets/images/code-check.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/code-check.5af8ada4.svg");}),
"[project]/dev/portfolio-2.1/src/assets/images/code-check.svg.mjs { IMAGE => \"[project]/dev/portfolio-2.1/src/assets/images/code-check.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$code$2d$check$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/assets/images/code-check.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$code$2d$check$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 32,
    height: 32,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/dev/portfolio-2.1/src/assets/images/code-check-return.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/code-check-return.3edb357e.svg");}),
"[project]/dev/portfolio-2.1/src/assets/images/code-check-return.svg.mjs { IMAGE => \"[project]/dev/portfolio-2.1/src/assets/images/code-check-return.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$code$2d$check$2d$return$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/assets/images/code-check-return.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$code$2d$check$2d$return$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 32,
    height: 32,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/dev/portfolio-2.1/src/sections/CleanCode.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2d$parallax$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-scroll-parallax/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$components$2f$WhyCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/components/WhyCard.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/data/Data.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$code$2d$check$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$code$2d$check$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dev/portfolio-2.1/src/assets/images/code-check.svg.mjs { IMAGE => "[project]/dev/portfolio-2.1/src/assets/images/code-check.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$code$2d$check$2d$return$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$code$2d$check$2d$return$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dev/portfolio-2.1/src/assets/images/code-check-return.svg.mjs { IMAGE => "[project]/dev/portfolio-2.1/src/assets/images/code-check-return.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
'use client';
;
;
;
;
;
;
;
;
const CleanCode = ()=>{
    const [showBackground, setShowBackground] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleClick = ()=>{
        setShowBackground(!showBackground);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{}, [
        showBackground
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "code",
        className: !showBackground ? 'section code' : 'section code code__background',
        style: {
            padding: showBackground && '35em'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2d$parallax$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Parallax"], {
                opacity: [
                    0,
                    2
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "section-title",
                        style: {
                            display: showBackground ? 'none' : 'block'
                        },
                        children: "My code"
                    }, void 0, false, {
                        fileName: "[project]/dev/portfolio-2.1/src/sections/CleanCode.js",
                        lineNumber: 29,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "code__subtitle",
                        style: {
                            display: showBackground ? 'none' : 'block'
                        },
                        children: "It must be read like a story"
                    }, void 0, false, {
                        fileName: "[project]/dev/portfolio-2.1/src/sections/CleanCode.js",
                        lineNumber: 35,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/dev/portfolio-2.1/src/sections/CleanCode.js",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2d$parallax$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Parallax"], {
                        opacity: [
                            0,
                            2
                        ],
                        translateY: [
                            '0%',
                            '-10%'
                        ],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "quote",
                            style: {
                                display: showBackground ? 'none' : 'flex'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("q", {
                                    className: "quote__text",
                                    children: "“Clean code always looks like it was written by someone who cares.”"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/CleanCode.js",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "quote__author-name",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: 'var(--third-color)'
                                            },
                                            children: "― "
                                        }, void 0, false, {
                                            fileName: "[project]/dev/portfolio-2.1/src/sections/CleanCode.js",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Robert C. Martin"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/CleanCode.js",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "quote__author",
                                    children: "Author of Clean Code"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/CleanCode.js",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/CleanCode.js",
                            lineNumber: 45,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/dev/portfolio-2.1/src/sections/CleanCode.js",
                        lineNumber: 44,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "code__button",
                        onClick: handleClick,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: !showBackground ? __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$code$2d$check$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$code$2d$check$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$code$2d$check$2d$return$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$code$2d$check$2d$return$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                alt: "icon zoom in or out"
                            }, void 0, false, {
                                fileName: "[project]/dev/portfolio-2.1/src/sections/CleanCode.js",
                                lineNumber: 62,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    display: !showBackground ? 'block' : 'none',
                                    width: '8ch'
                                },
                                children: "CHECK MY CODE"
                            }, void 0, false, {
                                fileName: "[project]/dev/portfolio-2.1/src/sections/CleanCode.js",
                                lineNumber: 66,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    display: showBackground ? 'block' : 'none'
                                },
                                children: "RETURN"
                            }, void 0, false, {
                                fileName: "[project]/dev/portfolio-2.1/src/sections/CleanCode.js",
                                lineNumber: 74,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dev/portfolio-2.1/src/sections/CleanCode.js",
                        lineNumber: 61,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2d$parallax$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Parallax"], {
                        opacity: [
                            0,
                            2
                        ],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "words",
                            style: {
                                display: showBackground ? 'none' : 'block'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "words__dark words--dry",
                                    children: "DRY"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/CleanCode.js",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "words__bright words--meticulousness",
                                    children: "meticulousness"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/CleanCode.js",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "words__dark words--easy-read",
                                    children: "easy to read"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/CleanCode.js",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "words__dark words--easy-change",
                                    children: "easy to change"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/CleanCode.js",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "words__bright words--naming",
                                    children: "naming"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/CleanCode.js",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "words__bright words--conventions",
                                    children: "conventions"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/CleanCode.js",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "words__dark words--repeat",
                                    children: "don't repeat"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/CleanCode.js",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "words__dark words--self",
                                    children: "your self"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/CleanCode.js",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "words__bright words--keep",
                                    children: "keep it"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/CleanCode.js",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "words__bright words--simple",
                                    children: "simple"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/CleanCode.js",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "words__dark words--concise",
                                    children: "clear and concise"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/CleanCode.js",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "words__bright words--consistency",
                                    children: "consistency"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/CleanCode.js",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "words__dark words--uncomplicate",
                                    children: "uncomplicate"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/CleanCode.js",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "words__bright words--bem",
                                    children: "BEM"
                                }, void 0, false, {
                                    fileName: "[project]/dev/portfolio-2.1/src/sections/CleanCode.js",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/CleanCode.js",
                            lineNumber: 84,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/dev/portfolio-2.1/src/sections/CleanCode.js",
                        lineNumber: 83,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    !showBackground ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$components$2f$WhyCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        titleOne: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].code.titleOne,
                        textOne: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].code.textOne,
                        titleTwo: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].code.titleTwo,
                        textTwo: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].code.textTwo,
                        titleThree: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].code.titleThree,
                        textThree: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].code.textThree,
                        titleFour: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].code.titleFour,
                        textFour: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].code.textFour,
                        observation: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].code.observation,
                        bottom: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].code.bottom,
                        left: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].code.left
                    }, void 0, false, {
                        fileName: "[project]/dev/portfolio-2.1/src/sections/CleanCode.js",
                        lineNumber: 108,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : null
                ]
            }, void 0, true, {
                fileName: "[project]/dev/portfolio-2.1/src/sections/CleanCode.js",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/dev/portfolio-2.1/src/sections/CleanCode.js",
        lineNumber: 21,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CleanCode;
}),
"[project]/dev/portfolio-2.1/src/sections/Contact.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/@emailjs/browser/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$contexts$2f$AboutContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/contexts/AboutContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$beautiful$2d$dnd$2f$dist$2f$react$2d$beautiful$2d$dnd$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/data/Data.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$components$2f$WhyCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/components/WhyCard.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$components$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/components/Button.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
let dropSpace = {
    drag: {
        name: 'drag from here:',
        items: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contactData"]
    },
    drop: {
        name: 'drop here:',
        items: []
    }
};
const onDragEnd = (result, columns, setColumns)=>{
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [
            ...sourceColumn.items
        ];
        const destItems = [
            ...destColumn.items
        ];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...sourceColumn,
                items: sourceItems
            },
            [destination.droppableId]: {
                ...destColumn,
                items: destItems
            }
        });
    } else {
        const column = columns[source.droppableId];
        const copiedItems = [
            ...column.items
        ];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...column,
                items: copiedItems
            }
        });
    }
};
const Contact = ()=>{
    const { location } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$contexts$2f$AboutContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AboutContext"]);
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('SUBMIT');
    const formContact = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const handleSubmit = (e)=>{
        e.preventDefault();
        setStatus('SENDING...');
        const dragDropMessage = columns.drop.items.map((element)=>element.content);
        const allDataMessage = {
            name: name,
            email: email,
            message: message,
            location: location.data,
            messageDrag: dragDropMessage
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, allDataMessage, process.env.REACT_APP_EMAILJS_PUBLIC_KEY).then((result)=>{
            console.log(result.text);
            setStatus('SENT');
            setInterval(()=>{
                setStatus('SUBMIT');
            }, 5000);
            clearInterval();
        }, (error)=>{
            console.log(error.text);
        });
        handleClickClearMessage();
    };
    const handleClickClearMessage = ()=>{
        setName('');
        setEmail('');
        setMessage('');
        setColumns({
            drag: {
                name: 'drag from here:',
                items: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contactData"]
            },
            drop: {
                name: 'drop here:',
                items: []
            }
        });
    };
    const [columns, setColumns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(dropSpace);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section contact",
        id: "contact",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "section-title",
                        style: {
                            textAlign: 'left'
                        },
                        children: "hello generator"
                    }, void 0, false, {
                        fileName: "[project]/dev/portfolio-2.1/src/sections/Contact.js",
                        lineNumber: 122,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: `Let me help you drop me a line! ;)`
                    }, void 0, false, {
                        fileName: "[project]/dev/portfolio-2.1/src/sections/Contact.js",
                        lineNumber: 125,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$beautiful$2d$dnd$2f$dist$2f$react$2d$beautiful$2d$dnd$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DragDropContext"], {
                        onDragEnd: (result)=>onDragEnd(result, columns, setColumns),
                        children: Object.entries(columns).map(([columnId, column], index)=>{
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "drop",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "drop__title",
                                        children: column.name
                                    }, void 0, false, {
                                        fileName: "[project]/dev/portfolio-2.1/src/sections/Contact.js",
                                        lineNumber: 132,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$beautiful$2d$dnd$2f$dist$2f$react$2d$beautiful$2d$dnd$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Droppable"], {
                                            droppableId: columnId,
                                            children: (provided, snapshot)=>{
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    ...provided.droppableProps,
                                                    ref: provided.innerRef,
                                                    className: "drop__space",
                                                    style: {
                                                        background: snapshot.isDraggingOver ? 'rgba(255, 255, 255, 0.1)' : 'var(--dark-color)'
                                                    },
                                                    children: [
                                                        column.items.map((item, index)=>{
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$beautiful$2d$dnd$2f$dist$2f$react$2d$beautiful$2d$dnd$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Draggable"], {
                                                                draggableId: item.id,
                                                                index: index,
                                                                children: (provided, snapshot)=>{
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "phrase",
                                                                        ref: provided.innerRef,
                                                                        ...provided.draggableProps,
                                                                        ...provided.dragHandleProps,
                                                                        style: {
                                                                            backgroundColor: snapshot.isDragging ? 'var(--third-color)' : 'var(--dark-color)',
                                                                            color: 'var(--bright-color)',
                                                                            ...provided.draggableProps.style
                                                                        },
                                                                        children: item.content
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/dev/portfolio-2.1/src/sections/Contact.js",
                                                                        lineNumber: 156,
                                                                        columnNumber: 37
                                                                    }, ("TURBOPACK compile-time value", void 0));
                                                                }
                                                            }, item.id, false, {
                                                                fileName: "[project]/dev/portfolio-2.1/src/sections/Contact.js",
                                                                lineNumber: 149,
                                                                columnNumber: 31
                                                            }, ("TURBOPACK compile-time value", void 0));
                                                        }),
                                                        provided.placeholder
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/dev/portfolio-2.1/src/sections/Contact.js",
                                                    lineNumber: 137,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0));
                                            }
                                        }, columnId, false, {
                                            fileName: "[project]/dev/portfolio-2.1/src/sections/Contact.js",
                                            lineNumber: 134,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/dev/portfolio-2.1/src/sections/Contact.js",
                                        lineNumber: 133,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, columnId, true, {
                                fileName: "[project]/dev/portfolio-2.1/src/sections/Contact.js",
                                lineNumber: 131,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/dev/portfolio-2.1/src/sections/Contact.js",
                        lineNumber: 126,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        ref: formContact,
                        className: "form-contact",
                        onSubmit: handleSubmit,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "form-contact__title",
                                children: "Additional comments:"
                            }, void 0, false, {
                                fileName: "[project]/dev/portfolio-2.1/src/sections/Contact.js",
                                lineNumber: 188,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                className: "form-contact__input form-contact__input--textarea",
                                placeholder: "type some additional comments",
                                type: "text",
                                value: message,
                                onChange: (e)=>{
                                    setMessage(e.target.value);
                                },
                                name: "message"
                            }, void 0, false, {
                                fileName: "[project]/dev/portfolio-2.1/src/sections/Contact.js",
                                lineNumber: 189,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-contact__input-wrapper",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "form-contact__input",
                                        placeholder: "name",
                                        type: "text",
                                        value: name,
                                        onChange: (e)=>{
                                            setName(e.target.value);
                                        },
                                        name: "name",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/dev/portfolio-2.1/src/sections/Contact.js",
                                        lineNumber: 200,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "form-contact__input",
                                        placeholder: "email",
                                        type: "email",
                                        value: email,
                                        onChange: (e)=>{
                                            setEmail(e.target.value);
                                        },
                                        name: "email",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/dev/portfolio-2.1/src/sections/Contact.js",
                                        lineNumber: 211,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dev/portfolio-2.1/src/sections/Contact.js",
                                lineNumber: 199,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-contact__buttons",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$components$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        className: 'btn btn--dark-dark-bg',
                                        onClick: handleClickClearMessage,
                                        text: "clear",
                                        align: "flex-start"
                                    }, void 0, false, {
                                        fileName: "[project]/dev/portfolio-2.1/src/sections/Contact.js",
                                        lineNumber: 224,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn--third-color",
                                        type: "submit",
                                        style: {
                                            backgroundColor: status === 'SENT' ? 'var(--dark-color)' : 'var(--third-color)'
                                        },
                                        children: status
                                    }, void 0, false, {
                                        fileName: "[project]/dev/portfolio-2.1/src/sections/Contact.js",
                                        lineNumber: 231,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dev/portfolio-2.1/src/sections/Contact.js",
                                lineNumber: 223,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dev/portfolio-2.1/src/sections/Contact.js",
                        lineNumber: 187,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/dev/portfolio-2.1/src/sections/Contact.js",
                lineNumber: 121,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$components$2f$WhyCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                titleOne: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].contact.titleOne,
                textOne: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].contact.textOne,
                titleTwo: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].contact.titleTwo,
                textTwo: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].contact.textTwo,
                titleThree: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].contact.titleThree,
                textThree: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].contact.textThree,
                titleFour: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].contact.titleFour,
                textFour: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].contact.textFour,
                observation: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].contact.observation,
                bottom: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].contact.bottom,
                left: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whyData"].contact.left
            }, void 0, false, {
                fileName: "[project]/dev/portfolio-2.1/src/sections/Contact.js",
                lineNumber: 247,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/dev/portfolio-2.1/src/sections/Contact.js",
        lineNumber: 120,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Contact;
}),
"[project]/dev/portfolio-2.1/src/assets/images/logo-fkodama-footer.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/logo-fkodama-footer.a831ecce.svg");}),
"[project]/dev/portfolio-2.1/src/assets/images/logo-fkodama-footer.svg.mjs { IMAGE => \"[project]/dev/portfolio-2.1/src/assets/images/logo-fkodama-footer.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$logo$2d$fkodama$2d$footer$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/assets/images/logo-fkodama-footer.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$logo$2d$fkodama$2d$footer$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 123,
    height: 48,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/dev/portfolio-2.1/src/assets/images/ico-linkedin-white.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/ico-linkedin-white.b578a4c4.svg");}),
"[project]/dev/portfolio-2.1/src/assets/images/ico-linkedin-white.svg.mjs { IMAGE => \"[project]/dev/portfolio-2.1/src/assets/images/ico-linkedin-white.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$ico$2d$linkedin$2d$white$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/assets/images/ico-linkedin-white.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$ico$2d$linkedin$2d$white$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 48,
    height: 48,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/dev/portfolio-2.1/src/assets/images/ico-instagram-white.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/ico-instagram-white.d756d262.svg");}),
"[project]/dev/portfolio-2.1/src/assets/images/ico-instagram-white.svg.mjs { IMAGE => \"[project]/dev/portfolio-2.1/src/assets/images/ico-instagram-white.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$ico$2d$instagram$2d$white$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/assets/images/ico-instagram-white.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$ico$2d$instagram$2d$white$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 48,
    height: 48,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/dev/portfolio-2.1/src/assets/images/ico-github-white.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/ico-github-white.f1a4e0c0.svg");}),
"[project]/dev/portfolio-2.1/src/assets/images/ico-github-white.svg.mjs { IMAGE => \"[project]/dev/portfolio-2.1/src/assets/images/ico-github-white.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$ico$2d$github$2d$white$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/assets/images/ico-github-white.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$ico$2d$github$2d$white$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 48,
    height: 48,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/dev/portfolio-2.1/src/sections/Footer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2f$modules$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$logo$2d$fkodama$2d$footer$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$logo$2d$fkodama$2d$footer$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dev/portfolio-2.1/src/assets/images/logo-fkodama-footer.svg.mjs { IMAGE => "[project]/dev/portfolio-2.1/src/assets/images/logo-fkodama-footer.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$ico$2d$linkedin$2d$white$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$ico$2d$linkedin$2d$white$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dev/portfolio-2.1/src/assets/images/ico-linkedin-white.svg.mjs { IMAGE => "[project]/dev/portfolio-2.1/src/assets/images/ico-linkedin-white.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$ico$2d$instagram$2d$white$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$ico$2d$instagram$2d$white$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dev/portfolio-2.1/src/assets/images/ico-instagram-white.svg.mjs { IMAGE => "[project]/dev/portfolio-2.1/src/assets/images/ico-instagram-white.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$ico$2d$github$2d$white$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$ico$2d$github$2d$white$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dev/portfolio-2.1/src/assets/images/ico-github-white.svg.mjs { IMAGE => "[project]/dev/portfolio-2.1/src/assets/images/ico-github-white.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
'use client';
;
;
;
;
;
;
;
;
const Resume = '/resume.pdf';
const Footer = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section footer",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "footer__grid",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "footer__title",
                    children: [
                        "ABOUT",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "ME"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                            lineNumber: 17,
                            columnNumber: 16
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                    lineNumber: 16,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "footer__title",
                    children: [
                        "GET",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "BACK"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                            lineNumber: 20,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                    lineNumber: 19,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "footer__title",
                    children: [
                        "GET",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "IN TOUCH"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                            lineNumber: 23,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                    lineNumber: 22,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "footer__title",
                    children: [
                        "GET",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "CONNECTED"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                            lineNumber: 26,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                    lineNumber: 25,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "footer__aboutme",
                    children: "A web developer with a great deal of experience in marketing, a natural leader, curious, and constantly provoked by new challenges."
                }, void 0, false, {
                    fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                    lineNumber: 28,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "footer__menu",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2f$modules$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                            className: "footer__menu-item",
                            to: "hero",
                            spy: true,
                            smooth: true,
                            offset: 0,
                            duration: 500,
                            children: "this.portfolio"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                            lineNumber: 33,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2f$modules$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                            className: "footer__menu-item",
                            to: "about",
                            spy: true,
                            smooth: true,
                            offset: 0,
                            duration: 500,
                            children: "about me"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                            lineNumber: 43,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2f$modules$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                            className: "footer__menu-item",
                            to: "whyme",
                            spy: true,
                            smooth: true,
                            offset: 0,
                            duration: 500,
                            children: "why me"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                            lineNumber: 53,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2f$modules$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                            className: "footer__menu-item",
                            to: "ai",
                            spy: true,
                            smooth: true,
                            offset: 0,
                            duration: 500,
                            children: "a.i."
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                            lineNumber: 63,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2f$modules$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                            className: "footer__menu-item",
                            to: "projects",
                            spy: true,
                            smooth: true,
                            offset: 0,
                            duration: 500,
                            children: "projects"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                            lineNumber: 73,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2f$modules$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                            className: "footer__menu-item",
                            to: "api",
                            spy: true,
                            smooth: true,
                            offset: -150,
                            duration: 500,
                            children: "api"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                            lineNumber: 83,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2f$modules$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                            className: "footer__menu-item",
                            to: "code",
                            spy: true,
                            smooth: true,
                            offset: 0,
                            duration: 500,
                            children: "my code"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                            lineNumber: 93,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2f$modules$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                            className: "footer__menu-item",
                            to: "contact",
                            spy: true,
                            smooth: true,
                            offset: -150,
                            duration: 500,
                            children: "contact"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                            lineNumber: 103,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                    lineNumber: 32,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "footer__contact",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "footer__email",
                            children: "fk@fkodama.com"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                            lineNumber: 115,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2f$modules$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                            className: "footer__send",
                            to: "contact",
                            spy: true,
                            smooth: true,
                            offset: 200,
                            duration: 500,
                            children: "send message"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                            lineNumber: 116,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                    lineNumber: 114,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "footer__icons",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "footer__icon-item",
                            href: "https://github.com/franciskodama",
                            target: "_blank",
                            rel: "noreferrer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$ico$2d$github$2d$white$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$ico$2d$github$2d$white$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                alt: "logo Github"
                            }, void 0, false, {
                                fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                                lineNumber: 134,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                            lineNumber: 128,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "footer__icon-item",
                            href: "https://www.linkedin.com/in/kodama/",
                            target: "_blank",
                            rel: "noreferrer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$ico$2d$linkedin$2d$white$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$ico$2d$linkedin$2d$white$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                alt: "logo Linkedin"
                            }, void 0, false, {
                                fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                                lineNumber: 142,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                            lineNumber: 136,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "footer__icon-item",
                            href: "https://www.instagram.com/franciskodama/",
                            target: "_blank",
                            rel: "noreferrer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$ico$2d$instagram$2d$white$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$ico$2d$instagram$2d$white$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                alt: "logo Instagram"
                            }, void 0, false, {
                                fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                                lineNumber: 150,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                            lineNumber: 144,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                    lineNumber: 127,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    className: "footer__logo",
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$logo$2d$fkodama$2d$footer$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$assets$2f$images$2f$logo$2d$fkodama$2d$footer$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                    alt: "logo fkodama"
                }, void 0, false, {
                    fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                    lineNumber: 153,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "footer__design",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Designed and built by"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                            lineNumber: 155,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "div-nth-display-none"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                            lineNumber: 156,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "footer--bold",
                            children: "Francis Kodama"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                            lineNumber: 157,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Copyright 2023"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                            lineNumber: 158,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                    lineNumber: 154,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "footer__resume",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "footer__resume-title",
                            children: "RESUME"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                            lineNumber: 161,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "div-nth-display-none"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                            lineNumber: 162,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "footer__resume-link",
                            href: Resume,
                            target: "_blank",
                            rel: "noreferrer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Download"
                            }, void 0, false, {
                                fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                                lineNumber: 169,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                            lineNumber: 163,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "footer--bold",
                            children: "Resumé"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                            lineNumber: 171,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                    lineNumber: 160,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "footer__location",
                    children: [
                        "Ottawa, ON - ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "footer-bold",
                            children: "Canada"
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                            lineNumber: 174,
                            columnNumber: 24
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
                    lineNumber: 173,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
            lineNumber: 15,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/dev/portfolio-2.1/src/sections/Footer.js",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Footer;
}),
"[project]/dev/portfolio-2.1/src/components/ClientApp.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$contexts$2f$AboutContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/contexts/AboutContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2d$parallax$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-scroll-parallax/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$sections$2f$Navbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/sections/Navbar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$sections$2f$Hero$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/sections/Hero.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$components$2f$Palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/components/Palette.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$sections$2f$Reason$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/sections/Reason.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$sections$2f$About$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/sections/About.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$sections$2f$WhyMe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/sections/WhyMe.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$sections$2f$Ai$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/sections/Ai.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$sections$2f$Projects$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/sections/Projects.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$sections$2f$AboveApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/sections/AboveApi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$sections$2f$Api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/sections/Api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$sections$2f$CleanCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/sections/CleanCode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$sections$2f$Contact$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/sections/Contact.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$sections$2f$Footer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/src/sections/Footer.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const ClientApp = ()=>{
    const [location, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        data: ''
    });
    const [isActive, setIsActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        first: true,
        second: false,
        third: false
    });
    // Handle CSS variables on client side
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const root = document.querySelector(':root');
        if (!root) return;
        if (isActive.first) {
            root.style.setProperty('--dark-color', '#1c1c1c');
            root.style.setProperty('--bright-color', '#ffffff');
            root.style.setProperty('--third-color', '#ed1c24');
        } else if (isActive.second) {
            root.style.setProperty('--dark-color', '#29335C');
            root.style.setProperty('--bright-color', '#669BBC');
            root.style.setProperty('--third-color', '#F3A712');
        } else if (isActive.third) {
            root.style.setProperty('--dark-color', '#757575');
            root.style.setProperty('--bright-color', '#ffffff');
            root.style.setProperty('--third-color', '#03A9F4');
        }
    }, [
        isActive
    ]);
    const firstColors = ()=>{
        setIsActive({
            first: true,
            second: false,
            third: false
        });
    };
    const secondColors = ()=>{
        setIsActive({
            first: false,
            second: true,
            third: false
        });
    };
    const thirdColors = ()=>{
        setIsActive({
            first: false,
            second: false,
            third: true
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "App",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$scroll$2d$parallax$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ParallaxProvider"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$sections$2f$Navbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/dev/portfolio-2.1/src/components/ClientApp.js",
                    lineNumber: 64,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$sections$2f$Hero$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/dev/portfolio-2.1/src/components/ClientApp.js",
                    lineNumber: 65,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$components$2f$Palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    firstColors: firstColors,
                    secondColors: secondColors,
                    thirdColors: thirdColors,
                    isActive: isActive
                }, void 0, false, {
                    fileName: "[project]/dev/portfolio-2.1/src/components/ClientApp.js",
                    lineNumber: 66,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$sections$2f$Reason$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/dev/portfolio-2.1/src/components/ClientApp.js",
                    lineNumber: 72,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$contexts$2f$AboutContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AboutContext"].Provider, {
                    value: {
                        location,
                        setLocation
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$sections$2f$About$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/components/ClientApp.js",
                            lineNumber: 74,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$sections$2f$WhyMe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/components/ClientApp.js",
                            lineNumber: 75,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$sections$2f$Ai$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            color: isActive
                        }, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/components/ClientApp.js",
                            lineNumber: 76,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$sections$2f$Projects$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/components/ClientApp.js",
                            lineNumber: 77,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$sections$2f$AboveApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/components/ClientApp.js",
                            lineNumber: 78,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$sections$2f$Api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/components/ClientApp.js",
                            lineNumber: 79,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$sections$2f$CleanCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/components/ClientApp.js",
                            lineNumber: 80,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$sections$2f$Contact$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/dev/portfolio-2.1/src/components/ClientApp.js",
                            lineNumber: 81,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/dev/portfolio-2.1/src/components/ClientApp.js",
                    lineNumber: 73,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$src$2f$sections$2f$Footer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/dev/portfolio-2.1/src/components/ClientApp.js",
                    lineNumber: 83,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/dev/portfolio-2.1/src/components/ClientApp.js",
            lineNumber: 63,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/dev/portfolio-2.1/src/components/ClientApp.js",
        lineNumber: 62,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ClientApp;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8bb3de17._.js.map