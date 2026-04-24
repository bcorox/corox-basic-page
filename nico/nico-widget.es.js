var d0 = { exports: {} }, Kp = {}, p0 = { exports: {} }, wt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xx;
function J_() {
  if (Xx) return wt;
  Xx = 1;
  var $ = Symbol.for("react.element"), V = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), re = Symbol.for("react.strict_mode"), ke = Symbol.for("react.profiler"), be = Symbol.for("react.provider"), Pe = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), Ne = Symbol.for("react.suspense"), ue = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), Me = Symbol.iterator;
  function J(b) {
    return b === null || typeof b != "object" ? null : (b = Me && b[Me] || b["@@iterator"], typeof b == "function" ? b : null);
  }
  var De = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ie = Object.assign, _e = {};
  function Xe(b, B, Ce) {
    this.props = b, this.context = B, this.refs = _e, this.updater = Ce || De;
  }
  Xe.prototype.isReactComponent = {}, Xe.prototype.setState = function(b, B) {
    if (typeof b != "object" && typeof b != "function" && b != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, b, B, "setState");
  }, Xe.prototype.forceUpdate = function(b) {
    this.updater.enqueueForceUpdate(this, b, "forceUpdate");
  };
  function Sn() {
  }
  Sn.prototype = Xe.prototype;
  function Ut(b, B, Ce) {
    this.props = b, this.context = B, this.refs = _e, this.updater = Ce || De;
  }
  var et = Ut.prototype = new Sn();
  et.constructor = Ut, ie(et, Xe.prototype), et.isPureReactComponent = !0;
  var Ue = Array.isArray, xt = Object.prototype.hasOwnProperty, ge = { current: null }, lt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Be(b, B, Ce) {
    var Ie, Ye = {}, ut = null, Rt = null;
    if (B != null) for (Ie in B.ref !== void 0 && (Rt = B.ref), B.key !== void 0 && (ut = "" + B.key), B) xt.call(B, Ie) && !lt.hasOwnProperty(Ie) && (Ye[Ie] = B[Ie]);
    var Ge = arguments.length - 2;
    if (Ge === 1) Ye.children = Ce;
    else if (1 < Ge) {
      for (var Tt = Array(Ge), Yt = 0; Yt < Ge; Yt++) Tt[Yt] = arguments[Yt + 2];
      Ye.children = Tt;
    }
    if (b && b.defaultProps) for (Ie in Ge = b.defaultProps, Ge) Ye[Ie] === void 0 && (Ye[Ie] = Ge[Ie]);
    return { $$typeof: $, type: b, key: ut, ref: Rt, props: Ye, _owner: ge.current };
  }
  function vn(b, B) {
    return { $$typeof: $, type: b.type, key: B, ref: b.ref, props: b.props, _owner: b._owner };
  }
  function dt(b) {
    return typeof b == "object" && b !== null && b.$$typeof === $;
  }
  function tn(b) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + b.replace(/[=:]/g, function(Ce) {
      return B[Ce];
    });
  }
  var Ht = /\/+/g;
  function yt(b, B) {
    return typeof b == "object" && b !== null && b.key != null ? tn("" + b.key) : B.toString(36);
  }
  function Fe(b, B, Ce, Ie, Ye) {
    var ut = typeof b;
    (ut === "undefined" || ut === "boolean") && (b = null);
    var Rt = !1;
    if (b === null) Rt = !0;
    else switch (ut) {
      case "string":
      case "number":
        Rt = !0;
        break;
      case "object":
        switch (b.$$typeof) {
          case $:
          case V:
            Rt = !0;
        }
    }
    if (Rt) return Rt = b, Ye = Ye(Rt), b = Ie === "" ? "." + yt(Rt, 0) : Ie, Ue(Ye) ? (Ce = "", b != null && (Ce = b.replace(Ht, "$&/") + "/"), Fe(Ye, B, Ce, "", function(Yt) {
      return Yt;
    })) : Ye != null && (dt(Ye) && (Ye = vn(Ye, Ce + (!Ye.key || Rt && Rt.key === Ye.key ? "" : ("" + Ye.key).replace(Ht, "$&/") + "/") + b)), B.push(Ye)), 1;
    if (Rt = 0, Ie = Ie === "" ? "." : Ie + ":", Ue(b)) for (var Ge = 0; Ge < b.length; Ge++) {
      ut = b[Ge];
      var Tt = Ie + yt(ut, Ge);
      Rt += Fe(ut, B, Ce, Tt, Ye);
    }
    else if (Tt = J(b), typeof Tt == "function") for (b = Tt.call(b), Ge = 0; !(ut = b.next()).done; ) ut = ut.value, Tt = Ie + yt(ut, Ge++), Rt += Fe(ut, B, Ce, Tt, Ye);
    else if (ut === "object") throw B = String(b), Error("Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead.");
    return Rt;
  }
  function Nt(b, B, Ce) {
    if (b == null) return b;
    var Ie = [], Ye = 0;
    return Fe(b, Ie, "", "", function(ut) {
      return B.call(Ce, ut, Ye++);
    }), Ie;
  }
  function vt(b) {
    if (b._status === -1) {
      var B = b._result;
      B = B(), B.then(function(Ce) {
        (b._status === 0 || b._status === -1) && (b._status = 1, b._result = Ce);
      }, function(Ce) {
        (b._status === 0 || b._status === -1) && (b._status = 2, b._result = Ce);
      }), b._status === -1 && (b._status = 0, b._result = B);
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var ot = { current: null }, Y = { transition: null }, Se = { ReactCurrentDispatcher: ot, ReactCurrentBatchConfig: Y, ReactCurrentOwner: ge };
  function te() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return wt.Children = { map: Nt, forEach: function(b, B, Ce) {
    Nt(b, function() {
      B.apply(this, arguments);
    }, Ce);
  }, count: function(b) {
    var B = 0;
    return Nt(b, function() {
      B++;
    }), B;
  }, toArray: function(b) {
    return Nt(b, function(B) {
      return B;
    }) || [];
  }, only: function(b) {
    if (!dt(b)) throw Error("React.Children.only expected to receive a single React element child.");
    return b;
  } }, wt.Component = Xe, wt.Fragment = k, wt.Profiler = ke, wt.PureComponent = Ut, wt.StrictMode = re, wt.Suspense = Ne, wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Se, wt.act = te, wt.cloneElement = function(b, B, Ce) {
    if (b == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + b + ".");
    var Ie = ie({}, b.props), Ye = b.key, ut = b.ref, Rt = b._owner;
    if (B != null) {
      if (B.ref !== void 0 && (ut = B.ref, Rt = ge.current), B.key !== void 0 && (Ye = "" + B.key), b.type && b.type.defaultProps) var Ge = b.type.defaultProps;
      for (Tt in B) xt.call(B, Tt) && !lt.hasOwnProperty(Tt) && (Ie[Tt] = B[Tt] === void 0 && Ge !== void 0 ? Ge[Tt] : B[Tt]);
    }
    var Tt = arguments.length - 2;
    if (Tt === 1) Ie.children = Ce;
    else if (1 < Tt) {
      Ge = Array(Tt);
      for (var Yt = 0; Yt < Tt; Yt++) Ge[Yt] = arguments[Yt + 2];
      Ie.children = Ge;
    }
    return { $$typeof: $, type: b.type, key: Ye, ref: ut, props: Ie, _owner: Rt };
  }, wt.createContext = function(b) {
    return b = { $$typeof: Pe, _currentValue: b, _currentValue2: b, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, b.Provider = { $$typeof: be, _context: b }, b.Consumer = b;
  }, wt.createElement = Be, wt.createFactory = function(b) {
    var B = Be.bind(null, b);
    return B.type = b, B;
  }, wt.createRef = function() {
    return { current: null };
  }, wt.forwardRef = function(b) {
    return { $$typeof: S, render: b };
  }, wt.isValidElement = dt, wt.lazy = function(b) {
    return { $$typeof: ee, _payload: { _status: -1, _result: b }, _init: vt };
  }, wt.memo = function(b, B) {
    return { $$typeof: ue, type: b, compare: B === void 0 ? null : B };
  }, wt.startTransition = function(b) {
    var B = Y.transition;
    Y.transition = {};
    try {
      b();
    } finally {
      Y.transition = B;
    }
  }, wt.unstable_act = te, wt.useCallback = function(b, B) {
    return ot.current.useCallback(b, B);
  }, wt.useContext = function(b) {
    return ot.current.useContext(b);
  }, wt.useDebugValue = function() {
  }, wt.useDeferredValue = function(b) {
    return ot.current.useDeferredValue(b);
  }, wt.useEffect = function(b, B) {
    return ot.current.useEffect(b, B);
  }, wt.useId = function() {
    return ot.current.useId();
  }, wt.useImperativeHandle = function(b, B, Ce) {
    return ot.current.useImperativeHandle(b, B, Ce);
  }, wt.useInsertionEffect = function(b, B) {
    return ot.current.useInsertionEffect(b, B);
  }, wt.useLayoutEffect = function(b, B) {
    return ot.current.useLayoutEffect(b, B);
  }, wt.useMemo = function(b, B) {
    return ot.current.useMemo(b, B);
  }, wt.useReducer = function(b, B, Ce) {
    return ot.current.useReducer(b, B, Ce);
  }, wt.useRef = function(b) {
    return ot.current.useRef(b);
  }, wt.useState = function(b) {
    return ot.current.useState(b);
  }, wt.useSyncExternalStore = function(b, B, Ce) {
    return ot.current.useSyncExternalStore(b, B, Ce);
  }, wt.useTransition = function() {
    return ot.current.useTransition();
  }, wt.version = "18.3.1", wt;
}
var Jp = { exports: {} };
Jp.exports;
var Jx;
function Z_() {
  return Jx || (Jx = 1, function($, V) {
    var k = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    k.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var re = "18.3.1", ke = Symbol.for("react.element"), be = Symbol.for("react.portal"), Pe = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), Ne = Symbol.for("react.profiler"), ue = Symbol.for("react.provider"), ee = Symbol.for("react.context"), Me = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), De = Symbol.for("react.suspense_list"), ie = Symbol.for("react.memo"), _e = Symbol.for("react.lazy"), Xe = Symbol.for("react.offscreen"), Sn = Symbol.iterator, Ut = "@@iterator";
      function et(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = Sn && h[Sn] || h[Ut];
        return typeof C == "function" ? C : null;
      }
      var Ue = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, xt = {
        transition: null
      }, ge = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, lt = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Be = {}, vn = null;
      function dt(h) {
        vn = h;
      }
      Be.setExtraStackFrame = function(h) {
        vn = h;
      }, Be.getCurrentStack = null, Be.getStackAddendum = function() {
        var h = "";
        vn && (h += vn);
        var C = Be.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var tn = !1, Ht = !1, yt = !1, Fe = !1, Nt = !1, vt = {
        ReactCurrentDispatcher: Ue,
        ReactCurrentBatchConfig: xt,
        ReactCurrentOwner: lt
      };
      vt.ReactDebugCurrentFrame = Be, vt.ReactCurrentActQueue = ge;
      function ot(h) {
        {
          for (var C = arguments.length, L = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            L[j - 1] = arguments[j];
          Se("warn", h, L);
        }
      }
      function Y(h) {
        {
          for (var C = arguments.length, L = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            L[j - 1] = arguments[j];
          Se("error", h, L);
        }
      }
      function Se(h, C, L) {
        {
          var j = vt.ReactDebugCurrentFrame, ne = j.getStackAddendum();
          ne !== "" && (C += "%s", L = L.concat([ne]));
          var xe = L.map(function(ve) {
            return String(ve);
          });
          xe.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, xe);
        }
      }
      var te = {};
      function b(h, C) {
        {
          var L = h.constructor, j = L && (L.displayName || L.name) || "ReactClass", ne = j + "." + C;
          if (te[ne])
            return;
          Y("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, j), te[ne] = !0;
        }
      }
      var B = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, C, L) {
          b(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, C, L, j) {
          b(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, C, L, j) {
          b(h, "setState");
        }
      }, Ce = Object.assign, Ie = {};
      Object.freeze(Ie);
      function Ye(h, C, L) {
        this.props = h, this.context = C, this.refs = Ie, this.updater = L || B;
      }
      Ye.prototype.isReactComponent = {}, Ye.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Ye.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var ut = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Rt = function(h, C) {
          Object.defineProperty(Ye.prototype, h, {
            get: function() {
              ot("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var Ge in ut)
          ut.hasOwnProperty(Ge) && Rt(Ge, ut[Ge]);
      }
      function Tt() {
      }
      Tt.prototype = Ye.prototype;
      function Yt(h, C, L) {
        this.props = h, this.context = C, this.refs = Ie, this.updater = L || B;
      }
      var Mn = Yt.prototype = new Tt();
      Mn.constructor = Yt, Ce(Mn, Ye.prototype), Mn.isPureReactComponent = !0;
      function qn() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var ir = Array.isArray;
      function Ln(h) {
        return ir(h);
      }
      function Cr(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, L = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return L;
        }
      }
      function Bn(h) {
        try {
          return zn(h), !1;
        } catch {
          return !0;
        }
      }
      function zn(h) {
        return "" + h;
      }
      function da(h) {
        if (Bn(h))
          return Y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Cr(h)), zn(h);
      }
      function Ga(h, C, L) {
        var j = h.displayName;
        if (j)
          return j;
        var ne = C.displayName || C.name || "";
        return ne !== "" ? L + "(" + ne + ")" : L;
      }
      function Or(h) {
        return h.displayName || "Context";
      }
      function In(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && Y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case Pe:
            return "Fragment";
          case be:
            return "Portal";
          case Ne:
            return "Profiler";
          case S:
            return "StrictMode";
          case J:
            return "Suspense";
          case De:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case ee:
              var C = h;
              return Or(C) + ".Consumer";
            case ue:
              var L = h;
              return Or(L._context) + ".Provider";
            case Me:
              return Ga(h, h.render, "ForwardRef");
            case ie:
              var j = h.displayName || null;
              return j !== null ? j : In(h.type) || "Memo";
            case _e: {
              var ne = h, xe = ne._payload, ve = ne._init;
              try {
                return In(ve(xe));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Kn = Object.prototype.hasOwnProperty, Xn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, xr, qa, Un;
      Un = {};
      function lr(h) {
        if (Kn.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function Qr(h) {
        if (Kn.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function Ni(h, C) {
        var L = function() {
          xr || (xr = !0, Y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        L.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: L,
          configurable: !0
        });
      }
      function pa(h, C) {
        var L = function() {
          qa || (qa = !0, Y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        L.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: L,
          configurable: !0
        });
      }
      function ae(h) {
        if (typeof h.ref == "string" && lt.current && h.__self && lt.current.stateNode !== h.__self) {
          var C = In(lt.current.type);
          Un[C] || (Y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), Un[C] = !0);
        }
      }
      var je = function(h, C, L, j, ne, xe, ve) {
        var Qe = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: ke,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: L,
          props: ve,
          // Record the component responsible for creating this element.
          _owner: xe
        };
        return Qe._store = {}, Object.defineProperty(Qe._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Qe, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: j
        }), Object.defineProperty(Qe, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ne
        }), Object.freeze && (Object.freeze(Qe.props), Object.freeze(Qe)), Qe;
      };
      function st(h, C, L) {
        var j, ne = {}, xe = null, ve = null, Qe = null, ft = null;
        if (C != null) {
          lr(C) && (ve = C.ref, ae(C)), Qr(C) && (da(C.key), xe = "" + C.key), Qe = C.__self === void 0 ? null : C.__self, ft = C.__source === void 0 ? null : C.__source;
          for (j in C)
            Kn.call(C, j) && !Xn.hasOwnProperty(j) && (ne[j] = C[j]);
        }
        var Vt = arguments.length - 2;
        if (Vt === 1)
          ne.children = L;
        else if (Vt > 1) {
          for (var Kt = Array(Vt), Xt = 0; Xt < Vt; Xt++)
            Kt[Xt] = arguments[Xt + 2];
          Object.freeze && Object.freeze(Kt), ne.children = Kt;
        }
        if (h && h.defaultProps) {
          var at = h.defaultProps;
          for (j in at)
            ne[j] === void 0 && (ne[j] = at[j]);
        }
        if (xe || ve) {
          var nn = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          xe && Ni(ne, nn), ve && pa(ne, nn);
        }
        return je(h, xe, ve, Qe, ft, lt.current, ne);
      }
      function At(h, C) {
        var L = je(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return L;
      }
      function un(h, C, L) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var j, ne = Ce({}, h.props), xe = h.key, ve = h.ref, Qe = h._self, ft = h._source, Vt = h._owner;
        if (C != null) {
          lr(C) && (ve = C.ref, Vt = lt.current), Qr(C) && (da(C.key), xe = "" + C.key);
          var Kt;
          h.type && h.type.defaultProps && (Kt = h.type.defaultProps);
          for (j in C)
            Kn.call(C, j) && !Xn.hasOwnProperty(j) && (C[j] === void 0 && Kt !== void 0 ? ne[j] = Kt[j] : ne[j] = C[j]);
        }
        var Xt = arguments.length - 2;
        if (Xt === 1)
          ne.children = L;
        else if (Xt > 1) {
          for (var at = Array(Xt), nn = 0; nn < Xt; nn++)
            at[nn] = arguments[nn + 2];
          ne.children = at;
        }
        return je(h.type, xe, ve, Qe, ft, Vt, ne);
      }
      function sn(h) {
        return typeof h == "object" && h !== null && h.$$typeof === ke;
      }
      var cn = ".", Jn = ":";
      function ln(h) {
        var C = /[=:]/g, L = {
          "=": "=0",
          ":": "=2"
        }, j = h.replace(C, function(ne) {
          return L[ne];
        });
        return "$" + j;
      }
      var Gt = !1, jt = /\/+/g;
      function va(h) {
        return h.replace(jt, "$&/");
      }
      function ka(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (da(h.key), ln("" + h.key)) : C.toString(36);
      }
      function Da(h, C, L, j, ne) {
        var xe = typeof h;
        (xe === "undefined" || xe === "boolean") && (h = null);
        var ve = !1;
        if (h === null)
          ve = !0;
        else
          switch (xe) {
            case "string":
            case "number":
              ve = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case ke:
                case be:
                  ve = !0;
              }
          }
        if (ve) {
          var Qe = h, ft = ne(Qe), Vt = j === "" ? cn + ka(Qe, 0) : j;
          if (Ln(ft)) {
            var Kt = "";
            Vt != null && (Kt = va(Vt) + "/"), Da(ft, C, Kt, "", function(Xf) {
              return Xf;
            });
          } else ft != null && (sn(ft) && (ft.key && (!Qe || Qe.key !== ft.key) && da(ft.key), ft = At(
            ft,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            L + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (ft.key && (!Qe || Qe.key !== ft.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              va("" + ft.key) + "/"
            ) : "") + Vt
          )), C.push(ft));
          return 1;
        }
        var Xt, at, nn = 0, wn = j === "" ? cn : j + Jn;
        if (Ln(h))
          for (var Zl = 0; Zl < h.length; Zl++)
            Xt = h[Zl], at = wn + ka(Xt, Zl), nn += Da(Xt, C, L, at, ne);
        else {
          var Gu = et(h);
          if (typeof Gu == "function") {
            var Pi = h;
            Gu === Pi.entries && (Gt || ot("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Gt = !0);
            for (var eo = Gu.call(Pi), qu, Kf = 0; !(qu = eo.next()).done; )
              Xt = qu.value, at = wn + ka(Xt, Kf++), nn += Da(Xt, C, L, at, ne);
          } else if (xe === "object") {
            var sc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (sc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : sc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return nn;
      }
      function Mi(h, C, L) {
        if (h == null)
          return h;
        var j = [], ne = 0;
        return Da(h, j, "", "", function(xe) {
          return C.call(L, xe, ne++);
        }), j;
      }
      function $l(h) {
        var C = 0;
        return Mi(h, function() {
          C++;
        }), C;
      }
      function Ql(h, C, L) {
        Mi(h, function() {
          C.apply(this, arguments);
        }, L);
      }
      function Li(h) {
        return Mi(h, function(C) {
          return C;
        }) || [];
      }
      function Wl(h) {
        if (!sn(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function si(h) {
        var C = {
          $$typeof: ee,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: ue,
          _context: C
        };
        var L = !1, j = !1, ne = !1;
        {
          var xe = {
            $$typeof: ee,
            _context: C
          };
          Object.defineProperties(xe, {
            Provider: {
              get: function() {
                return j || (j = !0, Y("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(ve) {
                C.Provider = ve;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(ve) {
                C._currentValue = ve;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(ve) {
                C._currentValue2 = ve;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(ve) {
                C._threadCount = ve;
              }
            },
            Consumer: {
              get: function() {
                return L || (L = !0, Y("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(ve) {
                ne || (ot("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ve), ne = !0);
              }
            }
          }), C.Consumer = xe;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var ha = -1, or = 0, ma = 1, Wr = 2;
      function ci(h) {
        if (h._status === ha) {
          var C = h._result, L = C();
          if (L.then(function(xe) {
            if (h._status === or || h._status === ha) {
              var ve = h;
              ve._status = ma, ve._result = xe;
            }
          }, function(xe) {
            if (h._status === or || h._status === ha) {
              var ve = h;
              ve._status = Wr, ve._result = xe;
            }
          }), h._status === ha) {
            var j = h;
            j._status = or, j._result = L;
          }
        }
        if (h._status === ma) {
          var ne = h._result;
          return ne === void 0 && Y(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ne), "default" in ne || Y(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ne), ne.default;
        } else
          throw h._result;
      }
      function fi(h) {
        var C = {
          // We use these fields to store the result.
          _status: ha,
          _result: h
        }, L = {
          $$typeof: _e,
          _payload: C,
          _init: ci
        };
        {
          var j, ne;
          Object.defineProperties(L, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return j;
              },
              set: function(xe) {
                Y("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), j = xe, Object.defineProperty(L, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ne;
              },
              set: function(xe) {
                Y("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ne = xe, Object.defineProperty(L, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return L;
      }
      function zi(h) {
        h != null && h.$$typeof === ie ? Y("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? Y("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && Y("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && Y("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: Me,
          render: h
        };
        {
          var L;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return L;
            },
            set: function(j) {
              L = j, !h.name && !h.displayName && (h.displayName = j);
            }
          });
        }
        return C;
      }
      var x;
      x = Symbol.for("react.module.reference");
      function Q(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === Pe || h === Ne || Nt || h === S || h === J || h === De || Fe || h === Xe || tn || Ht || yt || typeof h == "object" && h !== null && (h.$$typeof === _e || h.$$typeof === ie || h.$$typeof === ue || h.$$typeof === ee || h.$$typeof === Me || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === x || h.getModuleId !== void 0));
      }
      function se(h, C) {
        Q(h) || Y("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var L = {
          $$typeof: ie,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var j;
          Object.defineProperty(L, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return j;
            },
            set: function(ne) {
              j = ne, !h.name && !h.displayName && (h.displayName = ne);
            }
          });
        }
        return L;
      }
      function fe() {
        var h = Ue.current;
        return h === null && Y(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function ht(h) {
        var C = fe();
        if (h._context !== void 0) {
          var L = h._context;
          L.Consumer === h ? Y("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : L.Provider === h && Y("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function Je(h) {
        var C = fe();
        return C.useState(h);
      }
      function gt(h, C, L) {
        var j = fe();
        return j.useReducer(h, C, L);
      }
      function ct(h) {
        var C = fe();
        return C.useRef(h);
      }
      function bn(h, C) {
        var L = fe();
        return L.useEffect(h, C);
      }
      function on(h, C) {
        var L = fe();
        return L.useInsertionEffect(h, C);
      }
      function fn(h, C) {
        var L = fe();
        return L.useLayoutEffect(h, C);
      }
      function Rr(h, C) {
        var L = fe();
        return L.useCallback(h, C);
      }
      function Ka(h, C) {
        var L = fe();
        return L.useMemo(h, C);
      }
      function Ft(h, C, L) {
        var j = fe();
        return j.useImperativeHandle(h, C, L);
      }
      function hn(h, C) {
        {
          var L = fe();
          return L.useDebugValue(h, C);
        }
      }
      function nt() {
        var h = fe();
        return h.useTransition();
      }
      function di(h) {
        var C = fe();
        return C.useDeferredValue(h);
      }
      function Ui() {
        var h = fe();
        return h.useId();
      }
      function ic(h, C, L) {
        var j = fe();
        return j.useSyncExternalStore(h, C, L);
      }
      var Ai = 0, ol, Gr, Bu, Nr, Iu, lc, oc;
      function ji() {
      }
      ji.__reactDisabledLog = !0;
      function ul() {
        {
          if (Ai === 0) {
            ol = console.log, Gr = console.info, Bu = console.warn, Nr = console.error, Iu = console.group, lc = console.groupCollapsed, oc = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: ji,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          Ai++;
        }
      }
      function qr() {
        {
          if (Ai--, Ai === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: Ce({}, h, {
                value: ol
              }),
              info: Ce({}, h, {
                value: Gr
              }),
              warn: Ce({}, h, {
                value: Bu
              }),
              error: Ce({}, h, {
                value: Nr
              }),
              group: Ce({}, h, {
                value: Iu
              }),
              groupCollapsed: Ce({}, h, {
                value: lc
              }),
              groupEnd: Ce({}, h, {
                value: oc
              })
            });
          }
          Ai < 0 && Y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var pi = vt.ReactCurrentDispatcher, sl;
      function Ho(h, C, L) {
        {
          if (sl === void 0)
            try {
              throw Error();
            } catch (ne) {
              var j = ne.stack.trim().match(/\n( *(at )?)/);
              sl = j && j[1] || "";
            }
          return `
` + sl + h;
        }
      }
      var Fi = !1, Gl;
      {
        var ql = typeof WeakMap == "function" ? WeakMap : Map;
        Gl = new ql();
      }
      function cl(h, C) {
        if (!h || Fi)
          return "";
        {
          var L = Gl.get(h);
          if (L !== void 0)
            return L;
        }
        var j;
        Fi = !0;
        var ne = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var xe;
        xe = pi.current, pi.current = null, ul();
        try {
          if (C) {
            var ve = function() {
              throw Error();
            };
            if (Object.defineProperty(ve.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ve, []);
              } catch (wn) {
                j = wn;
              }
              Reflect.construct(h, [], ve);
            } else {
              try {
                ve.call();
              } catch (wn) {
                j = wn;
              }
              h.call(ve.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (wn) {
              j = wn;
            }
            h();
          }
        } catch (wn) {
          if (wn && j && typeof wn.stack == "string") {
            for (var Qe = wn.stack.split(`
`), ft = j.stack.split(`
`), Vt = Qe.length - 1, Kt = ft.length - 1; Vt >= 1 && Kt >= 0 && Qe[Vt] !== ft[Kt]; )
              Kt--;
            for (; Vt >= 1 && Kt >= 0; Vt--, Kt--)
              if (Qe[Vt] !== ft[Kt]) {
                if (Vt !== 1 || Kt !== 1)
                  do
                    if (Vt--, Kt--, Kt < 0 || Qe[Vt] !== ft[Kt]) {
                      var Xt = `
` + Qe[Vt].replace(" at new ", " at ");
                      return h.displayName && Xt.includes("<anonymous>") && (Xt = Xt.replace("<anonymous>", h.displayName)), typeof h == "function" && Gl.set(h, Xt), Xt;
                    }
                  while (Vt >= 1 && Kt >= 0);
                break;
              }
          }
        } finally {
          Fi = !1, pi.current = xe, qr(), Error.prepareStackTrace = ne;
        }
        var at = h ? h.displayName || h.name : "", nn = at ? Ho(at) : "";
        return typeof h == "function" && Gl.set(h, nn), nn;
      }
      function Yu(h, C, L) {
        return cl(h, !1);
      }
      function $u(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function _t(h, C, L) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return cl(h, $u(h));
        if (typeof h == "string")
          return Ho(h);
        switch (h) {
          case J:
            return Ho("Suspense");
          case De:
            return Ho("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Me:
              return Yu(h.render);
            case ie:
              return _t(h.type, C, L);
            case _e: {
              var j = h, ne = j._payload, xe = j._init;
              try {
                return _t(xe(ne), C, L);
              } catch {
              }
            }
          }
        return "";
      }
      var Qu = {}, Vo = vt.ReactDebugCurrentFrame;
      function kt(h) {
        if (h) {
          var C = h._owner, L = _t(h.type, h._source, C ? C.type : null);
          Vo.setExtraStackFrame(L);
        } else
          Vo.setExtraStackFrame(null);
      }
      function uc(h, C, L, j, ne) {
        {
          var xe = Function.call.bind(Kn);
          for (var ve in h)
            if (xe(h, ve)) {
              var Qe = void 0;
              try {
                if (typeof h[ve] != "function") {
                  var ft = Error((j || "React class") + ": " + L + " type `" + ve + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ve] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw ft.name = "Invariant Violation", ft;
                }
                Qe = h[ve](C, ve, j, L, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Vt) {
                Qe = Vt;
              }
              Qe && !(Qe instanceof Error) && (kt(ne), Y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", L, ve, typeof Qe), kt(null)), Qe instanceof Error && !(Qe.message in Qu) && (Qu[Qe.message] = !0, kt(ne), Y("Failed %s type: %s", L, Qe.message), kt(null));
            }
        }
      }
      function vi(h) {
        if (h) {
          var C = h._owner, L = _t(h.type, h._source, C ? C.type : null);
          dt(L);
        } else
          dt(null);
      }
      var qe;
      qe = !1;
      function Kl() {
        if (lt.current) {
          var h = In(lt.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Zn(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), L = h.lineNumber;
          return `

Check your code at ` + C + ":" + L + ".";
        }
        return "";
      }
      function Kr(h) {
        return h != null ? Zn(h.__source) : "";
      }
      var Mr = {};
      function hi(h) {
        var C = Kl();
        if (!C) {
          var L = typeof h == "string" ? h : h.displayName || h.name;
          L && (C = `

Check the top-level render call using <` + L + ">.");
        }
        return C;
      }
      function Cn(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var L = hi(C);
          if (!Mr[L]) {
            Mr[L] = !0;
            var j = "";
            h && h._owner && h._owner !== lt.current && (j = " It was passed a child from " + In(h._owner.type) + "."), vi(h), Y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', L, j), vi(null);
          }
        }
      }
      function qt(h, C) {
        if (typeof h == "object") {
          if (Ln(h))
            for (var L = 0; L < h.length; L++) {
              var j = h[L];
              sn(j) && Cn(j, C);
            }
          else if (sn(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var ne = et(h);
            if (typeof ne == "function" && ne !== h.entries)
              for (var xe = ne.call(h), ve; !(ve = xe.next()).done; )
                sn(ve.value) && Cn(ve.value, C);
          }
        }
      }
      function Xa(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var L;
          if (typeof C == "function")
            L = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === Me || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === ie))
            L = C.propTypes;
          else
            return;
          if (L) {
            var j = In(C);
            uc(L, h.props, "prop", j, h);
          } else if (C.PropTypes !== void 0 && !qe) {
            qe = !0;
            var ne = In(C);
            Y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ne || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && Y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Oa(h) {
        {
          for (var C = Object.keys(h.props), L = 0; L < C.length; L++) {
            var j = C[L];
            if (j !== "children" && j !== "key") {
              vi(h), Y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), vi(null);
              break;
            }
          }
          h.ref !== null && (vi(h), Y("Invalid attribute `ref` supplied to `React.Fragment`."), vi(null));
        }
      }
      function Tr(h, C, L) {
        var j = Q(h);
        if (!j) {
          var ne = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (ne += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var xe = Kr(C);
          xe ? ne += xe : ne += Kl();
          var ve;
          h === null ? ve = "null" : Ln(h) ? ve = "array" : h !== void 0 && h.$$typeof === ke ? (ve = "<" + (In(h.type) || "Unknown") + " />", ne = " Did you accidentally export a JSX literal instead of a component?") : ve = typeof h, Y("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ve, ne);
        }
        var Qe = st.apply(this, arguments);
        if (Qe == null)
          return Qe;
        if (j)
          for (var ft = 2; ft < arguments.length; ft++)
            qt(arguments[ft], h);
        return h === Pe ? Oa(Qe) : Xa(Qe), Qe;
      }
      var Lr = !1;
      function qf(h) {
        var C = Tr.bind(null, h);
        return C.type = h, Lr || (Lr = !0, ot("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return ot("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Po(h, C, L) {
        for (var j = un.apply(this, arguments), ne = 2; ne < arguments.length; ne++)
          qt(arguments[ne], j.type);
        return Xa(j), j;
      }
      function Xl(h, C) {
        var L = xt.transition;
        xt.transition = {};
        var j = xt.transition;
        xt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (xt.transition = L, L === null && j._updatedFibers) {
            var ne = j._updatedFibers.size;
            ne > 10 && ot("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), j._updatedFibers.clear();
          }
        }
      }
      var Bo = !1, Io = null;
      function Jl(h) {
        if (Io === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), L = $ && $[C];
            Io = L.call($, "timers").setImmediate;
          } catch {
            Io = function(ne) {
              Bo === !1 && (Bo = !0, typeof MessageChannel > "u" && Y("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var xe = new MessageChannel();
              xe.port1.onmessage = ne, xe.port2.postMessage(void 0);
            };
          }
        return Io(h);
      }
      var Na = 0, Ma = !1;
      function fl(h) {
        {
          var C = Na;
          Na++, ge.current === null && (ge.current = []);
          var L = ge.isBatchingLegacy, j;
          try {
            if (ge.isBatchingLegacy = !0, j = h(), !L && ge.didScheduleLegacyUpdate) {
              var ne = ge.current;
              ne !== null && (ge.didScheduleLegacyUpdate = !1, Vi(ne));
            }
          } catch (at) {
            throw Hi(C), at;
          } finally {
            ge.isBatchingLegacy = L;
          }
          if (j !== null && typeof j == "object" && typeof j.then == "function") {
            var xe = j, ve = !1, Qe = {
              then: function(at, nn) {
                ve = !0, xe.then(function(wn) {
                  Hi(C), Na === 0 ? Yo(wn, at, nn) : at(wn);
                }, function(wn) {
                  Hi(C), nn(wn);
                });
              }
            };
            return !Ma && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ve || (Ma = !0, Y("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Qe;
          } else {
            var ft = j;
            if (Hi(C), Na === 0) {
              var Vt = ge.current;
              Vt !== null && (Vi(Vt), ge.current = null);
              var Kt = {
                then: function(at, nn) {
                  ge.current === null ? (ge.current = [], Yo(ft, at, nn)) : at(ft);
                }
              };
              return Kt;
            } else {
              var Xt = {
                then: function(at, nn) {
                  at(ft);
                }
              };
              return Xt;
            }
          }
        }
      }
      function Hi(h) {
        h !== Na - 1 && Y("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Na = h;
      }
      function Yo(h, C, L) {
        {
          var j = ge.current;
          if (j !== null)
            try {
              Vi(j), Jl(function() {
                j.length === 0 ? (ge.current = null, C(h)) : Yo(h, C, L);
              });
            } catch (ne) {
              L(ne);
            }
          else
            C(h);
        }
      }
      var dl = !1;
      function Vi(h) {
        if (!dl) {
          dl = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var L = h[C];
              do
                L = L(!0);
              while (L !== null);
            }
            h.length = 0;
          } catch (j) {
            throw h = h.slice(C + 1), j;
          } finally {
            dl = !1;
          }
        }
      }
      var $o = Tr, Wu = Po, La = qf, Qo = {
        map: Mi,
        forEach: Ql,
        count: $l,
        toArray: Li,
        only: Wl
      };
      V.Children = Qo, V.Component = Ye, V.Fragment = Pe, V.Profiler = Ne, V.PureComponent = Yt, V.StrictMode = S, V.Suspense = J, V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vt, V.act = fl, V.cloneElement = Wu, V.createContext = si, V.createElement = $o, V.createFactory = La, V.createRef = qn, V.forwardRef = zi, V.isValidElement = sn, V.lazy = fi, V.memo = se, V.startTransition = Xl, V.unstable_act = fl, V.useCallback = Rr, V.useContext = ht, V.useDebugValue = hn, V.useDeferredValue = di, V.useEffect = bn, V.useId = Ui, V.useImperativeHandle = Ft, V.useInsertionEffect = on, V.useLayoutEffect = fn, V.useMemo = Ka, V.useReducer = gt, V.useRef = ct, V.useState = Je, V.useSyncExternalStore = ic, V.useTransition = nt, V.version = re, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Jp, Jp.exports)), Jp.exports;
}
var ek = {};
ek.NODE_ENV === "production" ? p0.exports = J_() : p0.exports = Z_();
var It = p0.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zx;
function tk() {
  if (Zx) return Kp;
  Zx = 1;
  var $ = It, V = Symbol.for("react.element"), k = Symbol.for("react.fragment"), re = Object.prototype.hasOwnProperty, ke = $.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, be = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Pe(S, Ne, ue) {
    var ee, Me = {}, J = null, De = null;
    ue !== void 0 && (J = "" + ue), Ne.key !== void 0 && (J = "" + Ne.key), Ne.ref !== void 0 && (De = Ne.ref);
    for (ee in Ne) re.call(Ne, ee) && !be.hasOwnProperty(ee) && (Me[ee] = Ne[ee]);
    if (S && S.defaultProps) for (ee in Ne = S.defaultProps, Ne) Me[ee] === void 0 && (Me[ee] = Ne[ee]);
    return { $$typeof: V, type: S, key: J, ref: De, props: Me, _owner: ke.current };
  }
  return Kp.Fragment = k, Kp.jsx = Pe, Kp.jsxs = Pe, Kp;
}
var Xp = {}, eR;
function nk() {
  if (eR) return Xp;
  eR = 1;
  var $ = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return $.NODE_ENV !== "production" && function() {
    var V = It, k = Symbol.for("react.element"), re = Symbol.for("react.portal"), ke = Symbol.for("react.fragment"), be = Symbol.for("react.strict_mode"), Pe = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), Ne = Symbol.for("react.context"), ue = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), Me = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), De = Symbol.for("react.lazy"), ie = Symbol.for("react.offscreen"), _e = Symbol.iterator, Xe = "@@iterator";
    function Sn(x) {
      if (x === null || typeof x != "object")
        return null;
      var Q = _e && x[_e] || x[Xe];
      return typeof Q == "function" ? Q : null;
    }
    var Ut = V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function et(x) {
      {
        for (var Q = arguments.length, se = new Array(Q > 1 ? Q - 1 : 0), fe = 1; fe < Q; fe++)
          se[fe - 1] = arguments[fe];
        Ue("error", x, se);
      }
    }
    function Ue(x, Q, se) {
      {
        var fe = Ut.ReactDebugCurrentFrame, ht = fe.getStackAddendum();
        ht !== "" && (Q += "%s", se = se.concat([ht]));
        var Je = se.map(function(gt) {
          return String(gt);
        });
        Je.unshift("Warning: " + Q), Function.prototype.apply.call(console[x], console, Je);
      }
    }
    var xt = !1, ge = !1, lt = !1, Be = !1, vn = !1, dt;
    dt = Symbol.for("react.module.reference");
    function tn(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === ke || x === Pe || vn || x === be || x === ee || x === Me || Be || x === ie || xt || ge || lt || typeof x == "object" && x !== null && (x.$$typeof === De || x.$$typeof === J || x.$$typeof === S || x.$$typeof === Ne || x.$$typeof === ue || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === dt || x.getModuleId !== void 0));
    }
    function Ht(x, Q, se) {
      var fe = x.displayName;
      if (fe)
        return fe;
      var ht = Q.displayName || Q.name || "";
      return ht !== "" ? se + "(" + ht + ")" : se;
    }
    function yt(x) {
      return x.displayName || "Context";
    }
    function Fe(x) {
      if (x == null)
        return null;
      if (typeof x.tag == "number" && et("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof x == "function")
        return x.displayName || x.name || null;
      if (typeof x == "string")
        return x;
      switch (x) {
        case ke:
          return "Fragment";
        case re:
          return "Portal";
        case Pe:
          return "Profiler";
        case be:
          return "StrictMode";
        case ee:
          return "Suspense";
        case Me:
          return "SuspenseList";
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case Ne:
            var Q = x;
            return yt(Q) + ".Consumer";
          case S:
            var se = x;
            return yt(se._context) + ".Provider";
          case ue:
            return Ht(x, x.render, "ForwardRef");
          case J:
            var fe = x.displayName || null;
            return fe !== null ? fe : Fe(x.type) || "Memo";
          case De: {
            var ht = x, Je = ht._payload, gt = ht._init;
            try {
              return Fe(gt(Je));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Nt = Object.assign, vt = 0, ot, Y, Se, te, b, B, Ce;
    function Ie() {
    }
    Ie.__reactDisabledLog = !0;
    function Ye() {
      {
        if (vt === 0) {
          ot = console.log, Y = console.info, Se = console.warn, te = console.error, b = console.group, B = console.groupCollapsed, Ce = console.groupEnd;
          var x = {
            configurable: !0,
            enumerable: !0,
            value: Ie,
            writable: !0
          };
          Object.defineProperties(console, {
            info: x,
            log: x,
            warn: x,
            error: x,
            group: x,
            groupCollapsed: x,
            groupEnd: x
          });
        }
        vt++;
      }
    }
    function ut() {
      {
        if (vt--, vt === 0) {
          var x = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Nt({}, x, {
              value: ot
            }),
            info: Nt({}, x, {
              value: Y
            }),
            warn: Nt({}, x, {
              value: Se
            }),
            error: Nt({}, x, {
              value: te
            }),
            group: Nt({}, x, {
              value: b
            }),
            groupCollapsed: Nt({}, x, {
              value: B
            }),
            groupEnd: Nt({}, x, {
              value: Ce
            })
          });
        }
        vt < 0 && et("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Rt = Ut.ReactCurrentDispatcher, Ge;
    function Tt(x, Q, se) {
      {
        if (Ge === void 0)
          try {
            throw Error();
          } catch (ht) {
            var fe = ht.stack.trim().match(/\n( *(at )?)/);
            Ge = fe && fe[1] || "";
          }
        return `
` + Ge + x;
      }
    }
    var Yt = !1, Mn;
    {
      var qn = typeof WeakMap == "function" ? WeakMap : Map;
      Mn = new qn();
    }
    function ir(x, Q) {
      if (!x || Yt)
        return "";
      {
        var se = Mn.get(x);
        if (se !== void 0)
          return se;
      }
      var fe;
      Yt = !0;
      var ht = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Je;
      Je = Rt.current, Rt.current = null, Ye();
      try {
        if (Q) {
          var gt = function() {
            throw Error();
          };
          if (Object.defineProperty(gt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(gt, []);
            } catch (hn) {
              fe = hn;
            }
            Reflect.construct(x, [], gt);
          } else {
            try {
              gt.call();
            } catch (hn) {
              fe = hn;
            }
            x.call(gt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (hn) {
            fe = hn;
          }
          x();
        }
      } catch (hn) {
        if (hn && fe && typeof hn.stack == "string") {
          for (var ct = hn.stack.split(`
`), bn = fe.stack.split(`
`), on = ct.length - 1, fn = bn.length - 1; on >= 1 && fn >= 0 && ct[on] !== bn[fn]; )
            fn--;
          for (; on >= 1 && fn >= 0; on--, fn--)
            if (ct[on] !== bn[fn]) {
              if (on !== 1 || fn !== 1)
                do
                  if (on--, fn--, fn < 0 || ct[on] !== bn[fn]) {
                    var Rr = `
` + ct[on].replace(" at new ", " at ");
                    return x.displayName && Rr.includes("<anonymous>") && (Rr = Rr.replace("<anonymous>", x.displayName)), typeof x == "function" && Mn.set(x, Rr), Rr;
                  }
                while (on >= 1 && fn >= 0);
              break;
            }
        }
      } finally {
        Yt = !1, Rt.current = Je, ut(), Error.prepareStackTrace = ht;
      }
      var Ka = x ? x.displayName || x.name : "", Ft = Ka ? Tt(Ka) : "";
      return typeof x == "function" && Mn.set(x, Ft), Ft;
    }
    function Ln(x, Q, se) {
      return ir(x, !1);
    }
    function Cr(x) {
      var Q = x.prototype;
      return !!(Q && Q.isReactComponent);
    }
    function Bn(x, Q, se) {
      if (x == null)
        return "";
      if (typeof x == "function")
        return ir(x, Cr(x));
      if (typeof x == "string")
        return Tt(x);
      switch (x) {
        case ee:
          return Tt("Suspense");
        case Me:
          return Tt("SuspenseList");
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case ue:
            return Ln(x.render);
          case J:
            return Bn(x.type, Q, se);
          case De: {
            var fe = x, ht = fe._payload, Je = fe._init;
            try {
              return Bn(Je(ht), Q, se);
            } catch {
            }
          }
        }
      return "";
    }
    var zn = Object.prototype.hasOwnProperty, da = {}, Ga = Ut.ReactDebugCurrentFrame;
    function Or(x) {
      if (x) {
        var Q = x._owner, se = Bn(x.type, x._source, Q ? Q.type : null);
        Ga.setExtraStackFrame(se);
      } else
        Ga.setExtraStackFrame(null);
    }
    function In(x, Q, se, fe, ht) {
      {
        var Je = Function.call.bind(zn);
        for (var gt in x)
          if (Je(x, gt)) {
            var ct = void 0;
            try {
              if (typeof x[gt] != "function") {
                var bn = Error((fe || "React class") + ": " + se + " type `" + gt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[gt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw bn.name = "Invariant Violation", bn;
              }
              ct = x[gt](Q, gt, fe, se, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (on) {
              ct = on;
            }
            ct && !(ct instanceof Error) && (Or(ht), et("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", fe || "React class", se, gt, typeof ct), Or(null)), ct instanceof Error && !(ct.message in da) && (da[ct.message] = !0, Or(ht), et("Failed %s type: %s", se, ct.message), Or(null));
          }
      }
    }
    var Kn = Array.isArray;
    function Xn(x) {
      return Kn(x);
    }
    function xr(x) {
      {
        var Q = typeof Symbol == "function" && Symbol.toStringTag, se = Q && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return se;
      }
    }
    function qa(x) {
      try {
        return Un(x), !1;
      } catch {
        return !0;
      }
    }
    function Un(x) {
      return "" + x;
    }
    function lr(x) {
      if (qa(x))
        return et("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", xr(x)), Un(x);
    }
    var Qr = Ut.ReactCurrentOwner, Ni = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pa, ae;
    function je(x) {
      if (zn.call(x, "ref")) {
        var Q = Object.getOwnPropertyDescriptor(x, "ref").get;
        if (Q && Q.isReactWarning)
          return !1;
      }
      return x.ref !== void 0;
    }
    function st(x) {
      if (zn.call(x, "key")) {
        var Q = Object.getOwnPropertyDescriptor(x, "key").get;
        if (Q && Q.isReactWarning)
          return !1;
      }
      return x.key !== void 0;
    }
    function At(x, Q) {
      typeof x.ref == "string" && Qr.current;
    }
    function un(x, Q) {
      {
        var se = function() {
          pa || (pa = !0, et("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
        };
        se.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: se,
          configurable: !0
        });
      }
    }
    function sn(x, Q) {
      {
        var se = function() {
          ae || (ae = !0, et("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
        };
        se.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: se,
          configurable: !0
        });
      }
    }
    var cn = function(x, Q, se, fe, ht, Je, gt) {
      var ct = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: k,
        // Built-in properties that belong on the element
        type: x,
        key: Q,
        ref: se,
        props: gt,
        // Record the component responsible for creating this element.
        _owner: Je
      };
      return ct._store = {}, Object.defineProperty(ct._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ct, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: fe
      }), Object.defineProperty(ct, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ht
      }), Object.freeze && (Object.freeze(ct.props), Object.freeze(ct)), ct;
    };
    function Jn(x, Q, se, fe, ht) {
      {
        var Je, gt = {}, ct = null, bn = null;
        se !== void 0 && (lr(se), ct = "" + se), st(Q) && (lr(Q.key), ct = "" + Q.key), je(Q) && (bn = Q.ref, At(Q, ht));
        for (Je in Q)
          zn.call(Q, Je) && !Ni.hasOwnProperty(Je) && (gt[Je] = Q[Je]);
        if (x && x.defaultProps) {
          var on = x.defaultProps;
          for (Je in on)
            gt[Je] === void 0 && (gt[Je] = on[Je]);
        }
        if (ct || bn) {
          var fn = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          ct && un(gt, fn), bn && sn(gt, fn);
        }
        return cn(x, ct, bn, ht, fe, Qr.current, gt);
      }
    }
    var ln = Ut.ReactCurrentOwner, Gt = Ut.ReactDebugCurrentFrame;
    function jt(x) {
      if (x) {
        var Q = x._owner, se = Bn(x.type, x._source, Q ? Q.type : null);
        Gt.setExtraStackFrame(se);
      } else
        Gt.setExtraStackFrame(null);
    }
    var va;
    va = !1;
    function ka(x) {
      return typeof x == "object" && x !== null && x.$$typeof === k;
    }
    function Da() {
      {
        if (ln.current) {
          var x = Fe(ln.current.type);
          if (x)
            return `

Check the render method of \`` + x + "`.";
        }
        return "";
      }
    }
    function Mi(x) {
      return "";
    }
    var $l = {};
    function Ql(x) {
      {
        var Q = Da();
        if (!Q) {
          var se = typeof x == "string" ? x : x.displayName || x.name;
          se && (Q = `

Check the top-level render call using <` + se + ">.");
        }
        return Q;
      }
    }
    function Li(x, Q) {
      {
        if (!x._store || x._store.validated || x.key != null)
          return;
        x._store.validated = !0;
        var se = Ql(Q);
        if ($l[se])
          return;
        $l[se] = !0;
        var fe = "";
        x && x._owner && x._owner !== ln.current && (fe = " It was passed a child from " + Fe(x._owner.type) + "."), jt(x), et('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', se, fe), jt(null);
      }
    }
    function Wl(x, Q) {
      {
        if (typeof x != "object")
          return;
        if (Xn(x))
          for (var se = 0; se < x.length; se++) {
            var fe = x[se];
            ka(fe) && Li(fe, Q);
          }
        else if (ka(x))
          x._store && (x._store.validated = !0);
        else if (x) {
          var ht = Sn(x);
          if (typeof ht == "function" && ht !== x.entries)
            for (var Je = ht.call(x), gt; !(gt = Je.next()).done; )
              ka(gt.value) && Li(gt.value, Q);
        }
      }
    }
    function si(x) {
      {
        var Q = x.type;
        if (Q == null || typeof Q == "string")
          return;
        var se;
        if (typeof Q == "function")
          se = Q.propTypes;
        else if (typeof Q == "object" && (Q.$$typeof === ue || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Q.$$typeof === J))
          se = Q.propTypes;
        else
          return;
        if (se) {
          var fe = Fe(Q);
          In(se, x.props, "prop", fe, x);
        } else if (Q.PropTypes !== void 0 && !va) {
          va = !0;
          var ht = Fe(Q);
          et("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ht || "Unknown");
        }
        typeof Q.getDefaultProps == "function" && !Q.getDefaultProps.isReactClassApproved && et("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ha(x) {
      {
        for (var Q = Object.keys(x.props), se = 0; se < Q.length; se++) {
          var fe = Q[se];
          if (fe !== "children" && fe !== "key") {
            jt(x), et("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", fe), jt(null);
            break;
          }
        }
        x.ref !== null && (jt(x), et("Invalid attribute `ref` supplied to `React.Fragment`."), jt(null));
      }
    }
    var or = {};
    function ma(x, Q, se, fe, ht, Je) {
      {
        var gt = tn(x);
        if (!gt) {
          var ct = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (ct += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var bn = Mi();
          bn ? ct += bn : ct += Da();
          var on;
          x === null ? on = "null" : Xn(x) ? on = "array" : x !== void 0 && x.$$typeof === k ? (on = "<" + (Fe(x.type) || "Unknown") + " />", ct = " Did you accidentally export a JSX literal instead of a component?") : on = typeof x, et("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", on, ct);
        }
        var fn = Jn(x, Q, se, ht, Je);
        if (fn == null)
          return fn;
        if (gt) {
          var Rr = Q.children;
          if (Rr !== void 0)
            if (fe)
              if (Xn(Rr)) {
                for (var Ka = 0; Ka < Rr.length; Ka++)
                  Wl(Rr[Ka], x);
                Object.freeze && Object.freeze(Rr);
              } else
                et("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Wl(Rr, x);
        }
        if (zn.call(Q, "key")) {
          var Ft = Fe(x), hn = Object.keys(Q).filter(function(Ui) {
            return Ui !== "key";
          }), nt = hn.length > 0 ? "{key: someKey, " + hn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!or[Ft + nt]) {
            var di = hn.length > 0 ? "{" + hn.join(": ..., ") + ": ...}" : "{}";
            et(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, nt, Ft, di, Ft), or[Ft + nt] = !0;
          }
        }
        return x === ke ? ha(fn) : si(fn), fn;
      }
    }
    function Wr(x, Q, se) {
      return ma(x, Q, se, !0);
    }
    function ci(x, Q, se) {
      return ma(x, Q, se, !1);
    }
    var fi = ci, zi = Wr;
    Xp.Fragment = ke, Xp.jsx = fi, Xp.jsxs = zi;
  }(), Xp;
}
var rk = {};
rk.NODE_ENV === "production" ? d0.exports = tk() : d0.exports = nk();
var X = d0.exports, v0 = { exports: {} }, Qa = {}, Ym = { exports: {} }, c0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tR;
function ak() {
  return tR || (tR = 1, function($) {
    function V(Y, Se) {
      var te = Y.length;
      Y.push(Se);
      e: for (; 0 < te; ) {
        var b = te - 1 >>> 1, B = Y[b];
        if (0 < ke(B, Se)) Y[b] = Se, Y[te] = B, te = b;
        else break e;
      }
    }
    function k(Y) {
      return Y.length === 0 ? null : Y[0];
    }
    function re(Y) {
      if (Y.length === 0) return null;
      var Se = Y[0], te = Y.pop();
      if (te !== Se) {
        Y[0] = te;
        e: for (var b = 0, B = Y.length, Ce = B >>> 1; b < Ce; ) {
          var Ie = 2 * (b + 1) - 1, Ye = Y[Ie], ut = Ie + 1, Rt = Y[ut];
          if (0 > ke(Ye, te)) ut < B && 0 > ke(Rt, Ye) ? (Y[b] = Rt, Y[ut] = te, b = ut) : (Y[b] = Ye, Y[Ie] = te, b = Ie);
          else if (ut < B && 0 > ke(Rt, te)) Y[b] = Rt, Y[ut] = te, b = ut;
          else break e;
        }
      }
      return Se;
    }
    function ke(Y, Se) {
      var te = Y.sortIndex - Se.sortIndex;
      return te !== 0 ? te : Y.id - Se.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var be = performance;
      $.unstable_now = function() {
        return be.now();
      };
    } else {
      var Pe = Date, S = Pe.now();
      $.unstable_now = function() {
        return Pe.now() - S;
      };
    }
    var Ne = [], ue = [], ee = 1, Me = null, J = 3, De = !1, ie = !1, _e = !1, Xe = typeof setTimeout == "function" ? setTimeout : null, Sn = typeof clearTimeout == "function" ? clearTimeout : null, Ut = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function et(Y) {
      for (var Se = k(ue); Se !== null; ) {
        if (Se.callback === null) re(ue);
        else if (Se.startTime <= Y) re(ue), Se.sortIndex = Se.expirationTime, V(Ne, Se);
        else break;
        Se = k(ue);
      }
    }
    function Ue(Y) {
      if (_e = !1, et(Y), !ie) if (k(Ne) !== null) ie = !0, vt(xt);
      else {
        var Se = k(ue);
        Se !== null && ot(Ue, Se.startTime - Y);
      }
    }
    function xt(Y, Se) {
      ie = !1, _e && (_e = !1, Sn(Be), Be = -1), De = !0;
      var te = J;
      try {
        for (et(Se), Me = k(Ne); Me !== null && (!(Me.expirationTime > Se) || Y && !tn()); ) {
          var b = Me.callback;
          if (typeof b == "function") {
            Me.callback = null, J = Me.priorityLevel;
            var B = b(Me.expirationTime <= Se);
            Se = $.unstable_now(), typeof B == "function" ? Me.callback = B : Me === k(Ne) && re(Ne), et(Se);
          } else re(Ne);
          Me = k(Ne);
        }
        if (Me !== null) var Ce = !0;
        else {
          var Ie = k(ue);
          Ie !== null && ot(Ue, Ie.startTime - Se), Ce = !1;
        }
        return Ce;
      } finally {
        Me = null, J = te, De = !1;
      }
    }
    var ge = !1, lt = null, Be = -1, vn = 5, dt = -1;
    function tn() {
      return !($.unstable_now() - dt < vn);
    }
    function Ht() {
      if (lt !== null) {
        var Y = $.unstable_now();
        dt = Y;
        var Se = !0;
        try {
          Se = lt(!0, Y);
        } finally {
          Se ? yt() : (ge = !1, lt = null);
        }
      } else ge = !1;
    }
    var yt;
    if (typeof Ut == "function") yt = function() {
      Ut(Ht);
    };
    else if (typeof MessageChannel < "u") {
      var Fe = new MessageChannel(), Nt = Fe.port2;
      Fe.port1.onmessage = Ht, yt = function() {
        Nt.postMessage(null);
      };
    } else yt = function() {
      Xe(Ht, 0);
    };
    function vt(Y) {
      lt = Y, ge || (ge = !0, yt());
    }
    function ot(Y, Se) {
      Be = Xe(function() {
        Y($.unstable_now());
      }, Se);
    }
    $.unstable_IdlePriority = 5, $.unstable_ImmediatePriority = 1, $.unstable_LowPriority = 4, $.unstable_NormalPriority = 3, $.unstable_Profiling = null, $.unstable_UserBlockingPriority = 2, $.unstable_cancelCallback = function(Y) {
      Y.callback = null;
    }, $.unstable_continueExecution = function() {
      ie || De || (ie = !0, vt(xt));
    }, $.unstable_forceFrameRate = function(Y) {
      0 > Y || 125 < Y ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : vn = 0 < Y ? Math.floor(1e3 / Y) : 5;
    }, $.unstable_getCurrentPriorityLevel = function() {
      return J;
    }, $.unstable_getFirstCallbackNode = function() {
      return k(Ne);
    }, $.unstable_next = function(Y) {
      switch (J) {
        case 1:
        case 2:
        case 3:
          var Se = 3;
          break;
        default:
          Se = J;
      }
      var te = J;
      J = Se;
      try {
        return Y();
      } finally {
        J = te;
      }
    }, $.unstable_pauseExecution = function() {
    }, $.unstable_requestPaint = function() {
    }, $.unstable_runWithPriority = function(Y, Se) {
      switch (Y) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Y = 3;
      }
      var te = J;
      J = Y;
      try {
        return Se();
      } finally {
        J = te;
      }
    }, $.unstable_scheduleCallback = function(Y, Se, te) {
      var b = $.unstable_now();
      switch (typeof te == "object" && te !== null ? (te = te.delay, te = typeof te == "number" && 0 < te ? b + te : b) : te = b, Y) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return B = te + B, Y = { id: ee++, callback: Se, priorityLevel: Y, startTime: te, expirationTime: B, sortIndex: -1 }, te > b ? (Y.sortIndex = te, V(ue, Y), k(Ne) === null && Y === k(ue) && (_e ? (Sn(Be), Be = -1) : _e = !0, ot(Ue, te - b))) : (Y.sortIndex = B, V(Ne, Y), ie || De || (ie = !0, vt(xt))), Y;
    }, $.unstable_shouldYield = tn, $.unstable_wrapCallback = function(Y) {
      var Se = J;
      return function() {
        var te = J;
        J = Se;
        try {
          return Y.apply(this, arguments);
        } finally {
          J = te;
        }
      };
    };
  }(c0)), c0;
}
var f0 = {}, nR;
function ik() {
  return nR || (nR = 1, function($) {
    var V = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    V.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var k = !1, re = 5;
      function ke(ae, je) {
        var st = ae.length;
        ae.push(je), S(ae, je, st);
      }
      function be(ae) {
        return ae.length === 0 ? null : ae[0];
      }
      function Pe(ae) {
        if (ae.length === 0)
          return null;
        var je = ae[0], st = ae.pop();
        return st !== je && (ae[0] = st, Ne(ae, st, 0)), je;
      }
      function S(ae, je, st) {
        for (var At = st; At > 0; ) {
          var un = At - 1 >>> 1, sn = ae[un];
          if (ue(sn, je) > 0)
            ae[un] = je, ae[At] = sn, At = un;
          else
            return;
        }
      }
      function Ne(ae, je, st) {
        for (var At = st, un = ae.length, sn = un >>> 1; At < sn; ) {
          var cn = (At + 1) * 2 - 1, Jn = ae[cn], ln = cn + 1, Gt = ae[ln];
          if (ue(Jn, je) < 0)
            ln < un && ue(Gt, Jn) < 0 ? (ae[At] = Gt, ae[ln] = je, At = ln) : (ae[At] = Jn, ae[cn] = je, At = cn);
          else if (ln < un && ue(Gt, je) < 0)
            ae[At] = Gt, ae[ln] = je, At = ln;
          else
            return;
        }
      }
      function ue(ae, je) {
        var st = ae.sortIndex - je.sortIndex;
        return st !== 0 ? st : ae.id - je.id;
      }
      var ee = 1, Me = 2, J = 3, De = 4, ie = 5;
      function _e(ae, je) {
      }
      var Xe = typeof performance == "object" && typeof performance.now == "function";
      if (Xe) {
        var Sn = performance;
        $.unstable_now = function() {
          return Sn.now();
        };
      } else {
        var Ut = Date, et = Ut.now();
        $.unstable_now = function() {
          return Ut.now() - et;
        };
      }
      var Ue = 1073741823, xt = -1, ge = 250, lt = 5e3, Be = 1e4, vn = Ue, dt = [], tn = [], Ht = 1, yt = null, Fe = J, Nt = !1, vt = !1, ot = !1, Y = typeof setTimeout == "function" ? setTimeout : null, Se = typeof clearTimeout == "function" ? clearTimeout : null, te = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function b(ae) {
        for (var je = be(tn); je !== null; ) {
          if (je.callback === null)
            Pe(tn);
          else if (je.startTime <= ae)
            Pe(tn), je.sortIndex = je.expirationTime, ke(dt, je);
          else
            return;
          je = be(tn);
        }
      }
      function B(ae) {
        if (ot = !1, b(ae), !vt)
          if (be(dt) !== null)
            vt = !0, Un(Ce);
          else {
            var je = be(tn);
            je !== null && lr(B, je.startTime - ae);
          }
      }
      function Ce(ae, je) {
        vt = !1, ot && (ot = !1, Qr()), Nt = !0;
        var st = Fe;
        try {
          var At;
          if (!k) return Ie(ae, je);
        } finally {
          yt = null, Fe = st, Nt = !1;
        }
      }
      function Ie(ae, je) {
        var st = je;
        for (b(st), yt = be(dt); yt !== null && !(yt.expirationTime > st && (!ae || Ga())); ) {
          var At = yt.callback;
          if (typeof At == "function") {
            yt.callback = null, Fe = yt.priorityLevel;
            var un = yt.expirationTime <= st, sn = At(un);
            st = $.unstable_now(), typeof sn == "function" ? yt.callback = sn : yt === be(dt) && Pe(dt), b(st);
          } else
            Pe(dt);
          yt = be(dt);
        }
        if (yt !== null)
          return !0;
        var cn = be(tn);
        return cn !== null && lr(B, cn.startTime - st), !1;
      }
      function Ye(ae, je) {
        switch (ae) {
          case ee:
          case Me:
          case J:
          case De:
          case ie:
            break;
          default:
            ae = J;
        }
        var st = Fe;
        Fe = ae;
        try {
          return je();
        } finally {
          Fe = st;
        }
      }
      function ut(ae) {
        var je;
        switch (Fe) {
          case ee:
          case Me:
          case J:
            je = J;
            break;
          default:
            je = Fe;
            break;
        }
        var st = Fe;
        Fe = je;
        try {
          return ae();
        } finally {
          Fe = st;
        }
      }
      function Rt(ae) {
        var je = Fe;
        return function() {
          var st = Fe;
          Fe = je;
          try {
            return ae.apply(this, arguments);
          } finally {
            Fe = st;
          }
        };
      }
      function Ge(ae, je, st) {
        var At = $.unstable_now(), un;
        if (typeof st == "object" && st !== null) {
          var sn = st.delay;
          typeof sn == "number" && sn > 0 ? un = At + sn : un = At;
        } else
          un = At;
        var cn;
        switch (ae) {
          case ee:
            cn = xt;
            break;
          case Me:
            cn = ge;
            break;
          case ie:
            cn = vn;
            break;
          case De:
            cn = Be;
            break;
          case J:
          default:
            cn = lt;
            break;
        }
        var Jn = un + cn, ln = {
          id: Ht++,
          callback: je,
          priorityLevel: ae,
          startTime: un,
          expirationTime: Jn,
          sortIndex: -1
        };
        return un > At ? (ln.sortIndex = un, ke(tn, ln), be(dt) === null && ln === be(tn) && (ot ? Qr() : ot = !0, lr(B, un - At))) : (ln.sortIndex = Jn, ke(dt, ln), !vt && !Nt && (vt = !0, Un(Ce))), ln;
      }
      function Tt() {
      }
      function Yt() {
        !vt && !Nt && (vt = !0, Un(Ce));
      }
      function Mn() {
        return be(dt);
      }
      function qn(ae) {
        ae.callback = null;
      }
      function ir() {
        return Fe;
      }
      var Ln = !1, Cr = null, Bn = -1, zn = re, da = -1;
      function Ga() {
        var ae = $.unstable_now() - da;
        return !(ae < zn);
      }
      function Or() {
      }
      function In(ae) {
        if (ae < 0 || ae > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ae > 0 ? zn = Math.floor(1e3 / ae) : zn = re;
      }
      var Kn = function() {
        if (Cr !== null) {
          var ae = $.unstable_now();
          da = ae;
          var je = !0, st = !0;
          try {
            st = Cr(je, ae);
          } finally {
            st ? Xn() : (Ln = !1, Cr = null);
          }
        } else
          Ln = !1;
      }, Xn;
      if (typeof te == "function")
        Xn = function() {
          te(Kn);
        };
      else if (typeof MessageChannel < "u") {
        var xr = new MessageChannel(), qa = xr.port2;
        xr.port1.onmessage = Kn, Xn = function() {
          qa.postMessage(null);
        };
      } else
        Xn = function() {
          Y(Kn, 0);
        };
      function Un(ae) {
        Cr = ae, Ln || (Ln = !0, Xn());
      }
      function lr(ae, je) {
        Bn = Y(function() {
          ae($.unstable_now());
        }, je);
      }
      function Qr() {
        Se(Bn), Bn = -1;
      }
      var Ni = Or, pa = null;
      $.unstable_IdlePriority = ie, $.unstable_ImmediatePriority = ee, $.unstable_LowPriority = De, $.unstable_NormalPriority = J, $.unstable_Profiling = pa, $.unstable_UserBlockingPriority = Me, $.unstable_cancelCallback = qn, $.unstable_continueExecution = Yt, $.unstable_forceFrameRate = In, $.unstable_getCurrentPriorityLevel = ir, $.unstable_getFirstCallbackNode = Mn, $.unstable_next = ut, $.unstable_pauseExecution = Tt, $.unstable_requestPaint = Ni, $.unstable_runWithPriority = Ye, $.unstable_scheduleCallback = Ge, $.unstable_shouldYield = Ga, $.unstable_wrapCallback = Rt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(f0)), f0;
}
var rR;
function uR() {
  if (rR) return Ym.exports;
  rR = 1;
  var $ = {};
  return $.NODE_ENV === "production" ? Ym.exports = ak() : Ym.exports = ik(), Ym.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aR;
function lk() {
  if (aR) return Qa;
  aR = 1;
  var $ = It, V = uR();
  function k(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var re = /* @__PURE__ */ new Set(), ke = {};
  function be(n, r) {
    Pe(n, r), Pe(n + "Capture", r);
  }
  function Pe(n, r) {
    for (ke[n] = r, n = 0; n < r.length; n++) re.add(r[n]);
  }
  var S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ne = Object.prototype.hasOwnProperty, ue = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ee = {}, Me = {};
  function J(n) {
    return Ne.call(Me, n) ? !0 : Ne.call(ee, n) ? !1 : ue.test(n) ? Me[n] = !0 : (ee[n] = !0, !1);
  }
  function De(n, r, l, u) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return u ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function ie(n, r, l, u) {
    if (r === null || typeof r > "u" || De(n, r, l, u)) return !0;
    if (u) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function _e(n, r, l, u, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var Xe = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Xe[n] = new _e(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Xe[r] = new _e(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Xe[n] = new _e(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Xe[n] = new _e(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Xe[n] = new _e(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Xe[n] = new _e(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Xe[n] = new _e(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Xe[n] = new _e(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Xe[n] = new _e(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Sn = /[\-:]([a-z])/g;
  function Ut(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Sn,
      Ut
    );
    Xe[r] = new _e(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Sn, Ut);
    Xe[r] = new _e(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Sn, Ut);
    Xe[r] = new _e(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Xe[n] = new _e(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Xe.xlinkHref = new _e("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Xe[n] = new _e(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function et(n, r, l, u) {
    var c = Xe.hasOwnProperty(r) ? Xe[r] : null;
    (c !== null ? c.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ie(r, l, c, u) && (l = null), u || c === null ? J(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, u = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, u ? n.setAttributeNS(u, r, l) : n.setAttribute(r, l))));
  }
  var Ue = $.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, xt = Symbol.for("react.element"), ge = Symbol.for("react.portal"), lt = Symbol.for("react.fragment"), Be = Symbol.for("react.strict_mode"), vn = Symbol.for("react.profiler"), dt = Symbol.for("react.provider"), tn = Symbol.for("react.context"), Ht = Symbol.for("react.forward_ref"), yt = Symbol.for("react.suspense"), Fe = Symbol.for("react.suspense_list"), Nt = Symbol.for("react.memo"), vt = Symbol.for("react.lazy"), ot = Symbol.for("react.offscreen"), Y = Symbol.iterator;
  function Se(n) {
    return n === null || typeof n != "object" ? null : (n = Y && n[Y] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var te = Object.assign, b;
  function B(n) {
    if (b === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      b = r && r[1] || "";
    }
    return `
` + b + n;
  }
  var Ce = !1;
  function Ie(n, r) {
    if (!n || Ce) return "";
    Ce = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (U) {
          var u = U;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (U) {
          u = U;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (U) {
          u = U;
        }
        n();
      }
    } catch (U) {
      if (U && u && typeof U.stack == "string") {
        for (var c = U.stack.split(`
`), d = u.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; ) E--;
        for (; 1 <= m && 0 <= E; m--, E--) if (c[m] !== d[E]) {
          if (m !== 1 || E !== 1)
            do
              if (m--, E--, 0 > E || c[m] !== d[E]) {
                var R = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", n.displayName)), R;
              }
            while (1 <= m && 0 <= E);
          break;
        }
      }
    } finally {
      Ce = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? B(n) : "";
  }
  function Ye(n) {
    switch (n.tag) {
      case 5:
        return B(n.type);
      case 16:
        return B("Lazy");
      case 13:
        return B("Suspense");
      case 19:
        return B("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ie(n.type, !1), n;
      case 11:
        return n = Ie(n.type.render, !1), n;
      case 1:
        return n = Ie(n.type, !0), n;
      default:
        return "";
    }
  }
  function ut(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case lt:
        return "Fragment";
      case ge:
        return "Portal";
      case vn:
        return "Profiler";
      case Be:
        return "StrictMode";
      case yt:
        return "Suspense";
      case Fe:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case tn:
        return (n.displayName || "Context") + ".Consumer";
      case dt:
        return (n._context.displayName || "Context") + ".Provider";
      case Ht:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Nt:
        return r = n.displayName || null, r !== null ? r : ut(n.type) || "Memo";
      case vt:
        r = n._payload, n = n._init;
        try {
          return ut(n(r));
        } catch {
        }
    }
    return null;
  }
  function Rt(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ut(r);
      case 8:
        return r === Be ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function Ge(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Tt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Yt(n) {
    var r = Tt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        u = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(m) {
        u = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Mn(n) {
    n._valueTracker || (n._valueTracker = Yt(n));
  }
  function qn(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), u = "";
    return n && (u = Tt(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== l ? (r.setValue(n), !0) : !1;
  }
  function ir(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Ln(n, r) {
    var l = r.checked;
    return te({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Cr(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    l = Ge(r.value != null ? r.value : l), n._wrapperState = { initialChecked: u, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Bn(n, r) {
    r = r.checked, r != null && et(n, "checked", r, !1);
  }
  function zn(n, r) {
    Bn(n, r);
    var l = Ge(r.value), u = r.type;
    if (l != null) u === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Ga(n, r.type, l) : r.hasOwnProperty("defaultValue") && Ga(n, r.type, Ge(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function da(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var u = r.type;
      if (!(u !== "submit" && u !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Ga(n, r, l) {
    (r !== "number" || ir(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Or = Array.isArray;
  function In(n, r, l, u) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && u && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + Ge(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, u && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Kn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(k(91));
    return te({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Xn(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(k(92));
        if (Or(l)) {
          if (1 < l.length) throw Error(k(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: Ge(l) };
  }
  function xr(n, r) {
    var l = Ge(r.value), u = Ge(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), u != null && (n.defaultValue = "" + u);
  }
  function qa(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Un(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function lr(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Un(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Qr, Ni = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, u, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, u, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Qr = Qr || document.createElement("div"), Qr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Qr.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function pa(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var ae = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, je = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ae).forEach(function(n) {
    je.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ae[r] = ae[n];
    });
  });
  function st(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || ae.hasOwnProperty(n) && ae[n] ? ("" + r).trim() : r + "px";
  }
  function At(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var u = l.indexOf("--") === 0, c = st(l, r[l], u);
      l === "float" && (l = "cssFloat"), u ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var un = te({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function sn(n, r) {
    if (r) {
      if (un[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(k(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(k(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(k(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(k(62));
    }
  }
  function cn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Jn = null;
  function ln(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Gt = null, jt = null, va = null;
  function ka(n) {
    if (n = ss(n)) {
      if (typeof Gt != "function") throw Error(k(280));
      var r = n.stateNode;
      r && (r = $i(r), Gt(n.stateNode, n.type, r));
    }
  }
  function Da(n) {
    jt ? va ? va.push(n) : va = [n] : jt = n;
  }
  function Mi() {
    if (jt) {
      var n = jt, r = va;
      if (va = jt = null, ka(n), r) for (n = 0; n < r.length; n++) ka(r[n]);
    }
  }
  function $l(n, r) {
    return n(r);
  }
  function Ql() {
  }
  var Li = !1;
  function Wl(n, r, l) {
    if (Li) return n(r, l);
    Li = !0;
    try {
      return $l(n, r, l);
    } finally {
      Li = !1, (jt !== null || va !== null) && (Ql(), Mi());
    }
  }
  function si(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var u = $i(l);
    if (u === null) return null;
    l = u[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (u = !u.disabled) || (n = n.type, u = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !u;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(k(231, r, typeof l));
    return l;
  }
  var ha = !1;
  if (S) try {
    var or = {};
    Object.defineProperty(or, "passive", { get: function() {
      ha = !0;
    } }), window.addEventListener("test", or, or), window.removeEventListener("test", or, or);
  } catch {
    ha = !1;
  }
  function ma(n, r, l, u, c, d, m, E, R) {
    var U = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, U);
    } catch (G) {
      this.onError(G);
    }
  }
  var Wr = !1, ci = null, fi = !1, zi = null, x = { onError: function(n) {
    Wr = !0, ci = n;
  } };
  function Q(n, r, l, u, c, d, m, E, R) {
    Wr = !1, ci = null, ma.apply(x, arguments);
  }
  function se(n, r, l, u, c, d, m, E, R) {
    if (Q.apply(this, arguments), Wr) {
      if (Wr) {
        var U = ci;
        Wr = !1, ci = null;
      } else throw Error(k(198));
      fi || (fi = !0, zi = U);
    }
  }
  function fe(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function ht(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function Je(n) {
    if (fe(n) !== n) throw Error(k(188));
  }
  function gt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = fe(n), r === null) throw Error(k(188));
      return r !== n ? null : n;
    }
    for (var l = n, u = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (u = c.return, u !== null) {
          l = u;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return Je(c), n;
          if (d === u) return Je(c), r;
          d = d.sibling;
        }
        throw Error(k(188));
      }
      if (l.return !== u.return) l = c, u = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, u = d;
            break;
          }
          if (E === u) {
            m = !0, u = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, u = c;
              break;
            }
            if (E === u) {
              m = !0, u = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m) throw Error(k(189));
        }
      }
      if (l.alternate !== u) throw Error(k(190));
    }
    if (l.tag !== 3) throw Error(k(188));
    return l.stateNode.current === l ? n : r;
  }
  function ct(n) {
    return n = gt(n), n !== null ? bn(n) : null;
  }
  function bn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = bn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var on = V.unstable_scheduleCallback, fn = V.unstable_cancelCallback, Rr = V.unstable_shouldYield, Ka = V.unstable_requestPaint, Ft = V.unstable_now, hn = V.unstable_getCurrentPriorityLevel, nt = V.unstable_ImmediatePriority, di = V.unstable_UserBlockingPriority, Ui = V.unstable_NormalPriority, ic = V.unstable_LowPriority, Ai = V.unstable_IdlePriority, ol = null, Gr = null;
  function Bu(n) {
    if (Gr && typeof Gr.onCommitFiberRoot == "function") try {
      Gr.onCommitFiberRoot(ol, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Nr = Math.clz32 ? Math.clz32 : oc, Iu = Math.log, lc = Math.LN2;
  function oc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Iu(n) / lc | 0) | 0;
  }
  var ji = 64, ul = 4194304;
  function qr(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function pi(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var u = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? u = qr(E) : (d &= m, d !== 0 && (u = qr(d)));
    } else m = l & ~c, m !== 0 ? u = qr(m) : d !== 0 && (u = qr(d));
    if (u === 0) return 0;
    if (r !== 0 && r !== u && !(r & c) && (c = u & -u, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (u & 4 && (u |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= u; 0 < r; ) l = 31 - Nr(r), c = 1 << l, u |= n[l], r &= ~c;
    return u;
  }
  function sl(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ho(n, r) {
    for (var l = n.suspendedLanes, u = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - Nr(d), E = 1 << m, R = c[m];
      R === -1 ? (!(E & l) || E & u) && (c[m] = sl(E, r)) : R <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function Fi(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Gl() {
    var n = ji;
    return ji <<= 1, !(ji & 4194240) && (ji = 64), n;
  }
  function ql(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function cl(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Nr(r), n[r] = l;
  }
  function Yu(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Nr(l), d = 1 << c;
      r[c] = 0, u[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function $u(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var u = 31 - Nr(l), c = 1 << u;
      c & r | n[u] & r && (n[u] |= r), l &= ~c;
    }
  }
  var _t = 0;
  function Qu(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Vo, kt, uc, vi, qe, Kl = !1, Zn = [], Kr = null, Mr = null, hi = null, Cn = /* @__PURE__ */ new Map(), qt = /* @__PURE__ */ new Map(), Xa = [], Oa = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Tr(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Kr = null;
        break;
      case "dragenter":
      case "dragleave":
        Mr = null;
        break;
      case "mouseover":
      case "mouseout":
        hi = null;
        break;
      case "pointerover":
      case "pointerout":
        Cn.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        qt.delete(r.pointerId);
    }
  }
  function Lr(n, r, l, u, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: u, nativeEvent: d, targetContainers: [c] }, r !== null && (r = ss(r), r !== null && kt(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function qf(n, r, l, u, c) {
    switch (r) {
      case "focusin":
        return Kr = Lr(Kr, n, r, l, u, c), !0;
      case "dragenter":
        return Mr = Lr(Mr, n, r, l, u, c), !0;
      case "mouseover":
        return hi = Lr(hi, n, r, l, u, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Cn.set(d, Lr(Cn.get(d) || null, n, r, l, u, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, qt.set(d, Lr(qt.get(d) || null, n, r, l, u, c)), !0;
    }
    return !1;
  }
  function Po(n) {
    var r = io(n.target);
    if (r !== null) {
      var l = fe(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = ht(l), r !== null) {
            n.blockedOn = r, qe(n.priority, function() {
              uc(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Xl(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = $o(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var u = new l.constructor(l.type, l);
        Jn = u, l.target.dispatchEvent(u), Jn = null;
      } else return r = ss(l), r !== null && kt(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Bo(n, r, l) {
    Xl(n) && l.delete(r);
  }
  function Io() {
    Kl = !1, Kr !== null && Xl(Kr) && (Kr = null), Mr !== null && Xl(Mr) && (Mr = null), hi !== null && Xl(hi) && (hi = null), Cn.forEach(Bo), qt.forEach(Bo);
  }
  function Jl(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Kl || (Kl = !0, V.unstable_scheduleCallback(V.unstable_NormalPriority, Io)));
  }
  function Na(n) {
    function r(c) {
      return Jl(c, n);
    }
    if (0 < Zn.length) {
      Jl(Zn[0], n);
      for (var l = 1; l < Zn.length; l++) {
        var u = Zn[l];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (Kr !== null && Jl(Kr, n), Mr !== null && Jl(Mr, n), hi !== null && Jl(hi, n), Cn.forEach(r), qt.forEach(r), l = 0; l < Xa.length; l++) u = Xa[l], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < Xa.length && (l = Xa[0], l.blockedOn === null); ) Po(l), l.blockedOn === null && Xa.shift();
  }
  var Ma = Ue.ReactCurrentBatchConfig, fl = !0;
  function Hi(n, r, l, u) {
    var c = _t, d = Ma.transition;
    Ma.transition = null;
    try {
      _t = 1, dl(n, r, l, u);
    } finally {
      _t = c, Ma.transition = d;
    }
  }
  function Yo(n, r, l, u) {
    var c = _t, d = Ma.transition;
    Ma.transition = null;
    try {
      _t = 4, dl(n, r, l, u);
    } finally {
      _t = c, Ma.transition = d;
    }
  }
  function dl(n, r, l, u) {
    if (fl) {
      var c = $o(n, r, l, u);
      if (c === null) ud(n, r, u, Vi, l), Tr(n, u);
      else if (qf(c, n, r, l, u)) u.stopPropagation();
      else if (Tr(n, u), r & 4 && -1 < Oa.indexOf(n)) {
        for (; c !== null; ) {
          var d = ss(c);
          if (d !== null && Vo(d), d = $o(n, r, l, u), d === null && ud(n, r, u, Vi, l), d === c) break;
          c = d;
        }
        c !== null && u.stopPropagation();
      } else ud(n, r, u, null, l);
    }
  }
  var Vi = null;
  function $o(n, r, l, u) {
    if (Vi = null, n = ln(u), n = io(n), n !== null) if (r = fe(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = ht(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return Vi = n, null;
  }
  function Wu(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (hn()) {
          case nt:
            return 1;
          case di:
            return 4;
          case Ui:
          case ic:
            return 16;
          case Ai:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var La = null, Qo = null, h = null;
  function C() {
    if (h) return h;
    var n, r = Qo, l = r.length, u, c = "value" in La ? La.value : La.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (u = 1; u <= m && r[l - u] === c[d - u]; u++) ;
    return h = c.slice(n, 1 < u ? 1 - u : void 0);
  }
  function L(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function j() {
    return !0;
  }
  function ne() {
    return !1;
  }
  function xe(n) {
    function r(l, u, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = u, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? j : ne, this.isPropagationStopped = ne, this;
    }
    return te(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = j);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = j);
    }, persist: function() {
    }, isPersistent: j }), r;
  }
  var ve = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Qe = xe(ve), ft = te({}, ve, { view: 0, detail: 0 }), Vt = xe(ft), Kt, Xt, at, nn = te({}, ft, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ja, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== at && (at && n.type === "mousemove" ? (Kt = n.screenX - at.screenX, Xt = n.screenY - at.screenY) : Xt = Kt = 0, at = n), Kt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Xt;
  } }), wn = xe(nn), Zl = te({}, nn, { dataTransfer: 0 }), Gu = xe(Zl), Pi = te({}, ft, { relatedTarget: 0 }), eo = xe(Pi), qu = te({}, ve, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Kf = xe(qu), sc = te({}, ve, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Xf = xe(sc), Zp = te({}, ve, { data: 0 }), cc = xe(Zp), ev = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, tv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, nv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Wm(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = nv[n]) ? !!r[n] : !1;
  }
  function Ja() {
    return Wm;
  }
  var Gm = te({}, ft, { key: function(n) {
    if (n.key) {
      var r = ev[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = L(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? tv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ja, charCode: function(n) {
    return n.type === "keypress" ? L(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? L(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Jf = xe(Gm), Zf = te({}, nn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), fc = xe(Zf), qm = te({}, ft, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ja }), dc = xe(qm), rv = te({}, ve, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xr = xe(rv), Bi = te({}, nn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), An = xe(Bi), Ii = [9, 13, 27, 32], Ku = S && "CompositionEvent" in window, pl = null;
  S && "documentMode" in document && (pl = document.documentMode);
  var Km = S && "TextEvent" in window && !pl, Wo = S && (!Ku || pl && 8 < pl && 11 >= pl), av = " ", iv = !1;
  function pc(n, r) {
    switch (n) {
      case "keyup":
        return Ii.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function lv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Go = !1;
  function Xm(n, r) {
    switch (n) {
      case "compositionend":
        return lv(r);
      case "keypress":
        return r.which !== 32 ? null : (iv = !0, av);
      case "textInput":
        return n = r.data, n === av && iv ? null : n;
      default:
        return null;
    }
  }
  function ov(n, r) {
    if (Go) return n === "compositionend" || !Ku && pc(n, r) ? (n = C(), h = Qo = La = null, Go = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Wo && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Jm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function uv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Jm[n.type] : r === "textarea";
  }
  function sv(n, r, l, u) {
    Da(u), r = ls(r, "onChange"), 0 < r.length && (l = new Qe("onChange", "change", null, l, u), n.push({ event: l, listeners: r }));
  }
  var qo = null, mi = null;
  function ed(n) {
    yc(n, 0);
  }
  function Xu(n) {
    var r = Le(n);
    if (qn(r)) return n;
  }
  function cv(n, r) {
    if (n === "change") return r;
  }
  var fv = !1;
  if (S) {
    var td;
    if (S) {
      var nd = "oninput" in document;
      if (!nd) {
        var dv = document.createElement("div");
        dv.setAttribute("oninput", "return;"), nd = typeof dv.oninput == "function";
      }
      td = nd;
    } else td = !1;
    fv = td && (!document.documentMode || 9 < document.documentMode);
  }
  function pv() {
    qo && (qo.detachEvent("onpropertychange", vv), mi = qo = null);
  }
  function vv(n) {
    if (n.propertyName === "value" && Xu(mi)) {
      var r = [];
      sv(r, mi, n, ln(n)), Wl(ed, r);
    }
  }
  function Zm(n, r, l) {
    n === "focusin" ? (pv(), qo = r, mi = l, qo.attachEvent("onpropertychange", vv)) : n === "focusout" && pv();
  }
  function ey(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Xu(mi);
  }
  function hv(n, r) {
    if (n === "click") return Xu(r);
  }
  function ty(n, r) {
    if (n === "input" || n === "change") return Xu(r);
  }
  function mv(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Za = typeof Object.is == "function" ? Object.is : mv;
  function Ju(n, r) {
    if (Za(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), u = Object.keys(r);
    if (l.length !== u.length) return !1;
    for (u = 0; u < l.length; u++) {
      var c = l[u];
      if (!Ne.call(r, c) || !Za(n[c], r[c])) return !1;
    }
    return !0;
  }
  function yv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function gv(n, r) {
    var l = yv(n);
    n = 0;
    for (var u; l; ) {
      if (l.nodeType === 3) {
        if (u = n + l.textContent.length, n <= r && u >= r) return { node: l, offset: r - n };
        n = u;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = yv(l);
    }
  }
  function vc(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? vc(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function vl() {
    for (var n = window, r = ir(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = ir(n.document);
    }
    return r;
  }
  function Ko(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Sv(n) {
    var r = vl(), l = n.focusedElem, u = n.selectionRange;
    if (r !== l && l && l.ownerDocument && vc(l.ownerDocument.documentElement, l)) {
      if (u !== null && Ko(l)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(u.start, c);
          u = u.end === void 0 ? d : Math.min(u.end, c), !n.extend && d > u && (c = u, u = d, d = c), c = gv(l, d);
          var m = gv(
            l,
            u
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > u ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Xo = S && "documentMode" in document && 11 >= document.documentMode, Jo = null, rd = null, Zu = null, ad = !1;
  function Ev(n, r, l) {
    var u = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    ad || Jo == null || Jo !== ir(u) || (u = Jo, "selectionStart" in u && Ko(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), Zu && Ju(Zu, u) || (Zu = u, u = ls(rd, "onSelect"), 0 < u.length && (r = new Qe("onSelect", "select", null, r, l), n.push({ event: r, listeners: u }), r.target = Jo)));
  }
  function es(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Zo = { animationend: es("Animation", "AnimationEnd"), animationiteration: es("Animation", "AnimationIteration"), animationstart: es("Animation", "AnimationStart"), transitionend: es("Transition", "TransitionEnd") }, hc = {}, br = {};
  S && (br = document.createElement("div").style, "AnimationEvent" in window || (delete Zo.animationend.animation, delete Zo.animationiteration.animation, delete Zo.animationstart.animation), "TransitionEvent" in window || delete Zo.transitionend.transition);
  function ts(n) {
    if (hc[n]) return hc[n];
    if (!Zo[n]) return n;
    var r = Zo[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in br) return hc[n] = r[l];
    return n;
  }
  var Cv = ts("animationend"), xv = ts("animationiteration"), Rv = ts("animationstart"), Tv = ts("transitionend"), bv = /* @__PURE__ */ new Map(), id = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function yi(n, r) {
    bv.set(n, r), be(r, [n]);
  }
  for (var to = 0; to < id.length; to++) {
    var ld = id[to], ns = ld.toLowerCase(), ny = ld[0].toUpperCase() + ld.slice(1);
    yi(ns, "on" + ny);
  }
  yi(Cv, "onAnimationEnd"), yi(xv, "onAnimationIteration"), yi(Rv, "onAnimationStart"), yi("dblclick", "onDoubleClick"), yi("focusin", "onFocus"), yi("focusout", "onBlur"), yi(Tv, "onTransitionEnd"), Pe("onMouseEnter", ["mouseout", "mouseover"]), Pe("onMouseLeave", ["mouseout", "mouseover"]), Pe("onPointerEnter", ["pointerout", "pointerover"]), Pe("onPointerLeave", ["pointerout", "pointerover"]), be("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), be("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), be("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), be("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), be("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), be("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var rs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ry = new Set("cancel close invalid load scroll toggle".split(" ").concat(rs));
  function mc(n, r, l) {
    var u = n.type || "unknown-event";
    n.currentTarget = l, se(u, r, void 0, n), n.currentTarget = null;
  }
  function yc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var u = n[l], c = u.event;
      u = u.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = u.length - 1; 0 <= m; m--) {
          var E = u[m], R = E.instance, U = E.currentTarget;
          if (E = E.listener, R !== d && c.isPropagationStopped()) break e;
          mc(c, E, U), d = R;
        }
        else for (m = 0; m < u.length; m++) {
          if (E = u[m], R = E.instance, U = E.currentTarget, E = E.listener, R !== d && c.isPropagationStopped()) break e;
          mc(c, E, U), d = R;
        }
      }
    }
    if (fi) throw n = zi, fi = !1, zi = null, n;
  }
  function Pt(n, r) {
    var l = r[sd];
    l === void 0 && (l = r[sd] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    l.has(u) || (od(r, n, 2, !1), l.add(u));
  }
  function hl(n, r, l) {
    var u = 0;
    r && (u |= 4), od(l, n, u, r);
  }
  var as = "_reactListening" + Math.random().toString(36).slice(2);
  function is(n) {
    if (!n[as]) {
      n[as] = !0, re.forEach(function(l) {
        l !== "selectionchange" && (ry.has(l) || hl(l, !1, n), hl(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[as] || (r[as] = !0, hl("selectionchange", !1, r));
    }
  }
  function od(n, r, l, u) {
    switch (Wu(r)) {
      case 1:
        var c = Hi;
        break;
      case 4:
        c = Yo;
        break;
      default:
        c = dl;
    }
    l = c.bind(null, r, l, n), c = void 0, !ha || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), u ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function ud(n, r, l, u, c) {
    var d = u;
    if (!(r & 1) && !(r & 2) && u !== null) e: for (; ; ) {
      if (u === null) return;
      var m = u.tag;
      if (m === 3 || m === 4) {
        var E = u.stateNode.containerInfo;
        if (E === c || E.nodeType === 8 && E.parentNode === c) break;
        if (m === 4) for (m = u.return; m !== null; ) {
          var R = m.tag;
          if ((R === 3 || R === 4) && (R = m.stateNode.containerInfo, R === c || R.nodeType === 8 && R.parentNode === c)) return;
          m = m.return;
        }
        for (; E !== null; ) {
          if (m = io(E), m === null) return;
          if (R = m.tag, R === 5 || R === 6) {
            u = d = m;
            continue e;
          }
          E = E.parentNode;
        }
      }
      u = u.return;
    }
    Wl(function() {
      var U = d, G = ln(l), q = [];
      e: {
        var W = bv.get(n);
        if (W !== void 0) {
          var he = Qe, Re = n;
          switch (n) {
            case "keypress":
              if (L(l) === 0) break e;
            case "keydown":
            case "keyup":
              he = Jf;
              break;
            case "focusin":
              Re = "focus", he = eo;
              break;
            case "focusout":
              Re = "blur", he = eo;
              break;
            case "beforeblur":
            case "afterblur":
              he = eo;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              he = wn;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              he = Gu;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              he = dc;
              break;
            case Cv:
            case xv:
            case Rv:
              he = Kf;
              break;
            case Tv:
              he = Xr;
              break;
            case "scroll":
              he = Vt;
              break;
            case "wheel":
              he = An;
              break;
            case "copy":
            case "cut":
            case "paste":
              he = Xf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              he = fc;
          }
          var we = (r & 4) !== 0, On = !we && n === "scroll", D = we ? W !== null ? W + "Capture" : null : W;
          we = [];
          for (var w = U, M; w !== null; ) {
            M = w;
            var Z = M.stateNode;
            if (M.tag === 5 && Z !== null && (M = Z, D !== null && (Z = si(w, D), Z != null && we.push(eu(w, Z, M)))), On) break;
            w = w.return;
          }
          0 < we.length && (W = new he(W, Re, null, l, G), q.push({ event: W, listeners: we }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (W = n === "mouseover" || n === "pointerover", he = n === "mouseout" || n === "pointerout", W && l !== Jn && (Re = l.relatedTarget || l.fromElement) && (io(Re) || Re[Yi])) break e;
          if ((he || W) && (W = G.window === G ? G : (W = G.ownerDocument) ? W.defaultView || W.parentWindow : window, he ? (Re = l.relatedTarget || l.toElement, he = U, Re = Re ? io(Re) : null, Re !== null && (On = fe(Re), Re !== On || Re.tag !== 5 && Re.tag !== 6) && (Re = null)) : (he = null, Re = U), he !== Re)) {
            if (we = wn, Z = "onMouseLeave", D = "onMouseEnter", w = "mouse", (n === "pointerout" || n === "pointerover") && (we = fc, Z = "onPointerLeave", D = "onPointerEnter", w = "pointer"), On = he == null ? W : Le(he), M = Re == null ? W : Le(Re), W = new we(Z, w + "leave", he, l, G), W.target = On, W.relatedTarget = M, Z = null, io(G) === U && (we = new we(D, w + "enter", Re, l, G), we.target = M, we.relatedTarget = On, Z = we), On = Z, he && Re) t: {
              for (we = he, D = Re, w = 0, M = we; M; M = no(M)) w++;
              for (M = 0, Z = D; Z; Z = no(Z)) M++;
              for (; 0 < w - M; ) we = no(we), w--;
              for (; 0 < M - w; ) D = no(D), M--;
              for (; w--; ) {
                if (we === D || D !== null && we === D.alternate) break t;
                we = no(we), D = no(D);
              }
              we = null;
            }
            else we = null;
            he !== null && gc(q, W, he, we, !1), Re !== null && On !== null && gc(q, On, Re, we, !0);
          }
        }
        e: {
          if (W = U ? Le(U) : window, he = W.nodeName && W.nodeName.toLowerCase(), he === "select" || he === "input" && W.type === "file") var de = cv;
          else if (uv(W)) if (fv) de = ty;
          else {
            de = ey;
            var Ae = Zm;
          }
          else (he = W.nodeName) && he.toLowerCase() === "input" && (W.type === "checkbox" || W.type === "radio") && (de = hv);
          if (de && (de = de(n, U))) {
            sv(q, de, l, G);
            break e;
          }
          Ae && Ae(n, W, U), n === "focusout" && (Ae = W._wrapperState) && Ae.controlled && W.type === "number" && Ga(W, "number", W.value);
        }
        switch (Ae = U ? Le(U) : window, n) {
          case "focusin":
            (uv(Ae) || Ae.contentEditable === "true") && (Jo = Ae, rd = U, Zu = null);
            break;
          case "focusout":
            Zu = rd = Jo = null;
            break;
          case "mousedown":
            ad = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ad = !1, Ev(q, l, G);
            break;
          case "selectionchange":
            if (Xo) break;
          case "keydown":
          case "keyup":
            Ev(q, l, G);
        }
        var Ve;
        if (Ku) e: {
          switch (n) {
            case "compositionstart":
              var Ke = "onCompositionStart";
              break e;
            case "compositionend":
              Ke = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Ke = "onCompositionUpdate";
              break e;
          }
          Ke = void 0;
        }
        else Go ? pc(n, l) && (Ke = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Ke = "onCompositionStart");
        Ke && (Wo && l.locale !== "ko" && (Go || Ke !== "onCompositionStart" ? Ke === "onCompositionEnd" && Go && (Ve = C()) : (La = G, Qo = "value" in La ? La.value : La.textContent, Go = !0)), Ae = ls(U, Ke), 0 < Ae.length && (Ke = new cc(Ke, n, null, l, G), q.push({ event: Ke, listeners: Ae }), Ve ? Ke.data = Ve : (Ve = lv(l), Ve !== null && (Ke.data = Ve)))), (Ve = Km ? Xm(n, l) : ov(n, l)) && (U = ls(U, "onBeforeInput"), 0 < U.length && (G = new cc("onBeforeInput", "beforeinput", null, l, G), q.push({ event: G, listeners: U }), G.data = Ve));
      }
      yc(q, r);
    });
  }
  function eu(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function ls(n, r) {
    for (var l = r + "Capture", u = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = si(n, l), d != null && u.unshift(eu(n, d, c)), d = si(n, r), d != null && u.push(eu(n, d, c))), n = n.return;
    }
    return u;
  }
  function no(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function gc(n, r, l, u, c) {
    for (var d = r._reactName, m = []; l !== null && l !== u; ) {
      var E = l, R = E.alternate, U = E.stateNode;
      if (R !== null && R === u) break;
      E.tag === 5 && U !== null && (E = U, c ? (R = si(l, d), R != null && m.unshift(eu(l, R, E))) : c || (R = si(l, d), R != null && m.push(eu(l, R, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var ay = /\r\n?/g, wv = /\u0000|\uFFFD/g;
  function _v(n) {
    return (typeof n == "string" ? n : "" + n).replace(ay, `
`).replace(wv, "");
  }
  function Sc(n, r, l) {
    if (r = _v(r), _v(n) !== r && l) throw Error(k(425));
  }
  function Ec() {
  }
  var ro = null, os = null;
  function ao(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Cc = typeof setTimeout == "function" ? setTimeout : void 0, kv = typeof clearTimeout == "function" ? clearTimeout : void 0, xc = typeof Promise == "function" ? Promise : void 0, iy = typeof queueMicrotask == "function" ? queueMicrotask : typeof xc < "u" ? function(n) {
    return xc.resolve(null).then(n).catch(tu);
  } : Cc;
  function tu(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function nu(n, r) {
    var l = r, u = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (u === 0) {
          n.removeChild(c), Na(r);
          return;
        }
        u--;
      } else l !== "$" && l !== "$?" && l !== "$!" || u++;
      l = c;
    } while (l);
    Na(r);
  }
  function ei(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Rc(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var ru = Math.random().toString(36).slice(2), za = "__reactFiber$" + ru, us = "__reactProps$" + ru, Yi = "__reactContainer$" + ru, sd = "__reactEvents$" + ru, cd = "__reactListeners$" + ru, au = "__reactHandles$" + ru;
  function io(n) {
    var r = n[za];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Yi] || l[za]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Rc(n); n !== null; ) {
          if (l = n[za]) return l;
          n = Rc(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function ss(n) {
    return n = n[za] || n[Yi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Le(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(k(33));
  }
  function $i(n) {
    return n[us] || null;
  }
  var xn = [], St = -1;
  function Jr(n) {
    return { current: n };
  }
  function $t(n) {
    0 > St || (n.current = xn[St], xn[St] = null, St--);
  }
  function rn(n, r) {
    St++, xn[St] = n.current, n.current = r;
  }
  var pt = {}, mn = Jr(pt), jn = Jr(!1), Ua = pt;
  function ya(n, r) {
    var l = n.type.contextTypes;
    if (!l) return pt;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r) return u.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Rn(n) {
    return n = n.childContextTypes, n != null;
  }
  function gi() {
    $t(jn), $t(mn);
  }
  function Tc(n, r, l) {
    if (mn.current !== pt) throw Error(k(168));
    rn(mn, r), rn(jn, l);
  }
  function Dv(n, r, l) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function") return l;
    u = u.getChildContext();
    for (var c in u) if (!(c in r)) throw Error(k(108, Rt(n) || "Unknown", c));
    return te({}, l, u);
  }
  function lo(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || pt, Ua = mn.current, rn(mn, n), rn(jn, jn.current), !0;
  }
  function wr(n, r, l) {
    var u = n.stateNode;
    if (!u) throw Error(k(169));
    l ? (n = Dv(n, r, Ua), u.__reactInternalMemoizedMergedChildContext = n, $t(jn), $t(mn), rn(mn, n)) : $t(jn), rn(jn, l);
  }
  var ti = null, cs = !1, fs = !1;
  function ml(n) {
    ti === null ? ti = [n] : ti.push(n);
  }
  function fd(n) {
    cs = !0, ml(n);
  }
  function zr() {
    if (!fs && ti !== null) {
      fs = !0;
      var n = 0, r = _t;
      try {
        var l = ti;
        for (_t = 1; n < l.length; n++) {
          var u = l[n];
          do
            u = u(!0);
          while (u !== null);
        }
        ti = null, cs = !1;
      } catch (c) {
        throw ti !== null && (ti = ti.slice(n + 1)), on(nt, zr), c;
      } finally {
        _t = r, fs = !1;
      }
    }
    return null;
  }
  var yl = [], gl = 0, iu = null, Sl = 0, ur = [], Fn = 0, oo = null, Ur = 1, Si = "";
  function El(n, r) {
    yl[gl++] = Sl, yl[gl++] = iu, iu = n, Sl = r;
  }
  function Ov(n, r, l) {
    ur[Fn++] = Ur, ur[Fn++] = Si, ur[Fn++] = oo, oo = n;
    var u = Ur;
    n = Si;
    var c = 32 - Nr(u) - 1;
    u &= ~(1 << c), l += 1;
    var d = 32 - Nr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (u & (1 << m) - 1).toString(32), u >>= m, c -= m, Ur = 1 << 32 - Nr(r) + c | l << c | u, Si = d + n;
    } else Ur = 1 << d | l << c | u, Si = n;
  }
  function dd(n) {
    n.return !== null && (El(n, 1), Ov(n, 1, 0));
  }
  function bc(n) {
    for (; n === iu; ) iu = yl[--gl], yl[gl] = null, Sl = yl[--gl], yl[gl] = null;
    for (; n === oo; ) oo = ur[--Fn], ur[Fn] = null, Si = ur[--Fn], ur[Fn] = null, Ur = ur[--Fn], ur[Fn] = null;
  }
  var Zr = null, ea = null, dn = !1, ni = null;
  function pd(n, r) {
    var l = Va(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function vd(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Zr = n, ea = ei(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Zr = n, ea = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = oo !== null ? { id: Ur, overflow: Si } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Va(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Zr = n, ea = null, !0) : !1;
      default:
        return !1;
    }
  }
  function hd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function md(n) {
    if (dn) {
      var r = ea;
      if (r) {
        var l = r;
        if (!vd(n, r)) {
          if (hd(n)) throw Error(k(418));
          r = ei(l.nextSibling);
          var u = Zr;
          r && vd(n, r) ? pd(u, l) : (n.flags = n.flags & -4097 | 2, dn = !1, Zr = n);
        }
      } else {
        if (hd(n)) throw Error(k(418));
        n.flags = n.flags & -4097 | 2, dn = !1, Zr = n;
      }
    }
  }
  function Nv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Zr = n;
  }
  function _n(n) {
    if (n !== Zr) return !1;
    if (!dn) return Nv(n), dn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !ao(n.type, n.memoizedProps)), r && (r = ea)) {
      if (hd(n)) throw Mv(), Error(k(418));
      for (; r; ) pd(n, r), r = ei(r.nextSibling);
    }
    if (Nv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(k(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                ea = ei(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ea = null;
      }
    } else ea = Zr ? ei(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Mv() {
    for (var n = ea; n; ) n = ei(n.nextSibling);
  }
  function Qi() {
    ea = Zr = null, dn = !1;
  }
  function ds(n) {
    ni === null ? ni = [n] : ni.push(n);
  }
  var uo = Ue.ReactCurrentBatchConfig;
  function ps(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(k(309));
          var u = l.stateNode;
        }
        if (!u) throw Error(k(147, n));
        var c = u, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(k(284));
      if (!l._owner) throw Error(k(290, n));
    }
    return n;
  }
  function lu(n, r) {
    throw n = Object.prototype.toString.call(r), Error(k(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Lv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function zv(n) {
    function r(D, w) {
      if (n) {
        var M = D.deletions;
        M === null ? (D.deletions = [w], D.flags |= 16) : M.push(w);
      }
    }
    function l(D, w) {
      if (!n) return null;
      for (; w !== null; ) r(D, w), w = w.sibling;
      return null;
    }
    function u(D, w) {
      for (D = /* @__PURE__ */ new Map(); w !== null; ) w.key !== null ? D.set(w.key, w) : D.set(w.index, w), w = w.sibling;
      return D;
    }
    function c(D, w) {
      return D = Nl(D, w), D.index = 0, D.sibling = null, D;
    }
    function d(D, w, M) {
      return D.index = M, n ? (M = D.alternate, M !== null ? (M = M.index, M < w ? (D.flags |= 2, w) : M) : (D.flags |= 2, w)) : (D.flags |= 1048576, w);
    }
    function m(D) {
      return n && D.alternate === null && (D.flags |= 2), D;
    }
    function E(D, w, M, Z) {
      return w === null || w.tag !== 6 ? (w = wo(M, D.mode, Z), w.return = D, w) : (w = c(w, M), w.return = D, w);
    }
    function R(D, w, M, Z) {
      var de = M.type;
      return de === lt ? G(D, w, M.props.children, Z, M.key) : w !== null && (w.elementType === de || typeof de == "object" && de !== null && de.$$typeof === vt && Lv(de) === w.type) ? (Z = c(w, M.props), Z.ref = ps(D, w, M), Z.return = D, Z) : (Z = ff(M.type, M.key, M.props, null, D.mode, Z), Z.ref = ps(D, w, M), Z.return = D, Z);
    }
    function U(D, w, M, Z) {
      return w === null || w.tag !== 4 || w.stateNode.containerInfo !== M.containerInfo || w.stateNode.implementation !== M.implementation ? (w = Wd(M, D.mode, Z), w.return = D, w) : (w = c(w, M.children || []), w.return = D, w);
    }
    function G(D, w, M, Z, de) {
      return w === null || w.tag !== 7 ? (w = Ml(M, D.mode, Z, de), w.return = D, w) : (w = c(w, M), w.return = D, w);
    }
    function q(D, w, M) {
      if (typeof w == "string" && w !== "" || typeof w == "number") return w = wo("" + w, D.mode, M), w.return = D, w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case xt:
            return M = ff(w.type, w.key, w.props, null, D.mode, M), M.ref = ps(D, null, w), M.return = D, M;
          case ge:
            return w = Wd(w, D.mode, M), w.return = D, w;
          case vt:
            var Z = w._init;
            return q(D, Z(w._payload), M);
        }
        if (Or(w) || Se(w)) return w = Ml(w, D.mode, M, null), w.return = D, w;
        lu(D, w);
      }
      return null;
    }
    function W(D, w, M, Z) {
      var de = w !== null ? w.key : null;
      if (typeof M == "string" && M !== "" || typeof M == "number") return de !== null ? null : E(D, w, "" + M, Z);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case xt:
            return M.key === de ? R(D, w, M, Z) : null;
          case ge:
            return M.key === de ? U(D, w, M, Z) : null;
          case vt:
            return de = M._init, W(
              D,
              w,
              de(M._payload),
              Z
            );
        }
        if (Or(M) || Se(M)) return de !== null ? null : G(D, w, M, Z, null);
        lu(D, M);
      }
      return null;
    }
    function he(D, w, M, Z, de) {
      if (typeof Z == "string" && Z !== "" || typeof Z == "number") return D = D.get(M) || null, E(w, D, "" + Z, de);
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case xt:
            return D = D.get(Z.key === null ? M : Z.key) || null, R(w, D, Z, de);
          case ge:
            return D = D.get(Z.key === null ? M : Z.key) || null, U(w, D, Z, de);
          case vt:
            var Ae = Z._init;
            return he(D, w, M, Ae(Z._payload), de);
        }
        if (Or(Z) || Se(Z)) return D = D.get(M) || null, G(w, D, Z, de, null);
        lu(w, Z);
      }
      return null;
    }
    function Re(D, w, M, Z) {
      for (var de = null, Ae = null, Ve = w, Ke = w = 0, Wn = null; Ve !== null && Ke < M.length; Ke++) {
        Ve.index > Ke ? (Wn = Ve, Ve = null) : Wn = Ve.sibling;
        var Mt = W(D, Ve, M[Ke], Z);
        if (Mt === null) {
          Ve === null && (Ve = Wn);
          break;
        }
        n && Ve && Mt.alternate === null && r(D, Ve), w = d(Mt, w, Ke), Ae === null ? de = Mt : Ae.sibling = Mt, Ae = Mt, Ve = Wn;
      }
      if (Ke === M.length) return l(D, Ve), dn && El(D, Ke), de;
      if (Ve === null) {
        for (; Ke < M.length; Ke++) Ve = q(D, M[Ke], Z), Ve !== null && (w = d(Ve, w, Ke), Ae === null ? de = Ve : Ae.sibling = Ve, Ae = Ve);
        return dn && El(D, Ke), de;
      }
      for (Ve = u(D, Ve); Ke < M.length; Ke++) Wn = he(Ve, D, Ke, M[Ke], Z), Wn !== null && (n && Wn.alternate !== null && Ve.delete(Wn.key === null ? Ke : Wn.key), w = d(Wn, w, Ke), Ae === null ? de = Wn : Ae.sibling = Wn, Ae = Wn);
      return n && Ve.forEach(function(zl) {
        return r(D, zl);
      }), dn && El(D, Ke), de;
    }
    function we(D, w, M, Z) {
      var de = Se(M);
      if (typeof de != "function") throw Error(k(150));
      if (M = de.call(M), M == null) throw Error(k(151));
      for (var Ae = de = null, Ve = w, Ke = w = 0, Wn = null, Mt = M.next(); Ve !== null && !Mt.done; Ke++, Mt = M.next()) {
        Ve.index > Ke ? (Wn = Ve, Ve = null) : Wn = Ve.sibling;
        var zl = W(D, Ve, Mt.value, Z);
        if (zl === null) {
          Ve === null && (Ve = Wn);
          break;
        }
        n && Ve && zl.alternate === null && r(D, Ve), w = d(zl, w, Ke), Ae === null ? de = zl : Ae.sibling = zl, Ae = zl, Ve = Wn;
      }
      if (Mt.done) return l(
        D,
        Ve
      ), dn && El(D, Ke), de;
      if (Ve === null) {
        for (; !Mt.done; Ke++, Mt = M.next()) Mt = q(D, Mt.value, Z), Mt !== null && (w = d(Mt, w, Ke), Ae === null ? de = Mt : Ae.sibling = Mt, Ae = Mt);
        return dn && El(D, Ke), de;
      }
      for (Ve = u(D, Ve); !Mt.done; Ke++, Mt = M.next()) Mt = he(Ve, D, Ke, Mt.value, Z), Mt !== null && (n && Mt.alternate !== null && Ve.delete(Mt.key === null ? Ke : Mt.key), w = d(Mt, w, Ke), Ae === null ? de = Mt : Ae.sibling = Mt, Ae = Mt);
      return n && Ve.forEach(function(Sy) {
        return r(D, Sy);
      }), dn && El(D, Ke), de;
    }
    function On(D, w, M, Z) {
      if (typeof M == "object" && M !== null && M.type === lt && M.key === null && (M = M.props.children), typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case xt:
            e: {
              for (var de = M.key, Ae = w; Ae !== null; ) {
                if (Ae.key === de) {
                  if (de = M.type, de === lt) {
                    if (Ae.tag === 7) {
                      l(D, Ae.sibling), w = c(Ae, M.props.children), w.return = D, D = w;
                      break e;
                    }
                  } else if (Ae.elementType === de || typeof de == "object" && de !== null && de.$$typeof === vt && Lv(de) === Ae.type) {
                    l(D, Ae.sibling), w = c(Ae, M.props), w.ref = ps(D, Ae, M), w.return = D, D = w;
                    break e;
                  }
                  l(D, Ae);
                  break;
                } else r(D, Ae);
                Ae = Ae.sibling;
              }
              M.type === lt ? (w = Ml(M.props.children, D.mode, Z, M.key), w.return = D, D = w) : (Z = ff(M.type, M.key, M.props, null, D.mode, Z), Z.ref = ps(D, w, M), Z.return = D, D = Z);
            }
            return m(D);
          case ge:
            e: {
              for (Ae = M.key; w !== null; ) {
                if (w.key === Ae) if (w.tag === 4 && w.stateNode.containerInfo === M.containerInfo && w.stateNode.implementation === M.implementation) {
                  l(D, w.sibling), w = c(w, M.children || []), w.return = D, D = w;
                  break e;
                } else {
                  l(D, w);
                  break;
                }
                else r(D, w);
                w = w.sibling;
              }
              w = Wd(M, D.mode, Z), w.return = D, D = w;
            }
            return m(D);
          case vt:
            return Ae = M._init, On(D, w, Ae(M._payload), Z);
        }
        if (Or(M)) return Re(D, w, M, Z);
        if (Se(M)) return we(D, w, M, Z);
        lu(D, M);
      }
      return typeof M == "string" && M !== "" || typeof M == "number" ? (M = "" + M, w !== null && w.tag === 6 ? (l(D, w.sibling), w = c(w, M), w.return = D, D = w) : (l(D, w), w = wo(M, D.mode, Z), w.return = D, D = w), m(D)) : l(D, w);
    }
    return On;
  }
  var ri = zv(!0), sr = zv(!1), oe = Jr(null), ga = null, _r = null, yd = null;
  function gd() {
    yd = _r = ga = null;
  }
  function Sd(n) {
    var r = oe.current;
    $t(oe), n._currentValue = r;
  }
  function Ed(n, r, l) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function ou(n, r) {
    ga = n, yd = _r = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (nr = !0), n.firstContext = null);
  }
  function Qt(n) {
    var r = n._currentValue;
    if (yd !== n) if (n = { context: n, memoizedValue: r, next: null }, _r === null) {
      if (ga === null) throw Error(k(308));
      _r = n, ga.dependencies = { lanes: 0, firstContext: n };
    } else _r = _r.next = n;
    return r;
  }
  var so = null;
  function Cd(n) {
    so === null ? so = [n] : so.push(n);
  }
  function Uv(n, r, l, u) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Cd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Ei(n, u);
  }
  function Ei(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Aa = !1;
  function Cl(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Av(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Wi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function xl(n, r, l) {
    var u = n.updateQueue;
    if (u === null) return null;
    if (u = u.shared, Et & 2) {
      var c = u.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), u.pending = r, Ei(n, l);
    }
    return c = u.interleaved, c === null ? (r.next = r, Cd(u)) : (r.next = c.next, c.next = r), u.interleaved = r, Ei(n, l);
  }
  function wc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, l |= u, r.lanes = l, $u(n, l);
    }
  }
  function jv(n, r) {
    var l = n.updateQueue, u = n.alternate;
    if (u !== null && (u = u.updateQueue, l === u)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: u.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: u.shared, effects: u.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function _c(n, r, l, u) {
    var c = n.updateQueue;
    Aa = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var R = E, U = R.next;
      R.next = null, m === null ? d = U : m.next = U, m = R;
      var G = n.alternate;
      G !== null && (G = G.updateQueue, E = G.lastBaseUpdate, E !== m && (E === null ? G.firstBaseUpdate = U : E.next = U, G.lastBaseUpdate = R));
    }
    if (d !== null) {
      var q = c.baseState;
      m = 0, G = U = R = null, E = d;
      do {
        var W = E.lane, he = E.eventTime;
        if ((u & W) === W) {
          G !== null && (G = G.next = {
            eventTime: he,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var Re = n, we = E;
            switch (W = r, he = l, we.tag) {
              case 1:
                if (Re = we.payload, typeof Re == "function") {
                  q = Re.call(he, q, W);
                  break e;
                }
                q = Re;
                break e;
              case 3:
                Re.flags = Re.flags & -65537 | 128;
              case 0:
                if (Re = we.payload, W = typeof Re == "function" ? Re.call(he, q, W) : Re, W == null) break e;
                q = te({}, q, W);
                break e;
              case 2:
                Aa = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, W = c.effects, W === null ? c.effects = [E] : W.push(E));
        } else he = { eventTime: he, lane: W, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, G === null ? (U = G = he, R = q) : G = G.next = he, m |= W;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          W = E, E = W.next, W.next = null, c.lastBaseUpdate = W, c.shared.pending = null;
        }
      } while (!0);
      if (G === null && (R = q), c.baseState = R, c.firstBaseUpdate = U, c.lastBaseUpdate = G, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Eo |= m, n.lanes = m, n.memoizedState = q;
    }
  }
  function xd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var u = n[r], c = u.callback;
      if (c !== null) {
        if (u.callback = null, u = l, typeof c != "function") throw Error(k(191, c));
        c.call(u);
      }
    }
  }
  var uu = {}, Ci = Jr(uu), vs = Jr(uu), hs = Jr(uu);
  function co(n) {
    if (n === uu) throw Error(k(174));
    return n;
  }
  function Rd(n, r) {
    switch (rn(hs, r), rn(vs, n), rn(Ci, uu), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : lr(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = lr(r, n);
    }
    $t(Ci), rn(Ci, r);
  }
  function su() {
    $t(Ci), $t(vs), $t(hs);
  }
  function Td(n) {
    co(hs.current);
    var r = co(Ci.current), l = lr(r, n.type);
    r !== l && (rn(vs, n), rn(Ci, l));
  }
  function bd(n) {
    vs.current === n && ($t(Ci), $t(vs));
  }
  var yn = Jr(0);
  function kc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var wd = [];
  function ms() {
    for (var n = 0; n < wd.length; n++) wd[n]._workInProgressVersionPrimary = null;
    wd.length = 0;
  }
  var ze = Ue.ReactCurrentDispatcher, mt = Ue.ReactCurrentBatchConfig, bt = 0, rt = null, Jt = null, Yn = null, Dc = !1, ys = !1, gs = 0, _d = 0;
  function P() {
    throw Error(k(321));
  }
  function Hn(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!Za(n[l], r[l])) return !1;
    return !0;
  }
  function $e(n, r, l, u, c, d) {
    if (bt = d, rt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, ze.current = n === null || n.memoizedState === null ? Yc : $c, n = l(u, c), ys) {
      d = 0;
      do {
        if (ys = !1, gs = 0, 25 <= d) throw Error(k(301));
        d += 1, Yn = Jt = null, r.updateQueue = null, ze.current = Rs, n = l(u, c);
      } while (ys);
    }
    if (ze.current = Wt, r = Jt !== null && Jt.next !== null, bt = 0, Yn = Jt = rt = null, Dc = !1, r) throw Error(k(300));
    return n;
  }
  function Rl() {
    var n = gs !== 0;
    return gs = 0, n;
  }
  function er() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Yn === null ? rt.memoizedState = Yn = n : Yn = Yn.next = n, Yn;
  }
  function tr() {
    if (Jt === null) {
      var n = rt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Jt.next;
    var r = Yn === null ? rt.memoizedState : Yn.next;
    if (r !== null) Yn = r, Jt = n;
    else {
      if (n === null) throw Error(k(310));
      Jt = n, n = { memoizedState: Jt.memoizedState, baseState: Jt.baseState, baseQueue: Jt.baseQueue, queue: Jt.queue, next: null }, Yn === null ? rt.memoizedState = Yn = n : Yn = Yn.next = n;
    }
    return Yn;
  }
  function ta(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function fo(n) {
    var r = tr(), l = r.queue;
    if (l === null) throw Error(k(311));
    l.lastRenderedReducer = n;
    var u = Jt, c = u.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      u.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, u = u.baseState;
      var E = m = null, R = null, U = d;
      do {
        var G = U.lane;
        if ((bt & G) === G) R !== null && (R = R.next = { lane: 0, action: U.action, hasEagerState: U.hasEagerState, eagerState: U.eagerState, next: null }), u = U.hasEagerState ? U.eagerState : n(u, U.action);
        else {
          var q = {
            lane: G,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          };
          R === null ? (E = R = q, m = u) : R = R.next = q, rt.lanes |= G, Eo |= G;
        }
        U = U.next;
      } while (U !== null && U !== d);
      R === null ? m = u : R.next = E, Za(u, r.memoizedState) || (nr = !0), r.memoizedState = u, r.baseState = m, r.baseQueue = R, l.lastRenderedState = u;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, rt.lanes |= d, Eo |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Tl(n) {
    var r = tr(), l = r.queue;
    if (l === null) throw Error(k(311));
    l.lastRenderedReducer = n;
    var u = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      Za(d, r.memoizedState) || (nr = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, u];
  }
  function cu() {
  }
  function Oc(n, r) {
    var l = rt, u = tr(), c = r(), d = !Za(u.memoizedState, c);
    if (d && (u.memoizedState = c, nr = !0), u = u.queue, Ss(Lc.bind(null, l, u, n), [n]), u.getSnapshot !== r || d || Yn !== null && Yn.memoizedState.tag & 1) {
      if (l.flags |= 2048, po(9, Mc.bind(null, l, u, c, r), void 0, null), Vn === null) throw Error(k(349));
      bt & 30 || Nc(l, r, c);
    }
    return c;
  }
  function Nc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = rt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, rt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Mc(n, r, l, u) {
    r.value = l, r.getSnapshot = u, zc(r) && Uc(n);
  }
  function Lc(n, r, l) {
    return l(function() {
      zc(r) && Uc(n);
    });
  }
  function zc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !Za(n, l);
    } catch {
      return !0;
    }
  }
  function Uc(n) {
    var r = Ei(n, 1);
    r !== null && xa(r, n, 1, -1);
  }
  function Ac(n) {
    var r = er();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ta, lastRenderedState: n }, r.queue = n, n = n.dispatch = xs.bind(null, rt, n), [r.memoizedState, n];
  }
  function po(n, r, l, u) {
    return n = { tag: n, create: r, destroy: l, deps: u, next: null }, r = rt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, rt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (u = l.next, l.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function jc() {
    return tr().memoizedState;
  }
  function fu(n, r, l, u) {
    var c = er();
    rt.flags |= n, c.memoizedState = po(1 | r, l, void 0, u === void 0 ? null : u);
  }
  function du(n, r, l, u) {
    var c = tr();
    u = u === void 0 ? null : u;
    var d = void 0;
    if (Jt !== null) {
      var m = Jt.memoizedState;
      if (d = m.destroy, u !== null && Hn(u, m.deps)) {
        c.memoizedState = po(r, l, d, u);
        return;
      }
    }
    rt.flags |= n, c.memoizedState = po(1 | r, l, d, u);
  }
  function Fc(n, r) {
    return fu(8390656, 8, n, r);
  }
  function Ss(n, r) {
    return du(2048, 8, n, r);
  }
  function Hc(n, r) {
    return du(4, 2, n, r);
  }
  function Vc(n, r) {
    return du(4, 4, n, r);
  }
  function Es(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function vo(n, r, l) {
    return l = l != null ? l.concat([n]) : null, du(4, 4, Es.bind(null, r, n), l);
  }
  function Cs() {
  }
  function Pc(n, r) {
    var l = tr();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && Hn(r, u[1]) ? u[0] : (l.memoizedState = [n, r], n);
  }
  function Bc(n, r) {
    var l = tr();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && Hn(r, u[1]) ? u[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Ic(n, r, l) {
    return bt & 21 ? (Za(l, r) || (l = Gl(), rt.lanes |= l, Eo |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, nr = !0), n.memoizedState = l);
  }
  function Fv(n, r) {
    var l = _t;
    _t = l !== 0 && 4 > l ? l : 4, n(!0);
    var u = mt.transition;
    mt.transition = {};
    try {
      n(!1), r();
    } finally {
      _t = l, mt.transition = u;
    }
  }
  function pu() {
    return tr().memoizedState;
  }
  function Hv(n, r, l) {
    var u = Ca(n);
    if (l = { lane: u, action: l, hasEagerState: !1, eagerState: null, next: null }, bl(n)) na(r, l);
    else if (l = Uv(n, r, l, u), l !== null) {
      var c = an();
      xa(l, n, u, c), Vv(l, r, u);
    }
  }
  function xs(n, r, l) {
    var u = Ca(n), c = { lane: u, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (bl(n)) na(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, Za(E, m)) {
          var R = r.interleaved;
          R === null ? (c.next = c, Cd(r)) : (c.next = R.next, R.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Uv(n, r, c, u), l !== null && (c = an(), xa(l, n, u, c), Vv(l, r, u));
    }
  }
  function bl(n) {
    var r = n.alternate;
    return n === rt || r !== null && r === rt;
  }
  function na(n, r) {
    ys = Dc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Vv(n, r, l) {
    if (l & 4194240) {
      var u = r.lanes;
      u &= n.pendingLanes, l |= u, r.lanes = l, $u(n, l);
    }
  }
  var Wt = { readContext: Qt, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: !1 }, Yc = { readContext: Qt, useCallback: function(n, r) {
    return er().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Qt, useEffect: Fc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, fu(
      4194308,
      4,
      Es.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return fu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return fu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = er();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var u = er();
    return r = l !== void 0 ? l(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = Hv.bind(null, rt, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = er();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Ac, useDebugValue: Cs, useDeferredValue: function(n) {
    return er().memoizedState = n;
  }, useTransition: function() {
    var n = Ac(!1), r = n[0];
    return n = Fv.bind(null, n[1]), er().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var u = rt, c = er();
    if (dn) {
      if (l === void 0) throw Error(k(407));
      l = l();
    } else {
      if (l = r(), Vn === null) throw Error(k(349));
      bt & 30 || Nc(u, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Fc(Lc.bind(
      null,
      u,
      d,
      n
    ), [n]), u.flags |= 2048, po(9, Mc.bind(null, u, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = er(), r = Vn.identifierPrefix;
    if (dn) {
      var l = Si, u = Ur;
      l = (u & ~(1 << 32 - Nr(u) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = gs++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = _d++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, $c = {
    readContext: Qt,
    useCallback: Pc,
    useContext: Qt,
    useEffect: Ss,
    useImperativeHandle: vo,
    useInsertionEffect: Hc,
    useLayoutEffect: Vc,
    useMemo: Bc,
    useReducer: fo,
    useRef: jc,
    useState: function() {
      return fo(ta);
    },
    useDebugValue: Cs,
    useDeferredValue: function(n) {
      var r = tr();
      return Ic(r, Jt.memoizedState, n);
    },
    useTransition: function() {
      var n = fo(ta)[0], r = tr().memoizedState;
      return [n, r];
    },
    useMutableSource: cu,
    useSyncExternalStore: Oc,
    useId: pu,
    unstable_isNewReconciler: !1
  }, Rs = { readContext: Qt, useCallback: Pc, useContext: Qt, useEffect: Ss, useImperativeHandle: vo, useInsertionEffect: Hc, useLayoutEffect: Vc, useMemo: Bc, useReducer: Tl, useRef: jc, useState: function() {
    return Tl(ta);
  }, useDebugValue: Cs, useDeferredValue: function(n) {
    var r = tr();
    return Jt === null ? r.memoizedState = n : Ic(r, Jt.memoizedState, n);
  }, useTransition: function() {
    var n = Tl(ta)[0], r = tr().memoizedState;
    return [n, r];
  }, useMutableSource: cu, useSyncExternalStore: Oc, useId: pu, unstable_isNewReconciler: !1 };
  function ra(n, r) {
    if (n && n.defaultProps) {
      r = te({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function kd(n, r, l, u) {
    r = n.memoizedState, l = l(u, r), l = l == null ? r : te({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Qc = { isMounted: function(n) {
    return (n = n._reactInternals) ? fe(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var u = an(), c = Ca(n), d = Wi(u, c);
    d.payload = r, l != null && (d.callback = l), r = xl(n, d, c), r !== null && (xa(r, n, c, u), wc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var u = an(), c = Ca(n), d = Wi(u, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = xl(n, d, c), r !== null && (xa(r, n, c, u), wc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = an(), u = Ca(n), c = Wi(l, u);
    c.tag = 2, r != null && (c.callback = r), r = xl(n, c, u), r !== null && (xa(r, n, u, l), wc(r, n, u));
  } };
  function Pv(n, r, l, u, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, d, m) : r.prototype && r.prototype.isPureReactComponent ? !Ju(l, u) || !Ju(c, d) : !0;
  }
  function Bv(n, r, l) {
    var u = !1, c = pt, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Qt(d) : (c = Rn(r) ? Ua : mn.current, u = r.contextTypes, d = (u = u != null) ? ya(n, c) : pt), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Qc, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Wc(n, r, l, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, u), r.state !== n && Qc.enqueueReplaceState(r, r.state, null);
  }
  function Dd(n, r, l, u) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Cl(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Qt(d) : (d = Rn(r) ? Ua : mn.current, c.context = ya(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (kd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Qc.enqueueReplaceState(c, c.state, null), _c(n, l, c, u), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function wl(n, r) {
    try {
      var l = "", u = r;
      do
        l += Ye(u), u = u.return;
      while (u);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Gc(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Od(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var ly = typeof WeakMap == "function" ? WeakMap : Map;
  function Ts(n, r, l) {
    l = Wi(-1, l), l.tag = 3, l.payload = { element: null };
    var u = r.value;
    return l.callback = function() {
      kl || (kl = !0, Ms = u), Od(n, r);
    }, l;
  }
  function Iv(n, r, l) {
    l = Wi(-1, l), l.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = r.value;
      l.payload = function() {
        return u(c);
      }, l.callback = function() {
        Od(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Od(n, r), typeof u != "function" && (Ha === null ? Ha = /* @__PURE__ */ new Set([this]) : Ha.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Nd(n, r, l) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new ly();
      var c = /* @__PURE__ */ new Set();
      u.set(r, c);
    } else c = u.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), u.set(r, c));
    c.has(l) || (c.add(l), n = Yd.bind(null, n, r, l), r.then(n, n));
  }
  function Md(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Yv(n, r, l, u, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Wi(-1, 1), r.tag = 2, xl(l, r, 1))), l.lanes |= 1), n);
  }
  var ho = Ue.ReactCurrentOwner, nr = !1;
  function kn(n, r, l, u) {
    r.child = n === null ? sr(r, null, l, u) : ri(r, n.child, l, u);
  }
  function qc(n, r, l, u, c) {
    l = l.render;
    var d = r.ref;
    return ou(r, c), u = $e(n, r, l, u, d, c), l = Rl(), n !== null && !nr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, cr(n, r, c)) : (dn && l && dd(r), r.flags |= 1, kn(n, r, u, c), r.child);
  }
  function aa(n, r, l, u, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Qd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, mo(n, r, d, u, c)) : (n = ff(l.type, null, u, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Ju, l(m, u) && n.ref === r.ref) return cr(n, r, c);
    }
    return r.flags |= 1, n = Nl(d, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function mo(n, r, l, u, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Ju(d, u) && n.ref === r.ref) if (nr = !1, r.pendingProps = u = d, (n.lanes & c) !== 0) n.flags & 131072 && (nr = !0);
      else return r.lanes = n.lanes, cr(n, r, c);
    }
    return Kc(n, r, l, u, c);
  }
  function it(n, r, l) {
    var u = r.pendingProps, c = u.children, d = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, rn(yu, Ea), Ea |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, rn(yu, Ea), Ea |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = d !== null ? d.baseLanes : l, rn(yu, Ea), Ea |= u;
    }
    else d !== null ? (u = d.baseLanes | l, r.memoizedState = null) : u = l, rn(yu, Ea), Ea |= u;
    return kn(n, r, c, l), r.child;
  }
  function bs(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Kc(n, r, l, u, c) {
    var d = Rn(l) ? Ua : mn.current;
    return d = ya(r, d), ou(r, c), l = $e(n, r, l, u, d, c), u = Rl(), n !== null && !nr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, cr(n, r, c)) : (dn && u && dd(r), r.flags |= 1, kn(n, r, l, c), r.child);
  }
  function oy(n, r, l, u, c) {
    if (Rn(l)) {
      var d = !0;
      lo(r);
    } else d = !1;
    if (ou(r, c), r.stateNode === null) ja(n, r), Bv(r, l, u), Dd(r, l, u, c), u = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var R = m.context, U = l.contextType;
      typeof U == "object" && U !== null ? U = Qt(U) : (U = Rn(l) ? Ua : mn.current, U = ya(r, U));
      var G = l.getDerivedStateFromProps, q = typeof G == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      q || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== u || R !== U) && Wc(r, m, u, U), Aa = !1;
      var W = r.memoizedState;
      m.state = W, _c(r, u, m, c), R = r.memoizedState, E !== u || W !== R || jn.current || Aa ? (typeof G == "function" && (kd(r, l, G, u), R = r.memoizedState), (E = Aa || Pv(r, l, E, u, W, R, U)) ? (q || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = R), m.props = u, m.state = R, m.context = U, u = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      m = r.stateNode, Av(n, r), E = r.memoizedProps, U = r.type === r.elementType ? E : ra(r.type, E), m.props = U, q = r.pendingProps, W = m.context, R = l.contextType, typeof R == "object" && R !== null ? R = Qt(R) : (R = Rn(l) ? Ua : mn.current, R = ya(r, R));
      var he = l.getDerivedStateFromProps;
      (G = typeof he == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== q || W !== R) && Wc(r, m, u, R), Aa = !1, W = r.memoizedState, m.state = W, _c(r, u, m, c);
      var Re = r.memoizedState;
      E !== q || W !== Re || jn.current || Aa ? (typeof he == "function" && (kd(r, l, he, u), Re = r.memoizedState), (U = Aa || Pv(r, l, U, u, W, Re, R) || !1) ? (G || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(u, Re, R), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(u, Re, R)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = Re), m.props = u, m.state = Re, m.context = R, u = U) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return Ld(n, r, l, u, d, c);
  }
  function Ld(n, r, l, u, c, d) {
    bs(n, r);
    var m = (r.flags & 128) !== 0;
    if (!u && !m) return c && wr(r, l, !1), cr(n, r, d);
    u = r.stateNode, ho.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && m ? (r.child = ri(r, n.child, null, d), r.child = ri(r, null, E, d)) : kn(n, r, E, d), r.memoizedState = u.state, c && wr(r, l, !0), r.child;
  }
  function Xc(n) {
    var r = n.stateNode;
    r.pendingContext ? Tc(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Tc(n, r.context, !1), Rd(n, r.containerInfo);
  }
  function vu(n, r, l, u, c) {
    return Qi(), ds(c), r.flags |= 256, kn(n, r, l, u), r.child;
  }
  var zd = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Jc(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function $v(n, r, l) {
    var u = r.pendingProps, c = yn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), rn(yn, c & 1), n === null)
      return md(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = u.children, n = u.fallback, d ? (u = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(u & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = Ru(m, u, 0, null), n = Ml(n, u, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Jc(l), r.memoizedState = zd, n) : ws(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return Qv(n, r, m, u, E, c, l);
    if (d) {
      d = u.fallback, m = r.mode, c = n.child, E = c.sibling;
      var R = { mode: "hidden", children: u.children };
      return !(m & 1) && r.child !== c ? (u = r.child, u.childLanes = 0, u.pendingProps = R, r.deletions = null) : (u = Nl(c, R), u.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Nl(E, d) : (d = Ml(d, m, l, null), d.flags |= 2), d.return = r, u.return = r, u.sibling = d, r.child = u, u = d, d = r.child, m = n.child.memoizedState, m = m === null ? Jc(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = zd, u;
    }
    return d = n.child, n = d.sibling, u = Nl(d, { mode: "visible", children: u.children }), !(r.mode & 1) && (u.lanes = l), u.return = r, u.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function ws(n, r) {
    return r = Ru({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Zc(n, r, l, u) {
    return u !== null && ds(u), ri(r, n.child, null, l), n = ws(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Qv(n, r, l, u, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, u = Gc(Error(k(422))), Zc(n, r, m, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = u.fallback, c = r.mode, u = Ru({ mode: "visible", children: u.children }, c, 0, null), d = Ml(d, c, m, null), d.flags |= 2, u.return = r, d.return = r, u.sibling = d, r.child = u, r.mode & 1 && ri(r, n.child, null, m), r.child.memoizedState = Jc(m), r.memoizedState = zd, d);
    if (!(r.mode & 1)) return Zc(n, r, m, null);
    if (c.data === "$!") {
      if (u = c.nextSibling && c.nextSibling.dataset, u) var E = u.dgst;
      return u = E, d = Error(k(419)), u = Gc(d, u, void 0), Zc(n, r, m, u);
    }
    if (E = (m & n.childLanes) !== 0, nr || E) {
      if (u = Vn, u !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (u.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Ei(n, c), xa(u, n, c, -1));
      }
      return Bd(), u = Gc(Error(k(421))), Zc(n, r, m, u);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = py.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ea = ei(c.nextSibling), Zr = r, dn = !0, ni = null, n !== null && (ur[Fn++] = Ur, ur[Fn++] = Si, ur[Fn++] = oo, Ur = n.id, Si = n.overflow, oo = r), r = ws(r, u.children), r.flags |= 4096, r);
  }
  function Ud(n, r, l) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), Ed(n.return, r, l);
  }
  function ef(n, r, l, u, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = u, d.tail = l, d.tailMode = c);
  }
  function ia(n, r, l) {
    var u = r.pendingProps, c = u.revealOrder, d = u.tail;
    if (kn(n, r, u.children, l), u = yn.current, u & 2) u = u & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Ud(n, l, r);
        else if (n.tag === 19) Ud(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      u &= 1;
    }
    if (rn(yn, u), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && kc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), ef(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && kc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        ef(r, !0, l, null, d);
        break;
      case "together":
        ef(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function ja(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function cr(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Eo |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(k(153));
    if (r.child !== null) {
      for (n = r.child, l = Nl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Nl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function tf(n, r, l) {
    switch (r.tag) {
      case 3:
        Xc(r), Qi();
        break;
      case 5:
        Td(r);
        break;
      case 1:
        Rn(r.type) && lo(r);
        break;
      case 4:
        Rd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, c = r.memoizedProps.value;
        rn(oe, u._currentValue), u._currentValue = c;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (rn(yn, yn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? $v(n, r, l) : (rn(yn, yn.current & 1), n = cr(n, r, l), n !== null ? n.sibling : null);
        rn(yn, yn.current & 1);
        break;
      case 19:
        if (u = (l & r.childLanes) !== 0, n.flags & 128) {
          if (u) return ia(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), rn(yn, yn.current), u) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, it(n, r, l);
    }
    return cr(n, r, l);
  }
  var hu, Sa, $n, Wv;
  hu = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, Sa = function() {
  }, $n = function(n, r, l, u) {
    var c = n.memoizedProps;
    if (c !== u) {
      n = r.stateNode, co(Ci.current);
      var d = null;
      switch (l) {
        case "input":
          c = Ln(n, c), u = Ln(n, u), d = [];
          break;
        case "select":
          c = te({}, c, { value: void 0 }), u = te({}, u, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Kn(n, c), u = Kn(n, u), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof u.onClick == "function" && (n.onclick = Ec);
      }
      sn(l, u);
      var m;
      l = null;
      for (U in c) if (!u.hasOwnProperty(U) && c.hasOwnProperty(U) && c[U] != null) if (U === "style") {
        var E = c[U];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else U !== "dangerouslySetInnerHTML" && U !== "children" && U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && U !== "autoFocus" && (ke.hasOwnProperty(U) ? d || (d = []) : (d = d || []).push(U, null));
      for (U in u) {
        var R = u[U];
        if (E = c != null ? c[U] : void 0, u.hasOwnProperty(U) && R !== E && (R != null || E != null)) if (U === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || R && R.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in R) R.hasOwnProperty(m) && E[m] !== R[m] && (l || (l = {}), l[m] = R[m]);
        } else l || (d || (d = []), d.push(
          U,
          l
        )), l = R;
        else U === "dangerouslySetInnerHTML" ? (R = R ? R.__html : void 0, E = E ? E.__html : void 0, R != null && E !== R && (d = d || []).push(U, R)) : U === "children" ? typeof R != "string" && typeof R != "number" || (d = d || []).push(U, "" + R) : U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && (ke.hasOwnProperty(U) ? (R != null && U === "onScroll" && Pt("scroll", n), d || E === R || (d = [])) : (d = d || []).push(U, R));
      }
      l && (d = d || []).push("style", l);
      var U = d;
      (r.updateQueue = U) && (r.flags |= 4);
    }
  }, Wv = function(n, r, l, u) {
    l !== u && (r.flags |= 4);
  };
  function _s(n, r) {
    if (!dn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var u = null; l !== null; ) l.alternate !== null && (u = l), l = l.sibling;
        u === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : u.sibling = null;
    }
  }
  function kr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, u = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, u |= c.subtreeFlags & 14680064, u |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, u |= c.subtreeFlags, u |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= u, n.childLanes = l, r;
  }
  function Ad(n, r, l) {
    var u = r.pendingProps;
    switch (bc(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return kr(r), null;
      case 1:
        return Rn(r.type) && gi(), kr(r), null;
      case 3:
        return u = r.stateNode, su(), $t(jn), $t(mn), ms(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (_n(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ni !== null && (As(ni), ni = null))), Sa(n, r), kr(r), null;
      case 5:
        bd(r);
        var c = co(hs.current);
        if (l = r.type, n !== null && r.stateNode != null) $n(n, r, l, u, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null) throw Error(k(166));
            return kr(r), null;
          }
          if (n = co(Ci.current), _n(r)) {
            u = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (u[za] = r, u[us] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Pt("cancel", u), Pt("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                Pt("load", u);
                break;
              case "video":
              case "audio":
                for (c = 0; c < rs.length; c++) Pt(rs[c], u);
                break;
              case "source":
                Pt("error", u);
                break;
              case "img":
              case "image":
              case "link":
                Pt(
                  "error",
                  u
                ), Pt("load", u);
                break;
              case "details":
                Pt("toggle", u);
                break;
              case "input":
                Cr(u, d), Pt("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!d.multiple }, Pt("invalid", u);
                break;
              case "textarea":
                Xn(u, d), Pt("invalid", u);
            }
            sn(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? u.textContent !== E && (d.suppressHydrationWarning !== !0 && Sc(u.textContent, E, n), c = ["children", E]) : typeof E == "number" && u.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && Sc(
                u.textContent,
                E,
                n
              ), c = ["children", "" + E]) : ke.hasOwnProperty(m) && E != null && m === "onScroll" && Pt("scroll", u);
            }
            switch (l) {
              case "input":
                Mn(u), da(u, d, !0);
                break;
              case "textarea":
                Mn(u), qa(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (u.onclick = Ec);
            }
            u = c, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Un(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = m.createElement(l, { is: u.is }) : (n = m.createElement(l), l === "select" && (m = n, u.multiple ? m.multiple = !0 : u.size && (m.size = u.size))) : n = m.createElementNS(n, l), n[za] = r, n[us] = u, hu(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = cn(l, u), l) {
                case "dialog":
                  Pt("cancel", n), Pt("close", n), c = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Pt("load", n), c = u;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < rs.length; c++) Pt(rs[c], n);
                  c = u;
                  break;
                case "source":
                  Pt("error", n), c = u;
                  break;
                case "img":
                case "image":
                case "link":
                  Pt(
                    "error",
                    n
                  ), Pt("load", n), c = u;
                  break;
                case "details":
                  Pt("toggle", n), c = u;
                  break;
                case "input":
                  Cr(n, u), c = Ln(n, u), Pt("invalid", n);
                  break;
                case "option":
                  c = u;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!u.multiple }, c = te({}, u, { value: void 0 }), Pt("invalid", n);
                  break;
                case "textarea":
                  Xn(n, u), c = Kn(n, u), Pt("invalid", n);
                  break;
                default:
                  c = u;
              }
              sn(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var R = E[d];
                d === "style" ? At(n, R) : d === "dangerouslySetInnerHTML" ? (R = R ? R.__html : void 0, R != null && Ni(n, R)) : d === "children" ? typeof R == "string" ? (l !== "textarea" || R !== "") && pa(n, R) : typeof R == "number" && pa(n, "" + R) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (ke.hasOwnProperty(d) ? R != null && d === "onScroll" && Pt("scroll", n) : R != null && et(n, d, R, m));
              }
              switch (l) {
                case "input":
                  Mn(n), da(n, u, !1);
                  break;
                case "textarea":
                  Mn(n), qa(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + Ge(u.value));
                  break;
                case "select":
                  n.multiple = !!u.multiple, d = u.value, d != null ? In(n, !!u.multiple, d, !1) : u.defaultValue != null && In(
                    n,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Ec);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u = !!u.autoFocus;
                  break e;
                case "img":
                  u = !0;
                  break e;
                default:
                  u = !1;
              }
            }
            u && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return kr(r), null;
      case 6:
        if (n && r.stateNode != null) Wv(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null) throw Error(k(166));
          if (l = co(hs.current), co(Ci.current), _n(r)) {
            if (u = r.stateNode, l = r.memoizedProps, u[za] = r, (d = u.nodeValue !== l) && (n = Zr, n !== null)) switch (n.tag) {
              case 3:
                Sc(u.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Sc(u.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else u = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(u), u[za] = r, r.stateNode = u;
        }
        return kr(r), null;
      case 13:
        if ($t(yn), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (dn && ea !== null && r.mode & 1 && !(r.flags & 128)) Mv(), Qi(), r.flags |= 98560, d = !1;
          else if (d = _n(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(k(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(k(317));
              d[za] = r;
            } else Qi(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            kr(r), d = !1;
          } else ni !== null && (As(ni), ni = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, r.mode & 1 && (n === null || yn.current & 1 ? Qn === 0 && (Qn = 3) : Bd())), r.updateQueue !== null && (r.flags |= 4), kr(r), null);
      case 4:
        return su(), Sa(n, r), n === null && is(r.stateNode.containerInfo), kr(r), null;
      case 10:
        return Sd(r.type._context), kr(r), null;
      case 17:
        return Rn(r.type) && gi(), kr(r), null;
      case 19:
        if ($t(yn), d = r.memoizedState, d === null) return kr(r), null;
        if (u = (r.flags & 128) !== 0, m = d.rendering, m === null) if (u) _s(d, !1);
        else {
          if (Qn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = kc(n), m !== null) {
              for (r.flags |= 128, _s(d, !1), u = m.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = l, l = r.child; l !== null; ) d = l, n = u, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return rn(yn, yn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && Ft() > Su && (r.flags |= 128, u = !0, _s(d, !1), r.lanes = 4194304);
        }
        else {
          if (!u) if (n = kc(m), n !== null) {
            if (r.flags |= 128, u = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), _s(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !dn) return kr(r), null;
          } else 2 * Ft() - d.renderingStartTime > Su && l !== 1073741824 && (r.flags |= 128, u = !0, _s(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Ft(), r.sibling = null, l = yn.current, rn(yn, u ? l & 1 | 2 : l & 1), r) : (kr(r), null);
      case 22:
      case 23:
        return Pd(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && r.mode & 1 ? Ea & 1073741824 && (kr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : kr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(k(156, r.tag));
  }
  function Gv(n, r) {
    switch (bc(r), r.tag) {
      case 1:
        return Rn(r.type) && gi(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return su(), $t(jn), $t(mn), ms(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return bd(r), null;
      case 13:
        if ($t(yn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(k(340));
          Qi();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return $t(yn), null;
      case 4:
        return su(), null;
      case 10:
        return Sd(r.type._context), null;
      case 22:
      case 23:
        return Pd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var yo = !1, fr = !1, uy = typeof WeakSet == "function" ? WeakSet : Set, Ee = null;
  function _l(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (u) {
      Tn(n, r, u);
    }
    else l.current = null;
  }
  function jd(n, r, l) {
    try {
      l();
    } catch (u) {
      Tn(n, r, u);
    }
  }
  var Fd = !1;
  function sy(n, r) {
    if (ro = fl, n = vl(), Ko(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var u = l.getSelection && l.getSelection();
        if (u && u.rangeCount !== 0) {
          l = u.anchorNode;
          var c = u.anchorOffset, d = u.focusNode;
          u = u.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var m = 0, E = -1, R = -1, U = 0, G = 0, q = n, W = null;
          t: for (; ; ) {
            for (var he; q !== l || c !== 0 && q.nodeType !== 3 || (E = m + c), q !== d || u !== 0 && q.nodeType !== 3 || (R = m + u), q.nodeType === 3 && (m += q.nodeValue.length), (he = q.firstChild) !== null; )
              W = q, q = he;
            for (; ; ) {
              if (q === n) break t;
              if (W === l && ++U === c && (E = m), W === d && ++G === u && (R = m), (he = q.nextSibling) !== null) break;
              q = W, W = q.parentNode;
            }
            q = he;
          }
          l = E === -1 || R === -1 ? null : { start: E, end: R };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (os = { focusedElem: n, selectionRange: l }, fl = !1, Ee = r; Ee !== null; ) if (r = Ee, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, Ee = n;
    else for (; Ee !== null; ) {
      r = Ee;
      try {
        var Re = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Re !== null) {
              var we = Re.memoizedProps, On = Re.memoizedState, D = r.stateNode, w = D.getSnapshotBeforeUpdate(r.elementType === r.type ? we : ra(r.type, we), On);
              D.__reactInternalSnapshotBeforeUpdate = w;
            }
            break;
          case 3:
            var M = r.stateNode.containerInfo;
            M.nodeType === 1 ? M.textContent = "" : M.nodeType === 9 && M.documentElement && M.removeChild(M.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(k(163));
        }
      } catch (Z) {
        Tn(r, r.return, Z);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, Ee = n;
        break;
      }
      Ee = r.return;
    }
    return Re = Fd, Fd = !1, Re;
  }
  function mu(n, r, l) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var c = u = u.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && jd(r, l, d);
        }
        c = c.next;
      } while (c !== u);
    }
  }
  function nf(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var u = l.create;
          l.destroy = u();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function rf(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function qv(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, qv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[za], delete r[us], delete r[sd], delete r[cd], delete r[au])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function af(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function ks(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || af(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function xi(n, r, l) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Ec));
    else if (u !== 4 && (n = n.child, n !== null)) for (xi(n, r, l), n = n.sibling; n !== null; ) xi(n, r, l), n = n.sibling;
  }
  function Ri(n, r, l) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (u !== 4 && (n = n.child, n !== null)) for (Ri(n, r, l), n = n.sibling; n !== null; ) Ri(n, r, l), n = n.sibling;
  }
  var gn = null, Ar = !1;
  function Fa(n, r, l) {
    for (l = l.child; l !== null; ) Gi(n, r, l), l = l.sibling;
  }
  function Gi(n, r, l) {
    if (Gr && typeof Gr.onCommitFiberUnmount == "function") try {
      Gr.onCommitFiberUnmount(ol, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        fr || _l(l, r);
      case 6:
        var u = gn, c = Ar;
        gn = null, Fa(n, r, l), gn = u, Ar = c, gn !== null && (Ar ? (n = gn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : gn.removeChild(l.stateNode));
        break;
      case 18:
        gn !== null && (Ar ? (n = gn, l = l.stateNode, n.nodeType === 8 ? nu(n.parentNode, l) : n.nodeType === 1 && nu(n, l), Na(n)) : nu(gn, l.stateNode));
        break;
      case 4:
        u = gn, c = Ar, gn = l.stateNode.containerInfo, Ar = !0, Fa(n, r, l), gn = u, Ar = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!fr && (u = l.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          c = u = u.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && jd(l, r, m), c = c.next;
          } while (c !== u);
        }
        Fa(n, r, l);
        break;
      case 1:
        if (!fr && (_l(l, r), u = l.stateNode, typeof u.componentWillUnmount == "function")) try {
          u.props = l.memoizedProps, u.state = l.memoizedState, u.componentWillUnmount();
        } catch (E) {
          Tn(l, r, E);
        }
        Fa(n, r, l);
        break;
      case 21:
        Fa(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (fr = (u = fr) || l.memoizedState !== null, Fa(n, r, l), fr = u) : Fa(n, r, l);
        break;
      default:
        Fa(n, r, l);
    }
  }
  function Kv(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new uy()), r.forEach(function(u) {
        var c = vy.bind(null, n, u);
        l.has(u) || (l.add(u), u.then(c, c));
      });
    }
  }
  function ai(n, r) {
    var l = r.deletions;
    if (l !== null) for (var u = 0; u < l.length; u++) {
      var c = l[u];
      try {
        var d = n, m = r, E = m;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 5:
              gn = E.stateNode, Ar = !1;
              break e;
            case 3:
              gn = E.stateNode.containerInfo, Ar = !0;
              break e;
            case 4:
              gn = E.stateNode.containerInfo, Ar = !0;
              break e;
          }
          E = E.return;
        }
        if (gn === null) throw Error(k(160));
        Gi(d, m, c), gn = null, Ar = !1;
        var R = c.alternate;
        R !== null && (R.return = null), c.return = null;
      } catch (U) {
        Tn(c, r, U);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Xv(r, n), r = r.sibling;
  }
  function Xv(n, r) {
    var l = n.alternate, u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ai(r, n), ii(n), u & 4) {
          try {
            mu(3, n, n.return), nf(3, n);
          } catch (we) {
            Tn(n, n.return, we);
          }
          try {
            mu(5, n, n.return);
          } catch (we) {
            Tn(n, n.return, we);
          }
        }
        break;
      case 1:
        ai(r, n), ii(n), u & 512 && l !== null && _l(l, l.return);
        break;
      case 5:
        if (ai(r, n), ii(n), u & 512 && l !== null && _l(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            pa(c, "");
          } catch (we) {
            Tn(n, n.return, we);
          }
        }
        if (u & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, R = n.updateQueue;
          if (n.updateQueue = null, R !== null) try {
            E === "input" && d.type === "radio" && d.name != null && Bn(c, d), cn(E, m);
            var U = cn(E, d);
            for (m = 0; m < R.length; m += 2) {
              var G = R[m], q = R[m + 1];
              G === "style" ? At(c, q) : G === "dangerouslySetInnerHTML" ? Ni(c, q) : G === "children" ? pa(c, q) : et(c, G, q, U);
            }
            switch (E) {
              case "input":
                zn(c, d);
                break;
              case "textarea":
                xr(c, d);
                break;
              case "select":
                var W = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var he = d.value;
                he != null ? In(c, !!d.multiple, he, !1) : W !== !!d.multiple && (d.defaultValue != null ? In(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : In(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[us] = d;
          } catch (we) {
            Tn(n, n.return, we);
          }
        }
        break;
      case 6:
        if (ai(r, n), ii(n), u & 4) {
          if (n.stateNode === null) throw Error(k(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (we) {
            Tn(n, n.return, we);
          }
        }
        break;
      case 3:
        if (ai(r, n), ii(n), u & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Na(r.containerInfo);
        } catch (we) {
          Tn(n, n.return, we);
        }
        break;
      case 4:
        ai(r, n), ii(n);
        break;
      case 13:
        ai(r, n), ii(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Vd = Ft())), u & 4 && Kv(n);
        break;
      case 22:
        if (G = l !== null && l.memoizedState !== null, n.mode & 1 ? (fr = (U = fr) || G, ai(r, n), fr = U) : ai(r, n), ii(n), u & 8192) {
          if (U = n.memoizedState !== null, (n.stateNode.isHidden = U) && !G && n.mode & 1) for (Ee = n, G = n.child; G !== null; ) {
            for (q = Ee = G; Ee !== null; ) {
              switch (W = Ee, he = W.child, W.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  mu(4, W, W.return);
                  break;
                case 1:
                  _l(W, W.return);
                  var Re = W.stateNode;
                  if (typeof Re.componentWillUnmount == "function") {
                    u = W, l = W.return;
                    try {
                      r = u, Re.props = r.memoizedProps, Re.state = r.memoizedState, Re.componentWillUnmount();
                    } catch (we) {
                      Tn(u, l, we);
                    }
                  }
                  break;
                case 5:
                  _l(W, W.return);
                  break;
                case 22:
                  if (W.memoizedState !== null) {
                    Zv(q);
                    continue;
                  }
              }
              he !== null ? (he.return = W, Ee = he) : Zv(q);
            }
            G = G.sibling;
          }
          e: for (G = null, q = n; ; ) {
            if (q.tag === 5) {
              if (G === null) {
                G = q;
                try {
                  c = q.stateNode, U ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = q.stateNode, R = q.memoizedProps.style, m = R != null && R.hasOwnProperty("display") ? R.display : null, E.style.display = st("display", m));
                } catch (we) {
                  Tn(n, n.return, we);
                }
              }
            } else if (q.tag === 6) {
              if (G === null) try {
                q.stateNode.nodeValue = U ? "" : q.memoizedProps;
              } catch (we) {
                Tn(n, n.return, we);
              }
            } else if ((q.tag !== 22 && q.tag !== 23 || q.memoizedState === null || q === n) && q.child !== null) {
              q.child.return = q, q = q.child;
              continue;
            }
            if (q === n) break e;
            for (; q.sibling === null; ) {
              if (q.return === null || q.return === n) break e;
              G === q && (G = null), q = q.return;
            }
            G === q && (G = null), q.sibling.return = q.return, q = q.sibling;
          }
        }
        break;
      case 19:
        ai(r, n), ii(n), u & 4 && Kv(n);
        break;
      case 21:
        break;
      default:
        ai(
          r,
          n
        ), ii(n);
    }
  }
  function ii(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (af(l)) {
              var u = l;
              break e;
            }
            l = l.return;
          }
          throw Error(k(160));
        }
        switch (u.tag) {
          case 5:
            var c = u.stateNode;
            u.flags & 32 && (pa(c, ""), u.flags &= -33);
            var d = ks(n);
            Ri(n, d, c);
            break;
          case 3:
          case 4:
            var m = u.stateNode.containerInfo, E = ks(n);
            xi(n, E, m);
            break;
          default:
            throw Error(k(161));
        }
      } catch (R) {
        Tn(n, n.return, R);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Ds(n, r, l) {
    Ee = n, Jv(n);
  }
  function Jv(n, r, l) {
    for (var u = (n.mode & 1) !== 0; Ee !== null; ) {
      var c = Ee, d = c.child;
      if (c.tag === 22 && u) {
        var m = c.memoizedState !== null || yo;
        if (!m) {
          var E = c.alternate, R = E !== null && E.memoizedState !== null || fr;
          E = yo;
          var U = fr;
          if (yo = m, (fr = R) && !U) for (Ee = c; Ee !== null; ) m = Ee, R = m.child, m.tag === 22 && m.memoizedState !== null ? Os(c) : R !== null ? (R.return = m, Ee = R) : Os(c);
          for (; d !== null; ) Ee = d, Jv(d), d = d.sibling;
          Ee = c, yo = E, fr = U;
        }
        Hd(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, Ee = d) : Hd(n);
    }
  }
  function Hd(n) {
    for (; Ee !== null; ) {
      var r = Ee;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              fr || nf(5, r);
              break;
            case 1:
              var u = r.stateNode;
              if (r.flags & 4 && !fr) if (l === null) u.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : ra(r.type, l.memoizedProps);
                u.componentDidUpdate(c, l.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && xd(r, d, u);
              break;
            case 3:
              var m = r.updateQueue;
              if (m !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                xd(r, m, l);
              }
              break;
            case 5:
              var E = r.stateNode;
              if (l === null && r.flags & 4) {
                l = E;
                var R = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    R.autoFocus && l.focus();
                    break;
                  case "img":
                    R.src && (l.src = R.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var U = r.alternate;
                if (U !== null) {
                  var G = U.memoizedState;
                  if (G !== null) {
                    var q = G.dehydrated;
                    q !== null && Na(q);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
          fr || r.flags & 512 && rf(r);
        } catch (W) {
          Tn(r, r.return, W);
        }
      }
      if (r === n) {
        Ee = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, Ee = l;
        break;
      }
      Ee = r.return;
    }
  }
  function Zv(n) {
    for (; Ee !== null; ) {
      var r = Ee;
      if (r === n) {
        Ee = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, Ee = l;
        break;
      }
      Ee = r.return;
    }
  }
  function Os(n) {
    for (; Ee !== null; ) {
      var r = Ee;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              nf(4, r);
            } catch (R) {
              Tn(r, l, R);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var c = r.return;
              try {
                u.componentDidMount();
              } catch (R) {
                Tn(r, c, R);
              }
            }
            var d = r.return;
            try {
              rf(r);
            } catch (R) {
              Tn(r, d, R);
            }
            break;
          case 5:
            var m = r.return;
            try {
              rf(r);
            } catch (R) {
              Tn(r, m, R);
            }
        }
      } catch (R) {
        Tn(r, r.return, R);
      }
      if (r === n) {
        Ee = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, Ee = E;
        break;
      }
      Ee = r.return;
    }
  }
  var eh = Math.ceil, lf = Ue.ReactCurrentDispatcher, go = Ue.ReactCurrentOwner, Dr = Ue.ReactCurrentBatchConfig, Et = 0, Vn = null, Dn = null, dr = 0, Ea = 0, yu = Jr(0), Qn = 0, So = null, Eo = 0, Co = 0, Ns = 0, gu = null, la = null, Vd = 0, Su = 1 / 0, qi = null, kl = !1, Ms = null, Ha = null, of = !1, Dl = null, Ls = 0, Eu = 0, Cu = null, xo = -1, zs = 0;
  function an() {
    return Et & 6 ? Ft() : xo !== -1 ? xo : xo = Ft();
  }
  function Ca(n) {
    return n.mode & 1 ? Et & 2 && dr !== 0 ? dr & -dr : uo.transition !== null ? (zs === 0 && (zs = Gl()), zs) : (n = _t, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Wu(n.type)), n) : 1;
  }
  function xa(n, r, l, u) {
    if (50 < Eu) throw Eu = 0, Cu = null, Error(k(185));
    cl(n, l, u), (!(Et & 2) || n !== Vn) && (n === Vn && (!(Et & 2) && (Co |= l), Qn === 4 && Ol(n, dr)), rr(n, u), l === 1 && Et === 0 && !(r.mode & 1) && (Su = Ft() + 500, cs && zr()));
  }
  function rr(n, r) {
    var l = n.callbackNode;
    Ho(n, r);
    var u = pi(n, n === Vn ? dr : 0);
    if (u === 0) l !== null && fn(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (l != null && fn(l), r === 1) n.tag === 0 ? fd(Fs.bind(null, n)) : ml(Fs.bind(null, n)), iy(function() {
        !(Et & 6) && zr();
      }), l = null;
      else {
        switch (Qu(u)) {
          case 1:
            l = nt;
            break;
          case 4:
            l = di;
            break;
          case 16:
            l = Ui;
            break;
          case 536870912:
            l = Ai;
            break;
          default:
            l = Ui;
        }
        l = lh(l, th.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function th(n, r) {
    if (xo = -1, zs = 0, Et & 6) throw Error(k(327));
    var l = n.callbackNode;
    if (xu() && n.callbackNode !== l) return null;
    var u = pi(n, n === Vn ? dr : 0);
    if (u === 0) return null;
    if (u & 30 || u & n.expiredLanes || r) r = cf(n, u);
    else {
      r = u;
      var c = Et;
      Et |= 2;
      var d = nh();
      (Vn !== n || dr !== r) && (qi = null, Su = Ft() + 500, To(n, r));
      do
        try {
          fy();
          break;
        } catch (E) {
          sf(n, E);
        }
      while (!0);
      gd(), lf.current = d, Et = c, Dn !== null ? r = 0 : (Vn = null, dr = 0, r = Qn);
    }
    if (r !== 0) {
      if (r === 2 && (c = Fi(n), c !== 0 && (u = c, r = Us(n, c))), r === 1) throw l = So, To(n, 0), Ol(n, u), rr(n, Ft()), l;
      if (r === 6) Ol(n, u);
      else {
        if (c = n.current.alternate, !(u & 30) && !js(c) && (r = cf(n, u), r === 2 && (d = Fi(n), d !== 0 && (u = d, r = Us(n, d))), r === 1)) throw l = So, To(n, 0), Ol(n, u), rr(n, Ft()), l;
        switch (n.finishedWork = c, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(k(345));
          case 2:
            bo(n, la, qi);
            break;
          case 3:
            if (Ol(n, u), (u & 130023424) === u && (r = Vd + 500 - Ft(), 10 < r)) {
              if (pi(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & u) !== u) {
                an(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Cc(bo.bind(null, n, la, qi), r);
              break;
            }
            bo(n, la, qi);
            break;
          case 4:
            if (Ol(n, u), (u & 4194240) === u) break;
            for (r = n.eventTimes, c = -1; 0 < u; ) {
              var m = 31 - Nr(u);
              d = 1 << m, m = r[m], m > c && (c = m), u &= ~d;
            }
            if (u = c, u = Ft() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * eh(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = Cc(bo.bind(null, n, la, qi), u);
              break;
            }
            bo(n, la, qi);
            break;
          case 5:
            bo(n, la, qi);
            break;
          default:
            throw Error(k(329));
        }
      }
    }
    return rr(n, Ft()), n.callbackNode === l ? th.bind(null, n) : null;
  }
  function Us(n, r) {
    var l = gu;
    return n.current.memoizedState.isDehydrated && (To(n, r).flags |= 256), n = cf(n, r), n !== 2 && (r = la, la = l, r !== null && As(r)), n;
  }
  function As(n) {
    la === null ? la = n : la.push.apply(la, n);
  }
  function js(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var u = 0; u < l.length; u++) {
          var c = l[u], d = c.getSnapshot;
          c = c.value;
          try {
            if (!Za(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Ol(n, r) {
    for (r &= ~Ns, r &= ~Co, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Nr(r), u = 1 << l;
      n[l] = -1, r &= ~u;
    }
  }
  function Fs(n) {
    if (Et & 6) throw Error(k(327));
    xu();
    var r = pi(n, 0);
    if (!(r & 1)) return rr(n, Ft()), null;
    var l = cf(n, r);
    if (n.tag !== 0 && l === 2) {
      var u = Fi(n);
      u !== 0 && (r = u, l = Us(n, u));
    }
    if (l === 1) throw l = So, To(n, 0), Ol(n, r), rr(n, Ft()), l;
    if (l === 6) throw Error(k(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, bo(n, la, qi), rr(n, Ft()), null;
  }
  function uf(n, r) {
    var l = Et;
    Et |= 1;
    try {
      return n(r);
    } finally {
      Et = l, Et === 0 && (Su = Ft() + 500, cs && zr());
    }
  }
  function Ro(n) {
    Dl !== null && Dl.tag === 0 && !(Et & 6) && xu();
    var r = Et;
    Et |= 1;
    var l = Dr.transition, u = _t;
    try {
      if (Dr.transition = null, _t = 1, n) return n();
    } finally {
      _t = u, Dr.transition = l, Et = r, !(Et & 6) && zr();
    }
  }
  function Pd() {
    Ea = yu.current, $t(yu);
  }
  function To(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, kv(l)), Dn !== null) for (l = Dn.return; l !== null; ) {
      var u = l;
      switch (bc(u), u.tag) {
        case 1:
          u = u.type.childContextTypes, u != null && gi();
          break;
        case 3:
          su(), $t(jn), $t(mn), ms();
          break;
        case 5:
          bd(u);
          break;
        case 4:
          su();
          break;
        case 13:
          $t(yn);
          break;
        case 19:
          $t(yn);
          break;
        case 10:
          Sd(u.type._context);
          break;
        case 22:
        case 23:
          Pd();
      }
      l = l.return;
    }
    if (Vn = n, Dn = n = Nl(n.current, null), dr = Ea = r, Qn = 0, So = null, Ns = Co = Eo = 0, la = gu = null, so !== null) {
      for (r = 0; r < so.length; r++) if (l = so[r], u = l.interleaved, u !== null) {
        l.interleaved = null;
        var c = u.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, u.next = m;
        }
        l.pending = u;
      }
      so = null;
    }
    return n;
  }
  function sf(n, r) {
    do {
      var l = Dn;
      try {
        if (gd(), ze.current = Wt, Dc) {
          for (var u = rt.memoizedState; u !== null; ) {
            var c = u.queue;
            c !== null && (c.pending = null), u = u.next;
          }
          Dc = !1;
        }
        if (bt = 0, Yn = Jt = rt = null, ys = !1, gs = 0, go.current = null, l === null || l.return === null) {
          Qn = 1, So = r, Dn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, R = r;
          if (r = dr, E.flags |= 32768, R !== null && typeof R == "object" && typeof R.then == "function") {
            var U = R, G = E, q = G.tag;
            if (!(G.mode & 1) && (q === 0 || q === 11 || q === 15)) {
              var W = G.alternate;
              W ? (G.updateQueue = W.updateQueue, G.memoizedState = W.memoizedState, G.lanes = W.lanes) : (G.updateQueue = null, G.memoizedState = null);
            }
            var he = Md(m);
            if (he !== null) {
              he.flags &= -257, Yv(he, m, E, d, r), he.mode & 1 && Nd(d, U, r), r = he, R = U;
              var Re = r.updateQueue;
              if (Re === null) {
                var we = /* @__PURE__ */ new Set();
                we.add(R), r.updateQueue = we;
              } else Re.add(R);
              break e;
            } else {
              if (!(r & 1)) {
                Nd(d, U, r), Bd();
                break e;
              }
              R = Error(k(426));
            }
          } else if (dn && E.mode & 1) {
            var On = Md(m);
            if (On !== null) {
              !(On.flags & 65536) && (On.flags |= 256), Yv(On, m, E, d, r), ds(wl(R, E));
              break e;
            }
          }
          d = R = wl(R, E), Qn !== 4 && (Qn = 2), gu === null ? gu = [d] : gu.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var D = Ts(d, R, r);
                jv(d, D);
                break e;
              case 1:
                E = R;
                var w = d.type, M = d.stateNode;
                if (!(d.flags & 128) && (typeof w.getDerivedStateFromError == "function" || M !== null && typeof M.componentDidCatch == "function" && (Ha === null || !Ha.has(M)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var Z = Iv(d, E, r);
                  jv(d, Z);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        rh(l);
      } catch (de) {
        r = de, Dn === l && l !== null && (Dn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function nh() {
    var n = lf.current;
    return lf.current = Wt, n === null ? Wt : n;
  }
  function Bd() {
    (Qn === 0 || Qn === 3 || Qn === 2) && (Qn = 4), Vn === null || !(Eo & 268435455) && !(Co & 268435455) || Ol(Vn, dr);
  }
  function cf(n, r) {
    var l = Et;
    Et |= 2;
    var u = nh();
    (Vn !== n || dr !== r) && (qi = null, To(n, r));
    do
      try {
        cy();
        break;
      } catch (c) {
        sf(n, c);
      }
    while (!0);
    if (gd(), Et = l, lf.current = u, Dn !== null) throw Error(k(261));
    return Vn = null, dr = 0, Qn;
  }
  function cy() {
    for (; Dn !== null; ) Id(Dn);
  }
  function fy() {
    for (; Dn !== null && !Rr(); ) Id(Dn);
  }
  function Id(n) {
    var r = $d(n.alternate, n, Ea);
    n.memoizedProps = n.pendingProps, r === null ? rh(n) : Dn = r, go.current = null;
  }
  function rh(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = Gv(l, r), l !== null) {
          l.flags &= 32767, Dn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Qn = 6, Dn = null;
          return;
        }
      } else if (l = Ad(l, r, Ea), l !== null) {
        Dn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Dn = r;
        return;
      }
      Dn = r = n;
    } while (r !== null);
    Qn === 0 && (Qn = 5);
  }
  function bo(n, r, l) {
    var u = _t, c = Dr.transition;
    try {
      Dr.transition = null, _t = 1, dy(n, r, l, u);
    } finally {
      Dr.transition = c, _t = u;
    }
    return null;
  }
  function dy(n, r, l, u) {
    do
      xu();
    while (Dl !== null);
    if (Et & 6) throw Error(k(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(k(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Yu(n, d), n === Vn && (Dn = Vn = null, dr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || of || (of = !0, lh(Ui, function() {
      return xu(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Dr.transition, Dr.transition = null;
      var m = _t;
      _t = 1;
      var E = Et;
      Et |= 4, go.current = null, sy(n, l), Xv(l, n), Sv(os), fl = !!ro, os = ro = null, n.current = l, Ds(l), Ka(), Et = E, _t = m, Dr.transition = d;
    } else n.current = l;
    if (of && (of = !1, Dl = n, Ls = c), d = n.pendingLanes, d === 0 && (Ha = null), Bu(l.stateNode), rr(n, Ft()), r !== null) for (u = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], u(c.value, { componentStack: c.stack, digest: c.digest });
    if (kl) throw kl = !1, n = Ms, Ms = null, n;
    return Ls & 1 && n.tag !== 0 && xu(), d = n.pendingLanes, d & 1 ? n === Cu ? Eu++ : (Eu = 0, Cu = n) : Eu = 0, zr(), null;
  }
  function xu() {
    if (Dl !== null) {
      var n = Qu(Ls), r = Dr.transition, l = _t;
      try {
        if (Dr.transition = null, _t = 16 > n ? 16 : n, Dl === null) var u = !1;
        else {
          if (n = Dl, Dl = null, Ls = 0, Et & 6) throw Error(k(331));
          var c = Et;
          for (Et |= 4, Ee = n.current; Ee !== null; ) {
            var d = Ee, m = d.child;
            if (Ee.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var R = 0; R < E.length; R++) {
                  var U = E[R];
                  for (Ee = U; Ee !== null; ) {
                    var G = Ee;
                    switch (G.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mu(8, G, d);
                    }
                    var q = G.child;
                    if (q !== null) q.return = G, Ee = q;
                    else for (; Ee !== null; ) {
                      G = Ee;
                      var W = G.sibling, he = G.return;
                      if (qv(G), G === U) {
                        Ee = null;
                        break;
                      }
                      if (W !== null) {
                        W.return = he, Ee = W;
                        break;
                      }
                      Ee = he;
                    }
                  }
                }
                var Re = d.alternate;
                if (Re !== null) {
                  var we = Re.child;
                  if (we !== null) {
                    Re.child = null;
                    do {
                      var On = we.sibling;
                      we.sibling = null, we = On;
                    } while (we !== null);
                  }
                }
                Ee = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, Ee = m;
            else e: for (; Ee !== null; ) {
              if (d = Ee, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  mu(9, d, d.return);
              }
              var D = d.sibling;
              if (D !== null) {
                D.return = d.return, Ee = D;
                break e;
              }
              Ee = d.return;
            }
          }
          var w = n.current;
          for (Ee = w; Ee !== null; ) {
            m = Ee;
            var M = m.child;
            if (m.subtreeFlags & 2064 && M !== null) M.return = m, Ee = M;
            else e: for (m = w; Ee !== null; ) {
              if (E = Ee, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    nf(9, E);
                }
              } catch (de) {
                Tn(E, E.return, de);
              }
              if (E === m) {
                Ee = null;
                break e;
              }
              var Z = E.sibling;
              if (Z !== null) {
                Z.return = E.return, Ee = Z;
                break e;
              }
              Ee = E.return;
            }
          }
          if (Et = c, zr(), Gr && typeof Gr.onPostCommitFiberRoot == "function") try {
            Gr.onPostCommitFiberRoot(ol, n);
          } catch {
          }
          u = !0;
        }
        return u;
      } finally {
        _t = l, Dr.transition = r;
      }
    }
    return !1;
  }
  function ah(n, r, l) {
    r = wl(l, r), r = Ts(n, r, 1), n = xl(n, r, 1), r = an(), n !== null && (cl(n, 1, r), rr(n, r));
  }
  function Tn(n, r, l) {
    if (n.tag === 3) ah(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        ah(r, n, l);
        break;
      } else if (r.tag === 1) {
        var u = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Ha === null || !Ha.has(u))) {
          n = wl(l, n), n = Iv(r, n, 1), r = xl(r, n, 1), n = an(), r !== null && (cl(r, 1, n), rr(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Yd(n, r, l) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = an(), n.pingedLanes |= n.suspendedLanes & l, Vn === n && (dr & l) === l && (Qn === 4 || Qn === 3 && (dr & 130023424) === dr && 500 > Ft() - Vd ? To(n, 0) : Ns |= l), rr(n, r);
  }
  function ih(n, r) {
    r === 0 && (n.mode & 1 ? (r = ul, ul <<= 1, !(ul & 130023424) && (ul = 4194304)) : r = 1);
    var l = an();
    n = Ei(n, r), n !== null && (cl(n, r, l), rr(n, l));
  }
  function py(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), ih(n, l);
  }
  function vy(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var u = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        u = n.stateNode;
        break;
      default:
        throw Error(k(314));
    }
    u !== null && u.delete(r), ih(n, l);
  }
  var $d;
  $d = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || jn.current) nr = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return nr = !1, tf(n, r, l);
      nr = !!(n.flags & 131072);
    }
    else nr = !1, dn && r.flags & 1048576 && Ov(r, Sl, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        ja(n, r), n = r.pendingProps;
        var c = ya(r, mn.current);
        ou(r, l), c = $e(null, r, u, n, c, l);
        var d = Rl();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Rn(u) ? (d = !0, lo(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Cl(r), c.updater = Qc, r.stateNode = c, c._reactInternals = r, Dd(r, u, n, l), r = Ld(null, r, u, !0, d, l)) : (r.tag = 0, dn && d && dd(r), kn(null, r, c, l), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (ja(n, r), n = r.pendingProps, c = u._init, u = c(u._payload), r.type = u, c = r.tag = my(u), n = ra(u, n), c) {
            case 0:
              r = Kc(null, r, u, n, l);
              break e;
            case 1:
              r = oy(null, r, u, n, l);
              break e;
            case 11:
              r = qc(null, r, u, n, l);
              break e;
            case 14:
              r = aa(null, r, u, ra(u.type, n), l);
              break e;
          }
          throw Error(k(
            306,
            u,
            ""
          ));
        }
        return r;
      case 0:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : ra(u, c), Kc(n, r, u, c, l);
      case 1:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : ra(u, c), oy(n, r, u, c, l);
      case 3:
        e: {
          if (Xc(r), n === null) throw Error(k(387));
          u = r.pendingProps, d = r.memoizedState, c = d.element, Av(n, r), _c(r, u, null, l);
          var m = r.memoizedState;
          if (u = m.element, d.isDehydrated) if (d = { element: u, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = wl(Error(k(423)), r), r = vu(n, r, u, l, c);
            break e;
          } else if (u !== c) {
            c = wl(Error(k(424)), r), r = vu(n, r, u, l, c);
            break e;
          } else for (ea = ei(r.stateNode.containerInfo.firstChild), Zr = r, dn = !0, ni = null, l = sr(r, null, u, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Qi(), u === c) {
              r = cr(n, r, l);
              break e;
            }
            kn(n, r, u, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Td(r), n === null && md(r), u = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, ao(u, c) ? m = null : d !== null && ao(u, d) && (r.flags |= 32), bs(n, r), kn(n, r, m, l), r.child;
      case 6:
        return n === null && md(r), null;
      case 13:
        return $v(n, r, l);
      case 4:
        return Rd(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = ri(r, null, u, l) : kn(n, r, u, l), r.child;
      case 11:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : ra(u, c), qc(n, r, u, c, l);
      case 7:
        return kn(n, r, r.pendingProps, l), r.child;
      case 8:
        return kn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return kn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (u = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, rn(oe, u._currentValue), u._currentValue = m, d !== null) if (Za(d.value, m)) {
            if (d.children === c.children && !jn.current) {
              r = cr(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var E = d.dependencies;
            if (E !== null) {
              m = d.child;
              for (var R = E.firstContext; R !== null; ) {
                if (R.context === u) {
                  if (d.tag === 1) {
                    R = Wi(-1, l & -l), R.tag = 2;
                    var U = d.updateQueue;
                    if (U !== null) {
                      U = U.shared;
                      var G = U.pending;
                      G === null ? R.next = R : (R.next = G.next, G.next = R), U.pending = R;
                    }
                  }
                  d.lanes |= l, R = d.alternate, R !== null && (R.lanes |= l), Ed(
                    d.return,
                    l,
                    r
                  ), E.lanes |= l;
                  break;
                }
                R = R.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(k(341));
              m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), Ed(m, l, r), m = d.sibling;
            } else m = d.child;
            if (m !== null) m.return = d;
            else for (m = d; m !== null; ) {
              if (m === r) {
                m = null;
                break;
              }
              if (d = m.sibling, d !== null) {
                d.return = m.return, m = d;
                break;
              }
              m = m.return;
            }
            d = m;
          }
          kn(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, u = r.pendingProps.children, ou(r, l), c = Qt(c), u = u(c), r.flags |= 1, kn(n, r, u, l), r.child;
      case 14:
        return u = r.type, c = ra(u, r.pendingProps), c = ra(u.type, c), aa(n, r, u, c, l);
      case 15:
        return mo(n, r, r.type, r.pendingProps, l);
      case 17:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : ra(u, c), ja(n, r), r.tag = 1, Rn(u) ? (n = !0, lo(r)) : n = !1, ou(r, l), Bv(r, u, c), Dd(r, u, c, l), Ld(null, r, u, !0, n, l);
      case 19:
        return ia(n, r, l);
      case 22:
        return it(n, r, l);
    }
    throw Error(k(156, r.tag));
  };
  function lh(n, r) {
    return on(n, r);
  }
  function hy(n, r, l, u) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Va(n, r, l, u) {
    return new hy(n, r, l, u);
  }
  function Qd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function my(n) {
    if (typeof n == "function") return Qd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Ht) return 11;
      if (n === Nt) return 14;
    }
    return 2;
  }
  function Nl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Va(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function ff(n, r, l, u, c, d) {
    var m = 2;
    if (u = n, typeof n == "function") Qd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case lt:
        return Ml(l.children, c, d, r);
      case Be:
        m = 8, c |= 8;
        break;
      case vn:
        return n = Va(12, l, r, c | 2), n.elementType = vn, n.lanes = d, n;
      case yt:
        return n = Va(13, l, r, c), n.elementType = yt, n.lanes = d, n;
      case Fe:
        return n = Va(19, l, r, c), n.elementType = Fe, n.lanes = d, n;
      case ot:
        return Ru(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case dt:
            m = 10;
            break e;
          case tn:
            m = 9;
            break e;
          case Ht:
            m = 11;
            break e;
          case Nt:
            m = 14;
            break e;
          case vt:
            m = 16, u = null;
            break e;
        }
        throw Error(k(130, n == null ? n : typeof n, ""));
    }
    return r = Va(m, l, r, c), r.elementType = n, r.type = u, r.lanes = d, r;
  }
  function Ml(n, r, l, u) {
    return n = Va(7, n, u, r), n.lanes = l, n;
  }
  function Ru(n, r, l, u) {
    return n = Va(22, n, u, r), n.elementType = ot, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function wo(n, r, l) {
    return n = Va(6, n, null, r), n.lanes = l, n;
  }
  function Wd(n, r, l) {
    return r = Va(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function oh(n, r, l, u, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ql(0), this.expirationTimes = ql(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ql(0), this.identifierPrefix = u, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function df(n, r, l, u, c, d, m, E, R) {
    return n = new oh(n, r, l, E, R), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Va(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: u, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Cl(d), n;
  }
  function uh(n, r, l) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ge, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: l };
  }
  function sh(n) {
    if (!n) return pt;
    n = n._reactInternals;
    e: {
      if (fe(n) !== n || n.tag !== 1) throw Error(k(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Rn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(k(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Rn(l)) return Dv(n, l, r);
    }
    return r;
  }
  function Gd(n, r, l, u, c, d, m, E, R) {
    return n = df(l, u, !0, n, c, d, m, E, R), n.context = sh(null), l = n.current, u = an(), c = Ca(l), d = Wi(u, c), d.callback = r ?? null, xl(l, d, c), n.current.lanes = c, cl(n, c, u), rr(n, u), n;
  }
  function pf(n, r, l, u) {
    var c = r.current, d = an(), m = Ca(c);
    return l = sh(l), r.context === null ? r.context = l : r.pendingContext = l, r = Wi(d, m), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = xl(c, r, m), n !== null && (xa(n, c, m, d), wc(n, c, m)), m;
  }
  function vf(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function ch(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function hf(n, r) {
    ch(n, r), (n = n.alternate) && ch(n, r);
  }
  function fh() {
    return null;
  }
  var qd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Ll(n) {
    this._internalRoot = n;
  }
  mf.prototype.render = Ll.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(k(409));
    pf(n, r, null, null);
  }, mf.prototype.unmount = Ll.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ro(function() {
        pf(null, n, null, null);
      }), r[Yi] = null;
    }
  };
  function mf(n) {
    this._internalRoot = n;
  }
  mf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = vi();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Xa.length && r !== 0 && r < Xa[l].priority; l++) ;
      Xa.splice(l, 0, n), l === 0 && Po(n);
    }
  };
  function Kd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function yf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function dh() {
  }
  function yy(n, r, l, u, c) {
    if (c) {
      if (typeof u == "function") {
        var d = u;
        u = function() {
          var U = vf(m);
          d.call(U);
        };
      }
      var m = Gd(r, u, n, 0, null, !1, !1, "", dh);
      return n._reactRootContainer = m, n[Yi] = m.current, is(n.nodeType === 8 ? n.parentNode : n), Ro(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof u == "function") {
      var E = u;
      u = function() {
        var U = vf(R);
        E.call(U);
      };
    }
    var R = df(n, 0, !1, null, null, !1, !1, "", dh);
    return n._reactRootContainer = R, n[Yi] = R.current, is(n.nodeType === 8 ? n.parentNode : n), Ro(function() {
      pf(r, R, l, u);
    }), R;
  }
  function gf(n, r, l, u, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var R = vf(m);
          E.call(R);
        };
      }
      pf(r, m, n, c);
    } else m = yy(l, r, n, c, u);
    return vf(m);
  }
  Vo = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = qr(r.pendingLanes);
          l !== 0 && ($u(r, l | 1), rr(r, Ft()), !(Et & 6) && (Su = Ft() + 500, zr()));
        }
        break;
      case 13:
        Ro(function() {
          var u = Ei(n, 1);
          if (u !== null) {
            var c = an();
            xa(u, n, 1, c);
          }
        }), hf(n, 1);
    }
  }, kt = function(n) {
    if (n.tag === 13) {
      var r = Ei(n, 134217728);
      if (r !== null) {
        var l = an();
        xa(r, n, 134217728, l);
      }
      hf(n, 134217728);
    }
  }, uc = function(n) {
    if (n.tag === 13) {
      var r = Ca(n), l = Ei(n, r);
      if (l !== null) {
        var u = an();
        xa(l, n, r, u);
      }
      hf(n, r);
    }
  }, vi = function() {
    return _t;
  }, qe = function(n, r) {
    var l = _t;
    try {
      return _t = n, r();
    } finally {
      _t = l;
    }
  }, Gt = function(n, r, l) {
    switch (r) {
      case "input":
        if (zn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var u = l[r];
            if (u !== n && u.form === n.form) {
              var c = $i(u);
              if (!c) throw Error(k(90));
              qn(u), zn(u, c);
            }
          }
        }
        break;
      case "textarea":
        xr(n, l);
        break;
      case "select":
        r = l.value, r != null && In(n, !!l.multiple, r, !1);
    }
  }, $l = uf, Ql = Ro;
  var ph = { usingClientEntryPoint: !1, Events: [ss, Le, $i, Da, Mi, uf] }, Hs = { findFiberByHostInstance: io, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, gy = { bundleType: Hs.bundleType, version: Hs.version, rendererPackageName: Hs.rendererPackageName, rendererConfig: Hs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ue.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = ct(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Hs.findFiberByHostInstance || fh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vs.isDisabled && Vs.supportsFiber) try {
      ol = Vs.inject(gy), Gr = Vs;
    } catch {
    }
  }
  return Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ph, Qa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Kd(r)) throw Error(k(200));
    return uh(n, r, null, l);
  }, Qa.createRoot = function(n, r) {
    if (!Kd(n)) throw Error(k(299));
    var l = !1, u = "", c = qd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = df(n, 1, !1, null, null, l, !1, u, c), n[Yi] = r.current, is(n.nodeType === 8 ? n.parentNode : n), new Ll(r);
  }, Qa.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(k(188)) : (n = Object.keys(n).join(","), Error(k(268, n)));
    return n = ct(r), n = n === null ? null : n.stateNode, n;
  }, Qa.flushSync = function(n) {
    return Ro(n);
  }, Qa.hydrate = function(n, r, l) {
    if (!yf(r)) throw Error(k(200));
    return gf(null, n, r, !0, l);
  }, Qa.hydrateRoot = function(n, r, l) {
    if (!Kd(n)) throw Error(k(405));
    var u = l != null && l.hydratedSources || null, c = !1, d = "", m = qd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Gd(r, null, n, 1, l ?? null, c, !1, d, m), n[Yi] = r.current, is(n), u) for (n = 0; n < u.length; n++) l = u[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new mf(r);
  }, Qa.render = function(n, r, l) {
    if (!yf(r)) throw Error(k(200));
    return gf(null, n, r, !1, l);
  }, Qa.unmountComponentAtNode = function(n) {
    if (!yf(n)) throw Error(k(40));
    return n._reactRootContainer ? (Ro(function() {
      gf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Yi] = null;
      });
    }), !0) : !1;
  }, Qa.unstable_batchedUpdates = uf, Qa.unstable_renderSubtreeIntoContainer = function(n, r, l, u) {
    if (!yf(l)) throw Error(k(200));
    if (n == null || n._reactInternals === void 0) throw Error(k(38));
    return gf(n, r, l, !1, u);
  }, Qa.version = "18.3.1-next-f1338f8080-20240426", Qa;
}
var Wa = {}, iR;
function ok() {
  if (iR) return Wa;
  iR = 1;
  var $ = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return $.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var V = It, k = uR(), re = V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ke = !1;
    function be(e) {
      ke = e;
    }
    function Pe(e) {
      if (!ke) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Ne("warn", e, a);
      }
    }
    function S(e) {
      if (!ke) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Ne("error", e, a);
      }
    }
    function Ne(e, t, a) {
      {
        var i = re.ReactDebugCurrentFrame, o = i.getStackAddendum();
        o !== "" && (t += "%s", a = a.concat([o]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ue = 0, ee = 1, Me = 2, J = 3, De = 4, ie = 5, _e = 6, Xe = 7, Sn = 8, Ut = 9, et = 10, Ue = 11, xt = 12, ge = 13, lt = 14, Be = 15, vn = 16, dt = 17, tn = 18, Ht = 19, yt = 21, Fe = 22, Nt = 23, vt = 24, ot = 25, Y = !0, Se = !1, te = !1, b = !1, B = !1, Ce = !0, Ie = !0, Ye = !0, ut = !0, Rt = /* @__PURE__ */ new Set(), Ge = {}, Tt = {};
    function Yt(e, t) {
      Mn(e, t), Mn(e + "Capture", t);
    }
    function Mn(e, t) {
      Ge[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Ge[e] = t;
      {
        var a = e.toLowerCase();
        Tt[a] = e, e === "onDoubleClick" && (Tt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Rt.add(t[i]);
    }
    var qn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ir = Object.prototype.hasOwnProperty;
    function Ln(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Cr(e) {
      try {
        return Bn(e), !1;
      } catch {
        return !0;
      }
    }
    function Bn(e) {
      return "" + e;
    }
    function zn(e, t) {
      if (Cr(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Ln(e)), Bn(e);
    }
    function da(e) {
      if (Cr(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ln(e)), Bn(e);
    }
    function Ga(e, t) {
      if (Cr(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Ln(e)), Bn(e);
    }
    function Or(e, t) {
      if (Cr(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Ln(e)), Bn(e);
    }
    function In(e) {
      if (Cr(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Ln(e)), Bn(e);
    }
    function Kn(e) {
      if (Cr(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Ln(e)), Bn(e);
    }
    var Xn = 0, xr = 1, qa = 2, Un = 3, lr = 4, Qr = 5, Ni = 6, pa = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ae = pa + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", je = new RegExp("^[" + pa + "][" + ae + "]*$"), st = {}, At = {};
    function un(e) {
      return ir.call(At, e) ? !0 : ir.call(st, e) ? !1 : je.test(e) ? (At[e] = !0, !0) : (st[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function sn(e, t, a) {
      return t !== null ? t.type === Xn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function cn(e, t, a, i) {
      if (a !== null && a.type === Xn)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var o = e.toLowerCase().slice(0, 5);
          return o !== "data-" && o !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Jn(e, t, a, i) {
      if (t === null || typeof t > "u" || cn(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Un:
            return !t;
          case lr:
            return t === !1;
          case Qr:
            return isNaN(t);
          case Ni:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function ln(e) {
      return jt.hasOwnProperty(e) ? jt[e] : null;
    }
    function Gt(e, t, a, i, o, s, f) {
      this.acceptsBooleans = t === qa || t === Un || t === lr, this.attributeName = i, this.attributeNamespace = o, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var jt = {}, va = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    va.forEach(function(e) {
      jt[e] = new Gt(
        e,
        Xn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      jt[t] = new Gt(
        t,
        xr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      jt[e] = new Gt(
        e,
        qa,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      jt[e] = new Gt(
        e,
        qa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      jt[e] = new Gt(
        e,
        Un,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      jt[e] = new Gt(
        e,
        Un,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      jt[e] = new Gt(
        e,
        lr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      jt[e] = new Gt(
        e,
        Ni,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      jt[e] = new Gt(
        e,
        Qr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ka = /[\-\:]([a-z])/g, Da = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ka, Da);
      jt[t] = new Gt(
        t,
        xr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ka, Da);
      jt[t] = new Gt(
        t,
        xr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ka, Da);
      jt[t] = new Gt(
        t,
        xr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      jt[e] = new Gt(
        e,
        xr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Mi = "xlinkHref";
    jt[Mi] = new Gt(
      "xlinkHref",
      xr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      jt[e] = new Gt(
        e,
        xr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var $l = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Ql = !1;
    function Li(e) {
      !Ql && $l.test(e) && (Ql = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Wl(e, t, a, i) {
      if (i.mustUseProperty) {
        var o = i.propertyName;
        return e[o];
      } else {
        zn(a, t), i.sanitizeURL && Li("" + a);
        var s = i.attributeName, f = null;
        if (i.type === lr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Jn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Jn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Un)
            return a;
          f = e.getAttribute(s);
        }
        return Jn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function si(e, t, a, i) {
      {
        if (!un(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var o = e.getAttribute(t);
        return zn(a, t), o === "" + a ? a : o;
      }
    }
    function ha(e, t, a, i) {
      var o = ln(t);
      if (!sn(t, o, i)) {
        if (Jn(t, a, o, i) && (a = null), i || o === null) {
          if (un(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (zn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = o.mustUseProperty;
        if (f) {
          var p = o.propertyName;
          if (a === null) {
            var v = o.type;
            e[p] = v === Un ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = o.attributeName, g = o.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var _ = o.type, T;
          _ === Un || _ === lr && a === !0 ? T = "" : (zn(a, y), T = "" + a, o.sanitizeURL && Li(T.toString())), g ? e.setAttributeNS(g, y, T) : e.setAttribute(y, T);
        }
      }
    }
    var or = Symbol.for("react.element"), ma = Symbol.for("react.portal"), Wr = Symbol.for("react.fragment"), ci = Symbol.for("react.strict_mode"), fi = Symbol.for("react.profiler"), zi = Symbol.for("react.provider"), x = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), se = Symbol.for("react.suspense"), fe = Symbol.for("react.suspense_list"), ht = Symbol.for("react.memo"), Je = Symbol.for("react.lazy"), gt = Symbol.for("react.scope"), ct = Symbol.for("react.debug_trace_mode"), bn = Symbol.for("react.offscreen"), on = Symbol.for("react.legacy_hidden"), fn = Symbol.for("react.cache"), Rr = Symbol.for("react.tracing_marker"), Ka = Symbol.iterator, Ft = "@@iterator";
    function hn(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ka && e[Ka] || e[Ft];
      return typeof t == "function" ? t : null;
    }
    var nt = Object.assign, di = 0, Ui, ic, Ai, ol, Gr, Bu, Nr;
    function Iu() {
    }
    Iu.__reactDisabledLog = !0;
    function lc() {
      {
        if (di === 0) {
          Ui = console.log, ic = console.info, Ai = console.warn, ol = console.error, Gr = console.group, Bu = console.groupCollapsed, Nr = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Iu,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        di++;
      }
    }
    function oc() {
      {
        if (di--, di === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: nt({}, e, {
              value: Ui
            }),
            info: nt({}, e, {
              value: ic
            }),
            warn: nt({}, e, {
              value: Ai
            }),
            error: nt({}, e, {
              value: ol
            }),
            group: nt({}, e, {
              value: Gr
            }),
            groupCollapsed: nt({}, e, {
              value: Bu
            }),
            groupEnd: nt({}, e, {
              value: Nr
            })
          });
        }
        di < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ji = re.ReactCurrentDispatcher, ul;
    function qr(e, t, a) {
      {
        if (ul === void 0)
          try {
            throw Error();
          } catch (o) {
            var i = o.stack.trim().match(/\n( *(at )?)/);
            ul = i && i[1] || "";
          }
        return `
` + ul + e;
      }
    }
    var pi = !1, sl;
    {
      var Ho = typeof WeakMap == "function" ? WeakMap : Map;
      sl = new Ho();
    }
    function Fi(e, t) {
      if (!e || pi)
        return "";
      {
        var a = sl.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      pi = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = ji.current, ji.current = null, lc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (A) {
              i = A;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (A) {
              i = A;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (A) {
            i = A;
          }
          e();
        }
      } catch (A) {
        if (A && i && typeof A.stack == "string") {
          for (var p = A.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var _ = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && sl.set(e, _), _;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        pi = !1, ji.current = s, oc(), Error.prepareStackTrace = o;
      }
      var T = e ? e.displayName || e.name : "", z = T ? qr(T) : "";
      return typeof e == "function" && sl.set(e, z), z;
    }
    function Gl(e, t, a) {
      return Fi(e, !0);
    }
    function ql(e, t, a) {
      return Fi(e, !1);
    }
    function cl(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Yu(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Fi(e, cl(e));
      if (typeof e == "string")
        return qr(e);
      switch (e) {
        case se:
          return qr("Suspense");
        case fe:
          return qr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Q:
            return ql(e.render);
          case ht:
            return Yu(e.type, t, a);
          case Je: {
            var i = e, o = i._payload, s = i._init;
            try {
              return Yu(s(o), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function $u(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ie:
          return qr(e.type);
        case vn:
          return qr("Lazy");
        case ge:
          return qr("Suspense");
        case Ht:
          return qr("SuspenseList");
        case ue:
        case Me:
        case Be:
          return ql(e.type);
        case Ue:
          return ql(e.type.render);
        case ee:
          return Gl(e.type);
        default:
          return "";
      }
    }
    function _t(e) {
      try {
        var t = "", a = e;
        do
          t += $u(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Qu(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var o = t.displayName || t.name || "";
      return o !== "" ? a + "(" + o + ")" : a;
    }
    function Vo(e) {
      return e.displayName || "Context";
    }
    function kt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Wr:
          return "Fragment";
        case ma:
          return "Portal";
        case fi:
          return "Profiler";
        case ci:
          return "StrictMode";
        case se:
          return "Suspense";
        case fe:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case x:
            var t = e;
            return Vo(t) + ".Consumer";
          case zi:
            var a = e;
            return Vo(a._context) + ".Provider";
          case Q:
            return Qu(e, e.render, "ForwardRef");
          case ht:
            var i = e.displayName || null;
            return i !== null ? i : kt(e.type) || "Memo";
          case Je: {
            var o = e, s = o._payload, f = o._init;
            try {
              return kt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function uc(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function vi(e) {
      return e.displayName || "Context";
    }
    function qe(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case vt:
          return "Cache";
        case Ut:
          var i = a;
          return vi(i) + ".Consumer";
        case et:
          var o = a;
          return vi(o._context) + ".Provider";
        case tn:
          return "DehydratedFragment";
        case Ue:
          return uc(a, a.render, "ForwardRef");
        case Xe:
          return "Fragment";
        case ie:
          return a;
        case De:
          return "Portal";
        case J:
          return "Root";
        case _e:
          return "Text";
        case vn:
          return kt(a);
        case Sn:
          return a === ci ? "StrictMode" : "Mode";
        case Fe:
          return "Offscreen";
        case xt:
          return "Profiler";
        case yt:
          return "Scope";
        case ge:
          return "Suspense";
        case Ht:
          return "SuspenseList";
        case ot:
          return "TracingMarker";
        case ee:
        case ue:
        case dt:
        case Me:
        case lt:
        case Be:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Kl = re.ReactDebugCurrentFrame, Zn = null, Kr = !1;
    function Mr() {
      {
        if (Zn === null)
          return null;
        var e = Zn._debugOwner;
        if (e !== null && typeof e < "u")
          return qe(e);
      }
      return null;
    }
    function hi() {
      return Zn === null ? "" : _t(Zn);
    }
    function Cn() {
      Kl.getCurrentStack = null, Zn = null, Kr = !1;
    }
    function qt(e) {
      Kl.getCurrentStack = e === null ? null : hi, Zn = e, Kr = !1;
    }
    function Xa() {
      return Zn;
    }
    function Oa(e) {
      Kr = e;
    }
    function Tr(e) {
      return "" + e;
    }
    function Lr(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Kn(e), e;
        default:
          return "";
      }
    }
    var qf = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Po(e, t) {
      qf[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Xl(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Bo(e) {
      return e._valueTracker;
    }
    function Io(e) {
      e._valueTracker = null;
    }
    function Jl(e) {
      var t = "";
      return e && (Xl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Na(e) {
      var t = Xl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Kn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var o = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(p) {
            Kn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Kn(p), i = "" + p;
          },
          stopTracking: function() {
            Io(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Ma(e) {
      Bo(e) || (e._valueTracker = Na(e));
    }
    function fl(e) {
      if (!e)
        return !1;
      var t = Bo(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Jl(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Hi(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Yo = !1, dl = !1, Vi = !1, $o = !1;
    function Wu(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function La(e, t) {
      var a = e, i = t.checked, o = nt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return o;
    }
    function Qo(e, t) {
      Po("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !dl && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Mr() || "A component", t.type), dl = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Yo && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Mr() || "A component", t.type), Yo = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Lr(t.value != null ? t.value : i),
        controlled: Wu(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && ha(a, "checked", i, !1);
    }
    function C(e, t) {
      var a = e;
      {
        var i = Wu(t);
        !a._wrapperState.controlled && i && !$o && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), $o = !0), a._wrapperState.controlled && !i && !Vi && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Vi = !0);
      }
      h(e, t);
      var o = Lr(t.value), s = t.type;
      if (o != null)
        s === "number" ? (o === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != o) && (a.value = Tr(o)) : a.value !== Tr(o) && (a.value = Tr(o));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? xe(a, t.type, o) : t.hasOwnProperty("defaultValue") && xe(a, t.type, Lr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function L(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var o = t.type, s = o === "submit" || o === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Tr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function j(e, t) {
      var a = e;
      C(a, t), ne(a, t);
    }
    function ne(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        zn(a, "name");
        for (var o = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < o.length; s++) {
          var f = o[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Oh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            fl(f), C(f, p);
          }
        }
      }
    }
    function xe(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Hi(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Tr(e._wrapperState.initialValue) : e.defaultValue !== Tr(a) && (e.defaultValue = Tr(a)));
    }
    var ve = !1, Qe = !1, ft = !1;
    function Vt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? V.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Qe || (Qe = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (ft || (ft = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ve && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ve = !0);
    }
    function Kt(e, t) {
      t.value != null && e.setAttribute("value", Tr(Lr(t.value)));
    }
    var Xt = Array.isArray;
    function at(e) {
      return Xt(e);
    }
    var nn;
    nn = !1;
    function wn() {
      var e = Mr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Zl = ["value", "defaultValue"];
    function Gu(e) {
      {
        Po("select", e);
        for (var t = 0; t < Zl.length; t++) {
          var a = Zl[t];
          if (e[a] != null) {
            var i = at(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, wn()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, wn());
          }
        }
      }
    }
    function Pi(e, t, a, i) {
      var o = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < o.length; v++) {
          var y = f.hasOwnProperty("$" + o[v].value);
          o[v].selected !== y && (o[v].selected = y), y && i && (o[v].defaultSelected = !0);
        }
      } else {
        for (var g = Tr(Lr(a)), _ = null, T = 0; T < o.length; T++) {
          if (o[T].value === g) {
            o[T].selected = !0, i && (o[T].defaultSelected = !0);
            return;
          }
          _ === null && !o[T].disabled && (_ = o[T]);
        }
        _ !== null && (_.selected = !0);
      }
    }
    function eo(e, t) {
      return nt({}, t, {
        value: void 0
      });
    }
    function qu(e, t) {
      var a = e;
      Gu(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !nn && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), nn = !0);
    }
    function Kf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Pi(a, !!t.multiple, i, !1) : t.defaultValue != null && Pi(a, !!t.multiple, t.defaultValue, !0);
    }
    function sc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var o = t.value;
      o != null ? Pi(a, !!t.multiple, o, !1) : i !== !!t.multiple && (t.defaultValue != null ? Pi(a, !!t.multiple, t.defaultValue, !0) : Pi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Xf(e, t) {
      var a = e, i = t.value;
      i != null && Pi(a, !!t.multiple, i, !1);
    }
    var Zp = !1;
    function cc(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = nt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Tr(a._wrapperState.initialValue)
      });
      return i;
    }
    function ev(e, t) {
      var a = e;
      Po("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Zp && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Mr() || "A component"), Zp = !0);
      var i = t.value;
      if (i == null) {
        var o = t.children, s = t.defaultValue;
        if (o != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (at(o)) {
              if (o.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              o = o[0];
            }
            s = o;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Lr(i)
      };
    }
    function tv(e, t) {
      var a = e, i = Lr(t.value), o = Lr(t.defaultValue);
      if (i != null) {
        var s = Tr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      o != null && (a.defaultValue = Tr(o));
    }
    function nv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Wm(e, t) {
      tv(e, t);
    }
    var Ja = "http://www.w3.org/1999/xhtml", Gm = "http://www.w3.org/1998/Math/MathML", Jf = "http://www.w3.org/2000/svg";
    function Zf(e) {
      switch (e) {
        case "svg":
          return Jf;
        case "math":
          return Gm;
        default:
          return Ja;
      }
    }
    function fc(e, t) {
      return e == null || e === Ja ? Zf(t) : e === Jf && t === "foreignObject" ? Ja : e;
    }
    var qm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, o) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, o);
        });
      } : e;
    }, dc, rv = qm(function(e, t) {
      if (e.namespaceURI === Jf && !("innerHTML" in e)) {
        dc = dc || document.createElement("div"), dc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = dc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Xr = 1, Bi = 3, An = 8, Ii = 9, Ku = 11, pl = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Bi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Km = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Wo = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function av(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var iv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Wo).forEach(function(e) {
      iv.forEach(function(t) {
        Wo[av(t, e)] = Wo[e];
      });
    });
    function pc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Wo.hasOwnProperty(e) && Wo[e]) ? t + "px" : (Or(t, e), ("" + t).trim());
    }
    var lv = /([A-Z])/g, Go = /^ms-/;
    function Xm(e) {
      return e.replace(lv, "-$1").toLowerCase().replace(Go, "-ms-");
    }
    var ov = function() {
    };
    {
      var Jm = /^(?:webkit|moz|o)[A-Z]/, uv = /^-ms-/, sv = /-(.)/g, qo = /;\s*$/, mi = {}, ed = {}, Xu = !1, cv = !1, fv = function(e) {
        return e.replace(sv, function(t, a) {
          return a.toUpperCase();
        });
      }, td = function(e) {
        mi.hasOwnProperty(e) && mi[e] || (mi[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          fv(e.replace(uv, "ms-"))
        ));
      }, nd = function(e) {
        mi.hasOwnProperty(e) && mi[e] || (mi[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, dv = function(e, t) {
        ed.hasOwnProperty(t) && ed[t] || (ed[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(qo, "")));
      }, pv = function(e, t) {
        Xu || (Xu = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, vv = function(e, t) {
        cv || (cv = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      ov = function(e, t) {
        e.indexOf("-") > -1 ? td(e) : Jm.test(e) ? nd(e) : qo.test(t) && dv(e, t), typeof t == "number" && (isNaN(t) ? pv(e, t) : isFinite(t) || vv(e, t));
      };
    }
    var Zm = ov;
    function ey(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var o = e[i];
            if (o != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Xm(i)) + ":", t += pc(i, o, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function hv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var o = i.indexOf("--") === 0;
          o || Zm(i, t[i]);
          var s = pc(i, t[i], o);
          i === "float" && (i = "cssFloat"), o ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ty(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function mv(e) {
      var t = {};
      for (var a in e)
        for (var i = Km[a] || [a], o = 0; o < i.length; o++)
          t[i[o]] = a;
      return t;
    }
    function Za(e, t) {
      {
        if (!t)
          return;
        var a = mv(e), i = mv(t), o = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (o[v])
              continue;
            o[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ty(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var Ju = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, yv = nt({
      menuitem: !0
    }, Ju), gv = "__html";
    function vc(e, t) {
      if (t) {
        if (yv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(gv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function vl(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Ko = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Sv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Xo = {}, Jo = new RegExp("^(aria)-[" + ae + "]*$"), rd = new RegExp("^(aria)[A-Z][" + ae + "]*$");
    function Zu(e, t) {
      {
        if (ir.call(Xo, t) && Xo[t])
          return !0;
        if (rd.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Sv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Xo[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Xo[t] = !0, !0;
        }
        if (Jo.test(t)) {
          var o = t.toLowerCase(), s = Sv.hasOwnProperty(o) ? o : null;
          if (s == null)
            return Xo[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Xo[t] = !0, !0;
        }
      }
      return !0;
    }
    function ad(e, t) {
      {
        var a = [];
        for (var i in t) {
          var o = Zu(e, i);
          o || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Ev(e, t) {
      vl(e, t) || ad(e, t);
    }
    var es = !1;
    function Zo(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !es && (es = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var hc = function() {
    };
    {
      var br = {}, ts = /^on./, Cv = /^on[^A-Z]/, xv = new RegExp("^(aria)-[" + ae + "]*$"), Rv = new RegExp("^(aria)[A-Z][" + ae + "]*$");
      hc = function(e, t, a, i) {
        if (ir.call(br, t) && br[t])
          return !0;
        var o = t.toLowerCase();
        if (o === "onfocusin" || o === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), br[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(o) ? f[o] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), br[t] = !0, !0;
          if (ts.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), br[t] = !0, !0;
        } else if (ts.test(t))
          return Cv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), br[t] = !0, !0;
        if (xv.test(t) || Rv.test(t))
          return !0;
        if (o === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), br[t] = !0, !0;
        if (o === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), br[t] = !0, !0;
        if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), br[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), br[t] = !0, !0;
        var v = ln(t), y = v !== null && v.type === Xn;
        if (Ko.hasOwnProperty(o)) {
          var g = Ko[o];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), br[t] = !0, !0;
        } else if (!y && t !== o)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, o), br[t] = !0, !0;
        return typeof a == "boolean" && cn(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), br[t] = !0, !0) : y ? !0 : cn(t, a, v, !1) ? (br[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Un && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), br[t] = !0), !0);
      };
    }
    var Tv = function(e, t, a) {
      {
        var i = [];
        for (var o in t) {
          var s = hc(e, o, t[o], a);
          s || i.push(o);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function bv(e, t, a) {
      vl(e, t) || Tv(e, t, a);
    }
    var id = 1, yi = 2, to = 4, ld = id | yi | to, ns = null;
    function ny(e) {
      ns !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), ns = e;
    }
    function rs() {
      ns === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), ns = null;
    }
    function ry(e) {
      return e === ns;
    }
    function mc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Bi ? t.parentNode : t;
    }
    var yc = null, Pt = null, hl = null;
    function as(e) {
      var t = wu(e);
      if (t) {
        if (typeof yc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Oh(a);
          yc(t.stateNode, t.type, i);
        }
      }
    }
    function is(e) {
      yc = e;
    }
    function od(e) {
      Pt ? hl ? hl.push(e) : hl = [e] : Pt = e;
    }
    function ud() {
      return Pt !== null || hl !== null;
    }
    function eu() {
      if (Pt) {
        var e = Pt, t = hl;
        if (Pt = null, hl = null, as(e), t)
          for (var a = 0; a < t.length; a++)
            as(t[a]);
      }
    }
    var ls = function(e, t) {
      return e(t);
    }, no = function() {
    }, gc = !1;
    function ay() {
      var e = ud();
      e && (no(), eu());
    }
    function wv(e, t, a) {
      if (gc)
        return e(t, a);
      gc = !0;
      try {
        return ls(e, t, a);
      } finally {
        gc = !1, ay();
      }
    }
    function _v(e, t, a) {
      ls = e, no = a;
    }
    function Sc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Ec(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && Sc(t));
        default:
          return !1;
      }
    }
    function ro(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Oh(a);
      if (i === null)
        return null;
      var o = i[t];
      if (Ec(t, e.type, i))
        return null;
      if (o && typeof o != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof o + "` type.");
      return o;
    }
    var os = !1;
    if (qn)
      try {
        var ao = {};
        Object.defineProperty(ao, "passive", {
          get: function() {
            os = !0;
          }
        }), window.addEventListener("test", ao, ao), window.removeEventListener("test", ao, ao);
      } catch {
        os = !1;
      }
    function Cc(e, t, a, i, o, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var kv = Cc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var xc = document.createElement("react");
      kv = function(t, a, i, o, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), _ = !1, T = !0, z = window.event, A = Object.getOwnPropertyDescriptor(window, "event");
        function F() {
          xc.removeEventListener(H, He, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = z);
        }
        var ce = Array.prototype.slice.call(arguments, 3);
        function He() {
          _ = !0, F(), a.apply(i, ce), T = !1;
        }
        var Oe, Ot = !1, Ct = !1;
        function O(N) {
          if (Oe = N.error, Ot = !0, Oe === null && N.colno === 0 && N.lineno === 0 && (Ct = !0), N.defaultPrevented && Oe != null && typeof Oe == "object")
            try {
              Oe._suppressLogging = !0;
            } catch {
            }
        }
        var H = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", O), xc.addEventListener(H, He, !1), g.initEvent(H, !1, !1), xc.dispatchEvent(g), A && Object.defineProperty(window, "event", A), _ && T && (Ot ? Ct && (Oe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Oe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Oe)), window.removeEventListener("error", O), !_)
          return F(), Cc.apply(this, arguments);
      };
    }
    var iy = kv, tu = !1, nu = null, ei = !1, Rc = null, ru = {
      onError: function(e) {
        tu = !0, nu = e;
      }
    };
    function za(e, t, a, i, o, s, f, p, v) {
      tu = !1, nu = null, iy.apply(ru, arguments);
    }
    function us(e, t, a, i, o, s, f, p, v) {
      if (za.apply(this, arguments), tu) {
        var y = cd();
        ei || (ei = !0, Rc = y);
      }
    }
    function Yi() {
      if (ei) {
        var e = Rc;
        throw ei = !1, Rc = null, e;
      }
    }
    function sd() {
      return tu;
    }
    function cd() {
      if (tu) {
        var e = nu;
        return tu = !1, nu = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function au(e) {
      return e._reactInternals;
    }
    function io(e) {
      return e._reactInternals !== void 0;
    }
    function ss(e, t) {
      e._reactInternals = t;
    }
    var Le = (
      /*                      */
      0
    ), $i = (
      /*                */
      1
    ), xn = (
      /*                    */
      2
    ), St = (
      /*                       */
      4
    ), Jr = (
      /*                */
      16
    ), $t = (
      /*                 */
      32
    ), rn = (
      /*                     */
      64
    ), pt = (
      /*                   */
      128
    ), mn = (
      /*            */
      256
    ), jn = (
      /*                          */
      512
    ), Ua = (
      /*                     */
      1024
    ), ya = (
      /*                      */
      2048
    ), Rn = (
      /*                    */
      4096
    ), gi = (
      /*                   */
      8192
    ), Tc = (
      /*             */
      16384
    ), Dv = (
      /*               */
      32767
    ), lo = (
      /*                   */
      32768
    ), wr = (
      /*                */
      65536
    ), ti = (
      /* */
      131072
    ), cs = (
      /*                       */
      1048576
    ), fs = (
      /*                    */
      2097152
    ), ml = (
      /*                 */
      4194304
    ), fd = (
      /*                */
      8388608
    ), zr = (
      /*               */
      16777216
    ), yl = (
      /*              */
      33554432
    ), gl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      St | Ua | 0
    ), iu = xn | St | Jr | $t | jn | Rn | gi, Sl = St | rn | jn | gi, ur = ya | Jr, Fn = ml | fd | fs, oo = re.ReactCurrentOwner;
    function Ur(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (xn | Rn)) !== Le && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === J ? a : null;
    }
    function Si(e) {
      if (e.tag === ge) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function El(e) {
      return e.tag === J ? e.stateNode.containerInfo : null;
    }
    function Ov(e) {
      return Ur(e) === e;
    }
    function dd(e) {
      {
        var t = oo.current;
        if (t !== null && t.tag === ee) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", qe(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var o = au(e);
      return o ? Ur(o) === o : !1;
    }
    function bc(e) {
      if (Ur(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Zr(e) {
      var t = e.alternate;
      if (!t) {
        var a = Ur(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, o = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = o = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return bc(s), e;
            if (v === o)
              return bc(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== o.return)
          i = s, o = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, o = f;
              break;
            }
            if (g === o) {
              y = !0, o = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, o = s;
                break;
              }
              if (g === o) {
                y = !0, o = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== o)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== J)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function ea(e) {
      var t = Zr(e);
      return t !== null ? dn(t) : null;
    }
    function dn(e) {
      if (e.tag === ie || e.tag === _e)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = dn(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function ni(e) {
      var t = Zr(e);
      return t !== null ? pd(t) : null;
    }
    function pd(e) {
      if (e.tag === ie || e.tag === _e)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== De) {
          var a = pd(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var vd = k.unstable_scheduleCallback, hd = k.unstable_cancelCallback, md = k.unstable_shouldYield, Nv = k.unstable_requestPaint, _n = k.unstable_now, Mv = k.unstable_getCurrentPriorityLevel, Qi = k.unstable_ImmediatePriority, ds = k.unstable_UserBlockingPriority, uo = k.unstable_NormalPriority, ps = k.unstable_LowPriority, lu = k.unstable_IdlePriority, Lv = k.unstable_yieldValue, zv = k.unstable_setDisableYieldValue, ri = null, sr = null, oe = null, ga = !1, _r = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function yd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ie && (e = nt({}, e, {
          getLaneLabelMap: Cd,
          injectProfilingHooks: so
        })), ri = t.inject(e), sr = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function gd(e, t) {
      if (sr && typeof sr.onScheduleFiberRoot == "function")
        try {
          sr.onScheduleFiberRoot(ri, e, t);
        } catch (a) {
          ga || (ga = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Sd(e, t) {
      if (sr && typeof sr.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & pt) === pt;
          if (Ye) {
            var i;
            switch (t) {
              case ia:
                i = Qi;
                break;
              case ja:
                i = ds;
                break;
              case cr:
                i = uo;
                break;
              case tf:
                i = lu;
                break;
              default:
                i = uo;
                break;
            }
            sr.onCommitFiberRoot(ri, e, i, a);
          }
        } catch (o) {
          ga || (ga = !0, S("React instrumentation encountered an error: %s", o));
        }
    }
    function Ed(e) {
      if (sr && typeof sr.onPostCommitFiberRoot == "function")
        try {
          sr.onPostCommitFiberRoot(ri, e);
        } catch (t) {
          ga || (ga = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function ou(e) {
      if (sr && typeof sr.onCommitFiberUnmount == "function")
        try {
          sr.onCommitFiberUnmount(ri, e);
        } catch (t) {
          ga || (ga = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Qt(e) {
      if (typeof Lv == "function" && (zv(e), be(e)), sr && typeof sr.setStrictMode == "function")
        try {
          sr.setStrictMode(ri, e);
        } catch (t) {
          ga || (ga = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function so(e) {
      oe = e;
    }
    function Cd() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < _d; a++) {
          var i = Vv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Uv(e) {
      oe !== null && typeof oe.markCommitStarted == "function" && oe.markCommitStarted(e);
    }
    function Ei() {
      oe !== null && typeof oe.markCommitStopped == "function" && oe.markCommitStopped();
    }
    function Aa(e) {
      oe !== null && typeof oe.markComponentRenderStarted == "function" && oe.markComponentRenderStarted(e);
    }
    function Cl() {
      oe !== null && typeof oe.markComponentRenderStopped == "function" && oe.markComponentRenderStopped();
    }
    function Av(e) {
      oe !== null && typeof oe.markComponentPassiveEffectMountStarted == "function" && oe.markComponentPassiveEffectMountStarted(e);
    }
    function Wi() {
      oe !== null && typeof oe.markComponentPassiveEffectMountStopped == "function" && oe.markComponentPassiveEffectMountStopped();
    }
    function xl(e) {
      oe !== null && typeof oe.markComponentPassiveEffectUnmountStarted == "function" && oe.markComponentPassiveEffectUnmountStarted(e);
    }
    function wc() {
      oe !== null && typeof oe.markComponentPassiveEffectUnmountStopped == "function" && oe.markComponentPassiveEffectUnmountStopped();
    }
    function jv(e) {
      oe !== null && typeof oe.markComponentLayoutEffectMountStarted == "function" && oe.markComponentLayoutEffectMountStarted(e);
    }
    function _c() {
      oe !== null && typeof oe.markComponentLayoutEffectMountStopped == "function" && oe.markComponentLayoutEffectMountStopped();
    }
    function xd(e) {
      oe !== null && typeof oe.markComponentLayoutEffectUnmountStarted == "function" && oe.markComponentLayoutEffectUnmountStarted(e);
    }
    function uu() {
      oe !== null && typeof oe.markComponentLayoutEffectUnmountStopped == "function" && oe.markComponentLayoutEffectUnmountStopped();
    }
    function Ci(e, t, a) {
      oe !== null && typeof oe.markComponentErrored == "function" && oe.markComponentErrored(e, t, a);
    }
    function vs(e, t, a) {
      oe !== null && typeof oe.markComponentSuspended == "function" && oe.markComponentSuspended(e, t, a);
    }
    function hs(e) {
      oe !== null && typeof oe.markLayoutEffectsStarted == "function" && oe.markLayoutEffectsStarted(e);
    }
    function co() {
      oe !== null && typeof oe.markLayoutEffectsStopped == "function" && oe.markLayoutEffectsStopped();
    }
    function Rd(e) {
      oe !== null && typeof oe.markPassiveEffectsStarted == "function" && oe.markPassiveEffectsStarted(e);
    }
    function su() {
      oe !== null && typeof oe.markPassiveEffectsStopped == "function" && oe.markPassiveEffectsStopped();
    }
    function Td(e) {
      oe !== null && typeof oe.markRenderStarted == "function" && oe.markRenderStarted(e);
    }
    function bd() {
      oe !== null && typeof oe.markRenderYielded == "function" && oe.markRenderYielded();
    }
    function yn() {
      oe !== null && typeof oe.markRenderStopped == "function" && oe.markRenderStopped();
    }
    function kc(e) {
      oe !== null && typeof oe.markRenderScheduled == "function" && oe.markRenderScheduled(e);
    }
    function wd(e, t) {
      oe !== null && typeof oe.markForceUpdateScheduled == "function" && oe.markForceUpdateScheduled(e, t);
    }
    function ms(e, t) {
      oe !== null && typeof oe.markStateUpdateScheduled == "function" && oe.markStateUpdateScheduled(e, t);
    }
    var ze = (
      /*                         */
      0
    ), mt = (
      /*                 */
      1
    ), bt = (
      /*                    */
      2
    ), rt = (
      /*               */
      8
    ), Jt = (
      /*              */
      16
    ), Yn = Math.clz32 ? Math.clz32 : gs, Dc = Math.log, ys = Math.LN2;
    function gs(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Dc(t) / ys | 0) | 0;
    }
    var _d = 31, P = (
      /*                        */
      0
    ), Hn = (
      /*                          */
      0
    ), $e = (
      /*                        */
      1
    ), Rl = (
      /*    */
      2
    ), er = (
      /*             */
      4
    ), tr = (
      /*            */
      8
    ), ta = (
      /*                     */
      16
    ), fo = (
      /*                */
      32
    ), Tl = (
      /*                       */
      4194240
    ), cu = (
      /*                        */
      64
    ), Oc = (
      /*                        */
      128
    ), Nc = (
      /*                        */
      256
    ), Mc = (
      /*                        */
      512
    ), Lc = (
      /*                        */
      1024
    ), zc = (
      /*                        */
      2048
    ), Uc = (
      /*                        */
      4096
    ), Ac = (
      /*                        */
      8192
    ), po = (
      /*                        */
      16384
    ), jc = (
      /*                       */
      32768
    ), fu = (
      /*                       */
      65536
    ), du = (
      /*                       */
      131072
    ), Fc = (
      /*                       */
      262144
    ), Ss = (
      /*                       */
      524288
    ), Hc = (
      /*                       */
      1048576
    ), Vc = (
      /*                       */
      2097152
    ), Es = (
      /*                            */
      130023424
    ), vo = (
      /*                             */
      4194304
    ), Cs = (
      /*                             */
      8388608
    ), Pc = (
      /*                             */
      16777216
    ), Bc = (
      /*                             */
      33554432
    ), Ic = (
      /*                             */
      67108864
    ), Fv = vo, pu = (
      /*          */
      134217728
    ), Hv = (
      /*                          */
      268435455
    ), xs = (
      /*               */
      268435456
    ), bl = (
      /*                        */
      536870912
    ), na = (
      /*                   */
      1073741824
    );
    function Vv(e) {
      {
        if (e & $e)
          return "Sync";
        if (e & Rl)
          return "InputContinuousHydration";
        if (e & er)
          return "InputContinuous";
        if (e & tr)
          return "DefaultHydration";
        if (e & ta)
          return "Default";
        if (e & fo)
          return "TransitionHydration";
        if (e & Tl)
          return "Transition";
        if (e & Es)
          return "Retry";
        if (e & pu)
          return "SelectiveHydration";
        if (e & xs)
          return "IdleHydration";
        if (e & bl)
          return "Idle";
        if (e & na)
          return "Offscreen";
      }
    }
    var Wt = -1, Yc = cu, $c = vo;
    function Rs(e) {
      switch (ho(e)) {
        case $e:
          return $e;
        case Rl:
          return Rl;
        case er:
          return er;
        case tr:
          return tr;
        case ta:
          return ta;
        case fo:
          return fo;
        case cu:
        case Oc:
        case Nc:
        case Mc:
        case Lc:
        case zc:
        case Uc:
        case Ac:
        case po:
        case jc:
        case fu:
        case du:
        case Fc:
        case Ss:
        case Hc:
        case Vc:
          return e & Tl;
        case vo:
        case Cs:
        case Pc:
        case Bc:
        case Ic:
          return e & Es;
        case pu:
          return pu;
        case xs:
          return xs;
        case bl:
          return bl;
        case na:
          return na;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function ra(e, t) {
      var a = e.pendingLanes;
      if (a === P)
        return P;
      var i = P, o = e.suspendedLanes, s = e.pingedLanes, f = a & Hv;
      if (f !== P) {
        var p = f & ~o;
        if (p !== P)
          i = Rs(p);
        else {
          var v = f & s;
          v !== P && (i = Rs(v));
        }
      } else {
        var y = a & ~o;
        y !== P ? i = Rs(y) : s !== P && (i = Rs(s));
      }
      if (i === P)
        return P;
      if (t !== P && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & o) === P) {
        var g = ho(i), _ = ho(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= _ || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === ta && (_ & Tl) !== P
        )
          return t;
      }
      (i & er) !== P && (i |= a & ta);
      var T = e.entangledLanes;
      if (T !== P)
        for (var z = e.entanglements, A = i & T; A > 0; ) {
          var F = kn(A), ce = 1 << F;
          i |= z[F], A &= ~ce;
        }
      return i;
    }
    function kd(e, t) {
      for (var a = e.eventTimes, i = Wt; t > 0; ) {
        var o = kn(t), s = 1 << o, f = a[o];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Qc(e, t) {
      switch (e) {
        case $e:
        case Rl:
        case er:
          return t + 250;
        case tr:
        case ta:
        case fo:
        case cu:
        case Oc:
        case Nc:
        case Mc:
        case Lc:
        case zc:
        case Uc:
        case Ac:
        case po:
        case jc:
        case fu:
        case du:
        case Fc:
        case Ss:
        case Hc:
        case Vc:
          return t + 5e3;
        case vo:
        case Cs:
        case Pc:
        case Bc:
        case Ic:
          return Wt;
        case pu:
        case xs:
        case bl:
        case na:
          return Wt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Wt;
      }
    }
    function Pv(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, o = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = kn(f), v = 1 << p, y = s[p];
        y === Wt ? ((v & i) === P || (v & o) !== P) && (s[p] = Qc(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Bv(e) {
      return Rs(e.pendingLanes);
    }
    function Wc(e) {
      var t = e.pendingLanes & ~na;
      return t !== P ? t : t & na ? na : P;
    }
    function Dd(e) {
      return (e & $e) !== P;
    }
    function wl(e) {
      return (e & Hv) !== P;
    }
    function Gc(e) {
      return (e & Es) === e;
    }
    function Od(e) {
      var t = $e | er | ta;
      return (e & t) === P;
    }
    function ly(e) {
      return (e & Tl) === e;
    }
    function Ts(e, t) {
      var a = Rl | er | tr | ta;
      return (t & a) !== P;
    }
    function Iv(e, t) {
      return (t & e.expiredLanes) !== P;
    }
    function Nd(e) {
      return (e & Tl) !== P;
    }
    function Md() {
      var e = Yc;
      return Yc <<= 1, (Yc & Tl) === P && (Yc = cu), e;
    }
    function Yv() {
      var e = $c;
      return $c <<= 1, ($c & Es) === P && ($c = vo), e;
    }
    function ho(e) {
      return e & -e;
    }
    function nr(e) {
      return ho(e);
    }
    function kn(e) {
      return 31 - Yn(e);
    }
    function qc(e) {
      return kn(e);
    }
    function aa(e, t) {
      return (e & t) !== P;
    }
    function mo(e, t) {
      return (e & t) === t;
    }
    function it(e, t) {
      return e | t;
    }
    function bs(e, t) {
      return e & ~t;
    }
    function Kc(e, t) {
      return e & t;
    }
    function oy(e) {
      return e;
    }
    function Ld(e, t) {
      return e !== Hn && e < t ? e : t;
    }
    function Xc(e) {
      for (var t = [], a = 0; a < _d; a++)
        t.push(e);
      return t;
    }
    function vu(e, t, a) {
      e.pendingLanes |= t, t !== bl && (e.suspendedLanes = P, e.pingedLanes = P);
      var i = e.eventTimes, o = qc(t);
      i[o] = a;
    }
    function zd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var o = kn(i), s = 1 << o;
        a[o] = Wt, i &= ~s;
      }
    }
    function Jc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function $v(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = P, e.pingedLanes = P, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, o = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = kn(f), v = 1 << p;
        i[p] = P, o[p] = Wt, s[p] = Wt, f &= ~v;
      }
    }
    function ws(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, o = a; o; ) {
        var s = kn(o), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), o &= ~f;
      }
    }
    function Zc(e, t) {
      var a = ho(t), i;
      switch (a) {
        case er:
          i = Rl;
          break;
        case ta:
          i = tr;
          break;
        case cu:
        case Oc:
        case Nc:
        case Mc:
        case Lc:
        case zc:
        case Uc:
        case Ac:
        case po:
        case jc:
        case fu:
        case du:
        case Fc:
        case Ss:
        case Hc:
        case Vc:
        case vo:
        case Cs:
        case Pc:
        case Bc:
        case Ic:
          i = fo;
          break;
        case bl:
          i = xs;
          break;
        default:
          i = Hn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Hn ? Hn : i;
    }
    function Qv(e, t, a) {
      if (_r)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var o = qc(a), s = 1 << o, f = i[o];
          f.add(t), a &= ~s;
        }
    }
    function Ud(e, t) {
      if (_r)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var o = qc(t), s = 1 << o, f = a[o];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function ef(e, t) {
      return null;
    }
    var ia = $e, ja = er, cr = ta, tf = bl, hu = Hn;
    function Sa() {
      return hu;
    }
    function $n(e) {
      hu = e;
    }
    function Wv(e, t) {
      var a = hu;
      try {
        return hu = e, t();
      } finally {
        hu = a;
      }
    }
    function _s(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function kr(e, t) {
      return e > t ? e : t;
    }
    function Ad(e, t) {
      return e !== 0 && e < t;
    }
    function Gv(e) {
      var t = ho(e);
      return Ad(ia, t) ? Ad(ja, t) ? wl(t) ? cr : tf : ja : ia;
    }
    function yo(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var fr;
    function uy(e) {
      fr = e;
    }
    function Ee(e) {
      fr(e);
    }
    var _l;
    function jd(e) {
      _l = e;
    }
    var Fd;
    function sy(e) {
      Fd = e;
    }
    var mu;
    function nf(e) {
      mu = e;
    }
    var rf;
    function qv(e) {
      rf = e;
    }
    var af = !1, ks = [], xi = null, Ri = null, gn = null, Ar = /* @__PURE__ */ new Map(), Fa = /* @__PURE__ */ new Map(), Gi = [], Kv = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function ai(e) {
      return Kv.indexOf(e) > -1;
    }
    function Xv(e, t, a, i, o) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: o,
        targetContainers: [i]
      };
    }
    function ii(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          xi = null;
          break;
        case "dragenter":
        case "dragleave":
          Ri = null;
          break;
        case "mouseover":
        case "mouseout":
          gn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Ar.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Fa.delete(i);
          break;
        }
      }
    }
    function Ds(e, t, a, i, o, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Xv(t, a, i, o, s);
        if (t !== null) {
          var p = wu(t);
          p !== null && _l(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return o !== null && v.indexOf(o) === -1 && v.push(o), e;
    }
    function Jv(e, t, a, i, o) {
      switch (t) {
        case "focusin": {
          var s = o;
          return xi = Ds(xi, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = o;
          return Ri = Ds(Ri, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = o;
          return gn = Ds(gn, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = o, y = v.pointerId;
          return Ar.set(y, Ds(Ar.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = o, _ = g.pointerId;
          return Fa.set(_, Ds(Fa.get(_) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Hd(e) {
      var t = Is(e.target);
      if (t !== null) {
        var a = Ur(t);
        if (a !== null) {
          var i = a.tag;
          if (i === ge) {
            var o = Si(a);
            if (o !== null) {
              e.blockedOn = o, rf(e.priority, function() {
                Fd(a);
              });
              return;
            }
          } else if (i === J) {
            var s = a.stateNode;
            if (yo(s)) {
              e.blockedOn = El(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Zv(e) {
      for (var t = mu(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Gi.length && Ad(t, Gi[i].priority); i++)
        ;
      Gi.splice(i, 0, a), i === 0 && Hd(a);
    }
    function Os(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Ns(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var o = e.nativeEvent, s = new o.constructor(o.type, o);
          ny(s), o.target.dispatchEvent(s), rs();
        } else {
          var f = wu(i);
          return f !== null && _l(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function eh(e, t, a) {
      Os(e) && a.delete(t);
    }
    function lf() {
      af = !1, xi !== null && Os(xi) && (xi = null), Ri !== null && Os(Ri) && (Ri = null), gn !== null && Os(gn) && (gn = null), Ar.forEach(eh), Fa.forEach(eh);
    }
    function go(e, t) {
      e.blockedOn === t && (e.blockedOn = null, af || (af = !0, k.unstable_scheduleCallback(k.unstable_NormalPriority, lf)));
    }
    function Dr(e) {
      if (ks.length > 0) {
        go(ks[0], e);
        for (var t = 1; t < ks.length; t++) {
          var a = ks[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      xi !== null && go(xi, e), Ri !== null && go(Ri, e), gn !== null && go(gn, e);
      var i = function(p) {
        return go(p, e);
      };
      Ar.forEach(i), Fa.forEach(i);
      for (var o = 0; o < Gi.length; o++) {
        var s = Gi[o];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Gi.length > 0; ) {
        var f = Gi[0];
        if (f.blockedOn !== null)
          break;
        Hd(f), f.blockedOn === null && Gi.shift();
      }
    }
    var Et = re.ReactCurrentBatchConfig, Vn = !0;
    function Dn(e) {
      Vn = !!e;
    }
    function dr() {
      return Vn;
    }
    function Ea(e, t, a) {
      var i = gu(t), o;
      switch (i) {
        case ia:
          o = yu;
          break;
        case ja:
          o = Qn;
          break;
        case cr:
        default:
          o = So;
          break;
      }
      return o.bind(null, t, a, e);
    }
    function yu(e, t, a, i) {
      var o = Sa(), s = Et.transition;
      Et.transition = null;
      try {
        $n(ia), So(e, t, a, i);
      } finally {
        $n(o), Et.transition = s;
      }
    }
    function Qn(e, t, a, i) {
      var o = Sa(), s = Et.transition;
      Et.transition = null;
      try {
        $n(ja), So(e, t, a, i);
      } finally {
        $n(o), Et.transition = s;
      }
    }
    function So(e, t, a, i) {
      Vn && Eo(e, t, a, i);
    }
    function Eo(e, t, a, i) {
      var o = Ns(e, t, a, i);
      if (o === null) {
        wy(e, t, i, Co, a), ii(e, i);
        return;
      }
      if (Jv(o, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (ii(e, i), t & to && ai(e)) {
        for (; o !== null; ) {
          var s = wu(o);
          s !== null && Ee(s);
          var f = Ns(e, t, a, i);
          if (f === null && wy(e, t, i, Co, a), f === o)
            break;
          o = f;
        }
        o !== null && i.stopPropagation();
        return;
      }
      wy(e, t, i, null, a);
    }
    var Co = null;
    function Ns(e, t, a, i) {
      Co = null;
      var o = mc(i), s = Is(o);
      if (s !== null) {
        var f = Ur(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === ge) {
            var v = Si(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === J) {
            var y = f.stateNode;
            if (yo(y))
              return El(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Co = s, null;
    }
    function gu(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return ia;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return ja;
        case "message": {
          var t = Mv();
          switch (t) {
            case Qi:
              return ia;
            case ds:
              return ja;
            case uo:
            case ps:
              return cr;
            case lu:
              return tf;
            default:
              return cr;
          }
        }
        default:
          return cr;
      }
    }
    function la(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Vd(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Su(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function qi(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var kl = null, Ms = null, Ha = null;
    function of(e) {
      return kl = e, Ms = Eu(), !0;
    }
    function Dl() {
      kl = null, Ms = null, Ha = null;
    }
    function Ls() {
      if (Ha)
        return Ha;
      var e, t = Ms, a = t.length, i, o = Eu(), s = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === o[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Ha = o.slice(e, p), Ha;
    }
    function Eu() {
      return "value" in kl ? kl.value : kl.textContent;
    }
    function Cu(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function xo() {
      return !0;
    }
    function zs() {
      return !1;
    }
    function an(e) {
      function t(a, i, o, s, f) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = xo : this.isDefaultPrevented = zs, this.isPropagationStopped = zs, this;
      }
      return nt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = xo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = xo);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: xo
      }), t;
    }
    var Ca = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, xa = an(Ca), rr = nt({}, Ca, {
      view: 0,
      detail: 0
    }), th = an(rr), Us, As, js;
    function Ol(e) {
      e !== js && (js && e.type === "mousemove" ? (Us = e.screenX - js.screenX, As = e.screenY - js.screenY) : (Us = 0, As = 0), js = e);
    }
    var Fs = nt({}, rr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Yd,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Ol(e), Us);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : As;
      }
    }), uf = an(Fs), Ro = nt({}, Fs, {
      dataTransfer: 0
    }), Pd = an(Ro), To = nt({}, rr, {
      relatedTarget: 0
    }), sf = an(To), nh = nt({}, Ca, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Bd = an(nh), cf = nt({}, Ca, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), cy = an(cf), fy = nt({}, Ca, {
      data: 0
    }), Id = an(fy), rh = Id, bo = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, dy = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function xu(e) {
      if (e.key) {
        var t = bo[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Cu(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? dy[e.keyCode] || "Unidentified" : "";
    }
    var ah = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Tn(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = ah[e];
      return i ? !!a[i] : !1;
    }
    function Yd(e) {
      return Tn;
    }
    var ih = nt({}, rr, {
      key: xu,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Yd,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Cu(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Cu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), py = an(ih), vy = nt({}, Fs, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), $d = an(vy), lh = nt({}, rr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Yd
    }), hy = an(lh), Va = nt({}, Ca, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Qd = an(Va), my = nt({}, Fs, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Nl = an(my), ff = [9, 13, 27, 32], Ml = 229, Ru = qn && "CompositionEvent" in window, wo = null;
    qn && "documentMode" in document && (wo = document.documentMode);
    var Wd = qn && "TextEvent" in window && !wo, oh = qn && (!Ru || wo && wo > 8 && wo <= 11), df = 32, uh = String.fromCharCode(df);
    function sh() {
      Yt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Yt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Yt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Yt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Gd = !1;
    function pf(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function vf(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function ch(e, t) {
      return e === "keydown" && t.keyCode === Ml;
    }
    function hf(e, t) {
      switch (e) {
        case "keyup":
          return ff.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Ml;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function fh(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function qd(e) {
      return e.locale === "ko";
    }
    var Ll = !1;
    function mf(e, t, a, i, o) {
      var s, f;
      if (Ru ? s = vf(t) : Ll ? hf(t, i) && (s = "onCompositionEnd") : ch(t, i) && (s = "onCompositionStart"), !s)
        return null;
      oh && !qd(i) && (!Ll && s === "onCompositionStart" ? Ll = of(o) : s === "onCompositionEnd" && Ll && (f = Ls()));
      var p = yh(a, s);
      if (p.length > 0) {
        var v = new Id(s, t, null, i, o);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = fh(i);
          y !== null && (v.data = y);
        }
      }
    }
    function Kd(e, t) {
      switch (e) {
        case "compositionend":
          return fh(t);
        case "keypress":
          var a = t.which;
          return a !== df ? null : (Gd = !0, uh);
        case "textInput":
          var i = t.data;
          return i === uh && Gd ? null : i;
        default:
          return null;
      }
    }
    function yf(e, t) {
      if (Ll) {
        if (e === "compositionend" || !Ru && hf(e, t)) {
          var a = Ls();
          return Dl(), Ll = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!pf(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return oh && !qd(t) ? null : t.data;
        default:
          return null;
      }
    }
    function dh(e, t, a, i, o) {
      var s;
      if (Wd ? s = Kd(t, i) : s = yf(t, i), !s)
        return null;
      var f = yh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new rh("onBeforeInput", "beforeinput", null, i, o);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function yy(e, t, a, i, o, s, f) {
      mf(e, t, a, i, o), dh(e, t, a, i, o);
    }
    var gf = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function ph(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!gf[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Hs(e) {
      if (!qn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function gy() {
      Yt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function Vs(e, t, a, i) {
      od(i);
      var o = yh(t, "onChange");
      if (o.length > 0) {
        var s = new xa("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: o
        });
      }
    }
    var n = null, r = null;
    function l(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function u(e) {
      var t = [];
      Vs(t, r, e, mc(e)), wv(c, t);
    }
    function c(e) {
      k0(e, 0);
    }
    function d(e) {
      var t = Tf(e);
      if (fl(t))
        return e;
    }
    function m(e, t) {
      if (e === "change")
        return t;
    }
    var E = !1;
    qn && (E = Hs("input") && (!document.documentMode || document.documentMode > 9));
    function R(e, t) {
      n = e, r = t, n.attachEvent("onpropertychange", G);
    }
    function U() {
      n && (n.detachEvent("onpropertychange", G), n = null, r = null);
    }
    function G(e) {
      e.propertyName === "value" && d(r) && u(e);
    }
    function q(e, t, a) {
      e === "focusin" ? (U(), R(t, a)) : e === "focusout" && U();
    }
    function W(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return d(r);
    }
    function he(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Re(e, t) {
      if (e === "click")
        return d(t);
    }
    function we(e, t) {
      if (e === "input" || e === "change")
        return d(t);
    }
    function On(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || xe(e, "number", e.value);
    }
    function D(e, t, a, i, o, s, f) {
      var p = a ? Tf(a) : window, v, y;
      if (l(p) ? v = m : ph(p) ? E ? v = we : (v = W, y = q) : he(p) && (v = Re), v) {
        var g = v(t, a);
        if (g) {
          Vs(e, g, i, o);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && On(p);
    }
    function w() {
      Mn("onMouseEnter", ["mouseout", "mouseover"]), Mn("onMouseLeave", ["mouseout", "mouseover"]), Mn("onPointerEnter", ["pointerout", "pointerover"]), Mn("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function M(e, t, a, i, o, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !ry(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Is(y) || cp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (o.window === o)
          g = o;
        else {
          var _ = o.ownerDocument;
          _ ? g = _.defaultView || _.parentWindow : g = window;
        }
        var T, z;
        if (v) {
          var A = i.relatedTarget || i.toElement;
          if (T = a, z = A ? Is(A) : null, z !== null) {
            var F = Ur(z);
            (z !== F || z.tag !== ie && z.tag !== _e) && (z = null);
          }
        } else
          T = null, z = a;
        if (T !== z) {
          var ce = uf, He = "onMouseLeave", Oe = "onMouseEnter", Ot = "mouse";
          (t === "pointerout" || t === "pointerover") && (ce = $d, He = "onPointerLeave", Oe = "onPointerEnter", Ot = "pointer");
          var Ct = T == null ? g : Tf(T), O = z == null ? g : Tf(z), H = new ce(He, Ot + "leave", T, i, o);
          H.target = Ct, H.relatedTarget = O;
          var N = null, K = Is(o);
          if (K === a) {
            var ye = new ce(Oe, Ot + "enter", z, i, o);
            ye.target = O, ye.relatedTarget = Ct, N = ye;
          }
          OR(e, H, N, T, z);
        }
      }
    }
    function Z(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var de = typeof Object.is == "function" ? Object.is : Z;
    function Ae(e, t) {
      if (de(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var o = 0; o < a.length; o++) {
        var s = a[o];
        if (!ir.call(t, s) || !de(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Ve(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Ke(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Wn(e, t) {
      for (var a = Ve(e), i = 0, o = 0; a; ) {
        if (a.nodeType === Bi) {
          if (o = i + a.textContent.length, i <= t && o >= t)
            return {
              node: a,
              offset: t - i
            };
          i = o;
        }
        a = Ve(Ke(a));
      }
    }
    function Mt(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var o = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        o.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return zl(e, o, s, f, p);
    }
    function zl(e, t, a, i, o) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, _ = null;
      e: for (; ; ) {
        for (var T = null; g === t && (a === 0 || g.nodeType === Bi) && (f = s + a), g === i && (o === 0 || g.nodeType === Bi) && (p = s + o), g.nodeType === Bi && (s += g.nodeValue.length), (T = g.firstChild) !== null; )
          _ = g, g = T;
        for (; ; ) {
          if (g === e)
            break e;
          if (_ === t && ++v === a && (f = s), _ === i && ++y === o && (p = s), (T = g.nextSibling) !== null)
            break;
          g = _, _ = g.parentNode;
        }
        g = T;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function Sy(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var o = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!o.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = Wn(e, f), g = Wn(e, p);
        if (y && g) {
          if (o.rangeCount === 1 && o.anchorNode === y.node && o.anchorOffset === y.offset && o.focusNode === g.node && o.focusOffset === g.offset)
            return;
          var _ = a.createRange();
          _.setStart(y.node, y.offset), o.removeAllRanges(), f > p ? (o.addRange(_), o.extend(g.node, g.offset)) : (_.setEnd(g.node, g.offset), o.addRange(_));
        }
      }
    }
    function m0(e) {
      return e && e.nodeType === Bi;
    }
    function y0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : m0(e) ? !1 : m0(t) ? y0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function dR(e) {
      return e && e.ownerDocument && y0(e.ownerDocument.documentElement, e);
    }
    function pR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function g0() {
      for (var e = window, t = Hi(); t instanceof e.HTMLIFrameElement; ) {
        if (pR(t))
          e = t.contentWindow;
        else
          return t;
        t = Hi(e.document);
      }
      return t;
    }
    function Ey(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function vR() {
      var e = g0();
      return {
        focusedElem: e,
        selectionRange: Ey(e) ? mR(e) : null
      };
    }
    function hR(e) {
      var t = g0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && dR(a)) {
        i !== null && Ey(a) && yR(a, i);
        for (var o = [], s = a; s = s.parentNode; )
          s.nodeType === Xr && o.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < o.length; f++) {
          var p = o[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function mR(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Mt(e), t || {
        start: 0,
        end: 0
      };
    }
    function yR(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Sy(e, t);
    }
    var gR = qn && "documentMode" in document && document.documentMode <= 11;
    function SR() {
      Yt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Sf = null, Cy = null, Xd = null, xy = !1;
    function ER(e) {
      if ("selectionStart" in e && Ey(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function CR(e) {
      return e.window === e ? e.document : e.nodeType === Ii ? e : e.ownerDocument;
    }
    function S0(e, t, a) {
      var i = CR(a);
      if (!(xy || Sf == null || Sf !== Hi(i))) {
        var o = ER(Sf);
        if (!Xd || !Ae(Xd, o)) {
          Xd = o;
          var s = yh(Cy, "onSelect");
          if (s.length > 0) {
            var f = new xa("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Sf;
          }
        }
      }
    }
    function xR(e, t, a, i, o, s, f) {
      var p = a ? Tf(a) : window;
      switch (t) {
        case "focusin":
          (ph(p) || p.contentEditable === "true") && (Sf = p, Cy = a, Xd = null);
          break;
        case "focusout":
          Sf = null, Cy = null, Xd = null;
          break;
        case "mousedown":
          xy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          xy = !1, S0(e, i, o);
          break;
        case "selectionchange":
          if (gR)
            break;
        case "keydown":
        case "keyup":
          S0(e, i, o);
      }
    }
    function vh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Ef = {
      animationend: vh("Animation", "AnimationEnd"),
      animationiteration: vh("Animation", "AnimationIteration"),
      animationstart: vh("Animation", "AnimationStart"),
      transitionend: vh("Transition", "TransitionEnd")
    }, Ry = {}, E0 = {};
    qn && (E0 = document.createElement("div").style, "AnimationEvent" in window || (delete Ef.animationend.animation, delete Ef.animationiteration.animation, delete Ef.animationstart.animation), "TransitionEvent" in window || delete Ef.transitionend.transition);
    function hh(e) {
      if (Ry[e])
        return Ry[e];
      if (!Ef[e])
        return e;
      var t = Ef[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in E0)
          return Ry[e] = t[a];
      return e;
    }
    var C0 = hh("animationend"), x0 = hh("animationiteration"), R0 = hh("animationstart"), T0 = hh("transitionend"), b0 = /* @__PURE__ */ new Map(), w0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Tu(e, t) {
      b0.set(e, t), Yt(t, [e]);
    }
    function RR() {
      for (var e = 0; e < w0.length; e++) {
        var t = w0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Tu(a, "on" + i);
      }
      Tu(C0, "onAnimationEnd"), Tu(x0, "onAnimationIteration"), Tu(R0, "onAnimationStart"), Tu("dblclick", "onDoubleClick"), Tu("focusin", "onFocus"), Tu("focusout", "onBlur"), Tu(T0, "onTransitionEnd");
    }
    function TR(e, t, a, i, o, s, f) {
      var p = b0.get(t);
      if (p !== void 0) {
        var v = xa, y = t;
        switch (t) {
          case "keypress":
            if (Cu(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = py;
            break;
          case "focusin":
            y = "focus", v = sf;
            break;
          case "focusout":
            y = "blur", v = sf;
            break;
          case "beforeblur":
          case "afterblur":
            v = sf;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = uf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Pd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = hy;
            break;
          case C0:
          case x0:
          case R0:
            v = Bd;
            break;
          case T0:
            v = Qd;
            break;
          case "scroll":
            v = th;
            break;
          case "wheel":
            v = Nl;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = cy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = $d;
            break;
        }
        var g = (s & to) !== 0;
        {
          var _ = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", T = kR(a, p, i.type, g, _);
          if (T.length > 0) {
            var z = new v(p, y, null, i, o);
            e.push({
              event: z,
              listeners: T
            });
          }
        }
      }
    }
    RR(), w(), gy(), SR(), sh();
    function bR(e, t, a, i, o, s, f) {
      TR(e, t, a, i, o, s);
      var p = (s & ld) === 0;
      p && (M(e, t, a, i, o), D(e, t, a, i, o), xR(e, t, a, i, o), yy(e, t, a, i, o));
    }
    var Jd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Ty = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Jd));
    function _0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, us(i, t, void 0, e), e.currentTarget = null;
    }
    function wR(e, t, a) {
      var i;
      if (a)
        for (var o = t.length - 1; o >= 0; o--) {
          var s = t[o], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          _0(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], _ = g.instance, T = g.currentTarget, z = g.listener;
          if (_ !== i && e.isPropagationStopped())
            return;
          _0(e, z, T), i = _;
        }
    }
    function k0(e, t) {
      for (var a = (t & to) !== 0, i = 0; i < e.length; i++) {
        var o = e[i], s = o.event, f = o.listeners;
        wR(s, f, a);
      }
      Yi();
    }
    function _R(e, t, a, i, o) {
      var s = mc(a), f = [];
      bR(f, e, i, a, s, t), k0(f, t);
    }
    function En(e, t) {
      Ty.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = r1(t), o = NR(e);
      i.has(o) || (D0(t, e, yi, a), i.add(o));
    }
    function by(e, t, a) {
      Ty.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= to), D0(a, e, i, t);
    }
    var mh = "_reactListening" + Math.random().toString(36).slice(2);
    function Zd(e) {
      if (!e[mh]) {
        e[mh] = !0, Rt.forEach(function(a) {
          a !== "selectionchange" && (Ty.has(a) || by(a, !1, e), by(a, !0, e));
        });
        var t = e.nodeType === Ii ? e : e.ownerDocument;
        t !== null && (t[mh] || (t[mh] = !0, by("selectionchange", !1, t)));
      }
    }
    function D0(e, t, a, i, o) {
      var s = Ea(e, t, a), f = void 0;
      os && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Su(e, t, s, f) : Vd(e, t, s) : f !== void 0 ? qi(e, t, s, f) : la(e, t, s);
    }
    function O0(e, t) {
      return e === t || e.nodeType === An && e.parentNode === t;
    }
    function wy(e, t, a, i, o) {
      var s = i;
      if (!(t & id) && !(t & yi)) {
        var f = o;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === J || v === De) {
              var y = p.stateNode.containerInfo;
              if (O0(y, f))
                break;
              if (v === De)
                for (var g = p.return; g !== null; ) {
                  var _ = g.tag;
                  if (_ === J || _ === De) {
                    var T = g.stateNode.containerInfo;
                    if (O0(T, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var z = Is(y);
                if (z === null)
                  return;
                var A = z.tag;
                if (A === ie || A === _e) {
                  p = s = z;
                  continue e;
                }
                y = y.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      wv(function() {
        return _R(e, t, a, s);
      });
    }
    function ep(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function kR(e, t, a, i, o, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var _ = y, T = _.stateNode, z = _.tag;
        if (z === ie && T !== null && (g = T, p !== null)) {
          var A = ro(y, p);
          A != null && v.push(ep(y, A, g));
        }
        if (o)
          break;
        y = y.return;
      }
      return v;
    }
    function yh(e, t) {
      for (var a = t + "Capture", i = [], o = e; o !== null; ) {
        var s = o, f = s.stateNode, p = s.tag;
        if (p === ie && f !== null) {
          var v = f, y = ro(o, a);
          y != null && i.unshift(ep(o, y, v));
          var g = ro(o, t);
          g != null && i.push(ep(o, g, v));
        }
        o = o.return;
      }
      return i;
    }
    function Cf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== ie);
      return e || null;
    }
    function DR(e, t) {
      for (var a = e, i = t, o = 0, s = a; s; s = Cf(s))
        o++;
      for (var f = 0, p = i; p; p = Cf(p))
        f++;
      for (; o - f > 0; )
        a = Cf(a), o--;
      for (; f - o > 0; )
        i = Cf(i), f--;
      for (var v = o; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Cf(a), i = Cf(i);
      }
      return null;
    }
    function N0(e, t, a, i, o) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, _ = v.tag;
        if (y !== null && y === i)
          break;
        if (_ === ie && g !== null) {
          var T = g;
          if (o) {
            var z = ro(p, s);
            z != null && f.unshift(ep(p, z, T));
          } else if (!o) {
            var A = ro(p, s);
            A != null && f.push(ep(p, A, T));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function OR(e, t, a, i, o) {
      var s = i && o ? DR(i, o) : null;
      i !== null && N0(e, t, i, s, !1), o !== null && a !== null && N0(e, a, o, s, !0);
    }
    function NR(e, t) {
      return e + "__bubble";
    }
    var Pa = !1, tp = "dangerouslySetInnerHTML", gh = "suppressContentEditableWarning", bu = "suppressHydrationWarning", M0 = "autoFocus", Ps = "children", Bs = "style", Sh = "__html", _y, Eh, np, L0, Ch, z0, U0;
    _y = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Eh = function(e, t) {
      Ev(e, t), Zo(e, t), bv(e, t, {
        registrationNameDependencies: Ge,
        possibleRegistrationNames: Tt
      });
    }, z0 = qn && !document.documentMode, np = function(e, t, a) {
      if (!Pa) {
        var i = xh(a), o = xh(t);
        o !== i && (Pa = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(o), JSON.stringify(i)));
      }
    }, L0 = function(e) {
      if (!Pa) {
        Pa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, Ch = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, U0 = function(e, t) {
      var a = e.namespaceURI === Ja ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var MR = /\r\n?/g, LR = /\u0000|\uFFFD/g;
    function xh(e) {
      In(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(MR, `
`).replace(LR, "");
    }
    function Rh(e, t, a, i) {
      var o = xh(t), s = xh(e);
      if (s !== o && (i && (Pa || (Pa = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, o))), a && Y))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function A0(e) {
      return e.nodeType === Ii ? e : e.ownerDocument;
    }
    function zR() {
    }
    function Th(e) {
      e.onclick = zR;
    }
    function UR(e, t, a, i, o) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Bs)
            f && Object.freeze(f), hv(t, f);
          else if (s === tp) {
            var p = f ? f[Sh] : void 0;
            p != null && rv(t, p);
          } else if (s === Ps)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && pl(t, f);
            } else typeof f == "number" && pl(t, "" + f);
          else s === gh || s === bu || s === M0 || (Ge.hasOwnProperty(s) ? f != null && (typeof f != "function" && Ch(s, f), s === "onScroll" && En("scroll", t)) : f != null && ha(t, s, f, o));
        }
    }
    function AR(e, t, a, i) {
      for (var o = 0; o < t.length; o += 2) {
        var s = t[o], f = t[o + 1];
        s === Bs ? hv(e, f) : s === tp ? rv(e, f) : s === Ps ? pl(e, f) : ha(e, s, f, i);
      }
    }
    function jR(e, t, a, i) {
      var o, s = A0(a), f, p = i;
      if (p === Ja && (p = Zf(e)), p === Ja) {
        if (o = vl(e, t), !o && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Ja && !o && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !ir.call(_y, e) && (_y[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function FR(e, t) {
      return A0(t).createTextNode(e);
    }
    function HR(e, t, a, i) {
      var o = vl(t, a);
      Eh(t, a);
      var s;
      switch (t) {
        case "dialog":
          En("cancel", e), En("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          En("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Jd.length; f++)
            En(Jd[f], e);
          s = a;
          break;
        case "source":
          En("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          En("error", e), En("load", e), s = a;
          break;
        case "details":
          En("toggle", e), s = a;
          break;
        case "input":
          Qo(e, a), s = La(e, a), En("invalid", e);
          break;
        case "option":
          Vt(e, a), s = a;
          break;
        case "select":
          qu(e, a), s = eo(e, a), En("invalid", e);
          break;
        case "textarea":
          ev(e, a), s = cc(e, a), En("invalid", e);
          break;
        default:
          s = a;
      }
      switch (vc(t, s), UR(t, e, i, s, o), t) {
        case "input":
          Ma(e), L(e, a, !1);
          break;
        case "textarea":
          Ma(e), nv(e);
          break;
        case "option":
          Kt(e, a);
          break;
        case "select":
          Kf(e, a);
          break;
        default:
          typeof s.onClick == "function" && Th(e);
          break;
      }
    }
    function VR(e, t, a, i, o) {
      Eh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = La(e, a), p = La(e, i), s = [];
          break;
        case "select":
          f = eo(e, a), p = eo(e, i), s = [];
          break;
        case "textarea":
          f = cc(e, a), p = cc(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && Th(e);
          break;
      }
      vc(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Bs) {
            var _ = f[v];
            for (y in _)
              _.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === tp || v === Ps || v === gh || v === bu || v === M0 || (Ge.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var T = p[v], z = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || T === z || T == null && z == null))
          if (v === Bs)
            if (T && Object.freeze(T), z) {
              for (y in z)
                z.hasOwnProperty(y) && (!T || !T.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in T)
                T.hasOwnProperty(y) && z[y] !== T[y] && (g || (g = {}), g[y] = T[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = T;
          else if (v === tp) {
            var A = T ? T[Sh] : void 0, F = z ? z[Sh] : void 0;
            A != null && F !== A && (s = s || []).push(v, A);
          } else v === Ps ? (typeof T == "string" || typeof T == "number") && (s = s || []).push(v, "" + T) : v === gh || v === bu || (Ge.hasOwnProperty(v) ? (T != null && (typeof T != "function" && Ch(v, T), v === "onScroll" && En("scroll", e)), !s && z !== T && (s = [])) : (s = s || []).push(v, T));
      }
      return g && (Za(g, p[Bs]), (s = s || []).push(Bs, g)), s;
    }
    function PR(e, t, a, i, o) {
      a === "input" && o.type === "radio" && o.name != null && h(e, o);
      var s = vl(a, i), f = vl(a, o);
      switch (AR(e, t, s, f), a) {
        case "input":
          C(e, o);
          break;
        case "textarea":
          tv(e, o);
          break;
        case "select":
          sc(e, o);
          break;
      }
    }
    function BR(e) {
      {
        var t = e.toLowerCase();
        return Ko.hasOwnProperty(t) && Ko[t] || null;
      }
    }
    function IR(e, t, a, i, o, s, f) {
      var p, v;
      switch (p = vl(t, a), Eh(t, a), t) {
        case "dialog":
          En("cancel", e), En("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          En("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Jd.length; y++)
            En(Jd[y], e);
          break;
        case "source":
          En("error", e);
          break;
        case "img":
        case "image":
        case "link":
          En("error", e), En("load", e);
          break;
        case "details":
          En("toggle", e);
          break;
        case "input":
          Qo(e, a), En("invalid", e);
          break;
        case "option":
          Vt(e, a);
          break;
        case "select":
          qu(e, a), En("invalid", e);
          break;
        case "textarea":
          ev(e, a), En("invalid", e);
          break;
      }
      vc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, _ = 0; _ < g.length; _++) {
          var T = g[_].name.toLowerCase();
          switch (T) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[_].name);
          }
        }
      }
      var z = null;
      for (var A in a)
        if (a.hasOwnProperty(A)) {
          var F = a[A];
          if (A === Ps)
            typeof F == "string" ? e.textContent !== F && (a[bu] !== !0 && Rh(e.textContent, F, s, f), z = [Ps, F]) : typeof F == "number" && e.textContent !== "" + F && (a[bu] !== !0 && Rh(e.textContent, F, s, f), z = [Ps, "" + F]);
          else if (Ge.hasOwnProperty(A))
            F != null && (typeof F != "function" && Ch(A, F), A === "onScroll" && En("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var ce = void 0, He = ln(A);
            if (a[bu] !== !0) {
              if (!(A === gh || A === bu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              A === "value" || A === "checked" || A === "selected")) {
                if (A === tp) {
                  var Oe = e.innerHTML, Ot = F ? F[Sh] : void 0;
                  if (Ot != null) {
                    var Ct = U0(e, Ot);
                    Ct !== Oe && np(A, Oe, Ct);
                  }
                } else if (A === Bs) {
                  if (v.delete(A), z0) {
                    var O = ey(F);
                    ce = e.getAttribute("style"), O !== ce && np(A, ce, O);
                  }
                } else if (p && !B)
                  v.delete(A.toLowerCase()), ce = si(e, A, F), F !== ce && np(A, ce, F);
                else if (!sn(A, He, p) && !Jn(A, F, He, p)) {
                  var H = !1;
                  if (He !== null)
                    v.delete(He.attributeName), ce = Wl(e, A, F, He);
                  else {
                    var N = i;
                    if (N === Ja && (N = Zf(t)), N === Ja)
                      v.delete(A.toLowerCase());
                    else {
                      var K = BR(A);
                      K !== null && K !== A && (H = !0, v.delete(K)), v.delete(A);
                    }
                    ce = si(e, A, F);
                  }
                  var ye = B;
                  !ye && F !== ce && !H && np(A, ce, F);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[bu] !== !0 && L0(v), t) {
        case "input":
          Ma(e), L(e, a, !0);
          break;
        case "textarea":
          Ma(e), nv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Th(e);
          break;
      }
      return z;
    }
    function YR(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function ky(e, t) {
      {
        if (Pa)
          return;
        Pa = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Dy(e, t) {
      {
        if (Pa)
          return;
        Pa = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Oy(e, t, a) {
      {
        if (Pa)
          return;
        Pa = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Ny(e, t) {
      {
        if (t === "" || Pa)
          return;
        Pa = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function $R(e, t, a) {
      switch (t) {
        case "input":
          j(e, a);
          return;
        case "textarea":
          Wm(e, a);
          return;
        case "select":
          Xf(e, a);
          return;
      }
    }
    var rp = function() {
    }, ap = function() {
    };
    {
      var QR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], j0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], WR = j0.concat(["button"]), GR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], F0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      ap = function(e, t) {
        var a = nt({}, e || F0), i = {
          tag: t
        };
        return j0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), WR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), QR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var qR = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return GR.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, KR = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, H0 = {};
      rp = function(e, t, a) {
        a = a || F0;
        var i = a.current, o = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = qR(e, o) ? null : i, f = s ? null : KR(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!H0[y]) {
            H0[y] = !0;
            var g = e, _ = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", _ = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var T = "";
              v === "table" && e === "tr" && (T += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, _, T);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var bh = "suppressHydrationWarning", wh = "$", _h = "/$", ip = "$?", lp = "$!", XR = "style", My = null, Ly = null;
    function JR(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Ii:
        case Ku: {
          t = i === Ii ? "#document" : "#fragment";
          var o = e.documentElement;
          a = o ? o.namespaceURI : fc(null, "");
          break;
        }
        default: {
          var s = i === An ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = fc(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = ap(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function ZR(e, t, a) {
      {
        var i = e, o = fc(i.namespace, t), s = ap(i.ancestorInfo, t);
        return {
          namespace: o,
          ancestorInfo: s
        };
      }
    }
    function Ek(e) {
      return e;
    }
    function eT(e) {
      My = dr(), Ly = vR();
      var t = null;
      return Dn(!1), t;
    }
    function tT(e) {
      hR(Ly), Dn(My), My = null, Ly = null;
    }
    function nT(e, t, a, i, o) {
      var s;
      {
        var f = i;
        if (rp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = ap(f.ancestorInfo, e);
          rp(null, p, v);
        }
        s = f.namespace;
      }
      var y = jR(e, t, a, s);
      return sp(o, y), Py(y, t), y;
    }
    function rT(e, t) {
      e.appendChild(t);
    }
    function aT(e, t, a, i, o) {
      switch (HR(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function iT(e, t, a, i, o, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = ap(f.ancestorInfo, t);
          rp(null, p, v);
        }
      }
      return VR(e, t, a, i);
    }
    function zy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function lT(e, t, a, i) {
      {
        var o = a;
        rp(null, e, o.ancestorInfo);
      }
      var s = FR(e, t);
      return sp(i, s), s;
    }
    function oT() {
      var e = window.event;
      return e === void 0 ? cr : gu(e.type);
    }
    var Uy = typeof setTimeout == "function" ? setTimeout : void 0, uT = typeof clearTimeout == "function" ? clearTimeout : void 0, Ay = -1, V0 = typeof Promise == "function" ? Promise : void 0, sT = typeof queueMicrotask == "function" ? queueMicrotask : typeof V0 < "u" ? function(e) {
      return V0.resolve(null).then(e).catch(cT);
    } : Uy;
    function cT(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function fT(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function dT(e, t, a, i, o, s) {
      PR(e, t, a, i, o), Py(e, o);
    }
    function P0(e) {
      pl(e, "");
    }
    function pT(e, t, a) {
      e.nodeValue = a;
    }
    function vT(e, t) {
      e.appendChild(t);
    }
    function hT(e, t) {
      var a;
      e.nodeType === An ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Th(a);
    }
    function mT(e, t, a) {
      e.insertBefore(t, a);
    }
    function yT(e, t, a) {
      e.nodeType === An ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function gT(e, t) {
      e.removeChild(t);
    }
    function ST(e, t) {
      e.nodeType === An ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function jy(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === An) {
          var s = o.data;
          if (s === _h)
            if (i === 0) {
              e.removeChild(o), Dr(t);
              return;
            } else
              i--;
          else (s === wh || s === ip || s === lp) && i++;
        }
        a = o;
      } while (a);
      Dr(t);
    }
    function ET(e, t) {
      e.nodeType === An ? jy(e.parentNode, t) : e.nodeType === Xr && jy(e, t), Dr(e);
    }
    function CT(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function xT(e) {
      e.nodeValue = "";
    }
    function RT(e, t) {
      e = e;
      var a = t[XR], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = pc("display", i);
    }
    function TT(e, t) {
      e.nodeValue = t;
    }
    function bT(e) {
      e.nodeType === Xr ? e.textContent = "" : e.nodeType === Ii && e.documentElement && e.removeChild(e.documentElement);
    }
    function wT(e, t, a) {
      return e.nodeType !== Xr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function _T(e, t) {
      return t === "" || e.nodeType !== Bi ? null : e;
    }
    function kT(e) {
      return e.nodeType !== An ? null : e;
    }
    function B0(e) {
      return e.data === ip;
    }
    function Fy(e) {
      return e.data === lp;
    }
    function DT(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, o;
      return t && (a = t.dgst, i = t.msg, o = t.stck), {
        message: i,
        digest: a,
        stack: o
      };
    }
    function OT(e, t) {
      e._reactRetry = t;
    }
    function kh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Xr || t === Bi)
          break;
        if (t === An) {
          var a = e.data;
          if (a === wh || a === lp || a === ip)
            break;
          if (a === _h)
            return null;
        }
      }
      return e;
    }
    function op(e) {
      return kh(e.nextSibling);
    }
    function NT(e) {
      return kh(e.firstChild);
    }
    function MT(e) {
      return kh(e.firstChild);
    }
    function LT(e) {
      return kh(e.nextSibling);
    }
    function zT(e, t, a, i, o, s, f) {
      sp(s, e), Py(e, a);
      var p;
      {
        var v = o;
        p = v.namespace;
      }
      var y = (s.mode & mt) !== ze;
      return IR(e, t, a, p, i, y, f);
    }
    function UT(e, t, a, i) {
      return sp(a, e), a.mode & mt, YR(e, t);
    }
    function AT(e, t) {
      sp(t, e);
    }
    function jT(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === An) {
          var i = t.data;
          if (i === _h) {
            if (a === 0)
              return op(t);
            a--;
          } else (i === wh || i === lp || i === ip) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function I0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === An) {
          var i = t.data;
          if (i === wh || i === lp || i === ip) {
            if (a === 0)
              return t;
            a--;
          } else i === _h && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function FT(e) {
      Dr(e);
    }
    function HT(e) {
      Dr(e);
    }
    function VT(e) {
      return e !== "head" && e !== "body";
    }
    function PT(e, t, a, i) {
      var o = !0;
      Rh(t.nodeValue, a, i, o);
    }
    function BT(e, t, a, i, o, s) {
      if (t[bh] !== !0) {
        var f = !0;
        Rh(i.nodeValue, o, s, f);
      }
    }
    function IT(e, t) {
      t.nodeType === Xr ? ky(e, t) : t.nodeType === An || Dy(e, t);
    }
    function YT(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Xr ? ky(a, t) : t.nodeType === An || Dy(a, t));
      }
    }
    function $T(e, t, a, i, o) {
      (o || t[bh] !== !0) && (i.nodeType === Xr ? ky(a, i) : i.nodeType === An || Dy(a, i));
    }
    function QT(e, t, a) {
      Oy(e, t);
    }
    function WT(e, t) {
      Ny(e, t);
    }
    function GT(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Oy(i, t);
      }
    }
    function qT(e, t) {
      {
        var a = e.parentNode;
        a !== null && Ny(a, t);
      }
    }
    function KT(e, t, a, i, o, s) {
      (s || t[bh] !== !0) && Oy(a, i);
    }
    function XT(e, t, a, i, o) {
      (o || t[bh] !== !0) && Ny(a, i);
    }
    function JT(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function ZT(e) {
      Zd(e);
    }
    var xf = Math.random().toString(36).slice(2), Rf = "__reactFiber$" + xf, Hy = "__reactProps$" + xf, up = "__reactContainer$" + xf, Vy = "__reactEvents$" + xf, e1 = "__reactListeners$" + xf, t1 = "__reactHandles$" + xf;
    function n1(e) {
      delete e[Rf], delete e[Hy], delete e[Vy], delete e[e1], delete e[t1];
    }
    function sp(e, t) {
      t[Rf] = e;
    }
    function Dh(e, t) {
      t[up] = e;
    }
    function Y0(e) {
      e[up] = null;
    }
    function cp(e) {
      return !!e[up];
    }
    function Is(e) {
      var t = e[Rf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[up] || a[Rf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var o = I0(e); o !== null; ) {
              var s = o[Rf];
              if (s)
                return s;
              o = I0(o);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function wu(e) {
      var t = e[Rf] || e[up];
      return t && (t.tag === ie || t.tag === _e || t.tag === ge || t.tag === J) ? t : null;
    }
    function Tf(e) {
      if (e.tag === ie || e.tag === _e)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Oh(e) {
      return e[Hy] || null;
    }
    function Py(e, t) {
      e[Hy] = t;
    }
    function r1(e) {
      var t = e[Vy];
      return t === void 0 && (t = e[Vy] = /* @__PURE__ */ new Set()), t;
    }
    var $0 = {}, Q0 = re.ReactDebugCurrentFrame;
    function Nh(e) {
      if (e) {
        var t = e._owner, a = Yu(e.type, e._source, t ? t.type : null);
        Q0.setExtraStackFrame(a);
      } else
        Q0.setExtraStackFrame(null);
    }
    function Ki(e, t, a, i, o) {
      {
        var s = Function.call.bind(ir);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (Nh(o), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Nh(null)), p instanceof Error && !(p.message in $0) && ($0[p.message] = !0, Nh(o), S("Failed %s type: %s", a, p.message), Nh(null));
          }
      }
    }
    var By = [], Mh;
    Mh = [];
    var _o = -1;
    function _u(e) {
      return {
        current: e
      };
    }
    function oa(e, t) {
      if (_o < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== Mh[_o] && S("Unexpected Fiber popped."), e.current = By[_o], By[_o] = null, Mh[_o] = null, _o--;
    }
    function ua(e, t, a) {
      _o++, By[_o] = e.current, Mh[_o] = a, e.current = t;
    }
    var Iy;
    Iy = {};
    var li = {};
    Object.freeze(li);
    var ko = _u(li), Ul = _u(!1), Yy = li;
    function bf(e, t, a) {
      return a && Al(t) ? Yy : ko.current;
    }
    function W0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function wf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return li;
        var o = e.stateNode;
        if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
          return o.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = qe(e) || "Unknown";
          Ki(i, s, "context", p);
        }
        return o && W0(e, t, s), s;
      }
    }
    function Lh() {
      return Ul.current;
    }
    function Al(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function zh(e) {
      oa(Ul, e), oa(ko, e);
    }
    function $y(e) {
      oa(Ul, e), oa(ko, e);
    }
    function G0(e, t, a) {
      {
        if (ko.current !== li)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ua(ko, t, e), ua(Ul, a, e);
      }
    }
    function q0(e, t, a) {
      {
        var i = e.stateNode, o = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = qe(e) || "Unknown";
            Iy[s] || (Iy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in o))
            throw new Error((qe(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = qe(e) || "Unknown";
          Ki(o, f, "child context", v);
        }
        return nt({}, a, f);
      }
    }
    function Uh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || li;
        return Yy = ko.current, ua(ko, a, e), ua(Ul, Ul.current, e), !0;
      }
    }
    function K0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var o = q0(e, t, Yy);
          i.__reactInternalMemoizedMergedChildContext = o, oa(Ul, e), oa(ko, e), ua(ko, o, e), ua(Ul, a, e);
        } else
          oa(Ul, e), ua(Ul, a, e);
      }
    }
    function a1(e) {
      {
        if (!Ov(e) || e.tag !== ee)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case J:
              return t.stateNode.context;
            case ee: {
              var a = t.type;
              if (Al(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var ku = 0, Ah = 1, Do = null, Qy = !1, Wy = !1;
    function X0(e) {
      Do === null ? Do = [e] : Do.push(e);
    }
    function i1(e) {
      Qy = !0, X0(e);
    }
    function J0() {
      Qy && Du();
    }
    function Du() {
      if (!Wy && Do !== null) {
        Wy = !0;
        var e = 0, t = Sa();
        try {
          var a = !0, i = Do;
          for ($n(ia); e < i.length; e++) {
            var o = i[e];
            do
              o = o(a);
            while (o !== null);
          }
          Do = null, Qy = !1;
        } catch (s) {
          throw Do !== null && (Do = Do.slice(e + 1)), vd(Qi, Du), s;
        } finally {
          $n(t), Wy = !1;
        }
      }
      return null;
    }
    var _f = [], kf = 0, jh = null, Fh = 0, Ti = [], bi = 0, Ys = null, Oo = 1, No = "";
    function l1(e) {
      return Qs(), (e.flags & cs) !== Le;
    }
    function o1(e) {
      return Qs(), Fh;
    }
    function u1() {
      var e = No, t = Oo, a = t & ~s1(t);
      return a.toString(32) + e;
    }
    function $s(e, t) {
      Qs(), _f[kf++] = Fh, _f[kf++] = jh, jh = e, Fh = t;
    }
    function Z0(e, t, a) {
      Qs(), Ti[bi++] = Oo, Ti[bi++] = No, Ti[bi++] = Ys, Ys = e;
      var i = Oo, o = No, s = Hh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Hh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, _ = (f & g).toString(32), T = f >> y, z = s - y, A = Hh(t) + z, F = p << z, ce = F | T, He = _ + o;
        Oo = 1 << A | ce, No = He;
      } else {
        var Oe = p << s, Ot = Oe | f, Ct = o;
        Oo = 1 << v | Ot, No = Ct;
      }
    }
    function Gy(e) {
      Qs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        $s(e, a), Z0(e, a, i);
      }
    }
    function Hh(e) {
      return 32 - Yn(e);
    }
    function s1(e) {
      return 1 << Hh(e) - 1;
    }
    function qy(e) {
      for (; e === jh; )
        jh = _f[--kf], _f[kf] = null, Fh = _f[--kf], _f[kf] = null;
      for (; e === Ys; )
        Ys = Ti[--bi], Ti[bi] = null, No = Ti[--bi], Ti[bi] = null, Oo = Ti[--bi], Ti[bi] = null;
    }
    function c1() {
      return Qs(), Ys !== null ? {
        id: Oo,
        overflow: No
      } : null;
    }
    function f1(e, t) {
      Qs(), Ti[bi++] = Oo, Ti[bi++] = No, Ti[bi++] = Ys, Oo = t.id, No = t.overflow, Ys = e;
    }
    function Qs() {
      Fr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var jr = null, wi = null, Xi = !1, Ws = !1, Ou = null;
    function d1() {
      Xi && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function eE() {
      Ws = !0;
    }
    function p1() {
      return Ws;
    }
    function v1(e) {
      var t = e.stateNode.containerInfo;
      return wi = MT(t), jr = e, Xi = !0, Ou = null, Ws = !1, !0;
    }
    function h1(e, t, a) {
      return wi = LT(t), jr = e, Xi = !0, Ou = null, Ws = !1, a !== null && f1(e, a), !0;
    }
    function tE(e, t) {
      switch (e.tag) {
        case J: {
          IT(e.stateNode.containerInfo, t);
          break;
        }
        case ie: {
          var a = (e.mode & mt) !== ze;
          $T(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case ge: {
          var i = e.memoizedState;
          i.dehydrated !== null && YT(i.dehydrated, t);
          break;
        }
      }
    }
    function nE(e, t) {
      tE(e, t);
      var a = S_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Jr) : i.push(a);
    }
    function Ky(e, t) {
      {
        if (Ws)
          return;
        switch (e.tag) {
          case J: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ie:
                var i = t.type;
                t.pendingProps, QT(a, i);
                break;
              case _e:
                var o = t.pendingProps;
                WT(a, o);
                break;
            }
            break;
          }
          case ie: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case ie: {
                var v = t.type, y = t.pendingProps, g = (e.mode & mt) !== ze;
                KT(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case _e: {
                var _ = t.pendingProps, T = (e.mode & mt) !== ze;
                XT(
                  s,
                  f,
                  p,
                  _,
                  // TODO: Delete this argument when we remove the legacy root API.
                  T
                );
                break;
              }
            }
            break;
          }
          case ge: {
            var z = e.memoizedState, A = z.dehydrated;
            if (A !== null) switch (t.tag) {
              case ie:
                var F = t.type;
                t.pendingProps, GT(A, F);
                break;
              case _e:
                var ce = t.pendingProps;
                qT(A, ce);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function rE(e, t) {
      t.flags = t.flags & ~Rn | xn, Ky(e, t);
    }
    function aE(e, t) {
      switch (e.tag) {
        case ie: {
          var a = e.type;
          e.pendingProps;
          var i = wT(t, a);
          return i !== null ? (e.stateNode = i, jr = e, wi = NT(i), !0) : !1;
        }
        case _e: {
          var o = e.pendingProps, s = _T(t, o);
          return s !== null ? (e.stateNode = s, jr = e, wi = null, !0) : !1;
        }
        case ge: {
          var f = kT(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: c1(),
              retryLane: na
            };
            e.memoizedState = p;
            var v = E_(f);
            return v.return = e, e.child = v, jr = e, wi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Xy(e) {
      return (e.mode & mt) !== ze && (e.flags & pt) === Le;
    }
    function Jy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Zy(e) {
      if (Xi) {
        var t = wi;
        if (!t) {
          Xy(e) && (Ky(jr, e), Jy()), rE(jr, e), Xi = !1, jr = e;
          return;
        }
        var a = t;
        if (!aE(e, t)) {
          Xy(e) && (Ky(jr, e), Jy()), t = op(a);
          var i = jr;
          if (!t || !aE(e, t)) {
            rE(jr, e), Xi = !1, jr = e;
            return;
          }
          nE(i, a);
        }
      }
    }
    function m1(e, t, a) {
      var i = e.stateNode, o = !Ws, s = zT(i, e.type, e.memoizedProps, t, a, e, o);
      return e.updateQueue = s, s !== null;
    }
    function y1(e) {
      var t = e.stateNode, a = e.memoizedProps, i = UT(t, a, e);
      if (i) {
        var o = jr;
        if (o !== null)
          switch (o.tag) {
            case J: {
              var s = o.stateNode.containerInfo, f = (o.mode & mt) !== ze;
              PT(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case ie: {
              var p = o.type, v = o.memoizedProps, y = o.stateNode, g = (o.mode & mt) !== ze;
              BT(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function g1(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      AT(a, e);
    }
    function S1(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return jT(a);
    }
    function iE(e) {
      for (var t = e.return; t !== null && t.tag !== ie && t.tag !== J && t.tag !== ge; )
        t = t.return;
      jr = t;
    }
    function Vh(e) {
      if (e !== jr)
        return !1;
      if (!Xi)
        return iE(e), Xi = !0, !1;
      if (e.tag !== J && (e.tag !== ie || VT(e.type) && !zy(e.type, e.memoizedProps))) {
        var t = wi;
        if (t)
          if (Xy(e))
            lE(e), Jy();
          else
            for (; t; )
              nE(e, t), t = op(t);
      }
      return iE(e), e.tag === ge ? wi = S1(e) : wi = jr ? op(e.stateNode) : null, !0;
    }
    function E1() {
      return Xi && wi !== null;
    }
    function lE(e) {
      for (var t = wi; t; )
        tE(e, t), t = op(t);
    }
    function Df() {
      jr = null, wi = null, Xi = !1, Ws = !1;
    }
    function oE() {
      Ou !== null && (ex(Ou), Ou = null);
    }
    function Fr() {
      return Xi;
    }
    function eg(e) {
      Ou === null ? Ou = [e] : Ou.push(e);
    }
    var C1 = re.ReactCurrentBatchConfig, x1 = null;
    function R1() {
      return C1.transition;
    }
    var Ji = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var T1 = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & rt && (t = a), a = a.return;
        return t;
      }, Gs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, fp = [], dp = [], pp = [], vp = [], hp = [], mp = [], qs = /* @__PURE__ */ new Set();
      Ji.recordUnsafeLifecycleWarnings = function(e, t) {
        qs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && fp.push(e), e.mode & rt && typeof t.UNSAFE_componentWillMount == "function" && dp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && pp.push(e), e.mode & rt && typeof t.UNSAFE_componentWillReceiveProps == "function" && vp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && hp.push(e), e.mode & rt && typeof t.UNSAFE_componentWillUpdate == "function" && mp.push(e));
      }, Ji.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        fp.length > 0 && (fp.forEach(function(T) {
          e.add(qe(T) || "Component"), qs.add(T.type);
        }), fp = []);
        var t = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(T) {
          t.add(qe(T) || "Component"), qs.add(T.type);
        }), dp = []);
        var a = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(T) {
          a.add(qe(T) || "Component"), qs.add(T.type);
        }), pp = []);
        var i = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(T) {
          i.add(qe(T) || "Component"), qs.add(T.type);
        }), vp = []);
        var o = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(T) {
          o.add(qe(T) || "Component"), qs.add(T.type);
        }), hp = []);
        var s = /* @__PURE__ */ new Set();
        if (mp.length > 0 && (mp.forEach(function(T) {
          s.add(qe(T) || "Component"), qs.add(T.type);
        }), mp = []), t.size > 0) {
          var f = Gs(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Gs(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Gs(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Gs(e);
          Pe(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Gs(a);
          Pe(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (o.size > 0) {
          var _ = Gs(o);
          Pe(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, _);
        }
      };
      var Ph = /* @__PURE__ */ new Map(), uE = /* @__PURE__ */ new Set();
      Ji.recordLegacyContextWarning = function(e, t) {
        var a = T1(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!uE.has(e.type)) {
          var i = Ph.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Ph.set(a, i)), i.push(e));
        }
      }, Ji.flushLegacyContextWarning = function() {
        Ph.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(qe(s) || "Component"), uE.add(s.type);
            });
            var o = Gs(i);
            try {
              qt(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, o);
            } finally {
              Cn();
            }
          }
        });
      }, Ji.discardPendingWarnings = function() {
        fp = [], dp = [], pp = [], vp = [], hp = [], mp = [], Ph = /* @__PURE__ */ new Map();
      };
    }
    var tg, ng, rg, ag, ig, sE = function(e, t) {
    };
    tg = !1, ng = !1, rg = {}, ag = {}, ig = {}, sE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = qe(t) || "Component";
        ag[a] || (ag[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function b1(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function yp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & rt || Ce) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== ee) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !b1(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var o = qe(e) || "Component";
          rg[o] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', o, i), rg[o] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== ee)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Ga(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(_) {
            var T = v.refs;
            _ === null ? delete T[y] : T[y] = _;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Bh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Ih(e) {
      {
        var t = qe(e) || "Component";
        if (ig[t])
          return;
        ig[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function cE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function fE(e) {
      function t(O, H) {
        if (e) {
          var N = O.deletions;
          N === null ? (O.deletions = [H], O.flags |= Jr) : N.push(H);
        }
      }
      function a(O, H) {
        if (!e)
          return null;
        for (var N = H; N !== null; )
          t(O, N), N = N.sibling;
        return null;
      }
      function i(O, H) {
        for (var N = /* @__PURE__ */ new Map(), K = H; K !== null; )
          K.key !== null ? N.set(K.key, K) : N.set(K.index, K), K = K.sibling;
        return N;
      }
      function o(O, H) {
        var N = ac(O, H);
        return N.index = 0, N.sibling = null, N;
      }
      function s(O, H, N) {
        if (O.index = N, !e)
          return O.flags |= cs, H;
        var K = O.alternate;
        if (K !== null) {
          var ye = K.index;
          return ye < H ? (O.flags |= xn, H) : ye;
        } else
          return O.flags |= xn, H;
      }
      function f(O) {
        return e && O.alternate === null && (O.flags |= xn), O;
      }
      function p(O, H, N, K) {
        if (H === null || H.tag !== _e) {
          var ye = e0(N, O.mode, K);
          return ye.return = O, ye;
        } else {
          var pe = o(H, N);
          return pe.return = O, pe;
        }
      }
      function v(O, H, N, K) {
        var ye = N.type;
        if (ye === Wr)
          return g(O, H, N.props.children, K, N.key);
        if (H !== null && (H.elementType === ye || // Keep this check inline so it only runs on the false path:
        mx(H, N) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ye == "object" && ye !== null && ye.$$typeof === Je && cE(ye) === H.type)) {
          var pe = o(H, N.props);
          return pe.ref = yp(O, H, N), pe.return = O, pe._debugSource = N._source, pe._debugOwner = N._owner, pe;
        }
        var We = ZS(N, O.mode, K);
        return We.ref = yp(O, H, N), We.return = O, We;
      }
      function y(O, H, N, K) {
        if (H === null || H.tag !== De || H.stateNode.containerInfo !== N.containerInfo || H.stateNode.implementation !== N.implementation) {
          var ye = t0(N, O.mode, K);
          return ye.return = O, ye;
        } else {
          var pe = o(H, N.children || []);
          return pe.return = O, pe;
        }
      }
      function g(O, H, N, K, ye) {
        if (H === null || H.tag !== Xe) {
          var pe = Pu(N, O.mode, K, ye);
          return pe.return = O, pe;
        } else {
          var We = o(H, N);
          return We.return = O, We;
        }
      }
      function _(O, H, N) {
        if (typeof H == "string" && H !== "" || typeof H == "number") {
          var K = e0("" + H, O.mode, N);
          return K.return = O, K;
        }
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case or: {
              var ye = ZS(H, O.mode, N);
              return ye.ref = yp(O, null, H), ye.return = O, ye;
            }
            case ma: {
              var pe = t0(H, O.mode, N);
              return pe.return = O, pe;
            }
            case Je: {
              var We = H._payload, tt = H._init;
              return _(O, tt(We), N);
            }
          }
          if (at(H) || hn(H)) {
            var en = Pu(H, O.mode, N, null);
            return en.return = O, en;
          }
          Bh(O, H);
        }
        return typeof H == "function" && Ih(O), null;
      }
      function T(O, H, N, K) {
        var ye = H !== null ? H.key : null;
        if (typeof N == "string" && N !== "" || typeof N == "number")
          return ye !== null ? null : p(O, H, "" + N, K);
        if (typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case or:
              return N.key === ye ? v(O, H, N, K) : null;
            case ma:
              return N.key === ye ? y(O, H, N, K) : null;
            case Je: {
              var pe = N._payload, We = N._init;
              return T(O, H, We(pe), K);
            }
          }
          if (at(N) || hn(N))
            return ye !== null ? null : g(O, H, N, K, null);
          Bh(O, N);
        }
        return typeof N == "function" && Ih(O), null;
      }
      function z(O, H, N, K, ye) {
        if (typeof K == "string" && K !== "" || typeof K == "number") {
          var pe = O.get(N) || null;
          return p(H, pe, "" + K, ye);
        }
        if (typeof K == "object" && K !== null) {
          switch (K.$$typeof) {
            case or: {
              var We = O.get(K.key === null ? N : K.key) || null;
              return v(H, We, K, ye);
            }
            case ma: {
              var tt = O.get(K.key === null ? N : K.key) || null;
              return y(H, tt, K, ye);
            }
            case Je:
              var en = K._payload, Lt = K._init;
              return z(O, H, N, Lt(en), ye);
          }
          if (at(K) || hn(K)) {
            var Gn = O.get(N) || null;
            return g(H, Gn, K, ye, null);
          }
          Bh(H, K);
        }
        return typeof K == "function" && Ih(H), null;
      }
      function A(O, H, N) {
        {
          if (typeof O != "object" || O === null)
            return H;
          switch (O.$$typeof) {
            case or:
            case ma:
              sE(O, N);
              var K = O.key;
              if (typeof K != "string")
                break;
              if (H === null) {
                H = /* @__PURE__ */ new Set(), H.add(K);
                break;
              }
              if (!H.has(K)) {
                H.add(K);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", K);
              break;
            case Je:
              var ye = O._payload, pe = O._init;
              A(pe(ye), H, N);
              break;
          }
        }
        return H;
      }
      function F(O, H, N, K) {
        for (var ye = null, pe = 0; pe < N.length; pe++) {
          var We = N[pe];
          ye = A(We, ye, O);
        }
        for (var tt = null, en = null, Lt = H, Gn = 0, zt = 0, Pn = null; Lt !== null && zt < N.length; zt++) {
          Lt.index > zt ? (Pn = Lt, Lt = null) : Pn = Lt.sibling;
          var ca = T(O, Lt, N[zt], K);
          if (ca === null) {
            Lt === null && (Lt = Pn);
            break;
          }
          e && Lt && ca.alternate === null && t(O, Lt), Gn = s(ca, Gn, zt), en === null ? tt = ca : en.sibling = ca, en = ca, Lt = Pn;
        }
        if (zt === N.length) {
          if (a(O, Lt), Fr()) {
            var $r = zt;
            $s(O, $r);
          }
          return tt;
        }
        if (Lt === null) {
          for (; zt < N.length; zt++) {
            var ui = _(O, N[zt], K);
            ui !== null && (Gn = s(ui, Gn, zt), en === null ? tt = ui : en.sibling = ui, en = ui);
          }
          if (Fr()) {
            var wa = zt;
            $s(O, wa);
          }
          return tt;
        }
        for (var _a = i(O, Lt); zt < N.length; zt++) {
          var fa = z(_a, O, zt, N[zt], K);
          fa !== null && (e && fa.alternate !== null && _a.delete(fa.key === null ? zt : fa.key), Gn = s(fa, Gn, zt), en === null ? tt = fa : en.sibling = fa, en = fa);
        }
        if (e && _a.forEach(function(Gf) {
          return t(O, Gf);
        }), Fr()) {
          var Fo = zt;
          $s(O, Fo);
        }
        return tt;
      }
      function ce(O, H, N, K) {
        var ye = hn(N);
        if (typeof ye != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          N[Symbol.toStringTag] === "Generator" && (ng || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), ng = !0), N.entries === ye && (tg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), tg = !0);
          var pe = ye.call(N);
          if (pe)
            for (var We = null, tt = pe.next(); !tt.done; tt = pe.next()) {
              var en = tt.value;
              We = A(en, We, O);
            }
        }
        var Lt = ye.call(N);
        if (Lt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Gn = null, zt = null, Pn = H, ca = 0, $r = 0, ui = null, wa = Lt.next(); Pn !== null && !wa.done; $r++, wa = Lt.next()) {
          Pn.index > $r ? (ui = Pn, Pn = null) : ui = Pn.sibling;
          var _a = T(O, Pn, wa.value, K);
          if (_a === null) {
            Pn === null && (Pn = ui);
            break;
          }
          e && Pn && _a.alternate === null && t(O, Pn), ca = s(_a, ca, $r), zt === null ? Gn = _a : zt.sibling = _a, zt = _a, Pn = ui;
        }
        if (wa.done) {
          if (a(O, Pn), Fr()) {
            var fa = $r;
            $s(O, fa);
          }
          return Gn;
        }
        if (Pn === null) {
          for (; !wa.done; $r++, wa = Lt.next()) {
            var Fo = _(O, wa.value, K);
            Fo !== null && (ca = s(Fo, ca, $r), zt === null ? Gn = Fo : zt.sibling = Fo, zt = Fo);
          }
          if (Fr()) {
            var Gf = $r;
            $s(O, Gf);
          }
          return Gn;
        }
        for (var qp = i(O, Pn); !wa.done; $r++, wa = Lt.next()) {
          var Yl = z(qp, O, $r, wa.value, K);
          Yl !== null && (e && Yl.alternate !== null && qp.delete(Yl.key === null ? $r : Yl.key), ca = s(Yl, ca, $r), zt === null ? Gn = Yl : zt.sibling = Yl, zt = Yl);
        }
        if (e && qp.forEach(function(X_) {
          return t(O, X_);
        }), Fr()) {
          var K_ = $r;
          $s(O, K_);
        }
        return Gn;
      }
      function He(O, H, N, K) {
        if (H !== null && H.tag === _e) {
          a(O, H.sibling);
          var ye = o(H, N);
          return ye.return = O, ye;
        }
        a(O, H);
        var pe = e0(N, O.mode, K);
        return pe.return = O, pe;
      }
      function Oe(O, H, N, K) {
        for (var ye = N.key, pe = H; pe !== null; ) {
          if (pe.key === ye) {
            var We = N.type;
            if (We === Wr) {
              if (pe.tag === Xe) {
                a(O, pe.sibling);
                var tt = o(pe, N.props.children);
                return tt.return = O, tt._debugSource = N._source, tt._debugOwner = N._owner, tt;
              }
            } else if (pe.elementType === We || // Keep this check inline so it only runs on the false path:
            mx(pe, N) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof We == "object" && We !== null && We.$$typeof === Je && cE(We) === pe.type) {
              a(O, pe.sibling);
              var en = o(pe, N.props);
              return en.ref = yp(O, pe, N), en.return = O, en._debugSource = N._source, en._debugOwner = N._owner, en;
            }
            a(O, pe);
            break;
          } else
            t(O, pe);
          pe = pe.sibling;
        }
        if (N.type === Wr) {
          var Lt = Pu(N.props.children, O.mode, K, N.key);
          return Lt.return = O, Lt;
        } else {
          var Gn = ZS(N, O.mode, K);
          return Gn.ref = yp(O, H, N), Gn.return = O, Gn;
        }
      }
      function Ot(O, H, N, K) {
        for (var ye = N.key, pe = H; pe !== null; ) {
          if (pe.key === ye)
            if (pe.tag === De && pe.stateNode.containerInfo === N.containerInfo && pe.stateNode.implementation === N.implementation) {
              a(O, pe.sibling);
              var We = o(pe, N.children || []);
              return We.return = O, We;
            } else {
              a(O, pe);
              break;
            }
          else
            t(O, pe);
          pe = pe.sibling;
        }
        var tt = t0(N, O.mode, K);
        return tt.return = O, tt;
      }
      function Ct(O, H, N, K) {
        var ye = typeof N == "object" && N !== null && N.type === Wr && N.key === null;
        if (ye && (N = N.props.children), typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case or:
              return f(Oe(O, H, N, K));
            case ma:
              return f(Ot(O, H, N, K));
            case Je:
              var pe = N._payload, We = N._init;
              return Ct(O, H, We(pe), K);
          }
          if (at(N))
            return F(O, H, N, K);
          if (hn(N))
            return ce(O, H, N, K);
          Bh(O, N);
        }
        return typeof N == "string" && N !== "" || typeof N == "number" ? f(He(O, H, "" + N, K)) : (typeof N == "function" && Ih(O), a(O, H));
      }
      return Ct;
    }
    var Of = fE(!0), dE = fE(!1);
    function w1(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ac(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ac(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function _1(e, t) {
      for (var a = e.child; a !== null; )
        v_(a, t), a = a.sibling;
    }
    var lg = _u(null), og;
    og = {};
    var Yh = null, Nf = null, ug = null, $h = !1;
    function Qh() {
      Yh = null, Nf = null, ug = null, $h = !1;
    }
    function pE() {
      $h = !0;
    }
    function vE() {
      $h = !1;
    }
    function hE(e, t, a) {
      ua(lg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== og && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = og;
    }
    function sg(e, t) {
      var a = lg.current;
      oa(lg, t), e._currentValue = a;
    }
    function cg(e, t, a) {
      for (var i = e; i !== null; ) {
        var o = i.alternate;
        if (mo(i.childLanes, t) ? o !== null && !mo(o.childLanes, t) && (o.childLanes = it(o.childLanes, t)) : (i.childLanes = it(i.childLanes, t), o !== null && (o.childLanes = it(o.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function k1(e, t, a) {
      D1(e, t, a);
    }
    function D1(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var o = void 0, s = i.dependencies;
        if (s !== null) {
          o = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === ee) {
                var p = nr(a), v = Mo(Wt, p);
                v.tag = Gh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, _ = g.pending;
                  _ === null ? v.next = v : (v.next = _.next, _.next = v), g.pending = v;
                }
              }
              i.lanes = it(i.lanes, a);
              var T = i.alternate;
              T !== null && (T.lanes = it(T.lanes, a)), cg(i.return, a, e), s.lanes = it(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === et)
          o = i.type === e.type ? null : i.child;
        else if (i.tag === tn) {
          var z = i.return;
          if (z === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          z.lanes = it(z.lanes, a);
          var A = z.alternate;
          A !== null && (A.lanes = it(A.lanes, a)), cg(z, a, e), o = i.sibling;
        } else
          o = i.child;
        if (o !== null)
          o.return = i;
        else
          for (o = i; o !== null; ) {
            if (o === e) {
              o = null;
              break;
            }
            var F = o.sibling;
            if (F !== null) {
              F.return = o.return, o = F;
              break;
            }
            o = o.return;
          }
        i = o;
      }
    }
    function Mf(e, t) {
      Yh = e, Nf = null, ug = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (aa(a.lanes, t) && Mp(), a.firstContext = null);
      }
    }
    function ar(e) {
      $h && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (ug !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Nf === null) {
          if (Yh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Nf = a, Yh.dependencies = {
            lanes: P,
            firstContext: a
          };
        } else
          Nf = Nf.next = a;
      }
      return t;
    }
    var Ks = null;
    function fg(e) {
      Ks === null ? Ks = [e] : Ks.push(e);
    }
    function O1() {
      if (Ks !== null) {
        for (var e = 0; e < Ks.length; e++) {
          var t = Ks[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, o = t.pending;
            if (o !== null) {
              var s = o.next;
              o.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Ks = null;
      }
    }
    function mE(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, fg(t)) : (a.next = o.next, o.next = a), t.interleaved = a, Wh(e, i);
    }
    function N1(e, t, a, i) {
      var o = t.interleaved;
      o === null ? (a.next = a, fg(t)) : (a.next = o.next, o.next = a), t.interleaved = a;
    }
    function M1(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, fg(t)) : (a.next = o.next, o.next = a), t.interleaved = a, Wh(e, i);
    }
    function Ba(e, t) {
      return Wh(e, t);
    }
    var L1 = Wh;
    function Wh(e, t) {
      e.lanes = it(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = it(a.lanes, t)), a === null && (e.flags & (xn | Rn)) !== Le && dx(e);
      for (var i = e, o = e.return; o !== null; )
        o.childLanes = it(o.childLanes, t), a = o.alternate, a !== null ? a.childLanes = it(a.childLanes, t) : (o.flags & (xn | Rn)) !== Le && dx(e), i = o, o = o.return;
      if (i.tag === J) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var yE = 0, gE = 1, Gh = 2, dg = 3, qh = !1, pg, Kh;
    pg = !1, Kh = null;
    function vg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: P
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function SE(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var o = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = o;
      }
    }
    function Mo(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: yE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Nu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var o = i.shared;
      if (Kh === o && !pg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), pg = !0), Nw()) {
        var s = o.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), o.pending = t, L1(e, a);
      } else
        return M1(e, o, t, a);
    }
    function Xh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var o = i.shared;
        if (Nd(a)) {
          var s = o.lanes;
          s = Kc(s, e.pendingLanes);
          var f = it(s, a);
          o.lanes = f, ws(e, f);
        }
      }
    }
    function hg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var o = i.updateQueue;
        if (a === o) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: o.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: o.shared,
            effects: o.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function z1(e, t, a, i, o, s) {
      switch (a.tag) {
        case gE: {
          var f = a.payload;
          if (typeof f == "function") {
            pE();
            var p = f.call(s, i, o);
            {
              if (e.mode & rt) {
                Qt(!0);
                try {
                  f.call(s, i, o);
                } finally {
                  Qt(!1);
                }
              }
              vE();
            }
            return p;
          }
          return f;
        }
        case dg:
          e.flags = e.flags & ~wr | pt;
        case yE: {
          var v = a.payload, y;
          if (typeof v == "function") {
            pE(), y = v.call(s, i, o);
            {
              if (e.mode & rt) {
                Qt(!0);
                try {
                  v.call(s, i, o);
                } finally {
                  Qt(!1);
                }
              }
              vE();
            }
          } else
            y = v;
          return y == null ? i : nt({}, i, y);
        }
        case Gh:
          return qh = !0, i;
      }
      return i;
    }
    function Jh(e, t, a, i) {
      var o = e.updateQueue;
      qh = !1, Kh = o.shared;
      var s = o.firstBaseUpdate, f = o.lastBaseUpdate, p = o.shared.pending;
      if (p !== null) {
        o.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var _ = g.updateQueue, T = _.lastBaseUpdate;
          T !== f && (T === null ? _.firstBaseUpdate = y : T.next = y, _.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var z = o.baseState, A = P, F = null, ce = null, He = null, Oe = s;
        do {
          var Ot = Oe.lane, Ct = Oe.eventTime;
          if (mo(i, Ot)) {
            if (He !== null) {
              var H = {
                eventTime: Ct,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Hn,
                tag: Oe.tag,
                payload: Oe.payload,
                callback: Oe.callback,
                next: null
              };
              He = He.next = H;
            }
            z = z1(e, o, Oe, z, t, a);
            var N = Oe.callback;
            if (N !== null && // If the update was already committed, we should not queue its
            // callback again.
            Oe.lane !== Hn) {
              e.flags |= rn;
              var K = o.effects;
              K === null ? o.effects = [Oe] : K.push(Oe);
            }
          } else {
            var O = {
              eventTime: Ct,
              lane: Ot,
              tag: Oe.tag,
              payload: Oe.payload,
              callback: Oe.callback,
              next: null
            };
            He === null ? (ce = He = O, F = z) : He = He.next = O, A = it(A, Ot);
          }
          if (Oe = Oe.next, Oe === null) {
            if (p = o.shared.pending, p === null)
              break;
            var ye = p, pe = ye.next;
            ye.next = null, Oe = pe, o.lastBaseUpdate = ye, o.shared.pending = null;
          }
        } while (!0);
        He === null && (F = z), o.baseState = F, o.firstBaseUpdate = ce, o.lastBaseUpdate = He;
        var We = o.shared.interleaved;
        if (We !== null) {
          var tt = We;
          do
            A = it(A, tt.lane), tt = tt.next;
          while (tt !== We);
        } else s === null && (o.shared.lanes = P);
        Yp(A), e.lanes = A, e.memoizedState = z;
      }
      Kh = null;
    }
    function U1(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function EE() {
      qh = !1;
    }
    function Zh() {
      return qh;
    }
    function CE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o], f = s.callback;
          f !== null && (s.callback = null, U1(f, a));
        }
    }
    var gp = {}, Mu = _u(gp), Sp = _u(gp), em = _u(gp);
    function tm(e) {
      if (e === gp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function xE() {
      var e = tm(em.current);
      return e;
    }
    function mg(e, t) {
      ua(em, t, e), ua(Sp, e, e), ua(Mu, gp, e);
      var a = JR(t);
      oa(Mu, e), ua(Mu, a, e);
    }
    function Lf(e) {
      oa(Mu, e), oa(Sp, e), oa(em, e);
    }
    function yg() {
      var e = tm(Mu.current);
      return e;
    }
    function RE(e) {
      tm(em.current);
      var t = tm(Mu.current), a = ZR(t, e.type);
      t !== a && (ua(Sp, e, e), ua(Mu, a, e));
    }
    function gg(e) {
      Sp.current === e && (oa(Mu, e), oa(Sp, e));
    }
    var A1 = 0, TE = 1, bE = 1, Ep = 2, Zi = _u(A1);
    function Sg(e, t) {
      return (e & t) !== 0;
    }
    function zf(e) {
      return e & TE;
    }
    function Eg(e, t) {
      return e & TE | t;
    }
    function j1(e, t) {
      return e | t;
    }
    function Lu(e, t) {
      ua(Zi, t, e);
    }
    function Uf(e) {
      oa(Zi, e);
    }
    function F1(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function nm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === ge) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || B0(i) || Fy(i))
              return t;
          }
        } else if (t.tag === Ht && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var o = (t.flags & pt) !== Le;
          if (o)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ia = (
      /*   */
      0
    ), pr = (
      /* */
      1
    ), jl = (
      /*  */
      2
    ), vr = (
      /*    */
      4
    ), Hr = (
      /*   */
      8
    ), Cg = [];
    function xg() {
      for (var e = 0; e < Cg.length; e++) {
        var t = Cg[e];
        t._workInProgressVersionPrimary = null;
      }
      Cg.length = 0;
    }
    function H1(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var me = re.ReactCurrentDispatcher, Cp = re.ReactCurrentBatchConfig, Rg, Af;
    Rg = /* @__PURE__ */ new Set();
    var Xs = P, Zt = null, hr = null, mr = null, rm = !1, xp = !1, Rp = 0, V1 = 0, P1 = 25, I = null, _i = null, zu = -1, Tg = !1;
    function Bt() {
      {
        var e = I;
        _i === null ? _i = [e] : _i.push(e);
      }
    }
    function le() {
      {
        var e = I;
        _i !== null && (zu++, _i[zu] !== e && B1(e));
      }
    }
    function jf(e) {
      e != null && !at(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", I, typeof e);
    }
    function B1(e) {
      {
        var t = qe(Zt);
        if (!Rg.has(t) && (Rg.add(t), _i !== null)) {
          for (var a = "", i = 30, o = 0; o <= zu; o++) {
            for (var s = _i[o], f = o === zu ? e : s, p = o + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function sa() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function bg(e, t) {
      if (Tg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", I), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, I, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!de(e[a], t[a]))
          return !1;
      return !0;
    }
    function Ff(e, t, a, i, o, s) {
      Xs = s, Zt = t, _i = e !== null ? e._debugHookTypes : null, zu = -1, Tg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = P, e !== null && e.memoizedState !== null ? me.current = WE : _i !== null ? me.current = QE : me.current = $E;
      var f = a(i, o);
      if (xp) {
        var p = 0;
        do {
          if (xp = !1, Rp = 0, p >= P1)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Tg = !1, hr = null, mr = null, t.updateQueue = null, zu = -1, me.current = GE, f = a(i, o);
        } while (xp);
      }
      me.current = mm, t._debugHookTypes = _i;
      var v = hr !== null && hr.next !== null;
      if (Xs = P, Zt = null, hr = null, mr = null, I = null, _i = null, zu = -1, e !== null && (e.flags & Fn) !== (t.flags & Fn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & mt) !== ze && S("Internal React error: Expected static flag was missing. Please notify the React team."), rm = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Hf() {
      var e = Rp !== 0;
      return Rp = 0, e;
    }
    function wE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Jt) !== ze ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = bs(e.lanes, a);
    }
    function _E() {
      if (me.current = mm, rm) {
        for (var e = Zt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        rm = !1;
      }
      Xs = P, Zt = null, hr = null, mr = null, _i = null, zu = -1, I = null, VE = !1, xp = !1, Rp = 0;
    }
    function Fl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return mr === null ? Zt.memoizedState = mr = e : mr = mr.next = e, mr;
    }
    function ki() {
      var e;
      if (hr === null) {
        var t = Zt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = hr.next;
      var a;
      if (mr === null ? a = Zt.memoizedState : a = mr.next, a !== null)
        mr = a, a = mr.next, hr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        hr = e;
        var i = {
          memoizedState: hr.memoizedState,
          baseState: hr.baseState,
          baseQueue: hr.baseQueue,
          queue: hr.queue,
          next: null
        };
        mr === null ? Zt.memoizedState = mr = i : mr = mr.next = i;
      }
      return mr;
    }
    function kE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function wg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function _g(e, t, a) {
      var i = Fl(), o;
      a !== void 0 ? o = a(t) : o = t, i.memoizedState = i.baseState = o;
      var s = {
        pending: null,
        interleaved: null,
        lanes: P,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      };
      i.queue = s;
      var f = s.dispatch = Q1.bind(null, Zt, s);
      return [i.memoizedState, f];
    }
    function kg(e, t, a) {
      var i = ki(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = hr, f = s.baseQueue, p = o.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, o.pending = null;
      }
      if (f !== null) {
        var g = f.next, _ = s.baseState, T = null, z = null, A = null, F = g;
        do {
          var ce = F.lane;
          if (mo(Xs, ce)) {
            if (A !== null) {
              var Oe = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Hn,
                action: F.action,
                hasEagerState: F.hasEagerState,
                eagerState: F.eagerState,
                next: null
              };
              A = A.next = Oe;
            }
            if (F.hasEagerState)
              _ = F.eagerState;
            else {
              var Ot = F.action;
              _ = e(_, Ot);
            }
          } else {
            var He = {
              lane: ce,
              action: F.action,
              hasEagerState: F.hasEagerState,
              eagerState: F.eagerState,
              next: null
            };
            A === null ? (z = A = He, T = _) : A = A.next = He, Zt.lanes = it(Zt.lanes, ce), Yp(ce);
          }
          F = F.next;
        } while (F !== null && F !== g);
        A === null ? T = _ : A.next = z, de(_, i.memoizedState) || Mp(), i.memoizedState = _, i.baseState = T, i.baseQueue = A, o.lastRenderedState = _;
      }
      var Ct = o.interleaved;
      if (Ct !== null) {
        var O = Ct;
        do {
          var H = O.lane;
          Zt.lanes = it(Zt.lanes, H), Yp(H), O = O.next;
        } while (O !== Ct);
      } else f === null && (o.lanes = P);
      var N = o.dispatch;
      return [i.memoizedState, N];
    }
    function Dg(e, t, a) {
      var i = ki(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = o.dispatch, f = o.pending, p = i.memoizedState;
      if (f !== null) {
        o.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        de(p, i.memoizedState) || Mp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), o.lastRenderedState = p;
      }
      return [p, s];
    }
    function Ck(e, t, a) {
    }
    function xk(e, t, a) {
    }
    function Og(e, t, a) {
      var i = Zt, o = Fl(), s, f = Fr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Af || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Af = !0);
      } else {
        if (s = t(), !Af) {
          var p = t();
          de(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Af = !0);
        }
        var v = Um();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ts(v, Xs) || DE(i, t, s);
      }
      o.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return o.queue = y, um(NE.bind(null, i, y, e), [e]), i.flags |= ya, Tp(pr | Hr, OE.bind(null, i, y, s, t), void 0, null), s;
    }
    function am(e, t, a) {
      var i = Zt, o = ki(), s = t();
      if (!Af) {
        var f = t();
        de(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Af = !0);
      }
      var p = o.memoizedState, v = !de(p, s);
      v && (o.memoizedState = s, Mp());
      var y = o.queue;
      if (wp(NE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      mr !== null && mr.memoizedState.tag & pr) {
        i.flags |= ya, Tp(pr | Hr, OE.bind(null, i, y, s, t), void 0, null);
        var g = Um();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ts(g, Xs) || DE(i, t, s);
      }
      return s;
    }
    function DE(e, t, a) {
      e.flags |= Tc;
      var i = {
        getSnapshot: t,
        value: a
      }, o = Zt.updateQueue;
      if (o === null)
        o = kE(), Zt.updateQueue = o, o.stores = [i];
      else {
        var s = o.stores;
        s === null ? o.stores = [i] : s.push(i);
      }
    }
    function OE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, ME(t) && LE(e);
    }
    function NE(e, t, a) {
      var i = function() {
        ME(t) && LE(e);
      };
      return a(i);
    }
    function ME(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !de(a, i);
      } catch {
        return !0;
      }
    }
    function LE(e) {
      var t = Ba(e, $e);
      t !== null && Er(t, e, $e, Wt);
    }
    function im(e) {
      var t = Fl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: P,
        dispatch: null,
        lastRenderedReducer: wg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = W1.bind(null, Zt, a);
      return [t.memoizedState, i];
    }
    function Ng(e) {
      return kg(wg);
    }
    function Mg(e) {
      return Dg(wg);
    }
    function Tp(e, t, a, i) {
      var o = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Zt.updateQueue;
      if (s === null)
        s = kE(), Zt.updateQueue = s, s.lastEffect = o.next = o;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = o.next = o;
        else {
          var p = f.next;
          f.next = o, o.next = p, s.lastEffect = o;
        }
      }
      return o;
    }
    function Lg(e) {
      var t = Fl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function lm(e) {
      var t = ki();
      return t.memoizedState;
    }
    function bp(e, t, a, i) {
      var o = Fl(), s = i === void 0 ? null : i;
      Zt.flags |= e, o.memoizedState = Tp(pr | t, a, void 0, s);
    }
    function om(e, t, a, i) {
      var o = ki(), s = i === void 0 ? null : i, f = void 0;
      if (hr !== null) {
        var p = hr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (bg(s, v)) {
            o.memoizedState = Tp(t, a, f, s);
            return;
          }
        }
      }
      Zt.flags |= e, o.memoizedState = Tp(pr | t, a, f, s);
    }
    function um(e, t) {
      return (Zt.mode & Jt) !== ze ? bp(yl | ya | fd, Hr, e, t) : bp(ya | fd, Hr, e, t);
    }
    function wp(e, t) {
      return om(ya, Hr, e, t);
    }
    function zg(e, t) {
      return bp(St, jl, e, t);
    }
    function sm(e, t) {
      return om(St, jl, e, t);
    }
    function Ug(e, t) {
      var a = St;
      return a |= ml, (Zt.mode & Jt) !== ze && (a |= zr), bp(a, vr, e, t);
    }
    function cm(e, t) {
      return om(St, vr, e, t);
    }
    function zE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var o = t;
        o.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(o).join(", ") + "}");
        var s = e();
        return o.current = s, function() {
          o.current = null;
        };
      }
    }
    function Ag(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, o = St;
      return o |= ml, (Zt.mode & Jt) !== ze && (o |= zr), bp(o, vr, zE.bind(null, t, e), i);
    }
    function fm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return om(St, vr, zE.bind(null, t, e), i);
    }
    function I1(e, t) {
    }
    var dm = I1;
    function jg(e, t) {
      var a = Fl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function pm(e, t) {
      var a = ki(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (bg(i, s))
          return o[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Fg(e, t) {
      var a = Fl(), i = t === void 0 ? null : t, o = e();
      return a.memoizedState = [o, i], o;
    }
    function vm(e, t) {
      var a = ki(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (bg(i, s))
          return o[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Hg(e) {
      var t = Fl();
      return t.memoizedState = e, e;
    }
    function UE(e) {
      var t = ki(), a = hr, i = a.memoizedState;
      return jE(t, i, e);
    }
    function AE(e) {
      var t = ki();
      if (hr === null)
        return t.memoizedState = e, e;
      var a = hr.memoizedState;
      return jE(t, a, e);
    }
    function jE(e, t, a) {
      var i = !Od(Xs);
      if (i) {
        if (!de(a, t)) {
          var o = Md();
          Zt.lanes = it(Zt.lanes, o), Yp(o), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Mp()), e.memoizedState = a, a;
    }
    function Y1(e, t, a) {
      var i = Sa();
      $n(_s(i, ja)), e(!0);
      var o = Cp.transition;
      Cp.transition = {};
      var s = Cp.transition;
      Cp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if ($n(i), Cp.transition = o, o === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Pe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Vg() {
      var e = im(!1), t = e[0], a = e[1], i = Y1.bind(null, a), o = Fl();
      return o.memoizedState = i, [t, i];
    }
    function FE() {
      var e = Ng(), t = e[0], a = ki(), i = a.memoizedState;
      return [t, i];
    }
    function HE() {
      var e = Mg(), t = e[0], a = ki(), i = a.memoizedState;
      return [t, i];
    }
    var VE = !1;
    function $1() {
      return VE;
    }
    function Pg() {
      var e = Fl(), t = Um(), a = t.identifierPrefix, i;
      if (Fr()) {
        var o = u1();
        i = ":" + a + "R" + o;
        var s = Rp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = V1++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function hm() {
      var e = ki(), t = e.memoizedState;
      return t;
    }
    function Q1(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Hu(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (PE(e))
        BE(t, o);
      else {
        var s = mE(e, t, o, i);
        if (s !== null) {
          var f = ba();
          Er(s, e, i, f), IE(s, t, i);
        }
      }
      YE(e, i);
    }
    function W1(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Hu(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (PE(e))
        BE(t, o);
      else {
        var s = e.alternate;
        if (e.lanes === P && (s === null || s.lanes === P)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = me.current, me.current = el;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (o.hasEagerState = !0, o.eagerState = y, de(y, v)) {
                N1(e, t, o, i);
                return;
              }
            } catch {
            } finally {
              me.current = p;
            }
          }
        }
        var g = mE(e, t, o, i);
        if (g !== null) {
          var _ = ba();
          Er(g, e, i, _), IE(g, t, i);
        }
      }
      YE(e, i);
    }
    function PE(e) {
      var t = e.alternate;
      return e === Zt || t !== null && t === Zt;
    }
    function BE(e, t) {
      xp = rm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function IE(e, t, a) {
      if (Nd(a)) {
        var i = t.lanes;
        i = Kc(i, e.pendingLanes);
        var o = it(i, a);
        t.lanes = o, ws(e, o);
      }
    }
    function YE(e, t, a) {
      ms(e, t);
    }
    var mm = {
      readContext: ar,
      useCallback: sa,
      useContext: sa,
      useEffect: sa,
      useImperativeHandle: sa,
      useInsertionEffect: sa,
      useLayoutEffect: sa,
      useMemo: sa,
      useReducer: sa,
      useRef: sa,
      useState: sa,
      useDebugValue: sa,
      useDeferredValue: sa,
      useTransition: sa,
      useMutableSource: sa,
      useSyncExternalStore: sa,
      useId: sa,
      unstable_isNewReconciler: Se
    }, $E = null, QE = null, WE = null, GE = null, Hl = null, el = null, ym = null;
    {
      var Bg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ze = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      $E = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", Bt(), jf(t), jg(e, t);
        },
        useContext: function(e) {
          return I = "useContext", Bt(), ar(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", Bt(), jf(t), um(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", Bt(), jf(a), Ag(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", Bt(), jf(t), zg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", Bt(), jf(t), Ug(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", Bt(), jf(t);
          var a = me.current;
          me.current = Hl;
          try {
            return Fg(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", Bt();
          var i = me.current;
          me.current = Hl;
          try {
            return _g(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", Bt(), Lg(e);
        },
        useState: function(e) {
          I = "useState", Bt();
          var t = me.current;
          me.current = Hl;
          try {
            return im(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", Bt(), void 0;
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", Bt(), Hg(e);
        },
        useTransition: function() {
          return I = "useTransition", Bt(), Vg();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", Bt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", Bt(), Og(e, t, a);
        },
        useId: function() {
          return I = "useId", Bt(), Pg();
        },
        unstable_isNewReconciler: Se
      }, QE = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", le(), jg(e, t);
        },
        useContext: function(e) {
          return I = "useContext", le(), ar(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", le(), um(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", le(), Ag(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", le(), zg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", le(), Ug(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", le();
          var a = me.current;
          me.current = Hl;
          try {
            return Fg(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", le();
          var i = me.current;
          me.current = Hl;
          try {
            return _g(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", le(), Lg(e);
        },
        useState: function(e) {
          I = "useState", le();
          var t = me.current;
          me.current = Hl;
          try {
            return im(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", le(), void 0;
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", le(), Hg(e);
        },
        useTransition: function() {
          return I = "useTransition", le(), Vg();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", le(), Og(e, t, a);
        },
        useId: function() {
          return I = "useId", le(), Pg();
        },
        unstable_isNewReconciler: Se
      }, WE = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", le(), pm(e, t);
        },
        useContext: function(e) {
          return I = "useContext", le(), ar(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", le(), wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", le(), fm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", le(), sm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", le(), cm(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", le();
          var a = me.current;
          me.current = el;
          try {
            return vm(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", le();
          var i = me.current;
          me.current = el;
          try {
            return kg(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", le(), lm();
        },
        useState: function(e) {
          I = "useState", le();
          var t = me.current;
          me.current = el;
          try {
            return Ng(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", le(), dm();
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", le(), UE(e);
        },
        useTransition: function() {
          return I = "useTransition", le(), FE();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", le(), am(e, t);
        },
        useId: function() {
          return I = "useId", le(), hm();
        },
        unstable_isNewReconciler: Se
      }, GE = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", le(), pm(e, t);
        },
        useContext: function(e) {
          return I = "useContext", le(), ar(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", le(), wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", le(), fm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", le(), sm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", le(), cm(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", le();
          var a = me.current;
          me.current = ym;
          try {
            return vm(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", le();
          var i = me.current;
          me.current = ym;
          try {
            return Dg(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", le(), lm();
        },
        useState: function(e) {
          I = "useState", le();
          var t = me.current;
          me.current = ym;
          try {
            return Mg(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", le(), dm();
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", le(), AE(e);
        },
        useTransition: function() {
          return I = "useTransition", le(), HE();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", le(), am(e, t);
        },
        useId: function() {
          return I = "useId", le(), hm();
        },
        unstable_isNewReconciler: Se
      }, Hl = {
        readContext: function(e) {
          return Bg(), ar(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", Ze(), Bt(), jg(e, t);
        },
        useContext: function(e) {
          return I = "useContext", Ze(), Bt(), ar(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", Ze(), Bt(), um(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", Ze(), Bt(), Ag(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", Ze(), Bt(), zg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", Ze(), Bt(), Ug(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", Ze(), Bt();
          var a = me.current;
          me.current = Hl;
          try {
            return Fg(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", Ze(), Bt();
          var i = me.current;
          me.current = Hl;
          try {
            return _g(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", Ze(), Bt(), Lg(e);
        },
        useState: function(e) {
          I = "useState", Ze(), Bt();
          var t = me.current;
          me.current = Hl;
          try {
            return im(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", Ze(), Bt(), void 0;
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", Ze(), Bt(), Hg(e);
        },
        useTransition: function() {
          return I = "useTransition", Ze(), Bt(), Vg();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", Ze(), Bt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", Ze(), Bt(), Og(e, t, a);
        },
        useId: function() {
          return I = "useId", Ze(), Bt(), Pg();
        },
        unstable_isNewReconciler: Se
      }, el = {
        readContext: function(e) {
          return Bg(), ar(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", Ze(), le(), pm(e, t);
        },
        useContext: function(e) {
          return I = "useContext", Ze(), le(), ar(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", Ze(), le(), wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", Ze(), le(), fm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", Ze(), le(), sm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", Ze(), le(), cm(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", Ze(), le();
          var a = me.current;
          me.current = el;
          try {
            return vm(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", Ze(), le();
          var i = me.current;
          me.current = el;
          try {
            return kg(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", Ze(), le(), lm();
        },
        useState: function(e) {
          I = "useState", Ze(), le();
          var t = me.current;
          me.current = el;
          try {
            return Ng(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", Ze(), le(), dm();
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", Ze(), le(), UE(e);
        },
        useTransition: function() {
          return I = "useTransition", Ze(), le(), FE();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", Ze(), le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", Ze(), le(), am(e, t);
        },
        useId: function() {
          return I = "useId", Ze(), le(), hm();
        },
        unstable_isNewReconciler: Se
      }, ym = {
        readContext: function(e) {
          return Bg(), ar(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", Ze(), le(), pm(e, t);
        },
        useContext: function(e) {
          return I = "useContext", Ze(), le(), ar(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", Ze(), le(), wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", Ze(), le(), fm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", Ze(), le(), sm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", Ze(), le(), cm(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", Ze(), le();
          var a = me.current;
          me.current = el;
          try {
            return vm(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", Ze(), le();
          var i = me.current;
          me.current = el;
          try {
            return Dg(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", Ze(), le(), lm();
        },
        useState: function(e) {
          I = "useState", Ze(), le();
          var t = me.current;
          me.current = el;
          try {
            return Mg(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", Ze(), le(), dm();
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", Ze(), le(), AE(e);
        },
        useTransition: function() {
          return I = "useTransition", Ze(), le(), HE();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", Ze(), le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", Ze(), le(), am(e, t);
        },
        useId: function() {
          return I = "useId", Ze(), le(), hm();
        },
        unstable_isNewReconciler: Se
      };
    }
    var Uu = k.unstable_now, qE = 0, gm = -1, _p = -1, Sm = -1, Ig = !1, Em = !1;
    function KE() {
      return Ig;
    }
    function G1() {
      Em = !0;
    }
    function q1() {
      Ig = !1, Em = !1;
    }
    function K1() {
      Ig = Em, Em = !1;
    }
    function XE() {
      return qE;
    }
    function JE() {
      qE = Uu();
    }
    function Yg(e) {
      _p = Uu(), e.actualStartTime < 0 && (e.actualStartTime = Uu());
    }
    function ZE(e) {
      _p = -1;
    }
    function Cm(e, t) {
      if (_p >= 0) {
        var a = Uu() - _p;
        e.actualDuration += a, t && (e.selfBaseDuration = a), _p = -1;
      }
    }
    function Vl(e) {
      if (gm >= 0) {
        var t = Uu() - gm;
        gm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case J:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case xt:
              var o = a.stateNode;
              o.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function $g(e) {
      if (Sm >= 0) {
        var t = Uu() - Sm;
        Sm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case J:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case xt:
              var o = a.stateNode;
              o !== null && (o.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Pl() {
      gm = Uu();
    }
    function Qg() {
      Sm = Uu();
    }
    function Wg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function tl(e, t) {
      if (e && e.defaultProps) {
        var a = nt({}, t), i = e.defaultProps;
        for (var o in i)
          a[o] === void 0 && (a[o] = i[o]);
        return a;
      }
      return t;
    }
    var Gg = {}, qg, Kg, Xg, Jg, Zg, eC, xm, eS, tS, nS, kp;
    {
      qg = /* @__PURE__ */ new Set(), Kg = /* @__PURE__ */ new Set(), Xg = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), kp = /* @__PURE__ */ new Set();
      var tC = /* @__PURE__ */ new Set();
      xm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          tC.has(a) || (tC.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, eC = function(e, t) {
        if (t === void 0) {
          var a = kt(e) || "Component";
          Zg.has(a) || (Zg.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Gg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Gg);
    }
    function rS(e, t, a, i) {
      var o = e.memoizedState, s = a(i, o);
      {
        if (e.mode & rt) {
          Qt(!0);
          try {
            s = a(i, o);
          } finally {
            Qt(!1);
          }
        }
        eC(t, s);
      }
      var f = s == null ? o : nt({}, o, s);
      if (e.memoizedState = f, e.lanes === P) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var aS = {
      isMounted: dd,
      enqueueSetState: function(e, t, a) {
        var i = au(e), o = ba(), s = Hu(i), f = Mo(o, s);
        f.payload = t, a != null && (xm(a, "setState"), f.callback = a);
        var p = Nu(i, f, s);
        p !== null && (Er(p, i, s, o), Xh(p, i, s)), ms(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = au(e), o = ba(), s = Hu(i), f = Mo(o, s);
        f.tag = gE, f.payload = t, a != null && (xm(a, "replaceState"), f.callback = a);
        var p = Nu(i, f, s);
        p !== null && (Er(p, i, s, o), Xh(p, i, s)), ms(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = au(e), i = ba(), o = Hu(a), s = Mo(i, o);
        s.tag = Gh, t != null && (xm(t, "forceUpdate"), s.callback = t);
        var f = Nu(a, s, o);
        f !== null && (Er(f, a, o, i), Xh(f, a, o)), wd(a, o);
      }
    };
    function nC(e, t, a, i, o, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & rt) {
            Qt(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Qt(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", kt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Ae(a, i) || !Ae(o, s) : !0;
    }
    function X1(e, t, a) {
      var i = e.stateNode;
      {
        var o = kt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), t.childContextTypes && !kp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & rt) === ze && (kp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, o)), t.contextTypes && !kp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & rt) === ze && (kp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, o)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !tS.has(t) && (tS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", kt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Xg.has(t) && (Xg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", kt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
        var p = i.state;
        p && (typeof p != "object" || at(p)) && S("%s.state: must be set to an object or null", o), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
      }
    }
    function rC(e, t) {
      t.updater = aS, e.stateNode = t, ss(t, e), t._reactInternalInstance = Gg;
    }
    function aC(e, t, a) {
      var i = !1, o = li, s = li, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === x && f._context === void 0
        );
        if (!p && !nS.has(t)) {
          nS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === zi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", kt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = ar(f);
      else {
        o = bf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? wf(e, o) : li;
      }
      var g = new t(a, s);
      if (e.mode & rt) {
        Qt(!0);
        try {
          g = new t(a, s);
        } finally {
          Qt(!1);
        }
      }
      var _ = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      rC(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && _ === null) {
          var T = kt(t) || "Component";
          Kg.has(T) || (Kg.add(T), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", T, g.state === null ? "null" : "undefined", T));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var z = null, A = null, F = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? z = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (z = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? A = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (A = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? F = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (F = "UNSAFE_componentWillUpdate"), z !== null || A !== null || F !== null) {
            var ce = kt(t) || "Component", He = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Jg.has(ce) || (Jg.add(ce), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ce, He, z !== null ? `
  ` + z : "", A !== null ? `
  ` + A : "", F !== null ? `
  ` + F : ""));
          }
        }
      }
      return i && W0(e, o, s), g;
    }
    function J1(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", qe(e) || "Component"), aS.enqueueReplaceState(t, t.state, null));
    }
    function iC(e, t, a, i) {
      var o = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o) {
        {
          var s = qe(e) || "Component";
          qg.has(s) || (qg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        aS.enqueueReplaceState(t, t.state, null);
      }
    }
    function iS(e, t, a, i) {
      X1(e, t, a);
      var o = e.stateNode;
      o.props = a, o.state = e.memoizedState, o.refs = {}, vg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        o.context = ar(s);
      else {
        var f = bf(e, t, !0);
        o.context = wf(e, f);
      }
      {
        if (o.state === a) {
          var p = kt(t) || "Component";
          eS.has(p) || (eS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & rt && Ji.recordLegacyContextWarning(e, o), Ji.recordUnsafeLifecycleWarnings(e, o);
      }
      o.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (rS(e, t, v, a), o.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (J1(e, o), Jh(e, a, o, i), o.state = e.memoizedState), typeof o.componentDidMount == "function") {
        var y = St;
        y |= ml, (e.mode & Jt) !== ze && (y |= zr), e.flags |= y;
      }
    }
    function Z1(e, t, a, i) {
      var o = e.stateNode, s = e.memoizedProps;
      o.props = s;
      var f = o.context, p = t.contextType, v = li;
      if (typeof p == "object" && p !== null)
        v = ar(p);
      else {
        var y = bf(e, t, !0);
        v = wf(e, y);
      }
      var g = t.getDerivedStateFromProps, _ = typeof g == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      !_ && (typeof o.UNSAFE_componentWillReceiveProps == "function" || typeof o.componentWillReceiveProps == "function") && (s !== a || f !== v) && iC(e, o, a, v), EE();
      var T = e.memoizedState, z = o.state = T;
      if (Jh(e, a, o, i), z = e.memoizedState, s === a && T === z && !Lh() && !Zh()) {
        if (typeof o.componentDidMount == "function") {
          var A = St;
          A |= ml, (e.mode & Jt) !== ze && (A |= zr), e.flags |= A;
        }
        return !1;
      }
      typeof g == "function" && (rS(e, t, g, a), z = e.memoizedState);
      var F = Zh() || nC(e, t, s, a, T, z, v);
      if (F) {
        if (!_ && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function") {
          var ce = St;
          ce |= ml, (e.mode & Jt) !== ze && (ce |= zr), e.flags |= ce;
        }
      } else {
        if (typeof o.componentDidMount == "function") {
          var He = St;
          He |= ml, (e.mode & Jt) !== ze && (He |= zr), e.flags |= He;
        }
        e.memoizedProps = a, e.memoizedState = z;
      }
      return o.props = a, o.state = z, o.context = v, F;
    }
    function eb(e, t, a, i, o) {
      var s = t.stateNode;
      SE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : tl(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, _ = li;
      if (typeof g == "object" && g !== null)
        _ = ar(g);
      else {
        var T = bf(t, a, !0);
        _ = wf(t, T);
      }
      var z = a.getDerivedStateFromProps, A = typeof z == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !A && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== _) && iC(t, s, i, _), EE();
      var F = t.memoizedState, ce = s.state = F;
      if (Jh(t, i, s, o), ce = t.memoizedState, f === v && F === ce && !Lh() && !Zh() && !te)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= St), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Ua), !1;
      typeof z == "function" && (rS(t, a, z, i), ce = t.memoizedState);
      var He = Zh() || nC(t, a, p, i, F, ce, _) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      te;
      return He ? (!A && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, ce, _), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, ce, _)), typeof s.componentDidUpdate == "function" && (t.flags |= St), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Ua)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= St), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Ua), t.memoizedProps = i, t.memoizedState = ce), s.props = i, s.state = ce, s.context = _, He;
    }
    function Js(e, t) {
      return {
        value: e,
        source: t,
        stack: _t(t),
        digest: null
      };
    }
    function lS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function tb(e, t) {
      return !0;
    }
    function oS(e, t) {
      try {
        var a = tb(e, t);
        if (a === !1)
          return;
        var i = t.value, o = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === ee)
            return;
          console.error(i);
        }
        var p = o ? qe(o) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === J)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = qe(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var _ = v + `
` + f + `

` + ("" + y);
        console.error(_);
      } catch (T) {
        setTimeout(function() {
          throw T;
        });
      }
    }
    var nb = typeof WeakMap == "function" ? WeakMap : Map;
    function lC(e, t, a) {
      var i = Mo(Wt, a);
      i.tag = dg, i.payload = {
        element: null
      };
      var o = t.value;
      return i.callback = function() {
        Gw(o), oS(e, t);
      }, i;
    }
    function uS(e, t, a) {
      var i = Mo(Wt, a);
      i.tag = dg;
      var o = e.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var s = t.value;
        i.payload = function() {
          return o(s);
        }, i.callback = function() {
          yx(e), oS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        yx(e), oS(e, t), typeof o != "function" && Qw(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof o != "function" && (aa(e.lanes, $e) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", qe(e) || "Unknown"));
      }), i;
    }
    function oC(e, t, a) {
      var i = e.pingCache, o;
      if (i === null ? (i = e.pingCache = new nb(), o = /* @__PURE__ */ new Set(), i.set(t, o)) : (o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o))), !o.has(a)) {
        o.add(a);
        var s = qw.bind(null, e, t, a);
        _r && $p(e, a), t.then(s, s);
      }
    }
    function rb(e, t, a, i) {
      var o = e.updateQueue;
      if (o === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        o.add(a);
    }
    function ab(e, t) {
      var a = e.tag;
      if ((e.mode & mt) === ze && (a === ue || a === Ue || a === Be)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function uC(e) {
      var t = e;
      do {
        if (t.tag === ge && F1(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function sC(e, t, a, i, o) {
      if ((e.mode & mt) === ze) {
        if (e === t)
          e.flags |= wr;
        else {
          if (e.flags |= pt, a.flags |= ti, a.flags &= -52805, a.tag === ee) {
            var s = a.alternate;
            if (s === null)
              a.tag = dt;
            else {
              var f = Mo(Wt, $e);
              f.tag = Gh, Nu(a, f, $e);
            }
          }
          a.lanes = it(a.lanes, $e);
        }
        return e;
      }
      return e.flags |= wr, e.lanes = o, e;
    }
    function ib(e, t, a, i, o) {
      if (a.flags |= lo, _r && $p(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        ab(a), Fr() && a.mode & mt && eE();
        var f = uC(t);
        if (f !== null) {
          f.flags &= ~mn, sC(f, t, a, e, o), f.mode & mt && oC(e, s, o), rb(f, e, s);
          return;
        } else {
          if (!Dd(o)) {
            oC(e, s, o), PS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Fr() && a.mode & mt) {
        eE();
        var v = uC(t);
        if (v !== null) {
          (v.flags & wr) === Le && (v.flags |= mn), sC(v, t, a, e, o), eg(Js(i, a));
          return;
        }
      }
      i = Js(i, a), Fw(i);
      var y = t;
      do {
        switch (y.tag) {
          case J: {
            var g = i;
            y.flags |= wr;
            var _ = nr(o);
            y.lanes = it(y.lanes, _);
            var T = lC(y, g, _);
            hg(y, T);
            return;
          }
          case ee:
            var z = i, A = y.type, F = y.stateNode;
            if ((y.flags & pt) === Le && (typeof A.getDerivedStateFromError == "function" || F !== null && typeof F.componentDidCatch == "function" && !ux(F))) {
              y.flags |= wr;
              var ce = nr(o);
              y.lanes = it(y.lanes, ce);
              var He = uS(y, z, ce);
              hg(y, He);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function lb() {
      return null;
    }
    var Dp = re.ReactCurrentOwner, nl = !1, sS, Op, cS, fS, dS, Zs, pS, Rm, Np;
    sS = {}, Op = {}, cS = {}, fS = {}, dS = {}, Zs = !1, pS = {}, Rm = {}, Np = {};
    function Ra(e, t, a, i) {
      e === null ? t.child = dE(t, null, a, i) : t.child = Of(t, e.child, a, i);
    }
    function ob(e, t, a, i) {
      t.child = Of(t, e.child, null, i), t.child = Of(t, null, a, i);
    }
    function cC(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ki(
          s,
          i,
          // Resolved props
          "prop",
          kt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Mf(t, o), Aa(t);
      {
        if (Dp.current = t, Oa(!0), v = Ff(e, t, f, i, p, o), y = Hf(), t.mode & rt) {
          Qt(!0);
          try {
            v = Ff(e, t, f, i, p, o), y = Hf();
          } finally {
            Qt(!1);
          }
        }
        Oa(!1);
      }
      return Cl(), e !== null && !nl ? (wE(e, t, o), Lo(e, t, o)) : (Fr() && y && Gy(t), t.flags |= $i, Ra(e, t, v, o), t.child);
    }
    function fC(e, t, a, i, o) {
      if (e === null) {
        var s = a.type;
        if (d_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Wf(s), t.tag = Be, t.type = f, mS(t, s), dC(e, t, f, i, o);
        }
        {
          var p = s.propTypes;
          if (p && Ki(
            p,
            i,
            // Resolved props
            "prop",
            kt(s)
          ), a.defaultProps !== void 0) {
            var v = kt(s) || "Unknown";
            Np[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Np[v] = !0);
          }
        }
        var y = JS(a.type, null, i, t, t.mode, o);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, _ = g.propTypes;
        _ && Ki(
          _,
          i,
          // Resolved props
          "prop",
          kt(g)
        );
      }
      var T = e.child, z = xS(e, o);
      if (!z) {
        var A = T.memoizedProps, F = a.compare;
        if (F = F !== null ? F : Ae, F(A, i) && e.ref === t.ref)
          return Lo(e, t, o);
      }
      t.flags |= $i;
      var ce = ac(T, i);
      return ce.ref = t.ref, ce.return = t, t.child = ce, ce;
    }
    function dC(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Je) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && Ki(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            kt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (Ae(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (nl = !1, t.pendingProps = i = g, xS(e, o))
            (e.flags & ti) !== Le && (nl = !0);
          else return t.lanes = e.lanes, Lo(e, t, o);
      }
      return vS(e, t, a, i, o);
    }
    function pC(e, t, a) {
      var i = t.pendingProps, o = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || b)
        if ((t.mode & mt) === ze) {
          var f = {
            baseLanes: P,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Am(t, a);
        } else if (aa(a, na)) {
          var _ = {
            baseLanes: P,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = _;
          var T = s !== null ? s.baseLanes : a;
          Am(t, T);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = it(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = na;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, Am(t, v), null;
        }
      else {
        var z;
        s !== null ? (z = it(s.baseLanes, a), t.memoizedState = null) : z = a, Am(t, z);
      }
      return Ra(e, t, o, a), t.child;
    }
    function ub(e, t, a) {
      var i = t.pendingProps;
      return Ra(e, t, i, a), t.child;
    }
    function sb(e, t, a) {
      var i = t.pendingProps.children;
      return Ra(e, t, i, a), t.child;
    }
    function cb(e, t, a) {
      {
        t.flags |= St;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var o = t.pendingProps, s = o.children;
      return Ra(e, t, s, a), t.child;
    }
    function vC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= jn, t.flags |= fs);
    }
    function vS(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ki(
          s,
          i,
          // Resolved props
          "prop",
          kt(a)
        );
      }
      var f;
      {
        var p = bf(t, a, !0);
        f = wf(t, p);
      }
      var v, y;
      Mf(t, o), Aa(t);
      {
        if (Dp.current = t, Oa(!0), v = Ff(e, t, a, i, f, o), y = Hf(), t.mode & rt) {
          Qt(!0);
          try {
            v = Ff(e, t, a, i, f, o), y = Hf();
          } finally {
            Qt(!1);
          }
        }
        Oa(!1);
      }
      return Cl(), e !== null && !nl ? (wE(e, t, o), Lo(e, t, o)) : (Fr() && y && Gy(t), t.flags |= $i, Ra(e, t, v, o), t.child);
    }
    function hC(e, t, a, i, o) {
      {
        switch (__(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= pt, t.flags |= wr;
            var y = new Error("Simulated error coming from DevTools"), g = nr(o);
            t.lanes = it(t.lanes, g);
            var _ = uS(t, Js(y, t), g);
            hg(t, _);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var T = a.propTypes;
          T && Ki(
            T,
            i,
            // Resolved props
            "prop",
            kt(a)
          );
        }
      }
      var z;
      Al(a) ? (z = !0, Uh(t)) : z = !1, Mf(t, o);
      var A = t.stateNode, F;
      A === null ? (bm(e, t), aC(t, a, i), iS(t, a, i, o), F = !0) : e === null ? F = Z1(t, a, i, o) : F = eb(e, t, a, i, o);
      var ce = hS(e, t, a, F, z, o);
      {
        var He = t.stateNode;
        F && He.props !== i && (Zs || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", qe(t) || "a component"), Zs = !0);
      }
      return ce;
    }
    function hS(e, t, a, i, o, s) {
      vC(e, t);
      var f = (t.flags & pt) !== Le;
      if (!i && !f)
        return o && K0(t, a, !1), Lo(e, t, s);
      var p = t.stateNode;
      Dp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, ZE();
      else {
        Aa(t);
        {
          if (Oa(!0), v = p.render(), t.mode & rt) {
            Qt(!0);
            try {
              p.render();
            } finally {
              Qt(!1);
            }
          }
          Oa(!1);
        }
        Cl();
      }
      return t.flags |= $i, e !== null && f ? ob(e, t, v, s) : Ra(e, t, v, s), t.memoizedState = p.state, o && K0(t, a, !0), t.child;
    }
    function mC(e) {
      var t = e.stateNode;
      t.pendingContext ? G0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && G0(e, t.context, !1), mg(e, t.containerInfo);
    }
    function fb(e, t, a) {
      if (mC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, o = t.memoizedState, s = o.element;
      SE(e, t), Jh(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (o.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & mn) {
          var g = Js(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return yC(e, t, p, a, g);
        } else if (p !== s) {
          var _ = Js(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return yC(e, t, p, a, _);
        } else {
          v1(t);
          var T = dE(t, null, p, a);
          t.child = T;
          for (var z = T; z; )
            z.flags = z.flags & ~xn | Rn, z = z.sibling;
        }
      } else {
        if (Df(), p === s)
          return Lo(e, t, a);
        Ra(e, t, p, a);
      }
      return t.child;
    }
    function yC(e, t, a, i, o) {
      return Df(), eg(o), t.flags |= mn, Ra(e, t, a, i), t.child;
    }
    function db(e, t, a) {
      RE(t), e === null && Zy(t);
      var i = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = o.children, p = zy(i, o);
      return p ? f = null : s !== null && zy(i, s) && (t.flags |= $t), vC(e, t), Ra(e, t, f, a), t.child;
    }
    function pb(e, t) {
      return e === null && Zy(t), null;
    }
    function vb(e, t, a, i) {
      bm(e, t);
      var o = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = p_(v), g = tl(v, o), _;
      switch (y) {
        case ue:
          return mS(t, v), t.type = v = Wf(v), _ = vS(null, t, v, g, i), _;
        case ee:
          return t.type = v = QS(v), _ = hC(null, t, v, g, i), _;
        case Ue:
          return t.type = v = WS(v), _ = cC(null, t, v, g, i), _;
        case lt: {
          if (t.type !== t.elementType) {
            var T = v.propTypes;
            T && Ki(
              T,
              g,
              // Resolved for outer only
              "prop",
              kt(v)
            );
          }
          return _ = fC(
            null,
            t,
            v,
            tl(v.type, g),
            // The inner type can have defaults too
            i
          ), _;
        }
      }
      var z = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Je && (z = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + z));
    }
    function hb(e, t, a, i, o) {
      bm(e, t), t.tag = ee;
      var s;
      return Al(a) ? (s = !0, Uh(t)) : s = !1, Mf(t, o), aC(t, a, i), iS(t, a, i, o), hS(null, t, a, !0, s, o);
    }
    function mb(e, t, a, i) {
      bm(e, t);
      var o = t.pendingProps, s;
      {
        var f = bf(t, a, !1);
        s = wf(t, f);
      }
      Mf(t, i);
      var p, v;
      Aa(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = kt(a) || "Unknown";
          sS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), sS[y] = !0);
        }
        t.mode & rt && Ji.recordLegacyContextWarning(t, null), Oa(!0), Dp.current = t, p = Ff(null, t, a, o, s, i), v = Hf(), Oa(!1);
      }
      if (Cl(), t.flags |= $i, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = kt(a) || "Unknown";
        Op[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Op[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var _ = kt(a) || "Unknown";
          Op[_] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _, _, _), Op[_] = !0);
        }
        t.tag = ee, t.memoizedState = null, t.updateQueue = null;
        var T = !1;
        return Al(a) ? (T = !0, Uh(t)) : T = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, vg(t), rC(t, p), iS(t, a, o, i), hS(null, t, a, !0, T, i);
      } else {
        if (t.tag = ue, t.mode & rt) {
          Qt(!0);
          try {
            p = Ff(null, t, a, o, s, i), v = Hf();
          } finally {
            Qt(!1);
          }
        }
        return Fr() && v && Gy(t), Ra(null, t, p, i), mS(t, a), t.child;
      }
    }
    function mS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Mr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var o = i || "", s = e._debugSource;
          s && (o = s.fileName + ":" + s.lineNumber), dS[o] || (dS[o] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = kt(t) || "Unknown";
          Np[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Np[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = kt(t) || "Unknown";
          fS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), fS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = kt(t) || "Unknown";
          cS[v] || (S("%s: Function components do not support contextType.", v), cS[v] = !0);
        }
      }
    }
    var yS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Hn
    };
    function gS(e) {
      return {
        baseLanes: e,
        cachePool: lb(),
        transitions: null
      };
    }
    function yb(e, t) {
      var a = null;
      return {
        baseLanes: it(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function gb(e, t, a, i) {
      if (t !== null) {
        var o = t.memoizedState;
        if (o === null)
          return !1;
      }
      return Sg(e, Ep);
    }
    function Sb(e, t) {
      return bs(e.childLanes, t);
    }
    function gC(e, t, a) {
      var i = t.pendingProps;
      k_(t) && (t.flags |= pt);
      var o = Zi.current, s = !1, f = (t.flags & pt) !== Le;
      if (f || gb(o, e) ? (s = !0, t.flags &= ~pt) : (e === null || e.memoizedState !== null) && (o = j1(o, bE)), o = zf(o), Lu(t, o), e === null) {
        Zy(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Tb(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var _ = Eb(t, y, g, a), T = t.child;
          return T.memoizedState = gS(a), t.memoizedState = yS, _;
        } else
          return SS(t, y);
      } else {
        var z = e.memoizedState;
        if (z !== null) {
          var A = z.dehydrated;
          if (A !== null)
            return bb(e, t, f, i, A, z, a);
        }
        if (s) {
          var F = i.fallback, ce = i.children, He = xb(e, t, ce, F, a), Oe = t.child, Ot = e.child.memoizedState;
          return Oe.memoizedState = Ot === null ? gS(a) : yb(Ot, a), Oe.childLanes = Sb(e, a), t.memoizedState = yS, He;
        } else {
          var Ct = i.children, O = Cb(e, t, Ct, a);
          return t.memoizedState = null, O;
        }
      }
    }
    function SS(e, t, a) {
      var i = e.mode, o = {
        mode: "visible",
        children: t
      }, s = ES(o, i);
      return s.return = e, e.child = s, s;
    }
    function Eb(e, t, a, i) {
      var o = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (o & mt) === ze && s !== null ? (p = s, p.childLanes = P, p.pendingProps = f, e.mode & bt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Pu(a, o, i, null)) : (p = ES(f, o), v = Pu(a, o, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function ES(e, t, a) {
      return Sx(e, t, P, null);
    }
    function SC(e, t) {
      return ac(e, t);
    }
    function Cb(e, t, a, i) {
      var o = e.child, s = o.sibling, f = SC(o, {
        mode: "visible",
        children: a
      });
      if ((t.mode & mt) === ze && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Jr) : p.push(s);
      }
      return t.child = f, f;
    }
    function xb(e, t, a, i, o) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & mt) === ze && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = P, y.pendingProps = v, t.mode & bt && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = SC(f, v), y.subtreeFlags = f.subtreeFlags & Fn;
      var _;
      return p !== null ? _ = ac(p, i) : (_ = Pu(i, s, o, null), _.flags |= xn), _.return = t, y.return = t, y.sibling = _, t.child = y, _;
    }
    function Tm(e, t, a, i) {
      i !== null && eg(i), Of(t, e.child, null, a);
      var o = t.pendingProps, s = o.children, f = SS(t, s);
      return f.flags |= xn, t.memoizedState = null, f;
    }
    function Rb(e, t, a, i, o) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = ES(f, s), v = Pu(i, s, o, null);
      return v.flags |= xn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & mt) !== ze && Of(t, e.child, null, o), v;
    }
    function Tb(e, t, a) {
      return (e.mode & mt) === ze ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = $e) : Fy(t) ? e.lanes = tr : e.lanes = na, null;
    }
    function bb(e, t, a, i, o, s, f) {
      if (a)
        if (t.flags & mn) {
          t.flags &= ~mn;
          var O = lS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Tm(e, t, f, O);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= pt, null;
          var H = i.children, N = i.fallback, K = Rb(e, t, H, N, f), ye = t.child;
          return ye.memoizedState = gS(f), t.memoizedState = yS, K;
        }
      else {
        if (d1(), (t.mode & mt) === ze)
          return Tm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Fy(o)) {
          var p, v, y;
          {
            var g = DT(o);
            p = g.digest, v = g.message, y = g.stack;
          }
          var _;
          v ? _ = new Error(v) : _ = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var T = lS(_, p, y);
          return Tm(e, t, f, T);
        }
        var z = aa(f, e.childLanes);
        if (nl || z) {
          var A = Um();
          if (A !== null) {
            var F = Zc(A, f);
            if (F !== Hn && F !== s.retryLane) {
              s.retryLane = F;
              var ce = Wt;
              Ba(e, F), Er(A, e, F, ce);
            }
          }
          PS();
          var He = lS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Tm(e, t, f, He);
        } else if (B0(o)) {
          t.flags |= pt, t.child = e.child;
          var Oe = Kw.bind(null, e);
          return OT(o, Oe), null;
        } else {
          h1(t, o, s.treeContext);
          var Ot = i.children, Ct = SS(t, Ot);
          return Ct.flags |= Rn, Ct;
        }
      }
    }
    function EC(e, t, a) {
      e.lanes = it(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = it(i.lanes, t)), cg(e.return, t, a);
    }
    function wb(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === ge) {
          var o = i.memoizedState;
          o !== null && EC(i, a, e);
        } else if (i.tag === Ht)
          EC(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function _b(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && nm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function kb(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !pS[e])
        if (pS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function Db(e, t) {
      e !== void 0 && !Rm[e] && (e !== "collapsed" && e !== "hidden" ? (Rm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Rm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function CC(e, t) {
      {
        var a = at(e), i = !a && typeof hn(e) == "function";
        if (a || i) {
          var o = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", o, t, o), !1;
        }
      }
      return !0;
    }
    function Ob(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (at(e)) {
          for (var a = 0; a < e.length; a++)
            if (!CC(e[a], a))
              return;
        } else {
          var i = hn(e);
          if (typeof i == "function") {
            var o = i.call(e);
            if (o)
              for (var s = o.next(), f = 0; !s.done; s = o.next()) {
                if (!CC(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function CS(e, t, a, i, o) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = o);
    }
    function xC(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, s = i.tail, f = i.children;
      kb(o), Db(s, o), Ob(f, o), Ra(e, t, f, a);
      var p = Zi.current, v = Sg(p, Ep);
      if (v)
        p = Eg(p, Ep), t.flags |= pt;
      else {
        var y = e !== null && (e.flags & pt) !== Le;
        y && wb(t, t.child, a), p = zf(p);
      }
      if (Lu(t, p), (t.mode & mt) === ze)
        t.memoizedState = null;
      else
        switch (o) {
          case "forwards": {
            var g = _b(t.child), _;
            g === null ? (_ = t.child, t.child = null) : (_ = g.sibling, g.sibling = null), CS(
              t,
              !1,
              // isBackwards
              _,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var T = null, z = t.child;
            for (t.child = null; z !== null; ) {
              var A = z.alternate;
              if (A !== null && nm(A) === null) {
                t.child = z;
                break;
              }
              var F = z.sibling;
              z.sibling = T, T = z, z = F;
            }
            CS(
              t,
              !0,
              // isBackwards
              T,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            CS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Nb(e, t, a) {
      mg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Of(t, null, i, a) : Ra(e, t, i, a), t.child;
    }
    var RC = !1;
    function Mb(e, t, a) {
      var i = t.type, o = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || RC || (RC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Ki(v, s, "prop", "Context.Provider");
      }
      if (hE(t, o, p), f !== null) {
        var y = f.value;
        if (de(y, p)) {
          if (f.children === s.children && !Lh())
            return Lo(e, t, a);
        } else
          k1(t, o, a);
      }
      var g = s.children;
      return Ra(e, t, g, a), t.child;
    }
    var TC = !1;
    function Lb(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (TC || (TC = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var o = t.pendingProps, s = o.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Mf(t, a);
      var f = ar(i);
      Aa(t);
      var p;
      return Dp.current = t, Oa(!0), p = s(f), Oa(!1), Cl(), t.flags |= $i, Ra(e, t, p, a), t.child;
    }
    function Mp() {
      nl = !0;
    }
    function bm(e, t) {
      (t.mode & mt) === ze && e !== null && (e.alternate = null, t.alternate = null, t.flags |= xn);
    }
    function Lo(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), ZE(), Yp(t.lanes), aa(a, t.childLanes) ? (w1(e, t), t.child) : null;
    }
    function zb(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw new Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw new Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Jr) : s.push(e), a.flags |= xn, a;
      }
    }
    function xS(e, t) {
      var a = e.lanes;
      return !!aa(a, t);
    }
    function Ub(e, t, a) {
      switch (t.tag) {
        case J:
          mC(t), t.stateNode, Df();
          break;
        case ie:
          RE(t);
          break;
        case ee: {
          var i = t.type;
          Al(i) && Uh(t);
          break;
        }
        case De:
          mg(t, t.stateNode.containerInfo);
          break;
        case et: {
          var o = t.memoizedProps.value, s = t.type._context;
          hE(t, s, o);
          break;
        }
        case xt:
          {
            var f = aa(a, t.childLanes);
            f && (t.flags |= St);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case ge: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Lu(t, zf(Zi.current)), t.flags |= pt, null;
            var y = t.child, g = y.childLanes;
            if (aa(a, g))
              return gC(e, t, a);
            Lu(t, zf(Zi.current));
            var _ = Lo(e, t, a);
            return _ !== null ? _.sibling : null;
          } else
            Lu(t, zf(Zi.current));
          break;
        }
        case Ht: {
          var T = (e.flags & pt) !== Le, z = aa(a, t.childLanes);
          if (T) {
            if (z)
              return xC(e, t, a);
            t.flags |= pt;
          }
          var A = t.memoizedState;
          if (A !== null && (A.rendering = null, A.tail = null, A.lastEffect = null), Lu(t, Zi.current), z)
            break;
          return null;
        }
        case Fe:
        case Nt:
          return t.lanes = P, pC(e, t, a);
      }
      return Lo(e, t, a);
    }
    function bC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return zb(e, t, JS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, o = t.pendingProps;
        if (i !== o || Lh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          nl = !0;
        else {
          var s = xS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & pt) === Le)
            return nl = !1, Ub(e, t, a);
          (e.flags & ti) !== Le ? nl = !0 : nl = !1;
        }
      } else if (nl = !1, Fr() && l1(t)) {
        var f = t.index, p = o1();
        Z0(t, p, f);
      }
      switch (t.lanes = P, t.tag) {
        case Me:
          return mb(e, t, t.type, a);
        case vn: {
          var v = t.elementType;
          return vb(e, t, v, a);
        }
        case ue: {
          var y = t.type, g = t.pendingProps, _ = t.elementType === y ? g : tl(y, g);
          return vS(e, t, y, _, a);
        }
        case ee: {
          var T = t.type, z = t.pendingProps, A = t.elementType === T ? z : tl(T, z);
          return hC(e, t, T, A, a);
        }
        case J:
          return fb(e, t, a);
        case ie:
          return db(e, t, a);
        case _e:
          return pb(e, t);
        case ge:
          return gC(e, t, a);
        case De:
          return Nb(e, t, a);
        case Ue: {
          var F = t.type, ce = t.pendingProps, He = t.elementType === F ? ce : tl(F, ce);
          return cC(e, t, F, He, a);
        }
        case Xe:
          return ub(e, t, a);
        case Sn:
          return sb(e, t, a);
        case xt:
          return cb(e, t, a);
        case et:
          return Mb(e, t, a);
        case Ut:
          return Lb(e, t, a);
        case lt: {
          var Oe = t.type, Ot = t.pendingProps, Ct = tl(Oe, Ot);
          if (t.type !== t.elementType) {
            var O = Oe.propTypes;
            O && Ki(
              O,
              Ct,
              // Resolved for outer only
              "prop",
              kt(Oe)
            );
          }
          return Ct = tl(Oe.type, Ct), fC(e, t, Oe, Ct, a);
        }
        case Be:
          return dC(e, t, t.type, t.pendingProps, a);
        case dt: {
          var H = t.type, N = t.pendingProps, K = t.elementType === H ? N : tl(H, N);
          return hb(e, t, H, K, a);
        }
        case Ht:
          return xC(e, t, a);
        case yt:
          break;
        case Fe:
          return pC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Vf(e) {
      e.flags |= St;
    }
    function wC(e) {
      e.flags |= jn, e.flags |= fs;
    }
    var _C, RS, kC, DC;
    _C = function(e, t, a, i) {
      for (var o = t.child; o !== null; ) {
        if (o.tag === ie || o.tag === _e)
          rT(e, o.stateNode);
        else if (o.tag !== De) {
          if (o.child !== null) {
            o.child.return = o, o = o.child;
            continue;
          }
        }
        if (o === t)
          return;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === t)
            return;
          o = o.return;
        }
        o.sibling.return = o.return, o = o.sibling;
      }
    }, RS = function(e, t) {
    }, kC = function(e, t, a, i, o) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = yg(), v = iT(f, a, s, i, o, p);
        t.updateQueue = v, v && Vf(t);
      }
    }, DC = function(e, t, a, i) {
      a !== i && Vf(t);
    };
    function Lp(e, t) {
      if (!Fr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var o = e.tail, s = null; o !== null; )
              o.alternate !== null && (s = o), o = o.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Vr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = P, i = Le;
      if (t) {
        if ((e.mode & bt) !== ze) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = it(a, it(y.lanes, y.childLanes)), i |= y.subtreeFlags & Fn, i |= y.flags & Fn, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = it(a, it(g.lanes, g.childLanes)), i |= g.subtreeFlags & Fn, i |= g.flags & Fn, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & bt) !== ze) {
          for (var o = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = it(a, it(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, o += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = o, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = it(a, it(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Ab(e, t, a) {
      if (E1() && (t.mode & mt) !== ze && (t.flags & pt) === Le)
        return lE(t), Df(), t.flags |= mn | lo | wr, !1;
      var i = Vh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (g1(t), Vr(t), (t.mode & bt) !== ze) {
            var o = a !== null;
            if (o) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Df(), (t.flags & pt) === Le && (t.memoizedState = null), t.flags |= St, Vr(t), (t.mode & bt) !== ze) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return oE(), !0;
    }
    function OC(e, t, a) {
      var i = t.pendingProps;
      switch (qy(t), t.tag) {
        case Me:
        case vn:
        case Be:
        case ue:
        case Ue:
        case Xe:
        case Sn:
        case xt:
        case Ut:
        case lt:
          return Vr(t), null;
        case ee: {
          var o = t.type;
          return Al(o) && zh(t), Vr(t), null;
        }
        case J: {
          var s = t.stateNode;
          if (Lf(t), $y(t), xg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Vh(t);
            if (f)
              Vf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & mn) !== Le) && (t.flags |= Ua, oE());
            }
          }
          return RS(e, t), Vr(t), null;
        }
        case ie: {
          gg(t);
          var v = xE(), y = t.type;
          if (e !== null && t.stateNode != null)
            kC(e, t, y, i, v), e.ref !== t.ref && wC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Vr(t), null;
            }
            var g = yg(), _ = Vh(t);
            if (_)
              m1(t, v, g) && Vf(t);
            else {
              var T = nT(y, i, v, g, t);
              _C(T, t, !1, !1), t.stateNode = T, aT(T, y, i, v) && Vf(t);
            }
            t.ref !== null && wC(t);
          }
          return Vr(t), null;
        }
        case _e: {
          var z = i;
          if (e && t.stateNode != null) {
            var A = e.memoizedProps;
            DC(e, t, A, z);
          } else {
            if (typeof z != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var F = xE(), ce = yg(), He = Vh(t);
            He ? y1(t) && Vf(t) : t.stateNode = lT(z, F, ce, t);
          }
          return Vr(t), null;
        }
        case ge: {
          Uf(t);
          var Oe = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Ot = Ab(e, t, Oe);
            if (!Ot)
              return t.flags & wr ? t : null;
          }
          if ((t.flags & pt) !== Le)
            return t.lanes = a, (t.mode & bt) !== ze && Wg(t), t;
          var Ct = Oe !== null, O = e !== null && e.memoizedState !== null;
          if (Ct !== O && Ct) {
            var H = t.child;
            if (H.flags |= gi, (t.mode & mt) !== ze) {
              var N = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              N || Sg(Zi.current, bE) ? jw() : PS();
            }
          }
          var K = t.updateQueue;
          if (K !== null && (t.flags |= St), Vr(t), (t.mode & bt) !== ze && Ct) {
            var ye = t.child;
            ye !== null && (t.treeBaseDuration -= ye.treeBaseDuration);
          }
          return null;
        }
        case De:
          return Lf(t), RS(e, t), e === null && ZT(t.stateNode.containerInfo), Vr(t), null;
        case et:
          var pe = t.type._context;
          return sg(pe, t), Vr(t), null;
        case dt: {
          var We = t.type;
          return Al(We) && zh(t), Vr(t), null;
        }
        case Ht: {
          Uf(t);
          var tt = t.memoizedState;
          if (tt === null)
            return Vr(t), null;
          var en = (t.flags & pt) !== Le, Lt = tt.rendering;
          if (Lt === null)
            if (en)
              Lp(tt, !1);
            else {
              var Gn = Hw() && (e === null || (e.flags & pt) === Le);
              if (!Gn)
                for (var zt = t.child; zt !== null; ) {
                  var Pn = nm(zt);
                  if (Pn !== null) {
                    en = !0, t.flags |= pt, Lp(tt, !1);
                    var ca = Pn.updateQueue;
                    return ca !== null && (t.updateQueue = ca, t.flags |= St), t.subtreeFlags = Le, _1(t, a), Lu(t, Eg(Zi.current, Ep)), t.child;
                  }
                  zt = zt.sibling;
                }
              tt.tail !== null && _n() > XC() && (t.flags |= pt, en = !0, Lp(tt, !1), t.lanes = Fv);
            }
          else {
            if (!en) {
              var $r = nm(Lt);
              if ($r !== null) {
                t.flags |= pt, en = !0;
                var ui = $r.updateQueue;
                if (ui !== null && (t.updateQueue = ui, t.flags |= St), Lp(tt, !0), tt.tail === null && tt.tailMode === "hidden" && !Lt.alternate && !Fr())
                  return Vr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              _n() * 2 - tt.renderingStartTime > XC() && a !== na && (t.flags |= pt, en = !0, Lp(tt, !1), t.lanes = Fv);
            }
            if (tt.isBackwards)
              Lt.sibling = t.child, t.child = Lt;
            else {
              var wa = tt.last;
              wa !== null ? wa.sibling = Lt : t.child = Lt, tt.last = Lt;
            }
          }
          if (tt.tail !== null) {
            var _a = tt.tail;
            tt.rendering = _a, tt.tail = _a.sibling, tt.renderingStartTime = _n(), _a.sibling = null;
            var fa = Zi.current;
            return en ? fa = Eg(fa, Ep) : fa = zf(fa), Lu(t, fa), _a;
          }
          return Vr(t), null;
        }
        case yt:
          break;
        case Fe:
        case Nt: {
          VS(t);
          var Fo = t.memoizedState, Gf = Fo !== null;
          if (e !== null) {
            var qp = e.memoizedState, Yl = qp !== null;
            Yl !== Gf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !b && (t.flags |= gi);
          }
          return !Gf || (t.mode & mt) === ze ? Vr(t) : aa(Il, na) && (Vr(t), t.subtreeFlags & (xn | St) && (t.flags |= gi)), null;
        }
        case vt:
          return null;
        case ot:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function jb(e, t, a) {
      switch (qy(t), t.tag) {
        case ee: {
          var i = t.type;
          Al(i) && zh(t);
          var o = t.flags;
          return o & wr ? (t.flags = o & ~wr | pt, (t.mode & bt) !== ze && Wg(t), t) : null;
        }
        case J: {
          t.stateNode, Lf(t), $y(t), xg();
          var s = t.flags;
          return (s & wr) !== Le && (s & pt) === Le ? (t.flags = s & ~wr | pt, t) : null;
        }
        case ie:
          return gg(t), null;
        case ge: {
          Uf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Df();
          }
          var p = t.flags;
          return p & wr ? (t.flags = p & ~wr | pt, (t.mode & bt) !== ze && Wg(t), t) : null;
        }
        case Ht:
          return Uf(t), null;
        case De:
          return Lf(t), null;
        case et:
          var v = t.type._context;
          return sg(v, t), null;
        case Fe:
        case Nt:
          return VS(t), null;
        case vt:
          return null;
        default:
          return null;
      }
    }
    function NC(e, t, a) {
      switch (qy(t), t.tag) {
        case ee: {
          var i = t.type.childContextTypes;
          i != null && zh(t);
          break;
        }
        case J: {
          t.stateNode, Lf(t), $y(t), xg();
          break;
        }
        case ie: {
          gg(t);
          break;
        }
        case De:
          Lf(t);
          break;
        case ge:
          Uf(t);
          break;
        case Ht:
          Uf(t);
          break;
        case et:
          var o = t.type._context;
          sg(o, t);
          break;
        case Fe:
        case Nt:
          VS(t);
          break;
      }
    }
    var MC = null;
    MC = /* @__PURE__ */ new Set();
    var wm = !1, Pr = !1, Fb = typeof WeakSet == "function" ? WeakSet : Set, Te = null, Pf = null, Bf = null;
    function Hb(e) {
      za(null, function() {
        throw e;
      }), cd();
    }
    var Vb = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & bt)
        try {
          Pl(), t.componentWillUnmount();
        } finally {
          Vl(e);
        }
      else
        t.componentWillUnmount();
    };
    function LC(e, t) {
      try {
        Au(vr, e);
      } catch (a) {
        pn(e, t, a);
      }
    }
    function TS(e, t, a) {
      try {
        Vb(e, a);
      } catch (i) {
        pn(e, t, i);
      }
    }
    function Pb(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        pn(e, t, i);
      }
    }
    function zC(e, t) {
      try {
        AC(e);
      } catch (a) {
        pn(e, t, a);
      }
    }
    function If(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ye && ut && e.mode & bt)
              try {
                Pl(), i = a(null);
              } finally {
                Vl(e);
              }
            else
              i = a(null);
          } catch (o) {
            pn(e, t, o);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", qe(e));
        } else
          a.current = null;
    }
    function _m(e, t, a) {
      try {
        a();
      } catch (i) {
        pn(e, t, i);
      }
    }
    var UC = !1;
    function Bb(e, t) {
      eT(e.containerInfo), Te = t, Ib();
      var a = UC;
      return UC = !1, a;
    }
    function Ib() {
      for (; Te !== null; ) {
        var e = Te, t = e.child;
        (e.subtreeFlags & gl) !== Le && t !== null ? (t.return = e, Te = t) : Yb();
      }
    }
    function Yb() {
      for (; Te !== null; ) {
        var e = Te;
        qt(e);
        try {
          $b(e);
        } catch (a) {
          pn(e, e.return, a);
        }
        Cn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Te = t;
          return;
        }
        Te = e.return;
      }
    }
    function $b(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Ua) !== Le) {
        switch (qt(e), e.tag) {
          case ue:
          case Ue:
          case Be:
            break;
          case ee: {
            if (t !== null) {
              var i = t.memoizedProps, o = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Zs && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", qe(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", qe(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : tl(e.type, i), o);
              {
                var p = MC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", qe(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case J: {
            {
              var v = e.stateNode;
              bT(v.containerInfo);
            }
            break;
          }
          case ie:
          case _e:
          case De:
          case dt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Cn();
      }
    }
    function rl(e, t, a) {
      var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var s = o.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Hr) !== Ia ? xl(t) : (e & vr) !== Ia && xd(t), (e & jl) !== Ia && Qp(!0), _m(t, a, p), (e & jl) !== Ia && Qp(!1), (e & Hr) !== Ia ? wc() : (e & vr) !== Ia && uu());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Au(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var o = i.next, s = o;
        do {
          if ((s.tag & e) === e) {
            (e & Hr) !== Ia ? Av(t) : (e & vr) !== Ia && jv(t);
            var f = s.create;
            (e & jl) !== Ia && Qp(!0), s.destroy = f(), (e & jl) !== Ia && Qp(!1), (e & Hr) !== Ia ? Wi() : (e & vr) !== Ia && _c();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & vr) !== Le ? v = "useLayoutEffect" : (s.tag & jl) !== Le ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== o);
      }
    }
    function Qb(e, t) {
      if ((t.flags & St) !== Le)
        switch (t.tag) {
          case xt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, o = i.id, s = i.onPostCommit, f = XE(), p = t.alternate === null ? "mount" : "update";
            KE() && (p = "nested-update"), typeof s == "function" && s(o, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case J:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case xt:
                  var g = v.stateNode;
                  g.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function Wb(e, t, a, i) {
      if ((a.flags & Sl) !== Le)
        switch (a.tag) {
          case ue:
          case Ue:
          case Be: {
            if (!Pr)
              if (a.mode & bt)
                try {
                  Pl(), Au(vr | pr, a);
                } finally {
                  Vl(a);
                }
              else
                Au(vr | pr, a);
            break;
          }
          case ee: {
            var o = a.stateNode;
            if (a.flags & St && !Pr)
              if (t === null)
                if (a.type === a.elementType && !Zs && (o.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", qe(a) || "instance"), o.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", qe(a) || "instance")), a.mode & bt)
                  try {
                    Pl(), o.componentDidMount();
                  } finally {
                    Vl(a);
                  }
                else
                  o.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : tl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Zs && (o.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", qe(a) || "instance"), o.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", qe(a) || "instance")), a.mode & bt)
                  try {
                    Pl(), o.componentDidUpdate(s, f, o.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Vl(a);
                  }
                else
                  o.componentDidUpdate(s, f, o.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Zs && (o.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", qe(a) || "instance"), o.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", qe(a) || "instance")), CE(a, p, o));
            break;
          }
          case J: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ie:
                    y = a.child.stateNode;
                    break;
                  case ee:
                    y = a.child.stateNode;
                    break;
                }
              CE(a, v, y);
            }
            break;
          }
          case ie: {
            var g = a.stateNode;
            if (t === null && a.flags & St) {
              var _ = a.type, T = a.memoizedProps;
              fT(g, _, T);
            }
            break;
          }
          case _e:
            break;
          case De:
            break;
          case xt: {
            {
              var z = a.memoizedProps, A = z.onCommit, F = z.onRender, ce = a.stateNode.effectDuration, He = XE(), Oe = t === null ? "mount" : "update";
              KE() && (Oe = "nested-update"), typeof F == "function" && F(a.memoizedProps.id, Oe, a.actualDuration, a.treeBaseDuration, a.actualStartTime, He);
              {
                typeof A == "function" && A(a.memoizedProps.id, Oe, ce, He), Yw(a);
                var Ot = a.return;
                e: for (; Ot !== null; ) {
                  switch (Ot.tag) {
                    case J:
                      var Ct = Ot.stateNode;
                      Ct.effectDuration += ce;
                      break e;
                    case xt:
                      var O = Ot.stateNode;
                      O.effectDuration += ce;
                      break e;
                  }
                  Ot = Ot.return;
                }
              }
            }
            break;
          }
          case ge: {
            tw(e, a);
            break;
          }
          case Ht:
          case dt:
          case yt:
          case Fe:
          case Nt:
          case ot:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Pr || a.flags & jn && AC(a);
    }
    function Gb(e) {
      switch (e.tag) {
        case ue:
        case Ue:
        case Be: {
          if (e.mode & bt)
            try {
              Pl(), LC(e, e.return);
            } finally {
              Vl(e);
            }
          else
            LC(e, e.return);
          break;
        }
        case ee: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Pb(e, e.return, t), zC(e, e.return);
          break;
        }
        case ie: {
          zC(e, e.return);
          break;
        }
      }
    }
    function qb(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ie) {
          if (a === null) {
            a = i;
            try {
              var o = i.stateNode;
              t ? CT(o) : RT(i.stateNode, i.memoizedProps);
            } catch (f) {
              pn(e, e.return, f);
            }
          }
        } else if (i.tag === _e) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? xT(s) : TT(s, i.memoizedProps);
            } catch (f) {
              pn(e, e.return, f);
            }
        } else if (!((i.tag === Fe || i.tag === Nt) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function AC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case ie:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var o;
          if (e.mode & bt)
            try {
              Pl(), o = t(i);
            } finally {
              Vl(e);
            }
          else
            o = t(i);
          typeof o == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", qe(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", qe(e)), t.current = i;
      }
    }
    function Kb(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function jC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, jC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ie) {
          var a = e.stateNode;
          a !== null && n1(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Xb(e) {
      for (var t = e.return; t !== null; ) {
        if (FC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function FC(e) {
      return e.tag === ie || e.tag === J || e.tag === De;
    }
    function HC(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || FC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== ie && t.tag !== _e && t.tag !== tn; ) {
          if (t.flags & xn || t.child === null || t.tag === De)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & xn))
          return t.stateNode;
      }
    }
    function Jb(e) {
      var t = Xb(e);
      switch (t.tag) {
        case ie: {
          var a = t.stateNode;
          t.flags & $t && (P0(a), t.flags &= ~$t);
          var i = HC(e);
          wS(e, i, a);
          break;
        }
        case J:
        case De: {
          var o = t.stateNode.containerInfo, s = HC(e);
          bS(e, s, o);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function bS(e, t, a) {
      var i = e.tag, o = i === ie || i === _e;
      if (o) {
        var s = e.stateNode;
        t ? yT(a, s, t) : hT(a, s);
      } else if (i !== De) {
        var f = e.child;
        if (f !== null) {
          bS(f, t, a);
          for (var p = f.sibling; p !== null; )
            bS(p, t, a), p = p.sibling;
        }
      }
    }
    function wS(e, t, a) {
      var i = e.tag, o = i === ie || i === _e;
      if (o) {
        var s = e.stateNode;
        t ? mT(a, s, t) : vT(a, s);
      } else if (i !== De) {
        var f = e.child;
        if (f !== null) {
          wS(f, t, a);
          for (var p = f.sibling; p !== null; )
            wS(p, t, a), p = p.sibling;
        }
      }
    }
    var Br = null, al = !1;
    function Zb(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case ie: {
              Br = i.stateNode, al = !1;
              break e;
            }
            case J: {
              Br = i.stateNode.containerInfo, al = !0;
              break e;
            }
            case De: {
              Br = i.stateNode.containerInfo, al = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Br === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        VC(e, t, a), Br = null, al = !1;
      }
      Kb(a);
    }
    function ju(e, t, a) {
      for (var i = a.child; i !== null; )
        VC(e, t, i), i = i.sibling;
    }
    function VC(e, t, a) {
      switch (ou(a), a.tag) {
        case ie:
          Pr || If(a, t);
        case _e: {
          {
            var i = Br, o = al;
            Br = null, ju(e, t, a), Br = i, al = o, Br !== null && (al ? ST(Br, a.stateNode) : gT(Br, a.stateNode));
          }
          return;
        }
        case tn: {
          Br !== null && (al ? ET(Br, a.stateNode) : jy(Br, a.stateNode));
          return;
        }
        case De: {
          {
            var s = Br, f = al;
            Br = a.stateNode.containerInfo, al = !0, ju(e, t, a), Br = s, al = f;
          }
          return;
        }
        case ue:
        case Ue:
        case lt:
        case Be: {
          if (!Pr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var _ = g, T = _.destroy, z = _.tag;
                  T !== void 0 && ((z & jl) !== Ia ? _m(a, t, T) : (z & vr) !== Ia && (xd(a), a.mode & bt ? (Pl(), _m(a, t, T), Vl(a)) : _m(a, t, T), uu())), g = g.next;
                } while (g !== y);
              }
            }
          }
          ju(e, t, a);
          return;
        }
        case ee: {
          if (!Pr) {
            If(a, t);
            var A = a.stateNode;
            typeof A.componentWillUnmount == "function" && TS(a, t, A);
          }
          ju(e, t, a);
          return;
        }
        case yt: {
          ju(e, t, a);
          return;
        }
        case Fe: {
          if (
            // TODO: Remove this dead flag
            a.mode & mt
          ) {
            var F = Pr;
            Pr = F || a.memoizedState !== null, ju(e, t, a), Pr = F;
          } else
            ju(e, t, a);
          break;
        }
        default: {
          ju(e, t, a);
          return;
        }
      }
    }
    function ew(e) {
      e.memoizedState;
    }
    function tw(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var o = i.memoizedState;
          if (o !== null) {
            var s = o.dehydrated;
            s !== null && HT(s);
          }
        }
      }
    }
    function PC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Fb()), t.forEach(function(i) {
          var o = Xw.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), _r)
              if (Pf !== null && Bf !== null)
                $p(Bf, Pf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(o, o);
          }
        });
      }
    }
    function nw(e, t, a) {
      Pf = a, Bf = e, qt(t), BC(t, e), qt(t), Pf = null, Bf = null;
    }
    function il(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o];
          try {
            Zb(e, t, s);
          } catch (v) {
            pn(s, t, v);
          }
        }
      var f = Xa();
      if (t.subtreeFlags & iu)
        for (var p = t.child; p !== null; )
          qt(p), BC(p, e), p = p.sibling;
      qt(f);
    }
    function BC(e, t, a) {
      var i = e.alternate, o = e.flags;
      switch (e.tag) {
        case ue:
        case Ue:
        case lt:
        case Be: {
          if (il(t, e), Bl(e), o & St) {
            try {
              rl(jl | pr, e, e.return), Au(jl | pr, e);
            } catch (We) {
              pn(e, e.return, We);
            }
            if (e.mode & bt) {
              try {
                Pl(), rl(vr | pr, e, e.return);
              } catch (We) {
                pn(e, e.return, We);
              }
              Vl(e);
            } else
              try {
                rl(vr | pr, e, e.return);
              } catch (We) {
                pn(e, e.return, We);
              }
          }
          return;
        }
        case ee: {
          il(t, e), Bl(e), o & jn && i !== null && If(i, i.return);
          return;
        }
        case ie: {
          il(t, e), Bl(e), o & jn && i !== null && If(i, i.return);
          {
            if (e.flags & $t) {
              var s = e.stateNode;
              try {
                P0(s);
              } catch (We) {
                pn(e, e.return, We);
              }
            }
            if (o & St) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    dT(f, g, y, v, p, e);
                  } catch (We) {
                    pn(e, e.return, We);
                  }
              }
            }
          }
          return;
        }
        case _e: {
          if (il(t, e), Bl(e), o & St) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var _ = e.stateNode, T = e.memoizedProps, z = i !== null ? i.memoizedProps : T;
            try {
              pT(_, z, T);
            } catch (We) {
              pn(e, e.return, We);
            }
          }
          return;
        }
        case J: {
          if (il(t, e), Bl(e), o & St && i !== null) {
            var A = i.memoizedState;
            if (A.isDehydrated)
              try {
                FT(t.containerInfo);
              } catch (We) {
                pn(e, e.return, We);
              }
          }
          return;
        }
        case De: {
          il(t, e), Bl(e);
          return;
        }
        case ge: {
          il(t, e), Bl(e);
          var F = e.child;
          if (F.flags & gi) {
            var ce = F.stateNode, He = F.memoizedState, Oe = He !== null;
            if (ce.isHidden = Oe, Oe) {
              var Ot = F.alternate !== null && F.alternate.memoizedState !== null;
              Ot || Aw();
            }
          }
          if (o & St) {
            try {
              ew(e);
            } catch (We) {
              pn(e, e.return, We);
            }
            PC(e);
          }
          return;
        }
        case Fe: {
          var Ct = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & mt
          ) {
            var O = Pr;
            Pr = O || Ct, il(t, e), Pr = O;
          } else
            il(t, e);
          if (Bl(e), o & gi) {
            var H = e.stateNode, N = e.memoizedState, K = N !== null, ye = e;
            if (H.isHidden = K, K && !Ct && (ye.mode & mt) !== ze) {
              Te = ye;
              for (var pe = ye.child; pe !== null; )
                Te = pe, aw(pe), pe = pe.sibling;
            }
            qb(ye, K);
          }
          return;
        }
        case Ht: {
          il(t, e), Bl(e), o & St && PC(e);
          return;
        }
        case yt:
          return;
        default: {
          il(t, e), Bl(e);
          return;
        }
      }
    }
    function Bl(e) {
      var t = e.flags;
      if (t & xn) {
        try {
          Jb(e);
        } catch (a) {
          pn(e, e.return, a);
        }
        e.flags &= ~xn;
      }
      t & Rn && (e.flags &= ~Rn);
    }
    function rw(e, t, a) {
      Pf = a, Bf = t, Te = e, IC(e, t, a), Pf = null, Bf = null;
    }
    function IC(e, t, a) {
      for (var i = (e.mode & mt) !== ze; Te !== null; ) {
        var o = Te, s = o.child;
        if (o.tag === Fe && i) {
          var f = o.memoizedState !== null, p = f || wm;
          if (p) {
            _S(e, t, a);
            continue;
          } else {
            var v = o.alternate, y = v !== null && v.memoizedState !== null, g = y || Pr, _ = wm, T = Pr;
            wm = p, Pr = g, Pr && !T && (Te = o, iw(o));
            for (var z = s; z !== null; )
              Te = z, IC(
                z,
                // New root; bubble back up to here and stop.
                t,
                a
              ), z = z.sibling;
            Te = o, wm = _, Pr = T, _S(e, t, a);
            continue;
          }
        }
        (o.subtreeFlags & Sl) !== Le && s !== null ? (s.return = o, Te = s) : _S(e, t, a);
      }
    }
    function _S(e, t, a) {
      for (; Te !== null; ) {
        var i = Te;
        if ((i.flags & Sl) !== Le) {
          var o = i.alternate;
          qt(i);
          try {
            Wb(t, o, i, a);
          } catch (f) {
            pn(i, i.return, f);
          }
          Cn();
        }
        if (i === e) {
          Te = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Te = s;
          return;
        }
        Te = i.return;
      }
    }
    function aw(e) {
      for (; Te !== null; ) {
        var t = Te, a = t.child;
        switch (t.tag) {
          case ue:
          case Ue:
          case lt:
          case Be: {
            if (t.mode & bt)
              try {
                Pl(), rl(vr, t, t.return);
              } finally {
                Vl(t);
              }
            else
              rl(vr, t, t.return);
            break;
          }
          case ee: {
            If(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && TS(t, t.return, i);
            break;
          }
          case ie: {
            If(t, t.return);
            break;
          }
          case Fe: {
            var o = t.memoizedState !== null;
            if (o) {
              YC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Te = a) : YC(e);
      }
    }
    function YC(e) {
      for (; Te !== null; ) {
        var t = Te;
        if (t === e) {
          Te = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Te = a;
          return;
        }
        Te = t.return;
      }
    }
    function iw(e) {
      for (; Te !== null; ) {
        var t = Te, a = t.child;
        if (t.tag === Fe) {
          var i = t.memoizedState !== null;
          if (i) {
            $C(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Te = a) : $C(e);
      }
    }
    function $C(e) {
      for (; Te !== null; ) {
        var t = Te;
        qt(t);
        try {
          Gb(t);
        } catch (i) {
          pn(t, t.return, i);
        }
        if (Cn(), t === e) {
          Te = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Te = a;
          return;
        }
        Te = t.return;
      }
    }
    function lw(e, t, a, i) {
      Te = t, ow(t, e, a, i);
    }
    function ow(e, t, a, i) {
      for (; Te !== null; ) {
        var o = Te, s = o.child;
        (o.subtreeFlags & ur) !== Le && s !== null ? (s.return = o, Te = s) : uw(e, t, a, i);
      }
    }
    function uw(e, t, a, i) {
      for (; Te !== null; ) {
        var o = Te;
        if ((o.flags & ya) !== Le) {
          qt(o);
          try {
            sw(t, o, a, i);
          } catch (f) {
            pn(o, o.return, f);
          }
          Cn();
        }
        if (o === e) {
          Te = null;
          return;
        }
        var s = o.sibling;
        if (s !== null) {
          s.return = o.return, Te = s;
          return;
        }
        Te = o.return;
      }
    }
    function sw(e, t, a, i) {
      switch (t.tag) {
        case ue:
        case Ue:
        case Be: {
          if (t.mode & bt) {
            Qg();
            try {
              Au(Hr | pr, t);
            } finally {
              $g(t);
            }
          } else
            Au(Hr | pr, t);
          break;
        }
      }
    }
    function cw(e) {
      Te = e, fw();
    }
    function fw() {
      for (; Te !== null; ) {
        var e = Te, t = e.child;
        if ((Te.flags & Jr) !== Le) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var o = a[i];
              Te = o, vw(o, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Te = e;
          }
        }
        (e.subtreeFlags & ur) !== Le && t !== null ? (t.return = e, Te = t) : dw();
      }
    }
    function dw() {
      for (; Te !== null; ) {
        var e = Te;
        (e.flags & ya) !== Le && (qt(e), pw(e), Cn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Te = t;
          return;
        }
        Te = e.return;
      }
    }
    function pw(e) {
      switch (e.tag) {
        case ue:
        case Ue:
        case Be: {
          e.mode & bt ? (Qg(), rl(Hr | pr, e, e.return), $g(e)) : rl(Hr | pr, e, e.return);
          break;
        }
      }
    }
    function vw(e, t) {
      for (; Te !== null; ) {
        var a = Te;
        qt(a), mw(a, t), Cn();
        var i = a.child;
        i !== null ? (i.return = a, Te = i) : hw(e);
      }
    }
    function hw(e) {
      for (; Te !== null; ) {
        var t = Te, a = t.sibling, i = t.return;
        if (jC(t), t === e) {
          Te = null;
          return;
        }
        if (a !== null) {
          a.return = i, Te = a;
          return;
        }
        Te = i;
      }
    }
    function mw(e, t) {
      switch (e.tag) {
        case ue:
        case Ue:
        case Be: {
          e.mode & bt ? (Qg(), rl(Hr, e, t), $g(e)) : rl(Hr, e, t);
          break;
        }
      }
    }
    function yw(e) {
      switch (e.tag) {
        case ue:
        case Ue:
        case Be: {
          try {
            Au(vr | pr, e);
          } catch (a) {
            pn(e, e.return, a);
          }
          break;
        }
        case ee: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            pn(e, e.return, a);
          }
          break;
        }
      }
    }
    function gw(e) {
      switch (e.tag) {
        case ue:
        case Ue:
        case Be: {
          try {
            Au(Hr | pr, e);
          } catch (t) {
            pn(e, e.return, t);
          }
          break;
        }
      }
    }
    function Sw(e) {
      switch (e.tag) {
        case ue:
        case Ue:
        case Be: {
          try {
            rl(vr | pr, e, e.return);
          } catch (a) {
            pn(e, e.return, a);
          }
          break;
        }
        case ee: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && TS(e, e.return, t);
          break;
        }
      }
    }
    function Ew(e) {
      switch (e.tag) {
        case ue:
        case Ue:
        case Be:
          try {
            rl(Hr | pr, e, e.return);
          } catch (t) {
            pn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var zp = Symbol.for;
      zp("selector.component"), zp("selector.has_pseudo_class"), zp("selector.role"), zp("selector.test_id"), zp("selector.text");
    }
    var Cw = [];
    function xw() {
      Cw.forEach(function(e) {
        return e();
      });
    }
    var Rw = re.ReactCurrentActQueue;
    function Tw(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function QC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Rw.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var bw = Math.ceil, kS = re.ReactCurrentDispatcher, DS = re.ReactCurrentOwner, Ir = re.ReactCurrentBatchConfig, ll = re.ReactCurrentActQueue, yr = (
      /*             */
      0
    ), WC = (
      /*               */
      1
    ), Yr = (
      /*                */
      2
    ), Di = (
      /*                */
      4
    ), zo = 0, Up = 1, ec = 2, km = 3, Ap = 4, GC = 5, OS = 6, Dt = yr, Ta = null, Nn = null, gr = P, Il = P, NS = _u(P), Sr = zo, jp = null, Dm = P, Fp = P, Om = P, Hp = null, Ya = null, MS = 0, qC = 500, KC = 1 / 0, ww = 500, Uo = null;
    function Vp() {
      KC = _n() + ww;
    }
    function XC() {
      return KC;
    }
    var Nm = !1, LS = null, Yf = null, tc = !1, Fu = null, Pp = P, zS = [], US = null, _w = 50, Bp = 0, AS = null, jS = !1, Mm = !1, kw = 50, $f = 0, Lm = null, Ip = Wt, zm = P, JC = !1;
    function Um() {
      return Ta;
    }
    function ba() {
      return (Dt & (Yr | Di)) !== yr ? _n() : (Ip !== Wt || (Ip = _n()), Ip);
    }
    function Hu(e) {
      var t = e.mode;
      if ((t & mt) === ze)
        return $e;
      if ((Dt & Yr) !== yr && gr !== P)
        return nr(gr);
      var a = R1() !== x1;
      if (a) {
        if (Ir.transition !== null) {
          var i = Ir.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return zm === Hn && (zm = Md()), zm;
      }
      var o = Sa();
      if (o !== Hn)
        return o;
      var s = oT();
      return s;
    }
    function Dw(e) {
      var t = e.mode;
      return (t & mt) === ze ? $e : Yv();
    }
    function Er(e, t, a, i) {
      Zw(), JC && S("useInsertionEffect must not schedule updates."), jS && (Mm = !0), vu(e, a, i), (Dt & Yr) !== P && e === Ta ? n_(t) : (_r && Qv(e, t, a), r_(t), e === Ta && ((Dt & Yr) === yr && (Fp = it(Fp, a)), Sr === Ap && Vu(e, gr)), $a(e, i), a === $e && Dt === yr && (t.mode & mt) === ze && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ll.isBatchingLegacy && (Vp(), J0()));
    }
    function Ow(e, t, a) {
      var i = e.current;
      i.lanes = t, vu(e, t, a), $a(e, a);
    }
    function Nw(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Dt & Yr) !== yr
      );
    }
    function $a(e, t) {
      var a = e.callbackNode;
      Pv(e, t);
      var i = ra(e, e === Ta ? gr : P);
      if (i === P) {
        a !== null && vx(a), e.callbackNode = null, e.callbackPriority = Hn;
        return;
      }
      var o = ho(i), s = e.callbackPriority;
      if (s === o && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ll.current !== null && a !== YS)) {
        a == null && s !== $e && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && vx(a);
      var f;
      if (o === $e)
        e.tag === ku ? (ll.isBatchingLegacy !== null && (ll.didScheduleLegacyUpdate = !0), i1(tx.bind(null, e))) : X0(tx.bind(null, e)), ll.current !== null ? ll.current.push(Du) : sT(function() {
          (Dt & (Yr | Di)) === yr && Du();
        }), f = null;
      else {
        var p;
        switch (Gv(i)) {
          case ia:
            p = Qi;
            break;
          case ja:
            p = ds;
            break;
          case cr:
            p = uo;
            break;
          case tf:
            p = lu;
            break;
          default:
            p = uo;
            break;
        }
        f = $S(p, ZC.bind(null, e));
      }
      e.callbackPriority = o, e.callbackNode = f;
    }
    function ZC(e, t) {
      if (q1(), Ip = Wt, zm = P, (Dt & (Yr | Di)) !== yr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = jo();
      if (i && e.callbackNode !== a)
        return null;
      var o = ra(e, e === Ta ? gr : P);
      if (o === P)
        return null;
      var s = !Ts(e, o) && !Iv(e, o) && !t, f = s ? Pw(e, o) : jm(e, o);
      if (f !== zo) {
        if (f === ec) {
          var p = Wc(e);
          p !== P && (o = p, f = FS(e, p));
        }
        if (f === Up) {
          var v = jp;
          throw nc(e, P), Vu(e, o), $a(e, _n()), v;
        }
        if (f === OS)
          Vu(e, o);
        else {
          var y = !Ts(e, o), g = e.current.alternate;
          if (y && !Lw(g)) {
            if (f = jm(e, o), f === ec) {
              var _ = Wc(e);
              _ !== P && (o = _, f = FS(e, _));
            }
            if (f === Up) {
              var T = jp;
              throw nc(e, P), Vu(e, o), $a(e, _n()), T;
            }
          }
          e.finishedWork = g, e.finishedLanes = o, Mw(e, f, o);
        }
      }
      return $a(e, _n()), e.callbackNode === a ? ZC.bind(null, e) : null;
    }
    function FS(e, t) {
      var a = Hp;
      if (yo(e)) {
        var i = nc(e, t);
        i.flags |= mn, JT(e.containerInfo);
      }
      var o = jm(e, t);
      if (o !== ec) {
        var s = Ya;
        Ya = a, s !== null && ex(s);
      }
      return o;
    }
    function ex(e) {
      Ya === null ? Ya = e : Ya.push.apply(Ya, e);
    }
    function Mw(e, t, a) {
      switch (t) {
        case zo:
        case Up:
          throw new Error("Root did not complete. This is a bug in React.");
        case ec: {
          rc(e, Ya, Uo);
          break;
        }
        case km: {
          if (Vu(e, a), Gc(a) && // do not delay if we're inside an act() scope
          !hx()) {
            var i = MS + qC - _n();
            if (i > 10) {
              var o = ra(e, P);
              if (o !== P)
                break;
              var s = e.suspendedLanes;
              if (!mo(s, a)) {
                ba(), Jc(e, s);
                break;
              }
              e.timeoutHandle = Uy(rc.bind(null, e, Ya, Uo), i);
              break;
            }
          }
          rc(e, Ya, Uo);
          break;
        }
        case Ap: {
          if (Vu(e, a), ly(a))
            break;
          if (!hx()) {
            var f = kd(e, a), p = f, v = _n() - p, y = Jw(v) - v;
            if (y > 10) {
              e.timeoutHandle = Uy(rc.bind(null, e, Ya, Uo), y);
              break;
            }
          }
          rc(e, Ya, Uo);
          break;
        }
        case GC: {
          rc(e, Ya, Uo);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Lw(e) {
      for (var t = e; ; ) {
        if (t.flags & Tc) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var o = 0; o < i.length; o++) {
                var s = i[o], f = s.getSnapshot, p = s.value;
                try {
                  if (!de(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & Tc && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Vu(e, t) {
      t = bs(t, Om), t = bs(t, Fp), zd(e, t);
    }
    function tx(e) {
      if (K1(), (Dt & (Yr | Di)) !== yr)
        throw new Error("Should not already be working.");
      jo();
      var t = ra(e, P);
      if (!aa(t, $e))
        return $a(e, _n()), null;
      var a = jm(e, t);
      if (e.tag !== ku && a === ec) {
        var i = Wc(e);
        i !== P && (t = i, a = FS(e, i));
      }
      if (a === Up) {
        var o = jp;
        throw nc(e, P), Vu(e, t), $a(e, _n()), o;
      }
      if (a === OS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, rc(e, Ya, Uo), $a(e, _n()), null;
    }
    function zw(e, t) {
      t !== P && (ws(e, it(t, $e)), $a(e, _n()), (Dt & (Yr | Di)) === yr && (Vp(), Du()));
    }
    function HS(e, t) {
      var a = Dt;
      Dt |= WC;
      try {
        return e(t);
      } finally {
        Dt = a, Dt === yr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ll.isBatchingLegacy && (Vp(), J0());
      }
    }
    function Uw(e, t, a, i, o) {
      var s = Sa(), f = Ir.transition;
      try {
        return Ir.transition = null, $n(ia), e(t, a, i, o);
      } finally {
        $n(s), Ir.transition = f, Dt === yr && Vp();
      }
    }
    function Ao(e) {
      Fu !== null && Fu.tag === ku && (Dt & (Yr | Di)) === yr && jo();
      var t = Dt;
      Dt |= WC;
      var a = Ir.transition, i = Sa();
      try {
        return Ir.transition = null, $n(ia), e ? e() : void 0;
      } finally {
        $n(i), Ir.transition = a, Dt = t, (Dt & (Yr | Di)) === yr && Du();
      }
    }
    function nx() {
      return (Dt & (Yr | Di)) !== yr;
    }
    function Am(e, t) {
      ua(NS, Il, e), Il = it(Il, t);
    }
    function VS(e) {
      Il = NS.current, oa(NS, e);
    }
    function nc(e, t) {
      e.finishedWork = null, e.finishedLanes = P;
      var a = e.timeoutHandle;
      if (a !== Ay && (e.timeoutHandle = Ay, uT(a)), Nn !== null)
        for (var i = Nn.return; i !== null; ) {
          var o = i.alternate;
          NC(o, i), i = i.return;
        }
      Ta = e;
      var s = ac(e.current, null);
      return Nn = s, gr = Il = t, Sr = zo, jp = null, Dm = P, Fp = P, Om = P, Hp = null, Ya = null, O1(), Ji.discardPendingWarnings(), s;
    }
    function rx(e, t) {
      do {
        var a = Nn;
        try {
          if (Qh(), _E(), Cn(), DS.current = null, a === null || a.return === null) {
            Sr = Up, jp = t, Nn = null;
            return;
          }
          if (Ye && a.mode & bt && Cm(a, !0), Ie)
            if (Cl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              vs(a, i, gr);
            } else
              Ci(a, t, gr);
          ib(e, a.return, a, t, gr), ox(a);
        } catch (o) {
          t = o, Nn === a && a !== null ? (a = a.return, Nn = a) : a = Nn;
          continue;
        }
        return;
      } while (!0);
    }
    function ax() {
      var e = kS.current;
      return kS.current = mm, e === null ? mm : e;
    }
    function ix(e) {
      kS.current = e;
    }
    function Aw() {
      MS = _n();
    }
    function Yp(e) {
      Dm = it(e, Dm);
    }
    function jw() {
      Sr === zo && (Sr = km);
    }
    function PS() {
      (Sr === zo || Sr === km || Sr === ec) && (Sr = Ap), Ta !== null && (wl(Dm) || wl(Fp)) && Vu(Ta, gr);
    }
    function Fw(e) {
      Sr !== Ap && (Sr = ec), Hp === null ? Hp = [e] : Hp.push(e);
    }
    function Hw() {
      return Sr === zo;
    }
    function jm(e, t) {
      var a = Dt;
      Dt |= Yr;
      var i = ax();
      if (Ta !== e || gr !== t) {
        if (_r) {
          var o = e.memoizedUpdaters;
          o.size > 0 && ($p(e, gr), o.clear()), Ud(e, t);
        }
        Uo = ef(), nc(e, t);
      }
      Td(t);
      do
        try {
          Vw();
          break;
        } catch (s) {
          rx(e, s);
        }
      while (!0);
      if (Qh(), Dt = a, ix(i), Nn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return yn(), Ta = null, gr = P, Sr;
    }
    function Vw() {
      for (; Nn !== null; )
        lx(Nn);
    }
    function Pw(e, t) {
      var a = Dt;
      Dt |= Yr;
      var i = ax();
      if (Ta !== e || gr !== t) {
        if (_r) {
          var o = e.memoizedUpdaters;
          o.size > 0 && ($p(e, gr), o.clear()), Ud(e, t);
        }
        Uo = ef(), Vp(), nc(e, t);
      }
      Td(t);
      do
        try {
          Bw();
          break;
        } catch (s) {
          rx(e, s);
        }
      while (!0);
      return Qh(), ix(i), Dt = a, Nn !== null ? (bd(), zo) : (yn(), Ta = null, gr = P, Sr);
    }
    function Bw() {
      for (; Nn !== null && !md(); )
        lx(Nn);
    }
    function lx(e) {
      var t = e.alternate;
      qt(e);
      var a;
      (e.mode & bt) !== ze ? (Yg(e), a = BS(t, e, Il), Cm(e, !0)) : a = BS(t, e, Il), Cn(), e.memoizedProps = e.pendingProps, a === null ? ox(e) : Nn = a, DS.current = null;
    }
    function ox(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & lo) === Le) {
          qt(t);
          var o = void 0;
          if ((t.mode & bt) === ze ? o = OC(a, t, Il) : (Yg(t), o = OC(a, t, Il), Cm(t, !1)), Cn(), o !== null) {
            Nn = o;
            return;
          }
        } else {
          var s = jb(a, t);
          if (s !== null) {
            s.flags &= Dv, Nn = s;
            return;
          }
          if ((t.mode & bt) !== ze) {
            Cm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= lo, i.subtreeFlags = Le, i.deletions = null;
          else {
            Sr = OS, Nn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Nn = v;
          return;
        }
        t = i, Nn = t;
      } while (t !== null);
      Sr === zo && (Sr = GC);
    }
    function rc(e, t, a) {
      var i = Sa(), o = Ir.transition;
      try {
        Ir.transition = null, $n(ia), Iw(e, t, a, i);
      } finally {
        Ir.transition = o, $n(i);
      }
      return null;
    }
    function Iw(e, t, a, i) {
      do
        jo();
      while (Fu !== null);
      if (e_(), (Dt & (Yr | Di)) !== yr)
        throw new Error("Should not already be working.");
      var o = e.finishedWork, s = e.finishedLanes;
      if (Uv(s), o === null)
        return Ei(), null;
      if (s === P && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = P, o === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Hn;
      var f = it(o.lanes, o.childLanes);
      $v(e, f), e === Ta && (Ta = null, Nn = null, gr = P), ((o.subtreeFlags & ur) !== Le || (o.flags & ur) !== Le) && (tc || (tc = !0, US = a, $S(uo, function() {
        return jo(), null;
      })));
      var p = (o.subtreeFlags & (gl | iu | Sl | ur)) !== Le, v = (o.flags & (gl | iu | Sl | ur)) !== Le;
      if (p || v) {
        var y = Ir.transition;
        Ir.transition = null;
        var g = Sa();
        $n(ia);
        var _ = Dt;
        Dt |= Di, DS.current = null, Bb(e, o), JE(), nw(e, o, s), tT(e.containerInfo), e.current = o, hs(s), rw(o, e, s), co(), Nv(), Dt = _, $n(g), Ir.transition = y;
      } else
        e.current = o, JE();
      var T = tc;
      if (tc ? (tc = !1, Fu = e, Pp = s) : ($f = 0, Lm = null), f = e.pendingLanes, f === P && (Yf = null), T || fx(e.current, !1), Sd(o.stateNode, i), _r && e.memoizedUpdaters.clear(), xw(), $a(e, _n()), t !== null)
        for (var z = e.onRecoverableError, A = 0; A < t.length; A++) {
          var F = t[A], ce = F.stack, He = F.digest;
          z(F.value, {
            componentStack: ce,
            digest: He
          });
        }
      if (Nm) {
        Nm = !1;
        var Oe = LS;
        throw LS = null, Oe;
      }
      return aa(Pp, $e) && e.tag !== ku && jo(), f = e.pendingLanes, aa(f, $e) ? (G1(), e === AS ? Bp++ : (Bp = 0, AS = e)) : Bp = 0, Du(), Ei(), null;
    }
    function jo() {
      if (Fu !== null) {
        var e = Gv(Pp), t = kr(cr, e), a = Ir.transition, i = Sa();
        try {
          return Ir.transition = null, $n(t), $w();
        } finally {
          $n(i), Ir.transition = a;
        }
      }
      return !1;
    }
    function Yw(e) {
      zS.push(e), tc || (tc = !0, $S(uo, function() {
        return jo(), null;
      }));
    }
    function $w() {
      if (Fu === null)
        return !1;
      var e = US;
      US = null;
      var t = Fu, a = Pp;
      if (Fu = null, Pp = P, (Dt & (Yr | Di)) !== yr)
        throw new Error("Cannot flush passive effects while already rendering.");
      jS = !0, Mm = !1, Rd(a);
      var i = Dt;
      Dt |= Di, cw(t.current), lw(t, t.current, a, e);
      {
        var o = zS;
        zS = [];
        for (var s = 0; s < o.length; s++) {
          var f = o[s];
          Qb(t, f);
        }
      }
      su(), fx(t.current, !0), Dt = i, Du(), Mm ? t === Lm ? $f++ : ($f = 0, Lm = t) : $f = 0, jS = !1, Mm = !1, Ed(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function ux(e) {
      return Yf !== null && Yf.has(e);
    }
    function Qw(e) {
      Yf === null ? Yf = /* @__PURE__ */ new Set([e]) : Yf.add(e);
    }
    function Ww(e) {
      Nm || (Nm = !0, LS = e);
    }
    var Gw = Ww;
    function sx(e, t, a) {
      var i = Js(a, t), o = lC(e, i, $e), s = Nu(e, o, $e), f = ba();
      s !== null && (vu(s, $e, f), $a(s, f));
    }
    function pn(e, t, a) {
      if (Hb(a), Qp(!1), e.tag === J) {
        sx(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === J) {
          sx(i, e, a);
          return;
        } else if (i.tag === ee) {
          var o = i.type, s = i.stateNode;
          if (typeof o.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !ux(s)) {
            var f = Js(a, e), p = uS(i, f, $e), v = Nu(i, p, $e), y = ba();
            v !== null && (vu(v, $e, y), $a(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function qw(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var o = ba();
      Jc(e, a), a_(e), Ta === e && mo(gr, a) && (Sr === Ap || Sr === km && Gc(gr) && _n() - MS < qC ? nc(e, P) : Om = it(Om, a)), $a(e, o);
    }
    function cx(e, t) {
      t === Hn && (t = Dw(e));
      var a = ba(), i = Ba(e, t);
      i !== null && (vu(i, t, a), $a(i, a));
    }
    function Kw(e) {
      var t = e.memoizedState, a = Hn;
      t !== null && (a = t.retryLane), cx(e, a);
    }
    function Xw(e, t) {
      var a = Hn, i;
      switch (e.tag) {
        case ge:
          i = e.stateNode;
          var o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case Ht:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), cx(e, a);
    }
    function Jw(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : bw(e / 1960) * 1960;
    }
    function Zw() {
      if (Bp > _w)
        throw Bp = 0, AS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      $f > kw && ($f = 0, Lm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function e_() {
      Ji.flushLegacyContextWarning(), Ji.flushPendingUnsafeLifecycleWarnings();
    }
    function fx(e, t) {
      qt(e), Fm(e, zr, Sw), t && Fm(e, yl, Ew), Fm(e, zr, yw), t && Fm(e, yl, gw), Cn();
    }
    function Fm(e, t, a) {
      for (var i = e, o = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== o && i.child !== null && s !== Le ? i = i.child : ((i.flags & t) !== Le && a(i), i.sibling !== null ? i = i.sibling : i = o = i.return);
      }
    }
    var Hm = null;
    function dx(e) {
      {
        if ((Dt & Yr) !== yr || !(e.mode & mt))
          return;
        var t = e.tag;
        if (t !== Me && t !== J && t !== ee && t !== ue && t !== Ue && t !== lt && t !== Be)
          return;
        var a = qe(e) || "ReactComponent";
        if (Hm !== null) {
          if (Hm.has(a))
            return;
          Hm.add(a);
        } else
          Hm = /* @__PURE__ */ new Set([a]);
        var i = Zn;
        try {
          qt(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? qt(e) : Cn();
        }
      }
    }
    var BS;
    {
      var t_ = null;
      BS = function(e, t, a) {
        var i = Ex(t_, t);
        try {
          return bC(e, t, a);
        } catch (s) {
          if (p1() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Qh(), _E(), NC(e, t), Ex(t, i), t.mode & bt && Yg(t), za(null, bC, null, e, t, a), sd()) {
            var o = cd();
            typeof o == "object" && o !== null && o._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var px = !1, IS;
    IS = /* @__PURE__ */ new Set();
    function n_(e) {
      if (Kr && !$1())
        switch (e.tag) {
          case ue:
          case Ue:
          case Be: {
            var t = Nn && qe(Nn) || "Unknown", a = t;
            if (!IS.has(a)) {
              IS.add(a);
              var i = qe(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case ee: {
            px || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), px = !0);
            break;
          }
        }
    }
    function $p(e, t) {
      if (_r) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Qv(e, i, t);
        });
      }
    }
    var YS = {};
    function $S(e, t) {
      {
        var a = ll.current;
        return a !== null ? (a.push(t), YS) : vd(e, t);
      }
    }
    function vx(e) {
      if (e !== YS)
        return hd(e);
    }
    function hx() {
      return ll.current !== null;
    }
    function r_(e) {
      {
        if (e.mode & mt) {
          if (!QC())
            return;
        } else if (!Tw() || Dt !== yr || e.tag !== ue && e.tag !== Ue && e.tag !== Be)
          return;
        if (ll.current === null) {
          var t = Zn;
          try {
            qt(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, qe(e));
          } finally {
            t ? qt(e) : Cn();
          }
        }
      }
    }
    function a_(e) {
      e.tag !== ku && QC() && ll.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Qp(e) {
      JC = e;
    }
    var Oi = null, Qf = null, i_ = function(e) {
      Oi = e;
    };
    function Wf(e) {
      {
        if (Oi === null)
          return e;
        var t = Oi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function QS(e) {
      return Wf(e);
    }
    function WS(e) {
      {
        if (Oi === null)
          return e;
        var t = Oi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Wf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Q,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function mx(e, t) {
      {
        if (Oi === null)
          return !1;
        var a = e.elementType, i = t.type, o = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case ee: {
            typeof i == "function" && (o = !0);
            break;
          }
          case ue: {
            (typeof i == "function" || s === Je) && (o = !0);
            break;
          }
          case Ue: {
            (s === Q || s === Je) && (o = !0);
            break;
          }
          case lt:
          case Be: {
            (s === ht || s === Je) && (o = !0);
            break;
          }
          default:
            return !1;
        }
        if (o) {
          var f = Oi(a);
          if (f !== void 0 && f === Oi(i))
            return !0;
        }
        return !1;
      }
    }
    function yx(e) {
      {
        if (Oi === null || typeof WeakSet != "function")
          return;
        Qf === null && (Qf = /* @__PURE__ */ new WeakSet()), Qf.add(e);
      }
    }
    var l_ = function(e, t) {
      {
        if (Oi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        jo(), Ao(function() {
          GS(e.current, i, a);
        });
      }
    }, o_ = function(e, t) {
      {
        if (e.context !== li)
          return;
        jo(), Ao(function() {
          Wp(t, e, null, null);
        });
      }
    };
    function GS(e, t, a) {
      {
        var i = e.alternate, o = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case ue:
          case Be:
          case ee:
            v = p;
            break;
          case Ue:
            v = p.render;
            break;
        }
        if (Oi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var _ = Oi(v);
          _ !== void 0 && (a.has(_) ? g = !0 : t.has(_) && (f === ee ? g = !0 : y = !0));
        }
        if (Qf !== null && (Qf.has(e) || i !== null && Qf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var T = Ba(e, $e);
          T !== null && Er(T, e, $e, Wt);
        }
        o !== null && !g && GS(o, t, a), s !== null && GS(s, t, a);
      }
    }
    var u_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(o) {
          return o.current;
        }));
        return qS(e.current, i, a), a;
      }
    };
    function qS(e, t, a) {
      {
        var i = e.child, o = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case ue:
          case Be:
          case ee:
            p = f;
            break;
          case Ue:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? s_(e, a) : i !== null && qS(i, t, a), o !== null && qS(o, t, a);
      }
    }
    function s_(e, t) {
      {
        var a = c_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ie:
              t.add(i.stateNode);
              return;
            case De:
              t.add(i.stateNode.containerInfo);
              return;
            case J:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function c_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ie)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var KS;
    {
      KS = !1;
      try {
        var gx = Object.preventExtensions({});
      } catch {
        KS = !0;
      }
    }
    function f_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Le, this.subtreeFlags = Le, this.deletions = null, this.lanes = P, this.childLanes = P, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !KS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var oi = function(e, t, a, i) {
      return new f_(e, t, a, i);
    };
    function XS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function d_(e) {
      return typeof e == "function" && !XS(e) && e.defaultProps === void 0;
    }
    function p_(e) {
      if (typeof e == "function")
        return XS(e) ? ee : ue;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Q)
          return Ue;
        if (t === ht)
          return lt;
      }
      return Me;
    }
    function ac(e, t) {
      var a = e.alternate;
      a === null ? (a = oi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Le, a.subtreeFlags = Le, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Fn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Me:
        case ue:
        case Be:
          a.type = Wf(e.type);
          break;
        case ee:
          a.type = QS(e.type);
          break;
        case Ue:
          a.type = WS(e.type);
          break;
      }
      return a;
    }
    function v_(e, t) {
      e.flags &= Fn | xn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = P, e.lanes = t, e.child = null, e.subtreeFlags = Le, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Le, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function h_(e, t, a) {
      var i;
      return e === Ah ? (i = mt, t === !0 && (i |= rt, i |= Jt)) : i = ze, _r && (i |= bt), oi(J, null, null, i);
    }
    function JS(e, t, a, i, o, s) {
      var f = Me, p = e;
      if (typeof e == "function")
        XS(e) ? (f = ee, p = QS(p)) : p = Wf(p);
      else if (typeof e == "string")
        f = ie;
      else
        e: switch (e) {
          case Wr:
            return Pu(a.children, o, s, t);
          case ci:
            f = Sn, o |= rt, (o & mt) !== ze && (o |= Jt);
            break;
          case fi:
            return m_(a, o, s, t);
          case se:
            return y_(a, o, s, t);
          case fe:
            return g_(a, o, s, t);
          case bn:
            return Sx(a, o, s, t);
          case on:
          case gt:
          case fn:
          case Rr:
          case ct:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case zi:
                  f = et;
                  break e;
                case x:
                  f = Ut;
                  break e;
                case Q:
                  f = Ue, p = WS(p);
                  break e;
                case ht:
                  f = lt;
                  break e;
                case Je:
                  f = vn, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? qe(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = oi(f, a, t, o);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function ZS(e, t, a) {
      var i = null;
      i = e._owner;
      var o = e.type, s = e.key, f = e.props, p = JS(o, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Pu(e, t, a, i) {
      var o = oi(Xe, e, i, t);
      return o.lanes = a, o;
    }
    function m_(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var o = oi(xt, e, i, t | bt);
      return o.elementType = fi, o.lanes = a, o.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, o;
    }
    function y_(e, t, a, i) {
      var o = oi(ge, e, i, t);
      return o.elementType = se, o.lanes = a, o;
    }
    function g_(e, t, a, i) {
      var o = oi(Ht, e, i, t);
      return o.elementType = fe, o.lanes = a, o;
    }
    function Sx(e, t, a, i) {
      var o = oi(Fe, e, i, t);
      o.elementType = bn, o.lanes = a;
      var s = {
        isHidden: !1
      };
      return o.stateNode = s, o;
    }
    function e0(e, t, a) {
      var i = oi(_e, e, null, t);
      return i.lanes = a, i;
    }
    function S_() {
      var e = oi(ie, null, null, ze);
      return e.elementType = "DELETED", e;
    }
    function E_(e) {
      var t = oi(tn, null, null, ze);
      return t.stateNode = e, t;
    }
    function t0(e, t, a) {
      var i = e.children !== null ? e.children : [], o = oi(De, i, e.key, t);
      return o.lanes = a, o.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, o;
    }
    function Ex(e, t) {
      return e === null && (e = oi(Me, null, null, ze)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function C_(e, t, a, i, o) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Ay, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Hn, this.eventTimes = Xc(P), this.expirationTimes = Xc(Wt), this.pendingLanes = P, this.suspendedLanes = P, this.pingedLanes = P, this.expiredLanes = P, this.mutableReadLanes = P, this.finishedLanes = P, this.entangledLanes = P, this.entanglements = Xc(P), this.identifierPrefix = i, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < _d; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Ah:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case ku:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function Cx(e, t, a, i, o, s, f, p, v, y) {
      var g = new C_(e, t, a, p, v), _ = h_(t, s);
      g.current = _, _.stateNode = g;
      {
        var T = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        _.memoizedState = T;
      }
      return vg(_), g;
    }
    var n0 = "18.3.1";
    function x_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return da(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: ma,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var r0, a0;
    r0 = !1, a0 = {};
    function xx(e) {
      if (!e)
        return li;
      var t = au(e), a = a1(t);
      if (t.tag === ee) {
        var i = t.type;
        if (Al(i))
          return q0(t, i, a);
      }
      return a;
    }
    function R_(e, t) {
      {
        var a = au(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var o = ea(a);
        if (o === null)
          return null;
        if (o.mode & rt) {
          var s = qe(a) || "Component";
          if (!a0[s]) {
            a0[s] = !0;
            var f = Zn;
            try {
              qt(o), a.mode & rt ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? qt(f) : Cn();
            }
          }
        }
        return o.stateNode;
      }
    }
    function Rx(e, t, a, i, o, s, f, p) {
      var v = !1, y = null;
      return Cx(e, t, v, y, a, i, o, s, f);
    }
    function Tx(e, t, a, i, o, s, f, p, v, y) {
      var g = !0, _ = Cx(a, i, g, e, o, s, f, p, v);
      _.context = xx(null);
      var T = _.current, z = ba(), A = Hu(T), F = Mo(z, A);
      return F.callback = t ?? null, Nu(T, F, A), Ow(_, A, z), _;
    }
    function Wp(e, t, a, i) {
      gd(t, e);
      var o = t.current, s = ba(), f = Hu(o);
      kc(f);
      var p = xx(a);
      t.context === null ? t.context = p : t.pendingContext = p, Kr && Zn !== null && !r0 && (r0 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, qe(Zn) || "Unknown"));
      var v = Mo(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = Nu(o, v, f);
      return y !== null && (Er(y, o, f, s), Xh(y, o, f)), f;
    }
    function Vm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ie:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function T_(e) {
      switch (e.tag) {
        case J: {
          var t = e.stateNode;
          if (yo(t)) {
            var a = Bv(t);
            zw(t, a);
          }
          break;
        }
        case ge: {
          Ao(function() {
            var o = Ba(e, $e);
            if (o !== null) {
              var s = ba();
              Er(o, e, $e, s);
            }
          });
          var i = $e;
          i0(e, i);
          break;
        }
      }
    }
    function bx(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Ld(a.retryLane, t));
    }
    function i0(e, t) {
      bx(e, t);
      var a = e.alternate;
      a && bx(a, t);
    }
    function b_(e) {
      if (e.tag === ge) {
        var t = pu, a = Ba(e, t);
        if (a !== null) {
          var i = ba();
          Er(a, e, t, i);
        }
        i0(e, t);
      }
    }
    function w_(e) {
      if (e.tag === ge) {
        var t = Hu(e), a = Ba(e, t);
        if (a !== null) {
          var i = ba();
          Er(a, e, t, i);
        }
        i0(e, t);
      }
    }
    function wx(e) {
      var t = ni(e);
      return t === null ? null : t.stateNode;
    }
    var _x = function(e) {
      return null;
    };
    function __(e) {
      return _x(e);
    }
    var kx = function(e) {
      return !1;
    };
    function k_(e) {
      return kx(e);
    }
    var Dx = null, Ox = null, Nx = null, Mx = null, Lx = null, zx = null, Ux = null, Ax = null, jx = null;
    {
      var Fx = function(e, t, a) {
        var i = t[a], o = at(e) ? e.slice() : nt({}, e);
        return a + 1 === t.length ? (at(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = Fx(e[i], t, a + 1), o);
      }, Hx = function(e, t) {
        return Fx(e, t, 0);
      }, Vx = function(e, t, a, i) {
        var o = t[i], s = at(e) ? e.slice() : nt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[o], at(s) ? s.splice(o, 1) : delete s[o];
        } else
          s[o] = Vx(
            // $FlowFixMe number or string is fine here
            e[o],
            t,
            a,
            i + 1
          );
        return s;
      }, Px = function(e, t, a) {
        if (t.length !== a.length) {
          Pe("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Pe("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return Vx(e, t, a, 0);
      }, Bx = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var o = t[a], s = at(e) ? e.slice() : nt({}, e);
        return s[o] = Bx(e[o], t, a + 1, i), s;
      }, Ix = function(e, t, a) {
        return Bx(e, t, 0, a);
      }, l0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      Dx = function(e, t, a, i) {
        var o = l0(e, t);
        if (o !== null) {
          var s = Ix(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = nt({}, e.memoizedProps);
          var f = Ba(e, $e);
          f !== null && Er(f, e, $e, Wt);
        }
      }, Ox = function(e, t, a) {
        var i = l0(e, t);
        if (i !== null) {
          var o = Hx(i.memoizedState, a);
          i.memoizedState = o, i.baseState = o, e.memoizedProps = nt({}, e.memoizedProps);
          var s = Ba(e, $e);
          s !== null && Er(s, e, $e, Wt);
        }
      }, Nx = function(e, t, a, i) {
        var o = l0(e, t);
        if (o !== null) {
          var s = Px(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = nt({}, e.memoizedProps);
          var f = Ba(e, $e);
          f !== null && Er(f, e, $e, Wt);
        }
      }, Mx = function(e, t, a) {
        e.pendingProps = Ix(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, $e);
        i !== null && Er(i, e, $e, Wt);
      }, Lx = function(e, t) {
        e.pendingProps = Hx(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ba(e, $e);
        a !== null && Er(a, e, $e, Wt);
      }, zx = function(e, t, a) {
        e.pendingProps = Px(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, $e);
        i !== null && Er(i, e, $e, Wt);
      }, Ux = function(e) {
        var t = Ba(e, $e);
        t !== null && Er(t, e, $e, Wt);
      }, Ax = function(e) {
        _x = e;
      }, jx = function(e) {
        kx = e;
      };
    }
    function D_(e) {
      var t = ea(e);
      return t === null ? null : t.stateNode;
    }
    function O_(e) {
      return null;
    }
    function N_() {
      return Zn;
    }
    function M_(e) {
      var t = e.findFiberByHostInstance, a = re.ReactCurrentDispatcher;
      return yd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: Dx,
        overrideHookStateDeletePath: Ox,
        overrideHookStateRenamePath: Nx,
        overrideProps: Mx,
        overridePropsDeletePath: Lx,
        overridePropsRenamePath: zx,
        setErrorHandler: Ax,
        setSuspenseHandler: jx,
        scheduleUpdate: Ux,
        currentDispatcherRef: a,
        findHostInstanceByFiber: D_,
        findFiberByHostInstance: t || O_,
        // React Refresh
        findHostInstancesForRefresh: u_,
        scheduleRefresh: l_,
        scheduleRoot: o_,
        setRefreshHandler: i_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: N_,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: n0
      });
    }
    var Yx = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function o0(e) {
      this._internalRoot = e;
    }
    Pm.prototype.render = o0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Bm(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== An) {
          var i = wx(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Wp(e, t, null, null);
    }, Pm.prototype.unmount = o0.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        nx() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Ao(function() {
          Wp(null, e, null, null);
        }), Y0(t);
      }
    };
    function L_(e, t) {
      if (!Bm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      $x(e);
      var a = !1, i = !1, o = "", s = Yx;
      t != null && (t.hydrate ? Pe("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === or && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = Rx(e, Ah, null, a, i, o, s);
      Dh(f.current, e);
      var p = e.nodeType === An ? e.parentNode : e;
      return Zd(p), new o0(f);
    }
    function Pm(e) {
      this._internalRoot = e;
    }
    function z_(e) {
      e && Zv(e);
    }
    Pm.prototype.unstable_scheduleHydration = z_;
    function U_(e, t, a) {
      if (!Bm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      $x(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, o = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = Yx;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = Tx(t, null, e, Ah, i, s, f, p, v);
      if (Dh(y.current, e), Zd(e), o)
        for (var g = 0; g < o.length; g++) {
          var _ = o[g];
          H1(y, _);
        }
      return new Pm(y);
    }
    function Bm(e) {
      return !!(e && (e.nodeType === Xr || e.nodeType === Ii || e.nodeType === Ku));
    }
    function Gp(e) {
      return !!(e && (e.nodeType === Xr || e.nodeType === Ii || e.nodeType === Ku || e.nodeType === An && e.nodeValue === " react-mount-point-unstable "));
    }
    function $x(e) {
      e.nodeType === Xr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), cp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var A_ = re.ReactCurrentOwner, Qx;
    Qx = function(e) {
      if (e._reactRootContainer && e.nodeType !== An) {
        var t = wx(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = u0(e), o = !!(i && wu(i));
      o && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Xr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function u0(e) {
      return e ? e.nodeType === Ii ? e.documentElement : e.firstChild : null;
    }
    function Wx() {
    }
    function j_(e, t, a, i, o) {
      if (o) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var T = Vm(f);
            s.call(T);
          };
        }
        var f = Tx(
          t,
          i,
          e,
          ku,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Wx
        );
        e._reactRootContainer = f, Dh(f.current, e);
        var p = e.nodeType === An ? e.parentNode : e;
        return Zd(p), Ao(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var T = Vm(g);
            y.call(T);
          };
        }
        var g = Rx(
          e,
          ku,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Wx
        );
        e._reactRootContainer = g, Dh(g.current, e);
        var _ = e.nodeType === An ? e.parentNode : e;
        return Zd(_), Ao(function() {
          Wp(t, g, a, i);
        }), g;
      }
    }
    function F_(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Im(e, t, a, i, o) {
      Qx(a), F_(o === void 0 ? null : o, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = j_(a, t, e, o, i);
      else {
        if (f = s, typeof o == "function") {
          var p = o;
          o = function() {
            var v = Vm(f);
            p.call(v);
          };
        }
        Wp(t, f, e, o);
      }
      return Vm(f);
    }
    var Gx = !1;
    function H_(e) {
      {
        Gx || (Gx = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = A_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", kt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Xr ? e : R_(e, "findDOMNode");
    }
    function V_(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = cp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Im(null, e, t, !0, a);
    }
    function P_(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = cp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Im(null, e, t, !1, a);
    }
    function B_(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !io(e))
        throw new Error("parentComponent must be a valid React Component");
      return Im(e, t, a, !1, i);
    }
    var qx = !1;
    function I_(e) {
      if (qx || (qx = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Gp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = cp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = u0(e), i = a && !wu(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Ao(function() {
          Im(null, null, e, !1, function() {
            e._reactRootContainer = null, Y0(e);
          });
        }), !0;
      } else {
        {
          var o = u0(e), s = !!(o && wu(o)), f = e.nodeType === Xr && Gp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    uy(T_), jd(b_), sy(w_), nf(Sa), qv(Wv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), is($R), _v(HS, Uw, Ao);
    function Y_(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Bm(t))
        throw new Error("Target container is not a DOM element.");
      return x_(e, t, null, a);
    }
    function $_(e, t, a, i) {
      return B_(e, t, a, i);
    }
    var s0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [wu, Tf, Oh, od, eu, HS]
    };
    function Q_(e, t) {
      return s0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), L_(e, t);
    }
    function W_(e, t, a) {
      return s0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), U_(e, t, a);
    }
    function G_(e) {
      return nx() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Ao(e);
    }
    var q_ = M_({
      findFiberByHostInstance: Is,
      bundleType: 1,
      version: n0,
      rendererPackageName: "react-dom"
    });
    if (!q_ && qn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var Kx = window.location.protocol;
      /^(https?|file):$/.test(Kx) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (Kx === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Wa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = s0, Wa.createPortal = Y_, Wa.createRoot = Q_, Wa.findDOMNode = H_, Wa.flushSync = G_, Wa.hydrate = V_, Wa.hydrateRoot = W_, Wa.render = P_, Wa.unmountComponentAtNode = I_, Wa.unstable_batchedUpdates = HS, Wa.unstable_renderSubtreeIntoContainer = $_, Wa.version = n0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Wa;
}
var sR = {};
function cR() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (sR.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cR);
    } catch ($) {
      console.error($);
    }
  }
}
sR.NODE_ENV === "production" ? (cR(), v0.exports = lk()) : v0.exports = ok();
var uk = v0.exports, h0, sk = {}, $m = uk;
if (sk.NODE_ENV === "production")
  h0 = $m.createRoot, $m.hydrateRoot;
else {
  var lR = $m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  h0 = function($, V) {
    lR.usingClientEntryPoint = !0;
    try {
      return $m.createRoot($, V);
    } finally {
      lR.usingClientEntryPoint = !1;
    }
  };
}
const ck = ($) => {
  const V = async (k, re = {}) => {
    const ke = `${$}${k}`, be = await fetch(ke, {
      ...re,
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": "ck_4d0d56d56c7245599b5e9c25801f7e4b",
        ...re.headers
      }
    });
    if (!be.ok)
      throw new Error(`API Error: ${be.status}`);
    return be.json();
  };
  return {
    async createConversation(k, re, ke) {
      return V("/conversations", {
        method: "POST",
        body: JSON.stringify({ businessId: k, channelId: re, sessionId: ke })
      });
    },
    async sendMessage(k, re, ke = "user") {
      return V("/messages", {
        method: "POST",
        body: JSON.stringify({ conversationId: k, sender: ke, content: re })
      });
    },
    async getMessages(k) {
      return V(`/messages?conversationId=${k}`);
    },
    async closeConversation(k) {
      return V(`/conversations/${k}/close`, {
        method: "PATCH"
      });
    },
    async escalateConversation(k, re = {}) {
      return V(`/conversations/${k}/escalate`, {
        method: "PATCH",
        body: JSON.stringify(re)
      });
    }
  };
}, fk = () => {
  const $ = "nico_session_id";
  let V = localStorage.getItem($);
  return V || (V = "session_" + crypto.randomUUID(), localStorage.setItem($, V)), V;
}, dk = ($) => {
  const { businessId: V, channelId: k, apiUrl: re, welcomeMessage: ke } = $, [be, Pe] = It.useState(!1), [S, Ne] = It.useState(!1), [ue, ee] = It.useState(null), [Me, J] = It.useState([]), [De, ie] = It.useState(!1), [_e, Xe] = It.useState(null), [Sn, Ut] = It.useState(!1), [et, Ue] = It.useState(!1), [xt, ge] = It.useState(!1), [lt, Be] = It.useState(null), vn = fk(), dt = ck(re);
  It.useEffect(() => {
    ke && Me.length === 0 && J([{
      id: "welcome",
      sender: "assistant",
      content: ke,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    }]);
  }, [ke]);
  const tn = It.useCallback(async () => {
    var te;
    if (!ue) {
      Ne(!0), Xe(null);
      try {
        const b = await dt.createConversation(V, k, vn);
        b.success && ((te = b.data) != null && te.id) && ee(b.data.id);
      } catch (b) {
        Xe("No se pudo iniciar la conversación"), console.error(b);
      } finally {
        Ne(!1);
      }
    }
  }, [V, k, vn, ue, dt]), Ht = It.useCallback(async (te) => {
    var B;
    if (!te.trim() || S || et) return;
    const b = {
      id: "msg_" + Date.now(),
      sender: "user",
      content: te.trim(),
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    J((Ce) => [...Ce, b]), ie(!0), Xe(null);
    try {
      const Ce = await dt.sendMessage(ue, te.trim(), "user");
      if (Ce.success && ((B = Ce.data) != null && B.aiMessage)) {
        const { userMessage: Ie, aiMessage: Ye } = Ce.data;
        J((ut) => [...ut.filter((Ge) => Ge.id !== b.id), Ie, Ye]), Ye.confidenceScore !== null && Ye.confidenceScore < 0.5 && Ut(!1);
      }
    } catch {
      Xe("No se pudo enviar el mensaje"), J((Ie) => [...Ie, {
        id: "error_" + Date.now(),
        sender: "assistant",
        content: "Lo siento, tuve un problema al procesar tu mensaje. Por favor intenta de nuevo.",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      }]);
    } finally {
      ie(!1);
    }
  }, [ue, S, et, dt]), yt = It.useCallback(async () => {
    if (!ue) {
      Ue(!0), Pe(!1);
      return;
    }
    try {
      await dt.closeConversation(ue);
    } catch (te) {
      console.error("Error closing conversation:", te);
    } finally {
      Ue(!0), Pe(!1);
    }
  }, [ue, dt]), Fe = It.useCallback(async (te) => {
    var b;
    if (ue) {
      Be(null);
      try {
        await dt.escalateConversation(ue, te), Ut(!0), ge(!1);
      } catch (B) {
        const Ce = ((b = B.message) != null && b.includes("404"), "En este momento no hemos podido notificar al agente. Por favor intenta en unos minutos o contáctanos por otro medio.");
        Be(Ce), console.error("Error escalating:", B);
      }
    }
  }, [ue, dt]), Nt = It.useCallback(() => {
    ge(!0), Be(null);
  }, []), vt = It.useCallback(() => {
    ge(!1), Be(null);
  }, []), ot = It.useCallback(async () => {
    be || await tn(), Pe((te) => !te);
  }, [be, tn]), Y = It.useCallback(() => {
    Pe(!1);
  }, []), Se = It.useCallback(() => {
    localStorage.removeItem("nico_session_id"), ee(null), J([]), Ue(!1), Ut(!1), Xe(null);
  }, []);
  return {
    isOpen: be,
    isLoading: S,
    messages: Me,
    isTyping: De,
    error: _e,
    isEscalated: Sn,
    isClosed: et,
    showEscalationModal: xt,
    escalationError: lt,
    sendMessage: Ht,
    closeConversation: yt,
    minimizeChat: Y,
    escalate: Fe,
    openEscalationModal: Nt,
    closeEscalationModal: vt,
    toggleChat: ot,
    resetChat: Se
  };
}, Qm = ({ size: $ = "medium" }) => {
  const V = {
    small: 40,
    medium: 56,
    large: 80
  }, k = V[$] || V.medium;
  return /* @__PURE__ */ X.jsx(
    "img",
    {
      src: "https://firebasestorage.googleapis.com/v0/b/corox-radios.appspot.com/o/asistant.jpg?alt=media&token=2d9f0f1c-0e6f-4887-bd90-bf8fc2f6e5f8",
      alt: "Assistant avatar",
      width: k,
      height: k,
      style: {
        borderRadius: "50%",
        objectFit: "cover"
      }
    }
  );
}, pk = ({ onClick: $, isOpen: V, notification: k = 0 }) => {
  const [re, ke] = It.useState(!1);
  return /* @__PURE__ */ X.jsxs(
    "button",
    {
      className: `nico-launcher ${V ? "nico-launcher-open" : ""}`,
      onClick: $,
      onMouseEnter: () => ke(!0),
      onMouseLeave: () => ke(!1),
      "aria-label": V ? "Cerrar chat" : "Abrir chat con Nico",
      children: [
        /* @__PURE__ */ X.jsx("div", { className: "nico-launcher-avatar", children: /* @__PURE__ */ X.jsx(Qm, { size: "medium", showAnimation: !V }) }),
        !V && /* @__PURE__ */ X.jsx("div", { className: "nico-launcher-pulse" }),
        k > 0 && !V && /* @__PURE__ */ X.jsx("span", { className: "nico-launcher-badge", children: k > 9 ? "9+" : k }),
        V && /* @__PURE__ */ X.jsx("div", { className: "nico-launcher-close", children: /* @__PURE__ */ X.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
          /* @__PURE__ */ X.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
          /* @__PURE__ */ X.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
        ] }) })
      ]
    }
  );
}, vk = ({
  title: $ = "Nico - Asistente Virtual",
  onClose: V,
  onOpenEscalationModal: k,
  isEscalated: re
}) => /* @__PURE__ */ X.jsxs("div", { className: "nico-header", children: [
  /* @__PURE__ */ X.jsxs("div", { className: "nico-header-info", children: [
    /* @__PURE__ */ X.jsx(
      "a",
      {
        href: "https://corox.click/nico",
        target: "_blank",
        rel: "noopener noreferrer",
        children: /* @__PURE__ */ X.jsx(Qm, { size: "medium", showAnimation: !1 })
      }
    ),
    /* @__PURE__ */ X.jsxs("div", { className: "nico-header-text", children: [
      /* @__PURE__ */ X.jsx("span", { className: "nico-header-title", children: $ }),
      /* @__PURE__ */ X.jsx("span", { className: "nico-header-status", children: re ? "Conectando con un agente..." : "En línea" })
    ] })
  ] }),
  /* @__PURE__ */ X.jsxs("div", { className: "nico-header-actions", children: [
    !re && /* @__PURE__ */ X.jsx(
      "button",
      {
        className: "nico-header-button nico-escalate-btn",
        onClick: k,
        title: "Hablar con un agente",
        children: /* @__PURE__ */ X.jsx(
          "svg",
          {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: /* @__PURE__ */ X.jsx("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" })
          }
        )
      }
    ),
    /* @__PURE__ */ X.jsx(
      "button",
      {
        className: "nico-header-button nico-minimize-btn",
        onClick: V,
        title: "Minimizar chat",
        children: /* @__PURE__ */ X.jsx(
          "svg",
          {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: /* @__PURE__ */ X.jsx("line", { x1: "19", y1: "12", x2: "5", y2: "12" })
          }
        )
      }
    )
  ] })
] }), hk = ({ message: $, showAvatar: V = !0 }) => {
  const k = $.sender === "user", re = new Date($.timestamp || $.createdAt), ke = isNaN(re.getTime()) ? "" : re.toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit"
  });
  return /* @__PURE__ */ X.jsxs("div", { className: `nico-message ${k ? "nico-message-user" : "nico-message-assistant"}`, children: [
    !k && V && /* @__PURE__ */ X.jsx("div", { className: "nico-message-avatar", children: /* @__PURE__ */ X.jsx(Qm, { size: "small", showAnimation: !1 }) }),
    /* @__PURE__ */ X.jsxs("div", { className: "nico-message-content", children: [
      /* @__PURE__ */ X.jsx("div", { className: "nico-message-bubble", children: $.content }),
      /* @__PURE__ */ X.jsx("div", { className: "nico-message-time", children: ke })
    ] })
  ] });
}, mk = ({ messages: $, isTyping: V }) => {
  const k = It.useRef(null);
  return It.useEffect(() => {
    var re;
    (re = k.current) == null || re.scrollIntoView({ behavior: "smooth" });
  }, [$, V]), /* @__PURE__ */ X.jsxs("div", { className: "nico-message-list", children: [
    $.map((re, ke) => /* @__PURE__ */ X.jsx(
      hk,
      {
        message: re,
        showAvatar: re.sender !== "user"
      },
      re.id || ke
    )),
    V && /* @__PURE__ */ X.jsxs("div", { className: "nico-typing", children: [
      /* @__PURE__ */ X.jsx("div", { className: "nico-message-avatar", children: /* @__PURE__ */ X.jsx(Qm, { size: "small", showAnimation: !1 }) }),
      /* @__PURE__ */ X.jsxs("div", { className: "nico-typing-bubble", children: [
        /* @__PURE__ */ X.jsx("span", { className: "nico-typing-dot" }),
        /* @__PURE__ */ X.jsx("span", { className: "nico-typing-dot" }),
        /* @__PURE__ */ X.jsx("span", { className: "nico-typing-dot" })
      ] })
    ] }),
    /* @__PURE__ */ X.jsx("div", { ref: k })
  ] });
}, yk = ({ onSend: $, disabled: V = !1, placeholder: k = "Escribe tu mensaje..." }) => {
  const [re, ke] = It.useState(""), be = It.useRef(null), Pe = (Ne) => {
    Ne.preventDefault(), re.trim() && !V && ($(re), ke(""));
  }, S = (Ne) => {
    Ne.key === "Enter" && !Ne.shiftKey && (Ne.preventDefault(), Pe(Ne));
  };
  return It.useEffect(() => {
    be.current && (be.current.style.height = "auto", be.current.style.height = Math.min(be.current.scrollHeight, 100) + "px");
  }, [re]), /* @__PURE__ */ X.jsx("form", { className: "nico-input-form", onSubmit: Pe, children: /* @__PURE__ */ X.jsxs("div", { className: "nico-input-container", children: [
    /* @__PURE__ */ X.jsx(
      "textarea",
      {
        ref: be,
        className: "nico-input",
        value: re,
        onChange: (Ne) => ke(Ne.target.value),
        onKeyDown: S,
        placeholder: k,
        disabled: V,
        rows: 1
      }
    ),
    /* @__PURE__ */ X.jsx(
      "button",
      {
        type: "submit",
        className: "nico-send-button",
        disabled: !re.trim() || V,
        children: /* @__PURE__ */ X.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ X.jsx("path", { d: "M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" }) })
      }
    )
  ] }) });
}, gk = ({ onSubmit: $, onClose: V, error: k }) => {
  const [re, ke] = It.useState({
    customerName: "",
    customerContact: "",
    customerQuestion: ""
  }), [be, Pe] = It.useState({}), S = () => {
    const ee = {};
    return re.customerName.trim() || (ee.customerName = "El nombre es requerido"), re.customerContact.trim() || (ee.customerContact = "El contacto es requerido"), re.customerQuestion.trim() || (ee.customerQuestion = "La pregunta es requerida"), Pe(ee), Object.keys(ee).length === 0;
  }, Ne = (ee) => {
    ee.preventDefault(), S() && $(re);
  }, ue = (ee) => {
    const { name: Me, value: J } = ee.target;
    ke((De) => ({ ...De, [Me]: J })), be[Me] && Pe((De) => ({ ...De, [Me]: "" }));
  };
  return /* @__PURE__ */ X.jsx("div", { className: "nico-modal-overlay", onClick: V, children: /* @__PURE__ */ X.jsxs("div", { className: "nico-modal", onClick: (ee) => ee.stopPropagation(), children: [
    /* @__PURE__ */ X.jsxs("div", { className: "nico-modal-header", children: [
      /* @__PURE__ */ X.jsx("h3", { children: "Escalar a un agente" }),
      /* @__PURE__ */ X.jsx("button", { className: "nico-modal-close", onClick: V, children: /* @__PURE__ */ X.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
        /* @__PURE__ */ X.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        /* @__PURE__ */ X.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
      ] }) })
    ] }),
    /* @__PURE__ */ X.jsxs("form", { onSubmit: Ne, className: "nico-modal-form", children: [
      /* @__PURE__ */ X.jsxs("div", { className: "nico-form-group", children: [
        /* @__PURE__ */ X.jsx("label", { htmlFor: "customerName", children: "Nombre" }),
        /* @__PURE__ */ X.jsx(
          "input",
          {
            type: "text",
            id: "customerName",
            name: "customerName",
            value: re.customerName,
            onChange: ue,
            placeholder: "Tu nombre completo",
            className: be.customerName ? "nico-input-error" : ""
          }
        ),
        be.customerName && /* @__PURE__ */ X.jsx("span", { className: "nico-error-text", children: be.customerName })
      ] }),
      /* @__PURE__ */ X.jsxs("div", { className: "nico-form-group", children: [
        /* @__PURE__ */ X.jsx("label", { htmlFor: "customerContact", children: "Contacto (Email o Teléfono)" }),
        /* @__PURE__ */ X.jsx(
          "input",
          {
            type: "text",
            id: "customerContact",
            name: "customerContact",
            value: re.customerContact,
            onChange: ue,
            placeholder: "correo@ejemplo.com o +1234567890",
            className: be.customerContact ? "nico-input-error" : ""
          }
        ),
        be.customerContact && /* @__PURE__ */ X.jsx("span", { className: "nico-error-text", children: be.customerContact })
      ] }),
      /* @__PURE__ */ X.jsxs("div", { className: "nico-form-group", children: [
        /* @__PURE__ */ X.jsx("label", { htmlFor: "customerQuestion", children: "Pregunta para el agente" }),
        /* @__PURE__ */ X.jsx(
          "textarea",
          {
            id: "customerQuestion",
            name: "customerQuestion",
            value: re.customerQuestion,
            onChange: ue,
            placeholder: "¿Cuál es tu consulta?",
            rows: "3",
            className: be.customerQuestion ? "nico-input-error" : ""
          }
        ),
        be.customerQuestion && /* @__PURE__ */ X.jsx("span", { className: "nico-error-text", children: be.customerQuestion })
      ] }),
      k && /* @__PURE__ */ X.jsxs("div", { className: "nico-escalation-error", children: [
        /* @__PURE__ */ X.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
          /* @__PURE__ */ X.jsx("circle", { cx: "12", cy: "12", r: "10" }),
          /* @__PURE__ */ X.jsx("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
          /* @__PURE__ */ X.jsx("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
        ] }),
        /* @__PURE__ */ X.jsx("span", { children: k })
      ] }),
      /* @__PURE__ */ X.jsxs("div", { className: "nico-modal-actions", children: [
        /* @__PURE__ */ X.jsx("button", { type: "button", className: "nico-btn-cancel", onClick: V, children: "Cancelar" }),
        /* @__PURE__ */ X.jsx("button", { type: "submit", className: "nico-btn-submit", disabled: !!k, children: "Enviar" })
      ] })
    ] })
  ] }) });
}, oR = ({
  messages: $,
  isTyping: V,
  isLoading: k,
  isEscalated: re,
  isClosed: ke,
  showEscalationModal: be,
  escalationError: Pe,
  onSendMessage: S,
  onClose: Ne,
  onMinimize: ue,
  onEscalate: ee,
  onOpenEscalationModal: Me,
  onCloseEscalationModal: J,
  title: De,
  closeText: ie = "Finalizar chat"
}) => ke ? /* @__PURE__ */ X.jsx("div", { className: "nico-chat-closed", children: /* @__PURE__ */ X.jsxs("div", { className: "nico-chat-closed-content", children: [
  /* @__PURE__ */ X.jsx("div", { className: "nico-chat-closed-icon", children: /* @__PURE__ */ X.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
    /* @__PURE__ */ X.jsx("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
    /* @__PURE__ */ X.jsx("polyline", { points: "22 4 12 14.01 9 11.01" })
  ] }) }),
  /* @__PURE__ */ X.jsx("h3", { children: "Conversación finalizada" }),
  /* @__PURE__ */ X.jsx("p", { children: "Gracias por contactarnos. Si necesitas más ayuda, puedes iniciar una nueva conversación." })
] }) }) : /* @__PURE__ */ X.jsxs("div", { className: "nico-chat-window", children: [
  /* @__PURE__ */ X.jsx(
    vk,
    {
      title: De,
      onClose: ue || Ne,
      onOpenEscalationModal: Me,
      isEscalated: re
    }
  ),
  /* @__PURE__ */ X.jsx(
    mk,
    {
      messages: $,
      isTyping: V
    }
  ),
  re && /* @__PURE__ */ X.jsx("div", { className: "nico-escalation-notice", children: "Listo. Un agente humano se contactará para ayudarte." }),
  /* @__PURE__ */ X.jsx(
    yk,
    {
      onSend: S,
      disabled: k || V || re,
      placeholder: re ? "Un agente te atenderá pronto..." : "Escribe tu mensaje..."
    }
  ),
  /* @__PURE__ */ X.jsx("div", { className: "nico-footer", children: /* @__PURE__ */ X.jsx("button", { className: "nico-close-chat-btn", onClick: Ne, children: ie }) }),
  be && /* @__PURE__ */ X.jsx(
    gk,
    {
      onSubmit: ee,
      onClose: J,
      error: Pe
    }
  )
] }), fR = ({
  businessId: $,
  channelId: V,
  apiUrl: k = "http://localhost:3000/api/v1/widget",
  position: re = "bottom-right",
  title: ke = "Nico - Asistente Virtual",
  welcomeMessage: be = "¡Hola! Soy Nico, ¿en qué puedo ayudarte?",
  closeText: Pe = "Finalizar, Gracias",
  primaryColor: S = "#a52a2a"
}) => {
  const {
    isOpen: Ne,
    isLoading: ue,
    messages: ee,
    isTyping: Me,
    isEscalated: J,
    isClosed: De,
    showEscalationModal: ie,
    escalationError: _e,
    sendMessage: Xe,
    closeConversation: Sn,
    minimizeChat: Ut,
    escalate: et,
    openEscalationModal: Ue,
    closeEscalationModal: xt,
    toggleChat: ge
  } = dk({
    businessId: $,
    channelId: V,
    apiUrl: k,
    welcomeMessage: be
  }), lt = re === "bottom-left" ? "nico-position-bottom-left" : "nico-position-bottom-right";
  return /* @__PURE__ */ X.jsxs("div", { className: `nico-widget-container ${lt}`, children: [
    Ne && !De && /* @__PURE__ */ X.jsx(
      oR,
      {
        messages: ee,
        isTyping: Me,
        isLoading: ue,
        isEscalated: J,
        isClosed: De,
        showEscalationModal: ie,
        escalationError: _e,
        onSendMessage: Xe,
        onClose: Sn,
        onMinimize: Ut,
        onEscalate: et,
        onOpenEscalationModal: Ue,
        onCloseEscalationModal: xt,
        title: ke,
        closeText: Pe
      }
    ),
    De && Ne && /* @__PURE__ */ X.jsx("div", { className: "nico-chat-closed-overlay", onClick: ge, children: /* @__PURE__ */ X.jsx(
      oR,
      {
        messages: ee,
        isTyping: !1,
        isLoading: !1,
        isEscalated: !1,
        isClosed: !0,
        showEscalationModal: !1,
        onSendMessage: () => {
        },
        onClose: ge,
        onEscalate: () => {
        },
        onOpenEscalationModal: () => {
        },
        onCloseEscalationModal: () => {
        },
        title: ke,
        closeText: Pe
      }
    ) }),
    /* @__PURE__ */ X.jsx(pk, { onClick: ge, isOpen: Ne })
  ] });
}, Sk = ($, V) => {
  const k = document.getElementById($);
  if (!k) {
    console.error(`NicoWidget: Container with id "${$}" not found`);
    return;
  }
  const re = k.attachShadow({ mode: "open" }), ke = document.createElement("style");
  ke.textContent = `
    .nico-widget-container {
      position: fixed;
      z-index: 999999;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
    }

    .nico-widget-container.nico-position-bottom-right {
      bottom: 20px;
      right: 20px;
    }

    .nico-widget-container.nico-position-bottom-left {
      bottom: 20px;
      left: 20px;
    }

    .nico-launcher {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      border: none;
      cursor: pointer;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      position: relative;
      background: transparent;
    }

    .nico-launcher:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 25px rgba(0, 0, 0, 0.2);
    }

    .nico-launcher-open {
      transform: rotate(90deg);
    }

    .nico-launcher-avatar {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      overflow: hidden;
    }

    .nico-launcher-pulse {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background: #a52a2a;
      animation: nicoPulse 2s ease-out infinite;
    }

    @keyframes nicoPulse {
      0% {
        transform: translate(-50%, -50%) scale(0.8);
        opacity: 1;
      }
      100% {
        transform: translate(-50%, -50%) scale(1.5);
        opacity: 0;
      }
    }

    .nico-launcher-badge {
      position: absolute;
      top: -5px;
      right: -5px;
      background: #EF4444;
      color: white;
      font-size: 11px;
      font-weight: 600;
      min-width: 20px;
      height: 20px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 5px;
    }

    .nico-launcher-close {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 56px;
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .nico-launcher-close svg {
      width: 24px;
      height: 24px;
      stroke: white;
    }

    .nico-chat-window {
      position: absolute;
      bottom: 80px;
      right: 0;
      width: 380px;
      height: 520px;
      background: white;
      border-radius: 16px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      animation: nicoSlideUp 0.3s ease-out;
    }

    @keyframes nicoSlideUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes nicoBounce {
      0% { transform: scale(0); }
      50% { transform: scale(1.1); }
      100% { transform: scale(1); }
    }

    .nico-header {
      background: linear-gradient(135deg, ${V.primaryColor || "#a52a2a"}, ${V.finalGradient || "#d4af37"});
      padding: 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: white;
    }

    .nico-header-info {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .nico-header-text {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .nico-header-title {
      font-size: 16px;
      font-weight: 600;
    }

    .nico-header-status {
      font-size: 12px;
      opacity: 0.9;
    }

    .nico-header-actions {
      display: flex;
      gap: 8px;
    }

    .nico-header-button {
      background: rgba(255, 255, 255, 0.2);
      border: none;
      width: 32px;
      height: 32px;
      border-radius: 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s;
    }

    .nico-header-button:hover {
      background: rgba(255, 255, 255, 0.3);
    }

    .nico-header-button svg {
      width: 18px;
      height: 18px;
      stroke: white;
    }

    .nico-message-list {
      flex: 1;
      overflow-y: auto;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      background: #F9FAFB;
    }

    .nico-message {
      display: flex;
      gap: 8px;
      max-width: 85%;
      animation: nicoFadeIn 0.2s ease-out;
    }

    @keyframes nicoFadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .nico-message-user {
      align-self: flex-end;
      flex-direction: row-reverse;
    }

    .nico-message-assistant {
      align-self: flex-start;
    }

    .nico-message-avatar {
      flex-shrink: 0;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      overflow: hidden;
    }

    .nico-message-content {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .nico-message-bubble {
      padding: 10px 14px;
      border-radius: 16px;
      font-size: 14px;
      line-height: 1.4;
      word-wrap: break-word;
    }

    .nico-message-user .nico-message-bubble {
      background: ${V.primaryColor || "#a52a2a"};
      color: white;
      border-bottom-right-radius: 4px;
    }

    .nico-message-assistant .nico-message-bubble {
      background: white;
      color: #1F2937;
      border: 1px solid #E5E7EB;
      border-bottom-left-radius: 4px;
    }

    .nico-message-time {
      font-size: 10px;
      color: #9CA3AF;
      padding: 0 4px;
    }

    .nico-message-user .nico-message-time {
      text-align: right;
    }

    .nico-typing {
      display: flex;
      gap: 8px;
      align-items: flex-start;
    }

    .nico-typing-bubble {
      background: white;
      border: 1px solid #E5E7EB;
      padding: 12px 16px;
      border-radius: 16px;
      border-bottom-left-radius: 4px;
      display: flex;
      gap: 4px;
      align-items: center;
    }

    .nico-typing-dot {
      width: 8px;
      height: 8px;
      background: #9CA3AF;
      border-radius: 50%;
      animation: nicoTypingBounce 1.4s infinite ease-in-out;
    }

    .nico-typing-dot:nth-child(1) { animation-delay: 0s; }
    .nico-typing-dot:nth-child(2) { animation-delay: 0.2s; }
    .nico-typing-dot:nth-child(3) { animation-delay: 0.4s; }

    @keyframes nicoTypingBounce {
      0%, 80%, 100% {
        transform: scale(0.6);
        opacity: 0.5;
      }
      40% {
        transform: scale(1);
        opacity: 1;
      }
    }

    .nico-input-form {
      padding: 12px 16px;
      border-top: 1px solid #E5E7EB;
      background: white;
    }

    .nico-input-container {
      display: flex;
      gap: 8px;
      align-items: flex-end;
    }

    .nico-input {
      flex: 1;
      border: 1px solid #D1D5DB;
      border-radius: 20px;
      padding: 10px 16px;
      font-size: 14px;
      resize: none;
      max-height: 100px;
      outline: none;
      font-family: inherit;
      transition: border-color 0.2s, box-shadow 0.2s;
    }

    .nico-input:focus {
      border-color: ${V.primaryColor || "#a52a2a"};
      box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
    }

    .nico-input::placeholder {
      color: #9CA3AF;
    }

    .nico-send-button {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: none;
      background: ${V.primaryColor || "#a52a2a"};
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s, transform 0.2s;
      flex-shrink: 0;
    }

    .nico-send-button:hover:not(:disabled) {
      background: #4338CA;
      transform: scale(1.05);
    }

    .nico-send-button:disabled {
      background: #D1D5DB;
      cursor: not-allowed;
    }

    .nico-send-button svg {
      width: 18px;
      height: 18px;
      stroke: white;
    }

    .nico-footer {
      padding: 8px 16px 12px;
      text-align: center;
      border-top: 1px solid #E5E7EB;
    }

    .nico-close-chat-btn {
      background: transparent;
      border: 1px solid #D1D5DB;
      color: #6B7280;
      padding: 6px 16px;
      border-radius: 16px;
      font-size: 12px;
      cursor: pointer;
      transition: all 0.2s;
    }

    .nico-close-chat-btn:hover {
      background: #F3F4F6;
      color: #374151;
    }

    .nico-escalation-notice {
      background: #FEF3C7;
      color: #92400E;
      padding: 10px 16px;
      font-size: 13px;
      text-align: center;
      border-top: 1px solid #FCD34D;
    }

    .nico-chat-closed {
      position: absolute;
      bottom: 80px;
      right: 0;
      width: 380px;
      height: 200px;
      background: white;
      border-radius: 16px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
      display: flex;
      align-items: center;
      justify-content: center;
      animation: nicoSlideUp 0.3s ease-out;
    }

    .nico-chat-closed-content {
      text-align: center;
      padding: 24px;
    }

    .nico-chat-closed-icon {
      width: 48px;
      height: 48px;
      background: #10B981;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 16px;
    }

    .nico-chat-closed-icon svg {
      width: 24px;
      height: 24px;
      stroke: white;
    }

    .nico-chat-closed h3 {
      margin: 0 0 8px;
      color: #1F2937;
      font-size: 18px;
    }

    .nico-chat-closed p {
      margin: 0;
      color: #6B7280;
      font-size: 14px;
    }

    .nico-modal-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      animation: nicoFadeIn 0.2s ease-out;
    }

    .nico-modal {
      background: white;
      border-radius: 12px;
      width: 90%;
      max-width: 340px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      animation: nicoModalSlide 0.3s ease-out;
    }

    @keyframes nicoModalSlide {
      from {
        opacity: 0;
        transform: translateY(-20px) scale(0.95);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    .nico-modal-header {
      background: linear-gradient(135deg, ${V.primaryColor || "#a52a2a"}, ${V.finalGradient || "#d4af37"});
      color: white;
      padding: 16px;
      border-radius: 12px 12px 0 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .nico-modal-header h3 {
      margin: 0;
      font-size: 16px;
      font-weight: 600;
    }

    .nico-modal-close {
      background: transparent;
      border: none;
      color: white;
      cursor: pointer;
      padding: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.8;
      transition: opacity 0.2s;
    }

    .nico-modal-close:hover {
      opacity: 1;
    }

    .nico-modal-close svg {
      width: 20px;
      height: 20px;
    }

    .nico-modal-form {
      padding: 20px;
    }

    .nico-form-group {
      margin-bottom: 16px;
    }

    .nico-form-group label {
      display: block;
      font-size: 13px;
      font-weight: 500;
      color: #374151;
      margin-bottom: 6px;
    }

    .nico-form-group input,
    .nico-form-group textarea {
      width: 100%;
      border: 1px solid #D1D5DB;
      border-radius: 8px;
      padding: 10px 12px;
      font-size: 14px;
      font-family: inherit;
      transition: border-color 0.2s, box-shadow 0.2s;
      box-sizing: border-box;
    }

    .nico-form-group input:focus,
    .nico-form-group textarea:focus {
      outline: none;
      border-color: ${V.primaryColor || "#a52a2a"};
      box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
    }

    .nico-form-group textarea {
      resize: none;
      min-height: 80px;
    }

    .nico-input-error {
      border-color: #EF4444 !important;
    }

    .nico-input-error:focus {
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;
    }

    .nico-error-text {
      display: block;
      font-size: 12px;
      color: #EF4444;
      margin-top: 4px;
    }

    .nico-modal-actions {
      display: flex;
      gap: 12px;
      margin-top: 20px;
    }

    .nico-btn-cancel {
      flex: 1;
      padding: 10px 16px;
      border: 1px solid #D1D5DB;
      background: white;
      color: #6B7280;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
    }

    .nico-btn-cancel:hover {
      background: #F3F4F6;
      color: #374151;
    }

    .nico-btn-submit {
      flex: 1;
      padding: 10px 16px;
      border: none;
      background: ${V.primaryColor || "#a52a2a"};
      color: white;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.2s;
    }

    .nico-btn-submit:hover {
      background: #4338CA;
    }

    .nico-btn-submit:disabled {
      background: #D1D5DB;
      cursor: not-allowed;
    }

    .nico-escalation-error {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px;
      background: #FEF2F2;
      border: 1px solid #FECACA;
      border-radius: 8px;
      color: #991B1B;
      font-size: 13px;
      line-height: 1.4;
    }

    .nico-escalation-error svg {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
      stroke: #EF4444;
    }

    @media (max-width: 480px) {
      .nico-widget-container {
        bottom: 10px;
        right: 10px;
        left: 10px;
      }

      .nico-chat-window {
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
        height: 100%;
        max-height: 100vh;
        border-radius: 0;
      }

      .nico-chat-closed {
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
        height: auto;
        border-radius: 0;
      }

      .nico-modal {
        width: 95%;
        max-width: none;
        margin: 16px;
      }
    }
  `, re.appendChild(ke);
  const be = document.createElement("div");
  re.appendChild(be);
  const Pe = h0(be);
  return Pe.render(/* @__PURE__ */ X.jsx(fR, { ...V })), {
    unmount: () => Pe.unmount()
  };
};
window.NicoWidget = fR;
window.createNicoWidget = Sk;
export {
  Sk as createNicoWidget,
  fR as default
};
