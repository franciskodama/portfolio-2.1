(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/dev/portfolio-2.1/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
var _type_of = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === (typeof type === "undefined" ? "undefined" : _type_of._(type))) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === (typeof type === "undefined" ? "undefined" : _type_of._(type)) && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === (typeof node === "undefined" ? "undefined" : _type_of._(node)) && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === (typeof object === "undefined" ? "undefined" : _type_of._(object)) && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function createTask() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function react_stack_bottom_frame(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/dev/portfolio-2.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/dev/portfolio-2.1/node_modules/next/dist/build/polyfills/object-assign.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var assign = Object.assign.bind(Object);
module.exports = assign;
module.exports.default = module.exports; //# sourceMappingURL=object-assign.js.map
}),
"[project]/dev/portfolio-2.1/node_modules/@swc/helpers/esm/_object_without_properties_loose.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_object_without_properties_loose
]);
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
;
}),
"[project]/dev/portfolio-2.1/node_modules/@swc/helpers/esm/_object_without_properties.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_object_without_properties
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties_loose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/esm/_object_without_properties_loose.js [app-client] (ecmascript)");
;
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties_loose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
;
}),
"[project]/dev/portfolio-2.1/node_modules/bezier-easing/src/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */ // These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;
var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
var float32ArraySupported = typeof Float32Array === 'function';
function A(aA1, aA2) {
    return 1.0 - 3.0 * aA2 + 3.0 * aA1;
}
function B(aA1, aA2) {
    return 3.0 * aA2 - 6.0 * aA1;
}
function C(aA1) {
    return 3.0 * aA1;
}
// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier(aT, aA1, aA2) {
    return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
}
// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope(aT, aA1, aA2) {
    return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
}
function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX, currentT, i = 0;
    do {
        currentT = aA + (aB - aA) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - aX;
        if (currentX > 0.0) {
            aB = currentT;
        } else {
            aA = currentT;
        }
    }while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS)
    return currentT;
}
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for(var i = 0; i < NEWTON_ITERATIONS; ++i){
        var currentSlope = getSlope(aGuessT, mX1, mX2);
        if (currentSlope === 0.0) {
            return aGuessT;
        }
        var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
        aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
}
function LinearEasing(x) {
    return x;
}
module.exports = function bezier(mX1, mY1, mX2, mY2) {
    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
        throw new Error('bezier x values must be in [0, 1] range');
    }
    if (mX1 === mY1 && mX2 === mY2) {
        return LinearEasing;
    }
    // Precompute samples table
    var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
    for(var i = 0; i < kSplineTableSize; ++i){
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    }
    function getTForX(aX) {
        var intervalStart = 0.0;
        var currentSample = 1;
        var lastSample = kSplineTableSize - 1;
        for(; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample){
            intervalStart += kSampleStepSize;
        }
        --currentSample;
        // Interpolate to provide an initial guess for t
        var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        var guessForT = intervalStart + dist * kSampleStepSize;
        var initialSlope = getSlope(guessForT, mX1, mX2);
        if (initialSlope >= NEWTON_MIN_SLOPE) {
            return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
        } else if (initialSlope === 0.0) {
            return guessForT;
        } else {
            return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
        }
    }
    return function BezierEasing(x) {
        // Because JavaScript number are imprecise, we should guarantee the extremes are right.
        if (x === 0) {
            return 0;
        }
        if (x === 1) {
            return 1;
        }
        return calcBezier(getTForX(x), mY1, mY2);
    };
};
}),
"[project]/dev/portfolio-2.1/node_modules/parallax-controller/dist/parallax-controller.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EasingPreset",
    ()=>EasingPreset,
    "Element",
    ()=>Element,
    "Limits",
    ()=>Limits,
    "ParallaxController",
    ()=>ParallaxController,
    "Rect",
    ()=>Rect,
    "RotationUnits",
    ()=>RotationUnits,
    "ScaleUnits",
    ()=>ScaleUnits,
    "Scroll",
    ()=>Scroll,
    "ScrollAxis",
    ()=>ScrollAxis,
    "Units",
    ()=>Units,
    "ValidCSSEffects",
    ()=>ValidCSSEffects,
    "View",
    ()=>View,
    "createId",
    ()=>createId,
    "getProgressAmount",
    ()=>getProgressAmount,
    "isElementInView",
    ()=>isElementInView,
    "parseElementTransitionEffects",
    ()=>parseElementTransitionEffects,
    "parseValueAndUnit",
    ()=>parseValueAndUnit,
    "resetStyles",
    ()=>resetStyles,
    "scaleBetween",
    ()=>scaleBetween,
    "scaleEffectByProgress",
    ()=>scaleEffectByProgress,
    "setElementStyles",
    ()=>setElementStyles,
    "testForPassiveScroll",
    ()=>testForPassiveScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$bezier$2d$easing$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/bezier-easing/src/index.js [app-client] (ecmascript)");
;
var Limits = function Limits(properties) {
    this.startX = properties.startX;
    this.startY = properties.startY;
    this.endX = properties.endX;
    this.endY = properties.endY; // Used to calculate the progress of the element
    this.totalX = this.endX - this.startX;
    this.totalY = this.endY - this.startY; // Used to scale translate effects
    this.startMultiplierX = properties.startMultiplierX || 1;
    this.endMultiplierX = properties.endMultiplierX || 1;
    this.startMultiplierY = properties.startMultiplierY || 1;
    this.endMultiplierY = properties.endMultiplierY || 1;
};
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
var ValidCSSEffects;
(function(ValidCSSEffects) {
    ValidCSSEffects["speed"] = "speed";
    ValidCSSEffects["translateX"] = "translateX";
    ValidCSSEffects["translateY"] = "translateY";
    ValidCSSEffects["rotate"] = "rotate";
    ValidCSSEffects["rotateX"] = "rotateX";
    ValidCSSEffects["rotateY"] = "rotateY";
    ValidCSSEffects["rotateZ"] = "rotateZ";
    ValidCSSEffects["scale"] = "scale";
    ValidCSSEffects["scaleX"] = "scaleX";
    ValidCSSEffects["scaleY"] = "scaleY";
    ValidCSSEffects["scaleZ"] = "scaleZ";
    ValidCSSEffects["opacity"] = "opacity";
})(ValidCSSEffects || (ValidCSSEffects = {}));
var Units;
(function(Units) {
    Units["px"] = "px";
    Units["%"] = "%";
    Units["vh"] = "vh";
    Units["vw"] = "vw";
})(Units || (Units = {}));
var RotationUnits;
(function(RotationUnits) {
    RotationUnits["deg"] = "deg";
    RotationUnits["turn"] = "turn";
    RotationUnits["rad"] = "rad";
})(RotationUnits || (RotationUnits = {}));
var ScaleUnits;
(function(ScaleUnits) {
    ScaleUnits[""] = "";
})(ScaleUnits || (ScaleUnits = {}));
var ScrollAxis;
(function(ScrollAxis) {
    ScrollAxis["vertical"] = "vertical";
    ScrollAxis["horizontal"] = "horizontal";
})(ScrollAxis || (ScrollAxis = {}));
var EasingPreset;
(function(EasingPreset) {
    EasingPreset["ease"] = "ease";
    EasingPreset["easeIn"] = "easeIn";
    EasingPreset["easeOut"] = "easeOut";
    EasingPreset["easeInOut"] = "easeInOut";
    EasingPreset["easeInQuad"] = "easeInQuad";
    EasingPreset["easeInCubic"] = "easeInCubic";
    EasingPreset["easeInQuart"] = "easeInQuart";
    EasingPreset["easeInQuint"] = "easeInQuint";
    EasingPreset["easeInSine"] = "easeInSine";
    EasingPreset["easeInExpo"] = "easeInExpo";
    EasingPreset["easeInCirc"] = "easeInCirc";
    EasingPreset["easeOutQuad"] = "easeOutQuad";
    EasingPreset["easeOutCubic"] = "easeOutCubic";
    EasingPreset["easeOutQuart"] = "easeOutQuart";
    EasingPreset["easeOutQuint"] = "easeOutQuint";
    EasingPreset["easeOutSine"] = "easeOutSine";
    EasingPreset["easeOutExpo"] = "easeOutExpo";
    EasingPreset["easeOutCirc"] = "easeOutCirc";
    EasingPreset["easeInOutQuad"] = "easeInOutQuad";
    EasingPreset["easeInOutCubic"] = "easeInOutCubic";
    EasingPreset["easeInOutQuart"] = "easeInOutQuart";
    EasingPreset["easeInOutQuint"] = "easeInOutQuint";
    EasingPreset["easeInOutSine"] = "easeInOutSine";
    EasingPreset["easeInOutExpo"] = "easeInOutExpo";
    EasingPreset["easeInOutCirc"] = "easeInOutCirc";
    EasingPreset["easeInBack"] = "easeInBack";
    EasingPreset["easeOutBack"] = "easeOutBack";
    EasingPreset["easeInOutBack"] = "easeInOutBack";
})(EasingPreset || (EasingPreset = {}));
/**
 * Creates a unique id to distinguish parallax elements.
 */ var id = 0;
function createId() {
    ++id;
    return id;
}
var Rect = /*#__PURE__*/ function() {
    function Rect(options) {
        var rect = options.el.getBoundingClientRect(); // rect is based on viewport -- must adjust for relative scroll container
        if (options.view.scrollContainer) {
            var scrollRect = options.view.scrollContainer.getBoundingClientRect();
            rect = _extends({}, rect, {
                top: rect.top - scrollRect.top,
                right: rect.right - scrollRect.left,
                bottom: rect.bottom - scrollRect.top,
                left: rect.left - scrollRect.left
            });
        }
        this.height = options.el.offsetHeight;
        this.width = options.el.offsetWidth;
        this.left = rect.left;
        this.right = rect.right;
        this.top = rect.top;
        this.bottom = rect.bottom;
        if (options.rootMargin) {
            this._setRectWithRootMargin(options.rootMargin);
        }
    }
    /**
   * Apply root margin to all properties
   */ var _proto = Rect.prototype;
    _proto._setRectWithRootMargin = function _setRectWithRootMargin(rootMargin) {
        var totalRootY = rootMargin.top + rootMargin.bottom;
        var totalRootX = rootMargin.left + rootMargin.right;
        this.top -= rootMargin.top;
        this.right += rootMargin.right;
        this.bottom += rootMargin.bottom;
        this.left -= rootMargin.left;
        this.height += totalRootY;
        this.width += totalRootX;
    };
    return Rect;
}();
var VALID_UNITS = [
    ScaleUnits[''],
    Units.px,
    Units['%'],
    Units['vh'],
    Units['vw'],
    RotationUnits.deg,
    RotationUnits.turn,
    RotationUnits.rad
];
/**
 * Determines the unit of a string and parses the value
 */ function parseValueAndUnit(str, defaultUnit) {
    if (defaultUnit === void 0) {
        defaultUnit = Units['%'];
    }
    var out = {
        value: 0,
        unit: defaultUnit
    };
    if (typeof str === 'undefined') return out;
    var isValid = typeof str === 'number' || typeof str === 'string';
    if (!isValid) {
        throw new Error('Invalid value provided. Must provide a value as a string or number');
    }
    str = String(str);
    out.value = parseFloat(str); // @ts-ignore
    out.unit = str.match(/[\d.\-+]*\s*(.*)/)[1] || defaultUnit; // @ts-expect-error
    var isValidUnit = VALID_UNITS.includes(out.unit);
    if (!isValidUnit) {
        throw new Error('Invalid unit provided.');
    }
    return out;
}
var easingPresets = {
    ease: [
        0.25,
        0.1,
        0.25,
        1.0
    ],
    easeIn: [
        0.42,
        0.0,
        1.0,
        1.0
    ],
    easeOut: [
        0.0,
        0.0,
        0.58,
        1.0
    ],
    easeInOut: [
        0.42,
        0.0,
        0.58,
        1.0
    ],
    /* Ease IN curves */ easeInQuad: [
        0.55,
        0.085,
        0.68,
        0.53
    ],
    easeInCubic: [
        0.55,
        0.055,
        0.675,
        0.19
    ],
    easeInQuart: [
        0.895,
        0.03,
        0.685,
        0.22
    ],
    easeInQuint: [
        0.755,
        0.05,
        0.855,
        0.06
    ],
    easeInSine: [
        0.47,
        0.0,
        0.745,
        0.715
    ],
    easeInExpo: [
        0.95,
        0.05,
        0.795,
        0.035
    ],
    easeInCirc: [
        0.6,
        0.04,
        0.98,
        0.335
    ],
    /* Ease Out Curves */ easeOutQuad: [
        0.25,
        0.46,
        0.45,
        0.94
    ],
    easeOutCubic: [
        0.215,
        0.61,
        0.355,
        1.0
    ],
    easeOutQuart: [
        0.165,
        0.84,
        0.44,
        1.0
    ],
    easeOutQuint: [
        0.23,
        1.0,
        0.32,
        1.0
    ],
    easeOutSine: [
        0.39,
        0.575,
        0.565,
        1.0
    ],
    easeOutExpo: [
        0.19,
        1.0,
        0.22,
        1.0
    ],
    easeOutCirc: [
        0.075,
        0.82,
        0.165,
        1.0
    ],
    /* Ease IN Out Curves */ easeInOutQuad: [
        0.455,
        0.03,
        0.515,
        0.955
    ],
    easeInOutCubic: [
        0.645,
        0.045,
        0.355,
        1.0
    ],
    easeInOutQuart: [
        0.77,
        0.0,
        0.175,
        1.0
    ],
    easeInOutQuint: [
        0.86,
        0.0,
        0.07,
        1.0
    ],
    easeInOutSine: [
        0.445,
        0.05,
        0.55,
        0.95
    ],
    easeInOutExpo: [
        1.0,
        0.0,
        0.0,
        1.0
    ],
    easeInOutCirc: [
        0.785,
        0.135,
        0.15,
        0.86
    ],
    /* Ease Bounce Curves */ easeInBack: [
        0.6,
        -0.28,
        0.735,
        0.045
    ],
    easeOutBack: [
        0.175,
        0.885,
        0.32,
        1.275
    ],
    easeInOutBack: [
        0.68,
        -0.55,
        0.265,
        1.55
    ]
};
function createEasingFunction(easing) {
    if (Array.isArray(easing)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$bezier$2d$easing$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(easing[0], easing[1], easing[2], easing[3]);
    }
    if (typeof easing === 'string' && typeof easingPresets[easing] !== 'undefined') {
        var params = easingPresets[easing];
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$bezier$2d$easing$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(params[0], params[1], params[2], params[3]);
    }
    return;
}
var PARALLAX_EFFECTS = /*#__PURE__*/ Object.values(ValidCSSEffects);
var MAP_EFFECT_TO_DEFAULT_UNIT = {
    speed: 'px',
    translateX: '%',
    translateY: '%',
    rotate: 'deg',
    rotateX: 'deg',
    rotateY: 'deg',
    rotateZ: 'deg',
    scale: '',
    scaleX: '',
    scaleY: '',
    scaleZ: '',
    opacity: ''
};
/**
 * Takes a parallax element effects and parses the properties to get the start and end values and units.
 */ function parseElementTransitionEffects(props, scrollAxis) {
    var parsedEffects = {};
    PARALLAX_EFFECTS.forEach(function(key) {
        var defaultValue = MAP_EFFECT_TO_DEFAULT_UNIT[key]; // If the provided type is a number, this must be the speed prop
        // in which case we need to construct the proper translate config
        if (typeof (props == null ? void 0 : props[key]) === 'number') {
            var value = props == null ? void 0 : props[key];
            var startSpeed = (value || 0) * 10 + "px";
            var endSpeed = (value || 0) * -10 + "px";
            var startParsed = parseValueAndUnit(startSpeed);
            var endParsed = parseValueAndUnit(endSpeed);
            var speedConfig = {
                start: startParsed.value,
                end: endParsed.value,
                unit: startParsed.unit
            }; // Manually set translate y value
            if (scrollAxis === ScrollAxis.vertical) {
                parsedEffects.translateY = speedConfig;
            } // Manually set translate y value
            if (scrollAxis === ScrollAxis.horizontal) {
                parsedEffects.translateX = speedConfig;
            }
        } // The rest are standard effect being parsed
        if (Array.isArray(props == null ? void 0 : props[key])) {
            var _value = props == null ? void 0 : props[key];
            if (typeof _value[0] !== 'undefined' && typeof _value[1] !== 'undefined') {
                var _startParsed = parseValueAndUnit(_value == null ? void 0 : _value[0], defaultValue);
                var _endParsed = parseValueAndUnit(_value == null ? void 0 : _value[1], defaultValue);
                var easing = createEasingFunction(_value == null ? void 0 : _value[2]);
                parsedEffects[key] = {
                    start: _startParsed.value,
                    end: _endParsed.value,
                    unit: _startParsed.unit,
                    easing: easing
                };
                if (_startParsed.unit !== _endParsed.unit) {
                    throw new Error('Must provide matching units for the min and max offset values of each axis.');
                }
            }
        }
    });
    return parsedEffects;
}
/**
 * Returns the percent (0 - 100) moved based on position in the viewport
 */ function getProgressAmount(/*
 * The start value from cache
 */ start, /*
 * total dist the element has to move to be 100% complete (view width/height + element width/height)
 */ totalDist, /*
 * Current scroll value
 */ currentScroll, /*
 * an optional easing function to apply
 */ easing) {
    // adjust cached value
    var startAdjustedScroll = currentScroll - start; // Amount the element has moved based on current and total distance to move
    var amount = startAdjustedScroll / totalDist; // Apply bezier easing if provided
    if (easing) {
        amount = easing(amount);
    }
    return amount;
}
/**
 * Takes two values (start, end) and returns whether the current scroll is within range
 * @param {number} start - start of scroll (x/y)
 * @param {number} end - end of scroll (x/y)
 * @param {number} scroll - current scroll (x/y)
 * @return {boolean} isInView
 */ function isElementInView(start, end, scroll) {
    var isInView = scroll >= start && scroll <= end;
    return isInView;
}
// Scale between AKA normalize
function scaleBetween(value, newMin, newMax, oldMin, oldMax) {
    return (newMax - newMin) * (value - oldMin) / (oldMax - oldMin) + newMin;
}
/**
 * Scales a start and end value of an effect based on percent moved and easing function
 */ function scaleEffectByProgress(effect, progress) {
    var value = scaleBetween(typeof effect.easing === 'function' ? effect.easing(progress) : progress, (effect == null ? void 0 : effect.start) || 0, (effect == null ? void 0 : effect.end) || 0, 0, 1);
    return {
        value: value,
        unit: effect == null ? void 0 : effect.unit
    };
}
var TRANSFORM_EFFECTS = /*#__PURE__*/ Object.values(ValidCSSEffects).filter(function(v) {
    return v !== 'opacity';
});
function setWillChangeStyles(el, effects) {
    var keys = Object.keys(effects);
    var hasOpacity = keys.includes('opacity');
    var willChange = "transform" + (hasOpacity ? ',opacity' : '');
    el.style.willChange = willChange;
}
function setElementStyles(effects, progress, el) {
    if (!el) return;
    var transform = getTransformStyles(effects, progress);
    var opacity = getOpacityStyles(effects, progress);
    el.style.transform = transform;
    el.style.opacity = opacity;
}
function getOpacityStyles(effects, progress) {
    var scaledOpacity = effects['opacity'] && scaleEffectByProgress(effects['opacity'], progress);
    if (typeof scaledOpacity === 'undefined' || typeof scaledOpacity.value === 'undefined' || typeof scaledOpacity.unit === 'undefined') {
        return '';
    }
    var styleStr = "" + scaledOpacity.value;
    return styleStr;
}
function getTransformStyles(effects, progress) {
    var transform = TRANSFORM_EFFECTS.reduce(function(acc, key) {
        var scaledEffect = effects[key] && scaleEffectByProgress(effects[key], progress);
        if (typeof scaledEffect === 'undefined' || typeof scaledEffect.value === 'undefined' || typeof scaledEffect.unit === 'undefined') {
            return acc;
        }
        var styleStr = key + "(" + scaledEffect.value + scaledEffect.unit + ")";
        return acc + styleStr;
    }, '');
    return transform;
}
/**
 * Takes a parallax element and removes parallax offset styles.
 * @param {object} element
 */ function resetStyles(element) {
    var el = element.el;
    if (!el) return;
    el.style.transform = '';
    el.style.opacity = '';
}
function createLimitsForRelativeElements(rect, view, scroll, shouldAlwaysCompleteAnimation) {
    var startY = rect.top - view.height;
    var startX = rect.left - view.width;
    var endY = rect.bottom;
    var endX = rect.right; // add scroll
    startX += scroll.x;
    endX += scroll.x;
    startY += scroll.y;
    endY += scroll.y;
    if (shouldAlwaysCompleteAnimation) {
        if (scroll.y + rect.top < view.height) {
            startY = 0;
        }
        if (scroll.x + rect.left < view.width) {
            startX = 0;
        }
        if (endY > view.scrollHeight - view.height) {
            endY = view.scrollHeight - view.height;
        }
        if (endX > view.scrollWidth - view.width) {
            endX = view.scrollWidth - view.width;
        }
    }
    var limits = new Limits({
        startX: startX,
        startY: startY,
        endX: endX,
        endY: endY
    });
    return limits;
}
function getTranslateScalar(startTranslatePx, endTranslatePx, totalDist) {
    var slow = endTranslatePx > startTranslatePx; // calculating necessary scale to increase translations
    var totalAbsOff = (Math.abs(startTranslatePx) + Math.abs(endTranslatePx)) * (slow ? -1 : 1);
    var totalDistTrue = totalDist + totalAbsOff; // Determine multiple to scale by, only values greater than 1
    var scale = Math.max(totalDist / totalDistTrue, 1);
    return scale;
}
/**
 * Return the start and end pixel values for an elements translations
 */ function getStartEndValueInPx(translate, elementSize) {
    var start = translate.start, end = translate.end, unit = translate.unit;
    if (unit === '%') {
        var scale = elementSize / 100;
        start = start * scale;
        end = end * scale;
    }
    if (unit === 'vw') {
        var startScale = start / 100;
        var endScale = end / 100;
        start = window.innerWidth * startScale;
        end = window.innerWidth * endScale;
    }
    if (unit === 'vh') {
        var _startScale = start / 100;
        var _endScale = end / 100;
        start = window.innerHeight * _startScale;
        end = window.innerHeight * _endScale;
    }
    return {
        start: start,
        end: end
    };
}
var DEFAULT_VALUE = {
    start: 0,
    end: 0,
    unit: ''
};
function createLimitsWithTranslationsForRelativeElements(rect, view, effects, scroll, scrollAxis, shouldAlwaysCompleteAnimation) {
    // get start and end accounting for percent effects
    var translateX = effects.translateX || DEFAULT_VALUE;
    var translateY = effects.translateY || DEFAULT_VALUE;
    var _getStartEndValueInPx = getStartEndValueInPx(translateX, rect.width), startTranslateXPx = _getStartEndValueInPx.start, endTranslateXPx = _getStartEndValueInPx.end;
    var _getStartEndValueInPx2 = getStartEndValueInPx(translateY, rect.height), startTranslateYPx = _getStartEndValueInPx2.start, endTranslateYPx = _getStartEndValueInPx2.end; // default starting values
    var startY = rect.top - view.height;
    var startX = rect.left - view.width;
    var endY = rect.bottom;
    var endX = rect.right;
    var startMultiplierY = 1;
    var endMultiplierY = 1;
    if (scrollAxis === ScrollAxis.vertical) {
        startMultiplierY = getTranslateScalar(startTranslateYPx, endTranslateYPx, view.height + rect.height);
        endMultiplierY = startMultiplierY;
    }
    var startMultiplierX = 1;
    var endMultiplierX = 1;
    if (scrollAxis === ScrollAxis.horizontal) {
        startMultiplierX = getTranslateScalar(startTranslateXPx, endTranslateXPx, view.width + rect.width);
        endMultiplierX = startMultiplierX;
    } // Apply the scale to initial values
    if (startTranslateYPx < 0) {
        startY = startY + startTranslateYPx * startMultiplierY;
    }
    if (endTranslateYPx > 0) {
        endY = endY + endTranslateYPx * endMultiplierY;
    }
    if (startTranslateXPx < 0) {
        startX = startX + startTranslateXPx * startMultiplierX;
    }
    if (endTranslateXPx > 0) {
        endX = endX + endTranslateXPx * endMultiplierX;
    } // add scroll
    startX += scroll.x;
    endX += scroll.x;
    startY += scroll.y;
    endY += scroll.y; // NOTE: please refactor and isolate this :(
    if (shouldAlwaysCompleteAnimation) {
        var topBeginsInView = scroll.y + rect.top < view.height;
        var leftBeginsInView = scroll.x + rect.left < view.width;
        var bottomEndsInView = scroll.y + rect.bottom > view.scrollHeight - view.height;
        var rightEndsInView = scroll.x + rect.right > view.scrollWidth - view.height;
        if (topBeginsInView && bottomEndsInView) {
            startMultiplierY = 1;
            endMultiplierY = 1;
            startY = 0;
            endY = view.scrollHeight - view.height;
        }
        if (leftBeginsInView && rightEndsInView) {
            startMultiplierX = 1;
            endMultiplierX = 1;
            startX = 0;
            endX = view.scrollWidth - view.width;
        }
        if (!topBeginsInView && bottomEndsInView) {
            startY = rect.top - view.height + scroll.y;
            endY = view.scrollHeight - view.height;
            var totalDist = endY - startY;
            startMultiplierY = getTranslateScalar(startTranslateYPx, endTranslateYPx, totalDist);
            endMultiplierY = 1;
            if (startTranslateYPx < 0) {
                startY = startY + startTranslateYPx * startMultiplierY;
            }
        }
        if (!leftBeginsInView && rightEndsInView) {
            startX = rect.left - view.width + scroll.x;
            endX = view.scrollWidth - view.width;
            var _totalDist = endX - startX;
            startMultiplierX = getTranslateScalar(startTranslateXPx, endTranslateXPx, _totalDist);
            endMultiplierX = 1;
            if (startTranslateXPx < 0) {
                startX = startX + startTranslateXPx * startMultiplierX;
            }
        }
        if (topBeginsInView && !bottomEndsInView) {
            startY = 0;
            endY = rect.bottom + scroll.y;
            var _totalDist2 = endY - startY;
            startMultiplierY = 1;
            endMultiplierY = getTranslateScalar(startTranslateYPx, endTranslateYPx, _totalDist2);
            if (endTranslateYPx > 0) {
                endY = endY + endTranslateYPx * endMultiplierY;
            }
        }
        if (leftBeginsInView && !rightEndsInView) {
            startX = 0;
            endX = rect.right + scroll.x;
            var _totalDist3 = endX - startX;
            startMultiplierX = 1;
            endMultiplierX = getTranslateScalar(startTranslateXPx, endTranslateXPx, _totalDist3);
            if (endTranslateXPx > 0) {
                endX = endX + endTranslateXPx * endMultiplierX;
            }
        }
    }
    var limits = new Limits({
        startX: startX,
        startY: startY,
        endX: endX,
        endY: endY,
        startMultiplierX: startMultiplierX,
        endMultiplierX: endMultiplierX,
        startMultiplierY: startMultiplierY,
        endMultiplierY: endMultiplierY
    });
    return limits;
}
function scaleTranslateEffectsForSlowerScroll(effects, limits) {
    var effectsCopy = _extends({}, effects);
    if (effectsCopy.translateX) {
        effectsCopy.translateX = _extends({}, effects.translateX, {
            start: effectsCopy.translateX.start * limits.startMultiplierX,
            end: effectsCopy.translateX.end * limits.endMultiplierX
        });
    }
    if (effectsCopy.translateY) {
        effectsCopy.translateY = _extends({}, effects.translateY, {
            start: effectsCopy.translateY.start * limits.startMultiplierY,
            end: effectsCopy.translateY.end * limits.endMultiplierY
        });
    }
    return effectsCopy;
}
function getShouldScaleTranslateEffects(props, effects, scrollAxis) {
    if (props.rootMargin || props.targetElement || props.shouldDisableScalingTranslations) {
        return false;
    }
    if (!!effects.translateX && scrollAxis === ScrollAxis.horizontal || !!effects.translateY && scrollAxis === ScrollAxis.vertical) {
        return true;
    }
    return false;
}
var clamp = function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
};
var Element = /*#__PURE__*/ function() {
    function Element(options) {
        this.el = options.el;
        this.props = options.props;
        this.scrollAxis = options.scrollAxis;
        this.disabledParallaxController = options.disabledParallaxController || false;
        this.id = createId();
        this.effects = parseElementTransitionEffects(this.props, this.scrollAxis);
        this.isInView = null;
        this.progress = 0;
        this._setElementEasing(options.props.easing);
        setWillChangeStyles(options.el, this.effects);
    }
    var _proto = Element.prototype;
    _proto.updateProps = function updateProps(nextProps) {
        this.props = _extends({}, this.props, nextProps);
        this.effects = parseElementTransitionEffects(nextProps, this.scrollAxis);
        this._setElementEasing(nextProps.easing);
        return this;
    };
    _proto.setCachedAttributes = function setCachedAttributes(view, scroll) {
        // NOTE: Must reset styles before getting the rect, as it might impact the natural position
        resetStyles(this);
        this.rect = new Rect({
            el: this.props.targetElement || this.el,
            rootMargin: this.props.rootMargin,
            view: view
        });
        var shouldScaleTranslateEffects = getShouldScaleTranslateEffects(this.props, this.effects, this.scrollAxis);
        if (typeof this.props.startScroll === 'number' && typeof this.props.endScroll === 'number') {
            this.limits = new Limits({
                startX: this.props.startScroll,
                startY: this.props.startScroll,
                endX: this.props.endScroll,
                endY: this.props.endScroll
            }); // Undo the reset -- place it back at current position with styles
            this._setElementStyles();
            return this;
        }
        if (shouldScaleTranslateEffects) {
            this.limits = createLimitsWithTranslationsForRelativeElements(this.rect, view, this.effects, scroll, this.scrollAxis, this.props.shouldAlwaysCompleteAnimation);
            this.scaledEffects = scaleTranslateEffectsForSlowerScroll(this.effects, this.limits);
        } else {
            this.limits = createLimitsForRelativeElements(this.rect, view, scroll, this.props.shouldAlwaysCompleteAnimation);
        } // Undo the reset -- place it back at current position with styles
        this._setElementStyles();
        return this;
    };
    _proto._updateElementIsInView = function _updateElementIsInView(nextIsInView) {
        // NOTE: Check if this is the first change to make sure onExit isn't called
        var isFirstChange = this.isInView === null;
        if (nextIsInView !== this.isInView) {
            if (nextIsInView) {
                this.props.onEnter && this.props.onEnter(this);
            } else if (!isFirstChange) {
                this._setFinalProgress();
                this._setElementStyles();
                this.props.onExit && this.props.onExit(this);
            }
        }
        this.isInView = nextIsInView;
    };
    _proto._setFinalProgress = function _setFinalProgress() {
        var finalProgress = clamp(Math.round(this.progress), 0, 1);
        this._updateElementProgress(finalProgress);
    };
    _proto._setElementStyles = function _setElementStyles() {
        if (this.props.disabled || this.disabledParallaxController) return;
        var effects = this.scaledEffects || this.effects;
        setElementStyles(effects, this.progress, this.el);
    };
    _proto._updateElementProgress = function _updateElementProgress(nextProgress) {
        this.progress = nextProgress;
        this.props.onProgressChange && this.props.onProgressChange(this.progress);
        this.props.onChange && this.props.onChange(this);
    };
    _proto._setElementEasing = function _setElementEasing(easing) {
        this.easing = createEasingFunction(easing);
    };
    _proto.updateElementOptions = function updateElementOptions(options) {
        this.scrollAxis = options.scrollAxis;
        this.disabledParallaxController = options.disabledParallaxController || false;
    };
    _proto.updatePosition = function updatePosition(scroll) {
        if (!this.limits) return this;
        var isVertical = this.scrollAxis === ScrollAxis.vertical;
        var isFirstChange = this.isInView === null; // based on scroll axis
        var start = isVertical ? this.limits.startY : this.limits.startX;
        var end = isVertical ? this.limits.endY : this.limits.endX;
        var total = isVertical ? this.limits.totalY : this.limits.totalX;
        var s = isVertical ? scroll.y : scroll.x; // check if in view
        var nextIsInView = isElementInView(start, end, s);
        this._updateElementIsInView(nextIsInView); // set the progress if in view or this is the first change
        if (nextIsInView) {
            var nextProgress = getProgressAmount(start, total, s, this.easing);
            this._updateElementProgress(nextProgress);
            this._setElementStyles();
        } else if (isFirstChange) {
            // NOTE: this._updateElementProgress -- dont use this because it will trigger onChange
            this.progress = clamp(Math.round(getProgressAmount(start, total, s, this.easing)), 0, 1);
            this._setElementStyles();
        }
        return this;
    };
    return Element;
}();
var View = /*#__PURE__*/ function() {
    function View(config) {
        this.scrollContainer = config.scrollContainer;
        this.width = config.width;
        this.height = config.height;
        this.scrollHeight = config.scrollHeight;
        this.scrollWidth = config.scrollWidth;
    }
    var _proto = View.prototype;
    _proto.hasChanged = function hasChanged(params) {
        if (params.width !== this.width || params.height !== this.height || params.scrollWidth !== this.scrollWidth || params.scrollHeight !== this.scrollHeight) {
            return true;
        }
        return false;
    };
    _proto.setSize = function setSize(params) {
        this.width = params.width;
        this.height = params.height;
        this.scrollHeight = params.scrollHeight;
        this.scrollWidth = params.scrollWidth;
        return this;
    };
    return View;
}();
var Scroll = /*#__PURE__*/ function() {
    function Scroll(x, y) {
        this.x = x;
        this.y = y;
        this.dx = 0;
        this.dy = 0;
    }
    var _proto = Scroll.prototype;
    _proto.setScroll = function setScroll(x, y) {
        this.dx = x - this.x;
        this.dy = y - this.y;
        this.x = x;
        this.y = y;
        return this;
    };
    return Scroll;
}();
function testForPassiveScroll() {
    var supportsPassiveOption = false;
    try {
        var opts = Object.defineProperty({}, 'passive', {
            get: function get() {
                supportsPassiveOption = true;
                return true;
            }
        }); // @ts-expect-error
        window.addEventListener('test', null, opts); // @ts-expect-error
        window.removeEventListener('test', null, opts);
    } catch (e) {}
    return supportsPassiveOption;
}
/**
 * -------------------------------------------------------
 * Parallax Controller
 * -------------------------------------------------------
 *
 * The global controller for setting up and managing a scroll view of elements.
 *
 */ var ParallaxController = /*#__PURE__*/ function() {
    function ParallaxController(_ref) {
        var _ref$scrollAxis = _ref.scrollAxis, scrollAxis = _ref$scrollAxis === void 0 ? ScrollAxis.vertical : _ref$scrollAxis, scrollContainer = _ref.scrollContainer, _ref$disabled = _ref.disabled, disabled = _ref$disabled === void 0 ? false : _ref$disabled;
        this.disabled = disabled;
        this.scrollAxis = scrollAxis; // All parallax elements to be updated
        this.elements = [];
        this._hasScrollContainer = !!scrollContainer;
        this.viewEl = scrollContainer != null ? scrollContainer : window; // Scroll and View
        var _this$_getScrollPosit = this._getScrollPosition(), x = _this$_getScrollPosit[0], y = _this$_getScrollPosit[1];
        this.scroll = new Scroll(x, y);
        this.view = new View({
            width: 0,
            height: 0,
            scrollWidth: 0,
            scrollHeight: 0,
            scrollContainer: this._hasScrollContainer ? scrollContainer : undefined
        }); // Ticking
        this._ticking = false; // Passive support
        this._supportsPassive = testForPassiveScroll(); // Bind methods to class
        this._bindAllMethods(); // If this is initialized disabled, don't do anything below.
        if (this.disabled) return;
        this._addListeners(this.viewEl);
        this._addResizeObserver();
        this._setViewSize();
    }
    /**
   * Static method to instantiate the ParallaxController.
   * @returns {Class} ParallaxController
   */ ParallaxController.init = function init(options) {
        var hasWindow = typeof window !== 'undefined';
        if (!hasWindow) {
            throw new Error('Looks like ParallaxController.init() was called on the server. This method must be called on the client.');
        }
        return new ParallaxController(options);
    };
    var _proto = ParallaxController.prototype;
    _proto._bindAllMethods = function _bindAllMethods() {
        var _this = this;
        [
            '_addListeners',
            '_removeListeners',
            '_getScrollPosition',
            '_handleScroll',
            '_handleUpdateCache',
            '_updateAllElements',
            '_updateElementPosition',
            '_setViewSize',
            '_addResizeObserver',
            '_checkIfViewHasChanged',
            '_getViewParams',
            'getElements',
            'createElement',
            'removeElementById',
            'resetElementStyles',
            'updateElementPropsById',
            'update',
            'updateScrollContainer',
            'destroy'
        ].forEach(function(method) {
            // @ts-expect-error
            _this[method] = _this[method].bind(_this);
        });
    };
    _proto._addListeners = function _addListeners(el) {
        el.addEventListener('scroll', this._handleScroll, this._supportsPassive ? {
            passive: true
        } : false);
        window.addEventListener('resize', this._handleUpdateCache, false);
        window.addEventListener('blur', this._handleUpdateCache, false);
        window.addEventListener('focus', this._handleUpdateCache, false);
        window.addEventListener('load', this._handleUpdateCache, false);
    };
    _proto._removeListeners = function _removeListeners(el) {
        var _this$_resizeObserver;
        el.removeEventListener('scroll', this._handleScroll, false);
        window.removeEventListener('resize', this._handleUpdateCache, false);
        window.removeEventListener('blur', this._handleUpdateCache, false);
        window.removeEventListener('focus', this._handleUpdateCache, false);
        window.removeEventListener('load', this._handleUpdateCache, false);
        (_this$_resizeObserver = this._resizeObserver) == null ? void 0 : _this$_resizeObserver.disconnect();
    };
    _proto._addResizeObserver = function _addResizeObserver() {
        var _this2 = this;
        try {
            var observedEl = this._hasScrollContainer ? this.viewEl : document.documentElement;
            this._resizeObserver = new ResizeObserver(function() {
                return _this2.update();
            });
            this._resizeObserver.observe(observedEl);
        } catch (e) {
            console.warn('Failed to create the resize observer in the ParallaxContoller');
        }
    };
    _proto._getScrollPosition = function _getScrollPosition() {
        // Save current scroll
        // Supports IE 9 and up.
        var nx = this._hasScrollContainer ? this.viewEl.scrollLeft : window.pageXOffset;
        var ny = this._hasScrollContainer ? this.viewEl.scrollTop : window.pageYOffset;
        return [
            nx,
            ny
        ];
    };
    _proto._handleScroll = function _handleScroll() {
        var _this$elements;
        var _this$_getScrollPosit2 = this._getScrollPosition(), nx = _this$_getScrollPosit2[0], ny = _this$_getScrollPosit2[1];
        this.scroll.setScroll(nx, ny); // Only called if the last animation request has been
        // completed and there are parallax elements to update
        if (!this._ticking && ((_this$elements = this.elements) == null ? void 0 : _this$elements.length) > 0) {
            this._ticking = true; // @ts-ignore
            window.requestAnimationFrame(this._updateAllElements);
        }
    };
    _proto._handleUpdateCache = function _handleUpdateCache() {
        this._setViewSize();
        this._updateAllElements({
            updateCache: true
        });
    };
    _proto._updateAllElements = function _updateAllElements(_temp) {
        var _this3 = this;
        var _ref2 = _temp === void 0 ? {} : _temp, updateCache = _ref2.updateCache;
        if (this.elements) {
            this.elements.forEach(function(element) {
                if (updateCache) {
                    element.setCachedAttributes(_this3.view, _this3.scroll);
                }
                _this3._updateElementPosition(element);
            });
        } // reset ticking so more animations can be called
        this._ticking = false;
    };
    _proto._updateElementPosition = function _updateElementPosition(element) {
        if (element.props.disabled || this.disabled) return;
        element.updatePosition(this.scroll);
    };
    _proto._getViewParams = function _getViewParams() {
        if (this._hasScrollContainer) {
            // @ts-expect-error
            var _width = this.viewEl.offsetWidth; // @ts-expect-error
            var _height = this.viewEl.offsetHeight; // @ts-expect-error
            var _scrollHeight = this.viewEl.scrollHeight; // @ts-expect-error
            var _scrollWidth = this.viewEl.scrollWidth;
            return this.view.setSize({
                width: _width,
                height: _height,
                scrollHeight: _scrollHeight,
                scrollWidth: _scrollWidth
            });
        }
        var html = document.documentElement;
        var width = window.innerWidth || html.clientWidth;
        var height = window.innerHeight || html.clientHeight;
        var scrollHeight = html.scrollHeight;
        var scrollWidth = html.scrollWidth;
        return {
            width: width,
            height: height,
            scrollHeight: scrollHeight,
            scrollWidth: scrollWidth
        };
    };
    _proto._setViewSize = function _setViewSize() {
        return this.view.setSize(this._getViewParams());
    };
    _proto._checkIfViewHasChanged = function _checkIfViewHasChanged() {
        return this.view.hasChanged(this._getViewParams());
    };
    _proto.getElements = function getElements() {
        return this.elements;
    };
    _proto.createElement = function createElement(options) {
        var newElement = new Element(_extends({}, options, {
            scrollAxis: this.scrollAxis,
            disabledParallaxController: this.disabled
        }));
        newElement.setCachedAttributes(this.view, this.scroll);
        this.elements = this.elements ? [].concat(this.elements, [
            newElement
        ]) : [
            newElement
        ];
        this._updateElementPosition(newElement); // NOTE: This checks if the view has changed then update the controller and all elements if it has
        // This shouldn't always be necessary with a resize observer watching the view element
        // but there seems to be cases where the resize observer does not catch and update.
        if (this._checkIfViewHasChanged()) {
            this.update();
        }
        return newElement;
    };
    _proto.removeElementById = function removeElementById(id) {
        if (!this.elements) return;
        this.elements = this.elements.filter(function(el) {
            return el.id !== id;
        });
    };
    _proto.updateElementPropsById = function updateElementPropsById(id, props) {
        if (this.elements) {
            this.elements = this.elements.map(function(el) {
                if (el.id === id) {
                    return el.updateProps(props);
                }
                return el;
            });
        }
        this.update();
    };
    _proto.resetElementStyles = function resetElementStyles(element) {
        resetStyles(element);
    };
    _proto.update = function update() {
        // Save the latest scroll position because window.scroll
        // may be called and the handle scroll event may not be called.
        var _this$_getScrollPosit3 = this._getScrollPosition(), nx = _this$_getScrollPosit3[0], ny = _this$_getScrollPosit3[1];
        this.scroll.setScroll(nx, ny);
        this._setViewSize();
        this._updateAllElements({
            updateCache: true
        });
    };
    _proto.updateScrollContainer = function updateScrollContainer(el) {
        // remove existing listeners with current el first
        this._removeListeners(this.viewEl);
        this.viewEl = el;
        this._hasScrollContainer = !!el;
        this.view = new View({
            width: 0,
            height: 0,
            scrollWidth: 0,
            scrollHeight: 0,
            scrollContainer: el
        });
        this._setViewSize();
        this._addListeners(this.viewEl);
        this._updateAllElements({
            updateCache: true
        });
    };
    _proto.disableParallaxController = function disableParallaxController() {
        this.disabled = true; // remove listeners
        this._removeListeners(this.viewEl); // reset all styles
        if (this.elements) {
            this.elements.forEach(function(element) {
                return resetStyles(element);
            });
        }
    };
    _proto.enableParallaxController = function enableParallaxController() {
        var _this4 = this;
        this.disabled = false;
        if (this.elements) {
            this.elements.forEach(function(element) {
                return element.updateElementOptions({
                    disabledParallaxController: false,
                    scrollAxis: _this4.scrollAxis
                });
            });
        } // add back listeners
        this._addListeners(this.viewEl);
        this._addResizeObserver();
        this._setViewSize();
    };
    _proto.disableAllElements = function disableAllElements() {
        console.warn('deprecated: use disableParallaxController() instead');
        if (this.elements) {
            this.elements = this.elements.map(function(el) {
                return el.updateProps({
                    disabled: true
                });
            });
        }
        this.update();
    };
    _proto.enableAllElements = function enableAllElements() {
        console.warn('deprecated: use enableParallaxController() instead');
        if (this.elements) {
            this.elements = this.elements.map(function(el) {
                return el.updateProps({
                    disabled: false
                });
            });
        }
        this.update();
    };
    _proto.destroy = function destroy() {
        this._removeListeners(this.viewEl);
        if (this.elements) {
            this.elements.forEach(function(element) {
                return resetStyles(element);
            });
        } // @ts-expect-error
        this.elements = undefined;
    };
    return ParallaxController;
}();
;
 //# sourceMappingURL=parallax-controller.esm.js.map
}),
"[project]/dev/portfolio-2.1/node_modules/react-scroll-parallax/dist/index.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Parallax",
    ()=>Parallax,
    "ParallaxBanner",
    ()=>ParallaxBanner,
    "ParallaxBannerLayer",
    ()=>ParallaxBannerLayer,
    "ParallaxContext",
    ()=>ParallaxContext,
    "ParallaxProvider",
    ()=>ParallaxProvider,
    "useParallax",
    ()=>useParallax,
    "useParallaxController",
    ()=>useParallaxController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/esm/_instanceof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/esm/_object_without_properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$parallax$2d$controller$2f$dist$2f$parallax$2d$controller$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/parallax-controller/dist/parallax-controller.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
//#region src/utils/removeUndefinedObjectKeys.ts
function removeUndefinedObjectKeys(obj) {
    Object.keys(obj).forEach(function(key) {
        return obj[key] === void 0 && delete obj[key];
    });
    return obj;
}
//#endregion
//#region src/helpers/getIsolatedParallaxProps.ts
function getIsolatedParallaxProps(props) {
    var disabled = props.disabled, easing = props.easing, endScroll = props.endScroll, onChange = props.onChange, onEnter = props.onEnter, onExit = props.onExit, onProgressChange = props.onProgressChange, opacity = props.opacity, rootMargin = props.rootMargin, rotate = props.rotate, rotateX = props.rotateX, rotateY = props.rotateY, rotateZ = props.rotateZ, scale = props.scale, scaleX = props.scaleX, scaleY = props.scaleY, scaleZ = props.scaleZ, shouldAlwaysCompleteAnimation = props.shouldAlwaysCompleteAnimation, shouldDisableScalingTranslations = props.shouldDisableScalingTranslations, speed = props.speed, startScroll = props.startScroll, targetElement = props.targetElement, translateX = props.translateX, translateY = props.translateY, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(props, [
        "disabled",
        "easing",
        "endScroll",
        "onChange",
        "onEnter",
        "onExit",
        "onProgressChange",
        "opacity",
        "rootMargin",
        "rotate",
        "rotateX",
        "rotateY",
        "rotateZ",
        "scale",
        "scaleX",
        "scaleY",
        "scaleZ",
        "shouldAlwaysCompleteAnimation",
        "shouldDisableScalingTranslations",
        "speed",
        "startScroll",
        "targetElement",
        "translateX",
        "translateY"
    ]);
    return {
        parallaxProps: removeUndefinedObjectKeys({
            disabled: disabled,
            easing: easing,
            endScroll: endScroll,
            onChange: onChange,
            onEnter: onEnter,
            onExit: onExit,
            onProgressChange: onProgressChange,
            opacity: opacity,
            rootMargin: rootMargin,
            rotate: rotate,
            rotateX: rotateX,
            rotateY: rotateY,
            rotateZ: rotateZ,
            scale: scale,
            scaleX: scaleX,
            scaleY: scaleY,
            scaleZ: scaleZ,
            shouldAlwaysCompleteAnimation: shouldAlwaysCompleteAnimation,
            shouldDisableScalingTranslations: shouldDisableScalingTranslations,
            speed: speed,
            startScroll: startScroll,
            targetElement: targetElement,
            translateX: translateX,
            translateY: translateY
        }),
        rest: rest
    };
}
//#endregion
//#region src/components/Parallax/hooks.ts
function useVerifyController(controller) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useVerifyController.useEffect": function() {
            var isServer = typeof window === "undefined";
            var isInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(controller, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$parallax$2d$controller$2f$dist$2f$parallax$2d$controller$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParallaxController"]);
            if (!isServer && !controller && !isInstance) throw new Error("Must wrap your application's <Parallax /> components in a <ParallaxProvider />.");
        }
    }["useVerifyController.useEffect"], [
        controller
    ]);
}
//#endregion
//#region src/context/ParallaxContext.ts
var ParallaxContext = __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(null);
//#endregion
//#region src/hooks/useParallaxController.ts
function useParallaxController() {
    var parallaxController = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ParallaxContext);
    if (typeof window === "undefined") return null;
    if (!parallaxController) throw new Error("Could not find `react-scroll-parallax` context value. Please ensure the component is wrapped in a <ParallaxProvider>");
    return parallaxController;
}
//#endregion
//#region src/hooks/useParallax.ts
function useParallax(props) {
    var controller = useParallaxController();
    var ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var parallaxProps = getIsolatedParallaxProps(props).parallaxProps;
    useVerifyController(controller);
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(), 2), element = _useState[0], setElement = _useState[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useParallax.useEffect": function() {
            var newElement;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(ref.current, HTMLElement)) {
                var options = {
                    el: ref.current,
                    props: parallaxProps
                };
                newElement = controller === null || controller === void 0 ? void 0 : controller.createElement(options);
                setElement(newElement);
            } else throw new Error("You must assign the ref returned by the useParallax() hook to an HTML Element.");
            return ({
                "useParallax.useEffect": function() {
                    if (newElement) controller === null || controller === void 0 || controller.removeElementById(newElement.id);
                }
            })["useParallax.useEffect"];
        }
    }["useParallax.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useParallax.useEffect": function() {
            if (element) if (props.disabled) {
                controller === null || controller === void 0 || controller.resetElementStyles(element);
                controller === null || controller === void 0 || controller.updateElementPropsById(element.id, parallaxProps);
            } else controller === null || controller === void 0 || controller.updateElementPropsById(element.id, parallaxProps);
        }
    }["useParallax.useEffect"], [
        props.disabled,
        props.easing,
        props.endScroll,
        props.onChange,
        props.onEnter,
        props.onExit,
        props.onProgressChange,
        props.opacity,
        props.rootMargin,
        props.rotate,
        props.rotateX,
        props.rotateY,
        props.rotateZ,
        props.scale,
        props.scaleX,
        props.scaleY,
        props.scaleZ,
        props.shouldAlwaysCompleteAnimation,
        props.shouldDisableScalingTranslations,
        props.speed,
        props.startScroll,
        props.targetElement,
        props.translateX,
        props.translateY
    ]);
    return {
        ref: ref,
        controller: controller,
        element: element
    };
}
//#endregion
//#region src/components/Parallax/Parallax.tsx
function Parallax(props) {
    var _getIsolatedParallaxProps = getIsolatedParallaxProps(props), parallaxProps = _getIsolatedParallaxProps.parallaxProps, rest = _getIsolatedParallaxProps.rest;
    var ref = useParallax(parallaxProps).ref;
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
        ref: ref
    }, rest), props.children);
}
//#endregion
//#region src/components/ParallaxBanner/helpers/getExpandedStyle.ts
var FALLBACK_RECT = {
    height: 0
};
function getExpandedStyle(layer) {
    if (Array.isArray(layer.translateY)) {
        var translateYStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$parallax$2d$controller$2f$dist$2f$parallax$2d$controller$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseValueAndUnit"])(layer.translateY[0]);
        var translateYEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$parallax$2d$controller$2f$dist$2f$parallax$2d$controller$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseValueAndUnit"])(layer.translateY[1]);
        if (translateYStart.unit === "px" && translateYEnd.unit === "px") return {
            top: "".concat(Math.abs(translateYEnd.value) * -1, "px"),
            bottom: "".concat(Math.abs(translateYStart.value) * -1, "px")
        };
        if (translateYStart.unit === "%" && translateYEnd.unit === "%") {
            var _layer$targetElement$, _layer$targetElement;
            var clientRect = (_layer$targetElement$ = (_layer$targetElement = layer.targetElement) === null || _layer$targetElement === void 0 ? void 0 : _layer$targetElement.getBoundingClientRect()) !== null && _layer$targetElement$ !== void 0 ? _layer$targetElement$ : FALLBACK_RECT;
            var top = Math.abs(clientRect.height * .01 * translateYEnd.value) * -1;
            var bottom = Math.abs(clientRect.height * .01 * translateYStart.value) * -1;
            return {
                top: "".concat(top, "px"),
                bottom: "".concat(bottom, "px")
            };
        }
    }
    if (layer.speed) {
        var speed = layer.speed || 0;
        var absSpeed = Math.abs(speed) * 10 * -1;
        return {
            top: "".concat(absSpeed, "px"),
            bottom: "".concat(absSpeed, "px")
        };
    }
    return {};
}
//#endregion
//#region src/components/ParallaxBanner/helpers/getImageStyle.ts
function getImageStyle(layer) {
    return layer.image ? {
        backgroundImage: "url(".concat(layer.image, ")"),
        backgroundPosition: "center",
        backgroundSize: "cover"
    } : {};
}
//#endregion
//#region src/components/ParallaxBanner/components/ParallaxBannerLayer.tsx
var absoluteStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
};
var ParallaxBannerLayer = function(props) {
    var _getIsolatedParallaxProps = getIsolatedParallaxProps(props), parallaxProps = _getIsolatedParallaxProps.parallaxProps, rest = _getIsolatedParallaxProps.rest;
    var children = rest.children, disabled = rest.disabled, style = rest.style, _rest_expanded = rest.expanded, expanded = _rest_expanded === void 0 ? true : _rest_expanded, image = rest.image, testId = rest.testId, divProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(rest, [
        "children",
        "disabled",
        "style",
        "expanded",
        "image",
        "testId"
    ]);
    var imageStyle = getImageStyle(props);
    var expandedStyle = expanded ? getExpandedStyle(props) : {};
    var parallax = useParallax((0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
        targetElement: props.targetElement,
        shouldDisableScalingTranslations: true
    }, parallaxProps));
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
        "data-testid": testId,
        ref: parallax.ref,
        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, imageStyle, absoluteStyle, expandedStyle, style)
    }, divProps), rest.children);
};
//#endregion
//#region src/components/ParallaxBanner/ParallaxBanner.tsx
var containerStyle = {
    position: "relative",
    overflow: "hidden",
    width: "100%"
};
var ParallaxBanner = function(props) {
    var renderLayers = function renderLayers() {
        if (targetElement) {
            if (layers && layers.length > 0) return layers.map(function(layer, i) {
                return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ParallaxBannerLayer, (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, layer), {
                    targetElement: targetElement,
                    key: "layer-".concat(i),
                    testId: "layer-".concat(i)
                }));
            });
        }
        return null;
    };
    var renderChildren = function renderChildren() {
        if (targetElement) return __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.map(props.children, function(child) {
            var item = child;
            if ((item === null || item === void 0 ? void 0 : item.type) === ParallaxBannerLayer) return __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(item, {
                targetElement: targetElement
            });
            return child;
        });
        return null;
    };
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), 2), targetElement = _useState[0], setTargetElement = _useState[1];
    var containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParallaxBanner.useEffect": function() {
            setTargetElement(containerRef.current);
        }
    }["ParallaxBanner.useEffect"], []);
    var disableAllLayers = props.disabled, rootStyle = props.style, _props_layers = props.layers, layers = _props_layers === void 0 ? [] : _props_layers, rootRest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(props, [
        "disabled",
        "style",
        "layers"
    ]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
        ref: containerRef,
        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, containerStyle, rootStyle)
    }, rootRest), renderLayers(), renderChildren());
};
//#endregion
//#region src/components/ParallaxProvider/helpers.ts
var createController = function(options) {
    if (!(typeof window === "undefined")) return __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$parallax$2d$controller$2f$dist$2f$parallax$2d$controller$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParallaxController"].init(options);
    return null;
};
//#endregion
//#region src/components/ParallaxProvider/ParallaxProvider.tsx
function ParallaxProvider(props) {
    var controller = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (!controller.current) controller.current = createController({
        scrollAxis: props.scrollAxis || __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$parallax$2d$controller$2f$dist$2f$parallax$2d$controller$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAxis"].vertical,
        scrollContainer: props.scrollContainer,
        disabled: props.isDisabled
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParallaxProvider.useEffect": function() {
            if (props.scrollContainer && controller.current) controller.current.updateScrollContainer(props.scrollContainer);
        }
    }["ParallaxProvider.useEffect"], [
        props.scrollContainer
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParallaxProvider.useEffect": function() {
            if (props.isDisabled && controller.current) controller.current.disableParallaxController();
            if (!props.isDisabled && controller.current) controller.current.enableParallaxController();
        }
    }["ParallaxProvider.useEffect"], [
        props.isDisabled
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParallaxProvider.useEffect": function() {
            return ({
                "ParallaxProvider.useEffect": function() {
                    var _controller$current;
                    controller === null || controller === void 0 || (_controller$current = controller.current) === null || _controller$current === void 0 || _controller$current.destroy();
                }
            })["ParallaxProvider.useEffect"];
        }
    }["ParallaxProvider.useEffect"], []);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ParallaxContext.Provider, {
        value: controller.current
    }, props.children);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/dev/portfolio-2.1/node_modules/lodash.throttle/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var _type_of = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as the `TypeError` message for "Functions" methods. */ var FUNC_ERROR_TEXT = 'Expected a function';
/** Used as references for various `Number` constants. */ var NAN = 0 / 0;
/** `Object#toString` result references. */ var symbolTag = '[object Symbol]';
/** Used to match leading and trailing whitespace. */ var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */ var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */ var freeParseInt = parseInt;
/** Detect free variable `global` from Node.js. */ var freeGlobal = (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : _type_of._(/*TURBOPACK member replacement*/ __turbopack_context__.g)) == 'object' && /*TURBOPACK member replacement*/ __turbopack_context__.g && /*TURBOPACK member replacement*/ __turbopack_context__.g.Object === Object && /*TURBOPACK member replacement*/ __turbopack_context__.g;
/** Detect free variable `self`. */ var freeSelf = (typeof self === "undefined" ? "undefined" : _type_of._(self)) == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function('return this')();
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMax = Math.max, nativeMin = Math.min;
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */ var now = function now() {
    return root.Date.now();
};
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */ function debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
    }
    function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result = wait - timeSinceLastCall;
        return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
    }
    function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
            return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
        timerId = undefined;
        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
            return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
    }
    function cancel() {
        if (timerId !== undefined) {
            clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
    }
    function flush() {
        return timerId === undefined ? result : trailingEdge(now());
    }
    function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
            if (timerId === undefined) {
                return leadingEdge(lastCallTime);
            }
            if (maxing) {
                // Handle invocations in a tight loop.
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
            }
        }
        if (timerId === undefined) {
            timerId = setTimeout(timerExpired, wait);
        }
        return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
}
/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */ function throttle(func, wait, options) {
    var leading = true, trailing = true;
    if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
    }
    if (isObject(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    return debounce(func, wait, {
        'leading': leading,
        'maxWait': wait,
        'trailing': trailing
    });
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value === "undefined" ? "undefined" : _type_of._(value);
    return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && (typeof value === "undefined" ? "undefined" : _type_of._(value)) == 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return (typeof value === "undefined" ? "undefined" : _type_of._(value)) == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */ function toNumber(value) {
    if (typeof value == 'number') {
        return value;
    }
    if (isSymbol(value)) {
        return NAN;
    }
    if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? other + '' : other;
    }
    if (typeof value != 'string') {
        return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
module.exports = throttle;
}),
"[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/mixins/passive-event-listeners.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 * Tell the browser that the event listener won't prevent a scroll.
 * Allowing the browser to continue scrolling without having to
 * to wait for the listener to return.
 */ var addPassiveEventListener = exports.addPassiveEventListener = function addPassiveEventListener(target, eventName, listener) {
    var listenerName = listener.name;
    if (!listenerName) {
        listenerName = eventName;
        console.warn('Listener must be a named function.');
    }
    if (!attachedListeners.has(eventName)) attachedListeners.set(eventName, new Set());
    var listeners = attachedListeners.get(eventName);
    if (listeners.has(listenerName)) return;
    var supportsPassiveOption = function() {
        var supportsPassiveOption = false;
        try {
            var opts = Object.defineProperty({}, 'passive', {
                get: function get() {
                    supportsPassiveOption = true;
                }
            });
            window.addEventListener('test', null, opts);
        } catch (e) {}
        return supportsPassiveOption;
    }();
    target.addEventListener(eventName, listener, supportsPassiveOption ? {
        passive: true
    } : false);
    listeners.add(listenerName);
};
var removePassiveEventListener = exports.removePassiveEventListener = function removePassiveEventListener(target, eventName, listener) {
    target.removeEventListener(eventName, listener);
    attachedListeners.get(eventName).delete(listener.name || eventName);
};
var attachedListeners = new Map();
}),
"[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/mixins/scroll-spy.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _lodash = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/lodash.throttle/index.js [app-client] (ecmascript)");
var _lodash2 = _interopRequireDefault(_lodash);
var _passiveEventListeners = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/mixins/passive-event-listeners.js [app-client] (ecmascript)");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// The eventHandler will execute at a rate of 15fps by default
var eventThrottler = function eventThrottler(eventHandler) {
    var throttleAmount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 66;
    return (0, _lodash2.default)(eventHandler, throttleAmount);
};
var scrollSpy = {
    spyCallbacks: [],
    spySetState: [],
    scrollSpyContainers: [],
    mount: function mount(scrollSpyContainer, throttle) {
        if (scrollSpyContainer) {
            var eventHandler = eventThrottler(function(event) {
                scrollSpy.scrollHandler(scrollSpyContainer);
            }, throttle);
            scrollSpy.scrollSpyContainers.push(scrollSpyContainer);
            (0, _passiveEventListeners.addPassiveEventListener)(scrollSpyContainer, 'scroll', eventHandler);
            return function() {
                (0, _passiveEventListeners.removePassiveEventListener)(scrollSpyContainer, 'scroll', eventHandler);
                scrollSpy.scrollSpyContainers.splice(scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer), 1);
            };
        }
        return function() {};
    },
    isMounted: function isMounted(scrollSpyContainer) {
        return scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer) !== -1;
    },
    currentPositionX: function currentPositionX(scrollSpyContainer) {
        if (scrollSpyContainer === document) {
            var supportPageOffset = window.scrollY !== undefined;
            var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
            return supportPageOffset ? window.scrollX : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
        } else {
            return scrollSpyContainer.scrollLeft;
        }
    },
    currentPositionY: function currentPositionY(scrollSpyContainer) {
        if (scrollSpyContainer === document) {
            var supportPageOffset = window.scrollX !== undefined;
            var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
            return supportPageOffset ? window.scrollY : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
        } else {
            return scrollSpyContainer.scrollTop;
        }
    },
    scrollHandler: function scrollHandler(scrollSpyContainer) {
        var callbacks = scrollSpy.scrollSpyContainers[scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer)].spyCallbacks || [];
        callbacks.forEach(function(c) {
            return c(scrollSpy.currentPositionX(scrollSpyContainer), scrollSpy.currentPositionY(scrollSpyContainer));
        });
    },
    addStateHandler: function addStateHandler(handler) {
        scrollSpy.spySetState.push(handler);
    },
    addSpyHandler: function addSpyHandler(handler, scrollSpyContainer) {
        var container = scrollSpy.scrollSpyContainers[scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer)];
        if (!container.spyCallbacks) {
            container.spyCallbacks = [];
        }
        container.spyCallbacks.push(handler);
    },
    updateStates: function updateStates() {
        scrollSpy.spySetState.forEach(function(s) {
            return s();
        });
    },
    unmount: function unmount(stateHandler, spyHandler) {
        scrollSpy.scrollSpyContainers.forEach(function(c) {
            return c.spyCallbacks && c.spyCallbacks.length && c.spyCallbacks.indexOf(spyHandler) > -1 && c.spyCallbacks.splice(c.spyCallbacks.indexOf(spyHandler), 1);
        });
        if (scrollSpy.spySetState && scrollSpy.spySetState.length && scrollSpy.spySetState.indexOf(stateHandler) > -1) {
            scrollSpy.spySetState.splice(scrollSpy.spySetState.indexOf(stateHandler), 1);
        }
        document.removeEventListener('scroll', scrollSpy.scrollHandler);
    },
    update: function update() {
        return scrollSpy.scrollSpyContainers.forEach(function(c) {
            return scrollSpy.scrollHandler(c);
        });
    }
};
exports.default = scrollSpy;
}),
"[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/mixins/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var updateHash = function updateHash(hash, historyUpdate) {
    var hashVal = hash.indexOf("#") === 0 ? hash.substring(1) : hash;
    var hashToUpdate = hashVal ? "#" + hashVal : "";
    var curLoc = window && window.location;
    var urlToPush = hashToUpdate ? curLoc.pathname + curLoc.search + hashToUpdate : curLoc.pathname + curLoc.search;
    historyUpdate ? history.pushState(history.state, "", urlToPush) : history.replaceState(history.state, "", urlToPush);
};
var getHash = function getHash() {
    return window.location.hash.replace(/^#/, "");
};
var filterElementInContainer = function filterElementInContainer(container) {
    return function(element) {
        return container.contains ? container != element && container.contains(element) : !!(container.compareDocumentPosition(element) & 16);
    };
};
var isPositioned = function isPositioned(element) {
    return getComputedStyle(element).position !== "static";
};
var getElementOffsetInfoUntil = function getElementOffsetInfoUntil(element, predicate) {
    var offsetTop = element.offsetTop;
    var currentOffsetParent = element.offsetParent;
    while(currentOffsetParent && !predicate(currentOffsetParent)){
        offsetTop += currentOffsetParent.offsetTop;
        currentOffsetParent = currentOffsetParent.offsetParent;
    }
    return {
        offsetTop: offsetTop,
        offsetParent: currentOffsetParent
    };
};
var scrollOffset = function scrollOffset(c, t, horizontal) {
    if (horizontal) {
        return c === document ? t.getBoundingClientRect().left + (window.scrollX || window.pageXOffset) : getComputedStyle(c).position !== "static" ? t.offsetLeft : t.offsetLeft - c.offsetLeft;
    } else {
        if (c === document) {
            return t.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
        }
        // The offsetParent of an element, according to MDN, is its nearest positioned
        // (an element whose position is anything other than static) ancestor. The offsetTop
        // of an element is taken with respect to its offsetParent which may not neccessarily
        // be its parentElement except the parent itself is positioned.
        // So if containerElement is positioned, then it must be an offsetParent somewhere
        // If it happens that targetElement is a descendant of the containerElement, and there
        // is not intermediate positioned element between the two of them, i.e.
        // targetElement"s offsetParent is the same as the containerElement, then the
        // distance between the two will be the offsetTop of the targetElement.
        // If, on the other hand, there are intermediate positioned elements between the
        // two entities, the distance between the targetElement and the containerElement
        // will be the accumulation of the offsetTop of the element and that of its
        // subsequent offsetParent until the containerElement is reached, since it
        // will also be an offsetParent at some point due to the fact that it is positioned.
        // If the containerElement is not positioned, then it can"t be an offsetParent,
        // which means that the offsetTop of the targetElement would not be with respect to it.
        // However, if the two of them happen to have the same offsetParent, then
        // the distance between them will be the difference between their offsetTop
        // since they are both taken with respect to the same entity.
        // The last resort would be to accumulate their offsetTop until a common
        // offsetParent is reached (usually the document) and taking the difference
        // between the accumulated offsetTops
        if (isPositioned(c)) {
            if (t.offsetParent !== c) {
                var isContainerElementOrDocument = function isContainerElementOrDocument(e) {
                    return e === c || e === document;
                };
                var _getElementOffsetInfo = getElementOffsetInfoUntil(t, isContainerElementOrDocument), offsetTop = _getElementOffsetInfo.offsetTop, offsetParent = _getElementOffsetInfo.offsetParent;
                if (offsetParent !== c) {
                    throw new Error("Seems containerElement is not an ancestor of the Element");
                }
                return offsetTop;
            }
            return t.offsetTop;
        }
        if (t.offsetParent === c.offsetParent) {
            return t.offsetTop - c.offsetTop;
        }
        var isDocument = function isDocument(e) {
            return e === document;
        };
        return getElementOffsetInfoUntil(t, isDocument).offsetTop - getElementOffsetInfoUntil(c, isDocument).offsetTop;
    }
};
exports.default = {
    updateHash: updateHash,
    getHash: getHash,
    filterElementInContainer: filterElementInContainer,
    scrollOffset: scrollOffset
};
}),
"[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/mixins/smooth.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    /*
   * https://github.com/oblador/angular-scroll (duScrollDefaultEasing)
   */ defaultEasing: function defaultEasing(x) {
        if (x < 0.5) {
            return Math.pow(x * 2, 2) / 2;
        }
        return 1 - Math.pow((1 - x) * 2, 2) / 2;
    },
    /*
   * https://gist.github.com/gre/1650294
   */ // no easing, no acceleration
    linear: function linear(x) {
        return x;
    },
    // accelerating from zero velocity
    easeInQuad: function easeInQuad(x) {
        return x * x;
    },
    // decelerating to zero velocity
    easeOutQuad: function easeOutQuad(x) {
        return x * (2 - x);
    },
    // acceleration until halfway, then deceleration
    easeInOutQuad: function easeInOutQuad(x) {
        return x < .5 ? 2 * x * x : -1 + (4 - 2 * x) * x;
    },
    // accelerating from zero velocity 
    easeInCubic: function easeInCubic(x) {
        return x * x * x;
    },
    // decelerating to zero velocity π
    easeOutCubic: function easeOutCubic(x) {
        return --x * x * x + 1;
    },
    // acceleration until halfway, then deceleration 
    easeInOutCubic: function easeInOutCubic(x) {
        return x < .5 ? 4 * x * x * x : (x - 1) * (2 * x - 2) * (2 * x - 2) + 1;
    },
    // accelerating from zero velocity 
    easeInQuart: function easeInQuart(x) {
        return x * x * x * x;
    },
    // decelerating to zero velocity 
    easeOutQuart: function easeOutQuart(x) {
        return 1 - --x * x * x * x;
    },
    // acceleration until halfway, then deceleration
    easeInOutQuart: function easeInOutQuart(x) {
        return x < .5 ? 8 * x * x * x * x : 1 - 8 * --x * x * x * x;
    },
    // accelerating from zero velocity
    easeInQuint: function easeInQuint(x) {
        return x * x * x * x * x;
    },
    // decelerating to zero velocity
    easeOutQuint: function easeOutQuint(x) {
        return 1 + --x * x * x * x * x;
    },
    // acceleration until halfway, then deceleration 
    easeInOutQuint: function easeInOutQuint(x) {
        return x < .5 ? 16 * x * x * x * x * x : 1 + 16 * --x * x * x * x * x;
    }
};
}),
"[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/mixins/cancel-events.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _passiveEventListeners = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/mixins/passive-event-listeners.js [app-client] (ecmascript)");
var events = [
    'mousedown',
    'wheel',
    'touchmove',
    'keydown'
];
exports.default = {
    subscribe: function subscribe(cancelEvent) {
        return typeof document !== 'undefined' && events.forEach(function(event) {
            return (0, _passiveEventListeners.addPassiveEventListener)(document, event, cancelEvent);
        });
    }
};
}),
"[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/mixins/scroll-events.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Events = {
    registered: {},
    scrollEvent: {
        register: function register(evtName, callback) {
            Events.registered[evtName] = callback;
        },
        remove: function remove(evtName) {
            Events.registered[evtName] = null;
        }
    }
};
exports.default = Events;
}),
"[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/mixins/animate-scroll.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
var _utils = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/mixins/utils.js [app-client] (ecmascript)");
var _utils2 = _interopRequireDefault(_utils);
var _smooth = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/mixins/smooth.js [app-client] (ecmascript)");
var _smooth2 = _interopRequireDefault(_smooth);
var _cancelEvents = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/mixins/cancel-events.js [app-client] (ecmascript)");
var _cancelEvents2 = _interopRequireDefault(_cancelEvents);
var _scrollEvents = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/mixins/scroll-events.js [app-client] (ecmascript)");
var _scrollEvents2 = _interopRequireDefault(_scrollEvents);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/*
 * Gets the easing type from the smooth prop within options.
 */ var getAnimationType = function getAnimationType(options) {
    return _smooth2.default[options.smooth] || _smooth2.default.defaultEasing;
};
/*
 * Function helper
 */ var functionWrapper = function functionWrapper(value) {
    return typeof value === 'function' ? value : function() {
        return value;
    };
};
/*
 * Wraps window properties to allow server side rendering
 */ var currentWindowProperties = function currentWindowProperties() {
    if (typeof window !== 'undefined') {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
    }
};
/*
 * Helper function to never extend 60fps on the webpage.
 */ var requestAnimationFrameHelper = function() {
    return currentWindowProperties() || function(callback, element, delay) {
        window.setTimeout(callback, delay || 1000 / 60, new Date().getTime());
    };
}();
var makeData = function makeData() {
    return {
        currentPosition: 0,
        startPosition: 0,
        targetPosition: 0,
        progress: 0,
        duration: 0,
        cancel: false,
        target: null,
        containerElement: null,
        to: null,
        start: null,
        delta: null,
        percent: null,
        delayTimeout: null
    };
};
var currentPositionX = function currentPositionX(options) {
    var containerElement = options.data.containerElement;
    if (containerElement && containerElement !== document && containerElement !== document.body) {
        return containerElement.scrollLeft;
    } else {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
        return supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
    }
};
var currentPositionY = function currentPositionY(options) {
    var containerElement = options.data.containerElement;
    if (containerElement && containerElement !== document && containerElement !== document.body) {
        return containerElement.scrollTop;
    } else {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
        return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    }
};
var scrollContainerWidth = function scrollContainerWidth(options) {
    var containerElement = options.data.containerElement;
    if (containerElement && containerElement !== document && containerElement !== document.body) {
        return containerElement.scrollWidth - containerElement.offsetWidth;
    } else {
        var body = document.body;
        var html = document.documentElement;
        return Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
    }
};
var scrollContainerHeight = function scrollContainerHeight(options) {
    var containerElement = options.data.containerElement;
    if (containerElement && containerElement !== document && containerElement !== document.body) {
        return containerElement.scrollHeight - containerElement.offsetHeight;
    } else {
        var body = document.body;
        var html = document.documentElement;
        return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    }
};
var animateScroll = function animateScroll(easing, options, timestamp) {
    var data = options.data;
    // Cancel on specific events
    if (!options.ignoreCancelEvents && data.cancel) {
        if (_scrollEvents2.default.registered['end']) {
            _scrollEvents2.default.registered['end'](data.to, data.target, data.currentPositionY);
        }
        return;
    }
    ;
    data.delta = Math.round(data.targetPosition - data.startPosition);
    if (data.start === null) {
        data.start = timestamp;
    }
    data.progress = timestamp - data.start;
    data.percent = data.progress >= data.duration ? 1 : easing(data.progress / data.duration);
    data.currentPosition = data.startPosition + Math.ceil(data.delta * data.percent);
    if (data.containerElement && data.containerElement !== document && data.containerElement !== document.body) {
        if (options.horizontal) {
            data.containerElement.scrollLeft = data.currentPosition;
        } else {
            data.containerElement.scrollTop = data.currentPosition;
        }
    } else {
        if (options.horizontal) {
            window.scrollTo(data.currentPosition, 0);
        } else {
            window.scrollTo(0, data.currentPosition);
        }
    }
    if (data.percent < 1) {
        var easedAnimate = animateScroll.bind(null, easing, options);
        requestAnimationFrameHelper.call(window, easedAnimate);
        return;
    }
    if (_scrollEvents2.default.registered['end']) {
        _scrollEvents2.default.registered['end'](data.to, data.target, data.currentPosition);
    }
};
var setContainer = function setContainer(options) {
    options.data.containerElement = !options ? null : options.containerId ? document.getElementById(options.containerId) : options.container && options.container.nodeType ? options.container : document;
};
var animateTopScroll = function animateTopScroll(scrollOffset, options, to, target) {
    options.data = options.data || makeData();
    window.clearTimeout(options.data.delayTimeout);
    var setCancel = function setCancel() {
        options.data.cancel = true;
    };
    _cancelEvents2.default.subscribe(setCancel);
    setContainer(options);
    options.data.start = null;
    options.data.cancel = false;
    options.data.startPosition = options.horizontal ? currentPositionX(options) : currentPositionY(options);
    options.data.targetPosition = options.absolute ? scrollOffset : scrollOffset + options.data.startPosition;
    if (options.data.startPosition === options.data.targetPosition) {
        if (_scrollEvents2.default.registered['end']) {
            _scrollEvents2.default.registered['end'](options.data.to, options.data.target, options.data.currentPosition);
        }
        return;
    }
    options.data.delta = Math.round(options.data.targetPosition - options.data.startPosition);
    options.data.duration = functionWrapper(options.duration)(options.data.delta);
    options.data.duration = isNaN(parseFloat(options.data.duration)) ? 1000 : parseFloat(options.data.duration);
    options.data.to = to;
    options.data.target = target;
    var easing = getAnimationType(options);
    var easedAnimate = animateScroll.bind(null, easing, options);
    if (options && options.delay > 0) {
        options.data.delayTimeout = window.setTimeout(function() {
            if (_scrollEvents2.default.registered['begin']) {
                _scrollEvents2.default.registered['begin'](options.data.to, options.data.target);
            }
            requestAnimationFrameHelper.call(window, easedAnimate);
        }, options.delay);
        return;
    }
    if (_scrollEvents2.default.registered['begin']) {
        _scrollEvents2.default.registered['begin'](options.data.to, options.data.target);
    }
    requestAnimationFrameHelper.call(window, easedAnimate);
};
var proceedOptions = function proceedOptions(options) {
    options = _extends({}, options);
    options.data = options.data || makeData();
    options.absolute = true;
    return options;
};
var scrollToTop = function scrollToTop(options) {
    animateTopScroll(0, proceedOptions(options));
};
var scrollTo = function scrollTo(toPosition, options) {
    animateTopScroll(toPosition, proceedOptions(options));
};
var scrollToBottom = function scrollToBottom(options) {
    options = proceedOptions(options);
    setContainer(options);
    animateTopScroll(options.horizontal ? scrollContainerWidth(options) : scrollContainerHeight(options), options);
};
var scrollMore = function scrollMore(toPosition, options) {
    options = proceedOptions(options);
    setContainer(options);
    var currentPosition = options.horizontal ? currentPositionX(options) : currentPositionY(options);
    animateTopScroll(toPosition + currentPosition, options);
};
exports.default = {
    animateTopScroll: animateTopScroll,
    getAnimationType: getAnimationType,
    scrollToTop: scrollToTop,
    scrollToBottom: scrollToBottom,
    scrollTo: scrollTo,
    scrollMore: scrollMore
};
}),
"[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/mixins/scroller.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
var _utils = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/mixins/utils.js [app-client] (ecmascript)");
var _utils2 = _interopRequireDefault(_utils);
var _animateScroll = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/mixins/animate-scroll.js [app-client] (ecmascript)");
var _animateScroll2 = _interopRequireDefault(_animateScroll);
var _scrollEvents = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/mixins/scroll-events.js [app-client] (ecmascript)");
var _scrollEvents2 = _interopRequireDefault(_scrollEvents);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var __mapped = {};
var __activeLink = void 0;
exports.default = {
    unmount: function unmount() {
        __mapped = {};
    },
    register: function register(name, element) {
        __mapped[name] = element;
    },
    unregister: function unregister(name) {
        delete __mapped[name];
    },
    get: function get(name) {
        return __mapped[name] || document.getElementById(name) || document.getElementsByName(name)[0] || document.getElementsByClassName(name)[0];
    },
    setActiveLink: function setActiveLink(link) {
        return __activeLink = link;
    },
    getActiveLink: function getActiveLink() {
        return __activeLink;
    },
    scrollTo: function scrollTo(to, props) {
        var target = this.get(to);
        if (!target) {
            console.warn("target Element not found");
            return;
        }
        props = _extends({}, props, {
            absolute: false
        });
        var containerId = props.containerId;
        var container = props.container;
        var containerElement = void 0;
        if (containerId) {
            containerElement = document.getElementById(containerId);
        } else if (container && container.nodeType) {
            containerElement = container;
        } else {
            containerElement = document;
        }
        props.absolute = true;
        var horizontal = props.horizontal;
        var scrollOffset = _utils2.default.scrollOffset(containerElement, target, horizontal) + (props.offset || 0);
        /*
     * if animate is not provided just scroll into the view
     */ if (!props.smooth) {
            if (_scrollEvents2.default.registered['begin']) {
                _scrollEvents2.default.registered['begin'](to, target);
            }
            if (containerElement === document) {
                if (props.horizontal) {
                    window.scrollTo(scrollOffset, 0);
                } else {
                    window.scrollTo(0, scrollOffset);
                }
            } else {
                containerElement.scrollTop = scrollOffset;
            }
            if (_scrollEvents2.default.registered['end']) {
                _scrollEvents2.default.registered['end'](to, target);
            }
            return;
        }
        /*
     * Animate scrolling
     */ _animateScroll2.default.animateTopScroll(scrollOffset, props, to, target);
    }
};
}),
"[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/mixins/scroll-hash.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _passiveEventListeners = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/mixins/passive-event-listeners.js [app-client] (ecmascript)");
var _utils = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/mixins/utils.js [app-client] (ecmascript)");
var _utils2 = _interopRequireDefault(_utils);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var scrollHash = {
    mountFlag: false,
    initialized: false,
    scroller: null,
    containers: {},
    mount: function mount(scroller) {
        this.scroller = scroller;
        this.handleHashChange = this.handleHashChange.bind(this);
        window.addEventListener('hashchange', this.handleHashChange);
        this.initStateFromHash();
        this.mountFlag = true;
    },
    mapContainer: function mapContainer(to, container) {
        this.containers[to] = container;
    },
    isMounted: function isMounted() {
        return this.mountFlag;
    },
    isInitialized: function isInitialized() {
        return this.initialized;
    },
    initStateFromHash: function initStateFromHash() {
        var _this = this;
        var hash = this.getHash();
        if (hash) {
            window.setTimeout(function() {
                _this.scrollTo(hash, true);
                _this.initialized = true;
            }, 10);
        } else {
            this.initialized = true;
        }
    },
    scrollTo: function scrollTo(to, isInit) {
        var scroller = this.scroller;
        var element = scroller.get(to);
        if (element && (isInit || to !== scroller.getActiveLink())) {
            var container = this.containers[to] || document;
            scroller.scrollTo(to, {
                container: container
            });
        }
    },
    getHash: function getHash() {
        return _utils2.default.getHash();
    },
    changeHash: function changeHash(to, saveHashHistory) {
        if (this.isInitialized() && _utils2.default.getHash() !== to) {
            _utils2.default.updateHash(to, saveHashHistory);
        }
    },
    handleHashChange: function handleHashChange() {
        this.scrollTo(this.getHash());
    },
    unmount: function unmount() {
        this.scroller = null;
        this.containers = null;
        window.removeEventListener('hashchange', this.handleHashChange);
    }
};
exports.default = scrollHash;
}),
"[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/mixins/scroll-link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _instanceof = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_instanceof.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var _react = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _react2 = _interopRequireDefault(_react);
var _scrollSpy = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/mixins/scroll-spy.js [app-client] (ecmascript)");
var _scrollSpy2 = _interopRequireDefault(_scrollSpy);
var _scroller = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/mixins/scroller.js [app-client] (ecmascript)");
var _scroller2 = _interopRequireDefault(_scroller);
var _propTypes = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/prop-types/index.js [app-client] (ecmascript)");
var _propTypes2 = _interopRequireDefault(_propTypes);
var _scrollHash = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/mixins/scroll-hash.js [app-client] (ecmascript)");
var _scrollHash2 = _interopRequireDefault(_scrollHash);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!_instanceof._(instance, Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && ((typeof call === "undefined" ? "undefined" : _type_of._(call)) === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _type_of._(superClass)));
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var protoTypes = {
    to: _propTypes2.default.string.isRequired,
    containerId: _propTypes2.default.string,
    container: _propTypes2.default.object,
    activeClass: _propTypes2.default.string,
    activeStyle: _propTypes2.default.object,
    spy: _propTypes2.default.bool,
    horizontal: _propTypes2.default.bool,
    smooth: _propTypes2.default.oneOfType([
        _propTypes2.default.bool,
        _propTypes2.default.string
    ]),
    offset: _propTypes2.default.number,
    delay: _propTypes2.default.number,
    isDynamic: _propTypes2.default.bool,
    onClick: _propTypes2.default.func,
    duration: _propTypes2.default.oneOfType([
        _propTypes2.default.number,
        _propTypes2.default.func
    ]),
    absolute: _propTypes2.default.bool,
    onSetActive: _propTypes2.default.func,
    onSetInactive: _propTypes2.default.func,
    ignoreCancelEvents: _propTypes2.default.bool,
    hashSpy: _propTypes2.default.bool,
    saveHashHistory: _propTypes2.default.bool,
    spyThrottle: _propTypes2.default.number
};
exports.default = function(Component, customScroller) {
    var scroller = customScroller || _scroller2.default;
    var Link = function(_React$PureComponent) {
        _inherits(Link, _React$PureComponent);
        function Link(props) {
            _classCallCheck(this, Link);
            var _this = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, props));
            _initialiseProps.call(_this);
            _this.state = {
                active: false
            };
            _this.beforeUnmountCallbacks = [];
            return _this;
        }
        _createClass(Link, [
            {
                key: "getScrollSpyContainer",
                value: function getScrollSpyContainer() {
                    var containerId = this.props.containerId;
                    var container = this.props.container;
                    if (containerId && !container) {
                        return document.getElementById(containerId);
                    }
                    if (container && container.nodeType) {
                        return container;
                    }
                    return document;
                }
            },
            {
                key: "componentDidMount",
                value: function componentDidMount() {
                    if (this.props.spy || this.props.hashSpy) {
                        var scrollSpyContainer = this.getScrollSpyContainer();
                        if (!_scrollSpy2.default.isMounted(scrollSpyContainer)) {
                            var fn = _scrollSpy2.default.mount(scrollSpyContainer, this.props.spyThrottle);
                            this.beforeUnmountCallbacks.push(fn);
                        }
                        if (this.props.hashSpy) {
                            if (!_scrollHash2.default.isMounted()) {
                                _scrollHash2.default.mount(scroller);
                            }
                            _scrollHash2.default.mapContainer(this.props.to, scrollSpyContainer);
                        }
                        _scrollSpy2.default.addSpyHandler(this.spyHandler, scrollSpyContainer);
                        this.setState({
                            container: scrollSpyContainer
                        });
                    }
                }
            },
            {
                key: "componentWillUnmount",
                value: function componentWillUnmount() {
                    _scrollSpy2.default.unmount(this.stateHandler, this.spyHandler);
                    this.beforeUnmountCallbacks.forEach(function(fn) {
                        return fn();
                    });
                }
            },
            {
                key: "render",
                value: function render() {
                    var className = "";
                    if (this.state && this.state.active) {
                        className = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim();
                    } else {
                        className = this.props.className;
                    }
                    var style = {};
                    if (this.state && this.state.active) {
                        style = _extends({}, this.props.style, this.props.activeStyle);
                    } else {
                        style = _extends({}, this.props.style);
                    }
                    var props = _extends({}, this.props);
                    for(var prop in protoTypes){
                        if (props.hasOwnProperty(prop)) {
                            delete props[prop];
                        }
                    }
                    props.className = className;
                    props.style = style;
                    props.onClick = this.handleClick;
                    return _react2.default.createElement(Component, props);
                }
            }
        ]);
        return Link;
    }(_react2.default.PureComponent);
    var _initialiseProps = function _initialiseProps() {
        var _this2 = this;
        this.scrollTo = function(to, props) {
            scroller.scrollTo(to, _extends({}, _this2.state, props));
        };
        this.handleClick = function(event) {
            /*
       * give the posibility to override onClick
       */ if (_this2.props.onClick) {
                _this2.props.onClick(event);
            }
            /*
       * dont bubble the navigation
       */ if (event.stopPropagation) event.stopPropagation();
            if (event.preventDefault) event.preventDefault();
            /*
       * do the magic!
       */ _this2.scrollTo(_this2.props.to, _this2.props);
        };
        this.spyHandler = function(x, y) {
            var scrollSpyContainer = _this2.getScrollSpyContainer();
            if (_scrollHash2.default.isMounted() && !_scrollHash2.default.isInitialized()) {
                return;
            }
            var horizontal = _this2.props.horizontal;
            var to = _this2.props.to;
            var element = null;
            var isInside = void 0;
            var isOutside = void 0;
            if (horizontal) {
                var elemLeftBound = 0;
                var elemRightBound = 0;
                var containerLeft = 0;
                if (scrollSpyContainer.getBoundingClientRect) {
                    var containerCords = scrollSpyContainer.getBoundingClientRect();
                    containerLeft = containerCords.left;
                }
                if (!element || _this2.props.isDynamic) {
                    element = scroller.get(to);
                    if (!element) {
                        return;
                    }
                    var cords = element.getBoundingClientRect();
                    elemLeftBound = cords.left - containerLeft + x;
                    elemRightBound = elemLeftBound + cords.width;
                }
                var offsetX = x - _this2.props.offset;
                isInside = offsetX >= Math.floor(elemLeftBound) && offsetX < Math.floor(elemRightBound);
                isOutside = offsetX < Math.floor(elemLeftBound) || offsetX >= Math.floor(elemRightBound);
            } else {
                var elemTopBound = 0;
                var elemBottomBound = 0;
                var containerTop = 0;
                if (scrollSpyContainer.getBoundingClientRect) {
                    var _containerCords = scrollSpyContainer.getBoundingClientRect();
                    containerTop = _containerCords.top;
                }
                if (!element || _this2.props.isDynamic) {
                    element = scroller.get(to);
                    if (!element) {
                        return;
                    }
                    var _cords = element.getBoundingClientRect();
                    elemTopBound = _cords.top - containerTop + y;
                    elemBottomBound = elemTopBound + _cords.height;
                }
                var offsetY = y - _this2.props.offset;
                isInside = offsetY >= Math.floor(elemTopBound) && offsetY < Math.floor(elemBottomBound);
                isOutside = offsetY < Math.floor(elemTopBound) || offsetY >= Math.floor(elemBottomBound);
            }
            var activeLink = scroller.getActiveLink();
            if (isOutside) {
                if (to === activeLink) {
                    scroller.setActiveLink(void 0);
                }
                if (_this2.props.hashSpy && _scrollHash2.default.getHash() === to) {
                    var _props$saveHashHistor = _this2.props.saveHashHistory, saveHashHistory = _props$saveHashHistor === undefined ? false : _props$saveHashHistor;
                    _scrollHash2.default.changeHash("", saveHashHistory);
                }
                if (_this2.props.spy && _this2.state.active) {
                    _this2.setState({
                        active: false
                    });
                    _this2.props.onSetInactive && _this2.props.onSetInactive(to, element);
                }
            }
            if (isInside && (activeLink !== to || _this2.state.active === false)) {
                scroller.setActiveLink(to);
                var _props$saveHashHistor2 = _this2.props.saveHashHistory, _saveHashHistory = _props$saveHashHistor2 === undefined ? false : _props$saveHashHistor2;
                _this2.props.hashSpy && _scrollHash2.default.changeHash(to, _saveHashHistory);
                if (_this2.props.spy) {
                    _this2.setState({
                        active: true
                    });
                    _this2.props.onSetActive && _this2.props.onSetActive(to, element);
                }
            }
        };
    };
    Link.propTypes = protoTypes;
    Link.defaultProps = {
        offset: 0
    };
    return Link;
};
}),
"[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/components/Link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _instanceof = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_instanceof.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _react = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _react2 = _interopRequireDefault(_react);
var _scrollLink = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/mixins/scroll-link.js [app-client] (ecmascript)");
var _scrollLink2 = _interopRequireDefault(_scrollLink);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!_instanceof._(instance, Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && ((typeof call === "undefined" ? "undefined" : _type_of._(call)) === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _type_of._(superClass)));
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var LinkElement = function(_React$Component) {
    _inherits(LinkElement, _React$Component);
    function LinkElement() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, LinkElement);
        for(var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LinkElement.__proto__ || Object.getPrototypeOf(LinkElement)).call.apply(_ref, [
            this
        ].concat(args))), _this), _this.render = function _ret() {
            return _react2.default.createElement('a', _this.props, _this.props.children);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    return LinkElement;
}(_react2.default.Component);
;
exports.default = (0, _scrollLink2.default)(LinkElement);
}),
"[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/components/Button.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _instanceof = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_instanceof.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var _react = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _react2 = _interopRequireDefault(_react);
var _scrollLink = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/mixins/scroll-link.js [app-client] (ecmascript)");
var _scrollLink2 = _interopRequireDefault(_scrollLink);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!_instanceof._(instance, Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && ((typeof call === "undefined" ? "undefined" : _type_of._(call)) === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _type_of._(superClass)));
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var ButtonElement = function(_React$Component) {
    _inherits(ButtonElement, _React$Component);
    function ButtonElement() {
        _classCallCheck(this, ButtonElement);
        return _possibleConstructorReturn(this, (ButtonElement.__proto__ || Object.getPrototypeOf(ButtonElement)).apply(this, arguments));
    }
    _createClass(ButtonElement, [
        {
            key: 'render',
            value: function render() {
                return _react2.default.createElement('button', this.props, this.props.children);
            }
        }
    ]);
    return ButtonElement;
}(_react2.default.Component);
;
exports.default = (0, _scrollLink2.default)(ButtonElement);
}),
"[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/mixins/scroll-element.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _instanceof = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_instanceof.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var _react = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _react2 = _interopRequireDefault(_react);
var _reactDom = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var _reactDom2 = _interopRequireDefault(_reactDom);
var _scroller = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/mixins/scroller.js [app-client] (ecmascript)");
var _scroller2 = _interopRequireDefault(_scroller);
var _propTypes = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/prop-types/index.js [app-client] (ecmascript)");
var _propTypes2 = _interopRequireDefault(_propTypes);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!_instanceof._(instance, Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && ((typeof call === "undefined" ? "undefined" : _type_of._(call)) === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _type_of._(superClass)));
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
exports.default = function(Component) {
    var Element = function(_React$Component) {
        _inherits(Element, _React$Component);
        function Element(props) {
            _classCallCheck(this, Element);
            var _this = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, props));
            _this.childBindings = {
                domNode: null
            };
            return _this;
        }
        _createClass(Element, [
            {
                key: 'componentDidMount',
                value: function componentDidMount() {
                    if (typeof window === 'undefined') {
                        return false;
                    }
                    this.registerElems(this.props.name);
                }
            },
            {
                key: 'componentDidUpdate',
                value: function componentDidUpdate(prevProps) {
                    if (this.props.name !== prevProps.name) {
                        this.registerElems(this.props.name);
                    }
                }
            },
            {
                key: 'componentWillUnmount',
                value: function componentWillUnmount() {
                    if (typeof window === 'undefined') {
                        return false;
                    }
                    _scroller2.default.unregister(this.props.name);
                }
            },
            {
                key: 'registerElems',
                value: function registerElems(name) {
                    _scroller2.default.register(name, this.childBindings.domNode);
                }
            },
            {
                key: 'render',
                value: function render() {
                    return _react2.default.createElement(Component, _extends({}, this.props, {
                        parentBindings: this.childBindings
                    }));
                }
            }
        ]);
        return Element;
    }(_react2.default.Component);
    ;
    Element.propTypes = {
        name: _propTypes2.default.string,
        id: _propTypes2.default.string
    };
    return Element;
};
}),
"[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/components/Element.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _instanceof = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_instanceof.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var _react = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _react2 = _interopRequireDefault(_react);
var _scrollElement = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/mixins/scroll-element.js [app-client] (ecmascript)");
var _scrollElement2 = _interopRequireDefault(_scrollElement);
var _propTypes = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/prop-types/index.js [app-client] (ecmascript)");
var _propTypes2 = _interopRequireDefault(_propTypes);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!_instanceof._(instance, Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && ((typeof call === "undefined" ? "undefined" : _type_of._(call)) === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _type_of._(superClass)));
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var ElementWrapper = function(_React$Component) {
    _inherits(ElementWrapper, _React$Component);
    function ElementWrapper() {
        _classCallCheck(this, ElementWrapper);
        return _possibleConstructorReturn(this, (ElementWrapper.__proto__ || Object.getPrototypeOf(ElementWrapper)).apply(this, arguments));
    }
    _createClass(ElementWrapper, [
        {
            key: 'render',
            value: function render() {
                var _this2 = this;
                // Remove `parentBindings` and `name` from props
                var newProps = _extends({}, this.props);
                delete newProps.name;
                if (newProps.parentBindings) {
                    delete newProps.parentBindings;
                }
                return _react2.default.createElement('div', _extends({}, newProps, {
                    ref: function ref(el) {
                        _this2.props.parentBindings.domNode = el;
                    }
                }), this.props.children);
            }
        }
    ]);
    return ElementWrapper;
}(_react2.default.Component);
;
ElementWrapper.propTypes = {
    name: _propTypes2.default.string,
    id: _propTypes2.default.string
};
exports.default = (0, _scrollElement2.default)(ElementWrapper);
}),
"[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/mixins/Helpers.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _instanceof = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_instanceof.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
/* DEPRECATED */ var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
function _classCallCheck(instance, Constructor) {
    if (!_instanceof._(instance, Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && ((typeof call === "undefined" ? "undefined" : _type_of._(call)) === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _type_of._(superClass)));
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var React = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var ReactDOM = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var utils = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/mixins/utils.js [app-client] (ecmascript)");
var scrollSpy = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/mixins/scroll-spy.js [app-client] (ecmascript)");
var defaultScroller = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/mixins/scroller.js [app-client] (ecmascript)");
var PropTypes = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/prop-types/index.js [app-client] (ecmascript)");
var scrollHash = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/mixins/scroll-hash.js [app-client] (ecmascript)");
var protoTypes = {
    to: PropTypes.string.isRequired,
    containerId: PropTypes.string,
    container: PropTypes.object,
    activeClass: PropTypes.string,
    spy: PropTypes.bool,
    smooth: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string
    ]),
    offset: PropTypes.number,
    delay: PropTypes.number,
    isDynamic: PropTypes.bool,
    onClick: PropTypes.func,
    duration: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.func
    ]),
    absolute: PropTypes.bool,
    onSetActive: PropTypes.func,
    onSetInactive: PropTypes.func,
    ignoreCancelEvents: PropTypes.bool,
    hashSpy: PropTypes.bool,
    spyThrottle: PropTypes.number
};
var Helpers = {
    Scroll: function Scroll(Component, customScroller) {
        console.warn("Helpers.Scroll is deprecated since v1.7.0");
        var scroller = customScroller || defaultScroller;
        var Scroll = function(_React$Component) {
            _inherits(Scroll, _React$Component);
            function Scroll(props) {
                _classCallCheck(this, Scroll);
                var _this = _possibleConstructorReturn(this, (Scroll.__proto__ || Object.getPrototypeOf(Scroll)).call(this, props));
                _initialiseProps.call(_this);
                _this.state = {
                    active: false
                };
                return _this;
            }
            _createClass(Scroll, [
                {
                    key: 'getScrollSpyContainer',
                    value: function getScrollSpyContainer() {
                        var containerId = this.props.containerId;
                        var container = this.props.container;
                        if (containerId) {
                            return document.getElementById(containerId);
                        }
                        if (container && container.nodeType) {
                            return container;
                        }
                        return document;
                    }
                },
                {
                    key: 'componentDidMount',
                    value: function componentDidMount() {
                        if (this.props.spy || this.props.hashSpy) {
                            var scrollSpyContainer = this.getScrollSpyContainer();
                            if (!scrollSpy.isMounted(scrollSpyContainer)) {
                                scrollSpy.mount(scrollSpyContainer, this.props.spyThrottle);
                            }
                            if (this.props.hashSpy) {
                                if (!scrollHash.isMounted()) {
                                    scrollHash.mount(scroller);
                                }
                                scrollHash.mapContainer(this.props.to, scrollSpyContainer);
                            }
                            if (this.props.spy) {
                                scrollSpy.addStateHandler(this.stateHandler);
                            }
                            scrollSpy.addSpyHandler(this.spyHandler, scrollSpyContainer);
                            this.setState({
                                container: scrollSpyContainer
                            });
                        }
                    }
                },
                {
                    key: 'componentWillUnmount',
                    value: function componentWillUnmount() {
                        scrollSpy.unmount(this.stateHandler, this.spyHandler);
                    }
                },
                {
                    key: 'render',
                    value: function render() {
                        var className = "";
                        if (this.state && this.state.active) {
                            className = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim();
                        } else {
                            className = this.props.className;
                        }
                        var props = _extends({}, this.props);
                        for(var prop in protoTypes){
                            if (props.hasOwnProperty(prop)) {
                                delete props[prop];
                            }
                        }
                        props.className = className;
                        props.onClick = this.handleClick;
                        return React.createElement(Component, props);
                    }
                }
            ]);
            return Scroll;
        }(React.Component);
        var _initialiseProps = function _initialiseProps() {
            var _this2 = this;
            this.scrollTo = function(to, props) {
                scroller.scrollTo(to, _extends({}, _this2.state, props));
            };
            this.handleClick = function(event) {
                /*
         * give the posibility to override onClick
         */ if (_this2.props.onClick) {
                    _this2.props.onClick(event);
                }
                /*
         * dont bubble the navigation
         */ if (event.stopPropagation) event.stopPropagation();
                if (event.preventDefault) event.preventDefault();
                /*
         * do the magic!
         */ _this2.scrollTo(_this2.props.to, _this2.props);
            };
            this.stateHandler = function() {
                if (scroller.getActiveLink() !== _this2.props.to) {
                    if (_this2.state !== null && _this2.state.active && _this2.props.onSetInactive) {
                        _this2.props.onSetInactive();
                    }
                    _this2.setState({
                        active: false
                    });
                }
            };
            this.spyHandler = function(y) {
                var scrollSpyContainer = _this2.getScrollSpyContainer();
                if (scrollHash.isMounted() && !scrollHash.isInitialized()) {
                    return;
                }
                var to = _this2.props.to;
                var element = null;
                var elemTopBound = 0;
                var elemBottomBound = 0;
                var containerTop = 0;
                if (scrollSpyContainer.getBoundingClientRect) {
                    var containerCords = scrollSpyContainer.getBoundingClientRect();
                    containerTop = containerCords.top;
                }
                if (!element || _this2.props.isDynamic) {
                    element = scroller.get(to);
                    if (!element) {
                        return;
                    }
                    var cords = element.getBoundingClientRect();
                    elemTopBound = cords.top - containerTop + y;
                    elemBottomBound = elemTopBound + cords.height;
                }
                var offsetY = y - _this2.props.offset;
                var isInside = offsetY >= Math.floor(elemTopBound) && offsetY < Math.floor(elemBottomBound);
                var isOutside = offsetY < Math.floor(elemTopBound) || offsetY >= Math.floor(elemBottomBound);
                var activeLink = scroller.getActiveLink();
                if (isOutside) {
                    if (to === activeLink) {
                        scroller.setActiveLink(void 0);
                    }
                    if (_this2.props.hashSpy && scrollHash.getHash() === to) {
                        scrollHash.changeHash();
                    }
                    if (_this2.props.spy && _this2.state.active) {
                        _this2.setState({
                            active: false
                        });
                        _this2.props.onSetInactive && _this2.props.onSetInactive();
                    }
                    return scrollSpy.updateStates();
                }
                if (isInside && activeLink !== to) {
                    scroller.setActiveLink(to);
                    _this2.props.hashSpy && scrollHash.changeHash(to);
                    if (_this2.props.spy) {
                        _this2.setState({
                            active: true
                        });
                        _this2.props.onSetActive && _this2.props.onSetActive(to);
                    }
                    return scrollSpy.updateStates();
                }
            };
        };
        ;
        Scroll.propTypes = protoTypes;
        Scroll.defaultProps = {
            offset: 0
        };
        return Scroll;
    },
    Element: function Element(Component) {
        console.warn("Helpers.Element is deprecated since v1.7.0");
        var Element = function(_React$Component2) {
            _inherits(Element, _React$Component2);
            function Element(props) {
                _classCallCheck(this, Element);
                var _this3 = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, props));
                _this3.childBindings = {
                    domNode: null
                };
                return _this3;
            }
            _createClass(Element, [
                {
                    key: 'componentDidMount',
                    value: function componentDidMount() {
                        if (typeof window === 'undefined') {
                            return false;
                        }
                        this.registerElems(this.props.name);
                    }
                },
                {
                    key: 'componentDidUpdate',
                    value: function componentDidUpdate(prevProps) {
                        if (this.props.name !== prevProps.name) {
                            this.registerElems(this.props.name);
                        }
                    }
                },
                {
                    key: 'componentWillUnmount',
                    value: function componentWillUnmount() {
                        if (typeof window === 'undefined') {
                            return false;
                        }
                        defaultScroller.unregister(this.props.name);
                    }
                },
                {
                    key: 'registerElems',
                    value: function registerElems(name) {
                        defaultScroller.register(name, this.childBindings.domNode);
                    }
                },
                {
                    key: 'render',
                    value: function render() {
                        return React.createElement(Component, _extends({}, this.props, {
                            parentBindings: this.childBindings
                        }));
                    }
                }
            ]);
            return Element;
        }(React.Component);
        ;
        Element.propTypes = {
            name: PropTypes.string,
            id: PropTypes.string
        };
        return Element;
    }
};
module.exports = Helpers;
}),
"[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Helpers = exports.ScrollElement = exports.ScrollLink = exports.animateScroll = exports.scrollSpy = exports.Events = exports.scroller = exports.Element = exports.Button = exports.Link = undefined;
var _Link = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/components/Link.js [app-client] (ecmascript)");
var _Link2 = _interopRequireDefault(_Link);
var _Button = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/components/Button.js [app-client] (ecmascript)");
var _Button2 = _interopRequireDefault(_Button);
var _Element = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/components/Element.js [app-client] (ecmascript)");
var _Element2 = _interopRequireDefault(_Element);
var _scroller = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/mixins/scroller.js [app-client] (ecmascript)");
var _scroller2 = _interopRequireDefault(_scroller);
var _scrollEvents = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/mixins/scroll-events.js [app-client] (ecmascript)");
var _scrollEvents2 = _interopRequireDefault(_scrollEvents);
var _scrollSpy = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/mixins/scroll-spy.js [app-client] (ecmascript)");
var _scrollSpy2 = _interopRequireDefault(_scrollSpy);
var _animateScroll = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/mixins/animate-scroll.js [app-client] (ecmascript)");
var _animateScroll2 = _interopRequireDefault(_animateScroll);
var _scrollLink = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/mixins/scroll-link.js [app-client] (ecmascript)");
var _scrollLink2 = _interopRequireDefault(_scrollLink);
var _scrollElement = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/mixins/scroll-element.js [app-client] (ecmascript)");
var _scrollElement2 = _interopRequireDefault(_scrollElement);
var _Helpers = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/react-scroll/modules/mixins/Helpers.js [app-client] (ecmascript)");
var _Helpers2 = _interopRequireDefault(_Helpers);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports.Link = _Link2.default;
exports.Button = _Button2.default;
exports.Element = _Element2.default;
exports.scroller = _scroller2.default;
exports.Events = _scrollEvents2.default;
exports.scrollSpy = _scrollSpy2.default;
exports.animateScroll = _animateScroll2.default;
exports.ScrollLink = _scrollLink2.default;
exports.ScrollElement = _scrollElement2.default;
exports.Helpers = _Helpers2.default;
exports.default = {
    Link: _Link2.default,
    Button: _Button2.default,
    Element: _Element2.default,
    scroller: _scroller2.default,
    Events: _scrollEvents2.default,
    scrollSpy: _scrollSpy2.default,
    animateScroll: _animateScroll2.default,
    ScrollLink: _scrollLink2.default,
    ScrollElement: _scrollElement2.default,
    Helpers: _Helpers2.default
};
}),
"[project]/dev/portfolio-2.1/node_modules/react-is/cjs/react-is.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
var _type_of = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.
        var hasSymbol = typeof Symbol === 'function' && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
        // (unstable) APIs that have been removed. Can we remove the symbols?
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
        function isValidElementType(type) {
            return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || (typeof type === "undefined" ? "undefined" : _type_of._(type)) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
            if ((typeof object === "undefined" ? "undefined" : _type_of._(object)) === 'object' && object !== null) {
                var $$typeof = object.$$typeof;
                switch($$typeof){
                    case REACT_ELEMENT_TYPE:
                        var type = object.type;
                        switch(type){
                            case REACT_ASYNC_MODE_TYPE:
                            case REACT_CONCURRENT_MODE_TYPE:
                            case REACT_FRAGMENT_TYPE:
                            case REACT_PROFILER_TYPE:
                            case REACT_STRICT_MODE_TYPE:
                            case REACT_SUSPENSE_TYPE:
                                return type;
                            default:
                                var $$typeofType = type && type.$$typeof;
                                switch($$typeofType){
                                    case REACT_CONTEXT_TYPE:
                                    case REACT_FORWARD_REF_TYPE:
                                    case REACT_LAZY_TYPE:
                                    case REACT_MEMO_TYPE:
                                    case REACT_PROVIDER_TYPE:
                                        return $$typeofType;
                                    default:
                                        return $$typeof;
                                }
                        }
                    case REACT_PORTAL_TYPE:
                        return $$typeof;
                }
            }
            return undefined;
        } // AsyncMode is deprecated along with isAsyncMode
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated
        function isAsyncMode(object) {
            {
                if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                    hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint
                    console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
                }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
            return (typeof object === "undefined" ? "undefined" : _type_of._(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
    })();
}
}),
"[project]/dev/portfolio-2.1/node_modules/react-is/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/react-is/cjs/react-is.development.js [app-client] (ecmascript)");
}
}),
"[project]/dev/portfolio-2.1/node_modules/react-redux/node_modules/react-is/cjs/react-is.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
var _type_of = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        // ATTENTION
        // When adding new symbols to this file,
        // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
        // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.
        var REACT_ELEMENT_TYPE = 0xeac7;
        var REACT_PORTAL_TYPE = 0xeaca;
        var REACT_FRAGMENT_TYPE = 0xeacb;
        var REACT_STRICT_MODE_TYPE = 0xeacc;
        var REACT_PROFILER_TYPE = 0xead2;
        var REACT_PROVIDER_TYPE = 0xeacd;
        var REACT_CONTEXT_TYPE = 0xeace;
        var REACT_FORWARD_REF_TYPE = 0xead0;
        var REACT_SUSPENSE_TYPE = 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = 0xead8;
        var REACT_MEMO_TYPE = 0xead3;
        var REACT_LAZY_TYPE = 0xead4;
        var REACT_BLOCK_TYPE = 0xead9;
        var REACT_SERVER_BLOCK_TYPE = 0xeada;
        var REACT_FUNDAMENTAL_TYPE = 0xead5;
        var REACT_SCOPE_TYPE = 0xead7;
        var REACT_OPAQUE_ID_TYPE = 0xeae0;
        var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
        var REACT_OFFSCREEN_TYPE = 0xeae2;
        var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;
        if (typeof Symbol === 'function' && Symbol.for) {
            var symbolFor = Symbol.for;
            REACT_ELEMENT_TYPE = symbolFor('react.element');
            REACT_PORTAL_TYPE = symbolFor('react.portal');
            REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
            REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
            REACT_PROFILER_TYPE = symbolFor('react.profiler');
            REACT_PROVIDER_TYPE = symbolFor('react.provider');
            REACT_CONTEXT_TYPE = symbolFor('react.context');
            REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
            REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
            REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
            REACT_MEMO_TYPE = symbolFor('react.memo');
            REACT_LAZY_TYPE = symbolFor('react.lazy');
            REACT_BLOCK_TYPE = symbolFor('react.block');
            REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
            REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
            REACT_SCOPE_TYPE = symbolFor('react.scope');
            REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
            REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
            REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
            REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
        }
        // Filter certain DOM attributes (e.g. src, href) if their values are empty strings.
        var enableScopeAPI = false; // Experimental Create Event Handle API.
        function isValidElementType(type) {
            if (typeof type === 'string' || typeof type === 'function') {
                return true;
            } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).
            if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
                return true;
            }
            if ((typeof type === "undefined" ? "undefined" : _type_of._(type)) === 'object' && type !== null) {
                if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
                    return true;
                }
            }
            return false;
        }
        function typeOf(object) {
            if ((typeof object === "undefined" ? "undefined" : _type_of._(object)) === 'object' && object !== null) {
                var $$typeof = object.$$typeof;
                switch($$typeof){
                    case REACT_ELEMENT_TYPE:
                        var type = object.type;
                        switch(type){
                            case REACT_FRAGMENT_TYPE:
                            case REACT_PROFILER_TYPE:
                            case REACT_STRICT_MODE_TYPE:
                            case REACT_SUSPENSE_TYPE:
                            case REACT_SUSPENSE_LIST_TYPE:
                                return type;
                            default:
                                var $$typeofType = type && type.$$typeof;
                                switch($$typeofType){
                                    case REACT_CONTEXT_TYPE:
                                    case REACT_FORWARD_REF_TYPE:
                                    case REACT_LAZY_TYPE:
                                    case REACT_MEMO_TYPE:
                                    case REACT_PROVIDER_TYPE:
                                        return $$typeofType;
                                    default:
                                        return $$typeof;
                                }
                        }
                    case REACT_PORTAL_TYPE:
                        return $$typeof;
                }
            }
            return undefined;
        }
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated
        function isAsyncMode(object) {
            {
                if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                    hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint
                    console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
                }
            }
            return false;
        }
        function isConcurrentMode(object) {
            {
                if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
                    hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint
                    console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
                }
            }
            return false;
        }
        function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
            return (typeof object === "undefined" ? "undefined" : _type_of._(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
    })();
}
}),
"[project]/dev/portfolio-2.1/node_modules/react-redux/node_modules/react-is/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/react-redux/node_modules/react-is/cjs/react-is.development.js [app-client] (ecmascript)");
}
}),
"[project]/dev/portfolio-2.1/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;
}),
"[project]/dev/portfolio-2.1/node_modules/prop-types/lib/has.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
}),
"[project]/dev/portfolio-2.1/node_modules/prop-types/checkPropTypes.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
var _instanceof = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_instanceof.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
var printWarning = function printWarning() {};
if ("TURBOPACK compile-time truthy", 1) {
    var ReactPropTypesSecret = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-client] (ecmascript)");
    var loggedTypeFailures = {};
    var has = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/prop-types/lib/has.js [app-client] (ecmascript)");
    printWarning = function printWarning(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */ function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if ("TURBOPACK compile-time truthy", 1) {
        for(var typeSpecName in typeSpecs){
            if (has(typeSpecs, typeSpecName)) {
                var error;
                // Prop type validation may throw. In case they do, we don't want to
                // fail the render phase where it didn't fail before. So we log it.
                // After these have been cleaned up, we'll let them throw.
                try {
                    // This is intentionally an invariant that gets caught. It's the same
                    // behavior as without this statement except with a better message.
                    if (typeof typeSpecs[typeSpecName] !== 'function') {
                        var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _type_of._(typeSpecs[typeSpecName]) + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                        err.name = 'Invariant Violation';
                        throw err;
                    }
                    error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
                } catch (ex) {
                    error = ex;
                }
                if (error && !_instanceof._(error, Error)) {
                    printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + (typeof error === "undefined" ? "undefined" : _type_of._(error)) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
                }
                if (_instanceof._(error, Error) && !(error.message in loggedTypeFailures)) {
                    // Only monitor this failure once because there tends to be a lot of the
                    // same error.
                    loggedTypeFailures[error.message] = true;
                    var stack = getStack ? getStack() : '';
                    printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
                }
            }
        }
    }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */ checkPropTypes.resetWarningCache = function() {
    if (("TURBOPACK compile-time value", "development") !== 'production') {
        loggedTypeFailures = {};
    }
};
module.exports = checkPropTypes;
}),
"[project]/dev/portfolio-2.1/node_modules/prop-types/factoryWithTypeCheckers.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
var _instanceof = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_instanceof.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
var ReactIs = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/react-is/index.js [app-client] (ecmascript)");
var assign = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/next/dist/build/polyfills/object-assign.js [app-client] (ecmascript)");
var ReactPropTypesSecret = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-client] (ecmascript)");
var has = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/prop-types/lib/has.js [app-client] (ecmascript)");
var checkPropTypes = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/prop-types/checkPropTypes.js [app-client] (ecmascript)");
var printWarning = function printWarning() {};
if ("TURBOPACK compile-time truthy", 1) {
    printWarning = function printWarning(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
}
function emptyFunctionThatReturnsNull() {
    return null;
}
module.exports = function(isValidElement, throwOnDirectAccess) {
    /* global Symbol */ var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
    /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */ function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === 'function') {
            return iteratorFn;
        }
    }
    /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */ var ANONYMOUS = '<<anonymous>>';
    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
        array: createPrimitiveTypeChecker('array'),
        bigint: createPrimitiveTypeChecker('bigint'),
        bool: createPrimitiveTypeChecker('boolean'),
        func: createPrimitiveTypeChecker('function'),
        number: createPrimitiveTypeChecker('number'),
        object: createPrimitiveTypeChecker('object'),
        string: createPrimitiveTypeChecker('string'),
        symbol: createPrimitiveTypeChecker('symbol'),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
    };
    /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */ /*eslint-disable no-self-compare*/ function is(x, y) {
        // SameValue algorithm
        if (x === y) {
            // Steps 1-5, 7-10
            // Steps 6.b-6.e: +0 != -0
            return x !== 0 || 1 / x === 1 / y;
        } else {
            // Step 6.a: NaN == NaN
            return x !== x && y !== y;
        }
    }
    /*eslint-enable no-self-compare*/ /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */ function PropTypeError(message, data) {
        this.message = message;
        this.data = data && (typeof data === "undefined" ? "undefined" : _type_of._(data)) === 'object' ? data : {};
        this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;
    function createChainableTypeChecker(validate) {
        if (("TURBOPACK compile-time value", "development") !== 'production') {
            var manualPropTypeCallCache = {};
            var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;
            if (secret !== ReactPropTypesSecret) {
                if (throwOnDirectAccess) {
                    // New behavior only for users of `prop-types` package
                    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
                    err.name = 'Invariant Violation';
                    throw err;
                } else if (("TURBOPACK compile-time value", "development") !== 'production' && typeof console !== 'undefined') {
                    // Old behavior for people using React.PropTypes
                    var cacheKey = componentName + ':' + propName;
                    if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
                    manualPropTypeWarningCount < 3) {
                        printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
                        manualPropTypeCallCache[cacheKey] = true;
                        manualPropTypeWarningCount++;
                    }
                }
            }
            if (props[propName] == null) {
                if (isRequired) {
                    if (props[propName] === null) {
                        return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
                    }
                    return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
                }
                return null;
            } else {
                return validate(props, propName, componentName, location, propFullName);
            }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
    }
    function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== expectedType) {
                // `propValue` being instance of, say, date/regexp, pass the 'object'
                // check, but we can offer a more precise error message here rather than
                // 'of type `object`'.
                var preciseType = getPreciseType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
                    expectedType: expectedType
                });
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }
    function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
            }
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
            }
            for(var i = 0; i < propValue.length; i++){
                var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
                if (_instanceof._(error, Error)) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!isValidElement(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!ReactIs.isValidElementType(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
            if (!_instanceof._(props[propName], expectedClass)) {
                var expectedClassName = expectedClass.name || ANONYMOUS;
                var actualClassName = getClassName(props[propName]);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (arguments.length > 1) {
                    printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
                } else {
                    printWarning('Invalid argument supplied to oneOf, expected an array.');
                }
            }
            return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for(var i = 0; i < expectedValues.length; i++){
                if (is(propValue, expectedValues[i])) {
                    return null;
                }
            }
            var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
                var type = getPreciseType(value);
                if (type === 'symbol') {
                    return String(value);
                }
                return value;
            });
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
            }
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
            }
            for(var key in propValue){
                if (has(propValue, key)) {
                    var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                    if (_instanceof._(error, Error)) {
                        return error;
                    }
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
            ("TURBOPACK compile-time truthy", 1) ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : "TURBOPACK unreachable";
            return emptyFunctionThatReturnsNull;
        }
        for(var i = 0; i < arrayOfTypeCheckers.length; i++){
            var checker = arrayOfTypeCheckers[i];
            if (typeof checker !== 'function') {
                printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
                return emptyFunctionThatReturnsNull;
            }
        }
        function validate(props, propName, componentName, location, propFullName) {
            var expectedTypes = [];
            for(var i = 0; i < arrayOfTypeCheckers.length; i++){
                var checker = arrayOfTypeCheckers[i];
                var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
                if (checkerResult == null) {
                    return null;
                }
                if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
                    expectedTypes.push(checkerResult.data.expectedType);
                }
            }
            var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
    }
    function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            for(var key in shapeTypes){
                var checker = shapeTypes[key];
                if (typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            // We need to check all keys in case some are required but missing from props.
            var allKeys = assign({}, props[propName], shapeTypes);
            for(var key in allKeys){
                var checker = shapeTypes[key];
                if (has(shapeTypes, key) && typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                if (!checker) {
                    return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function isNode(propValue) {
        switch(typeof propValue === "undefined" ? "undefined" : _type_of._(propValue)){
            case 'number':
            case 'string':
            case 'undefined':
                return true;
            case 'boolean':
                return !propValue;
            case 'object':
                if (Array.isArray(propValue)) {
                    return propValue.every(isNode);
                }
                if (propValue === null || isValidElement(propValue)) {
                    return true;
                }
                var iteratorFn = getIteratorFn(propValue);
                if (iteratorFn) {
                    var iterator = iteratorFn.call(propValue);
                    var step;
                    if (iteratorFn !== propValue.entries) {
                        while(!(step = iterator.next()).done){
                            if (!isNode(step.value)) {
                                return false;
                            }
                        }
                    } else {
                        // Iterator will provide entry [k,v] tuples rather than values.
                        while(!(step = iterator.next()).done){
                            var entry = step.value;
                            if (entry) {
                                if (!isNode(entry[1])) {
                                    return false;
                                }
                            }
                        }
                    }
                } else {
                    return false;
                }
                return true;
            default:
                return false;
        }
    }
    function isSymbol(propType, propValue) {
        // Native Symbol.
        if (propType === 'symbol') {
            return true;
        }
        // falsy value can't be a Symbol
        if (!propValue) {
            return false;
        }
        // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
        if (propValue['@@toStringTag'] === 'Symbol') {
            return true;
        }
        // Fallback for non-spec compliant Symbols which are polyfilled.
        if (typeof Symbol === 'function' && _instanceof._(propValue, Symbol)) {
            return true;
        }
        return false;
    }
    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
        var propType = typeof propValue === "undefined" ? "undefined" : _type_of._(propValue);
        if (Array.isArray(propValue)) {
            return 'array';
        }
        if (_instanceof._(propValue, RegExp)) {
            // Old webkits (at least until Android 4.0) return 'function' rather than
            // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
            // passes PropTypes.object.
            return 'object';
        }
        if (isSymbol(propType, propValue)) {
            return 'symbol';
        }
        return propType;
    }
    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
        if (typeof propValue === 'undefined' || propValue === null) {
            return '' + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === 'object') {
            if (_instanceof._(propValue, Date)) {
                return 'date';
            } else if (_instanceof._(propValue, RegExp)) {
                return 'regexp';
            }
        }
        return propType;
    }
    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch(type){
            case 'array':
            case 'object':
                return 'an ' + type;
            case 'boolean':
            case 'date':
            case 'regexp':
                return 'a ' + type;
            default:
                return type;
        }
    }
    // Returns class name of the object, if any.
    function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
        }
        return propValue.constructor.name;
    }
    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
};
}),
"[project]/dev/portfolio-2.1/node_modules/prop-types/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ if ("TURBOPACK compile-time truthy", 1) {
    var ReactIs = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/react-is/index.js [app-client] (ecmascript)");
    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/prop-types/factoryWithTypeCheckers.js [app-client] (ecmascript)")(ReactIs.isElement, throwOnDirectAccess);
} else //TURBOPACK unreachable
;
}),
"[project]/dev/portfolio-2.1/node_modules/axios/lib/cancel/Cancel.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */ function Cancel(message) {
    this.message = message;
}
Cancel.prototype.toString = function toString() {
    return 'Cancel' + (this.message ? ': ' + this.message : '');
};
Cancel.prototype.__CANCEL__ = true;
module.exports = Cancel;
}),
"[project]/dev/portfolio-2.1/node_modules/axios/lib/cancel/CancelToken.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var Cancel = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/cancel/Cancel.js [app-client] (ecmascript)");
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */ function CancelToken(executor) {
    if (typeof executor !== 'function') {
        throw new TypeError('executor must be a function.');
    }
    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
    });
    var token = this;
    // eslint-disable-next-line func-names
    this.promise.then(function(cancel) {
        if (!token._listeners) return;
        var i;
        var l = token._listeners.length;
        for(i = 0; i < l; i++){
            token._listeners[i](cancel);
        }
        token._listeners = null;
    });
    // eslint-disable-next-line func-names
    this.promise.then = function(onfulfilled) {
        var _resolve;
        // eslint-disable-next-line func-names
        var promise = new Promise(function(resolve) {
            token.subscribe(resolve);
            _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
            token.unsubscribe(_resolve);
        };
        return promise;
    };
    executor(function cancel(message) {
        if (token.reason) {
            // Cancellation has already been requested
            return;
        }
        token.reason = new Cancel(message);
        resolvePromise(token.reason);
    });
}
/**
 * Throws a `Cancel` if cancellation has been requested.
 */ CancelToken.prototype.throwIfRequested = function throwIfRequested() {
    if (this.reason) {
        throw this.reason;
    }
};
/**
 * Subscribe to the cancel signal
 */ CancelToken.prototype.subscribe = function subscribe(listener) {
    if (this.reason) {
        listener(this.reason);
        return;
    }
    if (this._listeners) {
        this._listeners.push(listener);
    } else {
        this._listeners = [
            listener
        ];
    }
};
/**
 * Unsubscribe from the cancel signal
 */ CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
    if (!this._listeners) {
        return;
    }
    var index = this._listeners.indexOf(listener);
    if (index !== -1) {
        this._listeners.splice(index, 1);
    }
};
/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */ CancelToken.source = function source() {
    var cancel;
    var token = new CancelToken(function executor(c) {
        cancel = c;
    });
    return {
        token: token,
        cancel: cancel
    };
};
module.exports = CancelToken;
}),
"[project]/dev/portfolio-2.1/node_modules/axios/lib/cancel/isCancel.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = function isCancel(value) {
    return !!(value && value.__CANCEL__);
};
}),
"[project]/dev/portfolio-2.1/node_modules/axios/lib/env/data.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "version": "0.26.1"
};
}),
"[project]/dev/portfolio-2.1/node_modules/axios/lib/helpers/spread.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */ module.exports = function spread(callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
};
}),
"[project]/dev/portfolio-2.1/node_modules/axios/lib/helpers/bind.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = function bind(fn, thisArg) {
    return function wrap() {
        var args = new Array(arguments.length);
        for(var i = 0; i < args.length; i++){
            args[i] = arguments[i];
        }
        return fn.apply(thisArg, args);
    };
};
}),
"[project]/dev/portfolio-2.1/node_modules/axios/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
var bind = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/helpers/bind.js [app-client] (ecmascript)");
// utils is a library of generic helper functions non-specific to axios
var toString = Object.prototype.toString;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */ function isArray(val) {
    return Array.isArray(val);
}
/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */ function isUndefined(val) {
    return typeof val === 'undefined';
}
/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */ function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */ function isArrayBuffer(val) {
    return toString.call(val) === '[object ArrayBuffer]';
}
/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */ function isFormData(val) {
    return toString.call(val) === '[object FormData]';
}
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */ function isArrayBufferView(val) {
    var result;
    if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
        result = ArrayBuffer.isView(val);
    } else {
        result = val && val.buffer && isArrayBuffer(val.buffer);
    }
    return result;
}
/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */ function isString(val) {
    return typeof val === 'string';
}
/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */ function isNumber(val) {
    return typeof val === 'number';
}
/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */ function isObject(val) {
    return val !== null && (typeof val === "undefined" ? "undefined" : _type_of._(val)) === 'object';
}
/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */ function isPlainObject(val) {
    if (toString.call(val) !== '[object Object]') {
        return false;
    }
    var prototype = Object.getPrototypeOf(val);
    return prototype === null || prototype === Object.prototype;
}
/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */ function isDate(val) {
    return toString.call(val) === '[object Date]';
}
/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */ function isFile(val) {
    return toString.call(val) === '[object File]';
}
/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */ function isBlob(val) {
    return toString.call(val) === '[object Blob]';
}
/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */ function isFunction(val) {
    return toString.call(val) === '[object Function]';
}
/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */ function isStream(val) {
    return isObject(val) && isFunction(val.pipe);
}
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */ function isURLSearchParams(val) {
    return toString.call(val) === '[object URLSearchParams]';
}
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */ function trim(str) {
    return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */ function isStandardBrowserEnv() {
    if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' || navigator.product === 'NativeScript' || navigator.product === 'NS')) {
        return false;
    }
    return typeof window !== 'undefined' && typeof document !== 'undefined';
}
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */ function forEach(obj, fn) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') {
        return;
    }
    // Force an array if not already something iterable
    if ((typeof obj === "undefined" ? "undefined" : _type_of._(obj)) !== 'object') {
        /*eslint no-param-reassign:0*/ obj = [
            obj
        ];
    }
    if (isArray(obj)) {
        // Iterate over array values
        for(var i = 0, l = obj.length; i < l; i++){
            fn.call(null, obj[i], i, obj);
        }
    } else {
        // Iterate over object keys
        for(var key in obj){
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                fn.call(null, obj[key], key, obj);
            }
        }
    }
}
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */ function merge() {
    var result = {};
    function assignValue(val, key) {
        if (isPlainObject(result[key]) && isPlainObject(val)) {
            result[key] = merge(result[key], val);
        } else if (isPlainObject(val)) {
            result[key] = merge({}, val);
        } else if (isArray(val)) {
            result[key] = val.slice();
        } else {
            result[key] = val;
        }
    }
    for(var i = 0, l = arguments.length; i < l; i++){
        forEach(arguments[i], assignValue);
    }
    return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */ function extend(a, b, thisArg) {
    forEach(b, function assignValue(val, key) {
        if (thisArg && typeof val === 'function') {
            a[key] = bind(val, thisArg);
        } else {
            a[key] = val;
        }
    });
    return a;
}
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */ function stripBOM(content) {
    if (content.charCodeAt(0) === 0xFEFF) {
        content = content.slice(1);
    }
    return content;
}
module.exports = {
    isArray: isArray,
    isArrayBuffer: isArrayBuffer,
    isBuffer: isBuffer,
    isFormData: isFormData,
    isArrayBufferView: isArrayBufferView,
    isString: isString,
    isNumber: isNumber,
    isObject: isObject,
    isPlainObject: isPlainObject,
    isUndefined: isUndefined,
    isDate: isDate,
    isFile: isFile,
    isBlob: isBlob,
    isFunction: isFunction,
    isStream: isStream,
    isURLSearchParams: isURLSearchParams,
    isStandardBrowserEnv: isStandardBrowserEnv,
    forEach: forEach,
    merge: merge,
    extend: extend,
    trim: trim,
    stripBOM: stripBOM
};
}),
"[project]/dev/portfolio-2.1/node_modules/axios/lib/helpers/isAxiosError.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */ module.exports = function isAxiosError(payload) {
    return utils.isObject(payload) && payload.isAxiosError === true;
};
}),
"[project]/dev/portfolio-2.1/node_modules/axios/lib/helpers/buildURL.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}
/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */ module.exports = function buildURL(url, params, paramsSerializer) {
    /*eslint no-param-reassign:0*/ if (!params) {
        return url;
    }
    var serializedParams;
    if (paramsSerializer) {
        serializedParams = paramsSerializer(params);
    } else if (utils.isURLSearchParams(params)) {
        serializedParams = params.toString();
    } else {
        var parts = [];
        utils.forEach(params, function serialize(val, key) {
            if (val === null || typeof val === 'undefined') {
                return;
            }
            if (utils.isArray(val)) {
                key = key + '[]';
            } else {
                val = [
                    val
                ];
            }
            utils.forEach(val, function parseValue(v) {
                if (utils.isDate(v)) {
                    v = v.toISOString();
                } else if (utils.isObject(v)) {
                    v = JSON.stringify(v);
                }
                parts.push(encode(key) + '=' + encode(v));
            });
        });
        serializedParams = parts.join('&');
    }
    if (serializedParams) {
        var hashmarkIndex = url.indexOf('#');
        if (hashmarkIndex !== -1) {
            url = url.slice(0, hashmarkIndex);
        }
        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }
    return url;
};
}),
"[project]/dev/portfolio-2.1/node_modules/axios/lib/core/InterceptorManager.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
function InterceptorManager() {
    this.handlers = [];
}
/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */ InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
    this.handlers.push({
        fulfilled: fulfilled,
        rejected: rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
};
/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */ InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) {
        this.handlers[id] = null;
    }
};
/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */ InterceptorManager.prototype.forEach = function forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
            fn(h);
        }
    });
};
module.exports = InterceptorManager;
}),
"[project]/dev/portfolio-2.1/node_modules/axios/lib/helpers/normalizeHeaderName.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
module.exports = function normalizeHeaderName(headers, normalizedName) {
    utils.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = value;
            delete headers[name];
        }
    });
};
}),
"[project]/dev/portfolio-2.1/node_modules/axios/lib/core/enhanceError.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */ module.exports = function enhanceError(error, config, code, request, response) {
    error.config = config;
    if (code) {
        error.code = code;
    }
    error.request = request;
    error.response = response;
    error.isAxiosError = true;
    error.toJSON = function toJSON() {
        return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: this.config,
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        };
    };
    return error;
};
}),
"[project]/dev/portfolio-2.1/node_modules/axios/lib/defaults/transitional.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
};
}),
"[project]/dev/portfolio-2.1/node_modules/axios/lib/core/createError.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var enhanceError = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/core/enhanceError.js [app-client] (ecmascript)");
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */ module.exports = function createError(message, config, code, request, response) {
    var error = new Error(message);
    return enhanceError(error, config, code, request, response);
};
}),
"[project]/dev/portfolio-2.1/node_modules/axios/lib/core/settle.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var createError = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/core/createError.js [app-client] (ecmascript)");
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */ module.exports = function settle(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) {
        resolve(response);
    } else {
        reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
    }
};
}),
"[project]/dev/portfolio-2.1/node_modules/axios/lib/helpers/cookies.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs support document.cookie
function standardBrowserEnv() {
    return {
        write: function write(name, value, expires, path, domain, secure) {
            var cookie = [];
            cookie.push(name + '=' + encodeURIComponent(value));
            if (utils.isNumber(expires)) {
                cookie.push('expires=' + new Date(expires).toGMTString());
            }
            if (utils.isString(path)) {
                cookie.push('path=' + path);
            }
            if (utils.isString(domain)) {
                cookie.push('domain=' + domain);
            }
            if (secure === true) {
                cookie.push('secure');
            }
            document.cookie = cookie.join('; ');
        },
        read: function read(name) {
            var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
            return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
            this.write(name, '', Date.now() - 86400000);
        }
    };
}() : // Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return {
        write: function write() {},
        read: function read() {
            return null;
        },
        remove: function remove() {}
    };
}();
}),
"[project]/dev/portfolio-2.1/node_modules/axios/lib/helpers/isAbsoluteURL.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */ module.exports = function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};
}),
"[project]/dev/portfolio-2.1/node_modules/axios/lib/helpers/combineURLs.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */ module.exports = function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};
}),
"[project]/dev/portfolio-2.1/node_modules/axios/lib/core/buildFullPath.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var isAbsoluteURL = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/helpers/isAbsoluteURL.js [app-client] (ecmascript)");
var combineURLs = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/helpers/combineURLs.js [app-client] (ecmascript)");
/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */ module.exports = function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
        return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
};
}),
"[project]/dev/portfolio-2.1/node_modules/axios/lib/helpers/parseHeaders.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent'
];
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */ module.exports = function parseHeaders(headers) {
    var parsed = {};
    var key;
    var val;
    var i;
    if (!headers) {
        return parsed;
    }
    utils.forEach(headers.split('\n'), function parser(line) {
        i = line.indexOf(':');
        key = utils.trim(line.substr(0, i)).toLowerCase();
        val = utils.trim(line.substr(i + 1));
        if (key) {
            if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
                return;
            }
            if (key === 'set-cookie') {
                parsed[key] = (parsed[key] ? parsed[key] : []).concat([
                    val
                ]);
            } else {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        }
    });
    return parsed;
};
}),
"[project]/dev/portfolio-2.1/node_modules/axios/lib/helpers/isURLSameOrigin.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;
    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */ function resolveURL(url) {
        var href = url;
        if (msie) {
            // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute('href', href);
            href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute('href', href);
        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
        };
    }
    originURL = resolveURL(window.location.href);
    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */ return function isURLSameOrigin(requestURL) {
        var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
        return true;
    };
}();
}),
"[project]/dev/portfolio-2.1/node_modules/axios/lib/adapters/xhr.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var settle = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/core/settle.js [app-client] (ecmascript)");
var cookies = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/helpers/cookies.js [app-client] (ecmascript)");
var buildURL = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/helpers/buildURL.js [app-client] (ecmascript)");
var buildFullPath = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/core/buildFullPath.js [app-client] (ecmascript)");
var parseHeaders = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/helpers/parseHeaders.js [app-client] (ecmascript)");
var isURLSameOrigin = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/helpers/isURLSameOrigin.js [app-client] (ecmascript)");
var createError = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/core/createError.js [app-client] (ecmascript)");
var transitionalDefaults = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/defaults/transitional.js [app-client] (ecmascript)");
var Cancel = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/cancel/Cancel.js [app-client] (ecmascript)");
module.exports = function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;
        var responseType = config.responseType;
        var onCanceled;
        function done() {
            if (config.cancelToken) {
                config.cancelToken.unsubscribe(onCanceled);
            }
            if (config.signal) {
                config.signal.removeEventListener('abort', onCanceled);
            }
        }
        if (utils.isFormData(requestData)) {
            delete requestHeaders['Content-Type']; // Let the browser set it
        }
        var request = new XMLHttpRequest();
        // HTTP basic authentication
        if (config.auth) {
            var username = config.auth.username || '';
            var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
            requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
        }
        var fullPath = buildFullPath(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
        // Set the request timeout in MS
        request.timeout = config.timeout;
        function onloadend() {
            if (!request) {
                return;
            }
            // Prepare the response
            var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
            var responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
            var response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config: config,
                request: request
            };
            settle(function _resolve(value) {
                resolve(value);
                done();
            }, function _reject(err) {
                reject(err);
                done();
            }, response);
            // Clean up request
            request = null;
        }
        if ('onloadend' in request) {
            // Use onloadend if available
            request.onloadend = onloadend;
        } else {
            // Listen for ready state to emulate onloadend
            request.onreadystatechange = function handleLoad() {
                if (!request || request.readyState !== 4) {
                    return;
                }
                // The request errored out and we didn't get a response, this will be
                // handled by onerror instead
                // With one exception: request that using file: protocol, most browsers
                // will return status as 0 even though it's a successful request
                if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
                    return;
                }
                // readystate handler is calling before onerror or ontimeout handlers,
                // so we should call onloadend on the next 'tick'
                setTimeout(onloadend);
            };
        }
        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
            if (!request) {
                return;
            }
            reject(createError('Request aborted', config, 'ECONNABORTED', request));
            // Clean up request
            request = null;
        };
        // Handle low level network errors
        request.onerror = function handleError() {
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            reject(createError('Network Error', config, null, request));
            // Clean up request
            request = null;
        };
        // Handle timeout
        request.ontimeout = function handleTimeout() {
            var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
            var transitional = config.transitional || transitionalDefaults;
            if (config.timeoutErrorMessage) {
                timeoutErrorMessage = config.timeoutErrorMessage;
            }
            reject(createError(timeoutErrorMessage, config, transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED', request));
            // Clean up request
            request = null;
        };
        // Add xsrf header
        // This is only done if running in a standard browser environment.
        // Specifically not if we're in a web worker, or react-native.
        if (utils.isStandardBrowserEnv()) {
            // Add xsrf header
            var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;
            if (xsrfValue) {
                requestHeaders[config.xsrfHeaderName] = xsrfValue;
            }
        }
        // Add headers to the request
        if ('setRequestHeader' in request) {
            utils.forEach(requestHeaders, function setRequestHeader(val, key) {
                if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
                    // Remove Content-Type if data is undefined
                    delete requestHeaders[key];
                } else {
                    // Otherwise add header to the request
                    request.setRequestHeader(key, val);
                }
            });
        }
        // Add withCredentials to request if needed
        if (!utils.isUndefined(config.withCredentials)) {
            request.withCredentials = !!config.withCredentials;
        }
        // Add responseType to request if needed
        if (responseType && responseType !== 'json') {
            request.responseType = config.responseType;
        }
        // Handle progress if needed
        if (typeof config.onDownloadProgress === 'function') {
            request.addEventListener('progress', config.onDownloadProgress);
        }
        // Not all browsers support upload events
        if (typeof config.onUploadProgress === 'function' && request.upload) {
            request.upload.addEventListener('progress', config.onUploadProgress);
        }
        if (config.cancelToken || config.signal) {
            // Handle cancellation
            // eslint-disable-next-line func-names
            onCanceled = function onCanceled(cancel) {
                if (!request) {
                    return;
                }
                reject(!cancel || cancel && cancel.type ? new Cancel('canceled') : cancel);
                request.abort();
                request = null;
            };
            config.cancelToken && config.cancelToken.subscribe(onCanceled);
            if (config.signal) {
                config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
            }
        }
        if (!requestData) {
            requestData = null;
        }
        // Send the request
        request.send(requestData);
    });
};
}),
"[project]/dev/portfolio-2.1/node_modules/axios/lib/defaults/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
var utils = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var normalizeHeaderName = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/helpers/normalizeHeaderName.js [app-client] (ecmascript)");
var enhanceError = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/core/enhanceError.js [app-client] (ecmascript)");
var transitionalDefaults = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/defaults/transitional.js [app-client] (ecmascript)");
var DEFAULT_CONTENT_TYPE = {
    'Content-Type': 'application/x-www-form-urlencoded'
};
function setContentTypeIfUnset(headers, value) {
    if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
        headers['Content-Type'] = value;
    }
}
function getDefaultAdapter() {
    var adapter;
    if (typeof XMLHttpRequest !== 'undefined') {
        // For browsers use XHR adapter
        adapter = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/adapters/xhr.js [app-client] (ecmascript)");
    } else if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' && Object.prototype.toString.call(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) === '[object process]') {
        // For node use HTTP adapter
        adapter = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/adapters/xhr.js [app-client] (ecmascript)");
    }
    return adapter;
}
function stringifySafely(rawValue, parser, encoder) {
    if (utils.isString(rawValue)) {
        try {
            (parser || JSON.parse)(rawValue);
            return utils.trim(rawValue);
        } catch (e) {
            if (e.name !== 'SyntaxError') {
                throw e;
            }
        }
    }
    return (encoder || JSON.stringify)(rawValue);
}
var defaults = {
    transitional: transitionalDefaults,
    adapter: getDefaultAdapter(),
    transformRequest: [
        function transformRequest(data, headers) {
            normalizeHeaderName(headers, 'Accept');
            normalizeHeaderName(headers, 'Content-Type');
            if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
                return data;
            }
            if (utils.isArrayBufferView(data)) {
                return data.buffer;
            }
            if (utils.isURLSearchParams(data)) {
                setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
                return data.toString();
            }
            if (utils.isObject(data) || headers && headers['Content-Type'] === 'application/json') {
                setContentTypeIfUnset(headers, 'application/json');
                return stringifySafely(data);
            }
            return data;
        }
    ],
    transformResponse: [
        function transformResponse(data) {
            var transitional = this.transitional || defaults.transitional;
            var silentJSONParsing = transitional && transitional.silentJSONParsing;
            var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';
            if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) {
                try {
                    return JSON.parse(data);
                } catch (e) {
                    if (strictJSONParsing) {
                        if (e.name === 'SyntaxError') {
                            throw enhanceError(e, this, 'E_JSON_PARSE');
                        }
                        throw e;
                    }
                }
            }
            return data;
        }
    ],
    /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */ timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    },
    headers: {
        common: {
            'Accept': 'application/json, text/plain, */*'
        }
    }
};
utils.forEach([
    'delete',
    'get',
    'head'
], function forEachMethodNoData(method) {
    defaults.headers[method] = {};
});
utils.forEach([
    'post',
    'put',
    'patch'
], function forEachMethodWithData(method) {
    defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});
module.exports = defaults;
}),
"[project]/dev/portfolio-2.1/node_modules/axios/lib/core/transformData.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var defaults = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/defaults/index.js [app-client] (ecmascript)");
/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */ module.exports = function transformData(data, headers, fns) {
    var context = this || defaults;
    /*eslint no-param-reassign:0*/ utils.forEach(fns, function transform(fn) {
        data = fn.call(context, data, headers);
    });
    return data;
};
}),
"[project]/dev/portfolio-2.1/node_modules/axios/lib/core/dispatchRequest.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var transformData = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/core/transformData.js [app-client] (ecmascript)");
var isCancel = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/cancel/isCancel.js [app-client] (ecmascript)");
var defaults = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/defaults/index.js [app-client] (ecmascript)");
var Cancel = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/cancel/Cancel.js [app-client] (ecmascript)");
/**
 * Throws a `Cancel` if cancellation has been requested.
 */ function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
        config.cancelToken.throwIfRequested();
    }
    if (config.signal && config.signal.aborted) {
        throw new Cancel('canceled');
    }
}
/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */ module.exports = function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    // Ensure headers exist
    config.headers = config.headers || {};
    // Transform request data
    config.data = transformData.call(config, config.data, config.headers, config.transformRequest);
    // Flatten headers
    config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
    utils.forEach([
        'delete',
        'get',
        'head',
        'post',
        'put',
        'patch',
        'common'
    ], function cleanHeaderConfig(method) {
        delete config.headers[method];
    });
    var adapter = config.adapter || defaults.adapter;
    return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        // Transform response data
        response.data = transformData.call(config, response.data, response.headers, config.transformResponse);
        return response;
    }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
            throwIfCancellationRequested(config);
            // Transform response data
            if (reason && reason.response) {
                reason.response.data = transformData.call(config, reason.response.data, reason.response.headers, config.transformResponse);
            }
        }
        return Promise.reject(reason);
    });
};
}),
"[project]/dev/portfolio-2.1/node_modules/axios/lib/core/mergeConfig.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */ module.exports = function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    var config = {};
    function getMergedValue(target, source) {
        if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
            return utils.merge(target, source);
        } else if (utils.isPlainObject(source)) {
            return utils.merge({}, source);
        } else if (utils.isArray(source)) {
            return source.slice();
        }
        return source;
    }
    // eslint-disable-next-line consistent-return
    function mergeDeepProperties(prop) {
        if (!utils.isUndefined(config2[prop])) {
            return getMergedValue(config1[prop], config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
            return getMergedValue(undefined, config1[prop]);
        }
    }
    // eslint-disable-next-line consistent-return
    function valueFromConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
            return getMergedValue(undefined, config2[prop]);
        }
    }
    // eslint-disable-next-line consistent-return
    function defaultToConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
            return getMergedValue(undefined, config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
            return getMergedValue(undefined, config1[prop]);
        }
    }
    // eslint-disable-next-line consistent-return
    function mergeDirectKeys(prop) {
        if (prop in config2) {
            return getMergedValue(config1[prop], config2[prop]);
        } else if (prop in config1) {
            return getMergedValue(undefined, config1[prop]);
        }
    }
    var mergeMap = {
        'url': valueFromConfig2,
        'method': valueFromConfig2,
        'data': valueFromConfig2,
        'baseURL': defaultToConfig2,
        'transformRequest': defaultToConfig2,
        'transformResponse': defaultToConfig2,
        'paramsSerializer': defaultToConfig2,
        'timeout': defaultToConfig2,
        'timeoutMessage': defaultToConfig2,
        'withCredentials': defaultToConfig2,
        'adapter': defaultToConfig2,
        'responseType': defaultToConfig2,
        'xsrfCookieName': defaultToConfig2,
        'xsrfHeaderName': defaultToConfig2,
        'onUploadProgress': defaultToConfig2,
        'onDownloadProgress': defaultToConfig2,
        'decompress': defaultToConfig2,
        'maxContentLength': defaultToConfig2,
        'maxBodyLength': defaultToConfig2,
        'transport': defaultToConfig2,
        'httpAgent': defaultToConfig2,
        'httpsAgent': defaultToConfig2,
        'cancelToken': defaultToConfig2,
        'socketPath': defaultToConfig2,
        'responseEncoding': defaultToConfig2,
        'validateStatus': mergeDirectKeys
    };
    utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
        var merge = mergeMap[prop] || mergeDeepProperties;
        var configValue = merge(prop);
        utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
};
}),
"[project]/dev/portfolio-2.1/node_modules/axios/lib/helpers/validator.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
var VERSION = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/env/data.js [app-client] (ecmascript)").version;
var validators = {};
// eslint-disable-next-line func-names
[
    'object',
    'boolean',
    'number',
    'function',
    'string',
    'symbol'
].forEach(function(type, i) {
    validators[type] = function validator(thing) {
        return (typeof thing === "undefined" ? "undefined" : _type_of._(thing)) === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
    };
});
var deprecatedWarnings = {};
/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */ validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
        return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
    }
    // eslint-disable-next-line func-names
    return function(value, opt, opts) {
        if (validator === false) {
            throw new Error(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')));
        }
        if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            // eslint-disable-next-line no-console
            console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
        }
        return validator ? validator(value, opt, opts) : true;
    };
};
/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */ function assertOptions(options, schema, allowUnknown) {
    if ((typeof options === "undefined" ? "undefined" : _type_of._(options)) !== 'object') {
        throw new TypeError('options must be an object');
    }
    var keys = Object.keys(options);
    var i = keys.length;
    while(i-- > 0){
        var opt = keys[i];
        var validator = schema[opt];
        if (validator) {
            var value = options[opt];
            var result = value === undefined || validator(value, opt, options);
            if (result !== true) {
                throw new TypeError('option ' + opt + ' must be ' + result);
            }
            continue;
        }
        if (allowUnknown !== true) {
            throw Error('Unknown option ' + opt);
        }
    }
}
module.exports = {
    assertOptions: assertOptions,
    validators: validators
};
}),
"[project]/dev/portfolio-2.1/node_modules/axios/lib/core/Axios.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var buildURL = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/helpers/buildURL.js [app-client] (ecmascript)");
var InterceptorManager = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/core/InterceptorManager.js [app-client] (ecmascript)");
var dispatchRequest = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/core/dispatchRequest.js [app-client] (ecmascript)");
var mergeConfig = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/core/mergeConfig.js [app-client] (ecmascript)");
var validator = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/helpers/validator.js [app-client] (ecmascript)");
var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */ function Axios(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
    };
}
/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */ Axios.prototype.request = function request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
        config = config || {};
        config.url = configOrUrl;
    } else {
        config = configOrUrl || {};
    }
    config = mergeConfig(this.defaults, config);
    // Set config.method
    if (config.method) {
        config.method = config.method.toLowerCase();
    } else if (this.defaults.method) {
        config.method = this.defaults.method.toLowerCase();
    } else {
        config.method = 'get';
    }
    var transitional = config.transitional;
    if (transitional !== undefined) {
        validator.assertOptions(transitional, {
            silentJSONParsing: validators.transitional(validators.boolean),
            forcedJSONParsing: validators.transitional(validators.boolean),
            clarifyTimeoutError: validators.transitional(validators.boolean)
        }, false);
    }
    // filter out skipped interceptors
    var requestInterceptorChain = [];
    var synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
            return;
        }
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    var responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    var promise;
    if (!synchronousRequestInterceptors) {
        var chain = [
            dispatchRequest,
            undefined
        ];
        Array.prototype.unshift.apply(chain, requestInterceptorChain);
        chain = chain.concat(responseInterceptorChain);
        promise = Promise.resolve(config);
        while(chain.length){
            promise = promise.then(chain.shift(), chain.shift());
        }
        return promise;
    }
    var newConfig = config;
    while(requestInterceptorChain.length){
        var onFulfilled = requestInterceptorChain.shift();
        var onRejected = requestInterceptorChain.shift();
        try {
            newConfig = onFulfilled(newConfig);
        } catch (error) {
            onRejected(error);
            break;
        }
    }
    try {
        promise = dispatchRequest(newConfig);
    } catch (error) {
        return Promise.reject(error);
    }
    while(responseInterceptorChain.length){
        promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
    }
    return promise;
};
Axios.prototype.getUri = function getUri(config) {
    config = mergeConfig(this.defaults, config);
    return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};
// Provide aliases for supported request methods
utils.forEach([
    'delete',
    'get',
    'head',
    'options'
], function forEachMethodNoData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, config) {
        return this.request(mergeConfig(config || {}, {
            method: method,
            url: url,
            data: (config || {}).data
        }));
    };
});
utils.forEach([
    'post',
    'put',
    'patch'
], function forEachMethodWithData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, data, config) {
        return this.request(mergeConfig(config || {}, {
            method: method,
            url: url,
            data: data
        }));
    };
});
module.exports = Axios;
}),
"[project]/dev/portfolio-2.1/node_modules/axios/lib/axios.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var bind = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/helpers/bind.js [app-client] (ecmascript)");
var Axios = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/core/Axios.js [app-client] (ecmascript)");
var mergeConfig = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/core/mergeConfig.js [app-client] (ecmascript)");
var defaults = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/defaults/index.js [app-client] (ecmascript)");
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */ function createInstance(defaultConfig) {
    var context = new Axios(defaultConfig);
    var instance = bind(Axios.prototype.request, context);
    // Copy axios.prototype to instance
    utils.extend(instance, Axios.prototype, context);
    // Copy context to instance
    utils.extend(instance, context);
    // Factory for creating new instances
    instance.create = function create(instanceConfig) {
        return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };
    return instance;
}
// Create the default instance to be exported
var axios = createInstance(defaults);
// Expose Axios class to allow class inheritance
axios.Axios = Axios;
// Expose Cancel & CancelToken
axios.Cancel = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/cancel/Cancel.js [app-client] (ecmascript)");
axios.CancelToken = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/cancel/CancelToken.js [app-client] (ecmascript)");
axios.isCancel = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/cancel/isCancel.js [app-client] (ecmascript)");
axios.VERSION = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/env/data.js [app-client] (ecmascript)").version;
// Expose all/spread
axios.all = function all(promises) {
    return Promise.all(promises);
};
axios.spread = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/helpers/spread.js [app-client] (ecmascript)");
// Expose isAxiosError
axios.isAxiosError = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/helpers/isAxiosError.js [app-client] (ecmascript)");
module.exports = axios;
// Allow use of default import syntax in TypeScript
module.exports.default = axios;
}),
"[project]/dev/portfolio-2.1/node_modules/axios/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
}),
"[project]/dev/portfolio-2.1/node_modules/form-data/lib/browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
/* eslint-env browser */ module.exports = (typeof self === "undefined" ? "undefined" : _type_of._(self)) === 'object' ? self.FormData : window.FormData;
}),
"[project]/dev/portfolio-2.1/node_modules/@emailjs/browser/es/store/store.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "store",
    ()=>store
]);
var store = {
    _origin: 'https://api.emailjs.com'
};
}),
"[project]/dev/portfolio-2.1/node_modules/@emailjs/browser/es/methods/init/init.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "init",
    ()=>init
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/@emailjs/browser/es/store/store.js [app-client] (ecmascript)");
;
var init = function(publicKey) {
    var origin = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'https://api.emailjs.com';
    __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"]._userID = publicKey;
    __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"]._origin = origin;
};
}),
"[project]/dev/portfolio-2.1/node_modules/@emailjs/browser/es/utils/validateParams.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateParams",
    ()=>validateParams
]);
var validateParams = function(publicKey, serviceID, templateID) {
    if (!publicKey) {
        throw 'The public key is required. Visit https://dashboard.emailjs.com/admin/account';
    }
    if (!serviceID) {
        throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin';
    }
    if (!templateID) {
        throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates';
    }
    return true;
};
}),
"[project]/dev/portfolio-2.1/node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmailJSResponseStatus",
    ()=>EmailJSResponseStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
;
var EmailJSResponseStatus = function EmailJSResponseStatus(httpResponse) {
    "use strict";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, EmailJSResponseStatus);
    this.status = httpResponse ? httpResponse.status : 0;
    this.text = httpResponse ? httpResponse.responseText : 'Network Error';
};
}),
"[project]/dev/portfolio-2.1/node_modules/@emailjs/browser/es/api/sendPost.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendPost",
    ()=>sendPost
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/@emailjs/browser/es/store/store.js [app-client] (ecmascript)");
;
;
var sendPost = function(url, data) {
    var headers = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load', function(param) {
            var target = param.target;
            var responseStatus = new __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmailJSResponseStatus"](target);
            if (responseStatus.status === 200 || responseStatus.text === 'OK') {
                resolve(responseStatus);
            } else {
                reject(responseStatus);
            }
        });
        xhr.addEventListener('error', function(param) {
            var target = param.target;
            reject(new __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmailJSResponseStatus"](target));
        });
        xhr.open('POST', __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"]._origin + url, true);
        Object.keys(headers).forEach(function(key) {
            xhr.setRequestHeader(key, headers[key]);
        });
        xhr.send(data);
    });
};
}),
"[project]/dev/portfolio-2.1/node_modules/@emailjs/browser/es/methods/send/send.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "send",
    ()=>send
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/@emailjs/browser/es/store/store.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$validateParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/@emailjs/browser/es/utils/validateParams.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$api$2f$sendPost$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/@emailjs/browser/es/api/sendPost.js [app-client] (ecmascript)");
;
;
;
var send = function(serviceID, templateID, templatePrams, publicKey) {
    var uID = publicKey || __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"]._userID;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$validateParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateParams"])(uID, serviceID, templateID);
    var params = {
        lib_version: '3.12.1',
        user_id: uID,
        service_id: serviceID,
        template_id: templateID,
        template_params: templatePrams
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$api$2f$sendPost$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendPost"])('/api/v1.0/email/send', JSON.stringify(params), {
        'Content-type': 'application/json'
    });
};
}),
"[project]/dev/portfolio-2.1/node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendForm",
    ()=>sendForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/@emailjs/browser/es/store/store.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$validateParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/@emailjs/browser/es/utils/validateParams.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$api$2f$sendPost$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/@emailjs/browser/es/api/sendPost.js [app-client] (ecmascript)");
;
;
;
var findHTMLForm = function(form) {
    var currentForm;
    if (typeof form === 'string') {
        currentForm = document.querySelector(form);
    } else {
        currentForm = form;
    }
    if (!currentForm || currentForm.nodeName !== 'FORM') {
        throw 'The 3rd parameter is expected to be the HTML form element or the style selector of form';
    }
    return currentForm;
};
var sendForm = function(serviceID, templateID, form, publicKey) {
    var uID = publicKey || __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"]._userID;
    var currentForm = findHTMLForm(form);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$validateParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateParams"])(uID, serviceID, templateID);
    var formData = new FormData(currentForm);
    formData.append('lib_version', '3.12.1');
    formData.append('service_id', serviceID);
    formData.append('template_id', templateID);
    formData.append('user_id', uID);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$api$2f$sendPost$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendPost"])('/api/v1.0/email/send-form', formData);
};
}),
"[project]/dev/portfolio-2.1/node_modules/@emailjs/browser/es/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$methods$2f$init$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/@emailjs/browser/es/methods/init/init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$methods$2f$send$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/@emailjs/browser/es/methods/send/send.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$methods$2f$sendForm$2f$sendForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js [app-client] (ecmascript)");
;
;
;
;
const __TURBOPACK__default__export__ = {
    init: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$methods$2f$init$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["init"],
    send: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$methods$2f$send$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["send"],
    sendForm: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$methods$2f$sendForm$2f$sendForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendForm"]
};
}),
"[project]/dev/portfolio-2.1/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_setPrototypeOf
]);
function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(t, e) {
        return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
}
;
}),
"[project]/dev/portfolio-2.1/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_inheritsLoose
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$setPrototypeOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js [app-client] (ecmascript)");
;
function _inheritsLoose(t, o) {
    t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$setPrototypeOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t, o);
}
;
}),
"[project]/dev/portfolio-2.1/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_extends
]);
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
;
}),
"[project]/dev/portfolio-2.1/node_modules/@babel/runtime/helpers/esm/typeof.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_typeof
]);
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
;
}),
"[project]/dev/portfolio-2.1/node_modules/@babel/runtime/helpers/esm/toPrimitive.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>toPrimitive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/@babel/runtime/helpers/esm/typeof.js [app-client] (ecmascript)");
;
function toPrimitive(t, r) {
    if ("object" != (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
;
}),
"[project]/dev/portfolio-2.1/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>toPropertyKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/@babel/runtime/helpers/esm/typeof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPrimitive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/@babel/runtime/helpers/esm/toPrimitive.js [app-client] (ecmascript)");
;
;
function toPropertyKey(t) {
    var i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPrimitive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t, "string");
    return "symbol" == (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(i) ? i : i + "";
}
;
}),
"[project]/dev/portfolio-2.1/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_defineProperty
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPropertyKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js [app-client] (ecmascript)");
;
function _defineProperty(e, r, t) {
    return (r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPropertyKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
;
}),
"[project]/dev/portfolio-2.1/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_objectSpread2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
;
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread2(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
;
}),
"[project]/dev/portfolio-2.1/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_objectWithoutPropertiesLoose
]);
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
}),
"[project]/dev/portfolio-2.1/node_modules/redux/es/redux.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__DO_NOT_USE__ActionTypes",
    ()=>ActionTypes,
    "applyMiddleware",
    ()=>applyMiddleware,
    "bindActionCreators",
    ()=>bindActionCreators,
    "combineReducers",
    ()=>combineReducers,
    "compose",
    ()=>compose,
    "createStore",
    ()=>createStore,
    "legacy_createStore",
    ()=>legacy_createStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/esm/_instanceof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
;
;
;
/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */ function formatProdErrorMessage(code) {
    return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
}
// Inlined version of the `symbol-observable` polyfill
var $$observable = function() {
    return typeof Symbol === 'function' && Symbol.observable || '@@observable';
}();
/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */ var randomString = function randomString() {
    return Math.random().toString(36).substring(7).split('').join('.');
};
var ActionTypes = {
    INIT: "@@redux/INIT" + randomString(),
    REPLACE: "@@redux/REPLACE" + randomString(),
    PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
        return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
    }
};
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */ function isPlainObject(obj) {
    if ((typeof obj === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(obj)) !== 'object' || obj === null) return false;
    var proto = obj;
    while(Object.getPrototypeOf(proto) !== null){
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(obj) === proto;
}
// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
function miniKindOf(val) {
    if (val === void 0) return 'undefined';
    if (val === null) return 'null';
    var type = typeof val === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(val);
    switch(type){
        case 'boolean':
        case 'string':
        case 'number':
        case 'symbol':
        case 'function':
            {
                return type;
            }
    }
    if (Array.isArray(val)) return 'array';
    if (isDate(val)) return 'date';
    if (isError(val)) return 'error';
    var constructorName = ctorName(val);
    switch(constructorName){
        case 'Symbol':
        case 'Promise':
        case 'WeakMap':
        case 'WeakSet':
        case 'Map':
        case 'Set':
            return constructorName;
    } // other
    return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
}
function ctorName(val) {
    return typeof val.constructor === 'function' ? val.constructor.name : null;
}
function isError(val) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(val, Error) || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}
function isDate(val) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(val, Date)) return true;
    return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}
function kindOf(val) {
    var typeOfVal = typeof val === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(val);
    if ("TURBOPACK compile-time truthy", 1) {
        typeOfVal = miniKindOf(val);
    }
    return typeOfVal;
}
/**
 * @deprecated
 *
 * **We recommend using the `configureStore` method
 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
 *
 * Redux Toolkit is our recommended approach for writing Redux logic today,
 * including store setup, reducers, data fetching, and more.
 *
 * **For more details, please read this Redux docs page:**
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
 * simplifies setup and helps avoid common bugs.
 *
 * You should not be using the `redux` core package by itself today, except for learning purposes.
 * The `createStore` method from the core `redux` package will not be removed, but we encourage
 * all users to migrate to using Redux Toolkit for all Redux code.
 *
 * If you want to use `createStore` without this visual deprecation warning, use
 * the `legacy_createStore` import instead:
 *
 * `import { legacy_createStore as createStore} from 'redux'`
 *
 */ function createStore(reducer, preloadedState, enhancer) {
    var _ref2;
    if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.');
    }
    if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
        enhancer = preloadedState;
        preloadedState = undefined;
    }
    if (typeof enhancer !== 'undefined') {
        if (typeof enhancer !== 'function') {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
        }
        return enhancer(createStore)(reducer, preloadedState);
    }
    if (typeof reducer !== 'function') {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
    }
    var currentReducer = reducer;
    var currentState = preloadedState;
    var currentListeners = [];
    var nextListeners = currentListeners;
    var isDispatching = false;
    /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */ function ensureCanMutateNextListeners() {
        if (nextListeners === currentListeners) {
            nextListeners = currentListeners.slice();
        }
    }
    /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */ function getState() {
        if (isDispatching) {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
        }
        return currentState;
    }
    /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */ function subscribe(listener) {
        if (typeof listener !== 'function') {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
        }
        if (isDispatching) {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
        }
        var isSubscribed = true;
        ensureCanMutateNextListeners();
        nextListeners.push(listener);
        return function unsubscribe() {
            if (!isSubscribed) {
                return;
            }
            if (isDispatching) {
                throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
            }
            isSubscribed = false;
            ensureCanMutateNextListeners();
            var index = nextListeners.indexOf(listener);
            nextListeners.splice(index, 1);
            currentListeners = null;
        };
    }
    /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */ function dispatch(action) {
        if (!isPlainObject(action)) {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
        }
        if (typeof action.type === 'undefined') {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
        }
        if (isDispatching) {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'Reducers may not dispatch actions.');
        }
        try {
            isDispatching = true;
            currentState = currentReducer(currentState, action);
        } finally{
            isDispatching = false;
        }
        var listeners = currentListeners = nextListeners;
        for(var i = 0; i < listeners.length; i++){
            var listener = listeners[i];
            listener();
        }
        return action;
    }
    /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */ function replaceReducer(nextReducer) {
        if (typeof nextReducer !== 'function') {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
        }
        currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
        // Any reducers that existed in both the new and old rootReducer
        // will receive the previous state. This effectively populates
        // the new state tree with any relevant data from the old one.
        dispatch({
            type: ActionTypes.REPLACE
        });
    }
    /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */ function observable() {
        var _ref;
        var outerSubscribe = subscribe;
        return _ref = {
            /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */ subscribe: function subscribe(observer) {
                if ((typeof observer === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(observer)) !== 'object' || observer === null) {
                    throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
                }
                function observeState() {
                    if (observer.next) {
                        observer.next(getState());
                    }
                }
                observeState();
                var unsubscribe = outerSubscribe(observeState);
                return {
                    unsubscribe: unsubscribe
                };
            }
        }, _ref[$$observable] = function() {
            return this;
        }, _ref;
    } // When a store is created, an "INIT" action is dispatched so that every
    // reducer returns their initial state. This effectively populates
    // the initial state tree.
    dispatch({
        type: ActionTypes.INIT
    });
    return _ref2 = {
        dispatch: dispatch,
        subscribe: subscribe,
        getState: getState,
        replaceReducer: replaceReducer
    }, _ref2[$$observable] = observable, _ref2;
}
/**
 * Creates a Redux store that holds the state tree.
 *
 * **We recommend using `configureStore` from the
 * `@reduxjs/toolkit` package**, which replaces `createStore`:
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */ var legacy_createStore = createStore;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */ function warning(message) {
    /* eslint-disable no-console */ if (typeof console !== 'undefined' && typeof console.error === 'function') {
        console.error(message);
    }
    /* eslint-enable no-console */ try {
        // This error was thrown as a convenience so that if you enable
        // "break on all exceptions" in your console,
        // it would pause the execution at this line.
        throw new Error(message);
    } catch (e) {} // eslint-disable-line no-empty
}
function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
    var reducerKeys = Object.keys(reducers);
    var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';
    if (reducerKeys.length === 0) {
        return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
    }
    if (!isPlainObject(inputState)) {
        return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
    }
    var unexpectedKeys = Object.keys(inputState).filter(function(key) {
        return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
    });
    unexpectedKeys.forEach(function(key) {
        unexpectedKeyCache[key] = true;
    });
    if (action && action.type === ActionTypes.REPLACE) return;
    if (unexpectedKeys.length > 0) {
        return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
    }
}
function assertReducerShape(reducers) {
    Object.keys(reducers).forEach(function(key) {
        var reducer = reducers[key];
        var initialState = reducer(undefined, {
            type: ActionTypes.INIT
        });
        if (typeof initialState === 'undefined') {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "The slice reducer for key \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
        }
        if (typeof reducer(undefined, {
            type: ActionTypes.PROBE_UNKNOWN_ACTION()
        }) === 'undefined') {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "The slice reducer for key \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle '" + ActionTypes.INIT + "' or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
        }
    });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */ function combineReducers(reducers) {
    var reducerKeys = Object.keys(reducers);
    var finalReducers = {};
    for(var i = 0; i < reducerKeys.length; i++){
        var key = reducerKeys[i];
        if ("TURBOPACK compile-time truthy", 1) {
            if (typeof reducers[key] === 'undefined') {
                warning("No reducer provided for key \"" + key + "\"");
            }
        }
        if (typeof reducers[key] === 'function') {
            finalReducers[key] = reducers[key];
        }
    }
    var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
    // keys multiple times.
    var unexpectedKeyCache;
    if (("TURBOPACK compile-time value", "development") !== 'production') {
        unexpectedKeyCache = {};
    }
    var shapeAssertionError;
    try {
        assertReducerShape(finalReducers);
    } catch (e) {
        shapeAssertionError = e;
    }
    return function combination(state, action) {
        if (state === void 0) {
            state = {};
        }
        if (shapeAssertionError) {
            throw shapeAssertionError;
        }
        if ("TURBOPACK compile-time truthy", 1) {
            var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
            if (warningMessage) {
                warning(warningMessage);
            }
        }
        var hasChanged = false;
        var nextState = {};
        for(var _i = 0; _i < finalReducerKeys.length; _i++){
            var _key = finalReducerKeys[_i];
            var reducer = finalReducers[_key];
            var previousStateForKey = state[_key];
            var nextStateForKey = reducer(previousStateForKey, action);
            if (typeof nextStateForKey === 'undefined') {
                var actionType = action && action.type;
                throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "When called with an action of type " + (actionType ? "\"" + String(actionType) + "\"" : '(unknown type)') + ", the slice reducer for key \"" + _key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.");
            }
            nextState[_key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }
        hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
        return hasChanged ? nextState : state;
    };
}
function bindActionCreator(actionCreator, dispatch) {
    return function() {
        return dispatch(actionCreator.apply(this, arguments));
    };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */ function bindActionCreators(actionCreators, dispatch) {
    if (typeof actionCreators === 'function') {
        return bindActionCreator(actionCreators, dispatch);
    }
    if ((typeof actionCreators === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(actionCreators)) !== 'object' || actionCreators === null) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "bindActionCreators expected an object or a function, but instead received: '" + kindOf(actionCreators) + "'. " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
    }
    var boundActionCreators = {};
    for(var key in actionCreators){
        var actionCreator = actionCreators[key];
        if (typeof actionCreator === 'function') {
            boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
        }
    }
    return boundActionCreators;
}
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */ function compose() {
    for(var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++){
        funcs[_key] = arguments[_key];
    }
    if (funcs.length === 0) {
        return function(arg) {
            return arg;
        };
    }
    if (funcs.length === 1) {
        return funcs[0];
    }
    return funcs.reduce(function(a, b) {
        return function() {
            return a(b.apply(void 0, arguments));
        };
    });
}
/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */ function applyMiddleware() {
    for(var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++){
        middlewares[_key] = arguments[_key];
    }
    return function(createStore) {
        return function() {
            var store = createStore.apply(void 0, arguments);
            var _dispatch = function dispatch() {
                throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
            };
            var middlewareAPI = {
                getState: store.getState,
                dispatch: function dispatch() {
                    return _dispatch.apply(void 0, arguments);
                }
            };
            var chain = middlewares.map(function(middleware) {
                return middleware(middlewareAPI);
            });
            _dispatch = compose.apply(void 0, chain)(store.dispatch);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, store), {}, {
                dispatch: _dispatch
            });
        };
    };
}
;
}),
"[project]/dev/portfolio-2.1/node_modules/react-redux/es/components/Context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReactReduxContext",
    ()=>ReactReduxContext,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var ReactReduxContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(null);
if ("TURBOPACK compile-time truthy", 1) {
    ReactReduxContext.displayName = 'ReactRedux';
}
const __TURBOPACK__default__export__ = ReactReduxContext;
}),
"[project]/dev/portfolio-2.1/node_modules/react-redux/es/utils/batch.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBatch",
    ()=>getBatch,
    "setBatch",
    ()=>setBatch
]);
// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
    callback();
}
var batch = defaultNoopBatch; // Allow injecting another batching function later
var setBatch = function setBatch(newBatch) {
    return batch = newBatch;
}; // Supply a getter just to skip dealing with ESM bindings
var getBatch = function getBatch() {
    return batch;
};
}),
"[project]/dev/portfolio-2.1/node_modules/react-redux/es/utils/Subscription.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSubscription",
    ()=>createSubscription
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$utils$2f$batch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/utils/batch.js [app-client] (ecmascript)"); // encapsulates the subscription logic for connecting a component to the redux store, as
;
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants
function createListenerCollection() {
    var batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$utils$2f$batch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBatch"])();
    var first = null;
    var last = null;
    return {
        clear: function clear() {
            first = null;
            last = null;
        },
        notify: function notify() {
            batch(function() {
                var listener = first;
                while(listener){
                    listener.callback();
                    listener = listener.next;
                }
            });
        },
        get: function get() {
            var listeners = [];
            var listener = first;
            while(listener){
                listeners.push(listener);
                listener = listener.next;
            }
            return listeners;
        },
        subscribe: function subscribe(callback) {
            var isSubscribed = true;
            var listener = last = {
                callback: callback,
                next: null,
                prev: last
            };
            if (listener.prev) {
                listener.prev.next = listener;
            } else {
                first = listener;
            }
            return function unsubscribe() {
                if (!isSubscribed || first === null) return;
                isSubscribed = false;
                if (listener.next) {
                    listener.next.prev = listener.prev;
                } else {
                    last = listener.prev;
                }
                if (listener.prev) {
                    listener.prev.next = listener.next;
                } else {
                    first = listener.next;
                }
            };
        }
    };
}
var nullListeners = {
    notify: function notify() {},
    get: function get() {
        return [];
    }
};
function createSubscription(store, parentSub) {
    var unsubscribe;
    var listeners = nullListeners;
    function addNestedSub(listener) {
        trySubscribe();
        return listeners.subscribe(listener);
    }
    function notifyNestedSubs() {
        listeners.notify();
    }
    function handleChangeWrapper() {
        if (subscription.onStateChange) {
            subscription.onStateChange();
        }
    }
    function isSubscribed() {
        return Boolean(unsubscribe);
    }
    function trySubscribe() {
        if (!unsubscribe) {
            unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
            listeners = createListenerCollection();
        }
    }
    function tryUnsubscribe() {
        if (unsubscribe) {
            unsubscribe();
            unsubscribe = undefined;
            listeners.clear();
            listeners = nullListeners;
        }
    }
    var subscription = {
        addNestedSub: addNestedSub,
        notifyNestedSubs: notifyNestedSubs,
        handleChangeWrapper: handleChangeWrapper,
        isSubscribed: isSubscribed,
        trySubscribe: trySubscribe,
        tryUnsubscribe: tryUnsubscribe,
        getListeners: function getListeners() {
            return listeners;
        }
    };
    return subscription;
}
}),
"[project]/dev/portfolio-2.1/node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsomorphicLayoutEffect",
    ()=>useIsomorphicLayoutEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"); // React currently throws a warning when using useLayoutEffect on the server.
;
var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
}),
"[project]/dev/portfolio-2.1/node_modules/react-redux/es/components/Provider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$components$2f$Context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/components/Context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$utils$2f$Subscription$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/utils/Subscription.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$utils$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js [app-client] (ecmascript)");
;
;
;
;
;
function Provider(_ref) {
    var store = _ref.store, context = _ref.context, children = _ref.children;
    var contextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Provider.useMemo[contextValue]": function() {
            var subscription = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$utils$2f$Subscription$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSubscription"])(store);
            return {
                store: store,
                subscription: subscription
            };
        }
    }["Provider.useMemo[contextValue]"], [
        store
    ]);
    var previousState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Provider.useMemo[previousState]": function() {
            return store.getState();
        }
    }["Provider.useMemo[previousState]"], [
        store
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$utils$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "Provider.useIsomorphicLayoutEffect": function() {
            var subscription = contextValue.subscription;
            subscription.onStateChange = subscription.notifyNestedSubs;
            subscription.trySubscribe();
            if (previousState !== store.getState()) {
                subscription.notifyNestedSubs();
            }
            return ({
                "Provider.useIsomorphicLayoutEffect": function() {
                    subscription.tryUnsubscribe();
                    subscription.onStateChange = null;
                }
            })["Provider.useIsomorphicLayoutEffect"];
        }
    }["Provider.useIsomorphicLayoutEffect"], [
        contextValue,
        previousState
    ]);
    var Context = context || __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$components$2f$Context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactReduxContext"];
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Context.Provider, {
        value: contextValue
    }, children);
}
if ("TURBOPACK compile-time truthy", 1) {
    Provider.propTypes = {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].shape({
            subscribe: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func.isRequired,
            dispatch: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func.isRequired,
            getState: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func.isRequired
        }),
        context: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
        children: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].any
    };
}
const __TURBOPACK__default__export__ = Provider;
}),
"[project]/dev/portfolio-2.1/node_modules/react-redux/es/components/connectAdvanced.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>connectAdvanced
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$hoist$2d$non$2d$react$2d$statics$2f$dist$2f$hoist$2d$non$2d$react$2d$statics$2e$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/node_modules/react-is/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$utils$2f$Subscription$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/utils/Subscription.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$utils$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$components$2f$Context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/components/Context.js [app-client] (ecmascript)"); // Define some constant arrays just to avoid re-creating these
;
;
var _excluded = [
    "getDisplayName",
    "methodName",
    "renderCountProp",
    "shouldHandleStateChanges",
    "storeKey",
    "withRef",
    "forwardRef",
    "context"
], _excluded2 = [
    "reactReduxForwardedRef"
];
;
;
;
;
;
;
var EMPTY_ARRAY = [];
var NO_SUBSCRIPTION_ARRAY = [
    null,
    null
];
var stringifyComponent = function stringifyComponent(Comp) {
    try {
        return JSON.stringify(Comp);
    } catch (err) {
        return String(Comp);
    }
};
function storeStateUpdatesReducer(state, action) {
    var updateCount = state[1];
    return [
        action.payload,
        updateCount + 1
    ];
}
function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$utils$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "useIsomorphicLayoutEffectWithArgs.useIsomorphicLayoutEffect": function() {
            return effectFunc.apply(void 0, effectArgs);
        }
    }["useIsomorphicLayoutEffectWithArgs.useIsomorphicLayoutEffect"], dependencies);
}
function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs) {
    // We want to capture the wrapper props and child props we used for later comparisons
    lastWrapperProps.current = wrapperProps;
    lastChildProps.current = actualChildProps;
    renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update
    if (childPropsFromStoreUpdate.current) {
        childPropsFromStoreUpdate.current = null;
        notifyNestedSubs();
    }
}
function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch) {
    // If we're not subscribed to the store, nothing to do here
    if (!shouldHandleStateChanges) return; // Capture values for checking if and when this component unmounts
    var didUnsubscribe = false;
    var lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component
    var checkForUpdates = function checkForUpdates() {
        if (didUnsubscribe) {
            // Don't run stale listeners.
            // Redux doesn't guarantee unsubscriptions happen until next dispatch.
            return;
        }
        var latestStoreState = store.getState();
        var newChildProps, error;
        try {
            // Actually run the selector with the most recent store state and wrapper props
            // to determine what the child props should be
            newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
        } catch (e) {
            error = e;
            lastThrownError = e;
        }
        if (!error) {
            lastThrownError = null;
        } // If the child props haven't changed, nothing to do here - cascade the subscription update
        if (newChildProps === lastChildProps.current) {
            if (!renderIsScheduled.current) {
                notifyNestedSubs();
            }
        } else {
            // Save references to the new child props.  Note that we track the "child props from store update"
            // as a ref instead of a useState/useReducer because we need a way to determine if that value has
            // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
            // forcing another re-render, which we don't want.
            lastChildProps.current = newChildProps;
            childPropsFromStoreUpdate.current = newChildProps;
            renderIsScheduled.current = true; // If the child props _did_ change (or we caught an error), this wrapper component needs to re-render
            forceComponentUpdateDispatch({
                type: 'STORE_UPDATED',
                payload: {
                    error: error
                }
            });
        }
    }; // Actually subscribe to the nearest connected ancestor (or store)
    subscription.onStateChange = checkForUpdates;
    subscription.trySubscribe(); // Pull data from the store after first render in case the store has
    // changed since we began.
    checkForUpdates();
    var unsubscribeWrapper = function unsubscribeWrapper() {
        didUnsubscribe = true;
        subscription.tryUnsubscribe();
        subscription.onStateChange = null;
        if (lastThrownError) {
            // It's possible that we caught an error due to a bad mapState function, but the
            // parent re-rendered without this component and we're about to unmount.
            // This shouldn't happen as long as we do top-down subscriptions correctly, but
            // if we ever do those wrong, this throw will surface the error in our tests.
            // In that case, throw the error from here so it doesn't get lost.
            throw lastThrownError;
        }
    };
    return unsubscribeWrapper;
}
var initStateUpdates = function initStateUpdates() {
    return [
        null,
        0
    ];
};
function connectAdvanced(/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
      export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
    Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
    Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/ selectorFactory, _ref) {
    if (_ref === void 0) {
        _ref = {};
    }
    var _ref2 = _ref, _ref2$getDisplayName = _ref2.getDisplayName, getDisplayName = _ref2$getDisplayName === void 0 ? function getDisplayName(name) {
        return "ConnectAdvanced(" + name + ")";
    } : _ref2$getDisplayName, _ref2$methodName = _ref2.methodName, methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName, _ref2$renderCountProp = _ref2.renderCountProp, renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp, _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges, shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta, _ref2$storeKey = _ref2.storeKey, storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey, _ref2$withRef = _ref2.withRef, withRef = _ref2$withRef === void 0 ? false : _ref2$withRef, _ref2$forwardRef = _ref2.forwardRef, forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef, _ref2$context = _ref2.context, context = _ref2$context === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$components$2f$Context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactReduxContext"] : _ref2$context, connectOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_ref2, _excluded);
    if ("TURBOPACK compile-time truthy", 1) {
        if (renderCountProp !== undefined) {
            throw new Error("renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension");
        }
        if (withRef) {
            throw new Error('withRef is removed. To access the wrapped instance, use a ref on the connected component');
        }
        var customStoreWarningMessage = 'To use a custom Redux store for specific components, create a custom React context with ' + "React.createContext(), and pass the context object to React Redux's Provider and specific components" + ' like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. ' + 'You may also pass a {context : MyContext} option to connect';
        if (storeKey !== 'store') {
            throw new Error('storeKey has been removed and does not do anything. ' + customStoreWarningMessage);
        }
    }
    var Context = context;
    return function wrapWithConnect(WrappedComponent) {
        if (("TURBOPACK compile-time value", "development") !== 'production' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElementType"])(WrappedComponent)) {
            throw new Error("You must pass a component to the function returned by " + (methodName + ". Instead received " + stringifyComponent(WrappedComponent)));
        }
        var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
        var displayName = getDisplayName(wrappedComponentName);
        var selectorFactoryOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, connectOptions, {
            getDisplayName: getDisplayName,
            methodName: methodName,
            renderCountProp: renderCountProp,
            shouldHandleStateChanges: shouldHandleStateChanges,
            storeKey: storeKey,
            displayName: displayName,
            wrappedComponentName: wrappedComponentName,
            WrappedComponent: WrappedComponent
        });
        var pure = connectOptions.pure;
        function createChildSelector(store) {
            return selectorFactory(store.dispatch, selectorFactoryOptions);
        } // If we aren't running in "pure" mode, we don't want to memoize values.
        // To avoid conditionally calling hooks, we fall back to a tiny wrapper
        // that just executes the given callback immediately.
        var usePureOnlyMemo = pure ? __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"] : function usePureOnlyMemo(callback) {
            return callback();
        };
        function ConnectFunction(props) {
            var _useMemo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
                "connectAdvanced.wrapWithConnect.ConnectFunction.useMemo[_useMemo]": function() {
                    // Distinguish between actual "data" props that were passed to the wrapper component,
                    // and values needed to control behavior (forwarded refs, alternate context instances).
                    // To maintain the wrapperProps object reference, memoize this destructuring.
                    var reactReduxForwardedRef = props.reactReduxForwardedRef, wrapperProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props, _excluded2);
                    return [
                        props.context,
                        reactReduxForwardedRef,
                        wrapperProps
                    ];
                }
            }["connectAdvanced.wrapWithConnect.ConnectFunction.useMemo[_useMemo]"], [
                props
            ]), propsContext = _useMemo[0], reactReduxForwardedRef = _useMemo[1], wrapperProps = _useMemo[2];
            var ContextToUse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
                "connectAdvanced.wrapWithConnect.ConnectFunction.useMemo[ContextToUse]": function() {
                    // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
                    // Memoize the check that determines which context instance we should use.
                    return propsContext && propsContext.Consumer && (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isContextConsumer"])(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(propsContext.Consumer, null)) ? propsContext : Context;
                }
            }["connectAdvanced.wrapWithConnect.ConnectFunction.useMemo[ContextToUse]"], [
                propsContext,
                Context
            ]); // Retrieve the store and ancestor subscription via context, if available
            var contextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ContextToUse); // The store _must_ exist as either a prop or in context.
            // We'll check to see if it _looks_ like a Redux store first.
            // This allows us to pass through a `store` prop that is just a plain value.
            var didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
            var didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);
            if (("TURBOPACK compile-time value", "development") !== 'production' && !didStoreComeFromProps && !didStoreComeFromContext) {
                throw new Error("Could not find \"store\" in the context of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + "or pass a custom React context provider to <Provider> and the corresponding " + ("React context consumer to " + displayName + " in connect options."));
            } // Based on the previous check, one of these must be true
            var store = didStoreComeFromProps ? props.store : contextValue.store;
            var childPropsSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
                "connectAdvanced.wrapWithConnect.ConnectFunction.useMemo[childPropsSelector]": function() {
                    // The child props selector needs the store reference as an input.
                    // Re-create this selector whenever the store changes.
                    return createChildSelector(store);
                }
            }["connectAdvanced.wrapWithConnect.ConnectFunction.useMemo[childPropsSelector]"], [
                store
            ]);
            var _useMemo2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
                "connectAdvanced.wrapWithConnect.ConnectFunction.useMemo[_useMemo2]": function() {
                    if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
                    // connected to the store via props shouldn't use subscription from context, or vice versa.
                    // This Subscription's source should match where store came from: props vs. context. A component
                    // connected to the store via props shouldn't use subscription from context, or vice versa.
                    var subscription = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$utils$2f$Subscription$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSubscription"])(store, didStoreComeFromProps ? null : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
                    // the middle of the notification loop, where `subscription` will then be null. This can
                    // probably be avoided if Subscription's listeners logic is changed to not call listeners
                    // that have been unsubscribed in the  middle of the notification loop.
                    // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
                    // the middle of the notification loop, where `subscription` will then be null. This can
                    // probably be avoided if Subscription's listeners logic is changed to not call listeners
                    // that have been unsubscribed in the  middle of the notification loop.
                    var notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
                    return [
                        subscription,
                        notifyNestedSubs
                    ];
                }
            }["connectAdvanced.wrapWithConnect.ConnectFunction.useMemo[_useMemo2]"], [
                store,
                didStoreComeFromProps,
                contextValue
            ]), subscription = _useMemo2[0], notifyNestedSubs = _useMemo2[1]; // Determine what {store, subscription} value should be put into nested context, if necessary,
            // and memoize that value to avoid unnecessary context updates.
            var overriddenContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
                "connectAdvanced.wrapWithConnect.ConnectFunction.useMemo[overriddenContextValue]": function() {
                    if (didStoreComeFromProps) {
                        // This component is directly subscribed to a store from props.
                        // We don't want descendants reading from this store - pass down whatever
                        // the existing context value is from the nearest connected ancestor.
                        return contextValue;
                    } // Otherwise, put this component's subscription instance into context, so that
                    // connected descendants won't update until after this component is done
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, contextValue, {
                        subscription: subscription
                    });
                }
            }["connectAdvanced.wrapWithConnect.ConnectFunction.useMemo[overriddenContextValue]"], [
                didStoreComeFromProps,
                contextValue,
                subscription
            ]); // We need to force this wrapper component to re-render whenever a Redux store update
            // causes a change to the calculated child component props (or we caught an error in mapState)
            var _useReducer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates), _useReducer$ = _useReducer[0], previousStateUpdateResult = _useReducer$[0], forceComponentUpdateDispatch = _useReducer[1]; // Propagate any mapState/mapDispatch errors upwards
            if (previousStateUpdateResult && previousStateUpdateResult.error) {
                throw previousStateUpdateResult.error;
            } // Set up refs to coordinate values between the subscription effect and the render logic
            var lastChildProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
            var lastWrapperProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(wrapperProps);
            var childPropsFromStoreUpdate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
            var renderIsScheduled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
            var actualChildProps = usePureOnlyMemo({
                "connectAdvanced.wrapWithConnect.ConnectFunction.usePureOnlyMemo[actualChildProps]": function() {
                    // Tricky logic here:
                    // - This render may have been triggered by a Redux store update that produced new child props
                    // - However, we may have gotten new wrapper props after that
                    // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
                    // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
                    // So, we'll use the child props from store update only if the wrapper props are the same as last time.
                    if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
                        return childPropsFromStoreUpdate.current;
                    } // TODO We're reading the store directly in render() here. Bad idea?
                    // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
                    // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
                    // to determine what the child props should be.
                    return childPropsSelector(store.getState(), wrapperProps);
                }
            }["connectAdvanced.wrapWithConnect.ConnectFunction.usePureOnlyMemo[actualChildProps]"], [
                store,
                previousStateUpdateResult,
                wrapperProps
            ]); // We need this to execute synchronously every time we re-render. However, React warns
            // about useLayoutEffect in SSR, so we try to detect environment and fall back to
            // just useEffect instead to avoid the warning, since neither will run anyway.
            useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [
                lastWrapperProps,
                lastChildProps,
                renderIsScheduled,
                wrapperProps,
                actualChildProps,
                childPropsFromStoreUpdate,
                notifyNestedSubs
            ]); // Our re-subscribe logic only runs when the store/subscription setup changes
            useIsomorphicLayoutEffectWithArgs(subscribeUpdates, [
                shouldHandleStateChanges,
                store,
                subscription,
                childPropsSelector,
                lastWrapperProps,
                lastChildProps,
                renderIsScheduled,
                childPropsFromStoreUpdate,
                notifyNestedSubs,
                forceComponentUpdateDispatch
            ], [
                store,
                subscription,
                childPropsSelector
            ]); // Now that all that's done, we can finally try to actually render the child component.
            // We memoize the elements for the rendered child component as an optimization.
            var renderedWrappedComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
                "connectAdvanced.wrapWithConnect.ConnectFunction.useMemo[renderedWrappedComponent]": function() {
                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(WrappedComponent, (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, actualChildProps, {
                        ref: reactReduxForwardedRef
                    }));
                }
            }["connectAdvanced.wrapWithConnect.ConnectFunction.useMemo[renderedWrappedComponent]"], [
                reactReduxForwardedRef,
                WrappedComponent,
                actualChildProps
            ]); // If React sees the exact same element reference as last time, it bails out of re-rendering
            // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.
            var renderedChild = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
                "connectAdvanced.wrapWithConnect.ConnectFunction.useMemo[renderedChild]": function() {
                    if (shouldHandleStateChanges) {
                        // If this component is subscribed to store updates, we need to pass its own
                        // subscription instance down to our descendants. That means rendering the same
                        // Context instance, and putting a different value into the context.
                        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ContextToUse.Provider, {
                            value: overriddenContextValue
                        }, renderedWrappedComponent);
                    }
                    return renderedWrappedComponent;
                }
            }["connectAdvanced.wrapWithConnect.ConnectFunction.useMemo[renderedChild]"], [
                ContextToUse,
                renderedWrappedComponent,
                overriddenContextValue
            ]);
            return renderedChild;
        } // If we're in "pure" mode, ensure our wrapper component only re-renders when incoming props have changed.
        var Connect = pure ? __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(ConnectFunction) : ConnectFunction;
        Connect.WrappedComponent = WrappedComponent;
        Connect.displayName = ConnectFunction.displayName = displayName;
        if (forwardRef) {
            var forwarded = __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(function forwardConnectRef(props, ref) {
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Connect, (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
                    reactReduxForwardedRef: ref
                }));
            });
            forwarded.displayName = displayName;
            forwarded.WrappedComponent = WrappedComponent;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$hoist$2d$non$2d$react$2d$statics$2f$dist$2f$hoist$2d$non$2d$react$2d$statics$2e$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(forwarded, WrappedComponent);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$hoist$2d$non$2d$react$2d$statics$2f$dist$2f$hoist$2d$non$2d$react$2d$statics$2e$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Connect, WrappedComponent);
    };
}
}),
"[project]/dev/portfolio-2.1/node_modules/react-redux/es/utils/shallowEqual.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>shallowEqual
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
function is(x, y) {
    if (x === y) {
        return x !== 0 || y !== 0 || 1 / x === 1 / y;
    } else {
        return x !== x && y !== y;
    }
}
function shallowEqual(objA, objB) {
    if (is(objA, objB)) return true;
    if ((typeof objA === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(objA)) !== 'object' || objA === null || (typeof objB === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(objB)) !== 'object' || objB === null) {
        return false;
    }
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) return false;
    for(var i = 0; i < keysA.length; i++){
        if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
            return false;
        }
    }
    return true;
}
}),
"[project]/dev/portfolio-2.1/node_modules/react-redux/es/utils/bindActionCreators.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>bindActionCreators
]);
function bindActionCreators(actionCreators, dispatch) {
    var boundActionCreators = {};
    var _loop = function _loop(key) {
        var actionCreator = actionCreators[key];
        if (typeof actionCreator === 'function') {
            boundActionCreators[key] = function() {
                return dispatch(actionCreator.apply(void 0, arguments));
            };
        }
    };
    for(var key in actionCreators){
        _loop(key);
    }
    return boundActionCreators;
}
}),
"[project]/dev/portfolio-2.1/node_modules/react-redux/es/utils/isPlainObject.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */ __turbopack_context__.s([
    "default",
    ()=>isPlainObject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
function isPlainObject(obj) {
    if ((typeof obj === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(obj)) !== 'object' || obj === null) return false;
    var proto = Object.getPrototypeOf(obj);
    if (proto === null) return true;
    var baseProto = proto;
    while(Object.getPrototypeOf(baseProto) !== null){
        baseProto = Object.getPrototypeOf(baseProto);
    }
    return proto === baseProto;
}
}),
"[project]/dev/portfolio-2.1/node_modules/react-redux/es/utils/warning.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */ __turbopack_context__.s([
    "default",
    ()=>warning
]);
function warning(message) {
    /* eslint-disable no-console */ if (typeof console !== 'undefined' && typeof console.error === 'function') {
        console.error(message);
    }
    /* eslint-enable no-console */ try {
        // This error was thrown as a convenience so that if you enable
        // "break on all exceptions" in your console,
        // it would pause the execution at this line.
        throw new Error(message);
    /* eslint-disable no-empty */ } catch (e) {}
/* eslint-enable no-empty */ }
}),
"[project]/dev/portfolio-2.1/node_modules/react-redux/es/utils/verifyPlainObject.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>verifyPlainObject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$utils$2f$isPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/utils/isPlainObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$utils$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/utils/warning.js [app-client] (ecmascript)");
;
;
function verifyPlainObject(value, displayName, methodName) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$utils$2f$isPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$utils$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
    }
}
}),
"[project]/dev/portfolio-2.1/node_modules/react-redux/es/connect/wrapMapToProps.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDependsOnOwnProps",
    ()=>getDependsOnOwnProps,
    "wrapMapToPropsConstant",
    ()=>wrapMapToPropsConstant,
    "wrapMapToPropsFunc",
    ()=>wrapMapToPropsFunc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$utils$2f$verifyPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/utils/verifyPlainObject.js [app-client] (ecmascript)");
;
function wrapMapToPropsConstant(getConstant) {
    return function initConstantSelector(dispatch, options) {
        var constant = getConstant(dispatch, options);
        function constantSelector() {
            return constant;
        }
        constantSelector.dependsOnOwnProps = false;
        return constantSelector;
    };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
function getDependsOnOwnProps(mapToProps) {
    return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
function wrapMapToPropsFunc(mapToProps, methodName) {
    return function initProxySelector(dispatch, _ref) {
        var displayName = _ref.displayName;
        var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
            return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
        }; // allow detectFactoryAndVerify to get ownProps
        proxy.dependsOnOwnProps = true;
        proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
            proxy.mapToProps = mapToProps;
            proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
            var props = proxy(stateOrDispatch, ownProps);
            if (typeof props === 'function') {
                proxy.mapToProps = props;
                proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
                props = proxy(stateOrDispatch, ownProps);
            }
            if ("TURBOPACK compile-time truthy", 1) (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$utils$2f$verifyPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props, displayName, methodName);
            return props;
        };
        return proxy;
    };
}
}),
"[project]/dev/portfolio-2.1/node_modules/react-redux/es/connect/mapDispatchToProps.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "whenMapDispatchToPropsIsFunction",
    ()=>whenMapDispatchToPropsIsFunction,
    "whenMapDispatchToPropsIsMissing",
    ()=>whenMapDispatchToPropsIsMissing,
    "whenMapDispatchToPropsIsObject",
    ()=>whenMapDispatchToPropsIsObject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$utils$2f$bindActionCreators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/utils/bindActionCreators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$connect$2f$wrapMapToProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/connect/wrapMapToProps.js [app-client] (ecmascript)");
;
;
;
function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
    return typeof mapDispatchToProps === 'function' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$connect$2f$wrapMapToProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapMapToPropsFunc"])(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
    return !mapDispatchToProps ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$connect$2f$wrapMapToProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapMapToPropsConstant"])(function(dispatch) {
        return {
            dispatch: dispatch
        };
    }) : undefined;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
    return mapDispatchToProps && (typeof mapDispatchToProps === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(mapDispatchToProps)) === 'object' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$connect$2f$wrapMapToProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapMapToPropsConstant"])(function(dispatch) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$utils$2f$bindActionCreators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mapDispatchToProps, dispatch);
    }) : undefined;
}
const __TURBOPACK__default__export__ = [
    whenMapDispatchToPropsIsFunction,
    whenMapDispatchToPropsIsMissing,
    whenMapDispatchToPropsIsObject
];
}),
"[project]/dev/portfolio-2.1/node_modules/react-redux/es/connect/mapStateToProps.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "whenMapStateToPropsIsFunction",
    ()=>whenMapStateToPropsIsFunction,
    "whenMapStateToPropsIsMissing",
    ()=>whenMapStateToPropsIsMissing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$connect$2f$wrapMapToProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/connect/wrapMapToProps.js [app-client] (ecmascript)");
;
function whenMapStateToPropsIsFunction(mapStateToProps) {
    return typeof mapStateToProps === 'function' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$connect$2f$wrapMapToProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapMapToPropsFunc"])(mapStateToProps, 'mapStateToProps') : undefined;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
    return !mapStateToProps ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$connect$2f$wrapMapToProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapMapToPropsConstant"])(function() {
        return {};
    }) : undefined;
}
const __TURBOPACK__default__export__ = [
    whenMapStateToPropsIsFunction,
    whenMapStateToPropsIsMissing
];
}),
"[project]/dev/portfolio-2.1/node_modules/react-redux/es/connect/mergeProps.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "defaultMergeProps",
    ()=>defaultMergeProps,
    "whenMergePropsIsFunction",
    ()=>whenMergePropsIsFunction,
    "whenMergePropsIsOmitted",
    ()=>whenMergePropsIsOmitted,
    "wrapMergePropsFunc",
    ()=>wrapMergePropsFunc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$utils$2f$verifyPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/utils/verifyPlainObject.js [app-client] (ecmascript)");
;
;
function defaultMergeProps(stateProps, dispatchProps, ownProps) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, ownProps, stateProps, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
    return function initMergePropsProxy(dispatch, _ref) {
        var displayName = _ref.displayName, pure = _ref.pure, areMergedPropsEqual = _ref.areMergedPropsEqual;
        var hasRunOnce = false;
        var mergedProps;
        return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
            var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);
            if (hasRunOnce) {
                if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
            } else {
                hasRunOnce = true;
                mergedProps = nextMergedProps;
                if ("TURBOPACK compile-time truthy", 1) (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$utils$2f$verifyPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mergedProps, displayName, 'mergeProps');
            }
            return mergedProps;
        };
    };
}
function whenMergePropsIsFunction(mergeProps) {
    return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}
function whenMergePropsIsOmitted(mergeProps) {
    return !mergeProps ? function() {
        return defaultMergeProps;
    } : undefined;
}
const __TURBOPACK__default__export__ = [
    whenMergePropsIsFunction,
    whenMergePropsIsOmitted
];
}),
"[project]/dev/portfolio-2.1/node_modules/react-redux/es/connect/verifySubselectors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>verifySubselectors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$utils$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/utils/warning.js [app-client] (ecmascript)");
;
function verify(selector, methodName, displayName) {
    if (!selector) {
        throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
    } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
        if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$utils$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
        }
    }
}
function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
    verify(mapStateToProps, 'mapStateToProps', displayName);
    verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
    verify(mergeProps, 'mergeProps', displayName);
}
}),
"[project]/dev/portfolio-2.1/node_modules/react-redux/es/connect/selectorFactory.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>finalPropsSelectorFactory,
    "impureFinalPropsSelectorFactory",
    ()=>impureFinalPropsSelectorFactory,
    "pureFinalPropsSelectorFactory",
    ()=>pureFinalPropsSelectorFactory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$connect$2f$verifySubselectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/connect/verifySubselectors.js [app-client] (ecmascript)");
;
var _excluded = [
    "initMapStateToProps",
    "initMapDispatchToProps",
    "initMergeProps"
];
;
function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
    return function impureFinalPropsSelector(state, ownProps) {
        return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
    };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
    var areStatesEqual = _ref.areStatesEqual, areOwnPropsEqual = _ref.areOwnPropsEqual, areStatePropsEqual = _ref.areStatePropsEqual;
    var hasRunAtLeastOnce = false;
    var state;
    var ownProps;
    var stateProps;
    var dispatchProps;
    var mergedProps;
    function handleFirstCall(firstState, firstOwnProps) {
        state = firstState;
        ownProps = firstOwnProps;
        stateProps = mapStateToProps(state, ownProps);
        dispatchProps = mapDispatchToProps(dispatch, ownProps);
        mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
        hasRunAtLeastOnce = true;
        return mergedProps;
    }
    function handleNewPropsAndNewState() {
        stateProps = mapStateToProps(state, ownProps);
        if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
        mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
        return mergedProps;
    }
    function handleNewProps() {
        if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
        if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
        mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
        return mergedProps;
    }
    function handleNewState() {
        var nextStateProps = mapStateToProps(state, ownProps);
        var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
        stateProps = nextStateProps;
        if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
        return mergedProps;
    }
    function handleSubsequentCalls(nextState, nextOwnProps) {
        var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
        var stateChanged = !areStatesEqual(nextState, state, nextOwnProps, ownProps);
        state = nextState;
        ownProps = nextOwnProps;
        if (propsChanged && stateChanged) return handleNewPropsAndNewState();
        if (propsChanged) return handleNewProps();
        if (stateChanged) return handleNewState();
        return mergedProps;
    }
    return function pureFinalPropsSelector(nextState, nextOwnProps) {
        return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
    };
} // TODO: Add more comments
function finalPropsSelectorFactory(dispatch, _ref2) {
    var initMapStateToProps = _ref2.initMapStateToProps, initMapDispatchToProps = _ref2.initMapDispatchToProps, initMergeProps = _ref2.initMergeProps, options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_ref2, _excluded);
    var mapStateToProps = initMapStateToProps(dispatch, options);
    var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
    var mergeProps = initMergeProps(dispatch, options);
    if ("TURBOPACK compile-time truthy", 1) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$connect$2f$verifySubselectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
    }
    var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
    return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}
}),
"[project]/dev/portfolio-2.1/node_modules/react-redux/es/connect/connect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createConnect",
    ()=>createConnect,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$components$2f$connectAdvanced$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/components/connectAdvanced.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$utils$2f$shallowEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/utils/shallowEqual.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$connect$2f$mapDispatchToProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/connect/mapDispatchToProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$connect$2f$mapStateToProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/connect/mapStateToProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$connect$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/connect/mergeProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$connect$2f$selectorFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/connect/selectorFactory.js [app-client] (ecmascript)");
;
;
;
var _excluded = [
    "pure",
    "areStatesEqual",
    "areOwnPropsEqual",
    "areStatePropsEqual",
    "areMergedPropsEqual"
];
;
;
;
;
;
;
/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */ function match(arg, factories, name) {
    for(var i = factories.length - 1; i >= 0; i--){
        var result = factories[i](arg);
        if (result) return result;
    }
    return function(dispatch, options) {
        throw new Error("Invalid value of type " + (typeof arg === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(arg)) + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
    };
}
function strictEqual(a, b) {
    return a === b;
} // createConnect with default args builds the 'official' connect behavior. Calling it with
function createConnect(_temp) {
    var _ref = _temp === void 0 ? {} : _temp, _ref$connectHOC = _ref.connectHOC, connectHOC = _ref$connectHOC === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$components$2f$connectAdvanced$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] : _ref$connectHOC, _ref$mapStateToPropsF = _ref.mapStateToPropsFactories, mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$connect$2f$mapStateToProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] : _ref$mapStateToPropsF, _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories, mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$connect$2f$mapDispatchToProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] : _ref$mapDispatchToPro, _ref$mergePropsFactor = _ref.mergePropsFactories, mergePropsFactories = _ref$mergePropsFactor === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$connect$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] : _ref$mergePropsFactor, _ref$selectorFactory = _ref.selectorFactory, selectorFactory = _ref$selectorFactory === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$connect$2f$selectorFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] : _ref$selectorFactory;
    return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
        if (_ref2 === void 0) {
            _ref2 = {};
        }
        var _ref3 = _ref2, _ref3$pure = _ref3.pure, pure = _ref3$pure === void 0 ? true : _ref3$pure, _ref3$areStatesEqual = _ref3.areStatesEqual, areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual, _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual, areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$utils$2f$shallowEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] : _ref3$areOwnPropsEqua, _ref3$areStatePropsEq = _ref3.areStatePropsEqual, areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$utils$2f$shallowEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] : _ref3$areStatePropsEq, _ref3$areMergedPropsE = _ref3.areMergedPropsEqual, areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$utils$2f$shallowEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] : _ref3$areMergedPropsE, extraOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_ref3, _excluded);
        var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
        var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
        var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
        return connectHOC(selectorFactory, (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            // used in error messages
            methodName: 'connect',
            // used to compute Connect's displayName from the wrapped component's displayName.
            getDisplayName: function getDisplayName(name) {
                return "Connect(" + name + ")";
            },
            // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
            shouldHandleStateChanges: Boolean(mapStateToProps),
            // passed through to selectorFactory
            initMapStateToProps: initMapStateToProps,
            initMapDispatchToProps: initMapDispatchToProps,
            initMergeProps: initMergeProps,
            pure: pure,
            areStatesEqual: areStatesEqual,
            areOwnPropsEqual: areOwnPropsEqual,
            areStatePropsEqual: areStatePropsEqual,
            areMergedPropsEqual: areMergedPropsEqual
        }, extraOptions));
    };
}
const __TURBOPACK__default__export__ = /*#__PURE__*/ createConnect();
}),
"[project]/dev/portfolio-2.1/node_modules/react-redux/es/hooks/useReduxContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useReduxContext",
    ()=>useReduxContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$components$2f$Context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/components/Context.js [app-client] (ecmascript)");
;
;
function useReduxContext() {
    var contextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$components$2f$Context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactReduxContext"]);
    if (("TURBOPACK compile-time value", "development") !== 'production' && !contextValue) {
        throw new Error('could not find react-redux context value; please ensure the component is wrapped in a <Provider>');
    }
    return contextValue;
}
}),
"[project]/dev/portfolio-2.1/node_modules/react-redux/es/hooks/useStore.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createStoreHook",
    ()=>createStoreHook,
    "useStore",
    ()=>useStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$components$2f$Context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/components/Context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$hooks$2f$useReduxContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/hooks/useReduxContext.js [app-client] (ecmascript)");
;
;
;
function createStoreHook(context) {
    if (context === void 0) {
        context = __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$components$2f$Context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactReduxContext"];
    }
    var useReduxContext = context === __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$components$2f$Context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactReduxContext"] ? __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$hooks$2f$useReduxContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReduxContext"] : function useReduxContext() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(context);
    };
    return function useStore() {
        var _useReduxContext = useReduxContext(), store = _useReduxContext.store;
        return store;
    };
}
var useStore = /*#__PURE__*/ createStoreHook();
}),
"[project]/dev/portfolio-2.1/node_modules/react-redux/es/hooks/useDispatch.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDispatchHook",
    ()=>createDispatchHook,
    "useDispatch",
    ()=>useDispatch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$components$2f$Context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/components/Context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$hooks$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/hooks/useStore.js [app-client] (ecmascript)");
;
;
function createDispatchHook(context) {
    if (context === void 0) {
        context = __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$components$2f$Context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactReduxContext"];
    }
    var useStore = context === __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$components$2f$Context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactReduxContext"] ? __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$hooks$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$hooks$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStoreHook"])(context);
    return function useDispatch() {
        var store = useStore();
        return store.dispatch;
    };
}
var useDispatch = /*#__PURE__*/ createDispatchHook();
}),
"[project]/dev/portfolio-2.1/node_modules/react-redux/es/hooks/useSelector.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSelectorHook",
    ()=>createSelectorHook,
    "useSelector",
    ()=>useSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$hooks$2f$useReduxContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/hooks/useReduxContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$utils$2f$Subscription$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/utils/Subscription.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$utils$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$components$2f$Context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/components/Context.js [app-client] (ecmascript)");
;
;
;
;
;
var refEquality = function refEquality(a, b) {
    return a === b;
};
function useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub) {
    var _useReducer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])({
        "useSelectorWithStoreAndSubscription.useReducer[_useReducer]": function(s) {
            return s + 1;
        }
    }["useSelectorWithStoreAndSubscription.useReducer[_useReducer]"], 0), forceRender = _useReducer[1];
    var subscription = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSelectorWithStoreAndSubscription.useMemo[subscription]": function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$utils$2f$Subscription$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSubscription"])(store, contextSub);
        }
    }["useSelectorWithStoreAndSubscription.useMemo[subscription]"], [
        store,
        contextSub
    ]);
    var latestSubscriptionCallbackError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    var latestSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    var latestStoreState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    var latestSelectedState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    var storeState = store.getState();
    var selectedState;
    try {
        if (selector !== latestSelector.current || storeState !== latestStoreState.current || latestSubscriptionCallbackError.current) {
            var newSelectedState = selector(storeState); // ensure latest selected state is reused so that a custom equality function can result in identical references
            if (latestSelectedState.current === undefined || !equalityFn(newSelectedState, latestSelectedState.current)) {
                selectedState = newSelectedState;
            } else {
                selectedState = latestSelectedState.current;
            }
        } else {
            selectedState = latestSelectedState.current;
        }
    } catch (err) {
        if (latestSubscriptionCallbackError.current) {
            err.message += "\nThe error may be correlated with this previous error:\n" + latestSubscriptionCallbackError.current.stack + "\n\n";
        }
        throw err;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$utils$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "useSelectorWithStoreAndSubscription.useIsomorphicLayoutEffect": function() {
            latestSelector.current = selector;
            latestStoreState.current = storeState;
            latestSelectedState.current = selectedState;
            latestSubscriptionCallbackError.current = undefined;
        }
    }["useSelectorWithStoreAndSubscription.useIsomorphicLayoutEffect"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$utils$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "useSelectorWithStoreAndSubscription.useIsomorphicLayoutEffect": function() {
            function checkForUpdates() {
                try {
                    var newStoreState = store.getState(); // Avoid calling selector multiple times if the store's state has not changed
                    if (newStoreState === latestStoreState.current) {
                        return;
                    }
                    var _newSelectedState = latestSelector.current(newStoreState);
                    if (equalityFn(_newSelectedState, latestSelectedState.current)) {
                        return;
                    }
                    latestSelectedState.current = _newSelectedState;
                    latestStoreState.current = newStoreState;
                } catch (err) {
                    // we ignore all errors here, since when the component
                    // is re-rendered, the selectors are called again, and
                    // will throw again, if neither props nor store state
                    // changed
                    latestSubscriptionCallbackError.current = err;
                }
                forceRender();
            }
            subscription.onStateChange = checkForUpdates;
            subscription.trySubscribe();
            checkForUpdates();
            return ({
                "useSelectorWithStoreAndSubscription.useIsomorphicLayoutEffect": function() {
                    return subscription.tryUnsubscribe();
                }
            })["useSelectorWithStoreAndSubscription.useIsomorphicLayoutEffect"];
        }
    }["useSelectorWithStoreAndSubscription.useIsomorphicLayoutEffect"], [
        store,
        subscription
    ]);
    return selectedState;
}
function createSelectorHook(context) {
    if (context === void 0) {
        context = __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$components$2f$Context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactReduxContext"];
    }
    var useReduxContext = context === __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$components$2f$Context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactReduxContext"] ? __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$hooks$2f$useReduxContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReduxContext"] : function useReduxContext() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(context);
    };
    return function useSelector(selector, equalityFn) {
        if (equalityFn === void 0) {
            equalityFn = refEquality;
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (!selector) {
                throw new Error("You must pass a selector to useSelector");
            }
            if (typeof selector !== 'function') {
                throw new Error("You must pass a function as a selector to useSelector");
            }
            if (typeof equalityFn !== 'function') {
                throw new Error("You must pass a function as an equality function to useSelector");
            }
        }
        var _useReduxContext = useReduxContext(), store = _useReduxContext.store, contextSub = _useReduxContext.subscription;
        var selectedState = useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebugValue"])(selectedState);
        return selectedState;
    };
}
var useSelector = /*#__PURE__*/ createSelectorHook();
}),
"[project]/dev/portfolio-2.1/node_modules/react-redux/es/exports.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$components$2f$Provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/components/Provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$components$2f$connectAdvanced$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/components/connectAdvanced.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$components$2f$Context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/components/Context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$connect$2f$connect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/connect/connect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$hooks$2f$useDispatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/hooks/useDispatch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$hooks$2f$useSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/hooks/useSelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$hooks$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/hooks/useStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$utils$2f$shallowEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/utils/shallowEqual.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
}),
"[project]/dev/portfolio-2.1/node_modules/react-redux/es/utils/reactBatchedUpdates.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
/* eslint-disable import/no-unresolved */ var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
}),
"[project]/dev/portfolio-2.1/node_modules/react-redux/es/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/exports.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$utils$2f$reactBatchedUpdates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/utils/reactBatchedUpdates.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$utils$2f$batch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/utils/batch.js [app-client] (ecmascript)"); // Enable batched updates in our subscriptions for use
;
;
;
// with standard React renderers (ReactDOM, React Native)
(0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$utils$2f$batch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstable_batchedUpdates"]);
;
}),
"[project]/dev/portfolio-2.1/node_modules/react-redux/es/exports.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Provider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$components$2f$Provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "ReactReduxContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$components$2f$Context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactReduxContext"],
    "connect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$connect$2f$connect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "connectAdvanced",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$components$2f$connectAdvanced$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "createDispatchHook",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$hooks$2f$useDispatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDispatchHook"],
    "createSelectorHook",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$hooks$2f$useSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelectorHook"],
    "createStoreHook",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$hooks$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStoreHook"],
    "shallowEqual",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$utils$2f$shallowEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "useDispatch",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$hooks$2f$useDispatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
    "useSelector",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$hooks$2f$useSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
    "useStore",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$hooks$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/exports.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$components$2f$Provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/components/Provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$components$2f$connectAdvanced$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/components/connectAdvanced.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$components$2f$Context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/components/Context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$connect$2f$connect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/connect/connect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$hooks$2f$useDispatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/hooks/useDispatch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$hooks$2f$useSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/hooks/useSelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$hooks$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/hooks/useStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$react$2d$redux$2f$es$2f$utils$2f$shallowEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/react-redux/es/utils/shallowEqual.js [app-client] (ecmascript)");
}),
"[project]/dev/portfolio-2.1/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var reactIs = __turbopack_context__.r("[project]/dev/portfolio-2.1/node_modules/react-is/index.js [app-client] (ecmascript)");
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */ var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};
var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};
var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
};
var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
function getStatics(component) {
    // React v16.11 and below
    if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
    } // React v16.12 and above
    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components
        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for(var i = 0; i < keys.length; ++i){
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }
    }
    return targetComponent;
}
module.exports = hoistNonReactStatics;
}),
"[project]/dev/portfolio-2.1/node_modules/use-memo-one/dist/use-memo-one.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCallback",
    ()=>useCallback,
    "useCallbackOne",
    ()=>useCallbackOne,
    "useMemo",
    ()=>useMemo,
    "useMemoOne",
    ()=>useMemoOne
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for(var i = 0; i < newInputs.length; i++){
        if (newInputs[i] !== lastInputs[i]) {
            return false;
        }
    }
    return true;
}
function useMemoOne(getResult, inputs) {
    var initial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useMemoOne.useState": function() {
            return {
                inputs: inputs,
                result: getResult()
            };
        }
    }["useMemoOne.useState"])[0];
    var isFirstRun = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    var committed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(initial);
    var useCache = isFirstRun.current || Boolean(inputs && committed.current.inputs && areInputsEqual(inputs, committed.current.inputs));
    var cache = useCache ? committed.current : {
        inputs: inputs,
        result: getResult()
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMemoOne.useEffect": function() {
            isFirstRun.current = false;
            committed.current = cache;
        }
    }["useMemoOne.useEffect"], [
        cache
    ]);
    return cache.result;
}
function useCallbackOne(callback, inputs) {
    return useMemoOne({
        "useCallbackOne.useMemoOne": function() {
            return callback;
        }
    }["useCallbackOne.useMemoOne"], inputs);
}
var useMemo = useMemoOne;
var useCallback = useCallbackOne;
;
}),
"[project]/dev/portfolio-2.1/node_modules/tiny-invariant/dist/esm/tiny-invariant.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>invariant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var isProduction = ("TURBOPACK compile-time value", "development") === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    var provided = typeof message === 'function' ? message() : message;
    var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
    throw new Error(value);
}
;
}),
"[project]/dev/portfolio-2.1/node_modules/css-box-model/dist/css-box-model.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateBox",
    ()=>calculateBox,
    "createBox",
    ()=>createBox,
    "expand",
    ()=>expand,
    "getBox",
    ()=>getBox,
    "getRect",
    ()=>getRect,
    "offset",
    ()=>offset,
    "shrink",
    ()=>shrink,
    "withScroll",
    ()=>withScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$tiny$2d$invariant$2f$dist$2f$esm$2f$tiny$2d$invariant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/portfolio-2.1/node_modules/tiny-invariant/dist/esm/tiny-invariant.js [app-client] (ecmascript)");
;
var getRect = function getRect(_ref) {
    var top = _ref.top, right = _ref.right, bottom = _ref.bottom, left = _ref.left;
    var width = right - left;
    var height = bottom - top;
    var rect = {
        top: top,
        right: right,
        bottom: bottom,
        left: left,
        width: width,
        height: height,
        x: left,
        y: top,
        center: {
            x: (right + left) / 2,
            y: (bottom + top) / 2
        }
    };
    return rect;
};
var expand = function expand(target, expandBy) {
    return {
        top: target.top - expandBy.top,
        left: target.left - expandBy.left,
        bottom: target.bottom + expandBy.bottom,
        right: target.right + expandBy.right
    };
};
var shrink = function shrink(target, shrinkBy) {
    return {
        top: target.top + shrinkBy.top,
        left: target.left + shrinkBy.left,
        bottom: target.bottom - shrinkBy.bottom,
        right: target.right - shrinkBy.right
    };
};
var shift = function shift(target, shiftBy) {
    return {
        top: target.top + shiftBy.y,
        left: target.left + shiftBy.x,
        bottom: target.bottom + shiftBy.y,
        right: target.right + shiftBy.x
    };
};
var noSpacing = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
};
var createBox = function createBox(_ref2) {
    var borderBox = _ref2.borderBox, _ref2$margin = _ref2.margin, margin = _ref2$margin === void 0 ? noSpacing : _ref2$margin, _ref2$border = _ref2.border, border = _ref2$border === void 0 ? noSpacing : _ref2$border, _ref2$padding = _ref2.padding, padding = _ref2$padding === void 0 ? noSpacing : _ref2$padding;
    var marginBox = getRect(expand(borderBox, margin));
    var paddingBox = getRect(shrink(borderBox, border));
    var contentBox = getRect(shrink(paddingBox, padding));
    return {
        marginBox: marginBox,
        borderBox: getRect(borderBox),
        paddingBox: paddingBox,
        contentBox: contentBox,
        margin: margin,
        border: border,
        padding: padding
    };
};
var parse = function parse(raw) {
    var value = raw.slice(0, -2);
    var suffix = raw.slice(-2);
    if (suffix !== 'px') {
        return 0;
    }
    var result = Number(value);
    !!isNaN(result) ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$portfolio$2d$2$2e$1$2f$node_modules$2f$tiny$2d$invariant$2f$dist$2f$esm$2f$tiny$2d$invariant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, "Could not parse value [raw: " + raw + ", without suffix: " + value + "]") : "TURBOPACK unreachable" : void 0;
    return result;
};
var getWindowScroll = function getWindowScroll() {
    return {
        x: window.pageXOffset,
        y: window.pageYOffset
    };
};
var offset = function offset(original, change) {
    var borderBox = original.borderBox, border = original.border, margin = original.margin, padding = original.padding;
    var shifted = shift(borderBox, change);
    return createBox({
        borderBox: shifted,
        border: border,
        margin: margin,
        padding: padding
    });
};
var withScroll = function withScroll(original, scroll) {
    if (scroll === void 0) {
        scroll = getWindowScroll();
    }
    return offset(original, scroll);
};
var calculateBox = function calculateBox(borderBox, styles) {
    var margin = {
        top: parse(styles.marginTop),
        right: parse(styles.marginRight),
        bottom: parse(styles.marginBottom),
        left: parse(styles.marginLeft)
    };
    var padding = {
        top: parse(styles.paddingTop),
        right: parse(styles.paddingRight),
        bottom: parse(styles.paddingBottom),
        left: parse(styles.paddingLeft)
    };
    var border = {
        top: parse(styles.borderTopWidth),
        right: parse(styles.borderRightWidth),
        bottom: parse(styles.borderBottomWidth),
        left: parse(styles.borderLeftWidth)
    };
    return createBox({
        borderBox: borderBox,
        margin: margin,
        padding: padding,
        border: border
    });
};
var getBox = function getBox(el) {
    var borderBox = el.getBoundingClientRect();
    var styles = window.getComputedStyle(el);
    return calculateBox(borderBox, styles);
};
;
}),
"[project]/dev/portfolio-2.1/node_modules/memoize-one/dist/memoize-one.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var safeIsNaN = Number.isNaN || function ponyfill(value) {
    return typeof value === 'number' && value !== value;
};
function isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for(var i = 0; i < newInputs.length; i++){
        if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}
function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) {
        isEqual = areInputsEqual;
    }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for(var _i = 0; _i < arguments.length; _i++){
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}
const __TURBOPACK__default__export__ = memoizeOne;
}),
"[project]/dev/portfolio-2.1/node_modules/raf-schd/dist/raf-schd.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var rafSchd = function rafSchd(fn) {
    var lastArgs = [];
    var frameId = null;
    var wrapperFn = function wrapperFn() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        lastArgs = args;
        if (frameId) {
            return;
        }
        frameId = requestAnimationFrame(function() {
            frameId = null;
            fn.apply(void 0, lastArgs);
        });
    };
    wrapperFn.cancel = function() {
        if (!frameId) {
            return;
        }
        cancelAnimationFrame(frameId);
        frameId = null;
    };
    return wrapperFn;
};
const __TURBOPACK__default__export__ = rafSchd;
}),
]);

//# sourceMappingURL=4e0c1_5074ecd1._.js.map