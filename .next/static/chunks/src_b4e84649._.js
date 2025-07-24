(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/HomeMenu.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "HomeMenu": (()=>HomeMenu)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function HomeMenu({ onStartGame, onOpenShop, onOpenSettings, gigabytes, showTutorial, onSkipTutorial }) {
    _s();
    const [tutorialStep, setTutorialStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const tutorialSteps = [
        "Welcome to Sabotage! Your goal is to destroy your opponent's phone while protecting yours.",
        "Use apps on your phone to attack and defend. Each app has a specific purpose.",
        "The Terminal lets you run system commands, Antivirus protects you from attacks.",
        "Monitor your phone's health in the Status app. When it reaches 0%, you lose!",
        "Win matches to earn Gigabytes and upgrade your defenses in the Shop."
    ];
    if (showTutorial) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-screen w-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center p-4 text-white text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-4 h-2 bg-white rounded-sm"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HomeMenu.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs",
                                    children: "Sabotage OS"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HomeMenu.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HomeMenu.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs",
                                    children: "100%"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HomeMenu.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-6 h-3 border border-white rounded-sm bg-green-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HomeMenu.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HomeMenu.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HomeMenu.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex items-center justify-center p-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-black/80 backdrop-blur-lg rounded-3xl p-8 w-full max-w-sm border border-gray-700 animate-pulse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-white mb-6 text-center",
                                children: "Tutorial"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HomeMenu.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-800 rounded-2xl p-6 mb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-200 text-center leading-relaxed",
                                    children: tutorialSteps[tutorialStep]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HomeMenu.tsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/HomeMenu.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: onSkipTutorial,
                                        variant: "outline",
                                        className: "bg-gray-700 border-gray-600 text-white hover:bg-gray-600 rounded-2xl",
                                        children: "Skip Tutorial"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HomeMenu.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this),
                                    tutorialStep < tutorialSteps.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: ()=>setTutorialStep((prev)=>prev + 1),
                                        className: "bg-blue-600 hover:bg-blue-700 rounded-2xl",
                                        children: "Next"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HomeMenu.tsx",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: onSkipTutorial,
                                        className: "bg-green-600 hover:bg-green-700 rounded-2xl",
                                        children: "Start Playing!"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HomeMenu.tsx",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HomeMenu.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HomeMenu.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/HomeMenu.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HomeMenu.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen w-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center p-4 text-white text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-4 h-2 bg-white rounded-sm"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HomeMenu.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs",
                                children: "Sabotage OS"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HomeMenu.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HomeMenu.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs",
                                children: "100%"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HomeMenu.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-6 h-3 border border-white rounded-sm bg-green-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HomeMenu.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HomeMenu.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HomeMenu.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 p-6 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center text-white mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-6xl font-thin mb-2",
                                children: new Date().toLocaleTimeString([], {
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/HomeMenu.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-lg opacity-80",
                                children: new Date().toLocaleDateString([], {
                                    weekday: 'long',
                                    month: 'long',
                                    day: 'numeric'
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/HomeMenu.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HomeMenu.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-black/30 backdrop-blur-lg rounded-3xl p-4 mb-8 border border-white/20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-green-400 font-mono text-2xl font-bold",
                                    children: [
                                        gigabytes,
                                        " GB"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HomeMenu.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-white/80 text-sm",
                                    children: "Available Currency"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HomeMenu.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HomeMenu.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/HomeMenu.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 grid grid-cols-3 gap-6 content-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: onStartGame,
                                className: "flex flex-col items-center cursor-pointer transform hover:scale-105 transition-transform duration-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg mb-2 animate-pulse",
                                        children: "⚔️"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HomeMenu.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white text-sm font-medium",
                                        children: "Battle"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HomeMenu.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HomeMenu.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: onOpenShop,
                                className: "flex flex-col items-center cursor-pointer transform hover:scale-105 transition-transform duration-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg mb-2",
                                        children: "🛒"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HomeMenu.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white text-sm font-medium",
                                        children: "Shop"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HomeMenu.tsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HomeMenu.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: onOpenSettings,
                                className: "flex flex-col items-center cursor-pointer transform hover:scale-105 transition-transform duration-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 bg-gray-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg mb-2",
                                        children: "⚙️"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HomeMenu.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white text-sm font-medium",
                                        children: "Settings"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HomeMenu.tsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HomeMenu.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HomeMenu.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-black/30 backdrop-blur-lg rounded-3xl p-4 mt-8 border border-white/20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-white font-bold text-lg",
                                    children: "SABOTAGE"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HomeMenu.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-white/60 text-xs",
                                    children: "Mobile OS Battle Arena"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HomeMenu.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HomeMenu.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/HomeMenu.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HomeMenu.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HomeMenu.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_s(HomeMenu, "5MYyhqn39gOGpPilzGouiXPG3ls=");
_c = HomeMenu;
var _c;
__turbopack_context__.k.register(_c, "HomeMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/switch.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Switch": (()=>Switch)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-switch/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Switch({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "switch",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Thumb"], {
            "data-slot": "switch-thumb",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0")
        }, void 0, false, {
            fileName: "[project]/src/components/ui/switch.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/switch.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Switch;
;
var _c;
__turbopack_context__.k.register(_c, "Switch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/apps/SettingsApp.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "SettingsApp": (()=>SettingsApp)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/switch.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function SettingsApp({ phoneState, setPhoneState, onAttack, onDefend, isPlayer }) {
    _s();
    const [autoDefense, setAutoDefense] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [powerSaving, setPowerSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const handleSystemReset = ()=>{
        if (!isPlayer) return;
        setPhoneState((prev)=>({
                ...prev,
                health: Math.min(100, prev.health + 30),
                cpuUsage: Math.max(20, prev.cpuUsage - 20),
                ramUsage: Math.max(30, prev.ramUsage - 15),
                virusCount: Math.max(0, prev.virusCount - 1)
            }));
    };
    const handleEmergencyShutdown = ()=>{
        if (!isPlayer) return;
        setPhoneState((prev)=>({
                ...prev,
                cpuUsage: 10,
                ramUsage: 20,
                battery: Math.max(0, prev.battery - 5) // Costs battery but saves system
            }));
    };
    const handleSystemOptimization = ()=>{
        if (!isPlayer) return;
        setPhoneState((prev)=>({
                ...prev,
                cpuUsage: Math.max(15, prev.cpuUsage - 25),
                ramUsage: Math.max(25, prev.ramUsage - 20),
                health: Math.min(100, prev.health + 10)
            }));
    };
    const handleAutoDefenseToggle = (enabled)=>{
        setAutoDefense(enabled);
        if (enabled && isPlayer) {
            onDefend('firewall');
        }
    };
    const handlePowerSavingToggle = (enabled)=>{
        setPowerSaving(enabled);
        if (enabled && isPlayer) {
            onDefend('battery_saver');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-800 rounded-lg p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-white font-semibold mb-3",
                        children: "System Controls"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/SettingsApp.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleSystemReset,
                                disabled: !isPlayer,
                                className: "w-full bg-blue-600 hover:bg-blue-700",
                                children: "System Reset (+30 Health)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleSystemOptimization,
                                disabled: !isPlayer,
                                className: "w-full bg-green-600 hover:bg-green-700",
                                children: "Optimize Performance"
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleEmergencyShutdown,
                                disabled: !isPlayer,
                                className: "w-full bg-yellow-600 hover:bg-yellow-700",
                                children: "Emergency Shutdown"
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/SettingsApp.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/SettingsApp.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-800 rounded-lg p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-white font-semibold mb-3",
                        children: "Security Settings"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/SettingsApp.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-white text-sm",
                                                children: "Auto Defense"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                                lineNumber: 107,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-gray-400 text-xs",
                                                children: "Automatically enable firewall when attacked"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                                lineNumber: 108,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                        checked: autoDefense,
                                        onCheckedChange: handleAutoDefenseToggle,
                                        disabled: !isPlayer
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-white text-sm",
                                                children: "Power Saving Mode"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                                lineNumber: 119,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-gray-400 text-xs",
                                                children: "Reduce performance to save battery"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                                lineNumber: 120,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                        checked: powerSaving,
                                        onCheckedChange: handlePowerSavingToggle,
                                        disabled: !isPlayer
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-white text-sm",
                                                children: "Security Notifications"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                                lineNumber: 131,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-gray-400 text-xs",
                                                children: "Get alerts about threats"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                                lineNumber: 132,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                        checked: notifications,
                                        onCheckedChange: setNotifications,
                                        disabled: !isPlayer
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/SettingsApp.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/SettingsApp.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-800 rounded-lg p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-white font-semibold mb-3",
                        children: "System Information"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/SettingsApp.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-300",
                                        children: "OS Version"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white",
                                        children: "Sabotage OS 1.0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-300",
                                        children: "Security Level"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: phoneState.antivirusActive ? 'text-green-400' : 'text-red-400',
                                        children: phoneState.antivirusActive ? 'Protected' : 'Vulnerable'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                        lineNumber: 153,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-300",
                                        children: "System Uptime"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white",
                                        children: "00:05:23"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-300",
                                        children: "Last Update"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white",
                                        children: "Today"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                        lineNumber: 163,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/SettingsApp.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/SettingsApp.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-800 rounded-lg p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-white font-semibold mb-3",
                        children: "Performance"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/SettingsApp.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-300",
                                        children: "CPU Priority"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "bg-gray-700 text-white rounded px-2 py-1 text-xs",
                                        disabled: !isPlayer,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Balanced"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                                lineNumber: 178,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Performance"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                                lineNumber: 179,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Power Saver"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                                lineNumber: 180,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                        lineNumber: 174,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-300",
                                        children: "Memory Management"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                        lineNumber: 185,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "bg-gray-700 text-white rounded px-2 py-1 text-xs",
                                        disabled: !isPlayer,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Auto"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                                lineNumber: 190,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Aggressive"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                                lineNumber: 191,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Conservative"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                                lineNumber: 192,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/SettingsApp.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/SettingsApp.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-900/30 rounded-lg p-4 border border-red-500/30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-red-400 font-semibold mb-3",
                        children: "Emergency Actions"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/SettingsApp.tsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>isPlayer && onDefend('repair'),
                                disabled: !isPlayer,
                                variant: "destructive",
                                className: "w-full bg-red-600 hover:bg-red-700",
                                children: "Emergency Repair"
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-300 text-xs",
                                children: "Use only when system health is critical"
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/SettingsApp.tsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/SettingsApp.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/SettingsApp.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/apps/SettingsApp.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(SettingsApp, "+Q7Zh47VKGiFO3ya+kI2DSip9J0=");
_c = SettingsApp;
var _c;
__turbopack_context__.k.register(_c, "SettingsApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/apps/FileManagerApp.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "FileManagerApp": (()=>FileManagerApp)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function FileManagerApp({ phoneState, setPhoneState, onAttack, onDefend, isPlayer }) {
    _s();
    const [currentPath, setCurrentPath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('/');
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FileManagerApp.useEffect": ()=>{
            // Generate file system based on phone state
            const systemFiles = [
                {
                    id: '1',
                    name: 'System',
                    type: 'folder',
                    icon: '🗂️',
                    critical: true
                },
                {
                    id: '2',
                    name: 'Apps',
                    type: 'folder',
                    icon: '📱'
                },
                {
                    id: '3',
                    name: 'Documents',
                    type: 'folder',
                    icon: '📄'
                },
                {
                    id: '4',
                    name: 'Downloads',
                    type: 'folder',
                    icon: '⬇️'
                },
                {
                    id: '5',
                    name: 'boot.sys',
                    type: 'file',
                    size: '2.1 MB',
                    icon: '⚙️',
                    critical: true
                },
                {
                    id: '6',
                    name: 'kernel.dll',
                    type: 'file',
                    size: '5.8 MB',
                    icon: '🔧',
                    critical: true
                },
                {
                    id: '7',
                    name: 'config.ini',
                    type: 'file',
                    size: '1.2 KB',
                    icon: '📝'
                },
                {
                    id: '8',
                    name: 'user_data.db',
                    type: 'file',
                    size: '15.3 MB',
                    icon: '💾'
                }
            ];
            // Add infected files based on virus count
            const infectedFiles = [];
            for(let i = 0; i < phoneState.virusCount; i++){
                infectedFiles.push({
                    id: `virus_${i}`,
                    name: `malware_${i + 1}.exe`,
                    type: 'file',
                    size: '666 KB',
                    icon: '🦠',
                    infected: true
                });
            }
            // Remove files based on filesDeleted count
            const availableFiles = [
                ...systemFiles,
                ...infectedFiles
            ];
            const filesToShow = availableFiles.slice(0, Math.max(4, availableFiles.length - phoneState.filesDeleted));
            setFiles(filesToShow);
        }
    }["FileManagerApp.useEffect"], [
        phoneState.virusCount,
        phoneState.filesDeleted
    ]);
    const handleFileClick = (file)=>{
        setSelectedFile(selectedFile === file.id ? null : file.id);
    };
    const deleteFile = (fileId)=>{
        if (!isPlayer) return;
        const file = files.find((f)=>f.id === fileId);
        if (!file) return;
        if (file.critical) {
            // Deleting critical files damages the system
            setPhoneState((prev)=>({
                    ...prev,
                    health: Math.max(0, prev.health - 20),
                    filesDeleted: prev.filesDeleted + 1
                }));
        } else if (file.infected) {
            // Deleting infected files helps clean the system
            setPhoneState((prev)=>({
                    ...prev,
                    virusCount: Math.max(0, prev.virusCount - 1),
                    health: Math.min(100, prev.health + 5)
                }));
        }
        setFiles((prev)=>prev.filter((f)=>f.id !== fileId));
        setSelectedFile(null);
    };
    const restoreFile = ()=>{
        if (!isPlayer) return;
        // Restore a random deleted file
        const restoredFile = {
            id: `restored_${Date.now()}`,
            name: 'recovered_file.bak',
            type: 'file',
            size: '2.5 MB',
            icon: '🔄'
        };
        setFiles((prev)=>[
                ...prev,
                restoredFile
            ]);
        setPhoneState((prev)=>({
                ...prev,
                health: Math.min(100, prev.health + 10),
                filesDeleted: Math.max(0, prev.filesDeleted - 1)
            }));
    };
    const scanForViruses = ()=>{
        if (!isPlayer) return;
        // Highlight infected files
        const infectedCount = files.filter((f)=>f.infected).length;
        if (infectedCount > 0) {
            // Auto-select first infected file
            const firstInfected = files.find((f)=>f.infected);
            if (firstInfected) {
                setSelectedFile(firstInfected.id);
            }
        }
    };
    const createBackup = ()=>{
        if (!isPlayer) return;
        const backupFile = {
            id: `backup_${Date.now()}`,
            name: `backup_${new Date().toISOString().slice(0, 10)}.bak`,
            type: 'file',
            size: '50.2 MB',
            icon: '💾'
        };
        setFiles((prev)=>[
                ...prev,
                backupFile
            ]);
        onDefend('backup');
    };
    const selectedFileData = files.find((f)=>f.id === selectedFile);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-800 rounded-lg p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-white font-mono text-sm",
                                children: currentPath
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-400 text-xs",
                                children: [
                                    files.length,
                                    " items"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex space-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: scanForViruses,
                                disabled: !isPlayer,
                                size: "sm",
                                className: "bg-red-600 hover:bg-red-700 text-xs",
                                children: "Scan Viruses"
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: restoreFile,
                                disabled: !isPlayer || phoneState.filesDeleted === 0,
                                size: "sm",
                                className: "bg-blue-600 hover:bg-blue-700 text-xs",
                                children: "Restore File"
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: createBackup,
                                disabled: !isPlayer,
                                size: "sm",
                                className: "bg-green-600 hover:bg-green-700 text-xs",
                                children: "Backup"
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 bg-gray-800 rounded-lg p-3 overflow-y-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1",
                    children: [
                        files.map((file)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>handleFileClick(file),
                                className: `flex items-center justify-between p-2 rounded cursor-pointer transition-colors ${selectedFile === file.id ? 'bg-blue-600' : file.infected ? 'bg-red-900/30 hover:bg-red-800/30' : file.critical ? 'bg-yellow-900/30 hover:bg-yellow-800/30' : 'hover:bg-gray-700'} ${!isPlayer ? 'opacity-50 cursor-not-allowed' : ''}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg",
                                                children: file.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                                                lineNumber: 199,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `text-sm ${file.infected ? 'text-red-400' : file.critical ? 'text-yellow-400' : 'text-white'}`,
                                                        children: file.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                                                        lineNumber: 201,
                                                        columnNumber: 19
                                                    }, this),
                                                    file.size && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-gray-400",
                                                        children: file.size
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                                                lineNumber: 200,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                                        lineNumber: 198,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-1",
                                        children: [
                                            file.critical && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-yellow-400 text-xs",
                                                children: "⚠️"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                                                lineNumber: 214,
                                                columnNumber: 35
                                            }, this),
                                            file.infected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-400 text-xs",
                                                children: "🦠"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                                                lineNumber: 215,
                                                columnNumber: 35
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-400 text-xs",
                                                children: file.type
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                                                lineNumber: 216,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, file.id, true, {
                                fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this)),
                        files.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center text-gray-400 py-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-4xl mb-2",
                                    children: "📁"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                                    lineNumber: 223,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: "No files found"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                                    lineNumber: 224,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs mt-1",
                                    children: "System files may have been deleted"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                                    lineNumber: 225,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                            lineNumber: 222,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                    lineNumber: 183,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            selectedFileData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-800 rounded-lg p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-white font-semibold mb-2",
                        children: "File Actions"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                        lineNumber: 234,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex space-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>deleteFile(selectedFileData.id),
                                disabled: !isPlayer,
                                size: "sm",
                                variant: "destructive",
                                className: "bg-red-600 hover:bg-red-700",
                                children: "Delete"
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                                lineNumber: 236,
                                columnNumber: 13
                            }, this),
                            selectedFileData.infected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>deleteFile(selectedFileData.id),
                                disabled: !isPlayer,
                                size: "sm",
                                className: "bg-green-600 hover:bg-green-700",
                                children: "Clean Virus"
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                                lineNumber: 247,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                        lineNumber: 235,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 text-xs text-gray-400",
                        children: [
                            selectedFileData.critical && "⚠️ Critical system file - deletion will damage system",
                            selectedFileData.infected && "🦠 Infected file - safe to delete"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                        lineNumber: 258,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                lineNumber: 233,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-800 rounded-lg p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-white font-semibold mb-2",
                        children: "Storage"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                        lineNumber: 267,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-300",
                                        children: "Used Space"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                                        lineNumber: 270,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white",
                                        children: [
                                            85 + phoneState.virusCount * 5,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                                        lineNumber: 271,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                                lineNumber: 269,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-300",
                                        children: "System Files"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                                        lineNumber: 274,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: phoneState.filesDeleted > 0 ? 'text-red-400' : 'text-green-400',
                                        children: [
                                            Math.max(0, 8 - phoneState.filesDeleted),
                                            "/8"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                                        lineNumber: 275,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                                lineNumber: 273,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-300",
                                        children: "Infected Files"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                                        lineNumber: 280,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: phoneState.virusCount > 0 ? 'text-red-400' : 'text-green-400',
                                        children: phoneState.virusCount
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                                        lineNumber: 281,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                                lineNumber: 279,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/FileManagerApp.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/apps/FileManagerApp.tsx",
        lineNumber: 145,
        columnNumber: 5
    }, this);
}
_s(FileManagerApp, "0P3DySSBEE/fYXWd5iykcTttNZE=");
_c = FileManagerApp;
var _c;
__turbopack_context__.k.register(_c, "FileManagerApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/input.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Input": (()=>Input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/apps/TerminalApp.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "TerminalApp": (()=>TerminalApp)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function TerminalApp({ phoneState, setPhoneState, onAttack, onDefend, isPlayer }) {
    _s();
    const [command, setCommand] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [output, setOutput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        "Sabotage OS Terminal v1.0",
        "Type 'help' for available commands",
        ""
    ]);
    const executeCommand = ()=>{
        if (!command.trim()) return;
        const newOutput = [
            ...output,
            `$ ${command}`
        ];
        switch(command.toLowerCase().trim()){
            case 'help':
                newOutput.push("Available commands:", "virus <target> - Deploy virus attack (15 damage)", "ddos <target> - DDoS attack (20 damage)", "battery_drain <target> - Drain battery (10 damage)", "file_delete <target> - Delete system files (25 damage)", "cpu_overload <target> - Overload CPU (12 damage)", "ram_flood <target> - Flood RAM (18 damage)", "repair - Repair system damage", "firewall - Enable firewall protection", "clear - Clear terminal", "");
                break;
            case 'virus enemy':
            case 'virus target':
                if (isPlayer) {
                    onAttack('virus', 15);
                    newOutput.push("Virus deployed successfully!", "");
                } else {
                    newOutput.push("Access denied.", "");
                }
                break;
            case 'ddos enemy':
            case 'ddos target':
                if (isPlayer) {
                    onAttack('ddos', 20);
                    newOutput.push("DDoS attack initiated!", "");
                } else {
                    newOutput.push("Access denied.", "");
                }
                break;
            case 'battery_drain enemy':
            case 'battery_drain target':
                if (isPlayer) {
                    onAttack('battery_drain', 10);
                    newOutput.push("Battery drain attack executed!", "");
                } else {
                    newOutput.push("Access denied.", "");
                }
                break;
            case 'file_delete enemy':
            case 'file_delete target':
                if (isPlayer) {
                    onAttack('file_delete', 25);
                    newOutput.push("Critical files deleted from target!", "");
                } else {
                    newOutput.push("Access denied.", "");
                }
                break;
            case 'cpu_overload enemy':
            case 'cpu_overload target':
                if (isPlayer) {
                    onAttack('cpu_overload', 12);
                    newOutput.push("CPU overload attack successful!", "");
                } else {
                    newOutput.push("Access denied.", "");
                }
                break;
            case 'ram_flood enemy':
            case 'ram_flood target':
                if (isPlayer) {
                    onAttack('ram_flood', 18);
                    newOutput.push("RAM flooding initiated!", "");
                } else {
                    newOutput.push("Access denied.", "");
                }
                break;
            case 'repair':
                if (isPlayer) {
                    onDefend('repair');
                    newOutput.push("System repair initiated...", "Health restored!", "");
                } else {
                    newOutput.push("Access denied.", "");
                }
                break;
            case 'firewall':
                if (isPlayer) {
                    onDefend('firewall');
                    newOutput.push("Firewall activated!", "");
                } else {
                    newOutput.push("Access denied.", "");
                }
                break;
            case 'clear':
                setOutput([
                    "Sabotage OS Terminal v1.0",
                    "Type 'help' for available commands",
                    ""
                ]);
                setCommand("");
                return;
            case 'status':
                newOutput.push(`System Status:`, `Health: ${phoneState.health}%`, `Battery: ${phoneState.battery}%`, `CPU Usage: ${phoneState.cpuUsage}%`, `RAM Usage: ${phoneState.ramUsage}%`, `Viruses: ${phoneState.virusCount}`, `Antivirus: ${phoneState.antivirusActive ? 'Active' : 'Inactive'}`, `Firewall: ${phoneState.firewallActive ? 'Active' : 'Inactive'}`, "");
                break;
            default:
                newOutput.push(`Command not found: ${command}`, "Type 'help' for available commands", "");
        }
        setOutput(newOutput);
        setCommand("");
    };
    const handleKeyPress = (e)=>{
        if (e.key === 'Enter') {
            executeCommand();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 bg-black rounded-lg p-3 font-mono text-sm overflow-y-auto",
                children: output.map((line, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-green-400 whitespace-pre-wrap",
                        children: line
                    }, index, false, {
                        fileName: "[project]/src/components/apps/TerminalApp.tsx",
                        lineNumber: 161,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/apps/TerminalApp.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex space-x-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        value: command,
                        onChange: (e)=>setCommand(e.target.value),
                        onKeyPress: handleKeyPress,
                        placeholder: "Enter command...",
                        className: "bg-gray-800 border-gray-600 text-white font-mono",
                        disabled: !isPlayer
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/TerminalApp.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: executeCommand,
                        className: "bg-green-600 hover:bg-green-700",
                        disabled: !isPlayer,
                        children: "Run"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/TerminalApp.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/TerminalApp.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/apps/TerminalApp.tsx",
        lineNumber: 158,
        columnNumber: 5
    }, this);
}
_s(TerminalApp, "eYdFW5V7itpjX//YpH3FKUTPBfU=");
_c = TerminalApp;
var _c;
__turbopack_context__.k.register(_c, "TerminalApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/apps/AntivirusApp.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AntivirusApp": (()=>AntivirusApp)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function AntivirusApp({ phoneState, setPhoneState, onAttack, onDefend, isPlayer }) {
    _s();
    const [scanning, setScanning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scanProgress, setScanProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [lastScanTime, setLastScanTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [threats, setThreats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AntivirusApp.useEffect": ()=>{
            // Generate threats based on phone state
            const currentThreats = [];
            if (phoneState.virusCount > 0) {
                for(let i = 0; i < phoneState.virusCount; i++){
                    currentThreats.push(`Trojan.Sabotage.${i + 1}`);
                }
            }
            if (phoneState.cpuUsage > 80) {
                currentThreats.push("Malware.CPUMiner");
            }
            if (phoneState.ramUsage > 80) {
                currentThreats.push("Spyware.MemoryLeech");
            }
            setThreats(currentThreats);
        }
    }["AntivirusApp.useEffect"], [
        phoneState.virusCount,
        phoneState.cpuUsage,
        phoneState.ramUsage
    ]);
    const startScan = ()=>{
        if (!isPlayer || scanning) return;
        setScanning(true);
        setScanProgress(0);
        const interval = setInterval(()=>{
            setScanProgress((prev)=>{
                if (prev >= 100) {
                    clearInterval(interval);
                    setScanning(false);
                    setLastScanTime(new Date());
                    // Clean viruses if antivirus is active
                    if (phoneState.antivirusActive) {
                        setPhoneState((prevState)=>({
                                ...prevState,
                                virusCount: 0,
                                cpuUsage: Math.max(20, prevState.cpuUsage - 30),
                                ramUsage: Math.max(30, prevState.ramUsage - 20)
                            }));
                    }
                    return 100;
                }
                return prev + 2;
            });
        }, 100);
    };
    const activateRealTimeProtection = ()=>{
        if (!isPlayer) return;
        onDefend('antivirus');
    };
    const quarantineThreat = (threat)=>{
        if (!isPlayer) return;
        setThreats((prev)=>prev.filter((t)=>t !== threat));
        setPhoneState((prev)=>({
                ...prev,
                virusCount: Math.max(0, prev.virusCount - 1)
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-800 rounded-lg p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-white font-semibold",
                                children: "Protection Status"
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-3 h-3 rounded-full ${phoneState.antivirusActive ? 'bg-green-500' : 'bg-red-500'}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-300",
                                        children: "Real-time Protection"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: phoneState.antivirusActive ? 'text-green-400' : 'text-red-400',
                                        children: phoneState.antivirusActive ? 'ON' : 'OFF'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-300",
                                        children: "Threats Detected"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: threats.length === 0 ? 'text-green-400' : 'text-red-400',
                                        children: threats.length
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-300",
                                        children: "Last Scan"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-400",
                                        children: lastScanTime ? lastScanTime.toLocaleTimeString() : 'Never'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-800 rounded-lg p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-white font-semibold mb-3",
                        children: "Quick Actions"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: startScan,
                                disabled: !isPlayer || scanning,
                                className: "w-full bg-blue-600 hover:bg-blue-700",
                                children: scanning ? 'Scanning...' : 'Quick Scan'
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: activateRealTimeProtection,
                                disabled: !isPlayer || phoneState.antivirusActive,
                                className: "w-full bg-green-600 hover:bg-green-700",
                                children: phoneState.antivirusActive ? 'Protection Active' : 'Enable Protection'
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            scanning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-800 rounded-lg p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-white font-semibold mb-3",
                        children: "Scanning System"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-700 rounded-full h-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-blue-500 h-full rounded-full transition-all duration-300",
                                    style: {
                                        width: `${scanProgress}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                                    lineNumber: 143,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center text-sm text-gray-300",
                                children: [
                                    scanProgress,
                                    "% Complete"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                lineNumber: 139,
                columnNumber: 9
            }, this),
            threats.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-800 rounded-lg p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-white font-semibold mb-3",
                        children: "Detected Threats"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 max-h-32 overflow-y-auto",
                        children: threats.map((threat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center bg-red-900/30 rounded p-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-red-400 text-sm font-medium",
                                                children: threat
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                                                lineNumber: 163,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-gray-400 text-xs",
                                                children: "High Risk"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                                                lineNumber: 164,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                                        lineNumber: 162,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: ()=>quarantineThreat(threat),
                                        disabled: !isPlayer,
                                        size: "sm",
                                        className: "bg-red-600 hover:bg-red-700 text-xs",
                                        children: "Quarantine"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                                        lineNumber: 166,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                                lineNumber: 161,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                lineNumber: 157,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-800 rounded-lg p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-white font-semibold mb-3",
                        children: "Security Impact"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 text-sm",
                        children: [
                            phoneState.antivirusActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-green-400 flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mr-2",
                                        children: "🛡️"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                                        lineNumber: 186,
                                        columnNumber: 15
                                    }, this),
                                    "System protected from incoming attacks"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-red-400 flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mr-2",
                                        children: "⚠️"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                                        lineNumber: 191,
                                        columnNumber: 15
                                    }, this),
                                    "System vulnerable to malware"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                                lineNumber: 190,
                                columnNumber: 13
                            }, this),
                            threats.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-green-400 flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mr-2",
                                        children: "✅"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                                        lineNumber: 198,
                                        columnNumber: 15
                                    }, this),
                                    "No threats detected"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                                lineNumber: 197,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-red-400 flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mr-2",
                                        children: "🦠"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                                        lineNumber: 203,
                                        columnNumber: 15
                                    }, this),
                                    "Active threats compromising system"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                                lineNumber: 202,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/AntivirusApp.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/apps/AntivirusApp.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_s(AntivirusApp, "+LPRymQIFFKhK3j8cbHf+YAexjc=");
_c = AntivirusApp;
var _c;
__turbopack_context__.k.register(_c, "AntivirusApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/apps/StatusApp.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "StatusApp": (()=>StatusApp)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function StatusApp({ phoneState }) {
    const getHealthColor = (value)=>{
        if (value > 70) return "text-green-400";
        if (value > 40) return "text-yellow-400";
        return "text-red-400";
    };
    const getUsageColor = (value)=>{
        if (value < 50) return "text-green-400";
        if (value < 80) return "text-yellow-400";
        return "text-red-400";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-800 rounded-lg p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-white font-semibold mb-3",
                        children: "System Health"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/StatusApp.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-sm mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300",
                                                children: "Overall Health"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/StatusApp.tsx",
                                                lineNumber: 34,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: getHealthColor(phoneState.health),
                                                children: [
                                                    phoneState.health,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/apps/StatusApp.tsx",
                                                lineNumber: 35,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/apps/StatusApp.tsx",
                                        lineNumber: 33,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-700 rounded-full h-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `h-full rounded-full transition-all duration-300 ${phoneState.health > 70 ? 'bg-green-500' : phoneState.health > 40 ? 'bg-yellow-500' : 'bg-red-500'}`,
                                            style: {
                                                width: `${phoneState.health}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/apps/StatusApp.tsx",
                                            lineNumber: 38,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/StatusApp.tsx",
                                        lineNumber: 37,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/StatusApp.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-sm mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300",
                                                children: "Battery Level"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/StatusApp.tsx",
                                                lineNumber: 50,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: getHealthColor(phoneState.battery),
                                                children: [
                                                    phoneState.battery,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/apps/StatusApp.tsx",
                                                lineNumber: 51,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/apps/StatusApp.tsx",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-700 rounded-full h-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `h-full rounded-full transition-all duration-300 ${phoneState.battery > 50 ? 'bg-green-500' : phoneState.battery > 20 ? 'bg-yellow-500' : 'bg-red-500'}`,
                                            style: {
                                                width: `${phoneState.battery}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/apps/StatusApp.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/StatusApp.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/StatusApp.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/StatusApp.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/StatusApp.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-800 rounded-lg p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-white font-semibold mb-3",
                        children: "Resource Usage"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/StatusApp.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-sm mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300",
                                                children: "CPU Usage"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/StatusApp.tsx",
                                                lineNumber: 72,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: getUsageColor(phoneState.cpuUsage),
                                                children: [
                                                    phoneState.cpuUsage,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/apps/StatusApp.tsx",
                                                lineNumber: 73,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/apps/StatusApp.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-700 rounded-full h-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `h-full rounded-full transition-all duration-300 ${phoneState.cpuUsage < 50 ? 'bg-green-500' : phoneState.cpuUsage < 80 ? 'bg-yellow-500' : 'bg-red-500'}`,
                                            style: {
                                                width: `${phoneState.cpuUsage}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/apps/StatusApp.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/StatusApp.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/StatusApp.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-sm mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300",
                                                children: "RAM Usage"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/StatusApp.tsx",
                                                lineNumber: 88,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: getUsageColor(phoneState.ramUsage),
                                                children: [
                                                    phoneState.ramUsage,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/apps/StatusApp.tsx",
                                                lineNumber: 89,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/apps/StatusApp.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-700 rounded-full h-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `h-full rounded-full transition-all duration-300 ${phoneState.ramUsage < 50 ? 'bg-green-500' : phoneState.ramUsage < 80 ? 'bg-yellow-500' : 'bg-red-500'}`,
                                            style: {
                                                width: `${phoneState.ramUsage}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/apps/StatusApp.tsx",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/StatusApp.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/StatusApp.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/StatusApp.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/StatusApp.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-800 rounded-lg p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-white font-semibold mb-3",
                        children: "Security Status"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/StatusApp.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-300 text-sm",
                                        children: "Antivirus"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/StatusApp.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-sm ${phoneState.antivirusActive ? 'text-green-400' : 'text-red-400'}`,
                                        children: phoneState.antivirusActive ? 'Active' : 'Inactive'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/StatusApp.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/StatusApp.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-300 text-sm",
                                        children: "Firewall"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/StatusApp.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-sm ${phoneState.firewallActive ? 'text-green-400' : 'text-red-400'}`,
                                        children: phoneState.firewallActive ? 'Active' : 'Inactive'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/StatusApp.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/StatusApp.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-300 text-sm",
                                        children: "Virus Count"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/StatusApp.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-sm ${phoneState.virusCount === 0 ? 'text-green-400' : 'text-red-400'}`,
                                        children: phoneState.virusCount
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/StatusApp.tsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/StatusApp.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-300 text-sm",
                                        children: "Files Deleted"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/StatusApp.tsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-sm ${phoneState.filesDeleted === 0 ? 'text-green-400' : 'text-red-400'}`,
                                        children: phoneState.filesDeleted
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/StatusApp.tsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/StatusApp.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/StatusApp.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/StatusApp.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-800 rounded-lg p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-white font-semibold mb-3",
                        children: "System Alerts"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/StatusApp.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 text-sm",
                        children: [
                            phoneState.health < 25 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-red-400 flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mr-2",
                                        children: "⚠️"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/StatusApp.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this),
                                    "Critical system health detected!"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/StatusApp.tsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this),
                            phoneState.battery < 20 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-red-400 flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mr-2",
                                        children: "🔋"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/StatusApp.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this),
                                    "Low battery warning!"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/StatusApp.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this),
                            phoneState.virusCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-red-400 flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mr-2",
                                        children: "🦠"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/StatusApp.tsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, this),
                                    phoneState.virusCount,
                                    " virus(es) detected!"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/StatusApp.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this),
                            phoneState.cpuUsage > 90 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-yellow-400 flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mr-2",
                                        children: "🔥"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/StatusApp.tsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, this),
                                    "CPU overheating!"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/StatusApp.tsx",
                                lineNumber: 161,
                                columnNumber: 13
                            }, this),
                            phoneState.ramUsage > 90 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-yellow-400 flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mr-2",
                                        children: "💾"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/StatusApp.tsx",
                                        lineNumber: 168,
                                        columnNumber: 15
                                    }, this),
                                    "Memory critically low!"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/StatusApp.tsx",
                                lineNumber: 167,
                                columnNumber: 13
                            }, this),
                            phoneState.health > 80 && phoneState.virusCount === 0 && phoneState.battery > 50 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-green-400 flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mr-2",
                                        children: "✅"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/StatusApp.tsx",
                                        lineNumber: 174,
                                        columnNumber: 15
                                    }, this),
                                    "All systems operational"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/StatusApp.tsx",
                                lineNumber: 173,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/StatusApp.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/StatusApp.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/apps/StatusApp.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c = StatusApp;
var _c;
__turbopack_context__.k.register(_c, "StatusApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/apps/MessagesApp.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "MessagesApp": (()=>MessagesApp)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function MessagesApp({ phoneState, isPlayer }) {
    _s();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MessagesApp.useEffect": ()=>{
            const initialMessages = [
                {
                    id: '1',
                    sender: 'System Guide',
                    content: 'Welcome to Sabotage! Your goal is to destroy the enemy phone while protecting yours. Use the Terminal app to launch attacks and other apps to defend.',
                    timestamp: new Date(Date.now() - 300000),
                    type: 'tutorial'
                },
                {
                    id: '2',
                    sender: 'Combat Tutorial',
                    content: 'Attack Commands:\n• virus enemy - Deploy virus (15 damage)\n• ddos enemy - DDoS attack (20 damage)\n• battery_drain enemy - Drain battery (10 damage)\n• file_delete enemy - Delete files (25 damage)',
                    timestamp: new Date(Date.now() - 240000),
                    type: 'tutorial'
                },
                {
                    id: '3',
                    sender: 'Defense Tutorial',
                    content: 'Defense Commands:\n• repair - Restore health\n• firewall - Block attacks\n• Use Antivirus app for virus protection\n• Monitor Status app for system health',
                    timestamp: new Date(Date.now() - 180000),
                    type: 'tutorial'
                },
                {
                    id: '4',
                    sender: 'Strategy Tips',
                    content: 'Pro Tips:\n• Keep your antivirus active\n• Monitor your battery and health\n• Use file_delete for maximum damage\n• Repair when health is low',
                    timestamp: new Date(Date.now() - 120000),
                    type: 'tip'
                }
            ];
            setMessages(initialMessages);
        }
    }["MessagesApp.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MessagesApp.useEffect": ()=>{
            // Add dynamic messages based on phone state
            const newMessages = [];
            if (phoneState.health < 30 && !messages.some({
                "MessagesApp.useEffect": (m)=>m.content.includes('Critical health')
            }["MessagesApp.useEffect"])) {
                newMessages.push({
                    id: `alert-${Date.now()}`,
                    sender: 'System Alert',
                    content: 'Critical health detected! Use the Terminal command "repair" or visit the Security app to restore your system.',
                    timestamp: new Date(),
                    type: 'alert'
                });
            }
            if (phoneState.battery < 25 && !messages.some({
                "MessagesApp.useEffect": (m)=>m.content.includes('Low battery')
            }["MessagesApp.useEffect"])) {
                newMessages.push({
                    id: `battery-${Date.now()}`,
                    sender: 'Battery Alert',
                    content: 'Low battery warning! Your phone will shut down if battery reaches 0%. Use Battery app to optimize power.',
                    timestamp: new Date(),
                    type: 'alert'
                });
            }
            if (phoneState.virusCount > 0 && !messages.some({
                "MessagesApp.useEffect": (m)=>m.content.includes('Virus detected')
            }["MessagesApp.useEffect"])) {
                newMessages.push({
                    id: `virus-${Date.now()}`,
                    sender: 'Security Alert',
                    content: `Virus detected! ${phoneState.virusCount} threat(s) found. Open Antivirus app immediately to clean your system.`,
                    timestamp: new Date(),
                    type: 'alert'
                });
            }
            if (!phoneState.antivirusActive && !messages.some({
                "MessagesApp.useEffect": (m)=>m.content.includes('Enable antivirus')
            }["MessagesApp.useEffect"])) {
                newMessages.push({
                    id: `antivirus-${Date.now()}`,
                    sender: 'Security Tip',
                    content: 'Your antivirus is disabled! Enable real-time protection in the Antivirus app to defend against incoming attacks.',
                    timestamp: new Date(),
                    type: 'tip'
                });
            }
            if (newMessages.length > 0) {
                setMessages({
                    "MessagesApp.useEffect": (prev)=>[
                            ...newMessages,
                            ...prev
                        ]
                }["MessagesApp.useEffect"]);
            }
        }
    }["MessagesApp.useEffect"], [
        phoneState.health,
        phoneState.battery,
        phoneState.virusCount,
        phoneState.antivirusActive,
        messages
    ]);
    const getMessageIcon = (type)=>{
        switch(type){
            case 'tutorial':
                return '📚';
            case 'alert':
                return '⚠️';
            case 'tip':
                return '💡';
            default:
                return '💬';
        }
    };
    const getMessageColor = (type)=>{
        switch(type){
            case 'tutorial':
                return 'border-blue-500';
            case 'alert':
                return 'border-red-500';
            case 'tip':
                return 'border-yellow-500';
            default:
                return 'border-gray-500';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 space-y-3 overflow-y-auto",
                children: messages.map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `bg-gray-800 rounded-lg p-3 border-l-4 ${getMessageColor(message.type)}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg",
                                                children: getMessageIcon(message.type)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/MessagesApp.tsx",
                                                lineNumber: 134,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white font-semibold text-sm",
                                                children: message.sender
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/MessagesApp.tsx",
                                                lineNumber: 135,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/apps/MessagesApp.tsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-400 text-xs",
                                        children: message.timestamp.toLocaleTimeString()
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/MessagesApp.tsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/MessagesApp.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-200 text-sm whitespace-pre-line leading-relaxed",
                                children: message.content
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/MessagesApp.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this)
                        ]
                    }, message.id, true, {
                        fileName: "[project]/src/components/apps/MessagesApp.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/apps/MessagesApp.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 bg-gray-800 rounded-lg p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-white font-semibold text-sm mb-2",
                        children: "Quick Reference"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/MessagesApp.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-red-400 font-medium",
                                        children: "Attack Apps:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/MessagesApp.tsx",
                                        lineNumber: 153,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "• Terminal"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/MessagesApp.tsx",
                                        lineNumber: 154,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "• Security"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/MessagesApp.tsx",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/MessagesApp.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-green-400 font-medium",
                                        children: "Defense Apps:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/MessagesApp.tsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "• Antivirus"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/MessagesApp.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "• Battery"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/MessagesApp.tsx",
                                        lineNumber: 160,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "• Settings"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/MessagesApp.tsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/MessagesApp.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/MessagesApp.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/MessagesApp.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 bg-gray-800 rounded-lg p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-white font-semibold text-sm mb-2",
                        children: "System Summary"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/MessagesApp.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${phoneState.health > 50 ? 'text-green-400' : 'text-red-400'}`,
                                children: [
                                    "Health: ",
                                    phoneState.health,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/MessagesApp.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${phoneState.battery > 30 ? 'text-green-400' : 'text-red-400'}`,
                                children: [
                                    "Battery: ",
                                    phoneState.battery,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/MessagesApp.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${phoneState.antivirusActive ? 'text-green-400' : 'text-red-400'}`,
                                children: [
                                    "Antivirus: ",
                                    phoneState.antivirusActive ? 'ON' : 'OFF'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/MessagesApp.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${phoneState.virusCount === 0 ? 'text-green-400' : 'text-red-400'}`,
                                children: [
                                    "Viruses: ",
                                    phoneState.virusCount
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/MessagesApp.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/MessagesApp.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/MessagesApp.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/apps/MessagesApp.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
_s(MessagesApp, "BxyhfWWpnSbijcu7qFgrB+X/mWM=");
_c = MessagesApp;
var _c;
__turbopack_context__.k.register(_c, "MessagesApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/apps/BatteryApp.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "BatteryApp": (()=>BatteryApp)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/switch.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function BatteryApp({ phoneState, setPhoneState, onAttack, onDefend, isPlayer }) {
    _s();
    const [powerSaverMode, setPowerSaverMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [backgroundApps, setBackgroundApps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [screenBrightness, setScreenBrightness] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(75);
    const getBatteryColor = ()=>{
        if (phoneState.battery > 50) return "text-green-400";
        if (phoneState.battery > 20) return "text-yellow-400";
        return "text-red-400";
    };
    const getBatteryIcon = ()=>{
        if (phoneState.battery > 75) return "🔋";
        if (phoneState.battery > 50) return "🔋";
        if (phoneState.battery > 25) return "🪫";
        return "🪫";
    };
    const activatePowerSaver = ()=>{
        if (!isPlayer) return;
        setPowerSaverMode(true);
        setPhoneState((prev)=>({
                ...prev,
                cpuUsage: Math.max(10, prev.cpuUsage - 20),
                ramUsage: Math.max(20, prev.ramUsage - 15)
            }));
        onDefend('battery_saver');
    };
    const optimizeBattery = ()=>{
        if (!isPlayer) return;
        setPhoneState((prev)=>({
                ...prev,
                battery: Math.min(100, prev.battery + 15),
                cpuUsage: Math.max(15, prev.cpuUsage - 10)
            }));
    };
    const emergencyCharge = ()=>{
        if (!isPlayer) return;
        setPhoneState((prev)=>({
                ...prev,
                battery: Math.min(100, prev.battery + 25),
                health: Math.max(0, prev.health - 10) // Costs health for emergency charge
            }));
    };
    const closeBackgroundApps = ()=>{
        if (!isPlayer) return;
        setBackgroundApps(false);
        setPhoneState((prev)=>({
                ...prev,
                battery: Math.min(100, prev.battery + 10),
                cpuUsage: Math.max(10, prev.cpuUsage - 15),
                ramUsage: Math.max(20, prev.ramUsage - 20)
            }));
    };
    const getBatteryStatus = ()=>{
        if (phoneState.battery > 80) return "Excellent";
        if (phoneState.battery > 60) return "Good";
        if (phoneState.battery > 40) return "Fair";
        if (phoneState.battery > 20) return "Low";
        return "Critical";
    };
    const getEstimatedTime = ()=>{
        const drainRate = (phoneState.cpuUsage + phoneState.ramUsage) / 20;
        const timeLeft = phoneState.battery / drainRate;
        const hours = Math.floor(timeLeft / 60);
        const minutes = Math.floor(timeLeft % 60);
        return `${hours}h ${minutes}m`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-800 rounded-lg p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-white font-semibold",
                                children: "Battery Status"
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-2xl",
                                children: getBatteryIcon()
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/BatteryApp.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `text-4xl font-bold ${getBatteryColor()}`,
                                        children: [
                                            phoneState.battery,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-gray-400 text-sm",
                                        children: getBatteryStatus()
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-700 rounded-full h-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `h-full rounded-full transition-all duration-300 ${phoneState.battery > 50 ? 'bg-green-500' : phoneState.battery > 20 ? 'bg-yellow-500' : 'bg-red-500'}`,
                                    style: {
                                        width: `${phoneState.battery}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-300",
                                        children: "Time Remaining"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white",
                                        children: getEstimatedTime()
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/BatteryApp.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/BatteryApp.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-800 rounded-lg p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-white font-semibold mb-3",
                        children: "Quick Actions"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/BatteryApp.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: activatePowerSaver,
                                disabled: !isPlayer || powerSaverMode,
                                className: "bg-green-600 hover:bg-green-700 text-xs",
                                children: powerSaverMode ? 'Power Saver ON' : 'Power Saver'
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: optimizeBattery,
                                disabled: !isPlayer,
                                className: "bg-blue-600 hover:bg-blue-700 text-xs",
                                children: "Optimize"
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: closeBackgroundApps,
                                disabled: !isPlayer || !backgroundApps,
                                className: "bg-yellow-600 hover:bg-yellow-700 text-xs",
                                children: "Close Apps"
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: emergencyCharge,
                                disabled: !isPlayer,
                                className: "bg-red-600 hover:bg-red-700 text-xs",
                                children: "Emergency"
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/BatteryApp.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/BatteryApp.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-800 rounded-lg p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-white font-semibold mb-3",
                        children: "Battery Settings"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/BatteryApp.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-white text-sm",
                                                children: "Power Saver Mode"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                                lineNumber: 172,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-gray-400 text-xs",
                                                children: "Reduce performance to save battery"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                                lineNumber: 173,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                        lineNumber: 171,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                        checked: powerSaverMode,
                                        onCheckedChange: (checked)=>{
                                            if (checked) activatePowerSaver();
                                            else setPowerSaverMode(false);
                                        },
                                        disabled: !isPlayer
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-white text-sm",
                                                children: "Background Apps"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                                lineNumber: 187,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-gray-400 text-xs",
                                                children: "Allow apps to run in background"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                                lineNumber: 188,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                        checked: backgroundApps,
                                        onCheckedChange: setBackgroundApps,
                                        disabled: !isPlayer
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                        lineNumber: 190,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/BatteryApp.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/BatteryApp.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-800 rounded-lg p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-white font-semibold mb-3",
                        children: "Battery Usage"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/BatteryApp.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "💻"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                                lineNumber: 205,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white text-sm",
                                                children: "System"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                                lineNumber: 206,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                        lineNumber: 204,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-400 text-sm",
                                        children: [
                                            phoneState.cpuUsage,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "📱"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                                lineNumber: 213,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white text-sm",
                                                children: "Apps"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                                lineNumber: 214,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                        lineNumber: 212,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-400 text-sm",
                                        children: [
                                            phoneState.ramUsage,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                        lineNumber: 216,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "📶"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                                lineNumber: 221,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white text-sm",
                                                children: "Network"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                                lineNumber: 222,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                        lineNumber: 220,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-400 text-sm",
                                        children: "15%"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                        lineNumber: 224,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                lineNumber: 219,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "🔆"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                                lineNumber: 229,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white text-sm",
                                                children: "Display"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                                lineNumber: 230,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                        lineNumber: 228,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-400 text-sm",
                                        children: "20%"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                lineNumber: 227,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/BatteryApp.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/BatteryApp.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-800 rounded-lg p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-white font-semibold mb-3",
                        children: "Battery Health"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/BatteryApp.tsx",
                        lineNumber: 239,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-300",
                                        children: "Maximum Capacity"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                        lineNumber: 242,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white",
                                        children: "100%"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                        lineNumber: 243,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                lineNumber: 241,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-300",
                                        children: "Peak Performance"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                        lineNumber: 246,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: phoneState.battery > 30 ? 'text-green-400' : 'text-red-400',
                                        children: phoneState.battery > 30 ? 'Normal' : 'Degraded'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                        lineNumber: 247,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                lineNumber: 245,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-300",
                                        children: "Charge Cycles"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                        lineNumber: 252,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white",
                                        children: "247"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                        lineNumber: 253,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                lineNumber: 251,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/BatteryApp.tsx",
                        lineNumber: 240,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/BatteryApp.tsx",
                lineNumber: 238,
                columnNumber: 7
            }, this),
            phoneState.battery < 20 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-900/30 rounded-lg p-4 border border-red-500/30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-red-400 text-lg",
                            children: "⚠️"
                        }, void 0, false, {
                            fileName: "[project]/src/components/apps/BatteryApp.tsx",
                            lineNumber: 262,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-red-400 font-semibold text-sm",
                                    children: "Low Battery Warning"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                    lineNumber: 264,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-red-300 text-xs",
                                    children: "Your phone will shut down soon. Use emergency charge or power saver mode."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/apps/BatteryApp.tsx",
                                    lineNumber: 265,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/apps/BatteryApp.tsx",
                            lineNumber: 263,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/apps/BatteryApp.tsx",
                    lineNumber: 261,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/apps/BatteryApp.tsx",
                lineNumber: 260,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/apps/BatteryApp.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_s(BatteryApp, "siask22CHvU6YyEqLaQS9RCB0nk=");
_c = BatteryApp;
var _c;
__turbopack_context__.k.register(_c, "BatteryApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/apps/SecurityApp.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "SecurityApp": (()=>SecurityApp)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function SecurityApp({ phoneState, setPhoneState, onAttack, onDefend, isPlayer }) {
    _s();
    const [selectedAttack, setSelectedAttack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cooldowns, setCooldowns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const attacks = [
        {
            id: 'virus_bomb',
            name: 'Virus Bomb',
            damage: 30,
            description: 'Deploy multiple viruses simultaneously',
            icon: '💣',
            cooldown: 10000,
            color: 'bg-red-600'
        },
        {
            id: 'system_crash',
            name: 'System Crash',
            damage: 35,
            description: 'Force critical system failure',
            icon: '💥',
            cooldown: 15000,
            color: 'bg-orange-600'
        },
        {
            id: 'data_wipe',
            name: 'Data Wipe',
            damage: 40,
            description: 'Delete all user data and files',
            icon: '🗑️',
            cooldown: 20000,
            color: 'bg-purple-600'
        },
        {
            id: 'network_flood',
            name: 'Network Flood',
            damage: 25,
            description: 'Overwhelm network connections',
            icon: '🌊',
            cooldown: 8000,
            color: 'bg-blue-600'
        },
        {
            id: 'memory_bomb',
            name: 'Memory Bomb',
            damage: 28,
            description: 'Consume all available RAM',
            icon: '💾',
            cooldown: 12000,
            color: 'bg-yellow-600'
        },
        {
            id: 'rootkit',
            name: 'Rootkit',
            damage: 45,
            description: 'Gain deep system access',
            icon: '🔓',
            cooldown: 25000,
            color: 'bg-gray-600'
        }
    ];
    const defenses = [
        {
            id: 'firewall_max',
            name: 'Maximum Firewall',
            description: 'Enable strongest firewall protection',
            icon: '🛡️',
            color: 'bg-green-600'
        },
        {
            id: 'system_restore',
            name: 'System Restore',
            description: 'Restore system to previous state',
            icon: '🔄',
            color: 'bg-blue-600'
        },
        {
            id: 'isolation_mode',
            name: 'Isolation Mode',
            description: 'Disconnect from all networks',
            icon: '🔒',
            color: 'bg-purple-600'
        },
        {
            id: 'emergency_backup',
            name: 'Emergency Backup',
            description: 'Create instant system backup',
            icon: '💾',
            color: 'bg-yellow-600'
        }
    ];
    const executeAttack = (attack)=>{
        if (!isPlayer || cooldowns[attack.id]) return;
        onAttack(attack.id, attack.damage);
        // Set cooldown
        setCooldowns((prev)=>({
                ...prev,
                [attack.id]: Date.now() + attack.cooldown
            }));
        // Clear cooldown after time
        setTimeout(()=>{
            setCooldowns((prev)=>{
                const newCooldowns = {
                    ...prev
                };
                delete newCooldowns[attack.id];
                return newCooldowns;
            });
        }, attack.cooldown);
    };
    const executeDefense = (defense)=>{
        if (!isPlayer) return;
        switch(defense.id){
            case 'firewall_max':
                onDefend('firewall');
                setPhoneState((prev)=>({
                        ...prev,
                        firewallActive: true
                    }));
                break;
            case 'system_restore':
                setPhoneState((prev)=>({
                        ...prev,
                        health: Math.min(100, prev.health + 40),
                        virusCount: Math.max(0, prev.virusCount - 2),
                        cpuUsage: Math.max(20, prev.cpuUsage - 30),
                        ramUsage: Math.max(30, prev.ramUsage - 25)
                    }));
                break;
            case 'isolation_mode':
                setPhoneState((prev)=>({
                        ...prev,
                        firewallActive: true
                    }));
                break;
            case 'emergency_backup':
                onDefend('backup');
                break;
        }
    };
    const getCooldownTime = (attackId)=>{
        const cooldownEnd = cooldowns[attackId];
        if (!cooldownEnd) return 0;
        return Math.max(0, cooldownEnd - Date.now());
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-800 rounded-lg p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-white font-semibold mb-3",
                        children: "Security Center"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/SecurityApp.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-4 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `text-2xl ${phoneState.firewallActive ? 'text-green-400' : 'text-red-400'}`,
                                        children: phoneState.firewallActive ? '🛡️' : '⚠️'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/SecurityApp.tsx",
                                        lineNumber: 164,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-white",
                                        children: "Firewall"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/SecurityApp.tsx",
                                        lineNumber: 167,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: phoneState.firewallActive ? 'text-green-400' : 'text-red-400',
                                        children: phoneState.firewallActive ? 'Active' : 'Inactive'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/SecurityApp.tsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/SecurityApp.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `text-2xl ${phoneState.antivirusActive ? 'text-green-400' : 'text-red-400'}`,
                                        children: phoneState.antivirusActive ? '🔒' : '🔓'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/SecurityApp.tsx",
                                        lineNumber: 174,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-white",
                                        children: "Protection"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/SecurityApp.tsx",
                                        lineNumber: 177,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: phoneState.antivirusActive ? 'text-green-400' : 'text-red-400',
                                        children: phoneState.antivirusActive ? 'Secured' : 'Vulnerable'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/SecurityApp.tsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/SecurityApp.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/SecurityApp.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/SecurityApp.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-800 rounded-lg p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-white font-semibold mb-3",
                        children: "Attack Arsenal"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/SecurityApp.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: attacks.map((attack)=>{
                            const cooldownTime = getCooldownTime(attack.id);
                            const isOnCooldown = cooldownTime > 0;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>executeAttack(attack),
                                disabled: !isPlayer || isOnCooldown,
                                className: `${attack.color} hover:opacity-80 text-xs p-2 h-auto flex flex-col items-center space-y-1`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg",
                                        children: attack.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/SecurityApp.tsx",
                                        lineNumber: 200,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: attack.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/SecurityApp.tsx",
                                        lineNumber: 201,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs opacity-80",
                                        children: [
                                            attack.damage,
                                            " DMG"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/apps/SecurityApp.tsx",
                                        lineNumber: 202,
                                        columnNumber: 17
                                    }, this),
                                    isOnCooldown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-red-300",
                                        children: [
                                            Math.ceil(cooldownTime / 1000),
                                            "s"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/apps/SecurityApp.tsx",
                                        lineNumber: 204,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, attack.id, true, {
                                fileName: "[project]/src/components/apps/SecurityApp.tsx",
                                lineNumber: 194,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/SecurityApp.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/SecurityApp.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-800 rounded-lg p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-white font-semibold mb-3",
                        children: "Defense Systems"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/SecurityApp.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: defenses.map((defense)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>executeDefense(defense),
                                disabled: !isPlayer,
                                className: `${defense.color} hover:opacity-80 text-xs p-2 h-auto flex flex-col items-center space-y-1`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg",
                                        children: defense.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/SecurityApp.tsx",
                                        lineNumber: 225,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-center leading-tight",
                                        children: defense.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/SecurityApp.tsx",
                                        lineNumber: 226,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, defense.id, true, {
                                fileName: "[project]/src/components/apps/SecurityApp.tsx",
                                lineNumber: 219,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/SecurityApp.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/SecurityApp.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, this),
            selectedAttack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-800 rounded-lg p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-white font-semibold mb-3",
                        children: "Attack Details"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/SecurityApp.tsx",
                        lineNumber: 235,
                        columnNumber: 11
                    }, this),
                    attacks.map((attack)=>attack.id === selectedAttack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl",
                                            children: attack.icon
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/apps/SecurityApp.tsx",
                                            lineNumber: 240,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-white font-semibold",
                                                    children: attack.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/apps/SecurityApp.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-red-400",
                                                    children: [
                                                        "Damage: ",
                                                        attack.damage
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/apps/SecurityApp.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/apps/SecurityApp.tsx",
                                            lineNumber: 241,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/apps/SecurityApp.tsx",
                                    lineNumber: 239,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300 text-sm",
                                    children: attack.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/apps/SecurityApp.tsx",
                                    lineNumber: 246,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-400",
                                    children: [
                                        "Cooldown: ",
                                        attack.cooldown / 1000,
                                        "s"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/apps/SecurityApp.tsx",
                                    lineNumber: 247,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, attack.id, true, {
                            fileName: "[project]/src/components/apps/SecurityApp.tsx",
                            lineNumber: 238,
                            columnNumber: 15
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/SecurityApp.tsx",
                lineNumber: 234,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-800 rounded-lg p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-white font-semibold mb-3",
                        children: "Security Logs"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/SecurityApp.tsx",
                        lineNumber: 258,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1 text-xs max-h-24 overflow-y-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-green-400",
                                children: "✓ Security app initialized"
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/SecurityApp.tsx",
                                lineNumber: 260,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-yellow-400",
                                children: "⚠ System vulnerability detected"
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/SecurityApp.tsx",
                                lineNumber: 261,
                                columnNumber: 11
                            }, this),
                            phoneState.virusCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-red-400",
                                children: [
                                    "✗ ",
                                    phoneState.virusCount,
                                    " active threat(s)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/SecurityApp.tsx",
                                lineNumber: 263,
                                columnNumber: 13
                            }, this),
                            phoneState.firewallActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-green-400",
                                children: "✓ Firewall protection enabled"
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/SecurityApp.tsx",
                                lineNumber: 266,
                                columnNumber: 13
                            }, this),
                            phoneState.health < 50 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-red-400",
                                children: "✗ System integrity compromised"
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/SecurityApp.tsx",
                                lineNumber: 269,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/SecurityApp.tsx",
                        lineNumber: 259,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/SecurityApp.tsx",
                lineNumber: 257,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-800 rounded-lg p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-white font-semibold mb-3",
                        children: "Threat Level"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/SecurityApp.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-300",
                                children: "Current Level"
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/SecurityApp.tsx",
                                lineNumber: 278,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `font-bold ${phoneState.health > 70 ? 'text-green-400' : phoneState.health > 40 ? 'text-yellow-400' : 'text-red-400'}`,
                                children: phoneState.health > 70 ? 'LOW' : phoneState.health > 40 ? 'MEDIUM' : 'HIGH'
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/SecurityApp.tsx",
                                lineNumber: 279,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/SecurityApp.tsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 bg-gray-700 rounded-full h-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `h-full rounded-full transition-all duration-300 ${phoneState.health > 70 ? 'bg-green-500' : phoneState.health > 40 ? 'bg-yellow-500' : 'bg-red-500'}`,
                            style: {
                                width: `${100 - phoneState.health}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/apps/SecurityApp.tsx",
                            lineNumber: 288,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/SecurityApp.tsx",
                        lineNumber: 287,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/SecurityApp.tsx",
                lineNumber: 275,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/apps/SecurityApp.tsx",
        lineNumber: 158,
        columnNumber: 5
    }, this);
}
_s(SecurityApp, "EWFhfmSVg9SB6RvmipIlHpHPMaw=");
_c = SecurityApp;
var _c;
__turbopack_context__.k.register(_c, "SecurityApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/PhoneScreen.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "PhoneScreen": (()=>PhoneScreen)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$SettingsApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/apps/SettingsApp.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$FileManagerApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/apps/FileManagerApp.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$TerminalApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/apps/TerminalApp.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$AntivirusApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/apps/AntivirusApp.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$StatusApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/apps/StatusApp.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$MessagesApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/apps/MessagesApp.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$BatteryApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/apps/BatteryApp.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$SecurityApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/apps/SecurityApp.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
function PhoneScreen({ phoneState, setPhoneState, isPlayer, onAttack, onDefend, showTutorial, onSkipTutorial, notifications = [], onBack, enemyHealth = 100 }) {
    _s();
    const [openApp, setOpenApp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [apps, setApps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showNotifications, setShowNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [notificationPanelY, setNotificationPanelY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-100);
    // Initialize apps with random positions
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PhoneScreen.useEffect": ()=>{
            const baseApps = [
                {
                    id: 'settings',
                    name: 'Settings',
                    icon: '⚙️',
                    color: 'bg-gray-600',
                    component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$SettingsApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SettingsApp"]
                },
                {
                    id: 'files',
                    name: 'Files',
                    icon: '📁',
                    color: 'bg-blue-600',
                    component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$FileManagerApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileManagerApp"]
                },
                {
                    id: 'terminal',
                    name: 'Terminal',
                    icon: '💻',
                    color: 'bg-black',
                    component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$TerminalApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TerminalApp"]
                },
                {
                    id: 'antivirus',
                    name: 'Antivirus',
                    icon: '🛡️',
                    color: 'bg-green-600',
                    component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$AntivirusApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AntivirusApp"]
                },
                {
                    id: 'status',
                    name: 'Status',
                    icon: '📊',
                    color: 'bg-purple-600',
                    component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$StatusApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusApp"]
                },
                {
                    id: 'messages',
                    name: 'Messages',
                    icon: '💬',
                    color: 'bg-blue-500',
                    component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$MessagesApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessagesApp"]
                },
                {
                    id: 'battery',
                    name: 'Battery',
                    icon: '🔋',
                    color: 'bg-yellow-600',
                    component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$BatteryApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BatteryApp"]
                },
                {
                    id: 'security',
                    name: 'Security',
                    icon: '🔒',
                    color: 'bg-red-600',
                    component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$SecurityApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SecurityApp"]
                }
            ];
            // Generate random grid positions (4x6 grid)
            const positions = [];
            for(let row = 0; row < 6; row++){
                for(let col = 0; col < 4; col++){
                    positions.push({
                        x: col,
                        y: row
                    });
                }
            }
            // Shuffle positions
            const shuffledPositions = positions.sort({
                "PhoneScreen.useEffect.shuffledPositions": ()=>Math.random() - 0.5
            }["PhoneScreen.useEffect.shuffledPositions"]);
            const appsWithPositions = baseApps.map({
                "PhoneScreen.useEffect.appsWithPositions": (app, index)=>({
                        ...app,
                        position: shuffledPositions[index]
                    })
            }["PhoneScreen.useEffect.appsWithPositions"]);
            setApps(appsWithPositions);
        }
    }["PhoneScreen.useEffect"], []);
    const handleAppClick = (appId)=>{
        if (!isPlayer) return;
        setOpenApp(appId);
    };
    const closeApp = ()=>{
        setOpenApp(null);
    };
    const toggleNotifications = ()=>{
        setShowNotifications(!showNotifications);
        setNotificationPanelY(showNotifications ? -100 : 0);
    };
    const currentApp = apps.find((app)=>app.id === openApp);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen w-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center p-4 text-white text-sm relative z-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-4 h-2 bg-white rounded-sm"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PhoneScreen.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs",
                                children: "Sabotage OS"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PhoneScreen.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PhoneScreen.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-2",
                        children: [
                            isPlayer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs",
                                        children: "Enemy:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PhoneScreen.tsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-2 bg-gray-600 rounded-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full bg-red-500 rounded-full transition-all duration-300",
                                            style: {
                                                width: `${enemyHealth}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PhoneScreen.tsx",
                                            lineNumber: 116,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PhoneScreen.tsx",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PhoneScreen.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs",
                                children: [
                                    phoneState.battery,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PhoneScreen.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-6 h-3 border border-white rounded-sm ${phoneState.battery > 20 ? 'bg-green-500' : 'bg-red-500'}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/PhoneScreen.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PhoneScreen.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PhoneScreen.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute top-0 left-0 right-0 bg-black/90 backdrop-blur-lg z-30 transition-transform duration-300 ${showNotifications ? 'translate-y-0' : '-translate-y-full'}`,
                style: {
                    height: '60%'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 pt-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-white font-semibold text-lg",
                                    children: "Notifications"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PhoneScreen.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: toggleNotifications,
                                    variant: "ghost",
                                    size: "sm",
                                    className: "text-white hover:bg-white/20",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PhoneScreen.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PhoneScreen.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 max-h-96 overflow-y-auto",
                            children: [
                                notifications.map((notification)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white/10 rounded-2xl p-4 border border-white/20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start space-x-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-2xl",
                                                    children: notification.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PhoneScreen.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-white font-medium",
                                                            children: notification.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/PhoneScreen.tsx",
                                                            lineNumber: 155,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-gray-300 text-sm",
                                                            children: notification.message
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/PhoneScreen.tsx",
                                                            lineNumber: 156,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-gray-400 text-xs mt-1",
                                                            children: new Date(notification.timestamp).toLocaleTimeString()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/PhoneScreen.tsx",
                                                            lineNumber: 157,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/PhoneScreen.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PhoneScreen.tsx",
                                            lineNumber: 152,
                                            columnNumber: 17
                                        }, this)
                                    }, notification.id, false, {
                                        fileName: "[project]/src/components/PhoneScreen.tsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, this)),
                                notifications.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center text-gray-400 py-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-4xl mb-2",
                                            children: "🔔"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PhoneScreen.tsx",
                                            lineNumber: 166,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: "No notifications"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PhoneScreen.tsx",
                                            lineNumber: 167,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PhoneScreen.tsx",
                                    lineNumber: 165,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PhoneScreen.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PhoneScreen.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PhoneScreen.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 right-0 h-16 z-20 cursor-pointer",
                onClick: toggleNotifications,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-1 bg-white/30 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PhoneScreen.tsx",
                        lineNumber: 180,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/PhoneScreen.tsx",
                    lineNumber: 179,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PhoneScreen.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 mb-4 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-black/30 rounded-full h-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `h-full rounded-full transition-all duration-300 ${phoneState.health > 50 ? 'bg-green-500' : phoneState.health > 25 ? 'bg-yellow-500' : 'bg-red-500'}`,
                            style: {
                                width: `${phoneState.health}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/PhoneScreen.tsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PhoneScreen.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white text-sm text-center mt-1",
                        children: [
                            "System Health: ",
                            phoneState.health,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PhoneScreen.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PhoneScreen.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 relative z-10",
                children: openApp && currentApp?.component ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-black/80 backdrop-blur-lg rounded-2xl h-full p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-white font-semibold",
                                        children: currentApp.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PhoneScreen.tsx",
                                        lineNumber: 203,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex space-x-2",
                                        children: [
                                            onBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                onClick: onBack,
                                                variant: "ghost",
                                                size: "sm",
                                                className: "text-white hover:bg-white/20",
                                                children: "🏠"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PhoneScreen.tsx",
                                                lineNumber: 206,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                onClick: closeApp,
                                                variant: "ghost",
                                                size: "sm",
                                                className: "text-white hover:bg-white/20",
                                                children: "✕"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PhoneScreen.tsx",
                                                lineNumber: 215,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PhoneScreen.tsx",
                                        lineNumber: 204,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PhoneScreen.tsx",
                                lineNumber: 202,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(currentApp.component, {
                                phoneState: phoneState,
                                setPhoneState: setPhoneState,
                                onAttack: onAttack,
                                onDefend: onDefend,
                                isPlayer: isPlayer
                            }, void 0, false, {
                                fileName: "[project]/src/components/PhoneScreen.tsx",
                                lineNumber: 225,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PhoneScreen.tsx",
                        lineNumber: 201,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/PhoneScreen.tsx",
                    lineNumber: 200,
                    columnNumber: 11
                }, this) : /* Home Screen with Apps */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center text-white mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-4xl font-thin mb-2",
                                    children: new Date().toLocaleTimeString([], {
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PhoneScreen.tsx",
                                    lineNumber: 239,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm opacity-80",
                                    children: new Date().toLocaleDateString([], {
                                        weekday: 'long',
                                        month: 'short',
                                        day: 'numeric'
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PhoneScreen.tsx",
                                    lineNumber: 242,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PhoneScreen.tsx",
                            lineNumber: 238,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-4 gap-6 flex-1 content-center",
                            children: apps.map((app)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center cursor-pointer transform hover:scale-105 transition-transform duration-200",
                                    onClick: ()=>handleAppClick(app.id),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-16 h-16 ${app.color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg mb-2 ${!isPlayer ? 'opacity-50' : ''}`,
                                            children: app.icon
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PhoneScreen.tsx",
                                            lineNumber: 255,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white text-xs text-center font-medium",
                                            children: app.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PhoneScreen.tsx",
                                            lineNumber: 258,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, app.id, true, {
                                    fileName: "[project]/src/components/PhoneScreen.tsx",
                                    lineNumber: 250,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/PhoneScreen.tsx",
                            lineNumber: 248,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PhoneScreen.tsx",
                    lineNumber: 236,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PhoneScreen.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this),
            phoneState.virusCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none z-40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-500 text-8xl animate-pulse",
                    children: "⚠️"
                }, void 0, false, {
                    fileName: "[project]/src/components/PhoneScreen.tsx",
                    lineNumber: 269,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PhoneScreen.tsx",
                lineNumber: 268,
                columnNumber: 9
            }, this),
            phoneState.health < 25 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-red-500/20 pointer-events-none animate-pulse z-30"
            }, void 0, false, {
                fileName: "[project]/src/components/PhoneScreen.tsx",
                lineNumber: 276,
                columnNumber: 9
            }, this),
            notifications.length > 0 && !showNotifications && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-2 right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold z-30 animate-bounce",
                children: notifications.length > 9 ? '9+' : notifications.length
            }, void 0, false, {
                fileName: "[project]/src/components/PhoneScreen.tsx",
                lineNumber: 281,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PhoneScreen.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
_s(PhoneScreen, "P7iSvqL7lFUIGzc18Mxq6GLD3YI=");
_c = PhoneScreen;
var _c;
__turbopack_context__.k.register(_c, "PhoneScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/BotAI.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "BotAI": (()=>BotAI)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function BotAI({ playerPhone, setPlayerPhone, addNotification, gameOver }) {
    _s();
    const botAttacks = [
        {
            type: 'virus',
            damage: 12,
            probability: 0.3,
            description: 'Bot deployed virus'
        },
        {
            type: 'battery_drain',
            damage: 8,
            probability: 0.25,
            description: 'Bot drained battery'
        },
        {
            type: 'file_delete',
            damage: 20,
            probability: 0.15,
            description: 'Bot deleted files'
        },
        {
            type: 'cpu_overload',
            damage: 10,
            probability: 0.2,
            description: 'Bot overloaded CPU'
        },
        {
            type: 'ram_flood',
            damage: 15,
            probability: 0.2,
            description: 'Bot flooded RAM'
        },
        {
            type: 'ddos',
            damage: 18,
            probability: 0.1,
            description: 'Bot launched DDoS'
        }
    ];
    const executeAttack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BotAI.useCallback[executeAttack]": (attack)=>{
            if (gameOver) return;
            // Reduce damage if player has defenses active
            let actualDamage = attack.damage;
            if (playerPhone.firewallActive) {
                actualDamage = Math.floor(actualDamage * 0.6); // Firewall reduces damage by 40%
            }
            if (playerPhone.antivirusActive && attack.type === 'virus') {
                actualDamage = Math.floor(actualDamage * 0.3); // Antivirus greatly reduces virus damage
            }
            setPlayerPhone({
                "BotAI.useCallback[executeAttack]": (prev)=>{
                    const newState = {
                        ...prev
                    };
                    switch(attack.type){
                        case 'virus':
                            newState.virusCount += 1;
                            newState.health = Math.max(0, prev.health - actualDamage);
                            newState.cpuUsage = Math.min(100, prev.cpuUsage + 5);
                            break;
                        case 'battery_drain':
                            newState.battery = Math.max(0, prev.battery - actualDamage);
                            break;
                        case 'file_delete':
                            newState.filesDeleted += 1;
                            newState.health = Math.max(0, prev.health - actualDamage);
                            break;
                        case 'cpu_overload':
                            newState.cpuUsage = Math.min(100, prev.cpuUsage + actualDamage);
                            newState.health = Math.max(0, prev.health - Math.floor(actualDamage * 0.5));
                            break;
                        case 'ram_flood':
                            newState.ramUsage = Math.min(100, prev.ramUsage + actualDamage);
                            newState.health = Math.max(0, prev.health - Math.floor(actualDamage * 0.6));
                            break;
                        case 'ddos':
                            newState.health = Math.max(0, prev.health - actualDamage);
                            newState.cpuUsage = Math.min(100, prev.cpuUsage + 10);
                            newState.ramUsage = Math.min(100, prev.ramUsage + 8);
                            break;
                        default:
                            newState.health = Math.max(0, prev.health - actualDamage);
                    }
                    return newState;
                }
            }["BotAI.useCallback[executeAttack]"]);
            addNotification("Under Attack!", `Enemy ${attack.type.replace('_', ' ')} dealt ${actualDamage} damage`, 'system', '🚨');
        }
    }["BotAI.useCallback[executeAttack]"], [
        gameOver,
        playerPhone.firewallActive,
        playerPhone.antivirusActive,
        setPlayerPhone,
        addNotification
    ]);
    const selectBotAttack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BotAI.useCallback[selectBotAttack]": ()=>{
            if (gameOver) return;
            // Bot AI logic - choose attacks based on player's state
            let availableAttacks = [
                ...botAttacks
            ];
            // Prioritize certain attacks based on player state
            if (playerPhone.health < 30) {
                // Focus on finishing moves when player is low
                availableAttacks = availableAttacks.filter({
                    "BotAI.useCallback[selectBotAttack]": (a)=>a.type === 'file_delete' || a.type === 'ddos' || a.type === 'virus'
                }["BotAI.useCallback[selectBotAttack]"]);
            } else if (playerPhone.battery < 40) {
                // Focus on battery drain when battery is low
                availableAttacks = availableAttacks.filter({
                    "BotAI.useCallback[selectBotAttack]": (a)=>a.type === 'battery_drain' || a.type === 'cpu_overload'
                }["BotAI.useCallback[selectBotAttack]"]);
            } else if (!playerPhone.antivirusActive) {
                // Spam viruses if no antivirus
                availableAttacks = availableAttacks.filter({
                    "BotAI.useCallback[selectBotAttack]": (a)=>a.type === 'virus' || a.type === 'ram_flood'
                }["BotAI.useCallback[selectBotAttack]"]);
            }
            // Select attack based on probability
            const totalProbability = availableAttacks.reduce({
                "BotAI.useCallback[selectBotAttack].totalProbability": (sum, attack)=>sum + attack.probability
            }["BotAI.useCallback[selectBotAttack].totalProbability"], 0);
            let random = Math.random() * totalProbability;
            for (const attack of availableAttacks){
                random -= attack.probability;
                if (random <= 0) {
                    executeAttack(attack);
                    break;
                }
            }
        }
    }["BotAI.useCallback[selectBotAttack]"], [
        gameOver,
        playerPhone.health,
        playerPhone.battery,
        playerPhone.antivirusActive,
        botAttacks,
        executeAttack
    ]);
    // Bot attack intervals
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BotAI.useEffect": ()=>{
            if (gameOver) return;
            // Bot attacks every 3-8 seconds with some randomness
            const getRandomInterval = {
                "BotAI.useEffect.getRandomInterval": ()=>Math.random() * 5000 + 3000
            }["BotAI.useEffect.getRandomInterval"]; // 3-8 seconds
            const scheduleNextAttack = {
                "BotAI.useEffect.scheduleNextAttack": ()=>{
                    const interval = setTimeout({
                        "BotAI.useEffect.scheduleNextAttack.interval": ()=>{
                            // 70% chance to attack each interval
                            if (Math.random() < 0.7) {
                                selectBotAttack();
                            }
                            scheduleNextAttack(); // Schedule next attack
                        }
                    }["BotAI.useEffect.scheduleNextAttack.interval"], getRandomInterval());
                    return interval;
                }
            }["BotAI.useEffect.scheduleNextAttack"];
            const timeoutId = scheduleNextAttack();
            return ({
                "BotAI.useEffect": ()=>clearTimeout(timeoutId)
            })["BotAI.useEffect"];
        }
    }["BotAI.useEffect"], [
        gameOver,
        selectBotAttack
    ]);
    // Defensive actions for bot (simulated)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BotAI.useEffect": ()=>{
            if (gameOver) return;
            // Bot occasionally "defends" by reducing its vulnerability (this is just for realism)
            const defenseInterval = setInterval({
                "BotAI.useEffect.defenseInterval": ()=>{
                // This doesn't actually affect the bot's phone state since we don't show it
                // But it could be used for future enhancements
                }
            }["BotAI.useEffect.defenseInterval"], 15000);
            return ({
                "BotAI.useEffect": ()=>clearInterval(defenseInterval)
            })["BotAI.useEffect"];
        }
    }["BotAI.useEffect"], [
        gameOver
    ]);
    // Auto-disable defenses after some time (realism)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BotAI.useEffect": ()=>{
            if (playerPhone.firewallActive) {
                const timeout = setTimeout({
                    "BotAI.useEffect.timeout": ()=>{
                        setPlayerPhone({
                            "BotAI.useEffect.timeout": (prev)=>({
                                    ...prev,
                                    firewallActive: false
                                })
                        }["BotAI.useEffect.timeout"]);
                    }
                }["BotAI.useEffect.timeout"], 30000); // Firewall lasts 30 seconds
                return ({
                    "BotAI.useEffect": ()=>clearTimeout(timeout)
                })["BotAI.useEffect"];
            }
        }
    }["BotAI.useEffect"], [
        playerPhone.firewallActive,
        setPlayerPhone
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BotAI.useEffect": ()=>{
            if (playerPhone.antivirusActive) {
                const timeout = setTimeout({
                    "BotAI.useEffect.timeout": ()=>{
                        setPlayerPhone({
                            "BotAI.useEffect.timeout": (prev)=>({
                                    ...prev,
                                    antivirusActive: false
                                })
                        }["BotAI.useEffect.timeout"]);
                    }
                }["BotAI.useEffect.timeout"], 45000); // Antivirus lasts 45 seconds
                return ({
                    "BotAI.useEffect": ()=>clearTimeout(timeout)
                })["BotAI.useEffect"];
            }
        }
    }["BotAI.useEffect"], [
        playerPhone.antivirusActive,
        setPlayerPhone
    ]);
    // This component doesn't render anything visible
    return null;
}
_s(BotAI, "o7IjrOesU1ovq5dqH4dShCUmZhU=");
_c = BotAI;
var _c;
__turbopack_context__.k.register(_c, "BotAI");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/GameInterface.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "GameInterface": (()=>GameInterface)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PhoneScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PhoneScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BotAI$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BotAI.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function GameInterface({ onBack, onWin, showTutorial, onSkipTutorial }) {
    _s();
    const [playerPhone, setPlayerPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        battery: 100,
        health: 100,
        cpuUsage: 20,
        ramUsage: 30,
        filesDeleted: 0,
        virusCount: 0,
        antivirusActive: false,
        firewallActive: false
    });
    const [botPhone, setBotPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        battery: 100,
        health: 100,
        cpuUsage: 25,
        ramUsage: 35,
        filesDeleted: 0,
        virusCount: 0,
        antivirusActive: false,
        firewallActive: false
    });
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [gameOver, setGameOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [winner, setWinner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [attackCount, setAttackCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [currentView, setCurrentView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('player');
    // Check for game over conditions
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameInterface.useEffect": ()=>{
            if (playerPhone.health <= 0 || playerPhone.battery <= 0) {
                setGameOver(true);
                setWinner('bot');
            } else if (botPhone.health <= 0 || botPhone.battery <= 0) {
                setGameOver(true);
                setWinner('player');
                const earnedGB = Math.floor(attackCount * 2.5 + 50);
                setTimeout({
                    "GameInterface.useEffect": ()=>onWin(earnedGB)
                }["GameInterface.useEffect"], 2000);
            }
        }
    }["GameInterface.useEffect"], [
        playerPhone.health,
        playerPhone.battery,
        botPhone.health,
        botPhone.battery,
        attackCount,
        onWin
    ]);
    const addNotification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameInterface.useCallback[addNotification]": (title, message, type, icon)=>{
            const notification = {
                id: Date.now().toString(),
                title,
                message,
                timestamp: Date.now(),
                type,
                icon
            };
            setNotifications({
                "GameInterface.useCallback[addNotification]": (prev)=>[
                        notification,
                        ...prev.slice(0, 19)
                    ]
            }["GameInterface.useCallback[addNotification]"]); // Keep last 20 notifications
        }
    }["GameInterface.useCallback[addNotification]"], []);
    const attackBot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameInterface.useCallback[attackBot]": (attackType, damage)=>{
            if (gameOver) return;
            setBotPhone({
                "GameInterface.useCallback[attackBot]": (prev)=>{
                    const newHealth = Math.max(0, prev.health - damage);
                    const newBattery = attackType === 'battery_drain' ? Math.max(0, prev.battery - damage) : prev.battery;
                    const newVirusCount = attackType === 'virus' ? prev.virusCount + 1 : prev.virusCount;
                    const newFilesDeleted = attackType === 'file_delete' ? prev.filesDeleted + 1 : prev.filesDeleted;
                    return {
                        ...prev,
                        health: newHealth,
                        battery: newBattery,
                        virusCount: newVirusCount,
                        filesDeleted: newFilesDeleted,
                        cpuUsage: Math.min(100, prev.cpuUsage + (attackType === 'cpu_overload' ? damage : 0)),
                        ramUsage: Math.min(100, prev.ramUsage + (attackType === 'ram_flood' ? damage : 0))
                    };
                }
            }["GameInterface.useCallback[attackBot]"]);
            setAttackCount({
                "GameInterface.useCallback[attackBot]": (prev)=>prev + 1
            }["GameInterface.useCallback[attackBot]"]);
            addNotification("Attack Successful", `${attackType.replace('_', ' ')} dealt ${damage} damage to enemy`, 'attack', '⚔️');
        }
    }["GameInterface.useCallback[attackBot]"], [
        gameOver,
        addNotification
    ]);
    const defendPlayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameInterface.useCallback[defendPlayer]": (defenseType)=>{
            if (gameOver) return;
            setPlayerPhone({
                "GameInterface.useCallback[defendPlayer]": (prev)=>{
                    switch(defenseType){
                        case 'antivirus':
                            addNotification("Defense Activated", "Antivirus protection enabled", 'defense', '🛡️');
                            return {
                                ...prev,
                                antivirusActive: true,
                                virusCount: 0
                            };
                        case 'firewall':
                            addNotification("Defense Activated", "Firewall protection enabled", 'defense', '🔥');
                            return {
                                ...prev,
                                firewallActive: true
                            };
                        case 'repair':
                            addNotification("System Repair", "Health restored by 20 points", 'defense', '🔧');
                            return {
                                ...prev,
                                health: Math.min(100, prev.health + 20)
                            };
                        case 'battery_saver':
                            addNotification("Power Management", "Battery optimized", 'defense', '🔋');
                            return {
                                ...prev,
                                battery: Math.min(100, prev.battery + 15)
                            };
                        default:
                            return prev;
                    }
                }
            }["GameInterface.useCallback[defendPlayer]"]);
        }
    }["GameInterface.useCallback[defendPlayer]"], [
        gameOver,
        addNotification
    ]);
    if (gameOver) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-screen w-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 flex flex-col justify-center items-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-black/80 backdrop-blur-lg rounded-3xl p-8 max-w-sm w-full mx-4 text-center border border-white/20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-6xl mb-4",
                        children: winner === 'player' ? '🏆' : '💀'
                    }, void 0, false, {
                        fileName: "[project]/src/components/GameInterface.tsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: `text-3xl font-bold mb-4 ${winner === 'player' ? 'text-green-400' : 'text-red-400'}`,
                        children: winner === 'player' ? 'VICTORY!' : 'DEFEAT!'
                    }, void 0, false, {
                        fileName: "[project]/src/components/GameInterface.tsx",
                        lineNumber: 156,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white mb-6",
                        children: winner === 'player' ? `You earned ${Math.floor(attackCount * 2.5 + 50)} GB!` : 'Your phone was destroyed!'
                    }, void 0, false, {
                        fileName: "[project]/src/components/GameInterface.tsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: onBack,
                        className: "w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold rounded-2xl",
                        children: "Return to Menu"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GameInterface.tsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GameInterface.tsx",
                lineNumber: 152,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/GameInterface.tsx",
            lineNumber: 151,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen w-screen bg-black overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PhoneScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhoneScreen"], {
                phoneState: currentView === 'player' ? playerPhone : botPhone,
                setPhoneState: currentView === 'player' ? setPlayerPhone : setBotPhone,
                isPlayer: currentView === 'player',
                onAttack: attackBot,
                onDefend: defendPlayer,
                showTutorial: showTutorial,
                onSkipTutorial: onSkipTutorial,
                notifications: notifications,
                onBack: onBack,
                enemyHealth: currentView === 'player' ? botPhone.health : playerPhone.health
            }, void 0, false, {
                fileName: "[project]/src/components/GameInterface.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-4 left-1/2 transform -translate-x-1/2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setCurrentView(currentView === 'player' ? 'bot' : 'player'),
                    className: "bg-black/80 backdrop-blur-lg border-2 border-white/30 rounded-full p-4 shadow-lg hover:scale-105 transition-transform duration-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-3 h-3 rounded-full ${currentView === 'player' ? 'bg-green-500' : 'bg-gray-400'}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/GameInterface.tsx",
                                lineNumber: 199,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white text-sm font-medium",
                                children: currentView === 'player' ? 'Your Phone' : 'Enemy Phone'
                            }, void 0, false, {
                                fileName: "[project]/src/components/GameInterface.tsx",
                                lineNumber: 200,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-3 h-3 rounded-full ${currentView === 'bot' ? 'bg-red-500' : 'bg-gray-400'}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/GameInterface.tsx",
                                lineNumber: 203,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GameInterface.tsx",
                        lineNumber: 198,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/GameInterface.tsx",
                    lineNumber: 194,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/GameInterface.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BotAI$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BotAI"], {
                playerPhone: playerPhone,
                setPlayerPhone: setPlayerPhone,
                addNotification: addNotification,
                gameOver: gameOver
            }, void 0, false, {
                fileName: "[project]/src/components/GameInterface.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/GameInterface.tsx",
        lineNumber: 177,
        columnNumber: 5
    }, this);
}
_s(GameInterface, "PqeWUjw+rbCEMWe3My/+a3gJ/bg=");
_c = GameInterface;
var _c;
__turbopack_context__.k.register(_c, "GameInterface");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Shop.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Shop": (()=>Shop)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Shop({ onBack, gigabytes, setGigabytes }) {
    _s();
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [ownedItems, setOwnedItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const shopItems = [
        // Defense Items
        {
            id: 'premium_antivirus',
            name: 'Premium Antivirus',
            description: 'Advanced virus protection with real-time scanning',
            price: 150,
            icon: '🛡️',
            category: 'defense',
            owned: ownedItems.has('premium_antivirus')
        },
        {
            id: 'military_firewall',
            name: 'Military Firewall',
            description: 'Military-grade firewall protection',
            price: 200,
            icon: '🔥',
            category: 'defense',
            owned: ownedItems.has('military_firewall')
        },
        {
            id: 'auto_repair',
            name: 'Auto Repair System',
            description: 'Automatically repairs system damage',
            price: 180,
            icon: '🔧',
            category: 'defense',
            owned: ownedItems.has('auto_repair')
        },
        {
            id: 'backup_shield',
            name: 'Backup Shield',
            description: 'Creates automatic backups during attacks',
            price: 120,
            icon: '💾',
            category: 'defense',
            owned: ownedItems.has('backup_shield')
        },
        // Attack Items
        {
            id: 'mega_virus',
            name: 'Mega Virus',
            description: 'Devastating virus that deals massive damage',
            price: 250,
            icon: '💣',
            category: 'attack',
            owned: ownedItems.has('mega_virus')
        },
        {
            id: 'quantum_ddos',
            name: 'Quantum DDoS',
            description: 'Next-gen DDoS attack with quantum processing',
            price: 300,
            icon: '⚡',
            category: 'attack',
            owned: ownedItems.has('quantum_ddos')
        },
        {
            id: 'data_shredder',
            name: 'Data Shredder',
            description: 'Permanently destroys enemy files',
            price: 220,
            icon: '🗑️',
            category: 'attack',
            owned: ownedItems.has('data_shredder')
        },
        {
            id: 'logic_bomb',
            name: 'Logic Bomb',
            description: 'Delayed attack that triggers automatically',
            price: 280,
            icon: '💥',
            category: 'attack',
            owned: ownedItems.has('logic_bomb')
        },
        // Utility Items
        {
            id: 'battery_booster',
            name: 'Battery Booster',
            description: 'Increases maximum battery capacity',
            price: 100,
            icon: '🔋',
            category: 'utility',
            owned: ownedItems.has('battery_booster')
        },
        {
            id: 'cpu_optimizer',
            name: 'CPU Optimizer',
            description: 'Reduces CPU usage and improves performance',
            price: 130,
            icon: '⚙️',
            category: 'utility',
            owned: ownedItems.has('cpu_optimizer')
        },
        {
            id: 'ram_expander',
            name: 'RAM Expander',
            description: 'Increases available memory',
            price: 110,
            icon: '💿',
            category: 'utility',
            owned: ownedItems.has('ram_expander')
        },
        {
            id: 'speed_hack',
            name: 'Speed Hack',
            description: 'Reduces attack cooldowns',
            price: 160,
            icon: '🚀',
            category: 'utility',
            owned: ownedItems.has('speed_hack')
        }
    ];
    const filteredItems = shopItems.filter((item)=>selectedCategory === 'all' || item.category === selectedCategory);
    const purchaseItem = (item)=>{
        if (gigabytes >= item.price && !ownedItems.has(item.id)) {
            setGigabytes((prev)=>prev - item.price);
            setOwnedItems((prev)=>new Set([
                    ...prev,
                    item.id
                ]));
        }
    };
    const getCategoryColor = (category)=>{
        switch(category){
            case 'defense':
                return 'text-green-400';
            case 'attack':
                return 'text-red-400';
            case 'utility':
                return 'text-blue-400';
            default:
                return 'text-gray-400';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen w-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center p-4 text-white text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-4 h-2 bg-white rounded-sm"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Shop.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs",
                                children: "Sabotage OS"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Shop.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Shop.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs",
                                children: "100%"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Shop.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-6 h-3 border border-white rounded-sm bg-green-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Shop.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Shop.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Shop.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-black/30 backdrop-blur-lg rounded-3xl p-4 border border-white/20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl",
                                            children: "🛒"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Shop.tsx",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-xl font-bold text-white",
                                                    children: "SHOP"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Shop.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white/60 text-sm",
                                                    children: "Upgrade Arsenal"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Shop.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Shop.tsx",
                                            lineNumber: 184,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Shop.tsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: onBack,
                                    variant: "ghost",
                                    className: "text-white hover:bg-white/20 rounded-2xl",
                                    children: "🏠"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Shop.tsx",
                                    lineNumber: 189,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Shop.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-black/40 rounded-2xl p-3 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-green-400 font-mono text-xl font-bold",
                                    children: [
                                        gigabytes,
                                        " GB"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Shop.tsx",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/80 text-xs",
                                    children: "Available Currency"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Shop.tsx",
                                    lineNumber: 200,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Shop.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Shop.tsx",
                    lineNumber: 178,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Shop.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-black/30 backdrop-blur-lg rounded-2xl p-3 border border-white/20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-4 gap-2",
                        children: [
                            'all',
                            'defense',
                            'attack',
                            'utility'
                        ].map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>setSelectedCategory(category),
                                className: `${selectedCategory === category ? 'bg-blue-600 hover:bg-blue-700' : 'bg-white/20 hover:bg-white/30'} text-white capitalize text-xs py-2 rounded-xl`,
                                children: category
                            }, category, false, {
                                fileName: "[project]/src/components/Shop.tsx",
                                lineNumber: 210,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Shop.tsx",
                        lineNumber: 208,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Shop.tsx",
                    lineNumber: 207,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Shop.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 px-4 pb-4 overflow-y-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: filteredItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-black/30 backdrop-blur-lg rounded-2xl p-4 border border-white/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-3xl mb-2",
                                                children: item.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Shop.tsx",
                                                lineNumber: 232,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-white font-semibold text-sm",
                                                children: item.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Shop.tsx",
                                                lineNumber: 233,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-xs capitalize ${getCategoryColor(item.category)}`,
                                                children: item.category
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Shop.tsx",
                                                lineNumber: 234,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Shop.tsx",
                                        lineNumber: 231,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-300 text-xs mb-3 text-center leading-relaxed",
                                        children: item.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Shop.tsx",
                                        lineNumber: 239,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center mb-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-green-400 font-mono text-sm font-bold",
                                            children: [
                                                item.price,
                                                " GB"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Shop.tsx",
                                            lineNumber: 244,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Shop.tsx",
                                        lineNumber: 243,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: ()=>purchaseItem(item),
                                        disabled: gigabytes < item.price || ownedItems.has(item.id),
                                        className: `w-full text-xs py-2 rounded-xl ${ownedItems.has(item.id) ? 'bg-green-600 hover:bg-green-600 cursor-not-allowed' : gigabytes >= item.price ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-600 hover:bg-gray-600 cursor-not-allowed'} text-white font-semibold`,
                                        children: ownedItems.has(item.id) ? 'OWNED' : 'BUY'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Shop.tsx",
                                        lineNumber: 247,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, item.id, true, {
                                fileName: "[project]/src/components/Shop.tsx",
                                lineNumber: 230,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Shop.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this),
                    ownedItems.size > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-black/30 backdrop-blur-lg rounded-2xl p-4 mt-4 border border-white/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-white font-semibold mb-3 text-center",
                                children: "Your Arsenal"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Shop.tsx",
                                lineNumber: 267,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-4 gap-3",
                                children: Array.from(ownedItems).map((itemId)=>{
                                    const item = shopItems.find((i)=>i.id === itemId);
                                    if (!item) return null;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white/10 rounded-xl p-2 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-lg mb-1",
                                                children: item.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Shop.tsx",
                                                lineNumber: 275,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-white text-xs font-medium",
                                                children: item.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Shop.tsx",
                                                lineNumber: 276,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, itemId, true, {
                                        fileName: "[project]/src/components/Shop.tsx",
                                        lineNumber: 274,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/Shop.tsx",
                                lineNumber: 268,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Shop.tsx",
                        lineNumber: 266,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Shop.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Shop.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, this);
}
_s(Shop, "hiVCz0igX91+iCs7RBmcme2WenQ=");
_c = Shop;
var _c;
__turbopack_context__.k.register(_c, "Shop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Settings.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Settings": (()=>Settings)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/switch.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Settings({ onBack }) {
    _s();
    const [soundEnabled, setSoundEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [musicEnabled, setMusicEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [notificationsEnabled, setNotificationsEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [autoSaveEnabled, setAutoSaveEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [difficultyLevel, setDifficultyLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2); // 0=Easy, 1=Normal, 2=Hard
    const [soundVolume, setSoundVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        75
    ]);
    const [musicVolume, setMusicVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        60
    ]);
    const difficultyLevels = [
        'Easy',
        'Normal',
        'Hard',
        'Expert'
    ];
    const resetProgress = ()=>{
        if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
            // Reset logic would go here
            alert('Progress reset! (This is a demo)');
        }
    };
    const exportData = ()=>{
        // Export save data logic would go here
        alert('Save data exported! (This is a demo)');
    };
    const importData = ()=>{
        // Import save data logic would go here
        alert('Import save data feature (This is a demo)');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen w-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center p-4 text-white text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-4 h-2 bg-white rounded-sm"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Settings.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs",
                                children: "Sabotage OS"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Settings.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Settings.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs",
                                children: "100%"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Settings.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-6 h-3 border border-white rounded-sm bg-green-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Settings.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Settings.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Settings.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-black/30 backdrop-blur-lg rounded-3xl p-4 border border-white/20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 bg-gray-600 rounded-2xl flex items-center justify-center text-white text-2xl",
                                        children: "⚙️"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Settings.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-xl font-bold text-white",
                                                children: "SETTINGS"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Settings.tsx",
                                                lineNumber: 63,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white/60 text-sm",
                                                children: "System Configuration"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Settings.tsx",
                                                lineNumber: 64,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Settings.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Settings.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: onBack,
                                variant: "ghost",
                                className: "text-white hover:bg-white/20 rounded-2xl",
                                children: "🏠"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Settings.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Settings.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Settings.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Settings.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 px-4 pb-4 overflow-y-auto space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-black/30 backdrop-blur-lg rounded-2xl p-4 border border-white/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-white font-semibold mb-3 flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mr-2",
                                        children: "🔊"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Settings.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this),
                                    "Audio"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Settings.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-white text-sm font-medium",
                                                        children: "Sound Effects"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Settings.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-gray-400 text-xs",
                                                        children: "Attack and system sounds"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Settings.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Settings.tsx",
                                                lineNumber: 89,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                                checked: soundEnabled,
                                                onCheckedChange: setSoundEnabled
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Settings.tsx",
                                                lineNumber: 93,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Settings.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-white text-sm font-medium",
                                                        children: "Background Music"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Settings.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-gray-400 text-xs",
                                                        children: "Ambient battle music"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Settings.tsx",
                                                        lineNumber: 102,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Settings.tsx",
                                                lineNumber: 100,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                                checked: musicEnabled,
                                                onCheckedChange: setMusicEnabled
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Settings.tsx",
                                                lineNumber: 104,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Settings.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Settings.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Settings.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-black/30 backdrop-blur-lg rounded-2xl p-4 border border-white/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-white font-semibold mb-3 flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mr-2",
                                        children: "🎮"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Settings.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this),
                                    "Gameplay"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Settings.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-white text-sm font-medium mb-2",
                                                children: "Difficulty Level"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Settings.tsx",
                                                lineNumber: 121,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-2",
                                                children: difficultyLevels.map((level, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        onClick: ()=>setDifficultyLevel(index),
                                                        className: `${difficultyLevel === index ? 'bg-blue-600 hover:bg-blue-700' : 'bg-white/20 hover:bg-white/30'} text-white text-xs py-2 rounded-xl`,
                                                        children: level
                                                    }, level, false, {
                                                        fileName: "[project]/src/components/Settings.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Settings.tsx",
                                                lineNumber: 122,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Settings.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-white text-sm font-medium",
                                                        children: "Auto-Save"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Settings.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-gray-400 text-xs",
                                                        children: "Save progress automatically"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Settings.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Settings.tsx",
                                                lineNumber: 140,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                                checked: autoSaveEnabled,
                                                onCheckedChange: setAutoSaveEnabled
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Settings.tsx",
                                                lineNumber: 144,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Settings.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-white text-sm font-medium",
                                                        children: "Notifications"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Settings.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-gray-400 text-xs",
                                                        children: "Show battle alerts"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Settings.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Settings.tsx",
                                                lineNumber: 151,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                                checked: notificationsEnabled,
                                                onCheckedChange: setNotificationsEnabled
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Settings.tsx",
                                                lineNumber: 155,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Settings.tsx",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Settings.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Settings.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-black/30 backdrop-blur-lg rounded-2xl p-4 border border-white/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-white font-semibold mb-3 flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mr-2",
                                        children: "💾"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Settings.tsx",
                                        lineNumber: 166,
                                        columnNumber: 13
                                    }, this),
                                    "Data"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Settings.tsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: exportData,
                                        className: "w-full bg-blue-600 hover:bg-blue-700 text-white py-2 text-sm rounded-xl",
                                        children: "Export Save Data"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Settings.tsx",
                                        lineNumber: 171,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: importData,
                                        className: "w-full bg-green-600 hover:bg-green-700 text-white py-2 text-sm rounded-xl",
                                        children: "Import Save Data"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Settings.tsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: resetProgress,
                                        className: "w-full bg-red-600 hover:bg-red-700 text-white py-2 text-sm rounded-xl",
                                        children: "Reset Progress"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Settings.tsx",
                                        lineNumber: 185,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Settings.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Settings.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-black/30 backdrop-blur-lg rounded-2xl p-4 border border-white/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-white font-semibold mb-3 flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mr-2",
                                        children: "ℹ️"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Settings.tsx",
                                        lineNumber: 197,
                                        columnNumber: 13
                                    }, this),
                                    "About"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Settings.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300",
                                                children: "Version"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Settings.tsx",
                                                lineNumber: 203,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white",
                                                children: "1.0.0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Settings.tsx",
                                                lineNumber: 204,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Settings.tsx",
                                        lineNumber: 202,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300",
                                                children: "Developer"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Settings.tsx",
                                                lineNumber: 208,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white",
                                                children: "Sabotage Studios"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Settings.tsx",
                                                lineNumber: 209,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Settings.tsx",
                                        lineNumber: 207,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300",
                                                children: "Engine"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Settings.tsx",
                                                lineNumber: 213,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white",
                                                children: "React + Next.js"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Settings.tsx",
                                                lineNumber: 214,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Settings.tsx",
                                        lineNumber: 212,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300",
                                                children: "Build Date"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Settings.tsx",
                                                lineNumber: 218,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white",
                                                children: new Date().toLocaleDateString()
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Settings.tsx",
                                                lineNumber: 219,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Settings.tsx",
                                        lineNumber: 217,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Settings.tsx",
                                lineNumber: 201,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Settings.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-black/30 backdrop-blur-lg rounded-2xl p-4 border border-white/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-white font-semibold mb-3 flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mr-2",
                                        children: "🎯"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Settings.tsx",
                                        lineNumber: 227,
                                        columnNumber: 13
                                    }, this),
                                    "Controls"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Settings.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white/10 rounded-xl p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-white font-medium mb-2",
                                                children: "Terminal Commands"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Settings.tsx",
                                                lineNumber: 233,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-gray-300 space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: "• virus enemy - Deploy virus"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Settings.tsx",
                                                        lineNumber: 235,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: "• ddos enemy - DDoS attack"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Settings.tsx",
                                                        lineNumber: 236,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: "• repair - Fix system"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Settings.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: "• firewall - Enable protection"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Settings.tsx",
                                                        lineNumber: 238,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Settings.tsx",
                                                lineNumber: 234,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Settings.tsx",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white/10 rounded-xl p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-white font-medium mb-2",
                                                children: "Key Apps"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Settings.tsx",
                                                lineNumber: 243,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-gray-300 space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: "• Antivirus: Virus protection"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Settings.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: "• Battery: Power management"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Settings.tsx",
                                                        lineNumber: 246,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: "• Security: Attack tools"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Settings.tsx",
                                                        lineNumber: 247,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: "• Status: System monitor"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Settings.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Settings.tsx",
                                                lineNumber: 244,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Settings.tsx",
                                        lineNumber: 242,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Settings.tsx",
                                lineNumber: 231,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Settings.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Settings.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Settings.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(Settings, "7UcSBDzuQk0t+bzv/7EG2LCo/QA=");
_c = Settings;
var _c;
__turbopack_context__.k.register(_c, "Settings");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HomeMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HomeMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GameInterface$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/GameInterface.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Shop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Shop.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Settings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Settings.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Page() {
    _s();
    const [currentScreen, setCurrentScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('home');
    const [gigabytes, setGigabytes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(100);
    const [showTutorial, setShowTutorial] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const handleWin = (earnedGB)=>{
        setGigabytes((prev)=>prev + earnedGB);
        setCurrentScreen('home');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen w-screen overflow-hidden bg-black",
        children: [
            currentScreen === 'home' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HomeMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HomeMenu"], {
                onStartGame: ()=>setCurrentScreen('game'),
                onOpenShop: ()=>setCurrentScreen('shop'),
                onOpenSettings: ()=>setCurrentScreen('settings'),
                gigabytes: gigabytes,
                showTutorial: showTutorial,
                onSkipTutorial: ()=>setShowTutorial(false)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this),
            currentScreen === 'game' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GameInterface$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GameInterface"], {
                onBack: ()=>setCurrentScreen('home'),
                onWin: handleWin,
                showTutorial: showTutorial,
                onSkipTutorial: ()=>setShowTutorial(false)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this),
            currentScreen === 'shop' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Shop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shop"], {
                onBack: ()=>setCurrentScreen('home'),
                gigabytes: gigabytes,
                setGigabytes: setGigabytes
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this),
            currentScreen === 'settings' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Settings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Settings"], {
                onBack: ()=>setCurrentScreen('home')
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(Page, "e6T/bOM+e5tZvOgcTgFXUD2kLxs=");
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_b4e84649._.js.map